const { about } = require('../controllers/about');
const { attach } = require('../controllers/details');
const { createAccessory, accessoryPost } = require('../controllers/accessory');
const { login } = require('../controllers/login');
const { register } = require('../controllers/register');

const productController = require('../controllers/productController');

const { notFound } = require('../controllers/notFound');

module.exports = (app) => {
    app.get('/', (req, res) => res.redirect('/products'));
    app.get('/about', about);

    app.use('/products', productController);

    app.get('/accessory/create', createAccessory);
    app.post('/accessory/create', accessoryPost);
    app.get('details/:id/attach', attach);

    app.get('/login', login);
    app.get('/register', register);

    app.all('*', notFound);
}