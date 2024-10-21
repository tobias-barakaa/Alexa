import React from 'react';
import './FindAWriter.css';

const FindAWriter = () => {
  // Placeholder categories and freelancers data
  const categories = ['Article Writing', 'Programming & Development', 'Analytics', 'Consulting', 'Cross Platform Development'];
  const freelancers = [
    {
      name: 'John Doe',
      location: 'New York, USA',
      salary: '$510,158 /yr',
      rating: '100%',
      thumbnail: 'https://via.placeholder.com/50', // Placeholder thumbnail
      serviceImage: 'https://via.placeholder.com/300', // Placeholder service image
      serviceTitle: 'Custom Software Development',
      serviceRate: '$12/hr',
      serviceStarting: 'Starting at $500',
      serviceDescription: 'Suretek Infosoft provides software solutions ranging from simple e-commerce solutions to complex mobile and web applications, for all types of industries.',
    },
    // Add more freelancer data as needed
  ];

  return (
    <div className="find-writer-container">
      <div className="header-section">
        <h1>Find and Hire Freelancers</h1>
        <p>We found 1,336,021 Freelancers offering 1,984,371 freelancing services online.</p>
      </div>

      <div className="content-section">
        {/* Left: Categories */}
        <div className="category-section">
          <h3>Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        {/* Right: Search bar and freelancer list */}
        <div className="main-section">
          <div className="search-bar">
            <input type="text" placeholder="Search Writers" />
            <button>Search</button>
          </div>

          <div className="freelancer-list">
            {freelancers.map((freelancer, index) => (
              <div className="freelancer-item" key={index}>
                <div className="freelancer-profile">
                  <img src={freelancer.thumbnail} alt="Freelancer" className="profile-thumbnail" />
                  <div className="profile-info">
                    <h4>{freelancer.name}</h4>
                    <p>{freelancer.location}</p>
                    <p>{freelancer.salary}</p>
                    <div className="rating">
                      <span>👍</span> {freelancer.rating}
                    </div>
                  </div>
                </div>

                <div className="service-details">
                  <img src={freelancer.serviceImage} alt="Service" className="service-image" />
                  <div className="service-info">
                    <h4>{freelancer.serviceTitle} <span>{freelancer.serviceRate}</span></h4>
                    <p>{freelancer.serviceStarting}</p>
                    <p>{freelancer.serviceDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindAWriter;
