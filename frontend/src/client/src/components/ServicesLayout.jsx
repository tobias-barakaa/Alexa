import { FaRegLightbulb, FaRegHandshake } from 'react-icons/fa';
import './ServicesLayout.css';

const ServiceLayout = () => {
  return (
    <div className="layout-container container">
      {/* First Line */}
      <div className="line">
        <div className="left-sidee first">
          <div className="text-content">
            <h3>To create a layout with two lines</h3>
            <p>
            To create a layout with two lines of divs where the first 
            line has two divs, one on the left and one on the right, 
             the second line follows a similar
             structure, you can use CSS Flexbox to achieve the layout and structure 
                </p>
          </div>
          <div className="icon-content">
            <FaRegLightbulb className="icon-large" />
          </div>
        </div>
        <div className="right-sidee">
          <div className="text-content">
            <h3>Get Expert Solutions</h3>
            <p>Find experts quickly and receive personalized proposals within minutes.</p>
          </div>
          <div className="icon-content">
            <FaRegHandshake className="icon-large" />
          </div>
        </div>
      </div>

      {/* Second Line */}
      <div className="line">
        <div className="left-side second">
          <div className="text-content">
            <h3>Fast & Reliable</h3>
            <FaRegLightbulb className="icon-medium" />
          </div>
          <div className="text-content">
            <h3>Tailored Assistance</h3>
            <FaRegHandshake className="icon-medium" />
          </div>
        </div>
        <div className="right-sidee second">
          <div className="text-content">
            <h3>Professional Quality</h3>
            <FaRegLightbulb className="icon-medium" />
          </div>
          <div className="text-content">
            <h3>Real-Time Support</h3>
            <FaRegHandshake className="icon-medium" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
