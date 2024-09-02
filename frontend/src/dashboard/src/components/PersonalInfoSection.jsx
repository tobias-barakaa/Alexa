import "./PersonalInfoSection.css";

const PersonalInfoSection = ({ personalInfo, handleChange, errors }) => (
  <section className="form-section personal-info-section">
    <h3 className="section-title">Personal Information</h3>
    <div className="form-row">
      <div className="form-group half-width">
        <label className="input-label" htmlFor="full-name">Full Name</label>
        <input
          className="styled-input"
          type="text"
          id="full-name"
          name="full-name"
          placeholder="John Doe"
          value={personalInfo.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
        />
        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
      </div>
      <div className="form-group half-width">
        <label className="input-label" htmlFor="job-title">Job Title</label>
        <input
          className="styled-input"
          type="text"
          id="job-title"
          name="job-title"
          placeholder="Software Developer"
          value={personalInfo.jobTitle}
          onChange={(e) => handleChange('jobTitle', e.target.value)}
        />
        {errors.jobTitle && <span className="error-message">{errors.jobTitle}</span>}
      </div>
    </div>
    <div className="form-row">
      <div className="form-group half-width">
        <label className="input-label" htmlFor="email">Email</label>
        <input
          className="styled-input"
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@example.com"
          value={personalInfo.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group half-width">
        <label className="input-label" htmlFor="phone">Phone</label>
        <input
          className="styled-input"
          type="tel"
          id="phone"
          name="phone"
          placeholder="+1 (555) 123-4567"
          value={personalInfo.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>
    </div>
    <div className="form-group">
      <label className="input-label" htmlFor="summary">Professional Summary</label>
      <textarea
        className="styled-textarea"
        id="summary"
        name="summary"
        rows="4"
        placeholder="Brief overview of your professional background and key skills"
        value={personalInfo.summary}
        onChange={(e) => handleChange('summary', e.target.value)}
      ></textarea>
      {errors.summary && <span className="error-message">{errors.summary}</span>}
    </div>
  </section>
);

export default PersonalInfoSection;
