const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');


module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    console.log(req);

    // if (pathname == '/' && req.method == 'GET') {

    //     let filePath = path.normalize(
    //         path.join(__dirname, '../views/home/index.html')
    //     );
        
    //     fs.readFile(filePath, (error, temp) => {
    //         if (error) {
    //             console.log(error);
    //             res.writeHead(404, {
    //                 'Content-Type': 'text/plain'
    //             });

    //             res.write('Content Not Found');
    //             res.end();
    //             return;
    //         }

    //         res.writeHead(200, {
    //             'Content-Type': 'text/plain'
    //         });

    //         res.write(cats);
    //         res.end();
    //     })

    // } else {
    //     return true;
    // }
}

