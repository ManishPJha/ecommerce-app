const express = require("express");
const { userController } = require("../controller");
const router = express.Router();

router.post("/create",userController.createUser);
router.put("/update/:id",userController.updateUser);
router.delete("/delete/:id",userController.deleteUser);
router.get("/findAll",userController.getUsers);
router.get("/findOne/:id",userController.getUserById);

module.exports = router;