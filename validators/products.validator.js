const Joi = require('joi');

const productsSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().integer().required(),
  image: Joi.string().alphanum(),
  isBlock: Joi.boolean()
})

module.exports = productsSchema;