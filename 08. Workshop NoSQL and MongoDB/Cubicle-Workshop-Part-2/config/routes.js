const { about } = require('../controllers/about');
const { catalog } = require('../controllers/catalog');
const { create, post } = require('../controllers/create');
const { details } = require('../controllers/details');
const { notFound } = require('../controllers/notFound');
const { attachAccessory } = require('../controllers/attachAccessory');


module.exports = (app) => {
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/create', create);
    app.get('/accessory', attachAccessory)
    app.post('/create', post);

    app.all('*', notFound);
}