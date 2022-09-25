const { about } = require('../controllers/about');
const { catalog } = require('../controllers/catalog');
const { create, createPost } = require('../controllers/create');
const { details, attach } = require('../controllers/details');
const { notFound } = require('../controllers/notFound');
const { createAccessory, accessoryPost } = require('../controllers/accessory');


module.exports = (app) => {
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/create', create);
    app.post('/create', createPost);
    
    app.get('/accessory/create', createAccessory);
    app.post('/accessory/create', accessoryPost);
    app.get('details/:id/attach', attach);

    app.all('*', notFound);
}