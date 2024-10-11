import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdChatBubbleOutline } from 'react-icons/md'; // Example icon for the 'REAL TALK' section
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <div className="left-column">
            <h4>What We Do</h4>
            <ul>
              <li>Article Writing</li>
              <li>Blog Writing</li>
              <li>Resume Writing</li>
              <li>Email Copywriting</li>
            </ul>
          </div>
          <div className="left-column">
            <h4>Our Services</h4>
            <ul>
              <li>Website Content</li>
              <li>SEO Optimization</li>
              <li>Press Releases</li>
              <li>Technical Writing</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="real-talk-icon">
            <MdChatBubbleOutline className="icon" />
          </div>
          <h2 className="real-talk-heading">REAL TALK</h2>
          <h5 className="real-talk-subheading">Let's work together!</h5>
          <Link to="/contact-us" className="message-input">
            <span>SEND US A MESSAGE</span>
            <AiOutlineArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media">
        <FaFacebook className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaLinkedin className="social-icon" />
        <FaInstagram className="social-icon" />
      </div>
    </footer>
  );
};

export default Footer;
