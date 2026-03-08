import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";
import LOGO from "../../assets/logo.svg";
import PrimaryBtn from "../btn/PrimaryBtn";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/">
        <img src={LOGO} alt="web creatives" className="logo" />
      </Link>

      <ul className="navbar_links">
        <li>
          <Link to="/">home</Link>
        </li>
        {/* <li>
          <Link to="/pricings">pricings</Link>
        </li> */}
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

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <RxHamburgerMenu className="hamburger-icon" />
      </div>

      {/* Mobile links */}
      {isMobileMenuOpen && (
        <ul className="navbar_links mobile-navbar_links">
          <li>
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              home
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              to="/pricings"
              onClick={closeMobileMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Pricing
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              about
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/case-study"
              onClick={closeMobileMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              case study
            </NavLink>
          </li>

          <span>
            <Link to="/contact" onClick={closeMobileMenu}>
              <PrimaryBtn text="Contact Us" className="nav-ctc-btn" />
            </Link>
          </span>
          <IoIosCloseCircleOutline
            className="close-icon"
            style={{ color: "red" }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
