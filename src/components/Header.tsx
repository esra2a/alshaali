'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const accentColor = 'text-green-700'; // Placeholder, adjust based on actual logo
const hoverAccentColor = 'hover:text-[#1f2a3f]';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // إضافة حالة للتحكم في القائمة

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/assets/logo_header.png" alt="Law Firm Logo" width={160} height={55} priority />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`text-gray-700 ${hoverAccentColor} transition duration-300 font-medium`}>Home</Link>
          <Link href="/about" className={`text-gray-700 ${hoverAccentColor} transition duration-300 font-medium`}>About Us</Link>
          <Link href="/services" className={`text-gray-700 ${hoverAccentColor} transition duration-300 font-medium`}>Services</Link>
          <Link href="/team" className={`text-gray-700 ${hoverAccentColor} transition duration-300 font-medium`}>Our Team</Link>
          <Link href="/blog" className={`text-gray-700 ${hoverAccentColor} transition duration-300 font-medium`}>Blog</Link>
          <Link href="/arabic" className={`text-gray-700 ${hoverAccentColor} transition duration-300 font-medium`}>عربي</Link>
          <Link
            href="/contact"
            className="bg-[#293852] hover:bg-[#1f2a3f] text-white font-medium py-2 px-5 rounded-md transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link href="/" className="block px-6 py-4 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link href="/about" className="block px-6 py-4 text-gray-700 hover:bg-gray-100">About Us</Link>
          <Link href="/services" className="block px-6 py-4 text-gray-700 hover:bg-gray-100">Services</Link>
          <Link href="/team" className="block px-6 py-4 text-gray-700 hover:bg-gray-100">Our Team</Link>
          <Link href="/blog" className="block px-6 py-4 text-gray-700 hover:bg-gray-100">Blog</Link>
          <Link href="/arabic" className="block px-6 py-4 text-gray-700 hover:bg-gray-100">عربي</Link>
          <Link
            href="/contact"
            className="block px-6 py-4 text-[#293852] bg-[#f1f1f1] hover:bg-[#1f2a3f] text-white rounded-md"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
