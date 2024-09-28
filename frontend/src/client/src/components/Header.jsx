import './Header.css';
import centerImage from '../assets/images/Enwrit.png';
import { Gem, LayoutDashboard } from 'lucide-react';

const Header = () => {
  return (
    <header className="headerr" >
      <div className="header-left">
        <img className='enwrit' src={centerImage} alt="Enwrit" />
      </div>

      <div className="header-right">
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

        <button className="border-button">Hire Professional Writers</button>
        <button className="blue-button">Login or Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
