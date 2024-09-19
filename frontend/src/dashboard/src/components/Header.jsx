import { Bell, LogOut } from 'lucide-react';
import './Header.css';

const Header = () => {
  const balance = 0.00; // This should be dynamically set in a real application

  return (
    <>
      <header className="header">
        <div className="logo">en.writers</div>
        <nav className="nav-menu">
          {/* <ul>
            <li 
              onClick={() => setActivePage('Wallet')} 
              className={activePage === 'Wallet' ? 'active' : ''}
            >
              Wallet
            </li>
            <li 
              onClick={() => setActivePage('Settings')} 
              className={activePage === 'Settings' ? 'active' : ''}
            >
              Settings
            </li>
            <li 
              onClick={() => setActivePage('Support')} 
              className={activePage === 'Support' ? 'active' : ''}
            >
              Support
            </li>
            <li 
              onClick={() => setActivePage('Profile')} 
              className={activePage === 'Profile' ? 'active' : ''}
            >
              Profile
            </li>
          </ul> */}
        </nav>
        <div className="header-actions">
          <div className="balance">
            Balance: <span>${balance.toFixed(2)}</span>
          </div>
          <button className="notification-btn">
            <Bell size={20} />
          </button>
          <button className="logout-btn">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </header>
      <div className="header-divide"></div>
      </>
  )
}

export default Header


// import "./Header.css";

// const Header = () => {
//   return (
//     <div className="top-navbar">
//       <ul className="nav-list">
//         <li className="home">Home</li>
//         <li className="about">About</li>
//         <li className="faq">FAQ</li>
//         <li className="contact">Contact us</li>
//         <li className="menu">
//           <span><i className="bi bi-gear-wide"></i></span> Settings
//         </li>
//         <li className="wallet">
//           <span><i className="bi bi-currency-rupee"></i></span> Wallet
//         </li>
//         <li className="profile">
//           <span><i className="bi bi-person-badge"></i></span> Profile
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Header;



