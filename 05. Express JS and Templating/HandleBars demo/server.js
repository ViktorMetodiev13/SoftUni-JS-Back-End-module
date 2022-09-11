const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.engine('handlebars', hbs({
    extname: '.hbs'
}))

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.send('it works')
})

app.listen(3000, () => console.log('Server is listening on port 3000'));