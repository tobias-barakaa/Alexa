import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/components/Header.css";
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <header className="headerr">
      <img src={logo} className='header-logo' alt='logo' />
      <div className="spacer"></div>
      <div className="nav-items">
        <Link to='/about' className="nav-item">
        <i className="bi bi-file-earmark-person"></i>
          <span>About Us</span>
        </Link>
        <div className="nav-item">
          <i className="bi bi-building"></i>
          <span>Company</span>
        </div>
       
      </div>

      <Link  to="comingsoon" className="custom-button" style={{ marginRight: "40px", padding: "12px" }}>
  Become a Writer
</Link>

    </header>
    <hr style={{ backgroundColor: '#000000', height: '1px', border: 'none' }}/>


    </>

  );
};

export default Header;
