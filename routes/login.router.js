const express = require('express');

//const { faker } = require('@faker-js/faker');
//const faker = require('faker');

const router = express.Router();
const Validator = require('../middlewares/validator');

router.post('/', Validator('login'), (req, res, next) => {
  const accessToken = Date.now();
  const refreshToken = Date.now();

  res.json({
    accessToken,
    refreshToken
  });
})

module.exports = router