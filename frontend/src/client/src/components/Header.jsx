import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/components/Header.css';
import logo from '../assets/images/llo.png';
import pleskImage from '../assets/images/tob.png';

const Header = () => {
  return (
    <>
     <div className="home-page">
     <header className="header">
      <div className="loggo">
        <img src={logo} alt="Logo" />
      </div>
    </header>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Try Plesk for FREE on Your Server</h1>
          <p className="hero-subtitle">Grow your business with our complete solution - for Linux or Windows</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;