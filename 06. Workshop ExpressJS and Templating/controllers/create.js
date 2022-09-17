const { create } = require("../models/storage");

module.exports = {
    create: (req, res) => {
        res.render('create', {title:'Create Cube'});
        
    },
    post: (req, res) => {
        let cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.nameimageUrl,
            difficultyLevel: req.body.difficultyLevel
        }
        create(cube);
        
        res.redirect('/');
    }
}