import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import logo from '../../assets/images/VLOGO1.png';
import { NavLink, useLocation } from 'react-router-dom';

const navbar = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
   
    window.scrollTo(0, 0);
  }, [pathname]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const activeLink = (isActive) =>
  `flex items-center justify-center h-16 px-3 py-2 text-md ${
    isActive
      ? "text-[#191716] border-b-2 border-yellow-300"
      : "text-[#7f8698] border-b-2 border-transparent hover:text-[#564452] hover:border-[#d1d5db] transition duration-300"
  }`;


  return (
      <div
      className={`navbar z-50 font-roboto sticky top-0 transition-transform duration-300 ease-in-out ${
        showNavbar ? 'md:translate-y-0' : 'md:-translate-y-full'
      }`}
    >
      <nav className="bg-[#ffffff] shadow-md">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify">
            <div className="inset-y-0 left-0 flex items-center md:hidden absolute">

              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {/* Icon when menu is closed */}
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                {/* Icon when menu is open */}
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex ml-4 md:ml-2 mr-7 md:mr-0 flex-1 items-center justify-center md:items-stretch md:justify-between ">
              <div className="flex ml-12 md:ml-0 flex-shrink-0 w-full items-center justify-between md:w-auto">
                <img className="h-11 mr-5 sm:mr-3 w-auto order-1 md:order-0" src={logo} alt="Your Company" />
                {/* searchbar */}
                <div className="relative ml-4 order-0 md:order-1"> {/* Add margin for spacing */}
                  <IoIosSearch className="absolute size-5 left-2 top-1/2 transform -translate-y-1/2 text-[#2a2929]" /> {/* Position the icon */}
                  <input
                    type="text"
                    id="search-bar-navbar"
                    placeholder="Search"
                    className="text-[#121212] text-md pl-8 pr-2 h-10 w-[215px] outline-none bg-transparent border-b border-gray-400 transition-all duration-500 focus:outline-none focus:border-b-2 focus:border-gray-400 focus:w-[250px]"
                  />
                </div>
                {/* searchbar */}
              </div>
              <div className="hidden md:ml-6 md:block w-auto">
                <div className="flex space-x-5 overflow-hidden">
                  <NavLink
                    to="/"
                    className={({ isActive }) => activeLink(isActive)}
                    >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => activeLink(isActive)}
                  >
                    About us
                  </NavLink>
                  <a href="#" className="flex items-center justify-center h-16 px-3 py-2 text-md text-[#7f8698] border-b-2 border-transparent hover:text-[#564452] hover:border-[#d1d5db] transition duration-300 whitespace-nowrap overflow-hidden text-ellipsis">Menu</a>
                  <a href="#" className="flex items-center justify-center h-16 px-3 py-2 text-md text-[#7f8698] border-b-2 border-transparent hover:text-[#564452] hover:border-[#d1d5db] transition duration-300 whitespace-nowrap overflow-hidden text-ellipsis">Inquire</a>
                  <a href="#" className="flex items-center justify-center h-16 px-3 py-2 text-md text-[#7f8698] border-b-2 border-transparent hover:text-[#564452] hover:border-[#d1d5db] transition duration-300 whitespace-nowrap overflow-hidden text-ellipsis">Contacts</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="block rounded-md bg-[#eef2ff] px-3 py-2 text-base font-medium text-[#ff9a00]" aria-current="page">Dashboard</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-[#846b79] hover:bg-[#f9fafb] hover:text-[#323841]">Team</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-[#846b79] hover:bg-[#f9fafb] hover:text-[#323841]">Projects</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-[#846b79] hover:bg-[#f9fafb] hover:text-[#323841]">Calendar</a>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default navbar