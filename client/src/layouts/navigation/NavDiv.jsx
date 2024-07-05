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
      <i className="bi bi-bootstrap-reboot"></i>
      <div className="dropdown-item-content">
        <strong>Service 1</strong>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div className="dropdown-item">
      <i className="bi bi-bootstrap-reboot"></i>
      <div className="dropdown-item-content">
        <strong>Service 2</strong>
        <p>Sed do eiusmod tempor.</p>
      </div>
    </div>
    <div className="dropdown-item">
      <i className="bi bi-bootstrap-reboot"></i>
      <div className="dropdown-item-content">
        <strong>Service 3</strong>
        <p>Ut enim ad minim veniam.</p>
      </div>
    </div>
  </div>
  <div className="dropdown-column">
    <div className="dropdown-item">
      <i className="bi bi-bootstrap-reboot"></i>
      <div className="dropdown-item-content">
        <strong>Service 4</strong>
        <p>Nisi ut aliquip ex ea.</p>
      </div>
    </div>
    <div className="dropdown-item">
      <i className="bi bi-bootstrap-reboot"></i>
      <div className="dropdown-item-content">
        <strong>Service 5</strong>
        <p>Duis aute irure dolor.</p>
      </div>
    </div>
    <div className="dropdown-item">
      <i className="bi bi-bootstrap-reboot"></i>
      <div className="dropdown-item-content">
        <strong>Service 6</strong>
        <p>Excepteur sint occaecat.</p>
      </div>
    </div>
  </div>
</div>
          </div>
          <div className="nav-dropdown">
            Company <i className="fas fa-chevron-down"></i>
            <div className="dropdown-content">
              <div className="dropdown-column">
                <div className="dropdown-item">
                  <i className="fas fa-building"></i>
                  <strong>About Us</strong>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="dropdown-item">
                <i className="bi bi-arrow-clockwise"></i>
                  <strong>Our Team</strong>
                  <p>Sed do eiusmod tempor.</p>
                </div>
                <div className="dropdown-item">
                  <i className="fas fa-briefcase"></i>
                  <strong>Careers</strong>
                  <p>Ut enim ad minim veniam.</p>
                </div>
                <div className="dropdown-item">
                  <i className="fas fa-phone"></i>
                  <strong>Contact</strong>
                  <p>Nisi ut aliquip ex ea.</p>
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
