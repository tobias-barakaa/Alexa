// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const SuccessPage = () => {
//   const [message, setMessage] = useState('Processing your payment...');
//   const location = useLocation();

//   // Helper function to extract query parameters from the URL
//   const getQueryParams = (search) => {
//     return new URLSearchParams(search);
//   };

//   useEffect(() => {
//     const queryParams = getQueryParams(location.search);
//     const payerId = queryParams.get('PayerID');
//     const paymentId = queryParams.get('paymentId');

//     if (payerId && paymentId) {
//       fetch(`http://localhost:5000/api/paypal/success?PayerID=${payerId}&paymentId=${paymentId}`)
//         .then(response => response.json())
//         .then(data => {
//           if (data.error) {
//             setMessage(`Payment failed: ${data.error}`);
//           } else {
//             setMessage('Payment Successful!');
//           }
//         })
//         .catch(error => {
//           setMessage(`Error: ${error.message}`);
//         });
//     } else {
//       setMessage('Missing PayerID or PaymentID in URL.');
//     }
//   }, [location.search]);

//   return (
//     <div className="success-page">
//       <h1>{message}</h1>
//     </div>
//   );
// };

// export default SuccessPage;
import React from 'react'

const SuccessPage = () => {
  return (
    <div>
        <h2>Payment Successful!</h2>
      
    </div>
  )
}

export default SuccessPage
