// ManageContent.jsx
import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import './ManageProject.css';
import QuillEditor from './ReactQuill';

const ManageContent = () => {
  const [content, setContent] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const projectDetails = {
    title: "Article on Modern Web Development",
    budget: "$200",
    deadline: "October 30, 2024",
    paymentStatus: "Pending",
    description: "Comprehensive article covering modern web development practices...",
    requirements: [
      "Minimum 2000 words",
      "Include code examples",
      "Cover React, Vue, and Angular"
    ]
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      // Handle the PDF file upload here
      console.log('PDF file selected:', file.name);
    } else {
      alert('Please select a PDF file');
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="dashboard-container-manage">
      {/* Sidenav */}
      <nav className="content-manage-sidenav">
        <button className="sidenav-button">Saved</button>
        <button className="sidenav-button">Drafts</button>
        <button className="sidenav-button">Manage</button>
      </nav>

      {/* Main Content */}
      <main className="main-content-manage">
        
        <div className="project-details">
          <div className="project-header">
            <h2 className="project-title">{projectDetails.title}</h2>
            <button className="status-button">In Progress</button>
          </div>
          
          <div className="project-grid">
            <div className="project-item">
              <span className="project-label">Budget:</span>
              <span>{projectDetails.budget}</span>
            </div>
            <div className="project-item">
              <span className="project-label">Deadline:</span>
              <span>{projectDetails.deadline}</span>
            </div>
            <div className="project-item">
              <span className="project-label">Payment Status:</span>
              <span>{projectDetails.paymentStatus}</span>
            </div>
          </div>

          <div>
            <h3 className="section-title">Description</h3>
            <p>{projectDetails.description}</p>
          </div>

          <div>
            <h3 className="section-title">Requirements</h3>
            <ul className="requirements-list">
              {projectDetails.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Editor Section */}

        <div className="header-bars">
          <div className="header-bar">
            <span className="header-bar-text">100% Human</span>
          </div>
          
        </div>
        <QuillEditor />

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="save-button">
            Save to Draft
          </button>
          
          <div className="dropdown">
            <button 
              className="dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Actions
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M4 6L8 10L12 6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="dropdown-content">
                <button className="dropdown-item">
                  Send to Owner (Pure Content)
                </button>
                <button className="dropdown-item">
                  Convert to PDF before send
                </button>
                <button className="dropdown-item">
                  Preview
                </button>
              </div>
            )}
          </div>

          {/* Upload PDF Button */}
          <button className="upload-button" onClick={triggerFileInput}>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M11.3333 5.33333L8 2L4.66667 5.33333" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M8 2V10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Upload PDF
            <input
              type="file"
              ref={fileInputRef}
              className="file-input"
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ManageContent;