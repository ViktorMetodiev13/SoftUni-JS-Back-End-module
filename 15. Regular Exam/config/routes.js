const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");

const { notFound } = require("../controllers/notFound");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);


    app.all('*', notFound);
}