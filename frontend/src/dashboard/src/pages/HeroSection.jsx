import React from 'react';
import './HeroSection.css';
import image from '../../../../../frontend/src/client/src/assets/images/alexa.jpg';

const HeroSection = () => {
  return (
    <div className="custom-div">
      <img src={image} alt="Profile" className="profile-img" />
      <div className="text-contentt">
        <p className="logged-in-text">Logged in as <strong>Tobias Ngaira</strong></p>
        <p className="description-text">
          We specialize in creating high-quality articles that meet all your writing needs, 
          with a focus on clarity, accuracy, and creativity.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
