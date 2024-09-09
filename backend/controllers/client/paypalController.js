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
  const { product, price, currency } = req.body;

  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal"
    },
    redirect_urls: {
      return_url: "http://localhost:3000/api/success",
      cancel_url: "http://localhost:3000/api/cancel"
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: product,
              sku: "001",
              price: price,
              currency: currency, // Use dynamic currency here
              quantity: 1
            }
          ]
        },
        amount: {
          currency: currency, // Ensure currency consistency
          total: price
        },
        description: product
      }
    ]
  };

  paypal.payment.create(create_payment_json, (error, payment) => {
    if (error) {
      console.error(error.response);
      res.status(500).send({ error: error.response.message });
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
}

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
