import React, { useState } from 'react';
import { git, docker, devops, tf, jenkins, desk, k8s } from '../assets';

const Courses = () => {
  const courses = [
    { id: 1, title: 'Kubernetes Basics', category: 'K8S', description: 'Learn the basics of Kubernetes', image: k8s },
    { id: 2, title: 'Docker Essentials', category: 'Docker', description: 'Introduction to Docker', image: docker },
    { id: 3, title: 'Mastering Terraform', category: 'Terraform', description: 'Terraform from scratch', image: tf },
    { id: 4, title: 'Jenkins for CI/CD', category: 'Jenkins', description: 'Continuous integration with Jenkins', image: jenkins },
    { id: 5, title: 'Advanced Kubernetes', category: 'K8S', description: 'Deep dive into Kubernetes', image: desk },
  ];

  const [selectedCategory, setSelectedCategory] = useState('Show All');

  const filteredCourses = selectedCategory === 'Show All'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className='container mx-auto w-full mt-64 md:mt-32  space-y-10 min-h-screen'>
      <h1 className='text-center font-mono text-4xl font-bold'>Latest courses</h1>
      
      <div className='font-semibold mx-auto cursor-pointer bg-slate-200 h-16 md:w-1/2 rounded-full border flex justify-evenly items-center'>
        <button onClick={() => setSelectedCategory('Show All')} className='hover:bg-gray-300 p-2 rounded-full'>Show All</button>
        <button onClick={() => setSelectedCategory('K8S')} className='hover:bg-gray-300 p-2 rounded-full'>K8S</button>
        <button onClick={() => setSelectedCategory('Docker')} className='hover:bg-gray-300 p-2 rounded-full'>Docker</button>
        <button onClick={() => setSelectedCategory('Terraform')} className='hover:bg-gray-300 p-2 rounded-full'>Terraform</button>
        <button onClick={() => setSelectedCategory('Jenkins')} className='hover:bg-gray-300 p-2 rounded-full'>Jenkins</button>
      </div>

      
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
        {filteredCourses.map(course => (
          <div key={course.id} className='p-4 border rounded-lg bg-white shadow-md cursor-pointer'>
            <div>
              <img src={course.image} alt={course.title} className='w-full h-40 object-cover rounded-t-lg' />
            </div>
            <h2 className='text-xl font-bold mt-2 hover:text-slate-600'>{course.title}</h2>
            <p>{course.description}</p>
            <button className='bg-slate-200 p-2 rounded-full mt-2 text-custom-blue hover:text-white hover:bg-custom-blue'>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
