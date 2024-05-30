const usersRouter = require('./users');
const categoriesRouter = require('./categories');
const gamesRouter = require('./games');
const apiRouter = require('./apiRouter');
const authRouter = require('./auth');
const pagesRouter = require('./pages');

module.exports = {
    usersRouter,
    gamesRouter,
    categoriesRouter,
    apiRouter,
    authRouter,
    pagesRouter
}