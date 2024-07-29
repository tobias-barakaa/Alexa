import "./EmailCopywriting.css";

const EmailCopywriting = () => {
  return (
    <div className="email-copywriting-container" id="page-section">
      <h2>Email Copywriting</h2>
      <form className="email-copywriting-form">
        <div className="form-group">
          <label>Sender Name</label>
          <input type="text" id="sender-name" name="sender-name" placeholder="Enter sender's name" />
        </div>

        <div className="form-group">
          <label>Sender Email</label>
          <input type="email" id="sender-email" name="sender-email" placeholder="Enter sender's email" />
        </div>

        <div className="form-group">
          <label>Subject Line</label>
          <input type="text" id="subject-line" name="subject-line" placeholder="Enter email subject line" />
          <div className="character-count">0/60 characters</div>
        </div>

        <div className="form-group">
          <label>Email Body</label>
          <textarea id="email-body" name="email-body" rows="10" placeholder="Enter email body"></textarea>
          <div className="character-count">0/500 characters</div>
        </div>

        <div className="form-group">
          <label>Call to Action</label>
          <input type="text" id="call-to-action" name="call-to-action" placeholder="Enter call to action" />
        </div>

        <button type="submit" className="submit-button">Generate Email Copy</button>
      </form>

      <div className="email-results">
        <h3>Email Copy Preview</h3>
        <div id="email-preview"></div>
      </div>
    </div>
  );
};

export default EmailCopywriting;
