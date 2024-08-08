const express = require('express');

const productsRouter = require('./products.router');
const cataegoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const loginRouter = require('./login.router');

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', cataegoriesRouter);
  router.use('/users', usersRouter);
  router.use('/login', loginRouter);
}

module.exports = routerApi;