import "./ContentEditing.css";
const ContentEditing = () => {
  return (
    <div>
      <div className="content-editing-container">
  <h2>Content Editing</h2>
  
  <form className="content-editing-form">
    <div className="form-group">
      <label >Document Title</label>
      <input type="text" id="document-title" name="document-title" placeholder="Enter the title of the document" />
    </div>

    <div className="form-row">
      <div className="form-group half-width">
        <label >Author</label>
        <input type="text" id="author" name="author" placeholder="Enter the author's name" />
      </div>

      <div className="form-group half-width">
        <label >Document Type</label>
        <select id="document-type" name="document-type">
          <option value="">Select document type</option>
          <option value="article">Article</option>
          <option value="blog-post">Blog Post</option>
          <option value="essay">Essay</option>
          <option value="report">Report</option>
          <option value="manuscript">Manuscript</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label >Original Content</label>
      <textarea id="original-content" name="original-content" rows="10" placeholder="Paste the original content here"></textarea>
    </div>

    <div className="form-group">
      <label >Edited Content</label>
      <textarea id="edited-content" name="edited-content" rows="10" placeholder="Make your edits here"></textarea>
    </div>

    <div className="form-group">
      <label >Edit Summary</label>
      <textarea id="edit-summary" name="edit-summary" rows="4" placeholder="Summarize the major edits and reasons for changes"></textarea>
    </div>

    <div className="form-row">
      <div className="form-group half-width">
        <label >Style Guide Used</label>
        <input type="text" id="style-guide" name="style-guide" placeholder="e.g., APA, Chicago, House Style" />
      </div>

      <div className="form-group half-width">
        <label >Editing Level</label>
        <select id="edit-level" name="edit-level">
          <option value="">Select editing level</option>
          <option value="proofreading">Proofreading</option>
          <option value="copy-editing">Copy Editing</option>
          <option value="line-editing">Line Editing</option>
          <option value="substantive-editing">Substantive Editing</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label >Additional Comments</label>
      <textarea id="comments" name="comments" rows="4" placeholder="Any additional notes or comments for the author"></textarea>
    </div>

    <button type="submit" className="submit-button">Save Edits</button>
  </form>
</div>
    </div>
  )
}

export default ContentEditing
