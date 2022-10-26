const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    // TODO replace with real controller
    res.render('home', {
        title: 'Home Page',
        user: req.user
    });
});

module.exports = homeController;