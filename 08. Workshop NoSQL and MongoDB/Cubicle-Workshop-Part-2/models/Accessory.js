const { Schema, model } = require("mongoose");


const schema = new Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true, match: /^https?:\/\// },
    description: { type: String, required: true, max: 500 },
})

module.exports = model('Accessory', schema);