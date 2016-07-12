myApp.onPageInit('shake', function (page) {
	
	$$(".toolbar").addClass('hide');
	
	
	
	
	function onSuccess(acceleration) {
	    alert('Acceleration X: ' + acceleration.x + '\n' +
	          'Acceleration Y: ' + acceleration.y + '\n' +
	          'Acceleration Z: ' + acceleration.z + '\n' +
	          'Timestamp: '      + acceleration.timestamp + '\n');
	}
	
	function onError() {
	    alert('onError!');
	}
	
	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
	
	
	function watchIDonSuccess(acceleration) {
	    alert('Acceleration X: ' + acceleration.x + '\n' +
	          'Acceleration Y: ' + acceleration.y + '\n' +
	          'Acceleration Z: ' + acceleration.z + '\n' +
	          'Timestamp: '      + acceleration.timestamp + '\n');
	}
	
	function watchIDonError() {
	    alert('onError!');
	}
	
	var options = { frequency: 6000 };  // Update every 3 seconds
	
	var watchID = navigator.accelerometer.watchAcceleration(watchIDonSuccess, watchIDonError, options);
	
	
	
	
});


myApp.onPageAfterBack('shake', function (page) {
	navigator.accelerometer.clearWatch(watchID);
	$$(".toolbar").removeClass('hide');
});


