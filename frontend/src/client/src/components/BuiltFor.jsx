import React from 'react';
import { FaBullhorn, FaUsers, FaChartLine, FaLightbulb } from 'react-icons/fa'; // Importing icons
import './BuiltFor.css';

const BuiltFor = () => {
  return (
    <div className="built-for-section">
      <div className='builtfor-enwriters'>Enwriters is built for </div>
      <div className="built-for-items">
        <div className="built-for-item">
          <FaBullhorn size={60} className="built-for-icon" />
          <h4>For Marketers</h4>
        </div>
        <div className="built-for-item">
          <FaUsers size={60} className="built-for-icon" />
          <h4>For Teams</h4>
        </div>
        <div className="built-for-item">
          <FaChartLine size={60} className="built-for-icon" />
          <h4>For Analysts</h4>
        </div>
        <div className="built-for-item">
          <FaLightbulb size={60} className="built-for-icon" />
          <h4>For Creators</h4>
        </div>
      </div>
    </div>
  );
};

export default BuiltFor;
