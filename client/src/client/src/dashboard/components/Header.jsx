import "./Header.css";

const Header = () => {
  return (
    <div className="top-navbar">
      <ul className="nav-list">
        <li className="home">Home</li>
        <li className="about">About Website</li>
        <li className="faq">FAQ</li>
        <li className="contact">Contact us</li>

        <li className="menu">
          <span>⚙️</span> Settings
        </li>
        <li className="wallet">
          <span>💳 </span> Wallet
        </li>

        {/* Phone Number */}

        {/* Notification Bell */}
        

        {/* Profile Section */}
        <li className="profile">
          <span>👤</span> Profile
        </li>
      </ul>

    </div>
  );
};

export default Header;
