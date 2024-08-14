import { useEffect, useState } from 'react';
import axios from 'axios';
import "../../styles/pages/manageorders/FileDownloader.css"
import FileItem from './FileItem';

const FileDownloader = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/file/image/link',
          {withCredentials: true}
        );
        setFiles(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch files');
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="file-list">
      <h2>Available Files</h2>
      <ul>
        {files.map(file => (
          <FileItem key={file.id} file={file} />
        ))}
      </ul>
    </div>
  );
};

export default FileDownloader;


