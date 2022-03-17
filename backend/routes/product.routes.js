const express = require("express");
const { productController } = require("../controller");
const router = express.Router();

router.post("/create", productController.createProduct);
router.put("/update/:id", productController.updateProduct);
router.delete("/delete/:id", productController.deleteProduct);
router.get("/findAll", productController.getProducts);
router.get("/findOne/:id", productController.getProductById);

module.exports = router;
