import "./HeroLayout.css";
import google from '../assets/images/googleimg.png';
import free from '../assets/images/free.jpg';
import alexa from '../assets/images/alexa.jpg';
import writer from '../assets/images/writer.jpg';

const HeroLayout = () => {
  return (
    <div className="wrapper">
      <div className="left-side">Left Side</div>
      <div className="right-sidee">
        <div className="item1">item 1</div>
        <div className="item2">item 2</div>
        <div className="item3">item 3</div>
        <div className="item4">item 4</div>
        <div className="item5">item 5</div>
      
      </div>
    </div>
  );
};

export default HeroLayout;
