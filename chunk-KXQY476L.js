var x = Object.create;
var m = Object.defineProperty,
  y = Object.defineProperties,
  z = Object.getOwnPropertyDescriptor,
  A = Object.getOwnPropertyDescriptors,
  B = Object.getOwnPropertyNames,
  n = Object.getOwnPropertySymbols,
  t = Object.getPrototypeOf,
  p = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  C = Reflect.get;
var l = (a, b) => ((b = Symbol[a]) ? b : Symbol.for("Symbol." + a)),
  D = (a) => {
    throw TypeError(a);
  };
var s = (a, b, c) =>
    b in a
      ? m(a, b, { enumerable: !0, configurable: !0, writable: !0, value: c })
      : (a[b] = c),
  G = (a, b) => {
    for (var c in (b ||= {})) p.call(b, c) && s(a, c, b[c]);
    if (n) for (var c of n(b)) u.call(b, c) && s(a, c, b[c]);
    return a;
  },
  H = (a, b) => y(a, A(b));
var I = ((a) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
    ? new Proxy(a, { get: (b, c) => (typeof require < "u" ? require : b)[c] })
    : a)(function (a) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + a + '" is not supported');
});
var J = (a, b) => {
  var c = {};
  for (var d in a) p.call(a, d) && b.indexOf(d) < 0 && (c[d] = a[d]);
  if (a != null && n)
    for (var d of n(a)) b.indexOf(d) < 0 && u.call(a, d) && (c[d] = a[d]);
  return c;
};
var E = (a, b) => () => (a && (b = a((a = 0))), b);
var K = (a, b) => () => (b || a((b = { exports: {} }).exports, b), b.exports),
  L = (a, b) => {
    for (var c in b) m(a, c, { get: b[c], enumerable: !0 });
  },
  o = (a, b, c, d) => {
    if ((b && typeof b == "object") || typeof b == "function")
      for (let e of B(b))
        !p.call(a, e) &&
          e !== c &&
          m(a, e, {
            get: () => b[e],
            enumerable: !(d = z(b, e)) || d.enumerable,
          });
    return a;
  },
  M = (a, b, c) => (o(a, b, "default"), c && o(c, b, "default")),
  N = (a, b, c) => (
    (c = a != null ? x(t(a)) : {}),
    o(
      b || !a || !a.__esModule
        ? m(c, "default", { value: a, enumerable: !0 })
        : c,
      a
    )
  ),
  O = (a) => o(m({}, "__esModule", { value: !0 }), a);
var P = (a, b, c) => C(t(a), c, b);
var Q = (a, b, c) =>
    new Promise((d, e) => {
      var f = (g) => {
          try {
            i(c.next(g));
          } catch (j) {
            e(j);
          }
        },
        h = (g) => {
          try {
            i(c.throw(g));
          } catch (j) {
            e(j);
          }
        },
        i = (g) => (g.done ? d(g.value) : Promise.resolve(g.value).then(f, h));
      i((c = c.apply(a, b)).next());
    }),
  v = function (a, b) {
    (this[0] = a), (this[1] = b);
  },
  R = (a, b, c) => {
    var d = (h, i, g, j) => {
        try {
          var q = c[h](i),
            r = (i = q.value) instanceof v,
            w = q.done;
          Promise.resolve(r ? i[0] : i)
            .then((k) =>
              r
                ? d(
                    h === "return" ? h : "next",
                    i[1] ? { done: k.done, value: k.value } : k,
                    g,
                    j
                  )
                : g({ value: k, done: w })
            )
            .catch((k) => d("throw", k, g, j));
        } catch (k) {
          j(k);
        }
      },
      e = (h) => (f[h] = (i) => new Promise((g, j) => d(h, i, g, j))),
      f = {};
    return (
      (c = c.apply(a, b)),
      (f[l("asyncIterator")] = () => f),
      e("next"),
      e("throw"),
      e("return"),
      f
    );
  },
  S = (a) => {
    var b = a[l("asyncIterator")],
      c = !1,
      d,
      e = {};
    return (
      b == null
        ? ((b = a[l("iterator")]()), (d = (f) => (e[f] = (h) => b[f](h))))
        : ((b = b.call(a)),
          (d = (f) =>
            (e[f] = (h) => {
              if (c) {
                if (((c = !1), f === "throw")) throw h;
                return h;
              }
              return (
                (c = !0),
                {
                  done: !1,
                  value: new v(
                    new Promise((i) => {
                      var g = b[f](h);
                      g instanceof Object || D("Object expected"), i(g);
                    }),
                    1
                  ),
                }
              );
            }))),
      (e[l("iterator")] = () => e),
      d("next"),
      "throw" in b
        ? d("throw")
        : (e.throw = (f) => {
            throw f;
          }),
      "return" in b && d("return"),
      e
    );
  },
  T = (a, b, c) =>
    (b = a[l("asyncIterator")])
      ? b.call(a)
      : ((a = a[l("iterator")]()),
        (b = {}),
        (c = (d, e) =>
          (e = a[d]) &&
          (b[d] = (f) =>
            new Promise(
              (h, i, g) => (
                (f = e.call(a, f)),
                (g = f.done),
                Promise.resolve(f.value).then(
                  (j) => h({ value: j, done: g }),
                  i
                )
              )
            ))),
        c("next"),
        c("return"),
        b);
var F = E(() => {});
export {
  G as a,
  H as b,
  I as c,
  J as d,
  E as e,
  K as f,
  L as g,
  M as h,
  N as i,
  O as j,
  P as k,
  Q as l,
  v as m,
  R as n,
  S as o,
  T as p,
  F as q,
};
