import { useGetUserBlogQuery } from "../../../slices/client/blogApiSlice";
import "./OrderHistory.css";

const OrderHistory = () => {
  const { data, isLoading, isError, error } = useGetUserBlogQuery();
  const userBlogs = data?.blogs || [];

  console.log(userBlogs);

  if (isLoading) {
    return <div className="loading">Loading order history...</div>;
  }

  if (isError) {
    return <div className="error">Error: {error?.message || "Unknown error"}</div>;
  }

  return (
    <div className="order-history">
      <h1>Order History</h1>
      {userBlogs.length > 0 ? (
        <ul className="order-list">
          {userBlogs.map((blog) => (
            <li key={blog.id} className="order-item">
              <h2>{blog.title}</h2>
              <p>Category: {blog.category_id || "N/A"}</p>
              <p>Word Count: {blog.number_of_words_id || "N/A"}</p>
              <p>Timeframe: {blog.timeframe_id || "N/A"}</p>
              <p>Excerpt: {blog.excerpt || "N/A"}</p>

              <p>Status: {blog.status}</p>
              <p>Created At: {new Date(blog.created_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-orders">No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
