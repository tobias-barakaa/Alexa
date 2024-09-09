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
      const { product, price, currency } = req.body;
  
      if (!product || !price || !currency) {
        return res.status(400).send({ error: "Missing product, price, or currency." });
      }
  
      const priceFormatted = parseFloat(price).toFixed(2); // Format price
  
      const create_payment_json = {
        intent: "sale",
        payer: { payment_method: "paypal" },
        redirect_urls: {
          return_url: "http://localhost:5173/paypal/success", // Change this to your frontend's success URL
          cancel_url: "http://localhost:5173/paypal/cancel"  // Change this to your frontend's cancel URL
        },
        transactions: [
          {
            item_list: {
              items: [
                {
                  name: product,
                  sku: "001",
                  price: priceFormatted,
                  currency: currency,
                  quantity: 1
                }
              ]
            },
            amount: {
              currency: currency,
              total: priceFormatted
            },
            description: product
          }
        ]
      };
  
      paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
          console.error("PayPal Payment Error:", error.response);
          res.status(500).send({ error: error.response.message });
        } else {
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

  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD", // Match the currency from the payProduct request
          total: "25.00"  // This should match the total amount for your product
        }
      }
    ]
  };

  paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
    if (error) {
      console.error(error.response);
      res.status(500).send({ error: error.response.message });
    } else {
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
