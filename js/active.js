(function($) {
	'use strict';
	var $window = $(window);
	$window.on('load', function() {
		$('#preloader').fadeOut('slow', function() {
			$(this).remove();
		});
	});
	if ($.fn.owlCarousel) {
		var wel_slides = $('.welcome_slides');
		wel_slides.owlCarousel({
			items: 1,
			loop: !0,
			nav: !1,
			dots: !0,
			dotsSpeed: 1000,
			autoplay: !0,
			smartSpeed: 1000,
			autoplayHoverPause: !1,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
		});
		wel_slides.on('translate.owl.carousel', function() {
			var layer = $('[data-animation]');
			layer.each(function() {
				var anim_name = $(this).data('animation');
				$(this)
					.removeClass('animated ' + anim_name)
					.css('opacity', '0');
			});
		});
		$('[data-delay]').each(function() {
			var anim_del = $(this).data('delay');
			$(this).css('animation-delay', anim_del);
		});
		$('[data-duration]').each(function() {
			var anim_dur = $(this).data('duration');
			$(this).css('animation-duration', anim_dur);
		});
		wel_slides.on('translated.owl.carousel', function() {
			var layer = wel_slides.find('.owl-item.active').find('[data-animation]');
			layer.each(function() {
				var anim_name = $(this).data('animation');
				$(this)
					.addClass('animated ' + anim_name)
					.css('opacity', '1');
			});
		});
		var dot = $('.welcome_slides .owl-dot');
		dot.each(function() {
			var index = $(this).index() + 1;
			if (index < 10) {
				$(this)
					.html('0')
					.append(index);
			} else {
				$(this).html(index);
			}
		});
		$('.testimonials').owlCarousel({
			items: 1,
			margin: 0,
			loop: !0,
			nav: !0,
			navText: [
				'<i class="ti-arrow-left"></i>',
				'<i class="ti-arrow-right"></i>',
			],
			dots: !0,
			autoplay: !1,
			smartSpeed: 800,
		});
		$('.app_screenshots').owlCarousel({
			items: 5,
			margin: 30,
			loop: !0,
			nav: !1,
			center: !0,
			dots: !1,
			center: !0,
			autoplay: !0,
			autoplayTimeout: 3000,
			smartSpeed: 800,
			responsive: {
				0: { items: 2 },
				576: { items: 2 },
				768: { items: 3 },
				992: { items: 4 },
				1200: { items: 5 },
			},
		});
	}
	var aboutbtn = $('#about-btn');
	var benefitsbtn = $('#benefits-btn');
	var contactbtn = $('.contact-btn');
	aboutbtn.click(function() {
		$('html, body').animate({ scrollTop: $('#about-us').offset().top }, 1500);
	});
	benefitsbtn.click(function() {
		$('html, body').animate({ scrollTop: $('#benefits').offset().top }, 1500);
	});
	contactbtn.click(function() {
		$('html, body').animate(
			{ scrollTop: $('#contact').offset().top - 100 },
			1500,
		);
	});
	if ($.fn.onePageNav) {
		$('#corenav').onePageNav({
			currentClass: 'current_page_item',
			easing: 'easeInOutQuart',
			scrollSpeed: 1440,
		});
	}
	if ($.fn.niceScroll) {
		$('textarea').niceScroll({
			cursorcolor: '#1a1a1a',
			cursorwidth: '5px',
			background: 'transparent',
			cursorborder: 'none',
			cursorborderradius: 0,
			zindex: '5000',
		});
	}
	if ($.fn.magnificPopup) {
		$('.video_btn').magnificPopup({ type: 'iframe' });
	}
	if ($.fn.scrollUp) {
		$.scrollUp({
			scrollSpeed: 1500,
			easingType: 'easeInOutQuart',
			scrollText: ['<i class="ti-angle-up"></i>'],
			scrollImg: !1,
		});
	}
	if ($.fn.tooltip) {
		$('[data-toggle="tooltip"]').tooltip();
	}
	var benefits = $('.single_benifits');
	benefits.on('mouseenter', function() {
		benefits.removeClass('active');
		$(this).addClass('active');
	});
	if ($.fn.counterUp) {
		$('.counter').counterUp({ delay: 10, time: 1500 });
	}
	$window.on('scroll', function() {
		if ($window.scrollTop() > 150) {
			$('.main_header_area').addClass('sticky slideInDown');
		} else {
			$('.main_header_area').removeClass('sticky slideInDown');
		}
	});
	if ($window.width() > 767) {
		new WOW().init();
	}
	if ($.fn.jarallax) {
		$('.jarallax').jarallax({ speed: 0.2 });
	}
	$("a[href='#']").on('click', function($) {
		$.preventDefault();
	});
	$('.select_opt').on('click', function() {
		var getId = $(this).attr('value');
		$('body')
			.removeClass('green purple red pink deepPurple naval cyan blue deepRose')
			.addClass(getId);
	});
	$('.color_picker_switcher').on('click', function() {
		$('.color_picker_area').toggleClass('on');
	});
	$('.onepage_demo_switcher').on('click', function() {
		$('.onepage_demo_area').toggleClass('on');
	});
})(jQuery);
