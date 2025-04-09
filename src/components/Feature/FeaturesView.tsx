import React from 'react'

const FeaturesView = () => {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center">
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
          </div>
          </div>
  )
}

export default FeaturesView
