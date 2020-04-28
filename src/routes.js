const express = require('express');
const UserController = require('./controllers/UserController');
const ArticleController = require('./controllers/ArticleController');
const SessionController = require('./controllers/SessionController');
const BibliographyController = require('./controllers/BibliographyController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);

routes.post('/articles', ArticleController.create);
routes.get('/articles', ArticleController.index);
routes.delete('/articles/:id', ArticleController.delete);

routes.post('/bibliography', BibliographyController.create)

module.exports = routes;