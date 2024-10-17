import React, { useState } from 'react';
import './WriterAccount.css';
import { FaGoogle } from 'react-icons/fa'; // Import Google icon

const WriterAccount = () => {
  const [isSigningIn, setIsSigningIn] = useState(false); // State to toggle between Sign Up and Sign In
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleToggleForm = () => {
    setIsSigningIn(!isSigningIn); // Toggle between Sign Up and Sign In
  };

  return (
    <div className="writer-account-container">
      <div className="form-card">
        <h2 className="form-heading">{isSigningIn ? 'Sign In to Your Account' : 'Create Your Writer Account'}</h2>
        
        {/* Google Sign In/Up Button */}
        

        <button className="google-button">
          <FaGoogle className="google-icon" /> {!isSigningIn ? 'Sign up with Google' : 'Sign in with Google'}
        </button>

        {/* Username Input - Only for Sign Up */}
        {!isSigningIn && (
          <>
            <label className="form-label">Username</label>
            <input
              className="input-field"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </>
        )}

        {/* Email Input */}
        <label className="form-label">Email</label>
        <input
          className="input-field"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />
        
        {/* Password Input */}
        <label className="form-label">Password</label>
        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
        />
        
        {/* Submit Button */}
        <button className="submit-button">{isSigningIn ? 'Sign In' : 'Create Account'}</button>
        
        {/* Toggle Link */}
        <p className="footer-text">
          {isSigningIn ? 'Not a member yet?' : 'Already using Enwriters?'}{' '}
          <button onClick={handleToggleForm} className="toggle-link">
            {isSigningIn ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default WriterAccount;
