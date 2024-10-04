import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src="path-to-logo.png" alt="GigClickers Logo" className="logo-img" />
        <p>© 2024 gigclickers.com. All Rights Reserved.</p>
      </div>

      <div className="footer-links">
        <div>
          <h4>About GigClickers</h4>
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

      <div className="footer-social">
        <h4>Social Media</h4>
        <div className="social-icons">
          <img src="path-to-telegram-icon.png" alt="Telegram" />
          <img src="path-to-facebook-icon.png" alt="Facebook" />
          <img src="path-to-email-icon.png" alt="Email" />
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer