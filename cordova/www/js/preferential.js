myApp.onPageInit('preferential', function (page) {
	product_web = true;
	$$(".toolbar").addClass('hide');
	
});

myApp.onPageAfterBack('preferential', function (page) {
	product_web = false;
	$$(".toolbar").removeClass('hide');
});