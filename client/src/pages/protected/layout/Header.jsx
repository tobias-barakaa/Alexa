import "./Header.css";

const Header = () => {
  return (
    <div>
     
     <div className="top-navbar">
  <ul className="nav-list">
    <li className="home">Home</li>
    <li className="about">About Website</li>
    <li className="faq">FAQ</li>
    <li className="contact">Contact us</li>

    <li className="menu"><span>⚙️</span>Settings</li>
    <li className="what"><span>💳 </span>Wallet</li>

  </ul>
</div>
        
    </div>
  );
}

export default Header;
