const express = require("express");
const router = express.Router();
const basketController = require ("../controllers/basketController");

router.get("", basketController.basket);





module.exports = router;