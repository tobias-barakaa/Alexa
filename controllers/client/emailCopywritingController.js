const knex = require("../../db/db.js");
const paypal = require('paypal-rest-sdk');

require('dotenv').config(); 


// const emailCopywritingCreate = async (req, res) => {
//     try {
//       const { projectType, projectDescription, duration, wordCount, cost } = req.body;
  
//       let userId = null;
//       if (req.user && req.user.userId) {
//         userId = req.user.userId;
//       }
  
//       // Prepare the new request object
//       const newRequest = {
//         user_id: userId,
//         project_type: projectType,
//         project_description: projectDescription,
//         duration: duration,
//         word_count: wordCount,
//         cost: cost,
//       };
  
//       // Insert the new email copywriting request and return the inserted ID
//       const [insertedId] = await knex('emailcopywriting')
//         .returning('id')
//         .insert(newRequest);
  
//       // Prepare the response
//       const responseMessage = userId 
//         ? 'Email copywriting request created successfully and associated with your account' 
//         : 'Email copywriting request created successfully. Log in to associate it with your account';
  
//       res.status(201).json({ 
//         message: responseMessage,
//         requestId: insertedId
//       });
  
//     } catch (error) {
//       console.error('Error creating email copywriting request:', error);
//       res.status(500).json({ message: 'Error creating email copywriting request', error: error.message });
//     }
//   };

//   const emailCopywritingCreate = async (req, res) => {
//     try {
//         const { projectType, projectDescription, duration, wordCount, cost } = req.body;

//         // Extract the user ID from the request if the user is logged in
//         let userId = req.user?.userId || null;

//         // Prepare the new request object with default values for missing fields
//         const newRequest = {
//             user_id: userId,
//             project_type: projectType,
//             project_description: projectDescription,
//             duration: duration || '1 day',
//             word_count: wordCount || 300,
//             cost: cost || 0.00,
//             status: 'Pending', // Set default status
//         };

//         // Insert the new email copywriting request and return the inserted ID
//         const [insertedId] = await knex('emailcopywriting')
//             .returning('id')
//             .insert(newRequest);

//         // Prepare the response message
//         const responseMessage = userId 
//             ? 'Email copywriting request created successfully and associated with your account' 
//             : 'Email copywriting request created successfully. Log in to associate it with your account';

//         // Send the response back to the client
//         res.status(201).json({ 
//             message: responseMessage,
//             requestId: insertedId
//         });

//     } catch (error) {
//         console.error('Error creating email copywriting request:', error);
//         res.status(500).json({ message: 'Error creating email copywriting request', error: error.message });
//     }
// };



// PayPal configuration using environment variables
paypal.configure({
    // 'mode': process.env.PAYPAL_MODE, // 'sandbox' or 'live'
    'mode': "sandbox",
    // 'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_id': "AS6T8AQ-ZOe88kViCgP1cmtbReCZUNaVaJ_BJadaZB276PhwBcNz3TS7SM6pcS4YjJyjwuRnJJ0EhH42",
    // 'client_secret': process.env.PAYPAL_CLIENT_SECRET
    'client_secret': "ECJl8We2m-lu_Z3OP6JS4YQuxWyCEBMDxI7DnYrreVMFH-1sqGCKRiD_jC-ivPRbv03YRrzrNyT-VIh2"
});

const emailCopywritingCreate = async (req, res) => {
    try {
        const { projectType, projectDescription, duration, wordCount, cost } = req.body;

        // Extract the user ID from the request if the user is logged in
        let userId = req.user?.userId || null;

        // Prepare the new request object with default values for missing fields
        const newRequest = {
            user_id: userId,
            project_type: projectType,
            project_description: projectDescription,
            duration: duration || '1 day',
            word_count: wordCount || 300,
            cost: cost || 0.00,
            status: 'Pending', // Set default status
        };

        // Initiate PayPal payment
        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:5000/paypal-success",
                "cancel_url": "http://localhost:5000/paypal-cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "Email Copywriting Service",
                        "sku": "001",
                        "price": cost.toFixed(2), // Use cost from the request body
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": cost.toFixed(2) // Use cost from the request body
                },
                "description": "Payment for email copywriting service."
            }]
        };

        // Create PayPal payment
        paypal.payment.create(create_payment_json, async (error, payment) => {
            if (error) {
                console.error('PayPal Payment Error:', error);
                return res.status(500).json({ message: 'PayPal payment creation failed' });
            } else {
                // Redirect the user to PayPal approval URL
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        return res.status(200).json({
                            approval_url: payment.links[i].href
                        });
                    }
                }
            }
        });

    } catch (error) {
        console.error('Error creating email copywriting request:', error);
        res.status(500).json({ message: 'Error creating email copywriting request', error: error.message });
    }
};

// Route for handling PayPal success
const paypalSuccess = async (req, res) => {
  const { PayerID, paymentId } = req.query;
  const execute_payment_json = {
      "payer_id": PayerID,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "1.00" // Replace with dynamic total amount from the request
          }
      }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, async (error, payment) => {
      if (error) {
          console.error('PayPal Execution Error:', error.response);
          return res.redirect('http://localhost:5173/failed');
      } else {
          console.log('Payment successful:', payment);
          try {
              // Save the payment details and request info to your database
              await knex('emailcopywriting')
                  .insert({
                      user_id: req.user?.userId || null, // replace with actual user ID
                      project_type: "Email Copywriting", // replace with actual project type
                      project_description: "Description", // replace with actual description
                      duration: "1 day", // replace with actual duration
                      word_count: 300, // replace with actual word count
                      cost: 1.00, // replace with actual cost
                      status: 'Paid'
                  });
              return res.redirect('http://localhost:5173/success');
          } catch (dbError) {
              console.error('Error saving to database:', dbError);
              return res.redirect('http://localhost:5173/failed');
          }
      }
  });
}


  
  

//   const getEmailCopyWriting = async (req, res) => {
//     try {
//       // Ensure the user is authenticated
//       const userId = req.user && req.user.userId;
  
//       if (!userId) {
//         return res.status(403).json({ message: 'User not authenticated. Access denied.' });
//       }
  
//       const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000); // Calculate the time 30 minutes ago
  
//       // Query for requests created by the user within the last 30 minutes
//       const recentRequests = await knex('emailcopywriting')
//         .where('user_id', userId)  // Filter by user ID
//         .andWhere('created_at', '>=', thirtyMinutesAgo) // Filter by creation time
//         .select('*');
  
//       if (recentRequests.length > 0) {
//         // If there are recent requests, return them
//         return res.status(200).json({
//           message: 'Recent email copywriting requests retrieved successfully.',
//           requests: recentRequests,
//         });
//       } else {
//         // If no recent requests, return all requests created by the user
//         const allUserRequests = await knex('emailcopywriting')
//           .where('user_id', userId) // Filter by user ID
//           .select('*');
          
//         return res.status(200).json({
//           message: 'No recent requests found. Returning all requests created by the user.',
//           requests: allUserRequests,
//         });
//       }
//     } catch (error) {
//       console.error('Error retrieving email copywriting requests:', error);
//       res.status(500).json({ message: 'Error retrieving email copywriting requests', error: error.message });
//     }
//   };

  const getEmailCopyWriting = async (req, res) => {
    const user_id = req.user?.userId;

  if (!user_id) {
    return res.status(401).json({ error: 'Unauthorized: User not logged in' });
  }

  try {
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);

    const recentRequests = await knex('emailcopywriting')
      .where('user_id', user_id)
      .andWhere('created_at', '>', thirtyMinutesAgo)
      .orderBy('created_at', 'desc');

    res.json({
      message: 'Recent email copywriting requests retrieved successfully',
      requests: recentRequests
    });
  } catch (error) {
    console.error('Error retrieving recent email copywriting requests:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the requests' });
  }
  }
  
  

//   const getEmailCopyWriting = async (req, res) => {
//     try {
//       let query = knex('emailcopywriting');
  
//       // If user is logged in, only fetch their requests
//       if (req.user && req.user.userId) {
//         query = query.where('user_id', req.user.userId);
//       } else {
//         // For non-logged in users, return an error
//         return res.status(401).json({ message: 'Please log in to view your requests' });
//       }
  
//       const requests = await query.select();
  
//       res.status(200).json({
//         message: 'Email copywriting requests retrieved successfully',
//         requests: requests
//       });
  
//     } catch (error) {
//       console.error('Error fetching email copywriting requests:', error);
//       res.status(500).json({ message: 'Error fetching email copywriting requests', error: error.message });
//     }
//   }
  

// const getEmailCopyWriting = async (req, res) => {
//     try {
//       const now = new Date();
//       const thirtyMinutesAgo = new Date(now - 30 * 60 * 1000); // 30 minutes ago
  
//       let query = knex('emailcopywriting');
  
//       // If user is logged in, only fetch their requests
//       if (req.user && req.user.userId) {
//         query = query
//           .where('user_id', req.user.userId)
//           .andWhere('created_at', '<', thirtyMinutesAgo); // Filter by creation time
//       } else {
//         // For non-logged in users, return an error
//         return res.status(401).json({ message: 'Please log in to view your requests' });
//       }
  
//       const requests = await query.select();
  
//       if (requests.length === 0) {
//         return res.status(404).json({ message: 'No email copywriting requests found.' });
//       }
  
//       res.status(200).json({
//         message: 'Email copywriting requests retrieved successfully',
//         requests: requests,
//       });
//     } catch (error) {
//       console.error('Error fetching email copywriting requests:', error);
//       res.status(500).json({ message: 'Error fetching email copywriting requests', error: error.message });
//     }
//   };
  


module.exports = {emailCopywritingCreate, getEmailCopyWriting, paypalSuccess}
