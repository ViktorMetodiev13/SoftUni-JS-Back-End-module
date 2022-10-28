function parseError(error) {
    if (error.name == 'ValidationError') {
        return Object.values(error.errors).map(v => v.message);
    } else if (Array.isArray(error)) {
        console.log('here');
        return error.map(x => x.msg);
    } else {
        return error.message.split('\n');
    }
}

module.exports = {
    parseError
}