import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../styles/pages/manageorders/completed/ArticlePage.css';

const EmailCopyWritingComplete = () => {
  const [emailCopyWritingData, setEmailCopyWritingData] = useState(null);

  useEffect(() => {
    const fetchEmailCopyWritingData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/emailcopywriting/upload/retrieve', {
          withCredentials: true,
        });
        setEmailCopyWritingData(response.data);
      } catch (error) {
        console.error('Error fetching email copywriting data:', error);
      }
    };

    fetchEmailCopyWritingData();
  }, []);

  if (!emailCopyWritingData) return <div>Loading...</div>;

  return (
    <div className="article-creation-container">
      {emailCopyWritingData.map((item) => (
        <div key={item.file_id} className="article-card">
          <h2>{item.project_type}</h2>
          <p><strong>Project Description:</strong> {item.project_description}</p>
          <p><strong>Duration:</strong> {item.duration}</p>
          <p><strong>Word Count:</strong> {item.word_count}</p>
          <p><strong>Cost:</strong> ${item.cost}</p>
          <p><strong>Status:</strong> {item.status}</p>
          <p><strong>Email Created At:</strong> {new Date(item.created_at).toLocaleString()}</p>
          <p><strong>Email Updated At:</strong> {new Date(item.updated_at).toLocaleString()}</p>
          <a href={item.file_url} download className="download-button">
            Download Attached File
          </a>
        </div>
      ))}
    </div>
  );
};

export default EmailCopyWritingComplete;
