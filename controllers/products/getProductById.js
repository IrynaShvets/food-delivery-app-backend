const { Product } = require("../../models");

const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);

  if (!result) {
    const error = new Error(`Product with id=${id} not found.`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getProductById;
