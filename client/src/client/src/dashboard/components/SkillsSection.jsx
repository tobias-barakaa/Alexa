import "./SkillsSection.css"

const SkillsSection = ({ skills, setSkills }) => (
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
  );
  
  export default SkillsSection;
  