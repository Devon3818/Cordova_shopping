define(function(require, exports) {

	exports.init = function(oSection) {

		setTimeout(function(){
			oSection.eq(2).css('opacity', 1);
		},700);
		
		$('#web_content').addClass('width_fluid');
		setTimeout(function() {
			$('.back').css('transform', 'rotateY(0deg)');
		}, 900);


	}

});