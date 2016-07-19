define(function(require, exports) {

	exports.doSomething = function() {
		
		
		var Top = $('#scrollTop');
		
		$(window).scroll(function(){
			
			if($(window).scrollTop() > 200){
				Top.css('display','block');
			}else{
				Top.css('display','none');
			}
			
		});
		
		Top.click(function(){
			var oHash = window.location.hash.substring(1);
			switch (oHash){
				case 'index':
						window.location.hash = "index";
						$('html,body').animate({scrollTop:0},800);
					break;
				case 'work':
						window.location.hash = "index";
					break;
				case 'contact':
						window.location.hash = "index";
					break;
				default:
					$('html,body').animate({scrollTop:0},800);
					break;
			}
			
		});
		
		
		
		
		var winW = $(window).width(),
			//获取多个场面版块
			oSection = $('.webPage'),
			//WORK不同版块元素获取
			work_banners = $('.work_banner');
			
		
		$(window).resize(function(){
			winW = $(window).width();
			$('html').css('fontSize',winW/10);
		});
		
		//设置html元素字体大小，以便使用rem
		$('html').css('fontSize',winW/10);
		
		//引入页面显示控制器并初始化
		require('./show.js').show(oSection, work_banners);
		
		//引入页面退出场面控制器并初始化
		require('./hide.js').hide(oSection, work_banners);

	};

});