import { useState, useEffect } from 'react';
import { useGetBlogsIdQuery } from '../../../slices/admin/blogApiSlice';
import '../styles/pages/BlogUser.css';
import { useParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa'; 
import axios from 'axios';

const BlogUser = () => {
  const { id: blogId } = useParams();
  const { data, isLoading, isError } = useGetBlogsIdQuery(blogId);
  const [status, setStatus] = useState('Pending'); 
  const [timer, setTimer] = useState(60); 
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', data.blog.user_id); 

    try {
      const response = await axios.post(`http://localhost:5000/api/file/image/link/foryou`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(`File uploaded successfully. ID: ${response.data.id}`);
      setFileUrl(response.data.fileUrl); // Save the file URL for download
    } catch (error) {
      setMessage('File upload failed');
      console.error('Upload error:', error);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/file/url/${blogId}`, {
        withCredentials: true, // Ensure that your authentication cookies are sent
      });

      const downloadUrl = response.data.fileUrl;

      // Trigger a download in the browser
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'file.pdf'); // or any other name
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download the file.');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading blog details</div>;

  return (
    <>
      <div style={{ 
        border: '2px solid black', 
        padding: '20px', 
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '20px',
        marginRight: '20px',
      }}>
        <p style={{ margin: 0 }}>Blog Request by User</p>
        <FaEye size={24} />
      </div>

      <div className="blog-user-container">
        <div className="middle-section">
          <h2>{data.blog.title}</h2>
          <p><strong>Tags:</strong> {data.blog.tags || 'No tags'}</p>
          <p><strong>Excerpt:</strong> {data.blog.excerpt}</p>
          <p><strong>Status:</strong> {data.blog.status}</p>
          <p><strong>Published At:</strong> {data.blog.published_at ? new Date(data.blog.published_at).toLocaleDateString() : 'Not published'}</p>
          <p><strong>Created At:</strong> {new Date(data.blog.created_at).toLocaleDateString()}</p>
          <p><strong>Updated At:</strong> {new Date(data.blog.updated_at).toLocaleDateString()}</p>
          <h3>Details</h3>
          <p>This section can provide additional details or explanations about the blog post.</p>
        </div>

        <div className="right-section">
          <div className="blog-detail-right">
            <div className="dropdown-container">
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="status-dropdown">
                <option value="draft">Draft</option>
                <option value="processing">Processing</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
                <option value="deleted">Deleted</option>
              </select>
              <button className="update-button">Update</button>
            </div>
            <div className="timer">Time remaining: {timer} seconds</div>
            <form onSubmit={handleSubmit}>
              <input 
                type="file" 
                onChange={handleFileChange} 
                accept=".pdf,.zip,.csv"
              />
              <button type="submit" className='send-button' style={{ width: '100%', padding: '10px', marginTop: '10px' }}>Upload</button>
            </form>
            {fileUrl && (
              <button onClick={handleDownload} className="download-button">
                Download File
              </button>
            )}
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogUser;
