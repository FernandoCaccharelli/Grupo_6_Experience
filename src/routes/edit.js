const express = require("express");
const router = express.Router();

const editController = require ("../controllers/editController");

router.get("/:id", editController.edit);
router.put("/:id",editController.update);








module.exports = router;