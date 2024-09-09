const knex = require("../../db/db.js");
const paypal = require("paypal-rest-sdk");
require('dotenv').config();

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;

paypal.configure({
  mode: "sandbox", // "sandbox" for testing or "live" for production
  client_id: PAYPAL_CLIENT_ID,
  client_secret: PAYPAL_CLIENT_SECRET
});

const payProduct = async (req, res) => {
    try {
      const { product, price, currency } = req.body;
  
      if (!product || !price || !currency) {
        return res.status(400).send({ error: "Missing product, price, or currency." });
      }
  
      const priceFormatted = parseFloat(price).toFixed(2); 
  
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
                  name: product,
                  sku: "001",
                  price: priceFormatted, // Ensure price is correctly formatted
                  currency: currency,
                  quantity: 1
                }
              ]
            },
            amount: {
              currency: currency,
              total: priceFormatted // Ensure total is correctly formatted
            },
            description: product
          }
        ]
      };
  
      console.log("Create Payment JSON:", create_payment_json); // Debugging
  
      paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
          console.error("PayPal Payment Error:", error.response);
          res.status(500).send({ error: error.response.message });
        } else {
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
          currency: "USD", // Ensure this matches the currency from payProduct
          total: "25.00"
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
}

const cancelPage = async (req, res) => {
  res.send("Payment Cancelled");
}

module.exports = {
  payProduct,
  successPage,
  cancelPage
};
