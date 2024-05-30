const { checkAuth, checkCookiesJWT } = require('./auth');
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require('./categories');
const cors = require('./cors');
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest } = require('./games');
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, hashPassword } = require('./users')

module.exports = {
    cors,
    findAllCategories,
    findAllGames,
    findAllUsers,
    createCategory,
    createGame,
    createUser,
    findCategoryById,
    findGameById,
    findUserById,
    updateGame,
    updateCategory,
    updateUser,
    deleteGame,
    deleteUser,
    deleteCategory,
    checkEmptyFields,
    checkIfCategoriesAvaliable,
    checkIfUsersAreSafe,
    checkIsCategoryExists,
    checkIsGameExists,
    checkEmptyName,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    checkIsUserExists,
    checkIfCategoriesAvaliable,
    hashPassword,
    checkAuth,
    checkCookiesJWT,
    checkIsVoteRequest,
}