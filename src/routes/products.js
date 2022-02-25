const express = require("express");
const router = express.Router();
const uploadFile = require('../middlewares/multerCreateProducts')
const productsController = require ("../controllers/products_Controller");
const validationsProducts = require('../middlewares/validateProductsMiddleware');


// Mostrar carrito de compras
router.get("/basket", productsController.basket);

//lista de productos
router.get("/", productsController.products);

//crear producto
router.get("/create", productsController.create);
router.post("/",uploadFile.single('image'),validationsProducts,productsController.store );

//Detalle de producto
router.get("/detail/:id", productsController.detail);

//editar producto
router.get("/edit/:id", productsController.edit);
router.put("/:id", uploadFile.single('image'),productsController.update);

//borrar producto
router.delete("/:id", productsController.destroy);






module.exports = router;