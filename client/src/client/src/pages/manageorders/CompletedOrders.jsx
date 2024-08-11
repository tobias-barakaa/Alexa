import { useState } from 'react';
import axios from 'axios';

const FileDownload = () => {
  const [fileId, setFileId] = useState('');
  const [message, setMessage] = useState('');

  const handleDownload = async () => {
    console.log("File ID entered:", fileId);  // Debugging: Check the fileId value

    if (!fileId) {
      setMessage('Please enter a file ID');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/file/image/download/${fileId}`, {
        responseType: 'blob'
      });

      const fileName = response.headers['content-disposition']
        ? response.headers['content-disposition'].split('filename=')[1]
        : `file-${fileId}.pdf`;

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
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
        onChange={(e) => setFileId(e.target.value)}  // Ensure fileId is updated on change
        placeholder="Enter file ID"
      />
      <button onClick={handleDownload}>Download</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileDownload;
