myApp.onPageInit('Abulk', function (page) {
	product_web = true;
	$$(".toolbar").addClass('hide');
	
});

myApp.onPageAfterBack('Abulk', function (page) {
	product_web = false;
	$$(".toolbar").removeClass('hide');
});