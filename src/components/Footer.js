import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='container mx-auto flex justify-around min-h-[9rem] bg-custom-blue rounded-t-3xl md:rounded-t-full'>
      <div className='w-[25%] min-h-full flex flex-col justify-center md:space-y-4 p-7'>
        <h1 className='text-xl font-bold text-white'>SkyOps.</h1>
        <p className='text-slate-300 font-semibold'>Bridging the gap between Devops and Students.</p>
      </div>
      <div className='w-[25%] min-h-full flex justify-center items-center md:items-end'>
        <p className='text-slate-300 font-extralight mb-5'>&copy; 2024 SkyOps. All rights reserved.</p>
      </div>

      <div className='w-[25%] min-h-full flex  flex-col pr-10 md:pr-0 justify-center space-y-5 items-center'>
      <div className='w-[25%]  flex flex-col md:flex-row justify-center space-y-5  md:space-y-0 md:space-x-5 items-center'>
      <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='text-blue-900'>
              <FaLinkedin size={20} />
            </a>
            <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='text-black'>
              <FaGithub size={20} />
            </a>
            <a href='mailto:amine@example.com' className='text-red-600'>
              <BiLogoGmail size={20} />
            </a>
      </div>
      <div className='mr-5'>
        <p className='text-slate-300 font-semibold'>skyops@gmail.com</p>
      </div>
      </div>

      
    </div>
  )
}

export default Footer
