import { useLocation, useNavigate } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";
import "./Payment.css";
import { useCreateEmailCopywritingMutation } from "../../../slices/client/emailCopywritingApiSlice";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [createEmailCopywriting] = useCreateEmailCopywritingMutation();
  const formData = location.state?.formData;
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(import.meta.env.VITE_BASE_URL, "meet")

  const handlePaymentSuccess = async (details, data) => {
    try {
      await createEmailCopywriting(formData).unwrap();
      alert("Payment and request submitted successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("There was an error submitting your request.");
    }
  };

  return (
    <div className="payment-container">
      <h1>Payment Summary</h1>
      <div className="payment-info">
        <p><strong>Username:</strong> {userInfo.username}</p>
        <p><strong>Balance:</strong> ${userInfo.balance}</p>
        <p><strong>Cost:</strong> ${formData.cost}</p>
      </div>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: formData.cost.toFixed(2), // Set the amount to the cost of the formData
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          return actions.order.capture().then(handlePaymentSuccess);
        }}
        onError={(err) => {
          console.error("PayPal Checkout onError", err);
          alert("There was an error processing the payment. Please try again.");
        }}
      />
    </div>
  );
};

export default Payment;
