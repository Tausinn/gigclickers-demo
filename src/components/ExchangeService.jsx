import React from 'react'

const ExchangeService = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-16 py-10">
         <div className="flex-1 flex justify-center lg:justify-start bg-[#E7FAEF] w-full ">
            <img src="/work.png" className="lg:w-[451px] lg:h-[451px] lg:mt-0 mt-3 object-center object-cover min-w-full h-[320px]" alt="Background" />
          </div>

    <section className="exchange-service-section">
    <h3>Exchange online service at The Free Jobs</h3>
    <ul className="service-checklist">
      <li>Advertise online services</li>
      <li>Give online service delivery</li>
      <li>Receive service payments</li>
      <li>Get the service you need</li>
      <li>Receive delivery</li>
      <li>Accept the service</li>
    </ul>
    <button className="start-button">Get Started</button>
  </section>
  </div>
  )
}

export default ExchangeService