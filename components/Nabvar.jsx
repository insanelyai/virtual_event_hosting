"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  // State to manage dropdown menu visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      {/* <Head>
        <title>Meetup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </Head> */}

      {/* Navbar Section */}
      <nav className="bg-white w-full h-16 px-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
        {/* Left Section: Logo and Search Inputs */}
        <div className="flex items-center space-x-4">
          {/* Logo Image */}
          <Image
            className="h-[60px] w-auto object-fill"
            src="https://logodix.com/logo/2173861.png"
            alt="Meetup Logo"
            width={60}
            height={60}
          />

          {/* Search Inputs (for topic and location) */}
          <div className="hidden md:flex items-center">
            <input
              className="border rounded-l-lg w-36 md:w-64 px-2 py-1 h-10"
              type="search"
              placeholder="Search Anything here"
              id="Search"
            />
            <input
              className="border w-36 md:w-80 px-2 h-10 py-1"
              type="search"
              placeholder="Search Location"
              id="location"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white w-12 h-10 flex justify-center items-center rounded-r-lg">
              {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            </button>
          </div>
        </div>

        {/* Navbar Links (for Desktop) */}
        <div className="ml-auto hidden md:block">
          <ul className="flex space-x-6 font-semibold">
            {/* Language Option */}
            <li className="px-2 py-2 mx-2 cursor-pointer flex items-center">
              {/* <i className="fa-solid fa-earth-americas mr-2"></i> */}
              English
            </li>
            {/* Login Button */}
            <li id="login" className="px-2 py-2 mx-2 cursor-pointer">
              <Link href="/login">Login</Link>
            </li>
            {/* Signup Button */}
            <li className="bg-red-500 px-4 py-2 mx-2 text-white rounded font-bold cursor-pointer hover:bg-red-600">
              <Link href="/signup">Sign up</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Button (for Mobile) */}
        <div className="md:hidden ml-auto">
          <button className="text-4xl" id="menu-btn" onClick={toggleDropdown}>
            &#8801;
          </button>
        </div>

        {/* Mobile Dropdown Menu (Visibility controlled by state) */}
        {isDropdownVisible && (
          <div
            className="absolute top-20 right-5 w-60 opacity-95 rounded bg-white shadow-lg z-50"
            id="dropdown-menu"
          >
            <ul className="flex flex-col space-y-4 p-4 font-semibold">
              {/* Language Option for Mobile */}
              <li className="hover:text-gray-700 text-black cursor-pointer flex items-center">
                {/* <i className="fa-solid fa-earth-americas mr-2"></i> */}
                English
              </li>
              {/* Search Inputs (for mobile) */}
              <li className="hover:text-gray-700 text-black cursor-pointer">
                <input
                  className="border rounded-l-lg w-40 rounded-lg px-2 py-1 h-10"
                  type="search"
                  placeholder="Search Anything here"
                  id="Search"
                />
              </li>
              <li className="hover:text-gray-700 text-black cursor-pointer">
                <input
                  className="border w-40 rounded-lg px-2 h-10 py-1"
                  type="search"
                  placeholder="Search Location"
                  id="location"
                />
              </li>
              {/* Login Button for Mobile */}
              <li className="bg-white px-4 py-2 text-black cursor-pointer hover:bg-gray-100">
                <Link href="/login">Login</Link>
              </li>
              {/* Signup Button (Mobile) */}
              <li className="bg-red-500 px-4 py-2 text-white rounded font-bold cursor-pointer hover:bg-red-600">
                <Link href="/signup">Sign up</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
