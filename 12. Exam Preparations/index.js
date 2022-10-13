const express = require('express');
const { PORT } = require('./config');


const app = express();

app.get('/', (req, res) => {
    res.send('it works!');
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));