import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/components/Header.css";
import logo from "../assets/images/llo.png";
import immage from "../assets/images/tob.png";


const Header = () => {
  return (
    <>
    

    <div>
      {/* Header */}
      <header className="header">
        <img src={logo} alt="Logo" className="loggo" />
      </header>

      {/* Hero Section */}
      <div class="main-banner">
        <div class="banner-content">
          <img src={immage} alt="Plesk" class="plesk-image" />
            <h1>Try Plesk for FREE on Your Server</h1>
            <p>Grow your business with our complete solution - for Linux or Windows</p>
        </div>
    </div>

      {/* Main Content Section */}
      <div className="main-content">
        {/* Left Side with Icons */}
        <div className="left-side">
          <div className="icon-container">
            <span className="icon">Automated</span>
            <span className="icon">Trusted</span>
            <span className="icon">Flexible</span>
            <span className="icon">Scalable</span>
          </div>
          <h2>Empower Your Business</h2>
          <img src="path/to/your/image.jpg" alt="Empower Your Business" className="empower-image" />
        </div>

        {/* Right Side with Sign-up Form */}
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
