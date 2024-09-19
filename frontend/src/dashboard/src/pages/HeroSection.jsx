import './HeroSection.css';
import { useSelector } from 'react-redux';

const HeroSection = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="custom-div">
      <img src={userInfo.profile_pic} alt="Profile" className="profile-img" />
      <div className="text-contentt">
        <p className="logged-in-text">Logged in as <strong>{userInfo.username}</strong></p>
        <p className="description-text">
          We specialize in creating high-quality articles that meet all your writing needs, 
          with a focus on clarity, accuracy, and creativity.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
