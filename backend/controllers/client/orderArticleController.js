const knex = require("../../db/db.js");
const paypal = require("paypal-rest-sdk");
require('dotenv').config();

// Configure PayPal SDK to use sandbox mode
const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;

paypal.configure({
  mode: "sandbox", // Use "sandbox" for testing
  client_id: PAYPAL_CLIENT_ID, 
  client_secret: PAYPAL_CLIENT_SECRET 
});

const payProduct = async (req, res) => {
    try {
      const userId = req.user.userId;
  
      const { title, description, keywords, word_count, complexity, language, quantity, cost } = req.body;
      console.log(req.body, 'this is the data coming from the frontend');
  
      // Check for missing fields
      if (!title || !description || !keywords || !word_count || !complexity || !language || !quantity || !cost) {
        return res.status(400).send({ error: "Missing required fields." });
      }
  
      // Fetch user
      const user = await knex('users').where('id', userId).first();
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const user_id = user.id;  // Correctly get user ID
  
      const currency = 'USD';
      const priceFormatted = parseFloat(cost).toFixed(2);
  
      // Define the service type (modify as needed based on your logic)
      const serviceType = 'article';  // Example: you can dynamically set this if needed
  
      // Create PayPal payment JSON
      const create_payment_json = {
        intent: "sale",
        payer: { payment_method: "paypal" },
        redirect_urls: {
          return_url: "http://localhost:5173/paypal/success",
          cancel_url: "http://localhost:5173/paypal/cancel"
        },
        transactions: [
          {
            item_list: {
              items: [
                {
                  name: title,
                  sku: "001",
                  price: priceFormatted,
                  currency: currency,
                  quantity: quantity  // Ensure quantity is correctly used
                }
              ]
            },
            amount: {
              currency: currency,
              total: priceFormatted
            },
            description: title
          }
        ]
      };
  
      // Create payment using PayPal SDK
      paypal.payment.create(create_payment_json, async (error, payment) => {
        if (error) {
          console.error("PayPal Payment Error:", error.response);
          res.status(500).send({ error: error.response.message });
        } else {
          // Save payment details
          const paymentData = {
            payment_id: payment.id,
            user_id: user_id,  // Correctly use user_id
            amount: priceFormatted,
            currency: currency,
            status: 'created',
            service_type: serviceType,  // Add service_type to the payments table
            service_data: JSON.stringify({ title, description, keywords, word_count, complexity, language, quantity, cost })
          };
          await knex('payment').insert(paymentData);
  
          // Save order details
          const orderData = {
            title,
            description,
            keywords,
            word_count,
            complexity,
            language,
            quantity,
            user_id,
            cost,
            payment_id: payment.id,
            status: 'pending',
            created_at: new Date(),
            updated_at: new Date()
          };
          await knex('order_articles').insert(orderData);
  
          console.log('Payment and Order data saved:', paymentData, orderData);
  
          // Redirect user to PayPal's approval URL
          const approval_url = payment.links.find(link => link.rel === "approval_url").href;
          res.json({ approval_url });
        }
      });
  
    } catch (err) {
      console.error("Error in payProduct:", err);
      res.status(500).send({ error: "Server error while creating PayPal order." });
    }
  };
  
  
    


  const successPage = async (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  if (!payerId || !paymentId) {
    return res.status(400).send({ error: "Missing PayerID or paymentId." });
  }

  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD", // Match the currency used in payProduct
          total: "25.00"  // This should match the total amount for your product
        }
      }
    ]
  };

  paypal.payment.execute(paymentId, execute_payment_json, async (error, payment) => {
    if (error) {
      console.error("PayPal Payment Execute Error:", error.response);
      return res.status(500).send({ error: error.response.message });
    } else {
      // Payment was successful; update order status or perform further actions
      await knex('order_articles')
        .where('payment_id', paymentId)
        .update({ status: 'completed', updated_at: new Date() });

      res.send("Payment Successful");
    }
  });
};

  
const cancelPage = async (req, res) => {
  res.send("Payment Cancelled");
};

module.exports = {
  payProduct,
  successPage,
  cancelPage
};
