import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import JobSection from './components/JobSection'
import DealMarket from './components/DealMarket'
import ExchangeService from './components/ExchangeService'
import Employers from './components/Employers'
import Workers from './components/Workers'
import ShareEarn from './components/ShareEarn'
import FAQ from './components/FAQ'
import Form from './components/Form'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <JobSection/>
     <DealMarket/>
     <ExchangeService/>
     <Employers/>
     <Workers/>
     <ShareEarn/>
     <FAQ/>
     <Form/>
     <Footer/>
     
     
    </div>
  )
}

export default App