import React, { useState } from 'react';
import './Dashboard.css';
import { PenTool, Settings, Wallet, FileText, Folder, BarChart, Users, MessageCircle, HelpCircle } from 'lucide-react';


const Profile = () => <div>Profile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont


Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
</div>;
const Settings = () => <div>Settings Cont</div>;
const Wallet = () => <div>Wallet Cont</div>;

const Dashboard = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (item) => {
    setExpandedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };
  const [activePage, setActivePage] = useState('Profile');

  const renderPage = () => {
    switch (activePage) {
      case 'Profile':
        return <Profile />;
      case 'Settings':
        return <Settings />;
      case 'Wallet':
        return <Wallet />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="app-container">





     <div className="sidebar">
      <div className="sidebar-header">
        <h2>ArticleCraft</h2>
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={() => toggleExpand('writing')}>
              <PenTool size={18} />
              <span>Writing</span>
            </button>
            {expandedItems.writing && (
              <ul>
                <li><button onClick={() => setActivePage('NewArticle')}>New Article</button></li>
                <li><button onClick={() => setActivePage('Drafts')}>Drafts</button></li>
                <li><button onClick={() => setActivePage('Templates')}>Templates</button></li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleExpand('management')}>
              <Folder size={18} />
              <span>Management</span>
            </button>
            {expandedItems.management && (
              <ul>
                <li><button onClick={() => setActivePage('Published')}>Published</button></li>
                <li><button onClick={() => setActivePage('Categories')}>Categories</button></li>
                <li><button onClick={() => setActivePage('Tags')}>Tags</button></li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => setActivePage('Analytics')}>
              <BarChart size={18} />
              <span>Analytics</span>
            </button>
          </li>
          <li>
            <button onClick={() => setActivePage('Collaboration')}>
              <Users size={18} />
              <span>Collaboration</span>
            </button>
          </li>
          <li>
            <button onClick={() => setActivePage('Comments')}>
              <MessageCircle size={18} />
              <span>Comments</span>
            </button>
          </li>
          <li>
            <button onClick={() => setActivePage('Profile')}>
              <FileText size={18} />
              <span>Profile</span>
            </button>
          </li>
          <li>
            <button onClick={() => setActivePage('Settings')}>
              <Settings size={18} />
              <span>Settings</span>
            </button>
          </li>
          <li>
            <button onClick={() => setActivePage('Wallet')}>
              <Wallet size={18} />
              <span>Wallet</span>
            </button>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button onClick={() => setActivePage('Help')}>
          <HelpCircle size={18} />
          <span>Help & Support</span>
        </button>
      </div>
      </div>







      <div className="main-cont">
        <div className="header">Header</div>
        <div className="horizontal-line"></div>
        <div className="cont">{renderPage()}</div>
      </div>

    </div>
  );
};

export default Dashboard;
