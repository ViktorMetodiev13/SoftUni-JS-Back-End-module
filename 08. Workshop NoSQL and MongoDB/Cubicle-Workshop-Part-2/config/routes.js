const { login } = require('../controllers/login');
const { register } = require('../controllers/register');

const productController = require('../controllers/productController');
const accessoryController = require('../controllers/accessoryController');
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');


module.exports = (app) => {
    app.use('/products', productController);
    app.use('/accessory', accessoryController);
    app.use('/auth', authController);

    app.get('/login', login);
    app.get('/register', register);
    

    app.use('/', homeController);
}