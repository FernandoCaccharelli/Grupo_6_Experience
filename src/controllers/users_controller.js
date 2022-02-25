const bcryptjs = require('bcryptjs');
const {	validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;

const controller = {
    register: (req, res) => {
		return res.render('users/register');
	},
	processRegister: function (req,res) {
		const errors = validationResult(req);
		
		if (errors.errors.length > 0) {
			return res.render('users/register', {
				errors: errors.mapped(),
				oldData: req.body
			});
		} else {
			db.Usuario.create({
            ...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
            image:req.file == undefined ? "default-image.png": req.file.filename
		})
		.then(()=>{
            res.redirect("/user/login")
        })
        .catch(function (error) {
            console.log(error);
            })  
		}		    
    },

    login: (req, res) => {
		return res.render('users/login');
	},
	loginProcess: (req, res) => {
        const errors = validationResult(req)
		if (errors.errors.length > 0){
			return res.render("users/login", {
				errors:errors.mapped(),
				oldData:req.body
			})
		}else{ 
			db.Usuario.findOne({
				where:{
					email:req.body.email
				}
			})
			.then(function(usuario) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, usuario.password);
			if (isOkThePassword) {
				//delete usuario.password;
				req.session.userLogged = usuario;
				res.redirect('/user/profile')

			   if(req.body.remember_user != undefined) {
             	   res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
					return res.redirect('/user/profile');
			}
			  else{
				res.render('users/login', {
				errors: {
					email: {msg: 'Las credenciales son inválidas'},
					password:{msg:'Las credenciales son inválidas'}
					}
				})
		
           }
      }
	
       })
           .catch(function(error){
	        console.log(error)
          })
       }
      },

	profile: (req, res) => {
        db.Usuario.findOne({
            where:{
				email: req.session.userLogged.email
			}
        })
        .then(usuario => {
            res.render('users/profile', {usuario: usuario});
	})
    .catch(error =>console.log(error.massage))
     },

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}

}
   


module.exports = controller; 
