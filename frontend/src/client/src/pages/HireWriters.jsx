import React from 'react';
import './HireWriters.css'; 
import centerImage from '../assets/images/tobby.png';


const HireWriters = () => {
  const writers = [
    { id: 1, name: 'John Doe', description: 'Expert in technical writing.' },
    { id: 2, name: 'Jane Smith', description: 'Creative content specialist.' },
    { id: 3, name: 'Mark Thompson', description: 'Professional blog writer.' },
    { id: 4, name: 'Sara Johnson', description: 'Skilled CV writer.' },
    { id: 5, name: 'Chris Evans', description: 'Email marketing expert.' },
    { id: 6, name: 'Lily Brooks', description: 'SEO content writer.' },
    { id: 7, name: 'Jake Turner', description: 'Specialist in academic writing.' },
    { id: 8, name: 'Anna Watson', description: 'Business proposal writer.' },
    { id: 9, name: 'James Lee', description: 'Copywriting specialist.' },
    { id: 10, name: 'Sophia King', description: 'Resume writing expert.' },
    { id: 11, name: 'David Clark', description: 'Press release writer.' },
    { id: 12, name: 'Ella Walker', description: 'Social media content writer.' },
    { id: 13, name: 'Lucas Green', description: 'Digital marketing expert.' },
    { id: 14, name: 'Emma Scott', description: 'Brand story writer.' },
    { id: 15, name: 'William Brown', description: 'Technical documentation specialist.' }
  ];

  return (
    <div className="hire-writers-container">
      {/* Left Section */}
      <div className="writers-info">
        <div className="meet-expert">Meet Our Experts</div>
        <p>Passionate and enthusiastic professionals that you’ll love working with</p>
        {/* Order Content Button */}
        <button className="order-content-btn">Order Content</button>
      </div>

      {/* Right Section (Grid of Writers) */}
      <div className="writers-grid">
        {writers.map(writer => (
          <div key={writer.id} className="writer-card">
            <img 
              src={centerImage} 
              alt={writer.name}
              className="writer-img"
            />
            <div className="overlay">
              <h6>{writer.name}</h6>
              <p>{writer.description}</p>
              <button className="hire-btn">Hire</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireWriters;
