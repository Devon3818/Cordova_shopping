

var winWidth = document.body.clientWidth;
document.getElementsByTagName('html')[0].style.fontSize = winWidth / 10 + 'px';
//alert(document.getElementsByTagName('html')[0].style.fontSize);

window.onerror = function(msg, url, line) {  
   var idx = url.lastIndexOf("/");  
   if(idx > -1) {  
    url = url.substring(idx+1);  
   }  
   alert("ERROR in " + url + " (line #" + line + "): " + msg);  
   return false;  
};  

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	
	YCQQ.checkClientInstalled(function(){
	    //alert('client is installed');
	},function(){
	    // 如果安装的QQ客户端版本太低，不支持SSO登录也会返回没有安装客户端的错误
	    //alert('client is not installed');
	});
	
}






//qq授权登录
function openQQ(){
	
	var checkClientIsInstalled = 0;//默认值是 0,仅仅针对 iOS平台有效![]()
	YCQQ.ssoLogin(function(args){
	      alert("token is " + args.access_token);
	      alert("userid is " +args.userid);
	      //alert("expires_time is "+ new Date(parseInt(args.expires_time)) + " TimeStamp is " +args.expires_time);
	     
	      },function(failReason){
	         alert(failReason);
	},checkClientIsInstalled);
	
}


//关闭程序
//setTimeout(function(){navigator.app.exitApp();},10000);





//主页面backbutton事件
function backbuttonIndex(){
	if (cordova.platformId !== 'windows') {
    	view1.router.back();
    }
}


document.addEventListener('backbutton', backbuttonIndex, false);

//Keyboard.shrinkView(true);






