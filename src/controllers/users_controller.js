const path = require('path');
const db = require('../database/models/Usuario');
const sequelize = db.sequelize;

const usersController = {
    
    create: function (req,res) {
        db.Usuario.create({
            ...req.body
        }).then(()=>{
            res.redirect("/user/login")
        })
    },
    edit: function(req,res){
        db.Usuario.findByPk(req.params.id)
        .then((usuario)=>{
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
    delete:(req,res)=>{
        db.Producto.findByPk(req.params.id)
        .then((producto)=>{
            producto.update({
                ...req.body
            })
        
            res.render("products/productDetail",{Movie:movie});
        })
        
    },
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

module.exports = usersController; 