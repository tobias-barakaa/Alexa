import React, { useState } from 'react';
import './NavDiv.css';
import backgroundImage from '../../assets/images/office.jpg';

const NavDiv = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div className="nav-logo">
            <span className="logo-en">En</span>
            <span className="logo-writers">writers</span>
          </div>
          <ul className="nav-links">
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
          <div className="right-buttons">
            <div className="login-button">
            <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </div>
            <a href="#" className="hire-writers">Hire Personal Writers</a>
          </div>
        </nav>
      </header>
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <div className="content-left">
            <h1>Market leader in lead generation within the Benelux.</h1>
            <p>
              We help large and small businesses in the Netherlands and Belgium get a
              consistent stream of unique leads and better brand awareness.
            </p>
            <div className="content-buttons">
              <button className="btn-outline">Learn More</button>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
          <div className="content-right">
            <form className="signup-form">
              <h2>Sign Up</h2>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default NavDiv;
