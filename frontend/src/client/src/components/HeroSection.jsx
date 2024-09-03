import './HeroSection.css';
import centerImage from '../assets/images/come.png'
import { FaCheckCircle, FaGoogle } from 'react-icons/fa'; // For the icons


const HeroSection = () => {
  return (
    <>
    <div className="hero-section">
      <div className="hero-image-container">
  <img src={centerImage} alt="Hero" className="hero-image" />
  <div className="overlay">
    <div>
      <h1>Get Professional Writing Assistance Today!</h1>
      <p>high-quality articles, engaging blog posts, and standout resumes</p>
    </div>
  </div>
</div>

        
    </div>

    <div className="business-page">
      <div className="left-div">
        <div className="features">
          <div className="feature-item">
            <i className="fas fa-cog"></i>
            <span>Automated</span>
          </div>
          <div className="feature-item">
            <i className="fas fa-shield-alt"></i>
            <span>Trusted</span>
          </div>
          <div className="feature-item">
            <i className="fas fa-adjust"></i>
            <span>Flexible</span>
          </div>
          <div className="feature-item">
            <i className="fas fa-chart-line"></i>
            <span>Scalable</span>
          </div>
        </div>
        
      </div>
      
      <div className="right-div">
        <h3 className="signup-title">Sign Up</h3>
        <form className="signup-form">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <input type="password" placeholder="Password" className="form-input" />
          <button type="button" className="google-button">
            <img src={centerImage} alt="Google" className="google-icon" /> Sign up with Google
          </button>
          <p className="signin-question">Already have an account? <a href="/signin">Sign In</a></p>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
