//商品ID
var product_goods_id;

myApp.onPageInit('product', function(page) {
	var product_web_alls = 1;
	var product_web_amountDom = $('#product_web_amount');
	product_goods_id = page.query["id"];
	//alert(product_goods_id);

	$$(".toolbar").addClass('hide');
	var productSwiper = myApp.swiper('.swiper-container2', {
		pagination: '.swiper-pagination-product',
		//paginationType	:	'fraction',
		autoplay: 3000, //可选选项，自动滑动
		loop: true,
		autoplayDisableOnInteraction: false,

	});

	//减少购买数目
	$('#product_web_sub').click(function() {
		if(product_web_alls <= 1) {
			return false;
		} else {
			product_web_alls--;
			product_web_amountDom.html(product_web_alls);
		}
	});

	//增加购买数目
	$('#product_web_add').click(function() {
		product_web_alls++;
		product_web_amountDom.html(product_web_alls);
	});

	//添加商品到购物车
	$('.addbuy').click(function() {
		addShop_goods(product_web_amountDom.html());
	});

	//跳转购物车
	$('.shopping').click(function() {
		myApp.showTab('#view-3');
		if(!product_web) {
			view1.router.back({
				"animatePages": false
			});
		} else {
			//当在分类列表打开时，需要back返回两层页面
			$$(".toolbar").removeClass('hide');
			view2.router.back({
				"animatePages": false
			});
			setTimeout(function() {
				view2.router.back({
					"animatePages": false
				});
			}, 70);
			product_web = false;
		}
	});

});

myApp.onPageAfterBack('product', function(page) {
	if(!product_web) {
		$$(".toolbar").removeClass('hide');
	}
});

//添加到购物车数组
function addShop_goods(amount) {

	var isInArr = false;

	for(var i = 0; i < shop_goods.length; i++) {
		if(shop_goods[i]["_id"] == product_goods_id) {
			isInArr = true;
		}
	}

	setTimeout(function() {

		if(!isInArr) {
			alert('添加成功');
			shop_goods.unshift({
				"_id": product_goods_id,
				"_name": "产品名称169",
				"_price": 200,
				"_amount": amount,
				"_pic": "img/product_1.jpg"
			});
			updataShop();
		} else {
			alert("你已经添加过，请查看购物车");
		}

	}, 70);

}