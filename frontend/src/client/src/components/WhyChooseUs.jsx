import './WhyChooseUs.css';
import fastIcon from '../assets/images/groupp.png';
import supportIcon from '../assets/images/groupp.png';
import qualityIcon from "../assets/images/groupp.png";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2 className="why-choose-us-heading">Why Choose Our Services?</h2>
      <p className="why-choose-us-subheading">
        We offer top-quality article writing and services to elevate your brand.
      </p>

      <div className="benefits-container">
        <div className="benefit-box">
          <img src={qualityIcon} alt="Quality Service" className="benefit-icon" />
          <h4>High-Quality Content</h4>
          <p>
            Our team of expert writers ensures well-researched, plagiarism-free,
            and engaging content tailored to your audience.
          </p>
        </div>

        <div className="benefit-box">
          <img src={fastIcon} alt="Fast Delivery" className="benefit-icon" />
          <h4>Fast Turnaround</h4>
          <p>
            We understand the value of time, and we guarantee timely delivery
            without compromising on quality.
          </p>
        </div>

        <div className="benefit-box">
          <img src={supportIcon} alt="24/7 Support" className="benefit-icon" />
          <h4>24/7 Support</h4>
          <p>
            Our customer service team is available around the clock to assist
            you with your needs and questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
