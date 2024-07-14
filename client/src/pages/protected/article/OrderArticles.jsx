import React, { useState } from 'react';
import './OrderArticles.css';

const OrderArticle = () => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [authorTone, setAuthorTone] = useState('');
  const [numberOfWords, setNumberOfWords] = useState('');

  const categories = [
    'Finance', 'Economy', 'Food', 'Travel', 'Health', 'Technology', 'Business', 'Education',
    'Entertainment', 'Fashion', 'Sports', 'Science', 'Environment', 'Politics', 'Art',
    'History', 'Literature', 'Music', 'Religion', 'Other'
  ];

  const authorTones = [
    'friendly', 'professional', 'casual', 'formal', 'humorous', 'informative',
    'persuasive', 'promotional', 'technical', 'other'
  ];

  const wordCounts = [
    '100-200', '201-300', '301-500', '501-700', '701-1000'
  ];

  return (
    <div className="order-article-container">
      <div className="order-article-form">
        <h2>ORDER ARTICLE AND CONTENT</h2>
        <label className="label">Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="description-input"
        />
        <div className="input-row">
          <div className="dropdown-container">
            <label className="label">Choose a Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="category-dropdown"
            >
              <option value="">Choose a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="dropdown-container">
            <label className="label">Author's Tone</label>
            <select
              value={authorTone}
              onChange={(e) => setAuthorTone(e.target.value)}
              className="author-tone-dropdown"
            >
              <option value="">Author's tone</option>
              {authorTones.map((tone, index) => (
                <option key={index} value={tone}>{tone}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="dropdown-container">
          <label className="label">Number of Words</label>
          <select
            value={numberOfWords}
            onChange={(e) => setNumberOfWords(e.target.value)}
            className="word-count-dropdown"
          >
            <option value="">Number of words</option>
            {wordCounts.map((count, index) => (
              <option key={index} value={count}>{count}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default OrderArticle;
