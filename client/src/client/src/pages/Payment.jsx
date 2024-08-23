import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";
import { useCreateEmailCopywritingMutation } from "../../../slices/client/emailCopywritingApiSlice";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [createEmailCopywriting] = useCreateEmailCopywritingMutation();
  const formData = location.state?.formData;
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handlePayment = async () => {
    // Here, you would normally integrate with a payment gateway.
    // For simplicity, we'll assume the payment is successful and then submit the form data.

    try {
      await createEmailCopywriting(formData).unwrap();
      alert('Payment and request submitted successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('There was an error submitting your request.');
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
      <button onClick={handlePayment} className="payment-button">Proceed to Payment</button>
    </div>
  );
};

export default Payment;
