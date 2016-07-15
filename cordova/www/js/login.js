myApp.onPageInit('login', function(page) {

	$$(".toolbar").addClass('hide');

	//QQ登录
	$("#qq").click(function() {
		onDeviceReady();
	});

	//微信登录
	$('#wechat').click(function() {
		alert('暂未开通!');
	});
	//微信登录
	$('#weibo').click(function() {
		alert('暂未开通!');
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
		alert('QQ版本过低，或未安装QQ客户端');
	});

}
//qq授权登录
function openQQ() {

	var checkClientIsInstalled = 0; //默认值是 0,仅仅针对 iOS平台有效![]()
	YCQQ.ssoLogin(function(args) {
		alert("token is " + args.access_token);
		alert("userid is " + args.userid);
		//window.localStorage.uid = args.userid;
		$('.login_check').each(function() {
			var ulr = $(this).attr("data-myurl");
			$(this).attr("href", ulr);
		});
		setTimeout(function() {
			view4.router.back();
		}, 70);

	}, function(failReason) {
		alert(failReason);
	}, checkClientIsInstalled);

}