import { useEffect, useState } from 'react';
import { Search, Bell, User, ChevronDown, Plus, Menu } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';


const styles = `
  .dashboard-container-writer {
    min-height: 100vh;
    background-color: #ffffff;
  }

  .writer-dashboard-hd {
    border-bottom: 1px solid #e5e5e5;
    background: #f5f5f5;
  }

  .header-content-writer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 20px;
  }

  .top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  }

  .left-section {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .logo {
    font-size: 20px;
    font-weight: bold;
  }

  .search-container {
    position: relative;
  }

  .search-input {
    padding: 5px 14px;
    padding-right: 40px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    width: 340px;
  }

  .search-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .post-job-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: white;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    cursor: pointer;
  }

  .dropdown-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: white;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    cursor: pointer;
  }

  .dropdown-content {
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 8px;
    background: white;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    width: 192px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .dropdown-content a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #333;
  }

  .dropdown-content a:hover {
    background: #f5f5f5;
  }

  .icon-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }

  .navigation-writer-dashboard {
    display: flex;
    align-items: center;
    gap: 16px;
    height: 39px;
    font-weight: bold;

  }

  .navigation-items {
  padding: 8px 16px;
  border: 1px solid transparent; /* Transparent border to prevent shifting */
  border-radius: 0px;
  cursor: pointer;
  background: none;
}


.navigation-items.active {
  background: white;
  border-color: #e5e5e5; 
  border-bottom: none; 
}

.main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1px 1px;
  }

  .profile-card {
    background: white;
    border-radius: 8px;
    padding: 10px;
  }

  .profile-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }

  .profile-left {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  .profile-image {
    width: 46px;
    height: 46px;
    background: #e5e5e5;
  }

  .profile-name {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }

  .profile-info .separator {
    margin: 0 8px;
    color: #666;
  }

  .profile-info .feedback {
    color: #666;
  }

  .profile-info .email {
    color: #666;
    margin-top: 2px;
    display: block;
    font-size: 14px;
  }

  .profile-divider {
    margin-top: 16px;
    border-top: 1px solid #e5e5e5;
    padding-top: 16px;
  }

  .cash-account-section {
    text-align: right;
  }

  .cash-account-section span {
    font-size: 14px;
    margin-right: 16px;
  }

  .cash-account-section button {
    background: #078BC8;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  .dropdown-container {
    position: relative;
  }
`;

const WriterDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showPeopleDropdown, setShowPeopleDropdown] = useState(false);
 
  const navItems = ['Dashboard', 'Hire', 'Manage', 'Payments'];
  const profileMenuItems = ['View Cash', 'Payment Methods', 'Help', 'Logout'];
  const navigate = useNavigate();


  const handleTabClick = (item) => {
    setActiveTab(item);
    localStorage.setItem('activeTab', item);

    // Navigate to the appropriate route based on the tab
    if (item === 'Dashboard') {
      navigate('/cli-wri');  // Navigates to the base route
    } else if (item === 'Hire') {
      navigate('/cli-wri/projects/hire');
    } else if (item === 'Manage') {
      navigate('/cli-wri/manage/1');  // Example manage route, adjust the id
    } else if (item === 'Payments') {
      navigate('/cli-wri/payments');
    }
  };

  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);
  





  return (
    <>
      <style>{styles}</style>
      <div className="dashboard-container-writer">
        <header className="writer-dashboard-hd">
          <div className="header-content-writer">
            <div className="top-header">
              <div className="left-section">
                <div className="logo">LOGO</div>
                <div className="search-container">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search Writers"
                  />
                  <Search className="search-icon" size={20} />
                </div>
              </div>

              <div className="right-section">
                <button className="post-job-btn">
                  <Plus size={16} />
                  <span>Post Job</span>
                </button>

                <div className="dropdown-container">
                  <button
                    className="dropdown-btn"
                    onClick={() => setShowPeopleDropdown(!showPeopleDropdown)}
                  >
                    <Menu size={16} />
                  </button>
                  {showPeopleDropdown && (
                    <div className="dropdown-content">
                      <a href="#">Person 1</a>
                      <a href="#">Person 2</a>
                      <a href="#">Person 3</a>
                    </div>
                  )}
                </div>

                <button className="icon-button">
                  <Bell size={24} color="#666" />
                </button>

                <div className="dropdown-container">
                  <button
                    className="icon-button"
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  >
                    <User size={24} color="#666" />
                    <ChevronDown size={16} color="#666" />
                  </button>
                  {showProfileDropdown && (
                    <div className="dropdown-content">
                      {profileMenuItems.map((item, index) => (
                        <a key={index} href="#">{item}</a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <nav className="navigation-writer-dashboard">
            {navItems.map((item) => (
  <button
    key={item}
    className={`navigation-items ${activeTab === item ? 'active' : ''}`}
    onClick={() => handleTabClick(item)}
  >
    {item}
  </button>
))}

            </nav>
          </div>
        </header>

        <main className="main-content">

            
         <Outlet />


        </main>


      </div>
      <Footer />

    </>
  );
};

export default WriterDashboard;
