import "./EmailCopywriting.css";

const EmailCopywriting = () => {
  return (
    <div className="email-copywriting-container" id="page-section">
      <h2>Email Copywriting</h2>
      <form className="copywriting-form">
  <h2 className="form-title">Request Copywriting Services</h2>

  <div className="form-group">
    <label htmlFor="client-name" className="input-label">Your Name</label>
    <input type="text" id="client-name" name="clientName" className="styled-input" placeholder="John Doe" required />
  </div>

  <div className="form-group">
    <label htmlFor="client-email" className="input-label">Your Email</label>
    <input type="email" id="client-email" name="clientEmail" className="styled-input" placeholder="johndoe@example.com" required />
  </div>

  <div className="form-group">
    <label htmlFor="project-type" className="input-label">Type of Copywriting</label>
    <select id="project-type" name="projectType" className="styled-input" required>
      <option value="">Select a type</option>
      <option value="website">Website Copy</option>
      <option value="blog">Blog Posts</option>
      <option value="social">Social Media Content</option>
      <option value="email">Email Campaigns</option>
      <option value="ad">Ad Copy</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="project-description" className="input-label">Project Description</label>
    <textarea id="project-description" name="projectDescription" className="styled-textarea" rows="4" placeholder="Briefly describe your project and requirements" required></textarea>
  </div>

  <div className="form-group">
    <label htmlFor="deadline" className="input-label">Preferred Deadline</label>
    <input type="date" id="deadline" name="deadline" className="styled-input" />
  </div>

  <div className="form-group">
    <label htmlFor="budget" className="input-label">Budget Range</label>
    <select id="budget" name="budget" className="styled-input">
      <option value="">Select a range</option>
      <option value="under-500">Under $500</option>
      <option value="500-1000">$500 - $1000</option>
      <option value="1000-2000">$1000 - $2000</option>
      <option value="over-2000">Over $2000</option>
    </select>
  </div>

  <button type="submit" className="submit-button">Submit Request</button>
</form>

      <div className="email-results">
        <h3>Email Copy Preview</h3>
        <div id="email-preview"></div>
      </div>
    </div>
  );
};

export default EmailCopywriting;
