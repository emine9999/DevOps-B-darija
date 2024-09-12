import React, { useState } from 'react'
import pic1 from "../assets/pic1.jpeg"
import pic6 from "../assets/pic6.jpeg"
import pic7 from "../assets/pic7.jpeg"
import pic2 from "../assets/pic2.jpeg"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Main = () => {
    const images = [
        pic1,
        pic6,
        pic7,
        pic2,
      ];
      const [currentIndex,setCurrentIndex] = useState(0);
      const handleNext=()=>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };

return (
    <div className='relative flex justify-center  md:w-2/3  h-[90vh]  mt-7 2xl:mt-14 bg-custom-blue   rounded-br-full '>
      <div className='overflow-hidden '>
        <div className='absolute top-24  left-[17%] w-2/3 md:top-10 2xl:top-28 md:w-5/6 xl:w-1/3 h-[500px]   space-y-6 md:space-y-3 2xl:space-y-10'>
            <h1 className='text-xl 2xl:text-4xl md:text-2xl font-bold text-white'>Empowering Moroccan Students: Your Gateway to DevOps & Cloud Mastery</h1>
            <p className='font-extralight  text-lg text-white'> Join our Moroccan-led platform to explore and share knowledge in DevOps and cloud computing. Courses are available in English and Darija to support your learning journey
            </p>
            <button className='px-3 bg-green-700 hover:bg-green-600 py-2  md:mb-32 rounded-full text-white'>Get Started Now</button>
        </div>
       <div className='w-full '>
       <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className='w-full 2xl:w-[900px] md:w-[600px] h-[70vh] mt-10 md:mt-5 rounded-3xl shadow-inner object-cover'
        />
       </div>
        
      </div>

      {/* Previous button */}
      <button
        onClick={handlePrev}
        className='absolute left-[33%] top-[600px] md:left-[60%] md:top-[340px] 2xl:left-[40%] 2xl:top-[630px] transform -translate-y-1/2 bg-amber-100 text-black  md:px-3 rounded-full hover:bg-gray-700'
      >
        <FaArrowLeft className="text-3xl" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className='absolute right-[27%] top-[600px] md:right-[20%] md:top-[340px] 2xl:right-[40%] 2xl:top-[630px] transform -translate-y-1/2 bg-amber-100 text-black md:px-3 rounded-full hover:bg-gray-700'
      >
        <FaArrowRight className="text-3xl" />
      </button>

      {/* Dots indicator */}
      <div className='absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2'>
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Main
