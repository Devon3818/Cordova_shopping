myApp.onPageInit('goods', function(page) {

	$$(".toolbar").addClass('hide');

});

myApp.onPageAfterBack('goods', function(page) {

	$$(".toolbar").removeClass('hide');
});