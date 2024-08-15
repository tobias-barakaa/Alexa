import { useEffect, useState } from 'react';
import axios from 'axios';
import "../../styles/pages/manageorders/FileDownloader.css";

const FileDownloader = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/file/image/link', {
          withCredentials: true,
        });
        setFiles(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch files');
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const handleDownload = (file_url) => {
    const fileName = file_url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href=file_url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  // const handleDownload = (file_url, blog_id) => {
  //   fileDownload(file_url, `blog_${blog_id}.pdf`);
  // };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="file-list">
      <h2>Available Files</h2>
      <ul>
        {files.map(file => (
          <li key={file.id} className="file-item">
            <div className="file-info">
              <p>Blog ID: {file.blog_id}</p>
              <p>Created At: {new Date(file.created_at).toLocaleDateString()}</p>
            </div>
            <button
              onClick={() => handleDownload(file.file_url)}
              className="download-button"
            >
              Download File
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileDownloader;
