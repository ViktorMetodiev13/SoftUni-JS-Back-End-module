const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://localhost:27017/BookTalk';

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