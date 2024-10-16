import { FaCheck, FaComments } from 'react-icons/fa'; // FaCheck for the ticks and FaComments for the button icon
import deliverImage from '../assets/images/deliver.png'; // Your image import
import './LetsBuild.css';

const LetsBuild = () => {
  const features = [
    'Flexible development process',
    'Fixed price billing',
    'Delivered in 3-5 weeks',
    'Dedicated Project Manager',
    'Pay by milestone'
  ];

  return (
    <div className="lets-build-section">
      <div className="lets-build-content">
        {/* Left side */}
        <div className="lets-build-left">
          <div className="lets-build-heading">
            Let’s build something <br /> awesome together
          </div>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <FaCheck className="tick-icon" /> {feature}
              </li>
            ))}
          </ul>
          <button className="lets-talk-button">
            <FaComments className="button-icon" /> Lets Talk
          </button>
        </div>

        {/* Right side - Image */}
        <div className="lets-build-right">
          <img src={deliverImage} alt="Deliver" className="deliver-image" />
        </div>
      </div>
    </div>
  );
};

export default LetsBuild;
