import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../styles/pages/ArticleUser.css";

const UserDetail = () => {
    const { id: article_id } = useParams();
    console.log(article_id, 'yes you');

  const [article, setArticle] = useState(null);
  const [status, setStatus] = useState('');
  const [file, setFile] = useState(null);

  React.useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/admin/article/retrieve/${article_id}`,
            { withCredentials: true }
        );
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
    // Implement update logic here
    console.log('Updating status to:', status);
  };

  const handleSend = () => {
    // Implement send logic here
    console.log('Sending file:', file);
  };

  if (!article) return <div>Loading...</div>;

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 2, marginRight: '20px' }}>
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
      <div style={{ flex: 1 }}>
        <h2>Actions</h2>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <select value={status} onChange={handleStatusChange} style={{ marginRight: '10px' }}>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleUpdate}>Update</button>
        </div>
        <p>Time remaining: 0 seconds</p>
        <input type="file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
        <button onClick={handleSend} style={{ width: '100%' }}>Send</button>
      </div>
    </div>
  );
};

export default UserDetail;