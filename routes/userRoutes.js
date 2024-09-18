const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Define the route for rendering the home page and showing all users
router.get('/', userController.view);  // Calls the 'view' method to render users

// Define the route for searching users
router.post('/search', userController.find);  // Calls the 'find' method to handle search
router.get('/register', userController.userR);
router.post('/userRegister', userController.userRegister);
router.get('/edit/:id', userController.userE);
router.post('/edit/:id', userController.userEdit);
router.get('/delete/:id', userController.userDelete);
module.exports = router;
