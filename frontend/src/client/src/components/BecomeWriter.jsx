import React from 'react';
import './BecomeWriter.css'; // External CSS file

const BecomeWriter = () => {
  return (
    <div className="become-writer-container">
      <div className="become-writer-flex">
        {/* Left Section */}
        <div className="become-writer-left">
          <h2 className="become-writer-heading">Scale with Us</h2>
          <p className="become-writer-paragraph">
            Enwriters is audited and certified by industry-leading Third Party Standards.
          </p>
          <div className="become-writer-buttons">
            <button className="black-button">Become Writer</button>
            <button className="outline-button">Get Started</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="become-writer-right">
          <div className="right-content">
            <h3 className="right-subheading">Join Our Writing Community</h3>
            <p className="right-paragraph">
              Connect with professional writers, access exclusive opportunities, and grow your career with us.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Active Writers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeWriter;
