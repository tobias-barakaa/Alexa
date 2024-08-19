import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">

<div className="hero-content">


        <div className="left-side">
          <p>Professional Writing Assistant for Articles, CVs, and Blogs</p>

          <>Elevate your writing with AI-powered assistance. Create compelling articles, polished CVs, and engaging blog posts in minutes!</>
          <div className="button-group">
            <button className="btn btn-primary">Start Writing</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>




      {/* <div className="hero-left">
        <h1 className="hero-title">Free Logo Maker + Unlimited Free Downloads</h1>
        <p className="hero-subtitle">
          Download your logo 100% free. Unlimited designs, powered by AI. Make the perfect logo in minutes!
        </p>
        <div className="hero-buttons">
          <button className="hero-button-large">Get Started</button>
          <button className="hero-button-small">Learn More</button>
        </div>
      </div> */}
      <div className="hero-right">
        <div className="signup-box">
        <div className="signup-title-container">
            <h3 className="signup-title">Sign Up</h3>
          </div>
          <input type="text" placeholder="Name" className="signup-input" />
          <input type="email" placeholder="Email" className="signup-input" />
          <input type="password" placeholder="Password" className="signup-input" />
          <button className="signup-button">Sign Up</button>
          <button className="google-button-signup">Sign up with Google</button>
          <a href="#" className="login-link">Already have an account? Log in</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;