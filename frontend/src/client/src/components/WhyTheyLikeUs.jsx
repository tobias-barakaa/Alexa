import { FaRocket, FaUserFriends, FaChartLine } from 'react-icons/fa';
import './WhyTheyLikeUs.css';

const WhyTheyLikeUs = () => {
  const reasons = [
    {
      icon: <FaRocket />,
      title: "Fast Delivery",
      description: "We prioritize quick and efficient delivery of our services to meet your deadlines.",
      bgClass: "blue-bg"
    },
    {
      icon: <FaUserFriends />,
      title: "Customer Support",
      description: "Our dedicated team provides excellent support throughout your journey with us.",
      bgClass: "blue-bg"
    },
    {
      icon: <FaChartLine />,
      title: "Proven Results",
      description: "Our track record speaks for itself, with consistent growth and success for our clients.",
      bgClass: "grey-bg"
    },
    {
        icon: <FaChartLine />,
        title: "Proven Results",
        description: "Our track record speaks for itself, with consistent growth and success for our clients.",
        bgClass: "grey-bg"
      },

     
  ];

  return (
    <div className="why-they-like-us-container">
      <div className="why-they-like-us-heading">
        Why Our Client are happy, <span className="fading-blue">makes sense.</span>
      </div>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className={`reason-card ${reason.bgClass}`}>
            <div className="reason-icon">{reason.icon}</div>
            <h4 className="reason-title">{reason.title}</h4>
            <p className="reason-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyTheyLikeUs;