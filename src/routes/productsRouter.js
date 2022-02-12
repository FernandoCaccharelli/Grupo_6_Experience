const express = require("express");
const router = express.Router();
const uploadFile = require('../middlewares/multerCreateProducts')
const products_controller = require ("../controllers/products_controller");

//lista de productos
router.get("/list", products_controller.list);

//crear producto
router.get("/add", products_controller.add);
router.post("/create", uploadFile.single('image'), products_controller.create );

//Detalle de producto
router.get("/detail/:id", products_controller.detail);

//editar producto
router.get("/edit/:id", products_controller.edit);
router.put("/:id", uploadFile.single('image'), products_controller.update);

//borrar producto
router.delete("/:id", products_controller.destroy);






module.exports = router;