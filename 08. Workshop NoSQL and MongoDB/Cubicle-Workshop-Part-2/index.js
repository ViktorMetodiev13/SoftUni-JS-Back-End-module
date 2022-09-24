const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');

const mongodbUrl = 'mongodb://localhost:27017';

const { init: storage } = require('./models/storage')

const { about } = require('./controllers/about');
const { catalog } = require('./controllers/catalog');
const { create, post } = require('./controllers/create');
const { details } = require('./controllers/details');
const { notFound } = require('./controllers/notFound');
const { accessory } = require('./controllers/accessory');

start();

async function start() {

    const app = express();
    const port = 3000;

    /*
    await mongoose.connect(mongodbUrl);
    console.log('Success!');
    */

    app.engine('hbs', hbs({
        extname: '.hbs'
    }));
    app.set('view engine', 'hbs');
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: false }));
    app.use(await storage());

    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/create', create);
    app.get('/accessory', accessory)
    app.post('/create', post);

    app.all('*', notFound);

    app.listen(port, () => console.log(`Server running on port ${port}`));
}