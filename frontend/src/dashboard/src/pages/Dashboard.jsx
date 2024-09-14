import React, { useState } from 'react';
import './Dashboard.css';
//import { PenTool, Settings, Wallet, FileText, Folder, BarChart, Users, MessageCircle, HelpCircle } from 'lucide-react';
import BlogForm from './BlogForm';
import { User, Settings,Wallet, LogOut } from 'lucide-react';
import Heed from './heeed';
import Home from './Home';


const Profile = () => <div></div>;


const ProfileItem = ({ icon, text }) => (
  <div className="profile-item">
    {icon}
    <span>{text}</span>
  </div>
);

const Dashboard = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (item) => {
    setExpandedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };
  const [activePage, setActivePage] = useState('Profile');

  const renderPage = () => {
    switch (activePage) {
      case 'Profile':
        return <Home />;
      case 'Settings':
        return <Settings />;
      case 'Wallet':
        return <Wallet />;
      default:
        return <Home />;
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

      <button className="orderarticle">Order Article</button>

      
      <div className="sidebar-menu">
        <ul>
          <li className="header-menu">
            <span>Orders</span>
          </li>
       
          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Create Article</span>
            </a>
          </li>


          

          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Edit Requests</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Drafts</span>
            </a>
          </li>


          <li className="sidebar-dropdown">
            <a href="#">
              <i className="fa fa-tachometer-alt"></i>
              <span>Pricing</span>
            </a>
            
          </li>
          
          
         
         
          <li className="header-menu">
            <span>Manage Orders</span>
          </li>
   
          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>View All Articles</span>
            </a>
          </li>

          

          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Published</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Archived</span>
            </a>
          </li>




          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Order History</span>
            </a>
          </li>

        




        
          
        </ul>

       


        <div className="sidebar-profile">
      <h2 className="profile-heading">Profile</h2>
      <div className="profile-items">
        <ProfileItem icon={<User size={18} />} text="View Profile" />
        <ProfileItem icon={<Settings size={18} />} text="Settings" />
        <ProfileItem icon={<LogOut size={18} />} text="Logout" />
      </div>
    </div>










      </div>





    </div>
    
  </nav>
 
</div>







<div className="main-cont">

  <Heed />



  <div className="cont">{renderPage()}</div>
</div>


    </div>
  );
};

export default Dashboard;
