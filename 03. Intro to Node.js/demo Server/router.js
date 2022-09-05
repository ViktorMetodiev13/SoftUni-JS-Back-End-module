const handlers = {};

function match(url) {
    const handler = handlers[url];

    if (handler == undefined) {
        return defaultHandler;
    } else {
        return handler;
    }
}

function registerHander(url, handler) {
    handlers[url] = handler;
}

function defaultHandler(req, res) {
    res.statusCode = 404;
    res.write('Not Found');
    res.end();
}

module.exports = {
    match,
    registerHander,
};
