import PropTypes from 'prop-types';
import "../styles/pages/EducationSection.css";

const EducationSection = ({ educations, setEducations }) => {

  const addEducation = () => {
    setEducations([...educations, { id: Date.now(), degree: '', institution: '', startDate: '', endDate: '', description: '' }]);
  };

  const removeEducation = (id) => {
    setEducations(educations.filter(edu => edu.id !== id));
  };

  const handleChange = (id, field, value) => {
    const updatedEducations = educations.map(edu => edu.id === id ? { ...edu, [field]: value } : edu);
    setEducations(updatedEducations);
  };

  return (
    <section className="form-section education-section">
      <h3 className="section-title">Education</h3>
      <div className="education-container">
        {educations.map((edu) => (
          <div key={edu.id} className="education-entry">
            <div className="form-row">
              <div className="form-group half-width">
                <label className="input-label" htmlFor={`degree-${edu.id}`}>Degree</label>
                <input
                  className="styled-input"
                  type="text"
                  id={`degree-${edu.id}`}
                  name={`degree-${edu.id}`}
                  placeholder="Bachelor of Science in Computer Science"
                  value={edu.degree}
                  onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
                />
              </div>
              <div className="form-group half-width">
                <label className="input-label" htmlFor={`institution-${edu.id}`}>Institution</label>
                <input
                  className="styled-input"
                  type="text"
                  id={`institution-${edu.id}`}
                  name={`institution-${edu.id}`}
                  placeholder="University Name"
                  value={edu.institution}
                  onChange={(e) => handleChange(edu.id, 'institution', e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group half-width">
                <label className="input-label" htmlFor={`start-date-${edu.id}`}>Start Date</label>
                <input
                  className="styled-input"
                  type="date"
                  id={`start-date-${edu.id}`}
                  name={`start-date-${edu.id}`}
                  value={edu.startDate}
                  onChange={(e) => handleChange(edu.id, 'startDate', e.target.value)}
                />
              </div>
              <div className="form-group half-width">
                <label className="input-label" htmlFor={`end-date-${edu.id}`}>End Date</label>
                <input
                  className="styled-input"
                  type="date"
                  id={`end-date-${edu.id}`}
                  name={`end-date-${edu.id}`}
                  value={edu.endDate}
                  onChange={(e) => handleChange(edu.id, 'endDate', e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="input-label" htmlFor={`description-${edu.id}`}>Description</label>
              <textarea
                className="styled-textarea"
                id={`description-${edu.id}`}
                name={`description-${edu.id}`}
                rows="3"
                placeholder="Brief description of your studies, achievements, or relevant coursework"
                value={edu.description}
                onChange={(e) => handleChange(edu.id, 'description', e.target.value)}
              ></textarea>
            </div>
            <button type="button" className="remove-button" onClick={() => removeEducation(edu.id)}>Remove</button>
          </div>
        ))}
      </div>
      <button type="button" className="add-button" onClick={addEducation}>Add Education</button>
    </section>
  );
};

EducationSection.propTypes = {
  educations: PropTypes.array,
  setEducations: PropTypes.func.isRequired
};

export default EducationSection;
