import { useState } from 'react';
import './HeroSection.css';
import SignUpForm from './SignUpForm';

const HeroSection = () => {

  return (
    <div className="hero-section">
  <div className="hero-left">
  <h1 className="hero-title">
  Crafting Authentic <br />
  Articles with Expert <br />
  Precision and Care
</h1>
<p className="hero-description">
  We specialize in delivering high-quality, natural content that connects with your audience effortlessly. 
 
</p>


    <div className="button-container">
      <div className="hero-button blue-button">Article Writing</div>
      <div className="hero-button grey-button">Content Strategy</div>
      <div className="hero-button white-button">SEO Optimization</div>
      <div className="hero-button black-button">Editing Services</div>
    </div>
  </div>
  <div className="hero-righ">
  <SignUpForm />

  </div>
</div>

  );
};

export default HeroSection;








