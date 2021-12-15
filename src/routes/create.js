const express = require("express");
const router = express.Router();

const createController = require ("../controllers/createController");

router.get("/", createController.create);
router.post("/",createController.store );






module.exports = router;