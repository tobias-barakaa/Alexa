import { useState, useEffect } from 'react';
import './EditAll.css';
import { useGetRecentArticlesQuery } from '../../../../slices/client/orderArticleApiSlice';

const EditAll = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const { data: articlesData, isLoading, error } = useGetRecentArticlesQuery();

  useEffect(() => {
    if (articlesData) {
      console.log(articlesData); // Log the articlesData to inspect its structure

      // Handle recent and expired articles separately
      const recentArticles = articlesData.recentArticles || [];
      const expiredArticles = articlesData.expiredArticles || [];

      // Combine both recent and expired articles
      const allArticles = [...recentArticles, ...expiredArticles];

      // Now apply the filter to the correct array
      if (Array.isArray(allArticles)) {
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        const filteredArticles = allArticles.filter(article => new Date(article.created_at) > oneHourAgo || article.status === 'Expired');
        setArticles(filteredArticles);
      }
    }
  }, [articlesData]); // Only runs when articlesData changes

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching articles</div>;

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

  console.log(articles, 'this is articles'); 
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
