myApp.onPageInit('list', function (page) {
	
	$$(".toolbar").addClass('hide');
	
});

myApp.onPageAfterBack('list', function (page) {
	
	$$(".toolbar").removeClass('hide');
});