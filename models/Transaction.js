const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carsAvailable'
    },
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'booking'
    },
    bookingType: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true
    },
    paymentInfo: {
        cardNumber: {
            type: Number
        },
        cvvNumber: {
            type: Number
        },
        expDate: {
            type: String
        }
    },
    modeOfPayment: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('transaction', TransactionSchema);
