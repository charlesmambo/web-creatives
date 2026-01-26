import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';
import LOGO from '../../assets/logo.svg';
import PrimaryBtn from '../btn/primaryBtn';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <Link to="/">
        <img src={LOGO} alt="web creatives" className="logo" />
      </Link>

      <ul className="navbar_links">
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/case-study">case study</Link></li>
      </ul>

      <div className="contact-btn">
        <Link to="/contact">
          <PrimaryBtn text="Contact Us" />
        </Link>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <RxHamburgerMenu className='hamburger-icon'/>
      </div>

      {/* Mobile links */}
      {isMobileMenuOpen && (
        <ul className="navbar_links mobile-navbar_links">
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/case-study">case study</Link></li>
          <span>
            <Link to="/contact">
              <PrimaryBtn text="Contact Us" />
            </Link>
          </span>
          <IoIosCloseCircleOutline  className='close-icon'
          style={{ color: 'red'}} onClick={() => setIsMobileMenuOpen(false)}/>
          
        </ul>
      )}
    </nav>
  );
};

export default Navbar;