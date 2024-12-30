import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/webmatrik-logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="hidden lg:block bg-gray-100 mb-2">
        <div className="container mx-auto flex justify-end items-center space-x-6 text-xs px-4">
          <a href="tel:+971509850927" className="text-gray-600 flex gap-1 items-center hover:text-blue-600">
          <FaPhoneAlt className='text-blue-600 text-[15px]' />
            +971509850927
          </a>
          <a href="mailto:INFO@WEBMATRIK.COM" className="text-gray-600 flex gap-1 items-center hover:text-blue-600">
          <IoMail className='text-blue-600 text-[15px]' />
            info@webmatrik.com

          </a>
          <div className="flex items-center gap-1 text-gray-600 hover:text-blue-600 cursor-pointer">
          <IoMdShare className='text-blue-600 text-[15px]' />
            FOLLOW US
            <ChevronDown className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="border-b">
        <div className="container mx-auto flex justify-between items-center h-20 px-4">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Webmatrik" className="h-14" />
          </a>
          <button
            className="block lg:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition ease-in-out">
              HOME
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition ease-in-out">
              ABOUT
            </a>
            <a href="/services" className="text-gray-700 hover:text-blue-600 transition ease-in-out">
              SERVICES
            </a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 transition ease-in-out">
              BLOG
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition ease-in-out">
              CONTACT
            </a>
            <button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition">
              QUOTE
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden px-4 py-4 bg-gray-50">
            <a href="/" className="block text-gray-700 hover:text-blue-600 py-2">
              HOME
            </a>
            <a href="/about" className="block text-gray-700 hover:text-blue-600 py-2">
              ABOUT
            </a>
            <a href="/services" className="block text-gray-700 hover:text-blue-600 py-2">
              SERVICES
            </a>
            <a href="/blog" className="block text-gray-700 hover:text-blue-600 py-2">
              BLOG
            </a>
            <a href="/contact" className="block text-gray-700 hover:text-blue-600 py-2">
              CONTACT
            </a>
            <div className="py-2">
              <button className="w-full bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition">
                QUOTE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
