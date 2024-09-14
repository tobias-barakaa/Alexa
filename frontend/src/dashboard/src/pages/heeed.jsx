import { useState } from 'react';
import { Bell, LogOut } from 'lucide-react';
import './heed.css';

const Heed = () => {
    const [activePage, setActivePage] = useState('Wallet');
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

export default Heed
