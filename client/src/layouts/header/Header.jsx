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
            <span>Blog Writing</span>
            <p>Engaging, SEO-optimized blog posts tailored to your audience and industry.</p>
          </div>
        </li>
        <li>
          <i className="bi bi-bar-chart"></i>
          <div>
            <span>Article Creation</span>
            <p>In-depth, well-researched articles to establish your authority in your field.</p>
          </div>
        </li>
        <li>
          <i className="bi bi-lightbulb"></i>
          <div>
            <span>SEO Copywriting</span>
            <p>Compelling website copy designed to rank well in search engines and convert visitors.</p>
          </div>
        </li>
      </div>
      <div className='rightt'>
        <li>
          <i className="bi bi-graph-up"></i>
          <div>
            <span>Social Media Content</span>
            <p>Eye-catching posts and captions to boost your social media engagement and following.</p>
          </div>
        </li>
        <li>
          <i className="bi bi-globe"></i>
          <div>
            <span>Email Newsletter Writing</span>
            <p>Persuasive email content that nurtures leads and drives conversions.</p>
          </div>
        </li>
        <li>
          <i className="bi bi-briefcase"></i>
          <div>
            <span>Product Descriptions</span>
            <p>Enticing product descriptions that highlight benefits and drive sales.</p>
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
                      <span>Blog Writing</span>
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
