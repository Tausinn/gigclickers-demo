import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="logo">GigClickers</div>
      <div className="nav-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar