import { useState } from 'react';
import './ForgotPassword.css'; // Reuse ForgotPassword CSS for consistency
import Loader from "../components/Loader"; // Assuming you already have a Loader component
import { Toast } from 'bootstrap';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for the loader
  const [error, setError] = useState(''); // Error state for displaying errors

  const setVal = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const sendLink = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader when the request is initiated

    try {
      const res = await fetch('http://localhost:5000/api/users/sendpasswordlink', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      setMessage(data.message);
      setLoading(false); // Stop loader when response is received

      if (data.status == 201) {
        setEmail('');
        setMessage(true);
      } else {
        setError("Error in sending password reset link");
        Toast.show("Error in sending password reset link", {
          delay: 2000,
          autohide: true
        });
      }
    } catch (error) {
      setLoading(false); // Stop loader in case of error
      setError('Failed to send reset link. Please try again.');
    }
  }

  return (
    <div className="forgot-password-container"> {/* Use the same container class */}
      <div className="forgot-password-wrapper"> {/* Same wrapper class for consistent look */}
        <h3 className="forgot-password-heading">Enter Your Email</h3>

        {message && (
          <p style={{ color: "green", fontWeight: "bold" }}>
            Password reset link sent successfully to your email.
          </p>
        )}

        {error && (
          <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
        )}

        <form onSubmit={sendLink} className="forgot-password-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={setVal}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <Loader /> : 'Send'} 
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
