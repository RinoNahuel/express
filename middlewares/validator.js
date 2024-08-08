const Joi = require('joi');
const Validators = require('../validators');
const { isBoom, notFound } = require('@hapi/boom');
const { message } = require('../validators/register.validator');

module.exports = function(validator) {

  if (!Validators.hasOwnProperty(validator))
    throw notFound(`'${validator}' validator is not exist`);

  return async function(req, res, next) {
    try {
      const validated = await Validators[validator].validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {

      if(err) {
        const message = err.details.map(x => x.message);

        res.status(400).json({
          status: 'error',
          message: 'Invalid request data',
          data: message
        });
      } else {
        res.json({
          status: 'success',
          message: 'Registration succesful'
        })
      }

      next(err);
    }
  }
}