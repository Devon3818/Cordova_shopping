define(function(require, exports) {


	exports.init = function(ele, hash, work_banners) {
		
		$('.ul_nav').each(function(index){
			$(this).css({"opacity":0,"transform":"translateX(-100px)","transition-delay":index*100+'ms'});
		});
		
		
		
		ele.eq(0).css({
			"transition": "all 800ms",
			"opacity": '0'
		})
		ele[0].addEventListener('transitionend', end, false);

		function end() {
			this.removeEventListener('transitionend', end, false);
			ele.eq(0).css('display', 'none');
			window.location.hash = hash;
			require('./show.js').show(ele, work_banners);
		}

	}


})