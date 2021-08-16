const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const cars =  require('../../models/CarsAvailable');

router.get('/',auth, async (req,res) => {
    try{
        const allCars = await cars.find();
        res.status(200).json({ success: true,data: allCars })
    } catch(err){
        res.status(500).json({error: err})
    }
})

module.exports = router;
