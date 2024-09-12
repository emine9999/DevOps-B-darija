import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className=' h-24 w-full  text-gray-200 bg-custom-blue flex items-center shadow-2xl md:justify-evenly justify-between '>
            <div className='text-3xl md:text-4xl font-bold text-white border-r-2 px-5 -mr-48'>SkyOps</div>

            
            <input
                placeholder='Search'
                className='hidden md:block p-2 md:ml-40 rounded-full bg-menu text-slate-600 border-none outline-none placeholder-black  pl-4'
            ></input>

            {/* Desktop Navigation Menu */}
            <ul className='hidden md:flex md:space-x-5  2xl:space-x-7 z-50 text-lg'>
                <li className='hover:text-gray-300'>Home</li>
                <li className='hover:text-gray-300'>Courses</li>
                <li className='hover:text-gray-300'>Resources</li>
                <li className='hover:text-gray-300'>Community</li>
                <li className='hover:text-gray-300'>About Us</li>
                <li className='hover:text-gray-300'>Events</li>
            </ul>

            {/* Mobile Navigation Menu - controlled by Hamburger */}
            <ul className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} text-lg  z-50 absolute top-24 rounded-b-3xl right-0 w-full bg-menu text-black p-4`}>
                <li className='hover:text-gray-700  w-full text-center py-2 bg-slate-100 rounded-xl'>Home</li>
                <li className='hover:text-gray-700  w-full text-center py-2'>Courses</li>
                <li className='hover:text-gray-700  w-full text-center py-2'>Resources</li>
                <li className='hover:text-gray-700  w-full text-center py-2'>About Us</li>
                <li className='hover:text-gray-700  w-full text-center py-2'>Events</li>
                <li className='hover:text-gray-700  w-full text-center py-2'>Community</li>

            </ul>

           
            <button className='hidden md:block bg-green-700 p-2 text-white rounded-full hover:bg-green-600'>Register Now!</button>

           
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='p-4 text-4xl md:hidden hover:text-slate-300'>
                <GiHamburgerMenu />
            </button>
        </div>
    );
}
