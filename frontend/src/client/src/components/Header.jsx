import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/components/Header.css";
import logo from "../assets/images/llo.png";
import pleskImage from "../assets/images/tob.png";

const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Try Plesk for FREE on Your Server</h1>
          <h3>Grow your business with our complete solution - for Linux or Windows</h3>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="main-content">
        {/* Left Side with Features and Image */}
        <div className="left-side">
          <div className="feature-icons">
            <div className="icon">Automated</div>
            <div className="icon">Trusted</div>
            <div className="icon">Flexible</div>
            <div className="icon">Scalable</div>
          </div>
          <h2>Empower Your Business</h2>
          <img src={pleskImage} alt="Empower Your Business" className="empower-image" />
        </div>

        {/* Right Side with Sign-Up Form */}
        <div className="right-side">
          <form className="signup-form">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up Now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;



// import '@fortawesome/fontawesome-free/css/all.min.css';
// import "../styles/components/Header.css";
// import logo from "../assets/images/llo.png";
// import { Link } from 'react-router-dom';


// const Header = () => {
//   return (
//     <>
//     <header className="headerr">
//       <img src={logo} className='header-logo' alt='logo' />
//       <div className="spacer"></div>
//       <div className="nav-items">
//         <Link to='/about' className="nav-item">
//         <i className="bi bi-file-earmark-person"></i>
//           <span>About Us</span>
//         </Link>
//         <div className="nav-item">
//           <i className="bi bi-building"></i>
//           <span>Company</span>
//         </div>
       
//       </div>

//       <Link  to="comingsoon" className="custom-button" style={{ marginRight: "40px", padding: "12px" }}>
//   Become a Writer
// </Link>

//     </header>
//     <hr style={{ backgroundColor: '#000000', height: '1px', border: 'none' }}/>


//     </>

//   );
// };

// export default Header;
