const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
// const jwt = require('jsonwebtoken');
// const config = require('config');

const Booking = require('../../models/Booking');

router.post('/',auth, async (req,res) => {
    try{
        const { user, car, bookingType, paymentStatus, modeOfPayment, bookingPrice } = req.body;

        const newBooking =  new Booking({
            user,
            car,
            bookingType,
            paymentStatus,
            modeOfPayment,
            bookingPrice
        })
        const booking = await newBooking.save();
        res.status(200).json({ data: booking, success: true })
    } catch(err){
        res.status(500).send('Server Error -> ',err.message)
    }
})

module.exports = router;
