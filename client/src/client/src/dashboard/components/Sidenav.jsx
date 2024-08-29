import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Sidenav.css';
import SidebarProfile from './SidebarProfile';

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    localStorage.setItem('activeLink', path);
  };

  useEffect(() => {
   
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (

    <div className="sidena">
      <div className="sidebar-menu-container">
        <Link 
          to="/dashboard" 
          className={`sidebar-menu-link ${activeLink === '/dashboard' || activeLink === '/dashboard/' ? 'active' : ''}`}
          onClick={() => handleLinkClick('/dashboard')}
        >
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <hr className="dark-divider" />
        <div className="sidebar-menu-content">
          <ul className="sidebar-menu-list">
            <li className="sidebar-menu-item">
              <Link
                to="/dashboard/blogorder" 
                className={`sidebar-menu-link ${activeLink === '/dashboard/blogorder' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/dashboard/blogorder')}
              >
                <i className="bi bi-pencil-square sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Blog Writing</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                to="/dashboard/articlecreation"
                className={`sidebar-menu-link ${activeLink === '/dashboard/articlecreation' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/dashboard/articlecreation')}
              >
                <i className="bi bi-bookshelf sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Article Creation</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                to="/dashboard/resumecvwriting"
                className={`sidebar-menu-link ${activeLink === '/dashboard/resumecvwriting' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/dashboard/resumecvwriting')}
              >
                <i className="bi bi-card-list sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Resume/CV Writing</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                to="/dashboard/emailcopywriting"
                className={`sidebar-menu-link ${activeLink === '/dashboard/emailcopywriting' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/dashboard/emailcopywriting')}
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
                to="/dashboard/editorders"
                className={`sidebar-menu-link ${activeLink === '/dashboard/editorders' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/dashboard/editorders')}
              >
                <i className="bi bi-pencil-square sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Edit Orders</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                to="/dashboard/ordershistory"
                className={`sidebar-menu-link ${activeLink === '/dashboard/ordershistory' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/dashboard/ordershistory')}
              >
                <i className="bi bi-hourglass sidebar-menu-icon"></i>
                <span className="sidebar-menu-text">Order History</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                to="/dashboard/completedorders"
                className={`sidebar-menu-link ${activeLink === '/dashboard/completedorders' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/dashboard/completedorders')}
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
