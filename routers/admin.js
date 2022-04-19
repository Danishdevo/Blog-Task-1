const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin");

router.post("/signUp", adminController.signUp);
router.post("/logIn", adminController.logIn);
router.post("/forgotPassword", adminController.forgotPassword);
router.patch("/resetPassword", adminController.resetPassword);
router.patch("/update", adminController.update);
router.delete("/delete", adminController.delete);
router.post("/block", adminController.block);

module.exports = router;
