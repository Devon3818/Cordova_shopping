myApp.onPageInit('user', function(page) {

	//alert(window.localStorage.uname);
	$('#user_name').val(window.localStorage.uname);

});

myApp.onPageAfterAnimation('user', function(page) {

	$$('#user_save').on('click', function() {
		myApp.confirm('确定要更改?', '提示', function() {

			var name = $('#user_name').val();

			//更新资料
			$.ajax({

				data: {
					id: window.localStorage.uid,
					name: name,
				},
				type: "POST",
				url: "http://www.devonhello.com/eshop/updateData",
				success: function(data) {

					if(data != 0) {
						window.localStorage.uname = name;
						setTimeout(function() {
							view4.router.back();
						}, 70);
					} else {
						alert("err");
					}

				},
				error: function(xhr) {
					//alert("err：" + xhr.status);
					if(xhr.status == 200) {
						window.localStorage.uname = name;
						setTimeout(function() {
							view4.router.back();
						}, 70);
					}
				}
			});

		});
	});

});

myApp.onPageAfterBack('user', function(page) {

});