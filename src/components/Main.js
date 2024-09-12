import React from 'react';
import logo7 from '../assets/logo7.png';

const Main = () => {
  return (
    <div className='h-screen 2xl:w-full 2xl:px-0 2xl:ml-0 2xl:-ml-32 md:flex justify-around overflow-hidden items-center bg-custom-blue rounded-br-full'>
      
      <div className='w-full p-20 md:w-[500px] 2xl:w-[700px] md:h-full 2xl:h-[600px] md:p-14 2xl:p-20 space-y-5 2xl:space-y-8'>
        <h1 className='text-xl 2xl:text-4xl md:text-4xl font-bold text-white'>
          Empowering Moroccan Students: Your Gateway to DevOps & Cloud Mastery
        </h1>

        <p className='font-extralight text-lg text-white'>
          Join our Moroccan-led platform to explore and share knowledge in DevOps and cloud computing. Courses are available in English and Darija to support your learning journey.
        </p>
        
        <button className='px-3 bg-green-700 hover:bg-green-600 py-2 md:mb-32 rounded-full text-white'>
          Get Started Now
        </button>
      </div>

      <div className='hidden w-[300px] h-screen rounded-full md:flex items-center justify-center animate-spinGrowShrink'>
        <img src={logo7} alt="Logo" className='w-[150px] h-[300px]' />
      </div>
    </div>
  );
};

export default Main;
