const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('./categories');
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require('./users');
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require('./games');
const { login, sendIndex, sendDashboard } = require('./auth');

module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendAllUsers,
    sendUserCreated,
    sendAllGames,
    sendGameCreated,
    sendGameById,
    sendCategoryById,
    sendUserById,
    sendGameUpdated,
    sendCategoryUpdated,
    sendUserUpdated,
    sendGameDeleted,
    sendUserDeleted,
    sendCategoryDeleted,
    login,
    sendMe,
    sendIndex,
    sendDashboard,
};