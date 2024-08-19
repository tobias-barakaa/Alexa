import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/components/Header.css";
import logo from "../assets/images/logo.png";


const Header = () => {
  return (
    <>
    <header className="headerr">
      <img src={logo} className='logo' alt='logo' />
      <div className="spacer"></div>
      <div className="nav-items">
        <div className="nav-item">
        <i className="bi bi-file-earmark-person"></i>
          <span>About Us</span>
        </div>
        <div className="nav-item">
          <i className="bi bi-building"></i>
          <span>Company</span>
        </div>
       
      </div>

      <ul className="custom-button" style={{ marginRight: "40px", padding: "12px" }}>
  This is the button
</ul>

    </header>
    <hr style={{ backgroundColor: '#000000', height: '1px', border: 'none' }}/>


    </>

  );
};

export default Header;
