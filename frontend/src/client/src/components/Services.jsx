import { FaCog, FaRocket, FaChartBar, FaShieldAlt } from 'react-icons/fa';
import centerImage from '../assets/images/tobby.png';
import './Services.css';

const Services = () => {
  const serviceItems = [
    {
      icon: <FaCog />,
      title: "Advanced Features",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do."
    },
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do."
    },
    {
      icon: <FaChartBar />,
      title: "Data Analytics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do."
    },
    {
      icon: <FaShieldAlt />,
      title: "Enhanced Security",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do."
    }
  ];

  return (
    <div className="services-container">
      <div className="services-heading">
        We Deliver <span className="gradient-text">higher Services</span> models, faster
      </div>
      <p className="services-subheading">
        Label Studio Enterprise has all the features your team needs to be collaborative, efficient, and<br /> compliant.
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