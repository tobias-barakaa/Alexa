import "./HeroLayout.css";
import google from '../assets/images/googleimg.png'; 

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
        <div className="right-item right-item1">Right Item 1</div>
        <div className="right-item right-item2">Right Item 2</div>
        <div className="right-item right-item3">Right Item 3</div>
        <div className="right-item right-item4">Right Item 4</div>
        <div className="right-item right-item5">Right Item 5</div>
        <div className="right-item right-item6">Right Item 6</div>
        <div className="right-item right-item7">Right Item 7</div>

      </div>
    </div>

  );
};

export default HeroLayout;