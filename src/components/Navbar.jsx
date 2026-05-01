"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
       
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              Suncart
            </Link>
          </div>

        
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <NavLink href="/" >Home</NavLink>
             <NavLink href="/allproduct" >Products</NavLink>
            <NavLink href="/profile" >My Profile</NavLink>
          </div>

         
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="px-4 py-2 text-sm font-semibold text-gray-600 border border-orange-600 rounded-lg hover:bg-orange-600 transition"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="px-4 py-2 text-sm font-semibold text-gray-600 border border-orange-600 rounded-lg hover:bg-orange-600 transition"
            >
             Register Now
            </Link>
          </div>

          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" className="block px-3 py-2 text-gray-700 hover:bg-orange-100 rounded-md">Home</NavLink>
            <NavLink href= "/allproduct" className="block px-3 py-2 text-gray-700 hover:bg-orange-100 rounded-md">Products</NavLink>
            <NavLink href="/profile" className="block px-3 py-2 text-gray-700 hover:bg-orange-100 rounded-md">My Profile</NavLink>
          </div>
          
         
          <div className="pt-4 pb-3 border-t border-gray-200 px-5 flex flex-col space-y-2">
            <Link 
              href="/login" 
              className="w-full px-4 py-2 text-sm font-semibold text-center text-gray-600 border border-gray-300 rounded-lg"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="w-full px-4 py-2 text-sm font-semibold text-center text-white bg-orange-600 rounded-lg"
            >
             Register Now 
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;