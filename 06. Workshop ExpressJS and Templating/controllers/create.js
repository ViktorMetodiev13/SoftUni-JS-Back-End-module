module.exports = {
    create: (req, res) => {
        res.render('create', { layout: false })
    },
    post: (req, res) => {
        res.redirect('/');
    }
}