import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#cbc5c3] text-white-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-black text-center '>Skills</p>
              <p className='py-4 text-2xl'>Here's a list of technologies I've worked with so far...</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='bg-white-500 shadow-lg shadow-[#f6f1ee] hover:scale-110 duration-500'>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='bg-white-500 shadow-lg shadow-[#f6f1ee] hover:scale-110 duration-500'>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='bg-white-500 shadow-lg shadow-[#f6f1ee] hover:scale-110 duration-500'>
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='bg-white-500 shadow-lg shadow-[#f6f1ee] hover:scale-110 duration-500'>
                  <p className='my-4'>React JS</p>
              </div>
              <div className='bg-white-500 shadow-lg shadow-[#f6f1ee] hover:scale-110 duration-500'>
                  <p className='my-4'>Git/GitHub</p>
              </div>
              <div className='bg-white-500 shadow-lg shadow-[#f6f1ee] hover:scale-110 duration-500'>
                  <p className='my-4'>Bootstrap</p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;
