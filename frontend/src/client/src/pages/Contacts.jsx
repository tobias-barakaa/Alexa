import React, { useState, useEffect } from 'react';
import './Contacts.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  const handleHomeNavigation = () => {
    navigate('/');
  };

  return (
    <div className="contacts-container">
      <div className="contacts-content">
        {/* Left Section */}
        <div className="contacts-left">
          <h4 className="questions-heading">
            <span>Still have a</span> <br />
            <span>questions?</span>
          </h4>
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaLinkedin className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
          <button className="home-btn" onClick={handleHomeNavigation}>
            <FaHome className="home-icon" /> Back to Home
          </button>
        </div>

        {/* Right Section */}
        <div className="contacts-right">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
          <textarea placeholder="Your Message" className="textarea-field" />
          <button className="submit-btn">Submit</button>
          <div className="footer-text">
            <p>© Enwriters. All Rights Reserved {year}. Licensing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
