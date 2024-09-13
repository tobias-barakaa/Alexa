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





<div className="page-wrapper chiller-theme toggled">
  
  <nav id="sidebar" className="sidebar-wrapper">
    <div className="sidebar-content">
      
      <div className="sidebar-header">
        <div className="user-pic">
          <img className="img-responsive img-rounded"
          src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
            alt="User picture" />
        </div> 
        <div className="user-info">
          <span className="user-name">Jhon
            <strong>Smith</strong>
          </span>
          <span className="user-role">Administrator</span>
          <span className="user-status">
            
          </span>
        </div>
      </div>
      
      <div className="sidebar-menu">
        <ul>
          <li className="header-menu">
            <span>General</span>
          </li>
          <a href="#">
              <i class="fa fa-shopping-cart"></i>
              <span>E-commerce</span>
              <span class="badge badge-pill badge-danger">3</span>
            </a>


          <li className="sidebar-dropdown">
            <a href="#">
              <i className="fa fa-tachometer-alt"></i>
              <span>dd</span>
              <span className="badge badge-pill badge-warning">New</span>
            </a>
            
          </li>
         
         
          <li className="header-menu">
            <span>Extra</span>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Documentation</span>
              <span className="badge badge-pill badge-primary">Beta</span>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
    
  </nav>
 
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
