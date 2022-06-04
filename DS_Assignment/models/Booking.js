const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({

    fname:{
        type:String,
        required:true

    },

    theater:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    seat:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    amount:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Booking', BookingSchema);