import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetManagerQuery } from '../../../../../slices/writers/writerApiSlice';
import './MyManagers.css';

const MyManagers = () => {
  const { managerId } = useParams();
  const { data: managerData, error, isLoading } = useGetManagerQuery(managerId);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error fetching manager details</div>;
  }

  const { writer } = managerData || {};

  return (
    <div className="manager-page">
      <div className="manager-container">
        <div className="profile-header">
          <h2>Manager Details</h2>
        </div>
        
        <div className="profile-content">
          <div className="profile-image">
            <img 
              src={writer?.profile_pic} 
              alt={`${writer?.first_name} ${writer?.last_name}`} 
            />
          </div>

          <div className="profile-details">
            <div className="profile-name">
              {writer?.first_name} {writer?.last_name}
            </div>
            
            <div className="profile-info">
              <div>Status: {writer?.profile_visible ? 'Active' : 'Inactive'}</div>
              <div>Verification: {writer?.verified ? 'Verified' : 'Not Verified'}</div>
            </div>

            <div className="profile-status">
              {writer?.profile_visible ? 'Public Profile' : 'Private Profile'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyManagers;
