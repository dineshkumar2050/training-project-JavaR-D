require('dotenv').config();
const url = process.env.mongoURL;
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
        })
        
        console.log('MongoDB connected');
    } catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
