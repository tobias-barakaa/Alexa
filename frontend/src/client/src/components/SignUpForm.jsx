import './SignUp.css'

const SignUpForm = () => {

  return (
    <div className="signup-container">
      {/* Form Header */}
      <h2 className="signup-header">Logg inn eller lag en aID-bruker</h2>
      <div className="header-divider"></div>

      {/* Form Body */}
      <form className="signup-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />

        {/* Social Login Buttons */}
        <div className="social-buttons">
          <button type="button" className="social-button facebook-button">Facebook</button>
          <button type="button" className="social-button google-button">Google</button>
        </div>

        {/* Sign-up Button */}
        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      {/* Terms and Conditions */}
      <div className="terms-and-conditions">
        <p>
          By signing up, you agree to our <span className="link">Terms and Conditions</span> and <span className="link">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;