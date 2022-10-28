const hotelController = require('express').Router();


hotelController.get('/:id/details', (req, res) => {
    res.render('details', {
        title: 'Hotel Details'
    });
});

hotelController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Hotel'
    });
});

hotelController.post('/create', (req, res) => {
    const hotel = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: Number(req.body.rooms),
        owner: req.user._id,
    }
});

hotelController.get('/:id/edit', (req, res) => {
    res.render('edit', {
        title: 'Edit Hotel'
    });
});

module.exports = hotelController;