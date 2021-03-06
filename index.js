require('dotenv').config();
const express =  require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const connectDB = require('./connectDB');

app.use(express.json());

app.use(cors());

connectDB();

app.use('/api/register', require('./routes/api/register'));
app.use('/api/auth/cars-available', require('./routes/api/carsAvailable'));
app.use('/api/auth/book', require('./routes/api/book'));
app.use('/api/auth/past-bookings', require('./routes/api/pastBookings'));
app.use('/api/auth', require('./routes/api/auth'));

app.get('/',(req,res) => {
    try{
        res.status(200).json({ msg: 'base url api response' })
    } catch(err){
        console.log(err);
    }
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const Port = process.env.PORT || 8000;

app.listen(Port,() => console.log(`Server running on port ${Port}`));
