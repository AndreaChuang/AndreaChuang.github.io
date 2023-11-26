!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function i() {
    return "undefined" != typeof window;
  }
  function j() {
    return a || (i() && (a = window.gsap) && a.registerPlugin && a);
  }
  function m(e) {
    return Math.round(1e4 * e) / 1e4;
  }
  function n(e) {
    return parseFloat(e) || 0;
  }
  function o(e, t) {
    var r = n(e);
    return ~e.indexOf("%") ? (r / 100) * t : r;
  }
  function p(e, t) {
    return n(e.getAttribute(t));
  }
  function r(e, t, r, i, s, o) {
    return P(Math.pow((n(r) - n(e)) * s, 2) + Math.pow((n(i) - n(t)) * o, 2));
  }
  function s(e) {
    return console.warn(e);
  }
  function t(e) {
    return "non-scaling-stroke" === e.getAttribute("vector-effect");
  }
  function w(e) {
    if (!(e = v(e)[0])) return 0;
    var n,
      i,
      o,
      a,
      f,
      h,
      d,
      l = e.tagName.toLowerCase(),
      u = e.style,
      c = 1,
      g = 1;
    t(e) &&
      ((g = e.getScreenCTM()),
      (c = P(g.a * g.a + g.b * g.b)),
      (g = P(g.d * g.d + g.c * g.c)));
    try {
      i = e.getBBox();
    } catch (e) {
      s(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      );
    }
    var _ = i || { x: 0, y: 0, width: 0, height: 0 },
      y = _.x,
      w = _.y,
      x = _.width,
      m = _.height;
    if (
      ((i && (x || m)) ||
        !k[l] ||
        ((x = p(e, k[l][0])),
        (m = p(e, k[l][1])),
        "rect" !== l && "line" !== l && ((x *= 2), (m *= 2)),
        "line" === l &&
          ((y = p(e, "x1")),
          (w = p(e, "y1")),
          (x = Math.abs(x - y)),
          (m = Math.abs(m - w)))),
      "path" === l)
    )
      (a = u.strokeDasharray),
        (u.strokeDasharray = "none"),
        (n = e.getTotalLength() || 0),
        c !== g &&
          s(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (n *= (c + g) / 2),
        (u.strokeDasharray = a);
    else if ("rect" === l) n = 2 * x * c + 2 * m * g;
    else if ("line" === l) n = r(y, w, y + x, w + m, c, g);
    else if ("polyline" === l || "polygon" === l)
      for (
        o = e.getAttribute("points").match(b) || [],
          "polygon" === l && o.push(o[0], o[1]),
          n = 0,
          f = 2;
        f < o.length;
        f += 2
      )
        n += r(o[f - 2], o[f - 1], o[f], o[f + 1], c, g) || 0;
    else
      ("circle" !== l && "ellipse" !== l) ||
        ((h = (x / 2) * c),
        (d = (m / 2) * g),
        (n = Math.PI * (3 * (h + d) - P((3 * h + d) * (h + 3 * d)))));
    return n || 0;
  }
  function x(e, t) {
    if (!(e = v(e)[0])) return [0, 0];
    t = t || w(e) + 1;
    var r = h.getComputedStyle(e),
      i = r.strokeDasharray || "",
      s = n(r.strokeDashoffset),
      o = i.indexOf(",");
    return (
      o < 0 && (o = i.indexOf(" ")),
      t < (i = o < 0 ? t : n(i.substr(0, o))) && (i = t),
      [-s || 0, i - s || 0]
    );
  }
  function y() {
    i() &&
      ((h = window),
      (l = a = j()),
      (v = a.utils.toArray),
      (d = -1 !== ((h.navigator || {}).userAgent || "").indexOf("Edge")));
  }
  var a,
    v,
    h,
    d,
    l,
    b = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    k = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    P = Math.sqrt,
    f = {
      version: "3.8.0",
      name: "drawSVG",
      register: function register(e) {
        (a = e), y();
      },
      init: function init(e, r) {
        if (!e.getBBox) return !1;
        l || y();
        var i,
          s,
          a,
          f = w(e);
        return (
          (this._style = e.style),
          (this._target = e),
          r + "" == "true"
            ? (r = "0 100%")
            : r
            ? -1 === (r + "").indexOf(" ") && (r = "0 " + r)
            : (r = "0 0"),
          (s = (function _parse(e, t, n) {
            var r,
              i,
              s = e.indexOf(" ");
            return (
              (i =
                s < 0
                  ? ((r = void 0 !== n ? n + "" : e), e)
                  : ((r = e.substr(0, s)), e.substr(s + 1))),
              (r = o(r, t)),
              (i = o(i, t)) < r ? [i, r] : [r, i]
            );
          })(r, f, (i = x(e, f))[0])),
          (this._length = m(f)),
          (this._dash = m(i[1] - i[0])),
          (this._offset = m(-i[0])),
          (this._dashPT = this.add(this, "_dash", this._dash, m(s[1] - s[0]))),
          (this._offsetPT = this.add(this, "_offset", this._offset, m(-s[0]))),
          d &&
            (a = h.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin &&
            ((s = n(a.strokeMiterlimit)),
            this.add(e.style, "strokeMiterlimit", s, s + 0.01)),
          (this._live = t(e) || ~(r + "").indexOf("live")),
          (this._nowrap = ~(r + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          1
        );
      },
      render: function render(e, t) {
        var n,
          r,
          i,
          s,
          o = t._pt,
          a = t._style;
        if (o) {
          for (
            t._live &&
            (n = w(t._target)) !== t._length &&
            ((r = n / t._length),
            (t._length = n),
            t._offsetPT && ((t._offsetPT.s *= r), (t._offsetPT.c *= r)),
            t._dashPT
              ? ((t._dashPT.s *= r), (t._dashPT.c *= r))
              : (t._dash *= r));
            o;

          )
            o.r(e, o.d), (o = o._next);
          (i = t._dash || (e && 1 !== e && 1e-4) || 0),
            (n = t._length - i + 0.1),
            (s = t._offset),
            i &&
              s &&
              i + Math.abs(s % t._length) > t._length - 0.2 &&
              (s += s < 0 ? 0.1 : -0.1) &&
              (n += 0.1),
            (a.strokeDashoffset = i ? s : s + 0.001),
            (a.strokeDasharray =
              n < 0.2
                ? "none"
                : i
                ? i + "px," + (t._nowrap ? 999999 : n) + "px"
                : "0px, 999999px");
        }
      },
      getLength: w,
      getPosition: x,
    };
  j() && a.registerPlugin(f), (e.DrawSVGPlugin = f), (e.default = f);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
