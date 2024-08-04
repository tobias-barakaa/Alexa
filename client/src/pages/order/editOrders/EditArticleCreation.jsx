import { useState, useEffect } from 'react';
import axios from 'axios';
import './EditArticleCreation.css';

const EditArticleCreation = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/articlecreation/getarticle',
        {withCredentials: true}
      );
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setError('Failed to fetch articles. Please try again later.');
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log('Edit article:', id);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log('Delete article:', id);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="edit-article-creation">
      <h1>Edit Article Creation Requests</h1>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <div className="article-list">
          {articles.map((article) => (
            <div key={article.id} className="article-item">
              <h2>{article.title}</h2>
              <p className="description"><strong>Description:</strong> {article.description}</p>
              <div className="article-details">
                <p><strong>Keywords:</strong> {article.keywords}</p>
                <p><strong>Word Count:</strong> {article.word_count}</p>
                <p><strong>Tone Style:</strong> {article.tone_style}</p>
                <p><strong>Complexity:</strong> {article.complexity}</p>
                <p><strong>Cost:</strong> ${article.cost}</p>
                <p><strong>Status:</strong> {article.status}</p>
                <p><strong>Links:</strong> {article.links}</p>
                <p><strong>Created:</strong> {new Date(article.created_at).toLocaleString()}</p>
              </div>
              <div className="article-actions">
                <button onClick={() => handleEdit(article.id)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(article.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditArticleCreation;