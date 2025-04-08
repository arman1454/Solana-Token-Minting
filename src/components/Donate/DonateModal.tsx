import React, { FC, useEffect, useState, useCallback } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, TransactionSignature, PublicKey, Transaction, SystemProgram } from '@solana/web3.js'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button, addToast } from "@heroui/react";

export const DonateModal: FC<{ open: boolean; onClose: (open: boolean) => void }> = ({ open, onClose }) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = useState("0.0");
  const [balance, setBalance] = useState<number | null>(null);

  /** Fetch wallet balance dynamically */
  const fetchBalance = useCallback(async () => {
    if (!publicKey) return;
    try {
      const balanceInLamports = await connection.getBalance(publicKey);
      setBalance(balanceInLamports / LAMPORTS_PER_SOL);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  }, [publicKey, connection]);

  // Fetch balance when modal opens
  useEffect(() => {
    if (open && publicKey) {
      fetchBalance();
    }
  }, [open, publicKey, fetchBalance]);

  const donate = useCallback(async () => {
    if (!publicKey) {
      addToast({ title: "Error", description: "Wallet not connected" });
      return;
    }

    const creatorAddress = new PublicKey("9K8L7yK4yM2Ug6RWtAF8zgxBSZpY5bUWDLSZn2dsynGG");

    try {
      // Get latest blockhash for transaction confirmation
      const latestBlockhash = await connection.getLatestBlockhash();

      // Create the transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: creatorAddress,
          lamports: LAMPORTS_PER_SOL * Number(amount),
        })
      );

      // Send transaction
      const signature = await sendTransaction(transaction, connection);

      // Confirm transaction using the new recommended method
      await connection.confirmTransaction(
        { signature, ...latestBlockhash },
        "finalized"
      );

      // Update balance after successful transaction
      await fetchBalance();

      addToast({ title: "Success", description: "Donation successful!" });
    } catch (error) {
      console.error("Transaction error:", error);
      addToast({ title: "Error", description: "Transaction failed. Please try again." });
    }
  }, [publicKey, amount, sendTransaction, connection, fetchBalance]);


  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] purple-dark border-none">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className='pb-2 text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text'>Balance : {balance !== null ? `${balance.toLocaleString()} SOL` : "Fetching..."}</DialogTitle>
          <DialogDescription className='text-[#cfcbbf] '>You can donate to support our tools!</DialogDescription>
          <div className="flex items-center justify-center bg-inherit">
            <img src="assets/images/logout.svg" alt="" className="h-40" />
          </div>
        </DialogHeader>
        <div className="px-8 flex flex-col items-start">
          <Label htmlFor="donateAmount" className="pl-1 pb-4 text-[#cfcbbf] font-prata">Donate Amount (SOL)</Label>
          <Input id="donateAmount" className="col-span-3 text-[#cfcbbf] bg-[#555] border-none placeholder:text-background placeholder:font-semibold ring-offset-[#C4A44D]" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
        </div>
        <DialogFooter className='px-14 pt-4'>
          <Button onPress={donate} className="w-full bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] text-background font-sans font-medium">Donate</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
