var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var server = require('../../my_modules/db');
var formidable = require('formidable');
var fs = require('fs');
var TITLE = 'formidable上传示例';
var AVATAR_UPLOAD_FOLDER = '/upload/';


router.get('/', function(req, res, next) {

	res.send('ESHOP');
});

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
		res.send(newPath);
	});

});

//===========================================================================

module.exports = router;