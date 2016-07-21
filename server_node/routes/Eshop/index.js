var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var server = require('../../my_modules/db');
var formidable = require('formidable');
var fs = require('fs');
var TITLE = 'formidable上传示例';
var AVATAR_UPLOAD_FOLDER = '/upload/';
var ObjectID = require('mongodb').ObjectID;

var db = new mongodb.Db('devon', server, {
	safe: true
});

router.get('/', function(req, res, next) {

	res.send('ESHOP');
});

//用户登录
router.post('/login', function(req, res, next) {

	console.log(55555);
	console.log(req.body.id);
	//res.send('3');

	var uid = req.body.id;
	var etoken = req.body.etoken;
	//	
	//	console.log(req.body.id);
	//	console.log(req.body.etoken);
	//	//console.log(req.body);
	//	
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.send('3');
		} else {

			//插入到数据库register
			db.collection('eshop_register', {
				safe: true
			}, function(err, collection) {

				collection.find({
					//					"_id": ObjectID(uid)
					"eid": uid
				}).toArray(function(err, docs) {

					if(docs.length == 0) {
						//当结果为0时，注册用户
						//res.send('666');

						var data = {
							eid: uid,
							etoken: etoken,
							ename: uid.substring(0,7),
							epic: '',
						}
						//res.send('666');
						collection.insert(data, {
							safe: true
						}, function(err, result) {
							if(err) {
								db.close();
								res.send('0');
							} else {
								db.close();
								console.log(data);
								res.send(uid);
							}
							
						});

					} else {
						db.close();
						console.log(docs);
						res.send(JSON.stringify(docs));
					}

				});

			});

		}
	})

});



//更新头像
router.post('/updatePic', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('3');
		} else {

			//插入到数据库
			db.collection('eshop_register', {
				safe: true
			}, function(err, collection) {
				var id = req.body.id;

				var data = {
					epic: req.body.pic,
				};
				collection.update({
					"eid": id
				}, {
					$set: data
				}, {
					safe: true
				}, function(err, result) {
					if(err) {
						res.send('0');
					} else {
						res.send('1');
					}
					db.close();
				});

			});

		}
	})

})


//更新资料
router.post('/updateData', function(req, res, next) {

	//打开数据表
	db.open(function(error, client) {
		if(error) {
			db.close();
			res.render('3');
		} else {

			//插入到数据库
			db.collection('eshop_register', {
				safe: true
			}, function(err, collection) {
				var id = req.body.id;
				var upname = req.body.name;
				
				var data = {
					ename: upname,
				};
				collection.update({
					"eid": id
				}, {
					$set: data
				}, {
					safe: true
				}, function(err, result) {
					if(err) {
						res.send('0');
					} else {
						console.log(upname);
						res.send(upname);
					}
					db.close();
				});

			});

		}
	})

})


//头像上传
router.post('/upload', function(req, res, next) {

	var form = new formidable.IncomingForm(); //创建上传表单
	form.encoding = 'utf-8'; //设置编辑
	form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER; //设置上传目录
	form.keepExtensions = true; //保留后缀
	form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
	form.parse(req, function(err, fields, files) {

		if(err) {
			res.send("0");
			return;
		}

		var extName = ''; //后缀名
		switch(files.file.type) {
			case 'image/pjpeg':
				extName = 'jpg';
				break;
			case 'image/jpeg':
				extName = 'jpg';
				break;
			case 'image/png':
				extName = 'png';
				break;
			case 'image/x-png':
				extName = 'png';
				break;
		}

		if(extName.length == 0) {
			res.send("0");
			return;
		}

		var avatarName = Math.random() + '.' + extName;
		var newPath = form.uploadDir + avatarName;
		//		console.log(form.uploadDir);
		//		console.log(avatarName);
		//		console.log('url:'+newPath);
		//		console.log(files.file.path);
		fs.renameSync(files.file.path, newPath); //重命名
		//updatePic(newPath);
		res.send(newPath);
	});

});

//===========================================================================

module.exports = router;