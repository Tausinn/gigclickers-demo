import React from 'react'

const ShareEarn = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-10">
  <div className="flex-1 text-start lg:text-left mb-8 lg:mb-0">
  <img src="/share.png" className="lg:w-[451px] lg:h-[451px] w-[331px] h-[346px]" alt="Background" />
  </div>
      
     <div className="flex-1 flex justify-center lg:justify-end">
      <div>
      <h2 className='text-center lg:text-5xl text-3xl font-bold my-10'>Share & Earn</h2>
  
      <p className="description">
        Invite your friend to The Free Jobs platform and get special bonus. Every deposit and job also has a special task bonus.
      </p>
      <h3 className="invitation-title">What are you getting in each invitation?</h3>
      <ul className="invitation-list">
        <li>
          <span className="checkmark">✔</span> If your friend accepts the invitation, you will get 3% of their work bonus.
        </li>
        <li>
          <span className="checkmark">✔</span> You will get an instant 5% bonus on the deposit of the friend who accepts the invitation.
        </li>
      </ul>
      <button className="start-button">Get Started</button>
      </div>
      </div>
    </section>
  )
}

export default ShareEarn