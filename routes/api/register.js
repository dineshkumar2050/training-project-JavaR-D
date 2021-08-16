const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.jwtSecret;

const User = require('../../models/User');

router.post('/', async (req,res) => {
    try{
        const { name, userId, password, contact, address, isAdmin } = req.body;
        let userExists = User.findOne({ userId }) || User.findOne({ isAdmin: true });
        if(userExists) {
            return res.status(400).json({ allUsers: User.find(),body: req.body,error: 'User already exist,please register with another user id' })
        } else if(!Object.values(req.body).find(value => !value)){
            return res.status(400).json({ error: 'Please fill all the fields to continue' })
        }
        const newUser =  new User({
            name,
            userId,
            password,
            contact,
            address,
            isAdmin
        })

        const salt = await bcrypt.genSalt(10);

        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();

        const payload = {
            user: {
                id: newUser.id
            }
        };

        jwt.sign(payload, secretKey,{ expires: '5 days' }, (err, token) => {
            if(err) throw err;
            res.json({ token })
        })

        res.status(200).json({ data: user })
    } catch(err){
        res.status(500).send(`Server Error -> ${err.message}`)
    }
})

module.exports = router;
