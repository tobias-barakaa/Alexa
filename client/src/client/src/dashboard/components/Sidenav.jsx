import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Sidenav.css';
import SidebarProfile from './SidebarProfile';

const Sidebar = () => {
  const location = useLocation();
  const initialActiveLink = localStorage.getItem('activeLink') || location.pathname;
  const [activeLink, setActiveLink] = useState(initialActiveLink);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    localStorage.setItem('activeLink', path);
  };

  useEffect(() => {
    setActiveLink(initialActiveLink);
  }, [location.pathname]);

  return (
    <div className="sidena">
      <div className="sidebar-menu-container">
        <Link to="/dashboard" onClick={() => handleLinkClick('/dashboard')}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <hr className="dark-divider" />
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
      <div className="manage-container">
        <div className="sidebar-menu-container">
          <hr className="dark-divider" />
          <ul className="manage-list">
            <li className="sidebar-menu-item">
              <Link
                to="editorders"
                className={`sidebar-menu-link ${activeLink === '/editorders' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/editorders')}
              >
                <i className="bi bi-pencil-square sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Edit Orders</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                to="ordershistory"
                className={`sidebar-menu-link ${activeLink === '/ordershistory' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/ordershistory')}
              >
                <i className="bi bi-hourglass sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Order History</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                to="completedorders"
                className={`sidebar-menu-link ${activeLink === '/completedorders' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/completedorders')}
              >
                <i className="bi bi-building-check sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Completed Orders</span>
              </Link>
            </li>
          </ul>
        </div>
        <SidebarProfile />

      </div>
    </div>
  );
};

export default Sidebar;
