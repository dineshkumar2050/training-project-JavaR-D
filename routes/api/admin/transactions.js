const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const auth = require('../../../middleware/auth');
// const jwt = require('jsonwebtoken');
// const config = require('config');

const Transaction = require('../../../models/Transaction');

router.get('/',auth, async (req,res) => {
    try{
        const transactions = await Transaction.find();
        res.status(200).json({ transactions });
        // const { name, userId, password, contact, address } = req.body;
        // let userExists = User.findOne({ userId });
        // if(userExists) {
        //     return res.status(400).json({ error: 'User already exist,please register with another user id' })
        // }
        // const newUser =  new User({
        //     name,
        //     userId,
        //     password,
        //     contact,
        //     address
        // })
        // const user = await newUser.save();
        // res.status(200).json({ data: user })
    } catch(err){
        res.status(500).send('Server Error -> ',err.message)
    }
})

module.exports = router;
