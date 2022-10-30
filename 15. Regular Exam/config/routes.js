const authController = require("../controllers/authController");
const blogController = require("../controllers/blogController");
const homeController = require("../controllers/homeController");

const { notFound } = require("../controllers/notFound");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/blog', blogController)

    app.all('*', notFound);
}