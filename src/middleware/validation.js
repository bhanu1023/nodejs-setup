const Joi = require("joi");

exports.userSchema = Joi.object().keys({
  name: Joi.string()
    .min(3)
    .max(40)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .max(20)
    .required(),
  phone: Joi.string()
    .min(10)
    .max(10)
    .required(),
  address: Joi.string()
    .min(3)
    .max(40)
    .required(),
  role: Joi.string()
    .min(3)
    .max(40)
    .required(),
});

exports.shopSearchSchema = Joi.object().keys({
  customer_pincode: Joi.number().integer()
    .min(1)
    .max(20000)
    .required(),
  limit: Joi.number().integer()
    .min(1)
    .max(10)
    .required(),
  offset: Joi.number().integer()
    .min(0)
    .required(),

});