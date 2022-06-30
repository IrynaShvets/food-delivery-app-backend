const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    shop: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("product", productSchema);

const joiSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  shop: Joi.string().required(),
  img: Joi.string().required(),
});

module.exports = {
  Product,
  joiSchema,
};
