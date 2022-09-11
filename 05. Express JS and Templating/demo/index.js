const express = require('express');
const catalogRouter = require('./catalog')
const logger = require('./logger')


const app = express();

app.use(catalogRouter);
app.use(logger);

app.get('/', (req, res) => {
    res.send('Welcome to my Page!');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

app.listen(3000, () => console.log('Server listening on port 3000'));
