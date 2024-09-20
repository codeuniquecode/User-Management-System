const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Define the route for rendering the home page and showing all users
router.get('/', userController.userR);  // Calls the 'view' method to render users
router.get('/home',userController.view);
// Define the route for searching users
router.post('/search', userController.find);  // Calls the 'find' method to handle search
// router.get('/register', userController.userR);
router.get('/user-data/:id', userController.userData);
router.post('/userRegister', userController.userRegister);
router.get('/edit/:id', userController.userE);
router.post('/edit/:id', userController.userEdit);
router.get('/delete/:id', userController.userDelete);
router.get('/login', userController.userL);
router.post('/userLogin',userController.userLogin);
module.exports = router;
