const express = require('express');
const cors = require('./middlewares/cors');

const PORT = 3030;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'REST service operational'});
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
