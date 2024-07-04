import "./NavDiv.css";
const NavDiv = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left-section">
          <div className="logo">Enwriters.</div>
          
        </div>
        <div className="social-media">
          <div className="social-item">
            <i className="bi bi-facebook"></i>
            <span>Facebook</span>
          </div>
          <div className="social-item">
            <i className="bi bi-twitter"></i>
            <span>Twitter</span>
          </div>
          <div className="social-item">
            <i className="bi bi-linkedin"></i>
            <span>LinkedIn</span>
          </div>
          <div className="dropdown">
            <button className="ask-question">
              <i className="fas fa-cogs"></i>
              Our Services
            </button>
            <div className="dropdown-content">
              <a href="#">Data Entry</a>
              <a href="#">Poetry</a>
              <a href="#">Blog Writing</a>
              <a href="#">Social Media Post Writers</a>
            </div>
          </div>
        <button className="collaborate-button">Hire Private Writer</button>

        </div>
      </div>
    </div>
  );
};

export default NavDiv;
