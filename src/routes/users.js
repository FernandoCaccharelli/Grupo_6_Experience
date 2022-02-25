const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

// Middlewares
const upload = require('../middlewares/multer');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validationLogin = require('../middlewares/validateLoginMiddleware');

// Formulario de registro
router.get('/register', guestMiddleware, usersController.register);


// Procesar el registro
router.post('/register', upload.single('avatar'), validations, usersController.processRegister);


// Formulario de login
router.get('/login', guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', validationLogin,usersController.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, usersController.profile);

// Logout
router.get('/logout/', usersController.logout);

module.exports = router;