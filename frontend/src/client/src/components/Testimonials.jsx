import { FaQuoteLeft } from 'react-icons/fa';  
import './Testimonials.css'; 
import centerImage from '../assets/images/tobby.png';


const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="main-heading">BUILT ON TRUST</div>
      <div className="sub-heading">What our clients are saying</div>

      <div className="testimonial-container">
        <div className="testimonial">
          <img src={centerImage} alt="Reviewer" className="reviewer-image" />
          <div className="icon-container">
            <FaQuoteLeft size={60} className="quote-icon" />
          </div>
          <div className="review-content">
            <p className="review-text">
              A heartfelt thank you to the all-<br />
              volunteer team that built and <br />
              launched The ImmuneCorps, a site <br />
              to connect those who need help<br />
              with those who can help.
            </p>
            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="reviewer-name">John Doe</p>
            <p className="reviewer-role">Client</p>
          </div>
        </div>

        <div className="testimonial">
          <div className='icon-image'>
          <div className="icon-container">
            <FaQuoteLeft size={40} className="quote-icon" />
          </div>
          <img src={centerImage} alt="Reviewer" className="reviewer-image" />
          </div>

          <div className="review-content">
            <p className="review-text">
              Working with this team has been<br />
              an absolute pleasure. They delivered<br />
              high-quality work and met all<br />
              deadlines, exceeding our <br />
              expectations in every way.
            </p>
            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="reviewer-name">Jane Smith</p>
            <p className="reviewer-role">Freelancer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
