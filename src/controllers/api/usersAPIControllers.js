const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const usersAPIControllers ={

    list:(req,res)=>{
        db.Usuario.findAll()
        .then(usuarios =>{
            return res.status(200).json({
                total:usuarios.length,
                data:usuarios,
                status:200,
                url: '/api/users'
            })
        })
    },
    show: (req,res)=>{
        db.Usuario.findByPk(req.params.id)
        .then(usuario=>{
            return res.status(200).json({
                data:usuario,
                status:200,
                url: '/api/users/:id'
            })
        })
    }

}

module.exports= usersAPIControllers;