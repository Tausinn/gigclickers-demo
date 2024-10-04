import React from 'react'

const Employers = () => {

    const topics = [
        "Job Jobs",
        "Best App Jobs UK",
        "App Jobs London",
        "To Work",
        "Career Job",
      ];
      
  return (
    <section className="employers-section">
    <h2>Employers</h2>
    <div className="country-selector">
      <div className="country-icon"></div>
      <p>Select Country</p>
    </div>
    <div className="topics-list">
      <h4>Discover related topics</h4>
      <ul>
        {topics.map((topic, index) => (
          <li key={index} className="topic-item">
            <span>{topic}</span>
            <span className="arrow">›</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
  )
}

export default Employers