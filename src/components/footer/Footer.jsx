import React from 'react';
import '../footer/Footer.css';
import LOGO from '../../assets/logo.svg'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer>
        <img src={LOGO} alt="web creatives logo" className="footer-logo" />

        <div className="footer-links">
            <ul>
                <li>
                    <a href="">Contact Us</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Privacy & Cookie Policy</a>
                </li>
                <li>
                    <a href="">Terms & Conditions</a>
                </li>
            </ul>
            <p>@{currentYear} Webb Creatives Agency.All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer