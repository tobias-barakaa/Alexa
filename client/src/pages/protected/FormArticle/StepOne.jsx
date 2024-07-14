import { useState, useEffect } from 'react';
import './StepOne.css';

const StepOne = ({ nextStep }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [authorTone, setAuthorTone] = useState('');
  const [numberOfWords, setNumberOfWords] = useState('');

  useEffect(() => {
    const stepOneData = JSON.parse(localStorage.getItem('stepOneData'));
    if (stepOneData) {
      setDescription(stepOneData.description);
      setCategory(stepOneData.category);
      setAuthorTone(stepOneData.authorTone);
      setNumberOfWords(stepOneData.numberOfWords);
    }
  }, []);

  useEffect(() => {
    const stepOneData = { description, category, authorTone, numberOfWords };
    localStorage.setItem('stepOneData', JSON.stringify(stepOneData));
  }, [description, category, authorTone, numberOfWords]);

  const handleNextClick = () => {
    nextStep();
  };

  return (
    <div className="order-article-container">
      <div className="order-article-form">
        <h2 className="form-heading">ORDER ARTICLE AND CONTENT</h2>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="description-input"
          />
        </div>
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="category" className="form-label">Choose a category:</label>
            <div className="dropdown-container">
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="category-dropdown"
              >
                <option value="">Select a category</option>
                {category.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="author-tone" className="form-label">Authors tone:</label>
            <div className="dropdown-container">
              <select
                id="author-tone"
                value={authorTone}
                onChange={(e) => setAuthorTone(e.target.value)}
                className="author-tone-dropdown"
              >
                <option value="">Select authors tone</option>
                {authorTone.map((tone, index) => (
                  <option key={index} value={tone}>{tone}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="word-count" className="form-label">Number of words:</label>
          <div className="dropdown-container">
            <select
              id="word-count"
              value={numberOfWords}
              onChange={(e) => setNumberOfWords(e.target.value)}
              className="word-count-dropdown"
            >
              <option value="">Select number of words</option>
              {numberOfWords.map((count, index) => (
                <option key={index} value={count}>{count}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <button onClick={handleNextClick} className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
