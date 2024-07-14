import { useState } from 'react';
import "./StepTwo.css";

const StepTwo = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    keywords: '',
    quantity: 1,
    authorTone: 'friendly',
    duration: '3hrs',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  return (
    <div className="order-article-container">
      <div className="order-article-form">
        <h2 className="form-heading">OTHER REQUIRED INFORMATION</h2>
        <div className="form-group">
          <label htmlFor="keywords" className="form-label">Keywords:</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            className="description-input"
            required
          />
        </div>
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              max="50"
              className="description-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorTone" className="form-label">Language Tone:</label>
            <div className="dropdown-container">
              <select
                id="authorTone"
                name="authorTone"
                value={formData.authorTone}
                onChange={handleChange}
                className="category-dropdown"
                required
              >
                <option value="friendly">Friendly</option>
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
                <option value="humorous">Humorous</option>
                <option value="informative">Informative</option>
                <option value="persuasive">Persuasive</option>
                <option value="promotional">Promotional</option>
                <option value="technical">Technical</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="duration" className="form-label">Duration:</label>
          <div className="dropdown-container">
            <select
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="category-dropdown"
              required
            >
              <option value="3hrs">3 Hours</option>
              <option value="6hrs">6 Hours</option>
              <option value="12hrs">12 Hours</option>
              <option value="24hrs">24 Hours</option>
              <option value="2days">2 Days</option>
              <option value="3days">3 Days</option>
              <option value="5days">5 Days</option>
              <option value="one_week">One Week</option>
              <option value="two_weeks">Two Weeks</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <button type="button" className="prev-button" onClick={prevStep}>Prev</button>

          <button type="submit" className="next-button" onClick={nextStep}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
