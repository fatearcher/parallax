window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "http:\/\/difott.com\/case\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.6.13"
    }
};
! function (a, b, c) {
    function d(a) {
        var c,
            d,
            e,
            f,
            g,
            h = b.createElement("canvas"),
            i = h.getContext && h.getContext("2d"),
            j = String.fromCharCode;
        if (!i || !i.fillText)
            return !1;
        switch (i.textBaseline = "top", i.font = "600 32px Arial", a) {
            case "flag":
                return i.fillText(j(55356, 56806, 55356, 56826), 0, 0), !(h.toDataURL().length < 3e3) && (i.clearRect(0, 0, h.width, h.height), i.fillText(j(55356, 57331, 65039, 8205, 55356, 57096), 0, 0), c = h.toDataURL(), i.clearRect(0, 0, h.width, h.height), i.fillText(j(55356, 57331, 55356, 57096), 0, 0), d = h.toDataURL(), c !== d);
            case "diversity":
                return i.fillText(j(55356, 57221), 0, 0), e = i.getImageData(16, 16, 1, 1).data, f = e[0] + "," + e[1] + "," + e[2] + "," + e[3], i.fillText(j(55356, 57221, 55356, 57343), 0, 0), e = i.getImageData(16, 16, 1, 1).data, g = e[0] + "," + e[1] + "," + e[2] + "," + e[3], f !== g;
            case "simple":
                return i.fillText(j(55357, 56835), 0, 0), 0 !== i.getImageData(16, 16, 1, 1).data[0];
            case "unicode8":
                return i.fillText(j(55356, 57135), 0, 0), 0 !== i.getImageData(16, 16, 1, 1).data[0];
            case "unicode9":
                return i.fillText(j(55358, 56631), 0, 0), 0 !== i.getImageData(16, 16, 1, 1).data[0]
        }
        return !1
    }

    function e(a) {
        var c = b.createElement("script");
        c.src = a, c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
    }
    var f,
        g,
        h,
        i;
    for (i = Array("simple", "flag", "unicode8", "diversity", "unicode9"), c.supports = {
            everything: !0,
            everythingExceptFlag: !0
        }, h = 0; h < i.length; h++)
        c.supports[i[h]] = d(i[h]), c.supports.everything = c.supports.everything && c.supports[i[h]], "flag" !== i[h] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[i[h]]);
    c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function () {
        c.DOMReady = !0
    }, c.supports.everything || (g = function () {
        c.readyCallback()
    }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function () {
        "complete" === b.readyState && c.readyCallback()
    })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
}(window, document, window._wpemojiSettings);
! function (e, t, r) {
    function s(e, t) {
        return typeof e === t
    }

    function l() {
        var e,
            t,
            r,
            a,
            l,
            u,
            c;
        for (var f in i) {
            if (e = [], t = i[f], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                for (r = 0; r < t.options.aliases.length; r++)
                    e.push(t.options.aliases[r].toLowerCase());
            for (a = s(t.fn, "function") ? t.fn() : t.fn, l = 0; l < e.length; l++)
                u = e[l], c = u.split("."), 1 === c.length ? o[c[0]] = a : (!o[c[0]] || o[c[0]] instanceof Boolean || (o[c[0]] = new Boolean(o[c[0]])), o[c[0]][c[1]] = a), n.push((a ? "" : "no-") + c.join("-"))
        }
    }

    function c(e) {
        var t = u.className,
            r = o._config.classPrefix || "";
        if (o._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + r + "no-js(\\s|$)");
            t = t.replace(n, "$1" + r + "js$2")
        }
        o._config.enableClasses && (t += " " + r + e.join(" " + r), u.className = t)
    }

    function m(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function y(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, r) {
            return t + r.toUpperCase()
        }).replace(/^-/, "")
    }

    function w(e, t) {
        if ("object" == typeof e)
            for (var r in e)
                v(e, r) && w(r, e[r]);
        else {
            e = e.toLowerCase();
            var n = e.split("."),
                i = o[n[0]];
            if (2 == n.length && (i = i[n[1]]), "undefined" != typeof i)
                return o;
            t = "function" == typeof t ? t() : t, 1 == n.length ? o[n[0]] = t : (!o[n[0]] || o[n[0]] instanceof Boolean || (o[n[0]] = new Boolean(o[n[0]])), o[n[0]][n[1]] = t), c([(t && 0 != t ? "" : "no-") + n.join("-")]), o._trigger(e, t)
        }
        return o
    }

    function S(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function T(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function j(e, t, r) {
        var n;
        for (var i in e)
            if (e[i] in t)
                return r === !1 ? e[i] : (n = t[e[i]], s(n, "function") ? T(n, r || t) : n);
        return !1
    }

    function C() {
        var e = t.body;
        return e || (e = f("body"), e.fake = !0), e
    }

    function E(e, t, r, n) {
        var a,
            o,
            s,
            l,
            i = "modernizr",
            c = f("div"),
            p = C();
        if (parseInt(r, 10))
            for (; r--;)
                s = f("div"), s.id = n ? n[r] : i + (r + 1), c.appendChild(s);
        return a = ["&#173;", '<style id="s', i, '">', e, "</style>"].join(""), c.id = i, (p.fake ? p : c).innerHTML += a, p.appendChild(c), p.fake && (p.style.background = "", p.style.overflow = "hidden", l = u.style.overflow, u.style.overflow = "hidden", u.appendChild(p)), o = t(c, e), p.fake ? (p.parentNode.removeChild(p), u.style.overflow = l, u.offsetHeight) : c.parentNode.removeChild(c), !!o
    }

    function V(t, n) {
        var i = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; i--;)
                if (e.CSS.supports(S(t[i]), n))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var a = []; i--;)
                a.push("(" + S(t[i]) + ":" + n + ")");
            return a = a.join(" or "), E("@supports (" + a + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return r
    }

    function X(e, t, n, i) {
        function d() {
            o && (delete b.style, delete b.modElem)
        }
        if (i = s(i, "undefined") ? !1 : i, !s(n, "undefined")) {
            var a = V(e, n);
            if (!s(a, "undefined"))
                return a
        }
        var o,
            l,
            u,
            c,
            p;
        for (b.style || (o = !0, b.modElem = f("modernizr"), b.style = b.modElem.style), u = e.length, l = 0; u > l; l++)
            if (c = e[l], p = b.style[c], m(c, "-") && (c = y(c)), b.style[c] !== r) {
                if (i || s(n, "undefined"))
                    return d(), "pfx" == t ? c : !0;
                try {
                    b.style[c] = n
                } catch (h) {}
                if (b.style[c] != p)
                    return d(), "pfx" == t ? c : !0
            }
        return d(), !1
    }

    function Y(e, t, r, n, i) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            o = (e + " " + k.join(a + " ") + a).split(" ");
        return s(t, "string") || s(t, "undefined") ? X(o, t, n, i) : (o = (e + " " + O.join(a + " ") + a).split(" "), j(o, t, r))
    }

    function D(e, t, n) {
        return Y(e, r, r, t, n)
    }
    var n = [],
        i = [],
        a = {
            _version: "3.0.0-alpha.3",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var r = this;
                setTimeout(function () {
                    t(r[e])
                }, 0)
            },
            addTest: function (e, t, r) {
                i.push({
                    name: e,
                    fn: t,
                    options: r
                })
            },
            addAsyncTest: function (e) {
                i.push({
                    name: null,
                    fn: e
                })
            }
        },
        o = function () {};
    o.prototype = a, o = new o, o.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), o.addTest("svgfilters", function () {
        var t = !1;
        try {
            t = "SVGFEColorMatrixElement" in e && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
        } catch (r) {}
        return t
    });
    var u = t.documentElement,
        f = function () {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : t.createElement.apply(t, arguments)
        };
    o.addTest("inlinesvg", function () {
        var e = f("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == (e.firstChild && e.firstChild.namespaceURI)
    });
    var p = a._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    a._prefixes = p, o.addTest("csspositionsticky", function () {
        var e = "position:",
            t = "sticky",
            r = f("modernizr"),
            n = r.style;
        return n.cssText = e + p.join(t + ";" + e).slice(0, -e.length), -1 !== n.position.indexOf(t)
    });
    var d = "CSS" in e && "supports" in e.CSS,
        h = "supportsCSS" in e;
    o.addTest("supports", d || h);
    var g = {}.toString;
    o.addTest("svgclippaths", function () {
        return !!t.createElementNS && /SVGClipPath/.test(g.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    });
    var v;
    ! function () {
        var e = {}.hasOwnProperty;
        v = s(e, "undefined") || s(e.call, "undefined") ? function (e, t) {
            return t in e && s(e.constructor.prototype[t], "undefined")
        } : function (t, r) {
            return e.call(t, r)
        }
    }(), a._l = {}, a.on = function (e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), o.hasOwnProperty(e) && setTimeout(function () {
            o._trigger(e, o[e])
        }, 0)
    }, a._trigger = function (e, t) {
        if (this._l[e]) {
            var r = this._l[e];
            setTimeout(function () {
                var e,
                    n;
                for (e = 0; e < r.length; e++)
                    (n = r[e])(t)
            }, 0), delete this._l[e]
        }
    }, o._q.push(function () {
        a.addTest = w
    }), o.addTest("svgasimg", t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"));
    var x = {
        elem: f("modernizr")
    };
    o._q.push(function () {
        delete x.elem
    });
    var b = {
        style: x.elem.style
    };
    o._q.unshift(function () {
        delete b.style
    });
    var P = "Moz O ms Webkit",
        k = a._config.usePrefixes ? P.split(" ") : [];
    a._cssomPrefixes = k;
    var O = a._config.usePrefixes ? P.toLowerCase().split(" ") : [];
    a._domPrefixes = O; {
        var A = a.testStyles = E;
        a.testProp = function (e, t, n) {
            return X([e], r, t, n)
        }
    }
    a.testAllProps = Y, a.testAllProps = D, o.addTest("preserve3d", D("transformStyle", "preserve-3d")), o.addTest("csstransforms", function () {
        return -1 === navigator.userAgent.indexOf("Android 2.") && D("transform", "scale(1)", !0)
    }), o.addTest("csstransforms3d", function () {
        var e = !!D("perspective", "1px", !0),
            t = o._config.usePrefixes;
        if (e && (!t || "webkitPerspective" in u.style)) {
            var r;
            o.supports ? r = "@supports (perspective: 1px)" : (r = "@media (transform-3d)", t && (r += ",(-webkit-transform-3d)")), r += "{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}", A(r, function (t) {
                e = 9 === t.offsetLeft && 5 === t.offsetHeight
            })
        }
        return e
    }), o.addTest("csstransitions", D("transition", "all", !0)), o.addTest("mixblendmode", function () {
        return o.testProp("mixBlendMode")
    }), l(), c(n), delete a.addTest, delete a.addAsyncTest;
    for (var L = 0; L < o._q.length; L++)
        o._q[L]();
    e.Modernizr = o
}(window, document), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (e, t, r, n, i) {
            return jQuery.easing[jQuery.easing.def](e, t, r, n, i)
        },
        easeInQuad: function (e, t, r, n, i) {
            return n * (t /= i) * t + r
        },
        easeOutQuad: function (e, t, r, n, i) {
            return -n * (t /= i) * (t - 2) + r
        },
        easeInOutQuad: function (e, t, r, n, i) {
            return (t /= i / 2) < 1 ? n / 2 * t * t + r : -n / 2 * (--t * (t - 2) - 1) + r
        },
        easeInCubic: function (e, t, r, n, i) {
            return n * (t /= i) * t * t + r
        },
        easeOutCubic: function (e, t, r, n, i) {
            return n * ((t = t / i - 1) * t * t + 1) + r
        },
        easeInOutCubic: function (e, t, r, n, i) {
            return (t /= i / 2) < 1 ? n / 2 * t * t * t + r : n / 2 * ((t -= 2) * t * t + 2) + r
        },
        easeInQuart: function (e, t, r, n, i) {
            return n * (t /= i) * t * t * t + r
        },
        easeOutQuart: function (e, t, r, n, i) {
            return -n * ((t = t / i - 1) * t * t * t - 1) + r
        },
        easeInOutQuart: function (e, t, r, n, i) {
            return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + r : -n / 2 * ((t -= 2) * t * t * t - 2) + r
        },
        easeInQuint: function (e, t, r, n, i) {
            return n * (t /= i) * t * t * t * t + r
        },
        easeOutQuint: function (e, t, r, n, i) {
            return n * ((t = t / i - 1) * t * t * t * t + 1) + r
        },
        easeInOutQuint: function (e, t, r, n, i) {
            return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + r : n / 2 * ((t -= 2) * t * t * t * t + 2) + r
        },
        easeInSine: function (e, t, r, n, i) {
            return -n * Math.cos(t / i * (Math.PI / 2)) + n + r
        },
        easeOutSine: function (e, t, r, n, i) {
            return n * Math.sin(t / i * (Math.PI / 2)) + r
        },
        easeInOutSine: function (e, t, r, n, i) {
            return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + r
        },
        easeInExpo: function (e, t, r, n, i) {
            return 0 == t ? r : n * Math.pow(2, 10 * (t / i - 1)) + r
        },
        easeOutExpo: function (e, t, r, n, i) {
            return t == i ? r + n : n * (-Math.pow(2, -10 * t / i) + 1) + r
        },
        easeInOutExpo: function (e, t, r, n, i) {
            return 0 == t ? r : t == i ? r + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + r : n / 2 * (-Math.pow(2, -10 * --t) + 2) + r
        },
        easeInCirc: function (e, t, r, n, i) {
            return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + r
        },
        easeOutCirc: function (e, t, r, n, i) {
            return n * Math.sqrt(1 - (t = t / i - 1) * t) + r
        },
        easeInOutCirc: function (e, t, r, n, i) {
            return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + r : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + r
        },
        easeInElastic: function (e, t, r, n, i) {
            e = 1.70158;
            var a = 0,
                o = n;
            return 0 == t ? r : 1 == (t /= i) ? r + n : (a || (a = .3 * i), o < Math.abs(n) ? (o = n, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(n / o), -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * i - e) * Math.PI / a)) + r)
        },
        easeOutElastic: function (e, t, r, n, i) {
            e = 1.70158;
            var a = 0,
                o = n;
            return 0 == t ? r : 1 == (t /= i) ? r + n : (a || (a = .3 * i), o < Math.abs(n) ? (o = n, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(n / o), o * Math.pow(2, -10 * t) * Math.sin(2 * (t * i - e) * Math.PI / a) + n + r)
        },
        easeInOutElastic: function (e, t, r, n, i) {
            e = 1.70158;
            var a = 0,
                o = n;
            return 0 == t ? r : 2 == (t /= i / 2) ? r + n : (a || (a = .3 * i * 1.5), o < Math.abs(n) ? (o = n, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(n / o), 1 > t ? -.5 * o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * i - e) * Math.PI / a) + r : o * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * i - e) * Math.PI / a) * .5 + n + r)
        },
        easeInBack: function (e, t, r, n, i, a) {
            return void 0 == a && (a = 1.70158), n * (t /= i) * t * ((a + 1) * t - a) + r
        },
        easeOutBack: function (e, t, r, n, i, a) {
            return void 0 == a && (a = 1.70158), n * ((t = t / i - 1) * t * ((a + 1) * t + a) + 1) + r
        },
        easeInOutBack: function (e, t, r, n, i, a) {
            return void 0 == a && (a = 1.70158), (t /= i / 2) < 1 ? n / 2 * t * t * (((a *= 1.525) + 1) * t - a) + r : n / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + r
        },
        easeInBounce: function (e, t, r, n, i) {
            return n - jQuery.easing.easeOutBounce(e, i - t, 0, n, i) + r
        },
        easeOutBounce: function (e, t, r, n, i) {
            return (t /= i) < 1 / 2.75 ? 7.5625 * n * t * t + r : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + r : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + r : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + r
        },
        easeInOutBounce: function (e, t, r, n, i) {
            return i / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, i) + r : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, n, i) + .5 * n + r
        }
    }), jQuery.cookie = function (e, t, r) {
        if ("undefined" == typeof t) {
            var l = null;
            if (document.cookie && "" != document.cookie)
                for (var u = document.cookie.split(";"), c = 0; c < u.length; c++) {
                    var f = jQuery.trim(u[c]);
                    if (f.substring(0, e.length + 1) == e + "=") {
                        l = decodeURIComponent(f.substring(e.length + 1));
                        break
                    }
                }
            return l
        }
        r = r || {}, null === t && (t = "", r = $.extend({}, r), r.expires = -1);
        var n = "";
        if (r.expires && ("number" == typeof r.expires || r.expires.toUTCString)) {
            var i;
            "number" == typeof r.expires ? (i = new Date, i.setTime(i.getTime() + 24 * r.expires * 60 * 60 * 1e3)) : i = r.expires, n = "; expires=" + i.toUTCString()
        }
        var a = r.path ? "; path=" + r.path : "",
            o = r.domain ? "; domain=" + r.domain : "",
            s = r.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), n, a, o, s].join("")
    },
    function () {
        function e() {}

        function t(e, t) {
            for (var r = e.length; r--;)
                if (e[r].listener === t)
                    return r;
            return -1
        }

        function r(e) {
            return function () {
                return this[e].apply(this, arguments)
            }
        }
        var n = e.prototype,
            i = this,
            a = i.EventEmitter;
        n.getListeners = function (e) {
            var t,
                r,
                n = this._getEvents();
            if ("object" == typeof e) {
                t = {};
                for (r in n)
                    n.hasOwnProperty(r) && e.test(r) && (t[r] = n[r])
            } else
                t = n[e] || (n[e] = []);
            return t
        }, n.flattenListeners = function (e) {
            var t,
                r = [];
            for (t = 0; e.length > t; t += 1)
                r.push(e[t].listener);
            return r
        }, n.getListenersAsObject = function (e) {
            var t,
                r = this.getListeners(e);
            return r instanceof Array && (t = {}, t[e] = r), t || r
        }, n.addListener = function (e, r) {
            var n,
                i = this.getListenersAsObject(e),
                a = "object" == typeof r;
            for (n in i)
                i.hasOwnProperty(n) && -1 === t(i[n], r) && i[n].push(a ? r : {
                    listener: r,
                    once: !1
                });
            return this
        }, n.on = r("addListener"), n.addOnceListener = function (e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, n.once = r("addOnceListener"), n.defineEvent = function (e) {
            return this.getListeners(e), this
        }, n.defineEvents = function (e) {
            for (var t = 0; e.length > t; t += 1)
                this.defineEvent(e[t]);
            return this
        }, n.removeListener = function (e, r) {
            var n,
                i,
                a = this.getListenersAsObject(e);
            for (i in a)
                a.hasOwnProperty(i) && (n = t(a[i], r), -1 !== n && a[i].splice(n, 1));
            return this
        }, n.off = r("removeListener"), n.addListeners = function (e, t) {
            return this.manipulateListeners(!1, e, t)
        }, n.removeListeners = function (e, t) {
            return this.manipulateListeners(!0, e, t)
        }, n.manipulateListeners = function (e, t, r) {
            var n,
                i,
                a = e ? this.removeListener : this.addListener,
                o = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (n = r.length; n--;)
                    a.call(this, t, r[n]);
            else
                for (n in t)
                    t.hasOwnProperty(n) && (i = t[n]) && ("function" == typeof i ? a.call(this, n, i) : o.call(this, n, i));
            return this
        }, n.removeEvent = function (e) {
            var t,
                r = typeof e,
                n = this._getEvents();
            if ("string" === r)
                delete n[e];
            else if ("object" === r)
                for (t in n)
                    n.hasOwnProperty(t) && e.test(t) && delete n[t];
            else
                delete this._events;
            return this
        }, n.removeAllListeners = r("removeEvent"), n.emitEvent = function (e, t) {
            var r,
                n,
                i,
                a,
                o = this.getListenersAsObject(e);
            for (i in o)
                if (o.hasOwnProperty(i))
                    for (n = o[i].length; n--;)
                        r = o[i][n], r.once === !0 && this.removeListener(e, r.listener), a = r.listener.apply(this, t || []), a === this._getOnceReturnValue() && this.removeListener(e, r.listener);
            return this
        }, n.trigger = r("emitEvent"), n.emit = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, n.setOnceReturnValue = function (e) {
            return this._onceReturnValue = e, this
        }, n._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function () {
            return this._events || (this._events = {})
        }, e.noConflict = function () {
            return i.EventEmitter = a, e
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return e
        }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
    }.call(this),
    function (e) {
        function t(t) {
            var r = e.event;
            return r.target = r.target || r.srcElement || t, r
        }
        var r = document.documentElement,
            n = function () {};
        r.addEventListener ? n = function (e, t, r) {
            e.addEventListener(t, r, !1)
        } : r.attachEvent && (n = function (e, r, n) {
            e[r + n] = n.handleEvent ? function () {
                var r = t(e);
                n.handleEvent.call(n, r)
            } : function () {
                var r = t(e);
                n.call(e, r)
            }, e.attachEvent("on" + r, e[r + n])
        });
        var i = function () {};
        r.removeEventListener ? i = function (e, t, r) {
            e.removeEventListener(t, r, !1)
        } : r.detachEvent && (i = function (e, t, r) {
            e.detachEvent("on" + t, e[t + r]);
            try {
                delete e[t + r]
            } catch (n) {
                e[t + r] = void 0
            }
        });
        var a = {
            bind: n,
            unbind: i
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", a) : e.eventie = a
    }(this),
    function (e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (r, n) {
            return t(e, r, n)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function (e, t, r) {
        function n(e, t) {
            for (var r in t)
                e[r] = t[r];
            return e
        }

        function i(e) {
            return "[object Array]" === p.call(e)
        }

        function a(e) {
            var t = [];
            if (i(e))
                t = e;
            else if ("number" == typeof e.length)
                for (var r = 0, n = e.length; n > r; r++)
                    t.push(e[r]);
            else
                t.push(e);
            return t
        }

        function o(e, t, r) {
            if (!(this instanceof o))
                return new o(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = a(e), this.options = n({}, this.options), "function" == typeof t ? r = t : n(this.options, t), r && this.on("always", r), this.getImages(), u && (this.jqDeferred = new u.Deferred);
            var i = this;
            setTimeout(function () {
                i.check()
            })
        }

        function s(e) {
            this.img = e
        }

        function l(e) {
            this.src = e, d[e] = this
        }
        var u = e.jQuery,
            c = e.console,
            f = void 0 !== c,
            p = Object.prototype.toString;
        o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function () {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var r = this.elements[e];
                "IMG" === r.nodeName && this.addImage(r);
                var n = r.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var i = r.querySelectorAll("img"), a = 0, o = i.length; o > a; a++) {
                        var s = i[a];
                        this.addImage(s)
                    }
            }
        }, o.prototype.addImage = function (e) {
            var t = new s(e);
            this.images.push(t)
        }, o.prototype.check = function () {
            function e(e, i) {
                return t.options.debug && f && c.log("confirm", e, i), t.progress(e), r++, r === n && t.complete(), !0
            }
            var t = this,
                r = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n)
                return void this.complete();
            for (var i = 0; n > i; i++) {
                var a = this.images[i];
                a.on("confirm", e), a.check()
            }
        }, o.prototype.progress = function (e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function () {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, o.prototype.complete = function () {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function () {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var r = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[r](t)
                }
            })
        }, u && (u.fn.imagesLoaded = function (e, t) {
            var r = new o(this, e, t);
            return r.jqDeferred.promise(u(this))
        }), s.prototype = new t, s.prototype.check = function () {
            var e = d[this.img.src] || new l(this.img.src);
            if (e.isConfirmed)
                return void this.confirm(e.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth)
                return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var t = this;
            e.on("confirm", function (e, r) {
                return t.confirm(e.isLoaded, r), !0
            }), e.check()
        }, s.prototype.confirm = function (e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var d = {};
        return l.prototype = new t, l.prototype.check = function () {
            if (!this.isChecked) {
                var e = new Image;
                r.bind(e, "load", this), r.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, l.prototype.onload = function (e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, l.prototype.onerror = function (e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, l.prototype.confirm = function (e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, l.prototype.unbindProxyEvents = function (e) {
            r.unbind(e.target, "load", this), r.unbind(e.target, "error", this)
        }, o
    }),
    function (e, t) {
        function l(t, r) {
            r = e(r), r.prevObject = t;
            var n = t.length;
            if (n !== r.length)
                return r;
            for (; n--;)
                if (t[n] !== r[n])
                    return r;
            return t
        }

        function u(e) {
            for (var t = [], r = e.length; r--;)
                t[r] = e[r].g;
            return t
        }

        function c(t, r, n, i) {
            function h(e, t) {
                function r() {
                    e.k = l(e.f, e.k), e.e = !0, g()
                }
                return e.e = !1, "function" == typeof t.promise ? t.promise().then(r) : t.then(r, !0)
            }

            function g(t) {
                for (; !o;)
                    try {
                        if (o = !o, "function" == typeof i && i(e.makeArray(a.k || a.f)), 0 == a.e)
                            break;
                        if (!a.i.j) {
                            if (!d || n.length && !n[0].b || (a.f && "function" == typeof a.f.promise ? a.f.promise().then(d.resolve) : d.resolveWith(a.f), d = null), !n.length)
                                return a.f;
                            if (p = n[0].l && n[0].l(g, a, n), !p)
                                break;
                            a = p;
                            continue
                        }
                        if (c = a.f && a.f[a.i.j] || s[a.i.j], !c)
                            throw 'no such method "' + a.i.j + '" on object (' + a.f + ")";
                        if (c.timing && !a.e)
                            a.e = !1, a = c.timing(g, a, n, i) || a;
                        else {
                            if (!c.timing && !a.e && (a.k = a.f[a.i.j].apply(a.f, a.i.c), n.length && a.k && a.k instanceof f)) {
                                h(a, a.k);
                                continue
                            }
                            p = {
                                f: a.k,
                                i: a.i.k
                            }, a.e = !1, "function" == typeof a.d && a.d.apply(a.f, u(n)), a = p
                        }
                    } catch (r) {
                        throw o = !o, r
                    } finally {
                        o = !o
                    }
                return t
            }
            n = n || [];
            var c,
                p,
                d,
                a = {
                    f: t,
                    i: r
                },
                o = !1;
            return e.Deferred && (g.promise = function (t, r) {
                var n = (d = d || e.Deferred()).promise(r);
                return g(), n
            }), g
        }

        function f(t, r, n) {
            this[".methods"] = r, this[".callback"] = n, this.length = 0, Array.prototype.push.apply(this, e.makeArray(this._ = t._ = t));
            for (var i in t)
                i in f.prototype || "function" != typeof t[i] || (this[i] = p(i))
        }

        function p(e) {
            return f.prototype[e] = function () {
                return this[".methods"].j = e, this[".methods"].c = arguments, this[".methods"] = this[".methods"].k = {}, this[".callback"] ? this[".callback"](this, e, arguments) : this
            }
        }

        function d(t, r, n) {
            function s(e) {
                return e = i ? r() : o.x, a ? t(e) : e
            }
            "string" == typeof t && (n = new Function("x", "return [" + t + "\n,x]"), t = function (e, t) {
                return t = n(e), o.x = t[1], t[0]
            });
            var i = "function" == typeof r,
                a = "function" == typeof t,
                o = function (e) {
                    return 1 != arguments.length ? s() : (o.x = e, void(i && r(e)))
                };
            return o.x = 0, o._ = {
                toString: o.$ = o.toString = s.toString = s
            }, o.mod = function (e) {
                return d(function (t) {
                    return t % e
                }, o)
            }, o.add = function (e) {
                return d(function (t) {
                    return t + e
                }, o)
            }, o.neg = function () {
                return d("-x", o)
            }, o.$$ = o.X = function (e) {
                return d(e, o)
            }, e.each(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], function (e, t) {
                o[e] = o[t] = function () {
                    o(arguments[e])
                }
            }), o
        }
        var r = {},
            n = 1,
            i = e.fn.each,
            a = e.fn.on || e.fn.bind,
            o = e.fn.off || e.fn.unbind,
            s = {};
        e.Deferred && (f.prototype.promise = function (t, r) {
            return "object" == typeof t && (r = t, t = null), this[".callback"] && "function" == typeof this[".callback"].promise ? this[".callback"].promise(t, r) : e.Deferred().resolveWith(this).promise(r)
        }), e.each(["bind", "on", "one", "live", "delegate"], function (t, r) {
            if (e.fn[r]) {
                var n = e.fn[r];
                e.fn[r] = function () {
                    function l() {
                        return a ? a(i) : i
                    }
                    var t,
                        r,
                        i,
                        a,
                        o,
                        s = this;
                    for (t = 0; t < arguments.length; t++)
                        if ("function" == typeof arguments[t] || arguments[t] && "object" == typeof arguments[t] || arguments[t] === !1) {
                            if (arguments[t] !== e)
                                return "function" == typeof arguments[t] && e.guid && (arguments[t].guid = arguments[t].guid || e.guid++), n.apply(s, arguments);
                            break
                        }
                    return Array.prototype.splice.call(arguments, t, 1, function () {
                        return a = c(s.$(this), r, [{
                            g: e.extend(Array.prototype.shift.apply(arguments), arguments),
                            b: !0
                        }], function (e) {
                            i.length = 0, Array.prototype.push.apply(i, e)
                        }), o && (a.promise().then(o.resolve), o = null), a()
                    }), e.Deferred && (l.promise = function (t, r) {
                        return "object" == typeof t && (r = t, t = null), a && !t ? a.promise(t, r) : (o = o || e.Deferred()).promise(r)
                    }), i = new f(n.apply(s, arguments), r = {}, l)
                }
            }
        }), e.each(["animate", "load"], function (t, r) {
            if (e.fn[r]) {
                var i = e.fn[r];
                e.fn[r] = function () {
                    for (; arguments.length && null == arguments[arguments.length - 1];)
                        Array.prototype.pop.apply(arguments);
                    if (this.length && arguments.length > 1 && arguments[arguments.length - 1] === e) {
                        var t = "_timing" + n++;
                        return arguments[arguments.length - 1] = function () {
                            e(this).trigger(t)
                        }, this.each().one(t).all(i.apply(this, arguments))
                    }
                    return i.apply(this, arguments)
                }
            }
        }), e.each(["wait", "repeat", "join", "then"], function (t, r) {
            e.fn[r] = function () {
                var e = {},
                    t = new f(this, e, c(this, e, [], function (e) {
                        t.length = 0, Array.prototype.push.apply(t, e)
                    }));
                return t[r].apply(t, arguments)
            }
        }), e.fn.join.timing = function (e, t) {
            var r,
                n,
                i = t.f.length;
            "string" == typeof t.i.c[0] ? (r = t.i.c[0], "function" == typeof t.i.c[1] ? t.d = t.i.c[1] : (n = t.i.c[1], t.d = t.i.c[2])) : "function" == typeof t.i.c[0] ? t.d = t.i.c[0] : (n = t.i.c[0], t.d = t.i.c[1]), t.k = t.f, t.e = !i, n ? t.f.promise(null == r ? "fx" : r).then(function () {
                t.e = !0, e()
            }) : t.f.queue(null == r ? "fx" : r, function (r) {
                t.e = !--i, e(), r()
            })
        }, e.fn.then.timing = function (e, t) {
            t.d = t.i.c[0], t.k = t.f, t.e = !0, t.i.c[1] && Array.prototype.shift.apply(t.i.c)
        }, e.fn.wait.timing = function (r, n, i) {
            function d() {
                o.call(c ? o.call(p, c, d) : p, "unwait", h), n.e = !0, n.k = l(n.f, n.k), r()
            }

            function h(i, a) {
                o.call(c ? o.call(e(this), c, d) : e(this), "unwait", h), p = p.not(this), a || (n.k = n.k.not(this)), p.length || (n.e = n.k.length, n.k = l(n.f, n.k), t.clearTimeout(f), n = {
                    f: p
                }), r()
            }
            var s,
                c,
                f,
                p = n.f;
            s = n.i.c[0], n.d = n.i.c[1], a.call(p, "unwait", h), n.k = p, (null == s || s == e) && (s = p), "function" == typeof s && (s = s.apply(p, u(i))), "string" == typeof s ? a.call(p, c = s, d) : s && "function" == typeof s.promise ? s.promise().then(d) : s && "function" == typeof s.then ? s.then(d, !0) : f = t.setTimeout(d, Math.max(0, s))
        }, e.fn.each = function (t) {
            if (!t || t === e) {
                var r = {},
                    n = new f(this, r, c(this, r, [], function (e) {
                        n.length = 0, Array.prototype.push.apply(n, e)
                    }));
                return n.each(t)
            }
            return i.apply(this, arguments)
        }, e.fn.each.timing = function (r, n, a, o) {
            function x() {
                if (w)
                    u > p && m[p]();
                else
                    for (var e = 0; u > e; e++)
                        m[e]();
                return v
            }
            if (n.i.c[0] && n.i.c[0] !== e)
                return n.e = !0, void(n.k = i.apply(n.f, n.i.c));
            var d,
                h,
                g,
                u = Math.max(n.f.length, 1),
                p = 0,
                m = [],
                y = [],
                v = e.extend({}, n.f),
                w = n.i.c[0] === e;
            w && t.setTimeout(function () {
                g = !0, r()
            }, 0);
            for (d in f.prototype)
                v[d] = x;
            for (v.length = u, d = 0; u > d; d++)
                ! function (t) {
                    var i = a.slice(),
                        l = n.f.eq(t);
                    y[t] = l.get(), i.unshift({
                        g: t,
                        a: function (e) {
                            p++, p == u && (h = e.i.k), r()
                        },
                        h: s.all,
                        l: function (e, t) {
                            g && (p++, p == u && (h = t.i), r())
                        }
                    }), m[t] = c(l, n.i.k, i, function (r) {
                        y[t] = r, v.length = 0;
                        for (var n = 0; u > n; n++)
                            Array.prototype.push.apply(v, y[n]);
                        o && o(e.makeArray(v))
                    })
                }(d);
            n.k = v, n.e = !0, n.l = function (e, t) {
                if (p == u)
                    return a.shift(), {
                        f: l(n.f, v),
                        i: h
                    };
                var r = p;
                return x(), p != r ? t : void 0
            }, n.g = u, a.unshift(n)
        }, s.all = function (t) {
            e.extend(t.i, {
                k: e.extend({}, t.i),
                j: "all",
                c: []
            }), t.e = null
        }, s.all.timing = function (e, t, r) {
            if (!r.length || !r[0].h)
                throw ".all() method must be used after .each() only";
            return r[0].a ? void r[0].a(t) : void r[0].h(t)
        }, e.fn.repeat.timing = function (r, n, i) {
            function d() {
                n.k = n.k || n.f, n.e = !0, r()
            }

            function h() {
                o.call(f ? o.call(e(this), f, d) : e(this), "unrepeat", h);
                var i = n.f.not(this);
                n.k = n.k == n.f ? i : n.k, n.f = i, n.e = n.f.length && n.e, l = n.f.length && l, t.clearInterval(!n.f.length && p), r()
            }
            var l,
                u,
                c,
                f,
                p;
            "function" == typeof n.i.c[0] ? n.d = n.i.c[0] : "function" == typeof n.i.c[1] ? (l = n.i.c[0], n.d = n.i.c[1]) : (l = n.i.c[0], u = n.i.c[1], n.d = n.i.c[2]), n.l = function (e, t) {
                return n.e || c ? (n.g++, n.k = n.k || n.f, n.e = n.e || l && t.f && t.f.length, n) : void 0
            }, null == l ? (u = l = !0, t.setTimeout(function () {
                c = !0, r()
            }, 0)) : ("string" == typeof l ? a.call(n.f, f = l, d) : p = t.setInterval(d, Math.max(0, l)), l = !1), a.call(n.f, "unrepeat", h), n.k = n.f, n.g = 0, n.n = function (e) {
                e && h.apply(n.f), l && d()
            }, n.h = s.until, u && d(), i.unshift(n)
        }, s.until = function (t) {
            e.extend(t.i, {
                k: e.extend({}, t.i),
                j: "until",
                c: []
            }), t.e = null
        }, s.until.timing = function (t, r, n) {
            if (!n.length || !n[0].h)
                throw ".until() method must be used after .repeat() only";
            if (!n[0].n)
                return void n[0].h(r);
            var i = r.i.c[0],
                a = r.i.c[1];
            return i === e && (i = null, a = r.i.c.length <= 1 || a), "function" == typeof i && (i = i.apply(r.f, u(n))), null == i && (i = !r.f.size()), "object" == typeof i && (i = i.toString()), "number" == typeof i && (i = n[0].g >= i - 1), i ? (r.e = !0, r.k = r.f, n.shift().n(i), void 0) : (a && (n[0].k = r.f), r = n[0], r.g++, r.n(i), r)
        }, new f(s), e.each(["unwait", "unrepeat"], function (t, r) {
            e.fn[r] = function () {
                return this.trigger(r, arguments)
            }
        }), e.each(["wait", "repeat", "join", "then", "unwait", "unrepeat"], function (t, n) {
            e[n] = function () {
                var t = "string" == typeof arguments[0] ? Array.prototype.shift.apply(arguments) : "";
                return e.fn[n].apply(r[t] = r[t] || e("<div>").text(t), arguments)
            }
        }), t.$$ = e.$$ = e.X = d, e.fn.$ = function () {
            var r = e.apply(t, arguments);
            return r.prevObject = this, r
        }
    }(jQuery, window), ! function () {
        "use strict";

        function e(n) {
            if (!n)
                throw new Error("No options passed to Waypoint constructor");
            if (!n.element)
                throw new Error("No element option passed to Waypoint constructor");
            if (!n.handler)
                throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, n), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), r[this.key] = this, t += 1
        }
        var t = 0,
            r = {};
        e.prototype.queueTrigger = function (e) {
            this.group.queueTrigger(this, e)
        }, e.prototype.trigger = function (e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }, e.prototype.destroy = function () {
            this.context.remove(this), this.group.remove(this), delete r[this.key]
        }, e.prototype.disable = function () {
            return this.enabled = !1, this
        }, e.prototype.enable = function () {
            return this.context.refresh(), this.enabled = !0, this
        }, e.prototype.next = function () {
            return this.group.next(this)
        }, e.prototype.previous = function () {
            return this.group.previous(this)
        }, e.invokeAll = function (e) {
            var t = [];
            for (var n in r)
                t.push(r[n]);
            for (var i = 0, a = t.length; a > i; i++)
                t[i][e]()
        }, e.destroyAll = function () {
            e.invokeAll("destroy")
        }, e.disableAll = function () {
            e.invokeAll("disable")
        }, e.enableAll = function () {
            e.invokeAll("enable")
        }, e.refreshAll = function () {
            e.Context.refreshAll()
        }, e.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight
        }, e.viewportWidth = function () {
            return document.documentElement.clientWidth
        }, e.adapters = [], e.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, e.offsetAliases = {
            "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = e
    }(),
    function () {
        "use strict";

        function e(e) {
            window.setTimeout(e, 1e3 / 60)
        }

        function t(e) {
            this.element = e, this.Adapter = i.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + r, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, n[e.waypointContextKey] = this, r += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var r = 0,
            n = {},
            i = window.Waypoint,
            a = window.onload;
        t.prototype.add = function (e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, t.prototype.checkEmpty = function () {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            e && t && (this.adapter.off(".waypoints"), delete n[this.key])
        }, t.prototype.createThrottledResizeHandler = function () {
            function e() {
                t.handleResize(), t.didResize = !1
            }
            var t = this;
            this.adapter.on("resize.waypoints", function () {
                t.didResize || (t.didResize = !0, i.requestAnimationFrame(e))
            })
        }, t.prototype.createThrottledScrollHandler = function () {
            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            var t = this;
            this.adapter.on("scroll.waypoints", function () {
                (!t.didScroll || i.isTouch) && (t.didScroll = !0, i.requestAnimationFrame(e))
            })
        }, t.prototype.handleResize = function () {
            i.Context.refreshAll()
        }, t.prototype.handleScroll = function () {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var r in t) {
                var n = t[r],
                    i = n.newScroll > n.oldScroll,
                    a = i ? n.forward : n.backward;
                for (var o in this.waypoints[r]) {
                    var s = this.waypoints[r][o],
                        l = n.oldScroll < s.triggerPoint,
                        u = n.newScroll >= s.triggerPoint,
                        c = l && u,
                        f = !l && !u;
                    (c || f) && (s.queueTrigger(a), e[s.group.id] = s.group)
                }
            }
            for (var p in e)
                e[p].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, t.prototype.innerHeight = function () {
            return this.element == this.element.window ? i.viewportHeight() : this.adapter.innerHeight()
        }, t.prototype.remove = function (e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, t.prototype.innerWidth = function () {
            return this.element == this.element.window ? i.viewportWidth() : this.adapter.innerWidth()
        }, t.prototype.destroy = function () {
            var e = [];
            for (var t in this.waypoints)
                for (var r in this.waypoints[t])
                    e.push(this.waypoints[t][r]);
            for (var n = 0, i = e.length; i > n; n++)
                e[n].destroy()
        }, t.prototype.refresh = function () {
            var e,
                t = this.element == this.element.window,
                r = this.adapter.offset(),
                n = {};
            this.handleScroll(), e = {
                horizontal: {
                    contextOffset: t ? 0 : r.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : r.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var i in e) {
                var a = e[i];
                for (var o in this.waypoints[i]) {
                    var s,
                        l,
                        u,
                        c,
                        f,
                        p = this.waypoints[i][o],
                        d = p.options.offset,
                        h = p.triggerPoint,
                        g = 0,
                        m = null == h;
                    p.element !== p.element.window && (g = p.adapter.offset()[a.offsetProp]), "function" == typeof d ? d = d.apply(p) : "string" == typeof d && (d = parseFloat(d), p.options.offset.indexOf("%") > -1 && (d = Math.ceil(a.contextDimension * d / 100))), s = a.contextScroll - a.contextOffset, p.triggerPoint = g + s - d, l = h < a.oldScroll, u = p.triggerPoint >= a.oldScroll, c = l && u, f = !l && !u, !m && c ? (p.queueTrigger(a.backward), n[p.group.id] = p.group) : !m && f ? (p.queueTrigger(a.forward), n[p.group.id] = p.group) : m && a.oldScroll >= p.triggerPoint && (p.queueTrigger(a.forward), n[p.group.id] = p.group)
                }
            }
            for (var y in n)
                n[y].flushTriggers();
            return this
        }, t.findOrCreateByElement = function (e) {
            return t.findByElement(e) || new t(e)
        }, t.refreshAll = function () {
            for (var e in n)
                n[e].refresh()
        }, t.findByElement = function (e) {
            return n[e.waypointContextKey]
        }, window.onload = function () {
            a && a(), t.refreshAll()
        }, i.requestAnimationFrame = function (t) {
            var r = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
            r.call(window, t)
        }, i.Context = t
    }(),
    function () {
        "use strict";

        function e(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function t(e, t) {
            return t.triggerPoint - e.triggerPoint
        }

        function r(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
        }
        var n = {
                vertical: {},
                horizontal: {}
            },
            i = window.Waypoint;
        r.prototype.add = function (e) {
            this.waypoints.push(e)
        }, r.prototype.clearTriggerQueues = function () {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, r.prototype.flushTriggers = function () {
            for (var r in this.triggerQueues) {
                var n = this.triggerQueues[r],
                    i = "up" === r || "left" === r;
                n.sort(i ? t : e);
                for (var a = 0, o = n.length; o > a; a += 1) {
                    var s = n[a];
                    (s.options.continuous || a === n.length - 1) && s.trigger([r])
                }
            }
            this.clearTriggerQueues()
        }, r.prototype.next = function (t) {
            this.waypoints.sort(e);
            var r = i.Adapter.inArray(t, this.waypoints),
                n = r === this.waypoints.length - 1;
            return n ? null : this.waypoints[r + 1]
        }, r.prototype.previous = function (t) {
            this.waypoints.sort(e);
            var r = i.Adapter.inArray(t, this.waypoints);
            return r ? this.waypoints[r - 1] : null
        }, r.prototype.queueTrigger = function (e, t) {
            this.triggerQueues[t].push(e)
        }, r.prototype.remove = function (e) {
            var t = i.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }, r.prototype.first = function () {
            return this.waypoints[0]
        }, r.prototype.last = function () {
            return this.waypoints[this.waypoints.length - 1]
        }, r.findOrCreate = function (e) {
            return n[e.axis][e.name] || new r(e)
        }, i.Group = r
    }(),
    function () {
        "use strict";

        function e(e) {
            this.$element = t(e)
        }
        var t = window.jQuery,
            r = window.Waypoint;
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (t, r) {
            e.prototype[r] = function () {
                var e = Array.prototype.slice.call(arguments);
                return this.$element[r].apply(this.$element, e)
            }
        }), t.each(["extend", "inArray", "isEmptyObject"], function (r, n) {
            e[n] = t[n]
        }), r.adapters.push({
            name: "jquery",
            Adapter: e
        }), r.Adapter = e
    }(),
    function () {
        "use strict";

        function e(e) {
            return function () {
                var r = [],
                    n = arguments[0];
                return e.isFunction(arguments[0]) && (n = e.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function () {
                    var i = e.extend({}, n, {
                        element: this
                    });
                    "string" == typeof i.context && (i.context = e(this).closest(i.context)[0]), r.push(new t(i))
                }), r
            }
        }
        var t = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }(),
    function (e) {
        e.fn.tile = function (t) {
            var r,
                n,
                i,
                a,
                o,
                s,
                l = document.body.style,
                u = ["height"],
                c = this.length - 1;
            return t || (t = this.length), s = l.removeProperty ? l.removeProperty : l.removeAttribute, this.each(function () {
                s.apply(this.style, u)
            }).each(function (s) {
                a = s % t, 0 == a && (r = []), n = r[a] = e(this), o = "border-box" == n.css("box-sizing") ? n.outerHeight() : n.innerHeight(), (0 == a || o > i) && (i = o), (s == c || a == t - 1) && e.each(r, function () {
                    this.css("height", i)
                })
            })
        }
    }(jQuery), ! function (e) {
        function t(e) {
            var t = e.length,
                n = r.type(e);
            return "function" === n || r.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }
        if (!e.jQuery) {
            var r = function (e, t) {
                return new r.fn.init(e, t)
            };
            r.isWindow = function (e) {
                return null != e && e == e.window
            }, r.type = function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[o.call(e)] || "object" : typeof e
            }, r.isArray = Array.isArray || function (e) {
                return "array" === r.type(e)
            }, r.isPlainObject = function (e) {
                var t;
                if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                for (t in e)
                ;
                return void 0 === t || a.call(e, t)
            }, r.each = function (e, r, n) {
                var i,
                    a = 0,
                    o = e.length,
                    s = t(e);
                if (n) {
                    if (s)
                        for (; o > a && (i = r.apply(e[a], n), i !== !1); a++)
                    ;
                    else
                        for (a in e)
                            if (i = r.apply(e[a], n), i === !1)
                                break
                } else if (s)
                    for (; o > a && (i = r.call(e[a], a, e[a]), i !== !1); a++)
                ;
                else
                    for (a in e)
                        if (i = r.call(e[a], a, e[a]), i === !1)
                            break;
                return e
            }, r.data = function (e, t, i) {
                if (void 0 === i) {
                    var a = e[r.expando],
                        o = a && n[a];
                    if (void 0 === t)
                        return o;
                    if (o && t in o)
                        return o[t]
                } else if (void 0 !== t) {
                    var a = e[r.expando] || (e[r.expando] = ++r.uuid);
                    return n[a] = n[a] || {}, n[a][t] = i, i
                }
            }, r.removeData = function (e, t) {
                var i = e[r.expando],
                    a = i && n[i];
                a && r.each(t, function (e, t) {
                    delete a[t]
                })
            }, r.extend = function () {
                var e,
                    t,
                    n,
                    i,
                    a,
                    o,
                    s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== r.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                    if (null != (a = arguments[l]))
                        for (i in a)
                            e = s[i], n = a[i], s !== n && (c && n && (r.isPlainObject(n) || (t = r.isArray(n))) ? (t ? (t = !1, o = e && r.isArray(e) ? e : []) : o = e && r.isPlainObject(e) ? e : {}, s[i] = r.extend(c, o, n)) : void 0 !== n && (s[i] = n));
                return s
            }, r.queue = function (e, n, i) {
                function a(e, r) {
                    var n = r || [];
                    return null != e && (t(Object(e)) ? ! function (e, t) {
                        for (var r = +t.length, n = 0, i = e.length; r > n;)
                            e[i++] = t[n++];
                        if (r !== r)
                            for (; void 0 !== t[n];)
                                e[i++] = t[n++];
                        return e.length = i, e
                    }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                }
                if (e) {
                    n = (n || "fx") + "queue";
                    var o = r.data(e, n);
                    return i ? (!o || r.isArray(i) ? o = r.data(e, n, a(i)) : o.push(i), o) : o || []
                }
            }, r.dequeue = function (e, t) {
                r.each(e.nodeType ? [e] : e, function (e, n) {
                    t = t || "fx";
                    var i = r.queue(n, t),
                        a = i.shift();
                    "inprogress" === a && (a = i.shift()), a && ("fx" === t && i.unshift("inprogress"), a.call(n, function () {
                        r.dequeue(n, t)
                    }))
                })
            }, r.fn = r.prototype = {
                init: function (e) {
                    if (e.nodeType)
                        return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function () {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function () {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;)
                            e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        n = this.offset(),
                        i = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : r(e).offset();
                    return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (i.top += parseFloat(e.style.borderTopWidth) || 0, i.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: n.top - i.top,
                        left: n.left - i.left
                    }
                }
            };
            var n = {};
            r.expando = "velocity" + (new Date).getTime(), r.uuid = 0;
            for (var i = {}, a = i.hasOwnProperty, o = i.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++)
                i["[object " + s[l] + "]"] = s[l].toLowerCase();
            r.fn.init.prototype = r.fn, e.Velocity = {
                Utilities: r
            }
        }
    }(window),
    function (e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function () {
        return function (e, t, r, n) {
            function i(e) {
                for (var t = -1, r = e ? e.length : 0, n = []; ++t < r;) {
                    var i = e[t];
                    i && n.push(i)
                }
                return n
            }

            function a(e) {
                return h.isWrapped(e) ? e = [].slice.call(e) : h.isNode(e) && (e = [e]), e
            }

            function o(e) {
                var t = g.data(e, "velocity");
                return null === t ? n : t
            }

            function s(e) {
                return function (t) {
                    return Math.round(t * e) * (1 / e)
                }
            }

            function l(e, r, n, i) {
                function a(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function o(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, r) {
                    return ((a(t, r) * e + o(t, r)) * e + s(t)) * e
                }

                function u(e, t, r) {
                    return 3 * a(t, r) * e * e + 2 * o(t, r) * e + s(t)
                }

                function c(t, r) {
                    for (var i = 0; g > i; ++i) {
                        var a = u(r, e, n);
                        if (0 === a)
                            return r;
                        var o = l(r, e, n) - t;
                        r -= o / a
                    }
                    return r
                }

                function f() {
                    for (var t = 0; w > t; ++t)
                        P[t] = l(t * x, e, n)
                }

                function p(t, r, i) {
                    var a,
                        o,
                        s = 0;
                    do o = r + (i - r) / 2, a = l(o, e, n) - t, a > 0 ? i = o : r = o;
                    while (Math.abs(a) > y && ++s < v);
                    return o
                }

                function d(t) {
                    for (var r = 0, i = 1, a = w - 1; i != a && P[i] <= t; ++i)
                        r += x;
                    --i;
                    var o = (t - P[i]) / (P[i + 1] - P[i]),
                        s = r + o * x,
                        l = u(s, e, n);
                    return l >= m ? c(t, s) : 0 == l ? s : p(t, r, r + x)
                }

                function h() {
                    k = !0, (e != r || n != i) && f()
                }
                var g = 4,
                    m = .001,
                    y = 1e-7,
                    v = 10,
                    w = 11,
                    x = 1 / (w - 1),
                    b = "Float32Array" in t;
                if (4 !== arguments.length)
                    return !1;
                for (var S = 0; 4 > S; ++S)
                    if ("number" != typeof arguments[S] || isNaN(arguments[S]) || !isFinite(arguments[S]))
                        return !1;
                e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
                var P = b ? new Float32Array(w) : new Array(w),
                    k = !1,
                    O = function (t) {
                        return k || h(), e === r && n === i ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, i)
                    };
                O.getControlPoints = function () {
                    return [{
                        x: e,
                        y: r
                    }, {
                        x: n,
                        y: i
                    }]
                };
                var T = "generateBezier(" + [e, r, n, i] + ")";
                return O.toString = function () {
                    return T
                }, O
            }

            function u(e, t) {
                var r = e;
                return h.isString(e) ? w.Easings[e] || (r = !1) : r = h.isArray(e) && 1 === e.length ? s.apply(null, e) : h.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : h.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = w.Easings[w.defaults.easing] ? w.defaults.easing : v), r
            }

            function c(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        r = w.State.calls.length;
                    r > 1e4 && (w.State.calls = i(w.State.calls));
                    for (var a = 0; r > a; a++)
                        if (w.State.calls[a]) {
                            var s = w.State.calls[a],
                                l = s[0],
                                u = s[2],
                                p = s[3],
                                d = !!p,
                                m = null;
                            p || (p = w.State.calls[a][3] = t - 16);
                            for (var y = Math.min((t - p) / u.duration, 1), v = 0, x = l.length; x > v; v++) {
                                var S = l[v],
                                    k = S.element;
                                if (o(k)) {
                                    var O = !1;
                                    if (u.display !== n && null !== u.display && "none" !== u.display) {
                                        if ("flex" === u.display) {
                                            var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            g.each(T, function (e, t) {
                                                b.setPropertyValue(k, "display", t)
                                            })
                                        }
                                        b.setPropertyValue(k, "display", u.display)
                                    }
                                    u.visibility !== n && "hidden" !== u.visibility && b.setPropertyValue(k, "visibility", u.visibility);
                                    for (var j in S)
                                        if ("element" !== j) {
                                            var E,
                                                C = S[j],
                                                A = h.isString(C.easing) ? w.Easings[C.easing] : C.easing;
                                            if (1 === y)
                                                E = C.endValue;
                                            else {
                                                var V = C.endValue - C.startValue;
                                                if (E = C.startValue + V * A(y, u, V), !d && E === C.currentValue)
                                                    continue
                                            }
                                            if (C.currentValue = E, "tween" === j)
                                                m = E;
                                            else {
                                                if (b.Hooks.registered[j]) {
                                                    var X = b.Hooks.getRoot(j),
                                                        I = o(k).rootPropertyValueCache[X];
                                                    I && (C.rootPropertyValue = I)
                                                }
                                                var Y = b.setPropertyValue(k, j, C.currentValue + (0 === parseFloat(E) ? "" : C.unitType), C.rootPropertyValue, C.scrollData);
                                                b.Hooks.registered[j] && (o(k).rootPropertyValueCache[X] = b.Normalizations.registered[X] ? b.Normalizations.registered[X]("extract", null, Y[1]) : Y[1]), "transform" === Y[0] && (O = !0)
                                            }
                                        }
                                    u.mobileHA && o(k).transformCache.translate3d === n && (o(k).transformCache.translate3d = "(0px, 0px, 0px)", O = !0), O && b.flushTransformCache(k)
                                }
                            }
                            u.display !== n && "none" !== u.display && (w.State.calls[a][2].display = !1), u.visibility !== n && "hidden" !== u.visibility && (w.State.calls[a][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], y, Math.max(0, p + u.duration - t), p, m), 1 === y && f(a)
                        }
                }
                w.State.isTicking && P(c)
            }

            function f(e, t) {
                if (!w.State.calls[e])
                    return !1;
                for (var r = w.State.calls[e][0], i = w.State.calls[e][1], a = w.State.calls[e][2], s = w.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                    var f = r[u].element;
                    if (t || a.loop || ("none" === a.display && b.setPropertyValue(f, "display", a.display), "hidden" === a.visibility && b.setPropertyValue(f, "visibility", a.visibility)), a.loop !== !0 && (g.queue(f)[1] === n || !/\.velocityQueueEntryFlag/i.test(g.queue(f)[1])) && o(f)) {
                        o(f).isAnimating = !1, o(f).rootPropertyValueCache = {};
                        var p = !1;
                        g.each(b.Lists.transforms3D, function (e, t) {
                            var r = /^scale/.test(t) ? 1 : 0,
                                i = o(f).transformCache[t];
                            o(f).transformCache[t] !== n && new RegExp("^\\(" + r + "[^.]").test(i) && (p = !0, delete o(f).transformCache[t])
                        }), a.mobileHA && (p = !0, delete o(f).transformCache.translate3d), p && b.flushTransformCache(f), b.Values.removeClass(f, "velocity-animating")
                    }
                    if (!t && a.complete && !a.loop && u === c - 1)
                        try {
                            a.complete.call(i, i)
                        } catch (d) {
                            setTimeout(function () {
                                throw d
                            }, 1)
                        }
                    s && a.loop !== !0 && s(i), o(f) && a.loop === !0 && !t && (g.each(o(f).tweensContainer, function (e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), w(f, "reverse", {
                        loop: !0,
                        delay: a.delay
                    })), a.queue !== !1 && g.dequeue(f, a.queue)
                }
                w.State.calls[e] = !1;
                for (var h = 0, m = w.State.calls.length; m > h; h++)
                    if (w.State.calls[h] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (w.State.isTicking = !1, delete w.State.calls, w.State.calls = [])
            }
            var g,
                p = function () {
                    if (r.documentMode)
                        return r.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = r.createElement("div");
                        if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length)
                            return t = null, e
                    }
                    return n
                }(),
                d = function () {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                        var n,
                            r = (new Date).getTime();
                        return n = Math.max(0, 16 - (r - e)), e = r + n, setTimeout(function () {
                            t(r + n)
                        }, n)
                    }
                }(),
                h = {
                    isString: function (e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function (e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function (e) {
                        return e && e.nodeType
                    },
                    isNodeList: function (e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function (e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function (e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function (e) {
                        for (var t in e)
                            return !1;
                        return !0
                    }
                },
                m = !1;
            if (e.fn && e.fn.jquery ? (g = e, m = !0) : g = t.Velocity.Utilities, 8 >= p && !m)
                throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= p)
                return void(jQuery.fn.velocity = jQuery.fn.animate);
            var y = 400,
                v = "swing",
                w = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: r.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: g,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: y,
                        easing: v,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function (e) {
                        g.data(e, "velocity", {
                            isSVG: h.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            t.pageYOffset !== n ? (w.State.scrollAnchor = t, w.State.scrollPropertyLeft = "pageXOffset", w.State.scrollPropertyTop = "pageYOffset") : (w.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, w.State.scrollPropertyLeft = "scrollLeft", w.State.scrollPropertyTop = "scrollTop");
            var x = function () {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, r, n) {
                    var i = {
                        x: t.x + n.dx * r,
                        v: t.v + n.dv * r,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: i.v,
                        dv: e(i)
                    }
                }

                function r(r, n) {
                    var i = {
                            dx: r.v,
                            dv: e(r)
                        },
                        a = t(r, .5 * n, i),
                        o = t(r, .5 * n, a),
                        s = t(r, n, o),
                        l = 1 / 6 * (i.dx + 2 * (a.dx + o.dx) + s.dx),
                        u = 1 / 6 * (i.dv + 2 * (a.dv + o.dv) + s.dv);
                    return r.x = r.x + l * n, r.v = r.v + u * n, r
                }
                return function n(e, t, i) {
                    var c,
                        f,
                        p,
                        a = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        o = [0],
                        s = 0,
                        l = 1e-4,
                        u = .016;
                    for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, i = i || null, a.tension = e, a.friction = t, c = null !== i, c ? (s = n(e, t), f = s / i * u) : f = u; p = r(p || a, f), o.push(1 + p.x), s += 16, Math.abs(p.x) > l && Math.abs(p.v) > l;)
                    ;
                    return c ? function (e) {
                        return o[e * (o.length - 1) | 0]
                    } : s
                }
            }();
            w.Easings = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function (e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, g.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function (e, t) {
                w.Easings[t[0]] = l.apply(null, t[1])
            });
            var b = w.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function () {
                        for (var e = 0; e < b.Lists.colors.length; e++) {
                            var t = "color" === b.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            b.Hooks.templates[b.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var r,
                            n,
                            i;
                        if (p)
                            for (r in b.Hooks.templates) {
                                n = b.Hooks.templates[r], i = n[0].split(" ");
                                var a = n[1].match(b.RegEx.valueSplit);
                                "Color" === i[0] && (i.push(i.shift()), a.push(a.shift()), b.Hooks.templates[r] = [i.join(" "), a.join(" ")])
                            }
                        for (r in b.Hooks.templates) {
                            n = b.Hooks.templates[r], i = n[0].split(" ");
                            for (var e in i) {
                                var o = r + i[e],
                                    s = e;
                                b.Hooks.registered[o] = [r, s]
                            }
                        }
                    },
                    getRoot: function (e) {
                        var t = b.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    cleanRootPropertyValue: function (e, t) {
                        return b.RegEx.valueUnwrap.test(t) && (t = t.match(b.RegEx.valueUnwrap)[1]), b.Values.isCSSNullValue(t) && (t = b.Hooks.templates[e][1]), t
                    },
                    extractValue: function (e, t) {
                        var r = b.Hooks.registered[e];
                        if (r) {
                            var n = r[0],
                                i = r[1];
                            return t = b.Hooks.cleanRootPropertyValue(n, t), t.toString().match(b.RegEx.valueSplit)[i]
                        }
                        return t
                    },
                    injectValue: function (e, t, r) {
                        var n = b.Hooks.registered[e];
                        if (n) {
                            var o,
                                s,
                                i = n[0],
                                a = n[1];
                            return r = b.Hooks.cleanRootPropertyValue(i, r), o = r.toString().match(b.RegEx.valueSplit), o[a] = t, s = o.join(" ")
                        }
                        return r
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function (e, t, r) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var n;
                                    return b.RegEx.wrappedValueAlreadyExtracted.test(r) ? n = r : (n = r.toString().match(b.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : r), n;
                                case "inject":
                                    return "rect(" + r + ")"
                            }
                        },
                        blur: function (e, t, r) {
                            switch (e) {
                                case "name":
                                    return w.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var n = parseFloat(r);
                                    if (!n && 0 !== n) {
                                        var i = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        n = i ? i[1] : 0
                                    }
                                    return n;
                                case "inject":
                                    return parseFloat(r) ? "blur(" + r + ")" : "none"
                            }
                        },
                        opacity: function (e, t, r) {
                            if (8 >= p)
                                switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var n = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return r = n ? n[1] / 100 : 1;
                                    case "inject":
                                        return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                                }
                            else
                                switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                        return r;
                                    case "inject":
                                        return r
                                }
                        }
                    },
                    register: function () {
                        9 >= p || w.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
                        for (var e = 0; e < b.Lists.transformsBase.length; e++)
                            ! function () {
                                var t = b.Lists.transformsBase[e];
                                b.Normalizations.registered[t] = function (e, r, i) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return o(r) === n || o(r).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : o(r).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var a = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    a = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    w.State.isAndroid && o(r).transformCache[t] === n && 1 > i && (i = 1), a = !/(\d)$/i.test(i);
                                                    break;
                                                case "skew":
                                                    a = !/(deg|\d)$/i.test(i);
                                                    break;
                                                case "rotate":
                                                    a = !/(deg|\d)$/i.test(i)
                                            }
                                            return a || (o(r).transformCache[t] = "(" + i + ")"), o(r).transformCache[t]
                                    }
                                }
                            }();
                        for (var e = 0; e < b.Lists.colors.length; e++)
                            ! function () {
                                var t = b.Lists.colors[e];
                                b.Normalizations.registered[t] = function (e, r, i) {
                                    switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var a;
                                            if (b.RegEx.wrappedValueAlreadyExtracted.test(i))
                                                a = i;
                                            else {
                                                var o,
                                                    s = {
                                                        black: "rgb(0, 0, 0)",
                                                        blue: "rgb(0, 0, 255)",
                                                        gray: "rgb(128, 128, 128)",
                                                        green: "rgb(0, 128, 0)",
                                                        red: "rgb(255, 0, 0)",
                                                        white: "rgb(255, 255, 255)"
                                                    };
                                                /^[A-z]+$/i.test(i) ? o = s[i] !== n ? s[i] : s.black : b.RegEx.isHex.test(i) ? o = "rgb(" + b.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (o = s.black), a = (o || i).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= p || 3 !== a.split(" ").length || (a += " 1"), a;
                                        case "inject":
                                            return 8 >= p ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                    }
                },
                Names: {
                    camelCase: function (e) {
                        return e.replace(/-(\w)/g, function (e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function (e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (p || w.State.isAndroid && !w.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function (e) {
                        if (w.State.prefixMatches[e])
                            return [w.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, n = t.length; n > r; r++) {
                            var i;
                            if (i = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
                                    return e.toUpperCase()
                                }), h.isString(w.State.prefixElement.style[i]))
                                return w.State.prefixMatches[e] = i, [i, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function (e) {
                        var n,
                            t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(t, function (e, t, r, n) {
                            return t + t + r + r + n + n
                        }), n = r.exec(e), n ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function (e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function (e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function (e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function (e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    },
                    removeClass: function (e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function (e, r, i, a) {
                    function s(e, r) {
                        function i() {
                            u && b.setPropertyValue(e, "display", "none")
                        }
                        var l = 0;
                        if (8 >= p)
                            l = g.css(e, r);
                        else {
                            var u = !1;
                            if (/^(width|height)$/.test(r) && 0 === b.getPropertyValue(e, "display") && (u = !0, b.setPropertyValue(e, "display", b.Values.getDisplayType(e))), !a) {
                                if ("height" === r && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var c = e.offsetHeight - (parseFloat(b.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingBottom")) || 0);
                                    return i(), c
                                }
                                if ("width" === r && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var f = e.offsetWidth - (parseFloat(b.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingRight")) || 0);
                                    return i(), f
                                }
                            }
                            var d;
                            d = o(e) === n ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === p && "filter" === r ? d.getPropertyValue(r) : d[r], ("" === l || null === l) && (l = e.style[r]), i()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                            var h = s(e, "position");
                            ("fixed" === h || "absolute" === h && /top|left/i.test(r)) && (l = g(e).position()[r] + "px")
                        }
                        return l
                    }
                    var l;
                    if (b.Hooks.registered[r]) {
                        var u = r,
                            c = b.Hooks.getRoot(u);
                        i === n && (i = b.getPropertyValue(e, b.Names.prefixCheck(c)[0])), b.Normalizations.registered[c] && (i = b.Normalizations.registered[c]("extract", e, i)), l = b.Hooks.extractValue(u, i)
                    } else if (b.Normalizations.registered[r]) {
                        var f,
                            d;
                        f = b.Normalizations.registered[r]("name", e), "transform" !== f && (d = s(e, b.Names.prefixCheck(f)[0]), b.Values.isCSSNullValue(d) && b.Hooks.templates[r] && (d = b.Hooks.templates[r][1])), l = b.Normalizations.registered[r]("extract", e, d)
                    }
                    if (!/^[\d-]/.test(l))
                        if (o(e) && o(e).isSVG && b.Names.SVGAttribute(r))
                            if (/^(height|width)$/i.test(r))
                                try {
                                    l = e.getBBox()[r]
                                } catch (h) {
                                    l = 0
                                }
                    else
                        l = e.getAttribute(r);
                    else
                        l = s(e, b.Names.prefixCheck(r)[0]);
                    return b.Values.isCSSNullValue(l) && (l = 0), w.debug >= 2 && console.log("Get " + r + ": " + l), l
                },
                setPropertyValue: function (e, r, n, i, a) {
                    var s = r;
                    if ("scroll" === r)
                        a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? t.scrollTo(n, a.alternateValue) : t.scrollTo(a.alternateValue, n);
                    else if (b.Normalizations.registered[r] && "transform" === b.Normalizations.registered[r]("name", e))
                        b.Normalizations.registered[r]("inject", e, n), s = "transform", n = o(e).transformCache[r];
                    else {
                        if (b.Hooks.registered[r]) {
                            var l = r,
                                u = b.Hooks.getRoot(r);
                            i = i || b.getPropertyValue(e, u), n = b.Hooks.injectValue(l, n, i), r = u
                        }
                        if (b.Normalizations.registered[r] && (n = b.Normalizations.registered[r]("inject", e, n), r = b.Normalizations.registered[r]("name", e)), s = b.Names.prefixCheck(r)[0], 8 >= p)
                            try {
                                e.style[s] = n
                            } catch (c) {
                                w.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                            }
                        else
                            o(e) && o(e).isSVG && b.Names.SVGAttribute(r) ? e.setAttribute(r, n) : e.style[s] = n;
                        w.debug >= 2 && console.log("Set " + r + " (" + s + "): " + n)
                    }
                    return [s, n]
                },
                flushTransformCache: function (e) {
                    function t(t) {
                        return parseFloat(b.getPropertyValue(e, t))
                    }
                    var r = "";
                    if ((p || w.State.isAndroid && !w.State.isChrome) && o(e).isSVG) {
                        var n = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        };
                        g.each(o(e).transformCache, function (e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (r += e + "(" + n[e].join(" ") + ") ", delete n[e])
                        })
                    } else {
                        var i,
                            a;
                        g.each(o(e).transformCache, function (t) {
                            return i = o(e).transformCache[t], "transformPerspective" === t ? (a = i, !0) : (9 === p && "rotateZ" === t && (t = "rotate"), void(r += t + i + " "))
                        }), a && (r = "perspective" + a + " " + r)
                    }
                    b.setPropertyValue(e, "transform", r)
                }
            };
            b.Hooks.register(), b.Normalizations.register(), w.hook = function (e, t, r) {
                var i = n;
                return e = a(e), g.each(e, function (e, a) {
                    if (o(a) === n && w.init(a), r === n)
                        i === n && (i = w.CSS.getPropertyValue(a, t));
                    else {
                        var s = w.CSS.setPropertyValue(a, t, r);
                        "transform" === s[0] && w.CSS.flushTransformCache(a), i = s
                    }
                }), i
            };
            var S = function () {
                function e() {
                    return l ? j.promise || null : p
                }

                function i() {
                    function e() {
                        function f(e, t) {
                            var r = n,
                                o = n,
                                s = n;
                            return h.isArray(e) ? (r = e[0], !h.isArray(e[1]) && /^[\d-]/.test(e[1]) || h.isFunction(e[1]) || b.RegEx.isHex.test(e[1]) ? s = e[1] : (h.isString(e[1]) && !b.RegEx.isHex.test(e[1]) || h.isArray(e[1])) && (o = t ? e[1] : u(e[1], a.duration), e[2] !== n && (s = e[2]))) : r = e, t || (o = o || a.easing), h.isFunction(r) && (r = r.call(i, k, P)), h.isFunction(s) && (s = s.call(i, k, P)), [r || 0, o, s]
                        }

                        function p(e, t) {
                            var r,
                                n;
                            return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                                return r = e, ""
                            }), r || (r = b.Values.getUnitType(e)), [n, r]
                        }

                        function d() {
                            var e = {
                                    myParent: i.parentNode || r.body,
                                    position: b.getPropertyValue(i, "position"),
                                    fontSize: b.getPropertyValue(i, "fontSize")
                                },
                                n = e.position === Y.lastPosition && e.myParent === Y.lastParent,
                                a = e.fontSize === Y.lastFontSize;
                            Y.lastParent = e.myParent, Y.lastPosition = e.position, Y.lastFontSize = e.fontSize;
                            var s = 100,
                                l = {};
                            if (a && n)
                                l.emToPx = Y.lastEmToPx, l.percentToPxWidth = Y.lastPercentToPxWidth, l.percentToPxHeight = Y.lastPercentToPxHeight;
                            else {
                                var u = o(i).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                                w.init(u), e.myParent.appendChild(u), g.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                    w.CSS.setPropertyValue(u, t, "hidden")
                                }), w.CSS.setPropertyValue(u, "position", e.position), w.CSS.setPropertyValue(u, "fontSize", e.fontSize), w.CSS.setPropertyValue(u, "boxSizing", "content-box"), g.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                    w.CSS.setPropertyValue(u, t, s + "%")
                                }), w.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = Y.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = Y.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = Y.lastEmToPx = (parseFloat(b.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                            }
                            return null === Y.remToPx && (Y.remToPx = parseFloat(b.getPropertyValue(r.body, "fontSize")) || 16), null === Y.vwToPx && (Y.vwToPx = parseFloat(t.innerWidth) / 100, Y.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = Y.remToPx, l.vwToPx = Y.vwToPx, l.vhToPx = Y.vhToPx, w.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), i), l
                        }
                        if (a.begin && 0 === k)
                            try {
                                a.begin.call(m, m)
                            } catch (y) {
                                setTimeout(function () {
                                    throw y
                                }, 1)
                            }
                        if ("scroll" === C) {
                            var T,
                                E,
                                A,
                                S = /^x$/i.test(a.axis) ? "Left" : "Top",
                                O = parseFloat(a.offset) || 0;
                            a.container ? h.isWrapped(a.container) || h.isNode(a.container) ? (a.container = a.container[0] || a.container, T = a.container["scroll" + S], A = T + g(i).position()[S.toLowerCase()] + O) : a.container = null : (T = w.State.scrollAnchor[w.State["scrollProperty" + S]], E = w.State.scrollAnchor[w.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], A = g(i).offset()[S.toLowerCase()] + O), s = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: T,
                                    currentValue: T,
                                    endValue: A,
                                    unitType: "",
                                    easing: a.easing,
                                    scrollData: {
                                        container: a.container,
                                        direction: S,
                                        alternateValue: E
                                    }
                                },
                                element: i
                            }, w.debug && console.log("tweensContainer (scroll): ", s.scroll, i)
                        } else if ("reverse" === C) {
                            if (!o(i).tweensContainer)
                                return void g.dequeue(i, a.queue);
                            "none" === o(i).opts.display && (o(i).opts.display = "auto"), "hidden" === o(i).opts.visibility && (o(i).opts.visibility = "visible"), o(i).opts.loop = !1, o(i).opts.begin = null, o(i).opts.complete = null, x.easing || delete a.easing, x.duration || delete a.duration, a = g.extend({}, o(i).opts, a);
                            var V = g.extend(!0, {}, o(i).tweensContainer);
                            for (var X in V)
                                if ("element" !== X) {
                                    var I = V[X].startValue;
                                    V[X].startValue = V[X].currentValue = V[X].endValue, V[X].endValue = I, h.isEmptyObject(x) || (V[X].easing = a.easing), w.debug && console.log("reverse tweensContainer (" + X + "): " + JSON.stringify(V[X]), i)
                                }
                            s = V
                        } else if ("start" === C) {
                            var V;
                            o(i).tweensContainer && o(i).isAnimating === !0 && (V = o(i).tweensContainer), g.each(v, function (e, t) {
                                if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
                                    var r = f(t, !0),
                                        i = r[0],
                                        a = r[1],
                                        o = r[2];
                                    if (b.RegEx.isHex.test(i)) {
                                        for (var s = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(i), u = o ? b.Values.hexToRgb(o) : n, c = 0; c < s.length; c++) {
                                            var p = [l[c]];
                                            a && p.push(a), u !== n && p.push(u[c]), v[e + s[c]] = p
                                        }
                                        delete v[e]
                                    }
                                }
                            });
                            for (var L in v) {
                                var R = f(v[L]),
                                    F = R[0],
                                    q = R[1],
                                    H = R[2];
                                L = b.Names.camelCase(L);
                                var M = b.Hooks.getRoot(L),
                                    z = !1;
                                if (o(i).isSVG || "tween" === M || b.Names.prefixCheck(M)[1] !== !1 || b.Normalizations.registered[M] !== n) {
                                    (a.display !== n && null !== a.display && "none" !== a.display || a.visibility !== n && "hidden" !== a.visibility) && /opacity|filter/.test(L) && !H && 0 !== F && (H = 0), a._cacheValues && V && V[L] ? (H === n && (H = V[L].endValue + V[L].unitType), z = o(i).rootPropertyValueCache[M]) : b.Hooks.registered[L] ? H === n ? (z = b.getPropertyValue(i, M), H = b.getPropertyValue(i, L, z)) : z = b.Hooks.templates[M][1] : H === n && (H = b.getPropertyValue(i, L));
                                    var N,
                                        B,
                                        Q,
                                        $ = !1;
                                    if (N = p(L, H), H = N[0], Q = N[1], N = p(L, F), F = N[0].replace(/^([+-\/*])=/, function (e, t) {
                                            return $ = t, ""
                                        }), B = N[1], H = parseFloat(H) || 0, F = parseFloat(F) || 0, "%" === B && (/^(fontSize|lineHeight)$/.test(L) ? (F /= 100, B = "em") : /^scale/.test(L) ? (F /= 100, B = "") : /(Red|Green|Blue)$/i.test(L) && (F = F / 100 * 255, B = "")), /[\/*]/.test($))
                                        B = Q;
                                    else if (Q !== B && 0 !== H)
                                        if (0 === F)
                                            B = Q;
                                        else {
                                            l = l || d();
                                            var _ = /margin|padding|left|right|width|text|word|letter/i.test(L) || /X$/.test(L) || "x" === L ? "x" : "y";
                                            switch (Q) {
                                                case "%":
                                                    H *= "x" === _ ? l.percentToPxWidth : l.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    H *= l[Q + "ToPx"]
                                            }
                                            switch (B) {
                                                case "%":
                                                    H *= 1 / ("x" === _ ? l.percentToPxWidth : l.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    H *= 1 / l[B + "ToPx"]
                                            }
                                        }
                                    switch ($) {
                                        case "+":
                                            F = H + F;
                                            break;
                                        case "-":
                                            F = H - F;
                                            break;
                                        case "*":
                                            F = H * F;
                                            break;
                                        case "/":
                                            F = H / F
                                    }
                                    s[L] = {
                                        rootPropertyValue: z,
                                        startValue: H,
                                        currentValue: H,
                                        endValue: F,
                                        unitType: B,
                                        easing: q
                                    }, w.debug && console.log("tweensContainer (" + L + "): " + JSON.stringify(s[L]), i)
                                } else
                                    w.debug && console.log("Skipping [" + M + "] due to a lack of browser support.")
                            }
                            s.element = i
                        }
                        s.element && (b.Values.addClass(i, "velocity-animating"), D.push(s), "" === a.queue && (o(i).tweensContainer = s, o(i).opts = a), o(i).isAnimating = !0, k === P - 1 ? (w.State.calls.push([D, m, a, null, j.resolver]), w.State.isTicking === !1 && (w.State.isTicking = !0, c())) : k++)
                    }
                    var l,
                        i = this,
                        a = g.extend({}, w.defaults, x),
                        s = {};
                    switch (o(i) === n && w.init(i), parseFloat(a.delay) && a.queue !== !1 && g.queue(i, a.queue, function (e) {
                        w.velocityQueueEntryFlag = !0, o(i).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(a.delay)),
                            next: e
                        }
                    }), a.duration.toString().toLowerCase()) {
                        case "fast":
                            a.duration = 200;
                            break;
                        case "normal":
                            a.duration = y;
                            break;
                        case "slow":
                            a.duration = 600;
                            break;
                        default:
                            a.duration = parseFloat(a.duration) || 1
                    }
                    w.mock !== !1 && (w.mock === !0 ? a.duration = a.delay = 1 : (a.duration *= parseFloat(w.mock) || 1, a.delay *= parseFloat(w.mock) || 1)), a.easing = u(a.easing, a.duration), a.begin && !h.isFunction(a.begin) && (a.begin = null), a.progress && !h.isFunction(a.progress) && (a.progress = null), a.complete && !h.isFunction(a.complete) && (a.complete = null), a.display !== n && null !== a.display && (a.display = a.display.toString().toLowerCase(), "auto" === a.display && (a.display = w.CSS.Values.getDisplayType(i))), a.visibility !== n && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()), a.mobileHA = a.mobileHA && w.State.isMobile && !w.State.isGingerbread, a.queue === !1 ? a.delay ? setTimeout(e, a.delay) : e() : g.queue(i, a.queue, function (t, r) {
                        return r === !0 ? (j.promise && j.resolver(m), !0) : (w.velocityQueueEntryFlag = !0, void e(t))
                    }), "" !== a.queue && "fx" !== a.queue || "inprogress" === g.queue(i)[0] || g.dequeue(i)
                }
                var l,
                    p,
                    d,
                    m,
                    v,
                    x,
                    s = arguments[0] && (arguments[0].p || g.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties));
                if (h.isWrapped(this) ? (l = !1, d = 0, m = this, p = this) : (l = !0, d = 1, m = s ? arguments[0].elements || arguments[0].e : arguments[0]), m = a(m)) {
                    s ? (v = arguments[0].properties || arguments[0].p, x = arguments[0].options || arguments[0].o) : (v = arguments[d], x = arguments[d + 1]);
                    var P = m.length,
                        k = 0;
                    if (!/^(stop|finish)$/i.test(v) && !g.isPlainObject(x)) {
                        var O = d + 1;
                        x = {};
                        for (var T = O; T < arguments.length; T++)
                            h.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? h.isString(arguments[T]) || h.isArray(arguments[T]) ? x.easing = arguments[T] : h.isFunction(arguments[T]) && (x.complete = arguments[T]) : x.duration = arguments[T]
                    }
                    var j = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    l && w.Promise && (j.promise = new w.Promise(function (e, t) {
                        j.resolver = e, j.rejecter = t
                    }));
                    var C;
                    switch (v) {
                        case "scroll":
                            C = "scroll";
                            break;
                        case "reverse":
                            C = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            g.each(m, function (e, t) {
                                o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer)
                            });
                            var E = [];
                            return g.each(w.State.calls, function (e, t) {
                                t && g.each(t[1], function (r, i) {
                                    var a = x === n ? "" : x;
                                    return a === !0 || t[2].queue === a || x === n && t[2].queue === !1 ? void g.each(m, function (r, n) {
                                        n === i && ((x === !0 || h.isString(x)) && (g.each(g.queue(n, h.isString(x) ? x : ""), function (e, t) {
                                            h.isFunction(t) && t(null, !0)
                                        }), g.queue(n, h.isString(x) ? x : "", [])), "stop" === v ? (o(n) && o(n).tweensContainer && a !== !1 && g.each(o(n).tweensContainer, function (e, t) {
                                            t.endValue = t.currentValue
                                        }), E.push(e)) : "finish" === v && (t[2].duration = 1))
                                    }) : !0
                                })
                            }), "stop" === v && (g.each(E, function (e, t) {
                                f(t, !0)
                            }), j.promise && j.resolver(m)), e();
                        default:
                            if (!g.isPlainObject(v) || h.isEmptyObject(v)) {
                                if (h.isString(v) && w.Redirects[v]) {
                                    var A = g.extend({}, x),
                                        V = A.duration,
                                        X = A.delay || 0;
                                    return A.backwards === !0 && (m = g.extend(!0, [], m).reverse()), g.each(m, function (e, t) {
                                        parseFloat(A.stagger) ? A.delay = X + parseFloat(A.stagger) * e : h.isFunction(A.stagger) && (A.delay = X + A.stagger.call(t, e, P)), A.drag && (A.duration = parseFloat(V) || (/^(callout|transition)/.test(v) ? 1e3 : y), A.duration = Math.max(A.duration * (A.backwards ? 1 - e / P : (e + 1) / P), .75 * A.duration, 200)), w.Redirects[v].call(t, t, A || {}, e, P, m, j.promise ? j : n)
                                    }), e()
                                }
                                var I = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return j.promise ? j.rejecter(new Error(I)) : console.log(I), e()
                            }
                            C = "start"
                    }
                    var Y = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        D = [];
                    g.each(m, function (e, t) {
                        h.isNode(t) && i.call(t)
                    });
                    var L,
                        A = g.extend({}, w.defaults, x);
                    if (A.loop = parseInt(A.loop), L = 2 * A.loop - 1, A.loop)
                        for (var R = 0; L > R; R++) {
                            var F = {
                                delay: A.delay,
                                progress: A.progress
                            };
                            R === L - 1 && (F.display = A.display, F.visibility = A.visibility, F.complete = A.complete), S(m, "reverse", F)
                        }
                    return e()
                }
            };
            w = g.extend(S, w), w.animate = S;
            var P = t.requestAnimationFrame || d;
            return w.State.isMobile || r.hidden === n || r.addEventListener("visibilitychange", function () {
                r.hidden ? (P = function (e) {
                    return setTimeout(function () {
                        e(!0)
                    }, 16)
                }, c()) : P = t.requestAnimationFrame || d
            }), e.Velocity = w, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = w.defaults), g.each(["Down", "Up"], function (e, t) {
                w.Redirects["slide" + t] = function (e, r, i, a, o, s) {
                    var l = g.extend({}, r),
                        u = l.begin,
                        c = l.complete,
                        f = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        p = {};
                    l.display === n && (l.display = "Down" === t ? "inline" === w.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                        u && u.call(o, o);
                        for (var r in f) {
                            p[r] = e.style[r];
                            var n = w.CSS.getPropertyValue(e, r);
                            f[r] = "Down" === t ? [n, 0] : [0, n]
                        }
                        p.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function () {
                        for (var t in p)
                            e.style[t] = p[t];
                        c && c.call(o, o), s && s.resolver(o)
                    }, w(e, f, l)
                }
            }), g.each(["In", "Out"], function (e, t) {
                w.Redirects["fade" + t] = function (e, r, i, a, o, s) {
                    var l = g.extend({}, r),
                        u = {
                            opacity: "In" === t ? 1 : 0
                        },
                        c = l.complete;
                    l.complete = i !== a - 1 ? l.begin = null : function () {
                        c && c.call(o, o), s && s.resolver(o)
                    }, l.display === n && (l.display = "In" === t ? "auto" : "none"), w(this, u, l)
                }
            }), w
        }(window.jQuery || window.Zepto || window, window, document)
    }), ! function (e) {
        "function" == typeof require && "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["velocity"], e) : e()
    }(function () {
        return function (e, t, r, n) {
            function i(e, t) {
                var r = [];
                return e && t ? (o.each([e, t], function (e, t) {
                    var n = [];
                    o.each(t, function (e, t) {
                        for (; t.toString().length < 5;)
                            t = "0" + t;
                        n.push(t)
                    }), r.push(n.join(""))
                }), parseFloat(r[0]) > parseFloat(r[1])) : !1
            }
            if (!e.Velocity || !e.Velocity.Utilities)
                return void(t.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
            var a = e.Velocity,
                o = a.Utilities,
                s = a.version,
                l = {
                    major: 1,
                    minor: 1,
                    patch: 0
                };
            if (i(l, s)) {
                var u = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
                throw alert(u), new Error(u)
            }
            a.RegisterEffect = a.RegisterUI = function (e, t) {
                function r(e, t, r, n) {
                    var s,
                        i = 0;
                    o.each(e.nodeType ? [e] : e, function (e, t) {
                        n && (r += e * n), s = t.parentNode, o.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function (e, r) {
                            i += parseFloat(a.CSS.getPropertyValue(t, r))
                        })
                    }), a.animate(s, {
                        height: ("In" === t ? "+" : "-") + "=" + i
                    }, {
                        queue: !1,
                        easing: "ease-in-out",
                        duration: r * ("In" === t ? .6 : 1)
                    })
                }
                return a.Redirects[e] = function (i, s, l, u, c, f) {
                    function p() {
                        s.display !== n && "none" !== s.display || !/Out$/.test(e) || o.each(c.nodeType ? [c] : c, function (e, t) {
                            a.CSS.setPropertyValue(t, "display", "none")
                        }), s.complete && s.complete.call(c, c), f && f.resolver(c || i)
                    }
                    var d = l === u - 1;
                    t.defaultDuration = "function" == typeof t.defaultDuration ? t.defaultDuration.call(c, c) : parseFloat(t.defaultDuration);
                    for (var h = 0; h < t.calls.length; h++) {
                        var g = t.calls[h],
                            m = g[0],
                            y = s.duration || t.defaultDuration || 1e3,
                            v = g[1],
                            w = g[2] || {},
                            x = {};
                        if (x.duration = y * (v || 1), x.queue = s.queue || "", x.easing = w.easing || "ease", x.delay = parseFloat(w.delay) || 0, x._cacheValues = w._cacheValues || !0, 0 === h) {
                            if (x.delay += parseFloat(s.delay) || 0, 0 === l && (x.begin = function () {
                                    s.begin && s.begin.call(c, c);
                                    var t = e.match(/(In|Out)$/);
                                    t && "In" === t[0] && m.opacity !== n && o.each(c.nodeType ? [c] : c, function (e, t) {
                                        a.CSS.setPropertyValue(t, "opacity", 0)
                                    }), s.animateParentHeight && t && r(c, t[0], y + x.delay, s.stagger)
                                }), null !== s.display)
                                if (s.display !== n && "none" !== s.display)
                                    x.display = s.display;
                                else if (/In$/.test(e)) {
                                var b = a.CSS.Values.getDisplayType(i);
                                x.display = "inline" === b ? "inline-block" : b
                            }
                            s.visibility && "hidden" !== s.visibility && (x.visibility = s.visibility)
                        }
                        h === t.calls.length - 1 && (x.complete = function () {
                            if (t.reset) {
                                for (var e in t.reset) {
                                    var r = t.reset[e];
                                    a.CSS.Hooks.registered[e] !== n || "string" != typeof r && "number" != typeof r || (t.reset[e] = [t.reset[e], t.reset[e]])
                                }
                                var o = {
                                    duration: 0,
                                    queue: !1
                                };
                                d && (o.complete = p), a.animate(i, t.reset, o)
                            } else
                                d && p()
                        }, "hidden" === s.visibility && (x.visibility = s.visibility)), a.animate(i, m, x)
                    }
                }, a
            }, a.RegisterEffect.packagedEffects = {
                "callout.bounce": {
                    defaultDuration: 550,
                    calls: [
                        [{
                            translateY: -30
                        }, .25],
                        [{
                            translateY: 0
                        }, .125],
                        [{
                            translateY: -15
                        }, .125],
                        [{
                            translateY: 0
                        }, .25]
                    ]
                },
                "callout.shake": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 11
                        }, .125],
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 11
                        }, .125],
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 11
                        }, .125],
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 0
                        }, .125]
                    ]
                },
                "callout.flash": {
                    defaultDuration: 1100,
                    calls: [
                        [{
                            opacity: [0, "easeInOutQuad", 1]
                        }, .25],
                        [{
                            opacity: [1, "easeInOutQuad"]
                        }, .25],
                        [{
                            opacity: [0, "easeInOutQuad"]
                        }, .25],
                        [{
                            opacity: [1, "easeInOutQuad"]
                        }, .25]
                    ]
                },
                "callout.pulse": {
                    defaultDuration: 825,
                    calls: [
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1
                        }, .5, {
                            easing: "easeInExpo"
                        }],
                        [{
                            scaleX: 1,
                            scaleY: 1
                        }, .5]
                    ]
                },
                "callout.swing": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            rotateZ: 15
                        }, .2],
                        [{
                            rotateZ: -10
                        }, .2],
                        [{
                            rotateZ: 5
                        }, .2],
                        [{
                            rotateZ: -5
                        }, .2],
                        [{
                            rotateZ: 0
                        }, .2]
                    ]
                },
                "callout.tada": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            scaleX: .9,
                            scaleY: .9,
                            rotateZ: -3
                        }, .1],
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1,
                            rotateZ: 3
                        }, .1],
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1,
                            rotateZ: -3
                        }, .1],
                        ["reverse", .125],
                        ["reverse", .125],
                        ["reverse", .125],
                        ["reverse", .125],
                        ["reverse", .125],
                        [{
                            scaleX: 1,
                            scaleY: 1,
                            rotateZ: 0
                        }, .2]
                    ]
                },
                "transition.fadeIn": {
                    defaultDuration: 500,
                    calls: [
                        [{
                            opacity: [1, 0]
                        }]
                    ]
                },
                "transition.fadeOut": {
                    defaultDuration: 500,
                    calls: [
                        [{
                            opacity: [0, 1]
                        }]
                    ]
                },
                "transition.flipXIn": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            rotateY: [0, -55]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipXOut": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            rotateY: 55
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateY: 0
                    }
                },
                "transition.flipYIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            rotateX: [0, -45]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipYOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            rotateX: 25
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateX: 0
                    }
                },
                "transition.flipBounceXIn": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [.725, 0],
                            transformPerspective: [400, 400],
                            rotateY: [-10, 90]
                        }, .5],
                        [{
                            opacity: .8,
                            rotateY: 10
                        }, .25],
                        [{
                            opacity: 1,
                            rotateY: 0
                        }, .25]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipBounceXOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [.9, 1],
                            transformPerspective: [400, 400],
                            rotateY: -10
                        }, .5],
                        [{
                            opacity: 0,
                            rotateY: 90
                        }, .5]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateY: 0
                    }
                },
                "transition.flipBounceYIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [.725, 0],
                            transformPerspective: [400, 400],
                            rotateX: [-10, 90]
                        }, .5],
                        [{
                            opacity: .8,
                            rotateX: 10
                        }, .25],
                        [{
                            opacity: 1,
                            rotateX: 0
                        }, .25]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipBounceYOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [.9, 1],
                            transformPerspective: [400, 400],
                            rotateX: -15
                        }, .5],
                        [{
                            opacity: 0,
                            rotateX: 90
                        }, .5]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateX: 0
                    }
                },
                "transition.swoopIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["100%", "50%"],
                            transformOriginY: ["100%", "100%"],
                            scaleX: [1, 0],
                            scaleY: [1, 0],
                            translateX: [0, -700],
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.swoopOut": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformOriginX: ["50%", "100%"],
                            transformOriginY: ["100%", "100%"],
                            scaleX: 0,
                            scaleY: 0,
                            translateX: -700,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        scaleX: 1,
                        scaleY: 1,
                        translateX: 0
                    }
                },
                "transition.whirlIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: [1, 0],
                            scaleY: [1, 0],
                            rotateY: [0, 160]
                        }, 1, {
                            easing: "easeInOutSine"
                        }]
                    ]
                },
                "transition.whirlOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [0, "easeInOutQuint", 1],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: 0,
                            scaleY: 0,
                            rotateY: 160
                        }, 1, {
                            easing: "swing"
                        }]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1,
                        rotateY: 0
                    }
                },
                "transition.shrinkIn": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: [1, 1.5],
                            scaleY: [1, 1.5],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.shrinkOut": {
                    defaultDuration: 600,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: 1.3,
                            scaleY: 1.3,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.expandIn": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: [1, .625],
                            scaleY: [1, .625],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.expandOut": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: .5,
                            scaleY: .5,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.bounceIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            scaleX: [1.05, .3],
                            scaleY: [1.05, .3]
                        }, .4],
                        [{
                            scaleX: .9,
                            scaleY: .9,
                            translateZ: 0
                        }, .2],
                        [{
                            scaleX: 1,
                            scaleY: 1
                        }, .5]
                    ]
                },
                "transition.bounceOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            scaleX: .95,
                            scaleY: .95
                        }, .35],
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1,
                            translateZ: 0
                        }, .35],
                        [{
                            opacity: [0, 1],
                            scaleX: .3,
                            scaleY: .3
                        }, .3]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.bounceUpIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [-30, 1e3]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateY: 10
                        }, .2],
                        [{
                            translateY: 0
                        }, .2]
                    ]
                },
                "transition.bounceUpOut": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            translateY: 20
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateY: -1e3
                        }, .8]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.bounceDownIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [30, -1e3]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateY: -10
                        }, .2],
                        [{
                            translateY: 0
                        }, .2]
                    ]
                },
                "transition.bounceDownOut": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            translateY: -20
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateY: 1e3
                        }, .8]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.bounceLeftIn": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [30, -1250]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateX: -10
                        }, .2],
                        [{
                            translateX: 0
                        }, .2]
                    ]
                },
                "transition.bounceLeftOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            translateX: 30
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateX: -1250
                        }, .8]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.bounceRightIn": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [-30, 1250]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateX: 10
                        }, .2],
                        [{
                            translateX: 0
                        }, .2]
                    ]
                },
                "transition.bounceRightOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            translateX: -30
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateX: 1250
                        }, .8]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideUpIn": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, 20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideUpOut": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: -20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideDownIn": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, -20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideDownOut": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: 20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideLeftIn": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, -20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideLeftOut": {
                    defaultDuration: 1050,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: -20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideRightIn": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, 20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideRightOut": {
                    defaultDuration: 1050,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: 20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideUpBigIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, 75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideUpBigOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: -75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideDownBigIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, -75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideDownBigOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: 75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideLeftBigIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, -75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideLeftBigOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: -75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideRightBigIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, 75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideRightBigOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: 75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.perspectiveUpIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: ["100%", "100%"],
                            rotateX: [0, -180]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveUpOut": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: ["100%", "100%"],
                            rotateX: -180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateX: 0
                    }
                },
                "transition.perspectiveDownIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateX: [0, 180]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveDownOut": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateX: 180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateX: 0
                    }
                },
                "transition.perspectiveLeftIn": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateY: [0, -180]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveLeftOut": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateY: -180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateY: 0
                    }
                },
                "transition.perspectiveRightIn": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: ["100%", "100%"],
                            transformOriginY: [0, 0],
                            rotateY: [0, 180]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveRightOut": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: ["100%", "100%"],
                            transformOriginY: [0, 0],
                            rotateY: 180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateY: 0
                    }
                }
            };
            for (var c in a.RegisterEffect.packagedEffects)
                a.RegisterEffect(c, a.RegisterEffect.packagedEffects[c]);
            a.RunSequence = function (e) {
                var t = o.extend(!0, [], e);
                t.length > 1 && (o.each(t.reverse(), function (e, r) {
                    var n = t[e + 1];
                    if (n) {
                        var i = r.o || r.options,
                            s = n.o || n.options,
                            l = i && i.sequenceQueue === !1 ? "begin" : "complete",
                            u = s && s[l],
                            c = {};
                        c[l] = function () {
                            var e = n.e || n.elements,
                                t = e.nodeType ? [e] : e;
                            u && u.call(t, t), a(r)
                        }, n.o ? n.o = o.extend({}, s, c) : n.options = o.extend({}, s, c)
                    }
                }), t.reverse()), a(t[0])
            }
        }(window.jQuery || window.Zepto || window, window, document)
    }),
    function (e) {
        function t(t, n, i) {
            var a = this;
            return this.on("click.pjax", t, function (t) {
                var o = e.extend({}, v(n, i));
                o.container || (o.container = e(this).attr("data-pjax") || a), r(t, o)
            })
        }

        function r(t, r, n) {
            n = v(r, n);
            var a = t.currentTarget;
            if ("A" !== a.tagName.toUpperCase())
                throw "$.fn.pjax or $.pjax.click requires an anchor element";
            if (!(t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || location.protocol !== a.protocol || location.hostname !== a.hostname || a.href.indexOf("#") > -1 && y(a) == y(location) || t.isDefaultPrevented())) {
                var o = {
                        url: a.href,
                        container: e(a).attr("data-pjax"),
                        target: a
                    },
                    s = e.extend({}, o, n),
                    l = e.Event("pjax:click");
                e(a).trigger(l, [s]), l.isDefaultPrevented() || (i(s), t.preventDefault(), e(a).trigger("pjax:clicked", [s]))
            }
        }

        function n(t, r, n) {
            n = v(r, n);
            var a = t.currentTarget;
            if ("FORM" !== a.tagName.toUpperCase())
                throw "$.pjax.submit requires a form element";
            var o = {
                type: a.method.toUpperCase(),
                url: a.action,
                container: e(a).attr("data-pjax"),
                target: a
            };
            if ("GET" !== o.type && void 0 !== window.FormData)
                o.data = new FormData(a), o.processData = !1, o.contentType = !1;
            else {
                if (e(a).find(":file").length)
                    return;
                o.data = e(a).serializeArray()
            }
            i(e.extend({}, o, n)), t.preventDefault()
        }

        function i(t) {
            function s(t, n, i) {
                i || (i = {}), i.relatedTarget = r;
                var o = e.Event(t, i);
                return a.trigger(o, n), !o.isDefaultPrevented()
            }
            t = e.extend(!0, {}, e.ajaxSettings, i.defaults, t), e.isFunction(t.url) && (t.url = t.url());
            var r = t.target,
                n = m(t.url).hash,
                a = t.context = w(t.container);
            t.data || (t.data = {}), e.isArray(t.data) ? t.data.push({
                name: "_pjax",
                value: a.selector
            }) : t.data._pjax = a.selector;
            var l;
            t.beforeSend = function (e, r) {
                if ("GET" !== r.type && (r.timeout = 0), e.setRequestHeader("X-PJAX", "true"), e.setRequestHeader("X-PJAX-Container", a.selector), !s("pjax:beforeSend", [e, r]))
                    return !1;
                r.timeout > 0 && (l = setTimeout(function () {
                    s("pjax:timeout", [e, t]) && e.abort("timeout")
                }, r.timeout), r.timeout = 0);
                var i = m(r.url);
                n && (i.hash = n), t.requestUrl = g(i)
            }, t.complete = function (e, r) {
                l && clearTimeout(l), s("pjax:complete", [e, r, t]), s("pjax:end", [e, t])
            }, t.error = function (e, r, n) {
                var i = S("", e, t),
                    a = s("pjax:error", [e, r, n, t]);
                "GET" == t.type && "abort" !== r && a && o(i.url)
            }, t.success = function (r, l, u) {
                var c = i.state,
                    f = "function" == typeof e.pjax.defaults.version ? e.pjax.defaults.version() : e.pjax.defaults.version,
                    p = u.getResponseHeader("X-PJAX-Version"),
                    h = S(r, u, t),
                    g = m(h.url);
                if (n && (g.hash = n, h.url = g.href), f && p && f !== p)
                    return void o(h.url);
                if (!h.contents)
                    return void o(h.url);
                i.state = {
                    id: t.id || d(),
                    url: h.url,
                    title: h.title,
                    container: a.selector,
                    fragment: t.fragment,
                    timeout: t.timeout
                }, (t.push || t.replace) && window.history.replaceState(i.state, h.title, h.url);
                try {
                    document.activeElement.blur()
                } catch (y) {}
                h.title && (document.title = h.title), s("pjax:beforeReplace", [h.contents, t], {
                    state: i.state,
                    previousState: c
                }), a.html(h.contents);
                var v = a.find("input[autofocus], textarea[autofocus]").last()[0];
                v && document.activeElement !== v && v.focus(), P(h.scripts);
                var w = t.scrollTo;
                if (n) {
                    var x = decodeURIComponent(n.slice(1)),
                        b = document.getElementById(x) || document.getElementsByName(x)[0];
                    b && (w = e(b).offset().top)
                }
                "number" == typeof w && e(window).scrollTop(w), s("pjax:success", [r, l, u, t])
            }, i.state || (i.state = {
                id: d(),
                url: window.location.href,
                title: document.title,
                container: a.selector,
                fragment: t.fragment,
                timeout: t.timeout
            }, window.history.replaceState(i.state, document.title)), p(i.xhr), i.options = t;
            var u = i.xhr = e.ajax(t);
            return u.readyState > 0 && (t.push && !t.replace && (j(i.state.id, h(a)), window.history.pushState(null, "", t.requestUrl)), s("pjax:start", [u, t]), s("pjax:send", [u, t])), i.xhr
        }

        function a(t, r) {
            var n = {
                url: window.location.href,
                push: !1,
                replace: !0,
                scrollTo: !1
            };
            return i(e.extend(n, v(t, r)))
        }

        function o(e) {
            window.history.replaceState(null, "", i.state.url), window.location.replace(e)
        }

        function c(t) {
            s || p(i.xhr);
            var a,
                r = i.state,
                n = t.state;
            if (n && n.container) {
                if (s && l == n.url)
                    return;
                if (r) {
                    if (r.id === n.id)
                        return;
                    a = r.id < n.id ? "forward" : "back"
                }
                var u = k[n.id] || [],
                    c = e(u[0] || n.container),
                    f = u[1];
                if (c.length) {
                    r && C(a, r.id, h(c));
                    var d = e.Event("pjax:popstate", {
                        state: n,
                        direction: a
                    });
                    c.trigger(d);
                    var g = {
                        id: n.id,
                        url: n.url,
                        container: c,
                        push: !1,
                        fragment: n.fragment,
                        timeout: n.timeout,
                        scrollTo: !1
                    };
                    if (f) {
                        c.trigger("pjax:start", [null, g]), i.state = n, n.title && (document.title = n.title);
                        var m = e.Event("pjax:beforeReplace", {
                            state: n,
                            previousState: r
                        });
                        c.trigger(m, [f, g]), c.html(f), c.trigger("pjax:end", [null, g])
                    } else
                        i(g);
                    c[0].offsetHeight
                } else
                    o(location.href)
            }
            s = !1
        }

        function f(t) {
            var r = e.isFunction(t.url) ? t.url() : t.url,
                n = t.type ? t.type.toUpperCase() : "GET",
                i = e("<form>", {
                    method: "GET" === n ? "GET" : "POST",
                    action: r,
                    style: "display:none"
                });
            "GET" !== n && "POST" !== n && i.append(e("<input>", {
                type: "hidden",
                name: "_method",
                value: n.toLowerCase()
            }));
            var a = t.data;
            if ("string" == typeof a)
                e.each(a.split("&"), function (t, r) {
                    var n = r.split("=");
                    i.append(e("<input>", {
                        type: "hidden",
                        name: n[0],
                        value: n[1]
                    }))
                });
            else if (e.isArray(a))
                e.each(a, function (t, r) {
                    i.append(e("<input>", {
                        type: "hidden",
                        name: r.name,
                        value: r.value
                    }))
                });
            else if ("object" == typeof a) {
                var o;
                for (o in a)
                    i.append(e("<input>", {
                        type: "hidden",
                        name: o,
                        value: a[o]
                    }))
            }
            e(document.body).append(i), i.submit()
        }

        function p(t) {
            t && t.readyState < 4 && (t.onreadystatechange = e.noop, t.abort())
        }

        function d() {
            return (new Date).getTime()
        }

        function h(e) {
            var t = e.clone();
            return t.find("script").each(function () {
                this.src || jQuery._data(this, "globalEval", !1)
            }), [e.selector, t.contents()]
        }

        function g(e) {
            return e.search = e.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""), e.href.replace(/\?($|#)/, "$1")
        }

        function m(e) {
            var t = document.createElement("a");
            return t.href = e, t
        }

        function y(e) {
            return e.href.replace(/#.*/, "")
        }

        function v(t, r) {
            return t && r ? r.container = t : r = e.isPlainObject(t) ? t : {
                container: t
            }, r.container && (r.container = w(r.container)), r
        }

        function w(t) {
            if (t = e(t), t.length) {
                if ("" !== t.selector && t.context === document)
                    return t;
                if (t.attr("id"))
                    return e("#" + t.attr("id"));
                throw "cant get selector for pjax container!"
            }
            throw "no pjax container for " + t.selector
        }

        function x(e, t) {
            return e.filter(t).add(e.find(t))
        }

        function b(t) {
            return e.parseHTML(t, document, !0)
        }

        function S(t, r, n) {
            var i = {},
                a = /<html/i.test(t),
                o = r.getResponseHeader("X-PJAX-URL");
            if (i.url = o ? g(m(o)) : n.requestUrl, a)
                var s = e(b(t.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),
                    l = e(b(t.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
            else
                var s = l = e(b(t));
            if (0 === l.length)
                return i;
            if (i.title = x(s, "title").last().text(), n.fragment) {
                if ("body" === n.fragment)
                    var u = l;
                else
                    var u = x(l, n.fragment).first();
                u.length && (i.contents = "body" === n.fragment ? u : u.contents(), i.title || (i.title = u.attr("title") || u.data("title")))
            } else
                a || (i.contents = l);
            return i.contents && (i.contents = i.contents.not(function () {
                return e(this).is("title")
            }), i.contents.find("title").remove(), i.scripts = x(i.contents, "script[src]").remove(), i.contents = i.contents.not(i.scripts)), i.title && (i.title = e.trim(i.title)), i
        }

        function P(t) {
            if (t) {
                var r = e("script[src]");
                t.each(function () {
                    var t = this.src,
                        n = r.filter(function () {
                            return this.src === t
                        });
                    if (!n.length) {
                        var i = document.createElement("script"),
                            a = e(this).attr("type");
                        a && (i.type = a), i.src = e(this).attr("src"), document.head.appendChild(i)
                    }
                })
            }
        }

        function j(e, t) {
            k[e] = t, T.push(e), E(O, 0), E(T, i.defaults.maxCacheLength)
        }

        function C(e, t, r) {
            var n,
                a;
            k[t] = r, "forward" === e ? (n = T, a = O) : (n = O, a = T), n.push(t), (t = a.pop()) && delete k[t], E(n, i.defaults.maxCacheLength)
        }

        function E(e, t) {
            for (; e.length > t;)
                delete k[e.shift()]
        }

        function A() {
            return e("meta").filter(function () {
                var t = e(this).attr("http-equiv");
                return t && "X-PJAX-VERSION" === t.toUpperCase()
            }).attr("content")
        }

        function V() {
            e.fn.pjax = t, e.pjax = i, e.pjax.enable = e.noop, e.pjax.disable = X, e.pjax.click = r, e.pjax.submit = n, e.pjax.reload = a, e.pjax.defaults = {
                timeout: 650,
                push: !0,
                replace: !1,
                type: "GET",
                dataType: "html",
                scrollTo: 0,
                maxCacheLength: 20,
                version: A
            }, e(window).on("popstate.pjax", c)
        }

        function X() {
            e.fn.pjax = function () {
                return this
            }, e.pjax = f, e.pjax.enable = V, e.pjax.disable = e.noop, e.pjax.click = e.noop, e.pjax.submit = e.noop, e.pjax.reload = function () {
                window.location.reload()
            }, e(window).off("popstate.pjax", c)
        }
        var s = !0,
            l = window.location.href,
            u = window.history.state;
        u && u.container && (i.state = u), "state" in window.history && (s = !1);
        var k = {},
            O = [],
            T = [];
        e.inArray("state", e.event.props) < 0 && e.event.props.push("state"), e.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/), e.support.pjax ? V() : X()
    }(jQuery);;
(function () {
    'use strict';

    function FastClick(layer, options) {
        var oldOnClick;
        options = options || {};
        this.trackingClick = false;
        this.trackingClickStart = 0;
        this.targetElement = null;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.lastTouchIdentifier = 0;
        this.touchBoundary = options.touchBoundary || 10;
        this.layer = layer;
        this.tapDelay = options.tapDelay || 200;
        this.tapTimeout = options.tapTimeout || 700;
        if (FastClick.notNeeded(layer)) {
            return;
        }

        function bind(method, context) {
            return function () {
                return method.apply(context, arguments);
            };
        }
        var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
        var context = this;
        for (var i = 0, l = methods.length; i < l; i++) {
            context[methods[i]] = bind(context[methods[i]], context);
        }
        if (deviceIsAndroid) {
            layer.addEventListener('mouseover', this.onMouse, true);
            layer.addEventListener('mousedown', this.onMouse, true);
            layer.addEventListener('mouseup', this.onMouse, true);
        }
        layer.addEventListener('click', this.onClick, true);
        layer.addEventListener('touchstart', this.onTouchStart, false);
        layer.addEventListener('touchmove', this.onTouchMove, false);
        layer.addEventListener('touchend', this.onTouchEnd, false);
        layer.addEventListener('touchcancel', this.onTouchCancel, false);
        if (!Event.prototype.stopImmediatePropagation) {
            layer.removeEventListener = function (type, callback, capture) {
                var rmv = Node.prototype.removeEventListener;
                if (type === 'click') {
                    rmv.call(layer, type, callback.hijacked || callback, capture);
                } else {
                    rmv.call(layer, type, callback, capture);
                }
            };
            layer.addEventListener = function (type, callback, capture) {
                var adv = Node.prototype.addEventListener;
                if (type === 'click') {
                    adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
                        if (!event.propagationStopped) {
                            callback(event);
                        }
                    }), capture);
                } else {
                    adv.call(layer, type, callback, capture);
                }
            };
        }
        if (typeof layer.onclick === 'function') {
            oldOnClick = layer.onclick;
            layer.addEventListener('click', function (event) {
                oldOnClick(event);
            }, false);
            layer.onclick = null;
        }
    }
    var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
    var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
    var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
    var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);
    var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);
    var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
    FastClick.prototype.needsClick = function (target) {
        switch (target.nodeName.toLowerCase()) {
            case 'button':
            case 'select':
            case 'textarea':
                if (target.disabled) {
                    return true;
                }
                break;
            case 'input':
                if ((deviceIsIOS && target.type === 'file') || target.disabled) {
                    return true;
                }
                break;
            case 'label':
            case 'iframe':
            case 'video':
                return true;
        }
        return (/\bneedsclick\b/).test(target.className);
    };
    FastClick.prototype.needsFocus = function (target) {
        switch (target.nodeName.toLowerCase()) {
            case 'textarea':
                return true;
            case 'select':
                return !deviceIsAndroid;
            case 'input':
                switch (target.type) {
                    case 'button':
                    case 'checkbox':
                    case 'file':
                    case 'image':
                    case 'radio':
                    case 'submit':
                        return false;
                }
                return !target.disabled && !target.readOnly;
            default:
                return (/\bneedsfocus\b/).test(target.className);
        }
    };
    FastClick.prototype.sendClick = function (targetElement, event) {
        var clickEvent,
            touch;
        if (document.activeElement && document.activeElement !== targetElement) {
            document.activeElement.blur();
        }
        touch = event.changedTouches[0];
        clickEvent = document.createEvent('MouseEvents');
        clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
        clickEvent.forwardedTouchEvent = true;
        targetElement.dispatchEvent(clickEvent);
    };
    FastClick.prototype.determineEventType = function (targetElement) {
        if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
            return 'mousedown';
        }
        return 'click';
    };
    FastClick.prototype.focus = function (targetElement) {
        var length;
        if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
            length = targetElement.value.length;
            targetElement.setSelectionRange(length, length);
        } else {
            targetElement.focus();
        }
    };
    FastClick.prototype.updateScrollParent = function (targetElement) {
        var scrollParent,
            parentElement;
        scrollParent = targetElement.fastClickScrollParent;
        if (!scrollParent || !scrollParent.contains(targetElement)) {
            parentElement = targetElement;
            do {
                if (parentElement.scrollHeight > parentElement.offsetHeight) {
                    scrollParent = parentElement;
                    targetElement.fastClickScrollParent = parentElement;
                    break;
                }
                parentElement = parentElement.parentElement;
            } while (parentElement);
        }
        if (scrollParent) {
            scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
        }
    };
    FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
        if (eventTarget.nodeType === Node.TEXT_NODE) {
            return eventTarget.parentNode;
        }
        return eventTarget;
    };
    FastClick.prototype.onTouchStart = function (event) {
        var targetElement,
            touch,
            selection;
        if (event.targetTouches.length > 1) {
            return true;
        }
        targetElement = this.getTargetElementFromEventTarget(event.target);
        touch = event.targetTouches[0];
        if (deviceIsIOS) {
            selection = window.getSelection();
            if (selection.rangeCount && !selection.isCollapsed) {
                return true;
            }
            if (!deviceIsIOS4) {
                if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
                    event.preventDefault();
                    return false;
                }
                this.lastTouchIdentifier = touch.identifier;
                this.updateScrollParent(targetElement);
            }
        }
        this.trackingClick = true;
        this.trackingClickStart = event.timeStamp;
        this.targetElement = targetElement;
        this.touchStartX = touch.pageX;
        this.touchStartY = touch.pageY;
        if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
            event.preventDefault();
        }
        return true;
    };
    FastClick.prototype.touchHasMoved = function (event) {
        var touch = event.changedTouches[0],
            boundary = this.touchBoundary;
        if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
            return true;
        }
        return false;
    };
    FastClick.prototype.onTouchMove = function (event) {
        if (!this.trackingClick) {
            return true;
        }
        if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
            this.trackingClick = false;
            this.targetElement = null;
        }
        return true;
    };
    FastClick.prototype.findControl = function (labelElement) {
        if (labelElement.control !== undefined) {
            return labelElement.control;
        }
        if (labelElement.htmlFor) {
            return document.getElementById(labelElement.htmlFor);
        }
        return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
    };
    FastClick.prototype.onTouchEnd = function (event) {
        var forElement,
            trackingClickStart,
            targetTagName,
            scrollParent,
            touch,
            targetElement = this.targetElement;
        if (!this.trackingClick) {
            return true;
        }
        if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
            this.cancelNextClick = true;
            return true;
        }
        if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
            return true;
        }
        this.cancelNextClick = false;
        this.lastClickTime = event.timeStamp;
        trackingClickStart = this.trackingClickStart;
        this.trackingClick = false;
        this.trackingClickStart = 0;
        if (deviceIsIOSWithBadTarget) {
            touch = event.changedTouches[0];
            targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
            targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
        }
        targetTagName = targetElement.tagName.toLowerCase();
        if (targetTagName === 'label') {
            forElement = this.findControl(targetElement);
            if (forElement) {
                this.focus(targetElement);
                if (deviceIsAndroid) {
                    return false;
                }
                targetElement = forElement;
            }
        } else if (this.needsFocus(targetElement)) {
            if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
                this.targetElement = null;
                return false;
            }
            this.focus(targetElement);
            this.sendClick(targetElement, event);
            if (!deviceIsIOS || targetTagName !== 'select') {
                this.targetElement = null;
                event.preventDefault();
            }
            return false;
        }
        if (deviceIsIOS && !deviceIsIOS4) {
            scrollParent = targetElement.fastClickScrollParent;
            if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
                return true;
            }
        }
        if (!this.needsClick(targetElement)) {
            event.preventDefault();
            this.sendClick(targetElement, event);
        }
        return false;
    };
    FastClick.prototype.onTouchCancel = function () {
        this.trackingClick = false;
        this.targetElement = null;
    };
    FastClick.prototype.onMouse = function (event) {
        if (!this.targetElement) {
            return true;
        }
        if (event.forwardedTouchEvent) {
            return true;
        }
        if (!event.cancelable) {
            return true;
        }
        if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
            if (event.stopImmediatePropagation) {
                event.stopImmediatePropagation();
            } else {
                event.propagationStopped = true;
            }
            event.stopPropagation();
            event.preventDefault();
            return false;
        }
        return true;
    };
    FastClick.prototype.onClick = function (event) {
        var permitted;
        if (this.trackingClick) {
            this.targetElement = null;
            this.trackingClick = false;
            return true;
        }
        if (event.target.type === 'submit' && event.detail === 0) {
            return true;
        }
        permitted = this.onMouse(event);
        if (!permitted) {
            this.targetElement = null;
        }
        return permitted;
    };
    FastClick.prototype.destroy = function () {
        var layer = this.layer;
        if (deviceIsAndroid) {
            layer.removeEventListener('mouseover', this.onMouse, true);
            layer.removeEventListener('mousedown', this.onMouse, true);
            layer.removeEventListener('mouseup', this.onMouse, true);
        }
        layer.removeEventListener('click', this.onClick, true);
        layer.removeEventListener('touchstart', this.onTouchStart, false);
        layer.removeEventListener('touchmove', this.onTouchMove, false);
        layer.removeEventListener('touchend', this.onTouchEnd, false);
        layer.removeEventListener('touchcancel', this.onTouchCancel, false);
    };
    FastClick.notNeeded = function (layer) {
        var metaViewport;
        var chromeVersion;
        var blackberryVersion;
        var firefoxVersion;
        if (typeof window.ontouchstart === 'undefined') {
            return true;
        }
        chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (chromeVersion) {
            if (deviceIsAndroid) {
                metaViewport = document.querySelector('meta[name=viewport]');
                if (metaViewport) {
                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                        return true;
                    }
                    if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }
            } else {
                return true;
            }
        }
        if (deviceIsBlackBerry10) {
            blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
            if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
                metaViewport = document.querySelector('meta[name=viewport]');
                if (metaViewport) {
                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                        return true;
                    }
                    if (document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }
            }
        }
        if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
            return true;
        }
        firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (firefoxVersion >= 27) {
            metaViewport = document.querySelector('meta[name=viewport]');
            if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
                return true;
            }
        }
        if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
            return true;
        }
        return false;
    };
    FastClick.attach = function (layer, options) {
        return new FastClick(layer, options);
    };
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(function () {
            return FastClick;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = FastClick.attach;
        module.exports.FastClick = FastClick;
    } else {
        window.FastClick = FastClick;
    }
}());
/*! jquery.finger - v0.1.2 - 2014-10-01
 * https://github.com/ngryman/jquery.finger
 * Copyright (c) 2014 Nicolas Gryman; Licensed MIT */
(function (e, t) {
    var b = /chrome/i.exec(t),
        x = /android/i.exec(t),
        w = "ontouchstart" in window && !(b && !x),
        q = w ? "touchstart" : "mousedown",
        u = w ? "touchend touchcancel" : "mouseup mouseleave",
        c = w ? "touchmove" : "mousemove",
        m = "finger",
        j = e("html")[0],
        f = {},
        r = {},
        p,
        d,
        v,
        k,
        o,
        h,
        a = e.Finger = {
            pressDuration: 300,
            doubleTapInterval: 300,
            flickDuration: 150,
            motionThreshold: 5
        };

    function i(z) {
        z.preventDefault();
        e.event.remove(j, "click", i)
    }

    function g(A, z) {
        return (w ? z.originalEvent.touches[0] : z)["page" + A.toUpperCase()]
    }

    function n(B, C, z) {
        var A = e.Event(C, r);
        e.event.trigger(A, {
            originalEvent: B
        }, B.target);
        if (A.isDefaultPrevented()) {
            if (~C.indexOf("tap") && !w) {
                e.event.add(j, "click", i)
            } else {
                B.preventDefault()
            }
        }
        if (z) {
            e.event.remove(j, c + "." + m, s);
            e.event.remove(j, u + "." + m, l)
        }
    }

    function y(A) {
        var z = A.timeStamp || +new Date();
        if (v == z) {
            return
        }
        v = z;
        f.x = r.x = g("x", A);
        f.y = r.y = g("y", A);
        f.time = z;
        f.target = A.target;
        r.orientation = null;
        r.end = false;
        p = false;
        d = false;
        k = setTimeout(function () {
            d = true;
            n(A, "press")
        }, e.Finger.pressDuration);
        e.event.add(j, c + "." + m, s);
        e.event.add(j, u + "." + m, l);
        if (a.preventDefault) {
            A.preventDefault();
            e.event.add(j, "click", i)
        }
    }

    function s(z) {
        r.x = g("x", z);
        r.y = g("y", z);
        r.dx = r.x - f.x;
        r.dy = r.y - f.y;
        r.adx = Math.abs(r.dx);
        r.ady = Math.abs(r.dy);
        p = r.adx > a.motionThreshold || r.ady > a.motionThreshold;
        if (!p) {
            return
        }
        clearTimeout(k);
        if (!r.orientation) {
            if (r.adx > r.ady) {
                r.orientation = "horizontal";
                r.direction = r.dx > 0 ? +1 : -1
            } else {
                r.orientation = "vertical";
                r.direction = r.dy > 0 ? +1 : -1
            }
        }
        while (z.target && z.target !== f.target) {
            z.target = z.target.parentNode
        }
        if (z.target !== f.target) {
            z.target = f.target;
            l.call(this, e.Event(u + "." + m, z));
            return
        }
        n(z, "drag")
    }

    function l(C) {
        var z = C.timeStamp || +new Date(),
            B = z - f.time,
            D;
        clearTimeout(k);
        if (!p && !d && C.target === f.target) {
            var A = o === C.target && z - h < a.doubleTapInterval;
            D = A ? "doubletap" : "tap";
            o = A ? null : f.target;
            h = z
        } else {
            C.target = f.target;
            if (B < a.flickDuration) {
                n(C, "flick")
            }
            r.end = true;
            D = "drag"
        }
        n(C, D, true)
    }
    e.event.add(j, q + "." + m, y);
    e.each(["tap", "doubletap", "press", "drag", "flick"], function (A, z) {
        e.fn[z] = function (B) {
            return B ? this.on(z, B) : this.trigger(z)
        }
    })
})(jQuery, navigator.userAgent);
/*! skrollr 0.6.30 (2015-06-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
! function (a, b, c) {
    "use strict";

    function d(c) {
        if (e = b.documentElement, f = b.body, T(), ha = this, c = c || {}, ma = c.constants || {}, c.easing)
            for (var d in c.easing)
                W[d] = c.easing[d];
        ta = c.edgeStrategy || "set", ka = {
            beforerender: c.beforerender,
            render: c.render,
            keyframe: c.keyframe
        }, la = c.forceHeight !== !1, la && (Ka = c.scale || 1), na = c.mobileDeceleration || y, pa = c.smoothScrolling !== !1, qa = c.smoothScrollingDuration || A, ra = {
            targetTop: ha.getScrollTop()
        }, Sa = (c.mobileCheck || function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
        })(), Sa ? (ja = b.getElementById(c.skrollrBody || z), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]), ha.refresh(), wa(a, "resize orientationchange", function () {
            var a = e.clientWidth,
                b = e.clientHeight;
            (b !== Pa || a !== Oa) && (Pa = b, Oa = a, Qa = !0)
        });
        var g = U();
        return function h() {
            $(), va = g(h)
        }(), ha
    }
    var e,
        f,
        g = {
            get: function () {
                return ha
            },
            init: function (a) {
                return ha || new d(a)
            },
            VERSION: "0.6.29"
        },
        h = Object.prototype.hasOwnProperty,
        i = a.Math,
        j = a.getComputedStyle,
        k = "touchstart",
        l = "touchmove",
        m = "touchcancel",
        n = "touchend",
        o = "skrollable",
        p = o + "-before",
        q = o + "-between",
        r = o + "-after",
        s = "skrollr",
        t = "no-" + s,
        u = s + "-desktop",
        v = s + "-mobile",
        w = "linear",
        x = 1e3,
        y = .004,
        z = "skrollr-body",
        A = 200,
        B = "start",
        C = "end",
        D = "center",
        E = "bottom",
        F = "___skrollable_id",
        G = /^(?:input|textarea|button|select)$/i,
        H = /^\s+|\s+$/g,
        I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        K = /^(@?[a-z\-]+)\[(\w+)\]$/,
        L = /-([a-z0-9_])/g,
        M = function (a, b) {
            return b.toUpperCase()
        },
        N = /[\-+]?[\d]*\.?[\d]+/g,
        O = /\{\?\}/g,
        P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        Q = /[a-z\-]+-gradient/g,
        R = "",
        S = "",
        T = function () {
            var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (j) {
                var b = j(f, null);
                for (var c in b)
                    if (R = c.match(a) || +c == c && b[c].match(a))
                        break;
                if (!R)
                    return void(R = S = "");
                R = R[0], "-" === R.slice(0, 1) ? (S = R, R = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                } [R]) : S = "-" + R.toLowerCase() + "-"
            }
        },
        U = function () {
            var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"],
                c = Ha();
            return (Sa || !b) && (b = function (b) {
                var d = Ha() - c,
                    e = i.max(0, 1e3 / 60 - d);
                return a.setTimeout(function () {
                    c = Ha(), b()
                }, e)
            }), b
        },
        V = function () {
            var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
            return (Sa || !b) && (b = function (b) {
                return a.clearTimeout(b)
            }), b
        },
        W = {
            begin: function () {
                return 0
            },
            end: function () {
                return 1
            },
            linear: function (a) {
                return a
            },
            quadratic: function (a) {
                return a * a
            },
            cubic: function (a) {
                return a * a * a
            },
            swing: function (a) {
                return -i.cos(a * i.PI) / 2 + .5
            },
            sqrt: function (a) {
                return i.sqrt(a)
            },
            outCubic: function (a) {
                return i.pow(a - 1, 3) + 1
            },
            bounce: function (a) {
                var b;
                if (.5083 >= a)
                    b = 3;
                else if (.8489 >= a)
                    b = 9;
                else if (.96208 >= a)
                    b = 27;
                else {
                    if (!(.99981 >= a))
                        return 1;
                    b = 91
                }
                return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
            }
        };
    d.prototype.refresh = function (a) {
        var d,
            e,
            f = !1;
        for (a === c ? (f = !0, ia = [], Ra = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
            var g = a[d],
                h = g,
                i = [],
                j = pa,
                k = ta,
                l = !1;
            if (f && F in g && delete g[F], g.attributes) {
                for (var m = 0, n = g.attributes.length; n > m; m++) {
                    var p = g.attributes[m];
                    if ("data-anchor-target" !== p.name)
                        if ("data-smooth-scrolling" !== p.name)
                            if ("data-edge-strategy" !== p.name)
                                if ("data-emit-events" !== p.name) {
                                    var q = p.name.match(I);
                                    if (null !== q) {
                                        var r = {
                                            props: p.value,
                                            element: g,
                                            eventType: p.name.replace(L, M)
                                        };
                                        i.push(r);
                                        var s = q[1];
                                        s && (r.constant = s.substr(1));
                                        var t = q[2];
                                        /p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t;
                                        var u = q[3],
                                            v = q[4] || u;
                                        u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Ka))
                                    }
                                } else
                                    l = !0;
                    else
                        k = p.value;
                    else
                        j = "off" !== p.value;
                    else if (h = b.querySelector(p.value), null === h)
                        throw 'Unable to find anchor target "' + p.value + '"'
                }
                if (i.length) {
                    var w,
                        x,
                        y;
                    !f && F in g ? (y = g[F], w = ia[y].styleAttr, x = ia[y].classAttr) : (y = g[F] = Ra++, w = g.style.cssText, x = Da(g)), ia[y] = {
                        element: g,
                        styleAttr: w,
                        classAttr: x,
                        anchorTarget: h,
                        keyFrames: i,
                        smoothScrolling: j,
                        edgeStrategy: k,
                        emitEvents: l,
                        lastFrameIndex: -1
                    }, Ea(g, [o], [])
                }
            }
        }
        for (Aa(), d = 0, e = a.length; e > d; d++) {
            var z = ia[a[d][F]];
            z !== c && (_(z), ba(z))
        }
        return ha
    }, d.prototype.relativeToAbsolute = function (a, b, c) {
        var d = e.clientHeight,
            f = a.getBoundingClientRect(),
            g = f.top,
            h = f.bottom - f.top;
        return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += ha.getScrollTop(), g + .5 | 0
    }, d.prototype.animateTo = function (a, b) {
        b = b || {};
        var d = Ha(),
            e = ha.getScrollTop(),
            f = b.duration === c ? x : b.duration;
        return oa = {
            startTop: e,
            topDiff: a - e,
            targetTop: a,
            duration: f,
            startTime: d,
            endTime: d + f,
            easing: W[b.easing || w],
            done: b.done
        }, oa.topDiff || (oa.done && oa.done.call(ha, !1), oa = c), ha
    }, d.prototype.stopAnimateTo = function () {
        oa && oa.done && oa.done.call(ha, !0), oa = c
    }, d.prototype.isAnimatingTo = function () {
        return !!oa
    }, d.prototype.isMobile = function () {
        return Sa
    }, d.prototype.setScrollTop = function (b, c) {
        return sa = c === !0, Sa ? Ta = i.min(i.max(b, 0), Ja) : a.scrollTo(0, b), ha
    }, d.prototype.getScrollTop = function () {
        return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0
    }, d.prototype.getMaxScrollTop = function () {
        return Ja
    }, d.prototype.on = function (a, b) {
        return ka[a] = b, ha
    }, d.prototype.off = function (a) {
        return delete ka[a], ha
    }, d.prototype.destroy = function () {
        var a = V();
        a(va), ya(), Ea(e, [t], [s, u, v]);
        for (var b = 0, d = ia.length; d > b; b++)
            fa(ia[b].element);
        e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ja && g.setStyle(ja, "transform", "none"), ha = c, ja = c, ka = c, la = c, Ja = 0, Ka = 1, ma = c, na = c, La = "down", Ma = -1, Oa = 0, Pa = 0, Qa = !1, oa = c, pa = c, qa = c, ra = c, sa = c, Ra = 0, ta = c, Sa = !1, Ta = 0, ua = c
    };
    var X = function () {
            var d,
                g,
                h,
                j,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v;
            wa(e, [k, l, m, n].join(" "), function (a) {
                var e = a.changedTouches[0];
                for (j = a.target; 3 === j.nodeType;)
                    j = j.parentNode;
                switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) {
                    case k:
                        d && d.blur(), ha.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
                        break;
                    case l:
                        G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, ha.setScrollTop(Ta - r, !0), q = o, u = t;
                        break;
                    default:
                    case m:
                    case n:
                        var f = g - o,
                            w = h - p,
                            x = w * w + f * f;
                        if (49 > x) {
                            if (!G.test(d.tagName)) {
                                d.focus();
                                var y = b.createEvent("MouseEvents");
                                y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
                            }
                            return
                        }
                        d = c;
                        var z = r / v;
                        z = i.max(i.min(z, 3), -3);
                        var A = i.abs(z / na),
                            B = z * A + .5 * na * A * A,
                            C = ha.getScrollTop() - B,
                            D = 0;
                        C > Ja ? (D = (Ja - C) / B, C = Ja) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, ha.animateTo(C + .5 | 0, {
                            easing: "outCubic",
                            duration: A
                        })
                }
            }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
        },
        Y = function () {
            var a,
                b,
                c,
                d,
                f,
                g,
                h,
                j,
                k,
                l,
                m,
                n = e.clientHeight,
                o = Ba();
            for (j = 0, k = ia.length; k > j; j++)
                for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++)
                    h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fa(b), h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fa(b, !0)), h.frame += m, la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
            for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
                for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++)
                    h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ja - h.offset + m);
                a.keyFrames.sort(Ia)
            }
        },
        Z = function (a, b) {
            for (var c = 0, d = ia.length; d > c; c++) {
                var e,
                    f,
                    i = ia[c],
                    j = i.element,
                    k = i.smoothScrolling ? a : b,
                    l = i.keyFrames,
                    m = l.length,
                    n = l[0],
                    s = l[l.length - 1],
                    t = k < n.frame,
                    u = k > s.frame,
                    v = t ? n : s,
                    w = i.emitEvents,
                    x = i.lastFrameIndex;
                if (t || u) {
                    if (t && -1 === i.edge || u && 1 === i.edge)
                        continue;
                    switch (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), i.lastFrameIndex = -1)) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
                        case "reset":
                            fa(j);
                            continue;
                        case "ease":
                            k = v.frame;
                            break;
                        default:
                        case "set":
                            var y = v.props;
                            for (e in y)
                                h.call(y, e) && (f = ea(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
                            continue
                    }
                } else
                    0 !== i.edge && (Ea(j, [o, q], [p, r]), i.edge = 0);
                for (var z = 0; m - 1 > z; z++)
                    if (k >= l[z].frame && k <= l[z + 1].frame) {
                        var A = l[z],
                            B = l[z + 1];
                        for (e in A.props)
                            if (h.call(A.props, e)) {
                                var C = (k - A.frame) / (B.frame - A.frame);
                                C = A.props[e].easing(C), f = da(A.props[e].value, B.props[e].value, C), f = ea(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)
                            }
                        w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), i.lastFrameIndex = z);
                        break
                    }
            }
        },
        $ = function () {
            Qa && (Qa = !1, Aa());
            var a,
                b,
                d = ha.getScrollTop(),
                e = Ha();
            if (oa)
                e >= oa.endTime ? (d = oa.targetTop, a = oa.done, oa = c) : (b = oa.easing((e - oa.startTime) / oa.duration), d = oa.startTop + b * oa.topDiff | 0), ha.setScrollTop(d, !0);
            else if (!sa) {
                var f = ra.targetTop - d;
                f && (ra = {
                    startTop: Ma,
                    topDiff: d - Ma,
                    targetTop: d,
                    startTime: Na,
                    endTime: Na + qa
                }), e <= ra.endTime && (b = W.sqrt((e - ra.startTime) / qa), d = ra.startTop + b * ra.topDiff | 0)
            }
            if (sa || Ma !== d) {
                La = d > Ma ? "down" : Ma > d ? "up" : La, sa = !1;
                var h = {
                        curTop: d,
                        lastTop: Ma,
                        maxTop: Ja,
                        direction: La
                    },
                    i = ka.beforerender && ka.beforerender.call(ha, h);
                i !== !1 && (Z(d, ha.getScrollTop()), Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), Ma = d, ka.render && ka.render.call(ha, h)), a && a.call(ha, !1)
            }
            Na = e
        },
        _ = function (a) {
            for (var b = 0, c = a.keyFrames.length; c > b; b++) {
                for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props));)
                    f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? aa(e) : [e.slice(1)], i[f] = {
                        value: e,
                        easing: W[d]
                    };
                h.props = i
            }
        },
        aa = function (a) {
            var b = [];
            return P.lastIndex = 0, a = a.replace(P, function (a) {
                return a.replace(N, function (a) {
                    return a / 255 * 100 + "%"
                })
            }), S && (Q.lastIndex = 0, a = a.replace(Q, function (a) {
                return S + a
            })), a = a.replace(N, function (a) {
                return b.push(+a), "{?}"
            }), b.unshift(a), b
        },
        ba = function (a) {
            var b,
                c,
                d = {};
            for (b = 0, c = a.keyFrames.length; c > b; b++)
                ca(a.keyFrames[b], d);
            for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--)
                ca(a.keyFrames[b], d)
        },
        ca = function (a, b) {
            var c;
            for (c in b)
                h.call(a.props, c) || (a.props[c] = b[c]);
            for (c in a.props)
                b[c] = a.props[c]
        },
        da = function (a, b, c) {
            var d,
                e = a.length;
            if (e !== b.length)
                throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
            var f = [a[0]];
            for (d = 1; e > d; d++)
                f[d] = a[d] + (b[d] - a[d]) * c;
            return f
        },
        ea = function (a) {
            var b = 1;
            return O.lastIndex = 0, a[0].replace(O, function () {
                return a[b++]
            })
        },
        fa = function (a, b) {
            a = [].concat(a);
            for (var c, d, e = 0, f = a.length; f > e; e++)
                d = a[e], c = ia[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Ea(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Da(d), d.style.cssText = c.styleAttr, Ea(d, c.classAttr)))
        },
        ga = function () {
            ua = "translateZ(0)", g.setStyle(ja, "transform", ua);
            var a = j(ja),
                b = a.getPropertyValue("transform"),
                c = a.getPropertyValue(S + "transform"),
                d = b && "none" !== b || c && "none" !== c;
            d || (ua = "")
        };
    g.setStyle = function (a, b, c) {
        var d = a.style;
        if (b = b.replace(L, M).replace("-", ""), "zIndex" === b)
            isNaN(c) ? d[b] = c : d[b] = "" + (0 | c);
        else if ("float" === b)
            d.styleFloat = d.cssFloat = c;
        else
            try {
                R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
            } catch (e) {}
    };
    var ha,
        ia,
        ja,
        ka,
        la,
        ma,
        na,
        oa,
        pa,
        qa,
        ra,
        sa,
        ta,
        ua,
        va,
        wa = g.addEvent = function (b, c, d) {
            var e = function (b) {
                return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function () {
                    b.returnValue = !1, b.defaultPrevented = !0
                }), d.call(this, b)
            };
            c = c.split(" ");
            for (var f, g = 0, h = c.length; h > g; g++)
                f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({
                    element: b,
                    name: f,
                    listener: d
                })
        },
        xa = g.removeEvent = function (a, b, c) {
            b = b.split(" ");
            for (var d = 0, e = b.length; e > d; d++)
                a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
        },
        ya = function () {
            for (var a, b = 0, c = Ua.length; c > b; b++)
                a = Ua[b], xa(a.element, a.name, a.listener);
            Ua = []
        },
        za = function (a, b, c) {
            ka.keyframe && ka.keyframe.call(ha, a, b, c)
        },
        Aa = function () {
            var a = ha.getScrollTop();
            Ja = 0, la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), sa = !0
        },
        Ba = function () {
            var a,
                b,
                c = e.clientHeight,
                d = {};
            for (a in ma)
                b = ma[a], "function" == typeof b ? b = b.call(ha) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b;
            return d
        },
        Ca = function () {
            var a,
                b = 0;
            return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight
        },
        Da = function (b) {
            var c = "className";
            return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
        },
        Ea = function (b, d, e) {
            var f = "className";
            if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c)
                return void(b[f] = d);
            for (var g = b[f], h = 0, i = e.length; i > h; h++)
                g = Ga(g).replace(Ga(e[h]), " ");
            g = Fa(g);
            for (var j = 0, k = d.length; k > j; j++)
                -
                1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
            b[f] = Fa(g)
        },
        Fa = function (a) {
            return a.replace(H, "")
        },
        Ga = function (a) {
            return " " + a + " "
        },
        Ha = Date.now || function () {
            return +new Date
        },
        Ia = function (a, b) {
            return a.frame - b.frame
        },
        Ja = 0,
        Ka = 1,
        La = "down",
        Ma = -1,
        Na = Ha(),
        Oa = 0,
        Pa = 0,
        Qa = !1,
        Ra = 0,
        Sa = !1,
        Ta = 0,
        Ua = [];
    "function" == typeof define && define.amd ? define([], function () {
        return g
    }) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g
}(window, document);
/*!
 *  Sharrre.com - Make your sharing widget!
 *  Version: beta 1.3.5
 *  Author: Julien Hany
 *  License: MIT http://en.wikipedia.org/wiki/MIT_License or GPLv2 http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
;
(function (g, i, j, b) {
    var h = "sharrre",
        f = {
            className: "sharrre",
            share: {
                googlePlus: false,
                facebook: false,
                twitter: false,
                digg: false,
                delicious: false,
                stumbleupon: false,
                linkedin: false,
                pinterest: false
            },
            shareTotal: 0,
            template: "",
            title: "",
            url: j.location.href,
            text: j.title,
            urlCurl: "sharrre.php",
            count: {},
            total: 0,
            shorterTotal: true,
            enableHover: true,
            enableCounter: true,
            enableTracking: false,
            hover: function () {},
            hide: function () {},
            click: function () {},
            render: function () {},
            buttons: {
                googlePlus: {
                    url: "",
                    urlCount: false,
                    size: "medium",
                    lang: "en-US",
                    annotation: ""
                },
                facebook: {
                    url: "",
                    urlCount: false,
                    action: "like",
                    layout: "button_count",
                    width: "",
                    send: "false",
                    faces: "false",
                    colorscheme: "",
                    font: "",
                    lang: "en_US"
                },
                twitter: {
                    url: "",
                    urlCount: false,
                    count: "horizontal",
                    hashtags: "",
                    via: "",
                    related: "",
                    lang: "en"
                },
                digg: {
                    url: "",
                    urlCount: false,
                    type: "DiggCompact"
                },
                delicious: {
                    url: "",
                    urlCount: false,
                    size: "medium"
                },
                stumbleupon: {
                    url: "",
                    urlCount: false,
                    layout: "1"
                },
                linkedin: {
                    url: "",
                    urlCount: false,
                    counter: ""
                },
                pinterest: {
                    url: "",
                    media: "",
                    description: "",
                    layout: "horizontal"
                }
            }
        },
        c = {
            googlePlus: "",
            facebook: "https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?",
            twitter: "http://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",
            digg: "http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",
            delicious: "http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",
            stumbleupon: "",
            linkedin: "http://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
            pinterest: "http://api.pinterest.com/v1/urls/count.json?url={url}&callback=?"
        },
        l = {
            googlePlus: function (m) {
                var n = m.options.buttons.googlePlus;
                g(m.element).find(".buttons").append('<div class="button googleplus"><div class="g-plusone" data-size="' + n.size + '" data-href="' + (n.url !== "" ? n.url : m.options.url) + '" data-annotation="' + n.annotation + '"></div></div>');
                i.___gcfg = {
                    lang: m.options.buttons.googlePlus.lang
                };
                var o = 0;
                if (typeof gapi === "undefined" && o == 0) {
                    o = 1;
                    (function () {
                        var p = j.createElement("script");
                        p.type = "text/javascript";
                        p.async = true;
                        p.src = "//apis.google.com/js/plusone.js";
                        var q = j.getElementsByTagName("script")[0];
                        q.parentNode.insertBefore(p, q)
                    })()
                } else {
                    gapi.plusone.go()
                }
            },
            facebook: function (m) {
                var n = m.options.buttons.facebook;
                g(m.element).find(".buttons").append('<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="' + (n.url !== "" ? n.url : m.options.url) + '" data-send="' + n.send + '" data-layout="' + n.layout + '" data-width="' + n.width + '" data-show-faces="' + n.faces + '" data-action="' + n.action + '" data-colorscheme="' + n.colorscheme + '" data-font="' + n.font + '" data-via="' + n.via + '" data-share="true"></div></div>');
                var o = 0;
                if (typeof FB === "undefined" && o == 0) {
                    o = 1;
                    (function (t, p, u) {
                        var r,
                            q = t.getElementsByTagName(p)[0];
                        if (t.getElementById(u)) {
                            return
                        }
                        r = t.createElement(p);
                        r.id = u;
                        r.src = "//connect.facebook.net/" + n.lang + "/all.js#xfbml=1";
                        q.parentNode.insertBefore(r, q)
                    }(j, "script", "facebook-jssdk"))
                } else {
                    FB.XFBML.parse()
                }
            },
            twitter: function (m) {
                var n = m.options.buttons.twitter;
                g(m.element).find(".buttons").append('<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="' + (n.url !== "" ? n.url : m.options.url) + '" data-count="' + n.count + '" data-text="' + m.options.text + '" data-via="' + n.via + '" data-hashtags="' + n.hashtags + '" data-related="' + n.related + '" data-lang="' + n.lang + '">Tweet</a></div>');
                var o = 0;
                if (typeof twttr === "undefined" && o == 0) {
                    o = 1;
                    (function () {
                        var q = j.createElement("script");
                        q.type = "text/javascript";
                        q.async = true;
                        q.src = "//platform.twitter.com/widgets.js";
                        var p = j.getElementsByTagName("script")[0];
                        p.parentNode.insertBefore(q, p)
                    })()
                } else {
                    g.ajax({
                        url: "//platform.twitter.com/widgets.js",
                        dataType: "script",
                        cache: true
                    })
                }
            },
            digg: function (m) {
                var n = m.options.buttons.digg;
                g(m.element).find(".buttons").append('<div class="button digg"><a class="DiggThisButton ' + n.type + '" rel="nofollow external" href="http://digg.com/submit?url=' + encodeURIComponent((n.url !== "" ? n.url : m.options.url)) + '"></a></div>');
                var o = 0;
                if (typeof __DBW === "undefined" && o == 0) {
                    o = 1;
                    (function () {
                        var q = j.createElement("SCRIPT"),
                            p = j.getElementsByTagName("SCRIPT")[0];
                        q.type = "text/javascript";
                        q.async = true;
                        q.src = "//widgets.digg.com/buttons.js";
                        p.parentNode.insertBefore(q, p)
                    })()
                }
            },
            delicious: function (o) {
                if (o.options.buttons.delicious.size == "tall") {
                    var p = "width:50px;",
                        n = "height:35px;width:50px;font-size:15px;line-height:35px;",
                        m = "height:18px;line-height:18px;margin-top:3px;"
                } else {
                    var p = "width:93px;",
                        n = "float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",
                        m = "float:left;height:20px;line-height:20px;"
                }
                var q = o.shorterTotal(o.options.count.delicious);
                if (typeof q === "undefined") {
                    q = 0
                }
                g(o.element).find(".buttons").append('<div class="button delicious"><div style="' + p + 'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="' + n + 'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">' + q + '</div><div style="' + m + 'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>');
                g(o.element).find(".delicious").on("click", function () {
                    o.openPopup("delicious")
                })
            },
            stumbleupon: function (m) {
                var n = m.options.buttons.stumbleupon;
                g(m.element).find(".buttons").append('<div class="button stumbleupon"><su:badge layout="' + n.layout + '" location="' + (n.url !== "" ? n.url : m.options.url) + '"></su:badge></div>');
                var o = 0;
                if (typeof STMBLPN === "undefined" && o == 0) {
                    o = 1;
                    (function () {
                        var p = j.createElement("script");
                        p.type = "text/javascript";
                        p.async = true;
                        p.src = "//platform.stumbleupon.com/1/widgets.js";
                        var q = j.getElementsByTagName("script")[0];
                        q.parentNode.insertBefore(p, q)
                    })();
                    s = i.setTimeout(function () {
                        if (typeof STMBLPN !== "undefined") {
                            STMBLPN.processWidgets();
                            clearInterval(s)
                        }
                    }, 500)
                } else {
                    STMBLPN.processWidgets()
                }
            },
            linkedin: function (m) {
                var n = m.options.buttons.linkedin;
                g(m.element).find(".buttons").append('<div class="button linkedin"><script type="in/share" data-url="' + (n.url !== "" ? n.url : m.options.url) + '" data-counter="' + n.counter + '"><\/script></div>');
                var o = 0;
                if (typeof i.IN === "undefined" && o == 0) {
                    o = 1;
                    (function () {
                        var p = j.createElement("script");
                        p.type = "text/javascript";
                        p.async = true;
                        p.src = "//platform.linkedin.com/in.js";
                        var q = j.getElementsByTagName("script")[0];
                        q.parentNode.insertBefore(p, q)
                    })()
                } else {
                    i.IN.init()
                }
            },
            pinterest: function (m) {
                var n = m.options.buttons.pinterest;
                g(m.element).find(".buttons").append('<div class="button pinterest"><a href="http://pinterest.com/pin/create/button/?url=' + (n.url !== "" ? n.url : m.options.url) + "&media=" + n.media + "&description=" + n.description + '" class="pin-it-button" count-layout="' + n.layout + '">Pin It</a></div>');
                (function () {
                    var o = j.createElement("script");
                    o.type = "text/javascript";
                    o.async = true;
                    o.src = "//assets.pinterest.com/js/pinit.js";
                    var p = j.getElementsByTagName("script")[0];
                    p.parentNode.insertBefore(o, p)
                })()
            }
        },
        d = {
            googlePlus: function () {},
            facebook: function () {
                fb = i.setInterval(function () {
                    if (typeof FB !== "undefined") {
                        FB.Event.subscribe("edge.create", function (m) {
                            _gaq.push(["_trackSocial", "facebook", "like", m])
                        });
                        FB.Event.subscribe("edge.remove", function (m) {
                            _gaq.push(["_trackSocial", "facebook", "unlike", m])
                        });
                        FB.Event.subscribe("message.send", function (m) {
                            _gaq.push(["_trackSocial", "facebook", "send", m])
                        });
                        clearInterval(fb)
                    }
                }, 1000)
            },
            twitter: function () {
                tw = i.setInterval(function () {
                    if (typeof twttr !== "undefined") {
                        twttr.events.bind("tweet", function (m) {
                            if (m) {
                                _gaq.push(["_trackSocial", "twitter", "tweet"])
                            }
                        });
                        clearInterval(tw)
                    }
                }, 1000)
            },
            digg: function () {},
            delicious: function () {},
            stumbleupon: function () {},
            linkedin: function () {
                function m() {
                    _gaq.push(["_trackSocial", "linkedin", "share"])
                }
            },
            pinterest: function () {}
        },
        a = {
            googlePlus: function (m) {
                i.open("https://plus.google.com/share?hl=" + m.buttons.googlePlus.lang + "&url=" + encodeURIComponent((m.buttons.googlePlus.url !== "" ? m.buttons.googlePlus.url : m.url)), "", "toolbar=0, status=0, width=900, height=500")
            },
            facebook: function (m) {
                i.open("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent((m.buttons.facebook.url !== "" ? m.buttons.facebook.url : m.url)) + "&t=" + m.text + "", "", "toolbar=0, status=0, width=900, height=500")
            },
            twitter: function (m) {
                i.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(m.text) + "&url=" + encodeURIComponent((m.buttons.twitter.url !== "" ? m.buttons.twitter.url : m.url)) + (m.buttons.twitter.via !== "" ? "&via=" + m.buttons.twitter.via : ""), "", "toolbar=0, status=0, width=650, height=360")
            },
            digg: function (m) {
                i.open("http://digg.com/tools/diggthis/submit?url=" + encodeURIComponent((m.buttons.digg.url !== "" ? m.buttons.digg.url : m.url)) + "&title=" + m.text + "&related=true&style=true", "", "toolbar=0, status=0, width=650, height=360")
            },
            delicious: function (m) {
                i.open("http://www.delicious.com/save?v=5&noui&jump=close&url=" + encodeURIComponent((m.buttons.delicious.url !== "" ? m.buttons.delicious.url : m.url)) + "&title=" + m.text, "delicious", "toolbar=no,width=550,height=550")
            },
            stumbleupon: function (m) {
                i.open("http://www.stumbleupon.com/badge/?url=" + encodeURIComponent((m.buttons.delicious.url !== "" ? m.buttons.delicious.url : m.url)), "stumbleupon", "toolbar=no,width=550,height=550")
            },
            linkedin: function (m) {
                i.open("https://www.linkedin.com/cws/share?url=" + encodeURIComponent((m.buttons.delicious.url !== "" ? m.buttons.delicious.url : m.url)) + "&token=&isFramed=true", "linkedin", "toolbar=no,width=550,height=550")
            },
            pinterest: function (m) {
                i.open("http://pinterest.com/pin/create/button/?url=" + encodeURIComponent((m.buttons.pinterest.url !== "" ? m.buttons.pinterest.url : m.url)) + "&media=" + encodeURIComponent(m.buttons.pinterest.media) + "&description=" + m.buttons.pinterest.description, "pinterest", "toolbar=no,width=700,height=300")
            }
        };

    function k(n, m) {
        this.element = n;
        this.options = g.extend(true, {}, f, m);
        this.options.share = m.share;
        this._defaults = f;
        this._name = h;
        this.init()
    }
    k.prototype.init = function () {
        var m = this;
        if (this.options.urlCurl !== "") {
            c.googlePlus = this.options.urlCurl + "?url={url}&type=googlePlus";
            c.stumbleupon = this.options.urlCurl + "?url={url}&type=stumbleupon"
        }
        g(this.element).addClass(this.options.className);
        if (typeof g(this.element).data("title") !== "undefined") {
            this.options.title = g(this.element).attr("data-title")
        }
        if (typeof g(this.element).data("url") !== "undefined") {
            this.options.url = g(this.element).data("url")
        }
        if (typeof g(this.element).data("text") !== "undefined") {
            this.options.text = g(this.element).data("text")
        }
        g.each(this.options.share, function (n, o) {
            if (o === true) {
                m.options.shareTotal++
            }
        });
        if (m.options.enableCounter === true) {
            g.each(this.options.share, function (n, p) {
                if (p === true) {
                    try {
                        m.getSocialJson(n)
                    } catch (o) {}
                }
            })
        } else {
            if (m.options.template !== "") {
                this.options.render(this, this.options)
            } else {
                this.loadButtons()
            }
        }
        g(this.element).hover(function () {
            if (g(this).find(".buttons").length === 0 && m.options.enableHover === true) {
                m.loadButtons()
            }
            m.options.hover(m, m.options)
        }, function () {
            m.options.hide(m, m.options)
        });
        g(this.element).click(function () {
            m.options.click(m, m.options);
            return false
        })
    };
    k.prototype.loadButtons = function () {
        var m = this;
        g(this.element).append('<div class="buttons"></div>');
        g.each(m.options.share, function (n, o) {
            if (o == true) {
                l[n](m);
                if (m.options.enableTracking === true) {
                    d[n]()
                }
            }
        })
    };
    k.prototype.getSocialJson = function (o) {
        var m = this,
            p = 0,
            n = c[o].replace("{url}", encodeURIComponent(this.options.url));
        if (this.options.buttons[o].urlCount === true && this.options.buttons[o].url !== "") {
            n = c[o].replace("{url}", this.options.buttons[o].url)
        }
        if (n != "" && m.options.urlCurl !== "") {
            g.getJSON(n, function (r) {
                if (typeof r.count !== "undefined") {
                    var q = r.count + "";
                    q = q.replace("\u00c2\u00a0", "");
                    p += parseInt(q, 10)
                } else {
                    if (r.data && r.data.length > 0 && typeof r.data[0].total_count !== "undefined") {
                        p += parseInt(r.data[0].total_count, 10)
                    } else {
                        if (typeof r[0] !== "undefined") {
                            p += parseInt(r[0].total_posts, 10)
                        } else {
                            if (typeof r[0] !== "undefined") {}
                        }
                    }
                }
                m.options.count[o] = p;
                m.options.total += p;
                m.renderer();
                m.rendererPerso()
            }).error(function () {
                m.options.count[o] = 0;
                m.rendererPerso()
            })
        } else {
            m.renderer();
            m.options.count[o] = 0;
            m.rendererPerso()
        }
    };
    k.prototype.rendererPerso = function () {
        var m = 0;
        for (e in this.options.count) {
            m++
        }
        if (m === this.options.shareTotal) {
            this.options.render(this, this.options)
        }
    };
    k.prototype.renderer = function () {
        var n = this.options.total,
            m = this.options.template;
        if (this.options.shorterTotal === true) {
            n = this.shorterTotal(n)
        }
        if (m !== "") {
            m = m.replace("{total}", n);
            g(this.element).html(m)
        } else {
            g(this.element).html('<div class="box"><a class="count" href="#">' + n + "</a>" + (this.options.title !== "" ? '<a class="share" href="#">' + this.options.title + "</a>" : "") + "</div>")
        }
    };
    k.prototype.shorterTotal = function (m) {
        if (m >= 1000000) {
            m = (m / 1000000).toFixed(2) + "M"
        } else {
            if (m >= 1000) {
                m = (m / 1000).toFixed(1) + "k"
            }
        }
        return m
    };
    k.prototype.openPopup = function (m) {
        a[m](this.options);
        if (this.options.enableTracking === true) {
            var n = {
                googlePlus: {
                    site: "Google",
                    action: "+1"
                },
                facebook: {
                    site: "facebook",
                    action: "like"
                },
                twitter: {
                    site: "twitter",
                    action: "tweet"
                },
                digg: {
                    site: "digg",
                    action: "add"
                },
                delicious: {
                    site: "delicious",
                    action: "add"
                },
                stumbleupon: {
                    site: "stumbleupon",
                    action: "add"
                },
                linkedin: {
                    site: "linkedin",
                    action: "share"
                },
                pinterest: {
                    site: "pinterest",
                    action: "pin"
                }
            };
            _gaq.push(["_trackSocial", n[m].site, n[m].action])
        }
    };
    k.prototype.simulateClick = function () {
        var m = g(this.element).html();
        g(this.element).html(m.replace(this.options.total, this.options.total + 1))
    };
    k.prototype.update = function (m, n) {
        if (m !== "") {
            this.options.url = m
        }
        if (n !== "") {
            this.options.text = n
        }
    };
    g.fn[h] = function (n) {
        var m = arguments;
        if (n === b || typeof n === "object") {
            return this.each(function () {
                if (!g.data(this, "plugin_" + h)) {
                    g.data(this, "plugin_" + h, new k(this, n))
                }
            })
        } else {
            if (typeof n === "string" && n[0] !== "_" && n !== "init") {
                return this.each(function () {
                    var o = g.data(this, "plugin_" + h);
                    if (o instanceof k && typeof o[n] === "function") {
                        o[n].apply(o, Array.prototype.slice.call(m, 1))
                    }
                })
            }
        }
    }
})(jQuery, window, document);
/**
 * Swiper 3.1.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: July 14, 2015
 */
! function () {
    "use strict";

    function e(e) {
        e.fn.swiper = function (a) {
            var s;
            return e(this).each(function () {
                var e = new t(this, a);
                s || (s = e)
            }), s
        }
    }
    var a,
        t = function (e, s) {
            function r() {
                return "horizontal" === v.params.direction
            }

            function i(e) {
                return Math.floor(e)
            }

            function n() {
                v.autoplayTimeoutId = setTimeout(function () {
                    v.params.loop ? (v.fixLoop(), v._slideNext()) : v.isEnd ? s.autoplayStopOnLast ? v.stopAutoplay() : v._slideTo(0) : v._slideNext()
                }, v.params.autoplay)
            }

            function o(e, t) {
                var s = a(e.target);
                if (!s.is(t))
                    if ("string" == typeof t)
                        s = s.parents(t);
                    else if (t.nodeType) {
                    var r;
                    return s.parents().each(function (e, a) {
                        a === t && (r = t)
                    }), r ? t : void 0
                }
                return 0 === s.length ? void 0 : s[0]
            }

            function l(e, a) {
                a = a || {};
                var t = window.MutationObserver || window.WebkitMutationObserver,
                    s = new t(function (e) {
                        e.forEach(function (e) {
                            v.onResize(!0), v.emit("onObserverUpdate", v, e)
                        })
                    });
                s.observe(e, {
                    attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
                    childList: "undefined" == typeof a.childList ? !0 : a.childList,
                    characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
                }), v.observers.push(s)
            }

            function p(e) {
                e.originalEvent && (e = e.originalEvent);
                var a = e.keyCode || e.charCode;
                if (!v.params.allowSwipeToNext && (r() && 39 === a || !r() && 40 === a))
                    return !1;
                if (!v.params.allowSwipeToPrev && (r() && 37 === a || !r() && 38 === a))
                    return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === a || 39 === a || 38 === a || 40 === a) {
                        var t = !1;
                        if (v.container.parents(".swiper-slide").length > 0 && 0 === v.container.parents(".swiper-slide-active").length)
                            return;
                        var s = {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            },
                            i = window.innerWidth,
                            n = window.innerHeight,
                            o = v.container.offset();
                        v.rtl && (o.left = o.left - v.container[0].scrollLeft);
                        for (var l = [
                                [o.left, o.top],
                                [o.left + v.width, o.top],
                                [o.left, o.top + v.height],
                                [o.left + v.width, o.top + v.height]
                            ], p = 0; p < l.length; p++) {
                            var d = l[p];
                            d[0] >= s.left && d[0] <= s.left + i && d[1] >= s.top && d[1] <= s.top + n && (t = !0)
                        }
                        if (!t)
                            return
                    }
                    r() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !v.rtl || 37 === a && v.rtl) && v.slideNext(), (37 === a && !v.rtl || 39 === a && v.rtl) && v.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && v.slideNext(), 38 === a && v.slidePrev())
                }
            }

            function d(e) {
                e.originalEvent && (e = e.originalEvent);
                var a = v.mousewheel.event,
                    t = 0;
                if (e.detail)
                    t = -e.detail;
                else if ("mousewheel" === a)
                    if (v.params.mousewheelForceToAxis)
                        if (r()) {
                            if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)))
                                return;
                            t = e.wheelDeltaX
                        } else {
                            if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)))
                                return;
                            t = e.wheelDeltaY
                        }
                else
                    t = e.wheelDelta;
                else if ("DOMMouseScroll" === a)
                    t = -e.detail;
                else if ("wheel" === a)
                    if (v.params.mousewheelForceToAxis)
                        if (r()) {
                            if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY)))
                                return;
                            t = -e.deltaX
                        } else {
                            if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX)))
                                return;
                            t = -e.deltaY
                        }
                else
                    t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
                if (v.params.mousewheelInvert && (t = -t), v.params.freeMode) {
                    var s = v.getWrapperTranslate() + t;
                    if (s > 0 && (s = 0), s < v.maxTranslate() && (s = v.maxTranslate()), v.setWrapperTransition(0), v.setWrapperTranslate(s), v.updateProgress(), v.updateActiveIndex(), v.params.freeModeSticky && (clearTimeout(v.mousewheel.timeout), v.mousewheel.timeout = setTimeout(function () {
                            v.slideReset()
                        }, 300)), 0 === s || s === v.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - v.mousewheel.lastScrollTime > 60)
                        if (0 > t)
                            if (v.isEnd) {
                                if (v.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                v.slideNext();
                    else if (v.isBeginning) {
                        if (v.params.mousewheelReleaseOnEdges)
                            return !0
                    } else
                        v.slidePrev();
                    v.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return v.params.autoplay && v.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }

            function u(e, t) {
                e = a(e);
                var s,
                    i,
                    n;
                s = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), n = e.attr("data-swiper-parallax-y"), i || n ? (i = i || "0", n = n || "0") : r() ? (i = s, n = "0") : (n = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px", n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t + "%" : n * t + "px", e.transform("translate3d(" + i + ", " + n + ",0px)")
            }

            function c(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
            }
            if (!(this instanceof t))
                return new t(e, s);
            var m = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeSticky: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    },
                    fade: {
                        crossFade: !1
                    },
                    parallax: !1,
                    scrollbar: null,
                    scrollbarHide: !0,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    hashnav: !1,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    resistance: !0,
                    resistanceRatio: .85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slidePrevClass: "swiper-slide-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0
                },
                f = s && s.virtualTranslate;
            s = s || {};
            for (var h in m)
                if ("undefined" == typeof s[h])
                    s[h] = m[h];
                else if ("object" == typeof s[h])
                for (var g in m[h])
                    "undefined" == typeof s[h][g] && (s[h][g] = m[h][g]);
            var v = this;
            if (v.version = "3.1.0", v.params = s, v.classNames = [], "undefined" != typeof a && "undefined" != typeof Dom7 && (a = Dom7), ("undefined" != typeof a || (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (v.$ = a, v.container = a(e), 0 !== v.container.length)) {
                if (v.container.length > 1)
                    return void v.container.each(function () {
                        new t(this, s)
                    });
                v.container[0].swiper = v, v.container.data("swiper", v), v.classNames.push("swiper-container-" + v.params.direction), v.params.freeMode && v.classNames.push("swiper-container-free-mode"), v.support.flexbox || (v.classNames.push("swiper-container-no-flexbox"), v.params.slidesPerColumn = 1), (v.params.parallax || v.params.watchSlidesVisibility) && (v.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(v.params.effect) >= 0 && (v.support.transforms3d ? (v.params.watchSlidesProgress = !0, v.classNames.push("swiper-container-3d")) : v.params.effect = "slide"), "slide" !== v.params.effect && v.classNames.push("swiper-container-" + v.params.effect), "cube" === v.params.effect && (v.params.resistanceRatio = 0, v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.centeredSlides = !1, v.params.spaceBetween = 0, v.params.virtualTranslate = !0, v.params.setWrapperSize = !1), "fade" === v.params.effect && (v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.watchSlidesProgress = !0, v.params.spaceBetween = 0, "undefined" == typeof f && (v.params.virtualTranslate = !0)), v.params.grabCursor && v.support.touch && (v.params.grabCursor = !1), v.wrapper = v.container.children("." + v.params.wrapperClass), v.params.pagination && (v.paginationContainer = a(v.params.pagination), v.params.paginationClickable && v.paginationContainer.addClass("swiper-pagination-clickable")), v.rtl = r() && ("rtl" === v.container[0].dir.toLowerCase() || "rtl" === v.container.css("direction")), v.rtl && v.classNames.push("swiper-container-rtl"), v.rtl && (v.wrongRTL = "-webkit-box" === v.wrapper.css("display")), v.params.slidesPerColumn > 1 && v.classNames.push("swiper-container-multirow"), v.device.android && v.classNames.push("swiper-container-android"), v.container.addClass(v.classNames.join(" ")), v.translate = 0, v.progress = 0, v.velocity = 0, v.lockSwipeToNext = function () {
                    v.params.allowSwipeToNext = !1
                }, v.lockSwipeToPrev = function () {
                    v.params.allowSwipeToPrev = !1
                }, v.lockSwipes = function () {
                    v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !1
                }, v.unlockSwipeToNext = function () {
                    v.params.allowSwipeToNext = !0
                }, v.unlockSwipeToPrev = function () {
                    v.params.allowSwipeToPrev = !0
                }, v.unlockSwipes = function () {
                    v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !0
                }, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab"), v.imagesToLoad = [], v.imagesLoaded = 0, v.loadImage = function (e, a, t, s) {
                    function r() {
                        s && s()
                    }
                    var i;
                    e.complete && t ? r() : a ? (i = new window.Image, i.onload = r, i.onerror = r, i.src = a) : r()
                }, v.preloadImages = function () {
                    function e() {
                        "undefined" != typeof v && null !== v && (void 0 !== v.imagesLoaded && v.imagesLoaded++, v.imagesLoaded === v.imagesToLoad.length && (v.params.updateOnImagesReady && v.update(), v.emit("onImagesReady", v)))
                    }
                    v.imagesToLoad = v.container.find("img");
                    for (var a = 0; a < v.imagesToLoad.length; a++)
                        v.loadImage(v.imagesToLoad[a], v.imagesToLoad[a].currentSrc || v.imagesToLoad[a].getAttribute("src"), !0, e)
                }, v.autoplayTimeoutId = void 0, v.autoplaying = !1, v.autoplayPaused = !1, v.startAutoplay = function () {
                    return "undefined" != typeof v.autoplayTimeoutId ? !1 : v.params.autoplay ? v.autoplaying ? !1 : (v.autoplaying = !0, v.emit("onAutoplayStart", v), void n()) : !1
                }, v.stopAutoplay = function (e) {
                    v.autoplayTimeoutId && (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplaying = !1, v.autoplayTimeoutId = void 0, v.emit("onAutoplayStop", v))
                }, v.pauseAutoplay = function (e) {
                    v.autoplayPaused || (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplayPaused = !0, 0 === e ? (v.autoplayPaused = !1, n()) : v.wrapper.transitionEnd(function () {
                        v && (v.autoplayPaused = !1, v.autoplaying ? n() : v.stopAutoplay())
                    }))
                }, v.minTranslate = function () {
                    return -v.snapGrid[0]
                }, v.maxTranslate = function () {
                    return -v.snapGrid[v.snapGrid.length - 1]
                }, v.updateContainerSize = function () {
                    var e,
                        a;
                    e = "undefined" != typeof v.params.width ? v.params.width : v.container[0].clientWidth, a = "undefined" != typeof v.params.height ? v.params.height : v.container[0].clientHeight, 0 === e && r() || 0 === a && !r() || (e = e - parseInt(v.container.css("padding-left"), 10) - parseInt(v.container.css("padding-right"), 10), a = a - parseInt(v.container.css("padding-top"), 10) - parseInt(v.container.css("padding-bottom"), 10), v.width = e, v.height = a, v.size = r() ? v.width : v.height)
                }, v.updateSlidesSize = function () {
                    v.slides = v.wrapper.children("." + v.params.slideClass), v.snapGrid = [], v.slidesGrid = [], v.slidesSizesGrid = [];
                    var e,
                        a = v.params.spaceBetween,
                        t = -v.params.slidesOffsetBefore,
                        s = 0,
                        n = 0;
                    "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * v.size), v.virtualSize = -a, v.slides.css(v.rtl ? {
                        marginLeft: "",
                        marginTop: ""
                    } : {
                        marginRight: "",
                        marginBottom: ""
                    });
                    var o;
                    v.params.slidesPerColumn > 1 && (o = Math.floor(v.slides.length / v.params.slidesPerColumn) === v.slides.length / v.params.slidesPerColumn ? v.slides.length : Math.ceil(v.slides.length / v.params.slidesPerColumn) * v.params.slidesPerColumn);
                    var l,
                        p = v.params.slidesPerColumn,
                        d = o / p,
                        u = d - (v.params.slidesPerColumn * d - v.slides.length);
                    for (e = 0; e < v.slides.length; e++) {
                        l = 0;
                        var c = v.slides.eq(e);
                        if (v.params.slidesPerColumn > 1) {
                            var m,
                                f,
                                h;
                            "column" === v.params.slidesPerColumnFill ? (f = Math.floor(e / p), h = e - f * p, (f > u || f === u && h === p - 1) && ++h >= p && (h = 0, f++), m = f + h * o / p, c.css({
                                "-webkit-box-ordinal-group": m,
                                "-moz-box-ordinal-group": m,
                                "-ms-flex-order": m,
                                "-webkit-order": m,
                                order: m
                            })) : (h = Math.floor(e / d), f = e - h * d), c.css({
                                "margin-top": 0 !== h && v.params.spaceBetween && v.params.spaceBetween + "px"
                            }).attr("data-swiper-column", f).attr("data-swiper-row", h)
                        }
                        "none" !== c.css("display") && ("auto" === v.params.slidesPerView ? (l = r() ? c.outerWidth(!0) : c.outerHeight(!0), v.params.roundLengths && (l = i(l))) : (l = (v.size - (v.params.slidesPerView - 1) * a) / v.params.slidesPerView, v.params.roundLengths && (l = i(l)), r() ? v.slides[e].style.width = l + "px" : v.slides[e].style.height = l + "px"), v.slides[e].swiperSlideSize = l, v.slidesSizesGrid.push(l), v.params.centeredSlides ? (t = t + l / 2 + s / 2 + a, 0 === e && (t = t - v.size / 2 - a), Math.abs(t) < .001 && (t = 0), n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t)) : (n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t), t = t + l + a), v.virtualSize += l + a, s = l, n++)
                    }
                    v.virtualSize = Math.max(v.virtualSize, v.size) + v.params.slidesOffsetAfter;
                    var g;
                    if (v.rtl && v.wrongRTL && ("slide" === v.params.effect || "coverflow" === v.params.effect) && v.wrapper.css({
                            width: v.virtualSize + v.params.spaceBetween + "px"
                        }), (!v.support.flexbox || v.params.setWrapperSize) && v.wrapper.css(r() ? {
                            width: v.virtualSize + v.params.spaceBetween + "px"
                        } : {
                            height: v.virtualSize + v.params.spaceBetween + "px"
                        }), v.params.slidesPerColumn > 1 && (v.virtualSize = (l + v.params.spaceBetween) * o, v.virtualSize = Math.ceil(v.virtualSize / v.params.slidesPerColumn) - v.params.spaceBetween, v.wrapper.css({
                            width: v.virtualSize + v.params.spaceBetween + "px"
                        }), v.params.centeredSlides)) {
                        for (g = [], e = 0; e < v.snapGrid.length; e++)
                            v.snapGrid[e] < v.virtualSize + v.snapGrid[0] && g.push(v.snapGrid[e]);
                        v.snapGrid = g
                    }
                    if (!v.params.centeredSlides) {
                        for (g = [], e = 0; e < v.snapGrid.length; e++)
                            v.snapGrid[e] <= v.virtualSize - v.size && g.push(v.snapGrid[e]);
                        v.snapGrid = g, Math.floor(v.virtualSize - v.size) > Math.floor(v.snapGrid[v.snapGrid.length - 1]) && v.snapGrid.push(v.virtualSize - v.size)
                    }
                    0 === v.snapGrid.length && (v.snapGrid = [0]), 0 !== v.params.spaceBetween && v.slides.css(r() ? v.rtl ? {
                        marginLeft: a + "px"
                    } : {
                        marginRight: a + "px"
                    } : {
                        marginBottom: a + "px"
                    }), v.params.watchSlidesProgress && v.updateSlidesOffset()
                }, v.updateSlidesOffset = function () {
                    for (var e = 0; e < v.slides.length; e++)
                        v.slides[e].swiperSlideOffset = r() ? v.slides[e].offsetLeft : v.slides[e].offsetTop
                }, v.updateSlidesProgress = function (e) {
                    if ("undefined" == typeof e && (e = v.translate || 0), 0 !== v.slides.length) {
                        "undefined" == typeof v.slides[0].swiperSlideOffset && v.updateSlidesOffset();
                        var a = v.params.centeredSlides ? -e + v.size / 2 : -e;
                        v.rtl && (a = v.params.centeredSlides ? e - v.size / 2 : e); {
                            v.container[0].getBoundingClientRect(), r() ? "left" : "top", r() ? "right" : "bottom"
                        }
                        v.slides.removeClass(v.params.slideVisibleClass);
                        for (var t = 0; t < v.slides.length; t++) {
                            var s = v.slides[t],
                                i = v.params.centeredSlides === !0 ? s.swiperSlideSize / 2 : 0,
                                n = (a - s.swiperSlideOffset - i) / (s.swiperSlideSize + v.params.spaceBetween);
                            if (v.params.watchSlidesVisibility) {
                                var o = -(a - s.swiperSlideOffset - i),
                                    l = o + v.slidesSizesGrid[t],
                                    p = o >= 0 && o < v.size || l > 0 && l <= v.size || 0 >= o && l >= v.size;
                                p && v.slides.eq(t).addClass(v.params.slideVisibleClass)
                            }
                            s.progress = v.rtl ? -n : n
                        }
                    }
                }, v.updateProgress = function (e) {
                    "undefined" == typeof e && (e = v.translate || 0);
                    var a = v.maxTranslate() - v.minTranslate();
                    0 === a ? (v.progress = 0, v.isBeginning = v.isEnd = !0) : (v.progress = (e - v.minTranslate()) / a, v.isBeginning = v.progress <= 0, v.isEnd = v.progress >= 1), v.isBeginning && v.emit("onReachBeginning", v), v.isEnd && v.emit("onReachEnd", v), v.params.watchSlidesProgress && v.updateSlidesProgress(e), v.emit("onProgress", v, v.progress)
                }, v.updateActiveIndex = function () {
                    var e,
                        a,
                        t,
                        s = v.rtl ? v.translate : -v.translate;
                    for (a = 0; a < v.slidesGrid.length; a++)
                        "undefined" != typeof v.slidesGrid[a + 1] ? s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] - (v.slidesGrid[a + 1] - v.slidesGrid[a]) / 2 ? e = a : s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] && (e = a + 1) : s >= v.slidesGrid[a] && (e = a);
                    (0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / v.params.slidesPerGroup), t >= v.snapGrid.length && (t = v.snapGrid.length - 1), e !== v.activeIndex && (v.snapIndex = t, v.previousIndex = v.activeIndex, v.activeIndex = e, v.updateClasses())
                }, v.updateClasses = function () {
                    v.slides.removeClass(v.params.slideActiveClass + " " + v.params.slideNextClass + " " + v.params.slidePrevClass);
                    var e = v.slides.eq(v.activeIndex);
                    if (e.addClass(v.params.slideActiveClass), e.next("." + v.params.slideClass).addClass(v.params.slideNextClass), e.prev("." + v.params.slideClass).addClass(v.params.slidePrevClass), v.bullets && v.bullets.length > 0) {
                        v.bullets.removeClass(v.params.bulletActiveClass);
                        var t;
                        v.params.loop ? (t = Math.ceil(v.activeIndex - v.loopedSlides) / v.params.slidesPerGroup, t > v.slides.length - 1 - 2 * v.loopedSlides && (t -= v.slides.length - 2 * v.loopedSlides), t > v.bullets.length - 1 && (t -= v.bullets.length)) : t = "undefined" != typeof v.snapIndex ? v.snapIndex : v.activeIndex || 0, v.paginationContainer.length > 1 ? v.bullets.each(function () {
                            a(this).index() === t && a(this).addClass(v.params.bulletActiveClass)
                        }) : v.bullets.eq(t).addClass(v.params.bulletActiveClass)
                    }
                    v.params.loop || (v.params.prevButton && (v.isBeginning ? (a(v.params.prevButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.prevButton))) : (a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.prevButton)))), v.params.nextButton && (v.isEnd ? (a(v.params.nextButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.nextButton))) : (a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.nextButton)))))
                }, v.updatePagination = function () {
                    if (v.params.pagination && v.paginationContainer && v.paginationContainer.length > 0) {
                        for (var e = "", a = v.params.loop ? Math.ceil((v.slides.length - 2 * v.loopedSlides) / v.params.slidesPerGroup) : v.snapGrid.length, t = 0; a > t; t++)
                            e += v.params.paginationBulletRender ? v.params.paginationBulletRender(t, v.params.bulletClass) : "<" + v.params.paginationElement + ' class="' + v.params.bulletClass + '"></' + v.params.paginationElement + ">";
                        v.paginationContainer.html(e), v.bullets = v.paginationContainer.find("." + v.params.bulletClass), v.params.paginationClickable && v.params.a11y && v.a11y && v.a11y.initPagination()
                    }
                }, v.update = function (e) {
                    function a() {
                        s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate()), v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses()
                    }
                    if (v.updateContainerSize(), v.updateSlidesSize(), v.updateProgress(), v.updatePagination(), v.updateClasses(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), e) {
                        var t,
                            s;
                        v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode ? a() : (t = ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0), t || a())
                    }
                }, v.onResize = function (e) {
                    var a = v.params.allowSwipeToPrev,
                        t = v.params.allowSwipeToNext;
                    if (v.params.allowSwipeToPrev = v.params.allowSwipeToNext = !0, v.updateContainerSize(), v.updateSlidesSize(), ("auto" === v.params.slidesPerView || v.params.freeMode || e) && v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode) {
                        var s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate());
                        v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses()
                    } else
                        v.updateClasses(), ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0);
                    v.params.allowSwipeToPrev = a, v.params.allowSwipeToNext = t
                };
                var w = ["mousedown", "mousemove", "mouseup"];
                window.navigator.pointerEnabled ? w = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (w = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), v.touchEvents = {
                    start: v.support.touch || !v.params.simulateTouch ? "touchstart" : w[0],
                    move: v.support.touch || !v.params.simulateTouch ? "touchmove" : w[1],
                    end: v.support.touch || !v.params.simulateTouch ? "touchend" : w[2]
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === v.params.touchEventsTarget ? v.container : v.wrapper).addClass("swiper-wp8-" + v.params.direction), v.initEvents = function (e) {
                    var t = e ? "off" : "on",
                        r = e ? "removeEventListener" : "addEventListener",
                        i = "container" === v.params.touchEventsTarget ? v.container[0] : v.wrapper[0],
                        n = v.support.touch ? i : document,
                        o = v.params.nested ? !0 : !1;
                    v.browser.ie ? (i[r](v.touchEvents.start, v.onTouchStart, !1), n[r](v.touchEvents.move, v.onTouchMove, o), n[r](v.touchEvents.end, v.onTouchEnd, !1)) : (v.support.touch && (i[r](v.touchEvents.start, v.onTouchStart, !1), i[r](v.touchEvents.move, v.onTouchMove, o), i[r](v.touchEvents.end, v.onTouchEnd, !1)), !s.simulateTouch || v.device.ios || v.device.android || (i[r]("mousedown", v.onTouchStart, !1), document[r]("mousemove", v.onTouchMove, o), document[r]("mouseup", v.onTouchEnd, !1))), window[r]("resize", v.onResize), v.params.nextButton && (a(v.params.nextButton)[t]("click", v.onClickNext), v.params.a11y && v.a11y && a(v.params.nextButton)[t]("keydown", v.a11y.onEnterKey)), v.params.prevButton && (a(v.params.prevButton)[t]("click", v.onClickPrev), v.params.a11y && v.a11y && a(v.params.prevButton)[t]("keydown", v.a11y.onEnterKey)), v.params.pagination && v.params.paginationClickable && (a(v.paginationContainer)[t]("click", "." + v.params.bulletClass, v.onClickIndex), v.params.a11y && v.a11y && a(v.paginationContainer)[t]("keydown", "." + v.params.bulletClass, v.a11y.onEnterKey)), (v.params.preventClicks || v.params.preventClicksPropagation) && i[r]("click", v.preventClicks, !0)
                }, v.attachEvents = function (e) {
                    v.initEvents()
                }, v.detachEvents = function () {
                    v.initEvents(!0)
                }, v.allowClick = !0, v.preventClicks = function (e) {
                    v.allowClick || (v.params.preventClicks && e.preventDefault(), v.params.preventClicksPropagation && v.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }, v.onClickNext = function (e) {
                    e.preventDefault(), (!v.isEnd || v.params.loop) && v.slideNext()
                }, v.onClickPrev = function (e) {
                    e.preventDefault(), (!v.isBeginning || v.params.loop) && v.slidePrev()
                }, v.onClickIndex = function (e) {
                    e.preventDefault();
                    var t = a(this).index() * v.params.slidesPerGroup;
                    v.params.loop && (t += v.loopedSlides), v.slideTo(t)
                }, v.updateClickedSlide = function (e) {
                    var t = o(e, "." + v.params.slideClass),
                        s = !1;
                    if (t)
                        for (var r = 0; r < v.slides.length; r++)
                            v.slides[r] === t && (s = !0);
                    if (!t || !s)
                        return v.clickedSlide = void 0, void(v.clickedIndex = void 0);
                    if (v.clickedSlide = t, v.clickedIndex = a(t).index(), v.params.slideToClickedSlide && void 0 !== v.clickedIndex && v.clickedIndex !== v.activeIndex) {
                        var i,
                            n = v.clickedIndex;
                        if (v.params.loop)
                            if (i = a(v.clickedSlide).attr("data-swiper-slide-index"), n > v.slides.length - v.params.slidesPerView)
                                v.fixLoop(), n = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]').eq(0).index(), setTimeout(function () {
                                    v.slideTo(n)
                                }, 0);
                            else if (n < v.params.slidesPerView - 1) {
                            v.fixLoop();
                            var l = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]');
                            n = l.eq(l.length - 1).index(), setTimeout(function () {
                                v.slideTo(n)
                            }, 0)
                        } else
                            v.slideTo(n);
                        else
                            v.slideTo(n)
                    }
                };
                var y,
                    b,
                    x,
                    T,
                    S,
                    C,
                    M,
                    P,
                    z,
                    I = "input, select, textarea, button",
                    k = Date.now(),
                    E = [];
                v.animating = !1, v.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var G,
                    D;
                if (v.onTouchStart = function (e) {
                        if (e.originalEvent && (e = e.originalEvent), G = "touchstart" === e.type, G || !("which" in e) || 3 !== e.which) {
                            if (v.params.noSwiping && o(e, "." + v.params.noSwipingClass))
                                return void(v.allowClick = !0);
                            if (!v.params.swipeHandler || o(e, v.params.swipeHandler)) {
                                if (y = !0, b = !1, T = void 0, D = void 0, v.touches.startX = v.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.startY = v.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, x = Date.now(), v.allowClick = !0, v.updateContainerSize(), v.swipeDirection = void 0, v.params.threshold > 0 && (M = !1), "touchstart" !== e.type) {
                                    var t = !0;
                                    a(e.target).is(I) && (t = !1), document.activeElement && a(document.activeElement).is(I) && document.activeElement.blur(), t && e.preventDefault()
                                }
                                v.emit("onTouchStart", v, e)
                            }
                        }
                    }, v.onTouchMove = function (e) {
                        if (e.originalEvent && (e = e.originalEvent), !(G && "mousemove" === e.type || e.preventedByNestedSwiper)) {
                            if (v.params.onlyExternal)
                                return v.allowClick = !1, void(y && (v.touches.startX = v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.startY = v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, x = Date.now()));
                            if (G && document.activeElement && e.target === document.activeElement && a(e.target).is(I))
                                return b = !0, void(v.allowClick = !1);
                            if (v.emit("onTouchMove", v, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                                if (v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof T) {
                                    var t = 180 * Math.atan2(Math.abs(v.touches.currentY - v.touches.startY), Math.abs(v.touches.currentX - v.touches.startX)) / Math.PI;
                                    T = r() ? t > v.params.touchAngle : 90 - t > v.params.touchAngle
                                }
                                if (T && v.emit("onTouchMoveOpposite", v, e), "undefined" == typeof D && v.browser.ieTouch && (v.touches.currentX !== v.touches.startX || v.touches.currentY !== v.touches.startY) && (D = !0), y) {
                                    if (T)
                                        return void(y = !1);
                                    if (D || !v.browser.ieTouch) {
                                        v.allowClick = !1, v.emit("onSliderMove", v, e), e.preventDefault(), v.params.touchMoveStopPropagation && !v.params.nested && e.stopPropagation(), b || (s.loop && v.fixLoop(), C = v.getWrapperTranslate(), v.setWrapperTransition(0), v.animating && v.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), v.params.autoplay && v.autoplaying && (v.params.autoplayDisableOnInteraction ? v.stopAutoplay() : v.pauseAutoplay()), z = !1, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grabbing", v.container[0].style.cursor = "-moz-grabbin", v.container[0].style.cursor = "grabbing")), b = !0;
                                        var i = v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY;
                                        i *= v.params.touchRatio, v.rtl && (i = -i), v.swipeDirection = i > 0 ? "prev" : "next", S = i + C;
                                        var n = !0;
                                        if (i > 0 && S > v.minTranslate() ? (n = !1, v.params.resistance && (S = v.minTranslate() - 1 + Math.pow(-v.minTranslate() + C + i, v.params.resistanceRatio))) : 0 > i && S < v.maxTranslate() && (n = !1, v.params.resistance && (S = v.maxTranslate() + 1 - Math.pow(v.maxTranslate() - C - i, v.params.resistanceRatio))), n && (e.preventedByNestedSwiper = !0), !v.params.allowSwipeToNext && "next" === v.swipeDirection && C > S && (S = C), !v.params.allowSwipeToPrev && "prev" === v.swipeDirection && S > C && (S = C), v.params.followFinger) {
                                            if (v.params.threshold > 0) {
                                                if (!(Math.abs(i) > v.params.threshold || M))
                                                    return void(S = C);
                                                if (!M)
                                                    return M = !0, v.touches.startX = v.touches.currentX, v.touches.startY = v.touches.currentY, S = C, void(v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY)
                                            }
                                            (v.params.freeMode || v.params.watchSlidesProgress) && v.updateActiveIndex(), v.params.freeMode && (0 === E.length && E.push({
                                                position: v.touches[r() ? "startX" : "startY"],
                                                time: x
                                            }), E.push({
                                                position: v.touches[r() ? "currentX" : "currentY"],
                                                time: (new window.Date).getTime()
                                            })), v.updateProgress(S), v.setWrapperTranslate(S)
                                        }
                                    }
                                }
                            }
                        }
                    }, v.onTouchEnd = function (e) {
                        if (e.originalEvent && (e = e.originalEvent), v.emit("onTouchEnd", v, e), y) {
                            v.params.grabCursor && b && y && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab");
                            var t = Date.now(),
                                s = t - x;
                            if (v.allowClick && (v.updateClickedSlide(e), v.emit("onTap", v, e), 300 > s && t - k > 300 && (P && clearTimeout(P), P = setTimeout(function () {
                                    v && (v.params.paginationHide && v.paginationContainer.length > 0 && !a(e.target).hasClass(v.params.bulletClass) && v.paginationContainer.toggleClass(v.params.paginationHiddenClass), v.emit("onClick", v, e))
                                }, 300)), 300 > s && 300 > t - k && (P && clearTimeout(P), v.emit("onDoubleTap", v, e))), k = Date.now(), setTimeout(function () {
                                    v && (v.allowClick = !0)
                                }, 0), !y || !b || !v.swipeDirection || 0 === v.touches.diff || S === C)
                                return void(y = b = !1);
                            y = b = !1;
                            var r;
                            if (r = v.params.followFinger ? v.rtl ? v.translate : -v.translate : -S, v.params.freeMode) {
                                if (r < -v.minTranslate())
                                    return void v.slideTo(v.activeIndex);
                                if (r > -v.maxTranslate())
                                    return void v.slideTo(v.slides.length < v.snapGrid.length ? v.snapGrid.length - 1 : v.slides.length - 1);
                                if (v.params.freeModeMomentum) {
                                    if (E.length > 1) {
                                        var i = E.pop(),
                                            n = E.pop(),
                                            o = i.position - n.position,
                                            l = i.time - n.time;
                                        v.velocity = o / l, v.velocity = v.velocity / 2, Math.abs(v.velocity) < .02 && (v.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (v.velocity = 0)
                                    } else
                                        v.velocity = 0;
                                    E.length = 0;
                                    var p = 1e3 * v.params.freeModeMomentumRatio,
                                        d = v.velocity * p,
                                        u = v.translate + d;
                                    v.rtl && (u = -u);
                                    var c,
                                        m = !1,
                                        f = 20 * Math.abs(v.velocity) * v.params.freeModeMomentumBounceRatio;
                                    if (u < v.maxTranslate())
                                        v.params.freeModeMomentumBounce ? (u + v.maxTranslate() < -f && (u = v.maxTranslate() - f), c = v.maxTranslate(), m = !0, z = !0) : u = v.maxTranslate();
                                    else if (u > v.minTranslate())
                                        v.params.freeModeMomentumBounce ? (u - v.minTranslate() > f && (u = v.minTranslate() + f), c = v.minTranslate(), m = !0, z = !0) : u = v.minTranslate();
                                    else if (v.params.freeModeSticky) {
                                        var h,
                                            g = 0;
                                        for (g = 0; g < v.snapGrid.length; g += 1)
                                            if (v.snapGrid[g] > -u) {
                                                h = g;
                                                break
                                            }
                                        u = Math.abs(v.snapGrid[h] - u) < Math.abs(v.snapGrid[h - 1] - u) || "next" === v.swipeDirection ? v.snapGrid[h] : v.snapGrid[h - 1], v.rtl || (u = -u)
                                    }
                                    if (0 !== v.velocity)
                                        p = Math.abs(v.rtl ? (-u - v.translate) / v.velocity : (u - v.translate) / v.velocity);
                                    else if (v.params.freeModeSticky)
                                        return void v.slideReset();
                                    v.params.freeModeMomentumBounce && m ? (v.updateProgress(c), v.setWrapperTransition(p), v.setWrapperTranslate(u), v.onTransitionStart(), v.animating = !0, v.wrapper.transitionEnd(function () {
                                        v && z && (v.emit("onMomentumBounce", v), v.setWrapperTransition(v.params.speed), v.setWrapperTranslate(c), v.wrapper.transitionEnd(function () {
                                            v && v.onTransitionEnd()
                                        }))
                                    })) : v.velocity ? (v.updateProgress(u), v.setWrapperTransition(p), v.setWrapperTranslate(u), v.onTransitionStart(), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function () {
                                        v && v.onTransitionEnd()
                                    }))) : v.updateProgress(u), v.updateActiveIndex()
                                }
                                return void((!v.params.freeModeMomentum || s >= v.params.longSwipesMs) && (v.updateProgress(), v.updateActiveIndex()))
                            }
                            var w,
                                T = 0,
                                M = v.slidesSizesGrid[0];
                            for (w = 0; w < v.slidesGrid.length; w += v.params.slidesPerGroup)
                                "undefined" != typeof v.slidesGrid[w + v.params.slidesPerGroup] ? r >= v.slidesGrid[w] && r < v.slidesGrid[w + v.params.slidesPerGroup] && (T = w, M = v.slidesGrid[w + v.params.slidesPerGroup] - v.slidesGrid[w]) : r >= v.slidesGrid[w] && (T = w, M = v.slidesGrid[v.slidesGrid.length - 1] - v.slidesGrid[v.slidesGrid.length - 2]);
                            var I = (r - v.slidesGrid[T]) / M;
                            if (s > v.params.longSwipesMs) {
                                if (!v.params.longSwipes)
                                    return void v.slideTo(v.activeIndex);
                                "next" === v.swipeDirection && v.slideTo(I >= v.params.longSwipesRatio ? T + v.params.slidesPerGroup : T), "prev" === v.swipeDirection && v.slideTo(I > 1 - v.params.longSwipesRatio ? T + v.params.slidesPerGroup : T)
                            } else {
                                if (!v.params.shortSwipes)
                                    return void v.slideTo(v.activeIndex);
                                "next" === v.swipeDirection && v.slideTo(T + v.params.slidesPerGroup), "prev" === v.swipeDirection && v.slideTo(T)
                            }
                        }
                    }, v._slideTo = function (e, a) {
                        return v.slideTo(e, a, !0, !0)
                    }, v.slideTo = function (e, a, t, s) {
                        "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), v.snapIndex = Math.floor(e / v.params.slidesPerGroup), v.snapIndex >= v.snapGrid.length && (v.snapIndex = v.snapGrid.length - 1);
                        var i = -v.snapGrid[v.snapIndex];
                        if (!v.params.allowSwipeToNext && i < v.translate && i < v.minTranslate())
                            return !1;
                        if (!v.params.allowSwipeToPrev && i > v.translate && i > v.maxTranslate())
                            return !1;
                        v.params.autoplay && v.autoplaying && (s || !v.params.autoplayDisableOnInteraction ? v.pauseAutoplay(a) : v.stopAutoplay()), v.updateProgress(i);
                        for (var n = 0; n < v.slidesGrid.length; n++)
                            -
                            Math.floor(100 * i) >= Math.floor(100 * v.slidesGrid[n]) && (e = n);
                        if ("undefined" == typeof a && (a = v.params.speed), v.previousIndex = v.activeIndex || 0, v.activeIndex = e, i === v.translate)
                            return v.updateClasses(), !1;
                        v.updateClasses(), v.onTransitionStart(t);
                        r() ? i : 0, r() ? 0 : i;
                        return 0 === a ? (v.setWrapperTransition(0), v.setWrapperTranslate(i), v.onTransitionEnd(t)) : (v.setWrapperTransition(a), v.setWrapperTranslate(i), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function () {
                            v && v.onTransitionEnd(t)
                        }))), !0
                    }, v.onTransitionStart = function (e) {
                        "undefined" == typeof e && (e = !0), v.lazy && v.lazy.onTransitionStart(), e && (v.emit("onTransitionStart", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeStart", v))
                    }, v.onTransitionEnd = function (e) {
                        v.animating = !1, v.setWrapperTransition(0), "undefined" == typeof e && (e = !0), v.lazy && v.lazy.onTransitionEnd(), e && (v.emit("onTransitionEnd", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeEnd", v)), v.params.hashnav && v.hashnav && v.hashnav.setHash()
                    }, v.slideNext = function (e, a, t) {
                        if (v.params.loop) {
                            if (v.animating)
                                return !1;
                            v.fixLoop(); {
                                v.container[0].clientLeft
                            }
                            return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                        }
                        return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                    }, v._slideNext = function (e) {
                        return v.slideNext(!0, e, !0)
                    }, v.slidePrev = function (e, a, t) {
                        if (v.params.loop) {
                            if (v.animating)
                                return !1;
                            v.fixLoop(); {
                                v.container[0].clientLeft
                            }
                            return v.slideTo(v.activeIndex - 1, a, e, t)
                        }
                        return v.slideTo(v.activeIndex - 1, a, e, t)
                    }, v._slidePrev = function (e) {
                        return v.slidePrev(!0, e, !0)
                    }, v.slideReset = function (e, a, t) {
                        return v.slideTo(v.activeIndex, a, e)
                    }, v.setWrapperTransition = function (e, a) {
                        v.wrapper.transition(e), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTransition(e), v.params.parallax && v.parallax && v.parallax.setTransition(e), v.params.scrollbar && v.scrollbar && v.scrollbar.setTransition(e), v.params.control && v.controller && v.controller.setTransition(e, a), v.emit("onSetTransition", v, e)
                    }, v.setWrapperTranslate = function (e, a, t) {
                        var s = 0,
                            i = 0,
                            n = 0;
                        r() ? s = v.rtl ? -e : e : i = e, v.params.virtualTranslate || v.wrapper.transform(v.support.transforms3d ? "translate3d(" + s + "px, " + i + "px, " + n + "px)" : "translate(" + s + "px, " + i + "px)"), v.translate = r() ? s : i, a && v.updateActiveIndex(), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTranslate(v.translate), v.params.parallax && v.parallax && v.parallax.setTranslate(v.translate), v.params.scrollbar && v.scrollbar && v.scrollbar.setTranslate(v.translate), v.params.control && v.controller && v.controller.setTranslate(v.translate, t), v.emit("onSetTranslate", v, v.translate)
                    }, v.getTranslate = function (e, a) {
                        var t,
                            s,
                            r,
                            i;
                        return "undefined" == typeof a && (a = "x"), v.params.virtualTranslate ? v.rtl ? -v.translate : v.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? i = new window.WebKitCSSMatrix("none" === r.webkitTransform ? "" : r.webkitTransform) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? i.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === a && (s = window.WebKitCSSMatrix ? i.m42 : parseFloat(16 === t.length ? t[13] : t[5])), v.rtl && s && (s = -s), s || 0)
                    }, v.getWrapperTranslate = function (e) {
                        return "undefined" == typeof e && (e = r() ? "x" : "y"), v.getTranslate(v.wrapper[0], e)
                    }, v.observers = [], v.initObservers = function () {
                        if (v.params.observeParents)
                            for (var e = v.container.parents(), a = 0; a < e.length; a++)
                                l(e[a]);
                        l(v.container[0], {
                            childList: !1
                        }), l(v.wrapper[0], {
                            attributes: !1
                        })
                    }, v.disconnectObservers = function () {
                        for (var e = 0; e < v.observers.length; e++)
                            v.observers[e].disconnect();
                        v.observers = []
                    }, v.createLoop = function () {
                        v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove();
                        var e = v.wrapper.children("." + v.params.slideClass);
                        v.loopedSlides = parseInt(v.params.loopedSlides || v.params.slidesPerView, 10), v.loopedSlides = v.loopedSlides + v.params.loopAdditionalSlides, v.loopedSlides > e.length && (v.loopedSlides = e.length);
                        var t,
                            s = [],
                            r = [];
                        for (e.each(function (t, i) {
                                var n = a(this);
                                t < v.loopedSlides && r.push(i), t < e.length && t >= e.length - v.loopedSlides && s.push(i), n.attr("data-swiper-slide-index", t)
                            }), t = 0; t < r.length; t++)
                            v.wrapper.append(a(r[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass));
                        for (t = s.length - 1; t >= 0; t--)
                            v.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass))
                    }, v.destroyLoop = function () {
                        v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove(), v.slides.removeAttr("data-swiper-slide-index")
                    }, v.fixLoop = function () {
                        var e;
                        v.activeIndex < v.loopedSlides ? (e = v.slides.length - 3 * v.loopedSlides + v.activeIndex, e += v.loopedSlides, v.slideTo(e, 0, !1, !0)) : ("auto" === v.params.slidesPerView && v.activeIndex >= 2 * v.loopedSlides || v.activeIndex > v.slides.length - 2 * v.params.slidesPerView) && (e = -v.slides.length + v.activeIndex + v.loopedSlides, e += v.loopedSlides, v.slideTo(e, 0, !1, !0))
                    }, v.appendSlide = function (e) {
                        if (v.params.loop && v.destroyLoop(), "object" == typeof e && e.length)
                            for (var a = 0; a < e.length; a++)
                                e[a] && v.wrapper.append(e[a]);
                        else
                            v.wrapper.append(e);
                        v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0)
                    }, v.prependSlide = function (e) {
                        v.params.loop && v.destroyLoop();
                        var a = v.activeIndex + 1;
                        if ("object" == typeof e && e.length) {
                            for (var t = 0; t < e.length; t++)
                                e[t] && v.wrapper.prepend(e[t]);
                            a = v.activeIndex + e.length
                        } else
                            v.wrapper.prepend(e);
                        v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.slideTo(a, 0, !1)
                    }, v.removeSlide = function (e) {
                        v.params.loop && (v.destroyLoop(), v.slides = v.wrapper.children("." + v.params.slideClass));
                        var a,
                            t = v.activeIndex;
                        if ("object" == typeof e && e.length) {
                            for (var s = 0; s < e.length; s++)
                                a = e[s], v.slides[a] && v.slides.eq(a).remove(), t > a && t--;
                            t = Math.max(t, 0)
                        } else
                            a = e, v.slides[a] && v.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);
                        v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.params.loop ? v.slideTo(t + v.loopedSlides, 0, !1) : v.slideTo(t, 0, !1)
                    }, v.removeAllSlides = function () {
                        for (var e = [], a = 0; a < v.slides.length; a++)
                            e.push(a);
                        v.removeSlide(e)
                    }, v.effects = {
                        fade: {
                            setTranslate: function () {
                                for (var e = 0; e < v.slides.length; e++) {
                                    var a = v.slides.eq(e),
                                        t = a[0].swiperSlideOffset,
                                        s = -t;
                                    v.params.virtualTranslate || (s -= v.translate);
                                    var i = 0;
                                    r() || (i = s, s = 0);
                                    var n = v.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                    a.css({
                                        opacity: n
                                    }).transform("translate3d(" + s + "px, " + i + "px, 0px)")
                                }
                            },
                            setTransition: function (e) {
                                if (v.slides.transition(e), v.params.virtualTranslate && 0 !== e) {
                                    var a = !1;
                                    v.slides.transitionEnd(function () {
                                        if (!a && v) {
                                            a = !0, v.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)
                                                v.wrapper.trigger(e[t])
                                        }
                                    })
                                }
                            }
                        },
                        cube: {
                            setTranslate: function () {
                                var e,
                                    t = 0;
                                v.params.cube.shadow && (r() ? (e = v.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.wrapper.append(e)), e.css({
                                    height: v.width + "px"
                                })) : (e = v.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.container.append(e))));
                                for (var s = 0; s < v.slides.length; s++) {
                                    var i = v.slides.eq(s),
                                        n = 90 * s,
                                        o = Math.floor(n / 360);
                                    v.rtl && (n = -n, o = Math.floor(-n / 360));
                                    var l = Math.max(Math.min(i[0].progress, 1), -1),
                                        p = 0,
                                        d = 0,
                                        u = 0;
                                    s % 4 === 0 ? (p = 4 * -o * v.size, u = 0) : (s - 1) % 4 === 0 ? (p = 0, u = 4 * -o * v.size) : (s - 2) % 4 === 0 ? (p = v.size + 4 * o * v.size, u = v.size) : (s - 3) % 4 === 0 && (p = -v.size, u = 3 * v.size + 4 * v.size * o), v.rtl && (p = -p), r() || (d = p, p = 0);
                                    var c = "rotateX(" + (r() ? 0 : -n) + "deg) rotateY(" + (r() ? n : 0) + "deg) translate3d(" + p + "px, " + d + "px, " + u + "px)";
                                    if (1 >= l && l > -1 && (t = 90 * s + 90 * l, v.rtl && (t = 90 * -s - 90 * l)), i.transform(c), v.params.cube.slideShadows) {
                                        var m = i.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                            f = i.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                        0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), i.append(m)), 0 === f.length && (f = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), i.append(f)); {
                                            i[0].progress
                                        }
                                        m.length && (m[0].style.opacity = -i[0].progress), f.length && (f[0].style.opacity = i[0].progress)
                                    }
                                }
                                if (v.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + v.size / 2 + "px"
                                    }), v.params.cube.shadow)
                                    if (r())
                                        e.transform("translate3d(0px, " + (v.width / 2 + v.params.cube.shadowOffset) + "px, " + -v.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + v.params.cube.shadowScale + ")");
                                    else {
                                        var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                            g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                            w = v.params.cube.shadowScale,
                                            y = v.params.cube.shadowScale / g,
                                            b = v.params.cube.shadowOffset;
                                        e.transform("scale3d(" + w + ", 1, " + y + ") translate3d(0px, " + (v.height / 2 + b) + "px, " + -v.height / 2 / y + "px) rotateX(-90deg)")
                                    }
                                var x = v.isSafari || v.isUiWebView ? -v.size / 2 : 0;
                                v.wrapper.transform("translate3d(0px,0," + x + "px) rotateX(" + (r() ? 0 : t) + "deg) rotateY(" + (r() ? -t : 0) + "deg)")
                            },
                            setTransition: function (e) {
                                v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), v.params.cube.shadow && !r() && v.container.find(".swiper-cube-shadow").transition(e)
                            }
                        },
                        coverflow: {
                            setTranslate: function () {
                                for (var e = v.translate, t = r() ? -e + v.width / 2 : -e + v.height / 2, s = r() ? v.params.coverflow.rotate : -v.params.coverflow.rotate, i = v.params.coverflow.depth, n = 0, o = v.slides.length; o > n; n++) {
                                    var l = v.slides.eq(n),
                                        p = v.slidesSizesGrid[n],
                                        d = l[0].swiperSlideOffset,
                                        u = (t - d - p / 2) / p * v.params.coverflow.modifier,
                                        c = r() ? s * u : 0,
                                        m = r() ? 0 : s * u,
                                        f = -i * Math.abs(u),
                                        h = r() ? 0 : v.params.coverflow.stretch * u,
                                        g = r() ? v.params.coverflow.stretch * u : 0;
                                    Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(c) < .001 && (c = 0), Math.abs(m) < .001 && (m = 0);
                                    var w = "translate3d(" + g + "px," + h + "px," + f + "px)  rotateX(" + m + "deg) rotateY(" + c + "deg)";
                                    if (l.transform(w), l[0].style.zIndex = -Math.abs(Math.round(u)) + 1, v.params.coverflow.slideShadows) {
                                        var y = l.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                            b = l.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                        0 === y.length && (y = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), l.append(y)), 0 === b.length && (b = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), l.append(b)), y.length && (y[0].style.opacity = u > 0 ? u : 0), b.length && (b[0].style.opacity = -u > 0 ? -u : 0)
                                    }
                                }
                                if (v.browser.ie) {
                                    var x = v.wrapper[0].style;
                                    x.perspectiveOrigin = t + "px 50%"
                                }
                            },
                            setTransition: function (e) {
                                v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                            }
                        }
                    }, v.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function (e, t) {
                            if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== v.slides.length)) {
                                var s = v.slides.eq(e),
                                    r = s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                                !s.hasClass("swiper-lazy") || s.hasClass("swiper-lazy-loaded") || s.hasClass("swiper-lazy-loading") || r.add(s[0]), 0 !== r.length && r.each(function () {
                                    var e = a(this);
                                    e.addClass("swiper-lazy-loading");
                                    var r = e.attr("data-background"),
                                        i = e.attr("data-src");
                                    v.loadImage(e[0], i || r, !1, function () {
                                        if (r ? (e.css("background-image", "url(" + r + ")"), e.removeAttr("data-background")) : (e.attr("src", i), e.removeAttr("data-src")), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), s.find(".swiper-lazy-preloader, .preloader").remove(), v.params.loop && t) {
                                            var a = s.attr("data-swiper-slide-index");
                                            if (s.hasClass(v.params.slideDuplicateClass)) {
                                                var n = v.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + v.params.slideDuplicateClass + ")");
                                                v.lazy.loadImageInSlide(n.index(), !1)
                                            } else {
                                                var o = v.wrapper.children("." + v.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                                v.lazy.loadImageInSlide(o.index(), !1)
                                            }
                                        }
                                        v.emit("onLazyImageReady", v, s[0], e[0])
                                    }), v.emit("onLazyImageLoad", v, s[0], e[0])
                                })
                            }
                        },
                        load: function () {
                            var e;
                            if (v.params.watchSlidesVisibility)
                                v.wrapper.children("." + v.params.slideVisibleClass).each(function () {
                                    v.lazy.loadImageInSlide(a(this).index())
                                });
                            else if (v.params.slidesPerView > 1)
                                for (e = v.activeIndex; e < v.activeIndex + v.params.slidesPerView; e++)
                                    v.slides[e] && v.lazy.loadImageInSlide(e);
                            else
                                v.lazy.loadImageInSlide(v.activeIndex);
                            if (v.params.lazyLoadingInPrevNext)
                                if (v.params.slidesPerView > 1) {
                                    for (e = v.activeIndex + v.params.slidesPerView; e < v.activeIndex + v.params.slidesPerView + v.params.slidesPerView; e++)
                                        v.slides[e] && v.lazy.loadImageInSlide(e);
                                    for (e = v.activeIndex - v.params.slidesPerView; e < v.activeIndex; e++)
                                        v.slides[e] && v.lazy.loadImageInSlide(e)
                                } else {
                                    var t = v.wrapper.children("." + v.params.slideNextClass);
                                    t.length > 0 && v.lazy.loadImageInSlide(t.index());
                                    var s = v.wrapper.children("." + v.params.slidePrevClass);
                                    s.length > 0 && v.lazy.loadImageInSlide(s.index())
                                }
                        },
                        onTransitionStart: function () {
                            v.params.lazyLoading && (v.params.lazyLoadingOnTransitionStart || !v.params.lazyLoadingOnTransitionStart && !v.lazy.initialImageLoaded) && v.lazy.load()
                        },
                        onTransitionEnd: function () {
                            v.params.lazyLoading && !v.params.lazyLoadingOnTransitionStart && v.lazy.load()
                        }
                    }, v.scrollbar = {
                        set: function () {
                            if (v.params.scrollbar) {
                                var e = v.scrollbar;
                                e.track = a(v.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = r() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = v.size / v.virtualSize, e.moveDivider = e.divider * (e.trackSize / v.size), e.dragSize = e.trackSize * e.divider, r() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.track[0].style.display = e.divider >= 1 ? "none" : "", v.params.scrollbarHide && (e.track[0].style.opacity = 0)
                            }
                        },
                        setTranslate: function () {
                            if (v.params.scrollbar) {
                                var e,
                                    a = v.scrollbar,
                                    t = (v.translate || 0, a.dragSize);
                                e = (a.trackSize - a.dragSize) * v.progress, v.rtl && r() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), r() ? (a.drag.transform(v.support.transforms3d ? "translate3d(" + e + "px, 0, 0)" : "translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (a.drag.transform(v.support.transforms3d ? "translate3d(0px, " + e + "px, 0)" : "translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), v.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
                                    a.track[0].style.opacity = 0, a.track.transition(400)
                                }, 1e3))
                            }
                        },
                        setTransition: function (e) {
                            v.params.scrollbar && v.scrollbar.drag.transition(e)
                        }
                    }, v.controller = {
                        LinearSpline: function (e, a) {
                            this.x = e, this.y = a, this.lastIndex = e.length - 1; {
                                var t,
                                    s;
                                this.x.length
                            }
                            this.interpolate = function (e) {
                                return e ? (s = r(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0
                            };
                            var r = function () {
                                var e,
                                    a,
                                    t;
                                return function (s, r) {
                                    for (a = -1, e = s.length; e - a > 1;)
                                        s[t = e + a >> 1] <= r ? a = t : e = t;
                                    return e
                                }
                            }()
                        },
                        getInterpolateFunction: function (e) {
                            v.controller.spline || (v.controller.spline = v.params.loop ? new v.controller.LinearSpline(v.slidesGrid, e.slidesGrid) : new v.controller.LinearSpline(v.snapGrid, e.snapGrid))
                        },
                        setTranslate: function (e, a) {
                            function s(a) {
                                e = a.rtl && "horizontal" === a.params.direction ? -v.translate : v.translate, "slide" === v.params.controlBy && (v.controller.getInterpolateFunction(a), i = -v.controller.spline.interpolate(-e)), i && "container" !== v.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (v.maxTranslate() - v.minTranslate()), i = (e - v.minTranslate()) * r + a.minTranslate()), v.params.controlInverse && (i = a.maxTranslate() - i), a.updateProgress(i), a.setWrapperTranslate(i, !1, v), a.updateActiveIndex()
                            }
                            var r,
                                i,
                                n = v.params.control;
                            if (v.isArray(n))
                                for (var o = 0; o < n.length; o++)
                                    n[o] !== a && n[o] instanceof t && s(n[o]);
                            else
                                n instanceof t && a !== n && s(n)
                        },
                        setTransition: function (e, a) {
                            function s(a) {
                                a.setWrapperTransition(e, v), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
                                    i && (a.params.loop && "slide" === v.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                                }))
                            }
                            var r,
                                i = v.params.control;
                            if (v.isArray(i))
                                for (r = 0; r < i.length; r++)
                                    i[r] !== a && i[r] instanceof t && s(i[r]);
                            else
                                i instanceof t && a !== i && s(i)
                        }
                    }, v.hashnav = {
                        init: function () {
                            if (v.params.hashnav) {
                                v.hashnav.initialized = !0;
                                var e = document.location.hash.replace("#", "");
                                if (e)
                                    for (var a = 0, t = 0, s = v.slides.length; s > t; t++) {
                                        var r = v.slides.eq(t),
                                            i = r.attr("data-hash");
                                        if (i === e && !r.hasClass(v.params.slideDuplicateClass)) {
                                            var n = r.index();
                                            v.slideTo(n, a, v.params.runCallbacksOnInit, !0)
                                        }
                                    }
                            }
                        },
                        setHash: function () {
                            v.hashnav.initialized && v.params.hashnav && (document.location.hash = v.slides.eq(v.activeIndex).attr("data-hash") || "")
                        }
                    }, v.disableKeyboardControl = function () {
                        a(document).off("keydown", p)
                    }, v.enableKeyboardControl = function () {
                        a(document).on("keydown", p)
                    }, v.mousewheel = {
                        event: !1,
                        lastScrollTime: (new window.Date).getTime()
                    }, v.params.mousewheelControl) {
                    if (void 0 !== document.onmousewheel && (v.mousewheel.event = "mousewheel"), !v.mousewheel.event)
                        try {
                            new window.WheelEvent("wheel"), v.mousewheel.event = "wheel"
                        } catch (L) {}
                    v.mousewheel.event || (v.mousewheel.event = "DOMMouseScroll")
                }
                v.disableMousewheelControl = function () {
                    return v.mousewheel.event ? (v.container.off(v.mousewheel.event, d), !0) : !1
                }, v.enableMousewheelControl = function () {
                    return v.mousewheel.event ? (v.container.on(v.mousewheel.event, d), !0) : !1
                }, v.parallax = {
                    setTranslate: function () {
                        v.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            u(this, v.progress)
                        }), v.slides.each(function () {
                            var e = a(this);
                            e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                var a = Math.min(Math.max(e[0].progress, -1), 1);
                                u(this, a)
                            })
                        })
                    },
                    setTransition: function (e) {
                        "undefined" == typeof e && (e = v.params.speed), v.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            var t = a(this),
                                s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (s = 0), t.transition(s)
                        })
                    }
                }, v._plugins = [];
                for (var B in v.plugins) {
                    var A = v.plugins[B](v, v.params[B]);
                    A && v._plugins.push(A)
                }
                return v.callPlugins = function (e) {
                    for (var a = 0; a < v._plugins.length; a++)
                        e in v._plugins[a] && v._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, v.emitterEventListeners = {}, v.emit = function (e) {
                    v.params[e] && v.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var a;
                    if (v.emitterEventListeners[e])
                        for (a = 0; a < v.emitterEventListeners[e].length; a++)
                            v.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    v.callPlugins && v.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, v.on = function (e, a) {
                    return e = c(e), v.emitterEventListeners[e] || (v.emitterEventListeners[e] = []), v.emitterEventListeners[e].push(a), v
                }, v.off = function (e, a) {
                    var t;
                    if (e = c(e), "undefined" == typeof a)
                        return v.emitterEventListeners[e] = [], v;
                    if (v.emitterEventListeners[e] && 0 !== v.emitterEventListeners[e].length) {
                        for (t = 0; t < v.emitterEventListeners[e].length; t++)
                            v.emitterEventListeners[e][t] === a && v.emitterEventListeners[e].splice(t, 1);
                        return v
                    }
                }, v.once = function (e, a) {
                    e = c(e);
                    var t = function () {
                        a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), v.off(e, t)
                    };
                    return v.on(e, t), v
                }, v.a11y = {
                    makeFocusable: function (e) {
                        return e.attr("tabIndex", "0"), e
                    },
                    addRole: function (e, a) {
                        return e.attr("role", a), e
                    },
                    addLabel: function (e, a) {
                        return e.attr("aria-label", a), e
                    },
                    disable: function (e) {
                        return e.attr("aria-disabled", !0), e
                    },
                    enable: function (e) {
                        return e.attr("aria-disabled", !1), e
                    },
                    onEnterKey: function (e) {
                        13 === e.keyCode && (a(e.target).is(v.params.nextButton) ? (v.onClickNext(e), v.a11y.notify(v.isEnd ? v.params.lastSlideMessage : v.params.nextSlideMessage)) : a(e.target).is(v.params.prevButton) && (v.onClickPrev(e), v.a11y.notify(v.isBeginning ? v.params.firstSlideMessage : v.params.prevSlideMessage)), a(e.target).is("." + v.params.bulletClass) && a(e.target)[0].click())
                    },
                    liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function (e) {
                        var a = v.a11y.liveRegion;
                        0 !== a.length && (a.html(""), a.html(e))
                    },
                    init: function () {
                        if (v.params.nextButton) {
                            var e = a(v.params.nextButton);
                            v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.nextSlideMessage)
                        }
                        if (v.params.prevButton) {
                            var t = a(v.params.prevButton);
                            v.a11y.makeFocusable(t), v.a11y.addRole(t, "button"), v.a11y.addLabel(t, v.params.prevSlideMessage)
                        }
                        a(v.container).append(v.a11y.liveRegion)
                    },
                    initPagination: function () {
                        v.params.pagination && v.params.paginationClickable && v.bullets && v.bullets.length && v.bullets.each(function () {
                            var e = a(this);
                            v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                        })
                    },
                    destroy: function () {
                        v.a11y.liveRegion && v.a11y.liveRegion.length > 0 && v.a11y.liveRegion.remove()
                    }
                }, v.init = function () {
                    v.params.loop && v.createLoop(), v.updateContainerSize(), v.updateSlidesSize(), v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), "slide" !== v.params.effect && v.effects[v.params.effect] && (v.params.loop || v.updateProgress(), v.effects[v.params.effect].setTranslate()), v.params.loop ? v.slideTo(v.params.initialSlide + v.loopedSlides, 0, v.params.runCallbacksOnInit) : (v.slideTo(v.params.initialSlide, 0, v.params.runCallbacksOnInit), 0 === v.params.initialSlide && (v.parallax && v.params.parallax && v.parallax.setTranslate(), v.lazy && v.params.lazyLoading && (v.lazy.load(), v.lazy.initialImageLoaded = !0))), v.attachEvents(), v.params.observer && v.support.observer && v.initObservers(), v.params.preloadImages && !v.params.lazyLoading && v.preloadImages(), v.params.autoplay && v.startAutoplay(), v.params.keyboardControl && v.enableKeyboardControl && v.enableKeyboardControl(), v.params.mousewheelControl && v.enableMousewheelControl && v.enableMousewheelControl(), v.params.hashnav && v.hashnav && v.hashnav.init(), v.params.a11y && v.a11y && v.a11y.init(), v.emit("onInit", v)
                }, v.cleanupStyles = function () {
                    v.container.removeClass(v.classNames.join(" ")).removeAttr("style"), v.wrapper.removeAttr("style"), v.slides && v.slides.length && v.slides.removeClass([v.params.slideVisibleClass, v.params.slideActiveClass, v.params.slideNextClass, v.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), v.paginationContainer && v.paginationContainer.length && v.paginationContainer.removeClass(v.params.paginationHiddenClass), v.bullets && v.bullets.length && v.bullets.removeClass(v.params.bulletActiveClass), v.params.prevButton && a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.nextButton && a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.scrollbar && v.scrollbar && (v.scrollbar.track && v.scrollbar.track.length && v.scrollbar.track.removeAttr("style"), v.scrollbar.drag && v.scrollbar.drag.length && v.scrollbar.drag.removeAttr("style"))
                }, v.destroy = function (e, a) {
                    v.detachEvents(), v.stopAutoplay(), v.params.loop && v.destroyLoop(), a && v.cleanupStyles(), v.disconnectObservers(), v.params.keyboardControl && v.disableKeyboardControl && v.disableKeyboardControl(), v.params.mousewheelControl && v.disableMousewheelControl && v.disableMousewheelControl(), v.params.a11y && v.a11y && v.a11y.destroy(), v.emit("onDestroy"), e !== !1 && (v = null)
                }, v.init(), v
            }
        };
    t.prototype = {
        isSafari: function () {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function () {
            var e = navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: t || r || s,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function () {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function () {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e)
                        return !0
            }(),
            observer: function () {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        },
        plugins: {}
    };
    for (var s = ["jQuery", "Zepto", "Dom7"], r = 0; r < s.length; r++)
        window[s[r]] && e(window[s[r]]);
    var i;
    i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function (e) {
        function a(i) {
            if (i.target === this)
                for (e.call(this, i), t = 0; t < s.length; t++)
                    r.off(s[t], a)
        }
        var t,
            s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;
        if (e)
            for (t = 0; t < s.length; t++)
                r.on(s[t], a);
        return this
    }), "transform" in i.fn || (i.fn.transform = function (e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }), "transition" in i.fn || (i.fn.transition = function (e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    })), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
    "use strict";
    return window.Swiper
});;
var p18 = {};
(function (pkg) {
    pkg.Event = function () {
        this.target;
        this.get;
    };
    pkg.Observer = function () {
        this.listeners = {};
    };
    pkg.Observer.prototype = {
        addObserver: function (type, listener, target) {
            var listeners = this.listeners;
            if (!listeners[type]) {
                listeners[type] = [];
            }
            listeners[type].push([listener, target]);
        },
        removeObserver: function (type, listener) {
            var listeners = this.listeners;
            if (listeners[type]) {
                var i;
                var len = listeners[type].length;
                for (i = len - 1; i >= 0; i--) {
                    var arr = listeners[type][i];
                    if (arr[0] == listener) {
                        listeners[type].splice(i, 1);
                    }
                }
            }
        },
        notify: function (type, option) {
            var listeners = this.listeners;
            var e = new pkg.Event();
            e.get = this;
            if (isDebug)
                console.log('▼ ' + type);
            (typeof option === 'undefined') ? e.option = []: e.option = option;
            if (listeners[type]) {
                var i;
                var len = listeners[type].length;
                for (i = 0; i < len; i++) {
                    var arr = listeners[type][i];
                    e.target = arr[1];
                    arr[0](e);
                }
            }
        }
    }
})(p18);
var CustomEvent = {
    PAGE_INIT: "page_init",
    PAGE_LOAD: "page_load",
    PAGE_UNLOAD: "page_unload",
    PAGE_RESIZE: "page_resize",
    MANAGER_INIT: "manager_init",
    MANAGER_HASH_CHANGE: "manager_hash_change",
    OVERLAY_OPEN: 'overlay_open',
    OVERLAY_CLOSE: 'overlay_close',
};
var ver = window.opera ? (opera.version().replace(/\d$/, "") - 0) : parseFloat((/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.exec(navigator.userAgent) || [, 0])[1]);
var isDebug = false;
(function ($) {
    var ua = navigator.userAgent.toLowerCase();
    $.ua = {
        isWindows: /windows/.test(ua),
        isMac: /macintosh/.test(ua),
        isIE: /msie (\d+)/.test(ua),
        isIE6: /msie (\d+)/.test(ua) && RegExp.$1 == 6,
        isIE7: /msie (\d+)/.test(ua) && RegExp.$1 == 7,
        isLtIE8: /msie (\d+)/.test(ua) && RegExp.$1 < 8,
        isLtIE9: /msie (\d+)/.test(ua) && RegExp.$1 < 9,
        isFirefox: /firefox/.test(ua),
        isWebKit: /applewebkit/.test(ua),
        isTouchUI: 'ontouchstart' in window,
        isIOS: /i(phone|pod|pad)/.test(ua),
        isIPhone: /i(phone|pod)/.test(ua),
        isIPad: /ipad/.test(ua),
        isIPhone4: (/i(phone|pod)/.test(ua) && window.devicePixelRatio == 2),
        isIPad3: (/ipad/.test(ua) && window.devicePixelRatio == 2),
        isAndroid: /android/.test(ua),
        isAndroidMobile: /android(.+)?mobile/.test(ua),
        isSmartPhone: ((/i(phone|pod)/.test(ua)) || (/android/.test(ua))),
    };
    $.Observer = new p18.Observer();
    $.fn.blockLink = function (_isPjax) {
        if (typeof _isPjax === 'undefined')
            _isPjax = false;
        $(this).hover(function (e) {
            $(this).addClass('jsHover');
        }, function (e) {
            $(this).removeClass('jsHover');
        }).on('touchstart', function (e) {
            $(this).addClass('jsHover');
        }).on('touchend', function (e) {
            $(this).removeClass('jsHover');
        }).on('click', function (e) {
            e.preventDefault();
            return false;
        }).on('tap', function (e) {
            if (_isPjax) {
                $.Observer.notify(CustomEvent.PAGE_LOAD, {
                    url: $(this).find('a:first').attr('href')
                });
            } else {
                var url = $(this).find('a:first').attr('href');
                var hash = url.split('#')[1];
                if (hash) {
                    e.preventDefault();
                    $.Observer.notify(CustomEvent.MANAGER_HASH_CHANGE, {
                        hash: hash
                    });
                } else {
                    if ($(this).find('a:first').attr('target') || $(this).find('a.exLink')[0]) {
                        window.open($(this).find('a:first').attr('href'));
                    } else {
                        location.href = url;
                    }
                }
            }
            e.preventDefault();
            return false;
        }).addClass('jsBlockLink');
    };
    $.fn.setTab = function () {
        var $bar = $(this).find('.m-tab-bar');
        var $container = $(this).find('.m-tab-container');
        var cookieKey = 'm-tab';

        function setTab(_hash) {
            var $tabItem = $bar.find('.m-tab-bar__item');
            $tabItem.each(function (e) {
                var $target = $(this);
                $target.removeClass('is-current');
                if ($target.find('a').attr('href') == '#' + _hash)
                    $target.addClass('is-current');
            })
            var $tabContainer = $container.find('.m-tab-container__item');
            $tabContainer.each(function (e) {
                var $target = $(this);
                $target.removeClass('is-current');
                if ($target.attr('data-tab') == _hash)
                    $target.addClass('is-current');
            })
            $.cookie(cookieKey, _hash);
        }
        if ($.cookie(cookieKey) && $bar.find('#' + $.cookie(cookieKey))) {
            setTab($.cookie(cookieKey));
        }
        $bar.find('.m-tab-bar__item').on('click', function (e) {
            var hash = $(this).find('a').attr('href').slice(1);
            setTab(hash);
        });
    }
    $.toUpperCaseFstChar = function (_string) {
        var temp = "";
        temp += _string.charAt(0).toUpperCase();
        temp += _string.slice(1);
        return temp;
    }
    $.toDigit = function (_digit, _n) {
        var num = _n;
        for (var i = 0; i < _digit - String(_n).length; i++) {
            num = "0" + num;
        }
        return num;
    }
    $.getRandomAry = function (_from, _to) {
        var ary = [];
        var randomAry = []
        for (var i = _from; i <= _to; i++) {
            ary.push(i);
        }
        while (ary.length) {
            randomAry.push(ary.splice(Math.floor(Math.random() * ary.length) - 1, 1));
        }
        return randomAry;
    }
    $.iosVersion = function () {
        var v,
            versions;
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            versions = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            return versions;
        }
        return versions;
    }
})(jQuery);
OverlayNav = {
    $triggerBttn: null,
    $closeBttn: null,
    $overlay: null,
    $body: null,
    OVERLAY_OPEN_CLASS: 'is-overlay-open',
    OVERLAY_CLOSE_CLASS: 'is-overlay-close',
    support: null,
    transEndEventName: null,
    init: function () {
        var owner = this;
        var w = window;
        $.Observer.addObserver(CustomEvent.PAGE_UNLOAD, owner.atPageUnload, owner);
        $.Observer.addObserver(CustomEvent.MANAGER_HASH_CHANGE, owner.onManagerHashChange, owner);
        $(w).resize(function () {
            owner.updateView();
        });
        owner.$triggerBttn = $('#menuBtnWrapper').find('.menuBtn');
        owner.$closeBttn = $('#menuBtn2')
        owner.$body = $('body')
        Manager.initPjaxLink('#overlayNav');
        owner.$overlay = $('#overlayNav');
        var transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        };
        owner.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];
        owner.support = {
            transitions: Modernizr.csstransitions
        };
        owner.$triggerBttn.not(function () {
            return ($(this).hasClass('jsDone'))
        }).on('click', {
            target: owner
        }, owner.toggleOverlay).css({
            'cursor': 'pointer'
        }).addClass('jsDone');
    },
    atPageUnload: function (e) {
        var owner = e.target;
        if (owner.isOpen())
            owner.closeOverlay();
    },
    onManagerHashChange: function (e) {
        var owner;
        (typeof e === 'undefined') ? owner = this: owner = e.target;
        if (owner.isOpen())
            owner.closeOverlay();
    },
    updateView: function (e) {
        var owner;
        var w = window;
        (typeof e === 'undefined') ? owner = this: owner = e.target;
        if ((!owner.isOpen()) && $(w).width() > 1200) {}
    },
    toggleOverlay: function (e) {
        var owner = this;
        (e !== undefined) ? owner = e.data.target: null;
        if (owner.$body.hasClass(owner.OVERLAY_OPEN_CLASS)) {
            owner.closeOverlay();
        } else if (!(owner.$overlay.hasClass(owner.OVERLAY_OPEN_CLASS))) {
            owner.openOverlay();
        }
    },
    isOpen: function () {
        var owner = this;
        return owner.$body.hasClass(owner.OVERLAY_OPEN_CLASS);
    },
    openOverlay: function () {
        var owner = this;
        if (isDebug)
            console.log('openOverlay');
        owner.$body.addClass(owner.OVERLAY_OPEN_CLASS);
        owner.$triggerBttn.addClass('is-open').removeClass('is-close');
        $.Observer.notify(CustomEvent.OVERLAY_OPEN);
    },
    closeOverlay: function () {
        var owner = this;
        if (isDebug)
            console.log('closeOverlay');
        owner.$body.removeClass(owner.OVERLAY_OPEN_CLASS);
        owner.$body.addClass(owner.OVERLAY_CLOSE_CLASS);
        owner.$triggerBttn.addClass('is-close').removeClass('is-open');
        if (owner.support.transitions) {
            owner.$overlay.on(owner.transEndEventName, {
                target: owner
            }, owner.onEndTransitionFn);
        } else {
            owner.onEndTransitionFn();
        }
        $.Observer.notify(CustomEvent.OVERLAY_CLOSE);
    },
    onEndTransitionFn: function (e) {
        var owner = this;
        (e !== undefined) ? owner = e.data.target: null;
        owner.$body.removeClass(owner.OVERLAY_CLOSE_CLASS);
        if (owner.support.transitions) {
            if (e.propertyName !== 'visibility')
                return;
            owner.$overlay.off(owner.transEndEventName, owner.onEndTransitionFn);
        }
    }
};
var Manager = ({
    USE_PJAX: false,
    DOMAIN: 'difott.com',
    PJAX_TARGET: '#main',
    PJAX_TARGET_WRAPPER: '#contents',
    view: null,
    currentUrl: '',
    currentLang: 'jp',
    init: function () {
        var owner = this;
        var w = window;
        $.Observer.addObserver(CustomEvent.PAGE_LOAD, owner.atPageLoad, owner);
        $.Observer.addObserver(CustomEvent.PAGE_INIT, owner.atPageInit, owner);
        $.Observer.addObserver(CustomEvent.PAGE_UNLOAD, owner.atPageUnload, owner);
        $.Observer.addObserver(CustomEvent.LANG_CHANGE, owner.atLangChange, owner);
        $(function () {
            owner.view = View;
            if ($.support.pjax && owner.USE_PJAX) {
                owner.initPjax();
                $.Observer.notify(CustomEvent.MANAGER_INIT);
                owner.initPjaxLink('#wrapper');
            }
            $.Observer.notify(CustomEvent.PAGE_INIT);
        });
        $(w).resize(function () {
            $.Observer.notify(CustomEvent.PAGE_RESIZE);
        });
    },
    changeStatus: function (_option) {
        var owner = this;
        var toURL = _option.url.split('#')[0];
        if (owner.currentUrl != toURL) {
            if (_option.push != false)
                _option.push = true;
            if (isDebug)
                console.log('changeStatus :' + toURL);
            $.wait(($.ua.isTouchUI ? 150 : 0), function () {
                $.pjax({
                    url: _option.url,
                    push: _option.push,
                    container: owner.PJAX_TARGET,
                    fragment: owner.PJAX_TARGET,
                    timeout: 5000
                });
            });
        } else {
            var hash = _option.url.split('#')[1];
            $.Observer.notify(CustomEvent.MANAGER_HASH_CHANGE, {
                hash: hash
            });
        }
        owner.currentUrl = toURL;
    },
    atPageLoad: function (e) {
        var owner = e.target;
        console.log('atPageLoad', e)
        owner.changeStatus(e.option);
    },
    atPageInit: function (e) {
        var owner = e.target;
        owner.initPjaxLink();
        owner.view.initView();
    },
    atPageGoto: function (e) {
        var owner = e.target;
    },
    atPageUnload: function (e) {
        var owner = e.target;
        owner.view.transitionPage(false);
    },
    atLangChange: function (e) {
        var owner = e.target;
    },
    initPjax: function () {
        var owner = this;
        $(document).on('pjax:success', function (e) {
            $.Observer.notify(CustomEvent.PAGE_INIT);
        });
        $(document).on('pjax:popstate', function (e) {
            $(owner.PJAX_TARGET).css({
                opacity: '0'
            });
            $.Observer.notify(CustomEvent.PAGE_LOAD, {
                url: location.href,
                push: false
            });
        });
        $(document).on('pjax:beforeSend', function (e) {
            $.Observer.notify(CustomEvent.PAGE_UNLOAD);
        });
    },
    initPjaxLink: function (_target) {
        var owner = this;
        if (owner.USE_PJAX) {
            var $target = $('#cssSigniture');
            if ($target.length) {
                $('body').attr({
                    id: $target.attr('data-body-id'),
                    class: $target.attr('class')
                });
                $target.detach();
            }
            owner.currentUrl = location.pathname;
            (_target === undefined) ? _target = owner.PJAX_TARGET: null;
            $(_target).find('a').not('a.pjax').not('a.notPjax').not('a.exLink').not('.jsBlockLink a').not('footer#footer a').addClass('pjax').on('click', function (e) {
                e.preventDefault();
                var nextUrl = $(this).attr('href');
                $.Observer.notify(CustomEvent.PAGE_LOAD, {
                    url: nextUrl
                });
            }).css({
                'cursor': 'pointer'
            });
        }
    }
});
Manager.init();
var View = ({
    PAGE_SCROLL_OPTION: {
        duration: 900,
        easing: [.87, .07, .42, 1],
        updateURL: false,
        offset: 0,
    },
    MEDIA_QUERY_WIDTH_SMALL: 520,
    Manager: null,
    IsRunningSkroller: false,
    Skrollr: null,
    $WaypointTarget: null,
    init: function (_manager) {
        var owner = this;
        var w = window;
        owner.Manager = _manager;
        $.Observer.addObserver(CustomEvent.PAGE_RESIZE, owner.updateView, owner);
        $.Observer.addObserver(CustomEvent.MANAGER_INIT, owner.onManagerInit, owner);
        $.Observer.addObserver(CustomEvent.MANAGER_HASH_CHANGE, owner.onManagerHashChange, owner);
        var iOSver = $.iosVersion();
        if ((iOSver != undefined) && (iOSver[0] <= 7) && (iOSver[1] <= 2)) {
            $('html').addClass('verAlert');
        }
        $(w).resize(function () {
            owner.updateView();
        });
        $(function () {
            owner.initViewPort();
            owner.loadWebFonts();
        });
    },
    onManagerInit: function (e) {
        var owner;
        (typeof e === 'undefined') ? owner = this: owner = e.target;
        owner.initExLink('#wrapper');
    },
    onManagerHashChange: function (e) {
        var owner;
        (typeof e === 'undefined') ? owner = this: owner = e.target;
        owner.scrollToHash(e.option.hash);
    },
    updateView: function (e) {
        var owner;
        (typeof e === 'undefined') ? owner = this: owner = e.target;
        var w = window;
        $(owner.Manager.PJAX_TARGET).find('.window-height').height($(w).height());
        if (owner.$WaypointTarget) {
            owner.$WaypointTarget.height($(w).height() * (owner.$WaypointTarget.find('.cut').length));
        }
        if (owner.$Skrollr) {
            owner.$Skrollr.refresh();
        }
    },
    initViewPort: function () {},
    initView: function () {
        var owner = this;
        var w = window;
        owner.initExLink();
        owner.Manager.initPjaxLink();
        $('a[href^=#]:not(.jsDone)').click(function (e) {
            e.preventDefault();
            var anchor = $(this).attr('href');
            owner.scrollToHash(anchor);
        }).addClass('jsDone');
        $('#logo-product:not(.jsDone)').click(function (e) {
            owner.scrollToHash('#home');
        }).addClass('jsDone').css('cursor', 'pointer');
        owner.initGNavEffect();
        $('#story .index__item').blockLink(Manager.USE_PJAX);
        $('#main').find('.socialBtns').waypoint(function (direction) {
            owner.initSocial();
            this.destroy();
        }, {
            offset: '400%'
        })
        owner.initIndividual();
        FastClick.attach(document.body);
        $.Observer.notify(CustomEvent.PAGE_RESIZE);
    },
    resetView: function () {
        var owner = this;
        var w = window;
        Waypoint.destroyAll();
    },
    initExLink: function (_target) {
        var owner = this;
        var w = window;
        (_target === undefined) ? _target = owner.Manager.PJAX_TARGET: null;
        $(_target).find('a[href^="http"]:not([href^="http://www.' + owner.Manager.DOMAIN + '"],[href^="https://www.' + owner.Manager.DOMAIN + '"],[href^="http://' + owner.Manager.DOMAIN + '"],[href^="https://' + owner.Manager.DOMAIN + '"],[href^="http://local.' + owner.Manager.DOMAIN + '"],[href^="http://difott.yoshihiromizuta.com"])').add('a[href$=".pdf"]').not('a.exLink').not('.popup-youtube, .popup-vimeo, .popup-gmaps').on('click', function () {
            w.open(this.href, '_blank');
            return false;
        }).addClass('exLink');
    },
    transitionPage: function (_isFadeIn, _waitDuration) {
        var owner = this;
        var w = window;
        (_isFadeIn === undefined) ? _isFadeIn = true: null;
        (_waitDuration === undefined) ? _waitDuration = 0: null;
        if (!$('#loadingCover')[0]) {
            $('body').append('<div id="loadingCover" class="l-centering"><div class="preloader l-centering__item"><div class="preloader__item"></div></div></div>');
        }
        if (isDebug)
            console.log('transition : ' + _isFadeIn);
        var $loadingContainer = $('#loadingCover');
        if (_isFadeIn) {
            if ($loadingContainer.hasClass('loading__first')) {
                $loadingContainer.velocity({
                    opacity: 0
                }, {
                    delay: 500,
                    duration: 1000,
                    easeing: 'linear',
                    begin: function () {
                        $(w).scrollTop(owner.getHomeIntroDefPosY());
                    },
                    complete: function () {
                        $(this).remove();
                    }
                });
            } else {
                $loadingContainer.stop().velocity({
                    opacity: 0
                }, {
                    delay: _waitDuration,
                    duration: 250,
                    easeing: 'linear',
                    complete: function () {
                        $(this).remove();
                    }
                });
            }
        } else {
            $loadingContainer.css({
                opacity: 0
            }).stop().velocity({
                opacity: 1
            }, {
                delay: _waitDuration,
                duration: 70,
                easeing: 'linear',
                complete: function () {
                    $(this).remove();
                }
            });
        }
    },
    initSocial: function () {
        var owner = this;
        var w = window;
        if (typeof FB === 'undefined') {
            var fbjs = document.createElement('script');
            fbjs.id = 'facebook-jssdk';
            fbjs.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.3&appId=1471293986415379";
            document.getElementsByTagName('body')[0].appendChild(fbjs);
        } else {
            FB.XFBML.parse();
        }
        if (typeof twttr === 'undefined') {
            var twitterjs = document.createElement("script");
            twitterjs.async = true;
            twitterjs.src = '//platform.twitter.com/widgets.js';
            document.getElementsByTagName('body')[0].appendChild(twitterjs);
        } else {
            twttr.widgets.load();
        }
        if (typeof gapi === 'undefined') {
            var gplusjs = document.createElement("script");
            gplusjs.async = true;
            gplusjs.src = '//apis.google.com/js/platform.js';
            document.getElementsByTagName('body')[0].appendChild(gplusjs);
        } else {
            gapi.plusone.go();
        }
        $.Observer.notify(CustomEvent.PAGE_RESIZE);
    },
    initGNavEffect: function () {
        var owner = this;
        var $target = $('#gNav,#overlayNav');
        $target.find('li a').hover(function () {
            $target.addClass('jsHover');
        }, function () {
            $target.removeClass('jsHover');
        })
    },
    initWebFonts: function () {
        var htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.className = ' hide-fonts';
        setTimeout(function () {
            htmlEl.className = htmlEl.className.replace('hide-fonts', '');
        }, 5000);
    },
    loadWebFonts: function () {
        var owner = this;
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
        owner.domScriptFontscom = document.createElement('script');
        owner.domScriptFontscom.type = 'text/javascript';
        owner.domScriptFontscom.async = true;
        owner.domScriptFontscom.src = 'http://fast.fonts.net/jsapi/39d8754a-2795-4ef7-9ef6-13b911afe2ad.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(owner.domScriptFontscom, s);
    },
    removeWebFonts: function () {
        var owner = this;
        owner.domScriptFontscom.parentNode.removeChild(owner.domScriptFontscom);
        $('html').attr('class', '');
    },
    scrollToHash: function (_hash) {
        var owner = this;
        var w = window;
        if (_hash.match(/^#/)) {
            _hash = _hash.slice(1);
        }
        var d = $('#' + _hash).offset().top - $(w).scrollTop();
        if (_hash && (d != 0)) {
            $('#' + _hash).velocity('stop').velocity('scroll', $.extend(owner.PAGE_SCROLL_OPTION, {
                offset: 0,
                duration: Math.floor(Math.abs(d) / 4) + 800,
                easing: [.87, .07, .42, 1],
                complete: function () {}
            }));
        }
    },
    initIndividual: function () {
        var w = window;
        var owner = this;
        $('body').addClass('loading');
        if ($('body.home')[0]) {
            $(owner.Manager.PJAX_TARGET).attr('style', '').css({
                opacity: '1'
            });
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                spaceBetween: 0,
                speed: 800,
                freeMode: false,
                resistanceRatio: 0.95,
                centeredSlides: true,
                preloadImages: false,
                lazyLoading: true,
                lazyLoadingInPrevNext: true,
                lazyLoadingOnTransitionStart: true,
                slidesPerView: ($(w).width() <= 768) ? 1 : 'auto',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
            });
            swiper.on('onLazyImageReady', function (swiper, slide, image) {});
            var imgLoad = imagesLoaded('#main');
            imgLoad.on('always', function (instance) {
                $('body').wait(700).removeClass('loading');
                owner.$WaypointTarget = $('#processWrapper');
                owner.Skrollr = skrollr.init({
                    mobileCheck: function () {
                        return 0
                    }
                });
                owner.transitionPage(true, ($.ua.isTouchUI ? 200 : 0));
                $.Observer.notify(CustomEvent.PAGE_RESIZE);
                var waypoints = owner.$WaypointTarget.waypoint(function (direction) {
                    switch (direction) {
                        case 'up':
                            $('body').removeClass('top-in-view');
                            break;
                        case 'down':
                            $('body').addClass('top-in-view')
                            break;
                    }
                }, {
                    offset: 0
                })
                owner.$WaypointTarget.waypoint(function (direction) {
                    switch (direction) {
                        case 'up':
                            $('body').removeClass('bottom-in-view');
                            break;
                        case 'down':
                            $('body').addClass('bottom-in-view')
                            break;
                    }
                }, {
                    offset: 'bottom-in-view'
                })
                owner.runHomeIntro();
            });
        }
    },
    getHomeIntroDefPosY: function () {
        return ($('#visual').height() - 160) / 2 - 80;
    },
    runHomeIntro: function () {
        var owner = this;
        var w = window;
        var defPosY = owner.getHomeIntroDefPosY();
        if ($(w).height < 640) {
            defPosY += 50;
        }
        $('html').addClass('noScroll');
        $('#home').velocity('scroll', {
            offset: defPosY,
            duration: 0,
            updateURL: false,
        }).velocity('scroll', {
            delay: 1400,
            duration: 2000,
            easing: 'easeInOutQuart',
            begin: function () {
                $(w).scrollTop(owner.getHomeIntroDefPosY());
            },
            updateURL: false,
        });
        $('#visual > .copy img').each(function (i) {
            var $target = $(this);
            $target.velocity({
                translateX: 17,
                opacity: 0,
                width: 5
            }, 0).velocity({
                width: 17,
                opacity: 1,
                translateX: 0,
            }, {
                delay: (2500 + i * 300),
                queue: false,
                duration: 600,
                easing: 'easeOutQuad',
            });
        });
        $('#visual > .info').velocity({
            opacity: 0
        }, 0).velocity({
            opacity: 1,
        }, {
            delay: 1000,
            queue: false,
            duration: 300,
            easing: 'easeOutSine',
        });
        $('#visual > .info').velocity({
            translateX: 20,
        }, 0).velocity({
            translateX: 0,
        }, {
            delay: 500,
            queue: false,
            duration: 2000,
            easing: 'easeOutQuad',
        });
        $('#visual > .arrow i').velocity({
            translateY: -150,
            opacity: 0
        }, 0).velocity({
            translateY: 0,
            opacity: 1,
        }, {
            delay: 3700,
            duration: 1500,
            easing: 'easeOutExpo',
            complete: function (elements) {
                $(this).parent().addClass('switch');
            }
        });
        $('#processWrapper .cut:first-child').velocity({
            translateY: -defPosY
        }, 0).velocity({
            translateY: -defPosY * 1.1
        }, {
            delay: 1500,
            duration: 1200,
            easing: 'easeInOutQuad',
        }).velocity({
            translateY: 0
        }, {
            duration: 1000,
            easing: 'easeInSine',
            complete: function (elements) {
                $('html').removeClass('noScroll');
            }
        });
    }
});
View.init(Manager);
var MTIProjectId = '94ed51dd-a620-45cb-942a-243d9b319f7a';
(function () {
    var mtiTracking = document.createElement('script');
    mtiTracking.type = 'text/javascript';
    mtiTracking.async = 'true';
    mtiTracking.src = 'wp-content/themes/difott/shared/js/mtiFontTrackingCode.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(mtiTracking);
})();