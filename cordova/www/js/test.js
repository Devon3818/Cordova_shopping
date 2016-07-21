var winWidth = document.body.clientWidth;
document.getElementsByTagName('html')[0].style.fontSize = winWidth / 10 + 'px';
//alert(document.getElementsByTagName('html')[0].style.fontSize);

window.onerror = function(msg, url, line) {
	var idx = url.lastIndexOf("/");
	if(idx > -1) {
		url = url.substring(idx + 1);
	}
	alert("ERROR in " + url + " (line #" + line + "): " + msg);
	return false;
};

//关闭程序
//setTimeout(function(){navigator.app.exitApp();},10000);

//主页面backbutton事件
function backbuttonIndex() {
	if(cordova.platformId !== 'windows') {
		view1.router.back();
		view2.router.back();
		view3.router.back();
		view4.router.back();
	}
}

document.addEventListener('backbutton', backbuttonIndex, false);

//Keyboard.shrinkView(true);

//====================================购物车========================================

//更新购物车
function updataShop() {

	AllGoodsDom.html(0);
	AllGoodsPriceDom.html(0);

	$('#shop_wrap ul').html('');
	removeGoodsEvent();
	initGoods();
}

function initGoods() {
	var shop_goods_html = '';
	for(var i = 0; i < shop_goods.length; i++) {
		shop_goods_html += '<li class="clear goods_ls">' +
			'<div class="fl check_wrap">' +
			'<span class="check_wrap_span" data-id="' + shop_goods[i]["_id"] + '"></span>' +
			'</div>' +
			'<div class="fl shop_dec cleaer">' +
			'<a href="product.html" class="link item-link"><img src="' + shop_goods[i]["_pic"] + '" class="fl" /></a>' +
			'<div class="fl cont cleaer">' +
			'<h3>' + shop_goods[i]["_name"] + '</h3>' +
			'<p class="clear">￥<span class="goods_price">' + shop_goods[i]["_price"] + '</span></p>' +
			'<div class="adds fl">' +
			'<span class="goods_span_add">+</span><em class="goods_amount">' + shop_goods[i]["_amount"] + '</em><span class="goods_span_sub">-</span>' +
			'</div>' +
			'</div>' +
			'<em class="dele">删除</em>' +
			'</div>' +
			'</li>';
	}
	$$('#shop_wrap ul').append(shop_goods_html);

	goodsEvent();
}

initGoods();

//绑定购物车点击事件
function goodsEvent() {

	//选择商品事件
	$('.check_wrap_span').each(function(index) {
		$(this).click(function() {
			$(this).toggleClass('ok');
			Alls();
		});
	});

	//添加购买数量
	$('.goods_span_add').each(function(index) {

		$(this).click(function() {
			var goods_amount = $('.goods_amount').eq(index),
				amount = goods_amount.html();
			goods_amount.html(parseInt(amount) + 1);
			Alls();
		});

	});

	//减少购买数量
	$('.goods_span_sub').each(function(index) {

		$(this).click(function() {
			var goods_amount = $('.goods_amount').eq(index),
				amount = goods_amount.html();
			if(amount <= 1) {
				return false;
			}
			goods_amount.html(parseInt(amount) - 1);
			Alls();
		});

	});
}

//取消购物车点击事件,并再次绑定
function removeGoodsEvent() {
	$('.check_wrap_span').each(function() {
		$(this).unbind();
	});
	$('.goods_span_sub').each(function() {
		$(this).unbind();
	});
	$('.goods_span_add').each(function() {
		$(this).unbind();
	});
	goodsEvent();
}

//选择货物数量DOM
var AllGoodsDom = $('.AllGoods');
//商品总价DOM
var AllGoodsPriceDom = $('.AllGoods_price');

//合计总数和价格
function Alls() {
	var AllGoods = 0,
		AllGoodsPrice = 0;
	AllGoodsDom.html(AllGoods);
	$('.goods_ls .ok').each(function(index) {
		AllGoods++;
		AllGoodsDom.html(AllGoods);

		var goods_price = $('.goods_price').eq(index).html();

		var goods_amount = $('.goods_amount').eq(index).html();
		AllGoodsPrice += parseInt(goods_price) * parseInt(goods_amount);

	});

	AllGoodsPriceDom.html(AllGoodsPrice);

}

Alls();

//更新全局shop_goods商品数组
function updataGoodsArr() {

	$('.goods_ls .ok').each(function() {

		var id = $(this).attr('data-id');
		var goods_amount = $('.goods_amount').eq(index).html();

		for(var i = 0; i < shop_goods.length; i++) {

			if(id == shop_goods[i]["_id"]) {
				shop_goods[i]["_amount"] = goods_amount;
			}

		}

	});

}

//提交结算
$('#toSettlement').click(function() {
	var isOK = $('.goods_ls .ok').length;
	if(isOK == 0) {
		myApp.alert("请添加商品");
	} else {
		if(window.localStorage.uid) {
			myApp.alert("一共: " + AllGoodsPriceDom.html());
		} else {
			myApp.alert("请登录!");
		}

	}
});

//====================================购物车=END=======================================

//=========================================用户缓存========================================

if(window.localStorage.uid) {
	//alert(window.localStorage.uid.substring(0,7));
	//window.localStorage.clear();
	
	$('#index_name').html(window.localStorage.uname);
	
	if(window.localStorage.upic){
		//有缓存头像
		$('.upic_wrap1').css({
			'background': 'url(' + window.localStorage.upic + ') no-repeat center #fff',
			'background-size': 'cover'
		});
	}
	
	
} else {
	//alert('err');
	//window.localStorage.uid = 1;
	$('.login_check').each(function() {
		$(this).attr("href", 'login.html');
	});
}

//===========================================用户缓存 END======================================

//============================================选择头像============================================

//初始化选择头像点击事件
function cameraInit() {
	
	//重新设置个人信息
	if(window.localStorage.uid) {
		
		$('#index_name').html(window.localStorage.uname);
		
		if(window.localStorage.upic){
			//有缓存头像
			$('.upic_wrap1').css({
				'background': 'url(' + window.localStorage.upic + ') no-repeat center #fff',
				'background-size': 'cover'
			});
		}	
	}
	
	
	$('.upic_wrap1').unbind('click');
	$('.upic_wrap1').on('click', function() {
		var buttons = [{
			text: '选择图片',
			label: true
		}, {
			text: '相册',
			onClick: function() {
				navigator.camera.getPicture(function(imageData) {

					$('.upic_wrap1').css({
						'background': 'url(' + imageData + ') no-repeat center #fff',
						'background-size': 'cover'
					});

					//上传图片到服务器
					toUpload(imageData);

					//alert($('.upic_wrap1').css('background'));
				}, function() {}, {
					saveToPhotoAlbum: true,
					quality: 100,
					targetWidth: 250,
					targetHeight: 250,
					allowEdit: true,
					sourceType: 2,
					destinationType: Camera.DestinationType.FILE_URI,
					EncodingType: 1
				});

			}
		}, {
			text: '拍照',
			onClick: function() {
				navigator.camera.getPicture(cameraSuccess, cameraError, {
					saveToPhotoAlbum: true,
					quality: 90,
					targetWidth: 250,
					targetHeight: 250,
					allowEdit: true
				});
			}
		}, {
			text: '取消',
			color: 'red'
		}, ];
		myApp.actions(buttons);
	});
}


function cameraSuccess(imageData) {

	$('.upic_wrap1').css({
		'background': 'url(' + imageData + ') no-repeat center #fff',
		'background-size': 'cover'
	});
	//上传图片到服务器
	toUpload(imageData);
}

function cameraError() {

}

function setOptions() {
	var options = {
		// Some common settings are 20, 50, and 100
		quality: 50,
		destinationType: 1,
		encodingType: 1,
		mediaType: 0,
		allowEdit: true,
		correctOrientation: true //Corrects Android orientation quirks
	}
	return options;
}

cameraInit();

//头像/图片下载
function toDownload(url) {
	var fileTransfer = new FileTransfer();
	var uri = encodeURI(url);

	fileTransfer.download(
		uri,
		cordova.file.externalApplicationStorageDirectory + "user.jpg",
		function(entry) {
			//alert("download complete: " + entry.toURL());
			$('.upic_wrap1').css({
				'background': 'url(' + entry.toURL() + ') no-repeat center #fff',
				'background-size': 'cover'
			});
			//缓存用户头像
			window.localStorage.upic = entry.toURL();
			setTimeout(function() {
				view4.router.back();
			}, 70);
		},
		function(error) {
			//alert("download error source " + error.source);
			//alert("download error target " + error.target);
			alert("upload error code" + error.code);
		},
		false, {
			headers: {
				"Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
			}
		}
	);
}

//上传到服务器
function toUpload(fileURL) {

	function win(r) {
		var murl = "http://www.devonhello.com/" + r.response.substring(7);
		//alert("Code = " + r.responseCode);
		//alert("Response = " + murl);
		//alert("Sent = " + r.bytesSent);
		toDownload(murl);
		updatePic(r.response);
	}

	function fail(error) {
		alert("An error has occurred: Code = " + error.code);
		//alert("upload error source " + error.source);
		//alert("upload error target " + error.target);
	}

	var uri = encodeURI("http://www.devonhello.com/eshop/upload");

	var options = new FileUploadOptions();
	options.fileKey = "file";
	options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
	//	options.mimeType = "text/plain";

	var headers = {
		'headerParam': 'headerValue'
	};

	options.headers = headers;

	var ft = new FileTransfer();

	ft.upload(fileURL, uri, win, fail, options);

}


//更新头像数据库
function updatePic(picurl){
	
	$.ajax({

			data: {
				id: window.localStorage.uid,
				pic: picurl,
			},
			type: "POST",
			url: "http://www.devonhello.com/eshop/updatePic",
			success: function(data) {
				//alert(data);
			},
			error: function(xhr) {
				//alert(xhr.status);
			}
		});
	
}

//===============================================选择头像 END============================================

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

	//头像是否存在
	if(window.localStorage.user_pic) {
		$('.upic_wrap1').css({
			'background': 'url(' + window.localStorage.user_pic + ') no-repeat center #fff',
			'background-size': 'cover'
		});
	}

	return true;
	//创建永久性文件存储测试
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {

		alert('file system open: ' + fs.name);
		fs.root.getFile('someFile.txt', {
			create: true,
			exclusive: false
		}, function(fileEntry) {
			alert(fileEntry.fullPath);
			//alert("fileEntry is file?" + fileEntry.isFile.toString());
			//fileEntry.name == 'someFile.txt';
			//fileEntry.fullPath == cordova.file.externalApplicationStorageDirectory+'someFile.txt';
			alert(fileEntry.fullPath);
			//写并读取
			writeFile(fileEntry, null);
			//读
			//readFile(fileEntry);

		}, function() {
			alert("onErrorCreateFile");
		});

	}, function() {
		alert("onErrorLoadFs");
	});

}

//文件写入
function writeFile(fileEntry, dataObj) {
	// Create a FileWriter object for our FileEntry (log.txt).
	fileEntry.createWriter(function(fileWriter) {

		fileWriter.onwriteend = function() {
			alert("Successful file read...");
			readFile(fileEntry);
		};

		fileWriter.onerror = function(e) {
			alert("Failed file read: " + e.toString());
		};

		// If data object is not passed in,
		// create a new Blob instead.
		if(!dataObj) {
			dataObj = new Blob(['{"name":"kong"}'], {
				type: 'text/plain'
			});
		}

		fileWriter.write(dataObj);
	});
}

//读取文件
function readFile(fileEntry) {

	fileEntry.file(function(file) {
		var reader = new FileReader();

		reader.onloadend = function() {
			alert("Successful file read: " + this.result);
			alert(fileEntry.fullPath);
			alert("Successful file read: " + JSON.parse(this.result)["name"]);
			//displayFileData(fileEntry.fullPath + ": " + this.result);
		};

		reader.readAsText(file);

	}, function() {
		alert("onErrorReadFile");
	});
}