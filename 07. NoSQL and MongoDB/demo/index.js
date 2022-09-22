//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');


start();

async function start() {
    const connectionStr = 'mongodb://localhost:27017/testdb';

    const client = await mongoose.connect(connectionStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('Database connected');

    //defining the mongoose rules
    const catSchema = new mongoose.Schema({
        name: String,
        color: String
    });
    //constructor
    const Cat = mongoose.model('Cat', catSchema);


    const personSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        age: Number
    });
    const Person = mongoose.model('Person', personSchema);

    personSchema.methods.sayHi = function() {
        console.log(`My name is ${this.firstName} and I am ${this.age} years old.`);
    }

    const person1 = new Person({
        firstName: 'Peter',
        lastName: 'Jackson',
        age: 34,
    });
    const person2 = new Person({
        firstName: 'John',
        lastName: 'Smith',
        age: 29,
    });
    //await person1.save();
    //await person2.save();

    const people = await Person.find({});
    console.log(people[model]);

}

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
