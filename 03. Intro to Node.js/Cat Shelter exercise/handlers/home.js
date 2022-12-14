const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');


module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname == '/' && req.method == 'GET') {

        let filePath = path.normalize(
            path.join(__dirname, '../views/home/index.html')
        );
        
        fs.readFile(filePath, (error, data) => {
            if (error) {
                console.log(error);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write('Content Not Found');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(data);
            res.end();
        })

    } else {
        return true;
    }
}

