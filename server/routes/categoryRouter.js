const express = require('express');
const router = express.Router();
const categoryCtrl = require('../controllers/categoryCtrl')

router.route('/category')
.get(categoryCtrl.getCategories)

module.exports = router