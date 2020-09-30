const express = require("express");
const routes = express.Router();
const ArticleController  = require('./controllers/ArticleControllers');

routes.get("/book", ArticleController.index);
routes.post("/book", ArticleController.store);
routes.get("/book/:id", ArticleController.show);
routes.put("/book/:id", ArticleController.update);
routes.delete("/book/:id", ArticleController.destoy);

module.exports = routes;