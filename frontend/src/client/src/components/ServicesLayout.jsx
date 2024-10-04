import './ServicesLayout.css';
import { FileChartLine } from 'lucide-react'; // Using Lucide icon library, you can replace with any

const ServicesLayout = () => {
  return (
    <div className="services-layout">
      {/* Left Side */}
      <div className="left-sideee">
        <h4 className="left-headingg">Our Services</h4>
        <p className="service-description">
          Physical, digital, meta-physical – We’ll find a creative solution for all your business problems.
        </p>

        {/* Bordered div with hover effect */}
        <div className="service-box">
          <div className="icon-wrapper">
            <FileChartLine size={30} color="black" />
          </div>
          <h5 className="service-title">Web Development</h5>
          <p className="service-hidden-description">
            We provide world-class web development services to elevate your digital presence.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-sideee">
        <h4 className="view-services">View Services</h4>

        {/* Similar div with heading and hover effect */}
        <div className="service-box">
          <div className="icon-wrapper">
            <FileChartLine size={30} color="black" />
          </div>
          <h5 className="service-title">Mobile App Development</h5>
          <p className="service-hidden-description">
            We build cross-platform mobile apps to ensure your business reaches every corner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;
