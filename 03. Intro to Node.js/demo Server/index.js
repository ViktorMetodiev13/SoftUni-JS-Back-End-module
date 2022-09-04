const http = require('http');


const port = 3000;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
    console.log('>>>', req.method, req.url);
    res.write('hello!');
    res.end();
}

server.listen(port, () => console.log('Server listening on port ' + port));