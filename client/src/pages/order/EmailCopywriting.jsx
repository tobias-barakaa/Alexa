import { useState } from "react";
import axios from "axios";
import "./EmailCopywriting.css";

const EmailCopywriting = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    projectDescription: "",
    deadline: "6hrs",
    wordCount: "under-100",
    cost: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWordCountChange = (e) => {
    const wordCount = e.target.value;
    const cost = calculateCost(wordCount);
    setFormData({
      ...formData,
      wordCount,
      cost,
    });
  };

  const calculateCost = (wordCount) => {
    const costPerWord = 0.1; // Example: $0.1 per word
    const wordCountValue = wordCount === "under-100" ? 100 : parseInt(wordCount);
    return wordCountValue * costPerWord;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/emailcopywriting/create', formData, {
        withCredentials: true,
        
        headers: {
          'Content-Type': 'application/json'
          // Include authentication headers if needed
          // 'Authorization': `Bearer ${yourToken}`
        }
      });

      console.log(response.data);
      alert('Request submitted successfully!');
      // Optionally, you can clear the form or redirect the user here
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('There was an error submitting your request.');
    }
  };

  return (
    <div className="email-container">
      <form className="email-form" onSubmit={handleSubmit}>
        <div className="create-input-container">
          <p className="create-input">Request Copywriting Services</p>
        </div>

        <div className="email-group">
          <label htmlFor="project-type" className="email-label">Type of Copywriting</label>
          <select
            id="project-type"
            name="projectType"
            className="email-select"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="social">Social Media Content</option>
            <option value="website">Website Copy</option>
            <option value="blog">Blog Posts</option>
            <option value="email">Email Campaigns</option>
            <option value="ad">Ad Copy</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="email-group">
          <label htmlFor="project-description" className="email-label">Project Description</label>
          <textarea
            id="project-description"
            name="projectDescription"
            className="email-textarea"
            rows="4"
            placeholder="Briefly describe your project and requirements"
            value={formData.projectDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="email-group">
          <label htmlFor="deadline" className="email-label">Preferred Deadline</label>
          <select
            id="deadline"
            name="deadline"
            className="email-select"
            value={formData.deadline}
            onChange={handleChange}
            required
          >
            <option value="6hrs">6 Hours</option>
            <option value="12hrs">12 Hours</option>
            <option value="1day">1 Day</option>
            <option value="2days">2 Days</option>
            <option value="1week">1 Week</option>
            <option value="2weeks">2 Weeks</option>
          </select>
        </div>

        <div className="email-group">
          <label htmlFor="word-count" className="email-label">Number of Words</label>
          <select
            id="word-count"
            name="wordCount"
            className="email-select"
            value={formData.wordCount}
            onChange={handleWordCountChange}
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

        <div className="cost-container">
          <div className="email-group">
            <label htmlFor="cost" className="email-label">Estimated Cost</label>
            <input
              type="text"
              id="cost"
              name="cost"
              className="email-input"
              value={`$${formData.cost.toFixed(2)}`}
              readOnly
            />
          </div>
        </div>

        <button type="submit" className="email-submit-button">Submit Request</button>
      </form>
    </div>
  );
};

export default EmailCopywriting;
