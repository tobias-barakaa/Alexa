import React from 'react';
import axios from 'axios';
import FileDownload from 'js-file-download';
import './HandleFile.css';

const FileItem = ({ file }) => {
  const { file_url, blog_id, created_at } = file;

  const handleDownload = async () => {
    try {
      // Fetch the file as a blob
      const response = await axios.get(file_url, {
        responseType: 'blob', // important to specify blob response type
      });

      // Extract the file name from the URL
      const fileName = file_url.split('/').pop();

      // Use js-file-download to trigger the download
      FileDownload(response.data, fileName);
    } catch (error) {
      console.error('Failed to download the file:', error);
    }
  };

  return (
    <li className="file-item">
      <div className="file-info">
        <p>Blog ID: {blog_id}</p>
        <p>Created At: {new Date(created_at).toLocaleDateString()}</p>
      </div>
      <button onClick={handleDownload} className="download-button">
        Download File
      </button>
    </li>
  );
};

export default FileItem;
