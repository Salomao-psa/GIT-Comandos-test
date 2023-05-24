const express = require('express')
const router = express.Router();
const pages = require('../controllers/pages');

//Page Routes
//Home-page
router.get('/', pages.homepage);
//Entendendo-git
router.get('/git',pages.git)
//Comandos
router.get('/comandos',pages.comandos)


module.exports = router;