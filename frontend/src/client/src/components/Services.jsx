import React from 'react';
import './Services.css'; // Import your CSS file

const Services = () => {
  return (
    <div className="services-layout">
      <div className="frameonecontent">
        <h4 className="services-heading">Our Services</h4>
        <p className="services-description">
          Physical, digital, meta-physical – We’ll find a creative solution for all your business problems.
        </p>
        <div className="service-item">
          <div className="icon-container">
            <i className="fas fa-cog"></i> {/* Replace with your icon */}
          </div>
          <h5 className="item-title">Service One</h5>
          <p className="item-description">Description of service one.</p>
        </div>
        <div className="service-item">
          <div className="icon-container">
            <i className="fas fa-shield-alt"></i> {/* Replace with your icon */}
          </div>
          <h5 className="item-title">Service Two</h5>
          <p className="item-description">Description of service two.</p>
        </div>
        <div className="service-item">
          <div className="icon-container">
            <i className="fas fa-chart-line"></i> {/* Replace with your icon */}
          </div>
          <h5 className="item-title">Service Three</h5>
          <p className="item-description">Description of service three.</p>
        </div>
      </div>

      <div className="frametwocontent">
        <h4 className="view-services-heading">View Services</h4>
        <div className="service-item">
          <div className="icon-container">
            <i className="fas fa-cog"></i> {/* Replace with your icon */}
          </div>
          <h5 className="item-title">Service One</h5>
          <p className="item-description">Description of service one.</p>
        </div>
        <div className="service-item">
          <div className="icon-container">
            <i className="fas fa-shield-alt"></i> {/* Replace with your icon */}
          </div>
          <h5 className="item-title">Service Two</h5>
          <p className="item-description">Description of service two.</p>
        </div>
        <div className="service-item">
          <div className="icon-container">
            <i className="fas fa-chart-line"></i> {/* Replace with your icon */}
          </div>
          <h5 className="item-title">Service Three</h5>
          <p className="item-description">Description of service three.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;