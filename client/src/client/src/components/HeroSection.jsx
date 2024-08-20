import './HeroSection.css';
import ClientRegister from '../pages/ClientRegister';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="left-side">
          <p>Professional Writing Assistant for Articles, CVs, and Blogs</p>
          <span>
            Elevate your writing with AI-powered assistance. Create compelling articles, polished CVs, and engaging blog posts in minutes!
          </span>
          <div className="button-group">
            <button className="btn btn-primary">Start Writing</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <ClientRegister />
      </div>
    </div>
  );
};

export default HeroSection;
