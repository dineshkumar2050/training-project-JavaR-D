const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const checkObjectId = require('../../../middleware/checkObjectId');

const cars =  require('../../../models/CarsAvailable');

router.get('/',auth, async (req,res) => {
    try{
        const allCars = await cars.find();
        res.status(200).json({ success: true,data: allCars })
    } catch(err){
        res.status(500).json({error: err})
    }
})

router.post('/', auth, async (req,res) => {
    try{
        const { name, imageUrl, bookingType, status, priceByType } = req.body;
        if(Object.values(req.body).some(value => value === '')){
            return res.status(400).json({ error: 'Please fill all the fields to continue' })
        }
        const newCar = await new Cars({
            name, 
            imageUrl, 
            bookingType, 
            status, 
            priceByType
        })
        await newCar.save();
        res.status(200).json({ data: newCar, msg: 'Successfully added car' })
    } catch(err){
        res.status(500).json({ error: err });
    }
})

router.put('/:id', auth, checkObjectId('id') , async (req,res) => {
    try{
        const _id = req.params.id;
        const { name, imageUrl, bookingType, status, priceByType } = req.body;
        const result = await Cars.updateOne({ _id }, {
            $set: { 
                name, 
                imageUrl, 
                bookingType, 
                status, 
                priceByType
            }
        })
        res.status(200).json({ data: result, msg: 'Successfully updated' })
    } catch(err){
        res.status(500).json({error: err});
    }
})

router.delete('/:id', auth, checkObjectId('id') , async (req,res) => {
    try{
        const _id = req.params.id;
        const result = await Cars.deleteOne({ _id });
        res.status(200).json({ data: result, msg: 'Successfully deleted' })
    } catch(err){
        res.status(500).json({error: err});
    }
})

module.exports = router;
