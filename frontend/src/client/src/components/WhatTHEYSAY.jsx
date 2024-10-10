import { useState, useEffect } from 'react';
import "./WhatTheySay.css";
export default function WhatTheySay() {
  const [bgColor, setBgColor] = useState('#3B82F6'); // Initial blue color
  
  useEffect(() => {
    const colors = [
      '#3B82F6', // blue
      '#EAB308', // yellow
      '#6B7280', // gray
      '#000000', // black
      '#22C55E'
    ];
    
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      setBgColor(colors[currentIndex]);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );

  const ZapIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );

  return (
    <div className="why-us-container">
      <div className="feature-grid">
        <div className="feature-item">
          <StarIcon />
          <h2>Premium Features</h2>
          <p>Access exclusive premium features to enhance your experience</p>
        </div>

        <div className="feature-item">
          <HeartIcon />
          <h2>Customer Support</h2>
          <p>24/7 dedicated customer support to assist you anytime</p>
        </div>

        <div className="feature-item">
          <ShieldIcon />
          <h2>Security First</h2>
          <p>Enhanced security measures to protect your data</p>
        </div>
      </div>

      <div className="cta-section" style={{ backgroundColor: bgColor }}>
        <ZapIcon />
        <div className='cta-section-heading'>Special Offer</div>
        <div className='cta-section-text'>Get started with our premium plans at special introductory prices</div>
        <button>FIND YOUR PLAN</button>
      </div>

      
    </div>
  );
}