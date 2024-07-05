import React from 'react';
import './NavDiv.css';

const NavDiv = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          Enwriters
        </div>
        <div className="nav-items">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <div className="nav-dropdown">
            Our Services <i className="fas fa-chevron-down"></i>
            <div className="dropdown-content">
              <div className="dropdown-column">
                <div className="dropdown-item">
                  <strong>Service 1</strong>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="dropdown-item">
                  <strong>Service 2</strong>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="dropdown-item">
                  <strong>Service 3</strong>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </div>
              </div>
              <div className="dropdown-column">
                <div className="dropdown-item">
                  <strong>Service 4</strong>
                  <p>Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                </div>
                <div className="dropdown-item">
                  <strong>Service 5</strong>
                  <p>In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="dropdown-item">
                  <strong>Service 6</strong>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-dropdown">
            Company <i className="fas fa-chevron-down"></i>
            <div className="dropdown-content">
              <div className="dropdown-column">
                <div className="dropdown-item">
                  <strong>About Us</strong>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="dropdown-item">
                  <strong>Our Team</strong>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="dropdown-item">
                  <strong>Careers</strong>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </div>
                <div className="dropdown-item">
                  <strong>Contact</strong>
                  <p>Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="nav-link">Contact</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">Portfolio</a>
        </div>
        <div className="nav-actions">
          <a href="#" className="nav-link">Sign In</a>
          <button className="nav-button">Get Started</button>
        </div>
      </nav>
      <hr className="nav-hr" />
    </>
  );
};

export default NavDiv;
