import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';
import LOGO from '../../assets/logo.svg';
import PrimaryBtn from '../btn/primaryBtn';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
      <img src={LOGO} alt="web creatives" className="logo" />
      </Link>

      <ul className="navbar_links">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/case-study">case study</Link>
        </li>
      </ul>

      <div className="contact-btn">
        <Link to="/contact">
          <PrimaryBtn text="Contact Us" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
