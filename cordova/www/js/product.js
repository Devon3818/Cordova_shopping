//商品ID
var product_goods_id;

myApp.onPageInit('product', function (page) {
	
	product_goods_id = page.query["id"];
	//alert(product_goods_id);
	
	$$(".toolbar").addClass('hide');
	var productSwiper = myApp.swiper('.swiper-container2', {
		pagination : '.swiper-pagination-product',
		//paginationType	:	'fraction',
	    autoplay: 3000,//可选选项，自动滑动
	    loop : true,
	    autoplayDisableOnInteraction : false,
	    
	 });
	 
	 //添加商品到购物车
	 $('.addbuy').click(function(){
	 	addShop_goods();
	 });
	
	
});

myApp.onPageAfterBack('product', function (page) {
	if(!product_web){
		$$(".toolbar").removeClass('hide');
	}
});


//添加到购物车数组
function addShop_goods(){
	
	var isInArr = false;
	
	for(var i=0; i<shop_goods.length; i++){
		if(shop_goods[i]["_id"] == product_goods_id){
			isInArr = true;
		}
	}
	
	setTimeout(function(){
		
		if(!isInArr){
			alert('添加成功');
			shop_goods.unshift({"_id":product_goods_id,"_name":"产品名称169","_price":200,"_amount":1,"_pic":"img/product_1.jpg"});
			updataShop();
		}else{
			alert("你已经添加过，请查看购物车");
		}
		
	},70);
	
}
