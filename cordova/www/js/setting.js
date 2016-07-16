myApp.onPageInit('setting', function(page) {

	$$(".toolbar").addClass('hide');
	//alert($("#qq"));
});

myApp.onPageAfterAnimation('setting', function(page) {

	$$('.confirm-ok').on('click', function() {
		myApp.confirm('确定要退出?', '提示', function() {
			myApp.alert('You clicked Ok button');
		});
	});

});

myApp.onPageAfterBack('setting', function(page) {

	$$(".toolbar").removeClass('hide');
	cameraInit();
});