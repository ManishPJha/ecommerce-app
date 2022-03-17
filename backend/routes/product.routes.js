const express = require("express");
const router = express.Router();

const { productController } = require("../controller");

router.post("/create", productController.createProduct);
router.put("/update/:id", productController.updateProduct);
router.delete("/delete/:id", productController.deleteProduct);
router.get("/findAll", productController.getProducts);
router.get("/findOne", productController.getProductById);

module.exports = router;
