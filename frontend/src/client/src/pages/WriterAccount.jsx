import { useState } from 'react';
import './WriterAccount.css';
import { FaGoogle } from 'react-icons/fa'; // Import Google icon
import { useDispatch } from 'react-redux';
// import { useLoginWriterMutation, useRegisterWriterMutation } from '../path_to/writersApiSlice'; // Import API hooks
import { useLoginWriterMutation, useRegisterWriterMutation } from '../../../slices/writers/writerApiSlice';
import { setCredentials } from '../../../slices/writers/writerSlice';

const WriterAccount = () => {
  const [isSigningIn, setIsSigningIn] = useState(false); // Toggle between Sign Up and Sign In
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  
  // API mutations
  const [loginWriter, { isLoading: isLoggingIn }] = useLoginWriterMutation();
  const [registerWriter, { isLoading: isRegistering }] = useRegisterWriterMutation();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleToggleForm = () => {
    setIsSigningIn(!isSigningIn); // Toggle between Sign Up and Sign In
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSigningIn) {
      // Sign In logic
      try {
        const userData = await loginWriter({
          email: formData.email,
          password: formData.password
        }).unwrap();
        
        // Save the user info to Redux state and localStorage
        dispatch(setCredentials(userData));
        console.log('User signed in:', userData);
      } catch (err) {
        console.error('Failed to sign in:', err);
      }
    } else {
      // Sign Up logic
      try {
        const userData = await registerWriter({
          username: formData.username,
          email: formData.email,
          password: formData.password
        }).unwrap();
        
        // Save the user info to Redux state and localStorage
        dispatch(setCredentials(userData));
        console.log('User registered:', userData);
      } catch (err) {
        console.error('Failed to register:', err);
      }
    }
  };

  return (
    <div className="writer-account-container">
      <div className="form-card">
        <h2 className="form-heading">{isSigningIn ? 'Sign In to Your Account' : 'Create Your Writer Account'}</h2>
        
        {/* Google Sign In/Up Button */}
        <button className="google-button">
          <FaGoogle className="google-icon" /> {!isSigningIn ? 'Sign up with Google' : 'Sign in with Google'}
        </button>

        <form onSubmit={handleSubmit}>
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
          <button className="submit-button" type="submit" disabled={isLoggingIn || isRegistering}>
            {isSigningIn ? (isLoggingIn ? 'Signing In...' : 'Sign In') : (isRegistering ? 'Creating Account...' : 'Create Account')}
          </button>
        </form>

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
