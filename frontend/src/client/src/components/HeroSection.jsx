import './HeroSection.css';
import centerImage from '../assets/images/come.png'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image-container">
  <img src={centerImage} alt="Hero" className="hero-image" />
  <div className="overlay">
    <div>
      <h1>Get Professional Writing Assistance Today!</h1>
      <p>high-quality articles, engaging blog posts, or standout resumes</p>
    </div>
  </div>
</div>

        
    </div>
  );
};

export default HeroSection;
