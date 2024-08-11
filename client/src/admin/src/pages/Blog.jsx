import { useNavigate } from 'react-router-dom';
import { useGetBlogsQuery } from '../../../slices/admin/blogApiSlice';
import '../styles/pages/Blog.css';

const Blog = () => {
  const { data, isLoading, isError } = useGetBlogsQuery();
  const navigate = useNavigate();

  const handleBlogClick = (id) => {
    navigate('/admindashboard/bloguser/' + id);
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error loading blogs</div>;

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blogs</h1>
      {data && data.blogs && data.blogs.length > 0 ? (
        <table className="blog-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Tags</th>
              <th>Excerpt</th>
              <th>Status</th>
              <th>Published</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.blogs.map((blog) => (
              <tr
                key={blog.id}
                className="blog-row"
                onClick={() => handleBlogClick(blog.id)}
              >
                <td>{blog.title}</td>
                <td>{blog.category}</td>
                <td>{blog.tags || 'No tags'}</td>
                <td>{blog.excerpt}</td>
                <td>{blog.status}</td>
                <td>{blog.published_at ? new Date(blog.published_at).toLocaleDateString() : 'Not published'}</td>
                <td>{new Date(blog.created_at).toLocaleDateString()}</td>
                <td>{new Date(blog.updated_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
};

export default Blog;
