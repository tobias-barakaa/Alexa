import { useEffect } from 'react';
import { FaDollarSign, FaShippingFast, FaChartLine, FaTools } from 'react-icons/fa';
import "./StaggeredLayout.css"

const WhyUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.why-us-item');
      const windowHeight = window.innerHeight;

      items.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight - 100) {
          setTimeout(() => {
            item.classList.add('show');
          }, index * 150); // Increased stagger effect
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <FaDollarSign />,
      title: "Cost Efficiency",
      description: "Optimize your supply chain and reduce operational costs with our innovative solutions.",
      background: "/api/placeholder/300/180"
    },
    {
      icon: <FaShippingFast />,
      title: "Swift Delivery",
      description: "Experience lightning-fast deliveries with our optimized logistics network.",
      background: "/api/placeholder/300/180"
    },
    {
      icon: <FaChartLine />,
      title: "Smart Insights",
      description: "Make data-driven decisions that propel your business growth and efficiency.",
      background: "/api/placeholder/300/180"
    },
    {
      icon: <FaTools />,
      title: "Cutting-Edge Tools",
      description: "Leverage state-of-the-art technology to streamline your processes and boost productivity.",
      background: "/api/placeholder/300/180"
    }
  ];

  return (
    <div className="why-us-section">
      <h2 className="why-us-heading">Why Choose Us</h2>
      <p className="why-us-subheading">
        Elevate your business with our exceptional services designed to optimize operations and drive unprecedented growth.
      </p>

      <div className="why-us-container">
        {services.map((service, index) => (
          <div key={index} className="why-us-item">
            <div className="icon-container" style={{ backgroundImage: `url(${service.background})` }}>
              {service.icon}
            </div>
            <div className="content-container">
              <h3 className="why-us-title">{service.title}</h3>
              <p className="why-us-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;