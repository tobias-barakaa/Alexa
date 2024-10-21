import React, { useState } from 'react';
import { Upload, Plus, Minus } from 'lucide-react';
import './CustomPost.css'; // Assuming the CSS will be placed in a separate file (CustomPost.css)

const CustomPost = () => {
  const [wordCount, setWordCount] = useState(500);
  const [selectedDeadline, setSelectedDeadline] = useState('24h');
  const [contentType, setContentType] = useState('article');

  const deadlineOptions = [
    { value: '6h', label: '6 Hours', price: '$30' },
    { value: '12h', label: '12 Hours', price: '$25' },
    { value: '24h', label: '24 Hours', price: '$20' },
    { value: '48h', label: '48 Hours', price: '$15' },
    { value: '72h', label: '3 Days', price: '$12' },
    { value: '168h', label: '7 Days', price: '$10' },
  ];

  const contentTypes = [
    'Article',
    'Blog Post',
    'Product Description',
    'Website Content',
    'Social Media Post',
    'Technical Writing',
    'Creative Writing',
    'Academic Writing',
  ];

  return (
    <div className="post-job-container">
      <div className="page-title">Post Your Content Order</div>

      <form className="hire-form">
        {/* Project Details Section */}
        <div className="form-section">
          <div className="section-title">Project Details</div>
          <div className="form-group-post-job">
            <label className="form-label">Project Title</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Enter a title for your project" 
            />
          </div>

          <div className="form-group-post-job">
            <label className="form-label">Content Type</label>
            <select 
              className="form-select" 
              value={contentType} 
              onChange={(e) => setContentType(e.target.value)}
            >
              {contentTypes.map(type => (
                <option key={type} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group-post-job">
            <label className="form-label">Word Count</label>
            <div className="counter-input">
              <button 
                type="button" 
                className="counter-button" 
                onClick={() => setWordCount(Math.max(100, wordCount - 100))}
              >
                <Minus size={16} />
              </button>
              <input 
                type="number" 
                className="word-count" 
                value={wordCount} 
                onChange={(e) => setWordCount(Math.max(100, parseInt(e.target.value) || 0))}
              />
              <button 
                type="button" 
                className="counter-button" 
                onClick={() => setWordCount(wordCount + 100)}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Project Description Section */}
        <div className="form-section">
          <h2 className="section-title">Project Description</h2>
          <div className="form-group-post-job">
            <label className="form-label">Detailed Requirements</label>
            <textarea 
              className="form-input text-area" 
              placeholder="Describe your project requirements in detail..."
            />
          </div>

          <div className="form-group-post-job">
            <label className="form-label">Target Audience</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Who is your target audience?" 
            />
          </div>

          
        </div>

        {/* Deadline and Budget Section */}
        <div className="form-section">
          <h2 className="section-title">Deadline and Budget</h2>
          <div className="form-group-post-job">
            <label className="form-label">Select Deadline</label>
            <div className="deadline-options">
              {deadlineOptions.map(option => (
                <div 
                  key={option.value} 
                  className={`deadline-option ${selectedDeadline === option.value ? 'selected' : ''}`} 
                  onClick={() => setSelectedDeadline(option.value)}
                >
                  <div>{option.label}</div>
                  <div>{option.price}/500 words</div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="form-group-post-job">
            <label className="form-label">Additional Requirements</label>
            <div className="radio-group">
              <label className="radio-label">
                <input type="checkbox" /> SEO Optimization
              </label>
              <label className="radio-label">
                <input type="checkbox" /> Plagiarism Check
              </label>
              <label className="radio-label">
                <input type="checkbox" /> Professional Editing
              </label>
            </div>
          </div> */}
        </div>

        <button type="submit" className="submit-button">
          Post Project
        </button>
      </form>
    </div>
  );
};

export default CustomPost;
