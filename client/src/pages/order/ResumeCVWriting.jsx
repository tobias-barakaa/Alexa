import "./ResumeCVWriting.css";
import WorkExperienceSection from "./WorkExperienceSection";
const ResumeCVWriting = () => {
  return (
    <div>
      <div className="resume-cv-container">
  
  <form className="resume-cv-form" id="form-input">

  <div className="create-input-container">
  <p className="create-input"> Resume/CV Writing
  </p>
</div>






<section className="form-section personal-info-section">
  <h3 className="section-title">Personal Information</h3>
  <div className="form-row">
    <div className="form-group half-width">
      <label className="input-label" htmlFor="full-name">Full Name</label>
      <input className="styled-input" type="text" id="full-name" name="full-name" placeholder="John Doe" />
    </div>
    <div className="form-group half-width">
      <label className="input-label" htmlFor="job-title">Job Title</label>
      <input className="styled-input" type="text" id="job-title" name="job-title" placeholder="Software Developer" />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group half-width">
      <label className="input-label" htmlFor="email">Email</label>
      <input className="styled-input" type="email" id="email" name="email" placeholder="johndoe@example.com" />
    </div>
    <div className="form-group half-width">
      <label className="input-label" htmlFor="phone">Phone</label>
      <input className="styled-input" type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" />
    </div>
  </div>
  <div className="form-group">
    <label className="input-label" htmlFor="summary">Professional Summary</label>
    <textarea className="styled-textarea" id="summary" name="summary" rows="4" placeholder="Brief overview of your professional background and key skills"></textarea>
  </div>
</section>













    {/* <section className="form-section">
      <h3>Personal Information</h3>
      <div className="form-row">
        <div className="form-group half-width">
          <label >Full Name</label>
          <input type="text" id="full-name" name="full-name" placeholder="John Doe" />
        </div>
        <div className="form-group half-width">
          <label >Job Title</label>
          <input type="text" id="job-title" name="job-title" placeholder="Software Developer" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group half-width">
          <label >Email</label>
          <input type="email" id="email" name="email" placeholder="johndoe@example.com" />
        </div>
        <div className="form-group half-width">
          <label >Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" />
        </div>
      </div>
      <div className="form-group">
        <label >Professional Summary</label>
        <textarea id="summary" name="summary" rows="4" placeholder="Brief overview of your professional background and key skills"></textarea>
      </div>
    </section> */}

    <WorkExperienceSection />

    {/* <section className="form-section">
      <h3>Work Experience</h3>
      <div id="work-experience-container">
        
      </div>
      <button type="button" id="add-work-experience" className="add-button">Add Work Experience</button>
    </section> */}

    <section className="form-section">
      <h3>Education</h3>
      <div id="education-container">
        
      </div>
      <button type="button" id="add-education" className="add-button">Add Education</button>
    </section>

    <section className="form-section">
      <h3>Skills</h3>
      <div className="form-group">
        <label>Skills (comma-separated)</label>
        <input type="text" id="skills" name="skills" placeholder="JavaScript, Python, Project Management" />
      </div>
    </section>

    <section className="form-section">
      <h3>Additional Sections</h3>
      <div className="form-group">
        <label >Languages</label>
        <input type="text" id="languages" name="languages" placeholder="English (Native), Spanish (Fluent)" />
      </div>
      <div className="form-group">
        <label>Certifications</label>
        <textarea id="certifications" name="certifications" rows="3" placeholder="List your relevant certifications"></textarea>
      </div>
      <div className="form-group">
        <label>Achievements</label>
        <textarea id="achievements" name="achievements" rows="3" placeholder="List your key achievements"></textarea>
      </div>
    </section>

    <button type="submit" className="submit-button">Generate Resume/CV</button>
  </form>
</div>
    </div>
  )
}

export default ResumeCVWriting
