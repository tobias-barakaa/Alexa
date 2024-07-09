import PropTypes from 'prop-types';
import './ClientRegister.css';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const ClientRegister = ({ handleCloseModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };
  

  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/dashboard';

  useEffect(() => {
    if(userInfo) {
      navigate(redirect)
    }
  }, [userInfo, redirect, navigate])

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== passwordConf) {
      setPasswordMatchError('Passwords do not match');
      return;
    } else {
      setPasswordMatchError('');
      try {
        const userData = {
          username,
          email,
          first_name,
          last_name,
          password,
          passwordConf,
        };
        const response = await register(userData).unwrap();
        dispatch(setCredentials({...response}));
        console.log('User registered:', response);
        navigate(redirect)
      } catch (err) {
        console.error('Failed to register:', err);
        // Handle registration error
      }
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <button onClick={handleCloseModal} className="modal-close-button">&times;</button>

      <div className="modal-content">
        <div className="modal-body">
          <form className="containerr" onSubmit={submitHandler}>
            <h1 className="title">Take your career to new heights</h1>
            <p>Already have an account? 
              <Link to={redirect ? `/login?redirect=${redirect}` : '/register'} className="link">Sign In</Link></p>
            <button type="button" className="google-btn">
              <i className="bi bi-google"></i>Sign up with Google
            </button>
            <div className="input-container">
              <input
                type="text"
                placeholder="First Name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Username"
              className="full-width-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="full-width-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="full-width-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="full-width-input"
              value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
            />
            {passwordMatchError && <p className="error">{passwordMatchError}</p>}
            <div className="checkbox">
              <input type="checkbox" />
              <label>I agree to the Workfalls Terms of Service and Privacy Policy</label>
            </div>
            <button type="submit"
             className="signup-btn"
             disabled={isLoading}
             >Sign Up as Client</button>
          </form>
        </div>
      </div>
    </div>
  );
};

ClientRegister.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default ClientRegister;
