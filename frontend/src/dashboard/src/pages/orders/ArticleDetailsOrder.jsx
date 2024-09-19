import { useParams } from 'react-router-dom';
import { useGetOrderByIdQuery } from '../../../../slices/client/orderArticleApiSlice';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { DollarSign, FileText, Clock, Star, Globe, AlertCircle, Hash, Clipboard } from 'lucide-react';
import './ArticleDetailsOrder.css';

const ArticleDetailsOrder = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const { data: orderDetails, isLoading, isError } = useGetOrderByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading article details.</div>;

  if (!orderDetails || !orderDetails.order) {
    return <div>No order details found.</div>;
  }

  const { order } = orderDetails;

  return (
    <div className="article-details-container">
      <div className="details-section">
        <h2>{order.title}</h2>
        <div className="detail-item">
          <FileText size={20} />
          <span><span><strong> Description: </strong></span> {order.description}</span>
        </div>
        <div className="detail-item">
          <Hash size={20} />
          <span><span><strong> Keywords: </strong></span> {order.keywords}</span>
        </div>
        <div className="detail-item">
          <Clipboard size={20} />
          <span><span><strong> Word Count: </strong></span> {order.word_count}</span>
        </div>
        <div className="detail-item">
          <Clock size={20} />
          <span><span><strong> Duration: </strong></span> {order.duration}</span>
        </div>
        <div className="detail-item">
          <Star size={20} />
          <span><span><strong> Complexity: </strong></span> {order.complexity}</span>
        </div>
        <div className="detail-item">
          <Globe size={20} />
          <span><span><strong> Language: </strong></span> {order.language}</span>
        </div>
        <div className="detail-item">
          <Clipboard size={20} />
          <span><span><strong> Quantity: </strong></span> {order.quantity}</span>
        </div>
        <div className="detail-item">
          <AlertCircle size={20} />
          <span className={`status-badge status-${order.status.toLowerCase()}`}>
            {order.status}
          </span>
        </div>
      </div>
      <div className="payment-section">
        <h2>Payment Details</h2>
        <div className="payment-info">
          <div className="cost">
            <DollarSign size={24} />
            {order.cost}
          </div>
          <div className="payment-status">
            {order.is_paid ? "Paid" : "Payment Pending"}
          </div>
        </div>
        {!order.is_paid && (
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: order.cost,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(details => {
                console.log('Transaction completed by ' + details.payer.name.given_name);
                // Add logic to handle post-payment actions, e.g., updating the order status
              });
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ArticleDetailsOrder;
