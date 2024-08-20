import PropTypes from 'prop-types';
import '../styles/pages/ClientRegister.css';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { setCredentials } from '../../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../../../slices/client/usersApiSlice';
// import { setCredentials } from '../../slices/client/authSlice';
import { setCredentials } from '../../../slices/client/authSlice'

const ClientRegister = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/login';

  useEffect(() => {
    if(userInfo) {
      navigate(redirect)
    }
  }, [userInfo, redirect, navigate])

  const submitHandler = async (e) => {
    e.preventDefault();
 {
      try {
        const userData = {
          username,
          email,
          password,
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
    <>

          <form className="containerr" onSubmit={submitHandler}>
            
            <p>Already have an account? 
              <Link to={redirect ? `/login?redirect=${redirect}` : '/register'} className="link">Sign In</Link></p>
            
            <div className="input-container">
             
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
            <button type="submit"
             className="signup-btn"
             disabled={isLoading}
             >Sign Up as Client</button>
          </form>
    </>
  );
};

ClientRegister.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default ClientRegister;



// <div className="signup-box">
// <div className="signup-title-container">
//     <h3 className="signup-title">Sign Up</h3>
//   </div>
//   <input type="text" placeholder="Name" className="signup-input" />
//   <input type="email" placeholder="Email" className="signup-input" />
//   <input type="password" placeholder="Password" className="signup-input" />
//   <button className="signup-button">Sign Up</button>
//   <button className="google-button-signup">Sign up with Google</button>
{/* <button className="google-button">
        <i className="fab fa-google"></i>
        Google
      </button> */}
//   <a href="#" className="login-link">Already have an account? Log in</a>
// </div>