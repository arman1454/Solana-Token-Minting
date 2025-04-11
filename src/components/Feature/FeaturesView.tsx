import React from 'react'
import { MdGeneratingTokens, MdToken } from 'react-icons/md'
import { RiTokenSwapFill } from 'react-icons/ri'
import { RxTokens } from 'react-icons/rx'
const FeaturesView = () => {
    return (
        <>
            <div className='lg:hidden pb-12 px-4 md:px-0'>
                <div className="flex items-center justify-center pb-12">
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 font-prata">

                        <div className="text-[25.3125px] w-32 h-32 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                            
                            <i className='absolute translate-x-2 translate-y-2'><MdGeneratingTokens/></i>
                            <svg className="w-[72px] h-[72px] translate-x-7 translate-y-7" viewBox="0 0 100 100">
                                <polygon points="6,100 100,6 100,100" className="fill-[#3a3b3cff]" />
                            </svg>
                        </div>

                        <div className="text-[25.3125px] w-32 h-32 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                            
                            <i className='absolute -translate-x-2 translate-y-2'><MdToken /></i>
                            <svg className="w-[72px] h-[72px] -translate-x-7 translate-y-7" viewBox="0 0 100 100">
                                <polygon points="0,6 0,100 94,100" className="fill-[#3a3b3cff]" />
                            </svg>
                        </div>

                        <div className="text-[25.3125px] w-32 h-32 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                            
                            <i className='absolute translate-x-2 -translate-y-2'><RiTokenSwapFill /></i>
                            <svg className="w-[72px] h-[72px] translate-x-7 -translate-y-7" viewBox="0 0 100 100">
                                <polygon points="6,0 100,0 100,94" className="fill-[#3a3b3cff]" />
                            </svg>
                        </div>

                        <div className="text-[25.3125px] w-32 h-32 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                            
                            <i className='absolute -translate-x-2 -translate-y-2'><RxTokens /></i>
                            <svg className="w-[72px] h-[72px] -translate-x-7 -translate-y-7" viewBox="0 0 100 100">
                                <polygon points="0,0 94,0 0,94" className="fill-[#3a3b3cff]" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='text-[#cfcbbf] w-1/2'>
                    <h1 className='text-start pb-2 font-prata text-[22.5px] text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text'>Token Generator</h1>
                    <p className='text-start font-raleway text-[16px]'>Use our Awesome Token Generator to Mint Your Own Tokens</p>
                </div>
                <div className='text-[#cfcbbf] w-1/2 translate-x-full'>
                    <h1 className='text-end pb-2 font-prata text-[22.5px] text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text'>Get Airdrop</h1>
                    <p className='text-end font-raleway text-[16px]'>Use our Air Drop Feature to get instant Air Drop In Fase and Secured Way</p>
                </div>
                <div className='text-[#cfcbbf] w-1/2'>
                    <h1 className='text-start pb-2 font-prata text-[22.5px] text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text'>Transfer Sol</h1>
                    <p className='text-start font-raleway text-[16px]'>Your can Transfer Your Sol To Any Account As Well As Donate Us</p>
                </div>
                <div className='text-[#cfcbbf] w-1/2 translate-x-full'>
                    <h1 className='text-end pb-2 font-prata text-[22.5px] text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text'>Token Metadata</h1>
                    <p className='text-end font-raleway text-[16px]'>Fetch Your Generated Token's Metadata in fast and efficient way</p>
                </div>
        </div>
        <div id='features' className='hidden lg:block pb-12'>
            <div className='flex items-center justify-center gap-6'>
                <div className='w-1/4 flex flex-col space-y-24'>
                    <div className='text-[#cfcbbf]'>
                            <h1 className='text-end pb-2 font-prata text-[22.5px] text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text'>Token Generator</h1>
                        <p className='text-end font-raleway text-[18px]'>Use our Awesome Token Generator to Mint Your Own Tokens</p>
                    </div>
                    <div className='text-[#cfcbbf]'>
                            <h1 className='text-end pb-2 font-prata text-[22.5px] text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text'>Transfer Sol</h1>
                        <p className='text-end font-raleway text-[18px]'>Your can Transfer Your Sol To Any Account As Well As Donate Us</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 font-prata">

                        <div className="text-[25.3125px] w-36 h-36 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                            <p className='absolute translate-x-2 translate-y-2'>1</p>
                            <svg className="w-[80px] h-[80px] translate-x-8 translate-y-8" viewBox="0 0 100 100">
                                <polygon points="5,100 100,5 100,100" className="fill-[#3a3b3cff]" />
                            </svg>
                        </div>

                        <div className="text-[25.3125px] w-36 h-36 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                            <p className='absolute -translate-x-2 translate-y-2'>2</p>
                            <svg className="w-[80px] h-[80px] -translate-x-8 translate-y-8" viewBox="0 0 100 100">
                                <polygon points="0,5 0,100 95,100" className="fill-[#3a3b3cff]" />
                            </svg>
                        </div>

                        <div className="text-[25.3125px] w-36 h-36 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                            <p className='absolute translate-x-2 -translate-y-2'>3</p>
                            <svg className="w-[80px] h-[80px] translate-x-8 -translate-y-8" viewBox="0 0 100 100">
                                <polygon points="5,0 100,0 100,95" className="fill-[#3a3b3cff]" />
                            </svg>
                        </div>

                        <div className="text-[25.3125px] w-36 h-36 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                            <p className='absolute -translate-x-2 -translate-y-2'>4</p>
                            <svg className="w-[80px] h-[80px] -translate-x-8 -translate-y-8" viewBox="0 0 100 100">
                                <polygon points="0,0 95,0 0,95" className="fill-[#3a3b3cff]" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='w-1/4 flex flex-col space-y-24'>
                    <div className='text-[#cfcbbf]'>
                            <h1 className='pb-2 font-prata text-[22.5px] text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text'>Get Airdrop</h1>
                        <p className='font-raleway text-[18px]'>Use our Air Drop Feature to get instant Air Drop In Fase and Secured Way</p>
                    </div>

                    <div className='text-[#cfcbbf]'>
                            <h1 className='pb-2 font-prata text-[22.5px] text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text'>Token Metadata</h1>
                        <p className='font-raleway text-[18px]'>Fetch Your Generated Token's Metadata in fast and efficient way</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FeaturesView
