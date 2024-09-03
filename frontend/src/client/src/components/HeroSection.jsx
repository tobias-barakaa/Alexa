import './HeroSection.css';
import ClientRegister from '../pages/ClientRegister';
import { Link } from 'react-router-dom';
import centerImage from '../assets/images/come.png'

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* <div className="hero-content"> */}
      <div className="hero-image-container">
  <img src={centerImage} alt="Hero" className="hero-image" />
  <div className="overlay">
    <div>
      <h1>Try Plesk for FREE on Your Server</h1>
      <p>Grow your business with our complete solution - for Linux or Windows</p>
    </div>
  </div>
</div>

        
    </div>
  );
};

export default HeroSection;
