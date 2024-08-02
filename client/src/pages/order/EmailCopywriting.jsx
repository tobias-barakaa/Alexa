import { useState } from "react";
import "./EmailCopywriting.css";

const EmailCopywriting = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    projectType: "",
    projectDescription: "",
    deadline: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="email-container">
      <form className="email-form" onSubmit={handleSubmit} id="form-input">
        <div className="create-input-container">
          <p className="create-input">Request Copywriting Services</p>
        </div>

        <div className="email-group">
          <label htmlFor="client-name" className="email-label">Your Name</label>
          <input
            type="text"
            id="client-name"
            name="clientName"
            className="email-input"
            placeholder="John Doe"
            value={formData.clientName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="email-group">
          <label htmlFor="client-email" className="email-label">Your Email</label>
          <input
            type="email"
            id="client-email"
            name="clientEmail"
            className="email-input"
            placeholder="johndoe@example.com"
            value={formData.clientEmail}
            onChange={handleChange}
            required
          />
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
          <input
            type="date"
            id="deadline"
            name="deadline"
            className="email-input"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>

        <div className="email-group">
          <label htmlFor="budget" className="email-label">Budget Range</label>
          <select
            id="budget"
            name="budget"
            className="email-select"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="under-500">Under $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000-2000">$1000 - $2000</option>
            <option value="over-2000">Over $2000</option>
          </select>
        </div>

        <button type="submit" className="email-submit-button">Submit Request</button>
      </form>
    </div>
  );
};

export default EmailCopywriting;
