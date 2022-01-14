const express = require("express");
const router = express.Router();
const howController = require ("../controllers/howController");

router.get("/how", howController.how);





module.exports = router;