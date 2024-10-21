// WorkRooms.jsx
import React, { useState } from 'react';
import './WorkRooms.css';

const WorkRooms = () => {
  const [activeTab, setActiveTab] = useState('workrooms');

  // Dummy data for projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Content Writing",
      client: "Digital Solutions Inc.",
      status: "Pending Payment",
      amount: 750,
      dueDate: "2024-11-01",
      isPaid: false,
      deliveryDate: "2024-10-19",
      description: "10 product descriptions and 5 category pages",
      projectId: "PRJ-2024-001"
    },
    {
      id: 2,
      title: "Technical Documentation",
      client: "TechCorp Systems",
      status: "Completed",
      amount: 1200,
      dueDate: "2024-10-15",
      isPaid: true,
      deliveryDate: "2024-10-14",
      description: "API documentation and user guides",
      projectId: "PRJ-2024-002"
    }
  ];

  const renderProjectCard = (project) => (
    <div key={project.id} className="project-card">
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className={`status-badge ${project.isPaid ? 'status-completed' : 'status-pending'}`}>
          {project.status}
        </span>
      </div>

      <div className="project-details">
        <div className="detail-row">
          <span className="detail-label">Client:</span>
          <span className="detail-value">{project.client}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Project ID:</span>
          <span className="detail-value">{project.projectId}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Amount:</span>
          <span className="detail-value">${project.amount}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Due Date:</span>
          <span className="detail-value">{new Date(project.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Delivery Date:</span>
          <span className="detail-value">{new Date(project.deliveryDate).toLocaleDateString()}</span>
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-actions">
        <button className="view-btn">View Project</button>
        {!project.isPaid && (
          <button className="paypal-btn">
            Pay with PayPal
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="workroom-container">
      <h1>Manage</h1>
      
      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'workrooms' ? 'active' : ''}`}
            onClick={() => setActiveTab('workrooms')}
          >
            WorkRooms
          </button>
          <button 
            className={`tab-btn ${activeTab === 'managers' ? 'active' : ''}`}
            onClick={() => setActiveTab('managers')}
          >
            My Managers
          </button>
        </div>
      </div>

      {activeTab === 'workrooms' && (
        <div className="projects-grid">
          {projects.map(project => renderProjectCard(project))}
        </div>
      )}

      {activeTab === 'managers' && (
        <div className="managers-section">
          <p className="empty-managers">No managers assigned yet.</p>
        </div>
      )}
    </div>
  );
};

export default WorkRooms;