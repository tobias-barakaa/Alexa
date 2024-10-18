// WriterProfile.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetWriterProfileByUsernameQuery } from '../../../slices/writers/writerApiSlice';
import './WriterProfile.css';
import HireWriterModal from './HireWriterModal';

const ErrorState = ({ message }) => (
  <div className="error-container">
    <div className="error-content">
      <div className="error-icon">😕</div>
      <h2>{message}</h2>
      <p>Please try again later or check the profile URL</p>
      <button className="error-button" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  </div>
);

const WriterProfile = () => {
  const { username } = useParams();
  const { data: writer, isLoading, isError } = useGetWriterProfileByUsernameQuery(username);
  const [showHireModal, setShowHireModal] = useState(false);


  if (isLoading) {
    return <div className="loader"></div>;
  }

  if (isError) {
    return <ErrorState message="Oops! We couldn't find this writer's profile" />;
  }

  if (!writer) {
    return <ErrorState message="Profile not found" />;
  }

  const handleHire = () => {
    // Implement hire functionality
    console.log('Hire writer:', writer.username);
  };
  
  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="profile-header">
        <div className="profile-header-content">
          <div className="profile-image">
            <img src={writer.profile_pic} alt={`${writer.first_name} ${writer.last_name}`} />
          </div>
          <div className="profile-header-info">
            <div className="profile-name-section">
              <h1>{writer.first_name} {writer.last_name}</h1>
              <p className="username">@{writer.username}</p>
            </div>
            <div className="profile-stats">
              <div className="rating">
                <span className="star">★</span>
                <span>{writer.rating || 'New'}</span>
              </div>
              <div className="rate-badge">${writer.hourly_rate}/word</div>
            </div>
            <button className="hire-button" onClick={() => setShowHireModal(true)}>
        Hire Me
        <span className="button-arrow">→</span>
      </button>

      {showHireModal && (
        <HireWriterModal 
          writer={writer} 
          onClose={() => setShowHireModal(false)} 
        />
      )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="profile-content">
        {/* Left Column */}
        <div className="profile-main">
          {/* Bio Section */}
          <div className="profile-section">
            <h2>About Me</h2>
            <p className="bio">{writer.bio}</p>
          </div>

          {/* Skills & Specializations */}
          <div className="profile-section">
            <h2>Expertise</h2>
            <div className="expertise-content">
              <div className="skills-section">
                <h3>Skills</h3>
                <div className="tags">
                  {writer.skills.split(',').map((skill) => (
                    <span key={skill} className="tag skill-tag">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <div className="specializations-section">
                <h3>Specializations</h3>
                <div className="tags">
                  {writer.specializations.split(',').map((spec) => (
                    <span key={spec} className="tag spec-tag">
                      {spec.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="profile-sidebar">
          {/* Info Card */}
          <div className="profile-section">
            <div className="info-list">
              <div className="info-item">
                <i className="icon">📍</i>
                <span>{writer.city}, {writer.country}</span>
              </div>
              <div className="info-item">
                <i className="icon">🌐</i>
                <span>{writer.languages}</span>
              </div>
              <div className="info-item">
                <i className="icon">⏰</i>
                <span>{writer.timezone}</span>
              </div>
              <div className="info-item">
                <i className="icon">💼</i>
                <span>{writer.years_of_experience} years of experience</span>
              </div>
              <div className="info-item">
                <i className="icon">✉️</i>
                <span>{writer.contact}</span>
              </div>
            </div>
          </div>

          {/* Links Card */}
          <div className="profile-section">
            <h2>Links</h2>
            <div className="links-list">
              {writer.portfolio_link && (
                <a href={writer.portfolio_link} target="_blank" rel="noopener noreferrer" 
                   className="profile-link">
                  <i className="icon">🔗</i>
                  Portfolio
                </a>
              )}
              {writer.social_media_links?.linkedin && (
                <a href={writer.social_media_links.linkedin} target="_blank" 
                   rel="noopener noreferrer" className="profile-link">
                  <i className="icon">💼</i>
                  LinkedIn
                </a>
              )}
              {writer.social_media_links?.twitter && (
                <a href={writer.social_media_links.twitter} target="_blank" 
                   rel="noopener noreferrer" className="profile-link">
                  <i className="icon">🐦</i>
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterProfile;



