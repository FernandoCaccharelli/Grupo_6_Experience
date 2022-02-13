const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
//const { Op } = require("sequelize");
//const { moveMessagePortToContext } = require('worker_threads');

const products_controller = {
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
        db.Producto.findByPk(req.params.id)
            .then(producto => {
                res.render('products/productDetail', {productos:producto});
            })
            .catch(function (error) {
                console.log(error);
                })
    }, 
    create: function (req,res) {   
        db.Producto.findAll()   
            .then(function(producto){  
                res.render('products/product-create', {producto : producto}); 
            }) 
            .catch(function (error) {
                console.log(error);
                })        
    },
    store: function (req,res) {
        db.Producto.create({
            ...req.body
        }).then(()=>{
            res.redirect("/products")
        })
        .catch(function (error) {
            console.log(error);
            })      
    },
    edit: function(req,res){
        db.Producto.findByPk(req.params.id)
        .then((producto)=>{
                res.render("products/product-edit",{productToEdit:producto})  

            })
     },
    update: function (req,res) {
        db.Producto.findByPk(req.params.id)
        .then((producto)=>{
            producto.update({
                ...req.body
            }).then(()=>{
                res.redirect("products/detail/" + producto.id)
            })
        })

    },
    //delete:(req,res)=>{
      //  db.Producto.findByPk(req.params.id)
        //.then((producto)=>{
          //  producto.update({
            //    ...req.body
            //})
        
            //res.render("products/productDetail",{Movie:movie});
       // })  
    //},
    
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
    }
}


module.exports = products_controller;