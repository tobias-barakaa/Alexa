import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useGetBlogsQuery } from '../../../slices/admin/blogApiSlice';
import { setBlogs } from '../../../slices/admin/blogSlice';
import '../styles/pages/Blog.css';

const Blog = () => {

  const { data, isLoading, isError } = useGetBlogsQuery();

 
//   useEffect(() => {
//     console.log('Current blogList:', blogList);
//   }, [blogList]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading blogs</div>;

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      {data.blogs && data.blogs.length > 0 ? (
        data.blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <h2>{blog.title}</h2>
            <p>Tags: {blog.tags}</p>
            <p>Excerpt: {blog.excerpt}</p>
            <p>Status: {blog.status}</p>
            <p>Published: {blog.published_at || 'Not published'}</p>
            <p>Author: {blog.user_first_name} {blog.user_last_name}</p>
            <p>Created: {new Date(blog.created_at).toLocaleDateString()}</p>
            <p>Updated: {new Date(blog.updated_at).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
};

export default Blog;
