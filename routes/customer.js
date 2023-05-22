const express = require('express')
const router = express.Router();
const pages = require('../controllers/pages');

//Custom Routes
//Home-page
router.get('/', pages.homepage);


module.exports = router;