const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema } = require("../../models/product");
const { products: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listProducts));
router.get("/:id", ctrlWrapper(ctrl.getProductById));
router.post("/", validation(joiSchema), ctrlWrapper(ctrl.addProduct));
router.put("/:id", validation(joiSchema), ctrlWrapper(ctrl.updateProduct));
router.delete("/:id", ctrlWrapper(ctrl.removeProduct));

module.exports = router;
