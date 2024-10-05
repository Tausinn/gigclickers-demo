import { FcBarChart } from "react-icons/fc";

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
    <div className='px-4 lg:px-16 py-10'>
       <div className='flex justify-start items-center gap-6'>
      <div className='h-12 w-12 rounded-lg bg-[#20AC57]'></div>
  <h2 className='text-2xl mt-3 text-slate-800 font-semibold'>Find Jobs</h2>
  </div>
    <section className="deal-marketplace">
  
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
      {deals.map((deal, index) => (
        <div key={index} className="deal-card">
         
        <FcBarChart className="text-2xl"></FcBarChart>
          <h3 className="deal-title">{deal.title}</h3>
          <p className="deal-count font-bold">{deal.count}</p>
        </div>
      ))}
    </div>
  </section>
  </div>
  )
}

export default DealMarket