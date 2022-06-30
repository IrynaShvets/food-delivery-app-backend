const { Product } = require("../../models");

const listProducts = async (req, res) => {
  const result = await Product.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = listProducts;
