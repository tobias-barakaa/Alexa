import { useState, useEffect } from 'react';
import axios from 'axios';
import './ArticleDetails.css';

const ArticleDetails = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/article/retrieve');
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, []);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="article-details-container">
      <h2>Article Details</h2>
      <table className="article-table">
        <tbody>
          {Object.entries(article).map(([key, value]) => (
            <tr key={key}>
              <td className="label">{key.replace(/_/g, ' ').toUpperCase()}</td>
              <td className="value">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleDetails;