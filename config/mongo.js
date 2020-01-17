const mongoose = require('mongoose');
const config = require('config');

const URI = config.get('mongoURI');

const connectDB = async () => {    
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB Connected!')
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = connectDB;