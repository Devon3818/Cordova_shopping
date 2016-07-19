define(function(require, exports) {

	exports.init = function(oSection, inHash, work_banners) {


		$('#web_content').removeClass('width_fluid');


		oSection.eq(4).css({
			"transition": "all 800ms",
			"opacity": '0'
		})
		oSection[4].addEventListener('transitionend', end, false);

		function end() {
			this.removeEventListener('transitionend', end, false);
			window.location.hash = inHash;
			require('./show.js').show(oSection, work_banners);
		}




	}

});