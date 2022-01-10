const express = require("express");
const router = express.Router();
const uploadFile = require('../middlewares/multerCreateProducts')
const productsController = require ("../controllers/productsController");

//lista de productos
router.get("", productsController.products);

//crear producto
router.get("/create", productsController.create);
router.post("/",uploadFile.single('image') ,productsController.store );

//editar producto
router.get("/:id/edit", productsController.edit);
router.put("/:id", uploadFile.single('image'),productsController.update);

//Detalle de producto
router.get("/:id", productsController.productDetail);

//borrar producto
router.delete("/:id", productsController.destroy);

// Mostrar carrito de compras
router.get("", productsController.basket);





module.exports = router;