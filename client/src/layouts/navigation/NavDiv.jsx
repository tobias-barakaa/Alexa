// NavDiv.jsx
import "./NavDiv.css";


const NavDiv = () => {

  
  return (
  <>
   <nav className="nav">
  <div className="nav-logo">
    Enwriters
  </div>
  <div className="nav-items">
    <a href="#" className="nav-link">Home</a>
    <a href="#" className="nav-link">About</a>
    <a href="#" className="nav-link">Services</a>
    <a href="#" className="nav-link dropdown-toggle">
      Our Services
      <i className="fas fa-chevron-down"></i>
    </a>
    <a href="#" className="nav-link">Contact</a>
    <a href="#" className="nav-link">Blog</a>
    <a href="#" className="nav-link">Portfolio</a>
  </div>
  <div className="nav-actions">
    <a href="#" className="nav-link">Sign In</a>
    <button className="nav-button">Get Started</button>
  </div>
  <hr className="nav-hr" />
</nav>


  </>
  
  );
};

export default NavDiv;
