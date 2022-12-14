const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

async function getAll(query) {
    const options = {};

    if (query.search) {
        options.name = { $regex: query.search, $options: 'i' };
    }
    if (query.from) {
        options.difficulty = { $gte: Number(query.from) };
    }
    if (query.to) {
        options.difficulty = options.difficulty || {};
        options.difficulty.$lte = Number(query.to);
    }

    const cubes = Cube.find(options).lean();

    return cubes;
}

async function getById(id) {
    const cube = await Cube.findById(id).lean();
    if (cube) {
        return cube;
    } else {
        return undefined;
    }
}

async function create(cube) {
    const record = new Cube(cube);
    return record.save();
}

async function attachSticker(cubeId, stickerId) {
    const cube = await Cube.findById(cubeId);
    const sticker = await Accessory.findById(stickerId);
    if (!cube || !sticker) {
        throw new ReferenceError(`No such ID in database`);
    }

    cube.accessories.push(sticker);
    return cube.save();
}

async function edit(id, cube) {
    const existing = await Cube.findById(id);

    if (!existing) {
        throw new ReferenceError('No such ID in database');
    }

    Object.assign(existing, cube);
    return existing.save();
}

module.exports = {
    getAll,
    getById,
    create,
    attachSticker,
    edit
}