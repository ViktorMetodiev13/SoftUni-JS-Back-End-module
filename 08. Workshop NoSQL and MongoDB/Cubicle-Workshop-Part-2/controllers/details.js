module.exports = {
    details: async (req, res) => {
        const cube = await req.storage.getById(req.params.id);

        if (cube == undefined) {
            res.redirect('/404')
        } else {
            let ctx = {
                title: 'Cubicle',
                cube,
            }
            res.render('details', ctx);
        }
    },
    attach: async (req, res) => {
        const cube = await req.storage.getById(req.params.id);
        const accessories = await req.storage.getAllAccessories();

        res.render('attach', { title: 'Attach Stickers', cube, accessories });
    }
}