"use client"
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Switch } from "@heroui/react";
import { useEffect, useState } from "react";
import { MdGeneratingTokens } from 'react-icons/md'
import "./styles.css"
import "@solana/wallet-adapter-react-ui/styles.css";
import { Label } from "../ui/label";
import { Image } from "@heroui/react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@heroui/react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

interface Hero1Props {
    setOpenCreateModal?: (value: boolean) => void;
    isCreateModalOpen: boolean;
}

const HeroSection = ({
    setOpenCreateModal,
    isCreateModalOpen
}: Hero1Props) => {
    const [isFollowed, setIsFollowed] = useState(false);
    const { connection } = useConnection();
    const { publicKey, disconnecting } = useWallet();
    const [balance, setBalance] = useState<number | null>(null);

    const fetchBalance = async () => {
        if (!publicKey) {
            setBalance(0);
            return;
        }
        try {
            const balanceInLamports = await connection.getBalance(publicKey);
            setBalance(balanceInLamports / LAMPORTS_PER_SOL);
        } catch (error) {
            console.error("Error fetching balance:", error);
            setBalance(0);
        }
    };

    useEffect(() => {
        if (disconnecting) {
            setBalance(0);
        } else if (publicKey) {
            fetchBalance();
        } else {
            setBalance(0);
        }
    }, [publicKey, connection, disconnecting]);

    return (
        <section className="py-12 lg:py-24">
            <div className="container">
                <div className="grid items-start gap-10 lg:grid-cols-3">
                    <div className="relative m-auto max-h-[200px] flex flex-row lg:hidden gap-6 overflow-hidden">
                        <div className="marquee__group flex lg:hidden flex-shrink-0 flex-row items-center justify-around gap-6">
                            {["img-9", "img-14", "img-21", "img-22", "img-10"].map((image, index) => (
                                <img
                                    key={index}
                                    src={`assets/images/ai/${image}.jpg`}
                                    alt=""
                                    className="aspect-1 h-full w-60 rounded-xl object-cover"
                                />
                            ))}
                        </div>
                        <div className="marquee__group flex lg:hidden flex-shrink-0 flex-row items-center justify-around gap-6">
                            {
                                ["img-6", "img-10", "img-11", "img-12", "img-13"].map((image, index) => (
                                    <img key={index} src={`assets/images/ai/${image}.jpg`} alt=""
                                        className="aspect-1 h-full w-60 rounded-xl object-cover"
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-2">
                        
                            <Badge>
                            ✨ Create your solana Token 0.1.0
                                <ArrowUpRight className="ml-2 size-4" />
                            </Badge>
                    
                        <h1 className="text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text mb-4 mt-2 text-pretty text-2xl font-serif font-medium lg:text-3xl">
                            Now Create Solana Token without Code
                        </h1>
                        <p className="pt-2 font-prata mb-8 max-w-xl lg:text-xl text-[#cfcbbf]">
                            Launch your solana token, All in one solana token development and deployment
                        </p>

                        <div className="pt-4 relative md:left-3 flex items-center space-x-2">
                            <Label className="font-prata text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-[23.75px] font-semibold">Create</Label>
                            <Switch isSelected={isCreateModalOpen} onValueChange={setOpenCreateModal} size="lg"
                                thumbIcon={({ isSelected, className }) =>
                                    <MdGeneratingTokens className="text-indigo-500" />
                                } />
                        </div>




                    </div>
                    <div className="lg:ml-4 flex flex-col items-center space-y-12 px-0 md:px-20 lg:px-0">
                        <Card className="border-1 border-[#f2e782ff] space-y-5 w-full shadow-sm bg-inherit rounded-md">
                            <CardHeader className="justify-between">
                                <div className="flex gap-2">
                                    <Avatar
                                        radius="full"
                                        size="md"
                                        src="https://heroui.com/avatars/avatar-1.png"
                                    />
                                    <div className="flex flex-col gap-1 items-start justify-center">
                                        <h4 className="text-small font-semibold leading-none text-default-600">Recently Minted</h4>
                                        <h5 className="text-small tracking-tight text-default-400">ARM</h5>
                                    </div>
                                </div>
                               
                            </CardHeader>
                            <CardBody className="flex items-center px-3 py-0 text-md text-bold">
                                <p className="font-prata mb-4 flex text-[23.75px] font-semibold text-[#cfcbbf]">
                                    Balance : {balance !== null ? `${balance.toLocaleString()} SOL` : "0 SOL"}
                                </p>
                                
                            </CardBody>
                            <CardFooter className="gap-28 md:gap-64 lg:gap-20">
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-small">Total Minted :</p>
                                    <p className="text-default-400 text-small">{publicKey ? 12 : 0}</p>
                                </div>
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-small">Account : </p>
                                    <p className="text-default-400 text-small">
                                        {publicKey ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}` : "????.....????"}
                                    </p>
                                </div>
                                
                            </CardFooter>
                        </Card>
                        <WalletMultiButton className="!bg-helius-orange !rounded-xl hover:!bg-[#161b19] transition-all duration-200" />
                    </div>

                    <div className="relative m-auto max-h-[300px] flex flex-row lg:flex-col gap-6 overflow-hidden">
                        <div className="marquee-hero hidden lg:flex flex-shrink-0 flex-col items-center justify-around gap-6">
                            {
                                ["img-9", "img-14", "img-21", "img-22", "img-10"].map((image, index) => (
                                    <img key={index} src={`assets/images/ai/${image}.jpg`} alt=""
                                        className="aspect-1 h-full w-60 rounded-xl object-cover"
                                    />
                                ))
                            }
                        </div>
    


                        <div className="marquee-hero hidden lg:flex flex-shrink-0 flex-col items-center justify-around gap-6">
                            
                            {
                                ["img-6", "img-10", "img-11", "img-12", "img-13"].map((image, index) => (
                                    <img key={index} src={`assets/images/ai/${image}.jpg`} alt=""
                                        className="aspect-1 h-full w-60 rounded-xl object-cover"
                                    />
                                ))
                            }
                        </div>



                    </div>
                    {/* <div className="pt-3 hidden lg:block">
                    <Image
                        isZoomed
                        alt="HeroUI Fruit Image with Zoom"
                        src="https://heroui.com/images/fruit-1.jpeg"
                        width="full"
                        height="full"
                        className="rounded-full"
                    />
                    </div>              */}

                    <div className="relative right-7 m-auto w-full lg:w-[850px] flex-row gap-6 overflow-hidden mt-8 hidden lg:flex">

                        
                        <div className="marquee__group hidden lg:flex flex-shrink-0 flex-row items-center justify-around gap-6">
                            {
                                ["img-9", "img-14", "img-21", "img-22", "img-10"].map((image, index) => (
                                    <img key={index} src={`assets/images/ai/${image}.jpg`} alt=""
                                        className="aspect-1 h-full w-60 rounded-xl object-cover"
                                    />
                                ))
                            }
                        </div>

                        

                        <div className="marquee__group hidden lg:flex flex-shrink-0 flex-row items-center justify-around gap-6">
                            {
                                ["img-6", "img-10", "img-11", "img-12", "img-13"].map((image, index) => (
                                    <img key={index} src={`assets/images/ai/${image}.jpg`} alt=""
                                        className="aspect-1 h-full w-60 rounded-xl object-cover"
                                    />
                                ))
                            }
                        </div>

                    </div>




                </div>
            </div>
        </section>
    );
};

export { HeroSection };