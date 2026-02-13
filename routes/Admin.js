const express = require('express');
const GetUsers = require('../controllers/Admin.js');
const isAdmin = require('../middlewares/isAdmin.js');
const AdminRoutes=express.Router()


AdminRoutes.get('/getAllUsers',isAdmin,GetUsers)




module.exports = AdminRoutes;