const knex = require("../../db/db.js");


const {PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET} = process.env;

paypal.configure({
    mode: "sandbox",
    client_id: PAYPAL_CLIENT_ID,
    client_secret: PAYPAL_CLIENT_SECRET
}); 

const payProduct = async (req, res) => {
    const {product, price, currency} = req.body;
    const create_payment_json = {
        intent: "sale",
        payer: {
            payment_method: "paypal"
        },
        "payer_info": {
            "email": "tobiasbarakan@gmail.com",
            "first_name": "Tobias",
            "last_name": "Barakan",
            "payer_id": "Tobias Barakan",

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
                            currency: currency,
                            quantity: 1
                        }
                    ]
                },
                amount: {
                    currency: currency,
                    total: price
                },
                description: product
            }
        ]
    };

    paypal.payment.create(create_payment_json, (error, payment) => {
        if(error){
            throw error;
        } else {
            for(let i = 0; i < payment.links.length; i++){
                if(payment.links[i].rel === "approval_url"){
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
                    currency: "USD",
                    total: "25.00"
                }
            }
        ]
    };

    paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
        if(error){
            throw error;
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
}