import React from 'react'
import { FaBook, FaChalkboardTeacher, FaBookReader  } from 'react-icons/fa';


const Cards = () => {
  return (
    
  <div className=' h-auto  flex flex-col  md:flex-row justify-center items-center md:justify-around  container space-y-12  mx-auto'> 
    
    <div className='relative bg-menu mt-12  p-5 space-y-6 w-[270px] h-[270px] 2xl:w-[300px] 2xl:h-[300px] rounded-xl shadow-inner flex flex-col items-start justify-center'>
  <h1 className='text-2xl font-bold'>Online Degrees</h1>
  <p>Whenever you need free templates in HTML CSS, you just remember TemplateMo website.</p>
  <button className='py-3 px-4 text-custom-blue rounded-full bg-slate-200 hover:text-white hover:bg-custom-blue'>Read More</button>
  <div className='w-32 h-32 2xl:w-40 2xl:h-40 rounded-full absolute flex justify-center items-center -bottom-10 -right-10 bg-black'><FaBook  className='text-5xl 2xl:text-7xl text-white'/></div>
</div> 
   

<div className='relative bg-menu  p-5 space-y-6 w-[270px] h-[270px] 2xl:w-[300px] 2xl:h-[300px] rounded-xl shadow-inner flex flex-col items-start justify-center'>
  <h1 className='text-2xl font-bold'>Online Degrees</h1>
  <p>Whenever you need free templates in HTML CSS, you just remember TemplateMo website.</p>
  <button className='py-3 px-4 text-custom-blue rounded-full bg-slate-200 hover:text-white hover:bg-custom-blue'>Read More</button>
  <div className='w-32 h-32 2xl:w-40 2xl:h-40 rounded-full absolute flex justify-center items-center -bottom-10 -right-10 bg-black'><FaChalkboardTeacher  className='text-5xl 2xl:text-7xl text-white'/></div>
</div>  

<div className='relative bg-menu  p-5 space-y-6 w-[270px] h-[270px] 2xl:w-[300px] 2xl:h-[300px] rounded-xl shadow-inner flex flex-col items-start justify-center'>
  <h1 className='text-2xl font-bold'>Online Degrees</h1>
  <p>Whenever you need free templates in HTML CSS, you just remember TemplateMo website.</p>
  <button className='py-3 px-4 text-custom-blue rounded-full bg-slate-200 hover:text-white hover:bg-custom-blue'>Read More</button>
  <div className='w-32 h-32 2xl:w-40 2xl:h-40 rounded-full absolute flex justify-center items-center -bottom-10 -right-10 bg-black'><FaBookReader  className='text-5xl 2xl:text-7xl text-white'/></div>
</div> 

  </div>
   
  )
}

export default Cards
