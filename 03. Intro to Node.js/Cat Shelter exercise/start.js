const http = require('http');
const port = 3000;
const handlers = require('./handlers/index');


http.createServer((req, res) => {
    res.write(handlers);
    res.end();

}).listen(port);