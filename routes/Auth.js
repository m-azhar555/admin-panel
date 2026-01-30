const express = require('express');
const {register,login} = require('../controllers/Auth')
const AuthRoutes = express.Router();

AuthRoutes.post('/register', register);
AuthRoutes.post('/login', login)

module.exports = AuthRoutes
console.log();