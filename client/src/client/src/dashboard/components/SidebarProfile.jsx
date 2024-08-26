import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarProfile.css';
import userAvatar from '../../assets/images/logo.png';


const SidebarProfile = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <div className="profile-section">
      <div className="profile-container" onClick={toggleDropdown}>
        <img src={userAvatar} alt="User Avatar" className="profile-avatar" />
        <div className="profile-info">
          <h4 className="profile-name">John Doe</h4>
          <p className="profile-role">Member</p>
        </div>
        <i
          className={`bi ${dropdownActive ? 'bi-chevron-up' : 'bi-chevron-down'} dropdown-icon`}
        ></i>
      </div>
      {dropdownActive && (
        <div className="profile-dropdown">
          <Link to="profile/" className="dropdown-item">
            <i className="bi bi-person dropdown-item-icon"></i>
            <span>My Profile</span>
          </Link>
          <Link to="/settings" className="dropdown-item">
            <i className="bi bi-gear dropdown-item-icon"></i>
            <span>Settings</span>
          </Link>
          <hr className="dropdown-divider" />
          <button className="dropdown-item logout-button">
            <i className="bi bi-box-arrow-right dropdown-item-icon"></i>
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SidebarProfile;
