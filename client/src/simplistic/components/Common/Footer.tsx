import React from 'react';
import Logo from '../../Assets/logo.png';
const Footer = () => {
  return (
    <footer className="p-4 bg-gray-900 shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
          <img src={Logo} className="h-16 mr-3" alt="avishkar Logo" />

          <span className="self-center text-4xl font-semibold text-white whitespace-nowrap">
            Avishkar 2022
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-400 sm:mb-0">
          <li>
            <a href="/team" className="mr-4 hover:underline md:mr-6 ">
              Team
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/mnnit.avishkar"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6">
              Facebook page
            </a>
          </li>
          <li>
            <a href="/department" className="mr-4 hover:underline md:mr-6 ">
              Events
            </a>
          </li>
          <li>
            <a href="/sponsors" className="hover:underline">
              sponsors
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-400 sm:text-center">
        © 2022{' '}
        <a href="/" className="hover:underline">
          Avishkar
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
