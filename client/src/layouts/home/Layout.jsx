// Layout.js
import backgroundImage from '../../assets/images/office.jpg';
import trustPilot from '../../assets/images/trust.png';
import google from '../../assets/images/googleicon.jpg';
import facebook from '../../assets/images/google.png'; // Add Facebook image if needed
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <main className="layout-main" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <div className="content-left">
            <div className="images-container">
              <img src={trustPilot} alt="Trust Pilot" className="trustpilot-img" />
              <img src={google} alt="Google" className="google-img" />
            </div>
            <p className="headline">
              Marktleider in<br /><span className='leader'>leadgeneratie</span><br />binnen de Benelux.
            </p>
            <p className="small-text">
              Wij helpen grote en kleine bedrijven in <br />
              Nederland en België aan een consistente<br />
              stroom van unieke leads en een betere<br />
              service.
            </p>
            <div className="content-buttons">
              <button className="btn-outline">Learn More</button>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
          <div className="content-right">
            <form className="form-container">
              <div className="form-row">
                <input className="register" type="text" placeholder="First Name" />
                <input className="register" type="text" placeholder="Last Name" />
              </div>
              <input className="register" type="email" placeholder="Email" />
              <input className="register" type="password" placeholder="Password" />
              <input className="register" type="password" placeholder="Confirm Password" />

              <div className="separator">
                <div className="separator-line" />
                <span>or</span>
                <div className="separator-line" />
              </div>

              <div className="social-buttons">
                <button type="button" className="social-btn google">
                  <img src={google} alt="Google" /> Sign up with Google
                </button>
                <button type="button" className="social-btn facebook">
                  <img src={facebook} alt="Facebook" /> Sign up with Facebook
                </button>
              </div>

              <p className="disclaimer">
                By submitting my personal information, I understand and agree that CloudTalk 
                may collect, process, and retain my data pursuant to the CloudTalk terms and conditions.
              </p>

              <div className="form-checkbox">
                <input type="checkbox" id="subscribe" className="small-checkbox" />
                <label htmlFor="subscribe">I would like to subscribe to the monthly newsletter</label>
              </div>
              <button type="submit" className="full-width btn-primary">Client Register</button>

              <div className="sign-in-link">
                Already have an account? <a href="#">Sign in</a>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
