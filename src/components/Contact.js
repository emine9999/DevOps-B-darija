import React from 'react';

const Contact = () => {
  return (
    <div className='container min-h-screen flex items-center justify-center'>
      <div className='relative h-[400px] md:h-[340px] w-full 2xl:h-[540px] flex flex-col md:flex-row border-l-4 bg-menu rounded-r-full'>
        
        <div className='h-[340px] w-full md:w-[600px] 2xl:h-[540px] 2xl:w-[800px] p-6 md:p-10 2xl:p-20 text-white space-y-2 md:space-y-5'>
          <h3 className='text-xl 2xl:text-2xl font-bold text-custom-blue'>Contact Us</h3>
          <h1 className='text-3xl 2xl:text-5xl font-semibold text-black'>Feel free to contact us anytime</h1>
          <p className='font-extralight text-slate-800'>
            Have questions or need support? Reach out to us anytime via email, LinkedIn, or GitHub. We're here to assist you on your DevOps and cloud learning journey!
          </p>
        </div>

        <div className='absolute  grid grid-cols-1 gap-9 right-32 -top-16 w-[320px] md:w-[500px] 2xl:w-[600px] h-[472px] md:h-[472px] 2xl:h-[600px] bg-custom-blue rounded-3xl shadow-inner p-6 md:p-8'>
  <input 
    placeholder='Your Name..' 
    className='w-full bg-transparent border-2 placeholder-white outline-none px-3 py-0 rounded-full text-sm' 
  />
  <input 
    placeholder='Your Email..' 
    className='w-full bg-transparent border-2  placeholder-white outline-none px-3 py-0 rounded-full text-sm' 
  />
  <textarea 
    placeholder='Your Message..' 
    className='w-full bg-transparent placeholder-white border-2 outline-none px-3 py-3 rounded-2xl text-sm resize-none' 
    rows="4"
  />
  <button 
    className='w-44 bg-white text-custom-blue hover:bg-menu hover:text-white rounded-full  text-sm'
  >
    Send Message Now
  </button>
</div>

        
      </div>
    </div>
  );
}

export default Contact;
