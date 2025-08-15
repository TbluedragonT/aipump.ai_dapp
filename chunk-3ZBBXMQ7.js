import { f as x, q as d } from "./chunk-KXQY476L.js";
var S = x((Y, M) => {
  "use strict";
  d();
  var F = 1e3,
    g = F * 60,
    h = g * 60,
    C = h * 24,
    q = C * 7,
    R = C * 365.25;
  M.exports = function (t, n) {
    n = n || {};
    var e = typeof t;
    if (e === "string" && t.length > 0) return U(t);
    if (e === "number" && isFinite(t)) return n.long ? _(t) : Z(t);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(t)
    );
  };
  function U(t) {
    if (((t = String(t)), !(t.length > 100))) {
      var n =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          t
        );
      if (n) {
        var e = parseFloat(n[1]),
          u = (n[2] || "ms").toLowerCase();
        switch (u) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return e * R;
          case "weeks":
          case "week":
          case "w":
            return e * q;
          case "days":
          case "day":
          case "d":
            return e * C;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return e * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return e * g;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return e * F;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return e;
          default:
            return;
        }
      }
    }
  }
  function Z(t) {
    var n = Math.abs(t);
    return n >= C
      ? Math.round(t / C) + "d"
      : n >= h
      ? Math.round(t / h) + "h"
      : n >= g
      ? Math.round(t / g) + "m"
      : n >= F
      ? Math.round(t / F) + "s"
      : t + "ms";
  }
  function _(t) {
    var n = Math.abs(t);
    return n >= C
      ? b(t, n, C, "day")
      : n >= h
      ? b(t, n, h, "hour")
      : n >= g
      ? b(t, n, g, "minute")
      : n >= F
      ? b(t, n, F, "second")
      : t + " ms";
  }
  function b(t, n, e, u) {
    var f = n >= e * 1.5;
    return Math.round(t / e) + " " + u + (f ? "s" : "");
  }
});
var O = x((te, j) => {
  "use strict";
  d();
  function B(t) {
    (e.debug = e),
      (e.default = e),
      (e.coerce = z),
      (e.disable = L),
      (e.enable = f),
      (e.enabled = N),
      (e.humanize = S()),
      (e.destroy = D),
      Object.keys(t).forEach((r) => {
        e[r] = t[r];
      }),
      (e.names = []),
      (e.skips = []),
      (e.formatters = {});
    function n(r) {
      let o = 0;
      for (let s = 0; s < r.length; s++)
        (o = (o << 5) - o + r.charCodeAt(s)), (o |= 0);
      return e.colors[Math.abs(o) % e.colors.length];
    }
    e.selectColor = n;
    function e(r) {
      let o,
        s = null,
        p,
        k;
      function c(...a) {
        if (!c.enabled) return;
        let l = c,
          m = Number(new Date()),
          $ = m - (o || m);
        (l.diff = $),
          (l.prev = o),
          (l.curr = m),
          (o = m),
          (a[0] = e.coerce(a[0])),
          typeof a[0] != "string" && a.unshift("%O");
        let y = 0;
        (a[0] = a[0].replace(/%([a-zA-Z%])/g, (v, J) => {
          if (v === "%%") return "%";
          y++;
          let E = e.formatters[J];
          if (typeof E == "function") {
            let P = a[y];
            (v = E.call(l, P)), a.splice(y, 1), y--;
          }
          return v;
        })),
          e.formatArgs.call(l, a),
          (l.log || e.log).apply(l, a);
      }
      return (
        (c.namespace = r),
        (c.useColors = e.useColors()),
        (c.color = e.selectColor(r)),
        (c.extend = u),
        (c.destroy = e.destroy),
        Object.defineProperty(c, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () =>
            s !== null
              ? s
              : (p !== e.namespaces && ((p = e.namespaces), (k = e.enabled(r))),
                k),
          set: (a) => {
            s = a;
          },
        }),
        typeof e.init == "function" && e.init(c),
        c
      );
    }
    function u(r, o) {
      let s = e(this.namespace + (typeof o > "u" ? ":" : o) + r);
      return (s.log = this.log), s;
    }
    function f(r) {
      e.save(r), (e.namespaces = r), (e.names = []), (e.skips = []);
      let o,
        s = (typeof r == "string" ? r : "").split(/[\s,]+/),
        p = s.length;
      for (o = 0; o < p; o++)
        s[o] &&
          ((r = s[o].replace(/\*/g, ".*?")),
          r[0] === "-"
            ? e.skips.push(new RegExp("^" + r.slice(1) + "$"))
            : e.names.push(new RegExp("^" + r + "$")));
    }
    function L() {
      let r = [...e.names.map(A), ...e.skips.map(A).map((o) => "-" + o)].join(
        ","
      );
      return e.enable(""), r;
    }
    function N(r) {
      if (r[r.length - 1] === "*") return !0;
      let o, s;
      for (o = 0, s = e.skips.length; o < s; o++)
        if (e.skips[o].test(r)) return !1;
      for (o = 0, s = e.names.length; o < s; o++)
        if (e.names[o].test(r)) return !0;
      return !1;
    }
    function A(r) {
      return r
        .toString()
        .substring(2, r.toString().length - 2)
        .replace(/\.\*\?$/, "*");
    }
    function z(r) {
      return r instanceof Error ? r.stack || r.message : r;
    }
    function D() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
      );
    }
    return e.enable(e.load()), e;
  }
  j.exports = B;
});
var V = x((i, w) => {
  "use strict";
  d();
  i.formatArgs = T;
  i.save = W;
  i.load = H;
  i.useColors = G;
  i.storage = K();
  i.destroy = (() => {
    let t = !1;
    return () => {
      t ||
        ((t = !0),
        console.warn(
          "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
        ));
    };
  })();
  i.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33",
  ];
  function G() {
    if (
      typeof window < "u" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
    )
      return !0;
    if (
      typeof navigator < "u" &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
    )
      return !1;
    let t;
    return (
      (typeof document < "u" &&
        document.documentElement &&
        document.documentElement.style &&
        document.documentElement.style.WebkitAppearance) ||
      (typeof window < "u" &&
        window.console &&
        (window.console.firebug ||
          (window.console.exception && window.console.table))) ||
      (typeof navigator < "u" &&
        navigator.userAgent &&
        (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
        parseInt(t[1], 10) >= 31) ||
      (typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    );
  }
  function T(t) {
    if (
      ((t[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        t[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        w.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let n = "color: " + this.color;
    t.splice(1, 0, n, "color: inherit");
    let e = 0,
      u = 0;
    t[0].replace(/%[a-zA-Z%]/g, (f) => {
      f !== "%%" && (e++, f === "%c" && (u = e));
    }),
      t.splice(u, 0, n);
  }
  i.log = console.debug || console.log || (() => {});
  function W(t) {
    try {
      t ? i.storage.setItem("debug", t) : i.storage.removeItem("debug");
    } catch {}
  }
  function H() {
    let t;
    try {
      t = i.storage.getItem("debug");
    } catch {}
    return (
      !t && typeof process < "u" && "env" in process && (t = process.env.DEBUG),
      t
    );
  }
  function K() {
    try {
      return localStorage;
    } catch {}
  }
  w.exports = O()(i);
  var { formatters: Q } = w.exports;
  Q.j = function (t) {
    try {
      return JSON.stringify(t);
    } catch (n) {
      return "[UnexpectedJSONParseError]: " + n.message;
    }
  };
});
export { V as a };
