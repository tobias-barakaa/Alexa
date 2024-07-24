import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="dashboard-header">
      <div className="main-nav">
        <div className="top-nav">
          <span className="home">
            <Link to="/">Home</Link> | About Website | FAQ | Contact us
          </span>
        </div>
        <div className="middle-nav">
          <span>Dominican Republic Haiti Jamaica Turks and Caicos Islands All countries</span>
        </div>
        <div className="bottom-nav">
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search..." />
            <i className="bi bi-search search-icon"></i>
          </div>
          <button className="gradient-button">
            Wallet
            <span><i className="bi bi-wallet-fill"></i></span>

          </button>
          <button className="gradient-button">
            Profile
            <span><i className="bi bi-person-circle"></i></span>

          </button>
          <button className="gradient-button">
            Settings
            <span><i className="bi bi-gear-wide-connected"></i></span>

          </button>
          <button className="gradient-button">
            Logout
            <span><i className="bi bi-box-arrow-right"></i></span>

          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
