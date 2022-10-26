const { register } = require('../services/userService');
const { parseError } = require('../util/parser');

const authController = require('express').Router();

authController.get('/register', (req, res) => {
    // TODO replace with actual view by assignment
    res.render('register', {
        title: 'Register Page'
    });
});

authController.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        if (req.body.username == '' || req.body.username == '') {
            throw new Error('All fields are required!');
        };
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords don\'t match');
        }
        const token = await register(req.body.username, req.body.password);

        res.cookie('token', token);
        res.redirect('/auth/register');
    } catch (error) {
        // TODO add error parser
        const errors = parseError(error);

        // TODO add error display to actual remplate from assignment
        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                username: req.body.username
            }
        })
    }
});

module.exports = authController;