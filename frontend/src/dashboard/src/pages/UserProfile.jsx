// UserProfile.jsx
import { useState, useEffect } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    setUserInfo(storedUserInfo || {});
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    alert('User information updated successfully!');
  };

  return (
    <div className="user-profile">
      <div className="profile-pic-container">
        <img 
          src={userInfo.profile_pic || 'https://www.gravatar.com/avatar'}
          alt="Profile"
          className="profile-pic"
        />
      </div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userInfo.username || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="balance">Balance:</label>
          <input
            type="text"
            id="balance"
            name="balance"
            value={userInfo.balance || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={userInfo.role || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="created_at">Created At:</label>
          <input
            type="text"
            id="created_at"
            name="created_at"
            value={userInfo.created_at || ''}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="updated_at">Updated At:</label>
          <input
            type="text"
            id="updated_at"
            name="updated_at"
            value={userInfo.updated_at || ''}
            readOnly
          />
        </div>
        <button type="submit" className="update-button">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;