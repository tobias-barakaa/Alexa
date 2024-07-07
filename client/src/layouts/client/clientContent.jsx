const ClientContent = () => {
  return (
    <div>
      <h2>Welcome to Enwriters</h2>
        
        <div className="signup-buttons">
          <button className="signup-button">Client Sign up with email</button>
          <div className="or-divider">
            <hr />
            <span>or sign up with</span>
            <hr />
          </div>
          <div className="social-buttons">
            <button className="social-button">
            <i className="bi bi-facebook"></i>
              Facebook
            </button>
            <button className="social-button">
            <i className="bi bi-google"></i>
              Google
            </button>
          </div>
          <p>Have an account? <a href="#">Login</a></p>
        </div>
    </div>
  )
}

export default ClientContent
