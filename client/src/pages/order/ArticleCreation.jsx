import { useState } from 'react';
import './ArticleCreation.css';

const ArticleCreation = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [toneStyle, setToneStyle] = useState('');
  const [links, setLinks] = useState('');
  const [deadline, setDeadline] = useState('');


  return (
    <div className='new-blog-section'>
<form className='article' id="form-input">
  <div className="create-input-container">
  <p className="create-input">Create New Article</p>
</div>

  <div className="form-group" id='blog'>
  
    <label>Title:</label>
    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  </div>
  <div className="form-group">
    <label>Description:</label>
    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
  </div>
  <div className="form-group">
    <label >Keywords:</label>
    <input type="text" id="keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} required />
  </div>
  <div className="form-group">
    <label>Word Count:</label>
    <input type="number" id="wordCount" value={wordCount} onChange={(e) => setWordCount(e.target.value)} required />
  </div>
  <div className="form-group">
    <label >Tone and Style:</label>
    <input type="text" id="toneStyle" value={toneStyle} onChange={(e) => setToneStyle(e.target.value)} required />
  </div>
  <div className="form-group">
    <label>Links:</label>
    <input type="text" id="links" value={links} onChange={(e) => setLinks(e.target.value)} required />
  </div>
  <div className="form-group">
    <label>Deadline:</label>
    <select id="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} required>
      <option value="">Select a deadline</option>
      <option value="2024-08-01">August 1, 2024</option>
      <option value="2024-08-15">August 15, 2024</option>
      <option value="2024-09-01">September 1, 2024</option>
    </select>
  </div>
  <button type="submit">Submit</button>
</form>
</div>
  );
};

export default ArticleCreation;
