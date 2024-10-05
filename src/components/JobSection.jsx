import React from 'react'

const JobSection = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-10'>
    <div className="flex-1 text-start lg:text-left mb-8 lg:mb-0 ">
<div>
  <div className='flex justify-start items-center gap-6'>
<div className='h-12 w-12 rounded-lg bg-[#20AC57]'></div>
  <h2 className='text-2xl mt-3 text-slate-800 font-semibold'>Find Jobs</h2>
  </div>
    <img src="/findJob.png" className="lg:w-[451px] lg:mt-0 -mt-10 lg:h-[451px] object-contain object-center opacity-90 w-full h-[260px]" alt="Background" />
    </div>
    </div>
  
           <section className=" flex-1 flex justify-center lg:justify-end lg:mt-0 -mt-10">
            <div>
      <h2 className='text-3xl text-slate-800 font-bold'>Get more in less time</h2>
      <ul className="checklist">
        <li>Target is the right Job</li>
        <li>Read job details and submit</li>
        <li>Do not submit wrong proof</li>
        <li>To increase the employer's business</li>
        <li>Take any promotion</li>
        <li>Blog, application, social media etc</li>
      </ul>
      <button className="get-started-button">Get Started</button>
      </div>
    </section>
    </div>
  )
}

export default JobSection