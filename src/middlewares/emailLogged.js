const db = require ("../database/models");
function emailLogged(req, res, next) {
	db.Usuario.findOne({
                where:{
        	       email:req.body.email
               }
             })
           .then(function(usuario){
             if(usuario.email == req.body.email){
        	   res.render("users/register",{
        		validation: {
        		  email: {msg: 'Ya existe otra persona registrada con ese email'},
        		 }
        		})
            }
        }) 
	next();
}

module.exports = emailLogged;