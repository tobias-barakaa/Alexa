import { useState, useEffect } from 'react';
import { useGetRecentQuery, useUpdateBlogMutation } from "../../../slices/client/blogApiSlice";
import "./EditOrders.css";
import EditModal from './EditModal';

const CountdownTimer = ({ createdAt }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const createdTime = new Date(createdAt).getTime();
      const timeDiff = now - createdTime;
      const timeLeftMs = Math.max(30 * 60 * 1000 - timeDiff, 0);

      if (timeLeftMs === 0) {
        clearInterval(timer);
        setTimeLeft('Time expired');
      } else {
        const minutes = Math.floor(timeLeftMs / (1000 * 60));
        const seconds = Math.floor((timeLeftMs % (1000 * 60)) / 1000);
        setTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [createdAt]);

  return <span className="countdown-timer">{timeLeft}</span>;
};











const EditOrders = () => {
  const { data, isLoading, isError, error } = useGetRecentQuery();
  const [updateBlog] = useUpdateBlogMutation();
  const [editingBlog, setEditingBlog] = useState(null);

  if (isLoading) {
    return <div className="loading">Loading recent orders...</div>;
  }

  if (isError) {
    return <div className="error">Error: {error.message}</div>;
  }

  const blogs = data?.blogs || [];

  const handleEdit = (blog) => {
    setEditingBlog(blog);
  };

  const handleCloseModal = () => {
    setEditingBlog(null);
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await updateBlog({ id, ...updatedData }).unwrap();
      setEditingBlog(null);
      // Optionally, you can refetch the recent blogs here
    } catch (err) {
      console.error("Failed to update blog:", err);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="edit-orders">
      <h1>Recent Blog Orders</h1>
      <div className="warning">
        Warning: Blog posts can only be edited or deleted within 30 minutes of posting.
      </div>
      <div className="blog-cards">
        {blogs.map((blog) => {
          const createdAt = new Date(blog.created_at);
          const timeDiff = Date.now() - createdAt.getTime();
          const canEditOrDelete = timeDiff <= 30 * 60 * 1000; 

          return (
            <div key={blog.id} className="blog-card">
              <h2>{blog.title}</h2>
              <p><strong>Category ID:</strong> {blog.category_id}</p>
              <p><strong>Tags:</strong> {blog.tags}</p>
              <p><strong>Excerpt:</strong> {blog.excerpt}</p>
              <p><strong>Word Count ID:</strong> {blog.number_of_words_id}</p>
              <p><strong>Timeframe ID:</strong> {blog.timeframe_id}</p>
              <p><strong>Status:</strong> {blog.status}</p>
              <p><strong>Created At:</strong> {createdAt.toLocaleString()}</p>
              <p><strong>Time Remaining:</strong> <CountdownTimer createdAt={blog.created_at} /></p>
              <div className="action-buttons">
                <button 
                  className={`edit-button ${!canEditOrDelete ? 'disabled' : ''}`}
                  disabled={!canEditOrDelete}
                  onClick={() => handleEdit(blog)}
                >
                  Edit
                </button>
                <button 
                  className={`delete-button ${!canEditOrDelete ? 'disabled' : ''}`}
                  disabled={!canEditOrDelete}
                >
                  Delete
                </button>
              </div>
              {!canEditOrDelete && (
                <p className="time-expired">Time for editing/deleting has expired</p>
              )}
            </div>
          );
        })}
      </div>
      {editingBlog && (
        <EditModal
          blog={editingBlog}
          isOpen={!!editingBlog}
          onClose={handleCloseModal}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default EditOrders;