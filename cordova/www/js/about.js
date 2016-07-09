myApp.onPageInit('about', function (page) {
	
	$$(".toolbar").addClass('hide');
	
});

myApp.onPageAfterBack('about', function (page) {
	
	$$(".toolbar").removeClass('hide');
});