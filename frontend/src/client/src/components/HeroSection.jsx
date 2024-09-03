import "./HeroSection.css";
import centerImage from "../assets/images/come.png";
import { FaCheckCircle, FaGoogle } from "react-icons/fa"; // For the icons
import ClientRegister from "../pages/ClientRegister";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-image-container">
          <img src={centerImage} alt="Hero" className="hero-image" />
          <div className="overlay">
            <div>
              <h1>Get Professional Writing Assistance Today!</h1>
              <p>
                high-quality articles, engaging blog posts, and standout resumes
              </p>
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
        {/* <h2 className="empower-title">Empower Your Business</h2>
    <img src={centerImage} alt="Empower" className="feature-image" /> */}

        <div className="right-div">
          <div className="signup-title">Sign Up</div>
          <ClientRegister />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
