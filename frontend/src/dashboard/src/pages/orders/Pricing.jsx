// Pricing.js
import { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [complexity, setComplexity] = useState('General');
  const [wordCount, setWordCount] = useState('300 words');
  const basePrice = {
    "300 words": 0.07 * 300,
    "500 words": 0.07 * 500,
    "800 words": 0.07 * 800,
    "1000 words": 0.07 * 1000,
    "1500 words": 0.07 * 1500,
    "3000 words": 0.07 * 3000,
  };

  const calculateTotalCost = () => {
    let baseCost = basePrice[wordCount];
    switch (complexity) {
      case "Advanced":
        baseCost += 30;
        break;
      case "Expert":
        baseCost += 50;
        break;
      default:
        baseCost += 0; // General
    }
    return baseCost.toFixed(2); // Format to 2 decimal places
  };

  return (
    <div className="pricing-container">
      <h2>Pricing for Articles</h2>
      <form className="pricing-form">
        <div className="form-group">
          <label htmlFor="word-count">Select Word Count:</label>
          <select
            id="word-count"
            value={wordCount}
            onChange={(e) => setWordCount(e.target.value)}
          >
            {Object.keys(basePrice).map((wordCount) => (
              <option key={wordCount} value={wordCount}>
                {wordCount}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="complexity">Select Complexity:</label>
          <select
            id="complexity"
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
          >
            <option value="General">General</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        
        <div className="form-group">
          <h3>Total Cost: ${calculateTotalCost()}</h3>
        </div>
      </form>
    </div>
  );
};

export default Pricing;
