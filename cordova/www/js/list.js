var loading = true;


myApp.onPageInit('list', function (page) {
	
	$$(".toolbar").addClass('hide');
	product_web = true;
	
	
	$$('.infinite-scroll').on('infinite', function (){
		
		if(loading){
			loading = false;
			
			return true;
		}
		
		myApp.detachInfiniteScroll($$('.infinite-scroll'));
		alert(666);
		
	});
	
	
	
});

myApp.onPageAfterBack('list', function (page) {
	
	$$(".toolbar").removeClass('hide');
	product_web = false;
});