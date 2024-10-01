import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <div className="circular-background">
        <h4 className="why-text">Why</h4>
        <h4 className="choose-us-text">Choose Us</h4>
      </div>

      <div className="left-box">
        <div className="info-box">
          <h4>Quality Service</h4>
          <p>We provide high-quality, professional writing services for any need.</p>
        </div>
        <div className="info-box">
          <h4>Expert Writers</h4>
          <p>Our team consists of experienced professionals from various fields.</p>
        </div>
      </div>

      <div className="right-box">
        <div className="info-box">
          <h2>Timely Delivery</h2>
          <p>We ensure all projects are completed within the stipulated deadlines.</p>
        </div>
        <div className="info-box">
          <h4>Customer Support</h4>
          <p>Our support team is available 24/7 to answer any queries or concerns.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
