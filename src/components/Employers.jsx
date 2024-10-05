import React from 'react'
import { RiGlobalFill } from 'react-icons/ri';

const Employers = () => {

    const jobReviews = [
        {
          title: "Review Job",
          description:
            "The employer must review and rate the work given by the employer within a maximum of six days. If the employer does not rate the jobs within six days, the workers will get them auto-rated.",
        },
        {
          title: "Rate Job",
          description:
            "The employer will have control over the work performed by each employee. Employers will review each worker's performance and rate it satisfactorily or unsatisfactorily.",
        },
        {
          title: "Report Job",
          description:
            "For any reason, the employer thinks that the worker will redo the work and submit it again, then the worker must be paid for revising the work. If the revision work is not done within 24 hours then it will be auto unsatisfied.",
        },
      ];
      
  return (
    <div>
      <h2 className='text-center lg:text-5xl text-3xl font-bold my-10'>Employee</h2>
    <section className="job-review-section">
    {jobReviews.map((review, index) => (

      
      <div key={index} className="review-card group mb-6  bg-[#f1f3f4] hover:bg-green-600 ">
        <div className="flex justify-center items-center bg-green-600 p-2 shadow-md rounded-full -mt-16 w-20 h-20 group-hover:bg-[#f1f3f4] ">
        <RiGlobalFill className='text-5xl text-[#f1f3f4] group-hover:text-green-600' />
        </div>
        <h4 className='group-hover:text-[#f1f3f4]'>{review.title}</h4>
        <p className='max-w-[90%] group-hover:text-gray-100 text-center mx-auto'>{review.description}</p>
      </div>
    ))}
  </section>
  </div>
  )
}

export default Employers