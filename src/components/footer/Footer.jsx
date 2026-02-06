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
              <a href="">Contact Us</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a href="">About</a>
            </Link>
          </li>
          <li>
            <a href="#">Privacy & Cookie Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
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
