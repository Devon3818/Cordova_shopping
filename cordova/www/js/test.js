

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

//更新购物车
function updataShop(){
	
	AllGoodsDom.html(0);
	AllGoodsPriceDom.html( '0.00' );
	settlementDom.html( '0.00' );
	$('#shop_wrap ul').html('');
	removeGoodsEvent();
	initGoods();
}


function initGoods(){
	var shop_goods_html = '';
	for(var i=0; i<shop_goods.length; i++){
		shop_goods_html+='<li class="clear goods_ls">'+
							'<div class="fl check_wrap">'+
								'<span class="check_wrap_span" data-id="'+shop_goods[i]["_id"]+'"></span>'+
							'</div>'+
							'<div class="fl shop_dec cleaer">'+
								'<a href="product.html" class="link item-link"><img src="'+shop_goods[i]["_pic"]+'" class="fl" /></a>'+
								'<div class="fl cont cleaer">'+
									'<h3>'+shop_goods[i]["_name"]+'</h3>'+
									'<p class="clear">￥<span class="goods_price">'+shop_goods[i]["_price"]+'</span></p>'+
									'<div class="adds fl">'+
										'<span class="goods_span_add">+</span><em class="goods_amount">'+shop_goods[i]["_amount"]+'</em><span class="goods_span_sub">-</span>'+
									'</div>'+
								'</div>'+
								'<em class="dele">删除</em>'+
							'</div>'+
						'</li>';
	}
	$$('#shop_wrap ul').append(shop_goods_html);
	
	goodsEvent();
}

initGoods();

//绑定购物车点击事件
function goodsEvent(){
	
	//选择商品事件
	$('.check_wrap_span').each(function(index){
		$(this).click(function(){
			$(this).toggleClass('ok');
			Alls();
		});
	});
	
	
	
	//添加购买数量
	$('.goods_span_add').each(function(index){
		
		$(this).click(function(){
			var goods_amount = $('.goods_amount').eq(index),
			amount = goods_amount.html();
			goods_amount.html(parseInt(amount)+1);
			Alls();
		});
		
	});

//减少购买数量
	$('.goods_span_sub').each(function(index){
		
		$(this).click(function(){
			var goods_amount = $('.goods_amount').eq(index),
			amount = goods_amount.html();
			if(amount<=1){
				return false;
			}
			goods_amount.html(parseInt(amount)-1);
			Alls();
		});
		
	});
}


//取消购物车点击事件,并再次绑定
function removeGoodsEvent(){
	$('.check_wrap_span').each(function(){
		$(this).unbind();
	});
	$('.goods_span_sub').each(function(){
		$(this).unbind();
	});
	$('.goods_span_add').each(function(){
		$(this).unbind();
	});
	goodsEvent();
}

//选择货物数量DOM
var AllGoodsDom = $('.AllGoods');
//商品总价DOM
var AllGoodsPriceDom = $('.AllGoods_price');
//结算价格DOM
var settlementDom = $('.settlement');

//合计总数和价格
function Alls(){
	var AllGoods = 0,
	AllGoodsPrice = 0;
	AllGoodsDom.html(AllGoods);
	$('.goods_ls .ok').each(function(index){
		AllGoods++;
		AllGoodsDom.html(AllGoods);
		
		var goods_price = $('.goods_price').eq(index).html();
		
		var goods_amount = $('.goods_amount').eq(index).html();
		AllGoodsPrice += parseInt(goods_price) * parseInt(goods_amount);
		
	});
	
	AllGoodsPriceDom.html( AllGoodsPrice );
	settlementDom.html( AllGoodsPrice );
}

Alls();


//更新全局shop_goods商品数组
function updataGoodsArr(){
	
	$('.goods_ls .ok').each(function(){
		
		var id = $(this).attr('data-id');
		var goods_amount = $('.goods_amount').eq(index).html();
		
		for(var i=0; i<shop_goods.length; i++){
			
			if(id==shop_goods[i]["_id"]){
				shop_goods[i]["_amount"] = goods_amount;
			}
			
		}
		
	});
	
	
	
}
//====================================购物车=END=======================================

