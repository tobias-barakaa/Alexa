import { useState } from 'react';
import './Paypal.css';

const Paypal = () => {
  const [formData, setFormData] = useState({
    product: '',   // Product name
    amount: '',    // Product price
    currency: 'USD' // Default currency
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to send the data to your backend
    fetch('http://localhost:5000/api/paypal/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product: formData.product,
        price: formData.amount, // Map amount to price
        currency: formData.currency
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Payment success:', data);
        // Handle success (e.g., redirect to approval URL)
        if (data.approval_url) {
          window.location.href = data.approval_url;
        }
      })
      .catch((error) => {
        console.error('Payment error:', error);
        // Handle error
      });
  };

  return (
    <div className="paypal-container">
      <h2>Payment Information</h2>
      <form className="paypal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="product">Product</label>
          <input
            type="text"
            id="product"
            name="product"
            placeholder="Enter product name"
            value={formData.product}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            step="0.01"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="currency">Currency</label>
          <select
            id="currency"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* Add more currencies as needed */}
          </select>
        </div>

        <button type="submit" className="submit-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default Paypal;
