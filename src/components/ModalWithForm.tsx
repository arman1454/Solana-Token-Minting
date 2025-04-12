"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@heroui/react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import {
    MINT_SIZE,
    TOKEN_PROGRAM_ID,
    createInitializeMintInstruction,
    getMinimumBalanceForRentExemptMint,
    getAssociatedTokenAddress,
    createMintToInstruction,
    createAssociatedTokenAccountInstruction,
} from "@solana/spl-token";
import { PROGRAM_ID, createCreateMetadataAccountV3Instruction } from "@metaplex-foundation/mpl-token-metadata";
import axios from "axios";
// import { ClipLoader } from "react-spinners";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Token name must be at least 2 characters." }),
    symbol: z.string().min(1, { message: "Symbol is required." }).max(5, { message: "Symbol cannot exceed 5 characters." }),
    decimals: z.coerce.number().int().min(1, { message: "Please fill in the field." }).max(18, { message: "Decimals cannot exceed 18." }),
    amount: z.coerce.number().min(1, { message: "Amount must be at least 1." }),
    picture: z.instanceof(File, { message: "An image file is required." }),
    description: z.string().min(10, { message: "Description must be at least 10 characters." }),
});

const ModalWithForm = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [isLoading, setIsLoading] = useState(false);
    const [tokenMintAddress, setTokenMintAddress] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            symbol: "",
            decimals: 0,
            amount: 1,
            picture: undefined,
            description: "",
        },
    });

    const uploadImagePinata = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            headers: {
                pinata_api_key: "c49f8d981b609ddacd45",
                pinata_secret_api_key: "b03e8d294fa8a07f26e8a04680f51f1660ba468a66b10e36163214791c241bc8",
                "Content-Type": "multipart/form-data",
            },
        });
        return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
    };

    const uploadMetadata = async (token: z.infer<typeof formSchema>) => {
        const { name, symbol, description, picture } = token;
        const imgUrl = await uploadImagePinata(picture);
        const data = JSON.stringify({
            name,
            symbol,
            description,
            image: imgUrl,
        });
        const response = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", data, {
            headers: {
                pinata_api_key: "c49f8d981b609ddacd45",
                pinata_secret_api_key: "b03e8d294fa8a07f26e8a04680f51f1660ba468a66b10e36163214791c241bc8",
                "Content-Type": "application/json",
            },
        });
        return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
    };

    const createToken = async (token: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        try {
            if (!publicKey) {
                toast.error("Wallet not connected");
                return;
            }

            const lamports = await getMinimumBalanceForRentExemptMint(connection);
            const mintKeypair = Keypair.generate();
            const tokenAtA = await getAssociatedTokenAddress(mintKeypair.publicKey, publicKey);
            const metadataUrl = await uploadMetadata(token);

            const createMetadataInstruction = createCreateMetadataAccountV3Instruction(
                {
                    metadata: PublicKey.findProgramAddressSync(
                        [Buffer.from("metadata"), PROGRAM_ID.toBuffer(), mintKeypair.publicKey.toBuffer()],
                        PROGRAM_ID
                    )[0],
                    mint: mintKeypair.publicKey,
                    mintAuthority: publicKey,
                    payer: publicKey,
                    updateAuthority: publicKey,
                },
                {
                    createMetadataAccountArgsV3: {
                        data: {
                            name: token.name,
                            symbol: token.symbol,
                            uri: metadataUrl,
                            creators: null,
                            sellerFeeBasisPoints: 0,
                            uses: null,
                            collection: null,
                        },
                        isMutable: false,
                        collectionDetails: null,
                    },
                }
            );

            const createNewTokenTransaction = new Transaction().add(
                SystemProgram.createAccount({
                    fromPubkey: publicKey,
                    newAccountPubkey: mintKeypair.publicKey,
                    space: MINT_SIZE,
                    lamports,
                    programId: TOKEN_PROGRAM_ID,
                }),
                createInitializeMintInstruction(mintKeypair.publicKey, Number(token.decimals), publicKey, publicKey, TOKEN_PROGRAM_ID),
                createAssociatedTokenAccountInstruction(publicKey, tokenAtA, publicKey, mintKeypair.publicKey),
                createMintToInstruction(mintKeypair.publicKey, tokenAtA, publicKey, Number(token.amount) * Math.pow(10, Number(token.decimals))),
                createMetadataInstruction
            );

            const signature = await sendTransaction(createNewTokenTransaction, connection, {
                signers: [mintKeypair],
            });
            setTokenMintAddress(mintKeypair.publicKey.toString());
            console.log(`Token: ${token.name} (${token.symbol})`, signature);
            
            toast.success("Token created successfully!", {
                description: `Token: ${token.name} (${token.symbol})`,
            });
        } catch (error) {
            toast.error("Token creation failed");
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        await createToken(data);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button color="primary">Create Solana Token</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Token Details</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Token Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="symbol"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Symbol</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Symbol" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="decimals"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Decimals</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Decimals" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Amount</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Supply" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="picture"
                            render={({ field: { onChange, value, ...rest } }) => (
                                <FormItem>
                                    <FormLabel>Upload Token Image</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                onChange(file || undefined);
                                            }}
                                            {...rest}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-1/2" color="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default ModalWithForm;