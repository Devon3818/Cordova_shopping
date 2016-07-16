var namr,tel,address;


myApp.onPageInit('address_editor', function(page) {
	
	name = page.query["n"];
	tel = page.query["tel"];
	address = tel = page.query["a"];
	
	$('#address_editor_name').val(page.query["n"]);
	$('#address_editor_tel').val(page.query["tel"]);
	$('#address_editor_address').val(page.query["a"]);
	
	
});

myApp.onPageAfterBack('address_editor', function(page) {

});