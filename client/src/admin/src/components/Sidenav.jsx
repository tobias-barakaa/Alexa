import React, { useState } from 'react';
import "../styles/Sidenav.css";

const Sidenav = () => {
  const [ordersOpen, setOrdersOpen] = useState(false);

  const toggleOrdersDropdown = (e) => {
    e.preventDefault();
    setOrdersOpen(!ordersOpen);
  };

  return (
    <div className="side">
      <h2>Admin Panel</h2>
      <ul>
        <li><a href="#dashboard" className="active"><i className="fas fa-tachometer-alt"></i> <span>Dashboard</span></a></li>
        <li><a href="#users"><i className="fas fa-users"></i> <span>Users</span></a></li>
        <li><a href="#products"><i className="fas fa-box"></i> <span>Products</span></a></li>
        <li className="dropdown">
          <a href="#orders" onClick={toggleOrdersDropdown}>
            <i className="fas fa-shopping-cart"></i> <span>Orders</span>
            <i className={`fas fa-chevron-${ordersOpen ? 'up' : 'down'}`}></i>
          </a>
          <ul className={`dropdown-menu ${ordersOpen ? 'open' : ''}`}>
            <li><a href="#blog-writing">Blog Writing</a></li>
            <li><a href="#article-creation">Article Creation</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#email-copywriting">Email Copywriting</a></li>
          </ul>
        </li>
        <li><a href="#reports"><i className="fas fa-chart-line"></i> <span>Reports</span></a></li>
        <li><a href="#settings"><i className="fas fa-cog"></i> <span>Settings</span></a></li>
        <li><a href="#support"><i className="fas fa-life-ring"></i> <span>Support</span></a></li>
      </ul>
    </div>
  );
};

export default Sidenav;