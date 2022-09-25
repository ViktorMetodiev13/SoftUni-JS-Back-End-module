module.exports = {
    createAccessory: (req, res) => {
        res.render('createAccessory', { title: 'Create New Accessory' });
    },
    accessoryPost: async (req, res) => {
        let accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        }

        try {
            await req.storage.createAccessory(accessory);
        } catch (error) {
            if (error.name == 'ValidationError') {
                return res.render('createAccessory', {title: 'Create An Accessory', error: 'All fields are required!'})
            }
        }

        res.redirect('/');
    }
}