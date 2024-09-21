// components/client/ArticleDetailsOrder.jsx

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetOrderByIdQuery,
  useGetPayPalClientIdQuery,
  usePayOrderMutation,
} from '../../../../slices/client/orderArticleApiSlice';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import {
  DollarSign,
  FileText,
  Clock,
  Star,
  Globe,
  AlertCircle,
  Hash,
  Clipboard,
  Loader,
} from 'lucide-react';
import './ArticleDetailsOrder.css';

const ArticleDetailsOrder = () => {
  const { id } = useParams();
  console.log('Order ID:', id);

  // Fetching order details using RTK Query
  const { data: orderDetails, isLoading, isError } = useGetOrderByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  
  console.log('orderDetails:', orderDetails);

  // PayPal client ID and mutation for handling payments
  const { data: paypal, isLoading: loadingPaypal, error: errorPaypal } = useGetPayPalClientIdQuery();
  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  
  // State for managing order details locally
  const [order, setOrder] = useState(null);
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  // Load PayPal script when necessary
  useEffect(() => {
    if (!loadingPaypal && !errorPaypal && paypal?.clientId && !window.paypal) {
      console.log('Loading PayPal script...');
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
      if (order && !order.is_paid) {
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [order, paypal, paypalDispatch, loadingPaypal, errorPaypal]);

  // Update local order state when orderDetails are fetched
  useEffect(() => {
    if (orderDetails?.article) {
      setOrder(orderDetails.article);
    }
  }, [orderDetails]);

  // PayPal order creation
  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: order.cost,
            },
          },
        ],
      })
      .then((orderId) => orderId);
  }

  // Handling PayPal order approval
  async function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      console.log('PayPal payment details:', details);
  
      try {
        const response = await payOrder({
          orderId: order.id,
          details: {
            transactionId: details.id,  // PayPal transaction ID
            payerId: details.payer.payer_id,  // PayPal payer ID
            status: details.status,  // Payment status
            email: details.payer.email_address,  // Payer's email
            amount: details.purchase_units[0].amount.value,  // Payment amount
          },
        });
  
        console.log('API response from payOrder:', response);
  
        // Check for the success message from the backend
        if (response?.data?.message === 'Order updated successfully') {
          // Manually update the order state since the API does not return the updated order object
          setOrder((prevOrder) => ({
            ...prevOrder,
            is_paid: true,  // Update the order's payment status
            status: 'COMPLETED',  // Update order status to 'COMPLETED'
          }));
          alert('Payment success');
        } else {
          throw new Error('Unexpected response from payment API');
        }
      } catch (error) {
        console.error('PayPal Checkout onApprove error:', error);
        alert('Payment failed. Please try again.');
      }
    });
  }
  
  

  // Handling PayPal payment errors
  function onError(error) {
    console.error('PayPal Checkout onError:', error);
    alert('An error occurred with the payment. Please try again.');
  }

  // Test payment approval handler
  async function onApproveTest() {
    try {
      // Simulate a test payment call
      const response = await payOrder({
        orderId: order.id,
        details: {
          transactionId: 'TEST123456',
          payerId: 'TESTPAYERID',
          status: 'COMPLETED',
          email: 'testpayer@example.com',
          amount: order.cost,
        },
      });
  
      console.log('API response from payOrder:', response); // Log the full response for debugging
  
      // Check if the response contains a success message
      if (response?.data?.message === 'Order updated successfully') {
        // Update the local order state manually if needed
        setOrder((prevOrder) => ({
          ...prevOrder,
          is_paid: true,  // Mark the order as paid
          status: 'COMPLETED',  // Update the status if necessary
        }));
  
        alert('Test payment success');
      } else {
        console.error('Unexpected response structure:', response); // Log any unexpected response
        throw new Error('Unexpected response from payment API');
      }
    } catch (error) {
      console.error('Test payment error:', error);  // Log the error for debugging
      alert('Test payment failed. Please try again.');  // Notify user of payment failure
    }
  }
  
  

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading article details. Please try again later.</div>;
  if (!order) return <div>No order details found.</div>;

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
          <span className={`status-badge status-${order.status.toLowerCase()}`}>{order.status}</span>
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
                    <button onClick={onApproveTest} style={{ marginBottom: '10px' }}>
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
