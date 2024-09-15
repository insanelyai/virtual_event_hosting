"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);

  // Toggle mobile dropdown
  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  // Toggle profile dropdown
  const toggleProfileDropdown = () =>
    setProfileDropdownVisible((prev) => !prev);

  // Close dropdowns when clicking outside
  const handleClickOutside = useCallback((event) => {
    const target = event.target;
    const dropdownMenu = document.getElementById("dropdown-menu");
    const profileContent = document.getElementById("profileCon");
    const menuBtn = document.getElementById("menu-btn");
    const profileBtn = document.getElementById("profile");
    const profileBtnMobile = document.getElementById("profile2");

    if (dropdownMenu && !dropdownMenu.contains(target) && target !== menuBtn) {
      setDropdownVisible(false);
    }
    if (
      profileContent &&
      !profileContent.contains(target) &&
      target !== profileBtn &&
      target !== profileBtnMobile
    ) {
      setProfileDropdownVisible(false);
    }
  }, []);

  useEffect(() => {
    // Add event listener for clicks outside the dropdowns
    window.addEventListener("click", handleClickOutside);
    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <nav className="bg-white w-full h-16 px-4 flex items-center relative sticky shadow-lg z-10">
      {/* Left Section: Logo and Search Inputs */}
      <div className="flex items-center space-x-4">
        <div className="flex">
          {/* Logo Image */}
          <Image
            className="h-16 w-auto object-fill"
            src="https://logodix.com/logo/2173861.png"
            alt="Meetup Logo"
            width={64}
            height={64}
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
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Start new group button */}
      <div className="hidden md:flex bg-[#00798a] md:px-8 md:py-2 md:mx-2 text-white md:rounded-lg font-bold cursor-pointer hover:bg-[#00616e]">
        <button id="startGrp-btn">Start new Group...!!!</button>
      </div>
      {/* Navbar Links (for Desktop) */}
      <div className="hidden ml-4 md:block">
        <ul className="flex space-x-4 font-semibold">
          <span className="ml-2 mt-[25px]">|</span>
          {/* Language Option */}
          <li className="px-2 py-2 mx-2 cursor-pointer flex items-center">
            <button
              id="connections"
              className="text-gray-700 hover:text-gray-900"
            >
              <i className="fas fa-users"></i>
              <br />
              Connections
            </button>
          </li>
          {/* Login Button */}
          <li className="px-2 py-2 mx-2 cursor-pointer my-[10px]">
            <button id="messages" className="text-gray-700 hover:text-gray-900">
              <i className="fa-solid fa-comment"></i>
              <br />
              Messages
            </button>
          </li>
          {/* Notification Button */}
          <li className="px-2 py-2 mx-2 cursor-pointer my-[10px]">
            <button
              id="notification"
              className="text-gray-700 hover:text-gray-900"
            >
              <i className="fas fa-bell"></i>
              <br />
              Notifications
            </button>
          </li>
          {/* Profile Dropdown Trigger */}
          <li
            className="pl-2 pr-0 py-2 ml-2 mr-1 flex cursor-pointer my-[10px]"
            onClick={toggleProfileDropdown}
          >
            <button id="profile" className="text-gray-700 hover:text-gray-900">
              <i className="fas fa-user"></i>
              <br />
              Profile
            </button>
            <i className="fas fa-caret-down ml-2 mt-4"></i>
          </li>
        </ul>
      </div>
      {/* Hamburger Menu Button (for Mobile) */}
      <div className="md:hidden ml-auto">
        <button className="text-4xl" id="menu-btn" onClick={toggleDropdown}>
          &#8801;
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {isDropdownVisible && (
        <div
          className="absolute top-20 right-5 w-60 opacity-95 rounded bg-white shadow-lg md:hidden z-50"
          id="dropdown-menu"
        >
          <ul className="flex flex-col space-y-4 p-4 font-semibold">
            <li className="hover:text-gray-700 text-black cursor-pointer flex items-center">
              <i className="fas fa-users mr-2"></i>Connections
            </li>
            <li className="hover:text-gray-700 text-black cursor-pointer">
              <i className="fa-solid fa-comment mr-2"></i>Messages
            </li>
            <li className="hover:text-gray-700 text-black cursor-pointer">
              <i className="fas fa-bell mr-2"></i>Notifications
            </li>
            <li className="text-black rounded cursor-pointer hover:bg-gray-100">
              <button
                id="profile2"
                onClick={(event) => {
                  event.stopPropagation(); // Prevent click from bubbling up
                  toggleProfileDropdown(); // Toggle profile content visibility
                  setDropdownVisible(false); // Hide mobile dropdown menu
                }}
              >
                <i className="mr-2 fa-solid fa-user"></i>Profile
              </button>
            </li>
          </ul>
        </div>
      )}
      {/* Profile Dropdown */}
      {isProfileDropdownVisible && (
        <div
          className="absolute top-20 right-5 w-60 opacity-95 rounded bg-white shadow-lg z-50"
          id="profileCon"
        >
          <ul className="flex flex-col space-y-4 p-4 font-semibold">
            <li className="hover:text-gray-700 text-black cursor-pointer flex items-center">
              <i className="fa-solid fa-earth-americas mr-2"></i>English
            </li>
            <li className="hover:text-gray-700 text-black cursor-pointer">
              Your Events
            </li>
            <li className="hover:text-gray-700 text-black cursor-pointer">
              Your Group
            </li>
            <li className="hover:text-gray-700 text-black cursor-pointer">
              View Profile
            </li>
            <li className="hover:text-gray-700 text-black cursor-pointer">
              Settings
            </li>
            <li className="bg-red-500 px-4 py-2 text-white rounded font-bold cursor-pointer hover:bg-red-600">
              <Link href="/navbar">Log out</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
