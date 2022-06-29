const { Schema, model } = require('mongoose');
const Joi = require('joi');

const contactSchema = Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    totalSumOfOrder: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true },
);

const Contact = model('contact', contactSchema);

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  totalSumOfOrder: Joi.number().required(),
});

module.exports = {
  Contact,
  joiSchema,
};
