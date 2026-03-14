import React from "react";
import "../footer/Footer.css";
import LOGO from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <img src={LOGO} alt="web creatives logo" className="footer-logo" />

      <div className="footer-links">
        <ul>
          <li>
            <Link to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
          <Link to="#">
            Privacy & Cookie Policy
            </Link>
          </li>
          <li>
          <Link to="#">
            Terms & Conditions
          </Link>
          </li>
        </ul>
        <p className="year">
          @{currentYear} Webb Creatives Agency.All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
