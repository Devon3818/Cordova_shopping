myApp.onPageInit('shake', function (page) {
	
	$$(".toolbar").addClass('hide');
	
});


myApp.onPageAfterBack('shake', function (page) {
	
	$$(".toolbar").removeClass('hide');
});


