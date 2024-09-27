import { useState } from 'react';
import './HeroSection.css';
import SignUpForm from './SignUpForm';

const HeroSection = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="hero-section">
  <div className="hero-left">
  <h1 className="hero-title">
          Professional Article Creation <br />
          and Natural Content Management
        </h1>
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








