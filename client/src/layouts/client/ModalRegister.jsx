import PropTypes from 'prop-types';
import { Link, Navigate, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify'
import './ModalRegister.css';
import { useEffect, useState } from 'react';


const ModalRegister = ({ handleCloseModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const navigate = useNavigation();
  const [register, { isLoading, error }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';
  useEffect(() => {
    if(userInfo) {
      navigate('/dashboard')
    }
  }, [userInfo, redirect, navigate])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitting', firstName)
    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match');
    } else {
      setPasswordMatchError('');
      console.log('submitting');
      // Handle form submission
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <button onClick={handleCloseModal} className="modal-close-button">&times;</button>

      <div className="modal-content">
        <div className="modal-body">
          <form className="containerr" onSubmit={submitHandler}>
            <h1 className="title">Take your career to new heights</h1>
            <p>Already have an account? <a href="#" className="link">Sign In</a></p>
            <button type="button" className="google-btn">
              <i className="bi bi-google"></i>Sign up with Google
            </button>
            <div className="input-container">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {passwordMatchError && <p className="error">{passwordMatchError}</p>}
            <div className="checkbox">
              <input type="checkbox" />
              <label>I agree to the Workfalls Terms of Service and Privacy Policy</label>
            </div>
            <button type="submit" className="signup-btn">Sign Up as Client</button>
          </form>
        </div>
      </div>
    </div>
  );
};

ModalRegister.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default ModalRegister;
