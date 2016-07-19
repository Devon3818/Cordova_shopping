define(function(require, exports) {

	exports.init = function(oSection, inHash, work_banners) {

		//alert(999);
		$('#web_content').removeClass('width_fluid');

		//alert(oSection.length);
		oSection.eq(6).css({
			"transition": "all 800ms",
			"opacity": '0'
		})
		oSection[6].addEventListener('transitionend', end, false);

		function end() {
			this.removeEventListener('transitionend', end, false);
			window.location.hash = inHash;
			require('./show.js').show(oSection, work_banners);
		}




	}

});