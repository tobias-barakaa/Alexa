import { Loader, Plus, RefreshCw } from 'lucide-react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import "./EditDetails.css";
import { useGetPayPalClientIdQuery, useGetRecentArticleByIdQuery, useGetUpdatedOrderByIdQuery, usePayOrderMutation } from '../../../../slices/client/orderArticleApiSlice';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditDetails = () => {
  const { id } = useParams();
  const { data: updatedData, isError, isLoading } = useGetUpdatedOrderByIdQuery(id);

// useEffect(() => {
//   if (!isLoading && !isError && updatedData) {
//     console.log(updatedData.original_cost, 'updatedData...fsssssssssssssssssssssssssssssssssssssssssssss.');
//   }
// }, [isLoading, isError, updatedData]);  // Make sure to add dependencies

  const { data: recentData, isError: recentDataError, isLoading: recentDataLoading } = useGetRecentArticleByIdQuery(id);
  
  const [isRefundProcessed] = useState(false);
  const [message] = useState('');
  const [isPaid, setIsPaid] = useState(false); // Track if payment is completed
  const { data: paypal, isLoading: loadingPaypal, error: errorPaypal } = useGetPayPalClientIdQuery();
  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  const [order, setOrder] = useState(null);
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  // const costUpdates = updatedData
  //.costUpdates?.length ? updatedData.costUpdates : [{ adjustment_type: "Expired" }];
  // const isRefund = costUpdates[0].adjustment_type === 'refund';

  // Use `new_cost` instead of `adjustment_amount` if the article is not paid
  // const paymentAmount = recentData?.article?.is_paid ? 0 : updatedData.new_cost;

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

  useEffect(() => {
    if (recentData?.article) {
      setOrder(recentData.article);
      setIsPaid(recentData.article.is_paid); // Set payment status from recentData
    }
  }, [recentData]);

  // PayPal order creation
  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: 0, // Payment amount
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
          setIsPaid(true); // Mark payment as completed
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
          amount: 0,
        },
      });

      if (response?.data?.message === 'Order inserted and article updated successfully') {
        setOrder((prevOrder) => ({
          ...prevOrder,
          is_paid: true,
        }));
        setIsPaid(true); // Mark payment as completed
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
          {updatedData && (
            <div key={updatedData.id} className="cost-update-item">
              <div className="cost-update-header">
                <span className="cost-update-id">ID: {updatedData.id}</span>
                <span className={`cost-update-status ${updatedData.original_cost}`}>
                  {updatedData.original_cost}
                </span>
              </div>
              <div className="cost-details">
                <div className="cost-detail">
                  <span className="cost-label">Original Cost:</span>
                  <span className="cost-value">${updatedData.original_cost}</span>
                </div>
                <div className="cost-detail">
                  <span className="cost-label">New Cost:</span>
                  <span className="cost-value">${updatedData.new_cost}</span>
                </div>
                <div className="cost-detail">
                  <span className="cost-label">Adjustment:</span>
                  <span className="cost-value adjustment">
                    $({updatedData.top_up_amount | updatedData.refund_amount }) {updatedData?.refund}
                  </span>
                </div>
              </div>
              <div className="update-timestamp">
                Updated: {new Date(updatedData.updated_at).toLocaleString()}
              </div>
            </div>
          )}
        </div>

        {/* Display buttons only if not paid and refund is not involved */}
       
          <div className="additional-actions">
            <button className="action-button">
              <Plus size={20} />
              Additional Amount to Pay
            </button>

            <button className="action-button">
              <RefreshCw size={20} />
              Process Cost Update
            </button>

            {/* PayPal payment section */}
           
              <div className="paypal-button">
                <h4>Please pay the additional amount: $</h4>
                <button onClick={onApproveTest} style={{ marginBottom: '10px' }}>
                  Test Pay Order
                </button>
                <span className="cost-value adjustment">
  $({updatedData.top_up_amount || updatedData.refund_amount}) {updatedData?.refund}
</span>

{updatedData && updatedData.refund === "Refund" ? (
  "" // Don't show PayPal buttons if a refund is happening
) : (
  <>
    <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError} />
    {(loadingPay || isPending) && <Loader />}
  </>
)}

                
              </div>
          </div>

        {isPaid && (
          <p className="success-message">
            Thank you! Your payment has been completed.
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
  );
};

export default EditDetails;
