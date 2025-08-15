import { a as yi } from "./chunk-C2FWMNXD.js";
import {
  a as jn,
  b as Te,
  c as ya,
  d as bi,
  e as ba,
  f as at,
  g as $t,
  h as gr,
  i as _i,
  j as _a,
  k as Jt,
  l as vr,
  m as Si,
  n as Me,
  o as yr,
  p as xi,
  q as Ea,
  s as Pa,
  u as wa,
} from "./chunk-RF7OQ2FO.js";
import { a as va } from "./chunk-BOPS6WXW.js";
import {
  A as ca,
  B as ha,
  C as Ne,
  E as ma,
  G as pa,
  H as da,
  J as fa,
  M as ze,
  N as ua,
  S as ga,
  U as Ci,
  b as $n,
  d as qn,
  h as Kn,
  o as Un,
  q as aa,
  r as sa,
  u as oa,
  x as la,
} from "./chunk-YF7ATBOB.js";
import {
  A as zn,
  B as Gn,
  E as Hn,
  F as vi,
  G as Wn,
  H as Yn,
  K as Qn,
  L as Wt,
  M as Xn,
  N as Pt,
  O as Zn,
  P as Jn,
  Q as ta,
  R as ea,
  S as ia,
  b as fi,
  d as Ee,
  g as Fn,
  m as ui,
  n as Dn,
  p as Rn,
  pa as ra,
  q as gi,
  r as Ln,
  s as Vn,
  t as Bn,
  ta as na,
  u as On,
  ua as Bt,
  va as Sa,
  wa as xa,
  x as Nn,
  xa as Ca,
  y as Pe,
  z as we,
} from "./chunk-ABQK56SH.js";
import {
  $a as ci,
  Aa as lt,
  Ab as An,
  B as hn,
  Ca as bn,
  D as dr,
  Da as de,
  Ea as Y,
  Fa as si,
  G as ni,
  Ga as fe,
  Gb as kn,
  H as Vt,
  Ha as oi,
  Ia as ft,
  J as Xt,
  Ja as jt,
  Jb as In,
  K as ht,
  Ka as Mt,
  Kb as Oe,
  L as pe,
  La as At,
  M as mn,
  Ma as F,
  Na as L,
  Oa as W,
  Ob as Ht,
  Pa as _n,
  Q as pn,
  Qa as Sn,
  Qb as kt,
  R as Le,
  Sa as gt,
  Wa as it,
  Xa as $,
  Ya as Be,
  Za as oe,
  _a as li,
  a as ot,
  ab as ue,
  bb as ge,
  cb as xn,
  d as Gt,
  db as Cn,
  e as Fe,
  ea as Et,
  eb as En,
  fb as U,
  g as Lt,
  gb as _t,
  hb as St,
  i as De,
  ib as Zt,
  j as Q,
  ja as B,
  jb as Pn,
  ka as mt,
  kb as wn,
  la as dn,
  lb as Tn,
  ma as fr,
  n as X,
  o as Re,
  oa as fn,
  p as Ce,
  pb as hi,
  q as on,
  qa as un,
  qb as Z,
  ra as gn,
  rb as mi,
  sb as Mn,
  tb as ur,
  ua as vn,
  va as yn,
  vb as pi,
  w as ln,
  wa as ai,
  wb as di,
  x as tt,
  xa as Ve,
  y as et,
  z as cn,
} from "./chunk-FRM3FMZU.js";
import "./chunk-J6HUAGRI.js";
import "./chunk-L7NZVLCG.js";
import "./chunk-UV7ERROY.js";
import "./chunk-DXA257HR.js";
import "./chunk-URXTW6Z4.js";
import { b as hr, l as en, o as nn, v as ti } from "./chunk-2CMVC2QG.js";
import "./chunk-YHHDRASY.js";
import {
  $ as rn,
  Gb as sn,
  Ia as mr,
  L as Jr,
  M as ae,
  Ma as pr,
  Mb as ei,
  N as tn,
  Nb as zt,
  Rb as ii,
  Tb as ri,
  W as Je,
  c as Ze,
  ia as se,
  k as cr,
  p as xe,
  r as Zr,
  sa as an,
} from "./chunk-23ZZ27XK.js";
import "./chunk-7NO3R5IA.js";
import "./chunk-MXKSX4NU.js";
import "./chunk-7HG7UTUA.js";
import "./chunk-3VTBTNQ3.js";
import "./chunk-7VBKHTQI.js";
import "./chunk-YYSBJNVH.js";
import "./chunk-PV7NZOQN.js";
import "./chunk-4467BSCR.js";
import {
  a as Rt,
  b as lr,
  d as Xr,
  f as xs,
  i as Cs,
  l as me,
  q as N,
} from "./chunk-KXQY476L.js";
var us = xs((exports, module) => {
  "use strict";
  N();
  typeof navigator < "u" &&
    (function (t, e) {
      typeof exports == "object" && typeof module < "u"
        ? (module.exports = e())
        : typeof define == "function" && define.amd
        ? define(e)
        : ((t = typeof globalThis < "u" ? globalThis : t || self),
          (t.lottie = e()));
    })(exports, function () {
      "use strict";
      var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        _useWebWorker = !1,
        initialDefaultFrame = -999999,
        setWebWorker = function (e) {
          _useWebWorker = !!e;
        },
        getWebWorker = function () {
          return _useWebWorker;
        },
        setLocationHref = function (e) {
          locationHref = e;
        },
        getLocationHref = function () {
          return locationHref;
        };
      function createTag(t) {
        return document.createElement(t);
      }
      function extendPrototype(t, e) {
        var i,
          r = t.length,
          n;
        for (i = 0; i < r; i += 1) {
          n = t[i].prototype;
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) &&
              (e.prototype[a] = n[a]);
        }
      }
      function getDescriptor(t, e) {
        return Object.getOwnPropertyDescriptor(t, e);
      }
      function createProxyFunction(t) {
        function e() {}
        return (e.prototype = t), e;
      }
      var audioControllerFactory = (function () {
          function t(e) {
            (this.audios = []),
              (this.audioFactory = e),
              (this._volume = 1),
              (this._isMuted = !1);
          }
          return (
            (t.prototype = {
              addAudio: function (i) {
                this.audios.push(i);
              },
              pause: function () {
                var i,
                  r = this.audios.length;
                for (i = 0; i < r; i += 1) this.audios[i].pause();
              },
              resume: function () {
                var i,
                  r = this.audios.length;
                for (i = 0; i < r; i += 1) this.audios[i].resume();
              },
              setRate: function (i) {
                var r,
                  n = this.audios.length;
                for (r = 0; r < n; r += 1) this.audios[r].setRate(i);
              },
              createAudio: function (i) {
                return this.audioFactory
                  ? this.audioFactory(i)
                  : window.Howl
                  ? new window.Howl({ src: [i] })
                  : {
                      isPlaying: !1,
                      play: function () {
                        this.isPlaying = !0;
                      },
                      seek: function () {
                        this.isPlaying = !1;
                      },
                      playing: function () {},
                      rate: function () {},
                      setVolume: function () {},
                    };
              },
              setAudioFactory: function (i) {
                this.audioFactory = i;
              },
              setVolume: function (i) {
                (this._volume = i), this._updateVolume();
              },
              mute: function () {
                (this._isMuted = !0), this._updateVolume();
              },
              unmute: function () {
                (this._isMuted = !1), this._updateVolume();
              },
              getVolume: function () {
                return this._volume;
              },
              _updateVolume: function () {
                var i,
                  r = this.audios.length;
                for (i = 0; i < r; i += 1)
                  this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
              },
            }),
            function () {
              return new t();
            }
          );
        })(),
        createTypedArray = (function () {
          function t(i, r) {
            var n = 0,
              a = [],
              s;
            switch (i) {
              case "int16":
              case "uint8c":
                s = 1;
                break;
              default:
                s = 1.1;
                break;
            }
            for (n = 0; n < r; n += 1) a.push(s);
            return a;
          }
          function e(i, r) {
            return i === "float32"
              ? new Float32Array(r)
              : i === "int16"
              ? new Int16Array(r)
              : i === "uint8c"
              ? new Uint8ClampedArray(r)
              : t(i, r);
          }
          return typeof Uint8ClampedArray == "function" &&
            typeof Float32Array == "function"
            ? e
            : t;
        })();
      function createSizedArray(t) {
        return Array.apply(null, { length: t });
      }
      function _typeof$6(t) {
        "@babel/helpers - typeof";
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$6 = function (i) {
                return typeof i;
              })
            : (_typeof$6 = function (i) {
                return i &&
                  typeof Symbol == "function" &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? "symbol"
                  : typeof i;
              }),
          _typeof$6(t)
        );
      }
      var subframeEnabled = !0,
        expressionsPlugin = null,
        expressionsInterfaces = null,
        idPrefix$1 = "",
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        _shouldRoundValues = !1,
        bmPow = Math.pow,
        bmSqrt = Math.sqrt,
        bmFloor = Math.floor,
        bmMax = Math.max,
        bmMin = Math.min,
        BMMath = {};
      (function () {
        var t = [
            "abs",
            "acos",
            "acosh",
            "asin",
            "asinh",
            "atan",
            "atanh",
            "atan2",
            "ceil",
            "cbrt",
            "expm1",
            "clz32",
            "cos",
            "cosh",
            "exp",
            "floor",
            "fround",
            "hypot",
            "imul",
            "log",
            "log1p",
            "log2",
            "log10",
            "max",
            "min",
            "pow",
            "random",
            "round",
            "sign",
            "sin",
            "sinh",
            "sqrt",
            "tan",
            "tanh",
            "trunc",
            "E",
            "LN10",
            "LN2",
            "LOG10E",
            "LOG2E",
            "PI",
            "SQRT1_2",
            "SQRT2",
          ],
          e,
          i = t.length;
        for (e = 0; e < i; e += 1) BMMath[t[e]] = Math[t[e]];
      })();
      function ProjectInterface$1() {
        return {};
      }
      (BMMath.random = Math.random),
        (BMMath.abs = function (t) {
          var e = _typeof$6(t);
          if (e === "object" && t.length) {
            var i = createSizedArray(t.length),
              r,
              n = t.length;
            for (r = 0; r < n; r += 1) i[r] = Math.abs(t[r]);
            return i;
          }
          return Math.abs(t);
        });
      var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = 0.5519;
      function roundValues(t) {
        _shouldRoundValues = !!t;
      }
      function bmRnd(t) {
        return _shouldRoundValues ? Math.round(t) : t;
      }
      function styleDiv(t) {
        (t.style.position = "absolute"),
          (t.style.top = 0),
          (t.style.left = 0),
          (t.style.display = "block"),
          (t.style.transformOrigin = "0 0"),
          (t.style.webkitTransformOrigin = "0 0"),
          (t.style.backfaceVisibility = "visible"),
          (t.style.webkitBackfaceVisibility = "visible"),
          (t.style.transformStyle = "preserve-3d"),
          (t.style.webkitTransformStyle = "preserve-3d"),
          (t.style.mozTransformStyle = "preserve-3d");
      }
      function BMEnterFrameEvent(t, e, i, r) {
        (this.type = t),
          (this.currentTime = e),
          (this.totalTime = i),
          (this.direction = r < 0 ? -1 : 1);
      }
      function BMCompleteEvent(t, e) {
        (this.type = t), (this.direction = e < 0 ? -1 : 1);
      }
      function BMCompleteLoopEvent(t, e, i, r) {
        (this.type = t),
          (this.currentLoop = i),
          (this.totalLoops = e),
          (this.direction = r < 0 ? -1 : 1);
      }
      function BMSegmentStartEvent(t, e, i) {
        (this.type = t), (this.firstFrame = e), (this.totalFrames = i);
      }
      function BMDestroyEvent(t, e) {
        (this.type = t), (this.target = e);
      }
      function BMRenderFrameErrorEvent(t, e) {
        (this.type = "renderFrameError"),
          (this.nativeError = t),
          (this.currentTime = e);
      }
      function BMConfigErrorEvent(t) {
        (this.type = "configError"), (this.nativeError = t);
      }
      function BMAnimationConfigErrorEvent(t, e) {
        (this.type = t), (this.nativeError = e);
      }
      var createElementID = (function () {
        var t = 0;
        return function () {
          return (t += 1), idPrefix$1 + "__lottie_element_" + t;
        };
      })();
      function HSVtoRGB(t, e, i) {
        var r, n, a, s, o, l, c, p;
        switch (
          ((s = Math.floor(t * 6)),
          (o = t * 6 - s),
          (l = i * (1 - e)),
          (c = i * (1 - o * e)),
          (p = i * (1 - (1 - o) * e)),
          s % 6)
        ) {
          case 0:
            (r = i), (n = p), (a = l);
            break;
          case 1:
            (r = c), (n = i), (a = l);
            break;
          case 2:
            (r = l), (n = i), (a = p);
            break;
          case 3:
            (r = l), (n = c), (a = i);
            break;
          case 4:
            (r = p), (n = l), (a = i);
            break;
          case 5:
            (r = i), (n = l), (a = c);
            break;
          default:
            break;
        }
        return [r, n, a];
      }
      function RGBtoHSV(t, e, i) {
        var r = Math.max(t, e, i),
          n = Math.min(t, e, i),
          a = r - n,
          s,
          o = r === 0 ? 0 : a / r,
          l = r / 255;
        switch (r) {
          case n:
            s = 0;
            break;
          case t:
            (s = e - i + a * (e < i ? 6 : 0)), (s /= 6 * a);
            break;
          case e:
            (s = i - t + a * 2), (s /= 6 * a);
            break;
          case i:
            (s = t - e + a * 4), (s /= 6 * a);
            break;
          default:
            break;
        }
        return [s, o, l];
      }
      function addSaturationToRGB(t, e) {
        var i = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
        return (
          (i[1] += e),
          i[1] > 1 ? (i[1] = 1) : i[1] <= 0 && (i[1] = 0),
          HSVtoRGB(i[0], i[1], i[2])
        );
      }
      function addBrightnessToRGB(t, e) {
        var i = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
        return (
          (i[2] += e),
          i[2] > 1 ? (i[2] = 1) : i[2] < 0 && (i[2] = 0),
          HSVtoRGB(i[0], i[1], i[2])
        );
      }
      function addHueToRGB(t, e) {
        var i = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
        return (
          (i[0] += e / 360),
          i[0] > 1 ? (i[0] -= 1) : i[0] < 0 && (i[0] += 1),
          HSVtoRGB(i[0], i[1], i[2])
        );
      }
      var rgbToHex = (function () {
          var t = [],
            e,
            i;
          for (e = 0; e < 256; e += 1)
            (i = e.toString(16)), (t[e] = i.length === 1 ? "0" + i : i);
          return function (r, n, a) {
            return (
              r < 0 && (r = 0),
              n < 0 && (n = 0),
              a < 0 && (a = 0),
              "#" + t[r] + t[n] + t[a]
            );
          };
        })(),
        setSubframeEnabled = function (e) {
          subframeEnabled = !!e;
        },
        getSubframeEnabled = function () {
          return subframeEnabled;
        },
        setExpressionsPlugin = function (e) {
          expressionsPlugin = e;
        },
        getExpressionsPlugin = function () {
          return expressionsPlugin;
        },
        setExpressionInterfaces = function (e) {
          expressionsInterfaces = e;
        },
        getExpressionInterfaces = function () {
          return expressionsInterfaces;
        },
        setDefaultCurveSegments = function (e) {
          defaultCurveSegments = e;
        },
        getDefaultCurveSegments = function () {
          return defaultCurveSegments;
        },
        setIdPrefix = function (e) {
          idPrefix$1 = e;
        },
        getIdPrefix = function () {
          return idPrefix$1;
        };
      function createNS(t) {
        return document.createElementNS(svgNS, t);
      }
      function _typeof$5(t) {
        "@babel/helpers - typeof";
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$5 = function (i) {
                return typeof i;
              })
            : (_typeof$5 = function (i) {
                return i &&
                  typeof Symbol == "function" &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? "symbol"
                  : typeof i;
              }),
          _typeof$5(t)
        );
      }
      var dataManager = (function () {
          var t = 1,
            e = [],
            i,
            r,
            n = {
              onmessage: function () {},
              postMessage: function (b) {
                i({ data: b });
              },
            },
            a = {
              postMessage: function (b) {
                n.onmessage({ data: b });
              },
            };
          function s(h) {
            if (window.Worker && window.Blob && getWebWorker()) {
              var b = new Blob(
                  ["var _workerSelf = self; self.onmessage = ", h.toString()],
                  { type: "text/javascript" }
                ),
                v = URL.createObjectURL(b);
              return new Worker(v);
            }
            return (i = h), n;
          }
          function o() {
            r ||
              ((r = s(function (b) {
                function v() {
                  function E(R, x) {
                    var w,
                      g,
                      S = R.length,
                      k,
                      A,
                      V,
                      q;
                    for (g = 0; g < S; g += 1)
                      if (((w = R[g]), "ks" in w && !w.completed)) {
                        if (((w.completed = !0), w.hasMask)) {
                          var G = w.masksProperties;
                          for (A = G.length, k = 0; k < A; k += 1)
                            if (G[k].pt.k.i) C(G[k].pt.k);
                            else
                              for (q = G[k].pt.k.length, V = 0; V < q; V += 1)
                                G[k].pt.k[V].s && C(G[k].pt.k[V].s[0]),
                                  G[k].pt.k[V].e && C(G[k].pt.k[V].e[0]);
                        }
                        w.ty === 0
                          ? ((w.layers = m(w.refId, x)), E(w.layers, x))
                          : w.ty === 4
                          ? y(w.shapes)
                          : w.ty === 5 && j(w);
                      }
                  }
                  function d(R, x) {
                    if (R) {
                      var w = 0,
                        g = R.length;
                      for (w = 0; w < g; w += 1)
                        R[w].t === 1 &&
                          ((R[w].data.layers = m(R[w].data.refId, x)),
                          E(R[w].data.layers, x));
                    }
                  }
                  function u(R, x) {
                    for (var w = 0, g = x.length; w < g; ) {
                      if (x[w].id === R) return x[w];
                      w += 1;
                    }
                    return null;
                  }
                  function m(R, x) {
                    var w = u(R, x);
                    return w
                      ? w.layers.__used
                        ? JSON.parse(JSON.stringify(w.layers))
                        : ((w.layers.__used = !0), w.layers)
                      : null;
                  }
                  function y(R) {
                    var x,
                      w = R.length,
                      g,
                      S;
                    for (x = w - 1; x >= 0; x -= 1)
                      if (R[x].ty === "sh")
                        if (R[x].ks.k.i) C(R[x].ks.k);
                        else
                          for (S = R[x].ks.k.length, g = 0; g < S; g += 1)
                            R[x].ks.k[g].s && C(R[x].ks.k[g].s[0]),
                              R[x].ks.k[g].e && C(R[x].ks.k[g].e[0]);
                      else R[x].ty === "gr" && y(R[x].it);
                  }
                  function C(R) {
                    var x,
                      w = R.i.length;
                    for (x = 0; x < w; x += 1)
                      (R.i[x][0] += R.v[x][0]),
                        (R.i[x][1] += R.v[x][1]),
                        (R.o[x][0] += R.v[x][0]),
                        (R.o[x][1] += R.v[x][1]);
                  }
                  function P(R, x) {
                    var w = x ? x.split(".") : [100, 100, 100];
                    return R[0] > w[0]
                      ? !0
                      : w[0] > R[0]
                      ? !1
                      : R[1] > w[1]
                      ? !0
                      : w[1] > R[1]
                      ? !1
                      : R[2] > w[2]
                      ? !0
                      : w[2] > R[2]
                      ? !1
                      : null;
                  }
                  var T = (function () {
                      var R = [4, 4, 14];
                      function x(g) {
                        var S = g.t.d;
                        g.t.d = { k: [{ s: S, t: 0 }] };
                      }
                      function w(g) {
                        var S,
                          k = g.length;
                        for (S = 0; S < k; S += 1) g[S].ty === 5 && x(g[S]);
                      }
                      return function (g) {
                        if (P(R, g.v) && (w(g.layers), g.assets)) {
                          var S,
                            k = g.assets.length;
                          for (S = 0; S < k; S += 1)
                            g.assets[S].layers && w(g.assets[S].layers);
                        }
                      };
                    })(),
                    M = (function () {
                      var R = [4, 7, 99];
                      return function (x) {
                        if (x.chars && !P(R, x.v)) {
                          var w,
                            g = x.chars.length;
                          for (w = 0; w < g; w += 1) {
                            var S = x.chars[w];
                            S.data &&
                              S.data.shapes &&
                              (y(S.data.shapes),
                              (S.data.ip = 0),
                              (S.data.op = 99999),
                              (S.data.st = 0),
                              (S.data.sr = 1),
                              (S.data.ks = {
                                p: { k: [0, 0], a: 0 },
                                s: { k: [100, 100], a: 0 },
                                a: { k: [0, 0], a: 0 },
                                r: { k: 0, a: 0 },
                                o: { k: 100, a: 0 },
                              }),
                              x.chars[w].t ||
                                (S.data.shapes.push({ ty: "no" }),
                                S.data.shapes[0].it.push({
                                  p: { k: [0, 0], a: 0 },
                                  s: { k: [100, 100], a: 0 },
                                  a: { k: [0, 0], a: 0 },
                                  r: { k: 0, a: 0 },
                                  o: { k: 100, a: 0 },
                                  sk: { k: 0, a: 0 },
                                  sa: { k: 0, a: 0 },
                                  ty: "tr",
                                })));
                          }
                        }
                      };
                    })(),
                    I = (function () {
                      var R = [5, 7, 15];
                      function x(g) {
                        var S = g.t.p;
                        typeof S.a == "number" && (S.a = { a: 0, k: S.a }),
                          typeof S.p == "number" && (S.p = { a: 0, k: S.p }),
                          typeof S.r == "number" && (S.r = { a: 0, k: S.r });
                      }
                      function w(g) {
                        var S,
                          k = g.length;
                        for (S = 0; S < k; S += 1) g[S].ty === 5 && x(g[S]);
                      }
                      return function (g) {
                        if (P(R, g.v) && (w(g.layers), g.assets)) {
                          var S,
                            k = g.assets.length;
                          for (S = 0; S < k; S += 1)
                            g.assets[S].layers && w(g.assets[S].layers);
                        }
                      };
                    })(),
                    z = (function () {
                      var R = [4, 1, 9];
                      function x(g) {
                        var S,
                          k = g.length,
                          A,
                          V;
                        for (S = 0; S < k; S += 1)
                          if (g[S].ty === "gr") x(g[S].it);
                          else if (g[S].ty === "fl" || g[S].ty === "st")
                            if (g[S].c.k && g[S].c.k[0].i)
                              for (V = g[S].c.k.length, A = 0; A < V; A += 1)
                                g[S].c.k[A].s &&
                                  ((g[S].c.k[A].s[0] /= 255),
                                  (g[S].c.k[A].s[1] /= 255),
                                  (g[S].c.k[A].s[2] /= 255),
                                  (g[S].c.k[A].s[3] /= 255)),
                                  g[S].c.k[A].e &&
                                    ((g[S].c.k[A].e[0] /= 255),
                                    (g[S].c.k[A].e[1] /= 255),
                                    (g[S].c.k[A].e[2] /= 255),
                                    (g[S].c.k[A].e[3] /= 255));
                            else
                              (g[S].c.k[0] /= 255),
                                (g[S].c.k[1] /= 255),
                                (g[S].c.k[2] /= 255),
                                (g[S].c.k[3] /= 255);
                      }
                      function w(g) {
                        var S,
                          k = g.length;
                        for (S = 0; S < k; S += 1)
                          g[S].ty === 4 && x(g[S].shapes);
                      }
                      return function (g) {
                        if (P(R, g.v) && (w(g.layers), g.assets)) {
                          var S,
                            k = g.assets.length;
                          for (S = 0; S < k; S += 1)
                            g.assets[S].layers && w(g.assets[S].layers);
                        }
                      };
                    })(),
                    O = (function () {
                      var R = [4, 4, 18];
                      function x(g) {
                        var S,
                          k = g.length,
                          A,
                          V;
                        for (S = k - 1; S >= 0; S -= 1)
                          if (g[S].ty === "sh")
                            if (g[S].ks.k.i) g[S].ks.k.c = g[S].closed;
                            else
                              for (V = g[S].ks.k.length, A = 0; A < V; A += 1)
                                g[S].ks.k[A].s &&
                                  (g[S].ks.k[A].s[0].c = g[S].closed),
                                  g[S].ks.k[A].e &&
                                    (g[S].ks.k[A].e[0].c = g[S].closed);
                          else g[S].ty === "gr" && x(g[S].it);
                      }
                      function w(g) {
                        var S,
                          k,
                          A = g.length,
                          V,
                          q,
                          G,
                          nt;
                        for (k = 0; k < A; k += 1) {
                          if (((S = g[k]), S.hasMask)) {
                            var st = S.masksProperties;
                            for (q = st.length, V = 0; V < q; V += 1)
                              if (st[V].pt.k.i) st[V].pt.k.c = st[V].cl;
                              else
                                for (
                                  nt = st[V].pt.k.length, G = 0;
                                  G < nt;
                                  G += 1
                                )
                                  st[V].pt.k[G].s &&
                                    (st[V].pt.k[G].s[0].c = st[V].cl),
                                    st[V].pt.k[G].e &&
                                      (st[V].pt.k[G].e[0].c = st[V].cl);
                          }
                          S.ty === 4 && x(S.shapes);
                        }
                      }
                      return function (g) {
                        if (P(R, g.v) && (w(g.layers), g.assets)) {
                          var S,
                            k = g.assets.length;
                          for (S = 0; S < k; S += 1)
                            g.assets[S].layers && w(g.assets[S].layers);
                        }
                      };
                    })();
                  function D(R) {
                    R.__complete ||
                      (z(R),
                      T(R),
                      M(R),
                      I(R),
                      O(R),
                      E(R.layers, R.assets),
                      d(R.chars, R.assets),
                      (R.__complete = !0));
                  }
                  function j(R) {
                    R.t.a.length === 0 && "m" in R.t.p;
                  }
                  var H = {};
                  return (
                    (H.completeData = D),
                    (H.checkColors = z),
                    (H.checkChars = M),
                    (H.checkPathProperties = I),
                    (H.checkShapes = O),
                    (H.completeLayers = E),
                    H
                  );
                }
                if (
                  (a.dataManager || (a.dataManager = v()),
                  a.assetLoader ||
                    (a.assetLoader = (function () {
                      function E(u) {
                        var m = u.getResponseHeader("content-type");
                        return (m &&
                          u.responseType === "json" &&
                          m.indexOf("json") !== -1) ||
                          (u.response && _typeof$5(u.response) === "object")
                          ? u.response
                          : u.response && typeof u.response == "string"
                          ? JSON.parse(u.response)
                          : u.responseText
                          ? JSON.parse(u.responseText)
                          : null;
                      }
                      function d(u, m, y, C) {
                        var P,
                          T = new XMLHttpRequest();
                        try {
                          T.responseType = "json";
                        } catch {}
                        T.onreadystatechange = function () {
                          if (T.readyState === 4)
                            if (T.status === 200) (P = E(T)), y(P);
                            else
                              try {
                                (P = E(T)), y(P);
                              } catch (M) {
                                C && C(M);
                              }
                        };
                        try {
                          T.open(["G", "E", "T"].join(""), u, !0);
                        } catch {
                          T.open(["G", "E", "T"].join(""), m + "/" + u, !0);
                        }
                        T.send();
                      }
                      return { load: d };
                    })()),
                  b.data.type === "loadAnimation")
                )
                  a.assetLoader.load(
                    b.data.path,
                    b.data.fullPath,
                    function (E) {
                      a.dataManager.completeData(E),
                        a.postMessage({
                          id: b.data.id,
                          payload: E,
                          status: "success",
                        });
                    },
                    function () {
                      a.postMessage({ id: b.data.id, status: "error" });
                    }
                  );
                else if (b.data.type === "complete") {
                  var f = b.data.animation;
                  a.dataManager.completeData(f),
                    a.postMessage({
                      id: b.data.id,
                      payload: f,
                      status: "success",
                    });
                } else
                  b.data.type === "loadData" &&
                    a.assetLoader.load(
                      b.data.path,
                      b.data.fullPath,
                      function (E) {
                        a.postMessage({
                          id: b.data.id,
                          payload: E,
                          status: "success",
                        });
                      },
                      function () {
                        a.postMessage({ id: b.data.id, status: "error" });
                      }
                    );
              })),
              (r.onmessage = function (h) {
                var b = h.data,
                  v = b.id,
                  f = e[v];
                (e[v] = null),
                  b.status === "success"
                    ? f.onComplete(b.payload)
                    : f.onError && f.onError();
              }));
          }
          function l(h, b) {
            t += 1;
            var v = "processId_" + t;
            return (e[v] = { onComplete: h, onError: b }), v;
          }
          function c(h, b, v) {
            o();
            var f = l(b, v);
            r.postMessage({
              type: "loadAnimation",
              path: h,
              fullPath: window.location.origin + window.location.pathname,
              id: f,
            });
          }
          function p(h, b, v) {
            o();
            var f = l(b, v);
            r.postMessage({
              type: "loadData",
              path: h,
              fullPath: window.location.origin + window.location.pathname,
              id: f,
            });
          }
          function _(h, b, v) {
            o();
            var f = l(b, v);
            r.postMessage({ type: "complete", animation: h, id: f });
          }
          return { loadAnimation: c, loadData: p, completeAnimation: _ };
        })(),
        ImagePreloader = (function () {
          var t = (function () {
            var d = createTag("canvas");
            (d.width = 1), (d.height = 1);
            var u = d.getContext("2d");
            return (u.fillStyle = "rgba(0,0,0,0)"), u.fillRect(0, 0, 1, 1), d;
          })();
          function e() {
            (this.loadedAssets += 1),
              this.loadedAssets === this.totalImages &&
                this.loadedFootagesCount === this.totalFootages &&
                this.imagesLoadedCb &&
                this.imagesLoadedCb(null);
          }
          function i() {
            (this.loadedFootagesCount += 1),
              this.loadedAssets === this.totalImages &&
                this.loadedFootagesCount === this.totalFootages &&
                this.imagesLoadedCb &&
                this.imagesLoadedCb(null);
          }
          function r(d, u, m) {
            var y = "";
            if (d.e) y = d.p;
            else if (u) {
              var C = d.p;
              C.indexOf("images/") !== -1 && (C = C.split("/")[1]), (y = u + C);
            } else (y = m), (y += d.u ? d.u : ""), (y += d.p);
            return y;
          }
          function n(d) {
            var u = 0,
              m = setInterval(
                function () {
                  var y = d.getBBox();
                  (y.width || u > 500) &&
                    (this._imageLoaded(), clearInterval(m)),
                    (u += 1);
                }.bind(this),
                50
              );
          }
          function a(d) {
            var u = r(d, this.assetsPath, this.path),
              m = createNS("image");
            isSafari
              ? this.testImageLoaded(m)
              : m.addEventListener("load", this._imageLoaded, !1),
              m.addEventListener(
                "error",
                function () {
                  (y.img = t), this._imageLoaded();
                }.bind(this),
                !1
              ),
              m.setAttributeNS("http://www.w3.org/1999/xlink", "href", u),
              this._elementHelper.append
                ? this._elementHelper.append(m)
                : this._elementHelper.appendChild(m);
            var y = { img: m, assetData: d };
            return y;
          }
          function s(d) {
            var u = r(d, this.assetsPath, this.path),
              m = createTag("img");
            (m.crossOrigin = "anonymous"),
              m.addEventListener("load", this._imageLoaded, !1),
              m.addEventListener(
                "error",
                function () {
                  (y.img = t), this._imageLoaded();
                }.bind(this),
                !1
              ),
              (m.src = u);
            var y = { img: m, assetData: d };
            return y;
          }
          function o(d) {
            var u = { assetData: d },
              m = r(d, this.assetsPath, this.path);
            return (
              dataManager.loadData(
                m,
                function (y) {
                  (u.img = y), this._footageLoaded();
                }.bind(this),
                function () {
                  (u.img = {}), this._footageLoaded();
                }.bind(this)
              ),
              u
            );
          }
          function l(d, u) {
            this.imagesLoadedCb = u;
            var m,
              y = d.length;
            for (m = 0; m < y; m += 1)
              d[m].layers ||
                (!d[m].t || d[m].t === "seq"
                  ? ((this.totalImages += 1),
                    this.images.push(this._createImageData(d[m])))
                  : d[m].t === 3 &&
                    ((this.totalFootages += 1),
                    this.images.push(this.createFootageData(d[m]))));
          }
          function c(d) {
            this.path = d || "";
          }
          function p(d) {
            this.assetsPath = d || "";
          }
          function _(d) {
            for (var u = 0, m = this.images.length; u < m; ) {
              if (this.images[u].assetData === d) return this.images[u].img;
              u += 1;
            }
            return null;
          }
          function h() {
            (this.imagesLoadedCb = null), (this.images.length = 0);
          }
          function b() {
            return this.totalImages === this.loadedAssets;
          }
          function v() {
            return this.totalFootages === this.loadedFootagesCount;
          }
          function f(d, u) {
            d === "svg"
              ? ((this._elementHelper = u),
                (this._createImageData = this.createImageData.bind(this)))
              : (this._createImageData = this.createImgData.bind(this));
          }
          function E() {
            (this._imageLoaded = e.bind(this)),
              (this._footageLoaded = i.bind(this)),
              (this.testImageLoaded = n.bind(this)),
              (this.createFootageData = o.bind(this)),
              (this.assetsPath = ""),
              (this.path = ""),
              (this.totalImages = 0),
              (this.totalFootages = 0),
              (this.loadedAssets = 0),
              (this.loadedFootagesCount = 0),
              (this.imagesLoadedCb = null),
              (this.images = []);
          }
          return (
            (E.prototype = {
              loadAssets: l,
              setAssetsPath: p,
              setPath: c,
              loadedImages: b,
              loadedFootages: v,
              destroy: h,
              getAsset: _,
              createImgData: s,
              createImageData: a,
              imageLoaded: e,
              footageLoaded: i,
              setCacheType: f,
            }),
            E
          );
        })();
      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function (e, i) {
          if (this._cbs[e])
            for (var r = this._cbs[e], n = 0; n < r.length; n += 1) r[n](i);
        },
        addEventListener: function (e, i) {
          return (
            this._cbs[e] || (this._cbs[e] = []),
            this._cbs[e].push(i),
            function () {
              this.removeEventListener(e, i);
            }.bind(this)
          );
        },
        removeEventListener: function (e, i) {
          if (!i) this._cbs[e] = null;
          else if (this._cbs[e]) {
            for (var r = 0, n = this._cbs[e].length; r < n; )
              this._cbs[e][r] === i &&
                (this._cbs[e].splice(r, 1), (r -= 1), (n -= 1)),
                (r += 1);
            this._cbs[e].length || (this._cbs[e] = null);
          }
        },
      };
      var markerParser = (function () {
          function t(e) {
            for (
              var i = e.split(`\r
`),
                r = {},
                n,
                a = 0,
                s = 0;
              s < i.length;
              s += 1
            )
              (n = i[s].split(":")),
                n.length === 2 && ((r[n[0]] = n[1].trim()), (a += 1));
            if (a === 0) throw new Error();
            return r;
          }
          return function (e) {
            for (var i = [], r = 0; r < e.length; r += 1) {
              var n = e[r],
                a = { time: n.tm, duration: n.dr };
              try {
                a.payload = JSON.parse(e[r].cm);
              } catch {
                try {
                  a.payload = t(e[r].cm);
                } catch {
                  a.payload = { name: e[r].cm };
                }
              }
              i.push(a);
            }
            return i;
          };
        })(),
        ProjectInterface = (function () {
          function t(e) {
            this.compositions.push(e);
          }
          return function () {
            function e(i) {
              for (var r = 0, n = this.compositions.length; r < n; ) {
                if (
                  this.compositions[r].data &&
                  this.compositions[r].data.nm === i
                )
                  return (
                    this.compositions[r].prepareFrame &&
                      this.compositions[r].data.xt &&
                      this.compositions[r].prepareFrame(this.currentFrame),
                    this.compositions[r].compInterface
                  );
                r += 1;
              }
              return null;
            }
            return (
              (e.compositions = []),
              (e.currentFrame = 0),
              (e.registerComposition = t),
              e
            );
          };
        })(),
        renderers = {},
        registerRenderer = function (e, i) {
          renderers[e] = i;
        };
      function getRenderer(t) {
        return renderers[t];
      }
      function getRegisteredRenderer() {
        if (renderers.canvas) return "canvas";
        for (var t in renderers) if (renderers[t]) return t;
        return "";
      }
      function _typeof$4(t) {
        "@babel/helpers - typeof";
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$4 = function (i) {
                return typeof i;
              })
            : (_typeof$4 = function (i) {
                return i &&
                  typeof Symbol == "function" &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? "symbol"
                  : typeof i;
              }),
          _typeof$4(t)
        );
      }
      var AnimationItem = function () {
        (this._cbs = []),
          (this.name = ""),
          (this.path = ""),
          (this.isLoaded = !1),
          (this.currentFrame = 0),
          (this.currentRawFrame = 0),
          (this.firstFrame = 0),
          (this.totalFrames = 0),
          (this.frameRate = 0),
          (this.frameMult = 0),
          (this.playSpeed = 1),
          (this.playDirection = 1),
          (this.playCount = 0),
          (this.animationData = {}),
          (this.assets = []),
          (this.isPaused = !0),
          (this.autoplay = !1),
          (this.loop = !0),
          (this.renderer = null),
          (this.animationID = createElementID()),
          (this.assetsPath = ""),
          (this.timeCompleted = 0),
          (this.segmentPos = 0),
          (this.isSubframeEnabled = getSubframeEnabled()),
          (this.segments = []),
          (this._idle = !0),
          (this._completedLoop = !1),
          (this.projectInterface = ProjectInterface()),
          (this.imagePreloader = new ImagePreloader()),
          (this.audioController = audioControllerFactory()),
          (this.markers = []),
          (this.configAnimation = this.configAnimation.bind(this)),
          (this.onSetupError = this.onSetupError.bind(this)),
          (this.onSegmentComplete = this.onSegmentComplete.bind(this)),
          (this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)),
          (this.expressionsPlugin = getExpressionsPlugin());
      };
      extendPrototype([BaseEvent], AnimationItem),
        (AnimationItem.prototype.setParams = function (t) {
          (t.wrapper || t.container) &&
            (this.wrapper = t.wrapper || t.container);
          var e = "svg";
          t.animType ? (e = t.animType) : t.renderer && (e = t.renderer);
          var i = getRenderer(e);
          (this.renderer = new i(this, t.rendererSettings)),
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
            this.renderer.setProjectInterface(this.projectInterface),
            (this.animType = e),
            t.loop === "" ||
            t.loop === null ||
            t.loop === void 0 ||
            t.loop === !0
              ? (this.loop = !0)
              : t.loop === !1
              ? (this.loop = !1)
              : (this.loop = parseInt(t.loop, 10)),
            (this.autoplay = "autoplay" in t ? t.autoplay : !0),
            (this.name = t.name ? t.name : ""),
            (this.autoloadSegments = Object.prototype.hasOwnProperty.call(
              t,
              "autoloadSegments"
            )
              ? t.autoloadSegments
              : !0),
            (this.assetsPath = t.assetsPath),
            (this.initialSegment = t.initialSegment),
            t.audioFactory &&
              this.audioController.setAudioFactory(t.audioFactory),
            t.animationData
              ? this.setupAnimation(t.animationData)
              : t.path &&
                (t.path.lastIndexOf("\\") !== -1
                  ? (this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1))
                  : (this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1)),
                (this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1)),
                (this.fileName = this.fileName.substr(
                  0,
                  this.fileName.lastIndexOf(".json")
                )),
                dataManager.loadAnimation(
                  t.path,
                  this.configAnimation,
                  this.onSetupError
                ));
        }),
        (AnimationItem.prototype.onSetupError = function () {
          this.trigger("data_failed");
        }),
        (AnimationItem.prototype.setupAnimation = function (t) {
          dataManager.completeAnimation(t, this.configAnimation);
        }),
        (AnimationItem.prototype.setData = function (t, e) {
          e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
          var i = { wrapper: t, animationData: e },
            r = t.attributes;
          (i.path = r.getNamedItem("data-animation-path")
            ? r.getNamedItem("data-animation-path").value
            : r.getNamedItem("data-bm-path")
            ? r.getNamedItem("data-bm-path").value
            : r.getNamedItem("bm-path")
            ? r.getNamedItem("bm-path").value
            : ""),
            (i.animType = r.getNamedItem("data-anim-type")
              ? r.getNamedItem("data-anim-type").value
              : r.getNamedItem("data-bm-type")
              ? r.getNamedItem("data-bm-type").value
              : r.getNamedItem("bm-type")
              ? r.getNamedItem("bm-type").value
              : r.getNamedItem("data-bm-renderer")
              ? r.getNamedItem("data-bm-renderer").value
              : r.getNamedItem("bm-renderer")
              ? r.getNamedItem("bm-renderer").value
              : getRegisteredRenderer() || "canvas");
          var n = r.getNamedItem("data-anim-loop")
            ? r.getNamedItem("data-anim-loop").value
            : r.getNamedItem("data-bm-loop")
            ? r.getNamedItem("data-bm-loop").value
            : r.getNamedItem("bm-loop")
            ? r.getNamedItem("bm-loop").value
            : "";
          n === "false"
            ? (i.loop = !1)
            : n === "true"
            ? (i.loop = !0)
            : n !== "" && (i.loop = parseInt(n, 10));
          var a = r.getNamedItem("data-anim-autoplay")
            ? r.getNamedItem("data-anim-autoplay").value
            : r.getNamedItem("data-bm-autoplay")
            ? r.getNamedItem("data-bm-autoplay").value
            : r.getNamedItem("bm-autoplay")
            ? r.getNamedItem("bm-autoplay").value
            : !0;
          (i.autoplay = a !== "false"),
            (i.name = r.getNamedItem("data-name")
              ? r.getNamedItem("data-name").value
              : r.getNamedItem("data-bm-name")
              ? r.getNamedItem("data-bm-name").value
              : r.getNamedItem("bm-name")
              ? r.getNamedItem("bm-name").value
              : "");
          var s = r.getNamedItem("data-anim-prerender")
            ? r.getNamedItem("data-anim-prerender").value
            : r.getNamedItem("data-bm-prerender")
            ? r.getNamedItem("data-bm-prerender").value
            : r.getNamedItem("bm-prerender")
            ? r.getNamedItem("bm-prerender").value
            : "";
          s === "false" && (i.prerender = !1),
            i.path ? this.setParams(i) : this.trigger("destroy");
        }),
        (AnimationItem.prototype.includeLayers = function (t) {
          t.op > this.animationData.op &&
            ((this.animationData.op = t.op),
            (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
          var e = this.animationData.layers,
            i,
            r = e.length,
            n = t.layers,
            a,
            s = n.length;
          for (a = 0; a < s; a += 1)
            for (i = 0; i < r; ) {
              if (e[i].id === n[a].id) {
                e[i] = n[a];
                break;
              }
              i += 1;
            }
          if (
            ((t.chars || t.fonts) &&
              (this.renderer.globalData.fontManager.addChars(t.chars),
              this.renderer.globalData.fontManager.addFonts(
                t.fonts,
                this.renderer.globalData.defs
              )),
            t.assets)
          )
            for (r = t.assets.length, i = 0; i < r; i += 1)
              this.animationData.assets.push(t.assets[i]);
          (this.animationData.__complete = !1),
            dataManager.completeAnimation(
              this.animationData,
              this.onSegmentComplete
            );
        }),
        (AnimationItem.prototype.onSegmentComplete = function (t) {
          this.animationData = t;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.loadNextSegment();
        }),
        (AnimationItem.prototype.loadNextSegment = function () {
          var t = this.animationData.segments;
          if (!t || t.length === 0 || !this.autoloadSegments) {
            this.trigger("data_ready"), (this.timeCompleted = this.totalFrames);
            return;
          }
          var e = t.shift();
          this.timeCompleted = e.time * this.frameRate;
          var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
          (this.segmentPos += 1),
            dataManager.loadData(
              i,
              this.includeLayers.bind(this),
              function () {
                this.trigger("data_failed");
              }.bind(this)
            );
        }),
        (AnimationItem.prototype.loadSegments = function () {
          var t = this.animationData.segments;
          t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
        }),
        (AnimationItem.prototype.imagesLoaded = function () {
          this.trigger("loaded_images"), this.checkLoaded();
        }),
        (AnimationItem.prototype.preloadImages = function () {
          this.imagePreloader.setAssetsPath(this.assetsPath),
            this.imagePreloader.setPath(this.path),
            this.imagePreloader.loadAssets(
              this.animationData.assets,
              this.imagesLoaded.bind(this)
            );
        }),
        (AnimationItem.prototype.configAnimation = function (t) {
          if (this.renderer)
            try {
              (this.animationData = t),
                this.initialSegment
                  ? ((this.totalFrames = Math.floor(
                      this.initialSegment[1] - this.initialSegment[0]
                    )),
                    (this.firstFrame = Math.round(this.initialSegment[0])))
                  : ((this.totalFrames = Math.floor(
                      this.animationData.op - this.animationData.ip
                    )),
                    (this.firstFrame = Math.round(this.animationData.ip))),
                this.renderer.configAnimation(t),
                t.assets || (t.assets = []),
                (this.assets = this.animationData.assets),
                (this.frameRate = this.animationData.fr),
                (this.frameMult = this.animationData.fr / 1e3),
                this.renderer.searchExtraCompositions(t.assets),
                (this.markers = markerParser(t.markers || [])),
                this.trigger("config_ready"),
                this.preloadImages(),
                this.loadSegments(),
                this.updaFrameModifier(),
                this.waitForFontsLoaded(),
                this.isPaused && this.audioController.pause();
            } catch (e) {
              this.triggerConfigError(e);
            }
        }),
        (AnimationItem.prototype.waitForFontsLoaded = function () {
          this.renderer &&
            (this.renderer.globalData.fontManager.isLoaded
              ? this.checkLoaded()
              : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }),
        (AnimationItem.prototype.checkLoaded = function () {
          if (
            !this.isLoaded &&
            this.renderer.globalData.fontManager.isLoaded &&
            (this.imagePreloader.loadedImages() ||
              this.renderer.rendererType !== "canvas") &&
            this.imagePreloader.loadedFootages()
          ) {
            this.isLoaded = !0;
            var t = getExpressionsPlugin();
            t && t.initExpressions(this),
              this.renderer.initItems(),
              setTimeout(
                function () {
                  this.trigger("DOMLoaded");
                }.bind(this),
                0
              ),
              this.gotoFrame(),
              this.autoplay && this.play();
          }
        }),
        (AnimationItem.prototype.resize = function (t, e) {
          var i = typeof t == "number" ? t : void 0,
            r = typeof e == "number" ? e : void 0;
          this.renderer.updateContainerSize(i, r);
        }),
        (AnimationItem.prototype.setSubframe = function (t) {
          this.isSubframeEnabled = !!t;
        }),
        (AnimationItem.prototype.gotoFrame = function () {
          (this.currentFrame = this.isSubframeEnabled
            ? this.currentRawFrame
            : ~~this.currentRawFrame),
            this.timeCompleted !== this.totalFrames &&
              this.currentFrame > this.timeCompleted &&
              (this.currentFrame = this.timeCompleted),
            this.trigger("enterFrame"),
            this.renderFrame(),
            this.trigger("drawnFrame");
        }),
        (AnimationItem.prototype.renderFrame = function () {
          if (!(this.isLoaded === !1 || !this.renderer))
            try {
              this.expressionsPlugin && this.expressionsPlugin.resetFrame(),
                this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (t) {
              this.triggerRenderFrameError(t);
            }
        }),
        (AnimationItem.prototype.play = function (t) {
          (t && this.name !== t) ||
            (this.isPaused === !0 &&
              ((this.isPaused = !1),
              this.trigger("_play"),
              this.audioController.resume(),
              this._idle && ((this._idle = !1), this.trigger("_active"))));
        }),
        (AnimationItem.prototype.pause = function (t) {
          (t && this.name !== t) ||
            (this.isPaused === !1 &&
              ((this.isPaused = !0),
              this.trigger("_pause"),
              (this._idle = !0),
              this.trigger("_idle"),
              this.audioController.pause()));
        }),
        (AnimationItem.prototype.togglePause = function (t) {
          (t && this.name !== t) ||
            (this.isPaused === !0 ? this.play() : this.pause());
        }),
        (AnimationItem.prototype.stop = function (t) {
          (t && this.name !== t) ||
            (this.pause(),
            (this.playCount = 0),
            (this._completedLoop = !1),
            this.setCurrentRawFrameValue(0));
        }),
        (AnimationItem.prototype.getMarkerData = function (t) {
          for (var e, i = 0; i < this.markers.length; i += 1)
            if (((e = this.markers[i]), e.payload && e.payload.name === t))
              return e;
          return null;
        }),
        (AnimationItem.prototype.goToAndStop = function (t, e, i) {
          if (!(i && this.name !== i)) {
            var r = Number(t);
            if (isNaN(r)) {
              var n = this.getMarkerData(t);
              n && this.goToAndStop(n.time, !0);
            } else
              e
                ? this.setCurrentRawFrameValue(t)
                : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause();
          }
        }),
        (AnimationItem.prototype.goToAndPlay = function (t, e, i) {
          if (!(i && this.name !== i)) {
            var r = Number(t);
            if (isNaN(r)) {
              var n = this.getMarkerData(t);
              n &&
                (n.duration
                  ? this.playSegments([n.time, n.time + n.duration], !0)
                  : this.goToAndStop(n.time, !0));
            } else this.goToAndStop(r, e, i);
            this.play();
          }
        }),
        (AnimationItem.prototype.advanceTime = function (t) {
          if (!(this.isPaused === !0 || this.isLoaded === !1)) {
            var e = this.currentRawFrame + t * this.frameModifier,
              i = !1;
            e >= this.totalFrames - 1 && this.frameModifier > 0
              ? !this.loop || this.playCount === this.loop
                ? this.checkSegments(
                    e > this.totalFrames ? e % this.totalFrames : 0
                  ) || ((i = !0), (e = this.totalFrames - 1))
                : e >= this.totalFrames
                ? ((this.playCount += 1),
                  this.checkSegments(e % this.totalFrames) ||
                    (this.setCurrentRawFrameValue(e % this.totalFrames),
                    (this._completedLoop = !0),
                    this.trigger("loopComplete")))
                : this.setCurrentRawFrameValue(e)
              : e < 0
              ? this.checkSegments(e % this.totalFrames) ||
                (this.loop && !(this.playCount-- <= 0 && this.loop !== !0)
                  ? (this.setCurrentRawFrameValue(
                      this.totalFrames + (e % this.totalFrames)
                    ),
                    this._completedLoop
                      ? this.trigger("loopComplete")
                      : (this._completedLoop = !0))
                  : ((i = !0), (e = 0)))
              : this.setCurrentRawFrameValue(e),
              i &&
                (this.setCurrentRawFrameValue(e),
                this.pause(),
                this.trigger("complete"));
          }
        }),
        (AnimationItem.prototype.adjustSegment = function (t, e) {
          (this.playCount = 0),
            t[1] < t[0]
              ? (this.frameModifier > 0 &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(-1)),
                (this.totalFrames = t[0] - t[1]),
                (this.timeCompleted = this.totalFrames),
                (this.firstFrame = t[1]),
                this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
              : t[1] > t[0] &&
                (this.frameModifier < 0 &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(1)),
                (this.totalFrames = t[1] - t[0]),
                (this.timeCompleted = this.totalFrames),
                (this.firstFrame = t[0]),
                this.setCurrentRawFrameValue(0.001 + e)),
            this.trigger("segmentStart");
        }),
        (AnimationItem.prototype.setSegment = function (t, e) {
          var i = -1;
          this.isPaused &&
            (this.currentRawFrame + this.firstFrame < t
              ? (i = t)
              : this.currentRawFrame + this.firstFrame > e && (i = e - t)),
            (this.firstFrame = t),
            (this.totalFrames = e - t),
            (this.timeCompleted = this.totalFrames),
            i !== -1 && this.goToAndStop(i, !0);
        }),
        (AnimationItem.prototype.playSegments = function (t, e) {
          if ((e && (this.segments.length = 0), _typeof$4(t[0]) === "object")) {
            var i,
              r = t.length;
            for (i = 0; i < r; i += 1) this.segments.push(t[i]);
          } else this.segments.push(t);
          this.segments.length &&
            e &&
            this.adjustSegment(this.segments.shift(), 0),
            this.isPaused && this.play();
        }),
        (AnimationItem.prototype.resetSegments = function (t) {
          (this.segments.length = 0),
            this.segments.push([this.animationData.ip, this.animationData.op]),
            t && this.checkSegments(0);
        }),
        (AnimationItem.prototype.checkSegments = function (t) {
          return this.segments.length
            ? (this.adjustSegment(this.segments.shift(), t), !0)
            : !1;
        }),
        (AnimationItem.prototype.destroy = function (t) {
          (t && this.name !== t) ||
            !this.renderer ||
            (this.renderer.destroy(),
            this.imagePreloader.destroy(),
            this.trigger("destroy"),
            (this._cbs = null),
            (this.onEnterFrame = null),
            (this.onLoopComplete = null),
            (this.onComplete = null),
            (this.onSegmentStart = null),
            (this.onDestroy = null),
            (this.renderer = null),
            (this.expressionsPlugin = null),
            (this.imagePreloader = null),
            (this.projectInterface = null));
        }),
        (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
          (this.currentRawFrame = t), this.gotoFrame();
        }),
        (AnimationItem.prototype.setSpeed = function (t) {
          (this.playSpeed = t), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setDirection = function (t) {
          (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setLoop = function (t) {
          this.loop = t;
        }),
        (AnimationItem.prototype.setVolume = function (t, e) {
          (e && this.name !== e) || this.audioController.setVolume(t);
        }),
        (AnimationItem.prototype.getVolume = function () {
          return this.audioController.getVolume();
        }),
        (AnimationItem.prototype.mute = function (t) {
          (t && this.name !== t) || this.audioController.mute();
        }),
        (AnimationItem.prototype.unmute = function (t) {
          (t && this.name !== t) || this.audioController.unmute();
        }),
        (AnimationItem.prototype.updaFrameModifier = function () {
          (this.frameModifier =
            this.frameMult * this.playSpeed * this.playDirection),
            this.audioController.setRate(this.playSpeed * this.playDirection);
        }),
        (AnimationItem.prototype.getPath = function () {
          return this.path;
        }),
        (AnimationItem.prototype.getAssetsPath = function (t) {
          var e = "";
          if (t.e) e = t.p;
          else if (this.assetsPath) {
            var i = t.p;
            i.indexOf("images/") !== -1 && (i = i.split("/")[1]),
              (e = this.assetsPath + i);
          } else (e = this.path), (e += t.u ? t.u : ""), (e += t.p);
          return e;
        }),
        (AnimationItem.prototype.getAssetData = function (t) {
          for (var e = 0, i = this.assets.length; e < i; ) {
            if (t === this.assets[e].id) return this.assets[e];
            e += 1;
          }
          return null;
        }),
        (AnimationItem.prototype.hide = function () {
          this.renderer.hide();
        }),
        (AnimationItem.prototype.show = function () {
          this.renderer.show();
        }),
        (AnimationItem.prototype.getDuration = function (t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate;
        }),
        (AnimationItem.prototype.updateDocumentData = function (t, e, i) {
          try {
            var r = this.renderer.getElementByPath(t);
            r.updateDocumentData(e, i);
          } catch {}
        }),
        (AnimationItem.prototype.trigger = function (t) {
          if (this._cbs && this._cbs[t])
            switch (t) {
              case "enterFrame":
                this.triggerEvent(
                  t,
                  new BMEnterFrameEvent(
                    t,
                    this.currentFrame,
                    this.totalFrames,
                    this.frameModifier
                  )
                );
                break;
              case "drawnFrame":
                (this.drawnFrameEvent.currentTime = this.currentFrame),
                  (this.drawnFrameEvent.totalTime = this.totalFrames),
                  (this.drawnFrameEvent.direction = this.frameModifier),
                  this.triggerEvent(t, this.drawnFrameEvent);
                break;
              case "loopComplete":
                this.triggerEvent(
                  t,
                  new BMCompleteLoopEvent(
                    t,
                    this.loop,
                    this.playCount,
                    this.frameMult
                  )
                );
                break;
              case "complete":
                this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                break;
              case "segmentStart":
                this.triggerEvent(
                  t,
                  new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
                );
                break;
              case "destroy":
                this.triggerEvent(t, new BMDestroyEvent(t, this));
                break;
              default:
                this.triggerEvent(t);
            }
          t === "enterFrame" &&
            this.onEnterFrame &&
            this.onEnterFrame.call(
              this,
              new BMEnterFrameEvent(
                t,
                this.currentFrame,
                this.totalFrames,
                this.frameMult
              )
            ),
            t === "loopComplete" &&
              this.onLoopComplete &&
              this.onLoopComplete.call(
                this,
                new BMCompleteLoopEvent(
                  t,
                  this.loop,
                  this.playCount,
                  this.frameMult
                )
              ),
            t === "complete" &&
              this.onComplete &&
              this.onComplete.call(
                this,
                new BMCompleteEvent(t, this.frameMult)
              ),
            t === "segmentStart" &&
              this.onSegmentStart &&
              this.onSegmentStart.call(
                this,
                new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
              ),
            t === "destroy" &&
              this.onDestroy &&
              this.onDestroy.call(this, new BMDestroyEvent(t, this));
        }),
        (AnimationItem.prototype.triggerRenderFrameError = function (t) {
          var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e),
            this.onError && this.onError.call(this, e);
        }),
        (AnimationItem.prototype.triggerConfigError = function (t) {
          var e = new BMConfigErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e),
            this.onError && this.onError.call(this, e);
        });
      var animationManager = (function () {
          var t = {},
            e = [],
            i = 0,
            r = 0,
            n = 0,
            a = !0,
            s = !1;
          function o(x) {
            for (var w = 0, g = x.target; w < r; )
              e[w].animation === g &&
                (e.splice(w, 1), (w -= 1), (r -= 1), g.isPaused || _()),
                (w += 1);
          }
          function l(x, w) {
            if (!x) return null;
            for (var g = 0; g < r; ) {
              if (e[g].elem === x && e[g].elem !== null) return e[g].animation;
              g += 1;
            }
            var S = new AnimationItem();
            return h(S, x), S.setData(x, w), S;
          }
          function c() {
            var x,
              w = e.length,
              g = [];
            for (x = 0; x < w; x += 1) g.push(e[x].animation);
            return g;
          }
          function p() {
            (n += 1), z();
          }
          function _() {
            n -= 1;
          }
          function h(x, w) {
            x.addEventListener("destroy", o),
              x.addEventListener("_active", p),
              x.addEventListener("_idle", _),
              e.push({ elem: w, animation: x }),
              (r += 1);
          }
          function b(x) {
            var w = new AnimationItem();
            return h(w, null), w.setParams(x), w;
          }
          function v(x, w) {
            var g;
            for (g = 0; g < r; g += 1) e[g].animation.setSpeed(x, w);
          }
          function f(x, w) {
            var g;
            for (g = 0; g < r; g += 1) e[g].animation.setDirection(x, w);
          }
          function E(x) {
            var w;
            for (w = 0; w < r; w += 1) e[w].animation.play(x);
          }
          function d(x) {
            var w = x - i,
              g;
            for (g = 0; g < r; g += 1) e[g].animation.advanceTime(w);
            (i = x), n && !s ? window.requestAnimationFrame(d) : (a = !0);
          }
          function u(x) {
            (i = x), window.requestAnimationFrame(d);
          }
          function m(x) {
            var w;
            for (w = 0; w < r; w += 1) e[w].animation.pause(x);
          }
          function y(x, w, g) {
            var S;
            for (S = 0; S < r; S += 1) e[S].animation.goToAndStop(x, w, g);
          }
          function C(x) {
            var w;
            for (w = 0; w < r; w += 1) e[w].animation.stop(x);
          }
          function P(x) {
            var w;
            for (w = 0; w < r; w += 1) e[w].animation.togglePause(x);
          }
          function T(x) {
            var w;
            for (w = r - 1; w >= 0; w -= 1) e[w].animation.destroy(x);
          }
          function M(x, w, g) {
            var S = [].concat(
                [].slice.call(document.getElementsByClassName("lottie")),
                [].slice.call(document.getElementsByClassName("bodymovin"))
              ),
              k,
              A = S.length;
            for (k = 0; k < A; k += 1)
              g && S[k].setAttribute("data-bm-type", g), l(S[k], x);
            if (w && A === 0) {
              g || (g = "svg");
              var V = document.getElementsByTagName("body")[0];
              V.innerText = "";
              var q = createTag("div");
              (q.style.width = "100%"),
                (q.style.height = "100%"),
                q.setAttribute("data-bm-type", g),
                V.appendChild(q),
                l(q, x);
            }
          }
          function I() {
            var x;
            for (x = 0; x < r; x += 1) e[x].animation.resize();
          }
          function z() {
            !s && n && a && (window.requestAnimationFrame(u), (a = !1));
          }
          function O() {
            s = !0;
          }
          function D() {
            (s = !1), z();
          }
          function j(x, w) {
            var g;
            for (g = 0; g < r; g += 1) e[g].animation.setVolume(x, w);
          }
          function H(x) {
            var w;
            for (w = 0; w < r; w += 1) e[w].animation.mute(x);
          }
          function R(x) {
            var w;
            for (w = 0; w < r; w += 1) e[w].animation.unmute(x);
          }
          return (
            (t.registerAnimation = l),
            (t.loadAnimation = b),
            (t.setSpeed = v),
            (t.setDirection = f),
            (t.play = E),
            (t.pause = m),
            (t.stop = C),
            (t.togglePause = P),
            (t.searchAnimations = M),
            (t.resize = I),
            (t.goToAndStop = y),
            (t.destroy = T),
            (t.freeze = O),
            (t.unfreeze = D),
            (t.setVolume = j),
            (t.mute = H),
            (t.unmute = R),
            (t.getRegisteredAnimations = c),
            t
          );
        })(),
        BezierFactory = (function () {
          var t = {};
          t.getBezierEasing = i;
          var e = {};
          function i(u, m, y, C, P) {
            var T =
              P ||
              ("bez_" + u + "_" + m + "_" + y + "_" + C).replace(/\./g, "p");
            if (e[T]) return e[T];
            var M = new d([u, m, y, C]);
            return (e[T] = M), M;
          }
          var r = 4,
            n = 0.001,
            a = 1e-7,
            s = 10,
            o = 11,
            l = 1 / (o - 1),
            c = typeof Float32Array == "function";
          function p(u, m) {
            return 1 - 3 * m + 3 * u;
          }
          function _(u, m) {
            return 3 * m - 6 * u;
          }
          function h(u) {
            return 3 * u;
          }
          function b(u, m, y) {
            return ((p(m, y) * u + _(m, y)) * u + h(m)) * u;
          }
          function v(u, m, y) {
            return 3 * p(m, y) * u * u + 2 * _(m, y) * u + h(m);
          }
          function f(u, m, y, C, P) {
            var T,
              M,
              I = 0;
            do
              (M = m + (y - m) / 2),
                (T = b(M, C, P) - u),
                T > 0 ? (y = M) : (m = M);
            while (Math.abs(T) > a && ++I < s);
            return M;
          }
          function E(u, m, y, C) {
            for (var P = 0; P < r; ++P) {
              var T = v(m, y, C);
              if (T === 0) return m;
              var M = b(m, y, C) - u;
              m -= M / T;
            }
            return m;
          }
          function d(u) {
            (this._p = u),
              (this._mSampleValues = c ? new Float32Array(o) : new Array(o)),
              (this._precomputed = !1),
              (this.get = this.get.bind(this));
          }
          return (
            (d.prototype = {
              get: function (m) {
                var y = this._p[0],
                  C = this._p[1],
                  P = this._p[2],
                  T = this._p[3];
                return (
                  this._precomputed || this._precompute(),
                  y === C && P === T
                    ? m
                    : m === 0
                    ? 0
                    : m === 1
                    ? 1
                    : b(this._getTForX(m), C, T)
                );
              },
              _precompute: function () {
                var m = this._p[0],
                  y = this._p[1],
                  C = this._p[2],
                  P = this._p[3];
                (this._precomputed = !0),
                  (m !== y || C !== P) && this._calcSampleValues();
              },
              _calcSampleValues: function () {
                for (var m = this._p[0], y = this._p[2], C = 0; C < o; ++C)
                  this._mSampleValues[C] = b(C * l, m, y);
              },
              _getTForX: function (m) {
                for (
                  var y = this._p[0],
                    C = this._p[2],
                    P = this._mSampleValues,
                    T = 0,
                    M = 1,
                    I = o - 1;
                  M !== I && P[M] <= m;
                  ++M
                )
                  T += l;
                --M;
                var z = (m - P[M]) / (P[M + 1] - P[M]),
                  O = T + z * l,
                  D = v(O, y, C);
                return D >= n
                  ? E(m, O, y, C)
                  : D === 0
                  ? O
                  : f(m, T, T + l, y, C);
              },
            }),
            t
          );
        })(),
        pooling = (function () {
          function t(e) {
            return e.concat(createSizedArray(e.length));
          }
          return { double: t };
        })(),
        poolFactory = (function () {
          return function (t, e, i) {
            var r = 0,
              n = t,
              a = createSizedArray(n),
              s = { newElement: o, release: l };
            function o() {
              var c;
              return r ? ((r -= 1), (c = a[r])) : (c = e()), c;
            }
            function l(c) {
              r === n && ((a = pooling.double(a)), (n *= 2)),
                i && i(c),
                (a[r] = c),
                (r += 1);
            }
            return s;
          };
        })(),
        bezierLengthPool = (function () {
          function t() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments()),
            };
          }
          return poolFactory(8, t);
        })(),
        segmentsLengthPool = (function () {
          function t() {
            return { lengths: [], totalLength: 0 };
          }
          function e(i) {
            var r,
              n = i.lengths.length;
            for (r = 0; r < n; r += 1) bezierLengthPool.release(i.lengths[r]);
            i.lengths.length = 0;
          }
          return poolFactory(8, t, e);
        })();
      function bezFunction() {
        var t = Math;
        function e(h, b, v, f, E, d) {
          var u = h * f + b * E + v * d - E * f - d * h - v * b;
          return u > -0.001 && u < 0.001;
        }
        function i(h, b, v, f, E, d, u, m, y) {
          if (v === 0 && d === 0 && y === 0) return e(h, b, f, E, u, m);
          var C = t.sqrt(t.pow(f - h, 2) + t.pow(E - b, 2) + t.pow(d - v, 2)),
            P = t.sqrt(t.pow(u - h, 2) + t.pow(m - b, 2) + t.pow(y - v, 2)),
            T = t.sqrt(t.pow(u - f, 2) + t.pow(m - E, 2) + t.pow(y - d, 2)),
            M;
          return (
            C > P
              ? C > T
                ? (M = C - P - T)
                : (M = T - P - C)
              : T > P
              ? (M = T - P - C)
              : (M = P - C - T),
            M > -1e-4 && M < 1e-4
          );
        }
        var r = (function () {
          return function (h, b, v, f) {
            var E = getDefaultCurveSegments(),
              d,
              u,
              m,
              y,
              C,
              P = 0,
              T,
              M = [],
              I = [],
              z = bezierLengthPool.newElement();
            for (m = v.length, d = 0; d < E; d += 1) {
              for (C = d / (E - 1), T = 0, u = 0; u < m; u += 1)
                (y =
                  bmPow(1 - C, 3) * h[u] +
                  3 * bmPow(1 - C, 2) * C * v[u] +
                  3 * (1 - C) * bmPow(C, 2) * f[u] +
                  bmPow(C, 3) * b[u]),
                  (M[u] = y),
                  I[u] !== null && (T += bmPow(M[u] - I[u], 2)),
                  (I[u] = M[u]);
              T && ((T = bmSqrt(T)), (P += T)),
                (z.percents[d] = C),
                (z.lengths[d] = P);
            }
            return (z.addedLength = P), z;
          };
        })();
        function n(h) {
          var b = segmentsLengthPool.newElement(),
            v = h.c,
            f = h.v,
            E = h.o,
            d = h.i,
            u,
            m = h._length,
            y = b.lengths,
            C = 0;
          for (u = 0; u < m - 1; u += 1)
            (y[u] = r(f[u], f[u + 1], E[u], d[u + 1])), (C += y[u].addedLength);
          return (
            v &&
              m &&
              ((y[u] = r(f[u], f[0], E[u], d[0])), (C += y[u].addedLength)),
            (b.totalLength = C),
            b
          );
        }
        function a(h) {
          (this.segmentLength = 0), (this.points = new Array(h));
        }
        function s(h, b) {
          (this.partialLength = h), (this.point = b);
        }
        var o = (function () {
          var h = {};
          return function (b, v, f, E) {
            var d = (
              b[0] +
              "_" +
              b[1] +
              "_" +
              v[0] +
              "_" +
              v[1] +
              "_" +
              f[0] +
              "_" +
              f[1] +
              "_" +
              E[0] +
              "_" +
              E[1]
            ).replace(/\./g, "p");
            if (!h[d]) {
              var u = getDefaultCurveSegments(),
                m,
                y,
                C,
                P,
                T,
                M = 0,
                I,
                z,
                O = null;
              b.length === 2 &&
                (b[0] !== v[0] || b[1] !== v[1]) &&
                e(b[0], b[1], v[0], v[1], b[0] + f[0], b[1] + f[1]) &&
                e(b[0], b[1], v[0], v[1], v[0] + E[0], v[1] + E[1]) &&
                (u = 2);
              var D = new a(u);
              for (C = f.length, m = 0; m < u; m += 1) {
                for (
                  z = createSizedArray(C), T = m / (u - 1), I = 0, y = 0;
                  y < C;
                  y += 1
                )
                  (P =
                    bmPow(1 - T, 3) * b[y] +
                    3 * bmPow(1 - T, 2) * T * (b[y] + f[y]) +
                    3 * (1 - T) * bmPow(T, 2) * (v[y] + E[y]) +
                    bmPow(T, 3) * v[y]),
                    (z[y] = P),
                    O !== null && (I += bmPow(z[y] - O[y], 2));
                (I = bmSqrt(I)), (M += I), (D.points[m] = new s(I, z)), (O = z);
              }
              (D.segmentLength = M), (h[d] = D);
            }
            return h[d];
          };
        })();
        function l(h, b) {
          var v = b.percents,
            f = b.lengths,
            E = v.length,
            d = bmFloor((E - 1) * h),
            u = h * b.addedLength,
            m = 0;
          if (d === E - 1 || d === 0 || u === f[d]) return v[d];
          for (var y = f[d] > u ? -1 : 1, C = !0; C; )
            if (
              (f[d] <= u && f[d + 1] > u
                ? ((m = (u - f[d]) / (f[d + 1] - f[d])), (C = !1))
                : (d += y),
              d < 0 || d >= E - 1)
            ) {
              if (d === E - 1) return v[d];
              C = !1;
            }
          return v[d] + (v[d + 1] - v[d]) * m;
        }
        function c(h, b, v, f, E, d) {
          var u = l(E, d),
            m = 1 - u,
            y =
              t.round(
                (m * m * m * h[0] +
                  (u * m * m + m * u * m + m * m * u) * v[0] +
                  (u * u * m + m * u * u + u * m * u) * f[0] +
                  u * u * u * b[0]) *
                  1e3
              ) / 1e3,
            C =
              t.round(
                (m * m * m * h[1] +
                  (u * m * m + m * u * m + m * m * u) * v[1] +
                  (u * u * m + m * u * u + u * m * u) * f[1] +
                  u * u * u * b[1]) *
                  1e3
              ) / 1e3;
          return [y, C];
        }
        var p = createTypedArray("float32", 8);
        function _(h, b, v, f, E, d, u) {
          E < 0 ? (E = 0) : E > 1 && (E = 1);
          var m = l(E, u);
          d = d > 1 ? 1 : d;
          var y = l(d, u),
            C,
            P = h.length,
            T = 1 - m,
            M = 1 - y,
            I = T * T * T,
            z = m * T * T * 3,
            O = m * m * T * 3,
            D = m * m * m,
            j = T * T * M,
            H = m * T * M + T * m * M + T * T * y,
            R = m * m * M + T * m * y + m * T * y,
            x = m * m * y,
            w = T * M * M,
            g = m * M * M + T * y * M + T * M * y,
            S = m * y * M + T * y * y + m * M * y,
            k = m * y * y,
            A = M * M * M,
            V = y * M * M + M * y * M + M * M * y,
            q = y * y * M + M * y * y + y * M * y,
            G = y * y * y;
          for (C = 0; C < P; C += 1)
            (p[C * 4] =
              t.round((I * h[C] + z * v[C] + O * f[C] + D * b[C]) * 1e3) / 1e3),
              (p[C * 4 + 1] =
                t.round((j * h[C] + H * v[C] + R * f[C] + x * b[C]) * 1e3) /
                1e3),
              (p[C * 4 + 2] =
                t.round((w * h[C] + g * v[C] + S * f[C] + k * b[C]) * 1e3) /
                1e3),
              (p[C * 4 + 3] =
                t.round((A * h[C] + V * v[C] + q * f[C] + G * b[C]) * 1e3) /
                1e3);
          return p;
        }
        return {
          getSegmentsLength: n,
          getNewSegment: _,
          getPointInSegment: c,
          buildBezierData: o,
          pointOnLine2D: e,
          pointOnLine3D: i,
        };
      }
      var bez = bezFunction(),
        initFrame = initialDefaultFrame,
        mathAbs = Math.abs;
      function interpolateValue(t, e) {
        var i = this.offsetTime,
          r;
        this.propType === "multidimensional" &&
          (r = createTypedArray("float32", this.pv.length));
        for (
          var n = e.lastIndex,
            a = n,
            s = this.keyframes.length - 1,
            o = !0,
            l,
            c,
            p;
          o;

        ) {
          if (
            ((l = this.keyframes[a]),
            (c = this.keyframes[a + 1]),
            a === s - 1 && t >= c.t - i)
          ) {
            l.h && (l = c), (n = 0);
            break;
          }
          if (c.t - i > t) {
            n = a;
            break;
          }
          a < s - 1 ? (a += 1) : ((n = 0), (o = !1));
        }
        p = this.keyframesMetadata[a] || {};
        var _,
          h,
          b,
          v,
          f,
          E,
          d = c.t - i,
          u = l.t - i,
          m;
        if (l.to) {
          p.bezierData ||
            (p.bezierData = bez.buildBezierData(l.s, c.s || l.e, l.to, l.ti));
          var y = p.bezierData;
          if (t >= d || t < u) {
            var C = t >= d ? y.points.length - 1 : 0;
            for (h = y.points[C].point.length, _ = 0; _ < h; _ += 1)
              r[_] = y.points[C].point[_];
          } else {
            p.__fnct
              ? (E = p.__fnct)
              : ((E = BezierFactory.getBezierEasing(
                  l.o.x,
                  l.o.y,
                  l.i.x,
                  l.i.y,
                  l.n
                ).get),
                (p.__fnct = E)),
              (b = E((t - u) / (d - u)));
            var P = y.segmentLength * b,
              T,
              M =
                e.lastFrame < t && e._lastKeyframeIndex === a
                  ? e._lastAddedLength
                  : 0;
            for (
              f =
                e.lastFrame < t && e._lastKeyframeIndex === a
                  ? e._lastPoint
                  : 0,
                o = !0,
                v = y.points.length;
              o;

            ) {
              if (
                ((M += y.points[f].partialLength),
                P === 0 || b === 0 || f === y.points.length - 1)
              ) {
                for (h = y.points[f].point.length, _ = 0; _ < h; _ += 1)
                  r[_] = y.points[f].point[_];
                break;
              } else if (P >= M && P < M + y.points[f + 1].partialLength) {
                for (
                  T = (P - M) / y.points[f + 1].partialLength,
                    h = y.points[f].point.length,
                    _ = 0;
                  _ < h;
                  _ += 1
                )
                  r[_] =
                    y.points[f].point[_] +
                    (y.points[f + 1].point[_] - y.points[f].point[_]) * T;
                break;
              }
              f < v - 1 ? (f += 1) : (o = !1);
            }
            (e._lastPoint = f),
              (e._lastAddedLength = M - y.points[f].partialLength),
              (e._lastKeyframeIndex = a);
          }
        } else {
          var I, z, O, D, j;
          if (((s = l.s.length), (m = c.s || l.e), this.sh && l.h !== 1))
            if (t >= d) (r[0] = m[0]), (r[1] = m[1]), (r[2] = m[2]);
            else if (t <= u) (r[0] = l.s[0]), (r[1] = l.s[1]), (r[2] = l.s[2]);
            else {
              var H = createQuaternion(l.s),
                R = createQuaternion(m),
                x = (t - u) / (d - u);
              quaternionToEuler(r, slerp(H, R, x));
            }
          else
            for (a = 0; a < s; a += 1)
              l.h !== 1 &&
                (t >= d
                  ? (b = 1)
                  : t < u
                  ? (b = 0)
                  : (l.o.x.constructor === Array
                      ? (p.__fnct || (p.__fnct = []),
                        p.__fnct[a]
                          ? (E = p.__fnct[a])
                          : ((I = l.o.x[a] === void 0 ? l.o.x[0] : l.o.x[a]),
                            (z = l.o.y[a] === void 0 ? l.o.y[0] : l.o.y[a]),
                            (O = l.i.x[a] === void 0 ? l.i.x[0] : l.i.x[a]),
                            (D = l.i.y[a] === void 0 ? l.i.y[0] : l.i.y[a]),
                            (E = BezierFactory.getBezierEasing(I, z, O, D).get),
                            (p.__fnct[a] = E)))
                      : p.__fnct
                      ? (E = p.__fnct)
                      : ((I = l.o.x),
                        (z = l.o.y),
                        (O = l.i.x),
                        (D = l.i.y),
                        (E = BezierFactory.getBezierEasing(I, z, O, D).get),
                        (l.keyframeMetadata = E)),
                    (b = E((t - u) / (d - u))))),
                (m = c.s || l.e),
                (j = l.h === 1 ? l.s[a] : l.s[a] + (m[a] - l.s[a]) * b),
                this.propType === "multidimensional" ? (r[a] = j) : (r = j);
        }
        return (e.lastIndex = n), r;
      }
      function slerp(t, e, i) {
        var r = [],
          n = t[0],
          a = t[1],
          s = t[2],
          o = t[3],
          l = e[0],
          c = e[1],
          p = e[2],
          _ = e[3],
          h,
          b,
          v,
          f,
          E;
        return (
          (b = n * l + a * c + s * p + o * _),
          b < 0 && ((b = -b), (l = -l), (c = -c), (p = -p), (_ = -_)),
          1 - b > 1e-6
            ? ((h = Math.acos(b)),
              (v = Math.sin(h)),
              (f = Math.sin((1 - i) * h) / v),
              (E = Math.sin(i * h) / v))
            : ((f = 1 - i), (E = i)),
          (r[0] = f * n + E * l),
          (r[1] = f * a + E * c),
          (r[2] = f * s + E * p),
          (r[3] = f * o + E * _),
          r
        );
      }
      function quaternionToEuler(t, e) {
        var i = e[0],
          r = e[1],
          n = e[2],
          a = e[3],
          s = Math.atan2(2 * r * a - 2 * i * n, 1 - 2 * r * r - 2 * n * n),
          o = Math.asin(2 * i * r + 2 * n * a),
          l = Math.atan2(2 * i * a - 2 * r * n, 1 - 2 * i * i - 2 * n * n);
        (t[0] = s / degToRads), (t[1] = o / degToRads), (t[2] = l / degToRads);
      }
      function createQuaternion(t) {
        var e = t[0] * degToRads,
          i = t[1] * degToRads,
          r = t[2] * degToRads,
          n = Math.cos(e / 2),
          a = Math.cos(i / 2),
          s = Math.cos(r / 2),
          o = Math.sin(e / 2),
          l = Math.sin(i / 2),
          c = Math.sin(r / 2),
          p = n * a * s - o * l * c,
          _ = o * l * s + n * a * c,
          h = o * a * s + n * l * c,
          b = n * l * s - o * a * c;
        return [_, h, b, p];
      }
      function getValueAtCurrentTime() {
        var t = this.comp.renderedFrame - this.offsetTime,
          e = this.keyframes[0].t - this.offsetTime,
          i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (
          !(
            t === this._caching.lastFrame ||
            (this._caching.lastFrame !== initFrame &&
              ((this._caching.lastFrame >= i && t >= i) ||
                (this._caching.lastFrame < e && t < e)))
          )
        ) {
          this._caching.lastFrame >= t &&
            ((this._caching._lastKeyframeIndex = -1),
            (this._caching.lastIndex = 0));
          var r = this.interpolateValue(t, this._caching);
          this.pv = r;
        }
        return (this._caching.lastFrame = t), this.pv;
      }
      function setVValue(t) {
        var e;
        if (this.propType === "unidimensional")
          (e = t * this.mult),
            mathAbs(this.v - e) > 1e-5 && ((this.v = e), (this._mdf = !0));
        else
          for (var i = 0, r = this.v.length; i < r; )
            (e = t[i] * this.mult),
              mathAbs(this.v[i] - e) > 1e-5 &&
                ((this.v[i] = e), (this._mdf = !0)),
              (i += 1);
      }
      function processEffectsSequence() {
        if (
          !(
            this.elem.globalData.frameId === this.frameId ||
            !this.effectsSequence.length
          )
        ) {
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          (this.lock = !0), (this._mdf = this._isFirstFrame);
          var t,
            e = this.effectsSequence.length,
            i = this.kf ? this.pv : this.data.k;
          for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
          this.setVValue(i),
            (this._isFirstFrame = !1),
            (this.lock = !1),
            (this.frameId = this.elem.globalData.frameId);
        }
      }
      function addEffect(t) {
        this.effectsSequence.push(t), this.container.addDynamicProperty(this);
      }
      function ValueProperty(t, e, i, r) {
        (this.propType = "unidimensional"),
          (this.mult = i || 1),
          (this.data = e),
          (this.v = i ? e.k * i : e.k),
          (this.pv = e.k),
          (this._mdf = !1),
          (this.elem = t),
          (this.container = r),
          (this.comp = t.comp),
          (this.k = !1),
          (this.kf = !1),
          (this.vel = 0),
          (this.effectsSequence = []),
          (this._isFirstFrame = !0),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.addEffect = addEffect);
      }
      function MultiDimensionalProperty(t, e, i, r) {
        (this.propType = "multidimensional"),
          (this.mult = i || 1),
          (this.data = e),
          (this._mdf = !1),
          (this.elem = t),
          (this.container = r),
          (this.comp = t.comp),
          (this.k = !1),
          (this.kf = !1),
          (this.frameId = -1);
        var n,
          a = e.k.length;
        for (
          this.v = createTypedArray("float32", a),
            this.pv = createTypedArray("float32", a),
            this.vel = createTypedArray("float32", a),
            n = 0;
          n < a;
          n += 1
        )
          (this.v[n] = e.k[n] * this.mult), (this.pv[n] = e.k[n]);
        (this._isFirstFrame = !0),
          (this.effectsSequence = []),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.addEffect = addEffect);
      }
      function KeyframedValueProperty(t, e, i, r) {
        (this.propType = "unidimensional"),
          (this.keyframes = e.k),
          (this.keyframesMetadata = []),
          (this.offsetTime = t.data.st),
          (this.frameId = -1),
          (this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1,
          }),
          (this.k = !0),
          (this.kf = !0),
          (this.data = e),
          (this.mult = i || 1),
          (this.elem = t),
          (this.container = r),
          (this.comp = t.comp),
          (this.v = initFrame),
          (this.pv = initFrame),
          (this._isFirstFrame = !0),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.interpolateValue = interpolateValue),
          (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
          (this.addEffect = addEffect);
      }
      function KeyframedMultidimensionalProperty(t, e, i, r) {
        this.propType = "multidimensional";
        var n,
          a = e.k.length,
          s,
          o,
          l,
          c;
        for (n = 0; n < a - 1; n += 1)
          e.k[n].to &&
            e.k[n].s &&
            e.k[n + 1] &&
            e.k[n + 1].s &&
            ((s = e.k[n].s),
            (o = e.k[n + 1].s),
            (l = e.k[n].to),
            (c = e.k[n].ti),
            ((s.length === 2 &&
              !(s[0] === o[0] && s[1] === o[1]) &&
              bez.pointOnLine2D(
                s[0],
                s[1],
                o[0],
                o[1],
                s[0] + l[0],
                s[1] + l[1]
              ) &&
              bez.pointOnLine2D(
                s[0],
                s[1],
                o[0],
                o[1],
                o[0] + c[0],
                o[1] + c[1]
              )) ||
              (s.length === 3 &&
                !(s[0] === o[0] && s[1] === o[1] && s[2] === o[2]) &&
                bez.pointOnLine3D(
                  s[0],
                  s[1],
                  s[2],
                  o[0],
                  o[1],
                  o[2],
                  s[0] + l[0],
                  s[1] + l[1],
                  s[2] + l[2]
                ) &&
                bez.pointOnLine3D(
                  s[0],
                  s[1],
                  s[2],
                  o[0],
                  o[1],
                  o[2],
                  o[0] + c[0],
                  o[1] + c[1],
                  o[2] + c[2]
                ))) &&
              ((e.k[n].to = null), (e.k[n].ti = null)),
            s[0] === o[0] &&
              s[1] === o[1] &&
              l[0] === 0 &&
              l[1] === 0 &&
              c[0] === 0 &&
              c[1] === 0 &&
              (s.length === 2 || (s[2] === o[2] && l[2] === 0 && c[2] === 0)) &&
              ((e.k[n].to = null), (e.k[n].ti = null)));
        (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
          (this.data = e),
          (this.keyframes = e.k),
          (this.keyframesMetadata = []),
          (this.offsetTime = t.data.st),
          (this.k = !0),
          (this.kf = !0),
          (this._isFirstFrame = !0),
          (this.mult = i || 1),
          (this.elem = t),
          (this.container = r),
          (this.comp = t.comp),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.interpolateValue = interpolateValue),
          (this.frameId = -1);
        var p = e.k[0].s.length;
        for (
          this.v = createTypedArray("float32", p),
            this.pv = createTypedArray("float32", p),
            n = 0;
          n < p;
          n += 1
        )
          (this.v[n] = initFrame), (this.pv[n] = initFrame);
        (this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: createTypedArray("float32", p),
        }),
          (this.addEffect = addEffect);
      }
      var PropertyFactory = (function () {
        function t(i, r, n, a, s) {
          r.sid && (r = i.globalData.slotManager.getProp(r));
          var o;
          if (!r.k.length) o = new ValueProperty(i, r, a, s);
          else if (typeof r.k[0] == "number")
            o = new MultiDimensionalProperty(i, r, a, s);
          else
            switch (n) {
              case 0:
                o = new KeyframedValueProperty(i, r, a, s);
                break;
              case 1:
                o = new KeyframedMultidimensionalProperty(i, r, a, s);
                break;
              default:
                break;
            }
          return o.effectsSequence.length && s.addDynamicProperty(o), o;
        }
        var e = { getProp: t };
        return e;
      })();
      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function (e) {
          this.dynamicProperties.indexOf(e) === -1 &&
            (this.dynamicProperties.push(e),
            this.container.addDynamicProperty(this),
            (this._isAnimated = !0));
        },
        iterateDynamicProperties: function () {
          this._mdf = !1;
          var e,
            i = this.dynamicProperties.length;
          for (e = 0; e < i; e += 1)
            this.dynamicProperties[e].getValue(),
              this.dynamicProperties[e]._mdf && (this._mdf = !0);
        },
        initDynamicPropertyContainer: function (e) {
          (this.container = e),
            (this.dynamicProperties = []),
            (this._mdf = !1),
            (this._isAnimated = !1);
        },
      };
      var pointPool = (function () {
        function t() {
          return createTypedArray("float32", 2);
        }
        return poolFactory(8, t);
      })();
      function ShapePath() {
        (this.c = !1),
          (this._length = 0),
          (this._maxLength = 8),
          (this.v = createSizedArray(this._maxLength)),
          (this.o = createSizedArray(this._maxLength)),
          (this.i = createSizedArray(this._maxLength));
      }
      (ShapePath.prototype.setPathData = function (t, e) {
        (this.c = t), this.setLength(e);
        for (var i = 0; i < e; )
          (this.v[i] = pointPool.newElement()),
            (this.o[i] = pointPool.newElement()),
            (this.i[i] = pointPool.newElement()),
            (i += 1);
      }),
        (ShapePath.prototype.setLength = function (t) {
          for (; this._maxLength < t; ) this.doubleArrayLength();
          this._length = t;
        }),
        (ShapePath.prototype.doubleArrayLength = function () {
          (this.v = this.v.concat(createSizedArray(this._maxLength))),
            (this.i = this.i.concat(createSizedArray(this._maxLength))),
            (this.o = this.o.concat(createSizedArray(this._maxLength))),
            (this._maxLength *= 2);
        }),
        (ShapePath.prototype.setXYAt = function (t, e, i, r, n) {
          var a;
          switch (
            ((this._length = Math.max(this._length, r + 1)),
            this._length >= this._maxLength && this.doubleArrayLength(),
            i)
          ) {
            case "v":
              a = this.v;
              break;
            case "i":
              a = this.i;
              break;
            case "o":
              a = this.o;
              break;
            default:
              a = [];
              break;
          }
          (!a[r] || (a[r] && !n)) && (a[r] = pointPool.newElement()),
            (a[r][0] = t),
            (a[r][1] = e);
        }),
        (ShapePath.prototype.setTripleAt = function (t, e, i, r, n, a, s, o) {
          this.setXYAt(t, e, "v", s, o),
            this.setXYAt(i, r, "o", s, o),
            this.setXYAt(n, a, "i", s, o);
        }),
        (ShapePath.prototype.reverse = function () {
          var t = new ShapePath();
          t.setPathData(this.c, this._length);
          var e = this.v,
            i = this.o,
            r = this.i,
            n = 0;
          this.c &&
            (t.setTripleAt(
              e[0][0],
              e[0][1],
              r[0][0],
              r[0][1],
              i[0][0],
              i[0][1],
              0,
              !1
            ),
            (n = 1));
          var a = this._length - 1,
            s = this._length,
            o;
          for (o = n; o < s; o += 1)
            t.setTripleAt(
              e[a][0],
              e[a][1],
              r[a][0],
              r[a][1],
              i[a][0],
              i[a][1],
              o,
              !1
            ),
              (a -= 1);
          return t;
        }),
        (ShapePath.prototype.length = function () {
          return this._length;
        });
      var shapePool = (function () {
        function t() {
          return new ShapePath();
        }
        function e(n) {
          var a = n._length,
            s;
          for (s = 0; s < a; s += 1)
            pointPool.release(n.v[s]),
              pointPool.release(n.i[s]),
              pointPool.release(n.o[s]),
              (n.v[s] = null),
              (n.i[s] = null),
              (n.o[s] = null);
          (n._length = 0), (n.c = !1);
        }
        function i(n) {
          var a = r.newElement(),
            s,
            o = n._length === void 0 ? n.v.length : n._length;
          for (a.setLength(o), a.c = n.c, s = 0; s < o; s += 1)
            a.setTripleAt(
              n.v[s][0],
              n.v[s][1],
              n.o[s][0],
              n.o[s][1],
              n.i[s][0],
              n.i[s][1],
              s
            );
          return a;
        }
        var r = poolFactory(4, t, e);
        return (r.clone = i), r;
      })();
      function ShapeCollection() {
        (this._length = 0),
          (this._maxLength = 4),
          (this.shapes = createSizedArray(this._maxLength));
      }
      (ShapeCollection.prototype.addShape = function (t) {
        this._length === this._maxLength &&
          ((this.shapes = this.shapes.concat(
            createSizedArray(this._maxLength)
          )),
          (this._maxLength *= 2)),
          (this.shapes[this._length] = t),
          (this._length += 1);
      }),
        (ShapeCollection.prototype.releaseShapes = function () {
          var t;
          for (t = 0; t < this._length; t += 1)
            shapePool.release(this.shapes[t]);
          this._length = 0;
        });
      var shapeCollectionPool = (function () {
          var t = { newShapeCollection: n, release: a },
            e = 0,
            i = 4,
            r = createSizedArray(i);
          function n() {
            var s;
            return e ? ((e -= 1), (s = r[e])) : (s = new ShapeCollection()), s;
          }
          function a(s) {
            var o,
              l = s._length;
            for (o = 0; o < l; o += 1) shapePool.release(s.shapes[o]);
            (s._length = 0),
              e === i && ((r = pooling.double(r)), (i *= 2)),
              (r[e] = s),
              (e += 1);
          }
          return t;
        })(),
        ShapePropertyFactory = (function () {
          var t = -999999;
          function e(d, u, m) {
            var y = m.lastIndex,
              C,
              P,
              T,
              M,
              I,
              z,
              O,
              D,
              j,
              H = this.keyframes;
            if (d < H[0].t - this.offsetTime)
              (C = H[0].s[0]), (T = !0), (y = 0);
            else if (d >= H[H.length - 1].t - this.offsetTime)
              (C = H[H.length - 1].s
                ? H[H.length - 1].s[0]
                : H[H.length - 2].e[0]),
                (T = !0);
            else {
              for (
                var R = y, x = H.length - 1, w = !0, g, S, k;
                w && ((g = H[R]), (S = H[R + 1]), !(S.t - this.offsetTime > d));

              )
                R < x - 1 ? (R += 1) : (w = !1);
              if (
                ((k = this.keyframesMetadata[R] || {}),
                (T = g.h === 1),
                (y = R),
                !T)
              ) {
                if (d >= S.t - this.offsetTime) D = 1;
                else if (d < g.t - this.offsetTime) D = 0;
                else {
                  var A;
                  k.__fnct
                    ? (A = k.__fnct)
                    : ((A = BezierFactory.getBezierEasing(
                        g.o.x,
                        g.o.y,
                        g.i.x,
                        g.i.y
                      ).get),
                      (k.__fnct = A)),
                    (D = A(
                      (d - (g.t - this.offsetTime)) /
                        (S.t - this.offsetTime - (g.t - this.offsetTime))
                    ));
                }
                P = S.s ? S.s[0] : g.e[0];
              }
              C = g.s[0];
            }
            for (
              z = u._length, O = C.i[0].length, m.lastIndex = y, M = 0;
              M < z;
              M += 1
            )
              for (I = 0; I < O; I += 1)
                (j = T ? C.i[M][I] : C.i[M][I] + (P.i[M][I] - C.i[M][I]) * D),
                  (u.i[M][I] = j),
                  (j = T ? C.o[M][I] : C.o[M][I] + (P.o[M][I] - C.o[M][I]) * D),
                  (u.o[M][I] = j),
                  (j = T ? C.v[M][I] : C.v[M][I] + (P.v[M][I] - C.v[M][I]) * D),
                  (u.v[M][I] = j);
          }
          function i() {
            var d = this.comp.renderedFrame - this.offsetTime,
              u = this.keyframes[0].t - this.offsetTime,
              m = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
              y = this._caching.lastFrame;
            return (
              (y !== t && ((y < u && d < u) || (y > m && d > m))) ||
                ((this._caching.lastIndex =
                  y < d ? this._caching.lastIndex : 0),
                this.interpolateShape(d, this.pv, this._caching)),
              (this._caching.lastFrame = d),
              this.pv
            );
          }
          function r() {
            this.paths = this.localShapeCollection;
          }
          function n(d, u) {
            if (d._length !== u._length || d.c !== u.c) return !1;
            var m,
              y = d._length;
            for (m = 0; m < y; m += 1)
              if (
                d.v[m][0] !== u.v[m][0] ||
                d.v[m][1] !== u.v[m][1] ||
                d.o[m][0] !== u.o[m][0] ||
                d.o[m][1] !== u.o[m][1] ||
                d.i[m][0] !== u.i[m][0] ||
                d.i[m][1] !== u.i[m][1]
              )
                return !1;
            return !0;
          }
          function a(d) {
            n(this.v, d) ||
              ((this.v = shapePool.clone(d)),
              this.localShapeCollection.releaseShapes(),
              this.localShapeCollection.addShape(this.v),
              (this._mdf = !0),
              (this.paths = this.localShapeCollection));
          }
          function s() {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (!this.effectsSequence.length) {
                this._mdf = !1;
                return;
              }
              if (this.lock) {
                this.setVValue(this.pv);
                return;
              }
              (this.lock = !0), (this._mdf = !1);
              var d;
              this.kf
                ? (d = this.pv)
                : this.data.ks
                ? (d = this.data.ks.k)
                : (d = this.data.pt.k);
              var u,
                m = this.effectsSequence.length;
              for (u = 0; u < m; u += 1) d = this.effectsSequence[u](d);
              this.setVValue(d),
                (this.lock = !1),
                (this.frameId = this.elem.globalData.frameId);
            }
          }
          function o(d, u, m) {
            (this.propType = "shape"),
              (this.comp = d.comp),
              (this.container = d),
              (this.elem = d),
              (this.data = u),
              (this.k = !1),
              (this.kf = !1),
              (this._mdf = !1);
            var y = m === 3 ? u.pt.k : u.ks.k;
            (this.v = shapePool.clone(y)),
              (this.pv = shapePool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollectionPool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.reset = r),
              (this.effectsSequence = []);
          }
          function l(d) {
            this.effectsSequence.push(d),
              this.container.addDynamicProperty(this);
          }
          (o.prototype.interpolateShape = e),
            (o.prototype.getValue = s),
            (o.prototype.setVValue = a),
            (o.prototype.addEffect = l);
          function c(d, u, m) {
            (this.propType = "shape"),
              (this.comp = d.comp),
              (this.elem = d),
              (this.container = d),
              (this.offsetTime = d.data.st),
              (this.keyframes = m === 3 ? u.pt.k : u.ks.k),
              (this.keyframesMetadata = []),
              (this.k = !0),
              (this.kf = !0);
            var y = this.keyframes[0].s[0].i.length;
            (this.v = shapePool.newElement()),
              this.v.setPathData(this.keyframes[0].s[0].c, y),
              (this.pv = shapePool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollectionPool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.lastFrame = t),
              (this.reset = r),
              (this._caching = { lastFrame: t, lastIndex: 0 }),
              (this.effectsSequence = [i.bind(this)]);
          }
          (c.prototype.getValue = s),
            (c.prototype.interpolateShape = e),
            (c.prototype.setVValue = a),
            (c.prototype.addEffect = l);
          var p = (function () {
              var d = roundCorner;
              function u(m, y) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 4),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.localShapeCollection.addShape(this.v),
                  (this.d = y.d),
                  (this.elem = m),
                  (this.comp = m.comp),
                  (this.frameId = -1),
                  this.initDynamicPropertyContainer(m),
                  (this.p = PropertyFactory.getProp(m, y.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(m, y.s, 1, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertEllToPath());
              }
              return (
                (u.prototype = {
                  reset: r,
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._mdf && this.convertEllToPath());
                  },
                  convertEllToPath: function () {
                    var y = this.p.v[0],
                      C = this.p.v[1],
                      P = this.s.v[0] / 2,
                      T = this.s.v[1] / 2,
                      M = this.d !== 3,
                      I = this.v;
                    (I.v[0][0] = y),
                      (I.v[0][1] = C - T),
                      (I.v[1][0] = M ? y + P : y - P),
                      (I.v[1][1] = C),
                      (I.v[2][0] = y),
                      (I.v[2][1] = C + T),
                      (I.v[3][0] = M ? y - P : y + P),
                      (I.v[3][1] = C),
                      (I.i[0][0] = M ? y - P * d : y + P * d),
                      (I.i[0][1] = C - T),
                      (I.i[1][0] = M ? y + P : y - P),
                      (I.i[1][1] = C - T * d),
                      (I.i[2][0] = M ? y + P * d : y - P * d),
                      (I.i[2][1] = C + T),
                      (I.i[3][0] = M ? y - P : y + P),
                      (I.i[3][1] = C + T * d),
                      (I.o[0][0] = M ? y + P * d : y - P * d),
                      (I.o[0][1] = C - T),
                      (I.o[1][0] = M ? y + P : y - P),
                      (I.o[1][1] = C + T * d),
                      (I.o[2][0] = M ? y - P * d : y + P * d),
                      (I.o[2][1] = C + T),
                      (I.o[3][0] = M ? y - P : y + P),
                      (I.o[3][1] = C - T * d);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], u),
                u
              );
            })(),
            _ = (function () {
              function d(u, m) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 0),
                  (this.elem = u),
                  (this.comp = u.comp),
                  (this.data = m),
                  (this.frameId = -1),
                  (this.d = m.d),
                  this.initDynamicPropertyContainer(u),
                  m.sy === 1
                    ? ((this.ir = PropertyFactory.getProp(u, m.ir, 0, 0, this)),
                      (this.is = PropertyFactory.getProp(
                        u,
                        m.is,
                        0,
                        0.01,
                        this
                      )),
                      (this.convertToPath = this.convertStarToPath))
                    : (this.convertToPath = this.convertPolygonToPath),
                  (this.pt = PropertyFactory.getProp(u, m.pt, 0, 0, this)),
                  (this.p = PropertyFactory.getProp(u, m.p, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(
                    u,
                    m.r,
                    0,
                    degToRads,
                    this
                  )),
                  (this.or = PropertyFactory.getProp(u, m.or, 0, 0, this)),
                  (this.os = PropertyFactory.getProp(u, m.os, 0, 0.01, this)),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertToPath());
              }
              return (
                (d.prototype = {
                  reset: r,
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._mdf && this.convertToPath());
                  },
                  convertStarToPath: function () {
                    var m = Math.floor(this.pt.v) * 2,
                      y = (Math.PI * 2) / m,
                      C = !0,
                      P = this.or.v,
                      T = this.ir.v,
                      M = this.os.v,
                      I = this.is.v,
                      z = (2 * Math.PI * P) / (m * 2),
                      O = (2 * Math.PI * T) / (m * 2),
                      D,
                      j,
                      H,
                      R,
                      x = -Math.PI / 2;
                    x += this.r.v;
                    var w = this.data.d === 3 ? -1 : 1;
                    for (this.v._length = 0, D = 0; D < m; D += 1) {
                      (j = C ? P : T), (H = C ? M : I), (R = C ? z : O);
                      var g = j * Math.cos(x),
                        S = j * Math.sin(x),
                        k =
                          g === 0 && S === 0 ? 0 : S / Math.sqrt(g * g + S * S),
                        A =
                          g === 0 && S === 0
                            ? 0
                            : -g / Math.sqrt(g * g + S * S);
                      (g += +this.p.v[0]),
                        (S += +this.p.v[1]),
                        this.v.setTripleAt(
                          g,
                          S,
                          g - k * R * H * w,
                          S - A * R * H * w,
                          g + k * R * H * w,
                          S + A * R * H * w,
                          D,
                          !0
                        ),
                        (C = !C),
                        (x += y * w);
                    }
                  },
                  convertPolygonToPath: function () {
                    var m = Math.floor(this.pt.v),
                      y = (Math.PI * 2) / m,
                      C = this.or.v,
                      P = this.os.v,
                      T = (2 * Math.PI * C) / (m * 4),
                      M,
                      I = -Math.PI * 0.5,
                      z = this.data.d === 3 ? -1 : 1;
                    for (
                      I += this.r.v, this.v._length = 0, M = 0;
                      M < m;
                      M += 1
                    ) {
                      var O = C * Math.cos(I),
                        D = C * Math.sin(I),
                        j =
                          O === 0 && D === 0 ? 0 : D / Math.sqrt(O * O + D * D),
                        H =
                          O === 0 && D === 0
                            ? 0
                            : -O / Math.sqrt(O * O + D * D);
                      (O += +this.p.v[0]),
                        (D += +this.p.v[1]),
                        this.v.setTripleAt(
                          O,
                          D,
                          O - j * T * P * z,
                          D - H * T * P * z,
                          O + j * T * P * z,
                          D + H * T * P * z,
                          M,
                          !0
                        ),
                        (I += y * z);
                    }
                    (this.paths.length = 0), (this.paths[0] = this.v);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], d),
                d
              );
            })(),
            h = (function () {
              function d(u, m) {
                (this.v = shapePool.newElement()),
                  (this.v.c = !0),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  (this.elem = u),
                  (this.comp = u.comp),
                  (this.frameId = -1),
                  (this.d = m.d),
                  this.initDynamicPropertyContainer(u),
                  (this.p = PropertyFactory.getProp(u, m.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(u, m.s, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(u, m.r, 0, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertRectToPath());
              }
              return (
                (d.prototype = {
                  convertRectToPath: function () {
                    var m = this.p.v[0],
                      y = this.p.v[1],
                      C = this.s.v[0] / 2,
                      P = this.s.v[1] / 2,
                      T = bmMin(C, P, this.r.v),
                      M = T * (1 - roundCorner);
                    (this.v._length = 0),
                      this.d === 2 || this.d === 1
                        ? (this.v.setTripleAt(
                            m + C,
                            y - P + T,
                            m + C,
                            y - P + T,
                            m + C,
                            y - P + M,
                            0,
                            !0
                          ),
                          this.v.setTripleAt(
                            m + C,
                            y + P - T,
                            m + C,
                            y + P - M,
                            m + C,
                            y + P - T,
                            1,
                            !0
                          ),
                          T !== 0
                            ? (this.v.setTripleAt(
                                m + C - T,
                                y + P,
                                m + C - T,
                                y + P,
                                m + C - M,
                                y + P,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                m - C + T,
                                y + P,
                                m - C + M,
                                y + P,
                                m - C + T,
                                y + P,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                m - C,
                                y + P - T,
                                m - C,
                                y + P - T,
                                m - C,
                                y + P - M,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                m - C,
                                y - P + T,
                                m - C,
                                y - P + M,
                                m - C,
                                y - P + T,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                m - C + T,
                                y - P,
                                m - C + T,
                                y - P,
                                m - C + M,
                                y - P,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                m + C - T,
                                y - P,
                                m + C - M,
                                y - P,
                                m + C - T,
                                y - P,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                m - C,
                                y + P,
                                m - C + M,
                                y + P,
                                m - C,
                                y + P,
                                2
                              ),
                              this.v.setTripleAt(
                                m - C,
                                y - P,
                                m - C,
                                y - P + M,
                                m - C,
                                y - P,
                                3
                              )))
                        : (this.v.setTripleAt(
                            m + C,
                            y - P + T,
                            m + C,
                            y - P + M,
                            m + C,
                            y - P + T,
                            0,
                            !0
                          ),
                          T !== 0
                            ? (this.v.setTripleAt(
                                m + C - T,
                                y - P,
                                m + C - T,
                                y - P,
                                m + C - M,
                                y - P,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                m - C + T,
                                y - P,
                                m - C + M,
                                y - P,
                                m - C + T,
                                y - P,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                m - C,
                                y - P + T,
                                m - C,
                                y - P + T,
                                m - C,
                                y - P + M,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                m - C,
                                y + P - T,
                                m - C,
                                y + P - M,
                                m - C,
                                y + P - T,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                m - C + T,
                                y + P,
                                m - C + T,
                                y + P,
                                m - C + M,
                                y + P,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                m + C - T,
                                y + P,
                                m + C - M,
                                y + P,
                                m + C - T,
                                y + P,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                m + C,
                                y + P - T,
                                m + C,
                                y + P - T,
                                m + C,
                                y + P - M,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                m - C,
                                y - P,
                                m - C + M,
                                y - P,
                                m - C,
                                y - P,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                m - C,
                                y + P,
                                m - C,
                                y + P - M,
                                m - C,
                                y + P,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                m + C,
                                y + P,
                                m + C - M,
                                y + P,
                                m + C,
                                y + P,
                                3,
                                !0
                              )));
                  },
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._mdf && this.convertRectToPath());
                  },
                  reset: r,
                }),
                extendPrototype([DynamicPropertyContainer], d),
                d
              );
            })();
          function b(d, u, m) {
            var y;
            if (m === 3 || m === 4) {
              var C = m === 3 ? u.pt : u.ks,
                P = C.k;
              P.length ? (y = new c(d, u, m)) : (y = new o(d, u, m));
            } else
              m === 5
                ? (y = new h(d, u))
                : m === 6
                ? (y = new p(d, u))
                : m === 7 && (y = new _(d, u));
            return y.k && d.addDynamicProperty(y), y;
          }
          function v() {
            return o;
          }
          function f() {
            return c;
          }
          var E = {};
          return (
            (E.getShapeProp = b),
            (E.getConstructorFunction = v),
            (E.getKeyframedConstructorFunction = f),
            E
          );
        })();
      var Matrix = (function () {
        var t = Math.cos,
          e = Math.sin,
          i = Math.tan,
          r = Math.round;
        function n() {
          return (
            (this.props[0] = 1),
            (this.props[1] = 0),
            (this.props[2] = 0),
            (this.props[3] = 0),
            (this.props[4] = 0),
            (this.props[5] = 1),
            (this.props[6] = 0),
            (this.props[7] = 0),
            (this.props[8] = 0),
            (this.props[9] = 0),
            (this.props[10] = 1),
            (this.props[11] = 0),
            (this.props[12] = 0),
            (this.props[13] = 0),
            (this.props[14] = 0),
            (this.props[15] = 1),
            this
          );
        }
        function a(g) {
          if (g === 0) return this;
          var S = t(g),
            k = e(g);
          return this._t(S, -k, 0, 0, k, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function s(g) {
          if (g === 0) return this;
          var S = t(g),
            k = e(g);
          return this._t(1, 0, 0, 0, 0, S, -k, 0, 0, k, S, 0, 0, 0, 0, 1);
        }
        function o(g) {
          if (g === 0) return this;
          var S = t(g),
            k = e(g);
          return this._t(S, 0, k, 0, 0, 1, 0, 0, -k, 0, S, 0, 0, 0, 0, 1);
        }
        function l(g) {
          if (g === 0) return this;
          var S = t(g),
            k = e(g);
          return this._t(S, -k, 0, 0, k, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function c(g, S) {
          return this._t(1, S, g, 1, 0, 0);
        }
        function p(g, S) {
          return this.shear(i(g), i(S));
        }
        function _(g, S) {
          var k = t(S),
            A = e(S);
          return this._t(k, A, 0, 0, -A, k, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            ._t(1, 0, 0, 0, i(g), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            ._t(k, -A, 0, 0, A, k, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function h(g, S, k) {
          return (
            !k && k !== 0 && (k = 1),
            g === 1 && S === 1 && k === 1
              ? this
              : this._t(g, 0, 0, 0, 0, S, 0, 0, 0, 0, k, 0, 0, 0, 0, 1)
          );
        }
        function b(g, S, k, A, V, q, G, nt, st, rt, ut, dt, yt, vt, Ct, ct) {
          return (
            (this.props[0] = g),
            (this.props[1] = S),
            (this.props[2] = k),
            (this.props[3] = A),
            (this.props[4] = V),
            (this.props[5] = q),
            (this.props[6] = G),
            (this.props[7] = nt),
            (this.props[8] = st),
            (this.props[9] = rt),
            (this.props[10] = ut),
            (this.props[11] = dt),
            (this.props[12] = yt),
            (this.props[13] = vt),
            (this.props[14] = Ct),
            (this.props[15] = ct),
            this
          );
        }
        function v(g, S, k) {
          return (
            (k = k || 0),
            g !== 0 || S !== 0 || k !== 0
              ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, g, S, k, 1)
              : this
          );
        }
        function f(g, S, k, A, V, q, G, nt, st, rt, ut, dt, yt, vt, Ct, ct) {
          var K = this.props;
          if (
            g === 1 &&
            S === 0 &&
            k === 0 &&
            A === 0 &&
            V === 0 &&
            q === 1 &&
            G === 0 &&
            nt === 0 &&
            st === 0 &&
            rt === 0 &&
            ut === 1 &&
            dt === 0
          )
            return (
              (K[12] = K[12] * g + K[15] * yt),
              (K[13] = K[13] * q + K[15] * vt),
              (K[14] = K[14] * ut + K[15] * Ct),
              (K[15] *= ct),
              (this._identityCalculated = !1),
              this
            );
          var Kt = K[0],
            ee = K[1],
            Ut = K[2],
            Nt = K[3],
            Yt = K[4],
            Qt = K[5],
            xt = K[6],
            ie = K[7],
            re = K[8],
            Ft = K[9],
            ne = K[10],
            Dt = K[11],
            he = K[12],
            Ye = K[13],
            Qe = K[14],
            Xe = K[15];
          return (
            (K[0] = Kt * g + ee * V + Ut * st + Nt * yt),
            (K[1] = Kt * S + ee * q + Ut * rt + Nt * vt),
            (K[2] = Kt * k + ee * G + Ut * ut + Nt * Ct),
            (K[3] = Kt * A + ee * nt + Ut * dt + Nt * ct),
            (K[4] = Yt * g + Qt * V + xt * st + ie * yt),
            (K[5] = Yt * S + Qt * q + xt * rt + ie * vt),
            (K[6] = Yt * k + Qt * G + xt * ut + ie * Ct),
            (K[7] = Yt * A + Qt * nt + xt * dt + ie * ct),
            (K[8] = re * g + Ft * V + ne * st + Dt * yt),
            (K[9] = re * S + Ft * q + ne * rt + Dt * vt),
            (K[10] = re * k + Ft * G + ne * ut + Dt * Ct),
            (K[11] = re * A + Ft * nt + ne * dt + Dt * ct),
            (K[12] = he * g + Ye * V + Qe * st + Xe * yt),
            (K[13] = he * S + Ye * q + Qe * rt + Xe * vt),
            (K[14] = he * k + Ye * G + Qe * ut + Xe * Ct),
            (K[15] = he * A + Ye * nt + Qe * dt + Xe * ct),
            (this._identityCalculated = !1),
            this
          );
        }
        function E(g) {
          var S = g.props;
          return this.transform(
            S[0],
            S[1],
            S[2],
            S[3],
            S[4],
            S[5],
            S[6],
            S[7],
            S[8],
            S[9],
            S[10],
            S[11],
            S[12],
            S[13],
            S[14],
            S[15]
          );
        }
        function d() {
          return (
            this._identityCalculated ||
              ((this._identity = !(
                this.props[0] !== 1 ||
                this.props[1] !== 0 ||
                this.props[2] !== 0 ||
                this.props[3] !== 0 ||
                this.props[4] !== 0 ||
                this.props[5] !== 1 ||
                this.props[6] !== 0 ||
                this.props[7] !== 0 ||
                this.props[8] !== 0 ||
                this.props[9] !== 0 ||
                this.props[10] !== 1 ||
                this.props[11] !== 0 ||
                this.props[12] !== 0 ||
                this.props[13] !== 0 ||
                this.props[14] !== 0 ||
                this.props[15] !== 1
              )),
              (this._identityCalculated = !0)),
            this._identity
          );
        }
        function u(g) {
          for (var S = 0; S < 16; ) {
            if (g.props[S] !== this.props[S]) return !1;
            S += 1;
          }
          return !0;
        }
        function m(g) {
          var S;
          for (S = 0; S < 16; S += 1) g.props[S] = this.props[S];
          return g;
        }
        function y(g) {
          var S;
          for (S = 0; S < 16; S += 1) this.props[S] = g[S];
        }
        function C(g, S, k) {
          return {
            x:
              g * this.props[0] +
              S * this.props[4] +
              k * this.props[8] +
              this.props[12],
            y:
              g * this.props[1] +
              S * this.props[5] +
              k * this.props[9] +
              this.props[13],
            z:
              g * this.props[2] +
              S * this.props[6] +
              k * this.props[10] +
              this.props[14],
          };
        }
        function P(g, S, k) {
          return (
            g * this.props[0] +
            S * this.props[4] +
            k * this.props[8] +
            this.props[12]
          );
        }
        function T(g, S, k) {
          return (
            g * this.props[1] +
            S * this.props[5] +
            k * this.props[9] +
            this.props[13]
          );
        }
        function M(g, S, k) {
          return (
            g * this.props[2] +
            S * this.props[6] +
            k * this.props[10] +
            this.props[14]
          );
        }
        function I() {
          var g = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            S = this.props[5] / g,
            k = -this.props[1] / g,
            A = -this.props[4] / g,
            V = this.props[0] / g,
            q =
              (this.props[4] * this.props[13] -
                this.props[5] * this.props[12]) /
              g,
            G =
              -(
                this.props[0] * this.props[13] -
                this.props[1] * this.props[12]
              ) / g,
            nt = new Matrix();
          return (
            (nt.props[0] = S),
            (nt.props[1] = k),
            (nt.props[4] = A),
            (nt.props[5] = V),
            (nt.props[12] = q),
            (nt.props[13] = G),
            nt
          );
        }
        function z(g) {
          var S = this.getInverseMatrix();
          return S.applyToPointArray(g[0], g[1], g[2] || 0);
        }
        function O(g) {
          var S,
            k = g.length,
            A = [];
          for (S = 0; S < k; S += 1) A[S] = z(g[S]);
          return A;
        }
        function D(g, S, k) {
          var A = createTypedArray("float32", 6);
          if (this.isIdentity())
            (A[0] = g[0]),
              (A[1] = g[1]),
              (A[2] = S[0]),
              (A[3] = S[1]),
              (A[4] = k[0]),
              (A[5] = k[1]);
          else {
            var V = this.props[0],
              q = this.props[1],
              G = this.props[4],
              nt = this.props[5],
              st = this.props[12],
              rt = this.props[13];
            (A[0] = g[0] * V + g[1] * G + st),
              (A[1] = g[0] * q + g[1] * nt + rt),
              (A[2] = S[0] * V + S[1] * G + st),
              (A[3] = S[0] * q + S[1] * nt + rt),
              (A[4] = k[0] * V + k[1] * G + st),
              (A[5] = k[0] * q + k[1] * nt + rt);
          }
          return A;
        }
        function j(g, S, k) {
          var A;
          return (
            this.isIdentity()
              ? (A = [g, S, k])
              : (A = [
                  g * this.props[0] +
                    S * this.props[4] +
                    k * this.props[8] +
                    this.props[12],
                  g * this.props[1] +
                    S * this.props[5] +
                    k * this.props[9] +
                    this.props[13],
                  g * this.props[2] +
                    S * this.props[6] +
                    k * this.props[10] +
                    this.props[14],
                ]),
            A
          );
        }
        function H(g, S) {
          if (this.isIdentity()) return g + "," + S;
          var k = this.props;
          return (
            Math.round((g * k[0] + S * k[4] + k[12]) * 100) / 100 +
            "," +
            Math.round((g * k[1] + S * k[5] + k[13]) * 100) / 100
          );
        }
        function R() {
          for (var g = 0, S = this.props, k = "matrix3d(", A = 1e4; g < 16; )
            (k += r(S[g] * A) / A), (k += g === 15 ? ")" : ","), (g += 1);
          return k;
        }
        function x(g) {
          var S = 1e4;
          return (g < 1e-6 && g > 0) || (g > -1e-6 && g < 0) ? r(g * S) / S : g;
        }
        function w() {
          var g = this.props,
            S = x(g[0]),
            k = x(g[1]),
            A = x(g[4]),
            V = x(g[5]),
            q = x(g[12]),
            G = x(g[13]);
          return (
            "matrix(" +
            S +
            "," +
            k +
            "," +
            A +
            "," +
            V +
            "," +
            q +
            "," +
            G +
            ")"
          );
        }
        return function () {
          (this.reset = n),
            (this.rotate = a),
            (this.rotateX = s),
            (this.rotateY = o),
            (this.rotateZ = l),
            (this.skew = p),
            (this.skewFromAxis = _),
            (this.shear = c),
            (this.scale = h),
            (this.setTransform = b),
            (this.translate = v),
            (this.transform = f),
            (this.multiply = E),
            (this.applyToPoint = C),
            (this.applyToX = P),
            (this.applyToY = T),
            (this.applyToZ = M),
            (this.applyToPointArray = j),
            (this.applyToTriplePoints = D),
            (this.applyToPointStringified = H),
            (this.toCSS = R),
            (this.to2dCSS = w),
            (this.clone = m),
            (this.cloneFromProps = y),
            (this.equals = u),
            (this.inversePoints = O),
            (this.inversePoint = z),
            (this.getInverseMatrix = I),
            (this._t = this.transform),
            (this.isIdentity = d),
            (this._identity = !0),
            (this._identityCalculated = !1),
            (this.props = createTypedArray("float32", 16)),
            this.reset();
        };
      })();
      function _typeof$3(t) {
        "@babel/helpers - typeof";
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$3 = function (i) {
                return typeof i;
              })
            : (_typeof$3 = function (i) {
                return i &&
                  typeof Symbol == "function" &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? "symbol"
                  : typeof i;
              }),
          _typeof$3(t)
        );
      }
      var lottie = {},
        standalone = "__[STANDALONE]__",
        animationData = "__[ANIMATIONDATA]__",
        renderer = "";
      function setLocation(t) {
        setLocationHref(t);
      }
      function searchAnimations() {
        standalone === !0
          ? animationManager.searchAnimations(
              animationData,
              standalone,
              renderer
            )
          : animationManager.searchAnimations();
      }
      function setSubframeRendering(t) {
        setSubframeEnabled(t);
      }
      function setPrefix(t) {
        setIdPrefix(t);
      }
      function loadAnimation(t) {
        return (
          standalone === !0 && (t.animationData = JSON.parse(animationData)),
          animationManager.loadAnimation(t)
        );
      }
      function setQuality(t) {
        if (typeof t == "string")
          switch (t) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10);
              break;
          }
        else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
        getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0);
      }
      function inBrowser() {
        return typeof navigator < "u";
      }
      function installPlugin(t, e) {
        t === "expressions" && setExpressionsPlugin(e);
      }
      function getFactory(t) {
        switch (t) {
          case "propertyFactory":
            return PropertyFactory;
          case "shapePropertyFactory":
            return ShapePropertyFactory;
          case "matrix":
            return Matrix;
          default:
            return null;
        }
      }
      (lottie.play = animationManager.play),
        (lottie.pause = animationManager.pause),
        (lottie.setLocationHref = setLocation),
        (lottie.togglePause = animationManager.togglePause),
        (lottie.setSpeed = animationManager.setSpeed),
        (lottie.setDirection = animationManager.setDirection),
        (lottie.stop = animationManager.stop),
        (lottie.searchAnimations = searchAnimations),
        (lottie.registerAnimation = animationManager.registerAnimation),
        (lottie.loadAnimation = loadAnimation),
        (lottie.setSubframeRendering = setSubframeRendering),
        (lottie.resize = animationManager.resize),
        (lottie.goToAndStop = animationManager.goToAndStop),
        (lottie.destroy = animationManager.destroy),
        (lottie.setQuality = setQuality),
        (lottie.inBrowser = inBrowser),
        (lottie.installPlugin = installPlugin),
        (lottie.freeze = animationManager.freeze),
        (lottie.unfreeze = animationManager.unfreeze),
        (lottie.setVolume = animationManager.setVolume),
        (lottie.mute = animationManager.mute),
        (lottie.unmute = animationManager.unmute),
        (lottie.getRegisteredAnimations =
          animationManager.getRegisteredAnimations),
        (lottie.useWebWorker = setWebWorker),
        (lottie.setIDPrefix = setPrefix),
        (lottie.__getFactory = getFactory),
        (lottie.version = "5.12.2");
      function checkReady() {
        document.readyState === "complete" &&
          (clearInterval(readyStateCheckInterval), searchAnimations());
      }
      function getQueryVariable(t) {
        for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
          var r = e[i].split("=");
          if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1]);
        }
        return null;
      }
      var queryString = "";
      if (standalone) {
        var scripts = document.getElementsByTagName("script"),
          index = scripts.length - 1,
          myScript = scripts[index] || { src: "" };
        (queryString = myScript.src
          ? myScript.src.replace(/^[^\?]+\??/, "")
          : ""),
          (renderer = getQueryVariable("renderer"));
      }
      var readyStateCheckInterval = setInterval(checkReady, 100);
      try {
        !(
          (typeof exports > "u" ? "undefined" : _typeof$3(exports)) ===
            "object" && typeof module < "u"
        ) &&
          !(typeof define == "function" && define.amd) &&
          (window.bodymovin = lottie);
      } catch (t) {}
      var ShapeModifiers = (function () {
        var t = {},
          e = {};
        (t.registerModifier = i), (t.getModifier = r);
        function i(n, a) {
          e[n] || (e[n] = a);
        }
        function r(n, a, s) {
          return new e[n](a, s);
        }
        return t;
      })();
      function ShapeModifier() {}
      (ShapeModifier.prototype.initModifierProperties = function () {}),
        (ShapeModifier.prototype.addShapeToModifier = function () {}),
        (ShapeModifier.prototype.addShape = function (t) {
          if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = {
              shape: t.sh,
              data: t,
              localShapeCollection: shapeCollectionPool.newShapeCollection(),
            };
            this.shapes.push(e),
              this.addShapeToModifier(e),
              this._isAnimated && t.setAsAnimated();
          }
        }),
        (ShapeModifier.prototype.init = function (t, e) {
          (this.shapes = []),
            (this.elem = t),
            this.initDynamicPropertyContainer(t),
            this.initModifierProperties(t, e),
            (this.frameId = initialDefaultFrame),
            (this.closed = !1),
            (this.k = !1),
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (ShapeModifier.prototype.processKeys = function () {
          this.elem.globalData.frameId !== this.frameId &&
            ((this.frameId = this.elem.globalData.frameId),
            this.iterateDynamicProperties());
        }),
        extendPrototype([DynamicPropertyContainer], ShapeModifier);
      function TrimModifier() {}
      extendPrototype([ShapeModifier], TrimModifier),
        (TrimModifier.prototype.initModifierProperties = function (t, e) {
          (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
            (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
            (this.sValue = 0),
            (this.eValue = 0),
            (this.getValue = this.processKeys),
            (this.m = e.m),
            (this._isAnimated =
              !!this.s.effectsSequence.length ||
              !!this.e.effectsSequence.length ||
              !!this.o.effectsSequence.length);
        }),
        (TrimModifier.prototype.addShapeToModifier = function (t) {
          t.pathsData = [];
        }),
        (TrimModifier.prototype.calculateShapeEdges = function (t, e, i, r, n) {
          var a = [];
          e <= 1
            ? a.push({ s: t, e })
            : t >= 1
            ? a.push({ s: t - 1, e: e - 1 })
            : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
          var s = [],
            o,
            l = a.length,
            c;
          for (o = 0; o < l; o += 1)
            if (((c = a[o]), !(c.e * n < r || c.s * n > r + i))) {
              var p, _;
              c.s * n <= r ? (p = 0) : (p = (c.s * n - r) / i),
                c.e * n >= r + i ? (_ = 1) : (_ = (c.e * n - r) / i),
                s.push([p, _]);
            }
          return s.length || s.push([0, 0]), s;
        }),
        (TrimModifier.prototype.releasePathsData = function (t) {
          var e,
            i = t.length;
          for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
          return (t.length = 0), t;
        }),
        (TrimModifier.prototype.processShapes = function (t) {
          var e, i;
          if (this._mdf || t) {
            var r = (this.o.v % 360) / 360;
            if (
              (r < 0 && (r += 1),
              this.s.v > 1
                ? (e = 1 + r)
                : this.s.v < 0
                ? (e = 0 + r)
                : (e = this.s.v + r),
              this.e.v > 1
                ? (i = 1 + r)
                : this.e.v < 0
                ? (i = 0 + r)
                : (i = this.e.v + r),
              e > i)
            ) {
              var n = e;
              (e = i), (i = n);
            }
            (e = Math.round(e * 1e4) * 1e-4),
              (i = Math.round(i * 1e4) * 1e-4),
              (this.sValue = e),
              (this.eValue = i);
          } else (e = this.sValue), (i = this.eValue);
          var a,
            s,
            o = this.shapes.length,
            l,
            c,
            p,
            _,
            h,
            b = 0;
          if (i === e)
            for (s = 0; s < o; s += 1)
              this.shapes[s].localShapeCollection.releaseShapes(),
                (this.shapes[s].shape._mdf = !0),
                (this.shapes[s].shape.paths =
                  this.shapes[s].localShapeCollection),
                this._mdf && (this.shapes[s].pathsData.length = 0);
          else if ((i === 1 && e === 0) || (i === 0 && e === 1)) {
            if (this._mdf)
              for (s = 0; s < o; s += 1)
                (this.shapes[s].pathsData.length = 0),
                  (this.shapes[s].shape._mdf = !0);
          } else {
            var v = [],
              f,
              E;
            for (s = 0; s < o; s += 1)
              if (
                ((f = this.shapes[s]),
                !f.shape._mdf && !this._mdf && !t && this.m !== 2)
              )
                f.shape.paths = f.localShapeCollection;
              else {
                if (
                  ((a = f.shape.paths),
                  (c = a._length),
                  (h = 0),
                  !f.shape._mdf && f.pathsData.length)
                )
                  h = f.totalShapeLength;
                else {
                  for (
                    p = this.releasePathsData(f.pathsData), l = 0;
                    l < c;
                    l += 1
                  )
                    (_ = bez.getSegmentsLength(a.shapes[l])),
                      p.push(_),
                      (h += _.totalLength);
                  (f.totalShapeLength = h), (f.pathsData = p);
                }
                (b += h), (f.shape._mdf = !0);
              }
            var d = e,
              u = i,
              m = 0,
              y;
            for (s = o - 1; s >= 0; s -= 1)
              if (((f = this.shapes[s]), f.shape._mdf)) {
                for (
                  E = f.localShapeCollection,
                    E.releaseShapes(),
                    this.m === 2 && o > 1
                      ? ((y = this.calculateShapeEdges(
                          e,
                          i,
                          f.totalShapeLength,
                          m,
                          b
                        )),
                        (m += f.totalShapeLength))
                      : (y = [[d, u]]),
                    c = y.length,
                    l = 0;
                  l < c;
                  l += 1
                ) {
                  (d = y[l][0]),
                    (u = y[l][1]),
                    (v.length = 0),
                    u <= 1
                      ? v.push({
                          s: f.totalShapeLength * d,
                          e: f.totalShapeLength * u,
                        })
                      : d >= 1
                      ? v.push({
                          s: f.totalShapeLength * (d - 1),
                          e: f.totalShapeLength * (u - 1),
                        })
                      : (v.push({
                          s: f.totalShapeLength * d,
                          e: f.totalShapeLength,
                        }),
                        v.push({ s: 0, e: f.totalShapeLength * (u - 1) }));
                  var C = this.addShapes(f, v[0]);
                  if (v[0].s !== v[0].e) {
                    if (v.length > 1) {
                      var P = f.shape.paths.shapes[f.shape.paths._length - 1];
                      if (P.c) {
                        var T = C.pop();
                        this.addPaths(C, E), (C = this.addShapes(f, v[1], T));
                      } else this.addPaths(C, E), (C = this.addShapes(f, v[1]));
                    }
                    this.addPaths(C, E);
                  }
                }
                f.shape.paths = E;
              }
          }
        }),
        (TrimModifier.prototype.addPaths = function (t, e) {
          var i,
            r = t.length;
          for (i = 0; i < r; i += 1) e.addShape(t[i]);
        }),
        (TrimModifier.prototype.addSegment = function (t, e, i, r, n, a, s) {
          n.setXYAt(e[0], e[1], "o", a),
            n.setXYAt(i[0], i[1], "i", a + 1),
            s && n.setXYAt(t[0], t[1], "v", a),
            n.setXYAt(r[0], r[1], "v", a + 1);
        }),
        (TrimModifier.prototype.addSegmentFromArray = function (t, e, i, r) {
          e.setXYAt(t[1], t[5], "o", i),
            e.setXYAt(t[2], t[6], "i", i + 1),
            r && e.setXYAt(t[0], t[4], "v", i),
            e.setXYAt(t[3], t[7], "v", i + 1);
        }),
        (TrimModifier.prototype.addShapes = function (t, e, i) {
          var r = t.pathsData,
            n = t.shape.paths.shapes,
            a,
            s = t.shape.paths._length,
            o,
            l,
            c = 0,
            p,
            _,
            h,
            b,
            v = [],
            f,
            E = !0;
          for (
            i
              ? ((_ = i._length), (f = i._length))
              : ((i = shapePool.newElement()), (_ = 0), (f = 0)),
              v.push(i),
              a = 0;
            a < s;
            a += 1
          ) {
            for (
              h = r[a].lengths,
                i.c = n[a].c,
                l = n[a].c ? h.length : h.length + 1,
                o = 1;
              o < l;
              o += 1
            )
              if (((p = h[o - 1]), c + p.addedLength < e.s))
                (c += p.addedLength), (i.c = !1);
              else if (c > e.e) {
                i.c = !1;
                break;
              } else
                e.s <= c && e.e >= c + p.addedLength
                  ? (this.addSegment(
                      n[a].v[o - 1],
                      n[a].o[o - 1],
                      n[a].i[o],
                      n[a].v[o],
                      i,
                      _,
                      E
                    ),
                    (E = !1))
                  : ((b = bez.getNewSegment(
                      n[a].v[o - 1],
                      n[a].v[o],
                      n[a].o[o - 1],
                      n[a].i[o],
                      (e.s - c) / p.addedLength,
                      (e.e - c) / p.addedLength,
                      h[o - 1]
                    )),
                    this.addSegmentFromArray(b, i, _, E),
                    (E = !1),
                    (i.c = !1)),
                  (c += p.addedLength),
                  (_ += 1);
            if (n[a].c && h.length) {
              if (((p = h[o - 1]), c <= e.e)) {
                var d = h[o - 1].addedLength;
                e.s <= c && e.e >= c + d
                  ? (this.addSegment(
                      n[a].v[o - 1],
                      n[a].o[o - 1],
                      n[a].i[0],
                      n[a].v[0],
                      i,
                      _,
                      E
                    ),
                    (E = !1))
                  : ((b = bez.getNewSegment(
                      n[a].v[o - 1],
                      n[a].v[0],
                      n[a].o[o - 1],
                      n[a].i[0],
                      (e.s - c) / d,
                      (e.e - c) / d,
                      h[o - 1]
                    )),
                    this.addSegmentFromArray(b, i, _, E),
                    (E = !1),
                    (i.c = !1));
              } else i.c = !1;
              (c += p.addedLength), (_ += 1);
            }
            if (
              (i._length &&
                (i.setXYAt(i.v[f][0], i.v[f][1], "i", f),
                i.setXYAt(
                  i.v[i._length - 1][0],
                  i.v[i._length - 1][1],
                  "o",
                  i._length - 1
                )),
              c > e.e)
            )
              break;
            a < s - 1 &&
              ((i = shapePool.newElement()), (E = !0), v.push(i), (_ = 0));
          }
          return v;
        });
      function PuckerAndBloatModifier() {}
      extendPrototype([ShapeModifier], PuckerAndBloatModifier),
        (PuckerAndBloatModifier.prototype.initModifierProperties = function (
          t,
          e
        ) {
          (this.getValue = this.processKeys),
            (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
            (this._isAnimated = !!this.amount.effectsSequence.length);
        }),
        (PuckerAndBloatModifier.prototype.processPath = function (t, e) {
          var i = e / 100,
            r = [0, 0],
            n = t._length,
            a = 0;
          for (a = 0; a < n; a += 1) (r[0] += t.v[a][0]), (r[1] += t.v[a][1]);
          (r[0] /= n), (r[1] /= n);
          var s = shapePool.newElement();
          s.c = t.c;
          var o, l, c, p, _, h;
          for (a = 0; a < n; a += 1)
            (o = t.v[a][0] + (r[0] - t.v[a][0]) * i),
              (l = t.v[a][1] + (r[1] - t.v[a][1]) * i),
              (c = t.o[a][0] + (r[0] - t.o[a][0]) * -i),
              (p = t.o[a][1] + (r[1] - t.o[a][1]) * -i),
              (_ = t.i[a][0] + (r[0] - t.i[a][0]) * -i),
              (h = t.i[a][1] + (r[1] - t.i[a][1]) * -i),
              s.setTripleAt(o, l, c, p, _, h, a);
          return s;
        }),
        (PuckerAndBloatModifier.prototype.processShapes = function (t) {
          var e,
            i,
            r = this.shapes.length,
            n,
            a,
            s = this.amount.v;
          if (s !== 0) {
            var o, l;
            for (i = 0; i < r; i += 1) {
              if (
                ((o = this.shapes[i]),
                (l = o.localShapeCollection),
                !(!o.shape._mdf && !this._mdf && !t))
              )
                for (
                  l.releaseShapes(),
                    o.shape._mdf = !0,
                    e = o.shape.paths.shapes,
                    a = o.shape.paths._length,
                    n = 0;
                  n < a;
                  n += 1
                )
                  l.addShape(this.processPath(e[n], s));
              o.shape.paths = o.localShapeCollection;
            }
          }
          this.dynamicProperties.length || (this._mdf = !1);
        });
      var TransformPropertyFactory = (function () {
        var t = [0, 0];
        function e(l) {
          var c = this._mdf;
          this.iterateDynamicProperties(),
            (this._mdf = this._mdf || c),
            this.a && l.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
            this.s && l.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
            this.sk && l.skewFromAxis(-this.sk.v, this.sa.v),
            this.r
              ? l.rotate(-this.r.v)
              : l
                  .rotateZ(-this.rz.v)
                  .rotateY(this.ry.v)
                  .rotateX(this.rx.v)
                  .rotateZ(-this.or.v[2])
                  .rotateY(this.or.v[1])
                  .rotateX(this.or.v[0]),
            this.data.p.s
              ? this.data.p.z
                ? l.translate(this.px.v, this.py.v, -this.pz.v)
                : l.translate(this.px.v, this.py.v, 0)
              : l.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
        }
        function i(l) {
          if (this.elem.globalData.frameId !== this.frameId) {
            if (
              (this._isDirty &&
                (this.precalculateMatrix(), (this._isDirty = !1)),
              this.iterateDynamicProperties(),
              this._mdf || l)
            ) {
              var c;
              if (
                (this.v.cloneFromProps(this.pre.props),
                this.appliedTransformations < 1 &&
                  this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                this.appliedTransformations < 2 &&
                  this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                this.sk &&
                  this.appliedTransformations < 3 &&
                  this.v.skewFromAxis(-this.sk.v, this.sa.v),
                this.r && this.appliedTransformations < 4
                  ? this.v.rotate(-this.r.v)
                  : !this.r &&
                    this.appliedTransformations < 4 &&
                    this.v
                      .rotateZ(-this.rz.v)
                      .rotateY(this.ry.v)
                      .rotateX(this.rx.v)
                      .rotateZ(-this.or.v[2])
                      .rotateY(this.or.v[1])
                      .rotateX(this.or.v[0]),
                this.autoOriented)
              ) {
                var p, _;
                if (
                  ((c = this.elem.globalData.frameRate),
                  this.p && this.p.keyframes && this.p.getValueAtTime)
                )
                  this.p._caching.lastFrame + this.p.offsetTime <=
                  this.p.keyframes[0].t
                    ? ((p = this.p.getValueAtTime(
                        (this.p.keyframes[0].t + 0.01) / c,
                        0
                      )),
                      (_ = this.p.getValueAtTime(this.p.keyframes[0].t / c, 0)))
                    : this.p._caching.lastFrame + this.p.offsetTime >=
                      this.p.keyframes[this.p.keyframes.length - 1].t
                    ? ((p = this.p.getValueAtTime(
                        this.p.keyframes[this.p.keyframes.length - 1].t / c,
                        0
                      )),
                      (_ = this.p.getValueAtTime(
                        (this.p.keyframes[this.p.keyframes.length - 1].t -
                          0.05) /
                          c,
                        0
                      )))
                    : ((p = this.p.pv),
                      (_ = this.p.getValueAtTime(
                        (this.p._caching.lastFrame + this.p.offsetTime - 0.01) /
                          c,
                        this.p.offsetTime
                      )));
                else if (
                  this.px &&
                  this.px.keyframes &&
                  this.py.keyframes &&
                  this.px.getValueAtTime &&
                  this.py.getValueAtTime
                ) {
                  (p = []), (_ = []);
                  var h = this.px,
                    b = this.py;
                  h._caching.lastFrame + h.offsetTime <= h.keyframes[0].t
                    ? ((p[0] = h.getValueAtTime(
                        (h.keyframes[0].t + 0.01) / c,
                        0
                      )),
                      (p[1] = b.getValueAtTime(
                        (b.keyframes[0].t + 0.01) / c,
                        0
                      )),
                      (_[0] = h.getValueAtTime(h.keyframes[0].t / c, 0)),
                      (_[1] = b.getValueAtTime(b.keyframes[0].t / c, 0)))
                    : h._caching.lastFrame + h.offsetTime >=
                      h.keyframes[h.keyframes.length - 1].t
                    ? ((p[0] = h.getValueAtTime(
                        h.keyframes[h.keyframes.length - 1].t / c,
                        0
                      )),
                      (p[1] = b.getValueAtTime(
                        b.keyframes[b.keyframes.length - 1].t / c,
                        0
                      )),
                      (_[0] = h.getValueAtTime(
                        (h.keyframes[h.keyframes.length - 1].t - 0.01) / c,
                        0
                      )),
                      (_[1] = b.getValueAtTime(
                        (b.keyframes[b.keyframes.length - 1].t - 0.01) / c,
                        0
                      )))
                    : ((p = [h.pv, b.pv]),
                      (_[0] = h.getValueAtTime(
                        (h._caching.lastFrame + h.offsetTime - 0.01) / c,
                        h.offsetTime
                      )),
                      (_[1] = b.getValueAtTime(
                        (b._caching.lastFrame + b.offsetTime - 0.01) / c,
                        b.offsetTime
                      )));
                } else (_ = t), (p = _);
                this.v.rotate(-Math.atan2(p[1] - _[1], p[0] - _[0]));
              }
              this.data.p && this.data.p.s
                ? this.data.p.z
                  ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                  : this.v.translate(this.px.v, this.py.v, 0)
                : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            this.frameId = this.elem.globalData.frameId;
          }
        }
        function r() {
          if (
            ((this.appliedTransformations = 0),
            this.pre.reset(),
            !this.a.effectsSequence.length)
          )
            this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
              (this.appliedTransformations = 1);
          else return;
          if (!this.s.effectsSequence.length)
            this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
              (this.appliedTransformations = 2);
          else return;
          if (this.sk)
            if (
              !this.sk.effectsSequence.length &&
              !this.sa.effectsSequence.length
            )
              this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                (this.appliedTransformations = 3);
            else return;
          this.r
            ? this.r.effectsSequence.length ||
              (this.pre.rotate(-this.r.v), (this.appliedTransformations = 4))
            : !this.rz.effectsSequence.length &&
              !this.ry.effectsSequence.length &&
              !this.rx.effectsSequence.length &&
              !this.or.effectsSequence.length &&
              (this.pre
                .rotateZ(-this.rz.v)
                .rotateY(this.ry.v)
                .rotateX(this.rx.v)
                .rotateZ(-this.or.v[2])
                .rotateY(this.or.v[1])
                .rotateX(this.or.v[0]),
              (this.appliedTransformations = 4));
        }
        function n() {}
        function a(l) {
          this._addDynamicProperty(l),
            this.elem.addDynamicProperty(l),
            (this._isDirty = !0);
        }
        function s(l, c, p) {
          if (
            ((this.elem = l),
            (this.frameId = -1),
            (this.propType = "transform"),
            (this.data = c),
            (this.v = new Matrix()),
            (this.pre = new Matrix()),
            (this.appliedTransformations = 0),
            this.initDynamicPropertyContainer(p || l),
            c.p && c.p.s
              ? ((this.px = PropertyFactory.getProp(l, c.p.x, 0, 0, this)),
                (this.py = PropertyFactory.getProp(l, c.p.y, 0, 0, this)),
                c.p.z &&
                  (this.pz = PropertyFactory.getProp(l, c.p.z, 0, 0, this)))
              : (this.p = PropertyFactory.getProp(
                  l,
                  c.p || { k: [0, 0, 0] },
                  1,
                  0,
                  this
                )),
            c.rx)
          ) {
            if (
              ((this.rx = PropertyFactory.getProp(l, c.rx, 0, degToRads, this)),
              (this.ry = PropertyFactory.getProp(l, c.ry, 0, degToRads, this)),
              (this.rz = PropertyFactory.getProp(l, c.rz, 0, degToRads, this)),
              c.or.k[0].ti)
            ) {
              var _,
                h = c.or.k.length;
              for (_ = 0; _ < h; _ += 1)
                (c.or.k[_].to = null), (c.or.k[_].ti = null);
            }
            (this.or = PropertyFactory.getProp(l, c.or, 1, degToRads, this)),
              (this.or.sh = !0);
          } else
            this.r = PropertyFactory.getProp(
              l,
              c.r || { k: 0 },
              0,
              degToRads,
              this
            );
          c.sk &&
            ((this.sk = PropertyFactory.getProp(l, c.sk, 0, degToRads, this)),
            (this.sa = PropertyFactory.getProp(l, c.sa, 0, degToRads, this))),
            (this.a = PropertyFactory.getProp(
              l,
              c.a || { k: [0, 0, 0] },
              1,
              0,
              this
            )),
            (this.s = PropertyFactory.getProp(
              l,
              c.s || { k: [100, 100, 100] },
              1,
              0.01,
              this
            )),
            c.o
              ? (this.o = PropertyFactory.getProp(l, c.o, 0, 0.01, l))
              : (this.o = { _mdf: !1, v: 1 }),
            (this._isDirty = !0),
            this.dynamicProperties.length || this.getValue(!0);
        }
        (s.prototype = {
          applyToMatrix: e,
          getValue: i,
          precalculateMatrix: r,
          autoOrient: n,
        }),
          extendPrototype([DynamicPropertyContainer], s),
          (s.prototype.addDynamicProperty = a),
          (s.prototype._addDynamicProperty =
            DynamicPropertyContainer.prototype.addDynamicProperty);
        function o(l, c, p) {
          return new s(l, c, p);
        }
        return { getTransformProperty: o };
      })();
      function RepeaterModifier() {}
      extendPrototype([ShapeModifier], RepeaterModifier),
        (RepeaterModifier.prototype.initModifierProperties = function (t, e) {
          (this.getValue = this.processKeys),
            (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
            (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
            (this.tr = TransformPropertyFactory.getTransformProperty(
              t,
              e.tr,
              this
            )),
            (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
            (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
            (this.data = e),
            this.dynamicProperties.length || this.getValue(!0),
            (this._isAnimated = !!this.dynamicProperties.length),
            (this.pMatrix = new Matrix()),
            (this.rMatrix = new Matrix()),
            (this.sMatrix = new Matrix()),
            (this.tMatrix = new Matrix()),
            (this.matrix = new Matrix());
        }),
        (RepeaterModifier.prototype.applyTransforms = function (
          t,
          e,
          i,
          r,
          n,
          a
        ) {
          var s = a ? -1 : 1,
            o = r.s.v[0] + (1 - r.s.v[0]) * (1 - n),
            l = r.s.v[1] + (1 - r.s.v[1]) * (1 - n);
          t.translate(r.p.v[0] * s * n, r.p.v[1] * s * n, r.p.v[2]),
            e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
            e.rotate(-r.r.v * s * n),
            e.translate(r.a.v[0], r.a.v[1], r.a.v[2]),
            i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
            i.scale(a ? 1 / o : o, a ? 1 / l : l),
            i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
        }),
        (RepeaterModifier.prototype.init = function (t, e, i, r) {
          for (
            this.elem = t,
              this.arr = e,
              this.pos = i,
              this.elemsData = r,
              this._currentCopies = 0,
              this._elements = [],
              this._groups = [],
              this.frameId = -1,
              this.initDynamicPropertyContainer(t),
              this.initModifierProperties(t, e[i]);
            i > 0;

          )
            (i -= 1), this._elements.unshift(e[i]);
          this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (RepeaterModifier.prototype.resetElements = function (t) {
          var e,
            i = t.length;
          for (e = 0; e < i; e += 1)
            (t[e]._processed = !1),
              t[e].ty === "gr" && this.resetElements(t[e].it);
        }),
        (RepeaterModifier.prototype.cloneElements = function (t) {
          var e = JSON.parse(JSON.stringify(t));
          return this.resetElements(e), e;
        }),
        (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
          var i,
            r = t.length;
          for (i = 0; i < r; i += 1)
            (t[i]._render = e),
              t[i].ty === "gr" && this.changeGroupRender(t[i].it, e);
        }),
        (RepeaterModifier.prototype.processShapes = function (t) {
          var e,
            i,
            r,
            n,
            a,
            s = !1;
          if (this._mdf || t) {
            var o = Math.ceil(this.c.v);
            if (this._groups.length < o) {
              for (; this._groups.length < o; ) {
                var l = { it: this.cloneElements(this._elements), ty: "gr" };
                l.it.push({
                  a: { a: 0, ix: 1, k: [0, 0] },
                  nm: "Transform",
                  o: { a: 0, ix: 7, k: 100 },
                  p: { a: 0, ix: 2, k: [0, 0] },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [
                      { s: 0, e: 0, t: 0 },
                      { s: 0, e: 0, t: 1 },
                    ],
                  },
                  s: { a: 0, ix: 3, k: [100, 100] },
                  sa: { a: 0, ix: 5, k: 0 },
                  sk: { a: 0, ix: 4, k: 0 },
                  ty: "tr",
                }),
                  this.arr.splice(0, 0, l),
                  this._groups.splice(0, 0, l),
                  (this._currentCopies += 1);
              }
              this.elem.reloadShapes(), (s = !0);
            }
            a = 0;
            var c;
            for (r = 0; r <= this._groups.length - 1; r += 1) {
              if (
                ((c = a < o),
                (this._groups[r]._render = c),
                this.changeGroupRender(this._groups[r].it, c),
                !c)
              ) {
                var p = this.elemsData[r].it,
                  _ = p[p.length - 1];
                _.transform.op.v !== 0
                  ? ((_.transform.op._mdf = !0), (_.transform.op.v = 0))
                  : (_.transform.op._mdf = !1);
              }
              a += 1;
            }
            this._currentCopies = o;
            var h = this.o.v,
              b = h % 1,
              v = h > 0 ? Math.floor(h) : Math.ceil(h),
              f = this.pMatrix.props,
              E = this.rMatrix.props,
              d = this.sMatrix.props;
            this.pMatrix.reset(),
              this.rMatrix.reset(),
              this.sMatrix.reset(),
              this.tMatrix.reset(),
              this.matrix.reset();
            var u = 0;
            if (h > 0) {
              for (; u < v; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !1
                ),
                  (u += 1);
              b &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  b,
                  !1
                ),
                (u += b));
            } else if (h < 0) {
              for (; u > v; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !0
                ),
                  (u -= 1);
              b &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  -b,
                  !0
                ),
                (u -= b));
            }
            (r = this.data.m === 1 ? 0 : this._currentCopies - 1),
              (n = this.data.m === 1 ? 1 : -1),
              (a = this._currentCopies);
            for (var m, y; a; ) {
              if (
                ((e = this.elemsData[r].it),
                (i = e[e.length - 1].transform.mProps.v.props),
                (y = i.length),
                (e[e.length - 1].transform.mProps._mdf = !0),
                (e[e.length - 1].transform.op._mdf = !0),
                (e[e.length - 1].transform.op.v =
                  this._currentCopies === 1
                    ? this.so.v
                    : this.so.v +
                      (this.eo.v - this.so.v) *
                        (r / (this._currentCopies - 1))),
                u !== 0)
              ) {
                for (
                  ((r !== 0 && n === 1) ||
                    (r !== this._currentCopies - 1 && n === -1)) &&
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !1
                    ),
                    this.matrix.transform(
                      E[0],
                      E[1],
                      E[2],
                      E[3],
                      E[4],
                      E[5],
                      E[6],
                      E[7],
                      E[8],
                      E[9],
                      E[10],
                      E[11],
                      E[12],
                      E[13],
                      E[14],
                      E[15]
                    ),
                    this.matrix.transform(
                      d[0],
                      d[1],
                      d[2],
                      d[3],
                      d[4],
                      d[5],
                      d[6],
                      d[7],
                      d[8],
                      d[9],
                      d[10],
                      d[11],
                      d[12],
                      d[13],
                      d[14],
                      d[15]
                    ),
                    this.matrix.transform(
                      f[0],
                      f[1],
                      f[2],
                      f[3],
                      f[4],
                      f[5],
                      f[6],
                      f[7],
                      f[8],
                      f[9],
                      f[10],
                      f[11],
                      f[12],
                      f[13],
                      f[14],
                      f[15]
                    ),
                    m = 0;
                  m < y;
                  m += 1
                )
                  i[m] = this.matrix.props[m];
                this.matrix.reset();
              } else
                for (this.matrix.reset(), m = 0; m < y; m += 1)
                  i[m] = this.matrix.props[m];
              (u += 1), (a -= 1), (r += n);
            }
          } else
            for (a = this._currentCopies, r = 0, n = 1; a; )
              (e = this.elemsData[r].it),
                (i = e[e.length - 1].transform.mProps.v.props),
                (e[e.length - 1].transform.mProps._mdf = !1),
                (e[e.length - 1].transform.op._mdf = !1),
                (a -= 1),
                (r += n);
          return s;
        }),
        (RepeaterModifier.prototype.addShape = function () {});
      function RoundCornersModifier() {}
      extendPrototype([ShapeModifier], RoundCornersModifier),
        (RoundCornersModifier.prototype.initModifierProperties = function (
          t,
          e
        ) {
          (this.getValue = this.processKeys),
            (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
            (this._isAnimated = !!this.rd.effectsSequence.length);
        }),
        (RoundCornersModifier.prototype.processPath = function (t, e) {
          var i = shapePool.newElement();
          i.c = t.c;
          var r,
            n = t._length,
            a,
            s,
            o,
            l,
            c,
            p,
            _ = 0,
            h,
            b,
            v,
            f,
            E,
            d;
          for (r = 0; r < n; r += 1)
            (a = t.v[r]),
              (o = t.o[r]),
              (s = t.i[r]),
              a[0] === o[0] && a[1] === o[1] && a[0] === s[0] && a[1] === s[1]
                ? (r === 0 || r === n - 1) && !t.c
                  ? (i.setTripleAt(a[0], a[1], o[0], o[1], s[0], s[1], _),
                    (_ += 1))
                  : (r === 0 ? (l = t.v[n - 1]) : (l = t.v[r - 1]),
                    (c = Math.sqrt(
                      Math.pow(a[0] - l[0], 2) + Math.pow(a[1] - l[1], 2)
                    )),
                    (p = c ? Math.min(c / 2, e) / c : 0),
                    (E = a[0] + (l[0] - a[0]) * p),
                    (h = E),
                    (d = a[1] - (a[1] - l[1]) * p),
                    (b = d),
                    (v = h - (h - a[0]) * roundCorner),
                    (f = b - (b - a[1]) * roundCorner),
                    i.setTripleAt(h, b, v, f, E, d, _),
                    (_ += 1),
                    r === n - 1 ? (l = t.v[0]) : (l = t.v[r + 1]),
                    (c = Math.sqrt(
                      Math.pow(a[0] - l[0], 2) + Math.pow(a[1] - l[1], 2)
                    )),
                    (p = c ? Math.min(c / 2, e) / c : 0),
                    (v = a[0] + (l[0] - a[0]) * p),
                    (h = v),
                    (f = a[1] + (l[1] - a[1]) * p),
                    (b = f),
                    (E = h - (h - a[0]) * roundCorner),
                    (d = b - (b - a[1]) * roundCorner),
                    i.setTripleAt(h, b, v, f, E, d, _),
                    (_ += 1))
                : (i.setTripleAt(
                    t.v[r][0],
                    t.v[r][1],
                    t.o[r][0],
                    t.o[r][1],
                    t.i[r][0],
                    t.i[r][1],
                    _
                  ),
                  (_ += 1));
          return i;
        }),
        (RoundCornersModifier.prototype.processShapes = function (t) {
          var e,
            i,
            r = this.shapes.length,
            n,
            a,
            s = this.rd.v;
          if (s !== 0) {
            var o, l;
            for (i = 0; i < r; i += 1) {
              if (
                ((o = this.shapes[i]),
                (l = o.localShapeCollection),
                !(!o.shape._mdf && !this._mdf && !t))
              )
                for (
                  l.releaseShapes(),
                    o.shape._mdf = !0,
                    e = o.shape.paths.shapes,
                    a = o.shape.paths._length,
                    n = 0;
                  n < a;
                  n += 1
                )
                  l.addShape(this.processPath(e[n], s));
              o.shape.paths = o.localShapeCollection;
            }
          }
          this.dynamicProperties.length || (this._mdf = !1);
        });
      function floatEqual(t, e) {
        return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
      }
      function floatZero(t) {
        return Math.abs(t) <= 1e-5;
      }
      function lerp(t, e, i) {
        return t * (1 - i) + e * i;
      }
      function lerpPoint(t, e, i) {
        return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)];
      }
      function quadRoots(t, e, i) {
        if (t === 0) return [];
        var r = e * e - 4 * t * i;
        if (r < 0) return [];
        var n = -e / (2 * t);
        if (r === 0) return [n];
        var a = Math.sqrt(r) / (2 * t);
        return [n - a, n + a];
      }
      function polynomialCoefficients(t, e, i, r) {
        return [
          -t + 3 * e - 3 * i + r,
          3 * t - 6 * e + 3 * i,
          -3 * t + 3 * e,
          t,
        ];
      }
      function singlePoint(t) {
        return new PolynomialBezier(t, t, t, t, !1);
      }
      function PolynomialBezier(t, e, i, r, n) {
        n && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)),
          n && pointEqual(i, r) && (i = lerpPoint(t, r, 2 / 3));
        var a = polynomialCoefficients(t[0], e[0], i[0], r[0]),
          s = polynomialCoefficients(t[1], e[1], i[1], r[1]);
        (this.a = [a[0], s[0]]),
          (this.b = [a[1], s[1]]),
          (this.c = [a[2], s[2]]),
          (this.d = [a[3], s[3]]),
          (this.points = [t, e, i, r]);
      }
      (PolynomialBezier.prototype.point = function (t) {
        return [
          ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
          ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1],
        ];
      }),
        (PolynomialBezier.prototype.derivative = function (t) {
          return [
            (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
            (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1],
          ];
        }),
        (PolynomialBezier.prototype.tangentAngle = function (t) {
          var e = this.derivative(t);
          return Math.atan2(e[1], e[0]);
        }),
        (PolynomialBezier.prototype.normalAngle = function (t) {
          var e = this.derivative(t);
          return Math.atan2(e[0], e[1]);
        }),
        (PolynomialBezier.prototype.inflectionPoints = function () {
          var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(t)) return [];
          var e = (-0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1])) / t,
            i =
              e * e -
              ((1 / 3) * (this.b[1] * this.c[0] - this.b[0] * this.c[1])) / t;
          if (i < 0) return [];
          var r = Math.sqrt(i);
          return floatZero(r)
            ? r > 0 && r < 1
              ? [e]
              : []
            : [e - r, e + r].filter(function (n) {
                return n > 0 && n < 1;
              });
        }),
        (PolynomialBezier.prototype.split = function (t) {
          if (t <= 0) return [singlePoint(this.points[0]), this];
          if (t >= 1)
            return [this, singlePoint(this.points[this.points.length - 1])];
          var e = lerpPoint(this.points[0], this.points[1], t),
            i = lerpPoint(this.points[1], this.points[2], t),
            r = lerpPoint(this.points[2], this.points[3], t),
            n = lerpPoint(e, i, t),
            a = lerpPoint(i, r, t),
            s = lerpPoint(n, a, t);
          return [
            new PolynomialBezier(this.points[0], e, n, s, !0),
            new PolynomialBezier(s, a, r, this.points[3], !0),
          ];
        });
      function extrema(t, e) {
        var i = t.points[0][e],
          r = t.points[t.points.length - 1][e];
        if (i > r) {
          var n = r;
          (r = i), (i = n);
        }
        for (
          var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), s = 0;
          s < a.length;
          s += 1
        )
          if (a[s] > 0 && a[s] < 1) {
            var o = t.point(a[s])[e];
            o < i ? (i = o) : o > r && (r = o);
          }
        return { min: i, max: r };
      }
      (PolynomialBezier.prototype.bounds = function () {
        return { x: extrema(this, 0), y: extrema(this, 1) };
      }),
        (PolynomialBezier.prototype.boundingBox = function () {
          var t = this.bounds();
          return {
            left: t.x.min,
            right: t.x.max,
            top: t.y.min,
            bottom: t.y.max,
            width: t.x.max - t.x.min,
            height: t.y.max - t.y.min,
            cx: (t.x.max + t.x.min) / 2,
            cy: (t.y.max + t.y.min) / 2,
          };
        });
      function intersectData(t, e, i) {
        var r = t.boundingBox();
        return {
          cx: r.cx,
          cy: r.cy,
          width: r.width,
          height: r.height,
          bez: t,
          t: (e + i) / 2,
          t1: e,
          t2: i,
        };
      }
      function splitData(t) {
        var e = t.bez.split(0.5);
        return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
      }
      function boxIntersect(t, e) {
        return (
          Math.abs(t.cx - e.cx) * 2 < t.width + e.width &&
          Math.abs(t.cy - e.cy) * 2 < t.height + e.height
        );
      }
      function intersectsImpl(t, e, i, r, n, a) {
        if (boxIntersect(t, e)) {
          if (
            i >= a ||
            (t.width <= r && t.height <= r && e.width <= r && e.height <= r)
          ) {
            n.push([t.t, e.t]);
            return;
          }
          var s = splitData(t),
            o = splitData(e);
          intersectsImpl(s[0], o[0], i + 1, r, n, a),
            intersectsImpl(s[0], o[1], i + 1, r, n, a),
            intersectsImpl(s[1], o[0], i + 1, r, n, a),
            intersectsImpl(s[1], o[1], i + 1, r, n, a);
        }
      }
      (PolynomialBezier.prototype.intersections = function (t, e, i) {
        e === void 0 && (e = 2), i === void 0 && (i = 7);
        var r = [];
        return (
          intersectsImpl(
            intersectData(this, 0, 1),
            intersectData(t, 0, 1),
            0,
            e,
            r,
            i
          ),
          r
        );
      }),
        (PolynomialBezier.shapeSegment = function (t, e) {
          var i = (e + 1) % t.length();
          return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], !0);
        }),
        (PolynomialBezier.shapeSegmentInverted = function (t, e) {
          var i = (e + 1) % t.length();
          return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], !0);
        });
      function crossProduct(t, e) {
        return [
          t[1] * e[2] - t[2] * e[1],
          t[2] * e[0] - t[0] * e[2],
          t[0] * e[1] - t[1] * e[0],
        ];
      }
      function lineIntersection(t, e, i, r) {
        var n = [t[0], t[1], 1],
          a = [e[0], e[1], 1],
          s = [i[0], i[1], 1],
          o = [r[0], r[1], 1],
          l = crossProduct(crossProduct(n, a), crossProduct(s, o));
        return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]];
      }
      function polarOffset(t, e, i) {
        return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i];
      }
      function pointDistance(t, e) {
        return Math.hypot(t[0] - e[0], t[1] - e[1]);
      }
      function pointEqual(t, e) {
        return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
      }
      function ZigZagModifier() {}
      extendPrototype([ShapeModifier], ZigZagModifier),
        (ZigZagModifier.prototype.initModifierProperties = function (t, e) {
          (this.getValue = this.processKeys),
            (this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this)),
            (this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this)),
            (this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this)),
            (this._isAnimated =
              this.amplitude.effectsSequence.length !== 0 ||
              this.frequency.effectsSequence.length !== 0 ||
              this.pointsType.effectsSequence.length !== 0);
        });
      function setPoint(t, e, i, r, n, a, s) {
        var o = i - Math.PI / 2,
          l = i + Math.PI / 2,
          c = e[0] + Math.cos(i) * r * n,
          p = e[1] - Math.sin(i) * r * n;
        t.setTripleAt(
          c,
          p,
          c + Math.cos(o) * a,
          p - Math.sin(o) * a,
          c + Math.cos(l) * s,
          p - Math.sin(l) * s,
          t.length()
        );
      }
      function getPerpendicularVector(t, e) {
        var i = [e[0] - t[0], e[1] - t[1]],
          r = -Math.PI * 0.5,
          n = [
            Math.cos(r) * i[0] - Math.sin(r) * i[1],
            Math.sin(r) * i[0] + Math.cos(r) * i[1],
          ];
        return n;
      }
      function getProjectingAngle(t, e) {
        var i = e === 0 ? t.length() - 1 : e - 1,
          r = (e + 1) % t.length(),
          n = t.v[i],
          a = t.v[r],
          s = getPerpendicularVector(n, a);
        return Math.atan2(0, 1) - Math.atan2(s[1], s[0]);
      }
      function zigZagCorner(t, e, i, r, n, a, s) {
        var o = getProjectingAngle(e, i),
          l = e.v[i % e._length],
          c = e.v[i === 0 ? e._length - 1 : i - 1],
          p = e.v[(i + 1) % e._length],
          _ =
            a === 2
              ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2))
              : 0,
          h =
            a === 2
              ? Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2))
              : 0;
        setPoint(
          t,
          e.v[i % e._length],
          o,
          s,
          r,
          h / ((n + 1) * 2),
          _ / ((n + 1) * 2),
          a
        );
      }
      function zigZagSegment(t, e, i, r, n, a) {
        for (var s = 0; s < r; s += 1) {
          var o = (s + 1) / (r + 1),
            l =
              n === 2
                ? Math.sqrt(
                    Math.pow(e.points[3][0] - e.points[0][0], 2) +
                      Math.pow(e.points[3][1] - e.points[0][1], 2)
                  )
                : 0,
            c = e.normalAngle(o),
            p = e.point(o);
          setPoint(t, p, c, a, i, l / ((r + 1) * 2), l / ((r + 1) * 2), n),
            (a = -a);
        }
        return a;
      }
      (ZigZagModifier.prototype.processPath = function (t, e, i, r) {
        var n = t._length,
          a = shapePool.newElement();
        if (((a.c = t.c), t.c || (n -= 1), n === 0)) return a;
        var s = -1,
          o = PolynomialBezier.shapeSegment(t, 0);
        zigZagCorner(a, t, 0, e, i, r, s);
        for (var l = 0; l < n; l += 1)
          (s = zigZagSegment(a, o, e, i, r, -s)),
            l === n - 1 && !t.c
              ? (o = null)
              : (o = PolynomialBezier.shapeSegment(t, (l + 1) % n)),
            zigZagCorner(a, t, l + 1, e, i, r, s);
        return a;
      }),
        (ZigZagModifier.prototype.processShapes = function (t) {
          var e,
            i,
            r = this.shapes.length,
            n,
            a,
            s = this.amplitude.v,
            o = Math.max(0, Math.round(this.frequency.v)),
            l = this.pointsType.v;
          if (s !== 0) {
            var c, p;
            for (i = 0; i < r; i += 1) {
              if (
                ((c = this.shapes[i]),
                (p = c.localShapeCollection),
                !(!c.shape._mdf && !this._mdf && !t))
              )
                for (
                  p.releaseShapes(),
                    c.shape._mdf = !0,
                    e = c.shape.paths.shapes,
                    a = c.shape.paths._length,
                    n = 0;
                  n < a;
                  n += 1
                )
                  p.addShape(this.processPath(e[n], s, o, l));
              c.shape.paths = c.localShapeCollection;
            }
          }
          this.dynamicProperties.length || (this._mdf = !1);
        });
      function linearOffset(t, e, i) {
        var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
        return [polarOffset(t, r, i), polarOffset(e, r, i)];
      }
      function offsetSegment(t, e) {
        var i, r, n, a, s, o, l;
        (l = linearOffset(t.points[0], t.points[1], e)),
          (i = l[0]),
          (r = l[1]),
          (l = linearOffset(t.points[1], t.points[2], e)),
          (n = l[0]),
          (a = l[1]),
          (l = linearOffset(t.points[2], t.points[3], e)),
          (s = l[0]),
          (o = l[1]);
        var c = lineIntersection(i, r, n, a);
        c === null && (c = r);
        var p = lineIntersection(s, o, n, a);
        return p === null && (p = s), new PolynomialBezier(i, c, p, o);
      }
      function joinLines(t, e, i, r, n) {
        var a = e.points[3],
          s = i.points[0];
        if (r === 3 || pointEqual(a, s)) return a;
        if (r === 2) {
          var o = -e.tangentAngle(1),
            l = -i.tangentAngle(0) + Math.PI,
            c = lineIntersection(
              a,
              polarOffset(a, o + Math.PI / 2, 100),
              s,
              polarOffset(s, o + Math.PI / 2, 100)
            ),
            p = c ? pointDistance(c, a) : pointDistance(a, s) / 2,
            _ = polarOffset(a, o, 2 * p * roundCorner);
          return (
            t.setXYAt(_[0], _[1], "o", t.length() - 1),
            (_ = polarOffset(s, l, 2 * p * roundCorner)),
            t.setTripleAt(s[0], s[1], s[0], s[1], _[0], _[1], t.length()),
            s
          );
        }
        var h = pointEqual(a, e.points[2]) ? e.points[0] : e.points[2],
          b = pointEqual(s, i.points[1]) ? i.points[3] : i.points[1],
          v = lineIntersection(h, a, s, b);
        return v && pointDistance(v, a) < n
          ? (t.setTripleAt(v[0], v[1], v[0], v[1], v[0], v[1], t.length()), v)
          : a;
      }
      function getIntersection(t, e) {
        var i = t.intersections(e);
        return (
          i.length && floatEqual(i[0][0], 1) && i.shift(),
          i.length ? i[0] : null
        );
      }
      function pruneSegmentIntersection(t, e) {
        var i = t.slice(),
          r = e.slice(),
          n = getIntersection(t[t.length - 1], e[0]);
        return (
          n &&
            ((i[t.length - 1] = t[t.length - 1].split(n[0])[0]),
            (r[0] = e[0].split(n[1])[1])),
          t.length > 1 &&
          e.length > 1 &&
          ((n = getIntersection(t[0], e[e.length - 1])), n)
            ? [[t[0].split(n[0])[0]], [e[e.length - 1].split(n[1])[1]]]
            : [i, r]
        );
      }
      function pruneIntersections(t) {
        for (var e, i = 1; i < t.length; i += 1)
          (e = pruneSegmentIntersection(t[i - 1], t[i])),
            (t[i - 1] = e[0]),
            (t[i] = e[1]);
        return (
          t.length > 1 &&
            ((e = pruneSegmentIntersection(t[t.length - 1], t[0])),
            (t[t.length - 1] = e[0]),
            (t[0] = e[1])),
          t
        );
      }
      function offsetSegmentSplit(t, e) {
        var i = t.inflectionPoints(),
          r,
          n,
          a,
          s;
        if (i.length === 0) return [offsetSegment(t, e)];
        if (i.length === 1 || floatEqual(i[1], 1))
          return (
            (a = t.split(i[0])),
            (r = a[0]),
            (n = a[1]),
            [offsetSegment(r, e), offsetSegment(n, e)]
          );
        (a = t.split(i[0])), (r = a[0]);
        var o = (i[1] - i[0]) / (1 - i[0]);
        return (
          (a = a[1].split(o)),
          (s = a[0]),
          (n = a[1]),
          [offsetSegment(r, e), offsetSegment(s, e), offsetSegment(n, e)]
        );
      }
      function OffsetPathModifier() {}
      extendPrototype([ShapeModifier], OffsetPathModifier),
        (OffsetPathModifier.prototype.initModifierProperties = function (t, e) {
          (this.getValue = this.processKeys),
            (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
            (this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this)),
            (this.lineJoin = e.lj),
            (this._isAnimated = this.amount.effectsSequence.length !== 0);
        }),
        (OffsetPathModifier.prototype.processPath = function (t, e, i, r) {
          var n = shapePool.newElement();
          n.c = t.c;
          var a = t.length();
          t.c || (a -= 1);
          var s,
            o,
            l,
            c = [];
          for (s = 0; s < a; s += 1)
            (l = PolynomialBezier.shapeSegment(t, s)),
              c.push(offsetSegmentSplit(l, e));
          if (!t.c)
            for (s = a - 1; s >= 0; s -= 1)
              (l = PolynomialBezier.shapeSegmentInverted(t, s)),
                c.push(offsetSegmentSplit(l, e));
          c = pruneIntersections(c);
          var p = null,
            _ = null;
          for (s = 0; s < c.length; s += 1) {
            var h = c[s];
            for (
              _ && (p = joinLines(n, _, h[0], i, r)),
                _ = h[h.length - 1],
                o = 0;
              o < h.length;
              o += 1
            )
              (l = h[o]),
                p && pointEqual(l.points[0], p)
                  ? n.setXYAt(
                      l.points[1][0],
                      l.points[1][1],
                      "o",
                      n.length() - 1
                    )
                  : n.setTripleAt(
                      l.points[0][0],
                      l.points[0][1],
                      l.points[1][0],
                      l.points[1][1],
                      l.points[0][0],
                      l.points[0][1],
                      n.length()
                    ),
                n.setTripleAt(
                  l.points[3][0],
                  l.points[3][1],
                  l.points[3][0],
                  l.points[3][1],
                  l.points[2][0],
                  l.points[2][1],
                  n.length()
                ),
                (p = l.points[3]);
          }
          return c.length && joinLines(n, _, c[0][0], i, r), n;
        }),
        (OffsetPathModifier.prototype.processShapes = function (t) {
          var e,
            i,
            r = this.shapes.length,
            n,
            a,
            s = this.amount.v,
            o = this.miterLimit.v,
            l = this.lineJoin;
          if (s !== 0) {
            var c, p;
            for (i = 0; i < r; i += 1) {
              if (
                ((c = this.shapes[i]),
                (p = c.localShapeCollection),
                !(!c.shape._mdf && !this._mdf && !t))
              )
                for (
                  p.releaseShapes(),
                    c.shape._mdf = !0,
                    e = c.shape.paths.shapes,
                    a = c.shape.paths._length,
                    n = 0;
                  n < a;
                  n += 1
                )
                  p.addShape(this.processPath(e[n], s, l, o));
              c.shape.paths = c.localShapeCollection;
            }
          }
          this.dynamicProperties.length || (this._mdf = !1);
        });
      function getFontProperties(t) {
        for (
          var e = t.fStyle ? t.fStyle.split(" ") : [],
            i = "normal",
            r = "normal",
            n = e.length,
            a,
            s = 0;
          s < n;
          s += 1
        )
          switch (((a = e[s].toLowerCase()), a)) {
            case "italic":
              r = "italic";
              break;
            case "bold":
              i = "700";
              break;
            case "black":
              i = "900";
              break;
            case "medium":
              i = "500";
              break;
            case "regular":
            case "normal":
              i = "400";
              break;
            case "light":
            case "thin":
              i = "200";
              break;
            default:
              break;
          }
        return { style: r, weight: t.fWeight || i };
      }
      var FontManager = (function () {
        var t = 5e3,
          e = { w: 0, size: 0, shapes: [], data: { shapes: [] } },
          i = [];
        i = i.concat([
          2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
          2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
          2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
        ]);
        var r = 127988,
          n = 917631,
          a = 917601,
          s = 917626,
          o = 65039,
          l = 8205,
          c = 127462,
          p = 127487,
          _ = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
        function h(x) {
          var w = x.split(","),
            g,
            S = w.length,
            k = [];
          for (g = 0; g < S; g += 1)
            w[g] !== "sans-serif" && w[g] !== "monospace" && k.push(w[g]);
          return k.join(",");
        }
        function b(x, w) {
          var g = createTag("span");
          g.setAttribute("aria-hidden", !0), (g.style.fontFamily = w);
          var S = createTag("span");
          (S.innerText = "giItT1WQy@!-/#"),
            (g.style.position = "absolute"),
            (g.style.left = "-10000px"),
            (g.style.top = "-10000px"),
            (g.style.fontSize = "300px"),
            (g.style.fontVariant = "normal"),
            (g.style.fontStyle = "normal"),
            (g.style.fontWeight = "normal"),
            (g.style.letterSpacing = "0"),
            g.appendChild(S),
            document.body.appendChild(g);
          var k = S.offsetWidth;
          return (
            (S.style.fontFamily = h(x) + ", " + w), { node: S, w: k, parent: g }
          );
        }
        function v() {
          var x,
            w = this.fonts.length,
            g,
            S,
            k = w;
          for (x = 0; x < w; x += 1)
            this.fonts[x].loaded
              ? (k -= 1)
              : this.fonts[x].fOrigin === "n" || this.fonts[x].origin === 0
              ? (this.fonts[x].loaded = !0)
              : ((g = this.fonts[x].monoCase.node),
                (S = this.fonts[x].monoCase.w),
                g.offsetWidth !== S
                  ? ((k -= 1), (this.fonts[x].loaded = !0))
                  : ((g = this.fonts[x].sansCase.node),
                    (S = this.fonts[x].sansCase.w),
                    g.offsetWidth !== S &&
                      ((k -= 1), (this.fonts[x].loaded = !0))),
                this.fonts[x].loaded &&
                  (this.fonts[x].sansCase.parent.parentNode.removeChild(
                    this.fonts[x].sansCase.parent
                  ),
                  this.fonts[x].monoCase.parent.parentNode.removeChild(
                    this.fonts[x].monoCase.parent
                  )));
          k !== 0 && Date.now() - this.initTime < t
            ? setTimeout(this.checkLoadedFontsBinded, 20)
            : setTimeout(this.setIsLoadedBinded, 10);
        }
        function f(x, w) {
          var g = document.body && w ? "svg" : "canvas",
            S,
            k = getFontProperties(x);
          if (g === "svg") {
            var A = createNS("text");
            (A.style.fontSize = "100px"),
              A.setAttribute("font-family", x.fFamily),
              A.setAttribute("font-style", k.style),
              A.setAttribute("font-weight", k.weight),
              (A.textContent = "1"),
              x.fClass
                ? ((A.style.fontFamily = "inherit"),
                  A.setAttribute("class", x.fClass))
                : (A.style.fontFamily = x.fFamily),
              w.appendChild(A),
              (S = A);
          } else {
            var V = new OffscreenCanvas(500, 500).getContext("2d");
            (V.font = k.style + " " + k.weight + " 100px " + x.fFamily),
              (S = V);
          }
          function q(G) {
            return g === "svg"
              ? ((S.textContent = G), S.getComputedTextLength())
              : S.measureText(G).width;
          }
          return { measureText: q };
        }
        function E(x, w) {
          if (!x) {
            this.isLoaded = !0;
            return;
          }
          if (this.chars) {
            (this.isLoaded = !0), (this.fonts = x.list);
            return;
          }
          if (!document.body) {
            (this.isLoaded = !0),
              x.list.forEach(function (ut) {
                (ut.helper = f(ut)), (ut.cache = {});
              }),
              (this.fonts = x.list);
            return;
          }
          var g = x.list,
            S,
            k = g.length,
            A = k;
          for (S = 0; S < k; S += 1) {
            var V = !0,
              q,
              G;
            if (
              ((g[S].loaded = !1),
              (g[S].monoCase = b(g[S].fFamily, "monospace")),
              (g[S].sansCase = b(g[S].fFamily, "sans-serif")),
              !g[S].fPath)
            )
              (g[S].loaded = !0), (A -= 1);
            else if (g[S].fOrigin === "p" || g[S].origin === 3) {
              if (
                ((q = document.querySelectorAll(
                  'style[f-forigin="p"][f-family="' +
                    g[S].fFamily +
                    '"], style[f-origin="3"][f-family="' +
                    g[S].fFamily +
                    '"]'
                )),
                q.length > 0 && (V = !1),
                V)
              ) {
                var nt = createTag("style");
                nt.setAttribute("f-forigin", g[S].fOrigin),
                  nt.setAttribute("f-origin", g[S].origin),
                  nt.setAttribute("f-family", g[S].fFamily),
                  (nt.type = "text/css"),
                  (nt.innerText =
                    "@font-face {font-family: " +
                    g[S].fFamily +
                    "; font-style: normal; src: url('" +
                    g[S].fPath +
                    "');}"),
                  w.appendChild(nt);
              }
            } else if (g[S].fOrigin === "g" || g[S].origin === 1) {
              for (
                q = document.querySelectorAll(
                  'link[f-forigin="g"], link[f-origin="1"]'
                ),
                  G = 0;
                G < q.length;
                G += 1
              )
                q[G].href.indexOf(g[S].fPath) !== -1 && (V = !1);
              if (V) {
                var st = createTag("link");
                st.setAttribute("f-forigin", g[S].fOrigin),
                  st.setAttribute("f-origin", g[S].origin),
                  (st.type = "text/css"),
                  (st.rel = "stylesheet"),
                  (st.href = g[S].fPath),
                  document.body.appendChild(st);
              }
            } else if (g[S].fOrigin === "t" || g[S].origin === 2) {
              for (
                q = document.querySelectorAll(
                  'script[f-forigin="t"], script[f-origin="2"]'
                ),
                  G = 0;
                G < q.length;
                G += 1
              )
                g[S].fPath === q[G].src && (V = !1);
              if (V) {
                var rt = createTag("link");
                rt.setAttribute("f-forigin", g[S].fOrigin),
                  rt.setAttribute("f-origin", g[S].origin),
                  rt.setAttribute("rel", "stylesheet"),
                  rt.setAttribute("href", g[S].fPath),
                  w.appendChild(rt);
              }
            }
            (g[S].helper = f(g[S], w)),
              (g[S].cache = {}),
              this.fonts.push(g[S]);
          }
          A === 0
            ? (this.isLoaded = !0)
            : setTimeout(this.checkLoadedFonts.bind(this), 100);
        }
        function d(x) {
          if (x) {
            this.chars || (this.chars = []);
            var w,
              g = x.length,
              S,
              k = this.chars.length,
              A;
            for (w = 0; w < g; w += 1) {
              for (S = 0, A = !1; S < k; )
                this.chars[S].style === x[w].style &&
                  this.chars[S].fFamily === x[w].fFamily &&
                  this.chars[S].ch === x[w].ch &&
                  (A = !0),
                  (S += 1);
              A || (this.chars.push(x[w]), (k += 1));
            }
          }
        }
        function u(x, w, g) {
          for (var S = 0, k = this.chars.length; S < k; ) {
            if (
              this.chars[S].ch === x &&
              this.chars[S].style === w &&
              this.chars[S].fFamily === g
            )
              return this.chars[S];
            S += 1;
          }
          return (
            ((typeof x == "string" && x.charCodeAt(0) !== 13) || !x) &&
              console &&
              console.warn &&
              !this._warned &&
              ((this._warned = !0),
              console.warn(
                "Missing character from exported characters list: ",
                x,
                w,
                g
              )),
            e
          );
        }
        function m(x, w, g) {
          var S = this.getFontByName(w),
            k = x;
          if (!S.cache[k]) {
            var A = S.helper;
            if (x === " ") {
              var V = A.measureText("|" + x + "|"),
                q = A.measureText("||");
              S.cache[k] = (V - q) / 100;
            } else S.cache[k] = A.measureText(x) / 100;
          }
          return S.cache[k] * g;
        }
        function y(x) {
          for (var w = 0, g = this.fonts.length; w < g; ) {
            if (this.fonts[w].fName === x) return this.fonts[w];
            w += 1;
          }
          return this.fonts[0];
        }
        function C(x) {
          var w = 0,
            g = x.charCodeAt(0);
          if (g >= 55296 && g <= 56319) {
            var S = x.charCodeAt(1);
            S >= 56320 &&
              S <= 57343 &&
              (w = (g - 55296) * 1024 + S - 56320 + 65536);
          }
          return w;
        }
        function P(x, w) {
          var g = x.toString(16) + w.toString(16);
          return _.indexOf(g) !== -1;
        }
        function T(x) {
          return x === l;
        }
        function M(x) {
          return x === o;
        }
        function I(x) {
          var w = C(x);
          return w >= c && w <= p;
        }
        function z(x) {
          return I(x.substr(0, 2)) && I(x.substr(2, 2));
        }
        function O(x) {
          return i.indexOf(x) !== -1;
        }
        function D(x, w) {
          var g = C(x.substr(w, 2));
          if (g !== r) return !1;
          var S = 0;
          for (w += 2; S < 5; ) {
            if (((g = C(x.substr(w, 2))), g < a || g > s)) return !1;
            (S += 1), (w += 2);
          }
          return C(x.substr(w, 2)) === n;
        }
        function j() {
          this.isLoaded = !0;
        }
        var H = function () {
          (this.fonts = []),
            (this.chars = null),
            (this.typekitLoaded = 0),
            (this.isLoaded = !1),
            (this._warned = !1),
            (this.initTime = Date.now()),
            (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
            (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
        };
        (H.isModifier = P),
          (H.isZeroWidthJoiner = T),
          (H.isFlagEmoji = z),
          (H.isRegionalCode = I),
          (H.isCombinedCharacter = O),
          (H.isRegionalFlag = D),
          (H.isVariationSelector = M),
          (H.BLACK_FLAG_CODE_POINT = r);
        var R = {
          addChars: d,
          addFonts: E,
          getCharData: u,
          getFontByName: y,
          measureText: m,
          checkLoadedFonts: v,
          setIsLoaded: j,
        };
        return (H.prototype = R), H;
      })();
      function SlotManager(t) {
        this.animationData = t;
      }
      SlotManager.prototype.getProp = function (t) {
        return this.animationData.slots && this.animationData.slots[t.sid]
          ? Object.assign(t, this.animationData.slots[t.sid].p)
          : t;
      };
      function slotFactory(t) {
        return new SlotManager(t);
      }
      function RenderableElement() {}
      RenderableElement.prototype = {
        initRenderable: function () {
          (this.isInRange = !1),
            (this.hidden = !1),
            (this.isTransparent = !1),
            (this.renderableComponents = []);
        },
        addRenderableComponent: function (e) {
          this.renderableComponents.indexOf(e) === -1 &&
            this.renderableComponents.push(e);
        },
        removeRenderableComponent: function (e) {
          this.renderableComponents.indexOf(e) !== -1 &&
            this.renderableComponents.splice(
              this.renderableComponents.indexOf(e),
              1
            );
        },
        prepareRenderableFrame: function (e) {
          this.checkLayerLimits(e);
        },
        checkTransparency: function () {
          this.finalTransform.mProp.o.v <= 0
            ? !this.isTransparent &&
              this.globalData.renderConfig.hideOnTransparent &&
              ((this.isTransparent = !0), this.hide())
            : this.isTransparent && ((this.isTransparent = !1), this.show());
        },
        checkLayerLimits: function (e) {
          this.data.ip - this.data.st <= e && this.data.op - this.data.st > e
            ? this.isInRange !== !0 &&
              ((this.globalData._mdf = !0),
              (this._mdf = !0),
              (this.isInRange = !0),
              this.show())
            : this.isInRange !== !1 &&
              ((this.globalData._mdf = !0), (this.isInRange = !1), this.hide());
        },
        renderRenderable: function () {
          var e,
            i = this.renderableComponents.length;
          for (e = 0; e < i; e += 1)
            this.renderableComponents[e].renderFrame(this._isFirstFrame);
        },
        sourceRectAtTime: function () {
          return { top: 0, left: 0, width: 100, height: 100 };
        },
        getLayerSize: function () {
          return this.data.ty === 5
            ? { w: this.data.textData.width, h: this.data.textData.height }
            : { w: this.data.width, h: this.data.height };
        },
      };
      var getBlendMode = (function () {
        var t = {
          0: "source-over",
          1: "multiply",
          2: "screen",
          3: "overlay",
          4: "darken",
          5: "lighten",
          6: "color-dodge",
          7: "color-burn",
          8: "hard-light",
          9: "soft-light",
          10: "difference",
          11: "exclusion",
          12: "hue",
          13: "saturation",
          14: "color",
          15: "luminosity",
        };
        return function (e) {
          return t[e] || "";
        };
      })();
      function SliderEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function AngleEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function ColorEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
      }
      function PointEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
      }
      function LayerIndexEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function MaskIndexEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function CheckboxEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function NoValueEffect() {
        this.p = {};
      }
      function EffectsManager(t, e) {
        var i = t.ef || [];
        this.effectElements = [];
        var r,
          n = i.length,
          a;
        for (r = 0; r < n; r += 1)
          (a = new GroupEffect(i[r], e)), this.effectElements.push(a);
      }
      function GroupEffect(t, e) {
        this.init(t, e);
      }
      extendPrototype([DynamicPropertyContainer], GroupEffect),
        (GroupEffect.prototype.getValue =
          GroupEffect.prototype.iterateDynamicProperties),
        (GroupEffect.prototype.init = function (t, e) {
          (this.data = t),
            (this.effectElements = []),
            this.initDynamicPropertyContainer(e);
          var i,
            r = this.data.ef.length,
            n,
            a = this.data.ef;
          for (i = 0; i < r; i += 1) {
            switch (((n = null), a[i].ty)) {
              case 0:
                n = new SliderEffect(a[i], e, this);
                break;
              case 1:
                n = new AngleEffect(a[i], e, this);
                break;
              case 2:
                n = new ColorEffect(a[i], e, this);
                break;
              case 3:
                n = new PointEffect(a[i], e, this);
                break;
              case 4:
              case 7:
                n = new CheckboxEffect(a[i], e, this);
                break;
              case 10:
                n = new LayerIndexEffect(a[i], e, this);
                break;
              case 11:
                n = new MaskIndexEffect(a[i], e, this);
                break;
              case 5:
                n = new EffectsManager(a[i], e, this);
                break;
              default:
                n = new NoValueEffect(a[i], e, this);
                break;
            }
            n && this.effectElements.push(n);
          }
        });
      function BaseElement() {}
      BaseElement.prototype = {
        checkMasks: function () {
          if (!this.data.hasMask) return !1;
          for (var e = 0, i = this.data.masksProperties.length; e < i; ) {
            if (
              this.data.masksProperties[e].mode !== "n" &&
              this.data.masksProperties[e].cl !== !1
            )
              return !0;
            e += 1;
          }
          return !1;
        },
        initExpressions: function () {
          var e = getExpressionInterfaces();
          if (e) {
            var i = e("layer"),
              r = e("effects"),
              n = e("shape"),
              a = e("text"),
              s = e("comp");
            (this.layerInterface = i(this)),
              this.data.hasMask &&
                this.maskManager &&
                this.layerInterface.registerMaskInterface(this.maskManager);
            var o = r.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(o),
              this.data.ty === 0 || this.data.xt
                ? (this.compInterface = s(this))
                : this.data.ty === 4
                ? ((this.layerInterface.shapeInterface = n(
                    this.shapesData,
                    this.itemsData,
                    this.layerInterface
                  )),
                  (this.layerInterface.content =
                    this.layerInterface.shapeInterface))
                : this.data.ty === 5 &&
                  ((this.layerInterface.textInterface = a(this)),
                  (this.layerInterface.text =
                    this.layerInterface.textInterface));
          }
        },
        setBlendMode: function () {
          var e = getBlendMode(this.data.bm),
            i = this.baseElement || this.layerElement;
          i.style["mix-blend-mode"] = e;
        },
        initBaseData: function (e, i, r) {
          (this.globalData = i),
            (this.comp = r),
            (this.data = e),
            (this.layerId = createElementID()),
            this.data.sr || (this.data.sr = 1),
            (this.effectsManager = new EffectsManager(
              this.data,
              this,
              this.dynamicProperties
            ));
        },
        getType: function () {
          return this.type;
        },
        sourceRectAtTime: function () {},
      };
      function FrameElement() {}
      FrameElement.prototype = {
        initFrame: function () {
          (this._isFirstFrame = !1),
            (this.dynamicProperties = []),
            (this._mdf = !1);
        },
        prepareProperties: function (e, i) {
          var r,
            n = this.dynamicProperties.length;
          for (r = 0; r < n; r += 1)
            (i ||
              (this._isParent &&
                this.dynamicProperties[r].propType === "transform")) &&
              (this.dynamicProperties[r].getValue(),
              this.dynamicProperties[r]._mdf &&
                ((this.globalData._mdf = !0), (this._mdf = !0)));
        },
        addDynamicProperty: function (e) {
          this.dynamicProperties.indexOf(e) === -1 &&
            this.dynamicProperties.push(e);
        },
      };
      function FootageElement(t, e, i) {
        this.initFrame(),
          this.initRenderable(),
          (this.assetData = e.getAssetData(t.refId)),
          (this.footageData = e.imageLoader.getAsset(this.assetData)),
          this.initBaseData(t, e, i);
      }
      (FootageElement.prototype.prepareFrame = function () {}),
        extendPrototype(
          [RenderableElement, BaseElement, FrameElement],
          FootageElement
        ),
        (FootageElement.prototype.getBaseElement = function () {
          return null;
        }),
        (FootageElement.prototype.renderFrame = function () {}),
        (FootageElement.prototype.destroy = function () {}),
        (FootageElement.prototype.initExpressions = function () {
          var t = getExpressionInterfaces();
          if (t) {
            var e = t("footage");
            this.layerInterface = e(this);
          }
        }),
        (FootageElement.prototype.getFootageData = function () {
          return this.footageData;
        });
      function AudioElement(t, e, i) {
        this.initFrame(),
          this.initRenderable(),
          (this.assetData = e.getAssetData(t.refId)),
          this.initBaseData(t, e, i),
          (this._isPlaying = !1),
          (this._canPlay = !1);
        var r = this.globalData.getAssetsPath(this.assetData);
        (this.audio = this.globalData.audioController.createAudio(r)),
          (this._currentTime = 0),
          this.globalData.audioController.addAudio(this),
          (this._volumeMultiplier = 1),
          (this._volume = 1),
          (this._previousVolume = null),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 }),
          (this.lv = PropertyFactory.getProp(
            this,
            t.au && t.au.lv ? t.au.lv : { k: [100] },
            1,
            0.01,
            this
          ));
      }
      (AudioElement.prototype.prepareFrame = function (t) {
        if (
          (this.prepareRenderableFrame(t, !0),
          this.prepareProperties(t, !0),
          this.tm._placeholder)
        )
          this._currentTime = t / this.data.sr;
        else {
          var e = this.tm.v;
          this._currentTime = e;
        }
        this._volume = this.lv.v[0];
        var i = this._volume * this._volumeMultiplier;
        this._previousVolume !== i &&
          ((this._previousVolume = i), this.audio.volume(i));
      }),
        extendPrototype(
          [RenderableElement, BaseElement, FrameElement],
          AudioElement
        ),
        (AudioElement.prototype.renderFrame = function () {
          this.isInRange &&
            this._canPlay &&
            (this._isPlaying
              ? (!this.audio.playing() ||
                  Math.abs(
                    this._currentTime / this.globalData.frameRate -
                      this.audio.seek()
                  ) > 0.1) &&
                this.audio.seek(this._currentTime / this.globalData.frameRate)
              : (this.audio.play(),
                this.audio.seek(this._currentTime / this.globalData.frameRate),
                (this._isPlaying = !0)));
        }),
        (AudioElement.prototype.show = function () {}),
        (AudioElement.prototype.hide = function () {
          this.audio.pause(), (this._isPlaying = !1);
        }),
        (AudioElement.prototype.pause = function () {
          this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
        }),
        (AudioElement.prototype.resume = function () {
          this._canPlay = !0;
        }),
        (AudioElement.prototype.setRate = function (t) {
          this.audio.rate(t);
        }),
        (AudioElement.prototype.volume = function (t) {
          (this._volumeMultiplier = t),
            (this._previousVolume = t * this._volume),
            this.audio.volume(this._previousVolume);
        }),
        (AudioElement.prototype.getBaseElement = function () {
          return null;
        }),
        (AudioElement.prototype.destroy = function () {}),
        (AudioElement.prototype.sourceRectAtTime = function () {}),
        (AudioElement.prototype.initExpressions = function () {});
      function BaseRenderer() {}
      (BaseRenderer.prototype.checkLayers = function (t) {
        var e,
          i = this.layers.length,
          r;
        for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)
          this.elements[e] ||
            ((r = this.layers[e]),
            r.ip - r.st <= t - this.layers[e].st &&
              r.op - r.st > t - this.layers[e].st &&
              this.buildItem(e)),
            (this.completeLayers = this.elements[e] ? this.completeLayers : !1);
        this.checkPendingElements();
      }),
        (BaseRenderer.prototype.createItem = function (t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t);
            case 0:
              return this.createComp(t);
            case 1:
              return this.createSolid(t);
            case 3:
              return this.createNull(t);
            case 4:
              return this.createShape(t);
            case 5:
              return this.createText(t);
            case 6:
              return this.createAudio(t);
            case 13:
              return this.createCamera(t);
            case 15:
              return this.createFootage(t);
            default:
              return this.createNull(t);
          }
        }),
        (BaseRenderer.prototype.createCamera = function () {
          throw new Error("You're using a 3d camera. Try the html renderer.");
        }),
        (BaseRenderer.prototype.createAudio = function (t) {
          return new AudioElement(t, this.globalData, this);
        }),
        (BaseRenderer.prototype.createFootage = function (t) {
          return new FootageElement(t, this.globalData, this);
        }),
        (BaseRenderer.prototype.buildAllItems = function () {
          var t,
            e = this.layers.length;
          for (t = 0; t < e; t += 1) this.buildItem(t);
          this.checkPendingElements();
        }),
        (BaseRenderer.prototype.includeLayers = function (t) {
          this.completeLayers = !1;
          var e,
            i = t.length,
            r,
            n = this.layers.length;
          for (e = 0; e < i; e += 1)
            for (r = 0; r < n; ) {
              if (this.layers[r].id === t[e].id) {
                this.layers[r] = t[e];
                break;
              }
              r += 1;
            }
        }),
        (BaseRenderer.prototype.setProjectInterface = function (t) {
          this.globalData.projectInterface = t;
        }),
        (BaseRenderer.prototype.initItems = function () {
          this.globalData.progressiveLoad || this.buildAllItems();
        }),
        (BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
          for (
            var r = this.elements, n = this.layers, a = 0, s = n.length;
            a < s;

          )
            n[a].ind == e &&
              (!r[a] || r[a] === !0
                ? (this.buildItem(a), this.addPendingElement(t))
                : (i.push(r[a]),
                  r[a].setAsParent(),
                  n[a].parent !== void 0
                    ? this.buildElementParenting(t, n[a].parent, i)
                    : t.setHierarchy(i))),
              (a += 1);
        }),
        (BaseRenderer.prototype.addPendingElement = function (t) {
          this.pendingElements.push(t);
        }),
        (BaseRenderer.prototype.searchExtraCompositions = function (t) {
          var e,
            i = t.length;
          for (e = 0; e < i; e += 1)
            if (t[e].xt) {
              var r = this.createComp(t[e]);
              r.initExpressions(),
                this.globalData.projectInterface.registerComposition(r);
            }
        }),
        (BaseRenderer.prototype.getElementById = function (t) {
          var e,
            i = this.elements.length;
          for (e = 0; e < i; e += 1)
            if (this.elements[e].data.ind === t) return this.elements[e];
          return null;
        }),
        (BaseRenderer.prototype.getElementByPath = function (t) {
          var e = t.shift(),
            i;
          if (typeof e == "number") i = this.elements[e];
          else {
            var r,
              n = this.elements.length;
            for (r = 0; r < n; r += 1)
              if (this.elements[r].data.nm === e) {
                i = this.elements[r];
                break;
              }
          }
          return t.length === 0 ? i : i.getElementByPath(t);
        }),
        (BaseRenderer.prototype.setupGlobalData = function (t, e) {
          (this.globalData.fontManager = new FontManager()),
            (this.globalData.slotManager = slotFactory(t)),
            this.globalData.fontManager.addChars(t.chars),
            this.globalData.fontManager.addFonts(t.fonts, e),
            (this.globalData.getAssetData =
              this.animationItem.getAssetData.bind(this.animationItem)),
            (this.globalData.getAssetsPath =
              this.animationItem.getAssetsPath.bind(this.animationItem)),
            (this.globalData.imageLoader = this.animationItem.imagePreloader),
            (this.globalData.audioController =
              this.animationItem.audioController),
            (this.globalData.frameId = 0),
            (this.globalData.frameRate = t.fr),
            (this.globalData.nm = t.nm),
            (this.globalData.compSize = { w: t.w, h: t.h });
        });
      var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
      function TransformElement() {}
      TransformElement.prototype = {
        initTransform: function () {
          var e = new Matrix();
          (this.finalTransform = {
            mProp: this.data.ks
              ? TransformPropertyFactory.getTransformProperty(
                  this,
                  this.data.ks,
                  this
                )
              : { o: 0 },
            _matMdf: !1,
            _localMatMdf: !1,
            _opMdf: !1,
            mat: e,
            localMat: e,
            localOpacity: 1,
          }),
            this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
            this.data.ty;
        },
        renderTransform: function () {
          if (
            ((this.finalTransform._opMdf =
              this.finalTransform.mProp.o._mdf || this._isFirstFrame),
            (this.finalTransform._matMdf =
              this.finalTransform.mProp._mdf || this._isFirstFrame),
            this.hierarchy)
          ) {
            var e,
              i = this.finalTransform.mat,
              r = 0,
              n = this.hierarchy.length;
            if (!this.finalTransform._matMdf)
              for (; r < n; ) {
                if (this.hierarchy[r].finalTransform.mProp._mdf) {
                  this.finalTransform._matMdf = !0;
                  break;
                }
                r += 1;
              }
            if (this.finalTransform._matMdf)
              for (
                e = this.finalTransform.mProp.v.props,
                  i.cloneFromProps(e),
                  r = 0;
                r < n;
                r += 1
              )
                i.multiply(this.hierarchy[r].finalTransform.mProp.v);
          }
          this.finalTransform._matMdf &&
            (this.finalTransform._localMatMdf = this.finalTransform._matMdf),
            this.finalTransform._opMdf &&
              (this.finalTransform.localOpacity =
                this.finalTransform.mProp.o.v);
        },
        renderLocalTransform: function () {
          if (this.localTransforms) {
            var e = 0,
              i = this.localTransforms.length;
            if (
              ((this.finalTransform._localMatMdf = this.finalTransform._matMdf),
              !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
            )
              for (; e < i; )
                this.localTransforms[e]._mdf &&
                  (this.finalTransform._localMatMdf = !0),
                  this.localTransforms[e]._opMdf &&
                    !this.finalTransform._opMdf &&
                    ((this.finalTransform.localOpacity =
                      this.finalTransform.mProp.o.v),
                    (this.finalTransform._opMdf = !0)),
                  (e += 1);
            if (this.finalTransform._localMatMdf) {
              var r = this.finalTransform.localMat;
              for (
                this.localTransforms[0].matrix.clone(r), e = 1;
                e < i;
                e += 1
              ) {
                var n = this.localTransforms[e].matrix;
                r.multiply(n);
              }
              r.multiply(this.finalTransform.mat);
            }
            if (this.finalTransform._opMdf) {
              var a = this.finalTransform.localOpacity;
              for (e = 0; e < i; e += 1)
                a *= this.localTransforms[e].opacity * 0.01;
              this.finalTransform.localOpacity = a;
            }
          }
        },
        searchEffectTransforms: function () {
          if (this.renderableEffectsManager) {
            var e = this.renderableEffectsManager.getEffects(
              effectTypes.TRANSFORM_EFFECT
            );
            if (e.length) {
              (this.localTransforms = []),
                (this.finalTransform.localMat = new Matrix());
              var i = 0,
                r = e.length;
              for (i = 0; i < r; i += 1) this.localTransforms.push(e[i]);
            }
          }
        },
        globalToLocal: function (e) {
          var i = [];
          i.push(this.finalTransform);
          for (var r = !0, n = this.comp; r; )
            n.finalTransform
              ? (n.data.hasMask && i.splice(0, 0, n.finalTransform),
                (n = n.comp))
              : (r = !1);
          var a,
            s = i.length,
            o;
          for (a = 0; a < s; a += 1)
            (o = i[a].mat.applyToPointArray(0, 0, 0)),
              (e = [e[0] - o[0], e[1] - o[1], 0]);
          return e;
        },
        mHelper: new Matrix(),
      };
      function MaskElement(t, e, i) {
        (this.data = t),
          (this.element = e),
          (this.globalData = i),
          (this.storedData = []),
          (this.masksProperties = this.data.masksProperties || []),
          (this.maskElement = null);
        var r = this.globalData.defs,
          n,
          a = this.masksProperties ? this.masksProperties.length : 0;
        (this.viewData = createSizedArray(a)), (this.solidPath = "");
        var s,
          o = this.masksProperties,
          l = 0,
          c = [],
          p,
          _,
          h = createElementID(),
          b,
          v,
          f,
          E,
          d = "clipPath",
          u = "clip-path";
        for (n = 0; n < a; n += 1)
          if (
            (((o[n].mode !== "a" && o[n].mode !== "n") ||
              o[n].inv ||
              o[n].o.k !== 100 ||
              o[n].o.x) &&
              ((d = "mask"), (u = "mask")),
            (o[n].mode === "s" || o[n].mode === "i") && l === 0
              ? ((b = createNS("rect")),
                b.setAttribute("fill", "#ffffff"),
                b.setAttribute("width", this.element.comp.data.w || 0),
                b.setAttribute("height", this.element.comp.data.h || 0),
                c.push(b))
              : (b = null),
            (s = createNS("path")),
            o[n].mode === "n")
          )
            (this.viewData[n] = {
              op: PropertyFactory.getProp(
                this.element,
                o[n].o,
                0,
                0.01,
                this.element
              ),
              prop: ShapePropertyFactory.getShapeProp(this.element, o[n], 3),
              elem: s,
              lastPath: "",
            }),
              r.appendChild(s);
          else {
            (l += 1),
              s.setAttribute("fill", o[n].mode === "s" ? "#000000" : "#ffffff"),
              s.setAttribute("clip-rule", "nonzero");
            var m;
            if (
              (o[n].x.k !== 0
                ? ((d = "mask"),
                  (u = "mask"),
                  (E = PropertyFactory.getProp(
                    this.element,
                    o[n].x,
                    0,
                    null,
                    this.element
                  )),
                  (m = createElementID()),
                  (v = createNS("filter")),
                  v.setAttribute("id", m),
                  (f = createNS("feMorphology")),
                  f.setAttribute("operator", "erode"),
                  f.setAttribute("in", "SourceGraphic"),
                  f.setAttribute("radius", "0"),
                  v.appendChild(f),
                  r.appendChild(v),
                  s.setAttribute(
                    "stroke",
                    o[n].mode === "s" ? "#000000" : "#ffffff"
                  ))
                : ((f = null), (E = null)),
              (this.storedData[n] = {
                elem: s,
                x: E,
                expan: f,
                lastPath: "",
                lastOperator: "",
                filterId: m,
                lastRadius: 0,
              }),
              o[n].mode === "i")
            ) {
              _ = c.length;
              var y = createNS("g");
              for (p = 0; p < _; p += 1) y.appendChild(c[p]);
              var C = createNS("mask");
              C.setAttribute("mask-type", "alpha"),
                C.setAttribute("id", h + "_" + l),
                C.appendChild(s),
                r.appendChild(C),
                y.setAttribute(
                  "mask",
                  "url(" + getLocationHref() + "#" + h + "_" + l + ")"
                ),
                (c.length = 0),
                c.push(y);
            } else c.push(s);
            o[n].inv &&
              !this.solidPath &&
              (this.solidPath = this.createLayerSolidPath()),
              (this.viewData[n] = {
                elem: s,
                lastPath: "",
                op: PropertyFactory.getProp(
                  this.element,
                  o[n].o,
                  0,
                  0.01,
                  this.element
                ),
                prop: ShapePropertyFactory.getShapeProp(this.element, o[n], 3),
                invRect: b,
              }),
              this.viewData[n].prop.k ||
                this.drawPath(o[n], this.viewData[n].prop.v, this.viewData[n]);
          }
        for (this.maskElement = createNS(d), a = c.length, n = 0; n < a; n += 1)
          this.maskElement.appendChild(c[n]);
        l > 0 &&
          (this.maskElement.setAttribute("id", h),
          this.element.maskedElement.setAttribute(
            u,
            "url(" + getLocationHref() + "#" + h + ")"
          ),
          r.appendChild(this.maskElement)),
          this.viewData.length && this.element.addRenderableComponent(this);
      }
      (MaskElement.prototype.getMaskProperty = function (t) {
        return this.viewData[t].prop;
      }),
        (MaskElement.prototype.renderFrame = function (t) {
          var e = this.element.finalTransform.mat,
            i,
            r = this.masksProperties.length;
          for (i = 0; i < r; i += 1)
            if (
              ((this.viewData[i].prop._mdf || t) &&
                this.drawPath(
                  this.masksProperties[i],
                  this.viewData[i].prop.v,
                  this.viewData[i]
                ),
              (this.viewData[i].op._mdf || t) &&
                this.viewData[i].elem.setAttribute(
                  "fill-opacity",
                  this.viewData[i].op.v
                ),
              this.masksProperties[i].mode !== "n" &&
                (this.viewData[i].invRect &&
                  (this.element.finalTransform.mProp._mdf || t) &&
                  this.viewData[i].invRect.setAttribute(
                    "transform",
                    e.getInverseMatrix().to2dCSS()
                  ),
                this.storedData[i].x && (this.storedData[i].x._mdf || t)))
            ) {
              var n = this.storedData[i].expan;
              this.storedData[i].x.v < 0
                ? (this.storedData[i].lastOperator !== "erode" &&
                    ((this.storedData[i].lastOperator = "erode"),
                    this.storedData[i].elem.setAttribute(
                      "filter",
                      "url(" +
                        getLocationHref() +
                        "#" +
                        this.storedData[i].filterId +
                        ")"
                    )),
                  n.setAttribute("radius", -this.storedData[i].x.v))
                : (this.storedData[i].lastOperator !== "dilate" &&
                    ((this.storedData[i].lastOperator = "dilate"),
                    this.storedData[i].elem.setAttribute("filter", null)),
                  this.storedData[i].elem.setAttribute(
                    "stroke-width",
                    this.storedData[i].x.v * 2
                  ));
            }
        }),
        (MaskElement.prototype.getMaskelement = function () {
          return this.maskElement;
        }),
        (MaskElement.prototype.createLayerSolidPath = function () {
          var t = "M0,0 ";
          return (
            (t += " h" + this.globalData.compSize.w),
            (t += " v" + this.globalData.compSize.h),
            (t += " h-" + this.globalData.compSize.w),
            (t += " v-" + this.globalData.compSize.h + " "),
            t
          );
        }),
        (MaskElement.prototype.drawPath = function (t, e, i) {
          var r = " M" + e.v[0][0] + "," + e.v[0][1],
            n,
            a;
          for (a = e._length, n = 1; n < a; n += 1)
            r +=
              " C" +
              e.o[n - 1][0] +
              "," +
              e.o[n - 1][1] +
              " " +
              e.i[n][0] +
              "," +
              e.i[n][1] +
              " " +
              e.v[n][0] +
              "," +
              e.v[n][1];
          if (
            (e.c &&
              a > 1 &&
              (r +=
                " C" +
                e.o[n - 1][0] +
                "," +
                e.o[n - 1][1] +
                " " +
                e.i[0][0] +
                "," +
                e.i[0][1] +
                " " +
                e.v[0][0] +
                "," +
                e.v[0][1]),
            i.lastPath !== r)
          ) {
            var s = "";
            i.elem &&
              (e.c && (s = t.inv ? this.solidPath + r : r),
              i.elem.setAttribute("d", s)),
              (i.lastPath = r);
          }
        }),
        (MaskElement.prototype.destroy = function () {
          (this.element = null),
            (this.globalData = null),
            (this.maskElement = null),
            (this.data = null),
            (this.masksProperties = null);
        });
      var filtersFactory = (function () {
          var t = {};
          (t.createFilter = e), (t.createAlphaToLuminanceFilter = i);
          function e(r, n) {
            var a = createNS("filter");
            return (
              a.setAttribute("id", r),
              n !== !0 &&
                (a.setAttribute("filterUnits", "objectBoundingBox"),
                a.setAttribute("x", "0%"),
                a.setAttribute("y", "0%"),
                a.setAttribute("width", "100%"),
                a.setAttribute("height", "100%")),
              a
            );
          }
          function i() {
            var r = createNS("feColorMatrix");
            return (
              r.setAttribute("type", "matrix"),
              r.setAttribute("color-interpolation-filters", "sRGB"),
              r.setAttribute(
                "values",
                "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
              ),
              r
            );
          }
          return t;
        })(),
        featureSupport = (function () {
          var t = {
            maskType: !0,
            svgLumaHidden: !0,
            offscreenCanvas: typeof OffscreenCanvas < "u",
          };
          return (
            (/MSIE 10/i.test(navigator.userAgent) ||
              /MSIE 9/i.test(navigator.userAgent) ||
              /rv:11.0/i.test(navigator.userAgent) ||
              /Edge\/\d./i.test(navigator.userAgent)) &&
              (t.maskType = !1),
            /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1),
            t
          );
        })(),
        registeredEffects$1 = {},
        idPrefix = "filter_result_";
      function SVGEffects(t) {
        var e,
          i = "SourceGraphic",
          r = t.data.ef ? t.data.ef.length : 0,
          n = createElementID(),
          a = filtersFactory.createFilter(n, !0),
          s = 0;
        this.filters = [];
        var o;
        for (e = 0; e < r; e += 1) {
          o = null;
          var l = t.data.ef[e].ty;
          if (registeredEffects$1[l]) {
            var c = registeredEffects$1[l].effect;
            (o = new c(
              a,
              t.effectsManager.effectElements[e],
              t,
              idPrefix + s,
              i
            )),
              (i = idPrefix + s),
              registeredEffects$1[l].countsAsEffect && (s += 1);
          }
          o && this.filters.push(o);
        }
        s &&
          (t.globalData.defs.appendChild(a),
          t.layerElement.setAttribute(
            "filter",
            "url(" + getLocationHref() + "#" + n + ")"
          )),
          this.filters.length && t.addRenderableComponent(this);
      }
      (SVGEffects.prototype.renderFrame = function (t) {
        var e,
          i = this.filters.length;
        for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
      }),
        (SVGEffects.prototype.getEffects = function (t) {
          var e,
            i = this.filters.length,
            r = [];
          for (e = 0; e < i; e += 1)
            this.filters[e].type === t && r.push(this.filters[e]);
          return r;
        });
      function registerEffect$1(t, e, i) {
        registeredEffects$1[t] = { effect: e, countsAsEffect: i };
      }
      function SVGBaseElement() {}
      SVGBaseElement.prototype = {
        initRendererElement: function () {
          this.layerElement = createNS("g");
        },
        createContainerElements: function () {
          (this.matteElement = createNS("g")),
            (this.transformedElement = this.layerElement),
            (this.maskedElement = this.layerElement),
            (this._sizeChanged = !1);
          var e = null;
          if (this.data.td) {
            this.matteMasks = {};
            var i = createNS("g");
            i.setAttribute("id", this.layerId),
              i.appendChild(this.layerElement),
              (e = i),
              this.globalData.defs.appendChild(i);
          } else
            this.data.tt
              ? (this.matteElement.appendChild(this.layerElement),
                (e = this.matteElement),
                (this.baseElement = this.matteElement))
              : (this.baseElement = this.layerElement);
          if (
            (this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
            this.data.cl &&
              this.layerElement.setAttribute("class", this.data.cl),
            this.data.ty === 0 && !this.data.hd)
          ) {
            var r = createNS("clipPath"),
              n = createNS("path");
            n.setAttribute(
              "d",
              "M0,0 L" +
                this.data.w +
                ",0 L" +
                this.data.w +
                "," +
                this.data.h +
                " L0," +
                this.data.h +
                "z"
            );
            var a = createElementID();
            if (
              (r.setAttribute("id", a),
              r.appendChild(n),
              this.globalData.defs.appendChild(r),
              this.checkMasks())
            ) {
              var s = createNS("g");
              s.setAttribute(
                "clip-path",
                "url(" + getLocationHref() + "#" + a + ")"
              ),
                s.appendChild(this.layerElement),
                (this.transformedElement = s),
                e
                  ? e.appendChild(this.transformedElement)
                  : (this.baseElement = this.transformedElement);
            } else
              this.layerElement.setAttribute(
                "clip-path",
                "url(" + getLocationHref() + "#" + a + ")"
              );
          }
          this.data.bm !== 0 && this.setBlendMode();
        },
        renderElement: function () {
          this.finalTransform._localMatMdf &&
            this.transformedElement.setAttribute(
              "transform",
              this.finalTransform.localMat.to2dCSS()
            ),
            this.finalTransform._opMdf &&
              this.transformedElement.setAttribute(
                "opacity",
                this.finalTransform.localOpacity
              );
        },
        destroyBaseElement: function () {
          (this.layerElement = null),
            (this.matteElement = null),
            this.maskManager.destroy();
        },
        getBaseElement: function () {
          return this.data.hd ? null : this.baseElement;
        },
        createRenderableComponents: function () {
          (this.maskManager = new MaskElement(
            this.data,
            this,
            this.globalData
          )),
            (this.renderableEffectsManager = new SVGEffects(this)),
            this.searchEffectTransforms();
        },
        getMatte: function (e) {
          if (
            (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e])
          ) {
            var i = this.layerId + "_" + e,
              r,
              n,
              a,
              s;
            if (e === 1 || e === 3) {
              var o = createNS("mask");
              o.setAttribute("id", i),
                o.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"),
                (a = createNS("use")),
                a.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "href",
                  "#" + this.layerId
                ),
                o.appendChild(a),
                this.globalData.defs.appendChild(o),
                !featureSupport.maskType &&
                  e === 1 &&
                  (o.setAttribute("mask-type", "luminance"),
                  (r = createElementID()),
                  (n = filtersFactory.createFilter(r)),
                  this.globalData.defs.appendChild(n),
                  n.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                  (s = createNS("g")),
                  s.appendChild(a),
                  o.appendChild(s),
                  s.setAttribute(
                    "filter",
                    "url(" + getLocationHref() + "#" + r + ")"
                  ));
            } else if (e === 2) {
              var l = createNS("mask");
              l.setAttribute("id", i), l.setAttribute("mask-type", "alpha");
              var c = createNS("g");
              l.appendChild(c),
                (r = createElementID()),
                (n = filtersFactory.createFilter(r));
              var p = createNS("feComponentTransfer");
              p.setAttribute("in", "SourceGraphic"), n.appendChild(p);
              var _ = createNS("feFuncA");
              _.setAttribute("type", "table"),
                _.setAttribute("tableValues", "1.0 0.0"),
                p.appendChild(_),
                this.globalData.defs.appendChild(n);
              var h = createNS("rect");
              h.setAttribute("width", this.comp.data.w),
                h.setAttribute("height", this.comp.data.h),
                h.setAttribute("x", "0"),
                h.setAttribute("y", "0"),
                h.setAttribute("fill", "#ffffff"),
                h.setAttribute("opacity", "0"),
                c.setAttribute(
                  "filter",
                  "url(" + getLocationHref() + "#" + r + ")"
                ),
                c.appendChild(h),
                (a = createNS("use")),
                a.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "href",
                  "#" + this.layerId
                ),
                c.appendChild(a),
                featureSupport.maskType ||
                  (l.setAttribute("mask-type", "luminance"),
                  n.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                  (s = createNS("g")),
                  c.appendChild(h),
                  s.appendChild(this.layerElement),
                  c.appendChild(s)),
                this.globalData.defs.appendChild(l);
            }
            this.matteMasks[e] = i;
          }
          return this.matteMasks[e];
        },
        setMatte: function (e) {
          this.matteElement &&
            this.matteElement.setAttribute(
              "mask",
              "url(" + getLocationHref() + "#" + e + ")"
            );
        },
      };
      function HierarchyElement() {}
      HierarchyElement.prototype = {
        initHierarchy: function () {
          (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
        },
        setHierarchy: function (e) {
          this.hierarchy = e;
        },
        setAsParent: function () {
          this._isParent = !0;
        },
        checkParenting: function () {
          this.data.parent !== void 0 &&
            this.comp.buildElementParenting(this, this.data.parent, []);
        },
      };
      function RenderableDOMElement() {}
      (function () {
        var t = {
          initElement: function (i, r, n) {
            this.initFrame(),
              this.initBaseData(i, r, n),
              this.initTransform(i, r, n),
              this.initHierarchy(),
              this.initRenderable(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              this.createContent(),
              this.hide();
          },
          hide: function () {
            if (!this.hidden && (!this.isInRange || this.isTransparent)) {
              var i = this.baseElement || this.layerElement;
              (i.style.display = "none"), (this.hidden = !0);
            }
          },
          show: function () {
            if (this.isInRange && !this.isTransparent) {
              if (!this.data.hd) {
                var i = this.baseElement || this.layerElement;
                i.style.display = "block";
              }
              (this.hidden = !1), (this._isFirstFrame = !0);
            }
          },
          renderFrame: function () {
            this.data.hd ||
              this.hidden ||
              (this.renderTransform(),
              this.renderRenderable(),
              this.renderLocalTransform(),
              this.renderElement(),
              this.renderInnerContent(),
              this._isFirstFrame && (this._isFirstFrame = !1));
          },
          renderInnerContent: function () {},
          prepareFrame: function (i) {
            (this._mdf = !1),
              this.prepareRenderableFrame(i),
              this.prepareProperties(i, this.isInRange),
              this.checkTransparency();
          },
          destroy: function () {
            (this.innerElem = null), this.destroyBaseElement();
          },
        };
        extendPrototype(
          [RenderableElement, createProxyFunction(t)],
          RenderableDOMElement
        );
      })();
      function IImageElement(t, e, i) {
        (this.assetData = e.getAssetData(t.refId)),
          this.assetData &&
            this.assetData.sid &&
            (this.assetData = e.slotManager.getProp(this.assetData)),
          this.initElement(t, e, i),
          (this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h,
          });
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          SVGBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
        ],
        IImageElement
      ),
        (IImageElement.prototype.createContent = function () {
          var t = this.globalData.getAssetsPath(this.assetData);
          (this.innerElem = createNS("image")),
            this.innerElem.setAttribute("width", this.assetData.w + "px"),
            this.innerElem.setAttribute("height", this.assetData.h + "px"),
            this.innerElem.setAttribute(
              "preserveAspectRatio",
              this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio
            ),
            this.innerElem.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "href",
              t
            ),
            this.layerElement.appendChild(this.innerElem);
        }),
        (IImageElement.prototype.sourceRectAtTime = function () {
          return this.sourceRect;
        });
      function ProcessedElement(t, e) {
        (this.elem = t), (this.pos = e);
      }
      function IShapeElement() {}
      IShapeElement.prototype = {
        addShapeToModifiers: function (e) {
          var i,
            r = this.shapeModifiers.length;
          for (i = 0; i < r; i += 1) this.shapeModifiers[i].addShape(e);
        },
        isShapeInAnimatedModifiers: function (e) {
          for (var i = 0, r = this.shapeModifiers.length; i < r; )
            if (this.shapeModifiers[i].isAnimatedWithShape(e)) return !0;
          return !1;
        },
        renderModifiers: function () {
          if (this.shapeModifiers.length) {
            var e,
              i = this.shapes.length;
            for (e = 0; e < i; e += 1) this.shapes[e].sh.reset();
            i = this.shapeModifiers.length;
            var r;
            for (
              e = i - 1;
              e >= 0 &&
              ((r = this.shapeModifiers[e].processShapes(this._isFirstFrame)),
              !r);
              e -= 1
            );
          }
        },
        searchProcessedElement: function (e) {
          for (var i = this.processedElements, r = 0, n = i.length; r < n; ) {
            if (i[r].elem === e) return i[r].pos;
            r += 1;
          }
          return 0;
        },
        addProcessedElement: function (e, i) {
          for (var r = this.processedElements, n = r.length; n; )
            if (((n -= 1), r[n].elem === e)) {
              r[n].pos = i;
              return;
            }
          r.push(new ProcessedElement(e, i));
        },
        prepareFrame: function (e) {
          this.prepareRenderableFrame(e),
            this.prepareProperties(e, this.isInRange);
        },
      };
      var lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
        lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
      function SVGShapeData(t, e, i) {
        (this.caches = []),
          (this.styles = []),
          (this.transformers = t),
          (this.lStr = ""),
          (this.sh = i),
          (this.lvl = e),
          (this._isAnimated = !!i.k);
        for (var r = 0, n = t.length; r < n; ) {
          if (t[r].mProps.dynamicProperties.length) {
            this._isAnimated = !0;
            break;
          }
          r += 1;
        }
      }
      SVGShapeData.prototype.setAsAnimated = function () {
        this._isAnimated = !0;
      };
      function SVGStyleData(t, e) {
        (this.data = t),
          (this.type = t.ty),
          (this.d = ""),
          (this.lvl = e),
          (this._mdf = !1),
          (this.closed = t.hd === !0),
          (this.pElem = createNS("path")),
          (this.msElem = null);
      }
      SVGStyleData.prototype.reset = function () {
        (this.d = ""), (this._mdf = !1);
      };
      function DashProperty(t, e, i, r) {
        (this.elem = t),
          (this.frameId = -1),
          (this.dataProps = createSizedArray(e.length)),
          (this.renderer = i),
          (this.k = !1),
          (this.dashStr = ""),
          (this.dashArray = createTypedArray(
            "float32",
            e.length ? e.length - 1 : 0
          )),
          (this.dashoffset = createTypedArray("float32", 1)),
          this.initDynamicPropertyContainer(r);
        var n,
          a = e.length || 0,
          s;
        for (n = 0; n < a; n += 1)
          (s = PropertyFactory.getProp(t, e[n].v, 0, 0, this)),
            (this.k = s.k || this.k),
            (this.dataProps[n] = { n: e[n].n, p: s });
        this.k || this.getValue(!0), (this._isAnimated = this.k);
      }
      (DashProperty.prototype.getValue = function (t) {
        if (
          !(this.elem.globalData.frameId === this.frameId && !t) &&
          ((this.frameId = this.elem.globalData.frameId),
          this.iterateDynamicProperties(),
          (this._mdf = this._mdf || t),
          this._mdf)
        ) {
          var e = 0,
            i = this.dataProps.length;
          for (
            this.renderer === "svg" && (this.dashStr = ""), e = 0;
            e < i;
            e += 1
          )
            this.dataProps[e].n !== "o"
              ? this.renderer === "svg"
                ? (this.dashStr += " " + this.dataProps[e].p.v)
                : (this.dashArray[e] = this.dataProps[e].p.v)
              : (this.dashoffset[0] = this.dataProps[e].p.v);
        }
      }),
        extendPrototype([DynamicPropertyContainer], DashProperty);
      function SVGStrokeStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
          (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
          (this.d = new DashProperty(t, e.d || {}, "svg", this)),
          (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
          (this.style = i),
          (this._isAnimated = !!this._isAnimated);
      }
      extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
      function SVGFillStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
          (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
          (this.style = i);
      }
      extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
      function SVGNoStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.style = i);
      }
      extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
      function GradientProperty(t, e, i) {
        (this.data = e), (this.c = createTypedArray("uint8c", e.p * 4));
        var r = e.k.k[0].s
          ? e.k.k[0].s.length - e.p * 4
          : e.k.k.length - e.p * 4;
        (this.o = createTypedArray("float32", r)),
          (this._cmdf = !1),
          (this._omdf = !1),
          (this._collapsable = this.checkCollapsable()),
          (this._hasOpacity = r),
          this.initDynamicPropertyContainer(i),
          (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
          (this.k = this.prop.k),
          this.getValue(!0);
      }
      (GradientProperty.prototype.comparePoints = function (t, e) {
        for (var i = 0, r = this.o.length / 2, n; i < r; ) {
          if (((n = Math.abs(t[i * 4] - t[e * 4 + i * 2])), n > 0.01))
            return !1;
          i += 1;
        }
        return !0;
      }),
        (GradientProperty.prototype.checkCollapsable = function () {
          if (this.o.length / 2 !== this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e; ) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                return !1;
              t += 1;
            }
          else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0;
        }),
        (GradientProperty.prototype.getValue = function (t) {
          if (
            (this.prop.getValue(),
            (this._mdf = !1),
            (this._cmdf = !1),
            (this._omdf = !1),
            this.prop._mdf || t)
          ) {
            var e,
              i = this.data.p * 4,
              r,
              n;
            for (e = 0; e < i; e += 1)
              (r = e % 4 === 0 ? 100 : 255),
                (n = Math.round(this.prop.v[e] * r)),
                this.c[e] !== n && ((this.c[e] = n), (this._cmdf = !t));
            if (this.o.length)
              for (i = this.prop.v.length, e = this.data.p * 4; e < i; e += 1)
                (r = e % 2 === 0 ? 100 : 1),
                  (n =
                    e % 2 === 0
                      ? Math.round(this.prop.v[e] * 100)
                      : this.prop.v[e]),
                  this.o[e - this.data.p * 4] !== n &&
                    ((this.o[e - this.data.p * 4] = n), (this._omdf = !t));
            this._mdf = !t;
          }
        }),
        extendPrototype([DynamicPropertyContainer], GradientProperty);
      function SVGGradientFillStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          this.initGradientData(t, e, i);
      }
      (SVGGradientFillStyleData.prototype.initGradientData = function (
        t,
        e,
        i
      ) {
        (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
          (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
          (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
          (this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this)),
          (this.a = PropertyFactory.getProp(
            t,
            e.a || { k: 0 },
            0,
            degToRads,
            this
          )),
          (this.g = new GradientProperty(t, e.g, this)),
          (this.style = i),
          (this.stops = []),
          this.setGradientData(i.pElem, e),
          this.setGradientOpacity(e, i),
          (this._isAnimated = !!this._isAnimated);
      }),
        (SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
          var i = createElementID(),
            r = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
          r.setAttribute("id", i),
            r.setAttribute("spreadMethod", "pad"),
            r.setAttribute("gradientUnits", "userSpaceOnUse");
          var n = [],
            a,
            s,
            o;
          for (o = e.g.p * 4, s = 0; s < o; s += 4)
            (a = createNS("stop")), r.appendChild(a), n.push(a);
          t.setAttribute(
            e.ty === "gf" ? "fill" : "stroke",
            "url(" + getLocationHref() + "#" + i + ")"
          ),
            (this.gf = r),
            (this.cst = n);
        }),
        (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
          t,
          e
        ) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var i,
              r,
              n,
              a = createNS("mask"),
              s = createNS("path");
            a.appendChild(s);
            var o = createElementID(),
              l = createElementID();
            a.setAttribute("id", l);
            var c = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
            c.setAttribute("id", o),
              c.setAttribute("spreadMethod", "pad"),
              c.setAttribute("gradientUnits", "userSpaceOnUse"),
              (n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
            var p = this.stops;
            for (r = t.g.p * 4; r < n; r += 2)
              (i = createNS("stop")),
                i.setAttribute("stop-color", "rgb(255,255,255)"),
                c.appendChild(i),
                p.push(i);
            s.setAttribute(
              t.ty === "gf" ? "fill" : "stroke",
              "url(" + getLocationHref() + "#" + o + ")"
            ),
              t.ty === "gs" &&
                (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                t.lj === 1 && s.setAttribute("stroke-miterlimit", t.ml)),
              (this.of = c),
              (this.ms = a),
              (this.ost = p),
              (this.maskId = l),
              (e.msElem = s);
          }
        }),
        extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
      function SVGGradientStrokeStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
          (this.d = new DashProperty(t, e.d || {}, "svg", this)),
          this.initGradientData(t, e, i),
          (this._isAnimated = !!this._isAnimated);
      }
      extendPrototype(
        [SVGGradientFillStyleData, DynamicPropertyContainer],
        SVGGradientStrokeStyleData
      );
      function ShapeGroupData() {
        (this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
      }
      function SVGTransformData(t, e, i) {
        (this.transform = { mProps: t, op: e, container: i }),
          (this.elements = []),
          (this._isAnimated =
            this.transform.mProps.dynamicProperties.length ||
            this.transform.op.effectsSequence.length);
      }
      var buildShapeString = function (e, i, r, n) {
          if (i === 0) return "";
          var a = e.o,
            s = e.i,
            o = e.v,
            l,
            c = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
          for (l = 1; l < i; l += 1)
            c +=
              " C" +
              n.applyToPointStringified(a[l - 1][0], a[l - 1][1]) +
              " " +
              n.applyToPointStringified(s[l][0], s[l][1]) +
              " " +
              n.applyToPointStringified(o[l][0], o[l][1]);
          return (
            r &&
              i &&
              ((c +=
                " C" +
                n.applyToPointStringified(a[l - 1][0], a[l - 1][1]) +
                " " +
                n.applyToPointStringified(s[0][0], s[0][1]) +
                " " +
                n.applyToPointStringified(o[0][0], o[0][1])),
              (c += "z")),
            c
          );
        },
        SVGElementsRenderer = (function () {
          var t = new Matrix(),
            e = new Matrix(),
            i = { createRenderFunction: r };
          function r(_) {
            switch (_.ty) {
              case "fl":
                return o;
              case "gf":
                return c;
              case "gs":
                return l;
              case "st":
                return p;
              case "sh":
              case "el":
              case "rc":
              case "sr":
                return s;
              case "tr":
                return n;
              case "no":
                return a;
              default:
                return null;
            }
          }
          function n(_, h, b) {
            (b || h.transform.op._mdf) &&
              h.transform.container.setAttribute("opacity", h.transform.op.v),
              (b || h.transform.mProps._mdf) &&
                h.transform.container.setAttribute(
                  "transform",
                  h.transform.mProps.v.to2dCSS()
                );
          }
          function a() {}
          function s(_, h, b) {
            var v,
              f,
              E,
              d,
              u,
              m,
              y = h.styles.length,
              C = h.lvl,
              P,
              T,
              M,
              I;
            for (m = 0; m < y; m += 1) {
              if (((d = h.sh._mdf || b), h.styles[m].lvl < C)) {
                for (
                  T = e.reset(),
                    M = C - h.styles[m].lvl,
                    I = h.transformers.length - 1;
                  !d && M > 0;

                )
                  (d = h.transformers[I].mProps._mdf || d), (M -= 1), (I -= 1);
                if (d)
                  for (
                    M = C - h.styles[m].lvl, I = h.transformers.length - 1;
                    M > 0;

                  )
                    T.multiply(h.transformers[I].mProps.v), (M -= 1), (I -= 1);
              } else T = t;
              if (((P = h.sh.paths), (f = P._length), d)) {
                for (E = "", v = 0; v < f; v += 1)
                  (u = P.shapes[v]),
                    u &&
                      u._length &&
                      (E += buildShapeString(u, u._length, u.c, T));
                h.caches[m] = E;
              } else E = h.caches[m];
              (h.styles[m].d += _.hd === !0 ? "" : E),
                (h.styles[m]._mdf = d || h.styles[m]._mdf);
            }
          }
          function o(_, h, b) {
            var v = h.style;
            (h.c._mdf || b) &&
              v.pElem.setAttribute(
                "fill",
                "rgb(" +
                  bmFloor(h.c.v[0]) +
                  "," +
                  bmFloor(h.c.v[1]) +
                  "," +
                  bmFloor(h.c.v[2]) +
                  ")"
              ),
              (h.o._mdf || b) && v.pElem.setAttribute("fill-opacity", h.o.v);
          }
          function l(_, h, b) {
            c(_, h, b), p(_, h, b);
          }
          function c(_, h, b) {
            var v = h.gf,
              f = h.g._hasOpacity,
              E = h.s.v,
              d = h.e.v;
            if (h.o._mdf || b) {
              var u = _.ty === "gf" ? "fill-opacity" : "stroke-opacity";
              h.style.pElem.setAttribute(u, h.o.v);
            }
            if (h.s._mdf || b) {
              var m = _.t === 1 ? "x1" : "cx",
                y = m === "x1" ? "y1" : "cy";
              v.setAttribute(m, E[0]),
                v.setAttribute(y, E[1]),
                f &&
                  !h.g._collapsable &&
                  (h.of.setAttribute(m, E[0]), h.of.setAttribute(y, E[1]));
            }
            var C, P, T, M;
            if (h.g._cmdf || b) {
              C = h.cst;
              var I = h.g.c;
              for (T = C.length, P = 0; P < T; P += 1)
                (M = C[P]),
                  M.setAttribute("offset", I[P * 4] + "%"),
                  M.setAttribute(
                    "stop-color",
                    "rgb(" +
                      I[P * 4 + 1] +
                      "," +
                      I[P * 4 + 2] +
                      "," +
                      I[P * 4 + 3] +
                      ")"
                  );
            }
            if (f && (h.g._omdf || b)) {
              var z = h.g.o;
              for (
                h.g._collapsable ? (C = h.cst) : (C = h.ost),
                  T = C.length,
                  P = 0;
                P < T;
                P += 1
              )
                (M = C[P]),
                  h.g._collapsable || M.setAttribute("offset", z[P * 2] + "%"),
                  M.setAttribute("stop-opacity", z[P * 2 + 1]);
            }
            if (_.t === 1)
              (h.e._mdf || b) &&
                (v.setAttribute("x2", d[0]),
                v.setAttribute("y2", d[1]),
                f &&
                  !h.g._collapsable &&
                  (h.of.setAttribute("x2", d[0]),
                  h.of.setAttribute("y2", d[1])));
            else {
              var O;
              if (
                ((h.s._mdf || h.e._mdf || b) &&
                  ((O = Math.sqrt(
                    Math.pow(E[0] - d[0], 2) + Math.pow(E[1] - d[1], 2)
                  )),
                  v.setAttribute("r", O),
                  f && !h.g._collapsable && h.of.setAttribute("r", O)),
                h.e._mdf || h.h._mdf || h.a._mdf || b)
              ) {
                O ||
                  (O = Math.sqrt(
                    Math.pow(E[0] - d[0], 2) + Math.pow(E[1] - d[1], 2)
                  ));
                var D = Math.atan2(d[1] - E[1], d[0] - E[0]),
                  j = h.h.v;
                j >= 1 ? (j = 0.99) : j <= -1 && (j = -0.99);
                var H = O * j,
                  R = Math.cos(D + h.a.v) * H + E[0],
                  x = Math.sin(D + h.a.v) * H + E[1];
                v.setAttribute("fx", R),
                  v.setAttribute("fy", x),
                  f &&
                    !h.g._collapsable &&
                    (h.of.setAttribute("fx", R), h.of.setAttribute("fy", x));
              }
            }
          }
          function p(_, h, b) {
            var v = h.style,
              f = h.d;
            f &&
              (f._mdf || b) &&
              f.dashStr &&
              (v.pElem.setAttribute("stroke-dasharray", f.dashStr),
              v.pElem.setAttribute("stroke-dashoffset", f.dashoffset[0])),
              h.c &&
                (h.c._mdf || b) &&
                v.pElem.setAttribute(
                  "stroke",
                  "rgb(" +
                    bmFloor(h.c.v[0]) +
                    "," +
                    bmFloor(h.c.v[1]) +
                    "," +
                    bmFloor(h.c.v[2]) +
                    ")"
                ),
              (h.o._mdf || b) && v.pElem.setAttribute("stroke-opacity", h.o.v),
              (h.w._mdf || b) &&
                (v.pElem.setAttribute("stroke-width", h.w.v),
                v.msElem && v.msElem.setAttribute("stroke-width", h.w.v));
          }
          return i;
        })();
      function SVGShapeElement(t, e, i) {
        (this.shapes = []),
          (this.shapesData = t.shapes),
          (this.stylesList = []),
          (this.shapeModifiers = []),
          (this.itemsData = []),
          (this.processedElements = []),
          (this.animatedContents = []),
          this.initElement(t, e, i),
          (this.prevViewData = []);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          SVGBaseElement,
          IShapeElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
        ],
        SVGShapeElement
      ),
        (SVGShapeElement.prototype.initSecondaryElement = function () {}),
        (SVGShapeElement.prototype.identityMatrix = new Matrix()),
        (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
        (SVGShapeElement.prototype.createContent = function () {
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            this.layerElement,
            0,
            [],
            !0
          ),
            this.filterUniqueShapes();
        }),
        (SVGShapeElement.prototype.filterUniqueShapes = function () {
          var t,
            e = this.shapes.length,
            i,
            r,
            n = this.stylesList.length,
            a,
            s = [],
            o = !1;
          for (r = 0; r < n; r += 1) {
            for (
              a = this.stylesList[r], o = !1, s.length = 0, t = 0;
              t < e;
              t += 1
            )
              (i = this.shapes[t]),
                i.styles.indexOf(a) !== -1 &&
                  (s.push(i), (o = i._isAnimated || o));
            s.length > 1 && o && this.setShapesAsAnimated(s);
          }
        }),
        (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
          var e,
            i = t.length;
          for (e = 0; e < i; e += 1) t[e].setAsAnimated();
        }),
        (SVGShapeElement.prototype.createStyleElement = function (t, e) {
          var i,
            r = new SVGStyleData(t, e),
            n = r.pElem;
          if (t.ty === "st") i = new SVGStrokeStyleData(this, t, r);
          else if (t.ty === "fl") i = new SVGFillStyleData(this, t, r);
          else if (t.ty === "gf" || t.ty === "gs") {
            var a =
              t.ty === "gf"
                ? SVGGradientFillStyleData
                : SVGGradientStrokeStyleData;
            (i = new a(this, t, r)),
              this.globalData.defs.appendChild(i.gf),
              i.maskId &&
                (this.globalData.defs.appendChild(i.ms),
                this.globalData.defs.appendChild(i.of),
                n.setAttribute(
                  "mask",
                  "url(" + getLocationHref() + "#" + i.maskId + ")"
                ));
          } else t.ty === "no" && (i = new SVGNoStyleData(this, t, r));
          return (
            (t.ty === "st" || t.ty === "gs") &&
              (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
              n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
              n.setAttribute("fill-opacity", "0"),
              t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)),
            t.r === 2 && n.setAttribute("fill-rule", "evenodd"),
            t.ln && n.setAttribute("id", t.ln),
            t.cl && n.setAttribute("class", t.cl),
            t.bm && (n.style["mix-blend-mode"] = getBlendMode(t.bm)),
            this.stylesList.push(r),
            this.addToAnimatedContents(t, i),
            i
          );
        }),
        (SVGShapeElement.prototype.createGroupElement = function (t) {
          var e = new ShapeGroupData();
          return (
            t.ln && e.gr.setAttribute("id", t.ln),
            t.cl && e.gr.setAttribute("class", t.cl),
            t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
            e
          );
        }),
        (SVGShapeElement.prototype.createTransformElement = function (t, e) {
          var i = TransformPropertyFactory.getTransformProperty(this, t, this),
            r = new SVGTransformData(i, i.o, e);
          return this.addToAnimatedContents(t, r), r;
        }),
        (SVGShapeElement.prototype.createShapeElement = function (t, e, i) {
          var r = 4;
          t.ty === "rc"
            ? (r = 5)
            : t.ty === "el"
            ? (r = 6)
            : t.ty === "sr" && (r = 7);
          var n = ShapePropertyFactory.getShapeProp(this, t, r, this),
            a = new SVGShapeData(e, i, n);
          return (
            this.shapes.push(a),
            this.addShapeToModifiers(a),
            this.addToAnimatedContents(t, a),
            a
          );
        }),
        (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
          for (var i = 0, r = this.animatedContents.length; i < r; ) {
            if (this.animatedContents[i].element === e) return;
            i += 1;
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t,
          });
        }),
        (SVGShapeElement.prototype.setElementStyles = function (t) {
          var e = t.styles,
            i,
            r = this.stylesList.length;
          for (i = 0; i < r; i += 1)
            this.stylesList[i].closed || e.push(this.stylesList[i]);
        }),
        (SVGShapeElement.prototype.reloadShapes = function () {
          this._isFirstFrame = !0;
          var t,
            e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0
            ),
              this.filterUniqueShapes(),
              e = this.dynamicProperties.length,
              t = 0;
            t < e;
            t += 1
          )
            this.dynamicProperties[t].getValue();
          this.renderModifiers();
        }),
        (SVGShapeElement.prototype.searchShapes = function (
          t,
          e,
          i,
          r,
          n,
          a,
          s
        ) {
          var o = [].concat(a),
            l,
            c = t.length - 1,
            p,
            _,
            h = [],
            b = [],
            v,
            f,
            E;
          for (l = c; l >= 0; l -= 1) {
            if (
              ((E = this.searchProcessedElement(t[l])),
              E ? (e[l] = i[E - 1]) : (t[l]._render = s),
              t[l].ty === "fl" ||
                t[l].ty === "st" ||
                t[l].ty === "gf" ||
                t[l].ty === "gs" ||
                t[l].ty === "no")
            )
              E
                ? (e[l].style.closed = !1)
                : (e[l] = this.createStyleElement(t[l], n)),
                t[l]._render &&
                  e[l].style.pElem.parentNode !== r &&
                  r.appendChild(e[l].style.pElem),
                h.push(e[l].style);
            else if (t[l].ty === "gr") {
              if (!E) e[l] = this.createGroupElement(t[l]);
              else
                for (_ = e[l].it.length, p = 0; p < _; p += 1)
                  e[l].prevViewData[p] = e[l].it[p];
              this.searchShapes(
                t[l].it,
                e[l].it,
                e[l].prevViewData,
                e[l].gr,
                n + 1,
                o,
                s
              ),
                t[l]._render &&
                  e[l].gr.parentNode !== r &&
                  r.appendChild(e[l].gr);
            } else
              t[l].ty === "tr"
                ? (E || (e[l] = this.createTransformElement(t[l], r)),
                  (v = e[l].transform),
                  o.push(v))
                : t[l].ty === "sh" ||
                  t[l].ty === "rc" ||
                  t[l].ty === "el" ||
                  t[l].ty === "sr"
                ? (E || (e[l] = this.createShapeElement(t[l], o, n)),
                  this.setElementStyles(e[l]))
                : t[l].ty === "tm" ||
                  t[l].ty === "rd" ||
                  t[l].ty === "ms" ||
                  t[l].ty === "pb" ||
                  t[l].ty === "zz" ||
                  t[l].ty === "op"
                ? (E
                    ? ((f = e[l]), (f.closed = !1))
                    : ((f = ShapeModifiers.getModifier(t[l].ty)),
                      f.init(this, t[l]),
                      (e[l] = f),
                      this.shapeModifiers.push(f)),
                  b.push(f))
                : t[l].ty === "rp" &&
                  (E
                    ? ((f = e[l]), (f.closed = !0))
                    : ((f = ShapeModifiers.getModifier(t[l].ty)),
                      (e[l] = f),
                      f.init(this, t, l, e),
                      this.shapeModifiers.push(f),
                      (s = !1)),
                  b.push(f));
            this.addProcessedElement(t[l], l + 1);
          }
          for (c = h.length, l = 0; l < c; l += 1) h[l].closed = !0;
          for (c = b.length, l = 0; l < c; l += 1) b[l].closed = !0;
        }),
        (SVGShapeElement.prototype.renderInnerContent = function () {
          this.renderModifiers();
          var t,
            e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].reset();
          for (this.renderShape(), t = 0; t < e; t += 1)
            (this.stylesList[t]._mdf || this._isFirstFrame) &&
              (this.stylesList[t].msElem &&
                (this.stylesList[t].msElem.setAttribute(
                  "d",
                  this.stylesList[t].d
                ),
                (this.stylesList[t].d = "M0 0" + this.stylesList[t].d)),
              this.stylesList[t].pElem.setAttribute(
                "d",
                this.stylesList[t].d || "M0 0"
              ));
        }),
        (SVGShapeElement.prototype.renderShape = function () {
          var t,
            e = this.animatedContents.length,
            i;
          for (t = 0; t < e; t += 1)
            (i = this.animatedContents[t]),
              (this._isFirstFrame || i.element._isAnimated) &&
                i.data !== !0 &&
                i.fn(i.data, i.element, this._isFirstFrame);
        }),
        (SVGShapeElement.prototype.destroy = function () {
          this.destroyBaseElement(),
            (this.shapesData = null),
            (this.itemsData = null);
        });
      function LetterProps(t, e, i, r, n, a) {
        (this.o = t),
          (this.sw = e),
          (this.sc = i),
          (this.fc = r),
          (this.m = n),
          (this.p = a),
          (this._mdf = { o: !0, sw: !!e, sc: !!i, fc: !!r, m: !0, p: !0 });
      }
      LetterProps.prototype.update = function (t, e, i, r, n, a) {
        (this._mdf.o = !1),
          (this._mdf.sw = !1),
          (this._mdf.sc = !1),
          (this._mdf.fc = !1),
          (this._mdf.m = !1),
          (this._mdf.p = !1);
        var s = !1;
        return (
          this.o !== t && ((this.o = t), (this._mdf.o = !0), (s = !0)),
          this.sw !== e && ((this.sw = e), (this._mdf.sw = !0), (s = !0)),
          this.sc !== i && ((this.sc = i), (this._mdf.sc = !0), (s = !0)),
          this.fc !== r && ((this.fc = r), (this._mdf.fc = !0), (s = !0)),
          this.m !== n && ((this.m = n), (this._mdf.m = !0), (s = !0)),
          a.length &&
            (this.p[0] !== a[0] ||
              this.p[1] !== a[1] ||
              this.p[4] !== a[4] ||
              this.p[5] !== a[5] ||
              this.p[12] !== a[12] ||
              this.p[13] !== a[13]) &&
            ((this.p = a), (this._mdf.p = !0), (s = !0)),
          s
        );
      };
      function TextProperty(t, e) {
        (this._frameId = initialDefaultFrame),
          (this.pv = ""),
          (this.v = ""),
          (this.kf = !1),
          (this._isFirstFrame = !0),
          (this._mdf = !1),
          e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)),
          (this.data = e),
          (this.elem = t),
          (this.comp = this.elem.comp),
          (this.keysIndex = 0),
          (this.canResize = !1),
          (this.minimumFontSize = 1),
          (this.effectsSequence = []),
          (this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1,
          }),
          this.copyData(this.currentData, this.data.d.k[0].s),
          this.searchProperty() || this.completeTextData(this.currentData);
      }
      (TextProperty.prototype.defaultBoxWidth = [0, 0]),
        (TextProperty.prototype.copyData = function (t, e) {
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }),
        (TextProperty.prototype.setCurrentData = function (t) {
          t.__complete || this.completeTextData(t),
            (this.currentData = t),
            (this.currentData.boxWidth =
              this.currentData.boxWidth || this.defaultBoxWidth),
            (this._mdf = !0);
        }),
        (TextProperty.prototype.searchProperty = function () {
          return this.searchKeyframes();
        }),
        (TextProperty.prototype.searchKeyframes = function () {
          return (
            (this.kf = this.data.d.k.length > 1),
            this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
            this.kf
          );
        }),
        (TextProperty.prototype.addEffect = function (t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.getValue = function (t) {
          if (
            !(
              (this.elem.globalData.frameId === this.frameId ||
                !this.effectsSequence.length) &&
              !t
            )
          ) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData,
              i = this.keysIndex;
            if (this.lock) {
              this.setCurrentData(this.currentData);
              return;
            }
            (this.lock = !0), (this._mdf = !1);
            var r,
              n = this.effectsSequence.length,
              a = t || this.data.d.k[this.keysIndex].s;
            for (r = 0; r < n; r += 1)
              i !== this.keysIndex
                ? (a = this.effectsSequence[r](a, a.t))
                : (a = this.effectsSequence[r](this.currentData, a.t));
            e !== a && this.setCurrentData(a),
              (this.v = this.currentData),
              (this.pv = this.v),
              (this.lock = !1),
              (this.frameId = this.elem.globalData.frameId);
          }
        }),
        (TextProperty.prototype.getKeyframeValue = function () {
          for (
            var t = this.data.d.k,
              e = this.elem.comp.renderedFrame,
              i = 0,
              r = t.length;
            i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);

          )
            i += 1;
          return (
            this.keysIndex !== i && (this.keysIndex = i),
            this.data.d.k[this.keysIndex].s
          );
        }),
        (TextProperty.prototype.buildFinalText = function (t) {
          for (
            var e = [], i = 0, r = t.length, n, a, s = !1, o = !1, l = "";
            i < r;

          )
            (s = o),
              (o = !1),
              (n = t.charCodeAt(i)),
              (l = t.charAt(i)),
              FontManager.isCombinedCharacter(n)
                ? (s = !0)
                : n >= 55296 && n <= 56319
                ? FontManager.isRegionalFlag(t, i)
                  ? (l = t.substr(i, 14))
                  : ((a = t.charCodeAt(i + 1)),
                    a >= 56320 &&
                      a <= 57343 &&
                      (FontManager.isModifier(n, a)
                        ? ((l = t.substr(i, 2)), (s = !0))
                        : FontManager.isFlagEmoji(t.substr(i, 4))
                        ? (l = t.substr(i, 4))
                        : (l = t.substr(i, 2))))
                : n > 56319
                ? ((a = t.charCodeAt(i + 1)),
                  FontManager.isVariationSelector(n) && (s = !0))
                : FontManager.isZeroWidthJoiner(n) && ((s = !0), (o = !0)),
              s ? ((e[e.length - 1] += l), (s = !1)) : e.push(l),
              (i += l.length);
          return e;
        }),
        (TextProperty.prototype.completeTextData = function (t) {
          t.__complete = !0;
          var e = this.elem.globalData.fontManager,
            i = this.data,
            r = [],
            n,
            a,
            s,
            o = 0,
            l,
            c = i.m.g,
            p = 0,
            _ = 0,
            h = 0,
            b = [],
            v = 0,
            f = 0,
            E,
            d,
            u = e.getFontByName(t.f),
            m,
            y = 0,
            C = getFontProperties(u);
          (t.fWeight = C.weight),
            (t.fStyle = C.style),
            (t.finalSize = t.s),
            (t.finalText = this.buildFinalText(t.t)),
            (a = t.finalText.length),
            (t.finalLineHeight = t.lh);
          var P = (t.tr / 1e3) * t.finalSize,
            T;
          if (t.sz)
            for (var M = !0, I = t.sz[0], z = t.sz[1], O, D; M; ) {
              (D = this.buildFinalText(t.t)),
                (O = 0),
                (v = 0),
                (a = D.length),
                (P = (t.tr / 1e3) * t.finalSize);
              var j = -1;
              for (n = 0; n < a; n += 1)
                (T = D[n].charCodeAt(0)),
                  (s = !1),
                  D[n] === " "
                    ? (j = n)
                    : (T === 13 || T === 3) &&
                      ((v = 0),
                      (s = !0),
                      (O += t.finalLineHeight || t.finalSize * 1.2)),
                  e.chars
                    ? ((m = e.getCharData(D[n], u.fStyle, u.fFamily)),
                      (y = s ? 0 : (m.w * t.finalSize) / 100))
                    : (y = e.measureText(D[n], t.f, t.finalSize)),
                  v + y > I && D[n] !== " "
                    ? (j === -1 ? (a += 1) : (n = j),
                      (O += t.finalLineHeight || t.finalSize * 1.2),
                      D.splice(n, j === n ? 1 : 0, "\r"),
                      (j = -1),
                      (v = 0))
                    : ((v += y), (v += P));
              (O += (u.ascent * t.finalSize) / 100),
                this.canResize && t.finalSize > this.minimumFontSize && z < O
                  ? ((t.finalSize -= 1),
                    (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                  : ((t.finalText = D), (a = t.finalText.length), (M = !1));
            }
          (v = -P), (y = 0);
          var H = 0,
            R;
          for (n = 0; n < a; n += 1)
            if (
              ((s = !1),
              (R = t.finalText[n]),
              (T = R.charCodeAt(0)),
              T === 13 || T === 3
                ? ((H = 0),
                  b.push(v),
                  (f = v > f ? v : f),
                  (v = -2 * P),
                  (l = ""),
                  (s = !0),
                  (h += 1))
                : (l = R),
              e.chars
                ? ((m = e.getCharData(
                    R,
                    u.fStyle,
                    e.getFontByName(t.f).fFamily
                  )),
                  (y = s ? 0 : (m.w * t.finalSize) / 100))
                : (y = e.measureText(l, t.f, t.finalSize)),
              R === " " ? (H += y + P) : ((v += y + P + H), (H = 0)),
              r.push({
                l: y,
                an: y,
                add: p,
                n: s,
                anIndexes: [],
                val: l,
                line: h,
                animatorJustifyOffset: 0,
              }),
              c == 2)
            ) {
              if (((p += y), l === "" || l === " " || n === a - 1)) {
                for ((l === "" || l === " ") && (p -= y); _ <= n; )
                  (r[_].an = p), (r[_].ind = o), (r[_].extra = y), (_ += 1);
                (o += 1), (p = 0);
              }
            } else if (c == 3) {
              if (((p += y), l === "" || n === a - 1)) {
                for (l === "" && (p -= y); _ <= n; )
                  (r[_].an = p), (r[_].ind = o), (r[_].extra = y), (_ += 1);
                (p = 0), (o += 1);
              }
            } else (r[o].ind = o), (r[o].extra = 0), (o += 1);
          if (((t.l = r), (f = v > f ? v : f), b.push(v), t.sz))
            (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
          else
            switch (((t.boxWidth = f), t.j)) {
              case 1:
                t.justifyOffset = -t.boxWidth;
                break;
              case 2:
                t.justifyOffset = -t.boxWidth / 2;
                break;
              default:
                t.justifyOffset = 0;
            }
          t.lineWidths = b;
          var x = i.a,
            w,
            g;
          d = x.length;
          var S,
            k,
            A = [];
          for (E = 0; E < d; E += 1) {
            for (
              w = x[E],
                w.a.sc && (t.strokeColorAnim = !0),
                w.a.sw && (t.strokeWidthAnim = !0),
                (w.a.fc || w.a.fh || w.a.fs || w.a.fb) &&
                  (t.fillColorAnim = !0),
                k = 0,
                S = w.s.b,
                n = 0;
              n < a;
              n += 1
            )
              (g = r[n]),
                (g.anIndexes[E] = k),
                ((S == 1 && g.val !== "") ||
                  (S == 2 && g.val !== "" && g.val !== " ") ||
                  (S == 3 && (g.n || g.val == " " || n == a - 1)) ||
                  (S == 4 && (g.n || n == a - 1))) &&
                  (w.s.rn === 1 && A.push(k), (k += 1));
            i.a[E].s.totalChars = k;
            var V = -1,
              q;
            if (w.s.rn === 1)
              for (n = 0; n < a; n += 1)
                (g = r[n]),
                  V != g.anIndexes[E] &&
                    ((V = g.anIndexes[E]),
                    (q = A.splice(Math.floor(Math.random() * A.length), 1)[0])),
                  (g.anIndexes[E] = q);
          }
          (t.yOffset = t.finalLineHeight || t.finalSize * 1.2),
            (t.ls = t.ls || 0),
            (t.ascent = (u.ascent * t.finalSize) / 100);
        }),
        (TextProperty.prototype.updateDocumentData = function (t, e) {
          e = e === void 0 ? this.keysIndex : e;
          var i = this.copyData({}, this.data.d.k[e].s);
          (i = this.copyData(i, t)),
            (this.data.d.k[e].s = i),
            this.recalculate(e),
            this.setCurrentData(i),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.recalculate = function (t) {
          var e = this.data.d.k[t].s;
          (e.__complete = !1),
            (this.keysIndex = 0),
            (this._isFirstFrame = !0),
            this.getValue(e);
        }),
        (TextProperty.prototype.canResizeFont = function (t) {
          (this.canResize = t),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.setMinimumFontSize = function (t) {
          (this.minimumFontSize = Math.floor(t) || 1),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        });
      var TextSelectorProp = (function () {
        var t = Math.max,
          e = Math.min,
          i = Math.floor;
        function r(a, s) {
          (this._currentTextLength = -1),
            (this.k = !1),
            (this.data = s),
            (this.elem = a),
            (this.comp = a.comp),
            (this.finalS = 0),
            (this.finalE = 0),
            this.initDynamicPropertyContainer(a),
            (this.s = PropertyFactory.getProp(a, s.s || { k: 0 }, 0, 0, this)),
            "e" in s
              ? (this.e = PropertyFactory.getProp(a, s.e, 0, 0, this))
              : (this.e = { v: 100 }),
            (this.o = PropertyFactory.getProp(a, s.o || { k: 0 }, 0, 0, this)),
            (this.xe = PropertyFactory.getProp(
              a,
              s.xe || { k: 0 },
              0,
              0,
              this
            )),
            (this.ne = PropertyFactory.getProp(
              a,
              s.ne || { k: 0 },
              0,
              0,
              this
            )),
            (this.sm = PropertyFactory.getProp(
              a,
              s.sm || { k: 100 },
              0,
              0,
              this
            )),
            (this.a = PropertyFactory.getProp(a, s.a, 0, 0.01, this)),
            this.dynamicProperties.length || this.getValue();
        }
        (r.prototype = {
          getMult: function (s) {
            this._currentTextLength !==
              this.elem.textProperty.currentData.l.length && this.getValue();
            var o = 0,
              l = 0,
              c = 1,
              p = 1;
            this.ne.v > 0 ? (o = this.ne.v / 100) : (l = -this.ne.v / 100),
              this.xe.v > 0
                ? (c = 1 - this.xe.v / 100)
                : (p = 1 + this.xe.v / 100);
            var _ = BezierFactory.getBezierEasing(o, l, c, p).get,
              h = 0,
              b = this.finalS,
              v = this.finalE,
              f = this.data.sh;
            if (f === 2)
              v === b
                ? (h = s >= v ? 1 : 0)
                : (h = t(0, e(0.5 / (v - b) + (s - b) / (v - b), 1))),
                (h = _(h));
            else if (f === 3)
              v === b
                ? (h = s >= v ? 0 : 1)
                : (h = 1 - t(0, e(0.5 / (v - b) + (s - b) / (v - b), 1))),
                (h = _(h));
            else if (f === 4)
              v === b
                ? (h = 0)
                : ((h = t(0, e(0.5 / (v - b) + (s - b) / (v - b), 1))),
                  h < 0.5 ? (h *= 2) : (h = 1 - 2 * (h - 0.5))),
                (h = _(h));
            else if (f === 5) {
              if (v === b) h = 0;
              else {
                var E = v - b;
                s = e(t(0, s + 0.5 - b), v - b);
                var d = -E / 2 + s,
                  u = E / 2;
                h = Math.sqrt(1 - (d * d) / (u * u));
              }
              h = _(h);
            } else
              f === 6
                ? (v === b
                    ? (h = 0)
                    : ((s = e(t(0, s + 0.5 - b), v - b)),
                      (h =
                        (1 + Math.cos(Math.PI + (Math.PI * 2 * s) / (v - b))) /
                        2)),
                  (h = _(h)))
                : (s >= i(b) &&
                    (s - b < 0
                      ? (h = t(0, e(e(v, 1) - (b - s), 1)))
                      : (h = t(0, e(v - s, 1)))),
                  (h = _(h)));
            if (this.sm.v !== 100) {
              var m = this.sm.v * 0.01;
              m === 0 && (m = 1e-8);
              var y = 0.5 - m * 0.5;
              h < y ? (h = 0) : ((h = (h - y) / m), h > 1 && (h = 1));
            }
            return h * this.a.v;
          },
          getValue: function (s) {
            this.iterateDynamicProperties(),
              (this._mdf = s || this._mdf),
              (this._currentTextLength =
                this.elem.textProperty.currentData.l.length || 0),
              s && this.data.r === 2 && (this.e.v = this._currentTextLength);
            var o = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
              l = this.o.v / o,
              c = this.s.v / o + l,
              p = this.e.v / o + l;
            if (c > p) {
              var _ = c;
              (c = p), (p = _);
            }
            (this.finalS = c), (this.finalE = p);
          },
        }),
          extendPrototype([DynamicPropertyContainer], r);
        function n(a, s, o) {
          return new r(a, s, o);
        }
        return { getTextSelectorProp: n };
      })();
      function TextAnimatorDataProperty(t, e, i) {
        var r = { propType: !1 },
          n = PropertyFactory.getProp,
          a = e.a;
        (this.a = {
          r: a.r ? n(t, a.r, 0, degToRads, i) : r,
          rx: a.rx ? n(t, a.rx, 0, degToRads, i) : r,
          ry: a.ry ? n(t, a.ry, 0, degToRads, i) : r,
          sk: a.sk ? n(t, a.sk, 0, degToRads, i) : r,
          sa: a.sa ? n(t, a.sa, 0, degToRads, i) : r,
          s: a.s ? n(t, a.s, 1, 0.01, i) : r,
          a: a.a ? n(t, a.a, 1, 0, i) : r,
          o: a.o ? n(t, a.o, 0, 0.01, i) : r,
          p: a.p ? n(t, a.p, 1, 0, i) : r,
          sw: a.sw ? n(t, a.sw, 0, 0, i) : r,
          sc: a.sc ? n(t, a.sc, 1, 0, i) : r,
          fc: a.fc ? n(t, a.fc, 1, 0, i) : r,
          fh: a.fh ? n(t, a.fh, 0, 0, i) : r,
          fs: a.fs ? n(t, a.fs, 0, 0.01, i) : r,
          fb: a.fb ? n(t, a.fb, 0, 0.01, i) : r,
          t: a.t ? n(t, a.t, 0, 0, i) : r,
        }),
          (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i)),
          (this.s.t = e.s.t);
      }
      function TextAnimatorProperty(t, e, i) {
        (this._isFirstFrame = !0),
          (this._hasMaskedPath = !1),
          (this._frameId = -1),
          (this._textData = t),
          (this._renderType = e),
          (this._elem = i),
          (this._animatorsData = createSizedArray(this._textData.a.length)),
          (this._pathData = {}),
          (this._moreOptions = { alignment: {} }),
          (this.renderedLetters = []),
          (this.lettersChangedFlag = !1),
          this.initDynamicPropertyContainer(i);
      }
      (TextAnimatorProperty.prototype.searchProperties = function () {
        var t,
          e = this._textData.a.length,
          i,
          r = PropertyFactory.getProp;
        for (t = 0; t < e; t += 1)
          (i = this._textData.a[t]),
            (this._animatorsData[t] = new TextAnimatorDataProperty(
              this._elem,
              i,
              this
            ));
        this._textData.p && "m" in this._textData.p
          ? ((this._pathData = {
              a: r(this._elem, this._textData.p.a, 0, 0, this),
              f: r(this._elem, this._textData.p.f, 0, 0, this),
              l: r(this._elem, this._textData.p.l, 0, 0, this),
              r: r(this._elem, this._textData.p.r, 0, 0, this),
              p: r(this._elem, this._textData.p.p, 0, 0, this),
              m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
            }),
            (this._hasMaskedPath = !0))
          : (this._hasMaskedPath = !1),
          (this._moreOptions.alignment = r(
            this._elem,
            this._textData.m.a,
            1,
            0,
            this
          ));
      }),
        (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
          if (
            ((this.lettersChangedFlag = e),
            !(
              !this._mdf &&
              !this._isFirstFrame &&
              !e &&
              (!this._hasMaskedPath || !this._pathData.m._mdf)
            ))
          ) {
            this._isFirstFrame = !1;
            var i = this._moreOptions.alignment.v,
              r = this._animatorsData,
              n = this._textData,
              a = this.mHelper,
              s = this._renderType,
              o = this.renderedLetters.length,
              l,
              c,
              p,
              _,
              h = t.l,
              b,
              v,
              f,
              E,
              d,
              u,
              m,
              y,
              C,
              P,
              T,
              M,
              I,
              z,
              O;
            if (this._hasMaskedPath) {
              if (
                ((O = this._pathData.m),
                !this._pathData.n || this._pathData._mdf)
              ) {
                var D = O.v;
                this._pathData.r.v && (D = D.reverse()),
                  (b = { tLength: 0, segments: [] }),
                  (_ = D._length - 1);
                var j;
                for (M = 0, p = 0; p < _; p += 1)
                  (j = bez.buildBezierData(
                    D.v[p],
                    D.v[p + 1],
                    [D.o[p][0] - D.v[p][0], D.o[p][1] - D.v[p][1]],
                    [
                      D.i[p + 1][0] - D.v[p + 1][0],
                      D.i[p + 1][1] - D.v[p + 1][1],
                    ]
                  )),
                    (b.tLength += j.segmentLength),
                    b.segments.push(j),
                    (M += j.segmentLength);
                (p = _),
                  O.v.c &&
                    ((j = bez.buildBezierData(
                      D.v[p],
                      D.v[0],
                      [D.o[p][0] - D.v[p][0], D.o[p][1] - D.v[p][1]],
                      [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]
                    )),
                    (b.tLength += j.segmentLength),
                    b.segments.push(j),
                    (M += j.segmentLength)),
                  (this._pathData.pi = b);
              }
              if (
                ((b = this._pathData.pi),
                (v = this._pathData.f.v),
                (m = 0),
                (u = 1),
                (E = 0),
                (d = !0),
                (P = b.segments),
                v < 0 && O.v.c)
              )
                for (
                  b.tLength < Math.abs(v) && (v = -Math.abs(v) % b.tLength),
                    m = P.length - 1,
                    C = P[m].points,
                    u = C.length - 1;
                  v < 0;

                )
                  (v += C[u].partialLength),
                    (u -= 1),
                    u < 0 && ((m -= 1), (C = P[m].points), (u = C.length - 1));
              (C = P[m].points),
                (y = C[u - 1]),
                (f = C[u]),
                (T = f.partialLength);
            }
            (_ = h.length), (l = 0), (c = 0);
            var H = t.finalSize * 1.2 * 0.714,
              R = !0,
              x,
              w,
              g,
              S,
              k;
            S = r.length;
            var A,
              V = -1,
              q,
              G,
              nt,
              st = v,
              rt = m,
              ut = u,
              dt = -1,
              yt,
              vt,
              Ct,
              ct,
              K,
              Kt,
              ee,
              Ut,
              Nt = "",
              Yt = this.defaultPropsArray,
              Qt;
            if (t.j === 2 || t.j === 1) {
              var xt = 0,
                ie = 0,
                re = t.j === 2 ? -0.5 : -1,
                Ft = 0,
                ne = !0;
              for (p = 0; p < _; p += 1)
                if (h[p].n) {
                  for (xt && (xt += ie); Ft < p; )
                    (h[Ft].animatorJustifyOffset = xt), (Ft += 1);
                  (xt = 0), (ne = !0);
                } else {
                  for (g = 0; g < S; g += 1)
                    (x = r[g].a),
                      x.t.propType &&
                        (ne && t.j === 2 && (ie += x.t.v * re),
                        (w = r[g].s),
                        (A = w.getMult(h[p].anIndexes[g], n.a[g].s.totalChars)),
                        A.length
                          ? (xt += x.t.v * A[0] * re)
                          : (xt += x.t.v * A * re));
                  ne = !1;
                }
              for (xt && (xt += ie); Ft < p; )
                (h[Ft].animatorJustifyOffset = xt), (Ft += 1);
            }
            for (p = 0; p < _; p += 1) {
              if ((a.reset(), (yt = 1), h[p].n))
                (l = 0),
                  (c += t.yOffset),
                  (c += R ? 1 : 0),
                  (v = st),
                  (R = !1),
                  this._hasMaskedPath &&
                    ((m = rt),
                    (u = ut),
                    (C = P[m].points),
                    (y = C[u - 1]),
                    (f = C[u]),
                    (T = f.partialLength),
                    (E = 0)),
                  (Nt = ""),
                  (Ut = ""),
                  (Kt = ""),
                  (Qt = ""),
                  (Yt = this.defaultPropsArray);
              else {
                if (this._hasMaskedPath) {
                  if (dt !== h[p].line) {
                    switch (t.j) {
                      case 1:
                        v += M - t.lineWidths[h[p].line];
                        break;
                      case 2:
                        v += (M - t.lineWidths[h[p].line]) / 2;
                        break;
                      default:
                        break;
                    }
                    dt = h[p].line;
                  }
                  V !== h[p].ind &&
                    (h[V] && (v += h[V].extra),
                    (v += h[p].an / 2),
                    (V = h[p].ind)),
                    (v += i[0] * h[p].an * 0.005);
                  var Dt = 0;
                  for (g = 0; g < S; g += 1)
                    (x = r[g].a),
                      x.p.propType &&
                        ((w = r[g].s),
                        (A = w.getMult(h[p].anIndexes[g], n.a[g].s.totalChars)),
                        A.length
                          ? (Dt += x.p.v[0] * A[0])
                          : (Dt += x.p.v[0] * A)),
                      x.a.propType &&
                        ((w = r[g].s),
                        (A = w.getMult(h[p].anIndexes[g], n.a[g].s.totalChars)),
                        A.length
                          ? (Dt += x.a.v[0] * A[0])
                          : (Dt += x.a.v[0] * A));
                  for (
                    d = !0,
                      this._pathData.a.v &&
                        ((v =
                          h[0].an * 0.5 +
                          ((M -
                            this._pathData.f.v -
                            h[0].an * 0.5 -
                            h[h.length - 1].an * 0.5) *
                            V) /
                            (_ - 1)),
                        (v += this._pathData.f.v));
                    d;

                  )
                    E + T >= v + Dt || !C
                      ? ((I = (v + Dt - E) / f.partialLength),
                        (G = y.point[0] + (f.point[0] - y.point[0]) * I),
                        (nt = y.point[1] + (f.point[1] - y.point[1]) * I),
                        a.translate(
                          -i[0] * h[p].an * 0.005,
                          -(i[1] * H) * 0.01
                        ),
                        (d = !1))
                      : C &&
                        ((E += f.partialLength),
                        (u += 1),
                        u >= C.length &&
                          ((u = 0),
                          (m += 1),
                          P[m]
                            ? (C = P[m].points)
                            : O.v.c
                            ? ((u = 0), (m = 0), (C = P[m].points))
                            : ((E -= f.partialLength), (C = null))),
                        C && ((y = f), (f = C[u]), (T = f.partialLength)));
                  (q = h[p].an / 2 - h[p].add), a.translate(-q, 0, 0);
                } else
                  (q = h[p].an / 2 - h[p].add),
                    a.translate(-q, 0, 0),
                    a.translate(-i[0] * h[p].an * 0.005, -i[1] * H * 0.01, 0);
                for (g = 0; g < S; g += 1)
                  (x = r[g].a),
                    x.t.propType &&
                      ((w = r[g].s),
                      (A = w.getMult(h[p].anIndexes[g], n.a[g].s.totalChars)),
                      (l !== 0 || t.j !== 0) &&
                        (this._hasMaskedPath
                          ? A.length
                            ? (v += x.t.v * A[0])
                            : (v += x.t.v * A)
                          : A.length
                          ? (l += x.t.v * A[0])
                          : (l += x.t.v * A)));
                for (
                  t.strokeWidthAnim && (Ct = t.sw || 0),
                    t.strokeColorAnim &&
                      (t.sc
                        ? (vt = [t.sc[0], t.sc[1], t.sc[2]])
                        : (vt = [0, 0, 0])),
                    t.fillColorAnim &&
                      t.fc &&
                      (ct = [t.fc[0], t.fc[1], t.fc[2]]),
                    g = 0;
                  g < S;
                  g += 1
                )
                  (x = r[g].a),
                    x.a.propType &&
                      ((w = r[g].s),
                      (A = w.getMult(h[p].anIndexes[g], n.a[g].s.totalChars)),
                      A.length
                        ? a.translate(
                            -x.a.v[0] * A[0],
                            -x.a.v[1] * A[1],
                            x.a.v[2] * A[2]
                          )
                        : a.translate(
                            -x.a.v[0] * A,
                            -x.a.v[1] * A,
                            x.a.v[2] * A
                          ));
                for (g = 0; g < S; g += 1)
                  (x = r[g].a),
                    x.s.propType &&
                      ((w = r[g].s),
                      (A = w.getMult(h[p].anIndexes[g], n.a[g].s.totalChars)),
                      A.length
                        ? a.scale(
                            1 + (x.s.v[0] - 1) * A[0],
                            1 + (x.s.v[1] - 1) * A[1],
                            1
                          )
                        : a.scale(
                            1 + (x.s.v[0] - 1) * A,
                            1 + (x.s.v[1] - 1) * A,
                            1
                          ));
                for (g = 0; g < S; g += 1) {
                  if (
                    ((x = r[g].a),
                    (w = r[g].s),
                    (A = w.getMult(h[p].anIndexes[g], n.a[g].s.totalChars)),
                    x.sk.propType &&
                      (A.length
                        ? a.skewFromAxis(-x.sk.v * A[0], x.sa.v * A[1])
                        : a.skewFromAxis(-x.sk.v * A, x.sa.v * A)),
                    x.r.propType &&
                      (A.length
                        ? a.rotateZ(-x.r.v * A[2])
                        : a.rotateZ(-x.r.v * A)),
                    x.ry.propType &&
                      (A.length
                        ? a.rotateY(x.ry.v * A[1])
                        : a.rotateY(x.ry.v * A)),
                    x.rx.propType &&
                      (A.length
                        ? a.rotateX(x.rx.v * A[0])
                        : a.rotateX(x.rx.v * A)),
                    x.o.propType &&
                      (A.length
                        ? (yt += (x.o.v * A[0] - yt) * A[0])
                        : (yt += (x.o.v * A - yt) * A)),
                    t.strokeWidthAnim &&
                      x.sw.propType &&
                      (A.length ? (Ct += x.sw.v * A[0]) : (Ct += x.sw.v * A)),
                    t.strokeColorAnim && x.sc.propType)
                  )
                    for (K = 0; K < 3; K += 1)
                      A.length
                        ? (vt[K] += (x.sc.v[K] - vt[K]) * A[0])
                        : (vt[K] += (x.sc.v[K] - vt[K]) * A);
                  if (t.fillColorAnim && t.fc) {
                    if (x.fc.propType)
                      for (K = 0; K < 3; K += 1)
                        A.length
                          ? (ct[K] += (x.fc.v[K] - ct[K]) * A[0])
                          : (ct[K] += (x.fc.v[K] - ct[K]) * A);
                    x.fh.propType &&
                      (A.length
                        ? (ct = addHueToRGB(ct, x.fh.v * A[0]))
                        : (ct = addHueToRGB(ct, x.fh.v * A))),
                      x.fs.propType &&
                        (A.length
                          ? (ct = addSaturationToRGB(ct, x.fs.v * A[0]))
                          : (ct = addSaturationToRGB(ct, x.fs.v * A))),
                      x.fb.propType &&
                        (A.length
                          ? (ct = addBrightnessToRGB(ct, x.fb.v * A[0]))
                          : (ct = addBrightnessToRGB(ct, x.fb.v * A)));
                  }
                }
                for (g = 0; g < S; g += 1)
                  (x = r[g].a),
                    x.p.propType &&
                      ((w = r[g].s),
                      (A = w.getMult(h[p].anIndexes[g], n.a[g].s.totalChars)),
                      this._hasMaskedPath
                        ? A.length
                          ? a.translate(0, x.p.v[1] * A[0], -x.p.v[2] * A[1])
                          : a.translate(0, x.p.v[1] * A, -x.p.v[2] * A)
                        : A.length
                        ? a.translate(
                            x.p.v[0] * A[0],
                            x.p.v[1] * A[1],
                            -x.p.v[2] * A[2]
                          )
                        : a.translate(
                            x.p.v[0] * A,
                            x.p.v[1] * A,
                            -x.p.v[2] * A
                          ));
                if (
                  (t.strokeWidthAnim && (Kt = Ct < 0 ? 0 : Ct),
                  t.strokeColorAnim &&
                    (ee =
                      "rgb(" +
                      Math.round(vt[0] * 255) +
                      "," +
                      Math.round(vt[1] * 255) +
                      "," +
                      Math.round(vt[2] * 255) +
                      ")"),
                  t.fillColorAnim &&
                    t.fc &&
                    (Ut =
                      "rgb(" +
                      Math.round(ct[0] * 255) +
                      "," +
                      Math.round(ct[1] * 255) +
                      "," +
                      Math.round(ct[2] * 255) +
                      ")"),
                  this._hasMaskedPath)
                ) {
                  if (
                    (a.translate(0, -t.ls),
                    a.translate(0, i[1] * H * 0.01 + c, 0),
                    this._pathData.p.v)
                  ) {
                    z = (f.point[1] - y.point[1]) / (f.point[0] - y.point[0]);
                    var he = (Math.atan(z) * 180) / Math.PI;
                    f.point[0] < y.point[0] && (he += 180),
                      a.rotate((-he * Math.PI) / 180);
                  }
                  a.translate(G, nt, 0),
                    (v -= i[0] * h[p].an * 0.005),
                    h[p + 1] &&
                      V !== h[p + 1].ind &&
                      ((v += h[p].an / 2), (v += t.tr * 0.001 * t.finalSize));
                } else {
                  switch (
                    (a.translate(l, c, 0),
                    t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                    t.j)
                  ) {
                    case 1:
                      a.translate(
                        h[p].animatorJustifyOffset +
                          t.justifyOffset +
                          (t.boxWidth - t.lineWidths[h[p].line]),
                        0,
                        0
                      );
                      break;
                    case 2:
                      a.translate(
                        h[p].animatorJustifyOffset +
                          t.justifyOffset +
                          (t.boxWidth - t.lineWidths[h[p].line]) / 2,
                        0,
                        0
                      );
                      break;
                    default:
                      break;
                  }
                  a.translate(0, -t.ls),
                    a.translate(q, 0, 0),
                    a.translate(i[0] * h[p].an * 0.005, i[1] * H * 0.01, 0),
                    (l += h[p].l + t.tr * 0.001 * t.finalSize);
                }
                s === "html"
                  ? (Nt = a.toCSS())
                  : s === "svg"
                  ? (Nt = a.to2dCSS())
                  : (Yt = [
                      a.props[0],
                      a.props[1],
                      a.props[2],
                      a.props[3],
                      a.props[4],
                      a.props[5],
                      a.props[6],
                      a.props[7],
                      a.props[8],
                      a.props[9],
                      a.props[10],
                      a.props[11],
                      a.props[12],
                      a.props[13],
                      a.props[14],
                      a.props[15],
                    ]),
                  (Qt = yt);
              }
              o <= p
                ? ((k = new LetterProps(Qt, Kt, ee, Ut, Nt, Yt)),
                  this.renderedLetters.push(k),
                  (o += 1),
                  (this.lettersChangedFlag = !0))
                : ((k = this.renderedLetters[p]),
                  (this.lettersChangedFlag =
                    k.update(Qt, Kt, ee, Ut, Nt, Yt) ||
                    this.lettersChangedFlag));
            }
          }
        }),
        (TextAnimatorProperty.prototype.getValue = function () {
          this._elem.globalData.frameId !== this._frameId &&
            ((this._frameId = this._elem.globalData.frameId),
            this.iterateDynamicProperties());
        }),
        (TextAnimatorProperty.prototype.mHelper = new Matrix()),
        (TextAnimatorProperty.prototype.defaultPropsArray = []),
        extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
      function ITextElement() {}
      (ITextElement.prototype.initElement = function (t, e, i) {
        (this.lettersChangedFlag = !0),
          this.initFrame(),
          this.initBaseData(t, e, i),
          (this.textProperty = new TextProperty(
            this,
            t.t,
            this.dynamicProperties
          )),
          (this.textAnimator = new TextAnimatorProperty(
            t.t,
            this.renderType,
            this
          )),
          this.initTransform(t, e, i),
          this.initHierarchy(),
          this.initRenderable(),
          this.initRendererElement(),
          this.createContainerElements(),
          this.createRenderableComponents(),
          this.createContent(),
          this.hide(),
          this.textAnimator.searchProperties(this.dynamicProperties);
      }),
        (ITextElement.prototype.prepareFrame = function (t) {
          (this._mdf = !1),
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange);
        }),
        (ITextElement.prototype.createPathShape = function (t, e) {
          var i,
            r = e.length,
            n,
            a = "";
          for (i = 0; i < r; i += 1)
            e[i].ty === "sh" &&
              ((n = e[i].ks.k), (a += buildShapeString(n, n.i.length, !0, t)));
          return a;
        }),
        (ITextElement.prototype.updateDocumentData = function (t, e) {
          this.textProperty.updateDocumentData(t, e);
        }),
        (ITextElement.prototype.canResizeFont = function (t) {
          this.textProperty.canResizeFont(t);
        }),
        (ITextElement.prototype.setMinimumFontSize = function (t) {
          this.textProperty.setMinimumFontSize(t);
        }),
        (ITextElement.prototype.applyTextPropertiesToMatrix = function (
          t,
          e,
          i,
          r,
          n
        ) {
          switch (
            (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
            e.translate(0, -t.ls, 0),
            t.j)
          ) {
            case 1:
              e.translate(
                t.justifyOffset + (t.boxWidth - t.lineWidths[i]),
                0,
                0
              );
              break;
            case 2:
              e.translate(
                t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2,
                0,
                0
              );
              break;
            default:
              break;
          }
          e.translate(r, n, 0);
        }),
        (ITextElement.prototype.buildColor = function (t) {
          return (
            "rgb(" +
            Math.round(t[0] * 255) +
            "," +
            Math.round(t[1] * 255) +
            "," +
            Math.round(t[2] * 255) +
            ")"
          );
        }),
        (ITextElement.prototype.emptyProp = new LetterProps()),
        (ITextElement.prototype.destroy = function () {}),
        (ITextElement.prototype.validateText = function () {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
            (this.buildNewText(),
            (this.textProperty._isFirstFrame = !1),
            (this.textProperty._mdf = !1));
        });
      var emptyShapeData = { shapes: [] };
      function SVGTextLottieElement(t, e, i) {
        (this.textSpans = []),
          (this.renderType = "svg"),
          this.initElement(t, e, i);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          SVGBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
          ITextElement,
        ],
        SVGTextLottieElement
      ),
        (SVGTextLottieElement.prototype.createContent = function () {
          this.data.singleShape &&
            !this.globalData.fontManager.chars &&
            (this.textContainer = createNS("text"));
        }),
        (SVGTextLottieElement.prototype.buildTextContents = function (t) {
          for (var e = 0, i = t.length, r = [], n = ""; e < i; )
            t[e] === "\r" || t[e] === "" ? (r.push(n), (n = "")) : (n += t[e]),
              (e += 1);
          return r.push(n), r;
        }),
        (SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
          if (t.shapes && t.shapes.length) {
            var i = t.shapes[0];
            if (i.it) {
              var r = i.it[i.it.length - 1];
              r.s && ((r.s.k[0] = e), (r.s.k[1] = e));
            }
          }
          return t;
        }),
        (SVGTextLottieElement.prototype.buildNewText = function () {
          this.addDynamicProperty(this);
          var t,
            e,
            i = this.textProperty.currentData;
          (this.renderedLetters = createSizedArray(i ? i.l.length : 0)),
            i.fc
              ? this.layerElement.setAttribute("fill", this.buildColor(i.fc))
              : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
            i.sc &&
              (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)),
              this.layerElement.setAttribute("stroke-width", i.sw)),
            this.layerElement.setAttribute("font-size", i.finalSize);
          var r = this.globalData.fontManager.getFontByName(i.f);
          if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
          else {
            this.layerElement.setAttribute("font-family", r.fFamily);
            var n = i.fWeight,
              a = i.fStyle;
            this.layerElement.setAttribute("font-style", a),
              this.layerElement.setAttribute("font-weight", n);
          }
          this.layerElement.setAttribute("aria-label", i.t);
          var s = i.l || [],
            o = !!this.globalData.fontManager.chars;
          e = s.length;
          var l,
            c = this.mHelper,
            p = "",
            _ = this.data.singleShape,
            h = 0,
            b = 0,
            v = !0,
            f = i.tr * 0.001 * i.finalSize;
          if (_ && !o && !i.sz) {
            var E = this.textContainer,
              d = "start";
            switch (i.j) {
              case 1:
                d = "end";
                break;
              case 2:
                d = "middle";
                break;
              default:
                d = "start";
                break;
            }
            E.setAttribute("text-anchor", d),
              E.setAttribute("letter-spacing", f);
            var u = this.buildTextContents(i.finalText);
            for (
              e = u.length, b = i.ps ? i.ps[1] + i.ascent : 0, t = 0;
              t < e;
              t += 1
            )
              (l = this.textSpans[t].span || createNS("tspan")),
                (l.textContent = u[t]),
                l.setAttribute("x", 0),
                l.setAttribute("y", b),
                (l.style.display = "inherit"),
                E.appendChild(l),
                this.textSpans[t] ||
                  (this.textSpans[t] = { span: null, glyph: null }),
                (this.textSpans[t].span = l),
                (b += i.finalLineHeight);
            this.layerElement.appendChild(E);
          } else {
            var m = this.textSpans.length,
              y;
            for (t = 0; t < e; t += 1) {
              if (
                (this.textSpans[t] ||
                  (this.textSpans[t] = {
                    span: null,
                    childSpan: null,
                    glyph: null,
                  }),
                !o || !_ || t === 0)
              ) {
                if (
                  ((l =
                    m > t
                      ? this.textSpans[t].span
                      : createNS(o ? "g" : "text")),
                  m <= t)
                ) {
                  if (
                    (l.setAttribute("stroke-linecap", "butt"),
                    l.setAttribute("stroke-linejoin", "round"),
                    l.setAttribute("stroke-miterlimit", "4"),
                    (this.textSpans[t].span = l),
                    o)
                  ) {
                    var C = createNS("g");
                    l.appendChild(C), (this.textSpans[t].childSpan = C);
                  }
                  (this.textSpans[t].span = l),
                    this.layerElement.appendChild(l);
                }
                l.style.display = "inherit";
              }
              if (
                (c.reset(),
                _ &&
                  (s[t].n &&
                    ((h = -f), (b += i.yOffset), (b += v ? 1 : 0), (v = !1)),
                  this.applyTextPropertiesToMatrix(i, c, s[t].line, h, b),
                  (h += s[t].l || 0),
                  (h += f)),
                o)
              ) {
                y = this.globalData.fontManager.getCharData(
                  i.finalText[t],
                  r.fStyle,
                  this.globalData.fontManager.getFontByName(i.f).fFamily
                );
                var P;
                if (y.t === 1)
                  P = new SVGCompElement(y.data, this.globalData, this);
                else {
                  var T = emptyShapeData;
                  y.data &&
                    y.data.shapes &&
                    (T = this.buildShapeData(y.data, i.finalSize)),
                    (P = new SVGShapeElement(T, this.globalData, this));
                }
                if (this.textSpans[t].glyph) {
                  var M = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(M.layerElement),
                    M.destroy();
                }
                (this.textSpans[t].glyph = P),
                  (P._debug = !0),
                  P.prepareFrame(0),
                  P.renderFrame(),
                  this.textSpans[t].childSpan.appendChild(P.layerElement),
                  y.t === 1 &&
                    this.textSpans[t].childSpan.setAttribute(
                      "transform",
                      "scale(" +
                        i.finalSize / 100 +
                        "," +
                        i.finalSize / 100 +
                        ")"
                    );
              } else
                _ &&
                  l.setAttribute(
                    "transform",
                    "translate(" + c.props[12] + "," + c.props[13] + ")"
                  ),
                  (l.textContent = s[t].val),
                  l.setAttributeNS(
                    "http://www.w3.org/XML/1998/namespace",
                    "xml:space",
                    "preserve"
                  );
            }
            _ && l && l.setAttribute("d", p);
          }
          for (; t < this.textSpans.length; )
            (this.textSpans[t].span.style.display = "none"), (t += 1);
          this._sizeChanged = !0;
        }),
        (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
          if (
            (this.prepareFrame(this.comp.renderedFrame - this.data.st),
            this.renderInnerContent(),
            this._sizeChanged)
          ) {
            this._sizeChanged = !1;
            var t = this.layerElement.getBBox();
            this.bbox = {
              top: t.y,
              left: t.x,
              width: t.width,
              height: t.height,
            };
          }
          return this.bbox;
        }),
        (SVGTextLottieElement.prototype.getValue = function () {
          var t,
            e = this.textSpans.length,
            i;
          for (
            this.renderedFrame = this.comp.renderedFrame, t = 0;
            t < e;
            t += 1
          )
            (i = this.textSpans[t].glyph),
              i &&
                (i.prepareFrame(this.comp.renderedFrame - this.data.st),
                i._mdf && (this._mdf = !0));
        }),
        (SVGTextLottieElement.prototype.renderInnerContent = function () {
          if (
            (this.validateText(),
            (!this.data.singleShape || this._mdf) &&
              (this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              ),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag))
          ) {
            this._sizeChanged = !0;
            var t,
              e,
              i = this.textAnimator.renderedLetters,
              r = this.textProperty.currentData.l;
            e = r.length;
            var n, a, s;
            for (t = 0; t < e; t += 1)
              r[t].n ||
                ((n = i[t]),
                (a = this.textSpans[t].span),
                (s = this.textSpans[t].glyph),
                s && s.renderFrame(),
                n._mdf.m && a.setAttribute("transform", n.m),
                n._mdf.o && a.setAttribute("opacity", n.o),
                n._mdf.sw && a.setAttribute("stroke-width", n.sw),
                n._mdf.sc && a.setAttribute("stroke", n.sc),
                n._mdf.fc && a.setAttribute("fill", n.fc));
          }
        });
      function ISolidElement(t, e, i) {
        this.initElement(t, e, i);
      }
      extendPrototype([IImageElement], ISolidElement),
        (ISolidElement.prototype.createContent = function () {
          var t = createNS("rect");
          t.setAttribute("width", this.data.sw),
            t.setAttribute("height", this.data.sh),
            t.setAttribute("fill", this.data.sc),
            this.layerElement.appendChild(t);
        });
      function NullElement(t, e, i) {
        this.initFrame(),
          this.initBaseData(t, e, i),
          this.initFrame(),
          this.initTransform(t, e, i),
          this.initHierarchy();
      }
      (NullElement.prototype.prepareFrame = function (t) {
        this.prepareProperties(t, !0);
      }),
        (NullElement.prototype.renderFrame = function () {}),
        (NullElement.prototype.getBaseElement = function () {
          return null;
        }),
        (NullElement.prototype.destroy = function () {}),
        (NullElement.prototype.sourceRectAtTime = function () {}),
        (NullElement.prototype.hide = function () {}),
        extendPrototype(
          [BaseElement, TransformElement, HierarchyElement, FrameElement],
          NullElement
        );
      function SVGRendererBase() {}
      extendPrototype([BaseRenderer], SVGRendererBase),
        (SVGRendererBase.prototype.createNull = function (t) {
          return new NullElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createShape = function (t) {
          return new SVGShapeElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createText = function (t) {
          return new SVGTextLottieElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createImage = function (t) {
          return new IImageElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createSolid = function (t) {
          return new ISolidElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.configAnimation = function (t) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
            this.svgElement.setAttribute(
              "xmlns:xlink",
              "http://www.w3.org/1999/xlink"
            ),
            this.renderConfig.viewBoxSize
              ? this.svgElement.setAttribute(
                  "viewBox",
                  this.renderConfig.viewBoxSize
                )
              : this.svgElement.setAttribute(
                  "viewBox",
                  "0 0 " + t.w + " " + t.h
                ),
            this.renderConfig.viewBoxOnly ||
              (this.svgElement.setAttribute("width", t.w),
              this.svgElement.setAttribute("height", t.h),
              (this.svgElement.style.width = "100%"),
              (this.svgElement.style.height = "100%"),
              (this.svgElement.style.transform = "translate3d(0,0,0)"),
              (this.svgElement.style.contentVisibility =
                this.renderConfig.contentVisibility)),
            this.renderConfig.width &&
              this.svgElement.setAttribute("width", this.renderConfig.width),
            this.renderConfig.height &&
              this.svgElement.setAttribute("height", this.renderConfig.height),
            this.renderConfig.className &&
              this.svgElement.setAttribute(
                "class",
                this.renderConfig.className
              ),
            this.renderConfig.id &&
              this.svgElement.setAttribute("id", this.renderConfig.id),
            this.renderConfig.focusable !== void 0 &&
              this.svgElement.setAttribute(
                "focusable",
                this.renderConfig.focusable
              ),
            this.svgElement.setAttribute(
              "preserveAspectRatio",
              this.renderConfig.preserveAspectRatio
            ),
            this.animationItem.wrapper.appendChild(this.svgElement);
          var e = this.globalData.defs;
          this.setupGlobalData(t, e),
            (this.globalData.progressiveLoad =
              this.renderConfig.progressiveLoad),
            (this.data = t);
          var i = createNS("clipPath"),
            r = createNS("rect");
          r.setAttribute("width", t.w),
            r.setAttribute("height", t.h),
            r.setAttribute("x", 0),
            r.setAttribute("y", 0);
          var n = createElementID();
          i.setAttribute("id", n),
            i.appendChild(r),
            this.layerElement.setAttribute(
              "clip-path",
              "url(" + getLocationHref() + "#" + n + ")"
            ),
            e.appendChild(i),
            (this.layers = t.layers),
            (this.elements = createSizedArray(t.layers.length));
        }),
        (SVGRendererBase.prototype.destroy = function () {
          this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = ""),
            (this.layerElement = null),
            (this.globalData.defs = null);
          var t,
            e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1)
            this.elements[t] &&
              this.elements[t].destroy &&
              this.elements[t].destroy();
          (this.elements.length = 0),
            (this.destroyed = !0),
            (this.animationItem = null);
        }),
        (SVGRendererBase.prototype.updateContainerSize = function () {}),
        (SVGRendererBase.prototype.findIndexByInd = function (t) {
          var e = 0,
            i = this.layers.length;
          for (e = 0; e < i; e += 1) if (this.layers[e].ind === t) return e;
          return -1;
        }),
        (SVGRendererBase.prototype.buildItem = function (t) {
          var e = this.elements;
          if (!(e[t] || this.layers[t].ty === 99)) {
            e[t] = !0;
            var i = this.createItem(this.layers[t]);
            if (
              ((e[t] = i),
              getExpressionsPlugin() &&
                (this.layers[t].ty === 0 &&
                  this.globalData.projectInterface.registerComposition(i),
                i.initExpressions()),
              this.appendElementInPos(i, t),
              this.layers[t].tt)
            ) {
              var r =
                "tp" in this.layers[t]
                  ? this.findIndexByInd(this.layers[t].tp)
                  : t - 1;
              if (r === -1) return;
              if (!this.elements[r] || this.elements[r] === !0)
                this.buildItem(r), this.addPendingElement(i);
              else {
                var n = e[r],
                  a = n.getMatte(this.layers[t].tt);
                i.setMatte(a);
              }
            }
          }
        }),
        (SVGRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var t = this.pendingElements.pop();
            if ((t.checkParenting(), t.data.tt))
              for (var e = 0, i = this.elements.length; e < i; ) {
                if (this.elements[e] === t) {
                  var r =
                      "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                    n = this.elements[r],
                    a = n.getMatte(this.layers[e].tt);
                  t.setMatte(a);
                  break;
                }
                e += 1;
              }
          }
        }),
        (SVGRendererBase.prototype.renderFrame = function (t) {
          if (!(this.renderedFrame === t || this.destroyed)) {
            t === null ? (t = this.renderedFrame) : (this.renderedFrame = t),
              (this.globalData.frameNum = t),
              (this.globalData.frameId += 1),
              (this.globalData.projectInterface.currentFrame = t),
              (this.globalData._mdf = !1);
            var e,
              i = this.layers.length;
            for (
              this.completeLayers || this.checkLayers(t), e = i - 1;
              e >= 0;
              e -= 1
            )
              (this.completeLayers || this.elements[e]) &&
                this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < i; e += 1)
                (this.completeLayers || this.elements[e]) &&
                  this.elements[e].renderFrame();
          }
        }),
        (SVGRendererBase.prototype.appendElementInPos = function (t, e) {
          var i = t.getBaseElement();
          if (i) {
            for (var r = 0, n; r < e; )
              this.elements[r] &&
                this.elements[r] !== !0 &&
                this.elements[r].getBaseElement() &&
                (n = this.elements[r].getBaseElement()),
                (r += 1);
            n
              ? this.layerElement.insertBefore(i, n)
              : this.layerElement.appendChild(i);
          }
        }),
        (SVGRendererBase.prototype.hide = function () {
          this.layerElement.style.display = "none";
        }),
        (SVGRendererBase.prototype.show = function () {
          this.layerElement.style.display = "block";
        });
      function ICompElement() {}
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
        ],
        ICompElement
      ),
        (ICompElement.prototype.initElement = function (t, e, i) {
          this.initFrame(),
            this.initBaseData(t, e, i),
            this.initTransform(t, e, i),
            this.initRenderable(),
            this.initHierarchy(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            (this.data.xt || !e.progressiveLoad) && this.buildAllItems(),
            this.hide();
        }),
        (ICompElement.prototype.prepareFrame = function (t) {
          if (
            ((this._mdf = !1),
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange),
            !(!this.isInRange && !this.data.xt))
          ) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
            else {
              var e = this.tm.v;
              e === this.data.op && (e = this.data.op - 1),
                (this.renderedFrame = e);
            }
            var i,
              r = this.elements.length;
            for (
              this.completeLayers || this.checkLayers(this.renderedFrame),
                i = r - 1;
              i >= 0;
              i -= 1
            )
              (this.completeLayers || this.elements[i]) &&
                (this.elements[i].prepareFrame(
                  this.renderedFrame - this.layers[i].st
                ),
                this.elements[i]._mdf && (this._mdf = !0));
          }
        }),
        (ICompElement.prototype.renderInnerContent = function () {
          var t,
            e = this.layers.length;
          for (t = 0; t < e; t += 1)
            (this.completeLayers || this.elements[t]) &&
              this.elements[t].renderFrame();
        }),
        (ICompElement.prototype.setElements = function (t) {
          this.elements = t;
        }),
        (ICompElement.prototype.getElements = function () {
          return this.elements;
        }),
        (ICompElement.prototype.destroyElements = function () {
          var t,
            e = this.layers.length;
          for (t = 0; t < e; t += 1)
            this.elements[t] && this.elements[t].destroy();
        }),
        (ICompElement.prototype.destroy = function () {
          this.destroyElements(), this.destroyBaseElement();
        });
      function SVGCompElement(t, e, i) {
        (this.layers = t.layers),
          (this.supports3d = !0),
          (this.completeLayers = !1),
          (this.pendingElements = []),
          (this.elements = this.layers
            ? createSizedArray(this.layers.length)
            : []),
          this.initElement(t, e, i),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 });
      }
      extendPrototype(
        [SVGRendererBase, ICompElement, SVGBaseElement],
        SVGCompElement
      ),
        (SVGCompElement.prototype.createComp = function (t) {
          return new SVGCompElement(t, this.globalData, this);
        });
      function SVGRenderer(t, e) {
        (this.animationItem = t),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.svgElement = createNS("svg"));
        var i = "";
        if (e && e.title) {
          var r = createNS("title"),
            n = createElementID();
          r.setAttribute("id", n),
            (r.textContent = e.title),
            this.svgElement.appendChild(r),
            (i += n);
        }
        if (e && e.description) {
          var a = createNS("desc"),
            s = createElementID();
          a.setAttribute("id", s),
            (a.textContent = e.description),
            this.svgElement.appendChild(a),
            (i += " " + s);
        }
        i && this.svgElement.setAttribute("aria-labelledby", i);
        var o = createNS("defs");
        this.svgElement.appendChild(o);
        var l = createNS("g");
        this.svgElement.appendChild(l),
          (this.layerElement = l),
          (this.renderConfig = {
            preserveAspectRatio:
              (e && e.preserveAspectRatio) || "xMidYMid meet",
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
            contentVisibility: (e && e.contentVisibility) || "visible",
            progressiveLoad: (e && e.progressiveLoad) || !1,
            hideOnTransparent: !(e && e.hideOnTransparent === !1),
            viewBoxOnly: (e && e.viewBoxOnly) || !1,
            viewBoxSize: (e && e.viewBoxSize) || !1,
            className: (e && e.className) || "",
            id: (e && e.id) || "",
            focusable: e && e.focusable,
            filterSize: {
              width: (e && e.filterSize && e.filterSize.width) || "100%",
              height: (e && e.filterSize && e.filterSize.height) || "100%",
              x: (e && e.filterSize && e.filterSize.x) || "0%",
              y: (e && e.filterSize && e.filterSize.y) || "0%",
            },
            width: e && e.width,
            height: e && e.height,
            runExpressions:
              !e || e.runExpressions === void 0 || e.runExpressions,
          }),
          (this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig,
          }),
          (this.elements = []),
          (this.pendingElements = []),
          (this.destroyed = !1),
          (this.rendererType = "svg");
      }
      extendPrototype([SVGRendererBase], SVGRenderer),
        (SVGRenderer.prototype.createComp = function (t) {
          return new SVGCompElement(t, this.globalData, this);
        });
      function ShapeTransformManager() {
        (this.sequences = {}),
          (this.sequenceList = []),
          (this.transform_key_count = 0);
      }
      ShapeTransformManager.prototype = {
        addTransformSequence: function (e) {
          var i,
            r = e.length,
            n = "_";
          for (i = 0; i < r; i += 1) n += e[i].transform.key + "_";
          var a = this.sequences[n];
          return (
            a ||
              ((a = {
                transforms: [].concat(e),
                finalTransform: new Matrix(),
                _mdf: !1,
              }),
              (this.sequences[n] = a),
              this.sequenceList.push(a)),
            a
          );
        },
        processSequence: function (e, i) {
          for (var r = 0, n = e.transforms.length, a = i; r < n && !i; ) {
            if (e.transforms[r].transform.mProps._mdf) {
              a = !0;
              break;
            }
            r += 1;
          }
          if (a)
            for (e.finalTransform.reset(), r = n - 1; r >= 0; r -= 1)
              e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
          e._mdf = a;
        },
        processSequences: function (e) {
          var i,
            r = this.sequenceList.length;
          for (i = 0; i < r; i += 1)
            this.processSequence(this.sequenceList[i], e);
        },
        getNewKey: function () {
          return (
            (this.transform_key_count += 1), "_" + this.transform_key_count
          );
        },
      };
      var lumaLoader = function () {
        var e = "__lottie_element_luma_buffer",
          i = null,
          r = null,
          n = null;
        function a() {
          var l = createNS("svg"),
            c = createNS("filter"),
            p = createNS("feColorMatrix");
          return (
            c.setAttribute("id", e),
            p.setAttribute("type", "matrix"),
            p.setAttribute("color-interpolation-filters", "sRGB"),
            p.setAttribute(
              "values",
              "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"
            ),
            c.appendChild(p),
            l.appendChild(c),
            l.setAttribute("id", e + "_svg"),
            featureSupport.svgLumaHidden && (l.style.display = "none"),
            l
          );
        }
        function s() {
          i ||
            ((n = a()),
            document.body.appendChild(n),
            (i = createTag("canvas")),
            (r = i.getContext("2d")),
            (r.filter = "url(#" + e + ")"),
            (r.fillStyle = "rgba(0,0,0,0)"),
            r.fillRect(0, 0, 1, 1));
        }
        function o(l) {
          return (
            i || s(),
            (i.width = l.width),
            (i.height = l.height),
            (r.filter = "url(#" + e + ")"),
            i
          );
        }
        return { load: s, get: o };
      };
      function createCanvas(t, e) {
        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
        var i = createTag("canvas");
        return (i.width = t), (i.height = e), i;
      }
      var assetLoader = (function () {
          return {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas,
          };
        })(),
        registeredEffects = {};
      function CVEffects(t) {
        var e,
          i = t.data.ef ? t.data.ef.length : 0;
        this.filters = [];
        var r;
        for (e = 0; e < i; e += 1) {
          r = null;
          var n = t.data.ef[e].ty;
          if (registeredEffects[n]) {
            var a = registeredEffects[n].effect;
            r = new a(t.effectsManager.effectElements[e], t);
          }
          r && this.filters.push(r);
        }
        this.filters.length && t.addRenderableComponent(this);
      }
      (CVEffects.prototype.renderFrame = function (t) {
        var e,
          i = this.filters.length;
        for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
      }),
        (CVEffects.prototype.getEffects = function (t) {
          var e,
            i = this.filters.length,
            r = [];
          for (e = 0; e < i; e += 1)
            this.filters[e].type === t && r.push(this.filters[e]);
          return r;
        });
      function registerEffect(t, e) {
        registeredEffects[t] = { effect: e };
      }
      function CVMaskElement(t, e) {
        (this.data = t),
          (this.element = e),
          (this.masksProperties = this.data.masksProperties || []),
          (this.viewData = createSizedArray(this.masksProperties.length));
        var i,
          r = this.masksProperties.length,
          n = !1;
        for (i = 0; i < r; i += 1)
          this.masksProperties[i].mode !== "n" && (n = !0),
            (this.viewData[i] = ShapePropertyFactory.getShapeProp(
              this.element,
              this.masksProperties[i],
              3
            ));
        (this.hasMasks = n), n && this.element.addRenderableComponent(this);
      }
      (CVMaskElement.prototype.renderFrame = function () {
        if (this.hasMasks) {
          var t = this.element.finalTransform.mat,
            e = this.element.canvasContext,
            i,
            r = this.masksProperties.length,
            n,
            a,
            s;
          for (e.beginPath(), i = 0; i < r; i += 1)
            if (this.masksProperties[i].mode !== "n") {
              this.masksProperties[i].inv &&
                (e.moveTo(0, 0),
                e.lineTo(this.element.globalData.compSize.w, 0),
                e.lineTo(
                  this.element.globalData.compSize.w,
                  this.element.globalData.compSize.h
                ),
                e.lineTo(0, this.element.globalData.compSize.h),
                e.lineTo(0, 0)),
                (s = this.viewData[i].v),
                (n = t.applyToPointArray(s.v[0][0], s.v[0][1], 0)),
                e.moveTo(n[0], n[1]);
              var o,
                l = s._length;
              for (o = 1; o < l; o += 1)
                (a = t.applyToTriplePoints(s.o[o - 1], s.i[o], s.v[o])),
                  e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
              (a = t.applyToTriplePoints(s.o[o - 1], s.i[0], s.v[0])),
                e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
            }
          this.element.globalData.renderer.save(!0), e.clip();
        }
      }),
        (CVMaskElement.prototype.getMaskProperty =
          MaskElement.prototype.getMaskProperty),
        (CVMaskElement.prototype.destroy = function () {
          this.element = null;
        });
      function CVBaseElement() {}
      var operationsMap = {
        1: "source-in",
        2: "source-out",
        3: "source-in",
        4: "source-out",
      };
      (CVBaseElement.prototype = {
        createElements: function () {},
        initRendererElement: function () {},
        createContainerElements: function () {
          if (this.data.tt >= 1) {
            this.buffers = [];
            var e = this.globalData.canvasContext,
              i = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
            this.buffers.push(i);
            var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
            this.buffers.push(r),
              this.data.tt >= 3 &&
                !document._isProxy &&
                assetLoader.loadLumaCanvas();
          }
          (this.canvasContext = this.globalData.canvasContext),
            (this.transformCanvas = this.globalData.transformCanvas),
            (this.renderableEffectsManager = new CVEffects(this)),
            this.searchEffectTransforms();
        },
        createContent: function () {},
        setBlendMode: function () {
          var e = this.globalData;
          if (e.blendMode !== this.data.bm) {
            e.blendMode = this.data.bm;
            var i = getBlendMode(this.data.bm);
            e.canvasContext.globalCompositeOperation = i;
          }
        },
        createRenderableComponents: function () {
          (this.maskManager = new CVMaskElement(this.data, this)),
            (this.transformEffects = this.renderableEffectsManager.getEffects(
              effectTypes.TRANSFORM_EFFECT
            ));
        },
        hideElement: function () {
          !this.hidden &&
            (!this.isInRange || this.isTransparent) &&
            (this.hidden = !0);
        },
        showElement: function () {
          this.isInRange &&
            !this.isTransparent &&
            ((this.hidden = !1),
            (this._isFirstFrame = !0),
            (this.maskManager._isFirstFrame = !0));
        },
        clearCanvas: function (e) {
          e.clearRect(
            this.transformCanvas.tx,
            this.transformCanvas.ty,
            this.transformCanvas.w * this.transformCanvas.sx,
            this.transformCanvas.h * this.transformCanvas.sy
          );
        },
        prepareLayer: function () {
          if (this.data.tt >= 1) {
            var e = this.buffers[0],
              i = e.getContext("2d");
            this.clearCanvas(i),
              i.drawImage(this.canvasContext.canvas, 0, 0),
              (this.currentTransform = this.canvasContext.getTransform()),
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
              this.clearCanvas(this.canvasContext),
              this.canvasContext.setTransform(this.currentTransform);
          }
        },
        exitLayer: function () {
          if (this.data.tt >= 1) {
            var e = this.buffers[1],
              i = e.getContext("2d");
            this.clearCanvas(i),
              i.drawImage(this.canvasContext.canvas, 0, 0),
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
              this.clearCanvas(this.canvasContext),
              this.canvasContext.setTransform(this.currentTransform);
            var r = this.comp.getElementById(
              "tp" in this.data ? this.data.tp : this.data.ind - 1
            );
            if (
              (r.renderFrame(!0),
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
              this.data.tt >= 3 && !document._isProxy)
            ) {
              var n = assetLoader.getLumaCanvas(this.canvasContext.canvas),
                a = n.getContext("2d");
              a.drawImage(this.canvasContext.canvas, 0, 0),
                this.clearCanvas(this.canvasContext),
                this.canvasContext.drawImage(n, 0, 0);
            }
            (this.canvasContext.globalCompositeOperation =
              operationsMap[this.data.tt]),
              this.canvasContext.drawImage(e, 0, 0),
              (this.canvasContext.globalCompositeOperation =
                "destination-over"),
              this.canvasContext.drawImage(this.buffers[0], 0, 0),
              this.canvasContext.setTransform(this.currentTransform),
              (this.canvasContext.globalCompositeOperation = "source-over");
          }
        },
        renderFrame: function (e) {
          if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !e)) {
            this.renderTransform(),
              this.renderRenderable(),
              this.renderLocalTransform(),
              this.setBlendMode();
            var i = this.data.ty === 0;
            this.prepareLayer(),
              this.globalData.renderer.save(i),
              this.globalData.renderer.ctxTransform(
                this.finalTransform.localMat.props
              ),
              this.globalData.renderer.ctxOpacity(
                this.finalTransform.localOpacity
              ),
              this.renderInnerContent(),
              this.globalData.renderer.restore(i),
              this.exitLayer(),
              this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
              this._isFirstFrame && (this._isFirstFrame = !1);
          }
        },
        destroy: function () {
          (this.canvasContext = null),
            (this.data = null),
            (this.globalData = null),
            this.maskManager.destroy();
        },
        mHelper: new Matrix(),
      }),
        (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
        (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement);
      function CVShapeData(t, e, i, r) {
        (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
        var n = 4;
        e.ty === "rc"
          ? (n = 5)
          : e.ty === "el"
          ? (n = 6)
          : e.ty === "sr" && (n = 7),
          (this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t));
        var a,
          s = i.length,
          o;
        for (a = 0; a < s; a += 1)
          i[a].closed ||
            ((o = {
              transforms: r.addTransformSequence(i[a].transforms),
              trNodes: [],
            }),
            this.styledShapes.push(o),
            i[a].elements.push(o));
      }
      CVShapeData.prototype.setAsAnimated =
        SVGShapeData.prototype.setAsAnimated;
      function CVShapeElement(t, e, i) {
        (this.shapes = []),
          (this.shapesData = t.shapes),
          (this.stylesList = []),
          (this.itemsData = []),
          (this.prevViewData = []),
          (this.shapeModifiers = []),
          (this.processedElements = []),
          (this.transformsManager = new ShapeTransformManager()),
          this.initElement(t, e, i);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          CVBaseElement,
          IShapeElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
        ],
        CVShapeElement
      ),
        (CVShapeElement.prototype.initElement =
          RenderableDOMElement.prototype.initElement),
        (CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }),
        (CVShapeElement.prototype.dashResetter = []),
        (CVShapeElement.prototype.createContent = function () {
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            !0,
            []
          );
        }),
        (CVShapeElement.prototype.createStyleElement = function (t, e) {
          var i = {
              data: t,
              type: t.ty,
              preTransforms: this.transformsManager.addTransformSequence(e),
              transforms: [],
              elements: [],
              closed: t.hd === !0,
            },
            r = {};
          if (
            (t.ty === "fl" || t.ty === "st"
              ? ((r.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                r.c.k ||
                  (i.co =
                    "rgb(" +
                    bmFloor(r.c.v[0]) +
                    "," +
                    bmFloor(r.c.v[1]) +
                    "," +
                    bmFloor(r.c.v[2]) +
                    ")"))
              : (t.ty === "gf" || t.ty === "gs") &&
                ((r.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                (r.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                (r.h = PropertyFactory.getProp(
                  this,
                  t.h || { k: 0 },
                  0,
                  0.01,
                  this
                )),
                (r.a = PropertyFactory.getProp(
                  this,
                  t.a || { k: 0 },
                  0,
                  degToRads,
                  this
                )),
                (r.g = new GradientProperty(this, t.g, this))),
            (r.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
            t.ty === "st" || t.ty === "gs")
          ) {
            if (
              ((i.lc = lineCapEnum[t.lc || 2]),
              (i.lj = lineJoinEnum[t.lj || 2]),
              t.lj == 1 && (i.ml = t.ml),
              (r.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
              r.w.k || (i.wi = r.w.v),
              t.d)
            ) {
              var n = new DashProperty(this, t.d, "canvas", this);
              (r.d = n),
                r.d.k || ((i.da = r.d.dashArray), (i.do = r.d.dashoffset[0]));
            }
          } else i.r = t.r === 2 ? "evenodd" : "nonzero";
          return this.stylesList.push(i), (r.style = i), r;
        }),
        (CVShapeElement.prototype.createGroupElement = function () {
          var t = { it: [], prevViewData: [] };
          return t;
        }),
        (CVShapeElement.prototype.createTransformElement = function (t) {
          var e = {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
              mProps: TransformPropertyFactory.getTransformProperty(
                this,
                t,
                this
              ),
            },
          };
          return e;
        }),
        (CVShapeElement.prototype.createShapeElement = function (t) {
          var e = new CVShapeData(
            this,
            t,
            this.stylesList,
            this.transformsManager
          );
          return this.shapes.push(e), this.addShapeToModifiers(e), e;
        }),
        (CVShapeElement.prototype.reloadShapes = function () {
          this._isFirstFrame = !0;
          var t,
            e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              !0,
              []
            ),
              e = this.dynamicProperties.length,
              t = 0;
            t < e;
            t += 1
          )
            this.dynamicProperties[t].getValue();
          this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame);
        }),
        (CVShapeElement.prototype.addTransformToStyleList = function (t) {
          var e,
            i = this.stylesList.length;
          for (e = 0; e < i; e += 1)
            this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
        }),
        (CVShapeElement.prototype.removeTransformFromStyleList = function () {
          var t,
            e = this.stylesList.length;
          for (t = 0; t < e; t += 1)
            this.stylesList[t].closed || this.stylesList[t].transforms.pop();
        }),
        (CVShapeElement.prototype.closeStyles = function (t) {
          var e,
            i = t.length;
          for (e = 0; e < i; e += 1) t[e].closed = !0;
        }),
        (CVShapeElement.prototype.searchShapes = function (t, e, i, r, n) {
          var a,
            s = t.length - 1,
            o,
            l,
            c = [],
            p = [],
            _,
            h,
            b,
            v = [].concat(n);
          for (a = s; a >= 0; a -= 1) {
            if (
              ((_ = this.searchProcessedElement(t[a])),
              _ ? (e[a] = i[_ - 1]) : (t[a]._shouldRender = r),
              t[a].ty === "fl" ||
                t[a].ty === "st" ||
                t[a].ty === "gf" ||
                t[a].ty === "gs")
            )
              _
                ? (e[a].style.closed = !1)
                : (e[a] = this.createStyleElement(t[a], v)),
                c.push(e[a].style);
            else if (t[a].ty === "gr") {
              if (!_) e[a] = this.createGroupElement(t[a]);
              else
                for (l = e[a].it.length, o = 0; o < l; o += 1)
                  e[a].prevViewData[o] = e[a].it[o];
              this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, r, v);
            } else
              t[a].ty === "tr"
                ? (_ || ((b = this.createTransformElement(t[a])), (e[a] = b)),
                  v.push(e[a]),
                  this.addTransformToStyleList(e[a]))
                : t[a].ty === "sh" ||
                  t[a].ty === "rc" ||
                  t[a].ty === "el" ||
                  t[a].ty === "sr"
                ? _ || (e[a] = this.createShapeElement(t[a]))
                : t[a].ty === "tm" ||
                  t[a].ty === "rd" ||
                  t[a].ty === "pb" ||
                  t[a].ty === "zz" ||
                  t[a].ty === "op"
                ? (_
                    ? ((h = e[a]), (h.closed = !1))
                    : ((h = ShapeModifiers.getModifier(t[a].ty)),
                      h.init(this, t[a]),
                      (e[a] = h),
                      this.shapeModifiers.push(h)),
                  p.push(h))
                : t[a].ty === "rp" &&
                  (_
                    ? ((h = e[a]), (h.closed = !0))
                    : ((h = ShapeModifiers.getModifier(t[a].ty)),
                      (e[a] = h),
                      h.init(this, t, a, e),
                      this.shapeModifiers.push(h),
                      (r = !1)),
                  p.push(h));
            this.addProcessedElement(t[a], a + 1);
          }
          for (
            this.removeTransformFromStyleList(),
              this.closeStyles(c),
              s = p.length,
              a = 0;
            a < s;
            a += 1
          )
            p[a].closed = !0;
        }),
        (CVShapeElement.prototype.renderInnerContent = function () {
          (this.transformHelper.opacity = 1),
            (this.transformHelper._opMdf = !1),
            this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame),
            this.renderShape(
              this.transformHelper,
              this.shapesData,
              this.itemsData,
              !0
            );
        }),
        (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) &&
            ((e.opacity = t.opacity), (e.opacity *= e.op.v), (e._opMdf = !0));
        }),
        (CVShapeElement.prototype.drawLayer = function () {
          var t,
            e = this.stylesList.length,
            i,
            r,
            n,
            a,
            s,
            o,
            l = this.globalData.renderer,
            c = this.globalData.canvasContext,
            p,
            _;
          for (t = 0; t < e; t += 1)
            if (
              ((_ = this.stylesList[t]),
              (p = _.type),
              !(
                ((p === "st" || p === "gs") && _.wi === 0) ||
                !_.data._shouldRender ||
                _.coOp === 0 ||
                this.globalData.currentGlobalAlpha === 0
              ))
            ) {
              for (
                l.save(),
                  s = _.elements,
                  p === "st" || p === "gs"
                    ? (l.ctxStrokeStyle(p === "st" ? _.co : _.grd),
                      l.ctxLineWidth(_.wi),
                      l.ctxLineCap(_.lc),
                      l.ctxLineJoin(_.lj),
                      l.ctxMiterLimit(_.ml || 0))
                    : l.ctxFillStyle(p === "fl" ? _.co : _.grd),
                  l.ctxOpacity(_.coOp),
                  p !== "st" && p !== "gs" && c.beginPath(),
                  l.ctxTransform(_.preTransforms.finalTransform.props),
                  r = s.length,
                  i = 0;
                i < r;
                i += 1
              ) {
                for (
                  (p === "st" || p === "gs") &&
                    (c.beginPath(),
                    _.da && (c.setLineDash(_.da), (c.lineDashOffset = _.do))),
                    o = s[i].trNodes,
                    a = o.length,
                    n = 0;
                  n < a;
                  n += 1
                )
                  o[n].t === "m"
                    ? c.moveTo(o[n].p[0], o[n].p[1])
                    : o[n].t === "c"
                    ? c.bezierCurveTo(
                        o[n].pts[0],
                        o[n].pts[1],
                        o[n].pts[2],
                        o[n].pts[3],
                        o[n].pts[4],
                        o[n].pts[5]
                      )
                    : c.closePath();
                (p === "st" || p === "gs") &&
                  (l.ctxStroke(), _.da && c.setLineDash(this.dashResetter));
              }
              p !== "st" && p !== "gs" && this.globalData.renderer.ctxFill(_.r),
                l.restore();
            }
        }),
        (CVShapeElement.prototype.renderShape = function (t, e, i, r) {
          var n,
            a = e.length - 1,
            s;
          for (s = t, n = a; n >= 0; n -= 1)
            e[n].ty === "tr"
              ? ((s = i[n].transform), this.renderShapeTransform(t, s))
              : e[n].ty === "sh" ||
                e[n].ty === "el" ||
                e[n].ty === "rc" ||
                e[n].ty === "sr"
              ? this.renderPath(e[n], i[n])
              : e[n].ty === "fl"
              ? this.renderFill(e[n], i[n], s)
              : e[n].ty === "st"
              ? this.renderStroke(e[n], i[n], s)
              : e[n].ty === "gf" || e[n].ty === "gs"
              ? this.renderGradientFill(e[n], i[n], s)
              : e[n].ty === "gr"
              ? this.renderShape(s, e[n].it, i[n].it)
              : e[n].ty;
          r && this.drawLayer();
        }),
        (CVShapeElement.prototype.renderStyledShape = function (t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var i = t.trNodes,
              r = e.paths,
              n,
              a,
              s,
              o = r._length;
            i.length = 0;
            var l = t.transforms.finalTransform;
            for (s = 0; s < o; s += 1) {
              var c = r.shapes[s];
              if (c && c.v) {
                for (a = c._length, n = 1; n < a; n += 1)
                  n === 1 &&
                    i.push({
                      t: "m",
                      p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0),
                    }),
                    i.push({
                      t: "c",
                      pts: l.applyToTriplePoints(c.o[n - 1], c.i[n], c.v[n]),
                    });
                a === 1 &&
                  i.push({
                    t: "m",
                    p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0),
                  }),
                  c.c &&
                    a &&
                    (i.push({
                      t: "c",
                      pts: l.applyToTriplePoints(c.o[n - 1], c.i[0], c.v[0]),
                    }),
                    i.push({ t: "z" }));
              }
            }
            t.trNodes = i;
          }
        }),
        (CVShapeElement.prototype.renderPath = function (t, e) {
          if (t.hd !== !0 && t._shouldRender) {
            var i,
              r = e.styledShapes.length;
            for (i = 0; i < r; i += 1)
              this.renderStyledShape(e.styledShapes[i], e.sh);
          }
        }),
        (CVShapeElement.prototype.renderFill = function (t, e, i) {
          var r = e.style;
          (e.c._mdf || this._isFirstFrame) &&
            (r.co =
              "rgb(" +
              bmFloor(e.c.v[0]) +
              "," +
              bmFloor(e.c.v[1]) +
              "," +
              bmFloor(e.c.v[2]) +
              ")"),
            (e.o._mdf || i._opMdf || this._isFirstFrame) &&
              (r.coOp = e.o.v * i.opacity);
        }),
        (CVShapeElement.prototype.renderGradientFill = function (t, e, i) {
          var r = e.style,
            n;
          if (
            !r.grd ||
            e.g._mdf ||
            e.s._mdf ||
            e.e._mdf ||
            (t.t !== 1 && (e.h._mdf || e.a._mdf))
          ) {
            var a = this.globalData.canvasContext,
              s = e.s.v,
              o = e.e.v;
            if (t.t === 1) n = a.createLinearGradient(s[0], s[1], o[0], o[1]);
            else {
              var l = Math.sqrt(
                  Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)
                ),
                c = Math.atan2(o[1] - s[1], o[0] - s[0]),
                p = e.h.v;
              p >= 1 ? (p = 0.99) : p <= -1 && (p = -0.99);
              var _ = l * p,
                h = Math.cos(c + e.a.v) * _ + s[0],
                b = Math.sin(c + e.a.v) * _ + s[1];
              n = a.createRadialGradient(h, b, 0, s[0], s[1], l);
            }
            var v,
              f = t.g.p,
              E = e.g.c,
              d = 1;
            for (v = 0; v < f; v += 1)
              e.g._hasOpacity && e.g._collapsable && (d = e.g.o[v * 2 + 1]),
                n.addColorStop(
                  E[v * 4] / 100,
                  "rgba(" +
                    E[v * 4 + 1] +
                    "," +
                    E[v * 4 + 2] +
                    "," +
                    E[v * 4 + 3] +
                    "," +
                    d +
                    ")"
                );
            r.grd = n;
          }
          r.coOp = e.o.v * i.opacity;
        }),
        (CVShapeElement.prototype.renderStroke = function (t, e, i) {
          var r = e.style,
            n = e.d;
          n &&
            (n._mdf || this._isFirstFrame) &&
            ((r.da = n.dashArray), (r.do = n.dashoffset[0])),
            (e.c._mdf || this._isFirstFrame) &&
              (r.co =
                "rgb(" +
                bmFloor(e.c.v[0]) +
                "," +
                bmFloor(e.c.v[1]) +
                "," +
                bmFloor(e.c.v[2]) +
                ")"),
            (e.o._mdf || i._opMdf || this._isFirstFrame) &&
              (r.coOp = e.o.v * i.opacity),
            (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v);
        }),
        (CVShapeElement.prototype.destroy = function () {
          (this.shapesData = null),
            (this.globalData = null),
            (this.canvasContext = null),
            (this.stylesList.length = 0),
            (this.itemsData.length = 0);
        });
      function CVTextElement(t, e, i) {
        (this.textSpans = []),
          (this.yOffset = 0),
          (this.fillColorAnim = !1),
          (this.strokeColorAnim = !1),
          (this.strokeWidthAnim = !1),
          (this.stroke = !1),
          (this.fill = !1),
          (this.justifyOffset = 0),
          (this.currentRender = null),
          (this.renderType = "canvas"),
          (this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: "",
          }),
          this.initElement(t, e, i);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          CVBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
          ITextElement,
        ],
        CVTextElement
      ),
        (CVTextElement.prototype.tHelper =
          createTag("canvas").getContext("2d")),
        (CVTextElement.prototype.buildNewText = function () {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = !1;
          t.fc
            ? ((e = !0), (this.values.fill = this.buildColor(t.fc)))
            : (this.values.fill = "rgba(0,0,0,0)"),
            (this.fill = e);
          var i = !1;
          t.sc &&
            ((i = !0),
            (this.values.stroke = this.buildColor(t.sc)),
            (this.values.sWidth = t.sw));
          var r = this.globalData.fontManager.getFontByName(t.f),
            n,
            a,
            s = t.l,
            o = this.mHelper;
          (this.stroke = i),
            (this.values.fValue =
              t.finalSize +
              "px " +
              this.globalData.fontManager.getFontByName(t.f).fFamily),
            (a = t.finalText.length);
          var l,
            c,
            p,
            _,
            h,
            b,
            v,
            f,
            E,
            d,
            u = this.data.singleShape,
            m = t.tr * 0.001 * t.finalSize,
            y = 0,
            C = 0,
            P = !0,
            T = 0;
          for (n = 0; n < a; n += 1) {
            (l = this.globalData.fontManager.getCharData(
              t.finalText[n],
              r.fStyle,
              this.globalData.fontManager.getFontByName(t.f).fFamily
            )),
              (c = (l && l.data) || {}),
              o.reset(),
              u &&
                s[n].n &&
                ((y = -m), (C += t.yOffset), (C += P ? 1 : 0), (P = !1)),
              (h = c.shapes ? c.shapes[0].it : []),
              (v = h.length),
              o.scale(t.finalSize / 100, t.finalSize / 100),
              u && this.applyTextPropertiesToMatrix(t, o, s[n].line, y, C),
              (E = createSizedArray(v - 1));
            var M = 0;
            for (b = 0; b < v; b += 1)
              if (h[b].ty === "sh") {
                for (
                  _ = h[b].ks.k.i.length, f = h[b].ks.k, d = [], p = 1;
                  p < _;
                  p += 1
                )
                  p === 1 &&
                    d.push(
                      o.applyToX(f.v[0][0], f.v[0][1], 0),
                      o.applyToY(f.v[0][0], f.v[0][1], 0)
                    ),
                    d.push(
                      o.applyToX(f.o[p - 1][0], f.o[p - 1][1], 0),
                      o.applyToY(f.o[p - 1][0], f.o[p - 1][1], 0),
                      o.applyToX(f.i[p][0], f.i[p][1], 0),
                      o.applyToY(f.i[p][0], f.i[p][1], 0),
                      o.applyToX(f.v[p][0], f.v[p][1], 0),
                      o.applyToY(f.v[p][0], f.v[p][1], 0)
                    );
                d.push(
                  o.applyToX(f.o[p - 1][0], f.o[p - 1][1], 0),
                  o.applyToY(f.o[p - 1][0], f.o[p - 1][1], 0),
                  o.applyToX(f.i[0][0], f.i[0][1], 0),
                  o.applyToY(f.i[0][0], f.i[0][1], 0),
                  o.applyToX(f.v[0][0], f.v[0][1], 0),
                  o.applyToY(f.v[0][0], f.v[0][1], 0)
                ),
                  (E[M] = d),
                  (M += 1);
              }
            u && ((y += s[n].l), (y += m)),
              this.textSpans[T]
                ? (this.textSpans[T].elem = E)
                : (this.textSpans[T] = { elem: E }),
              (T += 1);
          }
        }),
        (CVTextElement.prototype.renderInnerContent = function () {
          this.validateText();
          var t = this.canvasContext;
          (t.font = this.values.fValue),
            this.globalData.renderer.ctxLineCap("butt"),
            this.globalData.renderer.ctxLineJoin("miter"),
            this.globalData.renderer.ctxMiterLimit(4),
            this.data.singleShape ||
              this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              );
          var e,
            i,
            r,
            n,
            a,
            s,
            o = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
          i = l.length;
          var c,
            p = null,
            _ = null,
            h = null,
            b,
            v,
            f = this.globalData.renderer;
          for (e = 0; e < i; e += 1)
            if (!l[e].n) {
              if (
                ((c = o[e]),
                c && (f.save(), f.ctxTransform(c.p), f.ctxOpacity(c.o)),
                this.fill)
              ) {
                for (
                  c && c.fc
                    ? p !== c.fc && (f.ctxFillStyle(c.fc), (p = c.fc))
                    : p !== this.values.fill &&
                      ((p = this.values.fill),
                      f.ctxFillStyle(this.values.fill)),
                    b = this.textSpans[e].elem,
                    n = b.length,
                    this.globalData.canvasContext.beginPath(),
                    r = 0;
                  r < n;
                  r += 1
                )
                  for (
                    v = b[r],
                      s = v.length,
                      this.globalData.canvasContext.moveTo(v[0], v[1]),
                      a = 2;
                    a < s;
                    a += 6
                  )
                    this.globalData.canvasContext.bezierCurveTo(
                      v[a],
                      v[a + 1],
                      v[a + 2],
                      v[a + 3],
                      v[a + 4],
                      v[a + 5]
                    );
                this.globalData.canvasContext.closePath(), f.ctxFill();
              }
              if (this.stroke) {
                for (
                  c && c.sw
                    ? h !== c.sw && ((h = c.sw), f.ctxLineWidth(c.sw))
                    : h !== this.values.sWidth &&
                      ((h = this.values.sWidth),
                      f.ctxLineWidth(this.values.sWidth)),
                    c && c.sc
                      ? _ !== c.sc && ((_ = c.sc), f.ctxStrokeStyle(c.sc))
                      : _ !== this.values.stroke &&
                        ((_ = this.values.stroke),
                        f.ctxStrokeStyle(this.values.stroke)),
                    b = this.textSpans[e].elem,
                    n = b.length,
                    this.globalData.canvasContext.beginPath(),
                    r = 0;
                  r < n;
                  r += 1
                )
                  for (
                    v = b[r],
                      s = v.length,
                      this.globalData.canvasContext.moveTo(v[0], v[1]),
                      a = 2;
                    a < s;
                    a += 6
                  )
                    this.globalData.canvasContext.bezierCurveTo(
                      v[a],
                      v[a + 1],
                      v[a + 2],
                      v[a + 3],
                      v[a + 4],
                      v[a + 5]
                    );
                this.globalData.canvasContext.closePath(), f.ctxStroke();
              }
              c && this.globalData.renderer.restore();
            }
        });
      function CVImageElement(t, e, i) {
        (this.assetData = e.getAssetData(t.refId)),
          (this.img = e.imageLoader.getAsset(this.assetData)),
          this.initElement(t, e, i);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          CVBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
        ],
        CVImageElement
      ),
        (CVImageElement.prototype.initElement =
          SVGShapeElement.prototype.initElement),
        (CVImageElement.prototype.prepareFrame =
          IImageElement.prototype.prepareFrame),
        (CVImageElement.prototype.createContent = function () {
          if (
            this.img.width &&
            (this.assetData.w !== this.img.width ||
              this.assetData.h !== this.img.height)
          ) {
            var t = createTag("canvas");
            (t.width = this.assetData.w), (t.height = this.assetData.h);
            var e = t.getContext("2d"),
              i = this.img.width,
              r = this.img.height,
              n = i / r,
              a = this.assetData.w / this.assetData.h,
              s,
              o,
              l =
                this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio;
            (n > a && l === "xMidYMid slice") ||
            (n < a && l !== "xMidYMid slice")
              ? ((o = r), (s = o * a))
              : ((s = i), (o = s / a)),
              e.drawImage(
                this.img,
                (i - s) / 2,
                (r - o) / 2,
                s,
                o,
                0,
                0,
                this.assetData.w,
                this.assetData.h
              ),
              (this.img = t);
          }
        }),
        (CVImageElement.prototype.renderInnerContent = function () {
          this.canvasContext.drawImage(this.img, 0, 0);
        }),
        (CVImageElement.prototype.destroy = function () {
          this.img = null;
        });
      function CVSolidElement(t, e, i) {
        this.initElement(t, e, i);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          CVBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
        ],
        CVSolidElement
      ),
        (CVSolidElement.prototype.initElement =
          SVGShapeElement.prototype.initElement),
        (CVSolidElement.prototype.prepareFrame =
          IImageElement.prototype.prepareFrame),
        (CVSolidElement.prototype.renderInnerContent = function () {
          this.globalData.renderer.ctxFillStyle(this.data.sc),
            this.globalData.renderer.ctxFillRect(
              0,
              0,
              this.data.sw,
              this.data.sh
            );
        });
      function CanvasRendererBase() {}
      extendPrototype([BaseRenderer], CanvasRendererBase),
        (CanvasRendererBase.prototype.createShape = function (t) {
          return new CVShapeElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createText = function (t) {
          return new CVTextElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createImage = function (t) {
          return new CVImageElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createSolid = function (t) {
          return new CVSolidElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createNull =
          SVGRenderer.prototype.createNull),
        (CanvasRendererBase.prototype.ctxTransform = function (t) {
          (t[0] === 1 &&
            t[1] === 0 &&
            t[4] === 0 &&
            t[5] === 1 &&
            t[12] === 0 &&
            t[13] === 0) ||
            this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
        }),
        (CanvasRendererBase.prototype.ctxOpacity = function (t) {
          this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
        }),
        (CanvasRendererBase.prototype.ctxFillStyle = function (t) {
          this.canvasContext.fillStyle = t;
        }),
        (CanvasRendererBase.prototype.ctxStrokeStyle = function (t) {
          this.canvasContext.strokeStyle = t;
        }),
        (CanvasRendererBase.prototype.ctxLineWidth = function (t) {
          this.canvasContext.lineWidth = t;
        }),
        (CanvasRendererBase.prototype.ctxLineCap = function (t) {
          this.canvasContext.lineCap = t;
        }),
        (CanvasRendererBase.prototype.ctxLineJoin = function (t) {
          this.canvasContext.lineJoin = t;
        }),
        (CanvasRendererBase.prototype.ctxMiterLimit = function (t) {
          this.canvasContext.miterLimit = t;
        }),
        (CanvasRendererBase.prototype.ctxFill = function (t) {
          this.canvasContext.fill(t);
        }),
        (CanvasRendererBase.prototype.ctxFillRect = function (t, e, i, r) {
          this.canvasContext.fillRect(t, e, i, r);
        }),
        (CanvasRendererBase.prototype.ctxStroke = function () {
          this.canvasContext.stroke();
        }),
        (CanvasRendererBase.prototype.reset = function () {
          if (!this.renderConfig.clearCanvas) {
            this.canvasContext.restore();
            return;
          }
          this.contextData.reset();
        }),
        (CanvasRendererBase.prototype.save = function () {
          this.canvasContext.save();
        }),
        (CanvasRendererBase.prototype.restore = function (t) {
          if (!this.renderConfig.clearCanvas) {
            this.canvasContext.restore();
            return;
          }
          t && (this.globalData.blendMode = "source-over"),
            this.contextData.restore(t);
        }),
        (CanvasRendererBase.prototype.configAnimation = function (t) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var e = this.animationItem.container.style;
            (e.width = "100%"), (e.height = "100%");
            var i = "0px 0px 0px";
            (e.transformOrigin = i),
              (e.mozTransformOrigin = i),
              (e.webkitTransformOrigin = i),
              (e["-webkit-transform"] = i),
              (e.contentVisibility = this.renderConfig.contentVisibility),
              this.animationItem.wrapper.appendChild(
                this.animationItem.container
              ),
              (this.canvasContext =
                this.animationItem.container.getContext("2d")),
              this.renderConfig.className &&
                this.animationItem.container.setAttribute(
                  "class",
                  this.renderConfig.className
                ),
              this.renderConfig.id &&
                this.animationItem.container.setAttribute(
                  "id",
                  this.renderConfig.id
                );
          } else this.canvasContext = this.renderConfig.context;
          this.contextData.setContext(this.canvasContext),
            (this.data = t),
            (this.layers = t.layers),
            (this.transformCanvas = {
              w: t.w,
              h: t.h,
              sx: 0,
              sy: 0,
              tx: 0,
              ty: 0,
            }),
            this.setupGlobalData(t, document.body),
            (this.globalData.canvasContext = this.canvasContext),
            (this.globalData.renderer = this),
            (this.globalData.isDashed = !1),
            (this.globalData.progressiveLoad =
              this.renderConfig.progressiveLoad),
            (this.globalData.transformCanvas = this.transformCanvas),
            (this.elements = createSizedArray(t.layers.length)),
            this.updateContainerSize();
        }),
        (CanvasRendererBase.prototype.updateContainerSize = function (t, e) {
          this.reset();
          var i, r;
          t
            ? ((i = t),
              (r = e),
              (this.canvasContext.canvas.width = i),
              (this.canvasContext.canvas.height = r))
            : (this.animationItem.wrapper && this.animationItem.container
                ? ((i = this.animationItem.wrapper.offsetWidth),
                  (r = this.animationItem.wrapper.offsetHeight))
                : ((i = this.canvasContext.canvas.width),
                  (r = this.canvasContext.canvas.height)),
              (this.canvasContext.canvas.width = i * this.renderConfig.dpr),
              (this.canvasContext.canvas.height = r * this.renderConfig.dpr));
          var n, a;
          if (
            this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 ||
            this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1
          ) {
            var s = this.renderConfig.preserveAspectRatio.split(" "),
              o = s[1] || "meet",
              l = s[0] || "xMidYMid",
              c = l.substr(0, 4),
              p = l.substr(4);
            (n = i / r),
              (a = this.transformCanvas.w / this.transformCanvas.h),
              (a > n && o === "meet") || (a < n && o === "slice")
                ? ((this.transformCanvas.sx =
                    i / (this.transformCanvas.w / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    i / (this.transformCanvas.w / this.renderConfig.dpr)))
                : ((this.transformCanvas.sx =
                    r / (this.transformCanvas.h / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    r / (this.transformCanvas.h / this.renderConfig.dpr))),
              c === "xMid" &&
              ((a < n && o === "meet") || (a > n && o === "slice"))
                ? (this.transformCanvas.tx =
                    ((i -
                      this.transformCanvas.w * (r / this.transformCanvas.h)) /
                      2) *
                    this.renderConfig.dpr)
                : c === "xMax" &&
                  ((a < n && o === "meet") || (a > n && o === "slice"))
                ? (this.transformCanvas.tx =
                    (i -
                      this.transformCanvas.w * (r / this.transformCanvas.h)) *
                    this.renderConfig.dpr)
                : (this.transformCanvas.tx = 0),
              p === "YMid" &&
              ((a > n && o === "meet") || (a < n && o === "slice"))
                ? (this.transformCanvas.ty =
                    ((r -
                      this.transformCanvas.h * (i / this.transformCanvas.w)) /
                      2) *
                    this.renderConfig.dpr)
                : p === "YMax" &&
                  ((a > n && o === "meet") || (a < n && o === "slice"))
                ? (this.transformCanvas.ty =
                    (r -
                      this.transformCanvas.h * (i / this.transformCanvas.w)) *
                    this.renderConfig.dpr)
                : (this.transformCanvas.ty = 0);
          } else
            this.renderConfig.preserveAspectRatio === "none"
              ? ((this.transformCanvas.sx =
                  i / (this.transformCanvas.w / this.renderConfig.dpr)),
                (this.transformCanvas.sy =
                  r / (this.transformCanvas.h / this.renderConfig.dpr)),
                (this.transformCanvas.tx = 0),
                (this.transformCanvas.ty = 0))
              : ((this.transformCanvas.sx = this.renderConfig.dpr),
                (this.transformCanvas.sy = this.renderConfig.dpr),
                (this.transformCanvas.tx = 0),
                (this.transformCanvas.ty = 0));
          (this.transformCanvas.props = [
            this.transformCanvas.sx,
            0,
            0,
            0,
            0,
            this.transformCanvas.sy,
            0,
            0,
            0,
            0,
            1,
            0,
            this.transformCanvas.tx,
            this.transformCanvas.ty,
            0,
            1,
          ]),
            this.ctxTransform(this.transformCanvas.props),
            this.canvasContext.beginPath(),
            this.canvasContext.rect(
              0,
              0,
              this.transformCanvas.w,
              this.transformCanvas.h
            ),
            this.canvasContext.closePath(),
            this.canvasContext.clip(),
            this.renderFrame(this.renderedFrame, !0);
        }),
        (CanvasRendererBase.prototype.destroy = function () {
          this.renderConfig.clearCanvas &&
            this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = "");
          var t,
            e = this.layers ? this.layers.length : 0;
          for (t = e - 1; t >= 0; t -= 1)
            this.elements[t] &&
              this.elements[t].destroy &&
              this.elements[t].destroy();
          (this.elements.length = 0),
            (this.globalData.canvasContext = null),
            (this.animationItem.container = null),
            (this.destroyed = !0);
        }),
        (CanvasRendererBase.prototype.renderFrame = function (t, e) {
          if (
            !(
              (this.renderedFrame === t &&
                this.renderConfig.clearCanvas === !0 &&
                !e) ||
              this.destroyed ||
              t === -1
            )
          ) {
            (this.renderedFrame = t),
              (this.globalData.frameNum = t - this.animationItem._isFirstFrame),
              (this.globalData.frameId += 1),
              (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
              (this.globalData.projectInterface.currentFrame = t);
            var i,
              r = this.layers.length;
            for (
              this.completeLayers || this.checkLayers(t), i = r - 1;
              i >= 0;
              i -= 1
            )
              (this.completeLayers || this.elements[i]) &&
                this.elements[i].prepareFrame(t - this.layers[i].st);
            if (this.globalData._mdf) {
              for (
                this.renderConfig.clearCanvas === !0
                  ? this.canvasContext.clearRect(
                      0,
                      0,
                      this.transformCanvas.w,
                      this.transformCanvas.h
                    )
                  : this.save(),
                  i = r - 1;
                i >= 0;
                i -= 1
              )
                (this.completeLayers || this.elements[i]) &&
                  this.elements[i].renderFrame();
              this.renderConfig.clearCanvas !== !0 && this.restore();
            }
          }
        }),
        (CanvasRendererBase.prototype.buildItem = function (t) {
          var e = this.elements;
          if (!(e[t] || this.layers[t].ty === 99)) {
            var i = this.createItem(this.layers[t], this, this.globalData);
            (e[t] = i), i.initExpressions();
          }
        }),
        (CanvasRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var t = this.pendingElements.pop();
            t.checkParenting();
          }
        }),
        (CanvasRendererBase.prototype.hide = function () {
          this.animationItem.container.style.display = "none";
        }),
        (CanvasRendererBase.prototype.show = function () {
          this.animationItem.container.style.display = "block";
        });
      function CanvasContext() {
        (this.opacity = -1),
          (this.transform = createTypedArray("float32", 16)),
          (this.fillStyle = ""),
          (this.strokeStyle = ""),
          (this.lineWidth = ""),
          (this.lineCap = ""),
          (this.lineJoin = ""),
          (this.miterLimit = ""),
          (this.id = Math.random());
      }
      function CVContextData() {
        (this.stack = []), (this.cArrPos = 0), (this.cTr = new Matrix());
        var t,
          e = 15;
        for (t = 0; t < e; t += 1) {
          var i = new CanvasContext();
          this.stack[t] = i;
        }
        (this._length = e),
          (this.nativeContext = null),
          (this.transformMat = new Matrix()),
          (this.currentOpacity = 1),
          (this.currentFillStyle = ""),
          (this.appliedFillStyle = ""),
          (this.currentStrokeStyle = ""),
          (this.appliedStrokeStyle = ""),
          (this.currentLineWidth = ""),
          (this.appliedLineWidth = ""),
          (this.currentLineCap = ""),
          (this.appliedLineCap = ""),
          (this.currentLineJoin = ""),
          (this.appliedLineJoin = ""),
          (this.appliedMiterLimit = ""),
          (this.currentMiterLimit = "");
      }
      (CVContextData.prototype.duplicate = function () {
        var t = this._length * 2,
          e = 0;
        for (e = this._length; e < t; e += 1)
          this.stack[e] = new CanvasContext();
        this._length = t;
      }),
        (CVContextData.prototype.reset = function () {
          (this.cArrPos = 0),
            this.cTr.reset(),
            (this.stack[this.cArrPos].opacity = 1);
        }),
        (CVContextData.prototype.restore = function (t) {
          this.cArrPos -= 1;
          var e = this.stack[this.cArrPos],
            i = e.transform,
            r,
            n = this.cTr.props;
          for (r = 0; r < 16; r += 1) n[r] = i[r];
          if (t) {
            this.nativeContext.restore();
            var a = this.stack[this.cArrPos + 1];
            (this.appliedFillStyle = a.fillStyle),
              (this.appliedStrokeStyle = a.strokeStyle),
              (this.appliedLineWidth = a.lineWidth),
              (this.appliedLineCap = a.lineCap),
              (this.appliedLineJoin = a.lineJoin),
              (this.appliedMiterLimit = a.miterLimit);
          }
          this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]),
            (t || (e.opacity !== -1 && this.currentOpacity !== e.opacity)) &&
              ((this.nativeContext.globalAlpha = e.opacity),
              (this.currentOpacity = e.opacity)),
            (this.currentFillStyle = e.fillStyle),
            (this.currentStrokeStyle = e.strokeStyle),
            (this.currentLineWidth = e.lineWidth),
            (this.currentLineCap = e.lineCap),
            (this.currentLineJoin = e.lineJoin),
            (this.currentMiterLimit = e.miterLimit);
        }),
        (CVContextData.prototype.save = function (t) {
          t && this.nativeContext.save();
          var e = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var i = this.stack[this.cArrPos],
            r;
          for (r = 0; r < 16; r += 1) i.transform[r] = e[r];
          this.cArrPos += 1;
          var n = this.stack[this.cArrPos];
          (n.opacity = i.opacity),
            (n.fillStyle = i.fillStyle),
            (n.strokeStyle = i.strokeStyle),
            (n.lineWidth = i.lineWidth),
            (n.lineCap = i.lineCap),
            (n.lineJoin = i.lineJoin),
            (n.miterLimit = i.miterLimit);
        }),
        (CVContextData.prototype.setOpacity = function (t) {
          this.stack[this.cArrPos].opacity = t;
        }),
        (CVContextData.prototype.setContext = function (t) {
          this.nativeContext = t;
        }),
        (CVContextData.prototype.fillStyle = function (t) {
          this.stack[this.cArrPos].fillStyle !== t &&
            ((this.currentFillStyle = t),
            (this.stack[this.cArrPos].fillStyle = t));
        }),
        (CVContextData.prototype.strokeStyle = function (t) {
          this.stack[this.cArrPos].strokeStyle !== t &&
            ((this.currentStrokeStyle = t),
            (this.stack[this.cArrPos].strokeStyle = t));
        }),
        (CVContextData.prototype.lineWidth = function (t) {
          this.stack[this.cArrPos].lineWidth !== t &&
            ((this.currentLineWidth = t),
            (this.stack[this.cArrPos].lineWidth = t));
        }),
        (CVContextData.prototype.lineCap = function (t) {
          this.stack[this.cArrPos].lineCap !== t &&
            ((this.currentLineCap = t), (this.stack[this.cArrPos].lineCap = t));
        }),
        (CVContextData.prototype.lineJoin = function (t) {
          this.stack[this.cArrPos].lineJoin !== t &&
            ((this.currentLineJoin = t),
            (this.stack[this.cArrPos].lineJoin = t));
        }),
        (CVContextData.prototype.miterLimit = function (t) {
          this.stack[this.cArrPos].miterLimit !== t &&
            ((this.currentMiterLimit = t),
            (this.stack[this.cArrPos].miterLimit = t));
        }),
        (CVContextData.prototype.transform = function (t) {
          this.transformMat.cloneFromProps(t);
          var e = this.cTr;
          this.transformMat.multiply(e),
            e.cloneFromProps(this.transformMat.props);
          var i = e.props;
          this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]);
        }),
        (CVContextData.prototype.opacity = function (t) {
          var e = this.stack[this.cArrPos].opacity;
          (e *= t < 0 ? 0 : t),
            this.stack[this.cArrPos].opacity !== e &&
              (this.currentOpacity !== t &&
                ((this.nativeContext.globalAlpha = t),
                (this.currentOpacity = t)),
              (this.stack[this.cArrPos].opacity = e));
        }),
        (CVContextData.prototype.fill = function (t) {
          this.appliedFillStyle !== this.currentFillStyle &&
            ((this.appliedFillStyle = this.currentFillStyle),
            (this.nativeContext.fillStyle = this.appliedFillStyle)),
            this.nativeContext.fill(t);
        }),
        (CVContextData.prototype.fillRect = function (t, e, i, r) {
          this.appliedFillStyle !== this.currentFillStyle &&
            ((this.appliedFillStyle = this.currentFillStyle),
            (this.nativeContext.fillStyle = this.appliedFillStyle)),
            this.nativeContext.fillRect(t, e, i, r);
        }),
        (CVContextData.prototype.stroke = function () {
          this.appliedStrokeStyle !== this.currentStrokeStyle &&
            ((this.appliedStrokeStyle = this.currentStrokeStyle),
            (this.nativeContext.strokeStyle = this.appliedStrokeStyle)),
            this.appliedLineWidth !== this.currentLineWidth &&
              ((this.appliedLineWidth = this.currentLineWidth),
              (this.nativeContext.lineWidth = this.appliedLineWidth)),
            this.appliedLineCap !== this.currentLineCap &&
              ((this.appliedLineCap = this.currentLineCap),
              (this.nativeContext.lineCap = this.appliedLineCap)),
            this.appliedLineJoin !== this.currentLineJoin &&
              ((this.appliedLineJoin = this.currentLineJoin),
              (this.nativeContext.lineJoin = this.appliedLineJoin)),
            this.appliedMiterLimit !== this.currentMiterLimit &&
              ((this.appliedMiterLimit = this.currentMiterLimit),
              (this.nativeContext.miterLimit = this.appliedMiterLimit)),
            this.nativeContext.stroke();
        });
      function CVCompElement(t, e, i) {
        (this.completeLayers = !1),
          (this.layers = t.layers),
          (this.pendingElements = []),
          (this.elements = createSizedArray(this.layers.length)),
          this.initElement(t, e, i),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 });
      }
      extendPrototype(
        [CanvasRendererBase, ICompElement, CVBaseElement],
        CVCompElement
      ),
        (CVCompElement.prototype.renderInnerContent = function () {
          var t = this.canvasContext;
          t.beginPath(),
            t.moveTo(0, 0),
            t.lineTo(this.data.w, 0),
            t.lineTo(this.data.w, this.data.h),
            t.lineTo(0, this.data.h),
            t.lineTo(0, 0),
            t.clip();
          var e,
            i = this.layers.length;
          for (e = i - 1; e >= 0; e -= 1)
            (this.completeLayers || this.elements[e]) &&
              this.elements[e].renderFrame();
        }),
        (CVCompElement.prototype.destroy = function () {
          var t,
            e = this.layers.length;
          for (t = e - 1; t >= 0; t -= 1)
            this.elements[t] && this.elements[t].destroy();
          (this.layers = null), (this.elements = null);
        }),
        (CVCompElement.prototype.createComp = function (t) {
          return new CVCompElement(t, this.globalData, this);
        });
      function CanvasRenderer(t, e) {
        (this.animationItem = t),
          (this.renderConfig = {
            clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : !0,
            context: (e && e.context) || null,
            progressiveLoad: (e && e.progressiveLoad) || !1,
            preserveAspectRatio:
              (e && e.preserveAspectRatio) || "xMidYMid meet",
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
            contentVisibility: (e && e.contentVisibility) || "visible",
            className: (e && e.className) || "",
            id: (e && e.id) || "",
            runExpressions:
              !e || e.runExpressions === void 0 || e.runExpressions,
          }),
          (this.renderConfig.dpr = (e && e.dpr) || 1),
          this.animationItem.wrapper &&
            (this.renderConfig.dpr =
              (e && e.dpr) || window.devicePixelRatio || 1),
          (this.renderedFrame = -1),
          (this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1,
          }),
          (this.contextData = new CVContextData()),
          (this.elements = []),
          (this.pendingElements = []),
          (this.transformMat = new Matrix()),
          (this.completeLayers = !1),
          (this.rendererType = "canvas"),
          this.renderConfig.clearCanvas &&
            ((this.ctxTransform = this.contextData.transform.bind(
              this.contextData
            )),
            (this.ctxOpacity = this.contextData.opacity.bind(this.contextData)),
            (this.ctxFillStyle = this.contextData.fillStyle.bind(
              this.contextData
            )),
            (this.ctxStrokeStyle = this.contextData.strokeStyle.bind(
              this.contextData
            )),
            (this.ctxLineWidth = this.contextData.lineWidth.bind(
              this.contextData
            )),
            (this.ctxLineCap = this.contextData.lineCap.bind(this.contextData)),
            (this.ctxLineJoin = this.contextData.lineJoin.bind(
              this.contextData
            )),
            (this.ctxMiterLimit = this.contextData.miterLimit.bind(
              this.contextData
            )),
            (this.ctxFill = this.contextData.fill.bind(this.contextData)),
            (this.ctxFillRect = this.contextData.fillRect.bind(
              this.contextData
            )),
            (this.ctxStroke = this.contextData.stroke.bind(this.contextData)),
            (this.save = this.contextData.save.bind(this.contextData)));
      }
      extendPrototype([CanvasRendererBase], CanvasRenderer),
        (CanvasRenderer.prototype.createComp = function (t) {
          return new CVCompElement(t, this.globalData, this);
        });
      function HBaseElement() {}
      (HBaseElement.prototype = {
        checkBlendMode: function () {},
        initRendererElement: function () {
          (this.baseElement = createTag(this.data.tg || "div")),
            this.data.hasMask
              ? ((this.svgElement = createNS("svg")),
                (this.layerElement = createNS("g")),
                (this.maskedElement = this.layerElement),
                this.svgElement.appendChild(this.layerElement),
                this.baseElement.appendChild(this.svgElement))
              : (this.layerElement = this.baseElement),
            styleDiv(this.baseElement);
        },
        createContainerElements: function () {
          (this.renderableEffectsManager = new CVEffects(this)),
            (this.transformedElement = this.baseElement),
            (this.maskedElement = this.layerElement),
            this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
            this.data.cl &&
              this.layerElement.setAttribute("class", this.data.cl),
            this.data.bm !== 0 && this.setBlendMode();
        },
        renderElement: function () {
          var e = this.transformedElement ? this.transformedElement.style : {};
          if (this.finalTransform._matMdf) {
            var i = this.finalTransform.mat.toCSS();
            (e.transform = i), (e.webkitTransform = i);
          }
          this.finalTransform._opMdf &&
            (e.opacity = this.finalTransform.mProp.o.v);
        },
        renderFrame: function () {
          this.data.hd ||
            this.hidden ||
            (this.renderTransform(),
            this.renderRenderable(),
            this.renderElement(),
            this.renderInnerContent(),
            this._isFirstFrame && (this._isFirstFrame = !1));
        },
        destroy: function () {
          (this.layerElement = null),
            (this.transformedElement = null),
            this.matteElement && (this.matteElement = null),
            this.maskManager &&
              (this.maskManager.destroy(), (this.maskManager = null));
        },
        createRenderableComponents: function () {
          this.maskManager = new MaskElement(this.data, this, this.globalData);
        },
        addEffects: function () {},
        setMatte: function () {},
      }),
        (HBaseElement.prototype.getBaseElement =
          SVGBaseElement.prototype.getBaseElement),
        (HBaseElement.prototype.destroyBaseElement =
          HBaseElement.prototype.destroy),
        (HBaseElement.prototype.buildElementParenting =
          BaseRenderer.prototype.buildElementParenting);
      function HSolidElement(t, e, i) {
        this.initElement(t, e, i);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          HBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
        ],
        HSolidElement
      ),
        (HSolidElement.prototype.createContent = function () {
          var t;
          this.data.hasMask
            ? ((t = createNS("rect")),
              t.setAttribute("width", this.data.sw),
              t.setAttribute("height", this.data.sh),
              t.setAttribute("fill", this.data.sc),
              this.svgElement.setAttribute("width", this.data.sw),
              this.svgElement.setAttribute("height", this.data.sh))
            : ((t = createTag("div")),
              (t.style.width = this.data.sw + "px"),
              (t.style.height = this.data.sh + "px"),
              (t.style.backgroundColor = this.data.sc)),
            this.layerElement.appendChild(t);
        });
      function HShapeElement(t, e, i) {
        (this.shapes = []),
          (this.shapesData = t.shapes),
          (this.stylesList = []),
          (this.shapeModifiers = []),
          (this.itemsData = []),
          (this.processedElements = []),
          (this.animatedContents = []),
          (this.shapesContainer = createNS("g")),
          this.initElement(t, e, i),
          (this.prevViewData = []),
          (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          HSolidElement,
          SVGShapeElement,
          HBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
        ],
        HShapeElement
      ),
        (HShapeElement.prototype._renderShapeFrame =
          HShapeElement.prototype.renderInnerContent),
        (HShapeElement.prototype.createContent = function () {
          var t;
          if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
            this.layerElement.appendChild(this.shapesContainer),
              (t = this.svgElement);
          else {
            t = createNS("svg");
            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
            t.setAttribute("width", e.w),
              t.setAttribute("height", e.h),
              t.appendChild(this.shapesContainer),
              this.layerElement.appendChild(t);
          }
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            this.shapesContainer,
            0,
            [],
            !0
          ),
            this.filterUniqueShapes(),
            (this.shapeCont = t);
        }),
        (HShapeElement.prototype.getTransformedPoint = function (t, e) {
          var i,
            r = t.length;
          for (i = 0; i < r; i += 1)
            e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
          return e;
        }),
        (HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
          var i = t.sh.v,
            r = t.transformers,
            n,
            a = i._length,
            s,
            o,
            l,
            c;
          if (!(a <= 1)) {
            for (n = 0; n < a - 1; n += 1)
              (s = this.getTransformedPoint(r, i.v[n])),
                (o = this.getTransformedPoint(r, i.o[n])),
                (l = this.getTransformedPoint(r, i.i[n + 1])),
                (c = this.getTransformedPoint(r, i.v[n + 1])),
                this.checkBounds(s, o, l, c, e);
            i.c &&
              ((s = this.getTransformedPoint(r, i.v[n])),
              (o = this.getTransformedPoint(r, i.o[n])),
              (l = this.getTransformedPoint(r, i.i[0])),
              (c = this.getTransformedPoint(r, i.v[0])),
              this.checkBounds(s, o, l, c, e));
          }
        }),
        (HShapeElement.prototype.checkBounds = function (t, e, i, r, n) {
          this.getBoundsOfCurve(t, e, i, r);
          var a = this.shapeBoundingBox;
          (n.x = bmMin(a.left, n.x)),
            (n.xMax = bmMax(a.right, n.xMax)),
            (n.y = bmMin(a.top, n.y)),
            (n.yMax = bmMax(a.bottom, n.yMax));
        }),
        (HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }),
        (HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0,
        }),
        (HShapeElement.prototype.getBoundsOfCurve = function (t, e, i, r) {
          for (
            var n = [
                [t[0], r[0]],
                [t[1], r[1]],
              ],
              a,
              s,
              o,
              l,
              c,
              p,
              _,
              h = 0;
            h < 2;
            ++h
          )
            (s = 6 * t[h] - 12 * e[h] + 6 * i[h]),
              (a = -3 * t[h] + 9 * e[h] - 9 * i[h] + 3 * r[h]),
              (o = 3 * e[h] - 3 * t[h]),
              (s |= 0),
              (a |= 0),
              (o |= 0),
              (a === 0 && s === 0) ||
                (a === 0
                  ? ((l = -o / s),
                    l > 0 &&
                      l < 1 &&
                      n[h].push(this.calculateF(l, t, e, i, r, h)))
                  : ((c = s * s - 4 * o * a),
                    c >= 0 &&
                      ((p = (-s + bmSqrt(c)) / (2 * a)),
                      p > 0 &&
                        p < 1 &&
                        n[h].push(this.calculateF(p, t, e, i, r, h)),
                      (_ = (-s - bmSqrt(c)) / (2 * a)),
                      _ > 0 &&
                        _ < 1 &&
                        n[h].push(this.calculateF(_, t, e, i, r, h)))));
          (this.shapeBoundingBox.left = bmMin.apply(null, n[0])),
            (this.shapeBoundingBox.top = bmMin.apply(null, n[1])),
            (this.shapeBoundingBox.right = bmMax.apply(null, n[0])),
            (this.shapeBoundingBox.bottom = bmMax.apply(null, n[1]));
        }),
        (HShapeElement.prototype.calculateF = function (t, e, i, r, n, a) {
          return (
            bmPow(1 - t, 3) * e[a] +
            3 * bmPow(1 - t, 2) * t * i[a] +
            3 * (1 - t) * bmPow(t, 2) * r[a] +
            bmPow(t, 3) * n[a]
          );
        }),
        (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
          var i,
            r = t.length;
          for (i = 0; i < r; i += 1)
            t[i] && t[i].sh
              ? this.calculateShapeBoundingBox(t[i], e)
              : t[i] && t[i].it
              ? this.calculateBoundingBox(t[i].it, e)
              : t[i] &&
                t[i].style &&
                t[i].w &&
                this.expandStrokeBoundingBox(t[i].w, e);
        }),
        (HShapeElement.prototype.expandStrokeBoundingBox = function (t, e) {
          var i = 0;
          if (t.keyframes) {
            for (var r = 0; r < t.keyframes.length; r += 1) {
              var n = t.keyframes[r].s;
              n > i && (i = n);
            }
            i *= t.mult;
          } else i = t.v * t.mult;
          (e.x -= i), (e.xMax += i), (e.y -= i), (e.yMax += i);
        }),
        (HShapeElement.prototype.currentBoxContains = function (t) {
          return (
            this.currentBBox.x <= t.x &&
            this.currentBBox.y <= t.y &&
            this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
            this.currentBBox.height + this.currentBBox.y >= t.y + t.height
          );
        }),
        (HShapeElement.prototype.renderInnerContent = function () {
          if (
            (this._renderShapeFrame(),
            !this.hidden && (this._isFirstFrame || this._mdf))
          ) {
            var t = this.tempBoundingBox,
              e = 999999;
            if (
              ((t.x = e),
              (t.xMax = -e),
              (t.y = e),
              (t.yMax = -e),
              this.calculateBoundingBox(this.itemsData, t),
              (t.width = t.xMax < t.x ? 0 : t.xMax - t.x),
              (t.height = t.yMax < t.y ? 0 : t.yMax - t.y),
              this.currentBoxContains(t))
            )
              return;
            var i = !1;
            if (
              (this.currentBBox.w !== t.width &&
                ((this.currentBBox.w = t.width),
                this.shapeCont.setAttribute("width", t.width),
                (i = !0)),
              this.currentBBox.h !== t.height &&
                ((this.currentBBox.h = t.height),
                this.shapeCont.setAttribute("height", t.height),
                (i = !0)),
              i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y)
            ) {
              (this.currentBBox.w = t.width),
                (this.currentBBox.h = t.height),
                (this.currentBBox.x = t.x),
                (this.currentBBox.y = t.y),
                this.shapeCont.setAttribute(
                  "viewBox",
                  this.currentBBox.x +
                    " " +
                    this.currentBBox.y +
                    " " +
                    this.currentBBox.w +
                    " " +
                    this.currentBBox.h
                );
              var r = this.shapeCont.style,
                n =
                  "translate(" +
                  this.currentBBox.x +
                  "px," +
                  this.currentBBox.y +
                  "px)";
              (r.transform = n), (r.webkitTransform = n);
            }
          }
        });
      function HTextElement(t, e, i) {
        (this.textSpans = []),
          (this.textPaths = []),
          (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
          (this.renderType = "svg"),
          (this.isMasked = !1),
          this.initElement(t, e, i);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          HBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
          ITextElement,
        ],
        HTextElement
      ),
        (HTextElement.prototype.createContent = function () {
          if (((this.isMasked = this.checkMasks()), this.isMasked)) {
            (this.renderType = "svg"),
              (this.compW = this.comp.data.w),
              (this.compH = this.comp.data.h),
              this.svgElement.setAttribute("width", this.compW),
              this.svgElement.setAttribute("height", this.compH);
            var t = createNS("g");
            this.maskedElement.appendChild(t), (this.innerElem = t);
          } else
            (this.renderType = "html"), (this.innerElem = this.layerElement);
          this.checkParenting();
        }),
        (HTextElement.prototype.buildNewText = function () {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = this.innerElem.style,
            i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
          (e.fill = i),
            (e.color = i),
            t.sc &&
              ((e.stroke = this.buildColor(t.sc)),
              (e.strokeWidth = t.sw + "px"));
          var r = this.globalData.fontManager.getFontByName(t.f);
          if (!this.globalData.fontManager.chars)
            if (
              ((e.fontSize = t.finalSize + "px"),
              (e.lineHeight = t.finalSize + "px"),
              r.fClass)
            )
              this.innerElem.className = r.fClass;
            else {
              e.fontFamily = r.fFamily;
              var n = t.fWeight,
                a = t.fStyle;
              (e.fontStyle = a), (e.fontWeight = n);
            }
          var s,
            o,
            l = t.l;
          o = l.length;
          var c,
            p,
            _,
            h = this.mHelper,
            b,
            v = "",
            f = 0;
          for (s = 0; s < o; s += 1) {
            if (
              (this.globalData.fontManager.chars
                ? (this.textPaths[f]
                    ? (c = this.textPaths[f])
                    : ((c = createNS("path")),
                      c.setAttribute("stroke-linecap", lineCapEnum[1]),
                      c.setAttribute("stroke-linejoin", lineJoinEnum[2]),
                      c.setAttribute("stroke-miterlimit", "4")),
                  this.isMasked ||
                    (this.textSpans[f]
                      ? ((p = this.textSpans[f]), (_ = p.children[0]))
                      : ((p = createTag("div")),
                        (p.style.lineHeight = 0),
                        (_ = createNS("svg")),
                        _.appendChild(c),
                        styleDiv(p))))
                : this.isMasked
                ? (c = this.textPaths[f] ? this.textPaths[f] : createNS("text"))
                : this.textSpans[f]
                ? ((p = this.textSpans[f]), (c = this.textPaths[f]))
                : ((p = createTag("span")),
                  styleDiv(p),
                  (c = createTag("span")),
                  styleDiv(c),
                  p.appendChild(c)),
              this.globalData.fontManager.chars)
            ) {
              var E = this.globalData.fontManager.getCharData(
                  t.finalText[s],
                  r.fStyle,
                  this.globalData.fontManager.getFontByName(t.f).fFamily
                ),
                d;
              if (
                (E ? (d = E.data) : (d = null),
                h.reset(),
                d &&
                  d.shapes &&
                  d.shapes.length &&
                  ((b = d.shapes[0].it),
                  h.scale(t.finalSize / 100, t.finalSize / 100),
                  (v = this.createPathShape(h, b)),
                  c.setAttribute("d", v)),
                this.isMasked)
              )
                this.innerElem.appendChild(c);
              else {
                if ((this.innerElem.appendChild(p), d && d.shapes)) {
                  document.body.appendChild(_);
                  var u = _.getBBox();
                  _.setAttribute("width", u.width + 2),
                    _.setAttribute("height", u.height + 2),
                    _.setAttribute(
                      "viewBox",
                      u.x -
                        1 +
                        " " +
                        (u.y - 1) +
                        " " +
                        (u.width + 2) +
                        " " +
                        (u.height + 2)
                    );
                  var m = _.style,
                    y = "translate(" + (u.x - 1) + "px," + (u.y - 1) + "px)";
                  (m.transform = y),
                    (m.webkitTransform = y),
                    (l[s].yOffset = u.y - 1);
                } else _.setAttribute("width", 1), _.setAttribute("height", 1);
                p.appendChild(_);
              }
            } else if (
              ((c.textContent = l[s].val),
              c.setAttributeNS(
                "http://www.w3.org/XML/1998/namespace",
                "xml:space",
                "preserve"
              ),
              this.isMasked)
            )
              this.innerElem.appendChild(c);
            else {
              this.innerElem.appendChild(p);
              var C = c.style,
                P = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              (C.transform = P), (C.webkitTransform = P);
            }
            this.isMasked ? (this.textSpans[f] = c) : (this.textSpans[f] = p),
              (this.textSpans[f].style.display = "block"),
              (this.textPaths[f] = c),
              (f += 1);
          }
          for (; f < this.textSpans.length; )
            (this.textSpans[f].style.display = "none"), (f += 1);
        }),
        (HTextElement.prototype.renderInnerContent = function () {
          this.validateText();
          var t;
          if (this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute(
                "viewBox",
                -this.finalTransform.mProp.p.v[0] +
                  " " +
                  -this.finalTransform.mProp.p.v[1] +
                  " " +
                  this.compW +
                  " " +
                  this.compH
              ),
                (t = this.svgElement.style);
              var e =
                "translate(" +
                -this.finalTransform.mProp.p.v[0] +
                "px," +
                -this.finalTransform.mProp.p.v[1] +
                "px)";
              (t.transform = e), (t.webkitTransform = e);
            }
          }
          if (
            (this.textAnimator.getMeasures(
              this.textProperty.currentData,
              this.lettersChangedFlag
            ),
            !(
              !this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag
            ))
          ) {
            var i,
              r,
              n = 0,
              a = this.textAnimator.renderedLetters,
              s = this.textProperty.currentData.l;
            r = s.length;
            var o, l, c;
            for (i = 0; i < r; i += 1)
              s[i].n
                ? (n += 1)
                : ((l = this.textSpans[i]),
                  (c = this.textPaths[i]),
                  (o = a[n]),
                  (n += 1),
                  o._mdf.m &&
                    (this.isMasked
                      ? l.setAttribute("transform", o.m)
                      : ((l.style.webkitTransform = o.m),
                        (l.style.transform = o.m))),
                  (l.style.opacity = o.o),
                  o.sw && o._mdf.sw && c.setAttribute("stroke-width", o.sw),
                  o.sc && o._mdf.sc && c.setAttribute("stroke", o.sc),
                  o.fc &&
                    o._mdf.fc &&
                    (c.setAttribute("fill", o.fc), (c.style.color = o.fc)));
            if (
              this.innerElem.getBBox &&
              !this.hidden &&
              (this._isFirstFrame || this._mdf)
            ) {
              var p = this.innerElem.getBBox();
              this.currentBBox.w !== p.width &&
                ((this.currentBBox.w = p.width),
                this.svgElement.setAttribute("width", p.width)),
                this.currentBBox.h !== p.height &&
                  ((this.currentBBox.h = p.height),
                  this.svgElement.setAttribute("height", p.height));
              var _ = 1;
              if (
                this.currentBBox.w !== p.width + _ * 2 ||
                this.currentBBox.h !== p.height + _ * 2 ||
                this.currentBBox.x !== p.x - _ ||
                this.currentBBox.y !== p.y - _
              ) {
                (this.currentBBox.w = p.width + _ * 2),
                  (this.currentBBox.h = p.height + _ * 2),
                  (this.currentBBox.x = p.x - _),
                  (this.currentBBox.y = p.y - _),
                  this.svgElement.setAttribute(
                    "viewBox",
                    this.currentBBox.x +
                      " " +
                      this.currentBBox.y +
                      " " +
                      this.currentBBox.w +
                      " " +
                      this.currentBBox.h
                  ),
                  (t = this.svgElement.style);
                var h =
                  "translate(" +
                  this.currentBBox.x +
                  "px," +
                  this.currentBBox.y +
                  "px)";
                (t.transform = h), (t.webkitTransform = h);
              }
            }
          }
        });
      function HCameraElement(t, e, i) {
        this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
        var r = PropertyFactory.getProp;
        if (
          ((this.pe = r(this, t.pe, 0, 0, this)),
          t.ks.p.s
            ? ((this.px = r(this, t.ks.p.x, 1, 0, this)),
              (this.py = r(this, t.ks.p.y, 1, 0, this)),
              (this.pz = r(this, t.ks.p.z, 1, 0, this)))
            : (this.p = r(this, t.ks.p, 1, 0, this)),
          t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)),
          t.ks.or.k.length && t.ks.or.k[0].to)
        ) {
          var n,
            a = t.ks.or.k.length;
          for (n = 0; n < a; n += 1)
            (t.ks.or.k[n].to = null), (t.ks.or.k[n].ti = null);
        }
        (this.or = r(this, t.ks.or, 1, degToRads, this)),
          (this.or.sh = !0),
          (this.rx = r(this, t.ks.rx, 0, degToRads, this)),
          (this.ry = r(this, t.ks.ry, 0, degToRads, this)),
          (this.rz = r(this, t.ks.rz, 0, degToRads, this)),
          (this.mat = new Matrix()),
          (this._prevMat = new Matrix()),
          (this._isFirstFrame = !0),
          (this.finalTransform = { mProp: this });
      }
      extendPrototype(
        [BaseElement, FrameElement, HierarchyElement],
        HCameraElement
      ),
        (HCameraElement.prototype.setup = function () {
          var t,
            e = this.comp.threeDElements.length,
            i,
            r,
            n;
          for (t = 0; t < e; t += 1)
            if (((i = this.comp.threeDElements[t]), i.type === "3d")) {
              (r = i.perspectiveElem.style), (n = i.container.style);
              var a = this.pe.v + "px",
                s = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              (r.perspective = a),
                (r.webkitPerspective = a),
                (n.transformOrigin = s),
                (n.mozTransformOrigin = s),
                (n.webkitTransformOrigin = s),
                (r.transform = o),
                (r.webkitTransform = o);
            }
        }),
        (HCameraElement.prototype.createElements = function () {}),
        (HCameraElement.prototype.hide = function () {}),
        (HCameraElement.prototype.renderFrame = function () {
          var t = this._isFirstFrame,
            e,
            i;
          if (this.hierarchy)
            for (i = this.hierarchy.length, e = 0; e < i; e += 1)
              t = this.hierarchy[e].finalTransform.mProp._mdf || t;
          if (
            t ||
            this.pe._mdf ||
            (this.p && this.p._mdf) ||
            (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
            this.rx._mdf ||
            this.ry._mdf ||
            this.rz._mdf ||
            this.or._mdf ||
            (this.a && this.a._mdf)
          ) {
            if ((this.mat.reset(), this.hierarchy))
              for (i = this.hierarchy.length - 1, e = i; e >= 0; e -= 1) {
                var r = this.hierarchy[e].finalTransform.mProp;
                this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]),
                  this.mat
                    .rotateX(-r.or.v[0])
                    .rotateY(-r.or.v[1])
                    .rotateZ(r.or.v[2]),
                  this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v),
                  this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]),
                  this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
              }
            if (
              (this.p
                ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
              this.a)
            ) {
              var n;
              this.p
                ? (n = [
                    this.p.v[0] - this.a.v[0],
                    this.p.v[1] - this.a.v[1],
                    this.p.v[2] - this.a.v[2],
                  ])
                : (n = [
                    this.px.v - this.a.v[0],
                    this.py.v - this.a.v[1],
                    this.pz.v - this.a.v[2],
                  ]);
              var a = Math.sqrt(
                  Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)
                ),
                s = [n[0] / a, n[1] / a, n[2] / a],
                o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                l = Math.atan2(s[1], o),
                c = Math.atan2(s[0], -s[2]);
              this.mat.rotateY(c).rotateX(-l);
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
              this.mat
                .rotateX(-this.or.v[0])
                .rotateY(-this.or.v[1])
                .rotateZ(this.or.v[2]),
              this.mat.translate(
                this.globalData.compSize.w / 2,
                this.globalData.compSize.h / 2,
                0
              ),
              this.mat.translate(0, 0, this.pe.v);
            var p = !this._prevMat.equals(this.mat);
            if ((p || this.pe._mdf) && this.comp.threeDElements) {
              i = this.comp.threeDElements.length;
              var _, h, b;
              for (e = 0; e < i; e += 1)
                if (((_ = this.comp.threeDElements[e]), _.type === "3d")) {
                  if (p) {
                    var v = this.mat.toCSS();
                    (b = _.container.style),
                      (b.transform = v),
                      (b.webkitTransform = v);
                  }
                  this.pe._mdf &&
                    ((h = _.perspectiveElem.style),
                    (h.perspective = this.pe.v + "px"),
                    (h.webkitPerspective = this.pe.v + "px"));
                }
              this.mat.clone(this._prevMat);
            }
          }
          this._isFirstFrame = !1;
        }),
        (HCameraElement.prototype.prepareFrame = function (t) {
          this.prepareProperties(t, !0);
        }),
        (HCameraElement.prototype.destroy = function () {}),
        (HCameraElement.prototype.getBaseElement = function () {
          return null;
        });
      function HImageElement(t, e, i) {
        (this.assetData = e.getAssetData(t.refId)), this.initElement(t, e, i);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          HBaseElement,
          HSolidElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
        ],
        HImageElement
      ),
        (HImageElement.prototype.createContent = function () {
          var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image();
          this.data.hasMask
            ? ((this.imageElem = createNS("image")),
              this.imageElem.setAttribute("width", this.assetData.w + "px"),
              this.imageElem.setAttribute("height", this.assetData.h + "px"),
              this.imageElem.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "href",
                t
              ),
              this.layerElement.appendChild(this.imageElem),
              this.baseElement.setAttribute("width", this.assetData.w),
              this.baseElement.setAttribute("height", this.assetData.h))
            : this.layerElement.appendChild(e),
            (e.crossOrigin = "anonymous"),
            (e.src = t),
            this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
        });
      function HybridRendererBase(t, e) {
        (this.animationItem = t),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.renderConfig = {
            className: (e && e.className) || "",
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
            hideOnTransparent: !(e && e.hideOnTransparent === !1),
            filterSize: {
              width: (e && e.filterSize && e.filterSize.width) || "400%",
              height: (e && e.filterSize && e.filterSize.height) || "400%",
              x: (e && e.filterSize && e.filterSize.x) || "-100%",
              y: (e && e.filterSize && e.filterSize.y) || "-100%",
            },
          }),
          (this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig,
          }),
          (this.pendingElements = []),
          (this.elements = []),
          (this.threeDElements = []),
          (this.destroyed = !1),
          (this.camera = null),
          (this.supports3d = !0),
          (this.rendererType = "html");
      }
      extendPrototype([BaseRenderer], HybridRendererBase),
        (HybridRendererBase.prototype.buildItem =
          SVGRenderer.prototype.buildItem),
        (HybridRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var t = this.pendingElements.pop();
            t.checkParenting();
          }
        }),
        (HybridRendererBase.prototype.appendElementInPos = function (t, e) {
          var i = t.getBaseElement();
          if (i) {
            var r = this.layers[e];
            if (!r.ddd || !this.supports3d)
              if (this.threeDElements) this.addTo3dContainer(i, e);
              else {
                for (var n = 0, a, s, o; n < e; )
                  this.elements[n] &&
                    this.elements[n] !== !0 &&
                    this.elements[n].getBaseElement &&
                    ((s = this.elements[n]),
                    (o = this.layers[n].ddd
                      ? this.getThreeDContainerByPos(n)
                      : s.getBaseElement()),
                    (a = o || a)),
                    (n += 1);
                a
                  ? (!r.ddd || !this.supports3d) &&
                    this.layerElement.insertBefore(i, a)
                  : (!r.ddd || !this.supports3d) &&
                    this.layerElement.appendChild(i);
              }
            else this.addTo3dContainer(i, e);
          }
        }),
        (HybridRendererBase.prototype.createShape = function (t) {
          return this.supports3d
            ? new HShapeElement(t, this.globalData, this)
            : new SVGShapeElement(t, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createText = function (t) {
          return this.supports3d
            ? new HTextElement(t, this.globalData, this)
            : new SVGTextLottieElement(t, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createCamera = function (t) {
          return (
            (this.camera = new HCameraElement(t, this.globalData, this)),
            this.camera
          );
        }),
        (HybridRendererBase.prototype.createImage = function (t) {
          return this.supports3d
            ? new HImageElement(t, this.globalData, this)
            : new IImageElement(t, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createSolid = function (t) {
          return this.supports3d
            ? new HSolidElement(t, this.globalData, this)
            : new ISolidElement(t, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createNull =
          SVGRenderer.prototype.createNull),
        (HybridRendererBase.prototype.getThreeDContainerByPos = function (t) {
          for (var e = 0, i = this.threeDElements.length; e < i; ) {
            if (
              this.threeDElements[e].startPos <= t &&
              this.threeDElements[e].endPos >= t
            )
              return this.threeDElements[e].perspectiveElem;
            e += 1;
          }
          return null;
        }),
        (HybridRendererBase.prototype.createThreeDContainer = function (t, e) {
          var i = createTag("div"),
            r,
            n;
          styleDiv(i);
          var a = createTag("div");
          if ((styleDiv(a), e === "3d")) {
            (r = i.style),
              (r.width = this.globalData.compSize.w + "px"),
              (r.height = this.globalData.compSize.h + "px");
            var s = "50% 50%";
            (r.webkitTransformOrigin = s),
              (r.mozTransformOrigin = s),
              (r.transformOrigin = s),
              (n = a.style);
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (n.transform = o), (n.webkitTransform = o);
          }
          i.appendChild(a);
          var l = {
            container: a,
            perspectiveElem: i,
            startPos: t,
            endPos: t,
            type: e,
          };
          return this.threeDElements.push(l), l;
        }),
        (HybridRendererBase.prototype.build3dContainers = function () {
          var t,
            e = this.layers.length,
            i,
            r = "";
          for (t = 0; t < e; t += 1)
            this.layers[t].ddd && this.layers[t].ty !== 3
              ? (r !== "3d" &&
                  ((r = "3d"), (i = this.createThreeDContainer(t, "3d"))),
                (i.endPos = Math.max(i.endPos, t)))
              : (r !== "2d" &&
                  ((r = "2d"), (i = this.createThreeDContainer(t, "2d"))),
                (i.endPos = Math.max(i.endPos, t)));
          for (e = this.threeDElements.length, t = e - 1; t >= 0; t -= 1)
            this.resizerElem.appendChild(
              this.threeDElements[t].perspectiveElem
            );
        }),
        (HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
          for (var i = 0, r = this.threeDElements.length; i < r; ) {
            if (e <= this.threeDElements[i].endPos) {
              for (var n = this.threeDElements[i].startPos, a; n < e; )
                this.elements[n] &&
                  this.elements[n].getBaseElement &&
                  (a = this.elements[n].getBaseElement()),
                  (n += 1);
              a
                ? this.threeDElements[i].container.insertBefore(t, a)
                : this.threeDElements[i].container.appendChild(t);
              break;
            }
            i += 1;
          }
        }),
        (HybridRendererBase.prototype.configAnimation = function (t) {
          var e = createTag("div"),
            i = this.animationItem.wrapper,
            r = e.style;
          (r.width = t.w + "px"),
            (r.height = t.h + "px"),
            (this.resizerElem = e),
            styleDiv(e),
            (r.transformStyle = "flat"),
            (r.mozTransformStyle = "flat"),
            (r.webkitTransformStyle = "flat"),
            this.renderConfig.className &&
              e.setAttribute("class", this.renderConfig.className),
            i.appendChild(e),
            (r.overflow = "hidden");
          var n = createNS("svg");
          n.setAttribute("width", "1"),
            n.setAttribute("height", "1"),
            styleDiv(n),
            this.resizerElem.appendChild(n);
          var a = createNS("defs");
          n.appendChild(a),
            (this.data = t),
            this.setupGlobalData(t, n),
            (this.globalData.defs = a),
            (this.layers = t.layers),
            (this.layerElement = this.resizerElem),
            this.build3dContainers(),
            this.updateContainerSize();
        }),
        (HybridRendererBase.prototype.destroy = function () {
          this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = ""),
            (this.animationItem.container = null),
            (this.globalData.defs = null);
          var t,
            e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1)
            this.elements[t] &&
              this.elements[t].destroy &&
              this.elements[t].destroy();
          (this.elements.length = 0),
            (this.destroyed = !0),
            (this.animationItem = null);
        }),
        (HybridRendererBase.prototype.updateContainerSize = function () {
          var t = this.animationItem.wrapper.offsetWidth,
            e = this.animationItem.wrapper.offsetHeight,
            i = t / e,
            r = this.globalData.compSize.w / this.globalData.compSize.h,
            n,
            a,
            s,
            o;
          r > i
            ? ((n = t / this.globalData.compSize.w),
              (a = t / this.globalData.compSize.w),
              (s = 0),
              (o =
                (e -
                  this.globalData.compSize.h *
                    (t / this.globalData.compSize.w)) /
                2))
            : ((n = e / this.globalData.compSize.h),
              (a = e / this.globalData.compSize.h),
              (s =
                (t -
                  this.globalData.compSize.w *
                    (e / this.globalData.compSize.h)) /
                2),
              (o = 0));
          var l = this.resizerElem.style;
          (l.webkitTransform =
            "matrix3d(" +
            n +
            ",0,0,0,0," +
            a +
            ",0,0,0,0,1,0," +
            s +
            "," +
            o +
            ",0,1)"),
            (l.transform = l.webkitTransform);
        }),
        (HybridRendererBase.prototype.renderFrame =
          SVGRenderer.prototype.renderFrame),
        (HybridRendererBase.prototype.hide = function () {
          this.resizerElem.style.display = "none";
        }),
        (HybridRendererBase.prototype.show = function () {
          this.resizerElem.style.display = "block";
        }),
        (HybridRendererBase.prototype.initItems = function () {
          if ((this.buildAllItems(), this.camera)) this.camera.setup();
          else {
            var t = this.globalData.compSize.w,
              e = this.globalData.compSize.h,
              i,
              r = this.threeDElements.length;
            for (i = 0; i < r; i += 1) {
              var n = this.threeDElements[i].perspectiveElem.style;
              (n.webkitPerspective =
                Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px"),
                (n.perspective = n.webkitPerspective);
            }
          }
        }),
        (HybridRendererBase.prototype.searchExtraCompositions = function (t) {
          var e,
            i = t.length,
            r = createTag("div");
          for (e = 0; e < i; e += 1)
            if (t[e].xt) {
              var n = this.createComp(t[e], r, this.globalData.comp, null);
              n.initExpressions(),
                this.globalData.projectInterface.registerComposition(n);
            }
        });
      function HCompElement(t, e, i) {
        (this.layers = t.layers),
          (this.supports3d = !t.hasMask),
          (this.completeLayers = !1),
          (this.pendingElements = []),
          (this.elements = this.layers
            ? createSizedArray(this.layers.length)
            : []),
          this.initElement(t, e, i),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 });
      }
      extendPrototype(
        [HybridRendererBase, ICompElement, HBaseElement],
        HCompElement
      ),
        (HCompElement.prototype._createBaseContainerElements =
          HCompElement.prototype.createContainerElements),
        (HCompElement.prototype.createContainerElements = function () {
          this._createBaseContainerElements(),
            this.data.hasMask
              ? (this.svgElement.setAttribute("width", this.data.w),
                this.svgElement.setAttribute("height", this.data.h),
                (this.transformedElement = this.baseElement))
              : (this.transformedElement = this.layerElement);
        }),
        (HCompElement.prototype.addTo3dContainer = function (t, e) {
          for (var i = 0, r; i < e; )
            this.elements[i] &&
              this.elements[i].getBaseElement &&
              (r = this.elements[i].getBaseElement()),
              (i += 1);
          r
            ? this.layerElement.insertBefore(t, r)
            : this.layerElement.appendChild(t);
        }),
        (HCompElement.prototype.createComp = function (t) {
          return this.supports3d
            ? new HCompElement(t, this.globalData, this)
            : new SVGCompElement(t, this.globalData, this);
        });
      function HybridRenderer(t, e) {
        (this.animationItem = t),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.renderConfig = {
            className: (e && e.className) || "",
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
            hideOnTransparent: !(e && e.hideOnTransparent === !1),
            filterSize: {
              width: (e && e.filterSize && e.filterSize.width) || "400%",
              height: (e && e.filterSize && e.filterSize.height) || "400%",
              x: (e && e.filterSize && e.filterSize.x) || "-100%",
              y: (e && e.filterSize && e.filterSize.y) || "-100%",
            },
            runExpressions:
              !e || e.runExpressions === void 0 || e.runExpressions,
          }),
          (this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig,
          }),
          (this.pendingElements = []),
          (this.elements = []),
          (this.threeDElements = []),
          (this.destroyed = !1),
          (this.camera = null),
          (this.supports3d = !0),
          (this.rendererType = "html");
      }
      extendPrototype([HybridRendererBase], HybridRenderer),
        (HybridRenderer.prototype.createComp = function (t) {
          return this.supports3d
            ? new HCompElement(t, this.globalData, this)
            : new SVGCompElement(t, this.globalData, this);
        });
      var CompExpressionInterface = (function () {
        return function (t) {
          function e(i) {
            for (var r = 0, n = t.layers.length; r < n; ) {
              if (t.layers[r].nm === i || t.layers[r].ind === i)
                return t.elements[r].layerInterface;
              r += 1;
            }
            return null;
          }
          return (
            Object.defineProperty(e, "_name", { value: t.data.nm }),
            (e.layer = e),
            (e.pixelAspect = 1),
            (e.height = t.data.h || t.globalData.compSize.h),
            (e.width = t.data.w || t.globalData.compSize.w),
            (e.pixelAspect = 1),
            (e.frameDuration = 1 / t.globalData.frameRate),
            (e.displayStartTime = 0),
            (e.numLayers = t.layers.length),
            e
          );
        };
      })();
      function _typeof$2(t) {
        "@babel/helpers - typeof";
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$2 = function (i) {
                return typeof i;
              })
            : (_typeof$2 = function (i) {
                return i &&
                  typeof Symbol == "function" &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? "symbol"
                  : typeof i;
              }),
          _typeof$2(t)
        );
      }
      function seedRandom(t, e) {
        var i = this,
          r = 256,
          n = 6,
          a = 52,
          s = "random",
          o = e.pow(r, n),
          l = e.pow(2, a),
          c = l * 2,
          p = r - 1,
          _;
        function h(m, y, C) {
          var P = [];
          y = y === !0 ? { entropy: !0 } : y || {};
          var T = E(f(y.entropy ? [m, u(t)] : m === null ? d() : m, 3), P),
            M = new b(P),
            I = function () {
              for (var O = M.g(n), D = o, j = 0; O < l; )
                (O = (O + j) * r), (D *= r), (j = M.g(1));
              for (; O >= c; ) (O /= 2), (D /= 2), (j >>>= 1);
              return (O + j) / D;
            };
          return (
            (I.int32 = function () {
              return M.g(4) | 0;
            }),
            (I.quick = function () {
              return M.g(4) / 4294967296;
            }),
            (I.double = I),
            E(u(M.S), t),
            (
              y.pass ||
              C ||
              function (z, O, D, j) {
                return (
                  j &&
                    (j.S && v(j, M),
                    (z.state = function () {
                      return v(M, {});
                    })),
                  D ? ((e[s] = z), O) : z
                );
              }
            )(I, T, "global" in y ? y.global : this == e, y.state)
          );
        }
        e["seed" + s] = h;
        function b(m) {
          var y,
            C = m.length,
            P = this,
            T = 0,
            M = (P.i = P.j = 0),
            I = (P.S = []);
          for (C || (m = [C++]); T < r; ) I[T] = T++;
          for (T = 0; T < r; T++)
            (I[T] = I[(M = p & (M + m[T % C] + (y = I[T])))]), (I[M] = y);
          P.g = function (z) {
            for (var O, D = 0, j = P.i, H = P.j, R = P.S; z--; )
              (O = R[(j = p & (j + 1))]),
                (D =
                  D * r + R[p & ((R[j] = R[(H = p & (H + O))]) + (R[H] = O))]);
            return (P.i = j), (P.j = H), D;
          };
        }
        function v(m, y) {
          return (y.i = m.i), (y.j = m.j), (y.S = m.S.slice()), y;
        }
        function f(m, y) {
          var C = [],
            P = _typeof$2(m),
            T;
          if (y && P == "object")
            for (T in m)
              try {
                C.push(f(m[T], y - 1));
              } catch {}
          return C.length ? C : P == "string" ? m : m + "\0";
        }
        function E(m, y) {
          for (var C = m + "", P, T = 0; T < C.length; )
            y[p & T] = p & ((P ^= y[p & T] * 19) + C.charCodeAt(T++));
          return u(y);
        }
        function d() {
          try {
            if (_) return u(_.randomBytes(r));
            var m = new Uint8Array(r);
            return (i.crypto || i.msCrypto).getRandomValues(m), u(m);
          } catch {
            var y = i.navigator,
              C = y && y.plugins;
            return [+new Date(), i, C, i.screen, u(t)];
          }
        }
        function u(m) {
          return String.fromCharCode.apply(0, m);
        }
        E(e.random(), t);
      }
      function initialize$2(t) {
        seedRandom([], t);
      }
      var propTypes = { SHAPE: "shape" };
      function _typeof$1(t) {
        "@babel/helpers - typeof";
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$1 = function (i) {
                return typeof i;
              })
            : (_typeof$1 = function (i) {
                return i &&
                  typeof Symbol == "function" &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? "symbol"
                  : typeof i;
              }),
          _typeof$1(t)
        );
      }
      var ExpressionManager = (function () {
          "use strict";
          var ob = {},
            Math = BMMath,
            window = null,
            document = null,
            XMLHttpRequest = null,
            fetch = null,
            frames = null,
            _lottieGlobal = {};
          initialize$2(BMMath);
          function resetFrame() {
            _lottieGlobal = {};
          }
          function $bm_isInstanceOfArray(t) {
            return t.constructor === Array || t.constructor === Float32Array;
          }
          function isNumerable(t, e) {
            return (
              t === "number" ||
              e instanceof Number ||
              t === "boolean" ||
              t === "string"
            );
          }
          function $bm_neg(t) {
            var e = _typeof$1(t);
            if (e === "number" || t instanceof Number || e === "boolean")
              return -t;
            if ($bm_isInstanceOfArray(t)) {
              var i,
                r = t.length,
                n = [];
              for (i = 0; i < r; i += 1) n[i] = -t[i];
              return n;
            }
            return t.propType ? t.v : -t;
          }
          var easeInBez = BezierFactory.getBezierEasing(
              0.333,
              0,
              0.833,
              0.833,
              "easeIn"
            ).get,
            easeOutBez = BezierFactory.getBezierEasing(
              0.167,
              0.167,
              0.667,
              1,
              "easeOut"
            ).get,
            easeInOutBez = BezierFactory.getBezierEasing(
              0.33,
              0,
              0.667,
              1,
              "easeInOut"
            ).get;
          function sum(t, e) {
            var i = _typeof$1(t),
              r = _typeof$1(e);
            if (
              (isNumerable(i, t) && isNumerable(r, e)) ||
              i === "string" ||
              r === "string"
            )
              return t + e;
            if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
              return (t = t.slice(0)), (t[0] += e), t;
            if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
              return (e = e.slice(0)), (e[0] = t + e[0]), e;
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
              for (
                var n = 0, a = t.length, s = e.length, o = [];
                n < a || n < s;

              )
                (typeof t[n] == "number" || t[n] instanceof Number) &&
                (typeof e[n] == "number" || e[n] instanceof Number)
                  ? (o[n] = t[n] + e[n])
                  : (o[n] = e[n] === void 0 ? t[n] : t[n] || e[n]),
                  (n += 1);
              return o;
            }
            return 0;
          }
          var add = sum;
          function sub(t, e) {
            var i = _typeof$1(t),
              r = _typeof$1(e);
            if (isNumerable(i, t) && isNumerable(r, e))
              return (
                i === "string" && (t = parseInt(t, 10)),
                r === "string" && (e = parseInt(e, 10)),
                t - e
              );
            if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
              return (t = t.slice(0)), (t[0] -= e), t;
            if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
              return (e = e.slice(0)), (e[0] = t - e[0]), e;
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
              for (
                var n = 0, a = t.length, s = e.length, o = [];
                n < a || n < s;

              )
                (typeof t[n] == "number" || t[n] instanceof Number) &&
                (typeof e[n] == "number" || e[n] instanceof Number)
                  ? (o[n] = t[n] - e[n])
                  : (o[n] = e[n] === void 0 ? t[n] : t[n] || e[n]),
                  (n += 1);
              return o;
            }
            return 0;
          }
          function mul(t, e) {
            var i = _typeof$1(t),
              r = _typeof$1(e),
              n;
            if (isNumerable(i, t) && isNumerable(r, e)) return t * e;
            var a, s;
            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) {
              for (
                s = t.length, n = createTypedArray("float32", s), a = 0;
                a < s;
                a += 1
              )
                n[a] = t[a] * e;
              return n;
            }
            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) {
              for (
                s = e.length, n = createTypedArray("float32", s), a = 0;
                a < s;
                a += 1
              )
                n[a] = t * e[a];
              return n;
            }
            return 0;
          }
          function div(t, e) {
            var i = _typeof$1(t),
              r = _typeof$1(e),
              n;
            if (isNumerable(i, t) && isNumerable(r, e)) return t / e;
            var a, s;
            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) {
              for (
                s = t.length, n = createTypedArray("float32", s), a = 0;
                a < s;
                a += 1
              )
                n[a] = t[a] / e;
              return n;
            }
            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) {
              for (
                s = e.length, n = createTypedArray("float32", s), a = 0;
                a < s;
                a += 1
              )
                n[a] = t / e[a];
              return n;
            }
            return 0;
          }
          function mod(t, e) {
            return (
              typeof t == "string" && (t = parseInt(t, 10)),
              typeof e == "string" && (e = parseInt(e, 10)),
              t % e
            );
          }
          var $bm_sum = sum,
            $bm_sub = sub,
            $bm_mul = mul,
            $bm_div = div,
            $bm_mod = mod;
          function clamp(t, e, i) {
            if (e > i) {
              var r = i;
              (i = e), (e = r);
            }
            return Math.min(Math.max(t, e), i);
          }
          function radiansToDegrees(t) {
            return t / degToRads;
          }
          var radians_to_degrees = radiansToDegrees;
          function degreesToRadians(t) {
            return t * degToRads;
          }
          var degrees_to_radians = radiansToDegrees,
            helperLengthArray = [0, 0, 0, 0, 0, 0];
          function length(t, e) {
            if (typeof t == "number" || t instanceof Number)
              return (e = e || 0), Math.abs(t - e);
            e || (e = helperLengthArray);
            var i,
              r = Math.min(t.length, e.length),
              n = 0;
            for (i = 0; i < r; i += 1) n += Math.pow(e[i] - t[i], 2);
            return Math.sqrt(n);
          }
          function normalize(t) {
            return div(t, length(t));
          }
          function rgbToHsl(t) {
            var e = t[0],
              i = t[1],
              r = t[2],
              n = Math.max(e, i, r),
              a = Math.min(e, i, r),
              s,
              o,
              l = (n + a) / 2;
            if (n === a) (s = 0), (o = 0);
            else {
              var c = n - a;
              switch (((o = l > 0.5 ? c / (2 - n - a) : c / (n + a)), n)) {
                case e:
                  s = (i - r) / c + (i < r ? 6 : 0);
                  break;
                case i:
                  s = (r - e) / c + 2;
                  break;
                case r:
                  s = (e - i) / c + 4;
                  break;
                default:
                  break;
              }
              s /= 6;
            }
            return [s, o, l, t[3]];
          }
          function hue2rgb(t, e, i) {
            return (
              i < 0 && (i += 1),
              i > 1 && (i -= 1),
              i < 1 / 6
                ? t + (e - t) * 6 * i
                : i < 1 / 2
                ? e
                : i < 2 / 3
                ? t + (e - t) * (2 / 3 - i) * 6
                : t
            );
          }
          function hslToRgb(t) {
            var e = t[0],
              i = t[1],
              r = t[2],
              n,
              a,
              s;
            if (i === 0) (n = r), (s = r), (a = r);
            else {
              var o = r < 0.5 ? r * (1 + i) : r + i - r * i,
                l = 2 * r - o;
              (n = hue2rgb(l, o, e + 1 / 3)),
                (a = hue2rgb(l, o, e)),
                (s = hue2rgb(l, o, e - 1 / 3));
            }
            return [n, a, s, t[3]];
          }
          function linear(t, e, i, r, n) {
            if (
              ((r === void 0 || n === void 0) &&
                ((r = e), (n = i), (e = 0), (i = 1)),
              i < e)
            ) {
              var a = i;
              (i = e), (e = a);
            }
            if (t <= e) return r;
            if (t >= i) return n;
            var s = i === e ? 0 : (t - e) / (i - e);
            if (!r.length) return r + (n - r) * s;
            var o,
              l = r.length,
              c = createTypedArray("float32", l);
            for (o = 0; o < l; o += 1) c[o] = r[o] + (n[o] - r[o]) * s;
            return c;
          }
          function random(t, e) {
            if (
              (e === void 0 &&
                (t === void 0 ? ((t = 0), (e = 1)) : ((e = t), (t = void 0))),
              e.length)
            ) {
              var i,
                r = e.length;
              t || (t = createTypedArray("float32", r));
              var n = createTypedArray("float32", r),
                a = BMMath.random();
              for (i = 0; i < r; i += 1) n[i] = t[i] + a * (e[i] - t[i]);
              return n;
            }
            t === void 0 && (t = 0);
            var s = BMMath.random();
            return t + s * (e - t);
          }
          function createPath(t, e, i, r) {
            var n,
              a = t.length,
              s = shapePool.newElement();
            s.setPathData(!!r, a);
            var o = [0, 0],
              l,
              c;
            for (n = 0; n < a; n += 1)
              (l = e && e[n] ? e[n] : o),
                (c = i && i[n] ? i[n] : o),
                s.setTripleAt(
                  t[n][0],
                  t[n][1],
                  c[0] + t[n][0],
                  c[1] + t[n][1],
                  l[0] + t[n][0],
                  l[1] + t[n][1],
                  n,
                  !0
                );
            return s;
          }
          function initiateExpression(elem, data, property) {
            function noOp(t) {
              return t;
            }
            if (!elem.globalData.renderConfig.runExpressions) return noOp;
            var val = data.x,
              needsVelocity = /velocity(?![\w\d])/.test(val),
              _needsRandom = val.indexOf("random") !== -1,
              elemType = elem.data.ty,
              transform,
              $bm_transform,
              content,
              effect,
              thisProperty = property;
            (thisProperty.valueAtTime = thisProperty.getValueAtTime),
              Object.defineProperty(thisProperty, "value", {
                get: function () {
                  return thisProperty.v;
                },
              }),
              (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
              (elem.comp.displayStartTime = 0);
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
              outPoint = elem.data.op / elem.comp.globalData.frameRate,
              width = elem.data.sw ? elem.data.sw : 0,
              height = elem.data.sh ? elem.data.sh : 0,
              name = elem.data.nm,
              loopIn,
              loop_in,
              loopOut,
              loop_out,
              smooth,
              toWorld,
              fromWorld,
              fromComp,
              toComp,
              fromCompToSurface,
              position,
              rotation,
              anchorPoint,
              scale,
              thisLayer,
              thisComp,
              mask,
              valueAtTime,
              velocityAtTime,
              scoped_bm_rt,
              expression_function = eval(
                "[function _expression_function(){" +
                  val +
                  ";scoped_bm_rt=$bm_rt}]"
              )[0],
              numKeys = property.kf ? data.k.length : 0,
              active = !this.data || this.data.hd !== !0,
              wiggle = function t(e, i) {
                var r,
                  n,
                  a = this.pv.length ? this.pv.length : 1,
                  s = createTypedArray("float32", a);
                e = 5;
                var o = Math.floor(time * e);
                for (r = 0, n = 0; r < o; ) {
                  for (n = 0; n < a; n += 1)
                    s[n] += -i + i * 2 * BMMath.random();
                  r += 1;
                }
                var l = time * e,
                  c = l - Math.floor(l),
                  p = createTypedArray("float32", a);
                if (a > 1) {
                  for (n = 0; n < a; n += 1)
                    p[n] =
                      this.pv[n] + s[n] + (-i + i * 2 * BMMath.random()) * c;
                  return p;
                }
                return this.pv + s[0] + (-i + i * 2 * BMMath.random()) * c;
              }.bind(this);
            thisProperty.loopIn &&
              ((loopIn = thisProperty.loopIn.bind(thisProperty)),
              (loop_in = loopIn)),
              thisProperty.loopOut &&
                ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                (loop_out = loopOut)),
              thisProperty.smooth &&
                (smooth = thisProperty.smooth.bind(thisProperty));
            function loopInDuration(t, e) {
              return loopIn(t, e, !0);
            }
            function loopOutDuration(t, e) {
              return loopOut(t, e, !0);
            }
            this.getValueAtTime &&
              (valueAtTime = this.getValueAtTime.bind(this)),
              this.getVelocityAtTime &&
                (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(
              elem.comp.globalData.projectInterface
            );
            function lookAt(t, e) {
              var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                r =
                  Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) /
                  degToRads,
                n = -Math.atan2(i[1], i[2]) / degToRads;
              return [n, r, 0];
            }
            function easeOut(t, e, i, r, n) {
              return applyEase(easeOutBez, t, e, i, r, n);
            }
            function easeIn(t, e, i, r, n) {
              return applyEase(easeInBez, t, e, i, r, n);
            }
            function ease(t, e, i, r, n) {
              return applyEase(easeInOutBez, t, e, i, r, n);
            }
            function applyEase(t, e, i, r, n, a) {
              n === void 0 ? ((n = i), (a = r)) : (e = (e - i) / (r - i)),
                e > 1 ? (e = 1) : e < 0 && (e = 0);
              var s = t(e);
              if ($bm_isInstanceOfArray(n)) {
                var o,
                  l = n.length,
                  c = createTypedArray("float32", l);
                for (o = 0; o < l; o += 1) c[o] = (a[o] - n[o]) * s + n[o];
                return c;
              }
              return (a - n) * s + n;
            }
            function nearestKey(t) {
              var e,
                i = data.k.length,
                r,
                n;
              if (!data.k.length || typeof data.k[0] == "number")
                (r = 0), (n = 0);
              else if (
                ((r = -1),
                (t *= elem.comp.globalData.frameRate),
                t < data.k[0].t)
              )
                (r = 1), (n = data.k[0].t);
              else {
                for (e = 0; e < i - 1; e += 1)
                  if (t === data.k[e].t) {
                    (r = e + 1), (n = data.k[e].t);
                    break;
                  } else if (t > data.k[e].t && t < data.k[e + 1].t) {
                    t - data.k[e].t > data.k[e + 1].t - t
                      ? ((r = e + 2), (n = data.k[e + 1].t))
                      : ((r = e + 1), (n = data.k[e].t));
                    break;
                  }
                r === -1 && ((r = e + 1), (n = data.k[e].t));
              }
              var a = {};
              return (
                (a.index = r), (a.time = n / elem.comp.globalData.frameRate), a
              );
            }
            function key(t) {
              var e, i, r;
              if (!data.k.length || typeof data.k[0] == "number")
                throw new Error("The property has no keyframe at index " + t);
              (t -= 1),
                (e = {
                  time: data.k[t].t / elem.comp.globalData.frameRate,
                  value: [],
                });
              var n = Object.prototype.hasOwnProperty.call(data.k[t], "s")
                ? data.k[t].s
                : data.k[t - 1].e;
              for (r = n.length, i = 0; i < r; i += 1)
                (e[i] = n[i]), (e.value[i] = n[i]);
              return e;
            }
            function framesToTime(t, e) {
              return e || (e = elem.comp.globalData.frameRate), t / e;
            }
            function timeToFrames(t, e) {
              return (
                !t && t !== 0 && (t = time),
                e || (e = elem.comp.globalData.frameRate),
                t * e
              );
            }
            function seedRandom(t) {
              BMMath.seedrandom(randSeed + t);
            }
            function sourceRectAtTime() {
              return elem.sourceRectAtTime();
            }
            function substring(t, e) {
              return typeof value == "string"
                ? e === void 0
                  ? value.substring(t)
                  : value.substring(t, e)
                : "";
            }
            function substr(t, e) {
              return typeof value == "string"
                ? e === void 0
                  ? value.substr(t)
                  : value.substr(t, e)
                : "";
            }
            function posterizeTime(t) {
              (time = t === 0 ? 0 : Math.floor(time * t) / t),
                (value = valueAtTime(time));
            }
            var time,
              velocity,
              value,
              text,
              textIndex,
              textTotal,
              selectorValue,
              index = elem.data.ind,
              hasParent = !!(elem.hierarchy && elem.hierarchy.length),
              parent,
              randSeed = Math.floor(Math.random() * 1e6),
              globalData = elem.globalData;
            function executeExpression(t) {
              return (
                (value = t),
                this.frameExpressionId === elem.globalData.frameId &&
                this.propType !== "textSelector"
                  ? value
                  : (this.propType === "textSelector" &&
                      ((textIndex = this.textIndex),
                      (textTotal = this.textTotal),
                      (selectorValue = this.selectorValue)),
                    thisLayer ||
                      ((text = elem.layerInterface.text),
                      (thisLayer = elem.layerInterface),
                      (thisComp = elem.comp.compInterface),
                      (toWorld = thisLayer.toWorld.bind(thisLayer)),
                      (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                      (fromComp = thisLayer.fromComp.bind(thisLayer)),
                      (toComp = thisLayer.toComp.bind(thisLayer)),
                      (mask = thisLayer.mask
                        ? thisLayer.mask.bind(thisLayer)
                        : null),
                      (fromCompToSurface = fromComp)),
                    transform ||
                      ((transform = elem.layerInterface(
                        "ADBE Transform Group"
                      )),
                      ($bm_transform = transform),
                      transform && (anchorPoint = transform.anchorPoint)),
                    elemType === 4 &&
                      !content &&
                      (content = thisLayer("ADBE Root Vectors Group")),
                    effect || (effect = thisLayer(4)),
                    (hasParent = !!(elem.hierarchy && elem.hierarchy.length)),
                    hasParent &&
                      !parent &&
                      (parent = elem.hierarchy[0].layerInterface),
                    (time =
                      this.comp.renderedFrame / this.comp.globalData.frameRate),
                    _needsRandom && seedRandom(randSeed + time),
                    needsVelocity && (velocity = velocityAtTime(time)),
                    expression_function(),
                    (this.frameExpressionId = elem.globalData.frameId),
                    (scoped_bm_rt =
                      scoped_bm_rt.propType === propTypes.SHAPE
                        ? scoped_bm_rt.v
                        : scoped_bm_rt),
                    scoped_bm_rt)
              );
            }
            return (
              (executeExpression.__preventDeadCodeRemoval = [
                $bm_transform,
                anchorPoint,
                time,
                velocity,
                inPoint,
                outPoint,
                width,
                height,
                name,
                loop_in,
                loop_out,
                smooth,
                toComp,
                fromCompToSurface,
                toWorld,
                fromWorld,
                mask,
                position,
                rotation,
                scale,
                thisComp,
                numKeys,
                active,
                wiggle,
                loopInDuration,
                loopOutDuration,
                comp,
                lookAt,
                easeOut,
                easeIn,
                ease,
                nearestKey,
                key,
                text,
                textIndex,
                textTotal,
                selectorValue,
                framesToTime,
                timeToFrames,
                sourceRectAtTime,
                substring,
                substr,
                posterizeTime,
                index,
                globalData,
              ]),
              executeExpression
            );
          }
          return (
            (ob.initiateExpression = initiateExpression),
            (ob.__preventDeadCodeRemoval = [
              window,
              document,
              XMLHttpRequest,
              fetch,
              frames,
              $bm_neg,
              add,
              $bm_sum,
              $bm_sub,
              $bm_mul,
              $bm_div,
              $bm_mod,
              clamp,
              radians_to_degrees,
              degreesToRadians,
              degrees_to_radians,
              normalize,
              rgbToHsl,
              hslToRgb,
              linear,
              random,
              createPath,
              _lottieGlobal,
            ]),
            (ob.resetFrame = resetFrame),
            ob
          );
        })(),
        Expressions = (function () {
          var t = {};
          (t.initExpressions = e),
            (t.resetFrame = ExpressionManager.resetFrame);
          function e(i) {
            var r = 0,
              n = [];
            function a() {
              r += 1;
            }
            function s() {
              (r -= 1), r === 0 && l();
            }
            function o(c) {
              n.indexOf(c) === -1 && n.push(c);
            }
            function l() {
              var c,
                p = n.length;
              for (c = 0; c < p; c += 1) n[c].release();
              n.length = 0;
            }
            (i.renderer.compInterface = CompExpressionInterface(i.renderer)),
              i.renderer.globalData.projectInterface.registerComposition(
                i.renderer
              ),
              (i.renderer.globalData.pushExpression = a),
              (i.renderer.globalData.popExpression = s),
              (i.renderer.globalData.registerExpressionProperty = o);
          }
          return t;
        })(),
        MaskManagerInterface = (function () {
          function t(i, r) {
            (this._mask = i), (this._data = r);
          }
          Object.defineProperty(t.prototype, "maskPath", {
            get: function () {
              return (
                this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
              );
            },
          }),
            Object.defineProperty(t.prototype, "maskOpacity", {
              get: function () {
                return (
                  this._mask.op.k && this._mask.op.getValue(),
                  this._mask.op.v * 100
                );
              },
            });
          var e = function (r) {
            var n = createSizedArray(r.viewData.length),
              a,
              s = r.viewData.length;
            for (a = 0; a < s; a += 1)
              n[a] = new t(r.viewData[a], r.masksProperties[a]);
            var o = function (c) {
              for (a = 0; a < s; ) {
                if (r.masksProperties[a].nm === c) return n[a];
                a += 1;
              }
              return null;
            };
            return o;
          };
          return e;
        })(),
        ExpressionPropertyInterface = (function () {
          var t = { pv: 0, v: 0, mult: 1 },
            e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
          function i(s, o, l) {
            Object.defineProperty(s, "velocity", {
              get: function () {
                return o.getVelocityAtTime(o.comp.currentFrame);
              },
            }),
              (s.numKeys = o.keyframes ? o.keyframes.length : 0),
              (s.key = function (c) {
                if (!s.numKeys) return 0;
                var p = "";
                "s" in o.keyframes[c - 1]
                  ? (p = o.keyframes[c - 1].s)
                  : "e" in o.keyframes[c - 2]
                  ? (p = o.keyframes[c - 2].e)
                  : (p = o.keyframes[c - 2].s);
                var _ =
                  l === "unidimensional" ? new Number(p) : Object.assign({}, p);
                return (
                  (_.time =
                    o.keyframes[c - 1].t / o.elem.comp.globalData.frameRate),
                  (_.value = l === "unidimensional" ? p[0] : p),
                  _
                );
              }),
              (s.valueAtTime = o.getValueAtTime),
              (s.speedAtTime = o.getSpeedAtTime),
              (s.velocityAtTime = o.getVelocityAtTime),
              (s.propertyGroup = o.propertyGroup);
          }
          function r(s) {
            (!s || !("pv" in s)) && (s = t);
            var o = 1 / s.mult,
              l = s.pv * o,
              c = new Number(l);
            return (
              (c.value = l),
              i(c, s, "unidimensional"),
              function () {
                return (
                  s.k && s.getValue(),
                  (l = s.v * o),
                  c.value !== l &&
                    ((c = new Number(l)),
                    (c.value = l),
                    i(c, s, "unidimensional")),
                  c
                );
              }
            );
          }
          function n(s) {
            (!s || !("pv" in s)) && (s = e);
            var o = 1 / s.mult,
              l = (s.data && s.data.l) || s.pv.length,
              c = createTypedArray("float32", l),
              p = createTypedArray("float32", l);
            return (
              (c.value = p),
              i(c, s, "multidimensional"),
              function () {
                s.k && s.getValue();
                for (var _ = 0; _ < l; _ += 1)
                  (p[_] = s.v[_] * o), (c[_] = p[_]);
                return c;
              }
            );
          }
          function a() {
            return t;
          }
          return function (s) {
            return s ? (s.propType === "unidimensional" ? r(s) : n(s)) : a;
          };
        })(),
        TransformExpressionInterface = (function () {
          return function (t) {
            function e(s) {
              switch (s) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return e.rotation;
                case "ADBE Rotate X":
                  return e.xRotation;
                case "ADBE Rotate Y":
                  return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return e.position;
                case "ADBE Position_0":
                  return e.xPosition;
                case "ADBE Position_1":
                  return e.yPosition;
                case "ADBE Position_2":
                  return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return e.opacity;
                default:
                  return null;
              }
            }
            Object.defineProperty(e, "rotation", {
              get: ExpressionPropertyInterface(t.r || t.rz),
            }),
              Object.defineProperty(e, "zRotation", {
                get: ExpressionPropertyInterface(t.rz || t.r),
              }),
              Object.defineProperty(e, "xRotation", {
                get: ExpressionPropertyInterface(t.rx),
              }),
              Object.defineProperty(e, "yRotation", {
                get: ExpressionPropertyInterface(t.ry),
              }),
              Object.defineProperty(e, "scale", {
                get: ExpressionPropertyInterface(t.s),
              });
            var i, r, n, a;
            return (
              t.p
                ? (a = ExpressionPropertyInterface(t.p))
                : ((i = ExpressionPropertyInterface(t.px)),
                  (r = ExpressionPropertyInterface(t.py)),
                  t.pz && (n = ExpressionPropertyInterface(t.pz))),
              Object.defineProperty(e, "position", {
                get: function () {
                  return t.p ? a() : [i(), r(), n ? n() : 0];
                },
              }),
              Object.defineProperty(e, "xPosition", {
                get: ExpressionPropertyInterface(t.px),
              }),
              Object.defineProperty(e, "yPosition", {
                get: ExpressionPropertyInterface(t.py),
              }),
              Object.defineProperty(e, "zPosition", {
                get: ExpressionPropertyInterface(t.pz),
              }),
              Object.defineProperty(e, "anchorPoint", {
                get: ExpressionPropertyInterface(t.a),
              }),
              Object.defineProperty(e, "opacity", {
                get: ExpressionPropertyInterface(t.o),
              }),
              Object.defineProperty(e, "skew", {
                get: ExpressionPropertyInterface(t.sk),
              }),
              Object.defineProperty(e, "skewAxis", {
                get: ExpressionPropertyInterface(t.sa),
              }),
              Object.defineProperty(e, "orientation", {
                get: ExpressionPropertyInterface(t.or),
              }),
              e
            );
          };
        })(),
        LayerExpressionInterface = (function () {
          function t(c) {
            var p = new Matrix();
            if (c !== void 0) {
              var _ = this._elem.finalTransform.mProp.getValueAtTime(c);
              _.clone(p);
            } else {
              var h = this._elem.finalTransform.mProp;
              h.applyToMatrix(p);
            }
            return p;
          }
          function e(c, p) {
            var _ = this.getMatrix(p);
            return (
              (_.props[12] = 0),
              (_.props[13] = 0),
              (_.props[14] = 0),
              this.applyPoint(_, c)
            );
          }
          function i(c, p) {
            var _ = this.getMatrix(p);
            return this.applyPoint(_, c);
          }
          function r(c, p) {
            var _ = this.getMatrix(p);
            return (
              (_.props[12] = 0),
              (_.props[13] = 0),
              (_.props[14] = 0),
              this.invertPoint(_, c)
            );
          }
          function n(c, p) {
            var _ = this.getMatrix(p);
            return this.invertPoint(_, c);
          }
          function a(c, p) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var _,
                h = this._elem.hierarchy.length;
              for (_ = 0; _ < h; _ += 1)
                this._elem.hierarchy[_].finalTransform.mProp.applyToMatrix(c);
            }
            return c.applyToPointArray(p[0], p[1], p[2] || 0);
          }
          function s(c, p) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var _,
                h = this._elem.hierarchy.length;
              for (_ = 0; _ < h; _ += 1)
                this._elem.hierarchy[_].finalTransform.mProp.applyToMatrix(c);
            }
            return c.inversePoint(p);
          }
          function o(c) {
            var p = new Matrix();
            if (
              (p.reset(),
              this._elem.finalTransform.mProp.applyToMatrix(p),
              this._elem.hierarchy && this._elem.hierarchy.length)
            ) {
              var _,
                h = this._elem.hierarchy.length;
              for (_ = 0; _ < h; _ += 1)
                this._elem.hierarchy[_].finalTransform.mProp.applyToMatrix(p);
              return p.inversePoint(c);
            }
            return p.inversePoint(c);
          }
          function l() {
            return [1, 1, 1, 1];
          }
          return function (c) {
            var p;
            function _(f) {
              b.mask = new MaskManagerInterface(f, c);
            }
            function h(f) {
              b.effect = f;
            }
            function b(f) {
              switch (f) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                  return b.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                  return p;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                  return b.effect;
                case "ADBE Text Properties":
                  return b.textInterface;
                default:
                  return null;
              }
            }
            (b.getMatrix = t),
              (b.invertPoint = s),
              (b.applyPoint = a),
              (b.toWorld = i),
              (b.toWorldVec = e),
              (b.fromWorld = n),
              (b.fromWorldVec = r),
              (b.toComp = i),
              (b.fromComp = o),
              (b.sampleImage = l),
              (b.sourceRectAtTime = c.sourceRectAtTime.bind(c)),
              (b._elem = c),
              (p = TransformExpressionInterface(c.finalTransform.mProp));
            var v = getDescriptor(p, "anchorPoint");
            return (
              Object.defineProperties(b, {
                hasParent: {
                  get: function () {
                    return c.hierarchy.length;
                  },
                },
                parent: {
                  get: function () {
                    return c.hierarchy[0].layerInterface;
                  },
                },
                rotation: getDescriptor(p, "rotation"),
                scale: getDescriptor(p, "scale"),
                position: getDescriptor(p, "position"),
                opacity: getDescriptor(p, "opacity"),
                anchorPoint: v,
                anchor_point: v,
                transform: {
                  get: function () {
                    return p;
                  },
                },
                active: {
                  get: function () {
                    return c.isInRange;
                  },
                },
              }),
              (b.startTime = c.data.st),
              (b.index = c.data.ind),
              (b.source = c.data.refId),
              (b.height = c.data.ty === 0 ? c.data.h : 100),
              (b.width = c.data.ty === 0 ? c.data.w : 100),
              (b.inPoint = c.data.ip / c.comp.globalData.frameRate),
              (b.outPoint = c.data.op / c.comp.globalData.frameRate),
              (b._name = c.data.nm),
              (b.registerMaskInterface = _),
              (b.registerEffectsInterface = h),
              b
            );
          };
        })(),
        propertyGroupFactory = (function () {
          return function (t, e) {
            return function (i) {
              return (i = i === void 0 ? 1 : i), i <= 0 ? t : e(i - 1);
            };
          };
        })(),
        PropertyInterface = (function () {
          return function (t, e) {
            var i = { _name: t };
            function r(n) {
              return (n = n === void 0 ? 1 : n), n <= 0 ? i : e(n - 1);
            }
            return r;
          };
        })(),
        EffectsExpressionInterface = (function () {
          var t = { createEffectsInterface: e };
          function e(n, a) {
            if (n.effectsManager) {
              var s = [],
                o = n.data.ef,
                l,
                c = n.effectsManager.effectElements.length;
              for (l = 0; l < c; l += 1)
                s.push(i(o[l], n.effectsManager.effectElements[l], a, n));
              var p = n.data.ef || [],
                _ = function (b) {
                  for (l = 0, c = p.length; l < c; ) {
                    if (b === p[l].nm || b === p[l].mn || b === p[l].ix)
                      return s[l];
                    l += 1;
                  }
                  return null;
                };
              return (
                Object.defineProperty(_, "numProperties", {
                  get: function () {
                    return p.length;
                  },
                }),
                _
              );
            }
            return null;
          }
          function i(n, a, s, o) {
            function l(b) {
              for (var v = n.ef, f = 0, E = v.length; f < E; ) {
                if (b === v[f].nm || b === v[f].mn || b === v[f].ix)
                  return v[f].ty === 5 ? p[f] : p[f]();
                f += 1;
              }
              throw new Error();
            }
            var c = propertyGroupFactory(l, s),
              p = [],
              _,
              h = n.ef.length;
            for (_ = 0; _ < h; _ += 1)
              n.ef[_].ty === 5
                ? p.push(
                    i(
                      n.ef[_],
                      a.effectElements[_],
                      a.effectElements[_].propertyGroup,
                      o
                    )
                  )
                : p.push(r(a.effectElements[_], n.ef[_].ty, o, c));
            return (
              n.mn === "ADBE Color Control" &&
                Object.defineProperty(l, "color", {
                  get: function () {
                    return p[0]();
                  },
                }),
              Object.defineProperties(l, {
                numProperties: {
                  get: function () {
                    return n.np;
                  },
                },
                _name: { value: n.nm },
                propertyGroup: { value: c },
              }),
              (l.enabled = n.en !== 0),
              (l.active = l.enabled),
              l
            );
          }
          function r(n, a, s, o) {
            var l = ExpressionPropertyInterface(n.p);
            function c() {
              return a === 10 ? s.comp.compInterface(n.p.v) : l();
            }
            return (
              n.p.setGroupProperty &&
                n.p.setGroupProperty(PropertyInterface("", o)),
              c
            );
          }
          return t;
        })(),
        ShapePathInterface = (function () {
          return function (e, i, r) {
            var n = i.sh;
            function a(o) {
              return o === "Shape" ||
                o === "shape" ||
                o === "Path" ||
                o === "path" ||
                o === "ADBE Vector Shape" ||
                o === 2
                ? a.path
                : null;
            }
            var s = propertyGroupFactory(a, r);
            return (
              n.setGroupProperty(PropertyInterface("Path", s)),
              Object.defineProperties(a, {
                path: {
                  get: function () {
                    return n.k && n.getValue(), n;
                  },
                },
                shape: {
                  get: function () {
                    return n.k && n.getValue(), n;
                  },
                },
                _name: { value: e.nm },
                ix: { value: e.ix },
                propertyIndex: { value: e.ix },
                mn: { value: e.mn },
                propertyGroup: { value: r },
              }),
              a
            );
          };
        })(),
        ShapeExpressionInterface = (function () {
          function t(v, f, E) {
            var d = [],
              u,
              m = v ? v.length : 0;
            for (u = 0; u < m; u += 1)
              v[u].ty === "gr"
                ? d.push(i(v[u], f[u], E))
                : v[u].ty === "fl"
                ? d.push(r(v[u], f[u], E))
                : v[u].ty === "st"
                ? d.push(s(v[u], f[u], E))
                : v[u].ty === "tm"
                ? d.push(o(v[u], f[u], E))
                : v[u].ty === "tr" ||
                  (v[u].ty === "el"
                    ? d.push(c(v[u], f[u], E))
                    : v[u].ty === "sr"
                    ? d.push(p(v[u], f[u], E))
                    : v[u].ty === "sh"
                    ? d.push(ShapePathInterface(v[u], f[u], E))
                    : v[u].ty === "rc"
                    ? d.push(_(v[u], f[u], E))
                    : v[u].ty === "rd"
                    ? d.push(h(v[u], f[u], E))
                    : v[u].ty === "rp"
                    ? d.push(b(v[u], f[u], E))
                    : v[u].ty === "gf"
                    ? d.push(n(v[u], f[u], E))
                    : d.push(a(v[u], f[u], E)));
            return d;
          }
          function e(v, f, E) {
            var d,
              u = function (C) {
                for (var P = 0, T = d.length; P < T; ) {
                  if (
                    d[P]._name === C ||
                    d[P].mn === C ||
                    d[P].propertyIndex === C ||
                    d[P].ix === C ||
                    d[P].ind === C
                  )
                    return d[P];
                  P += 1;
                }
                return typeof C == "number" ? d[C - 1] : null;
              };
            (u.propertyGroup = propertyGroupFactory(u, E)),
              (d = t(v.it, f.it, u.propertyGroup)),
              (u.numProperties = d.length);
            var m = l(
              v.it[v.it.length - 1],
              f.it[f.it.length - 1],
              u.propertyGroup
            );
            return (
              (u.transform = m), (u.propertyIndex = v.cix), (u._name = v.nm), u
            );
          }
          function i(v, f, E) {
            var d = function (C) {
              switch (C) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                  return d.content;
                default:
                  return d.transform;
              }
            };
            d.propertyGroup = propertyGroupFactory(d, E);
            var u = e(v, f, d.propertyGroup),
              m = l(
                v.it[v.it.length - 1],
                f.it[f.it.length - 1],
                d.propertyGroup
              );
            return (
              (d.content = u),
              (d.transform = m),
              Object.defineProperty(d, "_name", {
                get: function () {
                  return v.nm;
                },
              }),
              (d.numProperties = v.np),
              (d.propertyIndex = v.ix),
              (d.nm = v.nm),
              (d.mn = v.mn),
              d
            );
          }
          function r(v, f, E) {
            function d(u) {
              return u === "Color" || u === "color"
                ? d.color
                : u === "Opacity" || u === "opacity"
                ? d.opacity
                : null;
            }
            return (
              Object.defineProperties(d, {
                color: { get: ExpressionPropertyInterface(f.c) },
                opacity: { get: ExpressionPropertyInterface(f.o) },
                _name: { value: v.nm },
                mn: { value: v.mn },
              }),
              f.c.setGroupProperty(PropertyInterface("Color", E)),
              f.o.setGroupProperty(PropertyInterface("Opacity", E)),
              d
            );
          }
          function n(v, f, E) {
            function d(u) {
              return u === "Start Point" || u === "start point"
                ? d.startPoint
                : u === "End Point" || u === "end point"
                ? d.endPoint
                : u === "Opacity" || u === "opacity"
                ? d.opacity
                : null;
            }
            return (
              Object.defineProperties(d, {
                startPoint: { get: ExpressionPropertyInterface(f.s) },
                endPoint: { get: ExpressionPropertyInterface(f.e) },
                opacity: { get: ExpressionPropertyInterface(f.o) },
                type: {
                  get: function () {
                    return "a";
                  },
                },
                _name: { value: v.nm },
                mn: { value: v.mn },
              }),
              f.s.setGroupProperty(PropertyInterface("Start Point", E)),
              f.e.setGroupProperty(PropertyInterface("End Point", E)),
              f.o.setGroupProperty(PropertyInterface("Opacity", E)),
              d
            );
          }
          function a() {
            function v() {
              return null;
            }
            return v;
          }
          function s(v, f, E) {
            var d = propertyGroupFactory(T, E),
              u = propertyGroupFactory(P, d);
            function m(M) {
              Object.defineProperty(P, v.d[M].nm, {
                get: ExpressionPropertyInterface(f.d.dataProps[M].p),
              });
            }
            var y,
              C = v.d ? v.d.length : 0,
              P = {};
            for (y = 0; y < C; y += 1)
              m(y), f.d.dataProps[y].p.setGroupProperty(u);
            function T(M) {
              return M === "Color" || M === "color"
                ? T.color
                : M === "Opacity" || M === "opacity"
                ? T.opacity
                : M === "Stroke Width" || M === "stroke width"
                ? T.strokeWidth
                : null;
            }
            return (
              Object.defineProperties(T, {
                color: { get: ExpressionPropertyInterface(f.c) },
                opacity: { get: ExpressionPropertyInterface(f.o) },
                strokeWidth: { get: ExpressionPropertyInterface(f.w) },
                dash: {
                  get: function () {
                    return P;
                  },
                },
                _name: { value: v.nm },
                mn: { value: v.mn },
              }),
              f.c.setGroupProperty(PropertyInterface("Color", d)),
              f.o.setGroupProperty(PropertyInterface("Opacity", d)),
              f.w.setGroupProperty(PropertyInterface("Stroke Width", d)),
              T
            );
          }
          function o(v, f, E) {
            function d(m) {
              return m === v.e.ix || m === "End" || m === "end"
                ? d.end
                : m === v.s.ix
                ? d.start
                : m === v.o.ix
                ? d.offset
                : null;
            }
            var u = propertyGroupFactory(d, E);
            return (
              (d.propertyIndex = v.ix),
              f.s.setGroupProperty(PropertyInterface("Start", u)),
              f.e.setGroupProperty(PropertyInterface("End", u)),
              f.o.setGroupProperty(PropertyInterface("Offset", u)),
              (d.propertyIndex = v.ix),
              (d.propertyGroup = E),
              Object.defineProperties(d, {
                start: { get: ExpressionPropertyInterface(f.s) },
                end: { get: ExpressionPropertyInterface(f.e) },
                offset: { get: ExpressionPropertyInterface(f.o) },
                _name: { value: v.nm },
              }),
              (d.mn = v.mn),
              d
            );
          }
          function l(v, f, E) {
            function d(m) {
              return v.a.ix === m || m === "Anchor Point"
                ? d.anchorPoint
                : v.o.ix === m || m === "Opacity"
                ? d.opacity
                : v.p.ix === m || m === "Position"
                ? d.position
                : v.r.ix === m ||
                  m === "Rotation" ||
                  m === "ADBE Vector Rotation"
                ? d.rotation
                : v.s.ix === m || m === "Scale"
                ? d.scale
                : (v.sk && v.sk.ix === m) || m === "Skew"
                ? d.skew
                : (v.sa && v.sa.ix === m) || m === "Skew Axis"
                ? d.skewAxis
                : null;
            }
            var u = propertyGroupFactory(d, E);
            return (
              f.transform.mProps.o.setGroupProperty(
                PropertyInterface("Opacity", u)
              ),
              f.transform.mProps.p.setGroupProperty(
                PropertyInterface("Position", u)
              ),
              f.transform.mProps.a.setGroupProperty(
                PropertyInterface("Anchor Point", u)
              ),
              f.transform.mProps.s.setGroupProperty(
                PropertyInterface("Scale", u)
              ),
              f.transform.mProps.r.setGroupProperty(
                PropertyInterface("Rotation", u)
              ),
              f.transform.mProps.sk &&
                (f.transform.mProps.sk.setGroupProperty(
                  PropertyInterface("Skew", u)
                ),
                f.transform.mProps.sa.setGroupProperty(
                  PropertyInterface("Skew Angle", u)
                )),
              f.transform.op.setGroupProperty(PropertyInterface("Opacity", u)),
              Object.defineProperties(d, {
                opacity: {
                  get: ExpressionPropertyInterface(f.transform.mProps.o),
                },
                position: {
                  get: ExpressionPropertyInterface(f.transform.mProps.p),
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(f.transform.mProps.a),
                },
                scale: {
                  get: ExpressionPropertyInterface(f.transform.mProps.s),
                },
                rotation: {
                  get: ExpressionPropertyInterface(f.transform.mProps.r),
                },
                skew: {
                  get: ExpressionPropertyInterface(f.transform.mProps.sk),
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(f.transform.mProps.sa),
                },
                _name: { value: v.nm },
              }),
              (d.ty = "tr"),
              (d.mn = v.mn),
              (d.propertyGroup = E),
              d
            );
          }
          function c(v, f, E) {
            function d(y) {
              return v.p.ix === y ? d.position : v.s.ix === y ? d.size : null;
            }
            var u = propertyGroupFactory(d, E);
            d.propertyIndex = v.ix;
            var m = f.sh.ty === "tm" ? f.sh.prop : f.sh;
            return (
              m.s.setGroupProperty(PropertyInterface("Size", u)),
              m.p.setGroupProperty(PropertyInterface("Position", u)),
              Object.defineProperties(d, {
                size: { get: ExpressionPropertyInterface(m.s) },
                position: { get: ExpressionPropertyInterface(m.p) },
                _name: { value: v.nm },
              }),
              (d.mn = v.mn),
              d
            );
          }
          function p(v, f, E) {
            function d(y) {
              return v.p.ix === y
                ? d.position
                : v.r.ix === y
                ? d.rotation
                : v.pt.ix === y
                ? d.points
                : v.or.ix === y || y === "ADBE Vector Star Outer Radius"
                ? d.outerRadius
                : v.os.ix === y
                ? d.outerRoundness
                : v.ir &&
                  (v.ir.ix === y || y === "ADBE Vector Star Inner Radius")
                ? d.innerRadius
                : v.is && v.is.ix === y
                ? d.innerRoundness
                : null;
            }
            var u = propertyGroupFactory(d, E),
              m = f.sh.ty === "tm" ? f.sh.prop : f.sh;
            return (
              (d.propertyIndex = v.ix),
              m.or.setGroupProperty(PropertyInterface("Outer Radius", u)),
              m.os.setGroupProperty(PropertyInterface("Outer Roundness", u)),
              m.pt.setGroupProperty(PropertyInterface("Points", u)),
              m.p.setGroupProperty(PropertyInterface("Position", u)),
              m.r.setGroupProperty(PropertyInterface("Rotation", u)),
              v.ir &&
                (m.ir.setGroupProperty(PropertyInterface("Inner Radius", u)),
                m.is.setGroupProperty(PropertyInterface("Inner Roundness", u))),
              Object.defineProperties(d, {
                position: { get: ExpressionPropertyInterface(m.p) },
                rotation: { get: ExpressionPropertyInterface(m.r) },
                points: { get: ExpressionPropertyInterface(m.pt) },
                outerRadius: { get: ExpressionPropertyInterface(m.or) },
                outerRoundness: { get: ExpressionPropertyInterface(m.os) },
                innerRadius: { get: ExpressionPropertyInterface(m.ir) },
                innerRoundness: { get: ExpressionPropertyInterface(m.is) },
                _name: { value: v.nm },
              }),
              (d.mn = v.mn),
              d
            );
          }
          function _(v, f, E) {
            function d(y) {
              return v.p.ix === y
                ? d.position
                : v.r.ix === y
                ? d.roundness
                : v.s.ix === y || y === "Size" || y === "ADBE Vector Rect Size"
                ? d.size
                : null;
            }
            var u = propertyGroupFactory(d, E),
              m = f.sh.ty === "tm" ? f.sh.prop : f.sh;
            return (
              (d.propertyIndex = v.ix),
              m.p.setGroupProperty(PropertyInterface("Position", u)),
              m.s.setGroupProperty(PropertyInterface("Size", u)),
              m.r.setGroupProperty(PropertyInterface("Rotation", u)),
              Object.defineProperties(d, {
                position: { get: ExpressionPropertyInterface(m.p) },
                roundness: { get: ExpressionPropertyInterface(m.r) },
                size: { get: ExpressionPropertyInterface(m.s) },
                _name: { value: v.nm },
              }),
              (d.mn = v.mn),
              d
            );
          }
          function h(v, f, E) {
            function d(y) {
              return v.r.ix === y || y === "Round Corners 1" ? d.radius : null;
            }
            var u = propertyGroupFactory(d, E),
              m = f;
            return (
              (d.propertyIndex = v.ix),
              m.rd.setGroupProperty(PropertyInterface("Radius", u)),
              Object.defineProperties(d, {
                radius: { get: ExpressionPropertyInterface(m.rd) },
                _name: { value: v.nm },
              }),
              (d.mn = v.mn),
              d
            );
          }
          function b(v, f, E) {
            function d(y) {
              return v.c.ix === y || y === "Copies"
                ? d.copies
                : v.o.ix === y || y === "Offset"
                ? d.offset
                : null;
            }
            var u = propertyGroupFactory(d, E),
              m = f;
            return (
              (d.propertyIndex = v.ix),
              m.c.setGroupProperty(PropertyInterface("Copies", u)),
              m.o.setGroupProperty(PropertyInterface("Offset", u)),
              Object.defineProperties(d, {
                copies: { get: ExpressionPropertyInterface(m.c) },
                offset: { get: ExpressionPropertyInterface(m.o) },
                _name: { value: v.nm },
              }),
              (d.mn = v.mn),
              d
            );
          }
          return function (v, f, E) {
            var d;
            function u(y) {
              if (typeof y == "number")
                return (y = y === void 0 ? 1 : y), y === 0 ? E : d[y - 1];
              for (var C = 0, P = d.length; C < P; ) {
                if (d[C]._name === y) return d[C];
                C += 1;
              }
              return null;
            }
            function m() {
              return E;
            }
            return (
              (u.propertyGroup = propertyGroupFactory(u, m)),
              (d = t(v, f, u.propertyGroup)),
              (u.numProperties = d.length),
              (u._name = "Contents"),
              u
            );
          };
        })(),
        TextExpressionInterface = (function () {
          return function (t) {
            var e;
            function i(r) {
              switch (r) {
                case "ADBE Text Document":
                  return i.sourceText;
                default:
                  return null;
              }
            }
            return (
              Object.defineProperty(i, "sourceText", {
                get: function () {
                  t.textProperty.getValue();
                  var n = t.textProperty.currentData.t;
                  return (
                    (!e || n !== e.value) &&
                      ((e = new String(n)),
                      (e.value = n || new String(n)),
                      Object.defineProperty(e, "style", {
                        get: function () {
                          return { fillColor: t.textProperty.currentData.fc };
                        },
                      })),
                    e
                  );
                },
              }),
              i
            );
          };
        })();
      function _typeof(t) {
        "@babel/helpers - typeof";
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof = function (i) {
                return typeof i;
              })
            : (_typeof = function (i) {
                return i &&
                  typeof Symbol == "function" &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? "symbol"
                  : typeof i;
              }),
          _typeof(t)
        );
      }
      var FootageInterface = (function () {
          var t = function (r) {
              var n = "",
                a = r.getFootageData();
              function s() {
                return (n = ""), (a = r.getFootageData()), o;
              }
              function o(l) {
                if (a[l])
                  return (n = l), (a = a[l]), _typeof(a) === "object" ? o : a;
                var c = l.indexOf(n);
                if (c !== -1) {
                  var p = parseInt(l.substr(c + n.length), 10);
                  return (a = a[p]), _typeof(a) === "object" ? o : a;
                }
                return "";
              }
              return s;
            },
            e = function (r) {
              function n(a) {
                return a === "Outline" ? n.outlineInterface() : null;
              }
              return (n._name = "Outline"), (n.outlineInterface = t(r)), n;
            };
          return function (i) {
            function r(n) {
              return n === "Data" ? r.dataInterface : null;
            }
            return (r._name = "Data"), (r.dataInterface = e(i)), r;
          };
        })(),
        interfaces = {
          layer: LayerExpressionInterface,
          effects: EffectsExpressionInterface,
          comp: CompExpressionInterface,
          shape: ShapeExpressionInterface,
          text: TextExpressionInterface,
          footage: FootageInterface,
        };
      function getInterface(t) {
        return interfaces[t] || null;
      }
      var expressionHelpers = (function () {
        function t(s, o, l) {
          o.x &&
            ((l.k = !0),
            (l.x = !0),
            (l.initiateExpression = ExpressionManager.initiateExpression),
            l.effectsSequence.push(l.initiateExpression(s, o, l).bind(l)));
        }
        function e(s) {
          return (
            (s *= this.elem.globalData.frameRate),
            (s -= this.offsetTime),
            s !== this._cachingAtTime.lastFrame &&
              ((this._cachingAtTime.lastIndex =
                this._cachingAtTime.lastFrame < s
                  ? this._cachingAtTime.lastIndex
                  : 0),
              (this._cachingAtTime.value = this.interpolateValue(
                s,
                this._cachingAtTime
              )),
              (this._cachingAtTime.lastFrame = s)),
            this._cachingAtTime.value
          );
        }
        function i(s) {
          var o = -0.01,
            l = this.getValueAtTime(s),
            c = this.getValueAtTime(s + o),
            p = 0;
          if (l.length) {
            var _;
            for (_ = 0; _ < l.length; _ += 1) p += Math.pow(c[_] - l[_], 2);
            p = Math.sqrt(p) * 100;
          } else p = 0;
          return p;
        }
        function r(s) {
          if (this.vel !== void 0) return this.vel;
          var o = -0.001,
            l = this.getValueAtTime(s),
            c = this.getValueAtTime(s + o),
            p;
          if (l.length) {
            p = createTypedArray("float32", l.length);
            var _;
            for (_ = 0; _ < l.length; _ += 1) p[_] = (c[_] - l[_]) / o;
          } else p = (c - l) / o;
          return p;
        }
        function n() {
          return this.pv;
        }
        function a(s) {
          this.propertyGroup = s;
        }
        return {
          searchExpressions: t,
          getSpeedAtTime: i,
          getVelocityAtTime: r,
          getValueAtTime: e,
          getStaticValueAtTime: n,
          setGroupProperty: a,
        };
      })();
      function addPropertyDecorator() {
        function t(h, b, v) {
          if (!this.k || !this.keyframes) return this.pv;
          h = h ? h.toLowerCase() : "";
          var f = this.comp.renderedFrame,
            E = this.keyframes,
            d = E[E.length - 1].t;
          if (f <= d) return this.pv;
          var u, m;
          v
            ? (b
                ? (u = Math.abs(d - this.elem.comp.globalData.frameRate * b))
                : (u = Math.max(0, d - this.elem.data.ip)),
              (m = d - u))
            : ((!b || b > E.length - 1) && (b = E.length - 1),
              (m = E[E.length - 1 - b].t),
              (u = d - m));
          var y, C, P;
          if (h === "pingpong") {
            var T = Math.floor((f - m) / u);
            if (T % 2 !== 0)
              return this.getValueAtTime(
                (u - ((f - m) % u) + m) / this.comp.globalData.frameRate,
                0
              );
          } else if (h === "offset") {
            var M = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
              I = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
              z = this.getValueAtTime(
                (((f - m) % u) + m) / this.comp.globalData.frameRate,
                0
              ),
              O = Math.floor((f - m) / u);
            if (this.pv.length) {
              for (P = new Array(M.length), C = P.length, y = 0; y < C; y += 1)
                P[y] = (I[y] - M[y]) * O + z[y];
              return P;
            }
            return (I - M) * O + z;
          } else if (h === "continue") {
            var D = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
              j = this.getValueAtTime(
                (d - 0.001) / this.comp.globalData.frameRate,
                0
              );
            if (this.pv.length) {
              for (P = new Array(D.length), C = P.length, y = 0; y < C; y += 1)
                P[y] =
                  D[y] +
                  ((D[y] - j[y]) * ((f - d) / this.comp.globalData.frameRate)) /
                    5e-4;
              return P;
            }
            return D + (D - j) * ((f - d) / 0.001);
          }
          return this.getValueAtTime(
            (((f - m) % u) + m) / this.comp.globalData.frameRate,
            0
          );
        }
        function e(h, b, v) {
          if (!this.k) return this.pv;
          h = h ? h.toLowerCase() : "";
          var f = this.comp.renderedFrame,
            E = this.keyframes,
            d = E[0].t;
          if (f >= d) return this.pv;
          var u, m;
          v
            ? (b
                ? (u = Math.abs(this.elem.comp.globalData.frameRate * b))
                : (u = Math.max(0, this.elem.data.op - d)),
              (m = d + u))
            : ((!b || b > E.length - 1) && (b = E.length - 1),
              (m = E[b].t),
              (u = m - d));
          var y, C, P;
          if (h === "pingpong") {
            var T = Math.floor((d - f) / u);
            if (T % 2 === 0)
              return this.getValueAtTime(
                (((d - f) % u) + d) / this.comp.globalData.frameRate,
                0
              );
          } else if (h === "offset") {
            var M = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
              I = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
              z = this.getValueAtTime(
                (u - ((d - f) % u) + d) / this.comp.globalData.frameRate,
                0
              ),
              O = Math.floor((d - f) / u) + 1;
            if (this.pv.length) {
              for (P = new Array(M.length), C = P.length, y = 0; y < C; y += 1)
                P[y] = z[y] - (I[y] - M[y]) * O;
              return P;
            }
            return z - (I - M) * O;
          } else if (h === "continue") {
            var D = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
              j = this.getValueAtTime(
                (d + 0.001) / this.comp.globalData.frameRate,
                0
              );
            if (this.pv.length) {
              for (P = new Array(D.length), C = P.length, y = 0; y < C; y += 1)
                P[y] = D[y] + ((D[y] - j[y]) * (d - f)) / 0.001;
              return P;
            }
            return D + ((D - j) * (d - f)) / 0.001;
          }
          return this.getValueAtTime(
            (u - (((d - f) % u) + d)) / this.comp.globalData.frameRate,
            0
          );
        }
        function i(h, b) {
          if (!this.k) return this.pv;
          if (((h = (h || 0.4) * 0.5), (b = Math.floor(b || 5)), b <= 1))
            return this.pv;
          var v = this.comp.renderedFrame / this.comp.globalData.frameRate,
            f = v - h,
            E = v + h,
            d = b > 1 ? (E - f) / (b - 1) : 1,
            u = 0,
            m = 0,
            y;
          this.pv.length
            ? (y = createTypedArray("float32", this.pv.length))
            : (y = 0);
          for (var C; u < b; ) {
            if (((C = this.getValueAtTime(f + u * d)), this.pv.length))
              for (m = 0; m < this.pv.length; m += 1) y[m] += C[m];
            else y += C;
            u += 1;
          }
          if (this.pv.length) for (m = 0; m < this.pv.length; m += 1) y[m] /= b;
          else y /= b;
          return y;
        }
        function r(h) {
          this._transformCachingAtTime ||
            (this._transformCachingAtTime = { v: new Matrix() });
          var b = this._transformCachingAtTime.v;
          if (
            (b.cloneFromProps(this.pre.props), this.appliedTransformations < 1)
          ) {
            var v = this.a.getValueAtTime(h);
            b.translate(
              -v[0] * this.a.mult,
              -v[1] * this.a.mult,
              v[2] * this.a.mult
            );
          }
          if (this.appliedTransformations < 2) {
            var f = this.s.getValueAtTime(h);
            b.scale(f[0] * this.s.mult, f[1] * this.s.mult, f[2] * this.s.mult);
          }
          if (this.sk && this.appliedTransformations < 3) {
            var E = this.sk.getValueAtTime(h),
              d = this.sa.getValueAtTime(h);
            b.skewFromAxis(-E * this.sk.mult, d * this.sa.mult);
          }
          if (this.r && this.appliedTransformations < 4) {
            var u = this.r.getValueAtTime(h);
            b.rotate(-u * this.r.mult);
          } else if (!this.r && this.appliedTransformations < 4) {
            var m = this.rz.getValueAtTime(h),
              y = this.ry.getValueAtTime(h),
              C = this.rx.getValueAtTime(h),
              P = this.or.getValueAtTime(h);
            b.rotateZ(-m * this.rz.mult)
              .rotateY(y * this.ry.mult)
              .rotateX(C * this.rx.mult)
              .rotateZ(-P[2] * this.or.mult)
              .rotateY(P[1] * this.or.mult)
              .rotateX(P[0] * this.or.mult);
          }
          if (this.data.p && this.data.p.s) {
            var T = this.px.getValueAtTime(h),
              M = this.py.getValueAtTime(h);
            if (this.data.p.z) {
              var I = this.pz.getValueAtTime(h);
              b.translate(
                T * this.px.mult,
                M * this.py.mult,
                -I * this.pz.mult
              );
            } else b.translate(T * this.px.mult, M * this.py.mult, 0);
          } else {
            var z = this.p.getValueAtTime(h);
            b.translate(
              z[0] * this.p.mult,
              z[1] * this.p.mult,
              -z[2] * this.p.mult
            );
          }
          return b;
        }
        function n() {
          return this.v.clone(new Matrix());
        }
        var a = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (h, b, v) {
          var f = a(h, b, v);
          return (
            f.dynamicProperties.length
              ? (f.getValueAtTime = r.bind(f))
              : (f.getValueAtTime = n.bind(f)),
            (f.setGroupProperty = expressionHelpers.setGroupProperty),
            f
          );
        };
        var s = PropertyFactory.getProp;
        PropertyFactory.getProp = function (h, b, v, f, E) {
          var d = s(h, b, v, f, E);
          d.kf
            ? (d.getValueAtTime = expressionHelpers.getValueAtTime.bind(d))
            : (d.getValueAtTime =
                expressionHelpers.getStaticValueAtTime.bind(d)),
            (d.setGroupProperty = expressionHelpers.setGroupProperty),
            (d.loopOut = t),
            (d.loopIn = e),
            (d.smooth = i),
            (d.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(d)),
            (d.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(d)),
            (d.numKeys = b.a === 1 ? b.k.length : 0),
            (d.propertyIndex = b.ix);
          var u = 0;
          return (
            v !== 0 &&
              (u = createTypedArray(
                "float32",
                b.a === 1 ? b.k[0].s.length : b.k.length
              )),
            (d._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: u,
            }),
            expressionHelpers.searchExpressions(h, b, d),
            d.k && E.addDynamicProperty(d),
            d
          );
        };
        function o(h) {
          return (
            this._cachingAtTime ||
              (this._cachingAtTime = {
                shapeValue: shapePool.clone(this.pv),
                lastIndex: 0,
                lastTime: initialDefaultFrame,
              }),
            (h *= this.elem.globalData.frameRate),
            (h -= this.offsetTime),
            h !== this._cachingAtTime.lastTime &&
              ((this._cachingAtTime.lastIndex =
                this._cachingAtTime.lastTime < h ? this._caching.lastIndex : 0),
              (this._cachingAtTime.lastTime = h),
              this.interpolateShape(
                h,
                this._cachingAtTime.shapeValue,
                this._cachingAtTime
              )),
            this._cachingAtTime.shapeValue
          );
        }
        var l = ShapePropertyFactory.getConstructorFunction(),
          c = ShapePropertyFactory.getKeyframedConstructorFunction();
        function p() {}
        (p.prototype = {
          vertices: function (b, v) {
            this.k && this.getValue();
            var f = this.v;
            v !== void 0 && (f = this.getValueAtTime(v, 0));
            var E,
              d = f._length,
              u = f[b],
              m = f.v,
              y = createSizedArray(d);
            for (E = 0; E < d; E += 1)
              b === "i" || b === "o"
                ? (y[E] = [u[E][0] - m[E][0], u[E][1] - m[E][1]])
                : (y[E] = [u[E][0], u[E][1]]);
            return y;
          },
          points: function (b) {
            return this.vertices("v", b);
          },
          inTangents: function (b) {
            return this.vertices("i", b);
          },
          outTangents: function (b) {
            return this.vertices("o", b);
          },
          isClosed: function () {
            return this.v.c;
          },
          pointOnPath: function (b, v) {
            var f = this.v;
            v !== void 0 && (f = this.getValueAtTime(v, 0)),
              this._segmentsLength ||
                (this._segmentsLength = bez.getSegmentsLength(f));
            for (
              var E = this._segmentsLength,
                d = E.lengths,
                u = E.totalLength * b,
                m = 0,
                y = d.length,
                C = 0,
                P;
              m < y;

            ) {
              if (C + d[m].addedLength > u) {
                var T = m,
                  M = f.c && m === y - 1 ? 0 : m + 1,
                  I = (u - C) / d[m].addedLength;
                P = bez.getPointInSegment(
                  f.v[T],
                  f.v[M],
                  f.o[T],
                  f.i[M],
                  I,
                  d[m]
                );
                break;
              } else C += d[m].addedLength;
              m += 1;
            }
            return (
              P ||
                (P = f.c
                  ? [f.v[0][0], f.v[0][1]]
                  : [f.v[f._length - 1][0], f.v[f._length - 1][1]]),
              P
            );
          },
          vectorOnPath: function (b, v, f) {
            b == 1 ? (b = this.v.c) : b == 0 && (b = 0.999);
            var E = this.pointOnPath(b, v),
              d = this.pointOnPath(b + 0.001, v),
              u = d[0] - E[0],
              m = d[1] - E[1],
              y = Math.sqrt(Math.pow(u, 2) + Math.pow(m, 2));
            if (y === 0) return [0, 0];
            var C = f === "tangent" ? [u / y, m / y] : [-m / y, u / y];
            return C;
          },
          tangentOnPath: function (b, v) {
            return this.vectorOnPath(b, v, "tangent");
          },
          normalOnPath: function (b, v) {
            return this.vectorOnPath(b, v, "normal");
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime,
        }),
          extendPrototype([p], l),
          extendPrototype([p], c),
          (c.prototype.getValueAtTime = o),
          (c.prototype.initiateExpression =
            ExpressionManager.initiateExpression);
        var _ = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (h, b, v, f, E) {
          var d = _(h, b, v, f, E);
          return (
            (d.propertyIndex = b.ix),
            (d.lock = !1),
            v === 3
              ? expressionHelpers.searchExpressions(h, b.pt, d)
              : v === 4 && expressionHelpers.searchExpressions(h, b.ks, d),
            d.k && h.addDynamicProperty(d),
            d
          );
        };
      }
      function initialize$1() {
        addPropertyDecorator();
      }
      function addDecorator() {
        function t() {
          return this.data.d.x
            ? ((this.calculateExpression =
                ExpressionManager.initiateExpression.bind(this)(
                  this.elem,
                  this.data.d,
                  this
                )),
              this.addEffect(this.getExpressionValue.bind(this)),
              !0)
            : null;
        }
        (TextProperty.prototype.getExpressionValue = function (e, i) {
          var r = this.calculateExpression(i);
          if (e.t !== r) {
            var n = {};
            return (
              this.copyData(n, e), (n.t = r.toString()), (n.__complete = !1), n
            );
          }
          return e;
        }),
          (TextProperty.prototype.searchProperty = function () {
            var e = this.searchKeyframes(),
              i = this.searchExpressions();
            return (this.kf = e || i), this.kf;
          }),
          (TextProperty.prototype.searchExpressions = t);
      }
      function initialize() {
        addDecorator();
      }
      function SVGComposableEffect() {}
      SVGComposableEffect.prototype = {
        createMergeNode: function t(e, i) {
          var r = createNS("feMerge");
          r.setAttribute("result", e);
          var n, a;
          for (a = 0; a < i.length; a += 1)
            (n = createNS("feMergeNode")),
              n.setAttribute("in", i[a]),
              r.appendChild(n),
              r.appendChild(n);
          return r;
        },
      };
      var linearFilterValue =
        "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
      function SVGTintFilter(t, e, i, r, n) {
        this.filterManager = e;
        var a = createNS("feColorMatrix");
        a.setAttribute("type", "matrix"),
          a.setAttribute("color-interpolation-filters", "linearRGB"),
          a.setAttribute("values", linearFilterValue + " 1 0"),
          (this.linearFilter = a),
          a.setAttribute("result", r + "_tint_1"),
          t.appendChild(a),
          (a = createNS("feColorMatrix")),
          a.setAttribute("type", "matrix"),
          a.setAttribute("color-interpolation-filters", "sRGB"),
          a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
          a.setAttribute("result", r + "_tint_2"),
          t.appendChild(a),
          (this.matrixFilter = a);
        var s = this.createMergeNode(r, [n, r + "_tint_1", r + "_tint_2"]);
        t.appendChild(s);
      }
      extendPrototype([SVGComposableEffect], SVGTintFilter),
        (SVGTintFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              i = this.filterManager.effectElements[1].p.v,
              r = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute(
              "values",
              linearFilterValue + " " + r + " 0"
            ),
              this.matrixFilter.setAttribute(
                "values",
                i[0] -
                  e[0] +
                  " 0 0 0 " +
                  e[0] +
                  " " +
                  (i[1] - e[1]) +
                  " 0 0 0 " +
                  e[1] +
                  " " +
                  (i[2] - e[2]) +
                  " 0 0 0 " +
                  e[2] +
                  " 0 0 0 1 0"
              );
          }
        });
      function SVGFillFilter(t, e, i, r) {
        this.filterManager = e;
        var n = createNS("feColorMatrix");
        n.setAttribute("type", "matrix"),
          n.setAttribute("color-interpolation-filters", "sRGB"),
          n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
          n.setAttribute("result", r),
          t.appendChild(n),
          (this.matrixFilter = n);
      }
      SVGFillFilter.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e = this.filterManager.effectElements[2].p.v,
            i = this.filterManager.effectElements[6].p.v;
          this.matrixFilter.setAttribute(
            "values",
            "0 0 0 0 " +
              e[0] +
              " 0 0 0 0 " +
              e[1] +
              " 0 0 0 0 " +
              e[2] +
              " 0 0 0 " +
              i +
              " 0"
          );
        }
      };
      function SVGStrokeEffect(t, e, i) {
        (this.initialized = !1),
          (this.filterManager = e),
          (this.elem = i),
          (this.paths = []);
      }
      (SVGStrokeEffect.prototype.initialize = function () {
        var t =
            this.elem.layerElement.children ||
            this.elem.layerElement.childNodes,
          e,
          i,
          r,
          n;
        for (
          this.filterManager.effectElements[1].p.v === 1
            ? ((n = this.elem.maskManager.masksProperties.length), (r = 0))
            : ((r = this.filterManager.effectElements[0].p.v - 1), (n = r + 1)),
            i = createNS("g"),
            i.setAttribute("fill", "none"),
            i.setAttribute("stroke-linecap", "round"),
            i.setAttribute("stroke-dashoffset", 1),
            r;
          r < n;
          r += 1
        )
          (e = createNS("path")),
            i.appendChild(e),
            this.paths.push({ p: e, m: r });
        if (this.filterManager.effectElements[10].p.v === 3) {
          var a = createNS("mask"),
            s = createElementID();
          a.setAttribute("id", s),
            a.setAttribute("mask-type", "alpha"),
            a.appendChild(i),
            this.elem.globalData.defs.appendChild(a);
          var o = createNS("g");
          for (
            o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")");
            t[0];

          )
            o.appendChild(t[0]);
          this.elem.layerElement.appendChild(o),
            (this.masker = a),
            i.setAttribute("stroke", "#fff");
        } else if (
          this.filterManager.effectElements[10].p.v === 1 ||
          this.filterManager.effectElements[10].p.v === 2
        ) {
          if (this.filterManager.effectElements[10].p.v === 2)
            for (
              t =
                this.elem.layerElement.children ||
                this.elem.layerElement.childNodes;
              t.length;

            )
              this.elem.layerElement.removeChild(t[0]);
          this.elem.layerElement.appendChild(i),
            this.elem.layerElement.removeAttribute("mask"),
            i.setAttribute("stroke", "#fff");
        }
        (this.initialized = !0), (this.pathMasker = i);
      }),
        (SVGStrokeEffect.prototype.renderFrame = function (t) {
          this.initialized || this.initialize();
          var e,
            i = this.paths.length,
            r,
            n;
          for (e = 0; e < i; e += 1)
            if (
              this.paths[e].m !== -1 &&
              ((r = this.elem.maskManager.viewData[this.paths[e].m]),
              (n = this.paths[e].p),
              (t || this.filterManager._mdf || r.prop._mdf) &&
                n.setAttribute("d", r.lastPath),
              t ||
                this.filterManager.effectElements[9].p._mdf ||
                this.filterManager.effectElements[4].p._mdf ||
                this.filterManager.effectElements[7].p._mdf ||
                this.filterManager.effectElements[8].p._mdf ||
                r.prop._mdf)
            ) {
              var a;
              if (
                this.filterManager.effectElements[7].p.v !== 0 ||
                this.filterManager.effectElements[8].p.v !== 100
              ) {
                var s =
                    Math.min(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ) * 0.01,
                  o =
                    Math.max(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ) * 0.01,
                  l = n.getTotalLength();
                a = "0 0 0 " + l * s + " ";
                var c = l * (o - s),
                  p =
                    1 +
                    this.filterManager.effectElements[4].p.v *
                      2 *
                      this.filterManager.effectElements[9].p.v *
                      0.01,
                  _ = Math.floor(c / p),
                  h;
                for (h = 0; h < _; h += 1)
                  a +=
                    "1 " +
                    this.filterManager.effectElements[4].p.v *
                      2 *
                      this.filterManager.effectElements[9].p.v *
                      0.01 +
                    " ";
                a += "0 " + l * 10 + " 0 0";
              } else
                a =
                  "1 " +
                  this.filterManager.effectElements[4].p.v *
                    2 *
                    this.filterManager.effectElements[9].p.v *
                    0.01;
              n.setAttribute("stroke-dasharray", a);
            }
          if (
            ((t || this.filterManager.effectElements[4].p._mdf) &&
              this.pathMasker.setAttribute(
                "stroke-width",
                this.filterManager.effectElements[4].p.v * 2
              ),
            (t || this.filterManager.effectElements[6].p._mdf) &&
              this.pathMasker.setAttribute(
                "opacity",
                this.filterManager.effectElements[6].p.v
              ),
            (this.filterManager.effectElements[10].p.v === 1 ||
              this.filterManager.effectElements[10].p.v === 2) &&
              (t || this.filterManager.effectElements[3].p._mdf))
          ) {
            var b = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute(
              "stroke",
              "rgb(" +
                bmFloor(b[0] * 255) +
                "," +
                bmFloor(b[1] * 255) +
                "," +
                bmFloor(b[2] * 255) +
                ")"
            );
          }
        });
      function SVGTritoneFilter(t, e, i, r) {
        this.filterManager = e;
        var n = createNS("feColorMatrix");
        n.setAttribute("type", "matrix"),
          n.setAttribute("color-interpolation-filters", "linearRGB"),
          n.setAttribute(
            "values",
            "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
          ),
          t.appendChild(n);
        var a = createNS("feComponentTransfer");
        a.setAttribute("color-interpolation-filters", "sRGB"),
          a.setAttribute("result", r),
          (this.matrixFilter = a);
        var s = createNS("feFuncR");
        s.setAttribute("type", "table"), a.appendChild(s), (this.feFuncR = s);
        var o = createNS("feFuncG");
        o.setAttribute("type", "table"), a.appendChild(o), (this.feFuncG = o);
        var l = createNS("feFuncB");
        l.setAttribute("type", "table"),
          a.appendChild(l),
          (this.feFuncB = l),
          t.appendChild(a);
      }
      SVGTritoneFilter.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e = this.filterManager.effectElements[0].p.v,
            i = this.filterManager.effectElements[1].p.v,
            r = this.filterManager.effectElements[2].p.v,
            n = r[0] + " " + i[0] + " " + e[0],
            a = r[1] + " " + i[1] + " " + e[1],
            s = r[2] + " " + i[2] + " " + e[2];
          this.feFuncR.setAttribute("tableValues", n),
            this.feFuncG.setAttribute("tableValues", a),
            this.feFuncB.setAttribute("tableValues", s);
        }
      };
      function SVGProLevelsFilter(t, e, i, r) {
        this.filterManager = e;
        var n = this.filterManager.effectElements,
          a = createNS("feComponentTransfer");
        (n[10].p.k ||
          n[10].p.v !== 0 ||
          n[11].p.k ||
          n[11].p.v !== 1 ||
          n[12].p.k ||
          n[12].p.v !== 1 ||
          n[13].p.k ||
          n[13].p.v !== 0 ||
          n[14].p.k ||
          n[14].p.v !== 1) &&
          (this.feFuncR = this.createFeFunc("feFuncR", a)),
          (n[17].p.k ||
            n[17].p.v !== 0 ||
            n[18].p.k ||
            n[18].p.v !== 1 ||
            n[19].p.k ||
            n[19].p.v !== 1 ||
            n[20].p.k ||
            n[20].p.v !== 0 ||
            n[21].p.k ||
            n[21].p.v !== 1) &&
            (this.feFuncG = this.createFeFunc("feFuncG", a)),
          (n[24].p.k ||
            n[24].p.v !== 0 ||
            n[25].p.k ||
            n[25].p.v !== 1 ||
            n[26].p.k ||
            n[26].p.v !== 1 ||
            n[27].p.k ||
            n[27].p.v !== 0 ||
            n[28].p.k ||
            n[28].p.v !== 1) &&
            (this.feFuncB = this.createFeFunc("feFuncB", a)),
          (n[31].p.k ||
            n[31].p.v !== 0 ||
            n[32].p.k ||
            n[32].p.v !== 1 ||
            n[33].p.k ||
            n[33].p.v !== 1 ||
            n[34].p.k ||
            n[34].p.v !== 0 ||
            n[35].p.k ||
            n[35].p.v !== 1) &&
            (this.feFuncA = this.createFeFunc("feFuncA", a)),
          (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
            (a.setAttribute("color-interpolation-filters", "sRGB"),
            t.appendChild(a)),
          (n[3].p.k ||
            n[3].p.v !== 0 ||
            n[4].p.k ||
            n[4].p.v !== 1 ||
            n[5].p.k ||
            n[5].p.v !== 1 ||
            n[6].p.k ||
            n[6].p.v !== 0 ||
            n[7].p.k ||
            n[7].p.v !== 1) &&
            ((a = createNS("feComponentTransfer")),
            a.setAttribute("color-interpolation-filters", "sRGB"),
            a.setAttribute("result", r),
            t.appendChild(a),
            (this.feFuncRComposed = this.createFeFunc("feFuncR", a)),
            (this.feFuncGComposed = this.createFeFunc("feFuncG", a)),
            (this.feFuncBComposed = this.createFeFunc("feFuncB", a)));
      }
      (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
        var i = createNS(t);
        return i.setAttribute("type", "table"), e.appendChild(i), i;
      }),
        (SVGProLevelsFilter.prototype.getTableValue = function (t, e, i, r, n) {
          for (
            var a = 0,
              s = 256,
              o,
              l = Math.min(t, e),
              c = Math.max(t, e),
              p = Array.call(null, { length: s }),
              _,
              h = 0,
              b = n - r,
              v = e - t;
            a <= 256;

          )
            (o = a / 256),
              o <= l
                ? (_ = v < 0 ? n : r)
                : o >= c
                ? (_ = v < 0 ? r : n)
                : (_ = r + b * Math.pow((o - t) / v, 1 / i)),
              (p[h] = _),
              (h += 1),
              (a += 256 / (s - 1));
          return p.join(" ");
        }),
        (SVGProLevelsFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e,
              i = this.filterManager.effectElements;
            this.feFuncRComposed &&
              (t ||
                i[3].p._mdf ||
                i[4].p._mdf ||
                i[5].p._mdf ||
                i[6].p._mdf ||
                i[7].p._mdf) &&
              ((e = this.getTableValue(
                i[3].p.v,
                i[4].p.v,
                i[5].p.v,
                i[6].p.v,
                i[7].p.v
              )),
              this.feFuncRComposed.setAttribute("tableValues", e),
              this.feFuncGComposed.setAttribute("tableValues", e),
              this.feFuncBComposed.setAttribute("tableValues", e)),
              this.feFuncR &&
                (t ||
                  i[10].p._mdf ||
                  i[11].p._mdf ||
                  i[12].p._mdf ||
                  i[13].p._mdf ||
                  i[14].p._mdf) &&
                ((e = this.getTableValue(
                  i[10].p.v,
                  i[11].p.v,
                  i[12].p.v,
                  i[13].p.v,
                  i[14].p.v
                )),
                this.feFuncR.setAttribute("tableValues", e)),
              this.feFuncG &&
                (t ||
                  i[17].p._mdf ||
                  i[18].p._mdf ||
                  i[19].p._mdf ||
                  i[20].p._mdf ||
                  i[21].p._mdf) &&
                ((e = this.getTableValue(
                  i[17].p.v,
                  i[18].p.v,
                  i[19].p.v,
                  i[20].p.v,
                  i[21].p.v
                )),
                this.feFuncG.setAttribute("tableValues", e)),
              this.feFuncB &&
                (t ||
                  i[24].p._mdf ||
                  i[25].p._mdf ||
                  i[26].p._mdf ||
                  i[27].p._mdf ||
                  i[28].p._mdf) &&
                ((e = this.getTableValue(
                  i[24].p.v,
                  i[25].p.v,
                  i[26].p.v,
                  i[27].p.v,
                  i[28].p.v
                )),
                this.feFuncB.setAttribute("tableValues", e)),
              this.feFuncA &&
                (t ||
                  i[31].p._mdf ||
                  i[32].p._mdf ||
                  i[33].p._mdf ||
                  i[34].p._mdf ||
                  i[35].p._mdf) &&
                ((e = this.getTableValue(
                  i[31].p.v,
                  i[32].p.v,
                  i[33].p.v,
                  i[34].p.v,
                  i[35].p.v
                )),
                this.feFuncA.setAttribute("tableValues", e));
          }
        });
      function SVGDropShadowEffect(t, e, i, r, n) {
        var a = e.container.globalData.renderConfig.filterSize,
          s = e.data.fs || a;
        t.setAttribute("x", s.x || a.x),
          t.setAttribute("y", s.y || a.y),
          t.setAttribute("width", s.width || a.width),
          t.setAttribute("height", s.height || a.height),
          (this.filterManager = e);
        var o = createNS("feGaussianBlur");
        o.setAttribute("in", "SourceAlpha"),
          o.setAttribute("result", r + "_drop_shadow_1"),
          o.setAttribute("stdDeviation", "0"),
          (this.feGaussianBlur = o),
          t.appendChild(o);
        var l = createNS("feOffset");
        l.setAttribute("dx", "25"),
          l.setAttribute("dy", "0"),
          l.setAttribute("in", r + "_drop_shadow_1"),
          l.setAttribute("result", r + "_drop_shadow_2"),
          (this.feOffset = l),
          t.appendChild(l);
        var c = createNS("feFlood");
        c.setAttribute("flood-color", "#00ff00"),
          c.setAttribute("flood-opacity", "1"),
          c.setAttribute("result", r + "_drop_shadow_3"),
          (this.feFlood = c),
          t.appendChild(c);
        var p = createNS("feComposite");
        p.setAttribute("in", r + "_drop_shadow_3"),
          p.setAttribute("in2", r + "_drop_shadow_2"),
          p.setAttribute("operator", "in"),
          p.setAttribute("result", r + "_drop_shadow_4"),
          t.appendChild(p);
        var _ = this.createMergeNode(r, [r + "_drop_shadow_4", n]);
        t.appendChild(_);
      }
      extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
        (SVGDropShadowEffect.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            if (
              ((t || this.filterManager.effectElements[4].p._mdf) &&
                this.feGaussianBlur.setAttribute(
                  "stdDeviation",
                  this.filterManager.effectElements[4].p.v / 4
                ),
              t || this.filterManager.effectElements[0].p._mdf)
            ) {
              var e = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute(
                "flood-color",
                rgbToHex(
                  Math.round(e[0] * 255),
                  Math.round(e[1] * 255),
                  Math.round(e[2] * 255)
                )
              );
            }
            if (
              ((t || this.filterManager.effectElements[1].p._mdf) &&
                this.feFlood.setAttribute(
                  "flood-opacity",
                  this.filterManager.effectElements[1].p.v / 255
                ),
              t ||
                this.filterManager.effectElements[2].p._mdf ||
                this.filterManager.effectElements[3].p._mdf)
            ) {
              var i = this.filterManager.effectElements[3].p.v,
                r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                n = i * Math.cos(r),
                a = i * Math.sin(r);
              this.feOffset.setAttribute("dx", n),
                this.feOffset.setAttribute("dy", a);
            }
          }
        });
      var _svgMatteSymbols = [];
      function SVGMatte3Effect(t, e, i) {
        (this.initialized = !1),
          (this.filterManager = e),
          (this.filterElem = t),
          (this.elem = i),
          (i.matteElement = createNS("g")),
          i.matteElement.appendChild(i.layerElement),
          i.matteElement.appendChild(i.transformedElement),
          (i.baseElement = i.matteElement);
      }
      (SVGMatte3Effect.prototype.findSymbol = function (t) {
        for (var e = 0, i = _svgMatteSymbols.length; e < i; ) {
          if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
          e += 1;
        }
        return null;
      }),
        (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
          var i = t.layerElement.parentNode;
          if (i) {
            for (
              var r = i.children, n = 0, a = r.length;
              n < a && r[n] !== t.layerElement;

            )
              n += 1;
            var s;
            n <= a - 2 && (s = r[n + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e),
              s ? i.insertBefore(o, s) : i.appendChild(o);
          }
        }),
        (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
          if (!this.findSymbol(e)) {
            var i = createElementID(),
              r = createNS("mask");
            r.setAttribute("id", e.layerId),
              r.setAttribute("mask-type", "alpha"),
              _svgMatteSymbols.push(e);
            var n = t.globalData.defs;
            n.appendChild(r);
            var a = createNS("symbol");
            a.setAttribute("id", i),
              this.replaceInParent(e, i),
              a.appendChild(e.layerElement),
              n.appendChild(a);
            var s = createNS("use");
            s.setAttribute("href", "#" + i),
              r.appendChild(s),
              (e.data.hd = !1),
              e.show();
          }
          t.setMatte(e.layerId);
        }),
        (SVGMatte3Effect.prototype.initialize = function () {
          for (
            var t = this.filterManager.effectElements[0].p.v,
              e = this.elem.comp.elements,
              i = 0,
              r = e.length;
            i < r;

          )
            e[i] &&
              e[i].data.ind === t &&
              this.setElementAsMask(this.elem, e[i]),
              (i += 1);
          this.initialized = !0;
        }),
        (SVGMatte3Effect.prototype.renderFrame = function () {
          this.initialized || this.initialize();
        });
      function SVGGaussianBlurEffect(t, e, i, r) {
        t.setAttribute("x", "-100%"),
          t.setAttribute("y", "-100%"),
          t.setAttribute("width", "300%"),
          t.setAttribute("height", "300%"),
          (this.filterManager = e);
        var n = createNS("feGaussianBlur");
        n.setAttribute("result", r),
          t.appendChild(n),
          (this.feGaussianBlur = n);
      }
      SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e = 0.3,
            i = this.filterManager.effectElements[0].p.v * e,
            r = this.filterManager.effectElements[1].p.v,
            n = r == 3 ? 0 : i,
            a = r == 2 ? 0 : i;
          this.feGaussianBlur.setAttribute("stdDeviation", n + " " + a);
          var s =
            this.filterManager.effectElements[2].p.v == 1
              ? "wrap"
              : "duplicate";
          this.feGaussianBlur.setAttribute("edgeMode", s);
        }
      };
      function TransformEffect() {}
      (TransformEffect.prototype.init = function (t) {
        (this.effectsManager = t),
          (this.type = effectTypes.TRANSFORM_EFFECT),
          (this.matrix = new Matrix()),
          (this.opacity = -1),
          (this._mdf = !1),
          (this._opMdf = !1);
      }),
        (TransformEffect.prototype.renderFrame = function (t) {
          if (
            ((this._opMdf = !1),
            (this._mdf = !1),
            t || this.effectsManager._mdf)
          ) {
            var e = this.effectsManager.effectElements,
              i = e[0].p.v,
              r = e[1].p.v,
              n = e[2].p.v === 1,
              a = e[3].p.v,
              s = n ? a : e[4].p.v,
              o = e[5].p.v,
              l = e[6].p.v,
              c = e[7].p.v;
            this.matrix.reset(),
              this.matrix.translate(-i[0], -i[1], i[2]),
              this.matrix.scale(s * 0.01, a * 0.01, 1),
              this.matrix.rotate(-c * degToRads),
              this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads),
              this.matrix.translate(r[0], r[1], 0),
              (this._mdf = !0),
              this.opacity !== e[8].p.v &&
                ((this.opacity = e[8].p.v), (this._opMdf = !0));
          }
        });
      function SVGTransformEffect(t, e) {
        this.init(e);
      }
      extendPrototype([TransformEffect], SVGTransformEffect);
      function CVTransformEffect(t) {
        this.init(t);
      }
      return (
        extendPrototype([TransformEffect], CVTransformEffect),
        registerRenderer("canvas", CanvasRenderer),
        registerRenderer("html", HybridRenderer),
        registerRenderer("svg", SVGRenderer),
        ShapeModifiers.registerModifier("tm", TrimModifier),
        ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
        ShapeModifiers.registerModifier("rp", RepeaterModifier),
        ShapeModifiers.registerModifier("rd", RoundCornersModifier),
        ShapeModifiers.registerModifier("zz", ZigZagModifier),
        ShapeModifiers.registerModifier("op", OffsetPathModifier),
        setExpressionsPlugin(Expressions),
        setExpressionInterfaces(getInterface),
        initialize$1(),
        initialize(),
        registerEffect$1(20, SVGTintFilter, !0),
        registerEffect$1(21, SVGFillFilter, !0),
        registerEffect$1(22, SVGStrokeEffect, !1),
        registerEffect$1(23, SVGTritoneFilter, !0),
        registerEffect$1(24, SVGProLevelsFilter, !0),
        registerEffect$1(25, SVGDropShadowEffect, !0),
        registerEffect$1(28, SVGMatte3Effect, !1),
        registerEffect$1(29, SVGGaussianBlurEffect, !0),
        registerEffect$1(35, SVGTransformEffect, !1),
        registerEffect(35, CVTransformEffect),
        lottie
      );
    });
});
N();
N();
N();
var Es = () => [];
function Ps(t, e) {
  t & 1 && (W(0, "img", 5), F(1, "p", 6), U(2, "$AIPUMP on SOL:"), L());
}
function ws(t, e) {
  t & 1 && (W(0, "img", 7), F(1, "p", 6), U(2, "$AIPUMP on BASE:"), L());
}
function Ts(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "button", 3),
      it("click", function () {
        let n = tt(i).$index,
          a = $(2);
        return et(a.copyAddress(n));
      }),
      lt(1, Ps, 3, 0)(2, ws, 3, 0),
      F(3, "p"),
      U(4),
      pi(5, "address"),
      L(),
      W(6, "img", 4),
      L();
  }
  if (t & 2) {
    let i = e.$implicit,
      r = e.$index;
    B(), ft(r == 0 ? 1 : 2), B(3), _t(di(5, 2, i));
  }
}
function Ms(t, e) {
  if ((t & 1 && Mt(0, Ts, 7, 4, "button", 2, jt), t & 2)) {
    let i = $();
    At(i.items);
  }
}
var Ei = class t {
  items = [
    "2w3A2P5juwg234spHKfps7WReWoVmujtErqjaZm9VaiP",
    "0xfbecd19292b1eFfEAA7B2e61F5101DdB6744A1Fb",
  ];
  copyAddress(e) {
    navigator.clipboard.writeText(this.items[e]);
  }
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-banner"]],
    standalone: !0,
    features: [Z],
    decls: 4,
    vars: 1,
    consts: [
      [1, "h-[50px]", "bg-orange", "overflow-hidden"],
      [
        1,
        "inline-flex",
        "items-center",
        "justify-end",
        "gap-5",
        "whitespace-nowrap",
        "h-[50px]",
        "animate-scroll",
        "horizontal-scrolling-items",
      ],
      [
        1,
        "flex",
        "items-center",
        "mr-10",
        "horizontal-scrolling-items__item",
        "hover:text-black/55",
      ],
      [
        1,
        "flex",
        "items-center",
        "mr-10",
        "horizontal-scrolling-items__item",
        "hover:text-black/55",
        3,
        "click",
      ],
      ["src", "icons/copy.svg", "alt", "", 1, "ml-2"],
      ["src", "icons/solana.svg", 1, "w-6", "h-6", "rounded-lg", "mr-2"],
      [1, "font-bold", "mr-1"],
      ["src", "icons/base.svg", 1, "w-6", "h-6", "rounded-lg", "mr-2"],
    ],
    template: function (i, r) {
      i & 1 &&
        (F(0, "div", 0)(1, "div", 1), Mt(2, Ms, 2, 0, null, null, jt), L()()),
        i & 2 && (B(2), At(mi(0, Es).constructor(12)));
    },
    dependencies: [jn],
    styles: [
      "@keyframes _ngcontent-%COMP%_infiniteScroll{0%{transform:translate(0)}to{transform:translate(calc(0px - 50%))}}.horizontal-scrolling-items[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_infiniteScroll;animation-duration:50s;animation-iteration-count:infinite;animation-timing-function:linear}",
    ],
    changeDetection: 0,
  });
};
N();
N();
N();
var Pi = class t {
  transform(e) {
    let i = new Date(e),
      n = Math.round((new Date().getTime() - i.getTime()) / 1e3),
      a = Math.round(n / 60),
      s = Math.round(a / 60),
      o = Math.round(s / 24),
      l = Math.round(o / 30.416),
      c = Math.round(o / 365);
    return Number.isNaN(n)
      ? ""
      : n <= 45
      ? "a few seconds ago"
      : n <= 90
      ? "a minute ago"
      : a <= 45
      ? a + " minutes ago"
      : a <= 90
      ? "an hour ago"
      : s <= 22
      ? s + " hours ago"
      : s <= 36
      ? "a day ago"
      : o <= 25
      ? o + " days ago"
      : o <= 45
      ? "a month ago"
      : o <= 345
      ? l + " months ago"
      : o <= 545
      ? "a year ago"
      : c + " years ago";
  }
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵpipe = on({ name: "timeAgo", type: t, pure: !0, standalone: !0 });
};
N();
var wi = class t {
  data = ht.required();
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-address-message"]],
    inputs: { data: [1, "data"] },
    standalone: !0,
    features: [Z],
    decls: 4,
    vars: 1,
    consts: [[1, "text-lg", "break-words"]],
    template: function (i, r) {
      i & 1 &&
        (F(0, "p"), U(1, "Your address is"), L(), F(2, "div", 0), U(3), L()),
        i & 2 && (B(3), _t(r.data().address));
    },
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
N();
var le = class t {
  chainId = ht.required();
  icon = kt(() => {
    switch (this.chainId()) {
      case 1:
        return "chains/ethereum.webp";
      case 324:
        return "chains/zksync.webp";
      case 10:
        return "chains/optimism.webp";
      case 42161:
        return "chains/arbitrum.webp";
      case 137:
        return "chains/polygon.webp";
      case 8453:
        return "chains/base.webp";
      default:
        return null;
    }
  });
  text = kt(() => {
    switch (this.chainId()) {
      case 1:
        return "Ethereum";
      case 324:
        return "zkSync";
      case 10:
        return "Optimism";
      case 42161:
        return "Arbitrum";
      case 137:
        return "Polygon";
      case 8453:
        return "Base";
      default:
        return null;
    }
  });
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-chain-badge"]],
    inputs: { chainId: [1, "chainId"] },
    standalone: !0,
    features: [Z],
    decls: 4,
    vars: 2,
    consts: [
      [
        1,
        "p-0.5",
        "rounded-lg",
        "bg-white/10",
        "flex",
        "gap-2",
        "items-center",
        "w-max",
      ],
      ["width", "18", "height", "18", 1, "rounded-full", 3, "src"],
    ],
    template: function (i, r) {
      i & 1 && (F(0, "div", 0), W(1, "img", 1), F(2, "span"), U(3), L()()),
        i & 2 && (B(), Y("src", r.icon(), Et), B(2), _t(r.text()));
    },
    encapsulation: 2,
    changeDetection: 0,
  });
};
var Ti = class t {
  data = ht.required();
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-balance-message"]],
    inputs: { data: [1, "data"] },
    standalone: !0,
    features: [Z],
    decls: 5,
    vars: 3,
    consts: [
      [1, "flex", "gap-2", "items-center"],
      [3, "chainId"],
      [1, "text-lg"],
    ],
    template: function (i, r) {
      i & 1 &&
        (F(0, "div", 0),
        U(1, "Your balance on "),
        W(2, "app-chain-badge", 1),
        L(),
        F(3, "div", 2),
        U(4),
        L()),
        i & 2 &&
          (B(2),
          Y("chainId", r.data().chainId),
          B(2),
          Zt("", r.data().balance, " ", r.data().tokenSymbol, ""));
    },
    dependencies: [le],
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
var Mi = class t {
  data = ht.required();
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-insufficient-balance-message"]],
    inputs: { data: [1, "data"] },
    standalone: !0,
    features: [Z],
    decls: 6,
    vars: 3,
    consts: [
      [1, "flex", "gap-2", "items-center"],
      [3, "chainId"],
      [1, "text-lg"],
    ],
    template: function (i, r) {
      i & 1 &&
        (F(0, "div", 0),
        U(1, "Your balance on "),
        W(2, "app-chain-badge", 1),
        U(3, " is insufficient."),
        L(),
        F(4, "div", 2),
        U(5),
        L()),
        i & 2 &&
          (B(2),
          Y("chainId", r.data().chainId),
          B(3),
          Zt("", r.data().balance, " ", r.data().tokenSymbol, ""));
    },
    dependencies: [le],
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
var Ai = class t {
  data = ht.required();
  icon = kt(() => {
    switch (this.data().chainId) {
      case 1:
        return "chains/ethereum.webp";
      case 324:
        return "chains/zksync.webp";
      case 10:
        return "chains/optimism.webp";
      case 42161:
        return "chains/arbitrum.webp";
      case 137:
        return "chains/polygon.webp";
      case 8453:
        return "chains/base.webp";
      default:
        return null;
    }
  });
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-swap-message"]],
    inputs: { data: [1, "data"] },
    standalone: !0,
    features: [Z],
    decls: 9,
    vars: 5,
    consts: [
      [1, "flex", "gap-2", "items-center"],
      [3, "chainId"],
      [1, "text-lg"],
    ],
    template: function (i, r) {
      i & 1 &&
        (F(0, "div", 0),
        U(1, "Swapping on "),
        W(2, "app-chain-badge", 1),
        L(),
        F(3, "div", 2),
        U(4),
        L(),
        F(5, "p"),
        U(6, "to"),
        L(),
        F(7, "div", 2),
        U(8),
        L()),
        i & 2 &&
          (B(2),
          Y("chainId", r.data().chainId),
          B(2),
          Zt("", r.data().inputTokenAmount, " ", r.data().inputTokenSymbol, ""),
          B(4),
          Zt(
            "",
            r.data().outputTokenAmount,
            " ",
            r.data().outputTokenSymbol,
            ""
          ));
    },
    dependencies: [le],
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
function As(t, e) {
  t & 1 && W(0, "app-spinner", 1), t & 2 && Y("size", 10);
}
function ks(t, e) {
  if ((t & 1 && (F(0, "a", 3), W(1, "img", 4), L()), t & 2)) {
    let i = $(2);
    Y("href", i.blockExplorerLink(), Et);
  }
}
function Is(t, e) {
  if ((t & 1 && (W(0, "img", 2), lt(1, ks, 2, 1, "a", 3)), t & 2)) {
    let i = $();
    B(), ft(i.transaction().txHash ? 1 : -1);
  }
}
function Fs(t, e) {
  if (t & 1) {
    let i = gt();
    W(0, "img", 5),
      F(1, "span", 6),
      U(2),
      L(),
      F(3, "button", 7),
      it("click", function () {
        tt(i);
        let n = $();
        return et(n.retryTransaction());
      }),
      W(4, "img", 8),
      L();
  }
  if (t & 2) {
    let i,
      r = $();
    B(2),
      _t((i = r.transaction().error) !== null && i !== void 0 ? i : "Failed");
  }
}
var ki = class t {
  transaction = ht.required();
  retry = Xt();
  blockExplorerLink = kt(() => {
    let { chainId: e, txHash: i } = this.transaction(),
      r = `tx/${i}`;
    switch (e) {
      case 1:
        return `https://etherscan.io/${r}`;
      case 324:
        return `https://explorer.zksync.io/${r}`;
      case 10:
        return `https://optimistic.etherscan.io//${r}`;
      case 42161:
        return `https://arbiscan.io/${r}`;
      case 137:
        return `https://polygonscan.com/${r}`;
      case 8453:
        return `https://base.blockscout.com/${r}`;
      default:
        return null;
    }
  });
  retryTransaction() {
    this.retry.emit();
  }
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-transaction-indicator"]],
    inputs: { transaction: [1, "transaction"] },
    outputs: { retry: "retry" },
    standalone: !0,
    features: [Z],
    decls: 6,
    vars: 4,
    consts: [
      [1, "flex", "gap-2", "items-center"],
      [3, "size"],
      ["src", "icons/check_circle_green.svg"],
      ["target", "_blank", 3, "href"],
      ["src", "icons/new-tab.svg", 1, "h-3"],
      ["src", "images/failed.png", 1, "h-3"],
      [1, "text-red"],
      [3, "click"],
      ["src", "icons/retry.svg", 1, "h-3"],
    ],
    template: function (i, r) {
      if (
        (i & 1 &&
          (F(0, "div", 0)(1, "span"),
          U(2),
          L(),
          lt(3, As, 1, 1, "app-spinner", 1)(4, Is, 2, 1)(5, Fs, 5, 1),
          L()),
        i & 2)
      ) {
        let n;
        fe("opacity-60", !r.transaction().txStatus),
          B(2),
          _t(r.transaction().txName || "Transaction"),
          B(),
          ft(
            (n = r.transaction().txStatus) === "LOADING"
              ? 3
              : n === "SUCCESS"
              ? 4
              : n === "FAILED"
              ? 5
              : -1
          );
      }
    },
    dependencies: [Wn],
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
var Ii = class t {
  data = ht.required();
  icon = kt(() => {
    switch (this.data().chainId) {
      case 1:
        return "chains/ethereum.webp";
      case 324:
        return "chains/zksync.webp";
      case 10:
        return "chains/optimism.webp";
      case 42161:
        return "chains/arbitrum.webp";
      case 137:
        return "chains/polygon.webp";
      case 8453:
        return "chains/base.webp";
      default:
        return null;
    }
  });
  blockExplorerLink = kt(() => {
    let { chainId: e, recipient: i } = this.data(),
      r = `address/${i}`;
    switch (e) {
      case 1:
        return `https://etherscan.io/${r}`;
      case 324:
        return `https://explorer.zksync.io/${r}`;
      case 10:
        return `https://optimistic.etherscan.io//${r}`;
      case 42161:
        return `https://arbiscan.io/${r}`;
      case 137:
        return `https://polygonscan.com/${r}`;
      case 8453:
        return `https://base.blockscout.com/${r}`;
      default:
        return null;
    }
  });
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-transfer-message"]],
    inputs: { data: [1, "data"] },
    standalone: !0,
    features: [Z],
    decls: 10,
    vars: 5,
    consts: [
      [1, "text-lg"],
      [1, "flex", "gap-2", "items-center"],
      ["width", "18", "height", "18", 1, "rounded-full", 3, "src"],
      [
        "target",
        "_blank",
        1,
        "break-words",
        2,
        "line-break",
        "anywhere",
        3,
        "href",
      ],
    ],
    template: function (i, r) {
      i & 1 &&
        (F(0, "p"),
        U(1, "Sending"),
        L(),
        F(2, "div", 0),
        U(3),
        L(),
        F(4, "p"),
        U(5, "to"),
        L(),
        F(6, "div", 1),
        W(7, "img", 2),
        F(8, "a", 3),
        U(9),
        L()()),
        i & 2 &&
          (B(3),
          Zt("", r.data().amount, " ", r.data().tokenSymbol, ""),
          B(4),
          Y("src", r.icon(), Et),
          B(),
          Y("href", r.blockExplorerLink(), Et),
          B(),
          _t(r.data().recipient));
    },
    encapsulation: 2,
    changeDetection: 0,
  });
};
var Ds = ["message"],
  Ta = (t, e) => e.txStatus;
function Rs(t, e) {
  if ((t & 1 && W(0, "app-address-message", 7), t & 2)) {
    let i = $(2).$implicit;
    Y("data", i.data);
  }
}
function Ls(t, e) {
  if ((t & 1 && W(0, "app-balance-message", 7), t & 2)) {
    let i = $(2).$implicit;
    Y("data", i.data);
  }
}
function Vs(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "app-transaction-indicator", 10),
      it("retry", function () {
        tt(i);
        let n = $(3).$implicit,
          a = $();
        return et(a.retry(n.data.transactions));
      }),
      L();
  }
  if (t & 2) {
    let i = e.$implicit,
      r = $(4);
    Y("transaction", r.deReference(i));
  }
}
function Bs(t, e) {
  if (
    (t & 1 &&
      (W(0, "app-transfer-message", 7),
      Mt(1, Vs, 1, 1, "app-transaction-indicator", 9, Ta)),
    t & 2)
  ) {
    let i = $(2).$implicit;
    Y("data", i.data), B(), At(i.data.transactions);
  }
}
function Os(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "app-transaction-indicator", 10),
      it("retry", function () {
        tt(i);
        let n = $(3).$implicit,
          a = $();
        return et(a.retry(n.data.transactions));
      }),
      L();
  }
  if (t & 2) {
    let i = e.$implicit,
      r = $(4);
    Y("transaction", r.deReference(i));
  }
}
function Ns(t, e) {
  if (
    (t & 1 &&
      (W(0, "app-swap-message", 7),
      Mt(1, Os, 1, 1, "app-transaction-indicator", 9, Ta)),
    t & 2)
  ) {
    let i = $(2).$implicit;
    Y("data", i.data), B(), At(i.data.transactions);
  }
}
function zs(t, e) {
  t & 1 && (F(0, "b"), U(1, "Unsupported chain"), L());
}
function Gs(t, e) {
  if ((t & 1 && W(0, "app-insufficient-balance-message", 7), t & 2)) {
    let i = $(2).$implicit;
    Y("data", i.data);
  }
}
function js(t, e) {
  if ((t & 1 && (F(0, "p", 8), U(1), L()), t & 2)) {
    let i = $(2).$implicit,
      r = $();
    B(), _t(r.parseMessage(i));
  }
}
function Hs(t, e) {
  if (
    (t & 1 &&
      lt(0, Rs, 1, 1, "app-address-message", 7)(
        1,
        Ls,
        1,
        1,
        "app-balance-message",
        7
      )(2, Bs, 3, 1)(3, Ns, 3, 1)(4, zs, 2, 0, "b")(
        5,
        Gs,
        1,
        1,
        "app-insufficient-balance-message",
        7
      )(6, js, 2, 1, "p", 8),
    t & 2)
  ) {
    let i,
      r = $().$implicit;
    ft(
      (i = r.data.action) === "GET_WALLET_ADDRESS"
        ? 0
        : i === "GET_BALANCE"
        ? 1
        : i === "TRANSFER"
        ? 2
        : i === "SWAP"
        ? 3
        : i === "UNSUPPORTED_CHAIN"
        ? 4
        : i === "INSUFFICIENT_BALANCE"
        ? 5
        : 6
    );
  }
}
function Ws(t, e) {
  if ((t & 1 && (F(0, "p", 6), U(1), L()), t & 2)) {
    let i = $().$implicit,
      r = $();
    B(), _t(r.parseMessage(i));
  }
}
function $s(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "button", 12),
      it("click", function () {
        let n = tt(i).$implicit,
          a = $(3);
        return et(a.sendPrompt.emit(n));
      }),
      U(1),
      L();
  }
  if (t & 2) {
    let i = e.$implicit;
    B(), St(" ", i, " ");
  }
}
function qs(t, e) {
  if ((t & 1 && Mt(0, $s, 2, 1, "button", 11, jt), t & 2)) {
    let i = $(2);
    At(i.suggestedPrompts);
  }
}
function Ks(t, e) {
  if (
    (t & 1 &&
      (F(0, "div", 2, 0)(2, "span", 4),
      U(3),
      pi(4, "timeAgo"),
      L(),
      F(5, "div", 5),
      lt(6, Hs, 7, 1)(7, Ws, 2, 1, "p", 6),
      L(),
      lt(8, qs, 2, 0),
      L()),
    t & 2)
  ) {
    let i = e.$implicit;
    Y("ngClass", i.isUser ? "items-end" : "items-start"),
      B(3),
      _t(di(4, 5, i.timestamp)),
      B(2),
      Y(
        "ngClass",
        i.isUser
          ? "bg-white/10 border-black/10 self-end"
          : "bg-black/[2%] border-[#FF9228] self-start"
      ),
      B(),
      ft(i.isUser ? 7 : 6),
      B(2),
      ft(!i.isUser && i.data.action === "MESSAGE_ONLY" ? 8 : -1);
  }
}
function Us(t, e) {
  t & 1 && W(0, "img", 3);
}
var Fi = class t {
  messages = ht([]);
  handleTransactions = Xt();
  sendPrompt = Xt();
  messageElements = vn("message");
  suggestedPrompts = [
    "What is my wallet address?",
    "Check my USDC balance on Polygon.",
    "I want to send some tokens to my friend.",
    "I want to swap some ETH for USDC.",
  ];
  ngAfterViewInit() {
    this.messages.length < 2 &&
      this.messageElements().at(0)?.nativeElement.scrollIntoView();
  }
  parseMessage(e) {
    if (e.isUser) return e.response;
    switch (e.data.action) {
      case "MESSAGE_ONLY":
        return e.response;
      case "ERROR":
        return "I have encountered an error. Please try again later.";
      default:
        return e.response.match(/<message>((.|\n)*?)<\/message>/)?.at(1) ?? "";
    }
  }
  retry(e) {
    this.handleTransactions.emit(e);
  }
  deReference(e) {
    return Rt({}, e);
  }
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-messages"]],
    viewQuery: function (i, r) {
      i & 1 && xn(r.messageElements, Ds, 5), i & 2 && Cn();
    },
    inputs: { messages: [1, "messages"] },
    outputs: {
      handleTransactions: "handleTransactions",
      sendPrompt: "sendPrompt",
    },
    standalone: !0,
    features: [Z],
    decls: 4,
    vars: 1,
    consts: [
      ["message", ""],
      [
        1,
        "h-full",
        "flex",
        "flex-col-reverse",
        "gap-5",
        "overflow-auto",
        "no-scrollbar",
        "pb-5",
      ],
      [1, "flex", "flex-col", "gap-4", 3, "ngClass"],
      ["src", "images/logo.png", 1, "m-auto"],
      [1, "text-xs", "text-white/50"],
      [
        1,
        "min-w-20",
        "max-w-[calc(100%-68px)]",
        "px-4",
        "py-6",
        "text-[13px]",
        "relative",
        "border",
        "rounded-[20px]",
        "text-white",
        3,
        "ngClass",
      ],
      [1, "whitespace-pre-wrap", "break-words"],
      [3, "data"],
      [1, "whitespace-pre-wrap"],
      [3, "transaction"],
      [3, "retry", "transaction"],
      [
        1,
        "max-w-[calc(100%-68px)]",
        "rounded-[14px]",
        "bg-white/10",
        "p-4",
        "text-white",
        "text-sm",
        "text-left",
      ],
      [
        1,
        "max-w-[calc(100%-68px)]",
        "rounded-[14px]",
        "bg-white/10",
        "p-4",
        "text-white",
        "text-sm",
        "text-left",
        3,
        "click",
      ],
    ],
    template: function (i, r) {
      i & 1 &&
        (F(0, "div", 1),
        Mt(1, Ks, 9, 7, "div", 2, jt, !1, Us, 1, 0, "img", 3),
        L()),
        i & 2 && (B(), At(r.messages()));
    },
    dependencies: [Ee, Pi, Ai, wi, Ti, Ii, ki, Mi],
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
N();
var Ys = ["container"],
  Ma = new Lt("LottieOptions");
function Qs() {
  let t = Q(Vt),
    { player: e, useWebWorker: i } = Q(Ma),
    r = t.runOutsideAngular(() => e());
  return (An(r) ? Jr(r).pipe(Je((a) => a.default || a)) : ae(r)).pipe(
    ri((a) => a.useWebWorker?.(i)),
    sn({ bufferSize: 1, refCount: !0 })
  );
}
var Xs = (() => {
  class t {
    constructor() {
      (this.player$ = Qs().pipe(rn((i) => Zs(this.ngZone).pipe(Je(() => i))))),
        (this.ngZone = Q(Vt));
    }
    loadAnimation(i) {
      return this.player$.pipe(Je((r) => this.createAnimationItem(r, i)));
    }
    resolveOptions(i, r) {
      return Object.assign(
        { container: r, renderer: "svg", loop: !0, autoplay: !0 },
        i
      );
    }
    createAnimationItem(i, r) {
      return this.ngZone.runOutsideAngular(() => i.loadAnimation(r));
    }
    static {
      this.ɵfac = function (r) {
        return new (r || t)();
      };
    }
    static {
      this.ɵprov = Gt({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
  }
  return t;
})();
function Zs(t) {
  return new cr((e) => {
    let i = t.runOutsideAngular(() =>
      requestAnimationFrame(() => {
        e.next(), e.complete();
      })
    );
    return () => cancelAnimationFrame(i);
  });
}
function Aa(t) {
  return [{ provide: Ma, useValue: t }];
}
var Js = (() => {
  class t {
    constructor() {
      (this.options = ht(null)),
        (this.containerClass = ht(null)),
        (this.styles = ht(null)),
        (this.animationCreated = this.getAnimationItem()),
        (this.complete = this.awaitAnimationItemAndStartListening("complete")),
        (this.loopComplete =
          this.awaitAnimationItemAndStartListening("loopComplete")),
        (this.enterFrame =
          this.awaitAnimationItemAndStartListening("enterFrame")),
        (this.segmentStart =
          this.awaitAnimationItemAndStartListening("segmentStart")),
        (this.configReady =
          this.awaitAnimationItemAndStartListening("config_ready")),
        (this.dataReady =
          this.awaitAnimationItemAndStartListening("data_ready")),
        (this.domLoaded =
          this.awaitAnimationItemAndStartListening("DOMLoaded")),
        (this.destroy = this.awaitAnimationItemAndStartListening("destroy")),
        (this.error = this.awaitAnimationItemAndStartListening("error")),
        (this.ngZone = Q(Vt)),
        (this.isBrowser = Dn(Q(pn))),
        (this.animationLoader = Q(Xs)),
        (this.loadAnimation$ = new xe()),
        (this.animationItem$ = new Zr(null)),
        this.setupLoadAnimationListener();
    }
    ngOnDestroy() {
      this.destroyAnimation();
    }
    loadAnimation(i, r) {
      this.ngZone.runOutsideAngular(() => this.loadAnimation$.next([i, r]));
    }
    getAnimationItem() {
      return nn(() => this.animationItem$).pipe(se((i) => i !== null));
    }
    awaitAnimationItemAndStartListening(i) {
      return this.getAnimationItem().pipe(
        zt(
          (r) =>
            new cr((n) => {
              this.ngZone.runOutsideAngular(() => {
                r.addEventListener(i, (a) => {
                  this.ngZone.runOutsideAngular(() => {
                    n.next(a);
                  });
                });
              });
            })
        )
      );
    }
    setupLoadAnimationListener() {
      this.loadAnimation$
        .pipe(se(([r]) => this.isBrowser && r.options !== void 0))
        .pipe(
          zt(
            ([r, n]) => (
              this.destroyAnimation(),
              this.animationLoader.loadAnimation(
                this.animationLoader.resolveOptions(r.options.currentValue, n)
              )
            )
          ),
          Yn()
        )
        .subscribe((r) => {
          this.ngZone.run(() => this.animationItem$.next(r));
        });
    }
    destroyAnimation() {
      let i = this.animationItem$.getValue();
      i !== null && (i.destroy(), this.animationItem$.next(null));
    }
    static {
      this.ɵfac = function (r) {
        return new (r || t)();
      };
    }
    static {
      this.ɵdir = Ce({
        type: t,
        selectors: [["", "lottie", ""]],
        inputs: {
          options: [1, "options"],
          containerClass: [1, "containerClass"],
          styles: [1, "styles"],
        },
        outputs: {
          animationCreated: "animationCreated",
          complete: "complete",
          loopComplete: "loopComplete",
          enterFrame: "enterFrame",
          segmentStart: "segmentStart",
          configReady: "configReady",
          dataReady: "dataReady",
          domLoaded: "domLoaded",
          destroy: "destroy",
          error: "error",
        },
      });
    }
  }
  return t;
})();
var ka = (() => {
  class t extends Js {
    constructor() {
      super(...arguments),
        (this.width = ht(null)),
        (this.height = ht(null)),
        (this.container = null);
    }
    ngOnChanges(i) {
      super.loadAnimation(i, this.container.nativeElement);
    }
    static {
      this.ɵfac = (() => {
        let i;
        return function (n) {
          return (i || (i = hn(t)))(n || t);
        };
      })();
    }
    static {
      this.ɵcmp = X({
        type: t,
        selectors: [["ng-lottie"]],
        viewQuery: function (r, n) {
          if ((r & 1 && ci(Ys, 7), r & 2)) {
            let a;
            ue((a = ge())) && (n.container = a.first);
          }
        },
        inputs: { width: [1, "width"], height: [1, "height"] },
        standalone: !0,
        features: [ai, ln, Z],
        decls: 2,
        vars: 6,
        consts: [
          ["container", ""],
          [3, "ngStyle", "ngClass"],
        ],
        template: function (r, n) {
          r & 1 && W(0, "div", 1, 0),
            r & 2 &&
              (si("width", n.width() || "100%")("height", n.height() || "100%"),
              Y("ngStyle", n.styles())("ngClass", n.containerClass()));
        },
        dependencies: [Fn, Ee],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
  }
  return t;
})();
var to = () => ({ path: "lottie/sound-wave.json" });
function eo(t, e) {
  t & 1 && W(0, "ng-lottie", 4), t & 2 && Y("options", mi(1, to));
}
function io(t, e) {
  t & 1 && W(0, "img", 5);
}
function ro(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "div", 1)(1, "input", 2),
      Tn("ngModelChange", function (n) {
        tt(i);
        let a = $();
        return wn(a.prompt, n) || (a.prompt = n), et(n);
      }),
      it("keydown.enter", function () {
        tt(i);
        let n = $();
        return et(n.submitPrompt());
      }),
      L(),
      F(2, "button", 3),
      it("click", function () {
        tt(i);
        let n = $();
        return et(n.submitPrompt());
      }),
      lt(3, eo, 1, 2, "ng-lottie", 4)(4, io, 1, 0, "img", 5),
      L()();
  }
  if (t & 2) {
    let i = e.$implicit,
      r = $();
    B(),
      Y("placeholder", i("yourMessageHere")),
      Pn("ngModel", r.prompt),
      B(2),
      ft(r.isLoading() ? 3 : 4);
  }
}
var Di = class t {
  isLoading = ht(!1);
  submit = Xt();
  prompt = yn("");
  submitPrompt() {
    this.isLoading() || (this.submit.emit(this.prompt()), this.prompt.set(""));
  }
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-prompt"]],
    inputs: { isLoading: [1, "isLoading"], prompt: [1, "prompt"] },
    outputs: { submit: "submit", prompt: "promptChange" },
    standalone: !0,
    features: [Z],
    decls: 1,
    vars: 1,
    consts: [
      [
        "class",
        "flex gap-2 py-1 px-2 bg-black border border-black/10 rounded-[20px]",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [
        1,
        "flex",
        "gap-2",
        "py-1",
        "px-2",
        "bg-black",
        "border",
        "border-black/10",
        "rounded-[20px]",
      ],
      [
        "type",
        "text",
        1,
        "flex-1",
        "bg-transparent",
        "outline-none",
        "text-white",
        "text-xs",
        3,
        "ngModelChange",
        "keydown.enter",
        "placeholder",
        "ngModel",
      ],
      [
        1,
        "w-12",
        "h-12",
        "rounded-[17px]",
        "bg-[#F27E29]",
        "grid",
        "place-items-center",
        3,
        "click",
      ],
      [3, "options"],
      ["src", "icons/send.svg"],
    ],
    template: function (i, r) {
      i & 1 && lt(0, ro, 5, 3, "div", 0),
        i & 2 && Y("translocoPrefix", "defaiChat");
    },
    dependencies: [Wt, Un, $n, qn, Kn, ka],
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
var Ri = class t {
  isOpen = ht(!1);
  toggle = Xt();
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-toggle-chat-button"]],
    inputs: { isOpen: [1, "isOpen"] },
    outputs: { toggle: "toggle" },
    standalone: !0,
    features: [Z],
    decls: 2,
    vars: 1,
    consts: [
      [3, "click"],
      [1, "-md:w-14", 3, "src"],
    ],
    template: function (i, r) {
      i & 1 &&
        (F(0, "button", 0),
        it("click", function () {
          return r.toggle.emit();
        }),
        W(1, "img", 1),
        L()),
        i & 2 &&
          (B(),
          Y(
            "src",
            r.isOpen() ? "icons/chat-open.svg" : "icons/chat-closed.svg",
            Et
          ));
    },
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
var no = { isOpen: !0, isLoading: !1, messages: [], error: null },
  br = Zn(
    ia(no),
    Jn((t, e = Q(Bt)) => ({ isWalletConnected: kt(() => !!e.evmWallet()) })),
    ea((t, e = Q(Bt), i = Q(gi)) => {
      let r = () => {
          sessionStorage.setItem("CHAT_HISTORY", JSON.stringify(t.messages()));
        },
        n = (a) =>
          me(void 0, null, function* () {
            for (let s of a)
              if (s.txStatus !== "SUCCESS") {
                (s.txStatus = "LOADING"),
                  Pt(t, (o) => ({ messages: [...o.messages] }));
                try {
                  (s.txHash = yield e.handleEvmTransaction(s)),
                    (s.txStatus = "SUCCESS"),
                    Pt(t, (o) => ({ messages: [...o.messages] })),
                    r();
                } catch (o) {
                  (s.txStatus = "FAILED"),
                    o.reason && (s.error = o.reason),
                    Pt(t, (l) => ({ messages: [...l.messages] })),
                    r(),
                    console.error(o);
                  return;
                }
              }
          });
      return {
        toggle: () => {
          Pt(t, (a) => ({ isOpen: !a.isOpen })),
            localStorage.setItem("CHAT_OPEN", t.isOpen().toString());
        },
        sendPrompt: (a) =>
          me(void 0, null, function* () {
            let s = e.evmWallet()?.address;
            if (!s) throw new Error("[ChatStore] Wallet not connected");
            if (a) {
              Pt(t, {
                isLoading: !0,
                error: null,
                messages: [
                  { isUser: !0, timestamp: Date.now(), response: a },
                  ...t.messages(),
                ],
              });
              try {
                let { response: o, data: l } = yield en(
                  i.post(
                    "https://europe-west1-defai-dcd8c.cloudfunctions.net/defaiChatFunction",
                    {
                      wallet: s,
                      messages: t
                        .messages()
                        .map((c) => ({
                          role: c.isUser ? "user" : "assistant",
                          content: c.response,
                        }))
                        .reverse(),
                    }
                  )
                );
                switch (
                  (Pt(t, {
                    messages: [
                      {
                        isUser: !1,
                        timestamp: Date.now(),
                        response: o,
                        data: l,
                      },
                      ...t.messages(),
                    ],
                  }),
                  r(),
                  l.action)
                ) {
                  case "TRANSFER":
                  case "SWAP":
                    yield n(l.transactions);
                    break;
                }
              } catch (o) {
                o instanceof Rn && o.status === 429
                  ? Pt(t, {
                      messages: t.messages().slice(1),
                      error: "Too many requests, please try again later",
                    })
                  : (console.error(o),
                    Pt(t, {
                      messages: t.messages().slice(1),
                      error: "Unable to send prompt",
                    }));
              } finally {
                Pt(t, { isLoading: !1 });
              }
            }
          }),
        handleTransactions: n,
      };
    }),
    ta((t) => ({
      onInit: () => {
        let e = localStorage.getItem("CHAT_OPEN"),
          i = sessionStorage.getItem("CHAT_HISTORY");
        if ((e && Pt(t, (r) => ({ isOpen: e === "true" })), i))
          try {
            let r = JSON.parse(i);
            Pt(t, (n) => ({ messages: r }));
          } catch (r) {
            console.error(r);
          }
        else
          Pt(t, (r) => ({
            messages: [
              {
                isUser: !1,
                timestamp: Date.now(),
                response:
                  "Hi! I am AI blockchain assistant designed to help with transactions, balance checks, and other blockchain related actions. How can I assist you with blockchain tasks?",
                data: { action: "MESSAGE_ONLY" },
              },
            ],
          }));
      },
    }))
  );
function ao(t, e) {
  t & 1 && (F(0, "div", 4), U(1), L()), t & 2 && (B(), _t(e));
}
function so(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "app-prompt", 7),
      it("submit", function (n) {
        tt(i);
        let a = $(2);
        return et(a.store.sendPrompt(n));
      }),
      L();
  }
  if (t & 2) {
    let i = $(2);
    Y("isLoading", i.store.isLoading());
  }
}
function oo(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "button", 8),
      it("click", function () {
        tt(i);
        let n = $(2);
        return et(n.connectEvmWallet());
      }),
      U(1, " Connect EVM wallet "),
      L();
  }
}
function lo(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "div", 1)(1, "app-messages", 3),
      it("handleTransactions", function (n) {
        tt(i);
        let a = $();
        return et(a.handleTransactions(n));
      })("sendPrompt", function (n) {
        tt(i);
        let a = $();
        return et(a.store.sendPrompt(n));
      }),
      L(),
      lt(2, ao, 2, 1, "div", 4)(3, so, 1, 1, "app-prompt", 5)(
        4,
        oo,
        2,
        0,
        "button",
        6
      ),
      L();
  }
  if (t & 2) {
    let i,
      r = $();
    B(),
      Y("messages", r.store.messages()),
      B(),
      ft((i = r.store.error()) ? 2 : -1, i),
      B(),
      ft(r.store.isWalletConnected() ? 3 : 4);
  }
}
var Li = class t {
  store = Q(br);
  #t = Q(vi);
  connectEvmWallet() {
    this.#t.connect();
  }
  handleTransactions(e) {
    return me(this, null, function* () {
      this.store.handleTransactions(e);
    });
  }
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-defai-chat"]],
    standalone: !0,
    features: [hi([br]), Z],
    decls: 3,
    vars: 2,
    consts: [
      [1, "flex", "flex-col", "gap-2", "md:gap-7", "items-end"],
      [
        1,
        "w-[452px]",
        "h-[721px]",
        "max-w-[calc(100dvw-70px)]",
        "max-h-[calc(100dvh-320px)]",
        "bg-[#262626]",
        "rounded-[32px]",
        "p-4",
        "flex",
        "flex-col",
      ],
      [3, "toggle", "isOpen"],
      [
        1,
        "flex-1",
        "overflow-auto",
        3,
        "handleTransactions",
        "sendPrompt",
        "messages",
      ],
      [1, "py-4", "text-red", "self-end"],
      [3, "isLoading"],
      [
        1,
        "h-[58px]",
        "rounded-[20px]",
        "bg-white/10",
        "border",
        "border-black/10",
        "text-white",
        "grid",
        "place-items-center",
      ],
      [3, "submit", "isLoading"],
      [
        1,
        "h-[58px]",
        "rounded-[20px]",
        "bg-white/10",
        "border",
        "border-black/10",
        "text-white",
        "grid",
        "place-items-center",
        3,
        "click",
      ],
    ],
    template: function (i, r) {
      i & 1 &&
        (F(0, "div", 0),
        lt(1, lo, 5, 3, "div", 1),
        F(2, "app-toggle-chat-button", 2),
        it("toggle", function () {
          return r.store.toggle();
        }),
        L()()),
        i & 2 &&
          (B(),
          ft(r.store.isOpen() ? 1 : -1),
          B(),
          Y("isOpen", r.store.isOpen()));
    },
    dependencies: [Ri, Di, Fi],
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
N();
N();
var Ge = new Lt("social-config"),
  Ia = () => ({
    provide: Ge,
    useValue: [
      { type: "twitter", url: "https://x.com/aiPump__" },
      { type: "telegram", url: "http://t.me/aiPumpchat" },
    ],
  });
function co(t, e) {
  if ((t & 1 && (F(0, "a", 1), W(1, "app-social-icon", 2), L()), t & 2)) {
    let i = e.$implicit;
    Y("href", i.url, Et), B(), Y("type", i.type)("res", i.url)("dark", !0);
  }
}
var Vi = class t {
  socialConfig = Q(Ge);
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-footer-socials"]],
    standalone: !0,
    features: [Z],
    decls: 3,
    vars: 0,
    consts: [
      [1, "flex"],
      [
        "target",
        "_blank",
        1,
        "w-[50px]",
        "h-[50px]",
        "rounded-full",
        "bg-[#EDE9DF]",
        "grid",
        "place-items-center",
        "hover:bg-[#EDE9DF]/85",
        3,
        "href",
      ],
      [3, "type", "res", "dark"],
    ],
    template: function (i, r) {
      i & 1 && (F(0, "div", 0), Mt(1, co, 2, 4, "a", 1, jt), L()),
        i & 2 && (B(), At(r.socialConfig));
    },
    dependencies: [yi],
    encapsulation: 2,
    changeDetection: 0,
  });
};
function ho(t, e) {
  if (
    (t & 1 &&
      (F(0, "div", 1)(1, "div", 2)(2, "div", 3),
      W(3, "img", 4)(4, "app-footer-socials"),
      L(),
      F(5, "div", 5)(6, "div", 6),
      U(7),
      L(),
      F(8, "div", 7),
      U(9),
      L(),
      F(10, "div", 8),
      U(11),
      L(),
      F(12, "div", 9),
      U(13),
      L()(),
      F(14, "div", 10)(15, "a", 11),
      U(16, ""),
      L(),
      F(17, "a", 12),
      U(18, ""),
      L()()()()),
    t & 2)
  ) {
    let i = e.$implicit;
    B(7),
      St(" ", i("subtitle-1"), " "),
      B(2),
      St(" ", i("text-1"), " "),
      B(2),
      St(" ", i("subtitle-2"), " "),
      B(2),
      St(" ", i("text-2"), " ");
  }
}
var Bi = class t {
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-footer"]],
    standalone: !0,
    features: [Z],
    decls: 1,
    vars: 1,
    consts: [
      ["class", "bg-black p-7.5", 4, "transloco", "translocoPrefix"],
      [1, "bg-black", "p-7.5"],
      [1, "container", "mx-auto"],
      [1, "flex", "items-center", "justify-between", "gap-6", "flex-wrap"],
      ["src", "/images/logo.png", 1, "max-h-10"],
      [
        1,
        "mt-4",
        "grid",
        "lg:grid-cols-2",
        "gap-2.5",
        "font-dm-sans",
        "text-sm",
        "text-[#E9E5DDB2]",
      ],
      [1, "lg:col-start-1", "lg:col-end-1", "lg:row-start-1", "lg:row-end-1"],
      [1, "lg:col-start-1", "lg:col-end-1", "lg:row-start-2", "lg:row-end-2"],
      [1, "lg:col-start-2", "lg:col-end-2", "lg:row-start-1", "lg:row-end-1"],
      [1, "lg:col-start-2", "lg:col-end-2", "lg:row-start-2", "lg:row-end-2"],
      [
        1,
        "mt-4",
        "font-dm-sans",
        "text-sm",
        "text-[#E9E5DDB2]",
        "flex",
        "gap-6",
        "underline",
      ],
      ["routerLink", "/privacy-policy"],
      ["routerLink", "/terms-of-service"],
    ],
    template: function (i, r) {
      i & 1 && lt(0, ho, 19, 4, "div", 0),
        i & 2 && Y("translocoPrefix", "footer");
    },
    dependencies: [Wt, Vi, we],
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
N();
N();
function mo(t, e) {
  if (t & 1) {
    let i = gt();
    _n(0),
      F(1, "button", 1),
      it("click", function () {
        tt(i);
        let n = $();
        return et(n.connectWallet());
      }),
      F(2, "span", 2),
      U(3),
      L()(),
      Sn();
  }
  if (t & 2) {
    let i = e.$implicit;
    B(3), St(" ", i("connect"), " ");
  }
}
var Oi = class t {
  #t = Q(ga);
  connectWallet() {
    this.#t.open(va);
  }
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-header-wallet-connect"]],
    standalone: !0,
    features: [Z],
    decls: 1,
    vars: 1,
    consts: [
      [4, "transloco", "translocoPrefix"],
      [1, "h-10", "grid", "place-items-center", 3, "click"],
      [1, "font-dm-sans", "font-bold", "text-sm", "text-[#EEECE6]"],
    ],
    template: function (i, r) {
      i & 1 && lt(0, mo, 4, 1, "ng-container", 0),
        i & 2 && Y("translocoPrefix", "header");
    },
    dependencies: [Wt],
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
var yo = ["mat-menu-item", ""],
  bo = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"],
  _o = ["mat-icon, [matMenuItemIcon]", "*"];
function So(t, e) {
  t & 1 && (cn(), F(0, "svg", 2), W(1, "polygon", 3), L());
}
var xo = ["*"];
function Co(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "div", 0),
      it("keydown", function (n) {
        tt(i);
        let a = $();
        return et(a._handleKeydown(n));
      })("click", function () {
        tt(i);
        let n = $();
        return et(n.closed.emit("click"));
      })("@transformMenu.start", function (n) {
        tt(i);
        let a = $();
        return et(a._onAnimationStart(n));
      })("@transformMenu.done", function (n) {
        tt(i);
        let a = $();
        return et(a._onAnimationDone(n));
      }),
      F(1, "div", 1),
      oe(2),
      L()();
  }
  if (t & 2) {
    let i = $();
    oi(i._classList),
      Y("id", i.panelId)("@transformMenu", i._panelAnimationState),
      de("aria-label", i.ariaLabel || null)(
        "aria-labelledby",
        i.ariaLabelledby || null
      )("aria-describedby", i.ariaDescribedby || null);
  }
}
var _r = new Lt("MAT_MENU_PANEL"),
  je = (() => {
    class t {
      constructor(i, r, n, a, s) {
        (this._elementRef = i),
          (this._document = r),
          (this._focusMonitor = n),
          (this._parentMenu = a),
          (this._changeDetectorRef = s),
          (this.role = "menuitem"),
          (this.disabled = !1),
          (this.disableRipple = !1),
          (this._hovered = new xe()),
          (this._focused = new xe()),
          (this._highlighted = !1),
          (this._triggersSubmenu = !1),
          a?.addItem?.(this);
      }
      focus(i, r) {
        this._focusMonitor && i
          ? this._focusMonitor.focusVia(this._getHostElement(), i, r)
          : this._getHostElement().focus(r),
          this._focused.next(this);
      }
      ngAfterViewInit() {
        this._focusMonitor && this._focusMonitor.monitor(this._elementRef, !1);
      }
      ngOnDestroy() {
        this._focusMonitor &&
          this._focusMonitor.stopMonitoring(this._elementRef),
          this._parentMenu &&
            this._parentMenu.removeItem &&
            this._parentMenu.removeItem(this),
          this._hovered.complete(),
          this._focused.complete();
      }
      _getTabIndex() {
        return this.disabled ? "-1" : "0";
      }
      _getHostElement() {
        return this._elementRef.nativeElement;
      }
      _checkDisabled(i) {
        this.disabled && (i.preventDefault(), i.stopPropagation());
      }
      _handleMouseEnter() {
        this._hovered.next(this);
      }
      getLabel() {
        let i = this._elementRef.nativeElement.cloneNode(!0),
          r = i.querySelectorAll("mat-icon, .material-icons");
        for (let n = 0; n < r.length; n++) r[n].remove();
        return i.textContent?.trim() || "";
      }
      _setHighlighted(i) {
        (this._highlighted = i), this._changeDetectorRef?.markForCheck();
      }
      _setTriggersSubmenu(i) {
        (this._triggersSubmenu = i), this._changeDetectorRef?.markForCheck();
      }
      _hasFocus() {
        return (
          this._document &&
          this._document.activeElement === this._getHostElement()
        );
      }
      static {
        this.ɵfac = function (r) {
          return new (r || t)(mt(pe), mt(fi), mt(Ne), mt(_r, 8), mt(Oe));
        };
      }
      static {
        this.ɵcmp = X({
          type: t,
          selectors: [["", "mat-menu-item", ""]],
          hostAttrs: [1, "mat-mdc-menu-item", "mat-mdc-focus-indicator"],
          hostVars: 8,
          hostBindings: function (r, n) {
            r & 1 &&
              it("click", function (s) {
                return n._checkDisabled(s);
              })("mouseenter", function () {
                return n._handleMouseEnter();
              }),
              r & 2 &&
                (de("role", n.role)("tabindex", n._getTabIndex())(
                  "aria-disabled",
                  n.disabled
                )("disabled", n.disabled || null),
                fe("mat-mdc-menu-item-highlighted", n._highlighted)(
                  "mat-mdc-menu-item-submenu-trigger",
                  n._triggersSubmenu
                ));
          },
          inputs: {
            role: "role",
            disabled: [2, "disabled", "disabled", Ht],
            disableRipple: [2, "disableRipple", "disableRipple", Ht],
          },
          exportAs: ["matMenuItem"],
          standalone: !0,
          features: [Ve, Z],
          attrs: yo,
          ngContentSelectors: _o,
          decls: 5,
          vars: 3,
          consts: [
            [1, "mat-mdc-menu-item-text"],
            [
              "matRipple",
              "",
              1,
              "mat-mdc-menu-ripple",
              3,
              "matRippleDisabled",
              "matRippleTrigger",
            ],
            [
              "viewBox",
              "0 0 5 10",
              "focusable",
              "false",
              "aria-hidden",
              "true",
              1,
              "mat-mdc-menu-submenu-icon",
            ],
            ["points", "0,0 5,5 0,10"],
          ],
          template: function (r, n) {
            r & 1 &&
              (Be(bo),
              oe(0),
              F(1, "span", 0),
              oe(2, 1),
              L(),
              W(3, "div", 1),
              lt(4, So, 2, 0, ":svg:svg", 2)),
              r & 2 &&
                (B(3),
                Y("matRippleDisabled", n.disableRipple || n.disabled)(
                  "matRippleTrigger",
                  n._getHostElement()
                ),
                B(),
                ft(n._triggersSubmenu ? 4 : -1));
          },
          dependencies: [ya],
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return t;
  })();
var Eo = new Lt("MatMenuContent");
var Ni = {
    transformMenu: gr("transformMenu", [
      vr("void", Jt({ opacity: 0, transform: "scale(0.8)" })),
      Si(
        "void => enter",
        _i(
          "120ms cubic-bezier(0, 0, 0.2, 1)",
          Jt({ opacity: 1, transform: "scale(1)" })
        )
      ),
      Si("* => void", _i("100ms 25ms linear", Jt({ opacity: 0 }))),
    ]),
    fadeInItems: gr("fadeInItems", [
      vr("showing", Jt({ opacity: 1 })),
      Si("void => *", [
        Jt({ opacity: 0 }),
        _i("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
      ]),
    ]),
  },
  Ip = Ni.fadeInItems,
  Fp = Ni.transformMenu,
  Po = 0,
  wo = new Lt("mat-menu-default-options", { providedIn: "root", factory: To });
function To() {
  return {
    overlapTrigger: !1,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop",
  };
}
var Ae = (() => {
    class t {
      get xPosition() {
        return this._xPosition;
      }
      set xPosition(i) {
        (this._xPosition = i), this.setPositionClasses();
      }
      get yPosition() {
        return this._yPosition;
      }
      set yPosition(i) {
        (this._yPosition = i), this.setPositionClasses();
      }
      set panelClass(i) {
        let r = this._previousPanelClass,
          n = Rt({}, this._classList);
        r &&
          r.length &&
          r.split(" ").forEach((a) => {
            n[a] = !1;
          }),
          (this._previousPanelClass = i),
          i &&
            i.length &&
            (i.split(" ").forEach((a) => {
              n[a] = !0;
            }),
            (this._elementRef.nativeElement.className = "")),
          (this._classList = n);
      }
      get classList() {
        return this.panelClass;
      }
      set classList(i) {
        this.panelClass = i;
      }
      constructor(i, r, n, a) {
        (this._elementRef = i),
          (this._changeDetectorRef = a),
          (this._elevationPrefix = "mat-elevation-z"),
          (this._baseElevation = null),
          (this._directDescendantItems = new mn()),
          (this._classList = {}),
          (this._panelAnimationState = "void"),
          (this._animationDone = new xe()),
          (this.closed = new ni()),
          (this.close = this.closed),
          (this.panelId = `mat-menu-panel-${Po++}`),
          (this._injector = Q(dr)),
          (this.overlayPanelClass = n.overlayPanelClass || ""),
          (this._xPosition = n.xPosition),
          (this._yPosition = n.yPosition),
          (this.backdropClass = n.backdropClass),
          (this.overlapTrigger = n.overlapTrigger),
          (this.hasBackdrop = n.hasBackdrop);
      }
      ngOnInit() {
        this.setPositionClasses();
      }
      ngAfterContentInit() {
        this._updateDirectDescendants(),
          (this._keyManager = new la(this._directDescendantItems)
            .withWrap()
            .withTypeAhead()
            .withHomeAndEnd()),
          this._keyManager.tabOut.subscribe(() => this.closed.emit("tab")),
          this._directDescendantItems.changes
            .pipe(
              ei(this._directDescendantItems),
              zt((i) => ti(...i.map((r) => r._focused)))
            )
            .subscribe((i) => this._keyManager.updateActiveItem(i)),
          this._directDescendantItems.changes.subscribe((i) => {
            let r = this._keyManager;
            if (
              this._panelAnimationState === "enter" &&
              r.activeItem?._hasFocus()
            ) {
              let n = i.toArray(),
                a = Math.max(0, Math.min(n.length - 1, r.activeItemIndex || 0));
              n[a] && !n[a].disabled
                ? r.setActiveItem(a)
                : r.setNextItemActive();
            }
          });
      }
      ngOnDestroy() {
        this._keyManager?.destroy(),
          this._directDescendantItems.destroy(),
          this.closed.complete(),
          this._firstItemFocusRef?.destroy();
      }
      _hovered() {
        return this._directDescendantItems.changes.pipe(
          ei(this._directDescendantItems),
          zt((r) => ti(...r.map((n) => n._hovered)))
        );
      }
      addItem(i) {}
      removeItem(i) {}
      _handleKeydown(i) {
        let r = i.keyCode,
          n = this._keyManager;
        switch (r) {
          case 27:
            oa(i) || (i.preventDefault(), this.closed.emit("keydown"));
            break;
          case 37:
            this.parentMenu &&
              this.direction === "ltr" &&
              this.closed.emit("keydown");
            break;
          case 39:
            this.parentMenu &&
              this.direction === "rtl" &&
              this.closed.emit("keydown");
            break;
          default:
            (r === 38 || r === 40) && n.setFocusOrigin("keyboard"),
              n.onKeydown(i);
            return;
        }
        i.stopPropagation();
      }
      focusFirstItem(i = "program") {
        this._firstItemFocusRef?.destroy(),
          (this._firstItemFocusRef = bn(
            () => {
              let r = null;
              if (
                (this._directDescendantItems.length &&
                  (r = this._directDescendantItems.first
                    ._getHostElement()
                    .closest('[role="menu"]')),
                !r || !r.contains(document.activeElement))
              ) {
                let n = this._keyManager;
                n.setFocusOrigin(i).setFirstItemActive(),
                  !n.activeItem && r && r.focus();
              }
            },
            { injector: this._injector }
          ));
      }
      resetActiveItem() {
        this._keyManager.setActiveItem(-1);
      }
      setElevation(i) {
        if (this._baseElevation === null) {
          let o =
            (typeof getComputedStyle == "function"
              ? getComputedStyle(this._elementRef.nativeElement)
              : null
            )?.getPropertyValue("--mat-menu-base-elevation-level") || "8";
          this._baseElevation = parseInt(o);
        }
        let r = Math.min(this._baseElevation + i, 24),
          n = `${this._elevationPrefix}${r}`,
          a = Object.keys(this._classList).find((s) =>
            s.startsWith(this._elevationPrefix)
          );
        if (!a || a === this._previousElevation) {
          let s = Rt({}, this._classList);
          this._previousElevation && (s[this._previousElevation] = !1),
            (s[n] = !0),
            (this._previousElevation = n),
            (this._classList = s);
        }
      }
      setPositionClasses(i = this.xPosition, r = this.yPosition) {
        (this._classList = lr(Rt({}, this._classList), {
          "mat-menu-before": i === "before",
          "mat-menu-after": i === "after",
          "mat-menu-above": r === "above",
          "mat-menu-below": r === "below",
        })),
          this._changeDetectorRef?.markForCheck();
      }
      _startAnimation() {
        this._panelAnimationState = "enter";
      }
      _resetAnimation() {
        this._panelAnimationState = "void";
      }
      _onAnimationDone(i) {
        this._animationDone.next(i), (this._isAnimating = !1);
      }
      _onAnimationStart(i) {
        (this._isAnimating = !0),
          i.toState === "enter" &&
            this._keyManager.activeItemIndex === 0 &&
            (i.element.scrollTop = 0);
      }
      _updateDirectDescendants() {
        this._allItems.changes.pipe(ei(this._allItems)).subscribe((i) => {
          this._directDescendantItems.reset(
            i.filter((r) => r._parentMenu === this)
          ),
            this._directDescendantItems.notifyOnChanges();
        });
      }
      static {
        this.ɵfac = function (r) {
          return new (r || t)(mt(pe), mt(Vt), mt(wo), mt(Oe));
        };
      }
      static {
        this.ɵcmp = X({
          type: t,
          selectors: [["mat-menu"]],
          contentQueries: function (r, n, a) {
            if ((r & 1 && (li(a, Eo, 5), li(a, je, 5), li(a, je, 4)), r & 2)) {
              let s;
              ue((s = ge())) && (n.lazyContent = s.first),
                ue((s = ge())) && (n._allItems = s),
                ue((s = ge())) && (n.items = s);
            }
          },
          viewQuery: function (r, n) {
            if ((r & 1 && ci(fr, 5), r & 2)) {
              let a;
              ue((a = ge())) && (n.templateRef = a.first);
            }
          },
          hostVars: 3,
          hostBindings: function (r, n) {
            r & 2 &&
              de("aria-label", null)("aria-labelledby", null)(
                "aria-describedby",
                null
              );
          },
          inputs: {
            backdropClass: "backdropClass",
            ariaLabel: [0, "aria-label", "ariaLabel"],
            ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
            ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
            xPosition: "xPosition",
            yPosition: "yPosition",
            overlapTrigger: [2, "overlapTrigger", "overlapTrigger", Ht],
            hasBackdrop: [
              2,
              "hasBackdrop",
              "hasBackdrop",
              (i) => (i == null ? null : Ht(i)),
            ],
            panelClass: [0, "class", "panelClass"],
            classList: "classList",
          },
          outputs: { closed: "closed", close: "close" },
          exportAs: ["matMenu"],
          standalone: !0,
          features: [hi([{ provide: _r, useExisting: t }]), Ve, Z],
          ngContentSelectors: xo,
          decls: 1,
          vars: 0,
          consts: [
            [
              "tabindex",
              "-1",
              "role",
              "menu",
              1,
              "mat-mdc-menu-panel",
              "mat-mdc-elevation-specific",
              3,
              "keydown",
              "click",
              "id",
            ],
            [1, "mat-mdc-menu-content"],
          ],
          template: function (r, n) {
            r & 1 && (Be(), lt(0, Co, 3, 7, "ng-template"));
          },
          styles: [
            'mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-app-surface-container));will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.mat-mdc-menu-panel.ng-animating:has(.mat-mdc-menu-content:empty){display:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-app-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}[dir=rtl] .mat-mdc-menu-item{padding-right:var(--mat-menu-item-leading-spacing);padding-left:var(--mat-menu-item-trailing-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-right:var(--mat-menu-item-with-icon-leading-spacing);padding-left:var(--mat-menu-item-with-icon-trailing-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-app-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}',
          ],
          encapsulation: 2,
          data: { animation: [Ni.transformMenu, Ni.fadeInItems] },
          changeDetection: 0,
        });
      }
    }
    return t;
  })(),
  La = new Lt("mat-menu-scroll-strategy", {
    providedIn: "root",
    factory: () => {
      let t = Q(ze);
      return () => t.scrollStrategies.reposition();
    },
  });
function Mo(t) {
  return () => t.scrollStrategies.reposition();
}
var Ao = { provide: La, deps: [ze], useFactory: Mo },
  Fa = sa({ passive: !0 });
var Va = (() => {
    class t {
      get _deprecatedMatMenuTriggerFor() {
        return this.menu;
      }
      set _deprecatedMatMenuTriggerFor(i) {
        this.menu = i;
      }
      get menu() {
        return this._menu;
      }
      set menu(i) {
        i !== this._menu &&
          ((this._menu = i),
          this._menuCloseSubscription.unsubscribe(),
          i &&
            (this._parentMaterialMenu,
            (this._menuCloseSubscription = i.close.subscribe((r) => {
              this._destroyMenu(r),
                (r === "click" || r === "tab") &&
                  this._parentMaterialMenu &&
                  this._parentMaterialMenu.closed.emit(r);
            }))),
          this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()));
      }
      constructor(i, r, n, a, s, o, l, c, p) {
        (this._overlay = i),
          (this._element = r),
          (this._viewContainerRef = n),
          (this._menuItemInstance = o),
          (this._dir = l),
          (this._focusMonitor = c),
          (this._ngZone = p),
          (this._overlayRef = null),
          (this._menuOpen = !1),
          (this._closingActionsSubscription = Ze.EMPTY),
          (this._hoverSubscription = Ze.EMPTY),
          (this._menuCloseSubscription = Ze.EMPTY),
          (this._changeDetectorRef = Q(Oe)),
          (this._handleTouchStart = (_) => {
            ha(_) || (this._openedBy = "touch");
          }),
          (this._openedBy = void 0),
          (this.restoreFocus = !0),
          (this.menuOpened = new ni()),
          (this.onMenuOpen = this.menuOpened),
          (this.menuClosed = new ni()),
          (this.onMenuClose = this.menuClosed),
          (this._scrollStrategy = a),
          (this._parentMaterialMenu = s instanceof Ae ? s : void 0),
          r.nativeElement.addEventListener(
            "touchstart",
            this._handleTouchStart,
            Fa
          );
      }
      ngAfterContentInit() {
        this._handleHover();
      }
      ngOnDestroy() {
        this._overlayRef &&
          (this._overlayRef.dispose(), (this._overlayRef = null)),
          this._element.nativeElement.removeEventListener(
            "touchstart",
            this._handleTouchStart,
            Fa
          ),
          this._menuCloseSubscription.unsubscribe(),
          this._closingActionsSubscription.unsubscribe(),
          this._hoverSubscription.unsubscribe();
      }
      get menuOpen() {
        return this._menuOpen;
      }
      get dir() {
        return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
      }
      triggersSubmenu() {
        return !!(
          this._menuItemInstance &&
          this._parentMaterialMenu &&
          this.menu
        );
      }
      toggleMenu() {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
      }
      openMenu() {
        let i = this.menu;
        if (this._menuOpen || !i) return;
        let r = this._createOverlay(i),
          n = r.getConfig(),
          a = n.positionStrategy;
        this._setPosition(i, a),
          (n.hasBackdrop =
            i.hasBackdrop == null ? !this.triggersSubmenu() : i.hasBackdrop),
          r.attach(this._getPortal(i)),
          i.lazyContent && i.lazyContent.attach(this.menuData),
          (this._closingActionsSubscription =
            this._menuClosingActions().subscribe(() => this.closeMenu())),
          this._initMenu(i),
          i instanceof Ae &&
            (i._startAnimation(),
            i._directDescendantItems.changes.pipe(ii(i.close)).subscribe(() => {
              a.withLockedPosition(!1).reapplyLastPosition(),
                a.withLockedPosition(!0);
            }));
      }
      closeMenu() {
        this.menu?.close.emit();
      }
      focus(i, r) {
        this._focusMonitor && i
          ? this._focusMonitor.focusVia(this._element, i, r)
          : this._element.nativeElement.focus(r);
      }
      updatePosition() {
        this._overlayRef?.updatePosition();
      }
      _destroyMenu(i) {
        if (!this._overlayRef || !this.menuOpen) return;
        let r = this.menu;
        this._closingActionsSubscription.unsubscribe(),
          this._overlayRef.detach(),
          this.restoreFocus &&
            (i === "keydown" || !this._openedBy || !this.triggersSubmenu()) &&
            this.focus(this._openedBy),
          (this._openedBy = void 0),
          r instanceof Ae
            ? (r._resetAnimation(),
              r.lazyContent
                ? r._animationDone
                    .pipe(
                      se((n) => n.toState === "void"),
                      mr(1),
                      ii(r.lazyContent._attached)
                    )
                    .subscribe({
                      next: () => r.lazyContent.detach(),
                      complete: () => this._setIsMenuOpen(!1),
                    })
                : this._setIsMenuOpen(!1))
            : (this._setIsMenuOpen(!1), r?.lazyContent?.detach());
      }
      _initMenu(i) {
        (i.parentMenu = this.triggersSubmenu()
          ? this._parentMaterialMenu
          : void 0),
          (i.direction = this.dir),
          this._setMenuElevation(i),
          i.focusFirstItem(this._openedBy || "program"),
          this._setIsMenuOpen(!0);
      }
      _setMenuElevation(i) {
        if (i.setElevation) {
          let r = 0,
            n = i.parentMenu;
          for (; n; ) r++, (n = n.parentMenu);
          i.setElevation(r);
        }
      }
      _setIsMenuOpen(i) {
        i !== this._menuOpen &&
          ((this._menuOpen = i),
          this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit(),
          this.triggersSubmenu() && this._menuItemInstance._setHighlighted(i),
          this._changeDetectorRef.markForCheck());
      }
      _createOverlay(i) {
        if (!this._overlayRef) {
          let r = this._getOverlayConfig(i);
          this._subscribeToPositions(i, r.positionStrategy),
            (this._overlayRef = this._overlay.create(r)),
            this._overlayRef.keydownEvents().subscribe();
        }
        return this._overlayRef;
      }
      _getOverlayConfig(i) {
        return new fa({
          positionStrategy: this._overlay
            .position()
            .flexibleConnectedTo(this._element)
            .withLockedPosition()
            .withGrowAfterOpen()
            .withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
          backdropClass: i.backdropClass || "cdk-overlay-transparent-backdrop",
          panelClass: i.overlayPanelClass,
          scrollStrategy: this._scrollStrategy(),
          direction: this._dir,
        });
      }
      _subscribeToPositions(i, r) {
        i.setPositionClasses &&
          r.positionChanges.subscribe((n) => {
            let a = n.connectionPair.overlayX === "start" ? "after" : "before",
              s = n.connectionPair.overlayY === "top" ? "below" : "above";
            this._ngZone
              ? this._ngZone.run(() => i.setPositionClasses(a, s))
              : i.setPositionClasses(a, s);
          });
      }
      _setPosition(i, r) {
        let [n, a] =
            i.xPosition === "before" ? ["end", "start"] : ["start", "end"],
          [s, o] =
            i.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"],
          [l, c] = [s, o],
          [p, _] = [n, a],
          h = 0;
        if (this.triggersSubmenu()) {
          if (
            ((_ = n = i.xPosition === "before" ? "start" : "end"),
            (a = p = n === "end" ? "start" : "end"),
            this._parentMaterialMenu)
          ) {
            if (this._parentInnerPadding == null) {
              let b = this._parentMaterialMenu.items.first;
              this._parentInnerPadding = b ? b._getHostElement().offsetTop : 0;
            }
            h =
              s === "bottom"
                ? this._parentInnerPadding
                : -this._parentInnerPadding;
          }
        } else
          i.overlapTrigger ||
            ((l = s === "top" ? "bottom" : "top"),
            (c = o === "top" ? "bottom" : "top"));
        r.withPositions([
          { originX: n, originY: l, overlayX: p, overlayY: s, offsetY: h },
          { originX: a, originY: l, overlayX: _, overlayY: s, offsetY: h },
          { originX: n, originY: c, overlayX: p, overlayY: o, offsetY: -h },
          { originX: a, originY: c, overlayX: _, overlayY: o, offsetY: -h },
        ]);
      }
      _menuClosingActions() {
        let i = this._overlayRef.backdropClick(),
          r = this._overlayRef.detachments(),
          n = this._parentMaterialMenu ? this._parentMaterialMenu.closed : ae(),
          a = this._parentMaterialMenu
            ? this._parentMaterialMenu._hovered().pipe(
                se((s) => s !== this._menuItemInstance),
                se(() => this._menuOpen)
              )
            : ae();
        return ti(i, n, a, r);
      }
      _handleMousedown(i) {
        ca(i) ||
          ((this._openedBy = i.button === 0 ? "mouse" : void 0),
          this.triggersSubmenu() && i.preventDefault());
      }
      _handleKeydown(i) {
        let r = i.keyCode;
        (r === 13 || r === 32) && (this._openedBy = "keyboard"),
          this.triggersSubmenu() &&
            ((r === 39 && this.dir === "ltr") ||
              (r === 37 && this.dir === "rtl")) &&
            ((this._openedBy = "keyboard"), this.openMenu());
      }
      _handleClick(i) {
        this.triggersSubmenu()
          ? (i.stopPropagation(), this.openMenu())
          : this.toggleMenu();
      }
      _handleHover() {
        !this.triggersSubmenu() ||
          !this._parentMaterialMenu ||
          (this._hoverSubscription = this._parentMaterialMenu
            ._hovered()
            .pipe(
              se((i) => i === this._menuItemInstance && !i.disabled),
              pr(0, hr)
            )
            .subscribe(() => {
              (this._openedBy = "mouse"),
                this.menu instanceof Ae && this.menu._isAnimating
                  ? this.menu._animationDone
                      .pipe(
                        mr(1),
                        pr(0, hr),
                        ii(this._parentMaterialMenu._hovered())
                      )
                      .subscribe(() => this.openMenu())
                  : this.openMenu();
            }));
      }
      _getPortal(i) {
        return (
          (!this._portal || this._portal.templateRef !== i.templateRef) &&
            (this._portal = new da(i.templateRef, this._viewContainerRef)),
          this._portal
        );
      }
      static {
        this.ɵfac = function (r) {
          return new (r || t)(
            mt(ze),
            mt(pe),
            mt(un),
            mt(La),
            mt(_r, 8),
            mt(je, 10),
            mt(ma, 8),
            mt(Ne),
            mt(Vt)
          );
        };
      }
      static {
        this.ɵdir = Ce({
          type: t,
          selectors: [
            ["", "mat-menu-trigger-for", ""],
            ["", "matMenuTriggerFor", ""],
          ],
          hostAttrs: [1, "mat-mdc-menu-trigger"],
          hostVars: 3,
          hostBindings: function (r, n) {
            r & 1 &&
              it("click", function (s) {
                return n._handleClick(s);
              })("mousedown", function (s) {
                return n._handleMousedown(s);
              })("keydown", function (s) {
                return n._handleKeydown(s);
              }),
              r & 2 &&
                de("aria-haspopup", n.menu ? "menu" : null)(
                  "aria-expanded",
                  n.menuOpen
                )("aria-controls", n.menuOpen ? n.menu.panelId : null);
          },
          inputs: {
            _deprecatedMatMenuTriggerFor: [
              0,
              "mat-menu-trigger-for",
              "_deprecatedMatMenuTriggerFor",
            ],
            menu: [0, "matMenuTriggerFor", "menu"],
            menuData: [0, "matMenuTriggerData", "menuData"],
            restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"],
          },
          outputs: {
            menuOpened: "menuOpened",
            onMenuOpen: "onMenuOpen",
            menuClosed: "menuClosed",
            onMenuClose: "onMenuClose",
          },
          exportAs: ["matMenuTrigger"],
          standalone: !0,
        });
      }
    }
    return t;
  })(),
  Ba = (() => {
    class t {
      static {
        this.ɵfac = function (r) {
          return new (r || t)();
        };
      }
      static {
        this.ɵmod = Re({ type: t });
      }
      static {
        this.ɵinj = Fe({ providers: [Ao], imports: [ui, bi, Te, ua, pa, Te] });
      }
    }
    return t;
  })();
N();
var Io = ["mat-button", ""],
  Fo = [
    [
      ["", 8, "material-icons", 3, "iconPositionEnd", ""],
      ["mat-icon", 3, "iconPositionEnd", ""],
      ["", "matButtonIcon", "", 3, "iconPositionEnd", ""],
    ],
    "*",
    [
      ["", "iconPositionEnd", "", 8, "material-icons"],
      ["mat-icon", "iconPositionEnd", ""],
      ["", "matButtonIcon", "", "iconPositionEnd", ""],
    ],
  ],
  Do = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ];
var Ro = new Lt("MAT_BUTTON_CONFIG");
var Lo = [
    { attribute: "mat-button", mdcClasses: ["mdc-button", "mat-mdc-button"] },
    {
      attribute: "mat-flat-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--unelevated",
        "mat-mdc-unelevated-button",
      ],
    },
    {
      attribute: "mat-raised-button",
      mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"],
    },
    {
      attribute: "mat-stroked-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--outlined",
        "mat-mdc-outlined-button",
      ],
    },
    {
      attribute: "mat-fab",
      mdcClasses: ["mdc-fab", "mat-mdc-fab-base", "mat-mdc-fab"],
    },
    {
      attribute: "mat-mini-fab",
      mdcClasses: [
        "mdc-fab",
        "mat-mdc-fab-base",
        "mdc-fab--mini",
        "mat-mdc-mini-fab",
      ],
    },
    {
      attribute: "mat-icon-button",
      mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
    },
  ],
  Vo = (() => {
    class t {
      get ripple() {
        return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
      }
      set ripple(i) {
        this._rippleLoader?.attachRipple(this._elementRef.nativeElement, i);
      }
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(i) {
        (this._disableRipple = i), this._updateRippleDisabled();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(i) {
        (this._disabled = i), this._updateRippleDisabled();
      }
      constructor(i, r, n, a) {
        (this._elementRef = i),
          (this._platform = r),
          (this._ngZone = n),
          (this._animationMode = a),
          (this._focusMonitor = Q(Ne)),
          (this._rippleLoader = Q(ba)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1);
        let s = Q(Ro, { optional: !0 }),
          o = i.nativeElement,
          l = o.classList;
        (this.disabledInteractive = s?.disabledInteractive ?? !1),
          (this.color = s?.color ?? null),
          this._rippleLoader?.configureRipple(o, {
            className: "mat-mdc-button-ripple",
          });
        for (let { attribute: c, mdcClasses: p } of Lo)
          o.hasAttribute(c) && l.add(...p);
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      focus(i = "program", r) {
        i
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, i, r)
          : this._elementRef.nativeElement.focus(r);
      }
      _getAriaDisabled() {
        return this.ariaDisabled != null
          ? this.ariaDisabled
          : this.disabled && this.disabledInteractive
          ? !0
          : null;
      }
      _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : !0;
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(
          this._elementRef.nativeElement,
          this.disableRipple || this.disabled
        );
      }
      static {
        this.ɵfac = function (r) {
          dn();
        };
      }
      static {
        this.ɵdir = Ce({
          type: t,
          inputs: {
            color: "color",
            disableRipple: [2, "disableRipple", "disableRipple", Ht],
            disabled: [2, "disabled", "disabled", Ht],
            ariaDisabled: [2, "aria-disabled", "ariaDisabled", Ht],
            disabledInteractive: [
              2,
              "disabledInteractive",
              "disabledInteractive",
              Ht,
            ],
          },
          features: [Ve],
        });
      }
    }
    return t;
  })();
var Oa = (() => {
  class t extends Vo {
    constructor(i, r, n, a) {
      super(i, r, n, a);
    }
    static {
      this.ɵfac = function (r) {
        return new (r || t)(mt(pe), mt(aa), mt(Vt), mt(Le, 8));
      };
    }
    static {
      this.ɵcmp = X({
        type: t,
        selectors: [
          ["button", "mat-button", ""],
          ["button", "mat-raised-button", ""],
          ["button", "mat-flat-button", ""],
          ["button", "mat-stroked-button", ""],
        ],
        hostVars: 14,
        hostBindings: function (r, n) {
          r & 2 &&
            (de("disabled", n._getDisabledAttribute())(
              "aria-disabled",
              n._getAriaDisabled()
            ),
            oi(n.color ? "mat-" + n.color : ""),
            fe("mat-mdc-button-disabled", n.disabled)(
              "mat-mdc-button-disabled-interactive",
              n.disabledInteractive
            )("_mat-animation-noopable", n._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !n.color
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton"],
        standalone: !0,
        features: [ai, Z],
        attrs: Io,
        ngContentSelectors: Do,
        decls: 7,
        vars: 4,
        consts: [
          [1, "mat-mdc-button-persistent-ripple"],
          [1, "mdc-button__label"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (r, n) {
          r & 1 &&
            (Be(Fo),
            W(0, "span", 0),
            oe(1),
            F(2, "span", 1),
            oe(3, 1),
            L(),
            oe(4, 2),
            W(5, "span", 2)(6, "span", 3)),
            r & 2 &&
              fe("mdc-button__ripple", !n._isFab)("mdc-fab__ripple", n._isFab);
        },
        styles: [
          '.mat-mdc-button-base{text-decoration:none}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-text-button-horizontal-padding, 8px);height:var(--mdc-text-button-container-height);font-family:var(--mdc-text-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-text-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-text-button-label-text-transform);font-weight:var(--mdc-text-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, var(--mat-app-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-filled-button-horizontal-padding, 16px);height:var(--mdc-filled-button-container-height);font-family:var(--mdc-filled-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-filled-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-filled-button-label-text-transform);font-weight:var(--mdc-filled-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color, var(--mat-app-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, var(--mat-app-on-primary));background-color:var(--mdc-filled-button-container-color, var(--mat-app-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow, var(--mat-app-level1));height:var(--mdc-protected-button-container-height);font-family:var(--mdc-protected-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-protected-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-protected-button-label-text-transform);font-weight:var(--mdc-protected-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, var(--mat-app-primary));background-color:var(--mdc-protected-button-container-color, var(--mat-app-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow, var(--mat-app-level2))}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow, var(--mat-app-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-outlined-button-horizontal-padding, 15px);height:var(--mdc-outlined-button-container-height);font-family:var(--mdc-outlined-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-outlined-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-outlined-button-label-text-transform);font-weight:var(--mdc-outlined-button-label-text-weight, var(--mat-app-label-large-weight));border-radius:var(--mdc-outlined-button-container-shape, var(--mat-app-corner-full));border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, var(--mat-app-primary));border-color:var(--mdc-outlined-button-outline-color, var(--mat-app-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button .mdc-button__ripple{border-width:var(--mdc-outlined-button-outline-width);border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
          ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
  }
  return t;
})();
var Na = (() => {
  class t {
    static {
      this.ɵfac = function (r) {
        return new (r || t)();
      };
    }
    static {
      this.ɵmod = Re({ type: t });
    }
    static {
      this.ɵinj = Fe({ imports: [Te, bi, Te] });
    }
  }
  return t;
})();
var Oo = (t, e) => ({ "opacity-100 visible": t, "opacity-0 invisible": e }),
  No = (t, e) => ({ "translate-x-0": t, "translate-x-full": e }),
  zo = (t) => ({ "max-h-[200px]": t });
function Go(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "button", 33),
      it("click", function () {
        tt(i);
        let n = $(2);
        return et(n.disconnectWallet());
      }),
      F(1, "span", 28),
      U(2),
      L()();
  }
  if (t & 2) {
    let i = $().$implicit;
    B(2), St(" ", i("disconnect"), " ");
  }
}
function jo(t, e) {
  t & 1 && W(0, "app-header-wallet-connect", 9);
}
function Ho(t, e) {
  t & 1 && (W(0, "img", 15), F(1, "p", 34), U(2, "EN"), L());
}
function Wo(t, e) {
  t & 1 && (W(0, "img", 17), F(1, "p", 34), U(2, "ZH"), L());
}
function $o(t, e) {
  t & 1 && (F(0, "button", 19), W(1, "img", 35), L());
}
function qo(t, e) {
  t & 1 && W(0, "app-header-wallet-connect", 9);
}
function Ko(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "button", 36),
      it("click", function () {
        tt(i);
        let n = $(2);
        return et(n.disconnectWallet());
      }),
      F(1, "span", 28),
      U(2),
      L()();
  }
  if (t & 2) {
    let i = $().$implicit;
    B(2), St(" ", i("disconnect"), " ");
  }
}
function Uo(t, e) {
  t & 1 && W(0, "app-header-wallet-connect");
}
function Yo(t, e) {
  t & 1 &&
    (F(0, "div", 30), W(1, "img", 15), F(2, "p", 37), U(3, "English"), L()());
}
function Qo(t, e) {
  t & 1 &&
    (F(0, "div", 30),
    W(1, "img", 17),
    F(2, "p", 37),
    U(3, "\u4E2D\u56FD\u4EBA"),
    L()());
}
function Xo(t, e) {
  if (t & 1) {
    let i = gt();
    F(0, "div")(1, "div", 2)(2, "div", 3)(3, "button", 4),
      it("click", function () {
        tt(i);
        let n = $();
        return et(n.goToStake("https://aipump-ai-fork-ares.vercel.app/"));
      }),
      F(4, "span", 5),
      U(5),
      L()(),
      F(6, "button", 6)(7, "span", 7),
      U(8),
      L()(),
      lt(9, Go, 3, 1, "button", 8)(
        10,
        jo,
        1,
        0,
        "app-header-wallet-connect",
        9
      ),
      F(11, "button", 10)(12, "div", 11),
      lt(13, Ho, 3, 0)(14, Wo, 3, 0),
      W(15, "img", 12),
      L()(),
      F(16, "mat-menu", 13, 0)(18, "button", 14),
      it("click", function () {
        tt(i);
        let n = $();
        return et(n.selectLanguage("en"));
      }),
      F(19, "div", 11),
      W(20, "img", 15),
      F(21, "p"),
      U(22, "English"),
      L()()(),
      F(23, "button", 16),
      it("click", function () {
        tt(i);
        let n = $();
        return et(n.selectLanguage("zh"));
      }),
      F(24, "div", 11),
      W(25, "img", 17),
      F(26, "p"),
      U(27, "\u4E2D\u56FD\u4EBA"),
      L()()()()(),
      F(28, "div", 18),
      lt(29, $o, 2, 0, "button", 19)(
        30,
        qo,
        1,
        0,
        "app-header-wallet-connect",
        9
      ),
      L(),
      F(31, "button", 20),
      it("click", function () {
        tt(i);
        let n = $();
        return et(n.toggleMobileMenu());
      }),
      W(32, "img", 21),
      L()(),
      F(33, "div", 22),
      it("click", function () {
        tt(i);
        let n = $();
        return et(n.toggleMobileMenu());
      }),
      L(),
      F(34, "div", 23)(35, "button", 24),
      it("click", function () {
        tt(i);
        let n = $();
        return et(n.toggleMobileMenu());
      }),
      W(36, "img", 25),
      L(),
      lt(37, Ko, 3, 1, "button", 26)(38, Uo, 1, 0, "app-header-wallet-connect"),
      F(39, "button", 27),
      it("click", function () {
        tt(i);
        let n = $();
        return et(n.goToStake("https://aipump-ai-fork-ares.vercel.app/"));
      }),
      F(40, "span", 28),
      U(41),
      L()(),
      F(42, "div", 29),
      it("click", function () {
        tt(i);
        let n = $();
        return et(n.toggleLanguageMenu());
      }),
      lt(43, Yo, 4, 0, "div", 30)(44, Qo, 4, 0, "div", 30),
      W(45, "img", 12),
      L(),
      F(46, "div", 31)(47, "button", 32),
      it("click", function () {
        tt(i);
        let n = $();
        return n.selectLanguage("en"), et(n.toggleLanguageMenu());
      }),
      U(48, " English "),
      L(),
      F(49, "button", 32),
      it("click", function () {
        tt(i);
        let n = $();
        return n.selectLanguage("zh"), et(n.toggleLanguageMenu());
      }),
      U(50, " \u4E2D\u56FD\u4EBA "),
      L()()()();
  }
  if (t & 2) {
    let i = e.$implicit,
      r = En(17),
      n = $();
    B(5),
      St(" ", i("stake"), " "),
      B(3),
      St(" ", i("createNewAgent"), " "),
      B(),
      ft(n.walletStore.isConnected() ? 9 : 10),
      B(2),
      Y("matMenuTriggerFor", r),
      B(2),
      ft(
        n.translocoService.getActiveLang() == "en"
          ? 13
          : n.translocoService.getActiveLang() == "zh"
          ? 14
          : -1
      ),
      B(16),
      ft(n.walletStore.isConnected() ? 29 : 30),
      B(4),
      Y("ngClass", ur(14, Oo, n.isMobileMenuOpen, !n.isMobileMenuOpen)),
      B(),
      si("width", "min(80vw, 345px)"),
      Y("ngClass", ur(17, No, n.isMobileMenuOpen, !n.isMobileMenuOpen)),
      B(3),
      ft(n.walletStore.isConnected() ? 37 : 38),
      B(4),
      St(" ", i("stake"), " "),
      B(2),
      ft(
        n.translocoService.getActiveLang() == "en"
          ? 43
          : n.translocoService.getActiveLang() == "zh"
          ? 44
          : -1
      ),
      B(3),
      Y("ngClass", Mn(20, zo, n.isLanguageMenuOpen));
  }
}
var zi = class t {
  #t = Q(vi);
  #e = Q(ra);
  walletStore = Q(Bt);
  translocoService = Q(Qn);
  isMobileMenuOpen = !1;
  isLanguageMenuOpen = !1;
  disconnectWallet() {
    this.#t.disconnect(), this.#e.disconnect().subscribe();
  }
  goToStake(e) {
    window.open(e, "_blank");
  }
  selectLanguage(e) {
    this.translocoService.setActiveLang(e);
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  toggleLanguageMenu() {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-header-navigation"]],
    standalone: !0,
    features: [Z],
    decls: 1,
    vars: 1,
    consts: [
      ["languageMenu", "matMenu"],
      [4, "transloco", "translocoPrefix"],
      [
        1,
        "flex",
        "items-center",
        "justify-between",
        "md:justify-start",
        "w-full",
        "gap-2",
      ],
      [1, "hidden", "xl:flex", "gap-5"],
      [
        1,
        "h-10",
        "grid",
        "place-items-center",
        "rounded-[4px]",
        "px-6",
        "border",
        "border-orange",
        "uppercase",
        3,
        "click",
      ],
      [1, "font-almarena", "font-bold", "text-xs", "text-[#EEECE6]"],
      [
        "routerLink",
        "/create-agent",
        1,
        "h-10",
        "px-6",
        "rounded-[4px]",
        "bg-orange",
        "grid",
        "place-items-center",
        "hover:bg-orange/85",
      ],
      [1, "font-almarena", "font-bold", "text-black", "text-xs", "uppercase"],
      [1, "h-10", "grid", "place-items-center"],
      [1, "ml-auto"],
      ["mat-button", "", 3, "matMenuTriggerFor"],
      [1, "flex", "gap-1", "items-center"],
      ["src", "icons/arrow-down.svg", "alt", ""],
      ["yPosition", "below", 1, "text-white", "px-4"],
      ["mat-menu-item", "", 1, "bg-[#212121]", "rounded-2xl", 3, "click"],
      ["src", "icons/us_flag.svg", "alt", ""],
      ["mat-menu-item", "", 3, "click"],
      ["src", "icons/zh_flag.svg", "alt", ""],
      [1, "xl:hidden"],
      ["routerLink", "/create-agent", 1, "h-10", "rounded-[4px]"],
      [
        1,
        "xl:hidden",
        "flex",
        "items-center",
        "justify-center",
        "w-10",
        "h-10",
        3,
        "click",
      ],
      ["src", "icons/menu.svg", "alt", "Menu", 1, "w-6", "h-6"],
      [
        1,
        "fixed",
        "inset-0",
        "bg-black/50",
        "z-50",
        "transition-opacity",
        "duration-300",
        3,
        "click",
        "ngClass",
      ],
      [
        1,
        "fixed",
        "top-0",
        "right-0",
        "h-screen",
        "bg-black",
        "shadow-lg",
        "z-50",
        "p-8",
        "pt-20",
        "flex",
        "flex-col",
        "gap-6",
        "transition-transform",
        "duration-300",
        "ease-in-out",
        3,
        "ngClass",
      ],
      [1, "absolute", "top-5", "right-5", 3, "click"],
      ["src", "icons/close.svg", "alt", "Close", 1, "w-6", "h-6"],
      [1, "h-10", "text-left"],
      [1, "h-10", "rounded-[4px]", "text-left", 3, "click"],
      [1, "font-almarena", "font-bold", "text-sm", "text-[#EEECE6]"],
      [
        1,
        "flex",
        "justify-between",
        "items-center",
        "w-full",
        "cursor-pointer",
        "h-[40px]",
        3,
        "click",
      ],
      [1, "flex", "gap-2"],
      [
        1,
        "overflow-hidden",
        "rounded-lg",
        "px-3",
        "flex",
        "flex-col",
        "flex-start",
        "gap-2",
        "max-h-0",
        "transition-[max-height]",
        "duration-300",
        "ease-in-out",
        3,
        "ngClass",
      ],
      [1, "block", "text-white", "py-1", 3, "click"],
      [1, "h-10", "grid", "place-items-center", 3, "click"],
      [1, "text-white", "leading-none", "h-[14px]"],
      [
        "src",
        "icons/add-agent.svg",
        "alt",
        "Menu",
        1,
        "w-10",
        "h-10",
        "rounded-[4px]",
      ],
      [1, "h-10", "text-left", 3, "click"],
      [1, "text-white", "text-sm"],
    ],
    template: function (i, r) {
      i & 1 && lt(0, Xo, 51, 22, "div", 1),
        i & 2 && Y("translocoPrefix", "header");
    },
    dependencies: [we, Wt, Oi, Na, Oa, Ba, Ae, je, Va, ui, Ee],
    encapsulation: 2,
    changeDetection: 0,
  });
};
N();
function Zo(t, e) {
  if ((t & 1 && (F(0, "a", 1), W(1, "app-social-icon", 2), L()), t & 2)) {
    let i = e.$implicit;
    Y("href", i.url, Et), B(), Y("type", i.type)("res", i.url);
  }
}
var Gi = class t {
  socialConfig = Q(Ge);
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-header-socials"]],
    standalone: !0,
    features: [Z],
    decls: 3,
    vars: 0,
    consts: [
      [1, "flex", "gap-2.5"],
      [
        "target",
        "_blank",
        1,
        "w-10",
        "h-10",
        "rounded-full",
        "bg-[#EDE9DF1A]",
        "grid",
        "place-items-center",
        "hover:bg-[#EDE9DF1A]/15",
        3,
        "href",
      ],
      [3, "type", "res"],
    ],
    template: function (i, r) {
      i & 1 && (F(0, "div", 0), Mt(1, Zo, 2, 3, "a", 1, jt), L()),
        i & 2 && (B(), At(r.socialConfig));
    },
    dependencies: [yi],
    encapsulation: 2,
    changeDetection: 0,
  });
};
function Jo(t, e) {
  t & 1 &&
    (F(0, "div", 1)(1, "div", 2),
    W(2, "app-header-socials", 3),
    F(3, "button", 4),
    W(4, "img", 5),
    L(),
    W(5, "app-header-navigation", 6),
    L()());
}
var ji = class t {
  walletStore = Q(Bt);
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-header"]],
    standalone: !0,
    features: [Z],
    decls: 1,
    vars: 1,
    consts: [
      [
        "class",
        "h-[110px] md:h-[72px] bg-black relative",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [1, "h-[110px]", "md:h-[72px]", "bg-black", "relative"],
      [
        1,
        "container",
        "mx-auto",
        "flex",
        "-md:flex-wrap",
        "items-center",
        "px-7.5",
        "gap-2",
        "md:gap-5",
        "h-[110px]",
        "md:h-[72px]",
        "-md:justify-between",
      ],
      [1, "-md:hidden"],
      [
        "routerLink",
        "/",
        1,
        "font-almarena",
        "-md:flex",
        "-md:justify-center",
        "text-white",
        "text-2xl",
        "md:absolute",
        "md:left-1/2",
        "md:-translate-x-1/2",
      ],
      ["src", "/images/logo.png", 1, "max-h-10"],
      [1, "md:ml-auto"],
    ],
    template: function (i, r) {
      i & 1 && lt(0, Jo, 6, 0, "div", 0),
        i & 2 && Y("translocoPrefix", "header");
    },
    dependencies: [we, Wt, Gi, zi],
    encapsulation: 2,
    changeDetection: 0,
  });
};
var Hi = class t {
  constructor(e) {
    this.router = e;
    sessionStorage.setItem("animation-list-view", "true"),
      sessionStorage.setItem("animation-grid-view", "true");
  }
  tokensPriceStore = Q(Ea);
  static ɵfac = function (i) {
    return new (i || t)(mt(Pe));
  };
  static ɵcmp = X({
    type: t,
    selectors: [["app-root"]],
    standalone: !0,
    features: [Z],
    decls: 7,
    vars: 0,
    consts: [
      [1, "min-h-dvh", "flex", "flex-col", "relative"],
      [1, "sticky", "top-0", "z-20"],
      [1, "sticky", "top-[50px]", "z-20"],
      [1, "flex-1"],
      [1, "fixed", "right-7", "bottom-20", "md:bottom-20", "z-50"],
    ],
    template: function (i, r) {
      i & 1 &&
        (F(0, "div", 0),
        W(1, "app-banner", 1)(2, "app-header", 2),
        F(3, "div", 3),
        W(4, "router-outlet"),
        L(),
        W(5, "app-footer"),
        L(),
        W(6, "app-defai-chat", 4));
    },
    dependencies: [ji, Nn, Bi, Ei, Li],
    encapsulation: 2,
  });
};
N();
N();
N();
function za(t) {
  return new ot(3e3, !1);
}
function tl() {
  return new ot(3100, !1);
}
function el() {
  return new ot(3101, !1);
}
function il(t) {
  return new ot(3001, !1);
}
function rl(t) {
  return new ot(3003, !1);
}
function nl(t) {
  return new ot(3004, !1);
}
function al(t, e) {
  return new ot(3005, !1);
}
function sl() {
  return new ot(3006, !1);
}
function ol() {
  return new ot(3007, !1);
}
function ll(t, e) {
  return new ot(3008, !1);
}
function cl(t) {
  return new ot(3002, !1);
}
function hl(t, e, i, r, n) {
  return new ot(3010, !1);
}
function ml() {
  return new ot(3011, !1);
}
function pl() {
  return new ot(3012, !1);
}
function dl() {
  return new ot(3200, !1);
}
function fl() {
  return new ot(3202, !1);
}
function ul() {
  return new ot(3013, !1);
}
function gl(t) {
  return new ot(3014, !1);
}
function vl(t) {
  return new ot(3015, !1);
}
function yl(t) {
  return new ot(3016, !1);
}
function bl(t, e) {
  return new ot(3404, !1);
}
function _l(t) {
  return new ot(3502, !1);
}
function Sl(t) {
  return new ot(3503, !1);
}
function xl() {
  return new ot(3300, !1);
}
function Cl(t) {
  return new ot(3504, !1);
}
function El(t) {
  return new ot(3301, !1);
}
function Pl(t, e) {
  return new ot(3302, !1);
}
function wl(t) {
  return new ot(3303, !1);
}
function Tl(t, e) {
  return new ot(3400, !1);
}
function Ml(t) {
  return new ot(3401, !1);
}
function Al(t) {
  return new ot(3402, !1);
}
function kl(t, e) {
  return new ot(3505, !1);
}
function ce(t) {
  switch (t.length) {
    case 0:
      return new Me();
    case 1:
      return t[0];
    default:
      return new yr(t);
  }
}
function ts(t, e, i = new Map(), r = new Map()) {
  let n = [],
    a = [],
    s = -1,
    o = null;
  if (
    (e.forEach((l) => {
      let c = l.get("offset"),
        p = c == s,
        _ = (p && o) || new Map();
      l.forEach((h, b) => {
        let v = b,
          f = h;
        if (b !== "offset")
          switch (((v = t.normalizePropertyName(v, n)), f)) {
            case xi:
              f = i.get(b);
              break;
            case $t:
              f = r.get(b);
              break;
            default:
              f = t.normalizeStyleValue(b, v, f, n);
              break;
          }
        _.set(v, f);
      }),
        p || a.push(_),
        (o = _),
        (s = c);
    }),
    n.length)
  )
    throw _l(n);
  return a;
}
function Hr(t, e, i, r) {
  switch (e) {
    case "start":
      t.onStart(() => r(i && Sr(i, "start", t)));
      break;
    case "done":
      t.onDone(() => r(i && Sr(i, "done", t)));
      break;
    case "destroy":
      t.onDestroy(() => r(i && Sr(i, "destroy", t)));
      break;
  }
}
function Sr(t, e, i) {
  let r = i.totalTime,
    n = !!i.disabled,
    a = Wr(
      t.element,
      t.triggerName,
      t.fromState,
      t.toState,
      e || t.phaseName,
      r ?? t.totalTime,
      n
    ),
    s = t._data;
  return s != null && (a._data = s), a;
}
function Wr(t, e, i, r, n = "", a = 0, s) {
  return {
    element: t,
    triggerName: e,
    fromState: i,
    toState: r,
    phaseName: n,
    totalTime: a,
    disabled: !!s,
  };
}
function Tt(t, e, i) {
  let r = t.get(e);
  return r || t.set(e, (r = i)), r;
}
function Ga(t) {
  let e = t.indexOf(":"),
    i = t.substring(1, e),
    r = t.slice(e + 1);
  return [i, r];
}
var Il = typeof document > "u" ? null : document.documentElement;
function $r(t) {
  let e = t.parentNode || t.host || null;
  return e === Il ? null : e;
}
function Fl(t) {
  return t.substring(1, 6) == "ebkit";
}
var ve = null,
  ja = !1;
function Dl(t) {
  ve ||
    ((ve = Rl() || {}), (ja = ve.style ? "WebkitAppearance" in ve.style : !1));
  let e = !0;
  return (
    ve.style &&
      !Fl(t) &&
      ((e = t in ve.style),
      !e &&
        ja &&
        (e = "Webkit" + t.charAt(0).toUpperCase() + t.slice(1) in ve.style)),
    e
  );
}
function Rl() {
  return typeof document < "u" ? document.body : null;
}
function es(t, e) {
  for (; e; ) {
    if (e === t) return !0;
    e = $r(e);
  }
  return !1;
}
function is(t, e, i) {
  if (i) return Array.from(t.querySelectorAll(e));
  let r = t.querySelector(e);
  return r ? [r] : [];
}
var qr = (() => {
    class t {
      validateStyleProperty(i) {
        return Dl(i);
      }
      containsElement(i, r) {
        return es(i, r);
      }
      getParentElement(i) {
        return $r(i);
      }
      query(i, r, n) {
        return is(i, r, n);
      }
      computeStyle(i, r, n) {
        return n || "";
      }
      animate(i, r, n, a, s, o = [], l) {
        return new Me(n, a);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || t)();
        };
      }
      static {
        this.ɵprov = Gt({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })(),
  _e = class {
    static {
      this.NOOP = new qr();
    }
  },
  Se = class {};
var Ll = 1e3,
  rs = "{{",
  Vl = "}}",
  ns = "ng-enter",
  Tr = "ng-leave",
  Wi = "ng-trigger",
  Yi = ".ng-trigger",
  Ha = "ng-animating",
  Mr = ".ng-animating";
function te(t) {
  if (typeof t == "number") return t;
  let e = t.match(/^(-?[\.\d]+)(m?s)/);
  return !e || e.length < 2 ? 0 : Ar(parseFloat(e[1]), e[2]);
}
function Ar(t, e) {
  switch (e) {
    case "s":
      return t * Ll;
    default:
      return t;
  }
}
function Qi(t, e, i) {
  return t.hasOwnProperty("duration") ? t : Bl(t, e, i);
}
function Bl(t, e, i) {
  let r =
      /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
    n,
    a = 0,
    s = "";
  if (typeof t == "string") {
    let o = t.match(r);
    if (o === null) return e.push(za(t)), { duration: 0, delay: 0, easing: "" };
    n = Ar(parseFloat(o[1]), o[2]);
    let l = o[3];
    l != null && (a = Ar(parseFloat(l), o[4]));
    let c = o[5];
    c && (s = c);
  } else n = t;
  if (!i) {
    let o = !1,
      l = e.length;
    n < 0 && (e.push(tl()), (o = !0)),
      a < 0 && (e.push(el()), (o = !0)),
      o && e.splice(l, 0, za(t));
  }
  return { duration: n, delay: a, easing: s };
}
function Ol(t) {
  return t.length
    ? t[0] instanceof Map
      ? t
      : t.map((e) => new Map(Object.entries(e)))
    : [];
}
function qt(t, e, i) {
  e.forEach((r, n) => {
    let a = Kr(n);
    i && !i.has(n) && i.set(n, t.style[a]), (t.style[a] = r);
  });
}
function be(t, e) {
  e.forEach((i, r) => {
    let n = Kr(r);
    t.style[n] = "";
  });
}
function He(t) {
  return Array.isArray(t) ? (t.length == 1 ? t[0] : _a(t)) : t;
}
function Nl(t, e, i) {
  let r = e.params || {},
    n = as(t);
  n.length &&
    n.forEach((a) => {
      r.hasOwnProperty(a) || i.push(il(a));
    });
}
var kr = new RegExp(`${rs}\\s*(.+?)\\s*${Vl}`, "g");
function as(t) {
  let e = [];
  if (typeof t == "string") {
    let i;
    for (; (i = kr.exec(t)); ) e.push(i[1]);
    kr.lastIndex = 0;
  }
  return e;
}
function $e(t, e, i) {
  let r = `${t}`,
    n = r.replace(kr, (a, s) => {
      let o = e[s];
      return o == null && (i.push(rl(s)), (o = "")), o.toString();
    });
  return n == r ? t : n;
}
var zl = /-+([a-z0-9])/g;
function Kr(t) {
  return t.replace(zl, (...e) => e[1].toUpperCase());
}
function Gl(t, e) {
  return t === 0 || e === 0;
}
function jl(t, e, i) {
  if (i.size && e.length) {
    let r = e[0],
      n = [];
    if (
      (i.forEach((a, s) => {
        r.has(s) || n.push(s), r.set(s, a);
      }),
      n.length)
    )
      for (let a = 1; a < e.length; a++) {
        let s = e[a];
        n.forEach((o) => s.set(o, Ur(t, o)));
      }
  }
  return e;
}
function wt(t, e, i) {
  switch (e.type) {
    case at.Trigger:
      return t.visitTrigger(e, i);
    case at.State:
      return t.visitState(e, i);
    case at.Transition:
      return t.visitTransition(e, i);
    case at.Sequence:
      return t.visitSequence(e, i);
    case at.Group:
      return t.visitGroup(e, i);
    case at.Animate:
      return t.visitAnimate(e, i);
    case at.Keyframes:
      return t.visitKeyframes(e, i);
    case at.Style:
      return t.visitStyle(e, i);
    case at.Reference:
      return t.visitReference(e, i);
    case at.AnimateChild:
      return t.visitAnimateChild(e, i);
    case at.AnimateRef:
      return t.visitAnimateRef(e, i);
    case at.Query:
      return t.visitQuery(e, i);
    case at.Stagger:
      return t.visitStagger(e, i);
    default:
      throw nl(e.type);
  }
}
function Ur(t, e) {
  return window.getComputedStyle(t)[e];
}
var Hl = new Set([
    "width",
    "height",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "left",
    "top",
    "bottom",
    "right",
    "fontSize",
    "outlineWidth",
    "outlineOffset",
    "paddingTop",
    "paddingLeft",
    "paddingBottom",
    "paddingRight",
    "marginTop",
    "marginLeft",
    "marginBottom",
    "marginRight",
    "borderRadius",
    "borderWidth",
    "borderTopWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "textIndent",
    "perspective",
  ]),
  Xi = class extends Se {
    normalizePropertyName(e, i) {
      return Kr(e);
    }
    normalizeStyleValue(e, i, r, n) {
      let a = "",
        s = r.toString().trim();
      if (Hl.has(i) && r !== 0 && r !== "0")
        if (typeof r == "number") a = "px";
        else {
          let o = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
          o && o[1].length == 0 && n.push(al(e, r));
        }
      return s + a;
    }
  };
var Zi = "*";
function Wl(t, e) {
  let i = [];
  return (
    typeof t == "string"
      ? t.split(/\s*,\s*/).forEach((r) => $l(r, i, e))
      : i.push(t),
    i
  );
}
function $l(t, e, i) {
  if (t[0] == ":") {
    let l = ql(t, i);
    if (typeof l == "function") {
      e.push(l);
      return;
    }
    t = l;
  }
  let r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (r == null || r.length < 4) return i.push(vl(t)), e;
  let n = r[1],
    a = r[2],
    s = r[3];
  e.push(Wa(n, s));
  let o = n == Zi && s == Zi;
  a[0] == "<" && !o && e.push(Wa(s, n));
}
function ql(t, e) {
  switch (t) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (i, r) => parseFloat(r) > parseFloat(i);
    case ":decrement":
      return (i, r) => parseFloat(r) < parseFloat(i);
    default:
      return e.push(yl(t)), "* => *";
  }
}
var $i = new Set(["true", "1"]),
  qi = new Set(["false", "0"]);
function Wa(t, e) {
  let i = $i.has(t) || qi.has(t),
    r = $i.has(e) || qi.has(e);
  return (n, a) => {
    let s = t == Zi || t == n,
      o = e == Zi || e == a;
    return (
      !s && i && typeof n == "boolean" && (s = n ? $i.has(t) : qi.has(t)),
      !o && r && typeof a == "boolean" && (o = a ? $i.has(e) : qi.has(e)),
      s && o
    );
  };
}
var ss = ":self",
  Kl = new RegExp(`s*${ss}s*,?`, "g");
function os(t, e, i, r) {
  return new Ir(t).build(e, i, r);
}
var $a = "",
  Ir = class {
    constructor(e) {
      this._driver = e;
    }
    build(e, i, r) {
      let n = new Fr(i);
      return this._resetContextStyleTimingState(n), wt(this, He(e), n);
    }
    _resetContextStyleTimingState(e) {
      (e.currentQuerySelector = $a),
        (e.collectedStyles = new Map()),
        e.collectedStyles.set($a, new Map()),
        (e.currentTime = 0);
    }
    visitTrigger(e, i) {
      let r = (i.queryCount = 0),
        n = (i.depCount = 0),
        a = [],
        s = [];
      return (
        e.name.charAt(0) == "@" && i.errors.push(sl()),
        e.definitions.forEach((o) => {
          if ((this._resetContextStyleTimingState(i), o.type == at.State)) {
            let l = o,
              c = l.name;
            c
              .toString()
              .split(/\s*,\s*/)
              .forEach((p) => {
                (l.name = p), a.push(this.visitState(l, i));
              }),
              (l.name = c);
          } else if (o.type == at.Transition) {
            let l = this.visitTransition(o, i);
            (r += l.queryCount), (n += l.depCount), s.push(l);
          } else i.errors.push(ol());
        }),
        {
          type: at.Trigger,
          name: e.name,
          states: a,
          transitions: s,
          queryCount: r,
          depCount: n,
          options: null,
        }
      );
    }
    visitState(e, i) {
      let r = this.visitStyle(e.styles, i),
        n = (e.options && e.options.params) || null;
      if (r.containsDynamicStyles) {
        let a = new Set(),
          s = n || {};
        r.styles.forEach((o) => {
          o instanceof Map &&
            o.forEach((l) => {
              as(l).forEach((c) => {
                s.hasOwnProperty(c) || a.add(c);
              });
            });
        }),
          a.size && i.errors.push(ll(e.name, [...a.values()]));
      }
      return {
        type: at.State,
        name: e.name,
        style: r,
        options: n ? { params: n } : null,
      };
    }
    visitTransition(e, i) {
      (i.queryCount = 0), (i.depCount = 0);
      let r = wt(this, He(e.animation), i),
        n = Wl(e.expr, i.errors);
      return {
        type: at.Transition,
        matchers: n,
        animation: r,
        queryCount: i.queryCount,
        depCount: i.depCount,
        options: ye(e.options),
      };
    }
    visitSequence(e, i) {
      return {
        type: at.Sequence,
        steps: e.steps.map((r) => wt(this, r, i)),
        options: ye(e.options),
      };
    }
    visitGroup(e, i) {
      let r = i.currentTime,
        n = 0,
        a = e.steps.map((s) => {
          i.currentTime = r;
          let o = wt(this, s, i);
          return (n = Math.max(n, i.currentTime)), o;
        });
      return (
        (i.currentTime = n),
        { type: at.Group, steps: a, options: ye(e.options) }
      );
    }
    visitAnimate(e, i) {
      let r = Xl(e.timings, i.errors);
      i.currentAnimateTimings = r;
      let n,
        a = e.styles ? e.styles : Jt({});
      if (a.type == at.Keyframes) n = this.visitKeyframes(a, i);
      else {
        let s = e.styles,
          o = !1;
        if (!s) {
          o = !0;
          let c = {};
          r.easing && (c.easing = r.easing), (s = Jt(c));
        }
        i.currentTime += r.duration + r.delay;
        let l = this.visitStyle(s, i);
        (l.isEmptyStep = o), (n = l);
      }
      return (
        (i.currentAnimateTimings = null),
        { type: at.Animate, timings: r, style: n, options: null }
      );
    }
    visitStyle(e, i) {
      let r = this._makeStyleAst(e, i);
      return this._validateStyleAst(r, i), r;
    }
    _makeStyleAst(e, i) {
      let r = [],
        n = Array.isArray(e.styles) ? e.styles : [e.styles];
      for (let o of n)
        typeof o == "string"
          ? o === $t
            ? r.push(o)
            : i.errors.push(cl(o))
          : r.push(new Map(Object.entries(o)));
      let a = !1,
        s = null;
      return (
        r.forEach((o) => {
          if (
            o instanceof Map &&
            (o.has("easing") && ((s = o.get("easing")), o.delete("easing")), !a)
          ) {
            for (let l of o.values())
              if (l.toString().indexOf(rs) >= 0) {
                a = !0;
                break;
              }
          }
        }),
        {
          type: at.Style,
          styles: r,
          easing: s,
          offset: e.offset,
          containsDynamicStyles: a,
          options: null,
        }
      );
    }
    _validateStyleAst(e, i) {
      let r = i.currentAnimateTimings,
        n = i.currentTime,
        a = i.currentTime;
      r && a > 0 && (a -= r.duration + r.delay),
        e.styles.forEach((s) => {
          typeof s != "string" &&
            s.forEach((o, l) => {
              let c = i.collectedStyles.get(i.currentQuerySelector),
                p = c.get(l),
                _ = !0;
              p &&
                (a != n &&
                  a >= p.startTime &&
                  n <= p.endTime &&
                  (i.errors.push(hl(l, p.startTime, p.endTime, a, n)),
                  (_ = !1)),
                (a = p.startTime)),
                _ && c.set(l, { startTime: a, endTime: n }),
                i.options && Nl(o, i.options, i.errors);
            });
        });
    }
    visitKeyframes(e, i) {
      let r = { type: at.Keyframes, styles: [], options: null };
      if (!i.currentAnimateTimings) return i.errors.push(ml()), r;
      let n = 1,
        a = 0,
        s = [],
        o = !1,
        l = !1,
        c = 0,
        p = e.steps.map((d) => {
          let u = this._makeStyleAst(d, i),
            m = u.offset != null ? u.offset : Ql(u.styles),
            y = 0;
          return (
            m != null && (a++, (y = u.offset = m)),
            (l = l || y < 0 || y > 1),
            (o = o || y < c),
            (c = y),
            s.push(y),
            u
          );
        });
      l && i.errors.push(pl()), o && i.errors.push(dl());
      let _ = e.steps.length,
        h = 0;
      a > 0 && a < _ ? i.errors.push(fl()) : a == 0 && (h = n / (_ - 1));
      let b = _ - 1,
        v = i.currentTime,
        f = i.currentAnimateTimings,
        E = f.duration;
      return (
        p.forEach((d, u) => {
          let m = h > 0 ? (u == b ? 1 : h * u) : s[u],
            y = m * E;
          (i.currentTime = v + f.delay + y),
            (f.duration = y),
            this._validateStyleAst(d, i),
            (d.offset = m),
            r.styles.push(d);
        }),
        r
      );
    }
    visitReference(e, i) {
      return {
        type: at.Reference,
        animation: wt(this, He(e.animation), i),
        options: ye(e.options),
      };
    }
    visitAnimateChild(e, i) {
      return i.depCount++, { type: at.AnimateChild, options: ye(e.options) };
    }
    visitAnimateRef(e, i) {
      return {
        type: at.AnimateRef,
        animation: this.visitReference(e.animation, i),
        options: ye(e.options),
      };
    }
    visitQuery(e, i) {
      let r = i.currentQuerySelector,
        n = e.options || {};
      i.queryCount++, (i.currentQuery = e);
      let [a, s] = Ul(e.selector);
      (i.currentQuerySelector = r.length ? r + " " + a : a),
        Tt(i.collectedStyles, i.currentQuerySelector, new Map());
      let o = wt(this, He(e.animation), i);
      return (
        (i.currentQuery = null),
        (i.currentQuerySelector = r),
        {
          type: at.Query,
          selector: a,
          limit: n.limit || 0,
          optional: !!n.optional,
          includeSelf: s,
          animation: o,
          originalSelector: e.selector,
          options: ye(e.options),
        }
      );
    }
    visitStagger(e, i) {
      i.currentQuery || i.errors.push(ul());
      let r =
        e.timings === "full"
          ? { duration: 0, delay: 0, easing: "full" }
          : Qi(e.timings, i.errors, !0);
      return {
        type: at.Stagger,
        animation: wt(this, He(e.animation), i),
        timings: r,
        options: null,
      };
    }
  };
function Ul(t) {
  let e = !!t.split(/\s*,\s*/).find((i) => i == ss);
  return (
    e && (t = t.replace(Kl, "")),
    (t = t
      .replace(/@\*/g, Yi)
      .replace(/@\w+/g, (i) => Yi + "-" + i.slice(1))
      .replace(/:animating/g, Mr)),
    [t, e]
  );
}
function Yl(t) {
  return t ? Rt({}, t) : null;
}
var Fr = class {
  constructor(e) {
    (this.errors = e),
      (this.queryCount = 0),
      (this.depCount = 0),
      (this.currentTransition = null),
      (this.currentQuery = null),
      (this.currentQuerySelector = null),
      (this.currentAnimateTimings = null),
      (this.currentTime = 0),
      (this.collectedStyles = new Map()),
      (this.options = null),
      (this.unsupportedCSSPropertiesFound = new Set());
  }
};
function Ql(t) {
  if (typeof t == "string") return null;
  let e = null;
  if (Array.isArray(t))
    t.forEach((i) => {
      if (i instanceof Map && i.has("offset")) {
        let r = i;
        (e = parseFloat(r.get("offset"))), r.delete("offset");
      }
    });
  else if (t instanceof Map && t.has("offset")) {
    let i = t;
    (e = parseFloat(i.get("offset"))), i.delete("offset");
  }
  return e;
}
function Xl(t, e) {
  if (t.hasOwnProperty("duration")) return t;
  if (typeof t == "number") {
    let a = Qi(t, e).duration;
    return xr(a, 0, "");
  }
  let i = t;
  if (i.split(/\s+/).some((a) => a.charAt(0) == "{" && a.charAt(1) == "{")) {
    let a = xr(0, 0, "");
    return (a.dynamic = !0), (a.strValue = i), a;
  }
  let n = Qi(i, e);
  return xr(n.duration, n.delay, n.easing);
}
function ye(t) {
  return (
    t ? ((t = Rt({}, t)), t.params && (t.params = Yl(t.params))) : (t = {}), t
  );
}
function xr(t, e, i) {
  return { duration: t, delay: e, easing: i };
}
function Yr(t, e, i, r, n, a, s = null, o = !1) {
  return {
    type: 1,
    element: t,
    keyframes: e,
    preStyleProps: i,
    postStyleProps: r,
    duration: n,
    delay: a,
    totalTime: n + a,
    easing: s,
    subTimeline: o,
  };
}
var qe = class {
    constructor() {
      this._map = new Map();
    }
    get(e) {
      return this._map.get(e) || [];
    }
    append(e, i) {
      let r = this._map.get(e);
      r || this._map.set(e, (r = [])), r.push(...i);
    }
    has(e) {
      return this._map.has(e);
    }
    clear() {
      this._map.clear();
    }
  },
  Zl = 1,
  Jl = ":enter",
  tc = new RegExp(Jl, "g"),
  ec = ":leave",
  ic = new RegExp(ec, "g");
function ls(t, e, i, r, n, a = new Map(), s = new Map(), o, l, c = []) {
  return new Dr().buildKeyframes(t, e, i, r, n, a, s, o, l, c);
}
var Dr = class {
    buildKeyframes(e, i, r, n, a, s, o, l, c, p = []) {
      c = c || new qe();
      let _ = new Rr(e, i, c, n, a, p, []);
      _.options = l;
      let h = l.delay ? te(l.delay) : 0;
      _.currentTimeline.delayNextStep(h),
        _.currentTimeline.setStyles([s], null, _.errors, l),
        wt(this, r, _);
      let b = _.timelines.filter((v) => v.containsAnimation());
      if (b.length && o.size) {
        let v;
        for (let f = b.length - 1; f >= 0; f--) {
          let E = b[f];
          if (E.element === i) {
            v = E;
            break;
          }
        }
        v &&
          !v.allowOnlyTimelineStyles() &&
          v.setStyles([o], null, _.errors, l);
      }
      return b.length
        ? b.map((v) => v.buildKeyframes())
        : [Yr(i, [], [], [], 0, h, "", !1)];
    }
    visitTrigger(e, i) {}
    visitState(e, i) {}
    visitTransition(e, i) {}
    visitAnimateChild(e, i) {
      let r = i.subInstructions.get(i.element);
      if (r) {
        let n = i.createSubContext(e.options),
          a = i.currentTimeline.currentTime,
          s = this._visitSubInstructions(r, n, n.options);
        a != s && i.transformIntoNewTimeline(s);
      }
      i.previousNode = e;
    }
    visitAnimateRef(e, i) {
      let r = i.createSubContext(e.options);
      r.transformIntoNewTimeline(),
        this._applyAnimationRefDelays([e.options, e.animation.options], i, r),
        this.visitReference(e.animation, r),
        i.transformIntoNewTimeline(r.currentTimeline.currentTime),
        (i.previousNode = e);
    }
    _applyAnimationRefDelays(e, i, r) {
      for (let n of e) {
        let a = n?.delay;
        if (a) {
          let s =
            typeof a == "number" ? a : te($e(a, n?.params ?? {}, i.errors));
          r.delayNextStep(s);
        }
      }
    }
    _visitSubInstructions(e, i, r) {
      let a = i.currentTimeline.currentTime,
        s = r.duration != null ? te(r.duration) : null,
        o = r.delay != null ? te(r.delay) : null;
      return (
        s !== 0 &&
          e.forEach((l) => {
            let c = i.appendInstructionToTimeline(l, s, o);
            a = Math.max(a, c.duration + c.delay);
          }),
        a
      );
    }
    visitReference(e, i) {
      i.updateOptions(e.options, !0),
        wt(this, e.animation, i),
        (i.previousNode = e);
    }
    visitSequence(e, i) {
      let r = i.subContextCount,
        n = i,
        a = e.options;
      if (
        a &&
        (a.params || a.delay) &&
        ((n = i.createSubContext(a)),
        n.transformIntoNewTimeline(),
        a.delay != null)
      ) {
        n.previousNode.type == at.Style &&
          (n.currentTimeline.snapshotCurrentStyles(), (n.previousNode = Ji));
        let s = te(a.delay);
        n.delayNextStep(s);
      }
      e.steps.length &&
        (e.steps.forEach((s) => wt(this, s, n)),
        n.currentTimeline.applyStylesToKeyframe(),
        n.subContextCount > r && n.transformIntoNewTimeline()),
        (i.previousNode = e);
    }
    visitGroup(e, i) {
      let r = [],
        n = i.currentTimeline.currentTime,
        a = e.options && e.options.delay ? te(e.options.delay) : 0;
      e.steps.forEach((s) => {
        let o = i.createSubContext(e.options);
        a && o.delayNextStep(a),
          wt(this, s, o),
          (n = Math.max(n, o.currentTimeline.currentTime)),
          r.push(o.currentTimeline);
      }),
        r.forEach((s) => i.currentTimeline.mergeTimelineCollectedStyles(s)),
        i.transformIntoNewTimeline(n),
        (i.previousNode = e);
    }
    _visitTiming(e, i) {
      if (e.dynamic) {
        let r = e.strValue,
          n = i.params ? $e(r, i.params, i.errors) : r;
        return Qi(n, i.errors);
      } else return { duration: e.duration, delay: e.delay, easing: e.easing };
    }
    visitAnimate(e, i) {
      let r = (i.currentAnimateTimings = this._visitTiming(e.timings, i)),
        n = i.currentTimeline;
      r.delay && (i.incrementTime(r.delay), n.snapshotCurrentStyles());
      let a = e.style;
      a.type == at.Keyframes
        ? this.visitKeyframes(a, i)
        : (i.incrementTime(r.duration),
          this.visitStyle(a, i),
          n.applyStylesToKeyframe()),
        (i.currentAnimateTimings = null),
        (i.previousNode = e);
    }
    visitStyle(e, i) {
      let r = i.currentTimeline,
        n = i.currentAnimateTimings;
      !n && r.hasCurrentStyleProperties() && r.forwardFrame();
      let a = (n && n.easing) || e.easing;
      e.isEmptyStep
        ? r.applyEmptyStep(a)
        : r.setStyles(e.styles, a, i.errors, i.options),
        (i.previousNode = e);
    }
    visitKeyframes(e, i) {
      let r = i.currentAnimateTimings,
        n = i.currentTimeline.duration,
        a = r.duration,
        o = i.createSubContext().currentTimeline;
      (o.easing = r.easing),
        e.styles.forEach((l) => {
          let c = l.offset || 0;
          o.forwardTime(c * a),
            o.setStyles(l.styles, l.easing, i.errors, i.options),
            o.applyStylesToKeyframe();
        }),
        i.currentTimeline.mergeTimelineCollectedStyles(o),
        i.transformIntoNewTimeline(n + a),
        (i.previousNode = e);
    }
    visitQuery(e, i) {
      let r = i.currentTimeline.currentTime,
        n = e.options || {},
        a = n.delay ? te(n.delay) : 0;
      a &&
        (i.previousNode.type === at.Style ||
          (r == 0 && i.currentTimeline.hasCurrentStyleProperties())) &&
        (i.currentTimeline.snapshotCurrentStyles(), (i.previousNode = Ji));
      let s = r,
        o = i.invokeQuery(
          e.selector,
          e.originalSelector,
          e.limit,
          e.includeSelf,
          !!n.optional,
          i.errors
        );
      i.currentQueryTotal = o.length;
      let l = null;
      o.forEach((c, p) => {
        i.currentQueryIndex = p;
        let _ = i.createSubContext(e.options, c);
        a && _.delayNextStep(a),
          c === i.element && (l = _.currentTimeline),
          wt(this, e.animation, _),
          _.currentTimeline.applyStylesToKeyframe();
        let h = _.currentTimeline.currentTime;
        s = Math.max(s, h);
      }),
        (i.currentQueryIndex = 0),
        (i.currentQueryTotal = 0),
        i.transformIntoNewTimeline(s),
        l &&
          (i.currentTimeline.mergeTimelineCollectedStyles(l),
          i.currentTimeline.snapshotCurrentStyles()),
        (i.previousNode = e);
    }
    visitStagger(e, i) {
      let r = i.parentContext,
        n = i.currentTimeline,
        a = e.timings,
        s = Math.abs(a.duration),
        o = s * (i.currentQueryTotal - 1),
        l = s * i.currentQueryIndex;
      switch (a.duration < 0 ? "reverse" : a.easing) {
        case "reverse":
          l = o - l;
          break;
        case "full":
          l = r.currentStaggerTime;
          break;
      }
      let p = i.currentTimeline;
      l && p.delayNextStep(l);
      let _ = p.currentTime;
      wt(this, e.animation, i),
        (i.previousNode = e),
        (r.currentStaggerTime =
          n.currentTime - _ + (n.startTime - r.currentTimeline.startTime));
    }
  },
  Ji = {},
  Rr = class t {
    constructor(e, i, r, n, a, s, o, l) {
      (this._driver = e),
        (this.element = i),
        (this.subInstructions = r),
        (this._enterClassName = n),
        (this._leaveClassName = a),
        (this.errors = s),
        (this.timelines = o),
        (this.parentContext = null),
        (this.currentAnimateTimings = null),
        (this.previousNode = Ji),
        (this.subContextCount = 0),
        (this.options = {}),
        (this.currentQueryIndex = 0),
        (this.currentQueryTotal = 0),
        (this.currentStaggerTime = 0),
        (this.currentTimeline = l || new tr(this._driver, i, 0)),
        o.push(this.currentTimeline);
    }
    get params() {
      return this.options.params;
    }
    updateOptions(e, i) {
      if (!e) return;
      let r = e,
        n = this.options;
      r.duration != null && (n.duration = te(r.duration)),
        r.delay != null && (n.delay = te(r.delay));
      let a = r.params;
      if (a) {
        let s = n.params;
        s || (s = this.options.params = {}),
          Object.keys(a).forEach((o) => {
            (!i || !s.hasOwnProperty(o)) && (s[o] = $e(a[o], s, this.errors));
          });
      }
    }
    _copyOptions() {
      let e = {};
      if (this.options) {
        let i = this.options.params;
        if (i) {
          let r = (e.params = {});
          Object.keys(i).forEach((n) => {
            r[n] = i[n];
          });
        }
      }
      return e;
    }
    createSubContext(e = null, i, r) {
      let n = i || this.element,
        a = new t(
          this._driver,
          n,
          this.subInstructions,
          this._enterClassName,
          this._leaveClassName,
          this.errors,
          this.timelines,
          this.currentTimeline.fork(n, r || 0)
        );
      return (
        (a.previousNode = this.previousNode),
        (a.currentAnimateTimings = this.currentAnimateTimings),
        (a.options = this._copyOptions()),
        a.updateOptions(e),
        (a.currentQueryIndex = this.currentQueryIndex),
        (a.currentQueryTotal = this.currentQueryTotal),
        (a.parentContext = this),
        this.subContextCount++,
        a
      );
    }
    transformIntoNewTimeline(e) {
      return (
        (this.previousNode = Ji),
        (this.currentTimeline = this.currentTimeline.fork(this.element, e)),
        this.timelines.push(this.currentTimeline),
        this.currentTimeline
      );
    }
    appendInstructionToTimeline(e, i, r) {
      let n = {
          duration: i ?? e.duration,
          delay: this.currentTimeline.currentTime + (r ?? 0) + e.delay,
          easing: "",
        },
        a = new Lr(
          this._driver,
          e.element,
          e.keyframes,
          e.preStyleProps,
          e.postStyleProps,
          n,
          e.stretchStartingKeyframe
        );
      return this.timelines.push(a), n;
    }
    incrementTime(e) {
      this.currentTimeline.forwardTime(this.currentTimeline.duration + e);
    }
    delayNextStep(e) {
      e > 0 && this.currentTimeline.delayNextStep(e);
    }
    invokeQuery(e, i, r, n, a, s) {
      let o = [];
      if ((n && o.push(this.element), e.length > 0)) {
        (e = e.replace(tc, "." + this._enterClassName)),
          (e = e.replace(ic, "." + this._leaveClassName));
        let l = r != 1,
          c = this._driver.query(this.element, e, l);
        r !== 0 &&
          (c = r < 0 ? c.slice(c.length + r, c.length) : c.slice(0, r)),
          o.push(...c);
      }
      return !a && o.length == 0 && s.push(gl(i)), o;
    }
  },
  tr = class t {
    constructor(e, i, r, n) {
      (this._driver = e),
        (this.element = i),
        (this.startTime = r),
        (this._elementTimelineStylesLookup = n),
        (this.duration = 0),
        (this.easing = null),
        (this._previousKeyframe = new Map()),
        (this._currentKeyframe = new Map()),
        (this._keyframes = new Map()),
        (this._styleSummary = new Map()),
        (this._localTimelineStyles = new Map()),
        (this._pendingStyles = new Map()),
        (this._backFill = new Map()),
        (this._currentEmptyStepKeyframe = null),
        this._elementTimelineStylesLookup ||
          (this._elementTimelineStylesLookup = new Map()),
        (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(i)),
        this._globalTimelineStyles ||
          ((this._globalTimelineStyles = this._localTimelineStyles),
          this._elementTimelineStylesLookup.set(i, this._localTimelineStyles)),
        this._loadKeyframe();
    }
    containsAnimation() {
      switch (this._keyframes.size) {
        case 0:
          return !1;
        case 1:
          return this.hasCurrentStyleProperties();
        default:
          return !0;
      }
    }
    hasCurrentStyleProperties() {
      return this._currentKeyframe.size > 0;
    }
    get currentTime() {
      return this.startTime + this.duration;
    }
    delayNextStep(e) {
      let i = this._keyframes.size === 1 && this._pendingStyles.size;
      this.duration || i
        ? (this.forwardTime(this.currentTime + e),
          i && this.snapshotCurrentStyles())
        : (this.startTime += e);
    }
    fork(e, i) {
      return (
        this.applyStylesToKeyframe(),
        new t(
          this._driver,
          e,
          i || this.currentTime,
          this._elementTimelineStylesLookup
        )
      );
    }
    _loadKeyframe() {
      this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
        (this._currentKeyframe = this._keyframes.get(this.duration)),
        this._currentKeyframe ||
          ((this._currentKeyframe = new Map()),
          this._keyframes.set(this.duration, this._currentKeyframe));
    }
    forwardFrame() {
      (this.duration += Zl), this._loadKeyframe();
    }
    forwardTime(e) {
      this.applyStylesToKeyframe(), (this.duration = e), this._loadKeyframe();
    }
    _updateStyle(e, i) {
      this._localTimelineStyles.set(e, i),
        this._globalTimelineStyles.set(e, i),
        this._styleSummary.set(e, { time: this.currentTime, value: i });
    }
    allowOnlyTimelineStyles() {
      return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    applyEmptyStep(e) {
      e && this._previousKeyframe.set("easing", e);
      for (let [i, r] of this._globalTimelineStyles)
        this._backFill.set(i, r || $t), this._currentKeyframe.set(i, $t);
      this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    setStyles(e, i, r, n) {
      i && this._previousKeyframe.set("easing", i);
      let a = (n && n.params) || {},
        s = rc(e, this._globalTimelineStyles);
      for (let [o, l] of s) {
        let c = $e(l, a, r);
        this._pendingStyles.set(o, c),
          this._localTimelineStyles.has(o) ||
            this._backFill.set(o, this._globalTimelineStyles.get(o) ?? $t),
          this._updateStyle(o, c);
      }
    }
    applyStylesToKeyframe() {
      this._pendingStyles.size != 0 &&
        (this._pendingStyles.forEach((e, i) => {
          this._currentKeyframe.set(i, e);
        }),
        this._pendingStyles.clear(),
        this._localTimelineStyles.forEach((e, i) => {
          this._currentKeyframe.has(i) || this._currentKeyframe.set(i, e);
        }));
    }
    snapshotCurrentStyles() {
      for (let [e, i] of this._localTimelineStyles)
        this._pendingStyles.set(e, i), this._updateStyle(e, i);
    }
    getFinalKeyframe() {
      return this._keyframes.get(this.duration);
    }
    get properties() {
      let e = [];
      for (let i in this._currentKeyframe) e.push(i);
      return e;
    }
    mergeTimelineCollectedStyles(e) {
      e._styleSummary.forEach((i, r) => {
        let n = this._styleSummary.get(r);
        (!n || i.time > n.time) && this._updateStyle(r, i.value);
      });
    }
    buildKeyframes() {
      this.applyStylesToKeyframe();
      let e = new Set(),
        i = new Set(),
        r = this._keyframes.size === 1 && this.duration === 0,
        n = [];
      this._keyframes.forEach((o, l) => {
        let c = new Map([...this._backFill, ...o]);
        c.forEach((p, _) => {
          p === xi ? e.add(_) : p === $t && i.add(_);
        }),
          r || c.set("offset", l / this.duration),
          n.push(c);
      });
      let a = [...e.values()],
        s = [...i.values()];
      if (r) {
        let o = n[0],
          l = new Map(o);
        o.set("offset", 0), l.set("offset", 1), (n = [o, l]);
      }
      return Yr(
        this.element,
        n,
        a,
        s,
        this.duration,
        this.startTime,
        this.easing,
        !1
      );
    }
  },
  Lr = class extends tr {
    constructor(e, i, r, n, a, s, o = !1) {
      super(e, i, s.delay),
        (this.keyframes = r),
        (this.preStyleProps = n),
        (this.postStyleProps = a),
        (this._stretchStartingKeyframe = o),
        (this.timings = {
          duration: s.duration,
          delay: s.delay,
          easing: s.easing,
        });
    }
    containsAnimation() {
      return this.keyframes.length > 1;
    }
    buildKeyframes() {
      let e = this.keyframes,
        { delay: i, duration: r, easing: n } = this.timings;
      if (this._stretchStartingKeyframe && i) {
        let a = [],
          s = r + i,
          o = i / s,
          l = new Map(e[0]);
        l.set("offset", 0), a.push(l);
        let c = new Map(e[0]);
        c.set("offset", qa(o)), a.push(c);
        let p = e.length - 1;
        for (let _ = 1; _ <= p; _++) {
          let h = new Map(e[_]),
            b = h.get("offset"),
            v = i + b * r;
          h.set("offset", qa(v / s)), a.push(h);
        }
        (r = s), (i = 0), (n = ""), (e = a);
      }
      return Yr(
        this.element,
        e,
        this.preStyleProps,
        this.postStyleProps,
        r,
        i,
        n,
        !0
      );
    }
  };
function qa(t, e = 3) {
  let i = Math.pow(10, e - 1);
  return Math.round(t * i) / i;
}
function rc(t, e) {
  let i = new Map(),
    r;
  return (
    t.forEach((n) => {
      if (n === "*") {
        r ??= e.keys();
        for (let a of r) i.set(a, $t);
      } else for (let [a, s] of n) i.set(a, s);
    }),
    i
  );
}
function Ka(t, e, i, r, n, a, s, o, l, c, p, _, h) {
  return {
    type: 0,
    element: t,
    triggerName: e,
    isRemovalTransition: n,
    fromState: i,
    fromStyles: a,
    toState: r,
    toStyles: s,
    timelines: o,
    queriedElements: l,
    preStyleProps: c,
    postStyleProps: p,
    totalTime: _,
    errors: h,
  };
}
var Cr = {},
  er = class {
    constructor(e, i, r) {
      (this._triggerName = e), (this.ast = i), (this._stateStyles = r);
    }
    match(e, i, r, n) {
      return nc(this.ast.matchers, e, i, r, n);
    }
    buildStyles(e, i, r) {
      let n = this._stateStyles.get("*");
      return (
        e !== void 0 && (n = this._stateStyles.get(e?.toString()) || n),
        n ? n.buildStyles(i, r) : new Map()
      );
    }
    build(e, i, r, n, a, s, o, l, c, p) {
      let _ = [],
        h = (this.ast.options && this.ast.options.params) || Cr,
        b = (o && o.params) || Cr,
        v = this.buildStyles(r, b, _),
        f = (l && l.params) || Cr,
        E = this.buildStyles(n, f, _),
        d = new Set(),
        u = new Map(),
        m = new Map(),
        y = n === "void",
        C = { params: cs(f, h), delay: this.ast.options?.delay },
        P = p ? [] : ls(e, i, this.ast.animation, a, s, v, E, C, c, _),
        T = 0;
      return (
        P.forEach((M) => {
          T = Math.max(M.duration + M.delay, T);
        }),
        _.length
          ? Ka(i, this._triggerName, r, n, y, v, E, [], [], u, m, T, _)
          : (P.forEach((M) => {
              let I = M.element,
                z = Tt(u, I, new Set());
              M.preStyleProps.forEach((D) => z.add(D));
              let O = Tt(m, I, new Set());
              M.postStyleProps.forEach((D) => O.add(D)), I !== i && d.add(I);
            }),
            Ka(
              i,
              this._triggerName,
              r,
              n,
              y,
              v,
              E,
              P,
              [...d.values()],
              u,
              m,
              T
            ))
      );
    }
  };
function nc(t, e, i, r, n) {
  return t.some((a) => a(e, i, r, n));
}
function cs(t, e) {
  let i = Rt({}, e);
  return (
    Object.entries(t).forEach(([r, n]) => {
      n != null && (i[r] = n);
    }),
    i
  );
}
var Vr = class {
  constructor(e, i, r) {
    (this.styles = e), (this.defaultParams = i), (this.normalizer = r);
  }
  buildStyles(e, i) {
    let r = new Map(),
      n = cs(e, this.defaultParams);
    return (
      this.styles.styles.forEach((a) => {
        typeof a != "string" &&
          a.forEach((s, o) => {
            s && (s = $e(s, n, i));
            let l = this.normalizer.normalizePropertyName(o, i);
            (s = this.normalizer.normalizeStyleValue(o, l, s, i)), r.set(o, s);
          });
      }),
      r
    );
  }
};
function ac(t, e, i) {
  return new Br(t, e, i);
}
var Br = class {
  constructor(e, i, r) {
    (this.name = e),
      (this.ast = i),
      (this._normalizer = r),
      (this.transitionFactories = []),
      (this.states = new Map()),
      i.states.forEach((n) => {
        let a = (n.options && n.options.params) || {};
        this.states.set(n.name, new Vr(n.style, a, r));
      }),
      Ua(this.states, "true", "1"),
      Ua(this.states, "false", "0"),
      i.transitions.forEach((n) => {
        this.transitionFactories.push(new er(e, n, this.states));
      }),
      (this.fallbackTransition = sc(e, this.states, this._normalizer));
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(e, i, r, n) {
    return this.transitionFactories.find((s) => s.match(e, i, r, n)) || null;
  }
  matchStyles(e, i, r) {
    return this.fallbackTransition.buildStyles(e, i, r);
  }
};
function sc(t, e, i) {
  let r = [(s, o) => !0],
    n = { type: at.Sequence, steps: [], options: null },
    a = {
      type: at.Transition,
      animation: n,
      matchers: r,
      options: null,
      queryCount: 0,
      depCount: 0,
    };
  return new er(t, a, e);
}
function Ua(t, e, i) {
  t.has(e) ? t.has(i) || t.set(i, t.get(e)) : t.has(i) && t.set(e, t.get(i));
}
var oc = new qe(),
  Or = class {
    constructor(e, i, r) {
      (this.bodyNode = e),
        (this._driver = i),
        (this._normalizer = r),
        (this._animations = new Map()),
        (this._playersById = new Map()),
        (this.players = []);
    }
    register(e, i) {
      let r = [],
        n = [],
        a = os(this._driver, i, r, n);
      if (r.length) throw Sl(r);
      n.length && void 0, this._animations.set(e, a);
    }
    _buildPlayer(e, i, r) {
      let n = e.element,
        a = ts(this._normalizer, e.keyframes, i, r);
      return this._driver.animate(n, a, e.duration, e.delay, e.easing, [], !0);
    }
    create(e, i, r = {}) {
      let n = [],
        a = this._animations.get(e),
        s,
        o = new Map();
      if (
        (a
          ? ((s = ls(
              this._driver,
              i,
              a,
              ns,
              Tr,
              new Map(),
              new Map(),
              r,
              oc,
              n
            )),
            s.forEach((p) => {
              let _ = Tt(o, p.element, new Map());
              p.postStyleProps.forEach((h) => _.set(h, null));
            }))
          : (n.push(xl()), (s = [])),
        n.length)
      )
        throw Cl(n);
      o.forEach((p, _) => {
        p.forEach((h, b) => {
          p.set(b, this._driver.computeStyle(_, b, $t));
        });
      });
      let l = s.map((p) => {
          let _ = o.get(p.element);
          return this._buildPlayer(p, new Map(), _);
        }),
        c = ce(l);
      return (
        this._playersById.set(e, c),
        c.onDestroy(() => this.destroy(e)),
        this.players.push(c),
        c
      );
    }
    destroy(e) {
      let i = this._getPlayer(e);
      i.destroy(), this._playersById.delete(e);
      let r = this.players.indexOf(i);
      r >= 0 && this.players.splice(r, 1);
    }
    _getPlayer(e) {
      let i = this._playersById.get(e);
      if (!i) throw El(e);
      return i;
    }
    listen(e, i, r, n) {
      let a = Wr(i, "", "", "");
      return Hr(this._getPlayer(e), r, a, n), () => {};
    }
    command(e, i, r, n) {
      if (r == "register") {
        this.register(e, n[0]);
        return;
      }
      if (r == "create") {
        let s = n[0] || {};
        this.create(e, i, s);
        return;
      }
      let a = this._getPlayer(e);
      switch (r) {
        case "play":
          a.play();
          break;
        case "pause":
          a.pause();
          break;
        case "reset":
          a.reset();
          break;
        case "restart":
          a.restart();
          break;
        case "finish":
          a.finish();
          break;
        case "init":
          a.init();
          break;
        case "setPosition":
          a.setPosition(parseFloat(n[0]));
          break;
        case "destroy":
          this.destroy(e);
          break;
      }
    }
  },
  Ya = "ng-animate-queued",
  lc = ".ng-animate-queued",
  Er = "ng-animate-disabled",
  cc = ".ng-animate-disabled",
  hc = "ng-star-inserted",
  mc = ".ng-star-inserted",
  pc = [],
  hs = {
    namespaceId: "",
    setForRemoval: !1,
    setForMove: !1,
    hasAnimation: !1,
    removedBeforeQueried: !1,
  },
  dc = {
    namespaceId: "",
    setForMove: !1,
    setForRemoval: !1,
    hasAnimation: !1,
    removedBeforeQueried: !0,
  },
  Ot = "__ng_removed",
  Ke = class {
    get params() {
      return this.options.params;
    }
    constructor(e, i = "") {
      this.namespaceId = i;
      let r = e && e.hasOwnProperty("value"),
        n = r ? e.value : e;
      if (((this.value = uc(n)), r)) {
        let a = e,
          { value: s } = a,
          o = Xr(a, ["value"]);
        this.options = o;
      } else this.options = {};
      this.options.params || (this.options.params = {});
    }
    absorbOptions(e) {
      let i = e.params;
      if (i) {
        let r = this.options.params;
        Object.keys(i).forEach((n) => {
          r[n] == null && (r[n] = i[n]);
        });
      }
    }
  },
  We = "void",
  Pr = new Ke(We),
  Nr = class {
    constructor(e, i, r) {
      (this.id = e),
        (this.hostElement = i),
        (this._engine = r),
        (this.players = []),
        (this._triggers = new Map()),
        (this._queue = []),
        (this._elementListeners = new Map()),
        (this._hostClassName = "ng-tns-" + e),
        It(i, this._hostClassName);
    }
    listen(e, i, r, n) {
      if (!this._triggers.has(i)) throw Pl(r, i);
      if (r == null || r.length == 0) throw wl(i);
      if (!gc(r)) throw Tl(r, i);
      let a = Tt(this._elementListeners, e, []),
        s = { name: i, phase: r, callback: n };
      a.push(s);
      let o = Tt(this._engine.statesByElement, e, new Map());
      return (
        o.has(i) || (It(e, Wi), It(e, Wi + "-" + i), o.set(i, Pr)),
        () => {
          this._engine.afterFlush(() => {
            let l = a.indexOf(s);
            l >= 0 && a.splice(l, 1), this._triggers.has(i) || o.delete(i);
          });
        }
      );
    }
    register(e, i) {
      return this._triggers.has(e) ? !1 : (this._triggers.set(e, i), !0);
    }
    _getTrigger(e) {
      let i = this._triggers.get(e);
      if (!i) throw Ml(e);
      return i;
    }
    trigger(e, i, r, n = !0) {
      let a = this._getTrigger(i),
        s = new Ue(this.id, i, e),
        o = this._engine.statesByElement.get(e);
      o ||
        (It(e, Wi),
        It(e, Wi + "-" + i),
        this._engine.statesByElement.set(e, (o = new Map())));
      let l = o.get(i),
        c = new Ke(r, this.id);
      if (
        (!(r && r.hasOwnProperty("value")) && l && c.absorbOptions(l.options),
        o.set(i, c),
        l || (l = Pr),
        !(c.value === We) && l.value === c.value)
      ) {
        if (!bc(l.params, c.params)) {
          let f = [],
            E = a.matchStyles(l.value, l.params, f),
            d = a.matchStyles(c.value, c.params, f);
          f.length
            ? this._engine.reportError(f)
            : this._engine.afterFlush(() => {
                be(e, E), qt(e, d);
              });
        }
        return;
      }
      let h = Tt(this._engine.playersByElement, e, []);
      h.forEach((f) => {
        f.namespaceId == this.id &&
          f.triggerName == i &&
          f.queued &&
          f.destroy();
      });
      let b = a.matchTransition(l.value, c.value, e, c.params),
        v = !1;
      if (!b) {
        if (!n) return;
        (b = a.fallbackTransition), (v = !0);
      }
      return (
        this._engine.totalQueuedPlayers++,
        this._queue.push({
          element: e,
          triggerName: i,
          transition: b,
          fromState: l,
          toState: c,
          player: s,
          isFallbackTransition: v,
        }),
        v ||
          (It(e, Ya),
          s.onStart(() => {
            ke(e, Ya);
          })),
        s.onDone(() => {
          let f = this.players.indexOf(s);
          f >= 0 && this.players.splice(f, 1);
          let E = this._engine.playersByElement.get(e);
          if (E) {
            let d = E.indexOf(s);
            d >= 0 && E.splice(d, 1);
          }
        }),
        this.players.push(s),
        h.push(s),
        s
      );
    }
    deregister(e) {
      this._triggers.delete(e),
        this._engine.statesByElement.forEach((i) => i.delete(e)),
        this._elementListeners.forEach((i, r) => {
          this._elementListeners.set(
            r,
            i.filter((n) => n.name != e)
          );
        });
    }
    clearElementCache(e) {
      this._engine.statesByElement.delete(e), this._elementListeners.delete(e);
      let i = this._engine.playersByElement.get(e);
      i &&
        (i.forEach((r) => r.destroy()),
        this._engine.playersByElement.delete(e));
    }
    _signalRemovalForInnerTriggers(e, i) {
      let r = this._engine.driver.query(e, Yi, !0);
      r.forEach((n) => {
        if (n[Ot]) return;
        let a = this._engine.fetchNamespacesByElement(n);
        a.size
          ? a.forEach((s) => s.triggerLeaveAnimation(n, i, !1, !0))
          : this.clearElementCache(n);
      }),
        this._engine.afterFlushAnimationsDone(() =>
          r.forEach((n) => this.clearElementCache(n))
        );
    }
    triggerLeaveAnimation(e, i, r, n) {
      let a = this._engine.statesByElement.get(e),
        s = new Map();
      if (a) {
        let o = [];
        if (
          (a.forEach((l, c) => {
            if ((s.set(c, l.value), this._triggers.has(c))) {
              let p = this.trigger(e, c, We, n);
              p && o.push(p);
            }
          }),
          o.length)
        )
          return (
            this._engine.markElementAsRemoved(this.id, e, !0, i, s),
            r && ce(o).onDone(() => this._engine.processLeaveNode(e)),
            !0
          );
      }
      return !1;
    }
    prepareLeaveAnimationListeners(e) {
      let i = this._elementListeners.get(e),
        r = this._engine.statesByElement.get(e);
      if (i && r) {
        let n = new Set();
        i.forEach((a) => {
          let s = a.name;
          if (n.has(s)) return;
          n.add(s);
          let l = this._triggers.get(s).fallbackTransition,
            c = r.get(s) || Pr,
            p = new Ke(We),
            _ = new Ue(this.id, s, e);
          this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: e,
              triggerName: s,
              transition: l,
              fromState: c,
              toState: p,
              player: _,
              isFallbackTransition: !0,
            });
        });
      }
    }
    removeNode(e, i) {
      let r = this._engine;
      if (
        (e.childElementCount && this._signalRemovalForInnerTriggers(e, i),
        this.triggerLeaveAnimation(e, i, !0))
      )
        return;
      let n = !1;
      if (r.totalAnimations) {
        let a = r.players.length ? r.playersByQueriedElement.get(e) : [];
        if (a && a.length) n = !0;
        else {
          let s = e;
          for (; (s = s.parentNode); )
            if (r.statesByElement.get(s)) {
              n = !0;
              break;
            }
        }
      }
      if ((this.prepareLeaveAnimationListeners(e), n))
        r.markElementAsRemoved(this.id, e, !1, i);
      else {
        let a = e[Ot];
        (!a || a === hs) &&
          (r.afterFlush(() => this.clearElementCache(e)),
          r.destroyInnerAnimations(e),
          r._onRemovalComplete(e, i));
      }
    }
    insertNode(e, i) {
      It(e, this._hostClassName);
    }
    drainQueuedTransitions(e) {
      let i = [];
      return (
        this._queue.forEach((r) => {
          let n = r.player;
          if (n.destroyed) return;
          let a = r.element,
            s = this._elementListeners.get(a);
          s &&
            s.forEach((o) => {
              if (o.name == r.triggerName) {
                let l = Wr(
                  a,
                  r.triggerName,
                  r.fromState.value,
                  r.toState.value
                );
                (l._data = e), Hr(r.player, o.phase, l, o.callback);
              }
            }),
            n.markedForDestroy
              ? this._engine.afterFlush(() => {
                  n.destroy();
                })
              : i.push(r);
        }),
        (this._queue = []),
        i.sort((r, n) => {
          let a = r.transition.ast.depCount,
            s = n.transition.ast.depCount;
          return a == 0 || s == 0
            ? a - s
            : this._engine.driver.containsElement(r.element, n.element)
            ? 1
            : -1;
        })
      );
    }
    destroy(e) {
      this.players.forEach((i) => i.destroy()),
        this._signalRemovalForInnerTriggers(this.hostElement, e);
    }
  },
  zr = class {
    _onRemovalComplete(e, i) {
      this.onRemovalComplete(e, i);
    }
    constructor(e, i, r) {
      (this.bodyNode = e),
        (this.driver = i),
        (this._normalizer = r),
        (this.players = []),
        (this.newHostElements = new Map()),
        (this.playersByElement = new Map()),
        (this.playersByQueriedElement = new Map()),
        (this.statesByElement = new Map()),
        (this.disabledNodes = new Set()),
        (this.totalAnimations = 0),
        (this.totalQueuedPlayers = 0),
        (this._namespaceLookup = {}),
        (this._namespaceList = []),
        (this._flushFns = []),
        (this._whenQuietFns = []),
        (this.namespacesByHostElement = new Map()),
        (this.collectedEnterElements = []),
        (this.collectedLeaveElements = []),
        (this.onRemovalComplete = (n, a) => {});
    }
    get queuedPlayers() {
      let e = [];
      return (
        this._namespaceList.forEach((i) => {
          i.players.forEach((r) => {
            r.queued && e.push(r);
          });
        }),
        e
      );
    }
    createNamespace(e, i) {
      let r = new Nr(e, i, this);
      return (
        this.bodyNode && this.driver.containsElement(this.bodyNode, i)
          ? this._balanceNamespaceList(r, i)
          : (this.newHostElements.set(i, r), this.collectEnterElement(i)),
        (this._namespaceLookup[e] = r)
      );
    }
    _balanceNamespaceList(e, i) {
      let r = this._namespaceList,
        n = this.namespacesByHostElement;
      if (r.length - 1 >= 0) {
        let s = !1,
          o = this.driver.getParentElement(i);
        for (; o; ) {
          let l = n.get(o);
          if (l) {
            let c = r.indexOf(l);
            r.splice(c + 1, 0, e), (s = !0);
            break;
          }
          o = this.driver.getParentElement(o);
        }
        s || r.unshift(e);
      } else r.push(e);
      return n.set(i, e), e;
    }
    register(e, i) {
      let r = this._namespaceLookup[e];
      return r || (r = this.createNamespace(e, i)), r;
    }
    registerTrigger(e, i, r) {
      let n = this._namespaceLookup[e];
      n && n.register(i, r) && this.totalAnimations++;
    }
    destroy(e, i) {
      e &&
        (this.afterFlush(() => {}),
        this.afterFlushAnimationsDone(() => {
          let r = this._fetchNamespace(e);
          this.namespacesByHostElement.delete(r.hostElement);
          let n = this._namespaceList.indexOf(r);
          n >= 0 && this._namespaceList.splice(n, 1),
            r.destroy(i),
            delete this._namespaceLookup[e];
        }));
    }
    _fetchNamespace(e) {
      return this._namespaceLookup[e];
    }
    fetchNamespacesByElement(e) {
      let i = new Set(),
        r = this.statesByElement.get(e);
      if (r) {
        for (let n of r.values())
          if (n.namespaceId) {
            let a = this._fetchNamespace(n.namespaceId);
            a && i.add(a);
          }
      }
      return i;
    }
    trigger(e, i, r, n) {
      if (Ki(i)) {
        let a = this._fetchNamespace(e);
        if (a) return a.trigger(i, r, n), !0;
      }
      return !1;
    }
    insertNode(e, i, r, n) {
      if (!Ki(i)) return;
      let a = i[Ot];
      if (a && a.setForRemoval) {
        (a.setForRemoval = !1), (a.setForMove = !0);
        let s = this.collectedLeaveElements.indexOf(i);
        s >= 0 && this.collectedLeaveElements.splice(s, 1);
      }
      if (e) {
        let s = this._fetchNamespace(e);
        s && s.insertNode(i, r);
      }
      n && this.collectEnterElement(i);
    }
    collectEnterElement(e) {
      this.collectedEnterElements.push(e);
    }
    markElementAsDisabled(e, i) {
      i
        ? this.disabledNodes.has(e) || (this.disabledNodes.add(e), It(e, Er))
        : this.disabledNodes.has(e) &&
          (this.disabledNodes.delete(e), ke(e, Er));
    }
    removeNode(e, i, r) {
      if (Ki(i)) {
        let n = e ? this._fetchNamespace(e) : null;
        n ? n.removeNode(i, r) : this.markElementAsRemoved(e, i, !1, r);
        let a = this.namespacesByHostElement.get(i);
        a && a.id !== e && a.removeNode(i, r);
      } else this._onRemovalComplete(i, r);
    }
    markElementAsRemoved(e, i, r, n, a) {
      this.collectedLeaveElements.push(i),
        (i[Ot] = {
          namespaceId: e,
          setForRemoval: n,
          hasAnimation: r,
          removedBeforeQueried: !1,
          previousTriggersValues: a,
        });
    }
    listen(e, i, r, n, a) {
      return Ki(i) ? this._fetchNamespace(e).listen(i, r, n, a) : () => {};
    }
    _buildInstruction(e, i, r, n, a) {
      return e.transition.build(
        this.driver,
        e.element,
        e.fromState.value,
        e.toState.value,
        r,
        n,
        e.fromState.options,
        e.toState.options,
        i,
        a
      );
    }
    destroyInnerAnimations(e) {
      let i = this.driver.query(e, Yi, !0);
      i.forEach((r) => this.destroyActiveAnimationsForElement(r)),
        this.playersByQueriedElement.size != 0 &&
          ((i = this.driver.query(e, Mr, !0)),
          i.forEach((r) => this.finishActiveQueriedAnimationOnElement(r)));
    }
    destroyActiveAnimationsForElement(e) {
      let i = this.playersByElement.get(e);
      i &&
        i.forEach((r) => {
          r.queued ? (r.markedForDestroy = !0) : r.destroy();
        });
    }
    finishActiveQueriedAnimationOnElement(e) {
      let i = this.playersByQueriedElement.get(e);
      i && i.forEach((r) => r.finish());
    }
    whenRenderingDone() {
      return new Promise((e) => {
        if (this.players.length) return ce(this.players).onDone(() => e());
        e();
      });
    }
    processLeaveNode(e) {
      let i = e[Ot];
      if (i && i.setForRemoval) {
        if (((e[Ot] = hs), i.namespaceId)) {
          this.destroyInnerAnimations(e);
          let r = this._fetchNamespace(i.namespaceId);
          r && r.clearElementCache(e);
        }
        this._onRemovalComplete(e, i.setForRemoval);
      }
      e.classList?.contains(Er) && this.markElementAsDisabled(e, !1),
        this.driver.query(e, cc, !0).forEach((r) => {
          this.markElementAsDisabled(r, !1);
        });
    }
    flush(e = -1) {
      let i = [];
      if (
        (this.newHostElements.size &&
          (this.newHostElements.forEach((r, n) =>
            this._balanceNamespaceList(r, n)
          ),
          this.newHostElements.clear()),
        this.totalAnimations && this.collectedEnterElements.length)
      )
        for (let r = 0; r < this.collectedEnterElements.length; r++) {
          let n = this.collectedEnterElements[r];
          It(n, hc);
        }
      if (
        this._namespaceList.length &&
        (this.totalQueuedPlayers || this.collectedLeaveElements.length)
      ) {
        let r = [];
        try {
          i = this._flushAnimations(r, e);
        } finally {
          for (let n = 0; n < r.length; n++) r[n]();
        }
      } else
        for (let r = 0; r < this.collectedLeaveElements.length; r++) {
          let n = this.collectedLeaveElements[r];
          this.processLeaveNode(n);
        }
      if (
        ((this.totalQueuedPlayers = 0),
        (this.collectedEnterElements.length = 0),
        (this.collectedLeaveElements.length = 0),
        this._flushFns.forEach((r) => r()),
        (this._flushFns = []),
        this._whenQuietFns.length)
      ) {
        let r = this._whenQuietFns;
        (this._whenQuietFns = []),
          i.length
            ? ce(i).onDone(() => {
                r.forEach((n) => n());
              })
            : r.forEach((n) => n());
      }
    }
    reportError(e) {
      throw Al(e);
    }
    _flushAnimations(e, i) {
      let r = new qe(),
        n = [],
        a = new Map(),
        s = [],
        o = new Map(),
        l = new Map(),
        c = new Map(),
        p = new Set();
      this.disabledNodes.forEach((x) => {
        p.add(x);
        let w = this.driver.query(x, lc, !0);
        for (let g = 0; g < w.length; g++) p.add(w[g]);
      });
      let _ = this.bodyNode,
        h = Array.from(this.statesByElement.keys()),
        b = Za(h, this.collectedEnterElements),
        v = new Map(),
        f = 0;
      b.forEach((x, w) => {
        let g = ns + f++;
        v.set(w, g), x.forEach((S) => It(S, g));
      });
      let E = [],
        d = new Set(),
        u = new Set();
      for (let x = 0; x < this.collectedLeaveElements.length; x++) {
        let w = this.collectedLeaveElements[x],
          g = w[Ot];
        g &&
          g.setForRemoval &&
          (E.push(w),
          d.add(w),
          g.hasAnimation
            ? this.driver.query(w, mc, !0).forEach((S) => d.add(S))
            : u.add(w));
      }
      let m = new Map(),
        y = Za(h, Array.from(d));
      y.forEach((x, w) => {
        let g = Tr + f++;
        m.set(w, g), x.forEach((S) => It(S, g));
      }),
        e.push(() => {
          b.forEach((x, w) => {
            let g = v.get(w);
            x.forEach((S) => ke(S, g));
          }),
            y.forEach((x, w) => {
              let g = m.get(w);
              x.forEach((S) => ke(S, g));
            }),
            E.forEach((x) => {
              this.processLeaveNode(x);
            });
        });
      let C = [],
        P = [];
      for (let x = this._namespaceList.length - 1; x >= 0; x--)
        this._namespaceList[x].drainQueuedTransitions(i).forEach((g) => {
          let S = g.player,
            k = g.element;
          if ((C.push(S), this.collectedEnterElements.length)) {
            let rt = k[Ot];
            if (rt && rt.setForMove) {
              if (
                rt.previousTriggersValues &&
                rt.previousTriggersValues.has(g.triggerName)
              ) {
                let ut = rt.previousTriggersValues.get(g.triggerName),
                  dt = this.statesByElement.get(g.element);
                if (dt && dt.has(g.triggerName)) {
                  let yt = dt.get(g.triggerName);
                  (yt.value = ut), dt.set(g.triggerName, yt);
                }
              }
              S.destroy();
              return;
            }
          }
          let A = !_ || !this.driver.containsElement(_, k),
            V = m.get(k),
            q = v.get(k),
            G = this._buildInstruction(g, r, q, V, A);
          if (G.errors && G.errors.length) {
            P.push(G);
            return;
          }
          if (A) {
            S.onStart(() => be(k, G.fromStyles)),
              S.onDestroy(() => qt(k, G.toStyles)),
              n.push(S);
            return;
          }
          if (g.isFallbackTransition) {
            S.onStart(() => be(k, G.fromStyles)),
              S.onDestroy(() => qt(k, G.toStyles)),
              n.push(S);
            return;
          }
          let nt = [];
          G.timelines.forEach((rt) => {
            (rt.stretchStartingKeyframe = !0),
              this.disabledNodes.has(rt.element) || nt.push(rt);
          }),
            (G.timelines = nt),
            r.append(k, G.timelines);
          let st = { instruction: G, player: S, element: k };
          s.push(st),
            G.queriedElements.forEach((rt) => Tt(o, rt, []).push(S)),
            G.preStyleProps.forEach((rt, ut) => {
              if (rt.size) {
                let dt = l.get(ut);
                dt || l.set(ut, (dt = new Set())),
                  rt.forEach((yt, vt) => dt.add(vt));
              }
            }),
            G.postStyleProps.forEach((rt, ut) => {
              let dt = c.get(ut);
              dt || c.set(ut, (dt = new Set())),
                rt.forEach((yt, vt) => dt.add(vt));
            });
        });
      if (P.length) {
        let x = [];
        P.forEach((w) => {
          x.push(kl(w.triggerName, w.errors));
        }),
          C.forEach((w) => w.destroy()),
          this.reportError(x);
      }
      let T = new Map(),
        M = new Map();
      s.forEach((x) => {
        let w = x.element;
        r.has(w) &&
          (M.set(w, w),
          this._beforeAnimationBuild(x.player.namespaceId, x.instruction, T));
      }),
        n.forEach((x) => {
          let w = x.element;
          this._getPreviousPlayers(
            w,
            !1,
            x.namespaceId,
            x.triggerName,
            null
          ).forEach((S) => {
            Tt(T, w, []).push(S), S.destroy();
          });
        });
      let I = E.filter((x) => Ja(x, l, c)),
        z = new Map();
      Xa(z, this.driver, u, c, $t).forEach((x) => {
        Ja(x, l, c) && I.push(x);
      });
      let D = new Map();
      b.forEach((x, w) => {
        Xa(D, this.driver, new Set(x), l, xi);
      }),
        I.forEach((x) => {
          let w = z.get(x),
            g = D.get(x);
          z.set(x, new Map([...(w?.entries() ?? []), ...(g?.entries() ?? [])]));
        });
      let j = [],
        H = [],
        R = {};
      s.forEach((x) => {
        let { element: w, player: g, instruction: S } = x;
        if (r.has(w)) {
          if (p.has(w)) {
            g.onDestroy(() => qt(w, S.toStyles)),
              (g.disabled = !0),
              g.overrideTotalTime(S.totalTime),
              n.push(g);
            return;
          }
          let k = R;
          if (M.size > 1) {
            let V = w,
              q = [];
            for (; (V = V.parentNode); ) {
              let G = M.get(V);
              if (G) {
                k = G;
                break;
              }
              q.push(V);
            }
            q.forEach((G) => M.set(G, k));
          }
          let A = this._buildAnimation(g.namespaceId, S, T, a, D, z);
          if ((g.setRealPlayer(A), k === R)) j.push(g);
          else {
            let V = this.playersByElement.get(k);
            V && V.length && (g.parentPlayer = ce(V)), n.push(g);
          }
        } else
          be(w, S.fromStyles),
            g.onDestroy(() => qt(w, S.toStyles)),
            H.push(g),
            p.has(w) && n.push(g);
      }),
        H.forEach((x) => {
          let w = a.get(x.element);
          if (w && w.length) {
            let g = ce(w);
            x.setRealPlayer(g);
          }
        }),
        n.forEach((x) => {
          x.parentPlayer ? x.syncPlayerEvents(x.parentPlayer) : x.destroy();
        });
      for (let x = 0; x < E.length; x++) {
        let w = E[x],
          g = w[Ot];
        if ((ke(w, Tr), g && g.hasAnimation)) continue;
        let S = [];
        if (o.size) {
          let A = o.get(w);
          A && A.length && S.push(...A);
          let V = this.driver.query(w, Mr, !0);
          for (let q = 0; q < V.length; q++) {
            let G = o.get(V[q]);
            G && G.length && S.push(...G);
          }
        }
        let k = S.filter((A) => !A.destroyed);
        k.length ? vc(this, w, k) : this.processLeaveNode(w);
      }
      return (
        (E.length = 0),
        j.forEach((x) => {
          this.players.push(x),
            x.onDone(() => {
              x.destroy();
              let w = this.players.indexOf(x);
              this.players.splice(w, 1);
            }),
            x.play();
        }),
        j
      );
    }
    afterFlush(e) {
      this._flushFns.push(e);
    }
    afterFlushAnimationsDone(e) {
      this._whenQuietFns.push(e);
    }
    _getPreviousPlayers(e, i, r, n, a) {
      let s = [];
      if (i) {
        let o = this.playersByQueriedElement.get(e);
        o && (s = o);
      } else {
        let o = this.playersByElement.get(e);
        if (o) {
          let l = !a || a == We;
          o.forEach((c) => {
            c.queued || (!l && c.triggerName != n) || s.push(c);
          });
        }
      }
      return (
        (r || n) &&
          (s = s.filter(
            (o) => !((r && r != o.namespaceId) || (n && n != o.triggerName))
          )),
        s
      );
    }
    _beforeAnimationBuild(e, i, r) {
      let n = i.triggerName,
        a = i.element,
        s = i.isRemovalTransition ? void 0 : e,
        o = i.isRemovalTransition ? void 0 : n;
      for (let l of i.timelines) {
        let c = l.element,
          p = c !== a,
          _ = Tt(r, c, []);
        this._getPreviousPlayers(c, p, s, o, i.toState).forEach((b) => {
          let v = b.getRealPlayer();
          v.beforeDestroy && v.beforeDestroy(), b.destroy(), _.push(b);
        });
      }
      be(a, i.fromStyles);
    }
    _buildAnimation(e, i, r, n, a, s) {
      let o = i.triggerName,
        l = i.element,
        c = [],
        p = new Set(),
        _ = new Set(),
        h = i.timelines.map((v) => {
          let f = v.element;
          p.add(f);
          let E = f[Ot];
          if (E && E.removedBeforeQueried) return new Me(v.duration, v.delay);
          let d = f !== l,
            u = yc((r.get(f) || pc).map((T) => T.getRealPlayer())).filter(
              (T) => {
                let M = T;
                return M.element ? M.element === f : !1;
              }
            ),
            m = a.get(f),
            y = s.get(f),
            C = ts(this._normalizer, v.keyframes, m, y),
            P = this._buildPlayer(v, C, u);
          if ((v.subTimeline && n && _.add(f), d)) {
            let T = new Ue(e, o, f);
            T.setRealPlayer(P), c.push(T);
          }
          return P;
        });
      c.forEach((v) => {
        Tt(this.playersByQueriedElement, v.element, []).push(v),
          v.onDone(() => fc(this.playersByQueriedElement, v.element, v));
      }),
        p.forEach((v) => It(v, Ha));
      let b = ce(h);
      return (
        b.onDestroy(() => {
          p.forEach((v) => ke(v, Ha)), qt(l, i.toStyles);
        }),
        _.forEach((v) => {
          Tt(n, v, []).push(b);
        }),
        b
      );
    }
    _buildPlayer(e, i, r) {
      return i.length > 0
        ? this.driver.animate(e.element, i, e.duration, e.delay, e.easing, r)
        : new Me(e.duration, e.delay);
    }
  },
  Ue = class {
    constructor(e, i, r) {
      (this.namespaceId = e),
        (this.triggerName = i),
        (this.element = r),
        (this._player = new Me()),
        (this._containsRealPlayer = !1),
        (this._queuedCallbacks = new Map()),
        (this.destroyed = !1),
        (this.parentPlayer = null),
        (this.markedForDestroy = !1),
        (this.disabled = !1),
        (this.queued = !0),
        (this.totalTime = 0);
    }
    setRealPlayer(e) {
      this._containsRealPlayer ||
        ((this._player = e),
        this._queuedCallbacks.forEach((i, r) => {
          i.forEach((n) => Hr(e, r, void 0, n));
        }),
        this._queuedCallbacks.clear(),
        (this._containsRealPlayer = !0),
        this.overrideTotalTime(e.totalTime),
        (this.queued = !1));
    }
    getRealPlayer() {
      return this._player;
    }
    overrideTotalTime(e) {
      this.totalTime = e;
    }
    syncPlayerEvents(e) {
      let i = this._player;
      i.triggerCallback && e.onStart(() => i.triggerCallback("start")),
        e.onDone(() => this.finish()),
        e.onDestroy(() => this.destroy());
    }
    _queueEvent(e, i) {
      Tt(this._queuedCallbacks, e, []).push(i);
    }
    onDone(e) {
      this.queued && this._queueEvent("done", e), this._player.onDone(e);
    }
    onStart(e) {
      this.queued && this._queueEvent("start", e), this._player.onStart(e);
    }
    onDestroy(e) {
      this.queued && this._queueEvent("destroy", e), this._player.onDestroy(e);
    }
    init() {
      this._player.init();
    }
    hasStarted() {
      return this.queued ? !1 : this._player.hasStarted();
    }
    play() {
      !this.queued && this._player.play();
    }
    pause() {
      !this.queued && this._player.pause();
    }
    restart() {
      !this.queued && this._player.restart();
    }
    finish() {
      this._player.finish();
    }
    destroy() {
      (this.destroyed = !0), this._player.destroy();
    }
    reset() {
      !this.queued && this._player.reset();
    }
    setPosition(e) {
      this.queued || this._player.setPosition(e);
    }
    getPosition() {
      return this.queued ? 0 : this._player.getPosition();
    }
    triggerCallback(e) {
      let i = this._player;
      i.triggerCallback && i.triggerCallback(e);
    }
  };
function fc(t, e, i) {
  let r = t.get(e);
  if (r) {
    if (r.length) {
      let n = r.indexOf(i);
      r.splice(n, 1);
    }
    r.length == 0 && t.delete(e);
  }
  return r;
}
function uc(t) {
  return t ?? null;
}
function Ki(t) {
  return t && t.nodeType === 1;
}
function gc(t) {
  return t == "start" || t == "done";
}
function Qa(t, e) {
  let i = t.style.display;
  return (t.style.display = e ?? "none"), i;
}
function Xa(t, e, i, r, n) {
  let a = [];
  i.forEach((l) => a.push(Qa(l)));
  let s = [];
  r.forEach((l, c) => {
    let p = new Map();
    l.forEach((_) => {
      let h = e.computeStyle(c, _, n);
      p.set(_, h), (!h || h.length == 0) && ((c[Ot] = dc), s.push(c));
    }),
      t.set(c, p);
  });
  let o = 0;
  return i.forEach((l) => Qa(l, a[o++])), s;
}
function Za(t, e) {
  let i = new Map();
  if ((t.forEach((o) => i.set(o, [])), e.length == 0)) return i;
  let r = 1,
    n = new Set(e),
    a = new Map();
  function s(o) {
    if (!o) return r;
    let l = a.get(o);
    if (l) return l;
    let c = o.parentNode;
    return i.has(c) ? (l = c) : n.has(c) ? (l = r) : (l = s(c)), a.set(o, l), l;
  }
  return (
    e.forEach((o) => {
      let l = s(o);
      l !== r && i.get(l).push(o);
    }),
    i
  );
}
function It(t, e) {
  t.classList?.add(e);
}
function ke(t, e) {
  t.classList?.remove(e);
}
function vc(t, e, i) {
  ce(i).onDone(() => t.processLeaveNode(e));
}
function yc(t) {
  let e = [];
  return ms(t, e), e;
}
function ms(t, e) {
  for (let i = 0; i < t.length; i++) {
    let r = t[i];
    r instanceof yr ? ms(r.players, e) : e.push(r);
  }
}
function bc(t, e) {
  let i = Object.keys(t),
    r = Object.keys(e);
  if (i.length != r.length) return !1;
  for (let n = 0; n < i.length; n++) {
    let a = i[n];
    if (!e.hasOwnProperty(a) || t[a] !== e[a]) return !1;
  }
  return !0;
}
function Ja(t, e, i) {
  let r = i.get(t);
  if (!r) return !1;
  let n = e.get(t);
  return n ? r.forEach((a) => n.add(a)) : e.set(t, r), i.delete(t), !0;
}
var Ie = class {
  constructor(e, i, r) {
    (this._driver = i),
      (this._normalizer = r),
      (this._triggerCache = {}),
      (this.onRemovalComplete = (n, a) => {}),
      (this._transitionEngine = new zr(e.body, i, r)),
      (this._timelineEngine = new Or(e.body, i, r)),
      (this._transitionEngine.onRemovalComplete = (n, a) =>
        this.onRemovalComplete(n, a));
  }
  registerTrigger(e, i, r, n, a) {
    let s = e + "-" + n,
      o = this._triggerCache[s];
    if (!o) {
      let l = [],
        c = [],
        p = os(this._driver, a, l, c);
      if (l.length) throw bl(n, l);
      c.length && void 0,
        (o = ac(n, p, this._normalizer)),
        (this._triggerCache[s] = o);
    }
    this._transitionEngine.registerTrigger(i, n, o);
  }
  register(e, i) {
    this._transitionEngine.register(e, i);
  }
  destroy(e, i) {
    this._transitionEngine.destroy(e, i);
  }
  onInsert(e, i, r, n) {
    this._transitionEngine.insertNode(e, i, r, n);
  }
  onRemove(e, i, r) {
    this._transitionEngine.removeNode(e, i, r);
  }
  disableAnimations(e, i) {
    this._transitionEngine.markElementAsDisabled(e, i);
  }
  process(e, i, r, n) {
    if (r.charAt(0) == "@") {
      let [a, s] = Ga(r),
        o = n;
      this._timelineEngine.command(a, i, s, o);
    } else this._transitionEngine.trigger(e, i, r, n);
  }
  listen(e, i, r, n, a) {
    if (r.charAt(0) == "@") {
      let [s, o] = Ga(r);
      return this._timelineEngine.listen(s, i, o, a);
    }
    return this._transitionEngine.listen(e, i, r, n, a);
  }
  flush(e = -1) {
    this._transitionEngine.flush(e);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(e) {
    this._transitionEngine.afterFlushAnimationsDone(e);
  }
};
function _c(t, e) {
  let i = null,
    r = null;
  return (
    Array.isArray(e) && e.length
      ? ((i = wr(e[0])), e.length > 1 && (r = wr(e[e.length - 1])))
      : e instanceof Map && (i = wr(e)),
    i || r ? new Gr(t, i, r) : null
  );
}
var Gr = class t {
  static {
    this.initialStylesByElement = new WeakMap();
  }
  constructor(e, i, r) {
    (this._element = e),
      (this._startStyles = i),
      (this._endStyles = r),
      (this._state = 0);
    let n = t.initialStylesByElement.get(e);
    n || t.initialStylesByElement.set(e, (n = new Map())),
      (this._initialStyles = n);
  }
  start() {
    this._state < 1 &&
      (this._startStyles &&
        qt(this._element, this._startStyles, this._initialStyles),
      (this._state = 1));
  }
  finish() {
    this.start(),
      this._state < 2 &&
        (qt(this._element, this._initialStyles),
        this._endStyles &&
          (qt(this._element, this._endStyles), (this._endStyles = null)),
        (this._state = 1));
  }
  destroy() {
    this.finish(),
      this._state < 3 &&
        (t.initialStylesByElement.delete(this._element),
        this._startStyles &&
          (be(this._element, this._startStyles), (this._endStyles = null)),
        this._endStyles &&
          (be(this._element, this._endStyles), (this._endStyles = null)),
        qt(this._element, this._initialStyles),
        (this._state = 3));
  }
};
function wr(t) {
  let e = null;
  return (
    t.forEach((i, r) => {
      Sc(r) && ((e = e || new Map()), e.set(r, i));
    }),
    e
  );
}
function Sc(t) {
  return t === "display" || t === "position";
}
var ir = class {
    constructor(e, i, r, n) {
      (this.element = e),
        (this.keyframes = i),
        (this.options = r),
        (this._specialStyles = n),
        (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._initialized = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this.time = 0),
        (this.parentPlayer = null),
        (this.currentSnapshot = new Map()),
        (this._duration = r.duration),
        (this._delay = r.delay || 0),
        (this.time = this._duration + this._delay);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((e) => e()),
        (this._onDoneFns = []));
    }
    init() {
      this._buildPlayer(), this._preparePlayerBeforeStart();
    }
    _buildPlayer() {
      if (this._initialized) return;
      this._initialized = !0;
      let e = this.keyframes;
      (this.domPlayer = this._triggerWebAnimation(
        this.element,
        e,
        this.options
      )),
        (this._finalKeyframe = e.length ? e[e.length - 1] : new Map());
      let i = () => this._onFinish();
      this.domPlayer.addEventListener("finish", i),
        this.onDestroy(() => {
          this.domPlayer.removeEventListener("finish", i);
        });
    }
    _preparePlayerBeforeStart() {
      this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
    }
    _convertKeyframesToObject(e) {
      let i = [];
      return (
        e.forEach((r) => {
          i.push(Object.fromEntries(r));
        }),
        i
      );
    }
    _triggerWebAnimation(e, i, r) {
      return e.animate(this._convertKeyframesToObject(i), r);
    }
    onStart(e) {
      this._originalOnStartFns.push(e), this._onStartFns.push(e);
    }
    onDone(e) {
      this._originalOnDoneFns.push(e), this._onDoneFns.push(e);
    }
    onDestroy(e) {
      this._onDestroyFns.push(e);
    }
    play() {
      this._buildPlayer(),
        this.hasStarted() ||
          (this._onStartFns.forEach((e) => e()),
          (this._onStartFns = []),
          (this._started = !0),
          this._specialStyles && this._specialStyles.start()),
        this.domPlayer.play();
    }
    pause() {
      this.init(), this.domPlayer.pause();
    }
    finish() {
      this.init(),
        this._specialStyles && this._specialStyles.finish(),
        this._onFinish(),
        this.domPlayer.finish();
    }
    reset() {
      this._resetDomPlayerState(),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    _resetDomPlayerState() {
      this.domPlayer && this.domPlayer.cancel();
    }
    restart() {
      this.reset(), this.play();
    }
    hasStarted() {
      return this._started;
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._resetDomPlayerState(),
        this._onFinish(),
        this._specialStyles && this._specialStyles.destroy(),
        this._onDestroyFns.forEach((e) => e()),
        (this._onDestroyFns = []));
    }
    setPosition(e) {
      this.domPlayer === void 0 && this.init(),
        (this.domPlayer.currentTime = e * this.time);
    }
    getPosition() {
      return +(this.domPlayer.currentTime ?? 0) / this.time;
    }
    get totalTime() {
      return this._delay + this._duration;
    }
    beforeDestroy() {
      let e = new Map();
      this.hasStarted() &&
        this._finalKeyframe.forEach((r, n) => {
          n !== "offset" && e.set(n, this._finished ? r : Ur(this.element, n));
        }),
        (this.currentSnapshot = e);
    }
    triggerCallback(e) {
      let i = e === "start" ? this._onStartFns : this._onDoneFns;
      i.forEach((r) => r()), (i.length = 0);
    }
  },
  rr = class {
    validateStyleProperty(e) {
      return !0;
    }
    validateAnimatableStyleProperty(e) {
      return !0;
    }
    containsElement(e, i) {
      return es(e, i);
    }
    getParentElement(e) {
      return $r(e);
    }
    query(e, i, r) {
      return is(e, i, r);
    }
    computeStyle(e, i, r) {
      return Ur(e, i);
    }
    animate(e, i, r, n, a, s = []) {
      let o = n == 0 ? "both" : "forwards",
        l = { duration: r, delay: n, fill: o };
      a && (l.easing = a);
      let c = new Map(),
        p = s.filter((b) => b instanceof ir);
      Gl(r, n) &&
        p.forEach((b) => {
          b.currentSnapshot.forEach((v, f) => c.set(f, v));
        });
      let _ = Ol(i).map((b) => new Map(b));
      _ = jl(e, _, c);
      let h = _c(e, _);
      return new ir(e, _, l, h);
    }
  };
var Ui = "@",
  ps = "@.disabled",
  nr = class {
    constructor(e, i, r, n) {
      (this.namespaceId = e),
        (this.delegate = i),
        (this.engine = r),
        (this._onDestroy = n),
        (this.ɵtype = 0);
    }
    get data() {
      return this.delegate.data;
    }
    destroyNode(e) {
      this.delegate.destroyNode?.(e);
    }
    destroy() {
      this.engine.destroy(this.namespaceId, this.delegate),
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        }),
        this._onDestroy?.();
    }
    createElement(e, i) {
      return this.delegate.createElement(e, i);
    }
    createComment(e) {
      return this.delegate.createComment(e);
    }
    createText(e) {
      return this.delegate.createText(e);
    }
    appendChild(e, i) {
      this.delegate.appendChild(e, i),
        this.engine.onInsert(this.namespaceId, i, e, !1);
    }
    insertBefore(e, i, r, n = !0) {
      this.delegate.insertBefore(e, i, r),
        this.engine.onInsert(this.namespaceId, i, e, n);
    }
    removeChild(e, i, r) {
      this.parentNode(i) &&
        this.engine.onRemove(this.namespaceId, i, this.delegate);
    }
    selectRootElement(e, i) {
      return this.delegate.selectRootElement(e, i);
    }
    parentNode(e) {
      return this.delegate.parentNode(e);
    }
    nextSibling(e) {
      return this.delegate.nextSibling(e);
    }
    setAttribute(e, i, r, n) {
      this.delegate.setAttribute(e, i, r, n);
    }
    removeAttribute(e, i, r) {
      this.delegate.removeAttribute(e, i, r);
    }
    addClass(e, i) {
      this.delegate.addClass(e, i);
    }
    removeClass(e, i) {
      this.delegate.removeClass(e, i);
    }
    setStyle(e, i, r, n) {
      this.delegate.setStyle(e, i, r, n);
    }
    removeStyle(e, i, r) {
      this.delegate.removeStyle(e, i, r);
    }
    setProperty(e, i, r) {
      i.charAt(0) == Ui && i == ps
        ? this.disableAnimations(e, !!r)
        : this.delegate.setProperty(e, i, r);
    }
    setValue(e, i) {
      this.delegate.setValue(e, i);
    }
    listen(e, i, r) {
      return this.delegate.listen(e, i, r);
    }
    disableAnimations(e, i) {
      this.engine.disableAnimations(e, i);
    }
  },
  jr = class extends nr {
    constructor(e, i, r, n, a) {
      super(i, r, n, a), (this.factory = e), (this.namespaceId = i);
    }
    setProperty(e, i, r) {
      i.charAt(0) == Ui
        ? i.charAt(1) == "." && i == ps
          ? ((r = r === void 0 ? !0 : !!r), this.disableAnimations(e, r))
          : this.engine.process(this.namespaceId, e, i.slice(1), r)
        : this.delegate.setProperty(e, i, r);
    }
    listen(e, i, r) {
      if (i.charAt(0) == Ui) {
        let n = xc(e),
          a = i.slice(1),
          s = "";
        return (
          a.charAt(0) != Ui && ([a, s] = Cc(a)),
          this.engine.listen(this.namespaceId, n, a, s, (o) => {
            let l = o._data || -1;
            this.factory.scheduleListenerCallback(l, r, o);
          })
        );
      }
      return this.delegate.listen(e, i, r);
    }
  };
function xc(t) {
  switch (t) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return t;
  }
}
function Cc(t) {
  let e = t.indexOf("."),
    i = t.substring(0, e),
    r = t.slice(e + 1);
  return [i, r];
}
var ar = class {
  constructor(e, i, r) {
    (this.delegate = e),
      (this.engine = i),
      (this._zone = r),
      (this._currentId = 0),
      (this._microtaskId = 1),
      (this._animationCallbacksBuffer = []),
      (this._rendererCache = new Map()),
      (this._cdRecurDepth = 0),
      (i.onRemovalComplete = (n, a) => {
        a?.removeChild(null, n);
      });
  }
  createRenderer(e, i) {
    let r = "",
      n = this.delegate.createRenderer(e, i);
    if (!e || !i?.data?.animation) {
      let c = this._rendererCache,
        p = c.get(n);
      if (!p) {
        let _ = () => c.delete(n);
        (p = new nr(r, n, this.engine, _)), c.set(n, p);
      }
      return p;
    }
    let a = i.id,
      s = i.id + "-" + this._currentId;
    this._currentId++, this.engine.register(s, e);
    let o = (c) => {
      Array.isArray(c)
        ? c.forEach(o)
        : this.engine.registerTrigger(a, s, e, c.name, c);
    };
    return i.data.animation.forEach(o), new jr(this, s, n, this.engine);
  }
  begin() {
    this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(e, i, r) {
    if (e >= 0 && e < this._microtaskId) {
      this._zone.run(() => i(r));
      return;
    }
    let n = this._animationCallbacksBuffer;
    n.length == 0 &&
      queueMicrotask(() => {
        this._zone.run(() => {
          n.forEach((a) => {
            let [s, o] = a;
            s(o);
          }),
            (this._animationCallbacksBuffer = []);
        });
      }),
      n.push([i, r]);
  }
  end() {
    this._cdRecurDepth--,
      this._cdRecurDepth == 0 &&
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask(), this.engine.flush(this._microtaskId);
        }),
      this.delegate.end && this.delegate.end();
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};
var Pc = (() => {
  class t extends Ie {
    constructor(i, r, n) {
      super(i, r, n);
    }
    ngOnDestroy() {
      this.flush();
    }
    static {
      this.ɵfac = function (r) {
        return new (r || t)(De(fi), De(_e), De(Se));
      };
    }
    static {
      this.ɵprov = Gt({ token: t, factory: t.ɵfac });
    }
  }
  return t;
})();
function wc() {
  return new Xi();
}
function Tc(t, e, i) {
  return new ar(t, e, i);
}
var ds = [
    { provide: Se, useFactory: wc },
    { provide: Ie, useClass: Pc },
    { provide: fn, useFactory: Tc, deps: [Bn, Ie, Vt] },
  ],
  Mc = [
    { provide: _e, useFactory: () => new rr() },
    { provide: Le, useValue: "BrowserAnimations" },
    ...ds,
  ],
  Jd = [
    { provide: _e, useClass: qr },
    { provide: Le, useValue: "NoopAnimations" },
    ...ds,
  ];
function fs() {
  return gn("NgEagerAnimations"), [...Mc];
}
var _s = Cs(us());
N();
N();
var Qr = (t, e) => {
  let i = Q(Ci),
    r = Q(Pe),
    n = t.data.customDetailsPath;
  if (n && n === "aiPump") return i.fetchAiPump();
  let a = t.paramMap.get("id");
  if (!a) {
    r.navigate(["/"]);
    return;
  }
  return i.fetchAgent(a);
};
N();
var gs = (t, e) =>
  me(void 0, null, function* () {
    let i = Q(Pe);
    return (yield Q(Ci).checkOwnership(t.params.id))
      ? !0
      : (i.navigate(["/"]), !1);
  });
var vs = [
  {
    path: "",
    loadComponent: () =>
      import("./chunk-DXNIN3GQ.js").then((t) => t.HomePageComponent),
  },
  {
    path: "create-agent",
    loadComponent: () =>
      import("./chunk-MKZNXEZY.js").then((t) => t.CreateAgentPageComponent),
  },
  {
    path: "agent-details/aiPump",
    resolve: { agent: Qr },
    data: { customDetailsPath: "aiPump" },
    loadComponent: () =>
      import("./chunk-V4YJMXTO.js").then((t) => t.AiPumpDetailsPageComponent),
  },
  {
    path: "agent-details",
    children: [
      { path: "", pathMatch: "full", redirectTo: "/" },
      {
        path: ":id",
        resolve: { agent: Qr },
        loadComponent: () =>
          import("./chunk-LX7ZKV6U.js").then(
            (t) => t.AgentDetailsPageComponent
          ),
      },
      {
        path: ":id/edit",
        canActivate: [gs],
        loadComponent: () =>
          import("./chunk-2U7QWMHU.js").then((t) => t.EditAgentPageComponent),
      },
    ],
  },
  {
    path: "privacy-policy",
    loadComponent: () =>
      import("./chunk-AOTF74PO.js").then((t) => t.PrivacyPolicyComponent),
  },
  {
    path: "terms-of-service",
    loadComponent: () =>
      import("./chunk-5CBWUPNF.js").then((t) => t.TermsOfServiceComponent),
  },
];
N();
var ys = (t, e) => {
  if (t.context.get(Sa)) {
    let i = "https://api.aipump.ai",
      r = i.endsWith("/") ? i : i + "/",
      n = t.url.startsWith("/") ? t.url.substring(1) : t.url;
    t = t.clone({ url: r + n });
  }
  return e(t);
};
N();
N();
var sr = class t {
  #t = Q(Bt);
  getAuthToken() {
    let e = this.#t.address();
    return e ? localStorage.getItem(`AI_PUMP_TOKEN_${e}`) : null;
  }
  setAuthToken(e) {
    let i = this.#t.address();
    i && localStorage.setItem(`AI_PUMP_TOKEN_${i}`, e);
  }
  clearAuthToken() {
    let e = this.#t.address();
    e && localStorage.removeItem(`AI_PUMP_TOKEN_${e}`);
  }
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵprov = Gt({ token: t, factory: t.ɵfac, providedIn: "root" });
};
var bs = (t, e) => {
  if (t.context.get(xa)) {
    let i = Q(sr),
      r = Q(Ca),
      n = Q(Bt);
    return ae(i.getAuthToken()).pipe(
      zt((a) => {
        if (a) return ae({ token: a });
        {
          let s = Date.now(),
            o = "Ai pump " + s;
          return n.signMessage(o).pipe(
            zt((l) =>
              r.auth.signature(l, s, n.address() ?? "", n.walletType())
            ),
            ri(({ token: l }) => {
              i.setAuthToken(l);
            })
          );
        }
      }),
      zt(({ token: a }) =>
        e(t.clone({ headers: t.headers.set("Authorization", `Bearer ${a}`) }))
      ),
      an((a, s) => (a.status === 403 ? (i.clearAuthToken(), s) : tn(() => a)))
    );
  }
  return e(t);
};
N();
var or = class t {
  http = Q(gi);
  getTranslation(e) {
    return this.http.get(`/i18n/${e}.json`);
  }
  static ɵfac = function (i) {
    return new (i || t)();
  };
  static ɵprov = Gt({ token: t, factory: t.ɵfac, providedIn: "root" });
};
var Ss = {
  providers: [
    fs(),
    kn({ eventCoalescing: !0 }),
    zn(vs, Gn({ scrollPositionRestoration: "top" })),
    Ln(Vn([ys, bs])),
    Xn({
      config: {
        availableLangs: ["en", "zh"],
        defaultLang: "en",
        reRenderOnLangChange: !0,
        prodMode: !In(),
      },
      loader: or,
    }),
    na({ autoConnect: !0 }),
    Ia(),
    Hn(),
    Pa(),
    wa(),
    Aa({ player: () => _s.default }),
  ],
};
N();
N();
String.prototype.truncateDecimals = function (t) {
  let [e, i] = this.split(".");
  return i ? `${e}.${i.slice(0, t)}` : e;
};
On(Hi, Ss).catch((t) => console.error(t));
