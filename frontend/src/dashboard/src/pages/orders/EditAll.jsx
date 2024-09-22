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

  useEffect(() => {
    // In a real application, you would fetch data from an API here
    // For now, we'll use the dummy data and filter for articles created within the last hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
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

  return (
    <div className="article-list-container">
      <div className="warning-message">
        Warning: Articles can only be Edited or Deleted within an hour after they were created
      </div>
      {articles.length === 0 ? (
        <p className="no-articles">No articles found within the last hour.</p>
      ) : (
        articles.map((article) => (
          <div key={article.id} className="article-card">
            <h2>{article.title}</h2>
            <p><strong>Description:</strong> {article.description}</p>
            <p><strong>Keywords:</strong> {article.keywords}</p>
            <p><strong>Word Count:</strong> {article.word_count}</p>
            <p><strong>Duration:</strong> {article.duration}</p>
            <p><strong>Complexity:</strong> {article.complexity}</p>
            <p><strong>Language:</strong> {article.language}</p>
            <p><strong>Quantity:</strong> {article.quantity}</p>
            <p><strong>Cost:</strong> ${article.cost}</p>
            <p><strong>Status:</strong> {article.status}</p>
            <p><strong>Paid:</strong> {article.is_paid ? 'Yes' : 'No'}</p>
            <div className="button-group">
              <button onClick={() => handleEdit(article.id)} className="edit-button">Edit</button>
              <button onClick={() => handleDelete(article.id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EditAll;