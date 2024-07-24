import "./SeoOptimization.css";
const SeoOptimization = () => {
  return (
    <div>
        <div className="seo-optimization-container">
  <h2>SEO Optimization</h2>
  
  <form className="seo-optimization-form">
    <div className="form-group">
      <label >Page URL</label>
      <input type="url" id="page-url" name="page-url" placeholder="https://example.com/your-page" />
    </div>

    <div className="form-row">
      <div className="form-group half-width">
        <label >Focus Keyword</label>
        <input type="text" id="focus-keyword" name="focus-keyword" placeholder="Enter your main keyword" />
      </div>

      <div className="form-group half-width">
        <label >Secondary Keywords</label>
        <input type="text" id="secondary-keywords" name="secondary-keywords" 
        placeholder="Enter secondary keywords, comma-separated" />
      </div>
    </div>

    <div className="form-group">
      <label >Meta Title</label>
      <input type="text" id="meta-title" name="meta-title" placeholder="Enter your meta title" />
      <div className="character-count">0/60 characters</div>
    </div>

    <div className="form-group">
      <label >Meta Description</label>
      <textarea id="meta-description" name="meta-description" rows="3" placeholder="Enter your meta description"></textarea>
      <div className="character-count">0/160 characters</div>
    </div>

    <div className="form-group">
      <label >Content</label>
      <textarea id="content" name="content" rows="10" placeholder="Paste your content here for SEO analysis"></textarea>
    </div>

    <div className="form-row">
      <div className="form-group half-width">
        <label >Heading Structure</label>
        <select id="heading-structure" name="heading-structure" multiple>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
          <option value="h4">H4</option>
        </select>
      </div>

      <div className="form-group half-width">
        <label >Image Alt Tags</label>
        <textarea id="image-alt-tags" name="image-alt-tags" rows="3" placeholder="Enter image alt tags, one per line"></textarea>
      </div>
    </div>

    <div className="form-group">
      <label >Internal Links</label>
      <input type="text" id="internal-links" name="internal-links" 
      placeholder="Enter internal link URLs, comma-separated" />
    </div>

    <div className="form-group">
      <label >External Links</label>
      <input type="text" id="external-links" name="external-links" placeholder="Enter external link URLs, 
      comma-separated" />
    </div>

    <button type="submit" className="submit-button">Analyze SEO</button>
  </form>

  <div className="seo-results">
    <h3>SEO Analysis Results</h3>
    <ul id="seo-checklist">
      
    </ul>
  </div>
</div>
      
    </div>
  )
}

export default SeoOptimization
