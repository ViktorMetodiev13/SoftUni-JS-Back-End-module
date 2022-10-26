const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = required('../models/User')


const JWT_SECRET = 'rqwedsfkdjeiwo';


async function register(username, password) {
    const existing = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });

    if (existing) {
        throw new Error('Username is taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        hashedPassword
    });

    // TODO see assignment if registration creates user session
    const token = createSession(user);

    return token;
}

async function login() {

}

async function createSession({ _id, username }) {
    const payload = {
        _id,
        username,
    };

    const token = jwt.sign(payload, JWT_SECRET);

    return token
}

async function veiryToken() {

}

module.exports = {
    register,
    login,

}