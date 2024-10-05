import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-green-200 to-blue-400 flex items-center justify-center">
      {/* Glass Effect Container */}
      <div className="backdrop-blur-lg bg-white/30 p-8 rounded-xl shadow-xl w-full max-w-md mx-auto">
        {/* Form Title */}
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Free Jobs Login</h2>
        
        {/* Login Form */}
        <form className="space-y-6">
          
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-green-800">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-3 mt-1 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-800">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 mt-1 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-green-800">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full p-3 mt-1 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
            {/* Show/Hide Password Button */}
            <button 
              type="button" 
              onClick={togglePassword}
              className="absolute inset-y-0 right-3 flex items-center text-green-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-[#20AC57] text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-8">Don’t have an account? <Link to="/signup" className="text-green-700 hover:underline">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
