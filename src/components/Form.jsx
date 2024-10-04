import React from 'react'

const Form = ({type = "signup"}) => {
  return (
    <div className="auth-form-container">
    <form className="auth-form">
      <h2>{type === "signup" ? "Sign Up" : "Log In"}</h2>

      {type === "signup" && (
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
      )}

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>

      {type === "signup" && (
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" />
        </div>
      )}

      <button type="submit" className="submit-button">
        {type === "signup" ? "Sign Up" : "Log In"}
      </button>

      <p className="switch-auth">
        {type === "signup"
          ? "Already have an account? Log In"
          : "Don't have an account? Sign Up"}
      </p>
    </form>
  </div>
  )
}

export default Form