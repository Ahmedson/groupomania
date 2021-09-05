// Importation d'express
const express = require('express');

// création d'un router express
// Routage fait référence à la définition de points finaux d’application (URI) 
// et à la façon dont ils répondent aux demandes client
const router = express.Router();

// Importation du contrôleur pour les users
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const checkPwd = require('../middleware/checkPwd');
// const checkPassword = require("../middleware/check-password");

// application des fonctions du contrôleur à chaque route 
// [attention à ne pas appeler les fonctions]
router.post('/signup', checkPwd, userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users', auth, userCtrl.getAllUser);
router.get('/user/redirection', auth);
router.get('/user/:id', auth,  userCtrl.getOneUser);
router.put('/user/:id', auth,  userCtrl.modifyEmail);
router.delete('/user/:id', auth,  userCtrl.deleteUser);

// Exportation du routeur
module.exports = router;