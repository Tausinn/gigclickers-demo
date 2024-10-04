import React from 'react'

const DealMarket = () => {

    const deals = [
        { title: 'Application', count: '100 Deals' },
        { title: 'Audio & Video', count: '105 Deals' },
        { title: 'CMS', count: '23 Deals' },
        { title: 'Cyber Security', count: '3 Deals' },
        { title: 'Digital Service', count: '50 Deals' },
        { title: 'Dollar Service', count: '77 Deals' },
        { title: 'Domain', count: '7 Deals' },
        { title: 'Ezoic', count: '3 Deals' },
        { title: 'Facebook Service', count: '234 Deals' },
        { title: 'Google Adsense', count: '34 Deals' },
        { title: 'Graphics Design', count: '66 Deals' },
        { title: 'Minute & MB Package', count: '11 Deals' },
        { title: 'Others', count: '212 Deals' },
        { title: 'Paypal Service', count: '4 Deals' },
        { title: 'SEO Service', count: '5 Deals' },
        { title: 'Web Service', count: '15 Deals' },
        { title: 'Website Sell', count: '14 Deals' },
        { title: 'Writing', count: '40 Deals' },
        { title: 'YouTube Service', count: '246 Deals' },
        { title: 'Email Marketing', count: '21 Deals' }
      ];
  return (
    <section className="deal-marketplace">
    <h2>Deal Marketplace</h2>
    <div className="deal-grid">
      {deals.map((deal, index) => (
        <div key={index} className="deal-card">
          <div className="deal-icon"></div>
          <h3 className="deal-title">{deal.title}</h3>
          <p className="deal-count">{deal.count}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default DealMarket