import React, { useState } from "react";
import Image from "next/image";
import Mobilenavbar from "../mobilenavbar";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="text-white w-full">
      <div className="max-w-7xl mx-auto pr-4 sm:pr-0 lg:pr-3 2xl:pr-0 flex justify-between items-center h-20">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="https://res.cloudinary.com/dgtdkqfsx/image/upload/v1734376050/Group_36795_cnhabj.png"
            alt="Sports Fest Logo"
            width={130}
            height={50}
            className="object-contain xl:w-[230px] xl:h-[100px]"
          />
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="hidden md:flex space-x-5 2xl:space-x-8 items-center text-xs xl:text-lg uppercase font-semibold">
          <a href="#" className="hover:text-gray-300 text-red-600 transition">
            Home
          </a>
          <a href="#Tournament" className="hover:text-gray-300 transition">
            Tournament
          </a>
          <a href="#Gallery" className="hover:text-gray-300 transition">
            Gallery
          </a>
          <a href="#About Us" className="hover:text-gray-300 transition">
            About Us
          </a>
          <a href="#Our Team" className="hover:text-gray-300 transition">
            Our Team
          </a>
          <a href="#FAQs" className="hover:text-gray-300 transition">
            FAQs
          </a>
          <a href="#Contact Us" className="hover:text-gray-300 transition">
            Contact Us
          </a>
        </div>

        {/* Right Section - SAC Logo */}
        <div className="flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/dgtdkqfsx/image/upload/v1734376050/Link_SAC_PNG_MERCH_jcr5ha.png_d17kdg.png"
            alt="SAC Logo"
            width={70}
            height={70}
            className="object-contain hidden lg:block"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        <Mobilenavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
