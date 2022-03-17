const express= require("express");
const router = express.Router();
const productsAPIControllers = require ("../../controllers/api/productsAPIControllers");

router.get('/products', productsAPIControllers.list);
router.get('/products/:id', productsAPIControllers.show);
router.get('/categorias', productsAPIControllers.categorias);




module.exports = router;