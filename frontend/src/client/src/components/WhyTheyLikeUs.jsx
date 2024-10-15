import React from 'react';
import { FaThumbsUp, FaStar, FaHeart } from 'react-icons/fa';
import './WhyTheyLikeUs.css'; // Link to your CSS file

const WhyTheyLikeUs = () => {
  return (
    <div className="why-they-like-us-section">
      <h3>
        Why Our Customers like us, <span className="makes-sense">makes sense.</span>
      </h3>
      <div className="why-they-like-us-content">
        <div className="why-us-item fading-blue">
          <FaThumbsUp size={40} className="why-us-icon" />
          <h4>High Quality</h4>
          <p>We ensure top-notch service that meets the highest standards.</p>
        </div>
        <div className="why-us-item fading-blue">
          <FaStar size={40} className="why-us-icon" />
          <h4>Top Ratings</h4>
          <p>Our customers love our services and constantly give us 5-star ratings.</p>
        </div>
        <div className="why-us-item white-grey">
          <FaHeart size={40} className="why-us-icon" />
          <h4>Customer Love</h4>
          <p>We build lasting relationships with our clients based on trust.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyTheyLikeUs;
