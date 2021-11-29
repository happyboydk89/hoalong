/*!
 * fullPage 2.9.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!(function (e, n) {
	"use strict";
	"function" == typeof define && define.amd
		? define(["jquery"], function (o) {
				return n(o, e, e.document, e.Math);
		  })
		: "object" == typeof exports && exports
		? (module.exports = n(require("jquery"), e, e.document, e.Math))
		: n(jQuery, e, e.document, e.Math);
})("undefined" != typeof window ? window : this, function (e, n, o, t, i) {
	"use strict";
	var a = "fullpage-wrapper",
		r = "." + a,
		l = "fp-responsive",
		s = "fp-notransition",
		c = "fp-destroyed",
		d = "fp-enabled",
		f = "fp-viewing",
		u = "active",
		h = "." + u,
		v = "fp-completely",
		p = "." + v,
		g = "fp-section",
		m = "." + g,
		w = m + h,
		S = m + ":first",
		x = m + ":last",
		b = "fp-tableCell",
		y = "." + b,
		C = "fp-nav",
		T = "#" + C,
		k = "fp-tooltip",
		L = "." + k,
		A = "fp-slide",
		O = "." + A,
		I = O + h,
		E = "fp-slides",
		M = "." + E,
		B = "fp-slidesContainer",
		H = "." + B,
		R = "fp-table",
		z = "fp-slidesNav",
		D = "." + z,
		P = D + " a",
		q = ".fp-controlArrow",
		F = "fp-prev",
		V = "." + F,
		j = "fp-controlArrow " + F,
		Y = q + V,
		N = q + ".fp-next",
		X = e(n),
		U = e(o);
	e.fn.fullpage = function (V) {
		function W(n, o) {
			n || Nn(0), _n("autoScrolling", n, o);
			var t = e(w);
			V.autoScrolling && !V.scrollBar
				? (Jn.css({ overflow: "hidden", height: "100%" }), K(ko.recordHistory, "internal"), lo.css({ "-ms-touch-action": "none", "touch-action": "none" }), t.length && Nn(t.position().top))
				: (Jn.css({ overflow: "visible", height: "initial" }), K(!1, "internal"), lo.css({ "-ms-touch-action": "", "touch-action": "" }), t.length && Jn.scrollTop(t.position().top));
		}
		function K(e, n) {
			_n("recordHistory", e, n);
		}
		function _(e, n) {
			_n("scrollingSpeed", e, n);
		}
		function Q(e, n) {
			_n("fitToSection", e, n);
		}
		function G(e) {
			V.lockAnchors = e;
		}
		function J(e) {
			e ? (Dn(), Pn()) : (zn(), qn());
		}
		function Z(n, o) {
			void 0 !== o
				? ((o = o.replace(/ /g, "").split(",")),
				  e.each(o, function (e, o) {
						Un(n, o, "m");
				  }))
				: (Un(n, "all", "m"), n ? (J(!0), Fn()) : (J(!1), Vn()));
		}
		function $(n, o) {
			void 0 !== o
				? ((o = o.replace(/ /g, "").split(",")),
				  e.each(o, function (e, o) {
						Un(n, o, "k");
				  }))
				: (Un(n, "all", "k"), (V.keyboardScrolling = n));
		}
		function ee() {
			var n = e(w).prev(m);
			n.length || (!V.loopTop && !V.continuousVertical) || (n = e(m).last()), n.length && ze(n, null, !0);
		}
		function ne() {
			var n = e(w).next(m);
			n.length || (!V.loopBottom && !V.continuousVertical) || (n = e(m).first()), n.length && ze(n, null, !1);
		}
		function oe(e, n) {
			_(0, "internal"), te(e, n), _(ko.scrollingSpeed, "internal");
		}
		function te(e, n) {
			var o = kn(e);
			void 0 !== n ? An(e, n) : o.length > 0 && ze(o);
		}
		function ie(e) {
			Be("right", e);
		}
		function ae(e) {
			Be("left", e);
		}
		function re(n, o, t) {
			if (!lo.hasClass(c)) {
				(co = !0),
					(so = V.considerHeader ? X.height() - e(V.header).height() : X.height()),
					e(m).each(function () {
						var n = e(this).find(M),
							i = e(this).find(O);
						V.verticalCentered &&
							e(this)
								.find(y)
								.css("height", Cn(e(this)) + "px"),
							e(this).css("height", so + "px"),
							o && e(this).css("padding-top", t),
							i.length > 1 && cn(n, n.find(I));
					}),
					V.scrollOverflow && po.createScrollBarForAll();
				var i = e(w),
					a = i.index(m);
				a && oe(a + 1), (co = !1), e.isFunction(V.afterResize) && n && V.afterResize.call(lo), e.isFunction(V.afterReBuild) && !n && V.afterReBuild.call(lo);
			}
		}
		function le(n) {
			var o = Zn.hasClass(l);
			n
				? o || (W(!1, "internal"), Q(!1, "internal"), e(T).hide(), Zn.addClass(l), e.isFunction(V.afterResponsive) && V.afterResponsive.call(lo, n))
				: o && (W(ko.autoScrolling, "internal"), Q(ko.autoScrolling, "internal"), e(T).show(), Zn.removeClass(l), e.isFunction(V.afterResponsive) && V.afterResponsive.call(lo, n));
		}
		function se() {
			var n = lo.find(V.sectionSelector);
			V.anchors.length ||
				(V.anchors = n
					.filter("[data-anchor]")
					.map(function () {
						return e(this).data("anchor").toString();
					})
					.get()),
				V.navigationTooltips.length ||
					(V.navigationTooltips = n
						.filter("[data-tooltip]")
						.map(function () {
							return e(this).data("tooltip").toString();
						})
						.get());
		}
		function ce() {
			V.considerHeader ? lo.css({ height: so, position: "relative" }) : lo.css({ height: "100%", position: "relative" }),
				lo.addClass(a),
				e("html").addClass(d),
				(so = V.considerHeader ? X.height() - e(V.header).height() : X.height()),
				lo.removeClass(c),
				he(),
				e(m).each(function (n) {
					var o = e(this),
						t = o.find(O),
						i = t.length;
					o.data("fp-styles", o.attr("style")), fe(o, n), ue(o, n), i > 0 ? de(o, t, i) : V.verticalCentered && yn(o);
				}),
				V.fixedElements && V.css3 && e(V.fixedElements).appendTo(Zn),
				V.navigation && pe(),
				ge(),
				V.scrollOverflow ? (po = V.scrollOverflowHandler.init(V)) : Se();
		}
		function de(n, o, t) {
			var i = 100 * t,
				a = 100 / t;
			o.wrapAll('<div class="' + B + '" />'),
				o.parent().wrap('<div class="' + E + '" />'),
				n.find(H).css("width", i + "%"),
				t > 1 && (V.controlArrows && ve(n), V.slidesNavigation && In(n, t)),
				o.each(function (n) {
					e(this).css("width", a + "%"), V.verticalCentered && yn(e(this));
				});
			var r = n.find(I);
			r.length && (0 !== e(w).index(m) || (0 === e(w).index(m) && 0 !== r.index())) ? Yn(r, "internal") : o.eq(0).addClass(u);
		}
		function fe(n, o) {
			o || 0 !== e(w).length || n.addClass(u),
				(to = e(w)),
				n.css("height", so + "px"),
				V.paddingTop && n.css("padding-top", V.paddingTop),
				V.paddingBottom && n.css("padding-bottom", V.paddingBottom),
				void 0 !== V.sectionsColor[o] && n.css("background-color", V.sectionsColor[o]),
				void 0 !== V.anchors[o] && n.attr("data-anchor", V.anchors[o]);
		}
		function ue(n, o) {
			void 0 !== V.anchors[o] && n.hasClass(u) && Sn(V.anchors[o], o), V.menu && V.css3 && e(V.menu).closest(r).length && e(V.menu).appendTo(Zn);
		}
		function he() {
			lo.find(V.sectionSelector).addClass(g), lo.find(V.slideSelector).addClass(A);
		}
		function ve(e) {
			e.find(M).after('<div class="' + j + '"></div><div class="fp-controlArrow fp-next"></div>'),
				"#fff" != V.controlArrowColor && (e.find(N).css("border-color", "transparent transparent transparent " + V.controlArrowColor), e.find(Y).css("border-color", "transparent " + V.controlArrowColor + " transparent transparent")),
				V.loopHorizontal || e.find(Y).hide();
		}
		function pe() {
			Zn.append('<div id="' + C + '"><ul></ul></div>');
			var n = e(T);
			n.addClass(function () {
				return V.showActiveTooltip ? "fp-show-active " + V.navigationPosition : V.navigationPosition;
			});
			for (var o = 0; o < e(m).length; o++) {
				var t = "";
				V.anchors.length && (t = V.anchors[o]);
				var i = '<li><a href="#' + t + '"><span></span></a>',
					a = V.navigationTooltips[o];
				void 0 !== a && "" !== a && (i += '<div class="' + k + " " + V.navigationPosition + '">' + a + "</div>"), (i += "</li>"), n.find("ul").append(i);
			}
			e(T).css("margin-top", "-" + e(T).height() / 2 + "px"), e(T).find("li").eq(e(w).index(m)).find("a").addClass(u);
		}
		function ge() {
			lo.find('iframe[src*="youtube.com/embed/"]').each(function () {
				me(e(this), "enablejsapi=1");
			});
		}
		function me(e, n) {
			var o = e.attr("src");
			e.attr("src", o + we(o) + n);
		}
		function we(e) {
			return /\?/.test(e) ? "&" : "?";
		}
		function Se() {
			var n = e(w);
			n.addClass(v), Ye(n), Ne(n), V.scrollOverflow && V.scrollOverflowHandler.afterLoad(), xe() && e.isFunction(V.afterLoad) && V.afterLoad.call(n, n.data("anchor"), n.index(m) + 1), e.isFunction(V.afterRender) && V.afterRender.call(lo);
		}
		function xe() {
			var e = kn(Qe().section);
			return !e || (e.length && e.index() === to.index());
		}
		function be() {
			var n;
			if (!V.autoScrolling || V.scrollBar) {
				var t = X.scrollTop(),
					i = Te(t),
					a = 0,
					r = t + X.height() / 2,
					l = Zn.height() - X.height() === t,
					s = o.querySelectorAll(m);
				if (l) a = s.length - 1;
				else if (t)
					for (var c = 0; c < s.length; ++c) {
						var d = s[c];
						d.offsetTop <= r && (a = c);
					}
				else a = 0;
				if ((Ce(i) && (e(w).hasClass(v) || e(w).addClass(v).siblings().removeClass(v)), (n = e(s).eq(a)), !n.hasClass(u))) {
					Lo = !0;
					var f,
						h,
						p = e(w),
						g = p.index(m) + 1,
						S = xn(n),
						x = n.data("anchor"),
						b = n.index(m) + 1,
						y = n.find(I);
					y.length && ((h = y.data("anchor")), (f = y.index())),
						uo &&
							(n.addClass(u).siblings().removeClass(u), e.isFunction(V.onLeave) && V.onLeave.call(p, g, b, S), e.isFunction(V.afterLoad) && V.afterLoad.call(n, x, b), Ue(p), Ye(n), Ne(n), Sn(x, b - 1), V.anchors.length && (eo = x), En(f, h, x, b)),
						clearTimeout(So),
						(So = setTimeout(function () {
							Lo = !1;
						}, 100));
				}
				V.fitToSection &&
					(clearTimeout(xo),
					(xo = setTimeout(function () {
						V.fitToSection && e(w).outerHeight() <= so && ye();
					}, V.fitToSectionDelay)));
			}
		}
		function ye() {
			uo && ((co = !0), ze(e(w)), (co = !1));
		}
		function Ce(n) {
			var o = e(w).position().top,
				t = o + X.height();
			return "up" == n ? t >= X.scrollTop() + X.height() : o <= X.scrollTop();
		}
		function Te(e) {
			var n = e > Ao ? "down" : "up";
			return (Ao = e), (Ho = e), n;
		}
		function ke(n) {
			if (vo.m[n]) {
				var o = "down" === n ? ne : ee;
				if (V.scrollOverflow) {
					var t = V.scrollOverflowHandler.scrollable(e(w)),
						i = "down" === n ? "bottom" : "top";
					if (t.length > 0) {
						if (!V.scrollOverflowHandler.isScrolled(i, t)) return !0;
						o();
					} else o();
				} else o();
			}
		}
		function Le(e) {
			var n = e.originalEvent;
			V.autoScrolling && Oe(n) && e.preventDefault();
		}
		function Ae(n) {
			var o = n.originalEvent,
				i = e(o.target).closest(m);
			if (Oe(o)) {
				V.autoScrolling && n.preventDefault();
				var a = jn(o);
				(Eo = a.y),
					(Mo = a.x),
					i.find(M).length && t.abs(Io - Mo) > t.abs(Oo - Eo)
						? !io && t.abs(Io - Mo) > (X.outerWidth() / 100) * V.touchSensitivity && (Io > Mo ? vo.m.right && ie(i) : vo.m.left && ae(i))
						: V.autoScrolling && uo && t.abs(Oo - Eo) > (X.height() / 100) * V.touchSensitivity && (Oo > Eo ? ke("down") : Eo > Oo && ke("up"));
			}
		}
		function Oe(e) {
			return void 0 === e.pointerType || "mouse" != e.pointerType;
		}
		function Ie(e) {
			var n = e.originalEvent;
			if ((V.fitToSection && Jn.stop(), Oe(n))) {
				var o = jn(n);
				(Oo = o.y), (Io = o.x);
			}
		}
		function Ee(e, n) {
			for (var o = 0, i = e.slice(t.max(e.length - n, 1)), a = 0; a < i.length; a++) o += i[a];
			return t.ceil(o / n);
		}
		function Me(o) {
			var i = new Date().getTime(),
				a = e(p).hasClass("fp-normal-scroll");
			if (V.autoScrolling && !oo && !a) {
				o = o || n.event;
				var r = o.wheelDelta || -o.deltaY || -o.detail,
					l = t.max(-1, t.min(1, r)),
					s = void 0 !== o.wheelDeltaX || void 0 !== o.deltaX,
					c = t.abs(o.wheelDeltaX) < t.abs(o.wheelDelta) || t.abs(o.deltaX) < t.abs(o.deltaY) || !s;
				ho.length > 149 && ho.shift(), ho.push(t.abs(r)), V.scrollBar && (o.preventDefault ? o.preventDefault() : (o.returnValue = !1));
				var d = i - Bo;
				return (Bo = i), d > 200 && (ho = []), uo && Ee(ho, 10) >= Ee(ho, 70) && c && ke(l < 0 ? "down" : "up"), !1;
			}
			V.fitToSection && Jn.stop();
		}
		function Be(n, o) {
			var t = void 0 === o ? e(w) : o,
				i = t.find(M),
				a = i.find(O).length;
			if (!(!i.length || io || a < 2)) {
				var r = i.find(I),
					l = null;
				if (((l = "left" === n ? r.prev(O) : r.next(O)), !l.length)) {
					if (!V.loopHorizontal) return;
					l = "left" === n ? r.siblings(":last") : r.siblings(":first");
				}
				(io = !0), cn(i, l, n);
			}
		}
		function He() {
			e(I).each(function () {
				Yn(e(this), "internal");
			});
		}
		function Re(e) {
			var n = e.position(),
				o = n.top,
				t = n.top > Ho,
				i = o - so + e.outerHeight(),
				a = V.bigSectionsDestination;
			return e.outerHeight() > so ? ((t || a) && "bottom" !== a) || (o = i) : (t || (co && e.is(":last-child"))) && (o = i), (Ho = o), o;
		}
		function ze(n, o, t) {
			if (void 0 !== n) {
				var i,
					a,
					r = Re(n),
					l = { element: n, callback: o, isMovementUp: t, dtop: r, yMovement: xn(n), anchorLink: n.data("anchor"), sectionIndex: n.index(m), activeSlide: n.find(I), activeSection: e(w), leavingSection: e(w).index(m) + 1, localIsResizing: co };
				(l.activeSection.is(n) && !co) ||
					(V.scrollBar && X.scrollTop() === l.dtop && !n.hasClass("fp-auto-height")) ||
					(l.activeSlide.length && ((i = l.activeSlide.data("anchor")), (a = l.activeSlide.index())),
					(e.isFunction(V.onLeave) && !l.localIsResizing && !1 === V.onLeave.call(l.activeSection, l.leavingSection, l.sectionIndex + 1, l.yMovement)) ||
						(V.autoScrolling && V.continuousVertical && void 0 !== l.isMovementUp && ((!l.isMovementUp && "up" == l.yMovement) || (l.isMovementUp && "down" == l.yMovement)) && (l = qe(l)),
						l.localIsResizing || Ue(l.activeSection),
						V.scrollOverflow && V.scrollOverflowHandler.beforeLeave(),
						n.addClass(u).siblings().removeClass(u),
						Ye(n),
						V.scrollOverflow && V.scrollOverflowHandler.onLeave(),
						(uo = !1),
						En(a, i, l.anchorLink, l.sectionIndex),
						De(l),
						(eo = l.anchorLink),
						Sn(l.anchorLink, l.sectionIndex)));
			}
		}
		function De(n) {
			if (V.css3 && V.autoScrolling && !V.scrollBar)
				Tn("translate3d(0px, -" + t.round(n.dtop) + "px, 0px)", !0),
					V.scrollingSpeed
						? (clearTimeout(mo),
						  (mo = setTimeout(function () {
								Ve(n);
						  }, V.scrollingSpeed)))
						: Ve(n);
			else {
				var o = Pe(n);
				e(o.element)
					.animate(o.options, V.scrollingSpeed, V.easing)
					.promise()
					.done(function () {
						V.scrollBar
							? setTimeout(function () {
									Ve(n);
							  }, 30)
							: Ve(n);
					});
			}
		}
		function Pe(e) {
			var n = {};
			return V.autoScrolling && !V.scrollBar ? ((n.options = { top: -e.dtop }), (n.element = r)) : ((n.options = { scrollTop: e.dtop }), (n.element = "html, body")), n;
		}
		function qe(n) {
			return (
				n.isMovementUp ? e(w).before(n.activeSection.nextAll(m)) : e(w).after(n.activeSection.prevAll(m).get().reverse()),
				Nn(e(w).position().top),
				He(),
				(n.wrapAroundElements = n.activeSection),
				(n.dtop = n.element.position().top),
				(n.yMovement = xn(n.element)),
				(n.leavingSection = n.activeSection.index(m) + 1),
				(n.sectionIndex = n.element.index(m)),
				n
			);
		}
		function Fe(n) {
			n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(S).before(n.wrapAroundElements) : e(x).after(n.wrapAroundElements), Nn(e(w).position().top), He());
		}
		function Ve(n) {
			Fe(n),
				e.isFunction(V.afterLoad) && !n.localIsResizing && V.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1),
				V.scrollOverflow && V.scrollOverflowHandler.afterLoad(),
				n.localIsResizing || Ne(n.element),
				n.element.addClass(v).siblings().removeClass(v),
				(uo = !0),
				e.isFunction(n.callback) && n.callback.call(this);
		}
		function je(e, n) {
			e.attr(n, e.data(n)).removeAttr("data-" + n);
		}
		function Ye(n) {
			if (V.lazyLoading) {
				var o;
				We(n)
					.find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]")
					.each(function () {
						if (
							((o = e(this)),
							e.each(["src", "srcset"], function (e, n) {
								var t = o.attr("data-" + n);
								void 0 !== t && t && je(o, n);
							}),
							o.is("source"))
						) {
							var n = o.closest("video").length ? "video" : "audio";
							o.closest(n).get(0).load();
						}
					});
			}
		}
		function Ne(n) {
			var o = We(n);
			o.find("video, audio").each(function () {
				var n = e(this).get(0);
				n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play();
			}),
				o.find('iframe[src*="youtube.com/embed/"]').each(function () {
					var n = e(this).get(0);
					n.hasAttribute("data-autoplay") && Xe(n),
						(n.onload = function () {
							n.hasAttribute("data-autoplay") && Xe(n);
						});
				});
		}
		function Xe(e) {
			e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
		}
		function Ue(n) {
			var o = We(n);
			o.find("video, audio").each(function () {
				var n = e(this).get(0);
				n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause();
			}),
				o.find('iframe[src*="youtube.com/embed/"]').each(function () {
					var n = e(this).get(0);
					/youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
				});
		}
		function We(n) {
			var o = n.find(I);
			return o.length && (n = e(o)), n;
		}
		function Ke() {
			var e = Qe(),
				n = e.section,
				o = e.slide;
			n && (V.animateAnchor ? An(n, o) : oe(n, o));
		}
		function _e() {
			if (!Lo && !V.lockAnchors) {
				var e = Qe(),
					n = e.section,
					o = e.slide,
					t = void 0 === eo,
					i = void 0 === eo && void 0 === o && !io;
				n.length && ((n && n !== eo && !t) || i || (!io && no != o)) && An(n, o);
			}
		}
		function Qe() {
			var e,
				o,
				t = n.location.hash;
			if (t.length) {
				var i = t.replace("#", "").split("/"),
					a = t.indexOf("#/") > -1;
				e = a ? "/" + i[1] : decodeURIComponent(i[0]);
				var r = a ? i[2] : i[1];
				r && r.length && (o = decodeURIComponent(r));
			}
			return { section: e, slide: o };
		}
		function Ge(n) {
			clearTimeout(bo);
			var o = e(":focus"),
				t = n.which;
			if (9 === t) ln(n);
			else if (!o.is("textarea") && !o.is("input") && !o.is("select") && "true" !== o.attr("contentEditable") && "" !== o.attr("contentEditable") && V.keyboardScrolling && V.autoScrolling) {
				var i = [40, 38, 32, 33, 34];
				e.inArray(t, i) > -1 && n.preventDefault(),
					(oo = n.ctrlKey),
					(bo = setTimeout(function () {
						rn(n);
					}, 150));
			}
		}
		function Je() {
			e(this).prev().trigger("click");
		}
		function Ze(e) {
			fo && (oo = e.ctrlKey);
		}
		function $e(e) {
			2 == e.which && ((Ro = e.pageY), lo.on("mousemove", sn));
		}
		function en(e) {
			2 == e.which && lo.off("mousemove");
		}
		function nn() {
			var n = e(this).closest(m);
			e(this).hasClass(F) ? vo.m.left && ae(n) : vo.m.right && ie(n);
		}
		function on() {
			(fo = !1), (oo = !1);
		}
		function tn(n) {
			n.preventDefault();
			var o = e(this).parent().index();
			ze(e(m).eq(o));
		}
		function an(n) {
			n.preventDefault();
			var o = e(this).closest(m).find(M);
			cn(o, o.find(O).eq(e(this).closest("li").index()));
		}
		function rn(n) {
			var o = n.shiftKey;
			if (uo || !([37, 39].indexOf(n.which) < 0))
				switch (n.which) {
					case 38:
					case 33:
						vo.k.up && ee();
						break;
					case 32:
						if (o && vo.k.up) {
							ee();
							break;
						}
					case 40:
					case 34:
						vo.k.down && ne();
						break;
					case 36:
						vo.k.up && te(1);
						break;
					case 35:
						vo.k.down && te(e(m).length);
						break;
					case 37:
						vo.k.left && ae();
						break;
					case 39:
						vo.k.right && ie();
						break;
					default:
						return;
				}
		}
		function ln(n) {
			function o(e) {
				return e.preventDefault(), s.first().focus();
			}
			var t = n.shiftKey,
				i = e(":focus"),
				a = e(w),
				r = a.find(I),
				l = r.length ? r : a,
				s = l.find(To);
			i.length ? i.closest(w, I).length || (i = o(n)) : o(n), ((!t && i.is(s.last())) || (t && i.is(s.first()))) && n.preventDefault();
		}
		function sn(e) {
			uo && (e.pageY < Ro && vo.m.up ? ee() : e.pageY > Ro && vo.m.down && ne()), (Ro = e.pageY);
		}
		function cn(n, o, t) {
			var i = n.closest(m),
				a = {
					slides: n,
					destiny: o,
					direction: t,
					destinyPos: o.position(),
					slideIndex: o.index(),
					section: i,
					sectionIndex: i.index(m),
					anchorLink: i.data("anchor"),
					slidesNav: i.find(D),
					slideAnchor: Bn(o),
					prevSlide: i.find(I),
					prevSlideIndex: i.find(I).index(),
					localIsResizing: co,
				};
			if (
				((a.xMovement = bn(a.prevSlideIndex, a.slideIndex)),
				a.localIsResizing || (uo = !1),
				V.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && e.isFunction(V.onSlideLeave) && !1 === V.onSlideLeave.call(a.prevSlide, a.anchorLink, a.sectionIndex + 1, a.prevSlideIndex, a.direction, a.slideIndex))
			)
				return void (io = !1);
			o.addClass(u).siblings().removeClass(u),
				a.localIsResizing || (Ue(a.prevSlide), Ye(o)),
				!V.loopHorizontal && V.controlArrows && (i.find(Y).toggle(0 !== a.slideIndex), i.find(N).toggle(!o.is(":last-child"))),
				i.hasClass(u) && !a.localIsResizing && En(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex),
				fn(n, a, !0);
		}
		function dn(n) {
			un(n.slidesNav, n.slideIndex), n.localIsResizing || (e.isFunction(V.afterSlideLoad) && V.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex), (uo = !0), Ne(n.destiny)), (io = !1);
		}
		function fn(e, n, o) {
			var i = n.destinyPos;
			if (V.css3) {
				var a = "translate3d(-" + t.round(i.left) + "px, 0px, 0px)";
				pn(e.find(H)).css(Xn(a)),
					(wo = setTimeout(
						function () {
							o && dn(n);
						},
						V.scrollingSpeed,
						V.easing
					));
			} else
				e.animate({ scrollLeft: t.round(i.left) }, V.scrollingSpeed, V.easing, function () {
					o && dn(n);
				});
		}
		function un(e, n) {
			e.find(h).removeClass(u), e.find("li").eq(n).find("a").addClass(u);
		}
		function hn() {
			if ((vn(), ao)) {
				var n = e(o.activeElement);
				if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
					var i = X.height();
					t.abs(i - zo) > (20 * t.max(zo, i)) / 100 && (re(!0), (zo = i));
				}
			} else
				clearTimeout(go),
					(go = setTimeout(function () {
						re(!0);
					}, 350));
		}
		function vn() {
			var e = V.responsive || V.responsiveWidth,
				o = V.responsiveHeight,
				t = e && n.screen.width < e,
				i = o && n.screen.height < o;
			e && o ? le(t || i) : e ? le(t) : o && le(i);
		}
		function pn(e) {
			var n = "all " + V.scrollingSpeed + "ms " + V.easingcss3;
			return e.removeClass(s), e.css({ "-webkit-transition": n, transition: n });
		}
		function gn(e) {
			return e.addClass(s);
		}
		function mn(n, o) {
			V.navigation &&
				(e(T).find(h).removeClass(u),
				n
					? e(T)
							.find('a[href="#' + n + '"]')
							.addClass(u)
					: e(T).find("li").eq(o).find("a").addClass(u));
		}
		function wn(n) {
			V.menu &&
				(e(V.menu).find(h).removeClass(u),
				e(V.menu)
					.find('[data-menuanchor="' + n + '"]')
					.addClass(u));
		}
		function Sn(e, n) {
			wn(e), mn(e, n);
		}
		function xn(n) {
			var o = e(w).index(m),
				t = n.index(m);
			return o == t ? "none" : o > t ? "up" : "down";
		}
		function bn(e, n) {
			return e == n ? "none" : e > n ? "left" : "right";
		}
		function yn(e) {
			e.hasClass(R) || e.addClass(R).wrapInner('<div class="' + b + '" style="height:' + Cn(e) + 'px;" />');
		}
		function Cn(e) {
			var n = so;
			if (V.paddingTop || V.paddingBottom) {
				var o = e;
				o.hasClass(g) || (o = e.closest(m));
				var t = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom"));
				n = so - t;
			}
			return n;
		}
		function Tn(e, n) {
			n ? pn(lo) : gn(lo),
				lo.css(Xn(e)),
				setTimeout(function () {
					lo.removeClass(s);
				}, 10);
		}
		function kn(n) {
			var o = lo.find(m + '[data-anchor="' + n + '"]');
			if (!o.length) {
				var t = void 0 !== n ? n - 1 : 0;
				o = e(m).eq(t);
			}
			return o;
		}
		function Ln(e, n) {
			var o = n.find(O + '[data-anchor="' + e + '"]');
			return o.length || ((e = void 0 !== e ? e : 0), (o = n.find(O).eq(e))), o;
		}
		function An(e, n) {
			var o = kn(e);
			if (o.length) {
				var t = Ln(n, o);
				e === eo || o.hasClass(u)
					? On(t)
					: ze(o, function () {
							On(t);
					  });
			}
		}
		function On(e) {
			e.length && cn(e.closest(M), e);
		}
		function In(e, n) {
			e.append('<div class="' + z + '"><ul></ul></div>');
			var o = e.find(D);
			o.addClass(V.slidesNavPosition);
			for (var t = 0; t < n; t++) o.find("ul").append('<li><a href="#"><span></span></a></li>');
			o.css("margin-left", "-" + o.width() / 2 + "px"), o.find("li").first().find("a").addClass(u);
		}
		function En(e, n, o, t) {
			var i = "";
			V.anchors.length && !V.lockAnchors && (e ? (void 0 !== o && (i = o), void 0 === n && (n = e), (no = n), Mn(i + "/" + n)) : void 0 !== e ? ((no = n), Mn(o)) : Mn(o)), Hn();
		}
		function Mn(e) {
			if (V.recordHistory) location.hash = e;
			else if (ao || ro) n.history.replaceState(i, i, "#" + e);
			else {
				var o = n.location.href.split("#")[0];
				n.location.replace(o + "#" + e);
			}
		}
		function Bn(e) {
			var n = e.data("anchor"),
				o = e.index();
			return void 0 === n && (n = o), n;
		}
		function Hn() {
			var n = e(w),
				o = n.find(I),
				t = Bn(n),
				i = Bn(o),
				a = String(t);
			o.length && (a = a + "-" + i), (a = a.replace("/", "-").replace("#", ""));
			var r = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b", "g");
			(Zn[0].className = Zn[0].className.replace(r, "")), Zn.addClass(f + "-" + a);
		}
		function Rn() {
			var e,
				t = o.createElement("p"),
				a = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
			o.body.insertBefore(t, null);
			for (var r in a) t.style[r] !== i && ((t.style[r] = "translate3d(1px,1px,1px)"), (e = n.getComputedStyle(t).getPropertyValue(a[r])));
			return o.body.removeChild(t), e !== i && e.length > 0 && "none" !== e;
		}
		function zn() {
			o.addEventListener ? (o.removeEventListener("mousewheel", Me, !1), o.removeEventListener("wheel", Me, !1), o.removeEventListener("MozMousePixelScroll", Me, !1)) : o.detachEvent("onmousewheel", Me);
		}
		function Dn() {
			var e,
				t = "";
			n.addEventListener ? (e = "addEventListener") : ((e = "attachEvent"), (t = "on"));
			var a = "onwheel" in o.createElement("div") ? "wheel" : o.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
			"DOMMouseScroll" == a ? o[e](t + "MozMousePixelScroll", Me, !1) : o[e](t + a, Me, !1);
		}
		function Pn() {
			lo.on("mousedown", $e).on("mouseup", en);
		}
		function qn() {
			lo.off("mousedown", $e).off("mouseup", en);
		}
		function Fn() {
			(ao || ro) && (V.autoScrolling && Zn.off(Co.touchmove).on(Co.touchmove, Le), e(r).off(Co.touchstart).on(Co.touchstart, Ie).off(Co.touchmove).on(Co.touchmove, Ae));
		}
		function Vn() {
			(ao || ro) && (V.autoScrolling && Zn.off(Co.touchmove), e(r).off(Co.touchstart).off(Co.touchmove));
		}
		function jn(e) {
			var n = [];
			return (
				(n.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY),
				(n.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX),
				ro && Oe(e) && (V.scrollBar || !V.autoScrolling) && ((n.y = e.touches[0].pageY), (n.x = e.touches[0].pageX)),
				n
			);
		}
		function Yn(e, n) {
			_(0, "internal"), void 0 !== n && (co = !0), cn(e.closest(M), e), void 0 !== n && (co = !1), _(ko.scrollingSpeed, "internal");
		}
		function Nn(e) {
			var n = t.round(e);
			V.css3 && V.autoScrolling && !V.scrollBar ? Tn("translate3d(0px, -" + n + "px, 0px)", !1) : V.autoScrolling && !V.scrollBar ? lo.css("top", -n) : Jn.scrollTop(n);
		}
		function Xn(e) {
			return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
		}
		function Un(n, o, t) {
			"all" !== o
				? (vo[t][o] = n)
				: e.each(Object.keys(vo[t]), function (e, o) {
						vo[t][o] = n;
				  });
		}
		function Wn(n) {
			W(!1, "internal"),
				Z(!1),
				$(!1),
				lo.addClass(c),
				clearTimeout(wo),
				clearTimeout(mo),
				clearTimeout(go),
				clearTimeout(So),
				clearTimeout(xo),
				X.off("scroll", be).off("hashchange", _e).off("resize", hn),
				U.off("click touchstart", T + " a")
					.off("mouseenter", T + " li")
					.off("mouseleave", T + " li")
					.off("click touchstart", P)
					.off("mouseover", V.normalScrollElements)
					.off("mouseout", V.normalScrollElements),
				e(m).off("click touchstart", q),
				clearTimeout(wo),
				clearTimeout(mo),
				n && Kn();
		}
		function Kn() {
			Nn(0),
				lo.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
					je(e(this), "src");
				}),
				lo.find("img[data-srcset]").each(function () {
					je(e(this), "srcset");
				}),
				e(T + ", " + D + ", " + q).remove(),
				e(m).css({ height: "", "background-color": "", padding: "" }),
				e(O).css({ width: "" }),
				lo.css({ height: "", position: "", "-ms-touch-action": "", "touch-action": "" }),
				Jn.css({ overflow: "", height: "" }),
				e("html").removeClass(d),
				Zn.removeClass(l),
				e.each(Zn.get(0).className.split(/\s+/), function (e, n) {
					0 === n.indexOf(f) && Zn.removeClass(n);
				}),
				e(m + ", " + O).each(function () {
					V.scrollOverflowHandler && V.scrollOverflowHandler.remove(e(this)), e(this).removeClass(R + " " + u), e(this).attr("style", e(this).data("fp-styles"));
				}),
				gn(lo),
				lo.find(y + ", " + H + ", " + M).each(function () {
					e(this).replaceWith(this.childNodes);
				}),
				lo.css({ "-webkit-transition": "none", transition: "none" }),
				Jn.scrollTop(0);
			var n = [g, A, B];
			e.each(n, function (n, o) {
				e("." + o).removeClass(o);
			});
		}
		function _n(e, n, o) {
			(V[e] = n), "internal" !== o && (ko[e] = n);
		}
		function Qn() {
			var n = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
			if (e("html").hasClass(d)) return void Gn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!");
			V.continuousVertical && (V.loopTop || V.loopBottom) && ((V.continuousVertical = !1), Gn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
				V.scrollBar && V.scrollOverflow && Gn("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),
				!V.continuousVertical ||
					(!V.scrollBar && V.autoScrolling) ||
					((V.continuousVertical = !1), Gn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
				V.scrollOverflow && !V.scrollOverflowHandler && ((V.scrollOverflow = !1), Gn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
				e.each(n, function (e, n) {
					V[n] && Gn("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + n);
				}),
				e.each(V.anchors, function (n, o) {
					var t = U.find("[name]").filter(function () {
							return e(this).attr("name") && e(this).attr("name").toLowerCase() == o.toLowerCase();
						}),
						i = U.find("[id]").filter(function () {
							return e(this).attr("id") && e(this).attr("id").toLowerCase() == o.toLowerCase();
						});
					(i.length || t.length) &&
						(Gn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),
						i.length && Gn("error", '"' + o + '" is is being used by another element `id` property'),
						t.length && Gn("error", '"' + o + '" is is being used by another element `name` property'));
				});
		}
		function Gn(e, n) {
			console && console[e] && console[e]("fullPage: " + n);
		}
		if (e("html").hasClass(d)) return void Qn();
		var Jn = e("html, body"),
			Zn = e("body"),
			$n = e.fn.fullpage;
		V = e.extend(
			{
				considerHeader: !1,
				header: null,
				menu: !1,
				anchors: [],
				lockAnchors: !1,
				navigation: !1,
				navigationPosition: "right",
				navigationTooltips: [],
				showActiveTooltip: !1,
				slidesNavigation: !1,
				slidesNavPosition: "bottom",
				scrollBar: !1,
				hybrid: !1,
				css3: !0,
				scrollingSpeed: 700,
				autoScrolling: !0,
				fitToSection: !0,
				fitToSectionDelay: 1e3,
				easing: "easeInOutCubic",
				easingcss3: "ease",
				loopBottom: !1,
				loopTop: !1,
				loopHorizontal: !0,
				continuousVertical: !1,
				continuousHorizontal: !1,
				scrollHorizontally: !1,
				interlockedSlides: !1,
				dragAndMove: !1,
				offsetSections: !1,
				resetSliders: !1,
				fadingEffect: !1,
				normalScrollElements: null,
				scrollOverflow: !1,
				scrollOverflowReset: !1,
				scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null,
				scrollOverflowOptions: null,
				touchSensitivity: 5,
				normalScrollElementTouchThreshold: 5,
				bigSectionsDestination: null,
				keyboardScrolling: !0,
				animateAnchor: !0,
				recordHistory: !0,
				controlArrows: !0,
				controlArrowColor: "#fff",
				verticalCentered: !0,
				sectionsColor: [],
				paddingTop: 0,
				paddingBottom: 0,
				fixedElements: null,
				responsive: 0,
				responsiveWidth: 0,
				responsiveHeight: 0,
				responsiveSlides: !1,
				parallax: !1,
				parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
				sectionSelector: ".section",
				slideSelector: ".slide",
				afterLoad: null,
				onLeave: null,
				afterRender: null,
				afterResize: null,
				afterReBuild: null,
				afterSlideLoad: null,
				onSlideLeave: null,
				afterResponsive: null,
				lazyLoading: !0,
			},
			V
		);
		var eo,
			no,
			oo,
			to,
			io = !1,
			ao = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
			ro = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
			lo = e(this),
			so = V.considerHeader ? X.height() - e(V.header).height() : X.height(),
			co = !1,
			fo = !0,
			uo = !0,
			ho = [],
			vo = {};
		(vo.m = { up: !0, down: !0, left: !0, right: !0 }), (vo.k = e.extend(!0, {}, vo.m));
		var po,
			go,
			mo,
			wo,
			So,
			xo,
			bo,
			yo = (function () {
				return n.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" };
			})(),
			Co = { touchmove: "ontouchmove" in n ? "touchmove" : yo.move, touchstart: "ontouchstart" in n ? "touchstart" : yo.down },
			To = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
			ko = e.extend(!0, {}, V);
		Qn(),
			e.extend(e.easing, {
				easeInOutCubic: function (e, n, o, t, i) {
					return (n /= i / 2) < 1 ? (t / 2) * n * n * n + o : (t / 2) * ((n -= 2) * n * n + 2) + o;
				},
			}),
			e(this).length &&
				(($n.version = "2.9.5"),
				($n.setAutoScrolling = W),
				($n.setRecordHistory = K),
				($n.setScrollingSpeed = _),
				($n.setFitToSection = Q),
				($n.setLockAnchors = G),
				($n.setMouseWheelScrolling = J),
				($n.setAllowScrolling = Z),
				($n.setKeyboardScrolling = $),
				($n.moveSectionUp = ee),
				($n.moveSectionDown = ne),
				($n.silentMoveTo = oe),
				($n.moveTo = te),
				($n.moveSlideRight = ie),
				($n.moveSlideLeft = ae),
				($n.fitToSection = ye),
				($n.reBuild = re),
				($n.setResponsive = le),
				($n.destroy = Wn),
				($n.shared = { afterRenderActions: Se }),
				(function () {
					V.css3 && (V.css3 = Rn()), (V.scrollBar = V.scrollBar || V.hybrid), se(), ce(), Z(!0), W(V.autoScrolling, "internal"), vn(), Hn(), "complete" === o.readyState && Ke(), X.on("load", Ke);
				})(),
				(function () {
					X.on("scroll", be).on("hashchange", _e).blur(on).resize(hn),
						U.keydown(Ge)
							.keyup(Ze)
							.on("click touchstart", T + " a", tn)
							.on("click touchstart", P, an)
							.on("click", L, Je),
						e(m).on("click touchstart", q, nn),
						V.normalScrollElements &&
							(U.on("mouseenter touchstart", V.normalScrollElements, function () {
								Z(!1);
							}),
							U.on("mouseleave touchend", V.normalScrollElements, function () {
								Z(!0);
							}));
				})());
		var Lo = !1,
			Ao = 0,
			Oo = 0,
			Io = 0,
			Eo = 0,
			Mo = 0,
			Bo = new Date().getTime(),
			Ho = 0,
			Ro = 0,
			zo = so;
	};
});
//# sourceMappingURL=jquery.fullpage.min.js.map
!(function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? (module.exports = a(require("jquery"))) : a(jQuery);
})(function (a) {
	function i() {
		var b,
			c,
			d = { height: f.innerHeight, width: f.innerWidth };
		return d.height || ((b = e.compatMode), (b || !a.support.boxModel) && ((c = "CSS1Compat" === b ? g : e.body), (d = { height: c.clientHeight, width: c.clientWidth }))), d;
	}
	function j() {
		return { top: f.pageYOffset || g.scrollTop || e.body.scrollTop, left: f.pageXOffset || g.scrollLeft || e.body.scrollLeft };
	}
	function k() {
		if (b.length) {
			var e = 0,
				f = a.map(b, function (a) {
					var b = a.data.selector,
						c = a.$element;
					return b ? c.find(b) : c;
				});
			for (c = c || i(), d = d || j(); e < b.length; e++)
				if (a.contains(g, f[e][0])) {
					var h = a(f[e]),
						k = { height: h[0].offsetHeight, width: h[0].offsetWidth },
						l = h.offset(),
						m = h.data("inview");
					if (!d || !c) return;
					l.top + k.height > d.top && l.top < d.top + c.height && l.left + k.width > d.left && l.left < d.left + c.width ? m || h.data("inview", !0).trigger("inview", [!0]) : m && h.data("inview", !1).trigger("inview", [!1]);
				}
		}
	}
	var c,
		d,
		h,
		b = [],
		e = document,
		f = window,
		g = e.documentElement;
	(a.event.special.inview = {
		add: function (c) {
			b.push({ data: c, $element: a(this), element: this }), !h && b.length && (h = setInterval(k, 250));
		},
		remove: function (a) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c];
				if (d.element === this && d.data.guid === a.guid) {
					b.splice(c, 1);
					break;
				}
			}
			b.length || (clearInterval(h), (h = null));
		},
	}),
		a(f).on("scroll resize scrollstop", function () {
			c = d = null;
		}),
		!g.addEventListener &&
			g.attachEvent &&
			g.attachEvent("onfocusin", function () {
				d = null;
			});
});
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
})(function (a) {
	var b,
		c,
		d,
		e,
		f,
		g,
		h = "Close",
		i = "BeforeClose",
		j = "AfterClose",
		k = "BeforeAppend",
		l = "MarkupParse",
		m = "Open",
		n = "Change",
		o = "mfp",
		p = "." + o,
		q = "mfp-ready",
		r = "mfp-removing",
		s = "mfp-prevent-close",
		t = function () {},
		u = !!window.jQuery,
		v = a(window),
		w = function (a, c) {
			b.ev.on(o + a + p, c);
		},
		x = function (b, c, d, e) {
			var f = document.createElement("div");
			return (f.className = "mfp-" + b), d && (f.innerHTML = d), e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)), f;
		},
		y = function (c, d) {
			b.ev.triggerHandler(o + c, d), b.st.callbacks && ((c = c.charAt(0).toLowerCase() + c.slice(1)), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
		},
		z = function (c) {
			return (c === g && b.currTemplate.closeBtn) || ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose))), (g = c)), b.currTemplate.closeBtn;
		},
		A = function () {
			a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
		},
		B = function () {
			var a = document.createElement("p").style,
				b = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== a.transition) return !0;
			for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
			return !1;
		};
	(t.prototype = {
		constructor: t,
		init: function () {
			var c = navigator.appVersion;
			(b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
				(b.isAndroid = /android/gi.test(c)),
				(b.isIOS = /iphone|ipad|ipod/gi.test(c)),
				(b.supportsTransition = B()),
				(b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
				(d = a(document)),
				(b.popupsCache = {});
		},
		open: function (c) {
			var e;
			if (c.isObj === !1) {
				(b.items = c.items.toArray()), (b.index = 0);
				var g,
					h = c.items;
				for (e = 0; e < h.length; e++)
					if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
						b.index = e;
						break;
					}
			} else (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
			if (b.isOpen) return void b.updateItemHTML();
			(b.types = []),
				(f = ""),
				c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
				c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), (b.currTemplate = b.popupsCache[c.key])) : (b.currTemplate = {}),
				(b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
				(b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
				b.st.modal && ((b.st.closeOnContentClick = !1), (b.st.closeOnBgClick = !1), (b.st.showCloseBtn = !1), (b.st.enableEscapeKey = !1)),
				b.bgOverlay ||
					((b.bgOverlay = x("bg").on("click" + p, function () {
						b.close();
					})),
					(b.wrap = x("wrap")
						.attr("tabindex", -1)
						.on("click" + p, function (a) {
							b._checkIfClose(a.target) && b.close();
						})),
					(b.container = x("container", b.wrap))),
				(b.contentContainer = x("content")),
				b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
			var i = a.magnificPopup.modules;
			for (e = 0; e < i.length; e++) {
				var j = i[e];
				(j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
			}
			y("BeforeOpen"),
				b.st.showCloseBtn &&
					(b.st.closeBtnInside
						? (w(l, function (a, b, c, d) {
								c.close_replaceWith = z(d.type);
						  }),
						  (f += " mfp-close-btn-in"))
						: b.wrap.append(z())),
				b.st.alignTop && (f += " mfp-align-top"),
				b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
				(b.st.fixedBgPos === !1 || ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) && b.bgOverlay.css({ height: d.height(), position: "absolute" }),
				b.st.enableEscapeKey &&
					d.on("keyup" + p, function (a) {
						27 === a.keyCode && b.close();
					}),
				v.on("resize" + p, function () {
					b.updateSize();
				}),
				b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
				f && b.wrap.addClass(f);
			var k = (b.wH = v.height()),
				n = {};
			if (b.fixedContentPos && b._hasScrollBar(k)) {
				var o = b._getScrollbarSize();
				o && (n.marginRight = o);
			}
			b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : (n.overflow = "hidden"));
			var r = b.st.mainClass;
			return (
				b.isIE7 && (r += " mfp-ie7"),
				r && b._addClassToMFP(r),
				b.updateItemHTML(),
				y("BuildControls"),
				a("html").css(n),
				b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
				(b._lastFocusedEl = document.activeElement),
				setTimeout(function () {
					b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
				}, 16),
				(b.isOpen = !0),
				b.updateSize(k),
				y(m),
				c
			);
		},
		close: function () {
			b.isOpen &&
				(y(i),
				(b.isOpen = !1),
				b.st.removalDelay && !b.isLowIE && b.supportsTransition
					? (b._addClassToMFP(r),
					  setTimeout(function () {
							b._close();
					  }, b.st.removalDelay))
					: b._close());
		},
		_close: function () {
			y(h);
			var c = r + " " + q + " ";
			if ((b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos)) {
				var e = { marginRight: "" };
				b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""), a("html").css(e);
			}
			d.off("keyup" + p + " focusin" + p),
				b.ev.off(p),
				b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
				b.bgOverlay.attr("class", "mfp-bg"),
				b.container.attr("class", "mfp-container"),
				!b.st.showCloseBtn || (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) || (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
				b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
				(b.currItem = null),
				(b.content = null),
				(b.currTemplate = null),
				(b.prevHeight = 0),
				y(j);
		},
		updateSize: function (a) {
			if (b.isIOS) {
				var c = document.documentElement.clientWidth / window.innerWidth,
					d = window.innerHeight * c;
				b.wrap.css("height", d), (b.wH = d);
			} else b.wH = a || v.height();
			b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
		},
		updateItemHTML: function () {
			var c = b.items[b.index];
			b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
			var d = c.type;
			if ((y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), (b.currItem = c), !b.currTemplate[d])) {
				var f = b.st[d] ? b.st[d].markup : !1;
				y("FirstMarkupParse", f), f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
			}
			e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
			var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
			b.appendContent(g, d), (c.preloaded = !0), y(n, c), (e = c.type), b.container.prepend(b.contentContainer), y("AfterChange");
		},
		appendContent: function (a, c) {
			(b.content = a),
				a ? (b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : (b.content = a)) : (b.content = ""),
				y(k),
				b.container.addClass("mfp-" + c + "-holder"),
				b.contentContainer.append(b.content);
		},
		parseEl: function (c) {
			var d,
				e = b.items[c];
			if ((e.tagName ? (e = { el: a(e) }) : ((d = e.type), (e = { data: e, src: e.src })), e.el)) {
				for (var f = b.types, g = 0; g < f.length; g++)
					if (e.el.hasClass("mfp-" + f[g])) {
						d = f[g];
						break;
					}
				(e.src = e.el.attr("data-mfp-src")), e.src || (e.src = e.el.attr("href"));
			}
			return (e.type = d || b.st.type || "inline"), (e.index = c), (e.parsed = !0), (b.items[c] = e), y("ElementParse", e), b.items[c];
		},
		addGroup: function (a, c) {
			var d = function (d) {
				(d.mfpEl = this), b._openClick(d, a, c);
			};
			c || (c = {});
			var e = "click.magnificPopup";
			(c.mainEl = a), c.items ? ((c.isObj = !0), a.off(e).on(e, d)) : ((c.isObj = !1), c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
		},
		_openClick: function (c, d, e) {
			var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
			if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
				var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
				if (g)
					if (a.isFunction(g)) {
						if (!g.call(b)) return !0;
					} else if (v.width() < g) return !0;
				c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), (e.el = a(c.mfpEl)), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
			}
		},
		updateStatus: function (a, d) {
			if (b.preloader) {
				c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
				var e = { status: a, text: d };
				y("UpdateStatus", e),
					(a = e.status),
					(d = e.text),
					b.preloader.html(d),
					b.preloader.find("a").on("click", function (a) {
						a.stopImmediatePropagation();
					}),
					b.container.addClass("mfp-s-" + a),
					(c = a);
			}
		},
		_checkIfClose: function (c) {
			if (!a(c).hasClass(s)) {
				var d = b.st.closeOnContentClick,
					e = b.st.closeOnBgClick;
				if (d && e) return !0;
				if (!b.content || a(c).hasClass("mfp-close") || (b.preloader && c === b.preloader[0])) return !0;
				if (c === b.content[0] || a.contains(b.content[0], c)) {
					if (d) return !0;
				} else if (e && a.contains(document, c)) return !0;
				return !1;
			}
		},
		_addClassToMFP: function (a) {
			b.bgOverlay.addClass(a), b.wrap.addClass(a);
		},
		_removeClassFromMFP: function (a) {
			this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
		},
		_hasScrollBar: function (a) {
			return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
		},
		_setFocus: function () {
			(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
		},
		_onFocusIn: function (c) {
			return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
		},
		_parseMarkup: function (b, c, d) {
			var e;
			d.data && (c = a.extend(d.data, c)),
				y(l, [b, c, d]),
				a.each(c, function (c, d) {
					if (void 0 === d || d === !1) return !0;
					if (((e = c.split("_")), e.length > 1)) {
						var f = b.find(p + "-" + e[0]);
						if (f.length > 0) {
							var g = e[1];
							"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? (f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class")))) : f.attr(e[1], d);
						}
					} else b.find(p + "-" + c).html(d);
				});
		},
		_getScrollbarSize: function () {
			if (void 0 === b.scrollbarSize) {
				var a = document.createElement("div");
				(a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(a), (b.scrollbarSize = a.offsetWidth - a.clientWidth), document.body.removeChild(a);
			}
			return b.scrollbarSize;
		},
	}),
		(a.magnificPopup = {
			instance: null,
			proto: t.prototype,
			modules: [],
			open: function (b, c) {
				return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index = c || 0), this.instance.open(b);
			},
			close: function () {
				return a.magnificPopup.instance && a.magnificPopup.instance.close();
			},
			registerModule: function (b, c) {
				c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
			},
			defaults: {
				disableOn: 0,
				key: null,
				midClick: !1,
				mainClass: "",
				preloader: !0,
				focus: "",
				closeOnContentClick: !1,
				closeOnBgClick: !0,
				closeBtnInside: !0,
				showCloseBtn: !0,
				enableEscapeKey: !0,
				modal: !1,
				alignTop: !1,
				removalDelay: 0,
				prependTo: null,
				fixedContentPos: "auto",
				fixedBgPos: "auto",
				overflowY: "auto",
				closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
				tClose: "Close (Esc)",
				tLoading: "Loading...",
				autoFocusLast: !0,
			},
		}),
		(a.fn.magnificPopup = function (c) {
			A();
			var d = a(this);
			if ("string" == typeof c)
				if ("open" === c) {
					var e,
						f = u ? d.data("magnificPopup") : d[0].magnificPopup,
						g = parseInt(arguments[1], 10) || 0;
					f.items ? (e = f.items[g]) : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))), b._openClick({ mfpEl: e }, d, f);
				} else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
			else (c = a.extend(!0, {}, c)), u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c), b.addGroup(d, c);
			return d;
		});
	var C,
		D,
		E,
		F = "inline",
		G = function () {
			E && (D.after(E.addClass(C)).detach(), (E = null));
		};
	a.magnificPopup.registerModule(F, {
		options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
		proto: {
			initInline: function () {
				b.types.push(F),
					w(h + "." + F, function () {
						G();
					});
			},
			getInline: function (c, d) {
				if ((G(), c.src)) {
					var e = b.st.inline,
						f = a(c.src);
					if (f.length) {
						var g = f[0].parentNode;
						g && g.tagName && (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)), (E = f.after(D).detach().removeClass(C))), b.updateStatus("ready");
					} else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
					return (c.inlineElement = f), f;
				}
				return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
			},
		},
	});
	var H,
		I = "ajax",
		J = function () {
			H && a(document.body).removeClass(H);
		},
		K = function () {
			J(), b.req && b.req.abort();
		};
	a.magnificPopup.registerModule(I, {
		options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
		proto: {
			initAjax: function () {
				b.types.push(I), (H = b.st.ajax.cursor), w(h + "." + I, K), w("BeforeChange." + I, K);
			},
			getAjax: function (c) {
				H && a(document.body).addClass(H), b.updateStatus("loading");
				var d = a.extend(
					{
						url: c.src,
						success: function (d, e, f) {
							var g = { data: d, xhr: f };
							y("ParseAjax", g),
								b.appendContent(a(g.data), I),
								(c.finished = !0),
								J(),
								b._setFocus(),
								setTimeout(function () {
									b.wrap.addClass(q);
								}, 16),
								b.updateStatus("ready"),
								y("AjaxContentAdded");
						},
						error: function () {
							J(), (c.finished = c.loadError = !0), b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
						},
					},
					b.st.ajax.settings
				);
				return (b.req = a.ajax(d)), "";
			},
		},
	});
	var L,
		M = function (c) {
			if (c.data && void 0 !== c.data.title) return c.data.title;
			var d = b.st.image.titleSrc;
			if (d) {
				if (a.isFunction(d)) return d.call(b, c);
				if (c.el) return c.el.attr(d) || "";
			}
			return "";
		};
	a.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.',
		},
		proto: {
			initImage: function () {
				var c = b.st.image,
					d = ".image";
				b.types.push("image"),
					w(m + d, function () {
						"image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
					}),
					w(h + d, function () {
						c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
					}),
					w("Resize" + d, b.resizeImage),
					b.isLowIE && w("AfterChange", b.resizeImage);
			},
			resizeImage: function () {
				var a = b.currItem;
				if (a && a.img && b.st.image.verticalFit) {
					var c = 0;
					b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
				}
			},
			_onImageHasSize: function (a) {
				a.img && ((a.hasSize = !0), L && clearInterval(L), (a.isCheckingImgSize = !1), y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), (a.imgHidden = !1)));
			},
			findImageSize: function (a) {
				var c = 0,
					d = a.img[0],
					e = function (f) {
						L && clearInterval(L),
							(L = setInterval(function () {
								return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
							}, f));
					};
				e(1);
			},
			getImage: function (c, d) {
				var e = 0,
					f = function () {
						c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), (c.hasSize = !0), (c.loaded = !0), y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
					},
					g = function () {
						c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), (c.hasSize = !0), (c.loaded = !0), (c.loadError = !0));
					},
					h = b.st.image,
					i = d.find(".mfp-img");
				if (i.length) {
					var j = document.createElement("img");
					(j.className = "mfp-img"),
						c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
						(c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
						(j.src = c.src),
						i.is("img") && (c.img = c.img.clone()),
						(j = c.img[0]),
						j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
				}
				return (
					b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
					b.resizeImage(),
					c.hasSize
						? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d)
						: (b.updateStatus("loading"), (c.loading = !0), c.hasSize || ((c.imgHidden = !0), d.addClass("mfp-loading"), b.findImageSize(c)), d)
				);
			},
		},
	});
	var N,
		O = function () {
			return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
		};
	a.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function (a) {
				return a.is("img") ? a : a.find("img");
			},
		},
		proto: {
			initZoom: function () {
				var a,
					c = b.st.zoom,
					d = ".zoom";
				if (c.enabled && b.supportsTransition) {
					var e,
						f,
						g = c.duration,
						j = function (a) {
							var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
								d = "all " + c.duration / 1e3 + "s " + c.easing,
								e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
								f = "transition";
							return (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d), b.css(e), b;
						},
						k = function () {
							b.content.css("visibility", "visible");
						};
					w("BuildControls" + d, function () {
						if (b._allowZoom()) {
							if ((clearTimeout(e), b.content.css("visibility", "hidden"), (a = b._getItemToZoom()), !a)) return void k();
							(f = j(a)),
								f.css(b._getOffset()),
								b.wrap.append(f),
								(e = setTimeout(function () {
									f.css(b._getOffset(!0)),
										(e = setTimeout(function () {
											k(),
												setTimeout(function () {
													f.remove(), (a = f = null), y("ZoomAnimationEnded");
												}, 16);
										}, g));
								}, 16));
						}
					}),
						w(i + d, function () {
							if (b._allowZoom()) {
								if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
									if (((a = b._getItemToZoom()), !a)) return;
									f = j(a);
								}
								f.css(b._getOffset(!0)),
									b.wrap.append(f),
									b.content.css("visibility", "hidden"),
									setTimeout(function () {
										f.css(b._getOffset());
									}, 16);
							}
						}),
						w(h + d, function () {
							b._allowZoom() && (k(), f && f.remove(), (a = null));
						});
				}
			},
			_allowZoom: function () {
				return "image" === b.currItem.type;
			},
			_getItemToZoom: function () {
				return b.currItem.hasSize ? b.currItem.img : !1;
			},
			_getOffset: function (c) {
				var d;
				d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
				var e = d.offset(),
					f = parseInt(d.css("padding-top"), 10),
					g = parseInt(d.css("padding-bottom"), 10);
				e.top -= a(window).scrollTop() - f;
				var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
				return O() ? (h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)") : ((h.left = e.left), (h.top = e.top)), h;
			},
		},
	});
	var P = "iframe",
		Q = "//about:blank",
		R = function (a) {
			if (b.currTemplate[P]) {
				var c = b.currTemplate[P].find("iframe");
				c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
			}
		};
	a.magnificPopup.registerModule(P, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
				vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
				gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
			},
		},
		proto: {
			initIframe: function () {
				b.types.push(P),
					w("BeforeChange", function (a, b, c) {
						b !== c && (b === P ? R() : c === P && R(!0));
					}),
					w(h + "." + P, function () {
						R();
					});
			},
			getIframe: function (c, d) {
				var e = c.src,
					f = b.st.iframe;
				a.each(f.patterns, function () {
					return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), (e = this.src.replace("%id%", e)), !1) : void 0;
				});
				var g = {};
				return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
			},
		},
	});
	var S = function (a) {
			var c = b.items.length;
			return a > c - 1 ? a - c : 0 > a ? c + a : a;
		},
		T = function (a, b, c) {
			return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
		};
	a.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%",
		},
		proto: {
			initGallery: function () {
				var c = b.st.gallery,
					e = ".mfp-gallery";
				return (
					(b.direction = !0),
					c && c.enabled
						? ((f += " mfp-gallery"),
						  w(m + e, function () {
								c.navigateByImgClick &&
									b.wrap.on("click" + e, ".mfp-img", function () {
										return b.items.length > 1 ? (b.next(), !1) : void 0;
									}),
									d.on("keydown" + e, function (a) {
										37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
									});
						  }),
						  w("UpdateStatus" + e, function (a, c) {
								c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
						  }),
						  w(l + e, function (a, d, e, f) {
								var g = b.items.length;
								e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
						  }),
						  w("BuildControls" + e, function () {
								if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
									var d = c.arrowMarkup,
										e = (b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)),
										f = (b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s));
									e.click(function () {
										b.prev();
									}),
										f.click(function () {
											b.next();
										}),
										b.container.append(e.add(f));
								}
						  }),
						  w(n + e, function () {
								b._preloadTimeout && clearTimeout(b._preloadTimeout),
									(b._preloadTimeout = setTimeout(function () {
										b.preloadNearbyImages(), (b._preloadTimeout = null);
									}, 16));
						  }),
						  void w(h + e, function () {
								d.off(e), b.wrap.off("click" + e), (b.arrowRight = b.arrowLeft = null);
						  }))
						: !1
				);
			},
			next: function () {
				(b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
			},
			prev: function () {
				(b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
			},
			goTo: function (a) {
				(b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
			},
			preloadNearbyImages: function () {
				var a,
					c = b.st.gallery.preload,
					d = Math.min(c[0], b.items.length),
					e = Math.min(c[1], b.items.length);
				for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
				for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
			},
			_preloadItem: function (c) {
				if (((c = S(c)), !b.items[c].preloaded)) {
					var d = b.items[c];
					d.parsed || (d = b.parseEl(c)),
						y("LazyLoad", d),
						"image" === d.type &&
							(d.img = a('<img class="mfp-img" />')
								.on("load.mfploader", function () {
									d.hasSize = !0;
								})
								.on("error.mfploader", function () {
									(d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
								})
								.attr("src", d.src)),
						(d.preloaded = !0);
				}
			},
		},
	});
	var U = "retina";
	a.magnificPopup.registerModule(U, {
		options: {
			replaceSrc: function (a) {
				return a.src.replace(/\.\w+$/, function (a) {
					return "@2x" + a;
				});
			},
			ratio: 1,
		},
		proto: {
			initRetina: function () {
				if (window.devicePixelRatio > 1) {
					var a = b.st.retina,
						c = a.ratio;
					(c = isNaN(c) ? c() : c),
						c > 1 &&
							(w("ImageHasSize." + U, function (a, b) {
								b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
							}),
							w("ElementParse." + U, function (b, d) {
								d.src = a.replaceSrc(d, c);
							}));
				}
			},
		},
	}),
		A();
});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!(function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? (module.exports = e) : e(jQuery, window, document);
})(function (e) {
	!(function (t) {
		var o = "function" == typeof define && define.amd,
			a = "undefined" != typeof module && module.exports,
			n = "https:" == document.location.protocol ? "https:" : "http:",
			i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
		o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t();
	})(function () {
		var t,
			o = "mCustomScrollbar",
			a = "mCS",
			n = ".mCustomScrollbar",
			i = {
				setTop: 0,
				setLeft: 0,
				axis: "y",
				scrollbarPosition: "inside",
				scrollInertia: 950,
				autoDraggerLength: !0,
				alwaysShowScrollbar: 0,
				snapOffset: 0,
				mouseWheel: { enable: !0, scrollAmount: "auto", axis: "y", deltaFactor: "auto", disableOver: ["select", "option", "keygen", "datalist", "textarea"] },
				scrollButtons: { scrollType: "stepless", scrollAmount: "auto" },
				keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" },
				contentTouchScroll: 25,
				documentTouchScroll: !0,
				advanced: { autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']", updateOnContentResize: !0, updateOnImageLoad: "auto", autoUpdateTimeout: 60 },
				theme: "light",
				callbacks: { onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0 },
			},
			r = 0,
			l = {},
			s = window.attachEvent && !window.addEventListener ? 1 : 0,
			c = !1,
			d = [
				"mCSB_dragger_onDrag",
				"mCSB_scrollTools_onDrag",
				"mCS_img_loaded",
				"mCS_disabled",
				"mCS_destroyed",
				"mCS_no_scrollbar",
				"mCS-autoHide",
				"mCS-dir-rtl",
				"mCS_no_scrollbar_y",
				"mCS_no_scrollbar_x",
				"mCS_y_hidden",
				"mCS_x_hidden",
				"mCSB_draggerContainer",
				"mCSB_buttonUp",
				"mCSB_buttonDown",
				"mCSB_buttonLeft",
				"mCSB_buttonRight",
			],
			u = {
				init: function (t) {
					var t = e.extend(!0, {}, i, t),
						o = f.call(this);
					if (t.live) {
						var s = t.liveSelector || this.selector || n,
							c = e(s);
						if ("off" === t.live) return void m(s);
						l[s] = setTimeout(function () {
							c.mCustomScrollbar(t), "once" === t.live && c.length && m(s);
						}, 500);
					} else m(s);
					return (
						(t.setWidth = t.set_width ? t.set_width : t.setWidth),
						(t.setHeight = t.set_height ? t.set_height : t.setHeight),
						(t.axis = t.horizontalScroll ? "x" : p(t.axis)),
						(t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia),
						"object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = { enable: !0, scrollAmount: "auto", axis: "y", preventDefault: !1, deltaFactor: "auto", normalizeDelta: !1, invert: !1 }),
						(t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount),
						(t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta),
						(t.scrollButtons.scrollType = g(t.scrollButtons.scrollType)),
						h(t),
						e(o).each(function () {
							var o = e(this);
							if (!o.data(a)) {
								o.data(a, {
									idx: ++r,
									opt: t,
									scrollRatio: { y: null, x: null },
									overflowed: null,
									contentReset: { y: null, x: null },
									bindEvents: !1,
									tweenRunning: !1,
									sequential: {},
									langDir: o.css("direction"),
									cbOffsets: null,
									trigger: null,
									poll: { size: { o: 0, n: 0 }, img: { o: 0, n: 0 }, change: { o: 0, n: 0 } },
								});
								var n = o.data(a),
									i = n.opt,
									l = o.data("mcs-axis"),
									s = o.data("mcs-scrollbar-position"),
									c = o.data("mcs-theme");
								l && (i.axis = l),
									s && (i.scrollbarPosition = s),
									c && ((i.theme = c), h(i)),
									v.call(this),
									n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this),
									e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]),
									u.update.call(null, o);
							}
						})
					);
				},
				update: function (t, o) {
					var n = t || f.call(this);
					return e(n).each(function () {
						var t = e(this);
						if (t.data(a)) {
							var n = t.data(a),
								i = n.opt,
								r = e("#mCSB_" + n.idx + "_container"),
								l = e("#mCSB_" + n.idx),
								s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
							if (!r.length) return;
							n.tweenRunning && Q(t),
								o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this),
								t.hasClass(d[3]) && t.removeClass(d[3]),
								t.hasClass(d[4]) && t.removeClass(d[4]),
								l.css("max-height", "none"),
								l.height() !== t.height() && l.css("max-height", t.height()),
								_.call(this),
								"y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)),
								(n.overflowed = y.call(this)),
								M.call(this),
								i.autoDraggerLength && S.call(this),
								b.call(this),
								T.call(this);
							var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
							"x" !== i.axis &&
								(n.overflowed[0]
									? s[0].height() > s[0].parent().height()
										? B.call(this)
										: (G(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }), (n.contentReset.y = null))
									: (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }))),
								"y" !== i.axis &&
									(n.overflowed[1]
										? s[1].width() > s[1].parent().width()
											? B.call(this)
											: (G(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }), (n.contentReset.x = null))
										: (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }))),
								o &&
									n &&
									(2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad
										? i.callbacks.onImageLoad.call(this)
										: 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange
										? i.callbacks.onSelectorChange.call(this)
										: i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)),
								N.call(this);
						}
					});
				},
				scrollTo: function (t, o) {
					if ("undefined" != typeof t && null != t) {
						var n = f.call(this);
						return e(n).each(function () {
							var n = e(this);
							if (n.data(a)) {
								var i = n.data(a),
									r = i.opt,
									l = { trigger: "external", scrollInertia: r.scrollInertia, scrollEasing: "mcsEaseInOut", moveDragger: !1, timeout: 60, callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
									s = e.extend(!0, {}, l, o),
									c = Y.call(this, t),
									d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
								(c[0] = X.call(this, c[0], "y")),
									(c[1] = X.call(this, c[1], "x")),
									s.moveDragger && ((c[0] *= i.scrollRatio.y), (c[1] *= i.scrollRatio.x)),
									(s.dur = ne() ? 0 : d),
									setTimeout(function () {
										null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && ((s.dir = "y"), (s.overwrite = "all"), G(n, c[0].toString(), s)),
											null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && ((s.dir = "x"), (s.overwrite = "none"), G(n, c[1].toString(), s));
									}, s.timeout);
							}
						});
					}
				},
				stop: function () {
					var t = f.call(this);
					return e(t).each(function () {
						var t = e(this);
						t.data(a) && Q(t);
					});
				},
				disable: function (t) {
					var o = f.call(this);
					return e(o).each(function () {
						var o = e(this);
						if (o.data(a)) {
							o.data(a);
							N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]);
						}
					});
				},
				destroy: function () {
					var t = f.call(this);
					return e(t).each(function () {
						var n = e(this);
						if (n.data(a)) {
							var i = n.data(a),
								r = i.opt,
								l = e("#mCSB_" + i.idx),
								s = e("#mCSB_" + i.idx + "_container"),
								c = e(".mCSB_" + i.idx + "_scrollbar");
							r.live && m(r.liveSelector || e(t).selector),
								N.call(this, "remove"),
								k.call(this),
								B.call(this),
								n.removeData(a),
								$(this, "mcs"),
								c.remove(),
								s.find("img." + d[2]).removeClass(d[2]),
								l.replaceWith(s.contents()),
								n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]);
						}
					});
				},
			},
			f = function () {
				return "object" != typeof e(this) || e(this).length < 1 ? n : this;
			},
			h = function (t) {
				var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
					a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
					n = ["minimal", "minimal-dark"],
					i = ["minimal", "minimal-dark"],
					r = ["minimal", "minimal-dark"];
				(t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength),
					(t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar),
					(t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable),
					(t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar),
					(t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition);
			},
			m = function (e) {
				l[e] && (clearTimeout(l[e]), $(l, e));
			},
			p = function (e) {
				return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y";
			},
			g = function (e) {
				return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless";
			},
			v = function () {
				var t = e(this),
					n = t.data(a),
					i = n.opt,
					r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
					l = [
						"<div id='mCSB_" +
							n.idx +
							"_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
							n.idx +
							"_scrollbar mCS-" +
							i.theme +
							" mCSB_scrollTools_vertical" +
							r +
							"'><div class='" +
							d[12] +
							"'><div id='mCSB_" +
							n.idx +
							"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
						"<div id='mCSB_" +
							n.idx +
							"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
							n.idx +
							"_scrollbar mCS-" +
							i.theme +
							" mCSB_scrollTools_horizontal" +
							r +
							"'><div class='" +
							d[12] +
							"'><div id='mCSB_" +
							n.idx +
							"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
					],
					s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
					c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
					u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
					f = i.autoHideScrollbar ? " " + d[6] : "",
					h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
				i.setWidth && t.css("width", i.setWidth),
					i.setHeight && t.css("height", i.setHeight),
					(i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft),
					t
						.addClass(o + " _" + a + "_" + n.idx + f + h)
						.wrapInner(
							"<div id='mCSB_" +
								n.idx +
								"' class='mCustomScrollBox mCS-" +
								i.theme +
								" " +
								s +
								"'><div id='mCSB_" +
								n.idx +
								"_container' class='mCSB_container' style='position:relative; top:" +
								i.setTop +
								"; left:" +
								i.setLeft +
								";' dir='" +
								n.langDir +
								"' /></div>"
						);
				var m = e("#mCSB_" + n.idx),
					p = e("#mCSB_" + n.idx + "_container");
				"y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)),
					"outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)),
					w.call(this);
				var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
				g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width());
			},
			x = function (t) {
				var o = [
						t[0].scrollWidth,
						Math.max.apply(
							Math,
							t
								.children()
								.map(function () {
									return e(this).outerWidth(!0);
								})
								.get()
						),
					],
					a = t.parent().width();
				return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%";
			},
			_ = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = e("#mCSB_" + o.idx + "_container");
				if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
					i.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" });
					var r = Math.ceil(i[0].scrollWidth);
					3 === n.advanced.autoExpandHorizontalScroll || (2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width())
						? i.css({ width: r, "min-width": "100%", "overflow-x": "inherit" })
						: i
								.css({ "overflow-x": "inherit", position: "absolute" })
								.wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
								.css({ width: Math.ceil(i[0].getBoundingClientRect().right + 0.4) - Math.floor(i[0].getBoundingClientRect().left), "min-width": "100%", position: "relative" })
								.unwrap();
				}
			},
			w = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = e(".mCSB_" + o.idx + "_scrollbar:first"),
					r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
					l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
					s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
				n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]);
			},
			S = function () {
				var t = e(this),
					o = t.data(a),
					n = e("#mCSB_" + o.idx),
					i = e("#mCSB_" + o.idx + "_container"),
					r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
					l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
					c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
					d = s && c[1] < c[0] ? c[0] : c[1],
					u = s && c[3] < c[2] ? c[2] : c[3];
				r[0]
					.css({ height: d, "max-height": r[0].parent().height() - 10 })
					.find(".mCSB_dragger_bar")
					.css({ "line-height": c[0] + "px" }),
					r[1].css({ width: u, "max-width": r[1].parent().width() - 10 });
			},
			b = function () {
				var t = e(this),
					o = t.data(a),
					n = e("#mCSB_" + o.idx),
					i = e("#mCSB_" + o.idx + "_container"),
					r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
					l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
					s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
				o.scrollRatio = { y: s[0], x: s[1] };
			},
			C = function (e, t, o) {
				var a = o ? d[0] + "_expanded" : "",
					n = e.closest(".mCSB_scrollTools");
				"active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), (e[0]._draggable = e[0]._draggable ? 0 : 1)) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])));
			},
			y = function () {
				var t = e(this),
					o = t.data(a),
					n = e("#mCSB_" + o.idx),
					i = e("#mCSB_" + o.idx + "_container"),
					r = null == o.overflowed ? i.height() : i.outerHeight(!1),
					l = null == o.overflowed ? i.width() : i.outerWidth(!1),
					s = i[0].scrollHeight,
					c = i[0].scrollWidth;
				return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()];
			},
			B = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = e("#mCSB_" + o.idx),
					r = e("#mCSB_" + o.idx + "_container"),
					l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
				if ((Q(t), (("x" !== n.axis && !o.overflowed[0]) || ("y" === n.axis && o.overflowed[0])) && (l[0].add(r).css("top", 0), G(t, "_resetY")), ("y" !== n.axis && !o.overflowed[1]) || ("x" === n.axis && o.overflowed[1]))) {
					var s = (dx = 0);
					"rtl" === o.langDir && ((s = i.width() - r.outerWidth(!1)), (dx = Math.abs(s / o.scrollRatio.x))), r.css("left", s), l[1].css("left", dx), G(t, "_resetX");
				}
			},
			T = function () {
				function t() {
					r = setTimeout(function () {
						e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t();
					}, 100);
				}
				var o = e(this),
					n = o.data(a),
					i = n.opt;
				if (!n.bindEvents) {
					if ((I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable)) {
						var r;
						t();
					}
					P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), (n.bindEvents = !0);
				}
			},
			k = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = a + "_" + o.idx,
					r = ".mCSB_" + o.idx + "_scrollbar",
					l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
					s = e("#mCSB_" + o.idx + "_container");
				n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)),
					n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)),
					o.bindEvents &&
						(e(document)
							.add(e(!A() || top.document))
							.unbind("." + i),
						l.each(function () {
							e(this).unbind("." + i);
						}),
						clearTimeout(t[0]._focusTimeout),
						$(t[0], "_focusTimeout"),
						clearTimeout(o.sequential.step),
						$(o.sequential, "step"),
						clearTimeout(s[0].onCompleteTimeout),
						$(s[0], "onCompleteTimeout"),
						(o.bindEvents = !1));
			},
			M = function (t) {
				var o = e(this),
					n = o.data(a),
					i = n.opt,
					r = e("#mCSB_" + n.idx + "_container_wrapper"),
					l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
					s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
					c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
				"x" !== i.axis &&
					(n.overflowed[0] && !t
						? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10]))
						: (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))),
					"y" !== i.axis &&
						(n.overflowed[1] && !t
							? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11]))
							: (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))),
					n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]);
			},
			O = function (t) {
				var o = t.type,
					a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
					n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
				switch (o) {
					case "pointerdown":
					case "MSPointerDown":
					case "pointermove":
					case "MSPointerMove":
					case "pointerup":
					case "MSPointerUp":
						return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
					case "touchstart":
					case "touchmove":
					case "touchend":
						var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
							r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
						return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
					default:
						return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1];
				}
			},
			I = function () {
				function t(e, t, a, n) {
					if (((h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0), o.attr("id") === f[1]))
						var i = "x",
							s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
					else
						var i = "y",
							s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
					G(r, s.toString(), { dir: i, drag: !0 });
				}
				var o,
					n,
					i,
					r = e(this),
					l = r.data(a),
					d = l.opt,
					u = a + "_" + l.idx,
					f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
					h = e("#mCSB_" + l.idx + "_container"),
					m = e("#" + f[0] + ",#" + f[1]),
					p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
					g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
				m
					.bind("contextmenu." + u, function (e) {
						e.preventDefault();
					})
					.bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function (t) {
						if ((t.stopImmediatePropagation(), t.preventDefault(), ee(t))) {
							(c = !0),
								s &&
									(document.onselectstart = function () {
										return !1;
									}),
								L.call(h, !1),
								Q(r),
								(o = e(this));
							var a = o.offset(),
								l = O(t)[0] - a.top,
								u = O(t)[1] - a.left,
								f = o.height() + a.top,
								m = o.width() + a.left;
							f > l && l > 0 && m > u && u > 0 && ((n = l), (i = u)), C(o, "active", d.autoExpandScrollbar);
						}
					})
					.bind("touchmove." + u, function (e) {
						e.stopImmediatePropagation(), e.preventDefault();
						var a = o.offset(),
							r = O(e)[0] - a.top,
							l = O(e)[1] - a.left;
						t(n, i, r, l);
					}),
					e(document)
						.add(g)
						.bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function (e) {
							if (o) {
								var a = o.offset(),
									r = O(e)[0] - a.top,
									l = O(e)[1] - a.left;
								if (n === r && i === l) return;
								t(n, i, r, l);
							}
						})
						.add(p)
						.bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function () {
							o && (C(o, "active", d.autoExpandScrollbar), (o = null)), (c = !1), s && (document.onselectstart = null), L.call(h, !0);
						});
			},
			D = function () {
				function o(e) {
					if (!te(e) || c || O(e)[2]) return void (t = 0);
					(t = 1), (b = 0), (C = 0), (d = 1), y.removeClass("mCS_touch_action");
					var o = I.offset();
					(u = O(e)[0] - o.top), (f = O(e)[1] - o.left), (z = [O(e)[0], O(e)[1]]);
				}
				function n(e) {
					if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
						g = K();
						var t = M.offset(),
							o = O(e)[0] - t.top,
							a = O(e)[1] - t.left,
							n = "mcsLinearOut";
						if ((E.push(o), W.push(a), (z[2] = Math.abs(O(e)[0] - z[0])), (z[3] = Math.abs(O(e)[1] - z[1])), B.overflowed[0]))
							var i = D[0].parent().height() - D[0].height(),
								r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
						if (B.overflowed[1])
							var l = D[1].parent().width() - D[1].width(),
								h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
						r || h ? (U || e.preventDefault(), (b = 1)) : ((C = 1), y.addClass("mCS_touch_action")),
							U && e.preventDefault(),
							(w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null]),
							(I[0].idleTimer = 250),
							B.overflowed[0] && s(w[0], R, n, "y", "all", !0),
							B.overflowed[1] && s(w[1], R, n, "x", L, !0);
					}
				}
				function i(e) {
					if (!te(e) || c || O(e)[2]) return void (t = 0);
					(t = 1), e.stopImmediatePropagation(), Q(y), (p = K());
					var o = M.offset();
					(h = O(e)[0] - o.top), (m = O(e)[1] - o.left), (E = []), (W = []);
				}
				function r(e) {
					if (te(e) && !c && !O(e)[2]) {
						(d = 0), e.stopImmediatePropagation(), (b = 0), (C = 0), (v = K());
						var t = M.offset(),
							o = O(e)[0] - t.top,
							a = O(e)[1] - t.left;
						if (!(v - g > 30)) {
							_ = 1e3 / (v - p);
							var n = "mcsEaseOut",
								i = 2.5 > _,
								r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
							x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
							var u = [Math.abs(x[0]), Math.abs(x[1])];
							_ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
							var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
							(w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null]), (S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia]);
							var y = parseInt(T.contentTouchScroll) || 0;
							(w[0] = u[0] > y ? w[0] : 0), (w[1] = u[1] > y ? w[1] : 0), B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1);
						}
					}
				}
				function l(e, t) {
					var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
					return e > 90 ? (t > 4 ? o[0] : o[3]) : e > 60 ? (t > 3 ? o[3] : o[2]) : e > 30 ? (t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2]) : t > 8 ? t : o[3];
				}
				function s(e, t, o, a, n, i) {
					e && G(y, e.toString(), { dur: t, scrollEasing: o, dir: a, overwrite: n, drag: i });
				}
				var d,
					u,
					f,
					h,
					m,
					p,
					g,
					v,
					x,
					_,
					w,
					S,
					b,
					C,
					y = e(this),
					B = y.data(a),
					T = B.opt,
					k = a + "_" + B.idx,
					M = e("#mCSB_" + B.idx),
					I = e("#mCSB_" + B.idx + "_container"),
					D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
					E = [],
					W = [],
					R = 0,
					L = "yx" === T.axis ? "none" : "all",
					z = [],
					P = I.find("iframe"),
					H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
					U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
				I.bind(H[0], function (e) {
					o(e);
				}).bind(H[1], function (e) {
					n(e);
				}),
					M.bind(H[0], function (e) {
						i(e);
					}).bind(H[2], function (e) {
						r(e);
					}),
					P.length &&
						P.each(function () {
							e(this).bind("load", function () {
								A(this) &&
									e(this.contentDocument || this.contentWindow.document)
										.bind(H[0], function (e) {
											o(e), i(e);
										})
										.bind(H[1], function (e) {
											n(e);
										})
										.bind(H[2], function (e) {
											r(e);
										});
							});
						});
			},
			E = function () {
				function o() {
					return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0;
				}
				function n(e, t, o) {
					(d.type = o && i ? "stepped" : "stepless"), (d.scrollAmount = 10), j(r, e, t, "mcsLinearOut", o ? 60 : null);
				}
				var i,
					r = e(this),
					l = r.data(a),
					s = l.opt,
					d = l.sequential,
					u = a + "_" + l.idx,
					f = e("#mCSB_" + l.idx + "_container"),
					h = f.parent();
				f.bind("mousedown." + u, function () {
					t || i || ((i = 1), (c = !0));
				})
					.add(document)
					.bind("mousemove." + u, function (e) {
						if (!t && i && o()) {
							var a = f.offset(),
								r = O(e)[0] - a.top + f[0].offsetTop,
								c = O(e)[1] - a.left + f[0].offsetLeft;
							r > 0 && r < h.height() && c > 0 && c < h.width()
								? d.step && n("off", null, "stepped")
								: ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)));
						}
					})
					.bind("mouseup." + u + " dragend." + u, function () {
						t || (i && ((i = 0), n("off", null)), (c = !1));
					});
			},
			W = function () {
				function t(t, a) {
					if ((Q(o), !z(o, t.target))) {
						var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
							d = i.scrollInertia;
						if ("x" === i.axis || "x" === i.mouseWheel.axis)
							var u = "x",
								f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
								h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? 0.9 * l.width() : f[0],
								m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
								p = c[1][0].offsetLeft,
								g = c[1].parent().width() - c[1].width(),
								v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
						else
							var u = "y",
								f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
								h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? 0.9 * l.height() : f[0],
								m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
								p = c[0][0].offsetTop,
								g = c[0].parent().height() - c[0].height(),
								v = t.deltaY || a;
						("y" === u && !n.overflowed[0]) ||
							("x" === u && !n.overflowed[1]) ||
							((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v),
							i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1),
							((v > 0 && 0 !== p) || (0 > v && p !== g) || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()),
							t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && ((h = t.deltaFactor), (d = 17)),
							G(o, (m - v * h).toString(), { dir: u, dur: d }));
					}
				}
				if (e(this).data(a)) {
					var o = e(this),
						n = o.data(a),
						i = n.opt,
						r = a + "_" + n.idx,
						l = e("#mCSB_" + n.idx),
						c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
						d = e("#mCSB_" + n.idx + "_container").find("iframe");
					d.length &&
						d.each(function () {
							e(this).bind("load", function () {
								A(this) &&
									e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function (e, o) {
										t(e, o);
									});
							});
						}),
						l.bind("mousewheel." + r, function (e, o) {
							t(e, o);
						});
				}
			},
			R = new Object(),
			A = function (t) {
				var o = !1,
					a = !1,
					n = null;
				if ((void 0 === t ? (a = "#empty") : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a])) return R[a];
				if (t) {
					try {
						var i = t.contentDocument || t.contentWindow.document;
						n = i.body.innerHTML;
					} catch (r) {}
					o = null !== n;
				} else {
					try {
						var i = top.document;
						n = i.body.innerHTML;
					} catch (r) {}
					o = null !== n;
				}
				return a !== !1 && (R[a] = o), o;
			},
			L = function (e) {
				var t = this.find("iframe");
				if (t.length) {
					var o = e ? "auto" : "none";
					t.css("pointer-events", o);
				}
			},
			z = function (t, o) {
				var n = o.nodeName.toLowerCase(),
					i = t.data(a).opt.mouseWheel.disableOver,
					r = ["select", "textarea"];
				return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"));
			},
			P = function () {
				var t,
					o = e(this),
					n = o.data(a),
					i = a + "_" + n.idx,
					r = e("#mCSB_" + n.idx + "_container"),
					l = r.parent(),
					s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
				s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function (o) {
					(c = !0), e(o.target).hasClass("mCSB_dragger") || (t = 1);
				})
					.bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function () {
						c = !1;
					})
					.bind("click." + i, function (a) {
						if (t && ((t = 0), e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
							Q(o);
							var i = e(this),
								s = i.find(".mCSB_dragger");
							if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
								if (!n.overflowed[1]) return;
								var c = "x",
									u = a.pageX > s.offset().left ? -1 : 1,
									f = Math.abs(r[0].offsetLeft) - u * (0.9 * l.width());
							} else {
								if (!n.overflowed[0]) return;
								var c = "y",
									u = a.pageY > s.offset().top ? -1 : 1,
									f = Math.abs(r[0].offsetTop) - u * (0.9 * l.height());
							}
							G(o, f.toString(), { dir: c, scrollEasing: "mcsEaseInOut" });
						}
					});
			},
			H = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = a + "_" + o.idx,
					r = e("#mCSB_" + o.idx + "_container"),
					l = r.parent();
				r.bind("focusin." + i, function () {
					var o = e(document.activeElement),
						a = r.find(".mCustomScrollBox").length,
						i = 0;
					o.is(n.advanced.autoScrollOnFocus) &&
						(Q(t),
						clearTimeout(t[0]._focusTimeout),
						(t[0]._focusTimer = a ? (i + 17) * a : 0),
						(t[0]._focusTimeout = setTimeout(function () {
							var e = [ae(o)[0], ae(o)[1]],
								a = [r[0].offsetTop, r[0].offsetLeft],
								s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)],
								c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
							"x" === n.axis || s[0] || G(t, e[0].toString(), { dir: "y", scrollEasing: "mcsEaseInOut", overwrite: c, dur: i }), "y" === n.axis || s[1] || G(t, e[1].toString(), { dir: "x", scrollEasing: "mcsEaseInOut", overwrite: c, dur: i });
						}, t[0]._focusTimer)));
				});
			},
			U = function () {
				var t = e(this),
					o = t.data(a),
					n = a + "_" + o.idx,
					i = e("#mCSB_" + o.idx + "_container").parent();
				i.bind("scroll." + n, function () {
					(0 === i.scrollTop() && 0 === i.scrollLeft()) || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden");
				});
			},
			F = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = o.sequential,
					r = a + "_" + o.idx,
					l = ".mCSB_" + o.idx + "_scrollbar",
					s = e(l + ">a");
				s.bind("contextmenu." + r, function (e) {
					e.preventDefault();
				}).bind(
					"mousedown." +
						r +
						" touchstart." +
						r +
						" pointerdown." +
						r +
						" MSPointerDown." +
						r +
						" mouseup." +
						r +
						" touchend." +
						r +
						" pointerup." +
						r +
						" MSPointerUp." +
						r +
						" mouseout." +
						r +
						" pointerout." +
						r +
						" MSPointerOut." +
						r +
						" click." +
						r,
					function (a) {
						function r(e, o) {
							(i.scrollAmount = n.scrollButtons.scrollAmount), j(t, e, o);
						}
						if ((a.preventDefault(), ee(a))) {
							var l = e(this).attr("class");
							switch (((i.type = n.scrollButtons.scrollType), a.type)) {
								case "mousedown":
								case "touchstart":
								case "pointerdown":
								case "MSPointerDown":
									if ("stepped" === i.type) return;
									(c = !0), (o.tweenRunning = !1), r("on", l);
									break;
								case "mouseup":
								case "touchend":
								case "pointerup":
								case "MSPointerUp":
								case "mouseout":
								case "pointerout":
								case "MSPointerOut":
									if ("stepped" === i.type) return;
									(c = !1), i.dir && r("off", l);
									break;
								case "click":
									if ("stepped" !== i.type || o.tweenRunning) return;
									r("on", l);
							}
						}
					}
				);
			},
			q = function () {
				function t(t) {
					function a(e, t) {
						(r.type = i.keyboard.scrollType), (r.scrollAmount = i.keyboard.scrollAmount), ("stepped" === r.type && n.tweenRunning) || j(o, e, t);
					}
					switch (t.type) {
						case "blur":
							n.tweenRunning && r.dir && a("off", null);
							break;
						case "keydown":
						case "keyup":
							var l = t.keyCode ? t.keyCode : t.which,
								s = "on";
							if (("x" !== i.axis && (38 === l || 40 === l)) || ("y" !== i.axis && (37 === l || 39 === l))) {
								if (((38 === l || 40 === l) && !n.overflowed[0]) || ((37 === l || 39 === l) && !n.overflowed[1])) return;
								"keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l));
							} else if (33 === l || 34 === l) {
								if (((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
									Q(o);
									var f = 34 === l ? -1 : 1;
									if ("x" === i.axis || ("yx" === i.axis && n.overflowed[1] && !n.overflowed[0]))
										var h = "x",
											m = Math.abs(c[0].offsetLeft) - f * (0.9 * d.width());
									else
										var h = "y",
											m = Math.abs(c[0].offsetTop) - f * (0.9 * d.height());
									G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" });
								}
							} else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
								if ("x" === i.axis || ("yx" === i.axis && n.overflowed[1] && !n.overflowed[0]))
									var h = "x",
										m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
								else
									var h = "y",
										m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
								G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" });
							}
					}
				}
				var o = e(this),
					n = o.data(a),
					i = n.opt,
					r = n.sequential,
					l = a + "_" + n.idx,
					s = e("#mCSB_" + n.idx),
					c = e("#mCSB_" + n.idx + "_container"),
					d = c.parent(),
					u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
					f = c.find("iframe"),
					h = ["blur." + l + " keydown." + l + " keyup." + l];
				f.length &&
					f.each(function () {
						e(this).bind("load", function () {
							A(this) &&
								e(this.contentDocument || this.contentWindow.document).bind(h[0], function (e) {
									t(e);
								});
						});
					}),
					s.attr("tabindex", "0").bind(h[0], function (e) {
						t(e);
					});
			},
			j = function (t, o, n, i, r) {
				function l(e) {
					u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? ("x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0]) : u.snapAmount);
					var o = "stepped" !== f.type,
						a = r ? r : e ? (o ? p / 1.5 : g) : 1e3 / 60,
						n = e ? (o ? 7.5 : 40) : 2.5,
						s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
						d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
						m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
						v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
						x = "auto" !== f.scrollAmount ? v : m,
						_ = i ? i : e ? (o ? "mcsLinearOut" : "mcsEaseInOut") : "mcsLinear",
						w = !!e;
					return (
						e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]),
						G(t, x.toString(), { dir: f.dir[0], scrollEasing: _, dur: a, onComplete: w }),
						e
							? void (f.dir = !1)
							: (clearTimeout(f.step),
							  void (f.step = setTimeout(function () {
									l();
							  }, a)))
					);
				}
				function s() {
					clearTimeout(f.step), $(f, "step"), Q(t);
				}
				var c = t.data(a),
					u = c.opt,
					f = c.sequential,
					h = e("#mCSB_" + c.idx + "_container"),
					m = "stepped" === f.type,
					p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
					g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
				switch (o) {
					case "on":
						if (((f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1]), Q(t), oe(n) && "stepped" === f.type)) return;
						l(m);
						break;
					case "off":
						s(), (m || (c.tweenRunning && f.dir)) && l(!0);
				}
			},
			Y = function (t) {
				var o = e(this).data(a).opt,
					n = [];
				return (
					"function" == typeof t && (t = t()),
					t instanceof Array ? (n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null]) : ((n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t), (n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t)),
					"function" == typeof n[0] && (n[0] = n[0]()),
					"function" == typeof n[1] && (n[1] = n[1]()),
					n
				);
			},
			X = function (t, o) {
				if (null != t && "undefined" != typeof t) {
					var n = e(this),
						i = n.data(a),
						r = i.opt,
						l = e("#mCSB_" + i.idx + "_container"),
						s = l.parent(),
						c = typeof t;
					o || (o = "x" === r.axis ? "x" : "y");
					var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
						f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
						h = "x" === o ? "left" : "top";
					switch (c) {
						case "function":
							return t();
						case "object":
							var m = t.jquery ? t : e(t);
							if (!m.length) return;
							return "x" === o ? ae(m)[1] : ae(m)[0];
						case "string":
						case "number":
							if (oe(t)) return Math.abs(t);
							if (-1 !== t.indexOf("%")) return Math.abs((d * parseInt(t)) / 100);
							if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
							if (-1 !== t.indexOf("+=")) {
								var p = f + parseInt(t.split("+=")[1]);
								return p >= 0 ? 0 : Math.abs(p);
							}
							if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
							if ("top" === t || "left" === t) return 0;
							if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
							if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
							if ("first" === t || "last" === t) {
								var m = l.find(":" + t);
								return "x" === o ? ae(m)[1] : ae(m)[0];
							}
							return e(t).length ? ("x" === o ? ae(e(t))[1] : ae(e(t))[0]) : (l.css(h, t), void u.update.call(null, n[0]));
					}
				}
			},
			N = function (t) {
				function o() {
					return (
						clearTimeout(f[0].autoUpdate),
						0 === l.parents("html").length
							? void (l = null)
							: void (f[0].autoUpdate = setTimeout(function () {
									return c.advanced.updateOnSelectorChange && ((s.poll.change.n = i()), s.poll.change.n !== s.poll.change.o)
										? ((s.poll.change.o = s.poll.change.n), void r(3))
										: c.advanced.updateOnContentResize && ((s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth), s.poll.size.n !== s.poll.size.o)
										? ((s.poll.size.o = s.poll.size.n), void r(1))
										: !c.advanced.updateOnImageLoad || ("auto" === c.advanced.updateOnImageLoad && "y" === c.axis) || ((s.poll.img.n = f.find("img").length), s.poll.img.n === s.poll.img.o)
										? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o())
										: ((s.poll.img.o = s.poll.img.n),
										  void f.find("img").each(function () {
												n(this);
										  }));
							  }, c.advanced.autoUpdateTimeout))
					);
				}
				function n(t) {
					function o(e, t) {
						return function () {
							return t.apply(e, arguments);
						};
					}
					function a() {
						(this.onload = null), e(t).addClass(d[2]), r(2);
					}
					if (e(t).hasClass(d[2])) return void r();
					var n = new Image();
					(n.onload = o(n, a)), (n.src = t.src);
				}
				function i() {
					c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
					var e = 0,
						t = f.find(c.advanced.updateOnSelectorChange);
					return (
						c.advanced.updateOnSelectorChange &&
							t.length > 0 &&
							t.each(function () {
								e += this.offsetHeight + this.offsetWidth;
							}),
						e
					);
				}
				function r(e) {
					clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
				}
				var l = e(this),
					s = l.data(a),
					c = s.opt,
					f = e("#mCSB_" + s.idx + "_container");
				return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o();
			},
			V = function (e, t, o) {
				return Math.round(e / t) * t - o;
			},
			Q = function (t) {
				var o = t.data(a),
					n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
				n.each(function () {
					Z.call(this);
				});
			},
			G = function (t, o, n) {
				function i(e) {
					return s && c.callbacks[e] && "function" == typeof c.callbacks[e];
				}
				function r() {
					return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w];
				}
				function l() {
					var e = [h[0].offsetTop, h[0].offsetLeft],
						o = [x[0].offsetTop, x[0].offsetLeft],
						a = [h.outerHeight(!1), h.outerWidth(!1)],
						i = [f.height(), f.width()];
					t[0].mcs = {
						content: h,
						top: e[0],
						left: e[1],
						draggerTop: o[0],
						draggerLeft: o[1],
						topPct: Math.round((100 * Math.abs(e[0])) / (Math.abs(a[0]) - i[0])),
						leftPct: Math.round((100 * Math.abs(e[1])) / (Math.abs(a[1]) - i[1])),
						direction: n.dir,
					};
				}
				var s = t.data(a),
					c = s.opt,
					d = { trigger: "internal", dir: "y", scrollEasing: "mcsEaseOut", drag: !1, dur: c.scrollInertia, overwrite: "all", callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
					n = e.extend(d, n),
					u = [n.dur, n.drag ? 0 : n.dur],
					f = e("#mCSB_" + s.idx),
					h = e("#mCSB_" + s.idx + "_container"),
					m = h.parent(),
					p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
					g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
				if (
					((s.trigger = n.trigger),
					(0 === m.scrollTop() && 0 === m.scrollLeft()) || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)),
					"_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), (s.contentReset.y = 1)),
					"_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), (s.contentReset.x = 1)),
					"_resetY" !== o && "_resetX" !== o)
				) {
					if (
						((!s.contentReset.y && t[0].mcs) || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), (s.contentReset.x = null)),
						(!s.contentReset.x && t[0].mcs) || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), (s.contentReset.x = null)),
						c.snapAmount)
					) {
						var v = c.snapAmount instanceof Array ? ("x" === n.dir ? c.snapAmount[1] : c.snapAmount[0]) : c.snapAmount;
						o = V(o, v, c.snapOffset);
					}
					switch (n.dir) {
						case "x":
							var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
								_ = "left",
								w = h[0].offsetLeft,
								S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
								b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
								y = p[1],
								B = g[1],
								T = y > 0 ? y / s.scrollRatio.x : 0,
								k = B > 0 ? B / s.scrollRatio.x : 0;
							break;
						case "y":
							var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
								_ = "top",
								w = h[0].offsetTop,
								S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
								b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
								y = p[0],
								B = g[0],
								T = y > 0 ? y / s.scrollRatio.y : 0,
								k = B > 0 ? B / s.scrollRatio.y : 0;
					}
					b[1] < 0 || (0 === b[0] && 0 === b[1]) ? (b = [0, 0]) : b[1] >= S[1] ? (b = [S[0], S[1]]) : (b[0] = -b[0]),
						t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])),
						clearTimeout(h[0].onCompleteTimeout),
						J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing),
						(!s.tweenRunning && ((0 === w && b[0] >= 0) || (w === S[0] && b[0] <= S[0]))) ||
							J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
								onStart: function () {
									n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), (s.tweenRunning = !0), C(x), (s.cbOffsets = r()));
								},
								onUpdate: function () {
									n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]));
								},
								onComplete: function () {
									if (n.callbacks && n.onComplete) {
										"yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
										var e = h[0].idleTimer || 0;
										h[0].onCompleteTimeout = setTimeout(function () {
											i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])),
												i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])),
												i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])),
												(s.tweenRunning = !1),
												(h[0].idleTimer = 0),
												C(x, "hide");
										}, e);
									}
								},
							});
				}
			},
			J = function (e, t, o, a, n, i, r) {
				function l() {
					S.stop || (x || m.call(), (x = K() - v), s(), x >= S.time && ((S.time = x > S.time ? x + f - (x - S.time) : x + f - 1), S.time < x + 1 && (S.time = x + 1)), S.time < a ? (S.id = h(l)) : g.call());
				}
				function s() {
					a > 0 ? ((S.currVal = u(S.time, _, b, a, n)), (w[t] = Math.round(S.currVal) + "px")) : (w[t] = o + "px"), p.call();
				}
				function c() {
					(f = 1e3 / 60),
						(S.time = x + f),
						(h = window.requestAnimationFrame
							? window.requestAnimationFrame
							: function (e) {
									return s(), setTimeout(e, 0.01);
							  }),
						(S.id = h(l));
				}
				function d() {
					null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), (S.id = null));
				}
				function u(e, t, o, a, n) {
					switch (n) {
						case "linear":
						case "mcsLinear":
							return (o * e) / a + t;
						case "mcsLinearOut":
							return (e /= a), e--, o * Math.sqrt(1 - e * e) + t;
						case "easeInOutSmooth":
							return (e /= a / 2), 1 > e ? (o / 2) * e * e + t : (e--, (-o / 2) * (e * (e - 2) - 1) + t);
						case "easeInOutStrong":
							return (e /= a / 2), 1 > e ? (o / 2) * Math.pow(2, 10 * (e - 1)) + t : (e--, (o / 2) * (-Math.pow(2, -10 * e) + 2) + t);
						case "easeInOut":
						case "mcsEaseInOut":
							return (e /= a / 2), 1 > e ? (o / 2) * e * e * e + t : ((e -= 2), (o / 2) * (e * e * e + 2) + t);
						case "easeOutSmooth":
							return (e /= a), e--, -o * (e * e * e * e - 1) + t;
						case "easeOutStrong":
							return o * (-Math.pow(2, (-10 * e) / a) + 1) + t;
						case "easeOut":
						case "mcsEaseOut":
						default:
							var i = (e /= a) * e,
								r = i * e;
							return t + o * (0.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e);
					}
				}
				e._mTween || (e._mTween = { top: {}, left: {} });
				var f,
					h,
					r = r || {},
					m = r.onStart || function () {},
					p = r.onUpdate || function () {},
					g = r.onComplete || function () {},
					v = K(),
					x = 0,
					_ = e.offsetTop,
					w = e.style,
					S = e._mTween[t];
				"left" === t && (_ = e.offsetLeft);
				var b = o - _;
				(S.stop = 0), "none" !== i && d(), c();
			},
			K = function () {
				return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
			},
			Z = function () {
				var e = this;
				e._mTween || (e._mTween = { top: {}, left: {} });
				for (var t = ["top", "left"], o = 0; o < t.length; o++) {
					var a = t[o];
					e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), (e._mTween[a].id = null), (e._mTween[a].stop = 1));
				}
			},
			$ = function (e, t) {
				try {
					delete e[t];
				} catch (o) {
					e[t] = null;
				}
			},
			ee = function (e) {
				return !(e.which && 1 !== e.which);
			},
			te = function (e) {
				var t = e.originalEvent.pointerType;
				return !(t && "touch" !== t && 2 !== t);
			},
			oe = function (e) {
				return !isNaN(parseFloat(e)) && isFinite(e);
			},
			ae = function (e) {
				var t = e.parents(".mCSB_container");
				return [e.offset().top - t.offset().top, e.offset().left - t.offset().left];
			},
			ne = function () {
				function e() {
					var e = ["webkit", "moz", "ms", "o"];
					if ("hidden" in document) return "hidden";
					for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
					return null;
				}
				var t = e();
				return t ? document[t] : !1;
			};
		(e.fn[o] = function (t) {
			return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
		}),
			(e[o] = function (t) {
				return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
			}),
			(e[o].defaults = i),
			(window[o] = !0),
			e(window).bind("load", function () {
				e(n)[o](),
					e.extend(e.expr[":"], {
						mcsInView:
							e.expr[":"].mcsInView ||
							function (t) {
								var o,
									a,
									n = e(t),
									i = n.parents(".mCSB_container");
								if (i.length) return (o = i.parent()), (a = [i[0].offsetTop, i[0].offsetLeft]), a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1);
							},
						mcsInSight:
							e.expr[":"].mcsInSight ||
							function (t, o, a) {
								var n,
									i,
									r,
									l,
									s = e(t),
									c = s.parents(".mCSB_container"),
									d =
										"exact" === a[3]
											? [
													[1, 0],
													[1, 0],
											  ]
											: [
													[0.9, 0.1],
													[0.6, 0.4],
											  ];
								if (c.length)
									return (
										(n = [s.outerHeight(!1), s.outerWidth(!1)]),
										(r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]]),
										(i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth]),
										(l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]]),
										r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
									);
							},
						mcsOverflow:
							e.expr[":"].mcsOverflow ||
							function (t) {
								var o = e(t).data(a);
								if (o) return o.overflowed[0] || o.overflowed[1];
							},
					});
			});
	});
});
/*!
 * Customized version of iScroll.js 0.0.5
 * It fixes bugs affecting its integration with fullpage.js
 */
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
	var rAF =
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};

	var utils = (function () {
		var me = {};

		var _elementStyle = document.createElement("div").style;
		var _vendor = (function () {
			var vendors = ["t", "webkitT", "MozT", "msT", "OT"],
				transform,
				i = 0,
				l = vendors.length;

			for (; i < l; i++) {
				transform = vendors[i] + "ransform";
				if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
			}

			return false;
		})();

		function _prefixStyle(style) {
			if (_vendor === false) return false;
			if (_vendor === "") return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}

		me.getTime =
			Date.now ||
			function getTime() {
				return new Date().getTime();
			};

		me.extend = function (target, obj) {
			for (var i in obj) {
				target[i] = obj[i];
			}
		};

		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};

		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};

		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ? "MSPointer" + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
		};

		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination,
				duration;

			deceleration = deceleration === undefined ? 0.0006 : deceleration;

			destination = current + ((speed * speed) / (2 * deceleration)) * (distance < 0 ? -1 : 1);
			duration = speed / deceleration;

			if (destination < lowerMargin) {
				destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5) * (speed / 8) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if (destination > 0) {
				destination = wrapperSize ? (wrapperSize / 2.5) * (speed / 8) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}

			return {
				destination: Math.round(destination),
				duration: duration,
			};
		};

		var _transform = _prefixStyle("transform");

		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle("perspective") in _elementStyle,
			hasTouch: "ontouchstart" in window,
			hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
			hasTransition: _prefixStyle("transition") in _elementStyle,
		});

		/*
			This should find all Android browsers lower than build 535.19 (both stock browser and webview)
			- galaxy S2 is ok
			- 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
			- 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
		 - galaxy S3 is badAndroid (stock brower, webview)
			 `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
		 - galaxy S4 is badAndroid (stock brower, webview)
			 `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
		 - galaxy S5 is OK
			 `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
		 - galaxy S6 is OK
			 `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
		*/
		me.isBadAndroid = (function () {
			var appVersion = window.navigator.appVersion;
			// Android browser is not a chrome browser.
			if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
				var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
				if (safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
					return parseFloat(safariVersion[1]) < 535.19;
				} else {
					return true;
				}
			} else {
				return false;
			}
		})();

		me.extend((me.style = {}), {
			transform: _transform,
			transitionTimingFunction: _prefixStyle("transitionTimingFunction"),
			transitionDuration: _prefixStyle("transitionDuration"),
			transitionDelay: _prefixStyle("transitionDelay"),
			transformOrigin: _prefixStyle("transformOrigin"),
		});

		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};

		me.addClass = function (e, c) {
			if (me.hasClass(e, c)) {
				return;
			}

			var newclass = e.className.split(" ");
			newclass.push(c);
			e.className = newclass.join(" ");
		};

		me.removeClass = function (e, c) {
			if (!me.hasClass(e, c)) {
				return;
			}

			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
			e.className = e.className.replace(re, " ");
		};

		me.offset = function (el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;

			// jshint -W084
			while ((el = el.offsetParent)) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084

			return {
				left: left,
				top: top,
			};
		};

		me.preventDefaultException = function (el, exceptions) {
			for (var i in exceptions) {
				if (exceptions[i].test(el[i])) {
					return true;
				}
			}

			return false;
		};

		me.extend((me.eventType = {}), {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,

			mousedown: 2,
			mousemove: 2,
			mouseup: 2,

			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,

			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3,
		});

		me.extend((me.ease = {}), {
			quadratic: {
				style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
				fn: function (k) {
					return k * (2 - k);
				},
			},
			circular: {
				style: "cubic-bezier(0.1, 0.57, 0.1, 1)", // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function (k) {
					return Math.sqrt(1 - --k * k);
				},
			},
			back: {
				style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
				fn: function (k) {
					var b = 4;
					return (k = k - 1) * k * ((b + 1) * k + b) + 1;
				},
			},
			bounce: {
				style: "",
				fn: function (k) {
					if ((k /= 1) < 1 / 2.75) {
						return 7.5625 * k * k;
					} else if (k < 2 / 2.75) {
						return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
					} else if (k < 2.5 / 2.75) {
						return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
					} else {
						return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
					}
				},
			},
			elastic: {
				style: "",
				fn: function (k) {
					var f = 0.22,
						e = 0.4;

					if (k === 0) {
						return 0;
					}
					if (k == 1) {
						return 1;
					}

					return e * Math.pow(2, -10 * k) * Math.sin(((k - f / 4) * (2 * Math.PI)) / f) + 1;
				},
			},
		});

		me.tap = function (e, eventName) {
			var ev = document.createEvent("Event");
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};

		me.click = function (e) {
			var target = e.target,
				ev;

			if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
				// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
				// initMouseEvent is deprecated.
				ev = new MouseEvent("click", {
					view: e.view || window,
					detail: 1,
					screenX: target.screenX || 0,
					screenY: target.screenY || 0,
					clientX: target.clientX || 0,
					clientY: target.clientY || 0,
					ctrlKey: !!e.ctrlKey,
					altKey: !!e.altKey,
					shiftKey: !!e.shiftKey,
					metaKey: !!e.metaKey,
					button: 0,
					relatedTarget: null,
					_constructed: true,
				});

				target.dispatchEvent(ev);
			}
		};

		return me;
	})();
	window.IScroll = function (el, options) {
		this.wrapper = typeof el == "string" ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style; // cache style for better performance

		this.options = {
			resizeScrollbars: true,

			mouseWheelSpeed: 20,

			snapThreshold: 0.334,

			// INSERT POINT: OPTIONS
			disablePointer: !utils.hasPointer,
			disableTouch: utils.hasPointer || !utils.hasTouch,
			disableMouse: utils.hasPointer || utils.hasTouch,
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,

			bounce: true,
			bounceTime: 600,
			bounceEasing: "",

			preventDefault: true,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL|A)$/ },

			HWCompositing: true,
			useTransition: true,
			useTransform: true,
			bindToWrapper: typeof window.onmousedown === "undefined",
		};

		for (var i in options) {
			this.options[i] = options[i];
		}

		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? " translateZ(0)" : "";

		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;

		this.options.eventPassthrough = this.options.eventPassthrough === true ? "vertical" : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == "vertical" ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == "horizontal" ? false : this.options.scrollX;

		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

		this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

		if (this.options.tap === true) {
			this.options.tap = "tap";
		}

		// https://github.com/cubiq/iscroll/issues/1029
		if (!this.options.useTransition && !this.options.useTransform) {
			if (!/relative|absolute/i.test(this.scrollerStyle.position)) {
				this.scrollerStyle.position = "relative";
			}
		}

		if (this.options.shrinkScrollbars == "scale") {
			this.options.useTransition = false;
		}

		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

		// INSERT POINT: NORMALIZATION

		// Some defaults
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};

		// INSERT POINT: DEFAULTS

		this._init();
		this.refresh();

		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	};

	IScroll.prototype = {
		version: "5.2.0",

		_init: function () {
			this._initEvents();

			if (this.options.scrollbars || this.options.indicators) {
				this._initIndicators();
			}

			if (this.options.mouseWheel) {
				this._initWheel();
			}

			if (this.options.snap) {
				this._initSnap();
			}

			if (this.options.keyBindings) {
				this._initKeys();
			}

			// INSERT POINT: _init
		},

		destroy: function () {
			this._initEvents(true);
			clearTimeout(this.resizeTimeout);
			this.resizeTimeout = null;
			this._execEvent("destroy");
		},

		_transitionEnd: function (e) {
			if (e.target != this.scroller || !this.isInTransition) {
				return;
			}

			this._transitionTime();
			if (!this.resetPosition(this.options.bounceTime)) {
				this.isInTransition = false;
				this._execEvent("scrollEnd");
			}
		},

		_start: function (e) {
			// React to left mouse button only
			if (utils.eventType[e.type] != 1) {
				// for button property
				// http://unixpapa.com/js/mouse.html
				var button;
				if (!e.which) {
					/* IE case */
					button = e.button < 2 ? 0 : e.button == 4 ? 1 : 2;
				} else {
					/* All others */
					button = e.button;
				}
				if (button !== 0) {
					return;
				}
			}

			if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) {
				return;
			}

			if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
				e.preventDefault();
			}

			var point = e.touches ? e.touches[0] : e,
				pos;

			this.initiated = utils.eventType[e.type];
			this.moved = false;
			this.distX = 0;
			this.distY = 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;

			this.startTime = utils.getTime();

			if (this.options.useTransition && this.isInTransition) {
				this._transitionTime();
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent("scrollEnd");
			} else if (!this.options.useTransition && this.isAnimating) {
				this.isAnimating = false;
				this._execEvent("scrollEnd");
			}

			this.startX = this.x;
			this.startY = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX = point.pageX;
			this.pointY = point.pageY;

			this._execEvent("beforeScrollStart");
		},

		_move: function (e) {
			if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
				return;
			}

			if (this.options.preventDefault) {
				// increases performance on Android? TODO: check!
				e.preventDefault();
			}

			var point = e.touches ? e.touches[0] : e,
				deltaX = point.pageX - this.pointX,
				deltaY = point.pageY - this.pointY,
				timestamp = utils.getTime(),
				newX,
				newY,
				absDistX,
				absDistY;

			this.pointX = point.pageX;
			this.pointY = point.pageY;

			this.distX += deltaX;
			this.distY += deltaY;
			absDistX = Math.abs(this.distX);
			absDistY = Math.abs(this.distY);

			// We need to move at least 10 pixels for the scrolling to initiate
			if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
				return;
			}

			// If you are scrolling in one direction lock the other
			if (!this.directionLocked && !this.options.freeScroll) {
				if (absDistX > absDistY + this.options.directionLockThreshold) {
					this.directionLocked = "h"; // lock horizontally
				} else if (absDistY >= absDistX + this.options.directionLockThreshold) {
					this.directionLocked = "v"; // lock vertically
				} else {
					this.directionLocked = "n"; // no lock
				}
			}

			if (this.directionLocked == "h") {
				if (this.options.eventPassthrough == "vertical") {
					e.preventDefault();
				} else if (this.options.eventPassthrough == "horizontal") {
					this.initiated = false;
					return;
				}

				deltaY = 0;
			} else if (this.directionLocked == "v") {
				if (this.options.eventPassthrough == "horizontal") {
					e.preventDefault();
				} else if (this.options.eventPassthrough == "vertical") {
					this.initiated = false;
					return;
				}

				deltaX = 0;
			}

			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			// Slow down if outside of the boundaries
			if (newX > 0 || newX < this.maxScrollX) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if (newY > 0 || newY < this.maxScrollY) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}

			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

			if (!this.moved) {
				this._execEvent("scrollStart");
			}

			this.moved = true;

			this._translate(newX, newY);

			/* REPLACE START: _move */

			if (timestamp - this.startTime > 300) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;
			}

			/* REPLACE END: _move */
		},

		_end: function (e) {
			if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
				return;
			}

			if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
				e.preventDefault();
			}

			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX,
				momentumY,
				duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = "";

			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();

			// reset if we are outside of the boundaries
			if (this.resetPosition(this.options.bounceTime)) {
				return;
			}

			this.scrollTo(newX, newY); // ensures that the last position is rounded

			// we scrolled less than 10 pixels
			if (!this.moved) {
				if (this.options.tap) {
					utils.tap(e, this.options.tap);
				}

				if (this.options.click) {
					utils.click(e);
				}

				this._execEvent("scrollCancel");
				return;
			}

			if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
				this._execEvent("flick");
				return;
			}

			// start momentum animation if needed
			if (this.options.momentum && duration < 300) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}

			if (this.options.snap) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
				newX = snap.x;
				newY = snap.y;

				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing;
			}

			// INSERT POINT: _end

			if (newX != this.x || newY != this.y) {
				// change easing function when scroller goes out of the boundaries
				if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
					easing = utils.ease.quadratic;
				}

				this.scrollTo(newX, newY, time, easing);
				return;
			}

			this._execEvent("scrollEnd");
		},

		_resize: function () {
			var that = this;

			clearTimeout(this.resizeTimeout);

			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},

		resetPosition: function (time) {
			var x = this.x,
				y = this.y;

			time = time || 0;

			if (!this.hasHorizontalScroll || this.x > 0) {
				x = 0;
			} else if (this.x < this.maxScrollX) {
				x = this.maxScrollX;
			}

			if (!this.hasVerticalScroll || this.y > 0) {
				y = 0;
			} else if (this.y < this.maxScrollY) {
				y = this.maxScrollY;
			}

			if (x == this.x && y == this.y) {
				return false;
			}

			this.scrollTo(x, y, time, this.options.bounceEasing);

			return true;
		},

		disable: function () {
			this.enabled = false;
		},

		enable: function () {
			this.enabled = true;
		},

		refresh: function () {
			var rf = this.wrapper.offsetHeight; // Force reflow

			this.wrapperWidth = this.wrapper.clientWidth;
			this.wrapperHeight = this.wrapper.clientHeight;

			/* REPLACE START: refresh */

			this.scrollerWidth = this.scroller.offsetWidth;
			this.scrollerHeight = this.scroller.offsetHeight;

			this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

			/* REPLACE END: refresh */

			this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

			if (!this.hasHorizontalScroll) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}

			if (!this.hasVerticalScroll) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}

			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;

			this.wrapperOffset = utils.offset(this.wrapper);

			this._execEvent("refresh");

			this.resetPosition();

			// INSERT POINT: _refresh
		},

		on: function (type, fn) {
			if (!this._events[type]) {
				this._events[type] = [];
			}

			this._events[type].push(fn);
		},

		off: function (type, fn) {
			if (!this._events[type]) {
				return;
			}

			var index = this._events[type].indexOf(fn);

			if (index > -1) {
				this._events[type].splice(index, 1);
			}
		},

		_execEvent: function (type) {
			if (!this._events[type]) {
				return;
			}

			var i = 0,
				l = this._events[type].length;

			if (!l) {
				return;
			}

			for (; i < l; i++) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},

		scrollBy: function (x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;

			this.scrollTo(x, y, time, easing);
		},

		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;

			this.isInTransition = this.options.useTransition && time > 0;
			var transitionType = this.options.useTransition && easing.style;
			if (!time || transitionType) {
				if (transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
				}
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},

		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);

			if (!el) {
				return;
			}

			var pos = utils.offset(el);

			pos.left -= this.wrapperOffset.left;
			pos.top -= this.wrapperOffset.top;

			// if offsetX/Y are true we center the element to the screen
			if (offsetX === true) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
			}
			if (offsetY === true) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
			}

			pos.left -= offsetX || 0;
			pos.top -= offsetY || 0;

			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

			time = time === undefined || time === null || time === "auto" ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

			this.scrollTo(pos.left, pos.top, time, easing);
		},

		_transitionTime: function (time) {
			if (!this.options.useTransition) {
				return;
			}
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			if (!durationProp) {
				return;
			}

			this.scrollerStyle[durationProp] = time + "ms";

			if (!time && utils.isBadAndroid) {
				this.scrollerStyle[durationProp] = "0.0001ms";
				// remove 0.0001ms
				var self = this;
				rAF(function () {
					if (self.scrollerStyle[durationProp] === "0.0001ms") {
						self.scrollerStyle[durationProp] = "0s";
					}
				});
			}

			if (this.indicators) {
				for (var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTime(time);
				}
			}

			// INSERT POINT: _transitionTime
		},

		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

			if (this.indicators) {
				for (var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTimingFunction(easing);
				}
			}

			// INSERT POINT: _transitionTimingFunction
		},

		_translate: function (x, y) {
			if (this.options.useTransform) {
				/* REPLACE START: _translate */

				this.scrollerStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.translateZ;

				/* REPLACE END: _translate */
			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + "px";
				this.scrollerStyle.top = y + "px";
			}

			this.x = x;
			this.y = y;

			if (this.indicators) {
				for (var i = this.indicators.length; i--; ) {
					this.indicators[i].updatePosition();
				}
			}

			// INSERT POINT: _translate
		},

		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper : window;

			eventType(window, "orientationchange", this);
			eventType(window, "resize", this);

			if (this.options.click) {
				eventType(this.wrapper, "click", this, true);
			}

			if (!this.options.disableMouse) {
				eventType(this.wrapper, "mousedown", this);
				eventType(target, "mousemove", this);
				eventType(target, "mousecancel", this);
				eventType(target, "mouseup", this);
			}

			if (utils.hasPointer && !this.options.disablePointer) {
				eventType(this.wrapper, utils.prefixPointerEvent("pointerdown"), this);
				eventType(target, utils.prefixPointerEvent("pointermove"), this);
				eventType(target, utils.prefixPointerEvent("pointercancel"), this);
				eventType(target, utils.prefixPointerEvent("pointerup"), this);
			}

			if (utils.hasTouch && !this.options.disableTouch) {
				eventType(this.wrapper, "touchstart", this);
				eventType(target, "touchmove", this);
				eventType(target, "touchcancel", this);
				eventType(target, "touchend", this);
			}

			eventType(this.scroller, "transitionend", this);
			eventType(this.scroller, "webkitTransitionEnd", this);
			eventType(this.scroller, "oTransitionEnd", this);
			eventType(this.scroller, "MSTransitionEnd", this);
		},

		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
				x,
				y;

			if (this.options.useTransform) {
				matrix = matrix[utils.style.transform].split(")")[0].split(", ");
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, "");
				y = +matrix.top.replace(/[^-\d.]/g, "");
			}

			return { x: x, y: y };
		},
		_initIndicators: function () {
			var interactive = this.options.interactiveScrollbars,
				customStyle = typeof this.options.scrollbars != "string",
				indicators = [],
				indicator;

			var that = this;

			this.indicators = [];

			if (this.options.scrollbars) {
				// Vertical scrollbar
				if (this.options.scrollY) {
					indicator = {
						el: createDefaultScrollbar("v", interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: false,
					};

					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}

				// Horizontal scrollbar
				if (this.options.scrollX) {
					indicator = {
						el: createDefaultScrollbar("h", interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: false,
					};

					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}
			}

			if (this.options.indicators) {
				// TODO: check concat compatibility
				indicators = indicators.concat(this.options.indicators);
			}

			for (var i = indicators.length; i--; ) {
				this.indicators.push(new Indicator(this, indicators[i]));
			}

			// TODO: check if we can use array.map (wide compatibility and performance issues)
			function _indicatorsMap(fn) {
				if (that.indicators) {
					for (var i = that.indicators.length; i--; ) {
						fn.call(that.indicators[i]);
					}
				}
			}

			if (this.options.fadeScrollbars) {
				this.on("scrollEnd", function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});

				this.on("scrollCancel", function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});

				this.on("scrollStart", function () {
					_indicatorsMap(function () {
						this.fade(1);
					});
				});

				this.on("beforeScrollStart", function () {
					_indicatorsMap(function () {
						this.fade(1, true);
					});
				});
			}

			this.on("refresh", function () {
				_indicatorsMap(function () {
					this.refresh();
				});
			});

			this.on("destroy", function () {
				_indicatorsMap(function () {
					this.destroy();
				});

				delete this.indicators;
			});
		},

		_initWheel: function () {
			utils.addEvent(this.wrapper, "wheel", this);
			utils.addEvent(this.wrapper, "mousewheel", this);
			utils.addEvent(this.wrapper, "DOMMouseScroll", this);

			this.on("destroy", function () {
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = null;
				utils.removeEvent(this.wrapper, "wheel", this);
				utils.removeEvent(this.wrapper, "mousewheel", this);
				utils.removeEvent(this.wrapper, "DOMMouseScroll", this);
			});
		},

		_wheel: function (e) {
			if (!this.enabled) {
				return;
			}

			var wheelDeltaX,
				wheelDeltaY,
				newX,
				newY,
				that = this;

			if (this.wheelTimeout === undefined) {
				that._execEvent("scrollStart");
			}

			// Execute the scrollEnd event after 400ms the wheel stopped scrolling
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function () {
				if (!that.options.snap) {
					that._execEvent("scrollEnd");
				}
				that.wheelTimeout = undefined;
			}, 400);

			if ("deltaX" in e) {
				if (e.deltaMode === 1) {
					wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
					wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
				} else {
					wheelDeltaX = -e.deltaX;
					wheelDeltaY = -e.deltaY;
				}
			} else if ("wheelDeltaX" in e) {
				wheelDeltaX = (e.wheelDeltaX / 120) * this.options.mouseWheelSpeed;
				wheelDeltaY = (e.wheelDeltaY / 120) * this.options.mouseWheelSpeed;
			} else if ("wheelDelta" in e) {
				wheelDeltaX = wheelDeltaY = (e.wheelDelta / 120) * this.options.mouseWheelSpeed;
			} else if ("detail" in e) {
				wheelDeltaX = wheelDeltaY = (-e.detail / 3) * this.options.mouseWheelSpeed;
			} else {
				return;
			}

			wheelDeltaX *= this.options.invertWheelDirection;
			wheelDeltaY *= this.options.invertWheelDirection;

			if (!this.hasVerticalScroll) {
				wheelDeltaX = wheelDeltaY;
				wheelDeltaY = 0;
			}

			if (this.options.snap) {
				newX = this.currentPage.pageX;
				newY = this.currentPage.pageY;

				if (wheelDeltaX > 0) {
					newX--;
				} else if (wheelDeltaX < 0) {
					newX++;
				}

				if (wheelDeltaY > 0) {
					newY--;
				} else if (wheelDeltaY < 0) {
					newY++;
				}

				this.goToPage(newX, newY);

				return;
			}

			newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
			newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

			this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
			this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

			if (newX > 0) {
				newX = 0;
			} else if (newX < this.maxScrollX) {
				newX = this.maxScrollX;
			}

			if (newY > 0) {
				newY = 0;
			} else if (newY < this.maxScrollY) {
				newY = this.maxScrollY;
			}

			this.scrollTo(newX, newY, 0);

			// INSERT POINT: _wheel
		},

		_initSnap: function () {
			this.currentPage = {};

			if (typeof this.options.snap == "string") {
				this.options.snap = this.scroller.querySelectorAll(this.options.snap);
			}

			this.on("refresh", function () {
				var i = 0,
					l,
					m = 0,
					n,
					cx,
					cy,
					x = 0,
					y,
					stepX = this.options.snapStepX || this.wrapperWidth,
					stepY = this.options.snapStepY || this.wrapperHeight,
					el;

				this.pages = [];

				if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
					return;
				}

				if (this.options.snap === true) {
					cx = Math.round(stepX / 2);
					cy = Math.round(stepY / 2);

					while (x > -this.scrollerWidth) {
						this.pages[i] = [];
						l = 0;
						y = 0;

						while (y > -this.scrollerHeight) {
							this.pages[i][l] = {
								x: Math.max(x, this.maxScrollX),
								y: Math.max(y, this.maxScrollY),
								width: stepX,
								height: stepY,
								cx: x - cx,
								cy: y - cy,
							};

							y -= stepY;
							l++;
						}

						x -= stepX;
						i++;
					}
				} else {
					el = this.options.snap;
					l = el.length;
					n = -1;

					for (; i < l; i++) {
						if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
							m = 0;
							n++;
						}

						if (!this.pages[m]) {
							this.pages[m] = [];
						}

						x = Math.max(-el[i].offsetLeft, this.maxScrollX);
						y = Math.max(-el[i].offsetTop, this.maxScrollY);
						cx = x - Math.round(el[i].offsetWidth / 2);
						cy = y - Math.round(el[i].offsetHeight / 2);

						this.pages[m][n] = {
							x: x,
							y: y,
							width: el[i].offsetWidth,
							height: el[i].offsetHeight,
							cx: cx,
							cy: cy,
						};

						if (x > this.maxScrollX) {
							m++;
						}
					}
				}

				this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

				// Update snap threshold if needed
				if (this.options.snapThreshold % 1 === 0) {
					this.snapThresholdX = this.options.snapThreshold;
					this.snapThresholdY = this.options.snapThreshold;
				} else {
					this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
					this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
				}
			});

			this.on("flick", function () {
				var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);

				this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
			});
		},

		_nearestSnap: function (x, y) {
			if (!this.pages.length) {
				return { x: 0, y: 0, pageX: 0, pageY: 0 };
			}

			var i = 0,
				l = this.pages.length,
				m = 0;

			// Check if we exceeded the snap threshold
			if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
				return this.currentPage;
			}

			if (x > 0) {
				x = 0;
			} else if (x < this.maxScrollX) {
				x = this.maxScrollX;
			}

			if (y > 0) {
				y = 0;
			} else if (y < this.maxScrollY) {
				y = this.maxScrollY;
			}

			for (; i < l; i++) {
				if (x >= this.pages[i][0].cx) {
					x = this.pages[i][0].x;
					break;
				}
			}

			l = this.pages[i].length;

			for (; m < l; m++) {
				if (y >= this.pages[0][m].cy) {
					y = this.pages[0][m].y;
					break;
				}
			}

			if (i == this.currentPage.pageX) {
				i += this.directionX;

				if (i < 0) {
					i = 0;
				} else if (i >= this.pages.length) {
					i = this.pages.length - 1;
				}

				x = this.pages[i][0].x;
			}

			if (m == this.currentPage.pageY) {
				m += this.directionY;

				if (m < 0) {
					m = 0;
				} else if (m >= this.pages[0].length) {
					m = this.pages[0].length - 1;
				}

				y = this.pages[0][m].y;
			}

			return {
				x: x,
				y: y,
				pageX: i,
				pageY: m,
			};
		},

		goToPage: function (x, y, time, easing) {
			easing = easing || this.options.bounceEasing;

			if (x >= this.pages.length) {
				x = this.pages.length - 1;
			} else if (x < 0) {
				x = 0;
			}

			if (y >= this.pages[x].length) {
				y = this.pages[x].length - 1;
			} else if (y < 0) {
				y = 0;
			}

			var posX = this.pages[x][y].x,
				posY = this.pages[x][y].y;

			time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

			this.currentPage = {
				x: posX,
				y: posY,
				pageX: x,
				pageY: y,
			};

			this.scrollTo(posX, posY, time, easing);
		},

		next: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;

			x++;

			if (x >= this.pages.length && this.hasVerticalScroll) {
				x = 0;
				y++;
			}

			this.goToPage(x, y, time, easing);
		},

		prev: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;

			x--;

			if (x < 0 && this.hasVerticalScroll) {
				x = 0;
				y--;
			}

			this.goToPage(x, y, time, easing);
		},

		_initKeys: function (e) {
			// default key bindings
			var keys = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40,
			};
			var i;

			// if you give me characters I give you keycode
			if (typeof this.options.keyBindings == "object") {
				for (i in this.options.keyBindings) {
					if (typeof this.options.keyBindings[i] == "string") {
						this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
					}
				}
			} else {
				this.options.keyBindings = {};
			}

			for (i in keys) {
				this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
			}

			utils.addEvent(window, "keydown", this);

			this.on("destroy", function () {
				utils.removeEvent(window, "keydown", this);
			});
		},

		_key: function (e) {
			if (!this.enabled) {
				return;
			}

			var snap = this.options.snap, // we are using this alot, better to cache it
				newX = snap ? this.currentPage.pageX : this.x,
				newY = snap ? this.currentPage.pageY : this.y,
				now = utils.getTime(),
				prevTime = this.keyTime || 0,
				acceleration = 0.25,
				pos;

			if (this.options.useTransition && this.isInTransition) {
				pos = this.getComputedPosition();

				this._translate(Math.round(pos.x), Math.round(pos.y));
				this.isInTransition = false;
			}

			this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

			switch (e.keyCode) {
				case this.options.keyBindings.pageUp:
					if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
						newX += snap ? 1 : this.wrapperWidth;
					} else {
						newY += snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.pageDown:
					if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
						newX -= snap ? 1 : this.wrapperWidth;
					} else {
						newY -= snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.end:
					newX = snap ? this.pages.length - 1 : this.maxScrollX;
					newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					newX = 0;
					newY = 0;
					break;
				case this.options.keyBindings.left:
					newX += snap ? -1 : (5 + this.keyAcceleration) >> 0;
					break;
				case this.options.keyBindings.up:
					newY += snap ? 1 : (5 + this.keyAcceleration) >> 0;
					break;
				case this.options.keyBindings.right:
					newX -= snap ? -1 : (5 + this.keyAcceleration) >> 0;
					break;
				case this.options.keyBindings.down:
					newY -= snap ? 1 : (5 + this.keyAcceleration) >> 0;
					break;
				default:
					return;
			}

			if (snap) {
				this.goToPage(newX, newY);
				return;
			}

			if (newX > 0) {
				newX = 0;
				this.keyAcceleration = 0;
			} else if (newX < this.maxScrollX) {
				newX = this.maxScrollX;
				this.keyAcceleration = 0;
			}

			if (newY > 0) {
				newY = 0;
				this.keyAcceleration = 0;
			} else if (newY < this.maxScrollY) {
				newY = this.maxScrollY;
				this.keyAcceleration = 0;
			}

			this.scrollTo(newX, newY, 0);

			this.keyTime = now;
		},

		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;

			function step() {
				var now = utils.getTime(),
					newX,
					newY,
					easing;

				if (now >= destTime) {
					that.isAnimating = false;
					that._translate(destX, destY);

					if (!that.resetPosition(that.options.bounceTime)) {
						that._execEvent("scrollEnd");
					}

					return;
				}

				now = (now - startTime) / duration;
				easing = easingFn(now);
				newX = (destX - startX) * easing + startX;
				newY = (destY - startY) * easing + startY;
				that._translate(newX, newY);

				if (that.isAnimating) {
					rAF(step);
				}
			}

			this.isAnimating = true;
			step();
		},
		handleEvent: function (e) {
			switch (e.type) {
				case "touchstart":
				case "pointerdown":
				case "MSPointerDown":
				case "mousedown":
					this._start(e);
					break;
				case "touchmove":
				case "pointermove":
				case "MSPointerMove":
				case "mousemove":
					this._move(e);
					break;
				case "touchend":
				case "pointerup":
				case "MSPointerUp":
				case "mouseup":
				case "touchcancel":
				case "pointercancel":
				case "MSPointerCancel":
				case "mousecancel":
					this._end(e);
					break;
				case "orientationchange":
				case "resize":
					this._resize();
					break;
				case "transitionend":
				case "webkitTransitionEnd":
				case "oTransitionEnd":
				case "MSTransitionEnd":
					this._transitionEnd(e);
					break;
				case "wheel":
				case "DOMMouseScroll":
				case "mousewheel":
					this._wheel(e);
					break;
				case "keydown":
					this._key(e);
					break;
				case "click":
					if (this.enabled && !e._constructed) {
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
		},
	};
	function createDefaultScrollbar(direction, interactive, type) {
		var scrollbar = document.createElement("div"),
			indicator = document.createElement("div");

		if (type === true) {
			scrollbar.style.cssText = "position:absolute;z-index:9999";
			indicator.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0);border:1px solid rgba(255,255,255,0);border-radius:3px";
		}

		indicator.className = "iScrollIndicator";

		if (direction == "h") {
			if (type === true) {
				scrollbar.style.cssText += ";height:7px;left:2px;right:2px;bottom:0";
				indicator.style.height = "100%";
			}
			scrollbar.className = "iScrollHorizontalScrollbar";
		} else {
			if (type === true) {
				scrollbar.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px";
				indicator.style.width = "100%";
			}
			scrollbar.className = "iScrollVerticalScrollbar";
		}

		scrollbar.style.cssText += ";overflow:hidden";

		if (!interactive) {
			scrollbar.style.pointerEvents = "none";
		}

		scrollbar.appendChild(indicator);

		return scrollbar;
	}

	function Indicator(scroller, options) {
		this.wrapper = typeof options.el == "string" ? document.querySelector(options.el) : options.el;
		this.wrapperStyle = this.wrapper.style;
		this.indicator = this.wrapper.children[0];
		this.indicatorStyle = this.indicator.style;
		this.scroller = scroller;

		this.options = {
			listenX: true,
			listenY: true,
			interactive: false,
			resize: true,
			defaultScrollbars: false,
			shrink: false,
			fade: false,
			speedRatioX: 0,
			speedRatioY: 0,
		};

		for (var i in options) {
			this.options[i] = options[i];
		}

		this.sizeRatioX = 1;
		this.sizeRatioY = 1;
		this.maxPosX = 0;
		this.maxPosY = 0;

		if (this.options.interactive) {
			if (!this.options.disableTouch) {
				utils.addEvent(this.indicator, "touchstart", this);
				utils.addEvent(window, "touchend", this);
			}
			if (!this.options.disablePointer) {
				utils.addEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this);
				utils.addEvent(window, utils.prefixPointerEvent("pointerup"), this);
			}
			if (!this.options.disableMouse) {
				utils.addEvent(this.indicator, "mousedown", this);
				utils.addEvent(window, "mouseup", this);
			}
		}

		if (this.options.fade) {
			this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
			var durationProp = utils.style.transitionDuration;
			if (!durationProp) {
				return;
			}
			this.wrapperStyle[durationProp] = utils.isBadAndroid ? "0.0001ms" : "0ms";
			// remove 0.0001ms
			var self = this;
			if (utils.isBadAndroid) {
				rAF(function () {
					if (self.wrapperStyle[durationProp] === "0.0001ms") {
						self.wrapperStyle[durationProp] = "0s";
					}
				});
			}
			this.wrapperStyle.opacity = "0";
		}
	}

	Indicator.prototype = {
		handleEvent: function (e) {
			switch (e.type) {
				case "touchstart":
				case "pointerdown":
				case "MSPointerDown":
				case "mousedown":
					this._start(e);
					break;
				case "touchmove":
				case "pointermove":
				case "MSPointerMove":
				case "mousemove":
					this._move(e);
					break;
				case "touchend":
				case "pointerup":
				case "MSPointerUp":
				case "mouseup":
				case "touchcancel":
				case "pointercancel":
				case "MSPointerCancel":
				case "mousecancel":
					this._end(e);
					break;
			}
		},

		destroy: function () {
			if (this.options.fadeScrollbars) {
				clearTimeout(this.fadeTimeout);
				this.fadeTimeout = null;
			}
			if (this.options.interactive) {
				utils.removeEvent(this.indicator, "touchstart", this);
				utils.removeEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this);
				utils.removeEvent(this.indicator, "mousedown", this);

				utils.removeEvent(window, "touchmove", this);
				utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this);
				utils.removeEvent(window, "mousemove", this);

				utils.removeEvent(window, "touchend", this);
				utils.removeEvent(window, utils.prefixPointerEvent("pointerup"), this);
				utils.removeEvent(window, "mouseup", this);
			}

			if (this.options.defaultScrollbars) {
				this.wrapper.parentNode.removeChild(this.wrapper);
			}
		},

		_start: function (e) {
			var point = e.touches ? e.touches[0] : e;

			e.preventDefault();
			e.stopPropagation();

			this.transitionTime();

			this.initiated = true;
			this.moved = false;
			this.lastPointX = point.pageX;
			this.lastPointY = point.pageY;

			this.startTime = utils.getTime();

			if (!this.options.disableTouch) {
				utils.addEvent(window, "touchmove", this);
			}
			if (!this.options.disablePointer) {
				utils.addEvent(window, utils.prefixPointerEvent("pointermove"), this);
			}
			if (!this.options.disableMouse) {
				utils.addEvent(window, "mousemove", this);
			}

			this.scroller._execEvent("beforeScrollStart");
		},

		_move: function (e) {
			var point = e.touches ? e.touches[0] : e,
				deltaX,
				deltaY,
				newX,
				newY,
				timestamp = utils.getTime();

			if (!this.moved) {
				this.scroller._execEvent("scrollStart");
			}

			this.moved = true;

			deltaX = point.pageX - this.lastPointX;
			this.lastPointX = point.pageX;

			deltaY = point.pageY - this.lastPointY;
			this.lastPointY = point.pageY;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			this._pos(newX, newY);

			// INSERT POINT: indicator._move

			e.preventDefault();
			e.stopPropagation();
		},

		_end: function (e) {
			if (!this.initiated) {
				return;
			}

			this.initiated = false;

			e.preventDefault();
			e.stopPropagation();

			utils.removeEvent(window, "touchmove", this);
			utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this);
			utils.removeEvent(window, "mousemove", this);

			if (this.scroller.options.snap) {
				var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

				var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

				if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
					this.scroller.directionX = 0;
					this.scroller.directionY = 0;
					this.scroller.currentPage = snap;
					this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
				}
			}

			if (this.moved) {
				this.scroller._execEvent("scrollEnd");
			}
		},

		transitionTime: function (time) {
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			if (!durationProp) {
				return;
			}

			this.indicatorStyle[durationProp] = time + "ms";

			if (!time && utils.isBadAndroid) {
				this.indicatorStyle[durationProp] = "0.0001ms";
				// remove 0.0001ms
				var self = this;
				rAF(function () {
					if (self.indicatorStyle[durationProp] === "0.0001ms") {
						self.indicatorStyle[durationProp] = "0s";
					}
				});
			}
		},

		transitionTimingFunction: function (easing) {
			this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
		},

		refresh: function () {
			this.transitionTime();

			if (this.options.listenX && !this.options.listenY) {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none";
			} else if (this.options.listenY && !this.options.listenX) {
				this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none";
			} else {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none";
			}

			if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
				utils.addClass(this.wrapper, "iScrollBothScrollbars");
				utils.removeClass(this.wrapper, "iScrollLoneScrollbar");

				if (this.options.defaultScrollbars && this.options.customStyle) {
					if (this.options.listenX) {
						this.wrapper.style.right = "8px";
					} else {
						this.wrapper.style.bottom = "8px";
					}
				}
			} else {
				utils.removeClass(this.wrapper, "iScrollBothScrollbars");
				utils.addClass(this.wrapper, "iScrollLoneScrollbar");

				if (this.options.defaultScrollbars && this.options.customStyle) {
					if (this.options.listenX) {
						this.wrapper.style.right = "2px";
					} else {
						this.wrapper.style.bottom = "2px";
					}
				}
			}

			var r = this.wrapper.offsetHeight; // force refresh

			if (this.options.listenX) {
				this.wrapperWidth = this.wrapper.clientWidth;
				if (this.options.resize) {
					this.indicatorWidth = Math.max(Math.round((this.wrapperWidth * this.wrapperWidth) / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
					this.indicatorStyle.width = this.indicatorWidth + "px";
				} else {
					this.indicatorWidth = this.indicator.clientWidth;
				}

				this.maxPosX = this.wrapperWidth - this.indicatorWidth;

				if (this.options.shrink == "clip") {
					this.minBoundaryX = -this.indicatorWidth + 8;
					this.maxBoundaryX = this.wrapperWidth - 8;
				} else {
					this.minBoundaryX = 0;
					this.maxBoundaryX = this.maxPosX;
				}

				this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX);
			}

			if (this.options.listenY) {
				this.wrapperHeight = this.wrapper.clientHeight;
				if (this.options.resize) {
					this.indicatorHeight = Math.max(Math.round((this.wrapperHeight * this.wrapperHeight) / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
					this.indicatorStyle.height = this.indicatorHeight + "px";
				} else {
					this.indicatorHeight = this.indicator.clientHeight;
				}

				this.maxPosY = this.wrapperHeight - this.indicatorHeight;

				if (this.options.shrink == "clip") {
					this.minBoundaryY = -this.indicatorHeight + 8;
					this.maxBoundaryY = this.wrapperHeight - 8;
				} else {
					this.minBoundaryY = 0;
					this.maxBoundaryY = this.maxPosY;
				}

				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY);
			}

			this.updatePosition();
		},

		updatePosition: function () {
			var x = (this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x)) || 0,
				y = (this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y)) || 0;

			if (!this.options.ignoreBoundaries) {
				if (x < this.minBoundaryX) {
					if (this.options.shrink == "scale") {
						this.width = Math.max(this.indicatorWidth + x, 8);
						this.indicatorStyle.width = this.width + "px";
					}
					x = this.minBoundaryX;
				} else if (x > this.maxBoundaryX) {
					if (this.options.shrink == "scale") {
						this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
						this.indicatorStyle.width = this.width + "px";
						x = this.maxPosX + this.indicatorWidth - this.width;
					} else {
						x = this.maxBoundaryX;
					}
				} else if (this.options.shrink == "scale" && this.width != this.indicatorWidth) {
					this.width = this.indicatorWidth;
					this.indicatorStyle.width = this.width + "px";
				}

				if (y < this.minBoundaryY) {
					if (this.options.shrink == "scale") {
						this.height = Math.max(this.indicatorHeight + y * 3, 8);
						this.indicatorStyle.height = this.height + "px";
					}
					y = this.minBoundaryY;
				} else if (y > this.maxBoundaryY) {
					if (this.options.shrink == "scale") {
						this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
						this.indicatorStyle.height = this.height + "px";
						y = this.maxPosY + this.indicatorHeight - this.height;
					} else {
						y = this.maxBoundaryY;
					}
				} else if (this.options.shrink == "scale" && this.height != this.indicatorHeight) {
					this.height = this.indicatorHeight;
					this.indicatorStyle.height = this.height + "px";
				}
			}

			this.x = x;
			this.y = y;

			if (this.scroller.options.useTransform) {
				this.indicatorStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.scroller.translateZ;
			} else {
				this.indicatorStyle.left = x + "px";
				this.indicatorStyle.top = y + "px";
			}
		},

		_pos: function (x, y) {
			if (x < 0) {
				x = 0;
			} else if (x > this.maxPosX) {
				x = this.maxPosX;
			}

			if (y < 0) {
				y = 0;
			} else if (y > this.maxPosY) {
				y = this.maxPosY;
			}

			x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
			y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

			this.scroller.scrollTo(x, y);
		},

		fade: function (val, hold) {
			if (hold && !this.visible) {
				return;
			}

			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;

			var time = val ? 250 : 500,
				delay = val ? 0 : 300;

			val = val ? "1" : "0";

			this.wrapperStyle[utils.style.transitionDuration] = time + "ms";

			this.fadeTimeout = setTimeout(
				function (val) {
					this.wrapperStyle.opacity = val;
					this.visible = +val;
				}.bind(this, val),
				delay
			);
		},
	};

	IScroll.utils = utils;

	if (typeof module != "undefined" && module.exports) {
		module.exports = IScroll;
	} else if (typeof define == "function" && define.amd) {
		define(function () {
			return IScroll;
		});
	} else {
		window.IScroll = IScroll;
	}
})(window, document, Math);

/*!
 * fullPage ScrollOverflow
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function (window, $) {
	var ACTIVE = "active";
	var ACTIVE_SEL = "." + ACTIVE;

	var SECTION = "fp-section";
	var SECTION_SEL = "." + SECTION;
	var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;

	var SLIDE = "fp-slide";
	var SLIDE_SEL = "." + SLIDE;
	var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
	var SLIDES_WRAPPER = "fp-slides";
	var SLIDES_WRAPPER_SEL = "." + SLIDES_WRAPPER;

	// scrolloverflow
	var SCROLLABLE = "fp-scrollable";
	var SCROLLABLE_SEL = "." + SCROLLABLE;

	if (typeof IScroll !== "undefined") {
		/*
		 * Turns iScroll `mousewheel` option off dynamically
		 * https://github.com/cubiq/iscroll/issues/1036
		 */
		IScroll.prototype.wheelOn = function () {
			this.wrapper.addEventListener("wheel", this);
			this.wrapper.addEventListener("mousewheel", this);
			this.wrapper.addEventListener("DOMMouseScroll", this);
		};

		/*
		 * Turns iScroll `mousewheel` option on dynamically
		 * https://github.com/cubiq/iscroll/issues/1036
		 */
		IScroll.prototype.wheelOff = function () {
			this.wrapper.removeEventListener("wheel", this);
			this.wrapper.removeEventListener("mousewheel", this);
			this.wrapper.removeEventListener("DOMMouseScroll", this);
		};
	}

	/**
	 * An object to handle overflow scrolling.
	 * This uses jquery.slimScroll to accomplish overflow scrolling.
	 * It is possible to pass in an alternate scrollOverflowHandler
	 * to the fullpage.js option that implements the same functions
	 * as this handler.
	 *
	 * @type {Object}
	 */
	window.iscrollHandler = {
		refreshId: null,
		iScrollInstances: [],

		// Enables or disables the mouse wheel for the active section or all slides in it
		toggleWheel: function (value) {
			var scrollable = $(SECTION_ACTIVE_SEL).find(SCROLLABLE_SEL);
			scrollable.each(function () {
				var iScrollInstance = $(this).data("iscrollInstance");
				if (typeof iScrollInstance !== "undefined" && iScrollInstance) {
					if (value) {
						iScrollInstance.wheelOn();
					} else {
						iScrollInstance.wheelOff();
					}
				}
			});
		},

		/**
		 * Turns off iScroll for the destination section.
		 * When scrolling very fast on some trackpads (and Apple laptops) the inertial scrolling would
		 * scroll the destination section/slide before the sections animations ends.
		 */
		onLeave: function () {
			iscrollHandler.toggleWheel(false);
		},

		// Turns off iScroll for the leaving section
		beforeLeave: function () {
			iscrollHandler.onLeave();
		},

		// Turns on iScroll on section load
		afterLoad: function () {
			iscrollHandler.toggleWheel(true);
		},

		/**
		 * Called when overflow scrolling is needed for a section.
		 *
		 * @param  {Object} element      jQuery object containing current section
		 * @param  {Number} scrollHeight Current window height in pixels
		 */
		create: function (element, scrollHeight, scrollOverflowOptions) {
			var scrollable = element.find(SCROLLABLE_SEL);

			scrollable.height(scrollHeight);
			scrollable.each(function () {
				var $this = $(this);
				var iScrollInstance = $this.data("iscrollInstance");
				if (iScrollInstance) {
					$.each(iscrollHandler.iScrollInstances, function () {
						$(this).destroy();
					});
				}

				iScrollInstance = new IScroll($this.get(0), scrollOverflowOptions);

				iScrollInstance.on("scrollEnd", function () {
					this["fp_isAtTop"] = this.y > -30;
					this["fp_isAtEnd"] = this.y - this.maxScrollY < 30;
				});

				iscrollHandler.iScrollInstances.push(iScrollInstance);

				//off by default until the section gets active
				iScrollInstance.wheelOff();

				$this.data("iscrollInstance", iScrollInstance);
			});
		},

		/**
		 * Return a boolean depending on whether the scrollable element is a
		 * the end or at the start of the scrolling depending on the given type.
		 *
		 * @param  {String}  type       Either 'top' or 'bottom'
		 * @param  {Object}  scrollable jQuery object for the scrollable element
		 * @return {Boolean}
		 */
		isScrolled: function (type, scrollable) {
			var scroller = scrollable.data("iscrollInstance");

			//no scroller?
			if (!scroller) {
				return true;
			}

			if (type === "top") {
				return scroller.y >= 0 && !scrollable.scrollTop();
			} else if (type === "bottom") {
				return 0 - scroller.y + scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
			}
		},

		/**
		 * Returns the scrollable element for the given section.
		 * If there are landscape slides, will only return a scrollable element
		 * if it is in the active slide.
		 *
		 * @param  {Object}  activeSection jQuery object containing current section
		 * @return {Boolean}
		 */
		scrollable: function (activeSection) {
			// if there are landscape slides, we check if the scrolling bar is in the current one or not
			if (activeSection.find(SLIDES_WRAPPER_SEL).length) {
				return activeSection.find(SLIDE_ACTIVE_SEL).find(SCROLLABLE_SEL);
			}
			return activeSection.find(SCROLLABLE_SEL);
		},

		/**
		 * Returns the scroll height of the wrapped content.
		 * If this is larger than the window height minus section padding,
		 * overflow scrolling is needed.
		 *
		 * @param  {Object} element jQuery object containing current section
		 * @return {Number}
		 */
		scrollHeight: function (element) {
			return element.find(SCROLLABLE_SEL).children().first().get(0).scrollHeight;
		},

		/**
		 * Called when overflow scrolling is no longer needed for a section.
		 *
		 * @param  {Object} element      jQuery object containing current section
		 */
		remove: function (element) {
			var scrollable = element.find(SCROLLABLE_SEL);
			if (scrollable.length) {
				var iScrollInstance = scrollable.data("iscrollInstance");
				if (iScrollInstance) {
					iScrollInstance.destroy();
				}

				scrollable.data("iscrollInstance", null);
			}
			element.find(SCROLLABLE_SEL).children().first().children().first().unwrap().unwrap();
		},

		/**
		 * Called when overflow scrolling has already been setup but the
		 * window height has potentially changed.
		 *
		 * @param  {Object} element      jQuery object containing current section
		 * @param  {Number} scrollHeight Current window height in pixels
		 */
		update: function (element, scrollHeight) {
			//using a timeout in order to execute the refresh function only once when `update` is called multiple times in a
			//short period of time.
			//it also comes on handy because iScroll requires the use of timeout when using `refresh`.
			clearTimeout(iscrollHandler.refreshId);
			iscrollHandler.refreshId = setTimeout(function () {
				$.each(iscrollHandler.iScrollInstances, function () {
					$(this).get(0).refresh();
				});
			}, 150);

			//updating the wrappers height
			element
				.find(SCROLLABLE_SEL)
				.css("height", scrollHeight + "px")
				.parent()
				.css("height", scrollHeight + "px");
		},

		/**
		 * Called to get any additional elements needed to wrap the section
		 * content in order to facilitate overflow scrolling.
		 *
		 * @return {String|Object} Can be a string containing HTML,
		 *                         a DOM element, or jQuery object.
		 */
		wrapContent: function () {
			return '<div class="' + SCROLLABLE + '"><div class="fp-scroller"></div></div>';
		},
	};
})(window, jQuery);

// scrolloverflow module
(function (window, document, $) {
	$.fn.fp_scrolloverflow = (function () {
		// keeping central set of classnames and selectors
		var SCROLLABLE = "fp-scrollable";
		var SCROLLABLE_SEL = "." + SCROLLABLE;

		var ACTIVE = "active";
		var ACTIVE_SEL = "." + ACTIVE;

		var SECTION = "fp-section";
		var SECTION_SEL = "." + SECTION;
		var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;

		var SLIDE = "fp-slide";
		var SLIDE_SEL = "." + SLIDE;
		var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;

		var SLIDES_WRAPPER = "fp-slides";
		var SLIDES_WRAPPER_SEL = "." + SLIDES_WRAPPER;

		var TABLE_CELL = "fp-tableCell";
		var TABLE_CELL_SEL = "." + TABLE_CELL;

		var RESPONSIVE = "fp-responsive";
		var AUTO_HEIGHT_RESPONSIVE = "fp-auto-height-responsive";

		/*
		 * Turns iScroll `mousewheel` option off dynamically
		 * https://github.com/cubiq/iscroll/issues/1036
		 */
		IScroll.prototype.wheelOn = function () {
			this.wrapper.addEventListener("wheel", this);
			this.wrapper.addEventListener("mousewheel", this);
			this.wrapper.addEventListener("DOMMouseScroll", this);
		};

		/*
		 * Turns iScroll `mousewheel` option on dynamically
		 * https://github.com/cubiq/iscroll/issues/1036
		 */
		IScroll.prototype.wheelOff = function () {
			this.wrapper.removeEventListener("wheel", this);
			this.wrapper.removeEventListener("mousewheel", this);
			this.wrapper.removeEventListener("DOMMouseScroll", this);
		};

		function scrollBarHandler() {
			var self = this;
			self.options = null;

			self.init = function (options, iscrollOptions) {
				self.options = options;
				self.iscrollOptions = iscrollOptions;

				if (document.readyState === "complete") {
					createScrollBarForAll();
					$.fn.fullpage.shared.afterRenderActions();
				}
				//after DOM and images are loaded
				$(window).on("load", function () {
					createScrollBarForAll();
					$.fn.fullpage.shared.afterRenderActions();
				});

				return self;
			};

			/**
			 * Creates the scrollbar for the sections and slides in the site
			 */
			function createScrollBarForAll() {
				if ($("body").hasClass(RESPONSIVE)) {
					removeResponsiveScrollOverflows();
				} else {
					forEachSectionAndSlide(createScrollBar);
				}
			}

			/**
			 * Checks if the element needs scrollbar and if the user wants to apply it.
			 * If so it creates it.
			 *
			 * @param {Object} element   jQuery object of the section or slide
			 */
			function createScrollBar(element) {
				//User doesn't want scrollbar here? Sayonara baby!
				if (element.hasClass("fp-noscroll")) return;

				//necessary to make `scrollHeight` work under Opera 12
				element.css("overflow", "hidden");

				var scrollOverflowHandler = self.options.scrollOverflowHandler;
				var wrap = scrollOverflowHandler.wrapContent();
				var section = element.closest(SECTION_SEL); //in case element is a slide
				var scrollable = scrollOverflowHandler.scrollable(element);
				var contentHeight;
				var paddings = parseInt(section.css("padding-bottom")) + parseInt(section.css("padding-top"));

				//if there was scroll, the contentHeight will be the one in the scrollable section
				if (scrollable.length) {
					contentHeight = scrollOverflowHandler.scrollHeight(element);
				} else {
					contentHeight = element.get(0).scrollHeight - paddings;
					if (self.options.verticalCentered) {
						contentHeight = element.find(TABLE_CELL_SEL).get(0).scrollHeight - paddings;
					}
				}

				var scrollHeight = self.options.considerHeader ? $(window).height() - paddings - parseInt($(self.options.header).height()) : $(window).height() - paddings;

				//needs scroll?
				if (contentHeight > scrollHeight) {
					//did we already have an scrollbar ? Updating it
					if (scrollable.length) {
						scrollOverflowHandler.update(element, scrollHeight);
					}
					//creating the scrolling
					else {
						if (self.options.verticalCentered) {
							element.find(TABLE_CELL_SEL).wrapInner(wrap);
						} else {
							element.wrapInner(wrap);
						}
						scrollOverflowHandler.create(element, scrollHeight, self.iscrollOptions);
					}
				}
				//removing the scrolling when it is not necessary anymore
				else {
					scrollOverflowHandler.remove(element);
				}

				//undo
				element.css("overflow", "");
			}

			/**
			 * Applies a callback function to each section in the site
			 * or the slides within them
			 */
			function forEachSectionAndSlide(callback) {
				$(SECTION_SEL).each(function () {
					var slides = $(this).find(SLIDE_SEL);

					if (slides.length) {
						slides.each(function () {
							callback($(this));
						});
					} else {
						callback($(this));
					}
				});
			}

			/**
			 * Removes scrollOverflow for sections using the class `fp-auto-height-responsive`
			 */
			function removeResponsiveScrollOverflows() {
				var scrollOverflowHandler = self.options.scrollOverflowHandler;
				forEachSectionAndSlide(function (element) {
					if (element.closest(SECTION_SEL).hasClass(AUTO_HEIGHT_RESPONSIVE)) {
						scrollOverflowHandler.remove(element);
					}
				});
			}

			//public functions
			self.createScrollBarForAll = createScrollBarForAll;
		}

		/**
		 * An object to handle overflow scrolling.
		 * This uses jquery.slimScroll to accomplish overflow scrolling.
		 * It is possible to pass in an alternate scrollOverflowHandler
		 * to the fullpage.js option that implements the same functions
		 * as this handler.
		 *
		 * @type {Object}
		 */
		var iscrollHandler = {
			refreshId: null,
			iScrollInstances: [],

			// Default options for iScroll.js used when using scrollOverflow
			iscrollOptions: {
				scrollbars: true,
				mouseWheel: true,
				hideScrollbars: false,
				fadeScrollbars: false,
				disableMouse: true,
				interactiveScrollbars: true,
			},

			init: function (options) {
				var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;

				//fixing bug in iScroll with links: https://github.com/cubiq/iscroll/issues/783
				iscrollHandler.iscrollOptions.click = isTouch; // see #2035

				//extending iScroll options with the user custom ones
				iscrollHandler.iscrollOptions = $.extend(iscrollHandler.iscrollOptions, options.scrollOverflowOptions);

				return new scrollBarHandler().init(options, iscrollHandler.iscrollOptions);
			},

			// Enables or disables the mouse wheel for the active section or all slides in it
			toggleWheel: function (value) {
				var scrollable = $(SECTION_ACTIVE_SEL).find(SCROLLABLE_SEL);
				scrollable.each(function () {
					var iScrollInstance = $(this).data("iscrollInstance");
					if (typeof iScrollInstance !== "undefined" && iScrollInstance) {
						if (value) {
							iScrollInstance.wheelOn();
						} else {
							iScrollInstance.scrollTo(0, 0);
							iScrollInstance.wheelOff();
						}
					}
				});
			},

			/**
			 * Turns off iScroll for the destination section.
			 * When scrolling very fast on some trackpads (and Apple laptops) the inertial scrolling would
			 * scroll the destination section/slide before the sections animations ends.
			 */
			onLeave: function () {
				iscrollHandler.toggleWheel(false);
			},

			// Turns off iScroll for the leaving section
			beforeLeave: function () {
				iscrollHandler.onLeave();
			},

			// Turns on iScroll on section load
			afterLoad: function () {
				iscrollHandler.toggleWheel(true);
			},

			/**
			 * Called when overflow scrolling is needed for a section.
			 *
			 * @param  {Object} element      jQuery object containing current section
			 * @param  {Number} scrollHeight Current window height in pixels
			 */
			create: function (element, scrollHeight, iscrollOptions) {
				var scrollable = element.find(SCROLLABLE_SEL);

				scrollable.height(scrollHeight);
				scrollable.each(function () {
					var $this = $(this);
					var iScrollInstance = $this.data("iscrollInstance");
					if (iScrollInstance) {
						$.each(iscrollHandler.iScrollInstances, function () {
							$(this).destroy();
						});
					}

					iScrollInstance = new IScroll($this.get(0), iscrollOptions);
					iscrollHandler.iScrollInstances.push(iScrollInstance);

					//off by default until the section gets active
					iScrollInstance.wheelOff();

					$this.data("iscrollInstance", iScrollInstance);
				});
			},

			/**
			 * Return a boolean depending on whether the scrollable element is a
			 * the end or at the start of the scrolling depending on the given type.
			 *
			 * @param  {String}  type       Either 'top' or 'bottom'
			 * @param  {Object}  scrollable jQuery object for the scrollable element
			 * @return {Boolean}
			 */
			isScrolled: function (type, scrollable) {
				var scroller = scrollable.data("iscrollInstance");

				//no scroller?
				if (!scroller) {
					return true;
				}

				if (type === "top") {
					return scroller.y >= 0 && !scrollable.scrollTop();
				} else if (type === "bottom") {
					return 0 - scroller.y + scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
				}
			},

			/**
			 * Returns the scrollable element for the given section.
			 * If there are landscape slides, will only return a scrollable element
			 * if it is in the active slide.
			 *
			 * @param  {Object}  activeSection jQuery object containing current section
			 * @return {Boolean}
			 */
			scrollable: function (activeSection) {
				// if there are landscape slides, we check if the scrolling bar is in the current one or not
				if (activeSection.find(SLIDES_WRAPPER_SEL).length) {
					return activeSection.find(SLIDE_ACTIVE_SEL).find(SCROLLABLE_SEL);
				}
				return activeSection.find(SCROLLABLE_SEL);
			},

			/**
			 * Returns the scroll height of the wrapped content.
			 * If this is larger than the window height minus section padding,
			 * overflow scrolling is needed.
			 *
			 * @param  {Object} element jQuery object containing current section
			 * @return {Number}
			 */
			scrollHeight: function (element) {
				return element.find(SCROLLABLE_SEL).children().first().get(0).scrollHeight;
			},

			/**
			 * Called when overflow scrolling is no longer needed for a section.
			 *
			 * @param  {Object} element      jQuery object containing current section
			 */
			remove: function (element) {
				var scrollable = element.find(SCROLLABLE_SEL);
				if (scrollable.length) {
					var iScrollInstance = scrollable.data("iscrollInstance");
					iScrollInstance.destroy();

					scrollable.data("iscrollInstance", null);
				}
				element.find(SCROLLABLE_SEL).children().first().children().first().unwrap().unwrap();
			},

			/**
			 * Called when overflow scrolling has already been setup but the
			 * window height has potentially changed.
			 *
			 * @param  {Object} element      jQuery object containing current section
			 * @param  {Number} scrollHeight Current window height in pixels
			 */
			update: function (element, scrollHeight) {
				//using a timeout in order to execute the refresh function only once when `update` is called multiple times in a
				//short period of time.
				//it also comes on handy because iScroll requires the use of timeout when using `refresh`.
				clearTimeout(iscrollHandler.refreshId);
				iscrollHandler.refreshId = setTimeout(function () {
					$.each(iscrollHandler.iScrollInstances, function () {
						$(this).get(0).refresh();
					});
				}, 150);

				//updating the wrappers height
				element
					.find(SCROLLABLE_SEL)
					.css("height", scrollHeight + "px")
					.parent()
					.css("height", scrollHeight + "px");
			},

			/**
			 * Called to get any additional elements needed to wrap the section
			 * content in order to facilitate overflow scrolling.
			 *
			 * @return {String|Object} Can be a string containing HTML,
			 *                         a DOM element, or jQuery object.
			 */
			wrapContent: function () {
				return '<div class="' + SCROLLABLE + '"><div class="fp-scroller"></div></div>';
			},
		};

		return {
			iscrollHandler: iscrollHandler,
		};
	})();
})(window, document, jQuery);
!(function (i) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? (module.exports = i(require("jquery"))) : i(jQuery);
})(function (i) {
	"use strict";
	var e = window.Slick || {};
	((e = (function () {
		var e = 0;
		return function (t, o) {
			var s,
				n = this;
			(n.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: i(t),
				appendDots: i(t),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
				nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (e, t) {
					return i('<button type="button" />').text(t + 1);
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: 0.35,
				fade: !1,
				focusOnSelect: !1,
				focusOnChange: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3,
			}),
				(n.initials = {
					animating: !1,
					dragging: !1,
					autoPlayTimer: null,
					currentDirection: 0,
					currentLeft: null,
					currentSlide: 0,
					direction: 1,
					$dots: null,
					listWidth: null,
					listHeight: null,
					loadIndex: 0,
					$nextArrow: null,
					$prevArrow: null,
					scrolling: !1,
					slideCount: null,
					slideWidth: null,
					$slideTrack: null,
					$slides: null,
					sliding: !1,
					slideOffset: 0,
					swipeLeft: null,
					swiping: !1,
					$list: null,
					touchObject: {},
					transformsEnabled: !1,
					unslicked: !1,
				}),
				i.extend(n, n.initials),
				(n.activeBreakpoint = null),
				(n.animType = null),
				(n.animProp = null),
				(n.breakpoints = []),
				(n.breakpointSettings = []),
				(n.cssTransitions = !1),
				(n.focussed = !1),
				(n.interrupted = !1),
				(n.hidden = "hidden"),
				(n.paused = !0),
				(n.positionProp = null),
				(n.respondTo = null),
				(n.rowCount = 1),
				(n.shouldClick = !0),
				(n.$slider = i(t)),
				(n.$slidesCache = null),
				(n.transformType = null),
				(n.transitionType = null),
				(n.visibilityChange = "visibilitychange"),
				(n.windowWidth = 0),
				(n.windowTimer = null),
				(s = i(t).data("slick") || {}),
				(n.options = i.extend({}, n.defaults, o, s)),
				(n.currentSlide = n.options.initialSlide),
				(n.originalSettings = n.options),
				void 0 !== document.mozHidden ? ((n.hidden = "mozHidden"), (n.visibilityChange = "mozvisibilitychange")) : void 0 !== document.webkitHidden && ((n.hidden = "webkitHidden"), (n.visibilityChange = "webkitvisibilitychange")),
				(n.autoPlay = i.proxy(n.autoPlay, n)),
				(n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
				(n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
				(n.changeSlide = i.proxy(n.changeSlide, n)),
				(n.clickHandler = i.proxy(n.clickHandler, n)),
				(n.selectHandler = i.proxy(n.selectHandler, n)),
				(n.setPosition = i.proxy(n.setPosition, n)),
				(n.swipeHandler = i.proxy(n.swipeHandler, n)),
				(n.dragHandler = i.proxy(n.dragHandler, n)),
				(n.keyHandler = i.proxy(n.keyHandler, n)),
				(n.instanceUid = e++),
				(n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
				n.registerBreakpoints(),
				n.init(!0);
		};
	})()).prototype.activateADA = function () {
		this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
	}),
		(e.prototype.addSlide = e.prototype.slickAdd =
			function (e, t, o) {
				var s = this;
				if ("boolean" == typeof t) (o = t), (t = null);
				else if (t < 0 || t >= s.slideCount) return !1;
				s.unload(),
					"number" == typeof t
						? 0 === t && 0 === s.$slides.length
							? i(e).appendTo(s.$slideTrack)
							: o
							? i(e).insertBefore(s.$slides.eq(t))
							: i(e).insertAfter(s.$slides.eq(t))
						: !0 === o
						? i(e).prependTo(s.$slideTrack)
						: i(e).appendTo(s.$slideTrack),
					(s.$slides = s.$slideTrack.children(this.options.slide)),
					s.$slideTrack.children(this.options.slide).detach(),
					s.$slideTrack.append(s.$slides),
					s.$slides.each(function (e, t) {
						i(t).attr("data-slick-index", e);
					}),
					(s.$slidesCache = s.$slides),
					s.reinit();
			}),
		(e.prototype.animateHeight = function () {
			var i = this;
			if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
				var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
				i.$list.animate({ height: e }, i.options.speed);
			}
		}),
		(e.prototype.animateSlide = function (e, t) {
			var o = {},
				s = this;
			s.animateHeight(),
				!0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
				!1 === s.transformsEnabled
					? !1 === s.options.vertical
						? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t)
						: s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t)
					: !1 === s.cssTransitions
					? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
					  i({ animStart: s.currentLeft }).animate(
							{ animStart: e },
							{
								duration: s.options.speed,
								easing: s.options.easing,
								step: function (i) {
									(i = Math.ceil(i)), !1 === s.options.vertical ? ((o[s.animType] = "translate(" + i + "px, 0px)"), s.$slideTrack.css(o)) : ((o[s.animType] = "translate(0px," + i + "px)"), s.$slideTrack.css(o));
								},
								complete: function () {
									t && t.call();
								},
							}
					  ))
					: (s.applyTransition(),
					  (e = Math.ceil(e)),
					  !1 === s.options.vertical ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)") : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
					  s.$slideTrack.css(o),
					  t &&
							setTimeout(function () {
								s.disableTransition(), t.call();
							}, s.options.speed));
		}),
		(e.prototype.getNavTarget = function () {
			var e = this,
				t = e.options.asNavFor;
			return t && null !== t && (t = i(t).not(e.$slider)), t;
		}),
		(e.prototype.asNavFor = function (e) {
			var t = this.getNavTarget();
			null !== t &&
				"object" == typeof t &&
				t.each(function () {
					var t = i(this).slick("getSlick");
					t.unslicked || t.slideHandler(e, !0);
				});
		}),
		(e.prototype.applyTransition = function (i) {
			var e = this,
				t = {};
			!1 === e.options.fade ? (t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
				!1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
		}),
		(e.prototype.autoPlay = function () {
			var i = this;
			i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
		}),
		(e.prototype.autoPlayClear = function () {
			var i = this;
			i.autoPlayTimer && clearInterval(i.autoPlayTimer);
		}),
		(e.prototype.autoPlayIterator = function () {
			var i = this,
				e = i.currentSlide + i.options.slidesToScroll;
			i.paused ||
				i.interrupted ||
				i.focussed ||
				(!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? (i.direction = 0) : 0 === i.direction && ((e = i.currentSlide - i.options.slidesToScroll), i.currentSlide - 1 == 0 && (i.direction = 1))),
				i.slideHandler(e));
		}),
		(e.prototype.buildArrows = function () {
			var e = this;
			!0 === e.options.arrows &&
				((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
				(e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
				e.slideCount > e.options.slidesToShow
					? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
					  e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
					  e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
					  e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
					  !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
					: e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
		}),
		(e.prototype.buildDots = function () {
			var e,
				t,
				o = this;
			if (!0 === o.options.dots) {
				for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
				(o.$dots = t.appendTo(o.options.appendDots)), o.$dots.find("li").first().addClass("slick-active");
			}
		}),
		(e.prototype.buildOut = function () {
			var e = this;
			(e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
				(e.slideCount = e.$slides.length),
				e.$slides.each(function (e, t) {
					i(t)
						.attr("data-slick-index", e)
						.data("originalStyling", i(t).attr("style") || "");
				}),
				e.$slider.addClass("slick-slider"),
				(e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
				(e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
				e.$slideTrack.css("opacity", 0),
				(!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
				i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
				e.setupInfinite(),
				e.buildArrows(),
				e.buildDots(),
				e.updateDots(),
				e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
				!0 === e.options.draggable && e.$list.addClass("draggable");
		}),
		(e.prototype.buildRows = function () {
			var i,
				e,
				t,
				o,
				s,
				n,
				r,
				l = this;
			if (((o = document.createDocumentFragment()), (n = l.$slider.children()), l.options.rows > 1)) {
				for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
					var d = document.createElement("div");
					for (e = 0; e < l.options.rows; e++) {
						var a = document.createElement("div");
						for (t = 0; t < l.options.slidesPerRow; t++) {
							var c = i * r + (e * l.options.slidesPerRow + t);
							n.get(c) && a.appendChild(n.get(c));
						}
						d.appendChild(a);
					}
					o.appendChild(d);
				}
				l.$slider.empty().append(o),
					l.$slider
						.children()
						.children()
						.children()
						.css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
			}
		}),
		(e.prototype.checkResponsive = function (e, t) {
			var o,
				s,
				n,
				r = this,
				l = !1,
				d = r.$slider.width(),
				a = window.innerWidth || i(window).width();
			if (("window" === r.respondTo ? (n = a) : "slider" === r.respondTo ? (n = d) : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive)) {
				s = null;
				for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
				null !== s
					? null !== r.activeBreakpoint
						? (s !== r.activeBreakpoint || t) &&
						  ((r.activeBreakpoint = s), "unslick" === r.breakpointSettings[s] ? r.unslick(s) : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), (l = s))
						: ((r.activeBreakpoint = s), "unslick" === r.breakpointSettings[s] ? r.unslick(s) : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), (l = s))
					: null !== r.activeBreakpoint && ((r.activeBreakpoint = null), (r.options = r.originalSettings), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), (l = s)),
					e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
			}
		}),
		(e.prototype.changeSlide = function (e, t) {
			var o,
				s,
				n,
				r = this,
				l = i(e.currentTarget);
			switch ((l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), (n = r.slideCount % r.options.slidesToScroll != 0), (o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll), e.data.message)) {
				case "previous":
					(s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
					break;
				case "next":
					(s = 0 === o ? r.options.slidesToScroll : o), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
					break;
				case "index":
					var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
					r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
					break;
				default:
					return;
			}
		}),
		(e.prototype.checkNavigable = function (i) {
			var e, t;
			if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])) i = e[e.length - 1];
			else
				for (var o in e) {
					if (i < e[o]) {
						i = t;
						break;
					}
					t = e[o];
				}
			return i;
		}),
		(e.prototype.cleanUpEvents = function () {
			var e = this;
			e.options.dots &&
				null !== e.$dots &&
				(i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
				e.$slider.off("focus.slick blur.slick"),
				!0 === e.options.arrows &&
					e.slideCount > e.options.slidesToShow &&
					(e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
					e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
					!0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
				e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
				e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
				e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
				e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
				e.$list.off("click.slick", e.clickHandler),
				i(document).off(e.visibilityChange, e.visibility),
				e.cleanUpSlideEvents(),
				!0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
				!0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
				i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
				i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
				i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
				i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
		}),
		(e.prototype.cleanUpSlideEvents = function () {
			var e = this;
			e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
		}),
		(e.prototype.cleanUpRows = function () {
			var i,
				e = this;
			e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
		}),
		(e.prototype.clickHandler = function (i) {
			!1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
		}),
		(e.prototype.destroy = function (e) {
			var t = this;
			t.autoPlayClear(),
				(t.touchObject = {}),
				t.cleanUpEvents(),
				i(".slick-cloned", t.$slider).detach(),
				t.$dots && t.$dots.remove(),
				t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
				t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
				t.$slides &&
					(t.$slides
						.removeClass("slick-slide slick-active slick-center slick-visible slick-current")
						.removeAttr("aria-hidden")
						.removeAttr("data-slick-index")
						.each(function () {
							i(this).attr("style", i(this).data("originalStyling"));
						}),
					t.$slideTrack.children(this.options.slide).detach(),
					t.$slideTrack.detach(),
					t.$list.detach(),
					t.$slider.append(t.$slides)),
				t.cleanUpRows(),
				t.$slider.removeClass("slick-slider"),
				t.$slider.removeClass("slick-initialized"),
				t.$slider.removeClass("slick-dotted"),
				(t.unslicked = !0),
				e || t.$slider.trigger("destroy", [t]);
		}),
		(e.prototype.disableTransition = function (i) {
			var e = this,
				t = {};
			(t[e.transitionType] = ""), !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
		}),
		(e.prototype.fadeSlide = function (i, e) {
			var t = this;
			!1 === t.cssTransitions
				? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
				: (t.applyTransition(i),
				  t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
				  e &&
						setTimeout(function () {
							t.disableTransition(i), e.call();
						}, t.options.speed));
		}),
		(e.prototype.fadeSlideOut = function (i) {
			var e = this;
			!1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
		}),
		(e.prototype.filterSlides = e.prototype.slickFilter =
			function (i) {
				var e = this;
				null !== i && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
			}),
		(e.prototype.focusHandler = function () {
			var e = this;
			e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
				t.stopImmediatePropagation();
				var o = i(this);
				setTimeout(function () {
					e.options.pauseOnFocus && ((e.focussed = o.is(":focus")), e.autoPlay());
				}, 0);
			});
		}),
		(e.prototype.getCurrent = e.prototype.slickCurrentSlide =
			function () {
				return this.currentSlide;
			}),
		(e.prototype.getDotCount = function () {
			var i = this,
				e = 0,
				t = 0,
				o = 0;
			if (!0 === i.options.infinite)
				if (i.slideCount <= i.options.slidesToShow) ++o;
				else for (; e < i.slideCount; ) ++o, (e = t + i.options.slidesToScroll), (t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
			else if (!0 === i.options.centerMode) o = i.slideCount;
			else if (i.options.asNavFor) for (; e < i.slideCount; ) ++o, (e = t + i.options.slidesToScroll), (t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
			else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
			return o - 1;
		}),
		(e.prototype.getLeft = function (i) {
			var e,
				t,
				o,
				s,
				n = this,
				r = 0;
			return (
				(n.slideOffset = 0),
				(t = n.$slides.first().outerHeight(!0)),
				!0 === n.options.infinite
					? (n.slideCount > n.options.slidesToShow &&
							((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
							(s = -1),
							!0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? (s = -1.5) : 1 === n.options.slidesToShow && (s = -2)),
							(r = t * n.options.slidesToShow * s)),
					  n.slideCount % n.options.slidesToScroll != 0 &&
							i + n.options.slidesToScroll > n.slideCount &&
							n.slideCount > n.options.slidesToShow &&
							(i > n.slideCount
								? ((n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1), (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
								: ((n.slideOffset = (n.slideCount % n.options.slidesToScroll) * n.slideWidth * -1), (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
					: i + n.options.slidesToShow > n.slideCount && ((n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth), (r = (i + n.options.slidesToShow - n.slideCount) * t)),
				n.slideCount <= n.options.slidesToShow && ((n.slideOffset = 0), (r = 0)),
				!0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
					? (n.slideOffset = (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 - (n.slideWidth * n.slideCount) / 2)
					: !0 === n.options.centerMode && !0 === n.options.infinite
					? (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth)
					: !0 === n.options.centerMode && ((n.slideOffset = 0), (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
				(e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r),
				!0 === n.options.variableWidth &&
					((o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow)),
					(e = !0 === n.options.rtl ? (o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0) : o[0] ? -1 * o[0].offsetLeft : 0),
					!0 === n.options.centerMode &&
						((o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1)),
						(e = !0 === n.options.rtl ? (o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0) : o[0] ? -1 * o[0].offsetLeft : 0),
						(e += (n.$list.width() - o.outerWidth()) / 2))),
				e
			);
		}),
		(e.prototype.getOption = e.prototype.slickGetOption =
			function (i) {
				return this.options[i];
			}),
		(e.prototype.getNavigableIndexes = function () {
			var i,
				e = this,
				t = 0,
				o = 0,
				s = [];
			for (!1 === e.options.infinite ? (i = e.slideCount) : ((t = -1 * e.options.slidesToScroll), (o = -1 * e.options.slidesToScroll), (i = 2 * e.slideCount)); t < i; )
				s.push(t), (t = o + e.options.slidesToScroll), (o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
			return s;
		}),
		(e.prototype.getSlick = function () {
			return this;
		}),
		(e.prototype.getSlideCount = function () {
			var e,
				t,
				o = this;
			return (
				(t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0),
				!0 === o.options.swipeToSlide
					? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
							if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return (e = n), !1;
					  }),
					  Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
					: o.options.slidesToScroll
			);
		}),
		(e.prototype.goTo = e.prototype.slickGoTo =
			function (i, e) {
				this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
			}),
		(e.prototype.init = function (e) {
			var t = this;
			i(t.$slider).hasClass("slick-initialized") ||
				(i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()),
				e && t.$slider.trigger("init", [t]),
				!0 === t.options.accessibility && t.initADA(),
				t.options.autoplay && ((t.paused = !1), t.autoPlay());
		}),
		(e.prototype.initADA = function () {
			var e = this,
				t = Math.ceil(e.slideCount / e.options.slidesToShow),
				o = e.getNavigableIndexes().filter(function (i) {
					return i >= 0 && i < e.slideCount;
				});
			e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
				null !== e.$dots &&
					(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
						var s = o.indexOf(t);
						i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s });
					}),
					e.$dots
						.attr("role", "tablist")
						.find("li")
						.each(function (s) {
							var n = o[s];
							i(this).attr({ role: "presentation" }),
								i(this)
									.find("button")
									.first()
									.attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" });
						})
						.eq(e.currentSlide)
						.find("button")
						.attr({ "aria-selected": "true", tabindex: "0" })
						.end());
			for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
			e.activateADA();
		}),
		(e.prototype.initArrowEvents = function () {
			var i = this;
			!0 === i.options.arrows &&
				i.slideCount > i.options.slidesToShow &&
				(i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide),
				i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide),
				!0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
		}),
		(e.prototype.initDotEvents = function () {
			var e = this;
			!0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
				!0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
		}),
		(e.prototype.initSlideEvents = function () {
			var e = this;
			e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
		}),
		(e.prototype.initializeEvents = function () {
			var e = this;
			e.initArrowEvents(),
				e.initDotEvents(),
				e.initSlideEvents(),
				e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
				e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
				e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
				e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
				e.$list.on("click.slick", e.clickHandler),
				i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
				!0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
				!0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
				i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
				i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
				i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
				i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
				i(e.setPosition);
		}),
		(e.prototype.initUI = function () {
			var i = this;
			!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
		}),
		(e.prototype.keyHandler = function (i) {
			var e = this;
			i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
				(37 === i.keyCode && !0 === e.options.accessibility
					? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } })
					: 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
		}),
		(e.prototype.lazyLoad = function () {
			function e(e) {
				i("img[data-lazy]", e).each(function () {
					var e = i(this),
						t = i(this).attr("data-lazy"),
						o = i(this).attr("data-srcset"),
						s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
						r = document.createElement("img");
					(r.onload = function () {
						e.animate({ opacity: 0 }, 100, function () {
							o && (e.attr("srcset", o), s && e.attr("sizes", s)),
								e.attr("src", t).animate({ opacity: 1 }, 200, function () {
									e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
								}),
								n.$slider.trigger("lazyLoaded", [n, e, t]);
						});
					}),
						(r.onerror = function () {
							e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
						}),
						(r.src = t);
				});
			}
			var t,
				o,
				s,
				n = this;
			if (
				(!0 === n.options.centerMode
					? !0 === n.options.infinite
						? (s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2)
						: ((o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1))), (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
					: ((o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide), (s = Math.ceil(o + n.options.slidesToShow)), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
				(t = n.$slider.find(".slick-slide").slice(o, s)),
				"anticipated" === n.options.lazyLoad)
			)
				for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), (t = (t = t.add(d.eq(r))).add(d.eq(l))), r--, l++;
			e(t),
				n.slideCount <= n.options.slidesToShow
					? e(n.$slider.find(".slick-slide"))
					: n.currentSlide >= n.slideCount - n.options.slidesToShow
					? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
					: 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
		}),
		(e.prototype.loadSlider = function () {
			var i = this;
			i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
		}),
		(e.prototype.next = e.prototype.slickNext =
			function () {
				this.changeSlide({ data: { message: "next" } });
			}),
		(e.prototype.orientationChange = function () {
			var i = this;
			i.checkResponsive(), i.setPosition();
		}),
		(e.prototype.pause = e.prototype.slickPause =
			function () {
				var i = this;
				i.autoPlayClear(), (i.paused = !0);
			}),
		(e.prototype.play = e.prototype.slickPlay =
			function () {
				var i = this;
				i.autoPlay(), (i.options.autoplay = !0), (i.paused = !1), (i.focussed = !1), (i.interrupted = !1);
			}),
		(e.prototype.postSlide = function (e) {
			var t = this;
			t.unslicked ||
				(t.$slider.trigger("afterChange", [t, e]),
				(t.animating = !1),
				t.slideCount > t.options.slidesToShow && t.setPosition(),
				(t.swipeLeft = null),
				t.options.autoplay && t.autoPlay(),
				!0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
		}),
		(e.prototype.prev = e.prototype.slickPrev =
			function () {
				this.changeSlide({ data: { message: "previous" } });
			}),
		(e.prototype.preventDefault = function (i) {
			i.preventDefault();
		}),
		(e.prototype.progressiveLazyLoad = function (e) {
			e = e || 1;
			var t,
				o,
				s,
				n,
				r,
				l = this,
				d = i("img[data-lazy]", l.$slider);
			d.length
				? ((t = d.first()),
				  (o = t.attr("data-lazy")),
				  (s = t.attr("data-srcset")),
				  (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
				  ((r = document.createElement("img")).onload = function () {
						s && (t.attr("srcset", s), n && t.attr("sizes", n)),
							t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
							!0 === l.options.adaptiveHeight && l.setPosition(),
							l.$slider.trigger("lazyLoaded", [l, t, o]),
							l.progressiveLazyLoad();
				  }),
				  (r.onerror = function () {
						e < 3
							? setTimeout(function () {
									l.progressiveLazyLoad(e + 1);
							  }, 500)
							: (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
				  }),
				  (r.src = o))
				: l.$slider.trigger("allImagesLoaded", [l]);
		}),
		(e.prototype.refresh = function (e) {
			var t,
				o,
				s = this;
			(o = s.slideCount - s.options.slidesToShow),
				!s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
				s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
				(t = s.currentSlide),
				s.destroy(!0),
				i.extend(s, s.initials, { currentSlide: t }),
				s.init(),
				e || s.changeSlide({ data: { message: "index", index: t } }, !1);
		}),
		(e.prototype.registerBreakpoints = function () {
			var e,
				t,
				o,
				s = this,
				n = s.options.responsive || null;
			if ("array" === i.type(n) && n.length) {
				s.respondTo = s.options.respondTo || "window";
				for (e in n)
					if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
						for (t = n[e].breakpoint; o >= 0; ) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
						s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
					}
				s.breakpoints.sort(function (i, e) {
					return s.options.mobileFirst ? i - e : e - i;
				});
			}
		}),
		(e.prototype.reinit = function () {
			var e = this;
			(e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
				(e.slideCount = e.$slides.length),
				e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
				e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
				e.registerBreakpoints(),
				e.setProps(),
				e.setupInfinite(),
				e.buildArrows(),
				e.updateArrows(),
				e.initArrowEvents(),
				e.buildDots(),
				e.updateDots(),
				e.initDotEvents(),
				e.cleanUpSlideEvents(),
				e.initSlideEvents(),
				e.checkResponsive(!1, !0),
				!0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
				e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
				e.setPosition(),
				e.focusHandler(),
				(e.paused = !e.options.autoplay),
				e.autoPlay(),
				e.$slider.trigger("reInit", [e]);
		}),
		(e.prototype.resize = function () {
			var e = this;
			i(window).width() !== e.windowWidth &&
				(clearTimeout(e.windowDelay),
				(e.windowDelay = window.setTimeout(function () {
					(e.windowWidth = i(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
				}, 50)));
		}),
		(e.prototype.removeSlide = e.prototype.slickRemove =
			function (i, e, t) {
				var o = this;
				if (((i = "boolean" == typeof i ? (!0 === (e = i) ? 0 : o.slideCount - 1) : !0 === e ? --i : i), o.slideCount < 1 || i < 0 || i > o.slideCount - 1)) return !1;
				o.unload(),
					!0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
					(o.$slides = o.$slideTrack.children(this.options.slide)),
					o.$slideTrack.children(this.options.slide).detach(),
					o.$slideTrack.append(o.$slides),
					(o.$slidesCache = o.$slides),
					o.reinit();
			}),
		(e.prototype.setCSS = function (i) {
			var e,
				t,
				o = this,
				s = {};
			!0 === o.options.rtl && (i = -i),
				(e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
				(t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
				(s[o.positionProp] = i),
				!1 === o.transformsEnabled
					? o.$slideTrack.css(s)
					: ((s = {}), !1 === o.cssTransitions ? ((s[o.animType] = "translate(" + e + ", " + t + ")"), o.$slideTrack.css(s)) : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), o.$slideTrack.css(s)));
		}),
		(e.prototype.setDimensions = function () {
			var i = this;
			!1 === i.options.vertical
				? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding })
				: (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })),
				(i.listWidth = i.$list.width()),
				(i.listHeight = i.$list.height()),
				!1 === i.options.vertical && !1 === i.options.variableWidth
					? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length)))
					: !0 === i.options.variableWidth
					? i.$slideTrack.width(5e3 * i.slideCount)
					: ((i.slideWidth = Math.ceil(i.listWidth)), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
			var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
			!1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
		}),
		(e.prototype.setFade = function () {
			var e,
				t = this;
			t.$slides.each(function (o, s) {
				(e = t.slideWidth * o * -1),
					!0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
			}),
				t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
		}),
		(e.prototype.setHeight = function () {
			var i = this;
			if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
				var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
				i.$list.css("height", e);
			}
		}),
		(e.prototype.setOption = e.prototype.slickSetOption =
			function () {
				var e,
					t,
					o,
					s,
					n,
					r = this,
					l = !1;
				if (
					("object" === i.type(arguments[0])
						? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
						: "string" === i.type(arguments[0]) && ((o = arguments[0]), (s = arguments[1]), (l = arguments[2]), "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? (n = "responsive") : void 0 !== arguments[1] && (n = "single")),
					"single" === n)
				)
					r.options[o] = s;
				else if ("multiple" === n)
					i.each(o, function (i, e) {
						r.options[i] = e;
					});
				else if ("responsive" === n)
					for (t in s)
						if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
						else {
							for (e = r.options.responsive.length - 1; e >= 0; ) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
							r.options.responsive.push(s[t]);
						}
				l && (r.unload(), r.reinit());
			}),
		(e.prototype.setPosition = function () {
			var i = this;
			i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
		}),
		(e.prototype.setProps = function () {
			var i = this,
				e = document.body.style;
			(i.positionProp = !0 === i.options.vertical ? "top" : "left"),
				"top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
				(void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) || (!0 === i.options.useCSS && (i.cssTransitions = !0)),
				i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : (i.options.zIndex = i.defaults.zIndex)),
				void 0 !== e.OTransform && ((i.animType = "OTransform"), (i.transformType = "-o-transform"), (i.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
				void 0 !== e.MozTransform && ((i.animType = "MozTransform"), (i.transformType = "-moz-transform"), (i.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
				void 0 !== e.webkitTransform && ((i.animType = "webkitTransform"), (i.transformType = "-webkit-transform"), (i.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
				void 0 !== e.msTransform && ((i.animType = "msTransform"), (i.transformType = "-ms-transform"), (i.transitionType = "msTransition"), void 0 === e.msTransform && (i.animType = !1)),
				void 0 !== e.transform && !1 !== i.animType && ((i.animType = "transform"), (i.transformType = "transform"), (i.transitionType = "transition")),
				(i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType);
		}),
		(e.prototype.setSlideClasses = function (i) {
			var e,
				t,
				o,
				s,
				n = this;
			if (((t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode)) {
				var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
				(e = Math.floor(n.options.slidesToShow / 2)),
					!0 === n.options.infinite &&
						(i >= e && i <= n.slideCount - 1 - e
							? n.$slides
									.slice(i - e + r, i + e + 1)
									.addClass("slick-active")
									.attr("aria-hidden", "false")
							: ((o = n.options.slidesToShow + i),
							  t
									.slice(o - e + 1 + r, o + e + 2)
									.addClass("slick-active")
									.attr("aria-hidden", "false")),
						0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
					n.$slides.eq(i).addClass("slick-center");
			} else
				i >= 0 && i <= n.slideCount - n.options.slidesToShow
					? n.$slides
							.slice(i, i + n.options.slidesToShow)
							.addClass("slick-active")
							.attr("aria-hidden", "false")
					: t.length <= n.options.slidesToShow
					? t.addClass("slick-active").attr("aria-hidden", "false")
					: ((s = n.slideCount % n.options.slidesToShow),
					  (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
					  n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow
							? t
									.slice(o - (n.options.slidesToShow - s), o + s)
									.addClass("slick-active")
									.attr("aria-hidden", "false")
							: t
									.slice(o, o + n.options.slidesToShow)
									.addClass("slick-active")
									.attr("aria-hidden", "false"));
			("ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad) || n.lazyLoad();
		}),
		(e.prototype.setupInfinite = function () {
			var e,
				t,
				o,
				s = this;
			if ((!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && ((t = null), s.slideCount > s.options.slidesToShow))) {
				for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1)
					(t = e - 1),
						i(s.$slides[t])
							.clone(!0)
							.attr("id", "")
							.attr("data-slick-index", t - s.slideCount)
							.prependTo(s.$slideTrack)
							.addClass("slick-cloned");
				for (e = 0; e < o + s.slideCount; e += 1)
					(t = e),
						i(s.$slides[t])
							.clone(!0)
							.attr("id", "")
							.attr("data-slick-index", t + s.slideCount)
							.appendTo(s.$slideTrack)
							.addClass("slick-cloned");
				s.$slideTrack
					.find(".slick-cloned")
					.find("[id]")
					.each(function () {
						i(this).attr("id", "");
					});
			}
		}),
		(e.prototype.interrupt = function (i) {
			var e = this;
			i || e.autoPlay(), (e.interrupted = i);
		}),
		(e.prototype.selectHandler = function (e) {
			var t = this,
				o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
				s = parseInt(o.attr("data-slick-index"));
			s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
		}),
		(e.prototype.slideHandler = function (i, e, t) {
			var o,
				s,
				n,
				r,
				l,
				d = null,
				a = this;
			if (((e = e || !1), !((!0 === a.animating && !0 === a.options.waitForAnimate) || (!0 === a.options.fade && a.currentSlide === i))))
				if (
					(!1 === e && a.asNavFor(i),
					(o = i),
					(d = a.getLeft(o)),
					(r = a.getLeft(a.currentSlide)),
					(a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
					!1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
				)
					!1 === a.options.fade &&
						((o = a.currentSlide),
						!0 !== t
							? a.animateSlide(r, function () {
									a.postSlide(o);
							  })
							: a.postSlide(o));
				else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
					!1 === a.options.fade &&
						((o = a.currentSlide),
						!0 !== t
							? a.animateSlide(r, function () {
									a.postSlide(o);
							  })
							: a.postSlide(o));
				else {
					if (
						(a.options.autoplay && clearInterval(a.autoPlayTimer),
						(s = o < 0 ? (a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - (a.slideCount % a.options.slidesToScroll) : a.slideCount + o) : o >= a.slideCount ? (a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount) : o),
						(a.animating = !0),
						a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
						(n = a.currentSlide),
						(a.currentSlide = s),
						a.setSlideClasses(a.currentSlide),
						a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
						a.updateDots(),
						a.updateArrows(),
						!0 === a.options.fade)
					)
						return (
							!0 !== t
								? (a.fadeSlideOut(n),
								  a.fadeSlide(s, function () {
										a.postSlide(s);
								  }))
								: a.postSlide(s),
							void a.animateHeight()
						);
					!0 !== t
						? a.animateSlide(d, function () {
								a.postSlide(s);
						  })
						: a.postSlide(s);
				}
		}),
		(e.prototype.startLoad = function () {
			var i = this;
			!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
		}),
		(e.prototype.swipeDirection = function () {
			var i,
				e,
				t,
				o,
				s = this;
			return (
				(i = s.touchObject.startX - s.touchObject.curX),
				(e = s.touchObject.startY - s.touchObject.curY),
				(t = Math.atan2(e, i)),
				(o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
				o <= 45 && o >= 0
					? !1 === s.options.rtl
						? "left"
						: "right"
					: o <= 360 && o >= 315
					? !1 === s.options.rtl
						? "left"
						: "right"
					: o >= 135 && o <= 225
					? !1 === s.options.rtl
						? "right"
						: "left"
					: !0 === s.options.verticalSwiping
					? o >= 35 && o <= 135
						? "down"
						: "up"
					: "vertical"
			);
		}),
		(e.prototype.swipeEnd = function (i) {
			var e,
				t,
				o = this;
			if (((o.dragging = !1), (o.swiping = !1), o.scrolling)) return (o.scrolling = !1), !1;
			if (((o.interrupted = !1), (o.shouldClick = !(o.touchObject.swipeLength > 10)), void 0 === o.touchObject.curX)) return !1;
			if ((!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe)) {
				switch ((t = o.swipeDirection())) {
					case "left":
					case "down":
						(e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount()), (o.currentDirection = 0);
						break;
					case "right":
					case "up":
						(e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount()), (o.currentDirection = 1);
				}
				"vertical" != t && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger("swipe", [o, t]));
			} else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), (o.touchObject = {}));
		}),
		(e.prototype.swipeHandler = function (i) {
			var e = this;
			if (!(!1 === e.options.swipe || ("ontouchend" in document && !1 === e.options.swipe) || (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))))
				switch (
					((e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1),
					(e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
					!0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
					i.data.action)
				) {
					case "start":
						e.swipeStart(i);
						break;
					case "move":
						e.swipeMove(i);
						break;
					case "end":
						e.swipeEnd(i);
				}
		}),
		(e.prototype.swipeMove = function (i) {
			var e,
				t,
				o,
				s,
				n,
				r,
				l = this;
			return (
				(n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
				!(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
					((e = l.getLeft(l.currentSlide)),
					(l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
					(l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
					(l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2)))),
					(r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2)))),
					!l.options.verticalSwiping && !l.swiping && r > 4
						? ((l.scrolling = !0), !1)
						: (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
						  (t = l.swipeDirection()),
						  void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && ((l.swiping = !0), i.preventDefault()),
						  (s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
						  !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
						  (o = l.touchObject.swipeLength),
						  (l.touchObject.edgeHit = !1),
						  !1 === l.options.infinite && ((0 === l.currentSlide && "right" === t) || (l.currentSlide >= l.getDotCount() && "left" === t)) && ((o = l.touchObject.swipeLength * l.options.edgeFriction), (l.touchObject.edgeHit = !0)),
						  !1 === l.options.vertical ? (l.swipeLeft = e + o * s) : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
						  !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
						  !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? ((l.swipeLeft = null), !1) : void l.setCSS(l.swipeLeft))))
			);
		}),
		(e.prototype.swipeStart = function (i) {
			var e,
				t = this;
			if (((t.interrupted = !0), 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)) return (t.touchObject = {}), !1;
			void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
				(t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX),
				(t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY),
				(t.dragging = !0);
		}),
		(e.prototype.unfilterSlides = e.prototype.slickUnfilter =
			function () {
				var i = this;
				null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
			}),
		(e.prototype.unload = function () {
			var e = this;
			i(".slick-cloned", e.$slider).remove(),
				e.$dots && e.$dots.remove(),
				e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
				e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
				e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
		}),
		(e.prototype.unslick = function (i) {
			var e = this;
			e.$slider.trigger("unslick", [e, i]), e.destroy();
		}),
		(e.prototype.updateArrows = function () {
			var i = this;
			Math.floor(i.options.slidesToShow / 2),
				!0 === i.options.arrows &&
					i.slideCount > i.options.slidesToShow &&
					!i.options.infinite &&
					(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
					i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
					0 === i.currentSlide
						? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
						: i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode
						? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
						: i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
		}),
		(e.prototype.updateDots = function () {
			var i = this;
			null !== i.$dots &&
				(i.$dots.find("li").removeClass("slick-active").end(),
				i.$dots
					.find("li")
					.eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
					.addClass("slick-active"));
		}),
		(e.prototype.visibility = function () {
			var i = this;
			i.options.autoplay && (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
		}),
		(i.fn.slick = function () {
			var i,
				t,
				o = this,
				s = arguments[0],
				n = Array.prototype.slice.call(arguments, 1),
				r = o.length;
			for (i = 0; i < r; i++) if (("object" == typeof s || void 0 === s ? (o[i].slick = new e(o[i], s)) : (t = o[i].slick[s].apply(o[i].slick, n)), void 0 !== t)) return t;
			return o;
		});
});
