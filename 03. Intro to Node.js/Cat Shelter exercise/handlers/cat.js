const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds');
const cats = require('../data/cats');


module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname == '/cats/add-cat' && req.method == 'GET') {
        let filePath = path.normalize(
            path.join(__dirname, '../views/addCat.html')
        );

        const index = fs.createReadStream(filePath);

        index.on('data', (data) => {
            res.write(data);
        })

        index.on('end', () => {
            res.end();
        })

        index.on('error', (err) => {
            console.log(err);
        })
    } else if (pathname == '/cats/add-breed' && req.method == 'GET') {
        let filePath = path.normalize(
            path.join(__dirname, '../views/addBreed.html')
        );

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
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
    } else if (pathname == '/cats/add-cat' && req.method == 'POST') {
        let formData = '';

        res.on('data', (data) => {
            formData = data;
        });

        res.on('end', () => {
            let body = qs.parse(formData);

            fs.readFile('../data/breeds.json', (err, data) => {
                if (err) {
                    throw err;
                }

                let breed = JSON.parse(data);
                breeds.push(breed);
                let json = JSON.stringify(breeds);

                // fs.writeFile('../data/breeds.json', json, () => {
                //     console.log('The breed was uploaded successfully!');
                // });
            });

            res.writeHead(200, { location: '/' });
            res.end();
        });
    } else if (pathname == 'cats/add-breed' && req.method == 'POST') {

    } else {
        return true;
    }
}
