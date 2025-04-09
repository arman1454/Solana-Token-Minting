"use client"
import React, { useState, useEffect } from 'react'
import { useForm } from '@formspree/react';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const Footer = () => {
  const [state, handleSubmit] = useForm("mqapgoka");
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const menuOne = ["Support Center", "Customer Support", "About Us", "Project", "Return Policy"]
  const menuTwo = ["Press Inquiries", "Social Media Support", "Image & B-roll", "Site map"]

  useEffect(() => {
    if (state.succeeded) {
      setShowThankYouModal(true);
    }
  }, [state.succeeded]);

  return (
    <footer className='bg-[#a79255] backdrop-blur-3xl'>
      <Dialog open={showThankYouModal} onOpenChange={setShowThankYouModal}>
        <DialogContent className="sm:max-w-md bg-default-950/60 border border-white/10 backdrop-blur-3xl text-white">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-prata">Thank You!</DialogTitle>
            <DialogDescription className="text-center text-default-200 font-prata">
              Thanks for subscribing to our newsletter. We'll keep you updated with the latest news.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      
      <div className='container py-20 lg:px-20'>
        <div className='grid grid-cols-2 gap-10 lg:grid-cols-12 lg:gap-16'>
          <div className='col-span-2 sm:col-span-1 lg:col-span-3'>
            <ul className='flex flex-col gap-3'>
              <h5 className='text-[#1b1c1d] mb-2 lg:text-2xl font-prata'>
                About Us
              </h5>
              {
                menuOne.map((item, index) => (
                  <li key={index}>
                    <a href="#" className='text-[#1b1c1d] text-xl transition-all hover:text-[#cfcbbf] font-prata'>
                      <i data-lucide="gauge-circle" className='me-2 inline-block h-4 w-4'>

                      </i>
                      {item}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='col-span-2 sm:col-span-1 lg:col-span-3'>
            <ul className='flex flex-col gap-3'>
              <h5 className='text-[#1b1c1d] mb-2 lg:text-2xl font-prata'>
                My Account
              </h5>
              {
                menuTwo.map((item, index) => (
                  <li key={index}>
                    <a href="#" className='text-[#1b1c1d] text-xl transition-all hover:text-[#cfcbbf] font-prata'>
                      <i data-lucide="gauge-circle" className='me-2 inline-block h-4 w-4'>

                      </i>
                      {item}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='col-span-2 lg:col-span-6'>
            <div className='bg-[#1b1c1d] rounded-xl'>
              <div className='p-10'>
                <h6 className='mb-4 text-xl text-white font-prata'></h6>
                <p className='text-[#cfcbbf] mb-6 text-xl font-medium font-prata'>
                  Signup and received the latest tips
                </p>

                <form onSubmit={handleSubmit} className='mb-6 space-y-2'>
                  <label htmlFor='email' className='text-lg text-[#cfcbbf] font-prata'>
                    Email
                  </label>
                  <div className='relative'>
                    <input type="email" id='email'
                      name='email' className='bg-[#535455ff] pe-40 ps-4 h-12 w-full rounded-lg border-white/10 py-4 text-white
                    backdrop-blur-3xl focus:border-white/10 focus:ring-0'
                    />
                    <button type='submit' disabled={state.submitting} className='hover:bg-primary-hover hover:border-primary-hover
                    bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] text-[#1b1c1d] font-prata font-medium end-[6px] absolute top-[6px] inline-flex h-9 items-center justify-center gap-2 rounded-md
                    px-6 transition-all'>
                      Subscribe
                    </button>
                  </div>
                </form>
                <div>
                  <h6 className='mb-4 text-lg text-[#cfcbbf] font-prata'>Follow Us</h6>
                  <ul className='flex flex-wrap items-center gap-1'>
                    {[<TiSocialFacebook />, <TiSocialLinkedin />, <TiSocialTwitter />, <TiSocialYoutube />].map((social, index) => (
                      <li key={index}>
                        <a href="#" className='hover:bg-[#535455ff] group inline-flex h-10 w-10 items-center justify-center rounded-lg border
                        border-white/10 transition-all duration-500'>
                          <i data-lucide="facebook" className='text-default-300 group-hover:text-white'>
                            {social}
                          </i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-[#1b1c1d] py-6'>
        <div className='md:text-start container flex h-full flex-wrap items-center justify-center gap-4 text-center
        md:justify-between lg:px-20'>
          <p className='text-[#1b1c1d] text-base font-medium font-prata'>
            @ SolanaAI -
            <a href="#" className="font-prata">
              Design & Created <i data-lucide="heart" className='inline h-4 w-4 fill-red-500 text-red-500'>
              </i>
              by @theblockchaincoders
            </a>
          </p>
          <p className='text-[#1b1c1d] text-base font-medium font-prata'>
            Terms Conditions & Policy
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer