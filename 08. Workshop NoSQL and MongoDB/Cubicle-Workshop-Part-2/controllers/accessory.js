module.exports = {
    createAccessory: (req, res) => {
        res.render('createAccessory', { title: 'Create New Accessory' });
    },
    post: (req, res) => {
        let accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        }
    }
}