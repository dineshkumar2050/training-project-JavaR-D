const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarsAvailableSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    bookingType: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        required: true
    },
    priceByType: [
        {
            carType: {
                type: String,
                required: true
            },
            pricePerKm: {
                type: Number,
                required: true
            }
        }
    ],
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('carsAvailable', CarsAvailableSchema);
