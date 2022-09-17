const { getById } = require('../models/storage')

module.exports = {
    details: async (req, res) => {
        res.render('details', { title: 'Details' })
        //const id = req.url.split('/details/').join('');
    }
}