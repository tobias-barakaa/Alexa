import { useState } from 'react';
import { Link } from 'react-router-dom';
// import profile from '../../../assets/images/alexxa.png';
import './Sidenav.css';

const Sidebar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <div className="sidena">
      <div className="sidebar-menu-container">
        <h3 className="sidebar-menu-title">Services</h3>
        <div className="sidebar-menu-content"
          <ul className="sidebar-menu-list">
            <li className="sidebar-menu-item">
              <Link to="blogorder" className="sidebar-menu-link">
                <span className="sidebar-menu-icon">📝</span>
                <span className="sidebar-menu-text">Blog Writing</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link to="articlecreation" className="sidebar-menu-link">
                <span className="sidebar-menu-icon">✍️</span>
                <span className="sidebar-menu-text">Article Creation</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link to="resumecvwriting" className="sidebar-menu-link">
                <span className="sidebar-menu-icon">📄</span>
                <span className="sidebar-menu-text">Resume/CV Writing</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link to="emailcopywriting" className="sidebar-menu-link">
                <span className="sidebar-menu-icon">📧</span>
                <span className="sidebar-menu-text">Email Copywriting</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="profile-divider" />


      <div className="manage-container">
        <h3 className="manage-title">Manage Orders</h3>
        <ul className="manage-list">
          <li className="manage-item">
            <Link to="editorders" className="manage-link">
              <span className="manage-icon">🖋️</span>
              <span className="manage-text">Edit Orders</span>
              <span className="manage-notification">2</span>
            </Link>
          </li>
          <li className="manage-item">
            <Link to="ordershistory" className="manage-link">
              <span className="manage-icon">🕰️</span>
              <span className="manage-text">Orders History</span>
            </Link>
          </li>
          <li className="manage-item">
            <Link to="poetryandsong" className="manage-link">
              <span className="manage-icon">🏁</span>
              <span className="manage-text">Completed Orders</span>
              <span className="manage-notification">5</span>
            </Link>
          </li>
        </ul>

        <div className="profile-section">
          <hr className="profile-divider" />
          <div className="profile-container">
            {/* <img src={profile} alt="Profile" className="profile-image" /> */}
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
