import React from 'react';
import './Paypal.css'; // Import the CSS file

const Paypal = () => {
  return (
    <div className="paypal-container">
      <h2>Payment Information</h2>
      <form className="paypal-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" placeholder="Enter amount" />
        </div>

        <button type="submit" className="submit-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default Paypal;
