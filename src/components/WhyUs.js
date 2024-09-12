import React from 'react'
import Span from '../components/Span'

const WhyUs = () => {
  return (
    <div className='container 2xl:ml-[360px]  min-h-screen flex items-center'>
  <div className='relative h-[400px] md:h-[340px] w-full 2xl:h-[540px] flex justify-end  border-l-4 bg-menu rounded-l-full'>

    
    <Span/>

    <div className=' h-[340px] w-[310px] p-6 md:h-[340px] md:w-[600px] 2xl:h-[540px] 2xl:w-[800px] space-y-2 md:space-y-5   text-white md:p-10 2xl:p-20 z-40'>
      <h3 className='text-xl 2xl:text-2xl font-bold text-custom-blue'>About Us</h3>
      <h1 className='text-3xl 2xl:text-5xl font-semibold text-black'>What makes us the best academy online?</h1>
      <p className='font-extralight text-slate-800'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo.
      </p>
      <button className='px-4 py-2  bg-white text-custom-blue hover:bg-custom-blue hover:text-white rounded-full'>Discover More</button>
    </div>

  </div>
</div>

  )
}

export default WhyUs
