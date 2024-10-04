import React from 'react'

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
    <section className="job-review-section">
    {jobReviews.map((review, index) => (
      <div key={index} className="review-card">
        <div className="icon-placeholder"></div>
        <h4>{review.title}</h4>
        <p>{review.description}</p>
      </div>
    ))}
  </section>
  )
}

export default Employers