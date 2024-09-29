import React from 'react';
import "./HeroSection.css";
import org from "../assets/images/org.png";
import { DownloadCloud, LucideChevronLeftSquare, Satellite, SatelliteDish, StretchHorizontal, StretchVertical } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className='title-hero'>Your talent is worth the money</h1>
        <p>The best way for content creators to make money and connect with the audience</p>
        <div className="feature-grid">
          <div className="feature-item">
            <LucideChevronLeftSquare className='icon' />
            <span className="text">Subscription </span>
          </div>
          <div className="feature-item">
            <StretchHorizontal className='icon' />
            <span className="text">Streams</span>
          </div>
          <div className="feature-item">
           <Satellite className='icon' />
            <span className="text">Donations</span>
          </div>
          <div className="feature-item">
            <StretchVertical className='icon' />
            <span className="text">Fundraising</span>
          </div>
          <div className="feature-item">
            <DownloadCloud className='icon' />
            <span className="text">private chats</span>
          </div>
          <div className="feature-item">
            <SatelliteDish className='icon' />
            <span className="text">Blog stats</span>
          </div>
          
        </div>
        <button className="cta-button">Get Started</button>
      </div>

      

        <div className="hero-image">
        {/* <img src={org} alt="Hero section" className="card-image" /> */}

      </div>
      
    </div>
  );
};

export default HeroSection;
