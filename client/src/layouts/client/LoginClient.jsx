import "./LoginClient.css";

const LoginClient = () => {
  return (
    <div className="login-container">
    <div className="logo">Enwriters</div>
    <h2 className="welcome-text">Welcome back</h2>
    <input type="email" placeholder="Email" className="input-field" />
    <input type="password" placeholder="Password" className="input-field" />
    <a href="#" className="forgot-password">Forgot password?</a>
    <button className="login-button">Log in</button>
    <div className="or-divider">
      <hr />
      <span>or continue with</span>
      <hr />
    </div>
    <button className="google-button">
      <i className="fab fa-google"></i>
      Google
    </button>
    <button className="facebook-button">
      <i className="fab fa-facebook-f"></i>
      Facebook
    </button>
  </div>
  
  )
}

export default LoginClient
