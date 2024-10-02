import "./HeroLayout.css";
import google from '../assets/images/googleimg.png'; 
import free from '../assets/images/free.jpg';

const HeroLayout = () => {
  return (
    <div className="containerrr">
      {/* Left Section */}
      <div className="left-section">
        <div className="left-item">Left Item 1</div>
        <div className="left-item">Left Item 2</div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        
        <img className="right-item right-item3" src={free} />

        <div className="right-item right-item4">Right Item 4</div>
        <img className="right-item right-item5" src={google} />

        <div className="right-item right-item6">Right Item 6</div>
        <div className="right-item right-item7">Right Item 7</div>

      </div>
    </div>

  );
};

export default HeroLayout;