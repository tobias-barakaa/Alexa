import "./WorkExperienceSection.css";

const WorkExperienceSection = ({ experiences, setExperiences }) => {

  const addExperience = () => {
    setExperiences([...experiences, { id: Date.now(), jobTitle: '', company: '', startDate: '', endDate: '', responsibilities: '' }]);
  };

  const removeExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const handleChange = (id, field, value) => {
    const updatedExperiences = experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp);
    setExperiences(updatedExperiences);
  };

  return (
    <section className="form-section work-experience-section">
      <h3 className="section-title">Work Experience</h3>
      <div className="work-experience-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-entry">
            <div className="form-row">
              <div className="form-group half-width">
                <label className="input-label" htmlFor={`job-title-${exp.id}`}>Job Title</label>
                <input
                  className="styled-input"
                  type="text"
                  id={`job-title-${exp.id}`}
                  name={`job-title-${exp.id}`}
                  placeholder="Software Developer"
                  value={exp.jobTitle}
                  onChange={(e) => handleChange(exp.id, 'jobTitle', e.target.value)}
                />
              </div>
              <div className="form-group half-width">
                <label className="input-label" htmlFor={`company-${exp.id}`}>Company</label>
                <input
                  className="styled-input"
                  type="text"
                  id={`company-${exp.id}`}
                  name={`company-${exp.id}`}
                  placeholder="Tech Company Inc."
                  value={exp.company}
                  onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group half-width">
                <label className="input-label" htmlFor={`start-date-${exp.id}`}>Start Date</label>
                <input
                  className="styled-input"
                  type="date"
                  id={`start-date-${exp.id}`}
                  name={`start-date-${exp.id}`}
                  value={exp.startDate}
                  onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
                />
              </div>
              <div className="form-group half-width">
                <label className="input-label" htmlFor={`end-date-${exp.id}`}>End Date</label>
                <input
                  className="styled-input"
                  type="date"
                  id={`end-date-${exp.id}`}
                  name={`end-date-${exp.id}`}
                  value={exp.endDate}
                  onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="input-label" htmlFor={`responsibilities-${exp.id}`}>Key Responsibilities</label>
              <textarea
                className="styled-textarea"
                id={`responsibilities-${exp.id}`}
                name={`responsibilities-${exp.id}`}
                rows="3"
                placeholder="Describe your key responsibilities and achievements"
                value={exp.responsibilities}
                onChange={(e) => handleChange(exp.id, 'responsibilities', e.target.value)}
              ></textarea>
            </div>
            <button type="button" className="remove-button" onClick={() => removeExperience(exp.id)}>Remove</button>
          </div>
        ))}
      </div>
      <button type="button" className="add-button" onClick={addExperience}>Add Work Experience</button>
    </section>
  );
};

export default WorkExperienceSection;
