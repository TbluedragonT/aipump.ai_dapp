import { q as _ } from "./chunk-KXQY476L.js";
_();
var d = function (e, r) {
  return (
    (d =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (o, t) {
          o.__proto__ = t;
        }) ||
      function (o, t) {
        for (var a in t)
          Object.prototype.hasOwnProperty.call(t, a) && (o[a] = t[a]);
      }),
    d(e, r)
  );
};
function x(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError(
      "Class extends value " + String(r) + " is not a constructor or null"
    );
  d(e, r);
  function o() {
    this.constructor = e;
  }
  e.prototype =
    r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
}
var m = function () {
  return (
    (m =
      Object.assign ||
      function (r) {
        for (var o, t = 1, a = arguments.length; t < a; t++) {
          o = arguments[t];
          for (var n in o)
            Object.prototype.hasOwnProperty.call(o, n) && (r[n] = o[n]);
        }
        return r;
      }),
    m.apply(this, arguments)
  );
};
function P(e, r, o, t) {
  function a(n) {
    return n instanceof o
      ? n
      : new o(function (c) {
          c(n);
        });
  }
  return new (o || (o = Promise))(function (n, c) {
    function u(s) {
      try {
        p(t.next(s));
      } catch (y) {
        c(y);
      }
    }
    function f(s) {
      try {
        p(t.throw(s));
      } catch (y) {
        c(y);
      }
    }
    function p(s) {
      s.done ? n(s.value) : a(s.value).then(u, f);
    }
    p((t = t.apply(e, r || [])).next());
  });
}
function v(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    o = r && e[r],
    t = 0;
  if (o) return o.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && t >= e.length && (e = void 0), { value: e && e[t++], done: !e }
        );
      },
    };
  throw new TypeError(
    r ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function S(e, r, o) {
  if (o || arguments.length === 2)
    for (var t = 0, a = r.length, n; t < a; t++)
      (n || !(t in r)) &&
        (n || (n = Array.prototype.slice.call(r, 0, t)), (n[t] = r[t]));
  return e.concat(n || Array.prototype.slice.call(r));
}
function b(e) {
  return this instanceof b ? ((this.v = e), this) : new b(e);
}
function E(e, r, o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = o.apply(e, r || []),
    a,
    n = [];
  return (
    (a = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype
    )),
    u("next"),
    u("throw"),
    u("return", c),
    (a[Symbol.asyncIterator] = function () {
      return this;
    }),
    a
  );
  function c(i) {
    return function (l) {
      return Promise.resolve(l).then(i, y);
    };
  }
  function u(i, l) {
    t[i] &&
      ((a[i] = function (h) {
        return new Promise(function (g, O) {
          n.push([i, h, g, O]) > 1 || f(i, h);
        });
      }),
      l && (a[i] = l(a[i])));
  }
  function f(i, l) {
    try {
      p(t[i](l));
    } catch (h) {
      w(n[0][3], h);
    }
  }
  function p(i) {
    i.value instanceof b
      ? Promise.resolve(i.value.v).then(s, y)
      : w(n[0][2], i);
  }
  function s(i) {
    f("next", i);
  }
  function y(i) {
    f("throw", i);
  }
  function w(i, l) {
    i(l), n.shift(), n.length && f(n[0][0], n[0][1]);
  }
}
function T(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    o;
  return r
    ? r.call(e)
    : ((e = typeof v == "function" ? v(e) : e[Symbol.iterator]()),
      (o = {}),
      t("next"),
      t("throw"),
      t("return"),
      (o[Symbol.asyncIterator] = function () {
        return this;
      }),
      o);
  function t(n) {
    o[n] =
      e[n] &&
      function (c) {
        return new Promise(function (u, f) {
          (c = e[n](c)), a(u, f, c.done, c.value);
        });
      };
  }
  function a(n, c, u, f) {
    Promise.resolve(f).then(function (p) {
      n({ value: p, done: u });
    }, c);
  }
}
export { x as a, m as b, P as c, S as d, b as e, E as f, T as g };
