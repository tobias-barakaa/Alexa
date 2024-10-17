import { useState } from 'react';
import './WriterAccount.css';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // For redirection
import { useLoginWriterMutation } from '../../../slices/writers/writerApiSlice';
import { setCredentials } from '../../../slices/writers/writerSlice';

const SignInWriter = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // API mutation for login
  const [loginWriter, { isLoading: isLoggingIn }] = useLoginWriterMutation();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBackendError(null);

    if (!validateForm()) return;

    try {
      const userData = await loginWriter({
        email: formData.email,
        password: formData.password
      }).unwrap();
      dispatch(setCredentials(userData));
      navigate('/writer-dashboard');
    } catch (err) {
      setBackendError(err.data?.message || 'Failed to sign in');
    }
  };

  return (
    <div className="writer-account-container">
      <div className="form-card">
        <h2 className="form-heading">Sign In to Your Account</h2>
        
        <button className="google-button">
          <FaGoogle className="google-icon" /> Sign in with Google
        </button>

        <form onSubmit={handleSubmit}>
          <label className="form-label">Email</label>
          <input
            className={`input-field ${errors.email ? 'error-input' : ''}`}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          <label className="form-label">Password</label>
          <input
            className={`input-field ${errors.password ? 'error-input' : ''}`}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}

          {backendError && <span className="backend-error">{backendError}</span>}

          <button className="submit-button" type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="footer-text">
          Not a member yet?{' '}
          <a href="/writer-account" className="toggle-link">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignInWriter;
