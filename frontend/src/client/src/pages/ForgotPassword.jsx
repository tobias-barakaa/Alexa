import { useEffect, useState } from "react";
import "./ForgotPassword.css";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader"; // Assuming you have a loader component

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(""); // State to track errors
  const [loading, setLoading] = useState(false); // State for loading
  const { id, token } = useParams();
  const navigate = useNavigate();

  const userValid = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/passwordforgot/${id}/${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (data.status === 200) {
        console.log("User is valid");
      } else {
        navigate('/forgot-password/token-expired');
      }
    } catch (error) {
      console.error('Error during validation', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match"); // Set error message
      return;
    }

    setError(""); // Clear error when passwords match
    setLoading(true); // Set loading to true

    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword, confirmPassword }),  
      });
      const data = await res.json();
      if (data.status === 201) {
        setNewPassword("");
        setConfirmPassword("");
        setMessage(true);
        setLoading(false);  // Set loading to false after completion
      } else {
        setLoading(false);  // Set loading to false on error
        alert('Error resetting password must have expired');
      }
    } catch (error) {
      setLoading(false);  // Set loading to false on error
      console.error('Error during password reset', error);
    }
  };

  useEffect(() => {
    userValid();
  }, []);

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-wrapper">
        <h3 className="forgot-password-heading">Reset Your Password</h3>
        {message ? (
          <p style={{ color: "green", fontWeight: "bold" }}>
            Password reset successfully.
            <span onClick={() => navigate('/login')} style={{ color: "blue", cursor: "pointer" }}> Login</span>
          </p>
        ) : (
          <p className="forgot-password-subtext">
            Please enter your new password and confirm it to reset your account access.
          </p>
        )}

        {error && (
          <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>  // Display the error in red
        )}
        
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <Loader /> : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  ); 
};

export default ForgotPassword;
