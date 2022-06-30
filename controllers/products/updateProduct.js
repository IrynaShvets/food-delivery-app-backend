const { Product } = require('../../models');

const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!req.body) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const result = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    const error = new Error(`Product with id=${id} not found.`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateProduct;
