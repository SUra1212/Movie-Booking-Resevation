const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cardno: {
        type: String,
        required: true
    },
    cvcno: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
})

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;