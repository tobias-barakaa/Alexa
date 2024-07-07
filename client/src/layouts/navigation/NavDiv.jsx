import './NavDiv.css';
import backgroundImage from '../../assets/images/office.jpg';
import Header from '../header/Header';

const NavDiv = () => {
  return (
    <>
      <Header />
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <div className="content-left">
            <h1>Market leader in lead <br />generation within the <br /> Benelux Benelux</h1>
            <p>
              We help large and small businesses in the Netherlands and Belgium get a
              consistent stream of unique leads and better brand awareness.
            </p>
            <div className="content-buttons">
              <button className="btn-outline">Learn More</button>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
          
          <div className="content-right">
      <div className="signup-container">
        <h2>Welcome to Enwriters</h2>
        <div className="signup-buttons">
          <button className="signup-button">Sign up with email</button>
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
        <div className="account-selection">
          <div className="vertical-divider"></div>
          <div className="account-options">
            <h3>Select your account</h3>
            <p>Your data will be selected in <span className="client-label">Client</span></p>
            <div className="account-type-selector">
              <div className="account-type-option">Client</div>
              <div className="account-type-option">Writer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
         
        </div>
      </main>
    </>
  );
};

export default NavDiv;
