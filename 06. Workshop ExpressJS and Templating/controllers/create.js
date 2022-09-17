const { create } = require("../models/storage");

module.exports = {
    create: (req, res) => {
        res.render('create', {title:'Create Cube'});
        
    },
    post: async (req, res) => {
        let cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficultyLevel: req.body.difficultyLevel
        }
        await create(cube);
        
        res.redirect('/');
    }
}