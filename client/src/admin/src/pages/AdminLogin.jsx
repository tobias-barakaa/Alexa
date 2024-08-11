import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/AdminLogin.css';
// import { useAdminLoginMutation } from '../../../../slices/admin/adminApiSlice';
import { useAdminLoginMutation } from '../../../slices/admin/adminApiSlice'

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [adminLogin, { isLoading, isError, isSuccess, error }] = useAdminLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    try {
      await adminLogin({ email, password }).unwrap();
      setTimeout(() => {
        navigate('/admindashboard');
      }, 5000); // Redirect after 5 seconds
    } catch (err) {
      console.error('Login failed:', err);
      setShowLoader(false);
    }
  };

  return (
    <div className="login-container">
      {showLoader && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='login-input'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='login-input'
          />
        </div>
        {isError && <p className="error-message">{error?.data?.message || 'Login failed. Please try again.'}</p>}
        <button type="submit" disabled={isLoading} className="submit-button">
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {isSuccess && <p className="success-message">Login successful!</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
