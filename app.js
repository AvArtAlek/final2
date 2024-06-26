const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { apiRouter, pagesRouter } = require('./routes');

const connectToDatabase = require('./database/connect');
const { cors } = require('./middlewares');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, 'public')),
);

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`)
});
