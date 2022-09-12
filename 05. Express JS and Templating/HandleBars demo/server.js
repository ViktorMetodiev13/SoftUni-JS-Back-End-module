const express = require('express');
const hbs = require('express-handlebars')

const app = express();

app.engine('.hbs', hbs.engine({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    const data = {
        name: 'Peter',
        age: 24,
        items: [
            'Link', 
            'Wallet', 
            'Bubblegum',
            'Spare coins'
        ]
    }

    res.render('home')
});

app.listen(3000, () => console.log('Server is listening on port 3000'));