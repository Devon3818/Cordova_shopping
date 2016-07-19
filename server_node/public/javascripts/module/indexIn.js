define(function(require, exports) {

	exports.init = function(oSection) {


		$('.work_banner').each(function(index) {
			$(this).mouseover(function() {
				$('.shadowBG').eq(index).css("opacity", 1);
			})
			$(this).mouseout(function() {
				$('.shadowBG').eq(index).css("opacity", 0);
			})
		});



		$('.ul_nav').each(function(index) {
			$(this).css({
				"opacity": 1,
				"transform": "translateX(0px)"
			});
		});

		setTimeout(function() {
			oSection.eq(0).css('opacity', 1);
		}, 700);

		var oHash = window.location.hash.substring(1);
		var navLi = $('.ul_nav');
		init(oHash);

		function init(oHash) {
			$('html,body').stop();
			switch (oHash) {
				case "index":
					$('html,body').animate({
						scrollTop: 0
					}, "slow");
					changeColor();
					navLi.eq(0).addClass('act');
					break;
				case "work":
					var st = $('.work_header').offset().top;
					$('html,body').animate({
						scrollTop: st
					}, "slow");
					changeColor();
					navLi.eq(1).addClass('act');
					break;
				case "contact":
					var st = $('.contact_header').offset().top;
					$('html,body').animate({
						scrollTop: st
					}, "slow");
					changeColor();
					navLi.eq(2).addClass('act');
					break;
			}
		}



		//菜单Action切换改变颜色样式
		function changeColor() {
			navLi.each(function() {
				$(this).removeClass('act');
			});
		}


		//监听hash改变事件
		window.addEventListener('hashchange', function() {
			oHash = window.location.hash.substring(1);
			init(oHash);
		}, false);




		//点击菜单改变对应hash
		$('.pc_about').click(function() {
			window.location.hash = "index";
			changeColor();
			navLi.eq(0).addClass('act');
			return true;
		})
		$('.pc_work').click(function() {
			window.location.hash = "work";
			changeColor();
			navLi.eq(1).addClass('act');
			return true;
		})
		$('.pc_contact').click(function() {
			window.location.hash = "contact";
			changeColor();
			navLi.eq(2).addClass('act');
			return true;
		})

		//留言板提交
		$('.ajaxBtn').click(function() {

			var inputName = $("input[type='text']"),
				inputEmail = $("input[type='email']"),
				inputNote = $('textarea');

			var isname = !is.empty(inputName.val()),
				isemail = is.email(inputEmail.val()),
				isnote = !is.empty(inputNote.val());

			if (isname && isemail && isnote) {
				alert('submit');
				inputName.val('');
				inputEmail.val('');
				inputNote.val('');
			} else {
				alert("Please complete and fill in the correct format");
			}

		});


		$('.sendVal').each(function(index) {
			$(this).focusin(function() {
				$('.contact_input').eq(index).find('span').css('background', '#c33');
			});
			$(this).focusout(function() {
				$('.contact_input').eq(index).find('span').css('background', 'dimgray');
			});
		});


		//监听滚动条高度，切换对应菜单颜色变化
		$(window).scroll(function() {

			var winScrollTop = $(window).scrollTop() + 100,
				work_headerT = $('.work_header').offset().top,
				contact_headerT = $('.contact_header').offset().top;

			if (work_headerT <= winScrollTop && contact_headerT > winScrollTop) {
				changeColor();
				navLi.eq(1).addClass('act');

			} else if (contact_headerT <= winScrollTop) {
				changeColor();
				navLi.eq(2).addClass('act');

			} else {
				changeColor();
				navLi.eq(0).addClass('act');

			}
		});


	}

});