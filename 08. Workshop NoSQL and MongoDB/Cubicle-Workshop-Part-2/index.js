const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');
const express = require('express');
const mongoose = require('mongoose');

const { init: storage } = require('./models/storage')

start();

async function start() {
    const port = 3000;
    const connectionStr = 'mongodb://localhost:27017';
    const app = express();

    expressConfig(app);
    routesConfig(app);

    app.use(await storage());
    
    const client = await mongoose.connect(connectionStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.listen(port, () => console.log(`Server running on port ${port}`));
}