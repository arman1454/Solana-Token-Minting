import React, { FC } from 'react'
import { MdGeneratingTokens } from 'react-icons/md'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { LuArrowRightFromLine } from 'react-icons/lu'
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'
// import { Button } from '../ui/button'
import { Button } from "@heroui/react";

interface ToolsViewProps {
    setOpenAirDrop: (isOpen: boolean) => void;
    setOpenContact: (isOpen: boolean) => void;
    setOpenCreateModal: (isOpen: boolean) => void;
    setOpenSendTransaction: (isOpen: boolean) => void;
    setOpenTokenMetadata: (isOpen: boolean) => void;
}

const ToolsView: FC<ToolsViewProps> = ({ 
    setOpenAirDrop,
    setOpenContact,
    setOpenCreateModal,
    setOpenSendTransaction,
    setOpenTokenMetadata 
}) => {
    const tools = [
        {
            name: "Airdrop",
            icon: <MdGeneratingTokens />,
            function: setOpenAirDrop
        },
        {
            name: "Contact Us",
            icon: <MdGeneratingTokens />,
            function: setOpenContact
        },
        {
            name: "Create Token",
            icon: <MdGeneratingTokens />,
            function: setOpenCreateModal
        },
        {
            name: "Send Transaction",
            icon: <MdGeneratingTokens />,
            function: setOpenSendTransaction
        },
        {
            name: "Token Metadata",
            icon: <MdGeneratingTokens />,
            function: setOpenTokenMetadata
        },
        {
            name: "Buddy Token",
            icon: <MdGeneratingTokens />,
            function: setOpenSendTransaction
        },
        {
            name: "Top Tokens",
            icon: <MdGeneratingTokens />,
            function: setOpenSendTransaction
        },
        {
            name: "Solana Explorer",
            icon: <MdGeneratingTokens />,
            function: setOpenSendTransaction
        },

    ]

  return (
    <section className='pb-12'>
        <div className='container'>
              <div className='mb-12 flex items-end justify-between'>
                  <div className='mx-auto max-w-2xl text-center'>
                      <h1 className="text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text mb-4 mt-2 text-pretty text-2xl font-serif font-medium lg:text-3xl">
                          Solana Powerfull Tools
                      </h1>

                      <p className='p-2 font-prata max-w-xl lg:text-xl text-[#cfcbbf]'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum recusandae laborum quidem sit quis fugit officiis magni corrupti velit rem delectus debitis, obcaecati error neque quia natus porro laudantium cumque?
                      </p>
                  </div>
              </div>

              <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                {
                    tools.map((tool,index)=>(
                        <Card key={index} className='bg-[#535455ff] border-none'>
                            <CardHeader className='flex flex-row items-center gap-4'>
                                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 ${index == 0 ? "text-red-500" : index == 1 ? "text-sky-500" : index == 2 ? "text-indigo-500" : index == 3 ? "text-yellow-500" : "text-teal-500"}`}>
                                    <i data-lucide="dribble" className=''>{tool.icon}</i>
                                </div>
                                <h3 className='text-[#cfcbbf] font-serif text-xl font-medium'>{tool.name}</h3>
                            </CardHeader>
                            <CardFooter className='flex flex-col items-start'>
                                <a className='text-primary group relative inline-flex items-center gap-1'>
                                    <span className='bg-[#cfcbbf] absolute left-1 -bottom-2 h-px w-4/5 rounded transition-all duration-500 group-hover:w-full'>
                                    </span>
                                    <Button onPress={() => tool.function(true)} className='bg-[#1b1c1d] font-sans font-medium text-[#cfcbbf] rounded-md'>{tool.name}</Button>
                                    <i data-lucide={"move-right"}>
                                        <LuArrowRightFromLine/>
                                    </i>
                                </a>
                            </CardFooter>
                        </Card>
                    ))
                }
              </div>
        </div>
    </section>
  )
}

export default ToolsView
