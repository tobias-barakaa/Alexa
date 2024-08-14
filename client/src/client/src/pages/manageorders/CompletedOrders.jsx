import { useState, useEffect } from 'react';
import axios from 'axios';

function FileDownloader() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const userId = userInfo.id;

    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/file/url/${userId}`, {
        withCredentials: true
      });
      setFiles(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch files');
      setLoading(false);
    }
  };

  const handleDownload = (fileId) => {
    window.open(`http://localhost:5000/api/file/url/${fileId}`, '_blank');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Your Files</h2>
      {files.length === 0 ? (
        <p>No files found.</p>
      ) : (
        <ul>
          {files.map(file => (
            <li key={file.id}>
              Blog ID: {file.blog_id} - {file.file_url}
              <button onClick={() => handleDownload(file.id)}>Download</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FileDownloader;
