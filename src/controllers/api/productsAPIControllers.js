const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productsAPIControllers ={

    list:(req,res)=>{
        db.Producto.findAll({
            include: ['categoria'],
            attributes:["id","name","description"]
        })
        .then(productos =>{
            return res.status(200).json({
                count:productos.length,
                data: productos,  
                status:200,
                url: '/api/products'
            })
        })
    },
    show: (req,res)=>{
        db.Producto.findByPk(req.params.id)
        .then(producto=>{
            return res.status(200).json({
                data:producto,
                status:200,
                url: '/api/products/:id'
            })
        })
    }
   

}

module.exports= productsAPIControllers;