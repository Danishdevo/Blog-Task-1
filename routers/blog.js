const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog");

router.post("/create", blogController.create);
router.get("/getAll", blogController.getAll);
router.get("/getOne", blogController.getOne);
router.patch("/update", blogController.update);
router.delete("/delete", blogController.delete);

module.exports = router;
