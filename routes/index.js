const express = require('express');
const router = express.Router();
const uploadCloud = require('../config/cloudinary.js');
/* GET home page */
router.get('/', (req, res, next) => {
  res.redirect('auth/login');
});


module.exports = router;
