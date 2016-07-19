var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var server = require('../my_modules/db');
var ObjectID = require('mongodb').ObjectID;





//个人网站主页
router.get('/', function(req, res, next) {
	
	res.send('ESHOP');

});


module.exports = router;
