const fs = require('fs');
const url = require('url');

function getContentType(url) {

    if (url.endsWith('css')) {
        return 'text/css';
    } else if (url.endsWith('html') || url.endsWith('png') || url.endsWith('js') || url.endsWith('json')) {
        return true;
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname.startsWith('/content') && req.method == 'GET') {
        fs.readFile(`./${pathname}`, (error, data) => {
            if (error) {
                console.log(error);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write('Error was found');
                res.end();
                return;
            }

            console.log(pathname);
            res.writeHead(
                200,
                { 'Content-Type': getContentType(pathname) }
            );

            res.write(data);
            res.end();
        })
    } else {
        return true;
    }
}