// JobListings.jsx
import React, { useState } from 'react';
import './JobListings.css';

const JobListings = () => {
  // Dummy data - in real app this would come from props or API
  const [jobs] = useState([
    {
      id: 1,
      title: "Technical Content Writer Needed for Software Documentation",
      status: "In Progress",
      datePosted: "2024-10-15",
      budget: 500,
      proposals: 12,
      dueDate: "2024-11-01",
      description: "Looking for an experienced technical writer to create comprehensive software documentation...",
      skills: ["Technical Writing", "Software Documentation", "API Documentation"]
    },
    {
      id: 2,
      title: "Blog Posts Writer for Digital Marketing Agency",
      status: "Completed",
      datePosted: "2024-10-10",
      budget: 300,
      proposals: 8,
      dueDate: "2024-10-25",
      description: "Need a creative writer for ongoing blog posts about digital marketing trends...",
      skills: ["Blog Writing", "SEO", "Digital Marketing"]
    },
    // Add empty array case to test empty state
    // const jobs = []
  ]);

  const getStatusStyle = (status) => {
    const statusClasses = {
      "In Progress": "status-progress",
      "Completed": "status-completed",
      "Pending": "status-pending"
    };
    return statusClasses[status] || "";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (jobs.length === 0) {
    return (
      <div className="job-listings-container">
        <h1>My Job Listings</h1>
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h2>No Job Listings Yet</h2>
          <p>You haven't posted any jobs yet. When you do, they'll appear here.</p>
          <button className="post-job-btn">Post a Job</button>
        </div>
      </div>
    );
  }

  return (
    <div className="job-listings-container">
      <div className="listings-header">
        <h1>My Job Listings</h1>
        <button className="post-job-btn">Post a Job</button>
      </div>

      <div className="jobs-list">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h2>{job.title}</h2>
              <span className={`status-badge ${getStatusStyle(job.status)}`}>
                {job.status}
              </span>
            </div>

            <div className="job-meta">
              <div className="meta-item">
                <span className="meta-label">Posted:</span>
                <span>{formatDate(job.datePosted)}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Budget:</span>
                <span>${job.budget}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Proposals:</span>
                <span>{job.proposals}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Due Date:</span>
                <span>{formatDate(job.dueDate)}</span>
              </div>
            </div>

            <p className="job-description">{job.description}</p>

            <div className="job-skills">
              {job.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>

            <div className="job-actions">
              <button className="action-btn">View Proposals</button>
              <button className="action-btn">Edit Job</button>
              <button className="action-btn danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;