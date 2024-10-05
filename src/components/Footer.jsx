import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
       <h2 className='text-2xl mt-3 text-slate-800 font-semibold'>The Free Jobs</h2>
    <div className="footer-content">
     

      <div className="flex  lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center lg:gap-4 gap-3">
        <div>
          <h4>About The Free Jobs</h4>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4>Agreement</h4>
          <ul>
            <li>Microjob Marketplace</li>
            <li>Deal Marketplace</li>
          </ul>
        </div>
      </div>

      <div className="footer-social my-4">
        <h4 className='font-semibold text-lg'>Social Media</h4>
        <div className="social-icons ">
        <FaFacebook className='text-[#1877F2]' />
          <FaInstagram className='text-[#405DE6]'></FaInstagram>
          <FaTwitter className='text-[#1877F2]'></FaTwitter>
        </div>
      </div>
    </div>

    <div className="footer-logo text-center">
      
      <p>© 2024 The Free Jobs.com. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer