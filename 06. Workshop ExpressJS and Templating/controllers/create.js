module.exports = {
    create: (req, res) => {
        res.render('create', {title:'Create Cube'});
        console.log(req.params);
    },
    post: (req, res) => {
        res.redirect('/');
    }
}