const path = require('path');
const { validationResult } = require('express-validator')
const db = require('../database/models');
const sequelize = db.sequelize;
// const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
//const { moveMessagePortToContext } = require('worker_threads');

const products_controller = {

    search: (req,res) => {
        // busqueda con query(barra de busqueda del header)
        if (req.query.search != undefined) {
            db.Producto.findAll({
                where: {         // aca el where filtra la consulta
                    [Op.or] : {  // Op (sequelize) Operador del where,fltra // (someAttribute = 5) OR (someAttribute = 6)
                        name: {[Op.like]: '%' + req.query.search + '%'},
                        description: {[Op.like]: '%' + req.query.search + '%'},   //[Op.like]: '%hat',      // LIKE '%hat'

                    }
                }
            })
            .then(producto => {
                res.render(
                    'products/products',
                    {productos: producto}
                )
            })
            .catch(function (error) {
                console.log(error);
                })
        }
    
    },

    products: (req, res) => {

        db.Producto.findAll()
            .then(function(productos){
                res.render("products/products", {productos:productos})
            })
            .catch(function (error) {
                console.log(error);
                })
   
    },
    detail: (req, res) => {
        db.Producto.findByPk(req.params.id, {
            include: ["categoria"]
        })
            .then(producto => {
                res.render('products/productDetail', {productos:producto});
            })
            .catch(function (error) {
                console.log(error);
                })
    }, 
    create: function (req,res) {   
        let promProductos = db.Producto.findAll(); 
        let promCategorias =db.Categoria.findAll(); 
   
        Promise
        .all([promProductos, promCategorias])
        .then(([producto, categoria])=>{
            return res.render(path.resolve(__dirname, '../views/products/product-create'), {producto,categoria})
           
        })
        // db.Producto.findAll()   
        //     .then(function(producto){  
        //         res.render('products/product-create', {producto : producto}); 
        //     }) 
            .catch(function (error) {
                console.log(error);
                })        
    },
    store: function (req,res) {
        const errors = validationResult(req)

       
        if(errors.errors.length > 0){
            return res.render("products/product-create", {
                errors: errors.mapped(),
                oldData: req.body
            })
           
        } else{
            let newProduct = {
                name: req.body.name,
                price: req.body.price,
                people: req.body.people,
                description: req.body.description,
                image: req.file == undefined ? "default-image.jpg" : req.file.filename,
                expiration_date: req.body.expiration_date,
                category_id: req.body.category_id
            }
        
        db.Producto.create(newProduct)
        .then(()=>{
            res.redirect("/products")
        })
        .catch(function (error) {
            console.log(error);
            })  
        }          
    },
    edit: function(req,res){
        let promCategorias = db.Categoria.findAll();
        let promProducos = db.Producto.findByPk(req.params.id, {
                include: ["categoria"]
            });
            Promise
            .all([promProducos, promCategorias])
            .then(([productToEdit, categoria])=>{
                    res.render("products/product-edit",{productToEdit,categoria})  
    
                })

        // db.Producto.findByPk(req.params.id, {
        //     include: ["categoria"]
        // })
        // .then((producto)=>{
        //         res.render("products/product-edit",{productToEdit:producto})  

        //     })
     },
    update: function (req,res) {
        db.Producto.findByPk(req.params.id)
        .then((producto)=>{
            producto.update({
                ...req.body,
                image:req.file == undefined ? "default-image.png": req.file.filename
            }).then(()=>{
                res.redirect("/products")
            })
        })

    },
      
    destroy:(req,res)=>{
        db.Producto.destroy({
            where:{
                id: req.params.id
            }
        }).then(()=>{
            res.redirect("/products")
        })

    },
    //carrito de compras 
    basket: (req,res)=>{
        res.render("users/basket")
    },

    gastronomia:(req,res)=>{
        db.Producto.findAll({
          where:{
              category_id : 3
          }
        })
            .then(function(productos){
                res.render("products/gastronomy", {productos:productos})
            })
            .catch(function (error) {
                console.log(error);
                })
   },

   aventura:(req,res)=>{
    db.Producto.findAll({
      where:{
          category_id : 1
      }
    })
        .then(function(productos){
            res.render("products/adventure", {productos:productos})
        })
        .catch(function (error) {
            console.log(error);
            })
},

entretenimiento:(req,res)=>{
    db.Producto.findAll({
      where:{
          category_id : 2
      }
    })
        .then(function(productos){
            res.render("products/entertainment", {productos:productos})
        })
        .catch(function (error) {
            console.log(error);
            })
}




}


module.exports = products_controller;