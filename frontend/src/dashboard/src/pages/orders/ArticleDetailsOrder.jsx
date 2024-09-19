import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetOrderByIdQuery, useGetPayPalClientIdQuery, usePayOrderMutation } from '../../../../slices/client/orderArticleApiSlice';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { DollarSign, FileText, Clock, Star, Globe, AlertCircle, Hash, Clipboard, Loader } from 'lucide-react';
import './ArticleDetailsOrder.css';
import { useSelector } from 'react-redux';

const ArticleDetailsOrder = () => {
  const { id } = useParams();
  const { data: orderDetails, isLoading, isError } = useGetOrderByIdQuery(id);
  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const { data: paypal, isLoading: loadingPaypal, error: errorPaypal } = useGetPayPalClientIdQuery();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loadingPaypal && !errorPaypal && paypal?.clientId && !window.paypal) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': paypal.clientId,
            currency: 'USD',
          },
        });
        paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
      };
      loadPaypalScript();
    }
  }, [paypal, paypalDispatch, loadingPaypal, errorPaypal]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading article details.</div>;

  if (!orderDetails || !orderDetails.order) {
    return <div>No order details found.</div>;
  }

  const { order } = orderDetails;

  function createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: order.cost,
          },
        },
      ],
    });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(details => {
      console.log('Transaction completed by ' + details.payer.name.given_name);
      // Add logic to handle post-payment actions
    });
  }

  function onError(error) {
    console.error('PayPal Checkout onError', error);
  }

  function onApproveTest() {
    console.log('Test Pay Order button clicked');
    // Add test logic here
  }

  return (
    <div className="article-details-container">
      <div className="details-section">
        <h2>{order.title}</h2>
        <div className="detail-item">
          <FileText size={20} />
          <span><strong>Description:</strong> {order.description}</span>
        </div>
        <div className="detail-item">
          <Hash size={20} />
          <span><strong>Keywords:</strong> {order.keywords}</span>
        </div>
        <div className="detail-item">
          <Clipboard size={20} />
          <span><strong>Word Count:</strong> {order.word_count}</span>
        </div>
        <div className="detail-item">
          <Clock size={20} />
          <span><strong>Duration:</strong> {order.duration}</span>
        </div>
        <div className="detail-item">
          <Star size={20} />
          <span><strong>Complexity:</strong> {order.complexity}</span>
        </div>
        <div className="detail-item">
          <Globe size={20} />
          <span><strong>Language:</strong> {order.language}</span>
        </div>
        <div className="detail-item">
          <Clipboard size={20} />
          <span><strong>Quantity:</strong> {order.quantity}</span>
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
            {order.is_paid ? (
              <span className="status-badge status-paid">Paid</span>
            ) : (
              <span className="status-badge status-pending">Payment Pending</span>
            )}
            {!order.is_paid && (
              <div>
                {loadingPay && <Loader />}
                {isPending ? (
                  <Loader />
                ) : (
                  <div>
                    <button 
                      onClick={onApproveTest}
                      style={{ marginBottom: '10px' }}
                    >
                      Test Pay Order
                    </button>
                    <PayPalButtons
                      createOrder={createOrder}
                      onApprove={onApprove}
                      onError={onError}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsOrder;
