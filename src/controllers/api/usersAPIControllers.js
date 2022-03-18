const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

let url = "http://localhost:3030/api"
const usersAPIControllers ={

    list:(req,res)=>{
        db.Usuario.findAll({
            attributes:["id","name","email"]
        })
        .then(usuarios =>{
            return res.status(200).json({
                status:200,
                url: url +'/users',
                total:usuarios.length,
                data:usuarios
            })
        })
    },
    show: (req,res)=>{
        db.Usuario.findByPk(req.params.id,{
            attributes:["id","name","email", "avatar"]
        })
        .then(usuario=>{
            return res.status(200).json({
                data:usuario,
                status:200,
                url: url + '/users/:id',
                avatar: url + '/images/avatars/'+ usuario.avatar
            })
        })
    }

}

module.exports= usersAPIControllers;