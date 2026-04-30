// import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 mt-9">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-orange-500">Suncart</h2>
            <p className="text-gray-400 text-sm max-w-xs">
              Your trusted partner for quality products. Shopping made easy and fast.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <HiOutlineLocationMarker className="text-orange-500 text-lg" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

         
          <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-semibold mb-2">Legal</h3>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
              Contact Support
            </Link>
          </div>

         
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" className="text-2xl text-gray-400 hover:text-orange-500 transition">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-2xl text-gray-400 hover:text-orange-500 transition">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" className="text-2xl text-gray-400 hover:text-orange-500 transition">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-2xl text-gray-400 hover:text-orange-500 transition">
                <FaLinkedin />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-gray-400 text-sm">
              <HiOutlineMail className="text-orange-500 text-lg" />
              <span>info@suncart.com</span>
            </div>
          </div>

        </div>

        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-orange-500 font-medium">Suncart</span>. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;