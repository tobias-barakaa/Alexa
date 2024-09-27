import './Header.css';
import centerImage from '../assets/images/Enwrit.png';
import { Gem, LayoutDashboard } from 'lucide-react';

const Header = () => {
  return (
    <header className="headerr" >
      {/* Left - Logo */}
      <div className="header-left">
        <img className='enwrit' src={centerImage} alt="Enwrit" />
      </div>

      {/* Right - Navigation and Buttons */}
      <div className="header-right">
        {/* Middle - Icons with Text */}
        <div className="header-middle">
          <div className="nav-item">
            <LayoutDashboard className="nav-icon" />
            <span className="nav-text">Dashboard</span>
          </div>
          <div className="nav-item">
            <Gem className="nav-icon" />
            <span className="nav-text">Pricing</span>
          </div>
        </div>

        {/* Right - Buttons */}
        <button className="border-button">Hire Professional Writers</button>
        <button className="blue-button">Login or Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
