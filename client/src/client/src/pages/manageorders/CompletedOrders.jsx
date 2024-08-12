import { useState, useEffect } from 'react';
import axios from 'axios';

const FileDownload = () => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch blogId from localStorage
    const blogId = localStorage.getItem('blogId');
    const recipientId = 4; // Replace with actual recipient ID

    if (blogId) {
      fetchFiles(blogId, recipientId);
    }
  }, []);

  const fetchFiles = async (blogId, recipientId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/files/${recipientId}/${blogId}`, {
        withCredentials: true, // Ensure that your authentication cookies are sent
      });
      setFiles(response.data);
    } catch (error) {
      setMessage('Failed to fetch files');
      console.error('Fetch error:', error);
    }
  };

  const handleDownload = async (fileUrl) => {
    try {
      // Trigger a download in the browser
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', 'file.pdf'); // Or determine a better name for the file
      document.body.appendChild(link);
      link.click();
      link.remove();

      setMessage('File downloaded successfully');
    } catch (error) {
      setMessage('File download failed');
      console.error('Download error:', error);
    }
  };

  return (
    <div>
      <h2>File Download</h2>
      {message && <p>{message}</p>}
      <ul>
        {files.map(file => (
          <li key={file.id}>
            <button onClick={() => handleDownload(file.file_url)}>
              Download {file.public_id}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileDownload;
