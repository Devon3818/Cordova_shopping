myApp.onPageInit('address', function(page) {

	$$(".toolbar").addClass('hide');

});

myApp.onPageAfterBack('address', function(page) {

	$$(".toolbar").removeClass('hide');
	
	//初始化头像选择事件
	cameraInit();

});