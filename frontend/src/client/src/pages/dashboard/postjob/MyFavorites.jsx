// MyFavorites.jsx
import React from 'react';
import './MyFavorites.css';

const MyFavorites = () => {
  return (
    <div className="favorites-container">
      <div className="favorites-header">
        <div className="header-left">
          <h1>Favorites Writers</h1>
          <p className="header-description">
            Hire, message, or request quotes from Freelancers you have worked with or added to My Favorites.
          </p>
        </div>
        <button className="add-writer-btn">Add a Writer</button>
      </div>
      
      <div className="search-section">
        <input 
          type="text" 
          className="search-bar"
          placeholder="Search Favorites Writers"
        />
      </div>
      
      <div className="empty-state">
        <p>You haven't added any Freelancers in this list.</p>
      </div>
    </div>
  );
};

export default MyFavorites;