const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(req.cookies);

    res.cookie('cookieParser_Cookie', 1);
    res.cookie('My_COOKIE', 'HI');
    res.send('Hello')
});

app.listen(port, () => console.log(`Server running on port ${port}`));