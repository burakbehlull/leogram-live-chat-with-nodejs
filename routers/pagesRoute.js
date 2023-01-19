const express = require('express')
const router = express.Router();

const pagesController = require('../controllers/pagesController.js')

router.route('/').get(pagesController.getIndex)
router.get('/sign-in', pagesController.signin);
router.get('/login', pagesController.login);

module.exports = router
