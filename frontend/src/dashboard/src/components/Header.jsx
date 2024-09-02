import "./Header.css";

const Header = () => {
  return (
    <div className="top-navbar">
      <ul className="nav-list">
        <li className="home">Home</li>
        <li className="about">About</li>
        <li className="faq">FAQ</li>
        <li className="contact">Contact us</li>

        <li className="menu">
          <span><i className="bi bi-gear-wide"></i></span> Settings
        </li>
        <li className="wallet">
          <span><i className="bi bi-currency-rupee"></i></span> Wallet
        </li>

        {/* Phone Number */}

        {/* Notification Bell */}
        

        {/* Profile Section */}
        <li className="profile">
          <span><i className="bi bi-person-badge"></i></span> Profile
        </li>
      </ul>

    </div>
  );
};

export default Header;
