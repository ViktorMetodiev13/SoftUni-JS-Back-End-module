const { Router } = require('express');

const router = Router();


router.get('/', async (req, res) => {
    const cubes = await req.storage.getAll(req.query);

    const ctx = {
        title: 'Cubicle',
        cubes,
        search: req.query.search || '',
        from: req.query.from || '',
        to: req.query.to || '',
    }

    res.render('index', ctx);
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Cube' });
});

router.post('/create', async (req, res) => {
    let cube = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficulty: Number(req.body.difficulty)
    }
    try {
        await req.storage.create(cube);
    } catch (error) {
        if (error.name == 'ValidationError') {
            return res.render('create', { title: 'Create Cube', error: 'All fields are required!' })
        }
    }

    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {
    console.log(req.storage);
    const cube = await req.storage.getById(req.params.id);

    if (cube == undefined) {
        res.redirect('/404');
    } else {
        let ctx = {
            title: 'Cubicle',
            cube,
        };
        res.render('details', ctx);
    }
});

router.get('/edit/:id', async (res, req) => {
    const cube = await req.storage.getById(req.params.id);
    cube[`select${cube.difficulty}`] = true;

    if (!cube) {
        res.redirect('/404');
    } else {
        const ctx = {
            title: 'Edit Cube',
            cube
        }
        res.render('edit', ctx)
    }
});

router.post('/edit/:id', async (req, res) => {
    const cube = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficulty: Number(req.body.difficulty)
    };
    try {
        await req.storage.edit(req.params.id, cube);
        res.redirect('/');
    } catch (err) {
        res.redirect('/404');
    }
});

router.get('/attach/:cubeId', async (req, res) => {
    const cube = await req.storage.getById(req.params.cubeId);
    const accessories = await req.storage.getAllAccessories();

    res.render('attach', { title: 'Attach Stickers', cube, accessories });
});

router.post('/attach/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    const stickerId = req.body.accessory;

    await req.storage.attachSticker(cubeId, stickerId);

    res.redirect(`datails/${cubeId}`)
});

module.exports = router;