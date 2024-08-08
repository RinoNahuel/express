const express = require('express');
const ProductService = require('./../services/product.services');

//const { faker } = require('@faker-js/faker');
//const faker = require('faker');

const router = express.Router();
const service = new ProductService();
const Validator = require('../middlewares/validator');


router.get('/', async (req, res) => {
  const products = await service.find();

  res.json(products);
});

/* router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
}); */

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
  
    res.json(product);
  } catch (error) {
    /* res.status(404).json({
      message: error.message
    }); */
    next(error);
  }
  
});

router.post('/', Validator('products'), async (req, res, next) => {
  try {
    const body = req.body;
    const newProduct = await service.create(body);

    res.status(200).json(newProduct);
  } catch (error) {
    /* res.status(404).json({
      message: error.message
    }); */
    next(error);
  }
  
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
  
    res.json(product);
  } catch (error) {
    /* res.status(404).json({
      message: error.message
    }); */
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const respuesta = await service.delete(id);
  
    res.json(respuesta);
  } catch (error) {
    /* res.status(404).json({
      message: error.message
    }) */
    next(error);
  }
  
});

module.exports = router;