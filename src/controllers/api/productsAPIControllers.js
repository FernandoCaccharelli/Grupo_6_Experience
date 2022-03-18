const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

let url = "http://localhost:3030/api"
const productsAPIControllers ={

    list:(req,res)=>{

        db.Producto.findAll() 
        .then((productos) =>{
            return res.status(200).json({
                status:200,
                url: url + "/products",
                count: productos.length,
                data: { 
                    productos: productos
                    },
                           
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

    },
    categorias: (req, res) => {
             db.Producto.findAll({ 
                include: [{association:'categoria'}],
                 attributes: ['category_id'],
                 group: ['category_id'],
                attributes:[[sequelize.fn('COUNT', "category_id"), 'totalProductos']],             
            })

        //  db.sequelize.query('select categorias.id, categorias.category, count(productos.id) from categorias inner join productos on categorias.id = productos.category_id group by categorias.category', {type: db.Sequelize.QueryTypes.SELECT})
            .then((categorias) => {
                return res.status(200).json({
                    data: {
                        count: categorias.length,
                        categorias:categorias,
                        url: url+'/categorias'
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
                }) 
    }   
          
}

module.exports= productsAPIControllers;