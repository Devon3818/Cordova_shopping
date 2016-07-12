myApp.onPageInit('evaluate', function (page) {
	
	$$(".toolbar").addClass('hide');
	
});



myApp.onPageAfterBack('evaluate', function (page) {
	
	$$(".toolbar").removeClass('hide');
});


