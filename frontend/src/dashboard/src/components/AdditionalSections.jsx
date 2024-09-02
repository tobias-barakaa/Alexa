import "./AdditionalSections.css";

const AdditionalSections = ({ languages, setLanguages, certifications, setCertifications, achievements, setAchievements }) => (
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
  );
  
  export default AdditionalSections;
  