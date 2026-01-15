import React from 'react';
import '../navbar/Navbar.css';
import LOGO from '../../assets/logo.svg';
import PrimaryBtn from '../btn/primaryBtn';

const Navbar = () => {
  return (
    <nav>
        <img src={LOGO} alt="web creatives" className="logo" />
        <ul className="navbar_links">
            <li>
                <a href="">
                  home
                </a>
            </li>
            <li>
                <a href="">
                  about
                </a>
            </li>
            <li>
                <a href="">
                 case study
                </a>
            </li>
        </ul>
        <div className="contact-btn">
          <PrimaryBtn text="Contact Us" />
        </div>
    </nav>
  )
}

export default Navbar