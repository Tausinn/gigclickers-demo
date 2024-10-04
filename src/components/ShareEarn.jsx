import React from 'react'

const ShareEarn = () => {
  return (
    <section className="share-earn-section">
      <h2>Share & Earn</h2>
      <p className="description">
        Invite your friend to GigClickers platform and get special bonus. Every deposit and job also has a special task bonus.
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
    </section>
  )
}

export default ShareEarn