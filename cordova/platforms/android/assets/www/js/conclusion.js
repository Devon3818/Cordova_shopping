myApp.onPageInit('conclusion', function (page) {
	
	$$(".toolbar").addClass('hide');
	product_web = true;
});



myApp.onPageAfterBack('conclusion', function (page) {
	
	$$(".toolbar").removeClass('hide');
	product_web = false;
});


