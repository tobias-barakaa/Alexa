import React, { useState } from 'react';
import "../styles/Sidenav.css";

const Sidenav = () => {
  const [ordersOpen, setOrdersOpen] = useState(false);

  const toggleOrdersDropdown = () => {
    setOrdersOpen(!ordersOpen);
  };

  return (
    <div className="side">
      <h2>Admin Panel</h2>
      <ul>
        <li><a href="#dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
        <li><a href="#users"><i className="fas fa-users"></i> Users</a></li>
        <li><a href="#products"><i className="fas fa-box"></i> Products</a></li>
        <li className={`dropdown ${ordersOpen ? 'show' : ''}`}>
          <a href="#orders" onClick={toggleOrdersDropdown} className="btn btn-secondary dropdown-toggle">
            <i className="fas fa-shopping-cart"></i> Orders
            <i className={`fas fa-chevron-${ordersOpen ? 'up' : 'down'}`}></i>
          </a>
          <div className={`dropdown-menu ${ordersOpen ? 'show' : ''}`}>
            <a className="dropdown-item" href="#blog-writing">Blog Writing</a>
            <a className="dropdown-item" href="#article-creation">Article Creation</a>
            <a className="dropdown-item" href="#resume">Resume</a>
            <a className="dropdown-item" href="#email-copywriting">Email Copywriting</a>
          </div>
        </li>
        <li><a href="#reports"><i className="fas fa-chart-line"></i> Reports</a></li>
        <li><a href="#settings"><i className="fas fa-cog"></i> Settings</a></li>
        <li><a href="#support"><i className="fas fa-life-ring"></i> Support</a></li>
      </ul>
    </div>
  );
};

export default Sidenav;
