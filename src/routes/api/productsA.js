const express= require("express");
const router = express.Router();
const productsAPIControllers = require ("../../controllers/api/productsAPIControllers");

router.get('/', productsAPIControllers.list);
router.get('/:id', productsAPIControllers.show);


module.exports = router;