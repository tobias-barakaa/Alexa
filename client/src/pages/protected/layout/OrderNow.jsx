import React from 'react';
import './OrderNow.css';

import curatedLinksIcon from '../../../assets/images/order.svg';
import naturalLinksIcon from '../../../assets/images/ongoing.svg';
import peopleImage from '../../../assets/images/upcoming.svg';

const OrderNow = () => {
  return (
    <div className="order-now">
      <div className="services-header">
        <h2>Our Services</h2>
        <div className="service-items">
          <div className="service-item white-bg">
            <img src={curatedLinksIcon} alt="Curated Links Icon" className="service-icon" />
            <div className="service-text">
              <h3>Curated Links</h3>
              <p>Natural link placements in existing content that is highly relevant.</p>
              <hr />
              <ul>
                <li>Content already exists and is indexed in Google.</li>
                <li>Article is highly relevant to your website & niche.</li>
                <li>Drive strong authority because the content is aged.</li>
              </ul>
              <button className="order-button">Order Now</button>
            </div>
          </div>
          <div className="service-item white-bg">
            <img src={naturalLinksIcon} alt="Natural Links Icon" className="service-icon" />
            <div className="service-text">
              <h3>Natural Links</h3>
              <p>Natural link placements in existing content that is highly relevant.</p>
              <hr />
              <ul>
                <li>Content already exists and is indexed in Google.</li>
                <li>Article is highly relevant to your website & niche.</li>
                <li>Drive strong authority because the content is aged.</li>
              </ul>
              <button className="order-button">Order Now</button>
            </div>
          </div>
          <div className="service-item hire-writer-item">
            <img src={peopleImage} alt="People" className="people-image" />
            <div className="service-text">
              <h3>Hire a Writer</h3>
              <p>Did you know, you can book a call with our in-house specialists to go over your strategy? Book a call at a time to suit you and we will do what we can to help.</p>
              <button className="hire-button">Hire a Personal Writer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
