import { Zap, Globe, Palette, Cpu } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Zap size={65} color='#3498db' />,
      title: "Accelerated Innovation",
      description: "Speed up your project development with high-caliber precision and innovation.",
      colorClass: "service-item-grey"
    },
    {
      icon: <Globe size={65} color='#3498db' />,
      title: "Global Reach",
      description: "Expand your digital presence and connect with global audiences seamlessly.",
      colorClass: "service-item-white"
    },
    {
      icon: <Palette size={65} color='#3498db' />,
      title: "Creative Design",
      description: "Reimagine your brand identity with bold and innovative design solutions.",
      colorClass: "service-item-blue"
    },
    {
      icon: <Cpu size={65} color='#3498db' />,
      title: "AI Transformation",
      description: "Harness AI-driven technologies to boost efficiency and innovation.",
      colorClass: "service-item-dark-grey"
    }
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Elite Services</h2>
      <p className="services-description">
        We provide top-notch services that push your business forward in today's digital world. 
        Explore what we offer and let us help you reach new heights.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-item ${service.colorClass}`}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-item-title">{service.title}</h3>
            <p className="service-item-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
