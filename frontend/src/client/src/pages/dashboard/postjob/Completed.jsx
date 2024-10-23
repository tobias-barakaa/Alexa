// Completed.jsx
import React, { useState } from 'react';
import './Completed.css';

const Completed = () => {
  const [job, setJob] = useState({
    title: "Write a Technical Blog Post",
    description: "Create a detailed blog post about React hooks...",
    requirements: [
      "3+ years React experience",
      "Strong English writing skills",
      "Knowledge of hooks and state management"
    ],
    budget: 200,
    status: "in-progress",
    paymentStatus: "pending",
    deadline: "2024-11-01"
  });

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleStatusChange = (newStatus) => {
    setJob(prev => ({ ...prev, status: newStatus }));
    setShowConfirmDialog(false);
  };

  return (
    <div className="manage-container">
      <div className="job-card">
        {/* Header Section */}
        <div className="job-header">
          <h1 className="job-title">{job.title}</h1>
          <span className={`status-badge ${job.status}`}>
            {job.status}
          </span>
        </div>

        {/* Key Information Grid */}
        <div className="info-grid">
          <div className="info-item">
            <span className="info-icon">💰</span>
            <div className="info-content">
              <label>Budget</label>
              <span>${job.budget}</span>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon">⏰</span>
            <div className="info-content">
              <label>Deadline</label>
              <span>{new Date(job.deadline).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">💳</span>
            <div className="info-content">
              <label>Payment Status</label>
              <span>{job.paymentStatus}</span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="section">
          <h2>Description</h2>
          <p className="description">{job.description}</p>
        </div>

        {/* Requirements Section */}
        <div className="section">
          <h2>Requirements</h2>
          <ul className="requirements-list">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => setShowConfirmDialog(true)}
          >
            Mark as Complete
          </button>
          <button className="btn btn-secondary">
            Request Revision
          </button>
          <button className="btn btn-danger">
            Cancel Job
          </button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirm Status Change</h2>
            <p>Are you sure you want to mark this job as complete? This action cannot be undone.</p>
            <div className="modal-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowConfirmDialog(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => handleStatusChange('completed')}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Completed;