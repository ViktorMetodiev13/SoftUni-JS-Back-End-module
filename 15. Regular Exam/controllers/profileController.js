const { hasUser } = require('../middlewares/guards');

const profileController = require('express').Router();

profileController.get('/', hasUser(), (req, res) => {



    res.render('profile', {
        title: 'Profile Page',
    })
})