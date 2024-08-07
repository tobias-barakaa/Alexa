// FileDownload.js
import { useState } from 'react';
import axios from 'axios';

const FileDownload = () => {
  const [fileId, setFileId] = useState('');
  const [message, setMessage] = useState('');

  const handleDownload = async () => {
    if (!fileId) {
      setMessage('Please enter a file ID');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/file/image/download/${fileId}`, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `file-${fileId}`);
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
      <input
        type="text"
        value={fileId}
        onChange={(e) => setFileId(e.target.value)}
        placeholder="Enter file ID"
      />
      <button onClick={handleDownload}>Download</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileDownload;