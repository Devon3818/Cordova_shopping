define(function(require, exports) {

	exports.show = function(oSection, work_banners) {

		var oHash = window.location.hash.substring(1) || 'index';
		$('.back').css('transform', 'rotateY(100deg)');


		oSection.each(function(index) {
			

			//对应hash显示不同版块
			$(this).css('display', 'none');
			var hash = $(this).attr("data-hash");

			if (oHash == hash) {

				oSection.eq(index).css('display', 'block');
				switch (hash) {
					case 'index':
						require('./indexIn.js').init(oSection);
						break;
					case 'WebWorks':
						require('./WebWorksIn.js').init(oSection);
						break;
					case 'Chat':
						require('./ChatIn.js').init(oSection);
						break;
					case 'Introduce':
						require('./IntroduceIn.js').init(oSection);
						break;
					case 'AppWorks':
						require('./AppWorksIn.js').init(oSection);
						break;
					case 'Experience':
						require('./ExperienceIn.js').init(oSection);
						break;
					case 'Team':
						require('./TeamIn.js').init(oSection);
						break;
				}
			}
		});
		if (oHash == 'work' || oHash == 'contact') {
			oSection.eq(0).css('display', 'block');
			require('./indexIn.js').init(oSection);
		}
	}

});