import React, { useState } from 'react';
import './ArticleCreation.css';

const ArticleCreation = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [toneStyle, setToneStyle] = useState('');
  const [links, setLinks] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to an API or log it
    const formData = { title, description, keywords, wordCount, toneStyle, links, deadline };
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1>Article Creation Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <label>Keywords:</label>
          <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Word Count:</label>
          <input type="number" value={wordCount} onChange={(e) => setWordCount(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Tone and Style:</label>
          <input type="text" value={toneStyle} onChange={(e) => setToneStyle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Links:</label>
          <input type="text" value={links} onChange={(e) => setLinks(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Deadline:</label>
          <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ArticleCreation;
