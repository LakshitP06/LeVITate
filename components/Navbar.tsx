"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    controls.start({ opacity: isOpen ? 0 : 1, x: isOpen ? 50 : 0 });
  };

  return (
    <div className="w-full h-[90px] fixed top-0 shadow-lg bg-black backdrop-blur-md z-50 px-6">
      <div className="w-full h-full flex items-center justify-center px-4">
        <div className={`hidden md:flex items-center space-x-16`}>
          <Link href="/" className="regular-18 md:text-md text-white cursor-pointer hover:font-bold">
            Home
          </Link>
          <Link href="/Our-Vision" className="regular-18 md:text-md text-white cursor-pointer hover:font-bold">
            Our Vision
          </Link>
          <Link href="/" className="mx-4">
            <Image src="/logo.png" alt="Logo" width={75} height={75} className="cursor-pointer" />
          </Link>
          <Link href="/Team" className="regular-18 md:text-md text-white cursor-pointer hover:font-bold">
            Our Team
          </Link>
          <Link href="/Contact-us" className="regular-18 md:text-md text-white cursor-pointer hover:font-bold">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <Link href="/" className="mx-4">
            <Image src="/logo.png" alt="Logo" width={75} height={75} className="cursor-pointer" />
          </Link>
        </div>

        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden absolute top-16 right-0 w-48 bg-white text-black rounded-lg shadow-lg flex flex-col items-center space-y-2 ${isOpen ? 'block' : 'hidden'}`}
      >
        <Link href="/" className="block px-4 py-2 text-lg hover:bg-gray-200">
          Home
        </Link>
        <Link href="/Our-Vision" className="block px-4 py-2 text-lg hover:bg-gray-200">
          Our Vision
        </Link>
        <Link href="/Team" className="block px-4 py-2 text-lg hover:bg-gray-200">
          Our Team
        </Link>
        <Link href="/Contact-us" className="block px-4 py-2 text-lg hover:bg-gray-200">
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
