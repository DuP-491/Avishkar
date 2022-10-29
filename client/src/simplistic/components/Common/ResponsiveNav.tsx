import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../Assets/logo.png';
import Cookies from 'js-cookie';

const ResponsiveNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const hiddenNavClass = 'hidden w-full md:block md:w-auto';
  const visibleNavClass = 'block w-full md:block md:w-auto';

  return (
    <nav className="p-3 bg-gray-800 border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-12 mr-3 sm:h-10" alt="aviskar Logo" />
          <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
            Avishkar
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="inline-flex items-center justify-center ml-3 text-gray-400 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:text-white focus:ring-gray-500"
          aria-controls="navbar-solid-bg"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <div className={isMobileNavOpen ? visibleNavClass : hiddenNavClass} id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 bg-gray-800 border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
            <li>
              <Link
                to="/department"
                onClick={() => setIsMobileNavOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-400 rounded md:border-0 md:p-0 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/Schedule"
                onClick={() => setIsMobileNavOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-400 rounded md:border-0 md:p-0 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                Schedule
              </Link>
            </li>
            <li>
              <Link
                to="/sponsors"
                onClick={() => setIsMobileNavOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-400 rounded md:border-0 md:p-0 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                Sponsors
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                onClick={() => setIsMobileNavOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-400 rounded md:border-0 md:p-0 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                onClick={() => setIsMobileNavOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-400 rounded md:border-0 md:p-0 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                FAQ
              </Link>
            </li>
            {Cookies.get('token') ? (
              <li>
                <Link
                  to="/profile"
                  onClick={() => setIsMobileNavOpen(false)}
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded md:border-0 md:p-0 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                  Profile
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  onClick={() => setIsMobileNavOpen(false)}
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded md:border-0 md:p-0 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNav;
