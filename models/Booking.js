const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carsAvailable'
    },
    bookingType: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true
    },
    modeOfPayment: {
        type: [String],
        required: true
    },
    bookingPrice: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('booking', BookingSchema)
