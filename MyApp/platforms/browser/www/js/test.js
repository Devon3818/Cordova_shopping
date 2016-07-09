

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
	
	
	//navigator.camera.getPicture(cameraSuccess, cameraError);

	function cameraSuccess(imageData) {
		alert(imageData);
	}

	function cameraError() {
	    alert('cameraError');
	}
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






