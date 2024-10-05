import React from 'react';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/HeroSection';
import JobSection from '../components/JobSection';
import DealMarket from '../components/DealMarket';
import ExchangeService from '../components/ExchangeService';
import Employers from '../components/Employers';
import Workers from '../components/Workers';
import ShareEarn from '../components/ShareEarn';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <div >
      <div className='bg-[#E7FAEF]'>
      <Navbar/>
      <HeroSection/>
      </div>
    
     <JobSection/>
     <DealMarket/>
     <ExchangeService/>
     <Employers/>
     <Workers/>
     <div id="share"><ShareEarn/></div> 
    <div id="faq"><FAQ/></div> 
     
   
     
     
    </div>
    );
}

export default Home;
