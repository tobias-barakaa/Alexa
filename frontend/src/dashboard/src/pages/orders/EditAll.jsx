import { useState, useEffect } from 'react';
import './EditAll.css';
import { useGetRecentArticlesQuery } from '../../../../slices/client/orderArticleApiSlice';
import ConfirmationModal from '../../components/ConfirmationModal';
import { Link, useNavigate } from 'react-router-dom';

const EditAll = () => {
  const [recentArticles, setRecentArticles] = useState([]);
  const [expiredArticles, setExpiredArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const navigate = useNavigate();

  const { data: articlesData, isLoading, error } = useGetRecentArticlesQuery();

  useEffect(() => {
    if (articlesData) {
 // Log to inspect the structure of the data

      // Separate recent and expired articles
      const recent = Array.isArray(articlesData.recentArticles) ? articlesData.recentArticles : [];
      const expired = Array.isArray(articlesData.expiredArticles) ? articlesData.expiredArticles : [];

      setRecentArticles(recent);
      setExpiredArticles(expired);
    }
  }, [articlesData]);

  useEffect(() => {
    if (recentArticles.length > 0) {
      const interval = setInterval(() => {
        setRecentArticles((prevArticles) => prevArticles.map((article) => ({
          ...article,
          remainingTime: calculateRemainingTime(article.created_at),
        })));
      }, 1000);
  
      return () => clearInterval(interval); // Clean up the interval when the component unmounts
    }
  }, [recentArticles]);

  const calculateRemainingTime = (createdAt) => {
    const oneHourInMs = 60 * 60 * 1000;
    const timeElapsed = Date.now() - new Date(createdAt).getTime();
    const remainingTime = oneHourInMs - timeElapsed;

    if (remainingTime <= 0) {
      return 'Expired';
    }

    // Convert remaining time to minutes and seconds
    const minutes = Math.floor(remainingTime / 1000 / 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);

    return `${minutes}m ${seconds}s`;
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching articles</div>;

  const handleEdit = (article) => {
    const { id } = article; // Destructure id from the article object
    navigate(`/dashboard/edit-article/${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality here
    <ConfirmationModal />
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

      {/* Recent Articles Section */}
      <h2 className="article-section-title">Recent Articles</h2>
      {recentArticles.length === 0 ? (
        <div className="no-articles">
          <i className="fas fa-folder-open"></i>
          <p>No recent articles found</p>
        </div>
      ) : (
        <div className="article-grid">
          {recentArticles.map((article) => (
            <div key={article.id} className={`article-card ${selectedArticle === article.id ? 'expanded' : ''}`}>
              <div className="article-header" onClick={() => toggleArticleDetails(article.id)}>
                <h2 style={{ color: "white" }}>{article.title}</h2>
                <p className="remaining-time">Time remaining: {article.remainingTime}</p> {/* Countdown Timer */}
              </div>
              <div className="article-content">
                <p><strong>Description:</strong> {article?.description}</p>
                <p><strong>Keywords:</strong> {article?.keywords}</p>
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
              <button onClick={() => handleEdit(article)} className="edit-button">
  <i className="fas fa-edit"></i> Edit
      </button>
                <Link to='/edit-article' className="delete-button">
                  <i className="fas fa-trash-alt"></i> Delete
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Expired Articles Section */}
      <h2 className="article-section-title">Expired Articles</h2>
      {expiredArticles.length === 0 ? (
        <div className="no-articles">
          <i className="fas fa-folder-open"></i>
          <p>No expired articles found</p>
        </div>
      ) : (
        <div className="article-grid">
          {expiredArticles.map((article) => (
            <div key={article.id} className={`article-card expired-article ${selectedArticle === article.id ? 'expanded' : ''}`}>
              <div className="article-header" onClick={() => toggleArticleDetails(article.id)}>
                <h2 style={{ color: "white" }}>{article.title}</h2>
              </div>
              <div className="article-content">
                <p><strong>Description:</strong> {article?.description}</p>
                <p><strong>Keywords:</strong> {article?.keywords}</p>
                <p><strong>Word Count:</strong> {article.word_count}</p>
                <p><strong>Duration:</strong> {article.duration}</p>
                <p><strong>Complexity:</strong> {article.complexity}</p>
                <p><strong>Language:</strong> {article.language}</p>
                <p><strong>Quantity:</strong> {article.quantity}</p>
                <p><strong>Cost:</strong> ${article.cost}</p>
                <p><strong>Status:</strong> <span className="status expired">Expired</span></p>
                <p><strong>Paid:</strong> <span className={`paid ${article.is_paid ? 'yes' : 'no'}`}>{article.is_paid ? 'Yes' : 'No'}</span></p>
              </div>
              {/* No edit or delete actions for expired articles */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditAll;
