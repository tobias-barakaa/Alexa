import { useParams } from 'react-router-dom';
import { useGetOrderByIdQuery } from '../../../../slices/client/orderArticleApiSlice';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { DollarSign, FileText, Clock, Star, Globe, AlertCircle } from 'react-lucide';

const ArticleDetailsOrder = () => {
  const { id } = useParams(); // Get the article ID from the URL
  console.log(id);
  const { data: orderDetails, isLoading, isError } = useGetOrderByIdQuery(id); 

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading article details.</div>;

  // Check if orderDetails is available before trying to access its properties
  if (!orderDetails) {
    return <div>No order details found.</div>;
  }

  return (
    <>
     
      <div className="article-details-container">
        <div className="details-section">
          <h2>{orderDetails.title}</h2>
          <div className="detail-item">
            <FileText size={20} />
            <span>{orderDetails.description}</span>
          </div>
          <div className="detail-item">
            <Clock size={20} />
            <span>{orderDetails.duration}</span>
          </div>
          <div className="detail-item">
            <Star size={20} />
            <span>{orderDetails.complexity}</span>
          </div>
          <div className="detail-item">
            <Globe size={20} />
            <span>{orderDetails.language}</span>
          </div>
          <div className="detail-item">
            <AlertCircle size={20} />
            <span className={`status-badge status-${orderDetails.status.toLowerCase()}`}>
              {orderDetails.status}
            </span>
          </div>
        </div>
        <div className="payment-section">
          <h2>Payment Details</h2>
          <div className="payment-info">
            <div className="cost">
              <DollarSign size={24} />
              {orderDetails.cost}
            </div>
            <div className="payment-status">
              {orderDetails.is_paid ? "Paid" : "Payment Pending"}
            </div>
          </div>
          {!orderDetails.is_paid && (
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.orderDetails.create({
                  purchase_units: [
                    {
                      amount: {
                        value: orderDetails.cost,
                      },
                    },
                  ],
                });
              }}
              
            />
          )}
        </div>
      </div>
    </>
  );
};
export default ArticleDetailsOrder;
