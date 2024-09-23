import { Plus, RefreshCw } from 'lucide-react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

import "./EditDetails.css";
import { useGetPayPalClientIdQuery, useGetRecentArticleByIdQuery, useGetUpdatedOrderByIdQuery, usePayOrderMutation } from '../../../../slices/client/orderArticleApiSlice';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditDetails = () => {
  const { id } = useParams();
  const { data: updatedData, isError, isLoading } = useGetUpdatedOrderByIdQuery(id);
  const { data: recentData, isError: recentDataError, isLoading: recentDataLoading } = useGetRecentArticleByIdQuery(id);














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
    if (recent?.article) {
      setOrder(recent.article);
    }
  }, [recent]);

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
        if (response?.data?.message === 'Order inserted and article updated successfully') {
          // Manually update the order state
          setOrder((prevOrder) => ({
            ...prevOrder,
            is_paid: true,  // Update the order's payment status
            status: 'COMPLETED',  // Update order status to 'COMPLETED'
          }));
          alert('Payment success');
        } else {
          console.error('Unexpected response structure:', response); // Log unexpected response
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



















  // Handle loading and error states
  if (isLoading || recentDataLoading) {
    return <div>Loading...</div>;
  }

  if (isError || recentDataError) {
    return (
      <div className="error-container">
        <div className="error-message">
          Cannot edit unless There is a change in cost 
        </div>
      </div>
    );
  }

  // Handle expired state for cost updates
  const costUpdates = updatedData?.costUpdates?.length ? updatedData.costUpdates : [{ adjustment_type: "Expired" }];

  // Recent article data
  const articleData = recentData?.article || {
    title: "N/A",
    description: "N/A",
    keywords: "N/A",
    word_count: "N/A",
    duration: "N/A",
    complexity: "N/A",
    language: "N/A",
    quantity: "N/A",
    cost: "N/A"
  };



  return (
    <div className="edit-details-container">
        <div className="left-side">
          <h2 className="section-title">Edit Details</h2>
          <div className="details-grid">
            {Object.entries(articleData).map(([key, value]) => (
              <div key={key} className="detail-itemm">
                <div className="detail-header">
                  <span className="detail-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                </div>
                <div className="detail-value">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="right-side">
          <div className="cost-updates">
            <h3 className="section-title">Cost Updates</h3>
            {costUpdates[0].adjustment_type === "Expired" ? (
              <div className="cost-update-item">
                <span className="cost-update-id">Expired</span>
              </div>
            ) : (
              costUpdates.map((update) => (
                <div key={update.id} className="cost-update-item">
                  <div className="cost-update-header">
                    <span className="cost-update-id">ID: {update.id}</span>
                    <span className={`cost-update-status ${update.payment_status?.toLowerCase()}`}>
                      {update.payment_status}
                    </span>
                  </div>
                  <div className="cost-details">
                    <div className="cost-detail">
                      <span className="cost-label">Original Cost:</span>
                      <span className="cost-value">${update.original_cost}</span>
                    </div>
                    <div className="cost-detail">
                      <span className="cost-label">New Cost:</span>
                      <span className="cost-value">${update.new_cost}</span>
                    </div>
                    <div className="cost-detail">
                      <span className="cost-label">Adjustment:</span>
                      <span className="cost-value adjustment">
                        ${update.adjustment_amount} ({update.adjustment_type})
                      </span>
                    </div>
                  </div>
                  <div className="update-timestamp">
                    Updated: {new Date(update.updated_at).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="additional-actions">
            <button className="action-button">
              <Plus size={20} />
              Additional Amount to Pay
            </button>

            <button className="action-button">
              <RefreshCw size={20} />
              Process Cost Update
            </button>

           {/* PayPal Button for processing cost update */}
            <div className="paypal-button">
              <h4>Process Payment for Updated Cost</h4>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError}
              />
            </div>

          </div>
        </div>
      </div>
  );
};

export default EditDetails;
