const { Product } = require("../../models");

const removeProduct = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndRemove(id);
  if (!result) {
    const error = new Error(`Product with id=${id} not found.`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    message: "Product deleted",
    data: {
      result,
    },
  });
};

module.exports = removeProduct;
