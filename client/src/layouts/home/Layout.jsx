import backgroundImage from '../../assets/images/office.jpg';
import trustPilot from '../../assets/images/trust.png';
import google from '../../assets/images/google.png';
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <main className="layout-main" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <div className="content-left">
            <div className="images-container">
              <img src={trustPilot} alt="First" className="trustpilot-img" />
              <img src={google} alt="Second" className="google-img" />
            </div>
            <p className="headline">
              MarktleiderIn<br /><span className='leader'>leadgeneratie</span><br />binnen de Benelux.
            </p>
            <p className="small-text">
            Wij helpen grote en kleine bedrijven in <br />
            Nederland en België aan een consistente<br />
            stroom van unieke leads en een betere<br />
              Ut enim ad minim veniam,
            </p>
            <div className="content-buttons">
              <button className="btn-outline">Learn More</button>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
          <div className="content-right">
            <form className="form-container">
              <div className="form-row">
                <input className="register"  type="text" placeholder="First Name" />
                <input className="register" type="text"  placeholder="Last Name" />
              </div>
              <input className="register" type="email" 
              placeholder="Email" style={{ borderRadius: '15px', width: '100%', marginTop: '10px', height: "56px" }} />

<input className="register" type="password" 
              placeholder="Password" style={{ borderRadius: '15px', width: '100%', marginTop: '10px' }} />

<input className="register" type="password" 
              placeholder="Confirm Password" style={{ borderRadius: '15px', width: '100%', marginTop: '10px' }} />

              <div className="separator">
                <div className="separator-line" />
                <span>or</span>
                <div className="separator-line"></div>
              </div>

              <div className="social-buttons">
                <button type="button" className="social-btn google">
                  <i className="bi bi-google"></i> Sign up with Google
                </button>
                <button type="button" className="social-btn facebook">
                  <i className="bi bi-facebook"></i> Sign up with Facebook
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



// import backgroundImage from '../../assets/images/office.jpg';
// import trustPilot from '../../assets/images/trust.png';
// import google from '../../assets/images/google.png';
// import "./Layout.css";

// const Layout = () => {
  

//   return (
//     <>
//       <main style={{ backgroundImage: `url(${backgroundImage})` }}>
//         <div className="overlay">
//           <div className="content-left" style={{ marginTop: '90px' }}>
//             <div className="images-container" style={{ display: 'flex'}}>
//               <img src={trustPilot} alt="First" style={{ height: '80px', width: '200px', marginLeft: '0px' }} />
//               <img src={google} alt="Second" style={{ height: '60px', width: '160px', marginTop: "20px" }} />
//             </div>
//             <h1 style={{ fontSize: '64px', lineHeight: '1.5' }} className='hechOne'>
//               Marktleider in<br />leadgeneratie<br />binnen de Benelux.
//             </h1>
//             <p className="small-text" style={{ fontSize: '20px', lineHeight: '1.5' }}>
//               Lorem ipsum dolor sit amet, consectetur <br />
//               adipiscing elit. Sed do eiusmod tempor in<br />
//               cididunt ut labore et dolore magna aliqua.<br />
//               Ut enim ad minim veniam,
//             </p>
//           </div>
//           <div className="content-right" style={{ marginTop: '90px', backgroundColor: 'white', height: '580px',
//             borderRadius: '10px', padding: '20px', width: '500px', marginRight: '100px' }}>
//             <form className="form-container">
//               <div className="form-row" style={{ display: 'flex', gap: '4px' }}>
//                 <input className="register" type="text" placeholder="First Name" style={{ borderRadius: '15px', flex: '1' }} />
//                 <input className="register" type="text" placeholder="Last Name" style={{ borderRadius: '15px', flex: '1' }} />
//               </div>
//               <input className="register" type="email" placeholder="Email" style={{ borderRadius: '15px', width: '100%', marginTop: '10px' }} />
//               <input className="register" type="password" placeholder="Password" style={{ borderRadius: '15px', width: '100%', marginTop: '10px' }} />
//               <input className="register" type="password" placeholder="Confirm Password" style={{ borderRadius: '15px', width: '100%', marginTop: '10px' }} />

//               {/* <div className="separator" style={{ textAlign: 'center', margin: '20px 0', color: "#000000" }}>
//                 <hr style={{ display: 'inline-block', width: '40%', colour: "black" }} /> or
//                  <hr style={{ display: 'inline-block', width: '40%',  }} />
//               </div> */}


//               <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
//                 <div style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }}></div>
//                 <span style={{ margin: '0 10px', color: '#888' }}>or</span>
//                 <div style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }}></div>
//               </div>


//               <div className="social-buttons"
//               style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0px' }}>
//                 <button type="button" className="social-btn google" style={{ flex: '1', marginRight: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <i className="bi bi-google" style={{ marginRight: '5px' }}></i> Sign up with Google
//                 </button>
//                 <button type="button" className="social-btn facebook" style={{ flex: '1', marginLeft: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <i className="bi bi-facebook" style={{ marginRight: '5px' }}></i> Sign up with Facebook
//                 </button>
//               </div>
//               <p style={{ color: "#cbcbcb", "fontSize": "14px" }}>
//                 By submitting my personal information, I understand and agree that CloudTalk 
//                 may collect, process, and retain my data pursuant to the CloudTalk terms and conditions. 
//                 </p>

//               <div className="form-checkbox" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
               
//                 <input type="checkbox" id="subscribe" className="small-checkbox" />
//                 <label htmlFor="subscribe" style={{ marginLeft: '10px' }}>I would like to subscribe to the monthly newsletter</label>
//               </div>
//               <button type="submit" className="full-width btn-primary">Client Register</button>

//               <div className="sign-in-link" style={{ marginTop: '20px', textAlign: 'center' }}>
//                 Already have an account? <a href="#" style={{ color: '#76bdff' }}>Sign in</a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Layout;
