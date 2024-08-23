import "./SkillsSection.css";

const SkillsSection = ({ skills, setSkills }) => {
  // Ensure skills is an array before joining
  const skillsArray = Array.isArray(skills) ? skills : [];
  
  const handleChange = (e) => {
    const value = e.target.value;
    // Split skills by comma and trim any extra spaces
    const skillsArray = value.split(',').map(skill => skill.trim()).filter(skill => skill);
    setSkills(skillsArray);
  };

  

  return (
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
          value={skillsArray.join(', ')} // Use join on skillsArray
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
