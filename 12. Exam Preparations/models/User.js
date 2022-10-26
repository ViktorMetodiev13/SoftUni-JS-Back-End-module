const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true }
});

const User = model('User', userSchema);

module.exports = User;

//Optional
userSchema.index({username: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

