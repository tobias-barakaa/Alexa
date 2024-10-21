import React from 'react'
import HeroClientSection from './HeroClientSection';
import "./MainLayout.css";

const MainLayoutClient = () => {
  return (
    <div>
       <main className="main-content">
          <div className="profile-card">
            <div className="profile-content">
              <div className="profile-left">
                <div className="profile-image" />
                <div className="profile-info">
                  <div className="profile-name">Name</div>
                  <span className="separator">|</span>
                  <span className="feedback">No feedback</span>
                  <span className="email">email@tobbygmail.com</span>
                </div>
              </div>

              <div className="cash-account-section">
                <span>Cash Account: $0.00</span>
                <button>Add Funds</button>
              </div>
            </div>
          </div>
        </main>

        <div className="profile-divider" />

        <HeroClientSection />
    </div>
  )
}

export default MainLayoutClient
