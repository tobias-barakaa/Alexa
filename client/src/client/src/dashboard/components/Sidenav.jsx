import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidenav.css';

const Sidebar = () => {
  const location = useLocation();
  const initialActiveLink = localStorage.getItem('activeLink') || location.pathname; // Retrieve from localStorage or use current path
  const [activeLink, setActiveLink] = useState(initialActiveLink);
  const [dropdownActive, setDropdownActive] = useState(false);

  // Update active link when a link is clicked
  const handleLinkClick = (path) => {
    setActiveLink(path);
    localStorage.setItem('activeLink', path); // Store the active link in localStorage
  };

  // Set the active link based on current location when the component mounts
  useEffect(() => {
    setActiveLink(initialActiveLink);
  }, [location.pathname]);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <div className="sidena">
      <div className="sidebar-menu-container">
        <p className="sidebar-menu-title">Services</p>
        <div className="sidebar-menu-content">
          <ul className="sidebar-menu-list">
            <li className="sidebar-menu-item">
              <Link
                to="blogorder"
                className={`sidebar-menu-link ${activeLink === '/blogorder' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/blogorder')}
              >
                <i className="bi bi-pencil-square sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Blog Writing</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                to="articlecreation"
                className={`sidebar-menu-link ${activeLink === '/articlecreation' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/articlecreation')}
              >
                <i className="bi bi-bookshelf sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Article Creation</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                to="resumecvwriting"
                className={`sidebar-menu-link ${activeLink === '/resumecvwriting' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/resumecvwriting')}
              >
                <i className="bi bi-card-list sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Resume/CV Writing</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                to="emailcopywriting"
                className={`sidebar-menu-link ${activeLink === '/emailcopywriting' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/emailcopywriting')}
              >
                <i className="bi bi-printer sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Email Copywriting</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="profile-divider" />

      <div className="manage-container">
        <p className="manage-title" style={{ color: "#078BC8" }}>Manage Orders</p>
        <ul className="manage-list">
          <li className="manage-item">
            <Link
              to="editorders"
              className={`sidebar-menu-link ${activeLink === '/editorders' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/editorders')}
            >
              <i className="bi bi-pencil-square manage-icon"></i>
              <span className="manage-text">Edit Orders</span>
              <span className="manage-notification">2</span>
            </Link>
          </li>
          <li className="manage-item">
            <Link
              to="ordershistory"
              className={`sidebar-menu-link ${activeLink === '/ordershistory' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/ordershistory')}
            >
              <i className="bi bi-hourglass manage-icon"></i>
              <span className="manage-text">Orders History</span>
            </Link>
          </li>
          <li className="manage-item">
            <Link
              to="poetryandsong"
              className={`sidebar-menu-link ${activeLink === '/poetryandsong' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/poetryandsong')}
            >
              <i className="bi bi-building-check manage-icon"></i>
              <span className="manage-text">Completed Orders</span>
              <span className="manage-notification">5</span>
            </Link>
          </li>
        </ul>

        <div className="profile-section">
          <div className="profile-container">
            <div className="profile-info">
              <h4 className="profile-name">John Doe</h4>
              <p className="profile-role">Member</p>
            </div>
            <button className="profile-dropdown-toggle" onClick={toggleDropdown}>▼</button>
            <button className="profile-icon">⚙️</button>
          </div>
          <div className={`profile-dropdown ${dropdownActive ? 'active' : ''}`}>
            <button className="logout-button">
              <span className="logout-icon">🚪</span>
              Logout
            </button>
          </div>
          <hr className="profile-divider" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
