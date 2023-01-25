const express = require('express')
const router = express.Router();

const pagesController = require('../controllers/pagesController.js')
const authControl = require('../middlewares/authMiddleware')

router.route('/').get(pagesController.getIndex)
router.get('/sign-in', authControl,pagesController.signin);
router.get('/login', authControl,pagesController.login);
router.get('/chat',pagesController.chatPage);

module.exports = router
