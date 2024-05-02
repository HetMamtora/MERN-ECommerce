const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middleware/auth');
const router = express.Router();


router.post('/register',userCtrl.register)
router.post('/login',userCtrl.login)
router.get('/logout', userCtrl.logout);
router.get('/refresh_token', userCtrl.refreshtoken);
router.get('/information',auth,userCtrl.getUser)

module.exports = router