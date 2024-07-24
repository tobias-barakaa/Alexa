import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="dashboard-header">
     
        <div className="top-nav">
          <span className="home">
            <Link to="/">Home</Link> | About Website | FAQ | Contact us
          </span>
        </div>
        
    </div>
  );
}

export default Header;
