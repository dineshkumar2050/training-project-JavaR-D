const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.jwtSecret;

const User = require('../../models/User');

router.post('/', async (req,res) => {
    try{
        const { name, userId, password, contact, address } = req.body;
        
        let userExists = await User.findOne({ userId });

        if(userExists) {
            return res.status(200).send(`User with id ${userExists.userId} already exits, please login`);
        } 

        if(Object.values(req.body).some(value => value === '')){
            return res.status(400).json({ error: 'Please fill all the fields to continue' })
        }

        const newUser = await new User({
            name,
            userId,
            password,
            contact,
            address,
        })

        const salt = await bcrypt.genSalt(10);

        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();

        const payload = {
            user: {
                id: newUser.id,
                userId: newUser.userId
            }
        };
        // await jwt.sign(payload, secretKey,{ expires: '5 days' }, (err, token) => {
        //     if(err) throw err;
        //     // res.json({ token })
        //     console.log('token',token)
        // })

        const token = await jwt.sign(payload, secretKey,{ expiresIn: '5 days' });

        res.status(200).json({ data: { ...newUser._doc,token } })
    } catch(err){
        res.status(500).send(`Server Error -> ${err.message}`)
    }
})

module.exports = router;
