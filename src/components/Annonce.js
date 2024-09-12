import React from 'react'

const Annonce = () => {
  return (
    <div className='container min-h-64 border flex-col flex md:flex-row space-y-7 md:space-y-0 justify-evenly items-center mt-20 md:mt-36 2xl:mt-16 md:w-[90%] bg-custom-blue rounded-r-full'>
      
<div>
<h1 className='  text-5xl md:text-7xl font-bold text-white'>9+ </h1>
<p className='font-semibold text-white text-lg'>mini-blogs</p>
  </div>

  <div>
  <h1 className='text-5xl md:text-7xl font-bold text-white'>10+ </h1>
<p className='font-semibold text-white text-lg'>categories</p>
  </div>
  <div>
<h1 className='text-5xl md:text-7xl font-bold text-white'>10+ </h1>
<p className='font-semibold text-white text-lg'>small projects</p>
  </div>
       
      
    </div>
  )
}

export default Annonce
