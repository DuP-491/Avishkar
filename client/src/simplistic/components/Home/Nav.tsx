import Cookies from 'js-cookie';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
const Nav = () => {
  return (
    <div className="flex items-center justify-center pt-10 space-x-4">
      <nav className="flex space-x-8 text-white capitalize list-none">
        <li>
          <Link to="/department" className="hover:font-bold">
            Event
          </Link>
        </li>
        {/* <li>
          <Link to="/schedule" className="hover:font-bold">
            Schedule
          </Link>
        </li> */}
        <li>
          <Link to="/team" className="hover:font-bold">
            team
          </Link>
        </li>
      </nav>
      <div>
        <a href="#">
          <img src={logo} alt="avishkar logo" className="w-32" />
        </a>
      </div>
      <nav className="flex space-x-8 text-white capitalize list-none">
        <li>
          <Link to="/sponsors" className="hover:font-bold">
            Sponsors
          </Link>
        </li>
        {/* <li>
          <Link to="/faq" className="hover:font-bold">
            faq
          </Link>
        </li> */}

        {Cookies.get('token') ? (
          <li>
            <Link to="/profile" className="hover:font-bold">
              Profile
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login" className="hover:font-bold">
              Login
            </Link>
          </li>
        )}
      </nav>
    </div>
  );
};

export default Nav;
