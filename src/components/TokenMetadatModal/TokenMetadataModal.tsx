"use client";

import { useState } from "react";
import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { Metadata, PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";
import { toast } from "sonner";
import { Button, Spinner } from "@heroui/react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
// import { ClipLoader } from "react-spinners";

export const TokenMetadataModal = ({ open, onClose }) => {
    const { connection } = useConnection();
    const [tokenAddress, setTokenAddress] = useState("");
    const [tokenMetadata, setTokenMetadata] = useState(null);
    const [logo, setLogo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getMetadata = async () => {
        setIsLoading(true);
        try {
            const tokenMint = new PublicKey(tokenAddress);
            const metadataPDA = PublicKey.findProgramAddressSync(
                [Buffer.from("metadata"), PROGRAM_ID.toBuffer(), tokenMint.toBuffer()],
                PROGRAM_ID
            )[0];

            const metadataAccount = await connection.getAccountInfo(metadataPDA);
            if (!metadataAccount) {
                throw new Error("Metadata account not found");
            }

            const [metadata, _] = await Metadata.deserialize(metadataAccount.data);
            const logoRes = await fetch(metadata.data.uri);
            const logoJson = await logoRes.json();
            const { image } = logoJson;

            setTokenMetadata(metadata.data);
            setLogo(image);
            toast.success("Successfully fetched token metadata");
        } catch (error) {
            toast.error("Failed to fetch token metadata");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                {!tokenMetadata ? (
                    <>
                        <DialogHeader>
                            <DialogTitle>Fetch Token Metadata</DialogTitle>
                            <DialogDescription>
                                Enter the token address to fetch its metadata.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                            <Input
                                placeholder="Token Address"
                                value={tokenAddress}
                                onChange={(e) => setTokenAddress(e.target.value)}
                            />
                            <Button
                                onPress={getMetadata}
                                disabled={isLoading || !tokenAddress}
                                className="w-full"
                                color="primary"
                            >
                                {isLoading ? <Spinner classNames={{ label: "text-foreground mt-4" }} label="wave" variant="wave" /> : "Get Metadata"} 
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle>Token Metadata</DialogTitle>
                            <DialogDescription>
                                Here are the details of the token.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div className="flex justify-center">
                                <img src={logo} alt="Token Logo" className="h-40" />
                            </div>
                            <div className="space-y-2">
                                <Input
                                    placeholder="Token Name"
                                    value={tokenMetadata.name}
                                    readOnly
                                />
                                <Input
                                    placeholder="Token Symbol"
                                    value={tokenMetadata.symbol || "undefined"}
                                    readOnly
                                />
                                <Input
                                    placeholder="Token URI"
                                    value={tokenMetadata.uri}
                                    readOnly
                                />
                            </div>
                            <Button
                                onPress={() => window.open(tokenMetadata.uri, "_blank")}
                                className="w-full"
                            >
                                Open URI
                            </Button>
                        </div>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default TokenMetadataModal;