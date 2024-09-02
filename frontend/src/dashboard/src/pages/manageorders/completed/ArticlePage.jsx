import  { useEffect, useState } from 'react';
import axios from 'axios';
// import '../../../styles/pages/manageorders/completed/ArticlePage.css';
import '../../../styles/pages/manageorders/completed/ArticlePage.css';

const ArticlePage = () => {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/article/upload/retrieve', {
          withCredentials: true,
        });
        setArticleData(response.data);
      } catch (error) {
        console.error('Error fetching article data:', error);
      }
    };

    fetchArticleData();
  }, []);

  if (!articleData) return <div>Loading...</div>;

  return (
    <div className="article-creation-container">
      {articleData.map((article) => (
        <div key={article.file_id} className="article-card">
          <h2>{article.title}</h2>
          <p><strong>Description:</strong> {article.description}</p>
          <p><strong>Category:</strong> {article.category}</p>
          <p><strong>Keywords:</strong> {article.keywords}</p>
          <p><strong>Complexity:</strong> {article.complexity}</p>
          <p><strong>Word Count:</strong> {article.word_count}</p>
          <p><strong>Duration:</strong> {article.duration}</p>
          <p><strong>Quantity:</strong> {article.quantity}</p>
          <p><strong>Language:</strong> {article.language}</p>
          <p><strong>Cost:</strong> ${article.cost}</p>
          <p><strong>Status:</strong> {article.status}</p>
          <p><strong>Article Created At:</strong> {new Date(article.article_created_at).toLocaleString()}</p>
          <p><strong>Article Updated At:</strong> {new Date(article.article_updated_at).toLocaleString()}</p>
          <a href={article.file_url} download className="download-button">
            Download Attached File
          </a>
        </div>
      ))}
    </div>
  );
};

export default ArticlePage;
