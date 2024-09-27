import { useState } from 'react';
import './SignUp.css'

const SignUpForm = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2 className="form-header">Logg inn eller lag en aID-bruker</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="social-buttons">
          <button type="button" className="facebook-btn">Facebook</button>
          <button type="button" className="google-btn">Google</button>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <div className="terms-notification">
        <label className="checkbox-container">
          <input 
            type="checkbox" 
            checked={agreedToTerms} 
            onChange={() => setAgreedToTerms(!agreedToTerms)} 
          />
          <span className="checkmark"></span>
          I ve read and understand the terms and conditions
        </label>
      </div>
      
    </div>
  );
};

export default SignUpForm;