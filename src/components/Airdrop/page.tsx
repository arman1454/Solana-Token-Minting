"use client";

import { useState, useEffect, useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, TransactionSignature } from "@solana/web3.js";
import { toast } from "sonner";
import { Button, Spinner } from "@heroui/react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import useUserSOLBalanceStore from "@/stores/useUserSOLBalanceStore";

interface AirDropModalProps {
    open: boolean;
    onClose: () => void;
}

export const AirDropModal = ({ open, onClose }:AirDropModalProps) => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const balance = useUserSOLBalanceStore((s) => s.balance);
    const { getUserSOLBalance } = useUserSOLBalanceStore();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (publicKey) {
            getUserSOLBalance(publicKey, connection);
        }
    }, [publicKey, connection, getUserSOLBalance]);

    const onClick = useCallback(async () => {
        if (!publicKey) {
            toast.error("Wallet not connected");
            return;
        }

        let signature: TransactionSignature = "";

        try {
            setIsLoading(true);
            signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
            toast.success("You have successfully claimed 1 Airdrop", {
                description: `Transaction ID: ${signature}`,
            });

            const latestBlockHash = await connection.getLatestBlockhash();
            await connection.confirmTransaction({
                blockhash: latestBlockHash.blockhash,
                lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
                signature,
            });

            getUserSOLBalance(publicKey, connection);
        } catch (error: any) {
            toast.error("Airdrop failed", {
                description: error?.message,
            });
        } finally {
            setIsLoading(false);
        }
    }, [publicKey, connection, getUserSOLBalance]);

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Claim Airdrop</DialogTitle>
                    <DialogDescription>
                        Claim 1 SOL to test and create tokens on our platform.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    {publicKey && (
                        <p className="text-center text-lg font-bold">
                            SOL Balance: {balance.toLocaleString()}
                        </p>
                    )}
                    <div className="flex justify-center">
                        <img
                            src="assets/images/logout.svg"
                            alt="Airdrop"
                            className="h-40"
                        />
                    </div>
                    <Button
                        onPress={onClick}
                        disabled={!publicKey || isLoading}
                        className="w-full"
                    >
                        {isLoading ? (
                            <Spinner classNames={{ label: "text-foreground mt-4" }} label="wave" variant="wave" />
                        ) : (
                            "Airdrop 1 SOL"
                        )}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AirDropModal;