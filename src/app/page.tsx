"use client"
import { AirDropModal } from "@/components/Airdrop/page";
import CreateModal from "@/components/CreateModal/CreateModal";
import { DonateModal } from "@/components/Donate/DonateModal";
import FeaturesView from "@/components/Feature/FeaturesView";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import TokenMetadataModal from "@/components/TokenMetadatModal/TokenMetadataModal";
import ToolsView from "@/components/Tools/ToolsView";
import { useState } from "react";

export default function Home() {
  const [openTokenMetadata, setOpenTokenMetadata] = useState(false)
  const [openContact, setOpenContact] = useState(false)
  const [openAirDrop, setOpenAirDrop] = useState(false)
  const [openSendTransaction, setOpenSendTransaction] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  return (
    <div className="bg-[#1b1c1d] flex flex-col items-center justify-center">
      <HeroSection setOpenCreateModal={setIsCreateModalOpen} isCreateModalOpen = {isCreateModalOpen}/>
      <FeaturesView />
      <ToolsView setOpenAirDrop={setOpenAirDrop}
        setOpenContact={setOpenContact}
        setOpenCreateModal={setIsCreateModalOpen}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetadata={setOpenTokenMetadata} />
        
      <CreateModal open={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
      <TokenMetadataModal open={openTokenMetadata} onClose={() => setOpenTokenMetadata(false)}/>
      <AirDropModal open={openAirDrop} onClose={()=>setOpenAirDrop(false)}/>     
      <DonateModal open={openSendTransaction} onClose={()=>setOpenSendTransaction(false)}/>  
   </div>
  );
}
