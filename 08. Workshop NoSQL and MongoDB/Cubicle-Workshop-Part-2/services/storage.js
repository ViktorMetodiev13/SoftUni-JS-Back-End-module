const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

let data = {};

async function init() {
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            createAccessory
        };
        next();
    }
}

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

async function createAccessory(accessory) {
    const record = new Accessory(accessory);
    return record.save();
}

module.exports = {
    init,
    getAll,
    getById,
    create,
    createAccessory
}