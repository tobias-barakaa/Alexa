import "./WriterRegister.css";
import brr from "../../assets/images/brr.jpg"

const WriterRegister = () => {
  return (
    <div className="register-container">
      <div className="register-image">
        <img src={brr} alt="writers" />
      </div>
      <div className="register-form">
        <h2>Create Your Writer Account</h2>
        <p className="signin-text">Already have an account? <a href="/signin">Sign in</a></p>
        <button className="google-signup-btn">Sign up with Google</button>
        <div className="or-divider">
          <hr className="line" />
          <span>or</span>
          <hr className="line" />
        </div>
        <div className="name-inputs">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" className="full-width-input" />
        <input type="password" placeholder="Password" className="full-width-input" />
        <input type="password" placeholder="Confirm Password" className="full-width-input" />
        <button className="submit-btn">Register</button>
      </div>
    </div>
  );
}

export default WriterRegister;
