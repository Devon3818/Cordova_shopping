//商品ID
var product_goods_id;

myApp.onPageInit('product', function (page) {
	
	product_goods_id = page.query["id"];
	alert(product_goods_id);
	
	$$(".toolbar").addClass('hide');
	var productSwiper = myApp.swiper('.swiper-container2', {
		pagination : '.swiper-pagination-product',
		//paginationType	:	'fraction',
	    autoplay: 3000,//可选选项，自动滑动
	    loop : true,
	    
	 });
	
	
});

myApp.onPageAfterBack('product', function (page) {
	if(!product_web){
		$$(".toolbar").removeClass('hide');
	}
});