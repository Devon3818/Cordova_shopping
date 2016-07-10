

var winWidth = document.body.clientWidth;
document.getElementsByTagName('html')[0].style.fontSize = winWidth / 10 + 'px';
//alert(document.getElementsByTagName('html')[0].style.fontSize);

window.onerror = function(msg, url, line) {  
   var idx = url.lastIndexOf("/");  
   if(idx > -1) {  
    url = url.substring(idx+1);  
   }  
   alert("ERROR in " + url + " (line #" + line + "): " + msg);  
   return false;  
};  

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	
	YCQQ.checkClientInstalled(function(){
	    //alert('client is installed');
	},function(){
	    // 如果安装的QQ客户端版本太低，不支持SSO登录也会返回没有安装客户端的错误
	    //alert('client is not installed');
	});
	
}






//qq授权登录
function openQQ(){
	
	var checkClientIsInstalled = 0;//默认值是 0,仅仅针对 iOS平台有效![]()
	YCQQ.ssoLogin(function(args){
	      alert("token is " + args.access_token);
	      alert("userid is " +args.userid);
	      //alert("expires_time is "+ new Date(parseInt(args.expires_time)) + " TimeStamp is " +args.expires_time);
	     
	      },function(failReason){
	         alert(failReason);
	},checkClientIsInstalled);
	
}


//关闭程序
//setTimeout(function(){navigator.app.exitApp();},10000);





//主页面backbutton事件
function backbuttonIndex(){
	if (cordova.platformId !== 'windows') {
    	view1.router.back();
    }
}


document.addEventListener('backbutton', backbuttonIndex, false);

//Keyboard.shrinkView(true);





//====================================购物车========================================

var shop_goods_html = '';
for(var i=0; i<shop_goods.length; i++){
	shop_goods_html+='<li class="clear">'+
						'<div class="fl check_wrap">'+
							'<span class="check_wrap_span"></span>'+
						'</div>'+
						'<div class="fl shop_dec cleaer">'+
							'<a href="product.html" class="link item-link"><img src="'+shop_goods[i]["_pic"]+'" class="fl" /></a>'+
							'<div class="fl cont cleaer">'+
								'<h3>'+shop_goods[i]["_name"]+'</h3>'+
								'<p class="clear">￥'+shop_goods[i]["_price"]+'</p>'+
								'<div class="adds fl">'+
									'<span>+</span><em>'+shop_goods[i]["_amount"]+'</em><span>-</span>'+
								'</div>'+
							'</div>'+
							'<em class="dele">删除</em>'+
						'</div>'+
					'</li>';
}
$$('#shop_wrap ul').append(shop_goods_html);

//====================================购物车=END=======================================
