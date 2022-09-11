const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(201, 'Hello, Express!');
});

app.get('/catalog', (req, res) => {
    res.send('Catalog page');
});

app.get('/about', (req, res) => {
    res.send('About page');
})

app.post('/catalog', (req, res) => {
    res.send(201, 'Article created!');
});

app.all('*', (req, res) => {
    res.send(404, 'Not Found!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));
