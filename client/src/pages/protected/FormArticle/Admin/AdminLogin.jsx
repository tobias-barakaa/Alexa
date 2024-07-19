import { useState } from 'react';
import './AdminLogin.css'; 
import { useAdminLoginMutation } from '../../../../slices/adminApiSlice';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminLogin, { isLoading, isError, isSuccess, error }] = useAdminLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminLogin({ email, password }).unwrap();
      // Handle successful login (e.g., redirect to admin dashboard)
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="login-container">
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
