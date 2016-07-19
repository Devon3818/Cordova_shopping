define(function(require, exports) {

	exports.hide = function(oSection, work_banners) {

		//work版块点击事件
		$('.work_banner').each(function(index) {
			$(this).click(function() {
				var inHash = $(this).attr('data-hash');

				switch (window.location.hash.substring(1) || 'index') {

					case 'index':
						require('./indexOut.js').init(oSection, inHash, work_banners);
						break;
					case 'work':
						require('./indexOut.js').init(oSection, inHash, work_banners);
						break;
					case 'contact':
						require('./indexOut.js').init(oSection, inHash, work_banners);
						break;


				}

				$('html,body').stop();
				$('html,body').animate({
					scrollTop: 0
				}, "slow");





			});
		});



		//返回事件，点击后返回到首页
		$('.back').click(function() {
			switch (window.location.hash.substring(1)) {

				case 'WebWorks':
					require('./WebWorksOut.js').init(oSection, 'index', work_banners);
					break;
				case 'Chat':
					require('./ChatOut.js').init(oSection, 'index', work_banners);
					break;
				case 'Introduce':
					require('./IntroduceOut.js').init(oSection, 'index', work_banners);
					break;
				case 'AppWorks':
					require('./AppWorksOut.js').init(oSection, 'index', work_banners);
					break;
				case 'Experience':
					require('./ExperienceOut.js').init(oSection, 'index', work_banners);
					break;
				case 'Team':
					require('./TeamOut.js').init(oSection, 'index', work_banners);
					break;

			}
			$('html,body').stop();
			$('html,body').animate({
				scrollTop: 0
			}, "slow");
		});

	}

});