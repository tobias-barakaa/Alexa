import { useState } from 'react';
import axios from 'axios';
import EducationSection from "./EducationSection";
import WorkExperienceSection from "./WorkExperienceSection";
import { useNavigate } from 'react-router-dom';
import "./ResumeCVWriting.css";

const ResumeCVWriting = () => {
  const [personalInfo, setPersonalInfo] = useState({ fullName: '', jobTitle: '', email: '', phone: '', summary: '' });
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState('');
  const [languages, setLanguages] = useState('');
  const [certifications, setCertifications] = useState('');
  const [achievements, setAchievements] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setPersonalInfo({ ...personalInfo, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        personalInfo,
        experiences,
        skills,
        languages,
        certifications,
        achievements,
        educations
    };
    console.log('this is the dat', formData)

    try {
        const response = await axios.post('http://localhost:5000/api/resume/create', formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Response:', response.data);
        setSuccessMessage('Resume submitted successfully!');
        setError(null);

        // Extract resumeId from response
        const resumeId = response.data.resume.id;
        console.log('Resume ID:', resumeId);

        if (resumeId) {
            navigate(`/dashboard/resume/${resumeId}`);
        } else {
            setError('Failed to retrieve the resume ID. Please try again.');
        }
    } catch (error) {
        setError('Failed to submit the resume/CV. Please try again.');
        setSuccessMessage('');
        console.error('Error:', error);
    }
};



  return (
    <div className="resume-cv-container">
      <form className="resume-cv-form" id="form-input" onSubmit={handleSubmit}>
        <div className="create-input-container">
          <p className="create-input">Resume/CV Writing</p>
        </div>
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
          </div>
        </section>
        <WorkExperienceSection experiences={experiences} setExperiences={setExperiences} />
        <EducationSection educations={educations} setEducations={setEducations} />
        <section className="skills-section">
          <h3 className="skills-title">Skills</h3>
          <div className="skills-form-group">
            <label htmlFor="skills" className="skills-input-label">Skills (comma-separated)</label>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder="JavaScript, Python, Project Management"
              className="skills-input"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
        </section>
        <section className="additional-sections">
          <h3 className="additional-sections-title">Additional Sections</h3>
          <div className="languages-form-group">
            <label htmlFor="languages" className="languages-input-label">Languages</label>
            <input
              type="text"
              id="languages"
              name="languages"
              placeholder="English (Native), Spanish (Fluent)"
              className="languages-input"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
            />
          </div>
          <div className="certifications-form-group">
            <label htmlFor="certifications" className="certifications-input-label">Certifications</label>
            <textarea
              id="certifications"
              name="certifications"
              rows="3"
              placeholder="List your relevant certifications"
              className="certifications-textarea"
              value={certifications}
              onChange={(e) => setCertifications(e.target.value)}
            ></textarea>
          </div>
          <div className="achievements-form-group">
            <label htmlFor="achievements" className="achievements-input-label">Achievements</label>
            <textarea
              id="achievements"
              name="achievements"
              rows="3"
              placeholder="List your key achievements"
              className="achievements-textarea"
              value={achievements}
              onChange={(e) => setAchievements(e.target.value)}
            ></textarea>
          </div>
        </section>
        <button type="submit" className="submit-button">Generate Resume/CV</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default ResumeCVWriting;
