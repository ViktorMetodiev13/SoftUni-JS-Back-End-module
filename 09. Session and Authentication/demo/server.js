const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session')

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(expressSession({
    secret: 'My random secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get('/', (req, res) => {
    res.send('Hello')
});

app.listen(port, () => console.log(`Server running on port ${port}`));