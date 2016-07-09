myApp.onPageInit('product', function (page) {
	
	$$(".toolbar").addClass('hide');
	var productSwiper = myApp.swiper('.swiper-container2', {
		pagination : '.swiper-pagination-product',
		//paginationType	:	'fraction',
	    autoplay: 3000,//可选选项，自动滑动
	    loop : true,
	    
	 });
	
	
});

myApp.onPageAfterBack('product', function (page) {
	
	$$(".toolbar").removeClass('hide');
});