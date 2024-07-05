// NavDiv.jsx
import "./NavDiv.css";


const NavDiv = () => {
  return (
    <nav className="nav">
    <div className="nav-logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <div className="nav-items">
      <a href="#" className="nav-link">Home</a>
      <a href="#" className="nav-link">Profile</a>
      <a href="#" className="nav-link">Messages</a>
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle">
          Our Services
          <i className="fas fa-chevron-down"></i>
        </a>
        <div className="dropdown-menu">
          <div className="dropdown-row">
            <div className="dropdown-col">
              <h3>Our Services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl eget aliquam tincidunt, nisl nisl aliquam nisl,
                eget aliquam nisl nisl eget nisl.
              </p>
            </div>
            <div className="dropdown-col">
              <a href="#" className="dropdown-link">Poetry Writing</a>
              <a href="#" className="dropdown-link">Social Posts</a>
              <a href="#" className="dropdown-link">Songs</a>
              <a href="#" className="dropdown-link">Article Writing</a>
              <a href="#" className="dropdown-link">Blog Posts</a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="nav-link">Analytics</a>
      <a href="#" className="nav-link">Settings</a>
      <a href="#" className="nav-link">Logout</a>
    </div>
    <div className="nav-actions">
      <a href="#" className="nav-link">Sign In</a>
      <button className="nav-button">Get Started</button>
    </div>
    <hr className="nav-hr" />
  </nav>
  );
};

export default NavDiv;
