import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetBlogsIdQuery } from '../../../slices/admin/blogApiSlice';

const BlogUser = () => {
    const blogId = useParams();
  const { data, error, isLoading } = useGetBlogsIdQuery(blogId);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [selectedFile, setSelectedFile] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { blog } = data;

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSend = () => {
    // Implement send functionality
    console.log('Sending file:', selectedFile);
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      {/* Left column */}
      <div style={{ flex: 1 }}>
        <h3>Title</h3>
        <h3>Tags</h3>
        <h3>Excerpt</h3>
        <h3>Status</h3>
        <h3>Published At</h3>
        <h3>Created At</h3>
        <h3>Updated At</h3>
        <h3>User ID</h3>
        <h3>User Name</h3>
        <h3>Category</h3>
        <h3>Word Count</h3>
        <h3>Timeframe</h3>
      </div>

      {/* Middle column */}
      <div style={{ flex: 1 }}>
        <p>{blog?.title}</p>
        <p>{blog?.tags}</p>
        <p>{blog?.excerpt}</p>
        <p>{blog?.status}</p>
        <p>{blog?.published_at || 'Not published'}</p>
        <p>{new Date(blog?.created_at).toLocaleString()}</p>
        <p>{new Date(blog?.updated_at).toLocaleString()}</p>
        <p>{blog?.user_id}</p>
        <p>{`${blog?.user_first_name} ${blog?.user_last_name}`}</p>
        <p>{blog?.category_name}</p>
        <p>{blog?.number_of_words}</p>
        <p>{blog?.timeframe_duration}</p>
      </div>

      {/* Right column */}
      <div style={{ flex: 1 }}>
        <div style={{ 
          border: '1px solid #ccc', 
          padding: '10px', 
          marginBottom: '10px' 
        }}>
          <select defaultValue={blog.status}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
            <option value="processing">Processing</option>
          </select>
        </div>

        <button style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
          Update
        </button>

        <div style={{ marginBottom: '10px' }}>
          Time left: {Math.floor(timeLeft / 3600)}h {Math.floor((timeLeft % 3600) / 60)}m {timeLeft % 60}s
        </div>

        <input type="file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />

        <button onClick={handleSend} style={{ width: '100%', padding: '10px' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default BlogUser;