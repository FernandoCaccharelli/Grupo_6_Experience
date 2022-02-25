//const path = require('path');
const { validationResult } = require('express-validator')
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
        const errors = validationResult(req)
        if(errors.errors.length > 0){
            return res.render("products/product-create", {errors: errors.mapped()})
        }else{
            let newProduct = {
                name: req.body.name,
                price: req.body.price,
                people: req.body.people,
                category: req.body.category,
                description: req.body.description,
                image: req.file == undefined ? "default-image.jpg" : req.file.filename,
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
        db.Producto.findByPk(req.params.id)
        .then((producto)=>{
                res.render("products/product-edit",{productToEdit:producto})  

            })
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
    }
}


module.exports = products_controller;