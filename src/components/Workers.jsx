import React from 'react'
import { RiGlobalFill } from 'react-icons/ri';

const Workers = () => {

    const workerJobs = [
        {
          title: "Submit Job",
          description:
            "Worker can complete and submit any job as per his wish from Finds Job. The worker must read each task carefully and then complete it.",
        },
        {
          title: "Revision Job",
          description:
            "The worker must be accountable to the employer for the work done. If the completed works are sent by the employer for revision then they should be completed and submitted within 24 hours.",
        },
        {
          title: "Report Job",
          description:
            "After the worker receives a rate from the employer for each job, if the employer does not pay correctly after the job is done, the worker can report against the work given by the employer. This must be done within 24 hours.",
        },
        {
          title: "Complete Job",
          description:
            "Complete jobs with The Free Jobs. May unemployment always be removed. May life be sweeter.",
        },
      ];

  return (
    <div>
       <h2 className='text-center lg:text-5xl text-3xl font-bold -mb-2 mt-4'>Workers</h2>
    <section className="workers-section">
   
    {workerJobs.map((job, index) => (
      <div key={index} className="worker-card group">
        <div className="flex justify-center items-center bg-green-700 p-2 shadow-md rounded-full  w-16 h-16 group-hover:bg-[#f1f3f4] ">
          <RiGlobalFill className='text-5xl text-[#f1f3f4] group-hover:text-green-700' />
        </div>
        <h4 className=' group-hover:text-gray-100'>{job.title}</h4>
        <p className=' group-hover:text-gray-100'>{job.description}</p>
      </div>
    ))}
  </section>
  </div>
  )
}

export default Workers