import { useGetBlogsQuery } from '../../../slices/admin/blogApiSlice';
import '../styles/pages/Blog.css';

const Blog = () => {

  const { data, isLoading, isError } = useGetBlogsQuery();
  const handleRowClick = (blog) => {
    // Handle click event (e.g., navigate to blog detail page)
    console.log('Blog clicked:', blog);
  };

 
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading blogs</div>;

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      {data.blogs && data.blogs.length > 0 ? (
        <table className="blog-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tags</th>
              <th>Excerpt</th>
              <th>Status</th>
              <th>Published</th>
              <th>Author</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.blogs.map((blog) => (
              <tr key={blog.id} onClick={() => handleRowClick(blog)} className="blog-row">
                <td>{blog.title}</td>
                <td>{blog.tags}</td>
                <td>{blog.excerpt}</td>
                <td>{blog.status}</td>
                <td>{blog.published_at || 'Not published'}</td>
                <td>{blog.user_first_name} {blog.user_last_name}</td>
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