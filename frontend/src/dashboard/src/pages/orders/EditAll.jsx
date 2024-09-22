import React, { useState, useEffect } from 'react';
import './EditAll.css';

const dummyData = [
  {
    "id": 92,
    "title": "Ad porro exercitatio",
    "description": "Tempora veniam haru",
    "keywords": "Dolores non earum qu",
    "word_count": "1000 words",
    "duration": "2 months",
    "complexity": "Advanced",
    "language": "American English",
    "quantity": 6,
    "cost": "600.00",
    "status": "Pending",
    "is_paid": false,
    "created_at": "2024-09-22T06:11:48.428Z"
  },
  // Add more dummy data here...
];

const EditAll = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 10000);
    const filteredArticles = dummyData.filter(article => new Date(article.created_at) > oneHourAgo);
    setArticles(filteredArticles);
  }, []);

  const handleEdit = (id) => {
    console.log('Edit article with id:', id);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log('Delete article with id:', id);
    // Implement delete functionality
  };

  const toggleArticleDetails = (id) => {
    setSelectedArticle(selectedArticle === id ? null : id);
  };

  return (
    <div className="sophisticated-article-list">
      <div className="warning-banner">
        <i className="fas fa-exclamation-triangle"></i>
        <p>Articles can only be Edited or Deleted within an hour after creation</p>
      </div>
      {articles.length === 0 ? (
        <div className="no-articles">
          <i className="fas fa-folder-open"></i>
          <p>No recent articles found</p>
        </div>
      ) : (
        <div className="article-grid">
          {articles.map((article) => (
            <div key={article.id} className={`article-card ${selectedArticle === article.id ? 'expanded' : ''}`}>
              <div className="article-header" onClick={() => toggleArticleDetails(article.id)}>
                <h2>{article.title}</h2>
                <i className={`fas fa-chevron-${selectedArticle === article.id ? 'up' : 'down'}`}></i>
              </div>
              <div className="article-content">
                <p><strong>Description:</strong> {article.description}</p>
                <p><strong>Keywords:</strong> {article.keywords}</p>
                <p><strong>Word Count:</strong> {article.word_count}</p>
                <p><strong>Duration:</strong> {article.duration}</p>
                <p><strong>Complexity:</strong> {article.complexity}</p>
                <p><strong>Language:</strong> {article.language}</p>
                <p><strong>Quantity:</strong> {article.quantity}</p>
                <p><strong>Cost:</strong> ${article.cost}</p>
                <p><strong>Status:</strong> <span className={`status ${article.status.toLowerCase()}`}>{article.status}</span></p>
                <p><strong>Paid:</strong> <span className={`paid ${article.is_paid ? 'yes' : 'no'}`}>{article.is_paid ? 'Yes' : 'No'}</span></p>
              </div>
              <div className="article-actions">
                <button onClick={() => handleEdit(article.id)} className="edit-button">
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button onClick={() => handleDelete(article.id)} className="delete-button">
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditAll;