const mongoose = require('mongoose');


module.exports = async (app) => {
    return new Promise((resolve, reject) => {
        const connectionStr = 'mongodb://localhost:27017/Cubicle';
        mongoose.connect(connectionStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const db = mongoose.connection;
        db.on('error', err => {
            console.error(`Database error: ${err}`);
            reject(err.message);
        });
        db.on('open', () => {
            resolve();
        });
    });
};