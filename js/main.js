$(window).on("load", function () {
	var vw = $(window).width();
	if (vw > 1024) {
		$(".y-scroll, .intro4").mCustomScrollbar();
	} else {
		$(".y-scroll, .intro4").mCustomScrollbar("destroy");
	}
});

$(function () {
	$(".mv .slick").slick({
		dots: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 4000,
		speed: 1000,
		fade: true,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: false,
				},
			},
		],
	});
	$(".mv .slick").on("afterChange", function () {
		var dataId = parseInt($(".slick-current").attr("data-slick-index")) + 1;
		$(".m-pager span").text(dataId);
	});
	if ($("#confirm").length > 0) {
		$.magnificPopup.open({
			items: {
				src: "#confirm",
			},
			type: "inline",
			// closeOnBgClick: false,
			closeOnContentClick: false,
			closeBtnInside: false,
			showCloseBtn: false,
		});
	}

	$(".j-inline").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: false,
		showCloseBtn: false,
	});
	$(document).on("click", ".v-modal-cancel", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	$(".kcn-slider .slick").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 2000,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".thanh-tuu .slick").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		// autoplay: true,
		infinite: true,
		autoplaySpeed: 2000,
		speed: 1000,
		pauseOnHover: false,
	});

	$(".platform-slider .slick").slick({
		slidesToShow: 8,
		slidesToScroll: 3,
		dots: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
	});

	$(".client-slider .slick").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".htq-slider .slick").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".csht-slider .slick").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		// autoplay: true,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".ti-slider .slick").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		// autoplay: true,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

});

$(function () {
	$("#fullpage").fullpage({
		fitToSection: false,
		scrollOverflow: true,
		scrollOverflowOptions: {
			click: false,
			preventDefault: false,
		},
		afterLoad: function (anchorLink, index) {
			if (index == 1) {
			}
			if (index == 2) {
				var vw = $(window).width();
				if (vw < 1024) {
					$.fn.fullpage.setMouseWheelScrolling(false);
					$.fn.fullpage.setAllowScrolling(false);
				}
			}
			// if ($(this).hasClass("is-h-blue")) {
			// 	$(".header, .page-timeline, .copyright").addClass("is-blue");
			// } else {
			// 	$(".header, .page-timeline, .copyright").removeClass("is-blue");
			// }
		},
	});
	$(".j-up").click(function (e) {
		e.preventDefault();
		$.fn.fullpage.moveSectionUp();
		return false;
	});
	$(".j-down").click(function (e) {
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
		return false;
	});
});

$(function () {
	//smooth scroll
	$("a[href*=\\#]:not([href=\\#])")
		.not(".j-inline")
		.click(function () {
			if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
				if (target.length) {
					$("html,body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000
					);
					return false;
				}
			}
		});
	//tabs
	$(".tabs li").click(function () {
		var num = $(".tabs li").index(this);
		$(".t-conts .cont").hide();
		$(".t-conts .cont").eq(num).show();
		$(".tabs li").removeClass("is-select");
		$(this).addClass("is-select");
		$(".thanh-tuu .slick").slick("setPosition");
		$(".sec1").attr("data-bg", num);
	});
	$(".j-tab").click(function () {
		var num = $(this).attr("data-tab");
		$(".t-conts .cont").hide();
		$(".t-conts .cont").eq(num).show();
		$(".tabs li").removeClass("is-select");
		$(".tabs li").eq(num).addClass("is-select");
		$(".thanh-tuu .slick").slick("setPosition");
		$(".sec1").attr("data-bg", num);
	});

	// inview
	$(".inviewfadeIn").on("inview", function (event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass("fadeIn");
		}
	});
	$(".inviewfadeInUp").on("inview", function (event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass("fadeInUp");
		}
	});
	$(".inviewfadeInDown").on("inview", function (event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass("fadeInDown");
		}
	});
	$(".inviewfadeInLeft").on("inview", function (event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass("fadeInLeft");
		}
	});
	$(".inviewfadeInRight").on("inview", function (event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass("fadeInRight");
		}
	});

	$(".btn__menu").click(function () {
		$(this).toggleClass("is-open");
		$("body").toggleClass("menu-open");
	});

	var h = $(".is-fixed");
	$(window).on("load scroll", function () {
		var value = $(this).scrollTop();
		if (value > 80) {
			h.addClass("is-scrolling");
		} else {
			h.removeClass("is-scrolling");
		}
	});
});
