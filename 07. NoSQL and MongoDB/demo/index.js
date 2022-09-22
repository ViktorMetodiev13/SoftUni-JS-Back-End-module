//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

async function start() {
    const connectionStr = 'mongodb://localhost:27017';

    const client = await mongoose.connect(connectionStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('Database connected');
}

start();
/*
client.connect((err) => {
    if (err != null) {
        console.log('Something unexpected happened!');
        return;
    }

    console.log(`Database connected`);

    const db = client.db('testdb');
    const colletion = db.collection('cats');
    colletion.find({}).toArray((err, data) => {
        console.log(data);
    });
});
*/
