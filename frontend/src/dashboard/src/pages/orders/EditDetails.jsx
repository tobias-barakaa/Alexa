import { Plus, RefreshCw } from 'lucide-react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import "./EditDetails.css";
import { useGetRecentArticleByIdQuery, useGetUpdatedOrderByIdQuery } from '../../../../slices/client/orderArticleApiSlice';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const EditDetails = () => {
  const { id } = useParams();
  const { data: updatedData, isError, isLoading } = useGetUpdatedOrderByIdQuery(id);
  const { data: recentData, isError: recentDataError, isLoading: recentDataLoading } = useGetRecentArticleByIdQuery(id);
  const [isRefundProcessed, setRefundProcessed] = useState(false); // State to handle refund status
  const [message, setMessage] = useState(''); // State to display success message

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

  const handleApprovePayment = async (data, actions) => {
    // Handle what happens after payment is approved
    console.log('Payment approved:', data);
    return actions.order.capture().then(async function(details) {
      alert('Transaction completed by ' + details.payer.name.given_name);
      // Perform backend API call to update payment status, if necessary
      try {
        const response = await payOrder({
          orderId: id,
          details: {
            transactionId: details.id,  // PayPal transaction ID
            payerId: details.payer.payer_id,  // PayPal payer ID
            status: details.status,  // Payment status
            email: details.payer.email_address,  // Payer's email
            amount: costUpdates[0].new_cost,  // Payment amount
          },
        });
        if (response?.data?.message === 'Payment processed successfully') {
          setMessage('Payment successful! Your order is updated.');
        } else {
          console.error('Unexpected response:', response);
        }
      } catch (error) {
        console.error('Payment approval error:', error);
      }
    });
  };

  const isRefund = costUpdates[0].adjustment_type === 'refund';

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

          {/* PayPal Button for processing cost update */}
          <div className="paypal-button">
            {costUpdates[0].adjustment_type === "additional_payment" && !isRefundProcessed ? (
              <>
                <h4>Process Payment for Updated Cost</h4>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: {
                          value: costUpdates[0].new_cost || '0.00' // Add dynamic updated cost here
                        }
                      }]
                    });
                  }}
                  onApprove={handleApprovePayment}
                />
              </>
            ) : null}
          </div>

          {/* Handle refund processing */}
          {isRefund && !isRefundProcessed && (
            <p className="success-message">
            Successfully updated your Order, and your money has been refunded to your account
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
