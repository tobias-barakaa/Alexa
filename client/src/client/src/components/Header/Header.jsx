// src/components/Header.js
import '../../styles/Header/Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="spacer"></div>
      <div className="nav-items">
        <div className="nav-item">
          <i className="fas fa-book beginner-icon"></i>
          <span>Beginner Guide</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-glasses glossary-icon"></i>
          <span>Glossary</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-book-open guides-icon"></i>
          <span>Guides</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-database backups-icon"></i>
          <span>Backups</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-globe ecosystem-icon"></i>
          <span>Ecosystem</span>
        </div>
      </div>
      <div className="social-icons">
        <i className="fab fa-facebook-f facebook-icon"></i>
        <i className="fab fa-twitter twitter-icon"></i>
        <i className="fab fa-linkedin-in linkedin-icon"></i>
      </div>
    </header>
  );
};

export default Header;
