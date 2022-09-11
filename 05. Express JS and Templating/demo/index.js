const express = require('express');
const catalogRouter = require('./catalog')


const app = express();

app.use(catalogRouter);

app.listen(3000, () => console.log('Server listening on port 3000'));
