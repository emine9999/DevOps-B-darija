import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { amine,saida } from '../assets'


const Team = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-bold text-center text-5xl font-mono m-20 md:m-10 2xl:m-16'> Meet The Team</h1>
    <div className='container mx-auto flex flex-wrap  justify-evenly items-center min-h-screen md:min-h-[70vh]'>
      
      <div className='relative w-72 h-auto bg-slate-300 rounded-3xl p-6  shadow-lg hover:text-custom-blue'>
        <img 
          src={amine} 
          alt="Amine ElHasbi"
          className='absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full border-4 border-white'
        />
        <div className='pt-20 text-center space-y-4'>
          <h3 className='text-gray-700 font-semibold'>Devops Engineer Student</h3>
          <h1 className='text-2xl font-bold'>Amine ElHasbi</h1>
          <div className='flex justify-center space-x-4 mt-4'>
            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='text-blue-600'>
              <FaLinkedin size={30} />
            </a>
            <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='text-black'>
              <FaGithub size={30} />
            </a>
            <a href='mailto:amine@example.com' className='text-red-600'>
              <BiLogoGmail size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className='relative w-72 h-auto bg-slate-300 rounded-3xl p-6 shadow-lg hover:text-custom-blue'>
        <img 
          src={saida} 
          alt="Amine ElHasbi"
          className='absolute -top-20 left-1/2  transform -translate-x-1/2 w-40 h-40 rounded-full border-4 border-white'
        />
        <div className='pt-20 text-center space-y-4'>
          <h3 className='text-gray-700 font-semibold'>DevopsEngineer Student</h3>
          <h1 className='text-2xl font-bold'>Saida Hnais</h1>
          <div className='flex justify-center space-x-4 mt-4'>
            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='text-blue-600'>
              <FaLinkedin size={30} />
            </a>
            <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='text-black'>
              <FaGithub size={30} />
            </a>
            <a href='mailto:amine@example.com' className='text-red-600'>
              <BiLogoGmail size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>

    
    </div>
  )
}

export default Team
