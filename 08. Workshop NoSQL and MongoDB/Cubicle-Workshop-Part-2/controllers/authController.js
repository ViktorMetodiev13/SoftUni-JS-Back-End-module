const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/register', async (req, res) => {
    try {
        req.auth.register(req.body);
        res.redirect('/auth/register');
    } catch (err) {
        res.render('register', { title: 'Register', error: err.message });
    }

})

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', (req, res) => {


    res.redirect('/auth/login');
})

module.exports = router;