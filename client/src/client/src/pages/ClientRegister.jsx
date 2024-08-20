// import '../styles/pages/ClientRegister.css';
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { setCredentials } from '../../slices/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../../slices/client/usersApiSlice";
// import { setCredentials } from '../../slices/client/authSlice';
import { setCredentials } from "../../../slices/client/authSlice";
import OAuth from "../components/OAuth";

const ClientRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/login";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

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
        navigate(redirect);
      } catch (err) {
        console.error("Failed to register:", err);
        // Handle registration error
      }
    }
  };

  return (
    <div className="hero-right">
    
      <form onSubmit={submitHandler}>
        <div className="signup-box">
          <div className="signup-title-container">
            <h3 className="signup-title">Sign Up</h3>
          </div>
          <input
            type="text"
            className="signup-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="signup-input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
          
        </div>
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
  );
};

export default ClientRegister;
