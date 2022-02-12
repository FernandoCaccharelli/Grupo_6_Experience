const path = require('path');
const db = require('../database/models/Producto');
const sequelize = db.sequelize;
//const { Op } = require("sequelize");
//const { moveMessagePortToContext } = require('worker_threads');

const products_controller = {
    list: (req, res) => {
        db.Producto.findAll()
            .then(function(productos){
                res.render("products/products", {productos:productos})
            })
    },
    detail: (req, res) => {
        db.Producto.findByPk(req.params.id)
            .then(producto => {
                res.render('products/productDetail', {productos:producto});
            });
    }, 
    create: function (req,res) {
        db.Producto.create({
            ...req.body
        }).then(()=>{
            res.redirect("/products")
        })
    },
    edit: function(req,res){
        db.Producto.findByPk(req.params.id)
        .then((producto)=>{
                res.render("products/product-edit",{Producto:producto})  

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
            res.redirect("/products/list")
        })

    }
}


module.exports = products_controller;