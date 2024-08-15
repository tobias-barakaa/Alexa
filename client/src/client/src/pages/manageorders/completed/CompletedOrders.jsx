import React from 'react';
import "../../../styles/pages/manageorders/completed/CompletedOrders.css";

const CompletedOrders = () => {
  const handleBoxClick = (type) => {
    console.log(`Selected: ${type}`);
    // Add your click handling logic here
  };

  return (
    <div className="completed-orders">
      <h2 className="heading">Choose Your Content Type</h2>
      <p className="instruction">Click on an option to select your desired service</p>
      <div className="container">
        <div className="box" onClick={() => handleBoxClick('Blog Writing')}>
          <div className="box-icon">📝</div>
          <div className="box-title">Blog Writing</div>
        </div>
        <div className="box" onClick={() => handleBoxClick('Article Creation')}>
          <div className="box-icon">📰</div>
          <div className="box-title">Article Creation</div>
        </div>
        <div className="box" onClick={() => handleBoxClick('CV Writing')}>
          <div className="box-icon">📄</div>
          <div className="box-title">CV Writing</div>
        </div>
        <div className="box" onClick={() => handleBoxClick('Email Copywriting')}>
          <div className="box-icon">✉️</div>
          <div className="box-title">Email Copywriting</div>
        </div>
      </div>
    </div>
  );
};

export default CompletedOrders;