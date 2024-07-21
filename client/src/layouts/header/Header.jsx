import React, { useState } from 'react';
import "./Header.css";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="nav-logo">
            <span className="logo-en">En</span>
            <span className="logo-writers">writers</span>
          </div>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#"><i className="bi bi-house"></i> Home</a>
            </li>
            <li 
              className="dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a href="#">Services <i className="bi bi-caret-down"></i></a>
              {isServicesOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#">Service 1</a></li>
                  <li><a href="#">Service 2</a></li>
                  <li><a href="#">Service 3</a></li>
                  <li><a href="#">Service 4</a></li>
                  <li><a href="#">Service 5</a></li>
                </ul>
              )}
            </li>
            <li 
              className="dropdown"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <a href="#">Company <i className="bi bi-caret-down"></i></a>
              {isCompanyOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#"><i className="bi bi-person-lines-fill"></i> Contact</a>
            </li>
          </ul>
          <div className={`right-buttons ${isMenuOpen ? 'active' : ''}`}>
            <div className="login-button">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </div>
            <button className="hire-writers">Hire Personal Writers</button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;