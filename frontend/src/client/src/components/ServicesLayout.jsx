import React from 'react';
import "./ServicesLayout.css"

const ServicesLayout = () => {
  return (
    <div className="services-layout">
      <h2 className="services-heading">
        Innovative
        <br />
        Design Services
      </h2>
      <div className="services-container">
        <div className="service-box">
          <p>Design more visually striking and refined, consider incorporating a modern and elegant aesthetic.</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </div>
        <div className="service-box">
          <p>Design more visually striking and refined, consider incorporating a modern and elegant aesthetic.</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
        </div>
      </div>
      
    </div>
  );
};

export default ServicesLayout;