const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.jwtSecret;

const User = require('../../models/User');

router.post('/',async (req,res) => {
    try{
        const { userId, password } = req.body;
        if(Object.values(req.body).find(value => !value)){
            return res.status(400).send('No fields can be empty')
        }

        let user = await User.findOne({ userId })

        if(!user){
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        
        const isMatch = user && await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] })
        }

        const payload = {
            user: {
                id: user.id,
                userId
            }            
        }

        jwt.sign(
            payload,
            secretKey,
            { expiresIn: '5 days' },
            (err, token) => {
              if (err) throw err;
              res.json({ token });
            }
        );
        res.status(200).json({ user })
    } catch(err){
        console.log(err.message);
        res.status(500).send( `Server error ${err.message}` )
    }
})

module.exports = router;
