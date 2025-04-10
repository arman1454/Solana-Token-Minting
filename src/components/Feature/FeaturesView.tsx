import React from 'react'

const FeaturesView = () => {
    return (
        <div className='pb-12'>
            <div className='flex items-center justify-center gap-6'>
                <div className='w-1/4 flex flex-col space-y-24'>
                    <div className='text-[#cfcbbf]'>
                        <h1 className='text-end pb-2 font-prata text-[22.5px]'>Token Generator</h1>
                        <p className='text-end font-raleway text-[18px]'>Use our Awesome Token Generator to Mint Your Own Tokens</p>
                    </div>
                    <div className='text-[#cfcbbf]'>
                        <h1 className='text-end pb-2 font-prata text-[22.5px]'>Transfer Sol</h1>
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
                        <h1 className='pb-2 font-prata text-[22.5px]'>Get Airdrop</h1>
                        <p className='font-raleway text-[18px]'>Use our Air Drop Feature to get instant Air Drop In Fase and Secured Way</p>
                    </div>

                    <div className='text-[#cfcbbf]'>
                        <h1 className='pb-2 font-prata text-[22.5px]'>Token Metadata</h1>
                        <p className='font-raleway text-[18px]'>Fetch Your Generated Token's Metadata in fast and efficient way</p>
                    </div>
                </div>
            </div>
            {/* <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 grid-rows-2 gap-2">

                  <div className="w-36 h-36 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                        
                      <svg className="w-[80px] h-[80px] translate-x-8 translate-y-8" viewBox="0 0 100 100">
                          <polygon points="5,100 100,5 100,100" className="fill-[#3a3b3cff]" />
                      </svg>
                  </div>

                  <div className="w-36 h-36 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                      <svg className="w-[80px] h-[80px] -translate-x-8 translate-y-8" viewBox="0 0 100 100">
                          <polygon points="0,5 0,100 95,100" className="fill-[#3a3b3cff]" />
                      </svg>
                  </div>

                  <div className="w-36 h-36 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                      <svg className="w-[80px] h-[80px] translate-x-8 -translate-y-8" viewBox="0 0 100 100">
                          <polygon points="5,0 100,0 100,95" className="fill-[#3a3b3cff]" />
                      </svg>
                  </div>

                  <div className="w-36 h-36 bg-[#3a3b3cff] rounded-full flex items-center justify-center text-white text-xl">
                      <svg className="w-[80px] h-[80px] -translate-x-8 -translate-y-8" viewBox="0 0 100 100">
                          <polygon points="0,0 95,0 0,95" className="fill-[#3a3b3cff]" />
                      </svg>
                  </div>
              </div>
          </div> */}
        </div>
    )
}

export default FeaturesView
