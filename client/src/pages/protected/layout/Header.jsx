import { Link } from "react-router-dom";
import "./Header.css";
import Hellobar from "./Hellobar";

const Header = () => {


  return (
    <div className="dashboard-header">
      <div className="main-nav">
        <div className="top-nav">
          <span className="home">
            Home<span>
              <Link to="/" ></Link>
            </span> | About Website | FAQ | Contact us
          </span>
        </div>
        <Hellobar />
        <div className="bottom-nav">
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search..." />
            <i className="bi bi-search search-icon"></i>
          </div>
          <button className="gradient-button">
            <span><i className="bi bi-wallet-fill"></i></span>
            Wallet
          </button>
          <button className="gradient-button">
            <span><i className="bi bi-person-circle"></i></span>
            Profile
          </button>
          <button className="gradient-button">
            <span><i className="bi bi-gear-wide-connected"></i></span>
            Settings
          </button>
          <button className="gradient-button">
            <span><i className="bi bi-box-arrow-right"></i></span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
