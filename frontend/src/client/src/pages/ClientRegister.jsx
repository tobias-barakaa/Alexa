// import '../styles/pages/ClientRegister.css';
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { setCredentials } from '../../slices/authSlice';
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../../../slices/client/usersApiSlice";
// import { setCredentials } from '../../slices/client/authSlice';
import { setCredentials } from "../../../slices/client/authSlice";
import OAuth from "../components/OAuth";
import "../styles/pages/ClientRegister.css";

const ClientRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  // const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/login";


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
        dispatch(setCredentials({ ...response }));
        console.log("User registered:", response);
        navigate('/login');
      } catch (err) {
        console.error("Failed to register:", err);
        // Handle registration error
      }
    }
  };

  return (
    <div className="signup-box">
      <div className="signup-title">Sign Up</div>

<div className="form-handle">

      <form onSubmit={submitHandler} >
          <div className="signup-title-container">
          </div>
          <label>Username</label>
          <input
            type="text"
            className="signup-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="email-label">Email</label>

          <input
            className="signup-input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>

          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signup-btn" disabled={isLoading}>
            Sign Up as Client
          </button>
          
      </form>
            {/* <i className="fab fa-google"></i>Sign up with Google */}
            <OAuth />

          <a>
            Already have an account?{" "}
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/register"}
              className="link"
            >
              Sign In
            </Link>
          </a>
    </div>
    </div>

  );
};

export default ClientRegister;
