import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo-white.png';

const Nav = () => {
  return (
    <div className="flex items-center justify-center pt-10 space-x-4">
      <nav className="flex space-x-8 text-white capitalize list-none">
        <li>
          <a href="">one</a>
        </li>
        <li>
          <a href="">two</a>
        </li>
        <li>
          <a href="">three</a>
        </li>
      </nav>
      <div>
        <a href="#">
          <img src={logo} alt="avishkar logo" className="w-32" />
        </a>
      </div>
      <nav className="flex space-x-8 text-white capitalize list-none">
        <li>
          <Link to="/sponsors">Sponsors</Link>
        </li>
        <li>
          <Link to="/team">team</Link>
        </li>
        <li>
          <Link to="/faq">faq</Link>
        </li>
      </nav>
    </div>
  );
};

export default Nav;
