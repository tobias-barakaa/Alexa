import './HeroSection.css'; // Import CSS for styling
import { FaRegChartBar, FaUserFriends, FaDollarSign, FaComments, FaLock, FaSignal } from 'react-icons/fa';
import hero from '../assets/images/pre.png'

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Left Side Content */}
      <div className="hero-left">
        <h1 className='talent'>Your talent is worth the money</h1>
        <p className="hero-description">
          The best way for content creators to make money
          <br />
          and connect with the audience
        </p>

        {/* Icons and Labels Divs */}
        <div className="icon-row">
          <div className="icon-box">
            <FaRegChartBar className="icon" />
            <span>Subscription levels</span>
          </div>
          <div className="icon-box">
            <FaUserFriends className="icon" />
            <span>Streams</span>
          </div>
          <div className="icon-box">
            <FaDollarSign className="icon" />
            <span>Donations</span>
          </div>
        </div>
        <div className="icon-row">
          <div className="icon-box">
            <FaSignal className="icon" />
            <span>Fundraising</span>
          </div>
          <div className="icon-box">
            <FaComments className="icon" />
            <span>Access to private chats</span>
          </div>
        </div>
        <div className="icon-row">
          <div className="icon-box">
            <FaLock className="icon" />
            <span>Blog stats</span>
          </div>
          <div className="icon-box">
            <FaRegChartBar className="icon" />
            <span>Private posts</span>
          </div>
        </div>

        {/* Get Started Button */}
        <button className="get-started-btn">Get Started</button>
      </div>

      {/* Right Side Image */}
      <div className="hero-right">
        <img
          src={hero} // Replace with your desired image
          alt="Content Creator"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
