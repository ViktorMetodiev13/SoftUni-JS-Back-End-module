const mongoose = require('mongoose');

// TODO: change database according to assignment
const CONNECTION_STRING = 'mongodb://localhost:27017/BookingUni';

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    } catch (error) {
        console.error(err.message);
        process.exit(1);
    }
};