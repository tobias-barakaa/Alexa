import { useState } from 'react';
import "./Header.css";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="nav-logo">
            <span className="logo-en">En</span>
            <span className="logo-writers">writers</span>
          </div>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#"><i className="bi bi-house"></i> Home</a>
            </li>
            <li 
  className="dropdown"
  onMouseEnter={() => setIsServicesOpen(true)}
  onMouseLeave={() => setIsServicesOpen(false)}
>
  <a href="#">Services <i className="bi bi-chevron-down"></i></a>
  {isServicesOpen && (
    <div className='dropdown-menu'>
      <div className='leftt'>
        <li>
          <i className="bi bi-pencil-square"></i>
          <div>
            <span>Service 1</span>
            <p>Description for service 1, explaining what it includes.</p>
          </div>
        </li>
        <li>
          <i className="bi bi-bar-chart"></i>
          <div>
            <span>Service 2</span>
            <p>Description for service 2, explaining what it includes.</p>
          </div>
        </li>
        <li>
          <i className="bi bi-lightbulb"></i>
          <div>
            <span>Service 3</span>
            <p>Description for service 3, explaining what it includes.</p>
          </div>
        </li>
      </div>
      <div className='rightt'>
        <li>
          <i className="bi bi-graph-up"></i>
          <div>
            <span>Service 4</span>
            <p>Description for service 4, explaining what it includes.</p>
          </div>
        </li>
        <li>
          <i className="bi bi-globe"></i>
          <div>
            <span>Service 5</span>
            <p>Description for service 5, explaining what it includes.</p>
          </div>
        </li>
        <li>
          <i className="bi bi-briefcase"></i>
          <div>
            <span>Service 6</span>
            <p>Description for service 6, explaining what it includes.</p>
          </div>
        </li>
      </div>
    </div>
  )}
</li>
            <li 
              className="dropdown"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <a href="#">Company <i className="bi bi-chevron-down"></i></a>
              {isCompanyOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <i className="bi bi-file-earmark-text"></i>
                    <div>
                      <span>Blog</span>
                      <p>Read the latest updates and insights from our team.</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-envelope"></i>
                    <div>
                      <span>Contact Us</span>
                      <p>Get in touch with us for any queries or support.</p>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#"><i className="bi bi-person-lines-fill"></i> Contact</a>
            </li>
          </ul>
          <div className={`right-buttons ${isMenuOpen ? 'active' : ''}`}>
            <div className="login">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </div>
            <button className="hire-writers">Personal Writers</button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;
