import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './LoginClient.css';
// import { setCredentials } from '../../slices/authSlice';
import { useLoginMutation } from '../../slices/client/usersApiSlice';
import { setCredentials } from '../../slices/client/authSlice';

const LoginClient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      const response = await login(userData).unwrap();
      dispatch(setCredentials(response));
      navigate('/dashboard');
    } catch (err) {
      setLoginError('Failed to login. Please check your email and password.');
    }
  };

  return (
    <div className="login-container">
      <div className="logo">Enwriters</div>
      <h2 className="welcome-text">Welcome back</h2>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
        />
        {loginError && <div className="error">{loginError}</div>}
        <a href="#" className="forgot-password">Forgot password?</a>
        <button type="submit" className="login-button" disabled={isLoading}>
          Log in
        </button>
      </form>
      <div className="or-divider">
        <hr />
        <span>or continue with</span>
        <hr />
      </div>
      <button className="google-button">
        <i className="fab fa-google"></i>
        Google
      </button>
      <button className="facebook-button">
        <i className="fab fa-facebook-f"></i>
        Facebook
      </button>
    </div>
  );
};

export default LoginClient;
