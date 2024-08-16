import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../styles/pages/ArticleUser.css";

const UserDetail = () => {
  const { id: article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [status, setStatus] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/admin/article/retrieve/${article_id}`, { withCredentials: true });
        setArticle(response.data.data);
        setStatus(response.data.data.status);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [article_id]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpdate = () => {
    console.log('Updating status to:', status);
  };

  const handleSend = () => {
    console.log('Sending file:', file);
  };

  if (!article) return <div>Loading...</div>;

  return (
    <div className="article-details-container">
      <div className="article-details-left">
        <h2>Article Details</h2>
        <p><strong>Title:</strong> {article.title}</p>
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
        <p><strong>Created At:</strong> {new Date(article.created_at).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(article.updated_at).toLocaleString()}</p>
      </div>
      <div className="article-details-right">
        <h2>Actions</h2>
        <div>
          <label>Status</label>
          <select value={status} onChange={handleStatusChange}>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleUpdate} className="update-button">Update</button>
        </div>
        <div>
          <p>Time remaining: 0 seconds</p>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleSend} className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
