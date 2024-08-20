import React from 'react';
import './HeroSection.css';
import ClientRegister from '../pages/ClientRegister';

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
       <ClientRegister />
      </div>
    </div>
    </div>
  );
};

export default HeroSection;