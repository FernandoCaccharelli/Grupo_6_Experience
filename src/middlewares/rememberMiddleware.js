const Usuario = require ("../database/models/Usuario");
const db = require ("../database/models");

function rememberMiddleware(req,res,next){
    if(req.session.userLogged == undefined && req.cookies.remember_user != undefined){
        db.Usuario.findOne({
            where:{
                email:req.cookies.remember_user
            }
        })
        .then(usuario => {
            let userToLogged = usuario
            req.session.userLogged = userToLogged
        })
        .catch(function(error){
            console.log(error)
        })
    }
    next()
}
module.exports = rememberMiddleware;