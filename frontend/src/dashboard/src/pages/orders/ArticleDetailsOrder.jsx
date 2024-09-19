import { useParams } from 'react-router-dom';
import { useGetOrderByIdQuery } from '../../../../slices/client/orderArticleApiSlice';

const ArticleDetailsOrder = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const { data: orderDetails, isLoading, isError } = useGetOrderByIdQuery(id); 

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading article details.</div>;

  // Check if orderDetails is available before trying to access its properties
  if (!orderDetails) {
    return <div>No order details found.</div>;
  }

  return (
    <div className="article-details-container">
      <h1>Article Details</h1>
      <div className="article-info">
        <p><strong>Title:</strong> {orderDetails.title}</p>
        <p><strong>Description:</strong> {orderDetails.description}</p>
        <p><strong>Keywords:</strong> {orderDetails.keywords}</p>
        <p><strong>Word Count:</strong> {orderDetails.word_count}</p>
        <p><strong>Duration:</strong> {orderDetails.duration}</p>
        <p><strong>Complexity:</strong> {orderDetails.complexity}</p>
        <p><strong>Language:</strong> {orderDetails.language}</p>
        <p><strong>Quantity:</strong> {orderDetails.quantity}</p>
        <p><strong>Cost:</strong> ${orderDetails.cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ArticleDetailsOrder;
