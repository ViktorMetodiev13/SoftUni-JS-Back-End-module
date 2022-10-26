const { Schema, model } = require('mongoose');


// TODO add user properties and validations according the assignment
const userSchema = new Schema({
    username: { type: String, required: true, unique: true, minlength: [3, 'Username must be at least 3 characters long']},
    hashedPassword: { type: String, required: true }
});

// TODO Optional
userSchema.index({username: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;