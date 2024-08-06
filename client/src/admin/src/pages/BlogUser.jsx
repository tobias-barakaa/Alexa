// src/components/BlogUser.js
import React, { useState } from 'react';
import { useGetBlogsIdQuery } from '../../../slices/admin/blogApiSlice';
import '../styles/pages/BlogUser.css';
import { useParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa'; // Make sure to install react-icons package


const BlogUser = () => {
    const { id: blogId } = useParams();
  const { data, isLoading, isError } = useGetBlogsIdQuery(blogId);
  const [status, setStatus] = useState('draft'); // Default status
//   const [file, setFile] = useState(null); // For file upload
  const [timer, setTimer] = useState(60); // Example timer in seconds

  // Timer effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading blog details</div>;

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = () => {
//     console.log('File submitted:', file);
//     console.log('Status:', status);
//     // Handle the send action here
//   };

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
        <p><strong>Tags:</strong> {data.blog.tags}</p>
        <p><strong>Excerpt:</strong> {data.blog.excerpt}</p>
        <p><strong>Status:</strong> {data.blog.status}</p>
        <p><strong>Published At:</strong> {data.blog.published_at || 'Not published'}</p>
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

        <div className="file-upload">
          <input type="file"  /> 
          {/* onChange={handleFileChange} */}
        </div>
        <button className='send-button' style={{ width: '100%', padding: '10px' }}>
          Send
        </button>
      </div>
    </div>
    </div>
    </>

  );
};

export default BlogUser;
