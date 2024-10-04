import React from 'react'

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
            "Complete jobs with GigClickers. May unemployment always be removed. May life be sweeter.",
        },
      ];

  return (
    <section className="workers-section">
    
    {workerJobs.map((job, index) => (
      <div key={index} className="worker-card">
        <div className="icon-placeholder"></div>
        <h4>{job.title}</h4>
        <p>{job.description}</p>
      </div>
    ))}
  </section>
  )
}

export default Workers