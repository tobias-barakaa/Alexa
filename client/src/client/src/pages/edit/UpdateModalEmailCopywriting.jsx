import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateModalEmailCopywriting.css';

const UpdateModalEmailCopywriting = ({ isOpen, onClose, requestData }) => {
  const [formData, setFormData] = useState({
    project_type: '',
    project_description: '',
    deadline: '',
    word_count: '',
    cost: ''
  });

  useEffect(() => {
    if (requestData) {
      setFormData({
        project_type: requestData.project_type,
        project_description: requestData.project_description,
        deadline: requestData.deadline.split('T')[0], // Assuming the date is in ISO format
        word_count: requestData.word_count,
        cost: requestData.cost
      });
    }
  }, [requestData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/emailcopywriting/update/${requestData.id}`, formData);
      onClose();
      // You might want to add a callback here to refresh the main component's data
    } catch (error) {
      console.error('Error updating request:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  if (!isOpen) return null;


  const projectTypes = ['Social Media Content', 'Website Copy', 'Blog Posts', 'Email Campaigns', 'Ad Copy', 'Other'];
  const deadlines = ['6 Hours', '12 Hours', '1 Day', '2 Days', '1 Week', '2 Weeks'];


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Update Email Copywriting Request</h2>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <input
              type="text"
              id="project_type"
              name="project_type"
              value={formData.project_type}
              onChange={handleChange}
              
            /> */}









<label htmlFor="project-type" className="email-label">Type of Copywriting</label>
<select
  id="project-type"
  name="project_type"
  className="email-select"
  value={formData.project_type}
  onChange={handleChange}
  
>
  <option value="">{formData.project_type}</option>
  {projectTypes.map(projectType => (
    <option key={projectType} value={projectType}>
      {projectType}
    </option>
  ))}
</select>























          </div>
          <div>
            <label htmlFor="project_description">Project Description:</label>
            <textarea
              id="project_description"
              name="project_description"
              value={formData.project_description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
           



<label htmlFor="deadline" className="email-label">Preferred Deadline</label>
            <select
              id="deadline"
              name="deadline"
              className="email-select"
              value={formData.deadline}
              onChange={handleChange}
              required
            >
                <option  value="">{formData.deadline}</option>

              {deadlines.map(deadline => (
                <option key={deadline} value={deadline}>
                  {deadline}
                </option>
              ))}
            </select>








          </div>
          <div>
          <label htmlFor="wordCount">Number of Words:</label>
            <select
              id="wordCount"
              name="wordCount"
              value={formData.word_count}
              onChange={handleChange}
              required
            >
              <option value="under-100">Under 100</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={(i + 1) * 100}>
                  {(i + 1) * 100}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="cost">Cost:</label>
            <input
              type="number"
              id="cost"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              step="0.01"
              required
            />
          </div>
          <div className="modal-buttons">
            <button type="submit">Update</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModalEmailCopywriting;