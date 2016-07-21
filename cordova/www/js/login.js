myApp.onPageInit('login', function(page) {

	$$(".toolbar").addClass('hide');

	//QQ登录
	$("#qq").click(function() {
		onDeviceReady();
	});

	//微信登录
	$('#wechat').click(function() {
		myApp.alert('暂未开通!');
	});
	//微信登录
	$('#weibo').click(function() {
		myApp.alert('暂未开通!');
	});

});

myApp.onPageAfterBack('login', function(page) {

	$$(".toolbar").removeClass('hide');
});

function onDeviceReady() {

	YCQQ.checkClientInstalled(function() {
		openQQ();
	}, function() {
		// 如果安装的QQ客户端版本太低，不支持SSO登录也会返回没有安装客户端的错误
		myApp.alert('QQ版本过低，或未安装QQ客户端');
	});

}
//qq授权登录
function openQQ() {

	var checkClientIsInstalled = 0; //默认值是 0,仅仅针对 iOS平台有效![]()
	YCQQ.ssoLogin(function(args) {
		//myApp.alert("token is " + args.access_token);
		//myApp.alert("userid is " + args.userid);

		$.ajax({

			data: {
				id: args.userid,
				etoken: args.access_token,
			},
			type: "POST",
			url: "http://www.devonhello.com/eshop/login",
			success: function(data) {
				if(data[0]["eid"] || data != 0) {
					//如果用户以存在数据库（已经注册存在）

					if(data[0]["epic"]) {
						//alert("头像："+data[0]["epic"]);
						var murl = "http://www.devonhello.com/" + data[0]["epic"].substring(7);
						//下载并缓存
						toDownload(murl);

					}
					//alert("ID：" + data[0]["_id"]);
					window.localStorage.uid = data[0]["eid"];
					window.localStorage.uname = data[0]["ename"];
					$('#index_name').html(window.localStorage.uname);
				} else {
					//注册用户id到数据库

					//alert("ID：" + data);
					window.localStorage.uid = data;
					window.localStorage.uname = data.substring(0, 7);
					$('#index_name').html(window.localStorage.uname);
					setTimeout(function() {
						view4.router.back();
					}, 70);
				}

			},
			error: function(xhr) {
				alert(xhr.status);
			}
		});

		//window.localStorage.uid = args.userid;
		$('.login_check').each(function() {
			var ulr = $(this).attr("data-myurl");
			$(this).attr("href", ulr);
		});

	}, function(failReason) {
		myApp.alert(failReason);
	}, checkClientIsInstalled);

}