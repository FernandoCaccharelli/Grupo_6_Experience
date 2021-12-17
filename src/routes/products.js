const express = require("express");
const router = express.Router();
const productsController = require ("../controllers/productsController");

//lista de productos
router.get("", productsController.products);

//detalle de producto
router.get("/:id", productsController.productDetail);

//crear producto
router.get("/create", productsController.create);
router.post("/", productsController.store );

//editar producto
router.get("/:id/edit", productsController.edit);
router.put("/:id",productsController.update);

//borrar producto
router.delete("/:id", productsController.destroy);





module.exports = router;