const express = require('express')
const router = express.Router();

const pagesController = require('../controllers/pagesController.js')

router.route('/').get(pagesController.getIndex)

module.exports = router
