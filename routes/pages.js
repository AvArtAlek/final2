const pagesRouter = require("express").Router();
const {sendIndex,sendDashboard}=require('../controllers/auth');
const {checkAuth,checkCookiesJWT}=require('../middllewares/auth');
pagesRouter.get("/", sendIndex);

// routes/pages.js
// Импорты и другие маршруты

pagesRouter.get("/admin/**", sendDashboard);
module.exports=pagesRouter;