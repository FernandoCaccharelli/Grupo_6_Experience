const bcryptjs = require('bcryptjs');
const {	validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;

const controller = {
    register: (req, res) => {
		return res.render('users/register');
	},
	processRegister: function (req,res) {
        db.Usuario.create({
            ...req.body,
            image:req.file == undefined ? "default-image.png": req.file.filename
        }).then(()=>{
            res.redirect("/users/login")
        })
        .catch(function (error) {
            console.log(error);
            })      
    },

    processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		} else {
			let userToCreate = {
				...req.body,
				password: bcryptjs.hashSync(req.body.password, 10),
				avatar: req.file.filename
			}
			db.Usuario.create(userToCreate)
			.then(()=>{
				res.redirect("/user/login")
			})
			.catch(function (error) {
				console.log(error);
				})     
	}
	},

		//let userInDB = db.Usuario.findByField('email', req.body.email);

		//if (userInDB) {
		//	return res.render('users/register', {
			//	errors: {
			//		email: {
			//			msg: 'Este email ya está registrado'
			//		}
			//	},
			//	oldData: req.body
		//	});
		//}

    login: (req, res) => {
		return res.render('users/login');
	},
	loginProcess: (req, res) => {
		//let userToLogin = User.findByField('email', req.body.email);
		const resultValidation = validationResult(req)
		if (resultValidation.errors.length > 0){
			return res.render("users/login", {
				errors:resultValidation.mapped(),
				oldData:req.body
			})
		}else{
			db.Usuario.findOne({
				where:{email:req.body.email}
			})
			.then(usuario => {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, usuario.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = usuario;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}
				return res.redirect('/user/profile');

			} else{
				res.render('users/login', {
					errors: {
						email: {
							msg: 'Las credenciales son inválidas'
						}
					}
				});
			}	
		})
		.catch(error => console.log(error.message))
      }	
	},
	profile: (req, res) => {
        db.Usuario.findOne({
            where:{user: req.session.userLogged}
        })
        .then(usuario => {
            res.render('users/profile', {user: usuario});
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
