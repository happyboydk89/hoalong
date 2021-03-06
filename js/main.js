$(window).on("load", function () {
	var vw = $(window).width();

	if (vw > 1024) {
		$(".y-scroll, .intro4").mCustomScrollbar({
			callbacks: {
				whileScrolling: function () {
					if ($("body").hasClass("y-scroll")) {
						var scrollTop = $("body").find(".mCSB_container").css("top");
						var del_str = scrollTop.replace("-", "");
						var del_str2 = parseInt(del_str.replace("px", ""));
						var banner = $(".banner").height();
						if (del_str2 > 10) {
							$(".header.is-blue").addClass("fixed");
						} else {
							$(".header.is-blue").removeClass("fixed");
						}
						if (del_str2 >= banner - 118) {
							$(".page-kcn .anchor-foot").addClass("fixed");
						} else {
							$(".page-kcn .anchor-foot").removeClass("fixed");
						}
					}
				},
				onScroll: function () {},
			},
		});
	} else {
		$(".y-scroll, .intro4").mCustomScrollbar("destroy");
	}
	$("body").addClass("is-loaded");
	setTimeout(function () {
		$(".is-loaded .page-kcn .banner .bg img").addClass("is-hide");
	}, 1100);
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
					arrows: true,
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

	$(".htq-slider .slick, .csht-slider .slick, .ti-slider .slick, .splq-slider .slick").slick({
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

	$(".manager-list .slick").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		prevArrow: false,
    	nextArrow: false,
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


	$(".lkdt-list").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		autoplay: true,
		infinite: true,
		prevArrow: false,
    	nextArrow: false,
		autoplaySpeed: 5000,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	// $(".ti-slider .slick").slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	dots: true,
	// 	// autoplay: true,
	// 	infinite: true,
	// 	autoplaySpeed: 5000,
	// 	speed: 1000,
	// 	pauseOnHover: false,
	// 	responsive: [
	// 		{
	// 			breakpoint: 767,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 	],
	// });
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
		},
	});
	$("#fullpage2").fullpage({
		anchors: ["section0", "section1", "section2", "section3"],
		fitToSection: false,
		scrollOverflow: true,
		scrollOverflowOptions: {
			click: false,
			preventDefault: false,
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

	$(window).scroll(function () {
		var sbHeight = window.pageYOffset;
		var banner = $(".banner").height();
		$(".header.is-blue").addClass("fixed");
		if ($(window).scrollTop() === 0) {
			$(".header.is-blue").removeClass("fixed");
		}
		if (sbHeight >= banner - 118) {
			$(".page-kcn .anchor-foot").addClass("fixed");
		} else {
			$(".page-kcn .anchor-foot").removeClass("fixed");
		}
	});
});

$(function () {
	var top = 160;
	//smooth scroll
	$("a[href*=\\#]:not([href=\\#])")
		.not(".j-inline, .j-moveTo, .anchor-foot a")
		.click(function () {
			if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
				if (target.length) {
					$("html,body").animate(
						{
							scrollTop: target.offset().top - top,
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
		$(".thanh-tuu .slick,.manager-list .slick").slick("setPosition");
		$(".thanh-tuu .slick,.manager-list .slick").slick("refresh");
		$(".sec1").attr("data-bg", num);
	});
	$(".j-tab").click(function () {
		var num = $(this).attr("data-tab");
		$(".t-conts .cont").hide();
		$(".t-conts .cont").eq(num).show();
		$(".tabs li").removeClass("is-select");
		$(".tabs li").eq(num).addClass("is-select");
		$(".thanh-tuu .slick,.manager-list .slick").slick("setPosition");
		$(".thanh-tuu .slick,.manager-list .slick").slick("refresh");
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

	$(".maxheight_show .j-toggle").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".maxheight_show").next(".maxheight_hide").slideDown();
		$(this).hide();
	});

	$(document).on("click", ".anchor-foot a", function (e) {
		e.preventDefault();
		var href = $(this).attr("href"),
			target = $(href).parents(".mCustomScrollbar");
		console.log($(href).position().top);
		if (target.length) {
			target.mCustomScrollbar("scrollTo", $(href).position().top - top);
		}
	});


	$('.thanh-tuu .slick').each(function() {
		$(this).magnificPopup({
			delegate: '.slick-slide:not(.slick-cloned) a',
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
});
