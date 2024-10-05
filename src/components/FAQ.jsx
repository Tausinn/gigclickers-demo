import React, { useState } from 'react'

const FAQ = () => {

    const faqs = [
        {
          question: "What are the benefits for employers?",
          answer: "The attractive advantage for employers is that the work can be efficiently done here at a relatively low cost compared to other platforms."
        },
        {
          question: "Why would a worker spend time and effort here?",
          answer: "A worker can work as he likes here. The Free Jobs respects the value of his skillful work."
        },
        {
          question: "How long is the employer's job pending?",
          answer: "The jobs offered by the employer can be pending for a maximum of six days, and if the rate is not given within six days, it will be auto satisfied."
        },
        {
          question: "Job approval fees?",
          answer: "A minimal fee is charged for job approvals to maintain quality standards."
        }
      ];
    
      const [activeIndex, setActiveIndex] = useState("");
    
      const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? "" : index);
      };

  return (
    <div className="faq-section">
    <h2>Frequently asked Questions</h2>
    {faqs.map((faq, index) => (
      <div key={index} className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(index)}>
          <span>{activeIndex === index ? "–" : "+"}</span> {faq.question}
        </div>
        {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
      </div>
    ))}
  </div>
  )
}

export default FAQ