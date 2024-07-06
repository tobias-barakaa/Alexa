import './NavDiv.css';
import backgroundImage from '../../assets/images/office.jpg';

const NavDiv = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-logo">
            <span className="logo-en">En</span>
            <span className="logo-writers">writers</span>
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="right-buttons">
            <a href="#" className="hire-writers">Hire Personal Writers</a>
          </div>
        </nav>
      </header>
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
    <div className="content-left">
      <h1>Market leader in lead generation within the Benelux.</h1>
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
      <form className="signup-form">
        <h2>Sign Up</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
        </div>
      </main>
    </>
  );
};

export default NavDiv;
