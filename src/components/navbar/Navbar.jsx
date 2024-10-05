import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 flex justify-between items-center lg:px-[8%] px-[3%]">
      {/* Logo */}
      <div className="text-green-700 text-xl lg:text-2xl font-bold"> Free Job</div>

      {/* Nav Links for larger screens */}
      <div className="hidden md:flex space-x-8">
        <a href="#faq" className="text-gray-600 hover:text-green-700">Faq</a>
        <a href="#share" className="text-gray-600 hover:text-green-700">Share & Earn</a>
        <a href="#article" className="text-gray-600 hover:text-green-700">Article</a>
      </div>

      {/* Login and Sign Up Buttons */}
      <div className="flex items-center lg:space-x-4 space-x-3">
        <Link to="/login" className="text-gray-600 hover:text-green-700">Login</Link>
        <Link to="/signup" className="bg-green-600 lg:text-base text-sm text-white lg:px-4 px-2 lg:py-2 py-1 rounded-md hover:bg-green-700">Sign Up</Link>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden flex flex-col justify-center items-center cursor-pointer" onClick={toggleSidebar}>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-white/60 backdrop-blur-lg shadow-lg p-3 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl mt-2 font-semibold">Menu</h2>
          <button className="hover:text-gray-600 text-2xl text-green-700 -mt-2" onClick={toggleSidebar}>
          <IoMdCloseCircle />
          </button>
        </div>
        <div className="space-y-6 p-10 font-semibold">
          <a href="#faq" className="text-gray-800 hover:text-green-700 block">Faq</a>
          <a href="#share" className="text-gray-800 hover:text-green-700 block">Share & Earn</a>
          <a href="#article" className="text-gray-800 hover:text-green-700 block">Article</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
