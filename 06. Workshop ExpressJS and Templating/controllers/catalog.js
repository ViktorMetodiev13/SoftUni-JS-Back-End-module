const { getAll } = require("../models/storage");

module.exports = {
    catalog: async (req, res) => {
        const cubes = await getAll();

        const ctx = {
            title: 'Cubicle',
            cubes
        }

        res.render('index', ctx);
    }
}