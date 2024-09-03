import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaBook, FaDollarSign, FaUser, FaLinkedin } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/components/Header.css';

const Header = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [apiOpen, setApiOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);

  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <span className="logo-text">en<span className='dot'>.</span>writers</span>
        </div>

        <ul className="nav-items">
          <li className="nav-item" onClick={() => setResourcesOpen(!resourcesOpen)}>
            Resources <FaChevronDown />
            {resourcesOpen && (
              <ul className="dropdown">
                <li className="dropdown-item">
                  <FaBook /> Blog
                  <span className="dropdown-description">Read interesting content.</span>
                </li>
                <li className="dropdown-item">
                  <FaQuestionCircle /> FAQ
                </li>
                <li className="dropdown-item">
                  Guides
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item" onClick={() => setApiOpen(!apiOpen)}>
            API <FaChevronDown />
            {apiOpen && (
              <ul className="dropdown">
                <li className="dropdown-item">
                  About Page
                </li>
                <li className="dropdown-item">
                  <FaDollarSign /> Pricing
                  <span className="dropdown-description">Affordable plans for everyone.</span>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item" onClick={() => setCommunityOpen(!communityOpen)}>
            Community <FaChevronDown />
            {communityOpen && (
              <ul className="dropdown">
                <li className="dropdown-item">
                  <FaUser /> X Account
                  <span className="dropdown-description">Join our community.</span>
                </li>
                <li className="dropdown-item">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">Dashboard</li>
        </ul>
        
        <div className="nav-buttons">
          <button className="btn-signin">Sign In</button>
          <button className="btn-signup">Get Started</button>
        </div>

        <div className="divider-container">
      </div>

      </div>
     
    </>
  );
};

export default Header;
