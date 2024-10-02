import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div> 
      <div className='flex justify-center mb-28 text-sm flex-col md:flex-row gap-10 my-10'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center gap-6 item-start'>
            <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
            <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
            <p className='text-gray-500'>Tel: (415) 555‑0132 <br/> Email: greatstackdev@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='w-fit border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
