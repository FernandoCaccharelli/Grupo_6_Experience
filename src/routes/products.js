const express = require("express");
const router = express.Router();
const productsController = require ("../controllers/productsController");

//lista de productos
router.get("", productsController.products);

//crear producto
router.get("/create", productsController.create);
router.post("/", productsController.store );

//editar producto
router.get("/edit/:id", productsController.edit);
router.put("/:id",productsController.update);





module.exports = router;