import React from 'react'
import {docker} from '../assets'

const Events = () => {
  return (
    <div className='container mx-auto min-h-screen space-y-16 p-10'>
     <h3 className='text-center text-menu'>SCHEDULE</h3>
     <h1 className='text-4xl font-semibold font-mono text-center '>Upcoming Events</h1>
     <div className=' container mx-auto h-[24rem] border-2 md:h-[10rem]  bg-menu flex flex-col md:flex-row rounded-2xl'>
      <div className='relative h-48 w-64 '>
        <img src={docker} className='h-48 absolute -top-5 left-7 md:left-9 rounded-2xl shadow-2xl'></img>
      </div>
      <div className=' h-[10rem] bg-cutom-blue flex flex-col md:flex-row justify-between md:pl-16 w-full items-center '>
        <div className='h-full w-full md:w-[12rem] pl-11  flex flex-col justify-evenly space-y-4 '>
          <button className='p-2 w-32 rounded-full bg-white text-custom-blue'>CI/CD</button>
          <h1 className='font-bold text-2xl'>Jenkins Tool</h1>
        </div>
       <div className='h-[9rem] bg-menu flex justify-evenly  w-full  md:w-1/2  items-center'> 
        <div className='h-full flex flex-col justify-center'>
          <h1>Date:</h1>
          <h1 className='text-lg font-semibold'>16 Feb 2024</h1>
        </div>
        <div className='h-full flex flex-col justify-center'>
          <h1>Duration:</h1>
          <h1 className='text-lg font-semibold'>16 Hours</h1>
        </div>
        </div>
        <div className='hidden md:block h-20 bg-custom-blue w-20  rounded-l-full'></div>

      </div>
     </div>


     <div className=' container mx-auto h-[24rem] border-2 md:h-[10rem]  bg-menu flex flex-col md:flex-row rounded-2xl'>
      <div className='relative h-48 w-64 '>
        <img src={docker} className='h-48 absolute -top-5 left-7 md:left-9 rounded-2xl shadow-2xl'></img>
      </div>
      <div className=' h-[10rem] bg-cutom-blue flex flex-col md:flex-row justify-between md:pl-16 w-full items-center '>
        <div className='h-full w-full md:w-[12rem] pl-11  flex flex-col justify-evenly space-y-4 '>
          <button className='p-2 w-32 rounded-full bg-white text-custom-blue'>CI/CD</button>
          <h1 className='font-bold text-2xl'>Jenkins Tool</h1>
        </div>
       <div className='h-[9rem] bg-menu flex justify-evenly  w-full  md:w-1/2  items-center'> 
        <div className='h-full flex flex-col justify-center'>
          <h1>Date:</h1>
          <h1 className='text-lg font-semibold'>16 Feb 2024</h1>
        </div>
        <div className='h-full flex flex-col justify-center'>
          <h1>Duration:</h1>
          <h1 className='text-lg font-semibold'>16 Hours</h1>
        </div>
        </div>
        <div className='hidden md:block h-20 bg-custom-blue w-20  rounded-l-full'></div>

      </div>
     </div>
  
     <div className=' container mx-auto h-[24rem] border-2 md:h-[10rem]  bg-menu flex flex-col md:flex-row rounded-2xl'>
      <div className='relative h-48 w-64 '>
        <img src={docker} className='h-48 absolute -top-5 left-7 md:left-9 rounded-2xl shadow-2xl'></img>
      </div>
      <div className=' h-[10rem] bg-cutom-blue flex flex-col md:flex-row justify-between md:pl-16 w-full items-center '>
        <div className='h-full w-full md:w-[12rem] pl-11  flex flex-col justify-evenly space-y-4 '>
          <button className='p-2 w-32 rounded-full bg-white text-custom-blue'>CI/CD</button>
          <h1 className='font-bold text-2xl'>Jenkins Tool</h1>
        </div>
       <div className='h-[9rem] bg-menu flex justify-evenly  w-full  md:w-1/2  items-center'> 
        <div className='h-full flex flex-col justify-center'>
          <h1>Date:</h1>
          <h1 className='text-lg font-semibold'>16 Feb 2024</h1>
        </div>
        <div className='h-full flex flex-col justify-center'>
          <h1>Duration:</h1>
          <h1 className='text-lg font-semibold'>16 Hours</h1>
        </div>
        </div>
        <div className='hidden md:block h-20 bg-custom-blue w-20  rounded-l-full'></div>

      </div>
     </div>
     
    </div>
  )
}

export default Events
