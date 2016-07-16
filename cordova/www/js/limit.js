myApp.onPageInit('limit', function (page) {
	product_web = true;
	$$(".toolbar").addClass('hide');
	
});

myApp.onPageAfterBack('limit', function (page) {
	product_web = false;
	$$(".toolbar").removeClass('hide');
});