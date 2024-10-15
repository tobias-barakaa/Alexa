import React from 'react';
import { FaCog, FaRocket, FaChartBar, FaShieldAlt } from 'react-icons/fa';
import centerImage from '../assets/images/tobby.png';
import './Services.css';

const Services = () => {
  const serviceItems = [
    {
      icon: <FaCog />,
      title: "Advanced Features",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
    },
    {
      icon: <FaChartBar />,
      title: "Data Analytics",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
    },
    {
      icon: <FaShieldAlt />,
      title: "Enhanced Security",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam."
    }
  ];

  return (
    <div className="services-container">
      <div className="services-heading">
        We Deliver <span className="gradient-text">higher Services</span> models, faster
      </div>
      <p className="services-subheading">
        Label Studio Enterprise has all the features your team needs to be collaborative, efficient, and compliant.
      </p>
      <div className="services-content">
        <div className="services-image">
          <img src={centerImage} alt="Tobby" />
        </div>
        <div className="services-grid">
          {serviceItems.map((item, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{item.icon}</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;