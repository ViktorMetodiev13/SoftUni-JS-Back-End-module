const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/catalog', (req, res) => {
    res.send('Catalog page');
});

app.get('/about', (req, res) => {
    res.send('About page');
})

app.get('/catalog/:productId', (req, res) => {
    console.log(req.params);
    res.send('Product page');
})

const data = {
    name: "Peter",
    age: 23
}

app.get('/contact', (req, res) => {
    res.json(data)
});

app.get('/contact', (req, res) => {
    res.redirect('/')
})

app.post('/catalog', (req, res) => {
    res.status(201).send('Article created!');
});

app.all('*', (req, res) => {
    res.status(404);
    res.send('Not Found!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));
