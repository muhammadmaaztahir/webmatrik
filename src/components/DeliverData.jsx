import React from 'react'
import topDeveloperBadge from '../assets/topDeveloperBadge.png'

const DeliverData = () => {
  return (
    <div className="container mx-auto px-4 mt-4 mb-28 text-start">
      <div className="flex lg:flex-row flex-col gap-8 md:gap-12">
        <div className="w-full md:w-1/3">
          <div className="relative">
            <img
              src={topDeveloperBadge}
              alt="TopDevelopers Badge"
              className="w-full max-w-[400px] mx-auto"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-purple-500 lg:text-lg mb-4 text-[14px]">
            Tailored solution & proven strategies makes the difference at Webmatrik!
          </p>
          <h1 className="lg:text-5xl font-bold mb-6 text-2xl">
            How We Deliver{' '}
            <span className="text-blue-500">Data Driven Results</span>?
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            We follow work mechanism that significantly relies on research, innovation & effective
            approaches to deliver the committed results. Equipped with years of experience and
            technological aspects we cater our clients with customer centric approach, potential leads &
            promising consumer ratio.
          </p>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold italic text-[#0E2E67] leading-tight">
              Get The <span className="text-[#FD7E14]">Perfect Strategy</span>{' '}
              For Your Business!
            </h2>
            <p className="text-xl md:text-3xl mt-2 italic font-bold">
              Call us at <span className="font-bold text-[#333136] "><span className='text-[#FD7E14]'>+</span>971<span className='text-[#FD7E14]'>-</span>50<span className='text-[#FD7E14]'>-</span>985<span className='text-[#FD7E14]'>-</span>0927</span>
            </p>
          </div>
          <button className="rounded-2xl bg-gradient-to-b from-[#3B98F7] to-[#2868F0]  hover:rounded-full text-white font-medium lg:text-[22px] py-3 transition ease-in-out outline-none">
            Reach Out To Us Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeliverData

