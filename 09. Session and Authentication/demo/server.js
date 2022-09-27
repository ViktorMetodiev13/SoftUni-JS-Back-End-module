const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.setHeader('Set-Cookie', 'sessionid=1');

    res.send('Hello');
});

app.listen(port, () => console.log(`Server running on port ${port}`));