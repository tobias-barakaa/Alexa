import React from 'react';
import "./ArticleCreation.css";

const ArticleCreation = () => {
  return (
    <div>
      <div className="article-creation-container">
  <h2>Create New Article</h2>
  
  <form className="article-form">
    <div className="form-group">
      <label >Article Title</label>
      <input type="text" id="article-title" name="article-title" 
      placeholder="Enter the main title of your article" /> 
    </div>

    <div className="form-group">
      <label >Subtitle</label>
      <input type="text" id="article-subtitle" name="article-subtitle" placeholder="Enter a subtitle or deck" />
    </div>

    <div className="form-group">
      <label >Author Name</label>
      <input type="text" id="author-name" name="author-name" placeholder="Enter author's name" />
    </div>

    <div className="form-group">
      <label >Introduction</label>
      <textarea id="article-intro" name="article-intro" rows="4" placeholder="Write your article introduction"></textarea>
    </div>

    <div className="form-group">
      <label >Main Body</label>
      <textarea id="article-body" name="article-body" rows="10" placeholder="Write the main content of your article"></textarea>
    </div>

    <div className="form-group">
      <label >Conclusion</label>
      <textarea id="article-conclusion" name="article-conclusion" rows="4" placeholder="Write your article conclusion"></textarea>
    </div>

    <div className="form-group">
      <label >References/Sources</label>
      <textarea id="article-references" name="article-references" rows="3" placeholder="List your references and sources"></textarea>
    </div>

    <div className="form-group">
      <label >Keywords</label>
      <input type="text" id="article-keywords" 
      name="article-keywords" placeholder="Enter keywords, separated by commas" />
    </div>

    <div className="form-row">
      <div className="form-group half-width">
        <label >Target Audience</label>
        <input type="text" id="target-audience" name="target-audience" 
        placeholder="Describe your target audience" />
      </div>

      <div className="form-group half-width">
        <label >Word Count Goal</label>
        <input type="number" id="word-count" name="word-count" placeholder="Enter target word count" />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group half-width">
        <label >Deadline</label>
        <input type="date" id="deadline" name="deadline" />
      </div>

      <div className="form-group half-width">
        <label >Article Type</label>
        <select id="article-type" name="article-type">
          <option value="">Select article type</option>
          <option value="news">News</option>
          <option value="feature">Feature</option>
          <option value="opinion">Opinion</option>
          <option value="interview">Interview</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label >Pull Quote</label>
      <textarea id="pull-quote" name="pull-quote" rows="2" placeholder="Enter a notable quote from the article"></textarea>
    </div>

    <div className="form-group">
      <label>Upload Images</label>
      <input type="file" id="image-upload" name="image-upload" multiple />
    </div>

    <button type="submit" className="submit-button">Save Article</button>
  </form>
</div>
    </div>
  )
}

export default ArticleCreation
