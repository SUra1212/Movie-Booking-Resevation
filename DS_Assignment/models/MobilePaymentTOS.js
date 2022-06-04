const mongoose = require('mongoose');

const mpostSchema = new mongoose.Schema({
    //variables
    MobilePaymentCompanyID: {
        type: String,
        requred: true
    },
    MobileNumber: {
        type: String,
        required: true
    },
    sixdigitNo: {
        type: String,
        required: true
    },
    AmountTOBECharged: {
        type: Number,
        required: true
    },
    Date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('MPosts', mpostSchema);