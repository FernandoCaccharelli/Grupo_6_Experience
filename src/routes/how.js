const express = require("express");
const router = express.Router();
const howController = require ("../controllers/howController");

router.get("", howController.how);





module.exports = router;