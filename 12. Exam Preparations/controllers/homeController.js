const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    // TODO replace with real controller
    res.render('home', {
        title: 'Home Page'
    });
});

module.exports = homeController;