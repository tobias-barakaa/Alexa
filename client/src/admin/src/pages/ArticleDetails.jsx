import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/ArticleDetails.css';

const ArticleDetails = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/article/retrieve', { withCredentials: true });
        const { data } = response.data;

        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          setError('Unexpected response format');
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch articles');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleArticleClick = (id) => {
    navigate('/dashboard/' + id);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="article-table-container">
      <h2>Article List</h2>
      <table className="article-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ti</th> {/* Title */}
            <th>De</th> {/* Description */}
            <th>Ca</th> {/* Category */}
            <th>Ke</th> {/* Keywords */}
            <th>Co</th> {/* Complexity */}
            <th>Wo</th> {/* Word Count */}
            <th>Du</th> {/* Duration */}
            <th>Qu</th> {/* Quantity */}
            <th>La</th> {/* Language */}
            <th>Us</th> {/* User ID */}
            <th>Co</th> {/* Cost */}
            <th>St</th> {/* Status */}
            <th>Cr</th> {/* Created At */}
            <th>Up</th> {/* Updated At */}
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr
              key={article.id}
              className="article-row"
              onClick={() => handleArticleClick(article.id)}
            >
              <td>{article.id}</td>
              <td>{article.title.substring(0, 2)}</td>
              <td>{article.description.substring(0, 2)}</td>
              <td>{article.category.substring(0, 2)}</td>
              <td>{article.keywords.substring(0, 2)}</td>
              <td>{article.complexity.substring(0, 2)}</td>
              <td>{article.word_count}</td>
              <td>{article.duration.substring(0, 2)}</td>
              <td>{article.quantity}</td>
              <td>{article.language.substring(0, 2)}</td>
              <td>{article.user_id}</td>
              <td>{article.cost.substring(0, 2)}</td>
              <td>{article.status.substring(0, 2)}</td>
              <td>{new Date(article.created_at).toLocaleDateString()}</td>
              <td>{new Date(article.updated_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleDetails;
