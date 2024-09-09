import { useState } from 'react';
import './Paypal.css';

const Paypal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can make a POST request to send the data to your backend
    // Example with fetch
    fetch('http://localhost:5000/api/paypal/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Payment success:', data);
        // Handle success
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
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
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default Paypal;
