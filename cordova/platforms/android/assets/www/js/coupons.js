myApp.onPageInit('coupons', function (page) {
	
	$$(".toolbar").addClass('hide');
	
});



myApp.onPageAfterBack('coupons', function (page) {
	
	$$(".toolbar").removeClass('hide');
});


