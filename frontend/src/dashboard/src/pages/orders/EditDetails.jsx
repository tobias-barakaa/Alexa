import { Loader, Plus, RefreshCw } from 'lucide-react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import "./EditDetails.css";
import { useGetPayPalClientIdQuery, useGetRecentArticleByIdQuery, useGetUpdatedOrderByIdQuery, usePayOrderMutation } from '../../../../slices/client/orderArticleApiSlice';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditDetails = () => {
  const { id } = useParams();
  const { data: updatedData, isError, isLoading } = useGetUpdatedOrderByIdQuery(id);
  const { data: recentData, isError: recentDataError, isLoading: recentDataLoading } = useGetRecentArticleByIdQuery(id);
  const [isRefundProcessed] = useState(false);
  const [message] = useState(''); 

  // PayPal client ID and mutation for handling payments
  const { data: paypal, isLoading: loadingPaypal, error: errorPaypal } = useGetPayPalClientIdQuery();
  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  
  const [order, setOrder] = useState(null);
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const costUpdates = updatedData?.costUpdates?.length ? updatedData.costUpdates : [{ adjustment_type: "Expired" }];
  const additionalPayment = costUpdates[0].adjustment_amount > 0 ? costUpdates[0].adjustment_amount : 0;

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
      if (order && !order.is_paid && additionalPayment > 0) {
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [order, paypal, paypalDispatch, loadingPaypal, errorPaypal, additionalPayment]);

  useEffect(() => {
    if (recentData?.article) {
      setOrder(recentData.article);
    }
  }, [recentData]);

  // PayPal order creation
  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: additionalPayment, // Payment amount
            },
          },
        ],
      })
      .then((orderId) => orderId);
  }

  // Handling PayPal order approval
  async function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        const response = await payOrder({
          orderId: order.id,
          details: {
            transactionId: details.id,
            payerId: details.payer.payer_id,
            status: details.status,
            email: details.payer.email_address,
            amount: details.purchase_units[0].amount.value,
          },
        });

        if (response?.data?.message === 'Order inserted and article updated successfully') {
          setOrder((prevOrder) => ({
            ...prevOrder,
            is_paid: true,
            status: 'COMPLETED',
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
      const response = await payOrder({
        orderId: order.id,
        details: {
          transactionId: 'TEST123456',
          payerId: 'TESTPAYERID',
          status: 'COMPLETED',
          email: 'testpayer@example.com',
          amount: additionalPayment,
        },
      });

      if (response?.data?.message === 'Order inserted and article updated successfully') {
        setOrder((prevOrder) => ({
          ...prevOrder,
          is_paid: true,
        }));
        alert('Test payment success');
      } else {
        throw new Error('Unexpected response from payment API');
      }
    } catch (error) {
      console.error('Test payment error:', error);
      alert('Test payment failed. Please try again.');
    }
  }

  // Handle loading and error states
  if (isLoading || recentDataLoading) {
    return <div>Loading...</div>;
  }

  if (isError || recentDataError) {
    return (
      <div className="error-container">
        <div className="error-message">
          Cannot edit unless there’s a change in cost
        </div>
      </div>
    );
  }

  const isRefund = costUpdates[0].adjustment_type === 'refund';

  return (
    <div className="edit-details-container">
      <div className="left-side">
        <h2 className="section-title">Edit Details</h2>
        <div className="details-grid">
          {Object.entries(recentData.article).map(([key, value]) => (
            <div key={key} className="detail-item">
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
          {costUpdates.map((update) => (
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
          ))}
        </div>

        <div className="additional-actions">
          {!isRefundProcessed && !isRefund && (
            <>
              <button className="action-button">
                <Plus size={20} />
                Additional Amount to Pay
              </button>

              <button className="action-button">
                <RefreshCw size={20} />
                Process Cost Update
              </button>
            </>
          )}

          {/* PayPal payment section */}
          {additionalPayment > 0 && (
            <div className="paypal-button">
              <h4>Please pay the additional amount: ${additionalPayment}</h4>
              <button onClick={onApproveTest} style={{ marginBottom: '10px' }}>
                Test Pay Order
              </button>
              <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError} />
              {loadingPay && <Loader />}
              {isPending && <Loader />}
            </div>
          )}

          {/* Refund processing */}
          {isRefund && !isRefundProcessed && (
            <p className="success-message">
              Successfully updated your Order, and your money has been refunded to your account.
            </p>
          )}

          {/* Success message after refund */}
          {isRefundProcessed && (
            <div className="success-message">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditDetails;
