const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const checkObjectId = require('../../../middleware/checkObjectId');

const User = require('../../../models/User');

router.get('/', auth, async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({ users });
    } catch(err){
        res.status(500).send('Server error -> ' + err.message);
    }
})

router.post('/', auth, async (req, res) => {
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
            address
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
        res.status(500).send('Server error -> ' + err.message);
    }
})

router.put('/:id'. auth, checkObjectId('id'), async (req, res) => {
    try {
        const { id } = req.params && req.params.id;
        const { name, userId, password, contact, address } = req.body;

        const isUserPresent = await User.findOne({ _id: id });

        if(isUserPresent) {
            const result = await User.updateOne({ _id: id },{ 
                $set: { 
                    name, 
                    userId, 
                    password, 
                    contact, 
                    address
                } 
            })
            return result && res.status(200).json({ data: result, msg: 'Successfully updated' })
        }
        return res.status(401).json({ error: 'User not found' });
        
    } catch (error) {
        res.status(500).send('Server Error -> '+error.message);
    }
})

router.delete('/:id', auth, checkObjectId('id'), async (req,res) =>{
    try{
        const id = req.params.id;

        const isUserPresent = await User.findOne({ _id: id });

        if(isUserPresent) {
            const result = await User.deleteOne({ _id: id })
            return result && res.status(200).json({ data: result, msg: 'Successfully deleted' })
        }
        return res.status(401).json({ error: 'User not found' });
    } catch(err) {
        res.status(500).send('Server Error -> '+err.message);
    }
})

router.put('/block/:id', auth, checkObjectId('id'), async (req,res) =>{
    try{
        const id = req.params.id;

        const isUserPresent = await User.findOne({ _id: id });

        if(isUserPresent) {
            const result = await User.updateOne({ _id: id }, { 
                $set: { 
                    isBlocked: true
                }
            })
            return result && res.status(200).json({ data: result, msg: 'Successfully blocked' })
        }
        return res.status(401).json({ error: 'User not found' });
    } catch(err) {
        res.status(500).send('Server Error -> '+err.message);
    }
})

module.exports= router;
