const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

let url = "http://localhost:3030/api"
const productsAPIControllers ={

    list:(req,res)=>{
        let promCategorias =  db.Producto.findAll({ 
                include: [{association:'categoria'}],
                 group: ['category_id'],
                attributes:[[sequelize.fn('COUNT', 'category_id'), 'totalProductos']],             
            })
           
        let promProductos =  db.Producto.findAll() 

        Promise
        .all([promProductos, promCategorias])
        .then((productos) =>{
            return res.status(200).json({
                count:productos.length,
                status:200,
                url: url + "/products",
                data:productos           
            })
        })
    
        .catch(function (error) {
            console.log(error);
            })  
    },
    show: (req,res)=>{
        db.Producto.findByPk(req.params.id)
        .then(producto=>{
            return res.status(200).json({
                data:producto,
                status:200,
                url: url+'/products/:id',
                image: url + '/products/images/'+ producto.image
            })
        })
    }
   

}

module.exports= productsAPIControllers;