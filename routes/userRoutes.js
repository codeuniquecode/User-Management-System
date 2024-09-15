const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.get('/', userController.view);
router.get('/', (req, res) => {
    res.render('home'); // Render the 'home.hbs' template
  });

module.exports = router; //must export routers