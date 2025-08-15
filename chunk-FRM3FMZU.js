import { W as Fi, c as jt, p as Vt, r as Li } from "./chunk-23ZZ27XK.js";
import { a as te, b as ne, q as Ft } from "./chunk-KXQY476L.js";
Ft();
Ft();
function ji(e, t) {
  return Object.is(e, t);
}
var x = null,
  gt = !1,
  Ht = 1,
  H = Symbol("SIGNAL");
function D(e) {
  let t = x;
  return (x = e), t;
}
function Vi() {
  return x;
}
function Bl() {
  return gt;
}
var Ze = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function vt(e) {
  if (gt) throw new Error("");
  if (x === null) return;
  x.consumerOnSignalRead(e);
  let t = x.nextProducerIndex++;
  if ((Gt(x), t < x.producerNode.length && x.producerNode[t] !== e && mt(x))) {
    let n = x.producerNode[t];
    Wt(n, x.producerIndexOfThis[t]);
  }
  x.producerNode[t] !== e &&
    ((x.producerNode[t] = e),
    (x.producerIndexOfThis[t] = mt(x) ? qi(e, x, t) : 0)),
    (x.producerLastReadVersion[t] = e.version);
}
function Ul() {
  Ht++;
}
function Hi(e) {
  if (!(mt(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Ht)) {
    if (!e.producerMustRecompute(e) && !Ut(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = Ht);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = Ht);
  }
}
function $i(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = gt;
  gt = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || Ui(n);
  } finally {
    gt = t;
  }
}
function Bi() {
  return x?.consumerAllowSignalWrites !== !1;
}
function Ui(e) {
  (e.dirty = !0), $i(e), e.consumerMarkedDirty?.(e);
}
function yt(e) {
  return e && (e.nextProducerIndex = 0), D(e);
}
function Bt(e, t) {
  if (
    (D(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (mt(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        Wt(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function Ut(e) {
  Gt(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      o = e.producerLastReadVersion[t];
    if (o !== n.version || (Hi(n), o !== n.version)) return !0;
  }
  return !1;
}
function qt(e) {
  if ((Gt(e), mt(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      Wt(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function qi(e, t, n) {
  if ((Wi(e), e.liveConsumerNode.length === 0 && Gi(e)))
    for (let o = 0; o < e.producerNode.length; o++)
      e.producerIndexOfThis[o] = qi(e.producerNode[o], e, o);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function Wt(e, t) {
  if ((Wi(e), e.liveConsumerNode.length === 1 && Gi(e)))
    for (let o = 0; o < e.producerNode.length; o++)
      Wt(e.producerNode[o], e.producerIndexOfThis[o]);
  let n = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let o = e.liveConsumerIndexOfThis[t],
      r = e.liveConsumerNode[t];
    Gt(r), (r.producerIndexOfThis[o] = t);
  }
}
function mt(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function Gt(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function Wi(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function Gi(e) {
  return e.producerNode !== void 0;
}
function go(e) {
  let t = Object.create(ql);
  t.computation = e;
  let n = () => {
    if ((Hi(t), vt(t), t.value === $t)) throw t.error;
    return t.value;
  };
  return (n[H] = t), n;
}
var fo = Symbol("UNSET"),
  po = Symbol("COMPUTING"),
  $t = Symbol("ERRORED"),
  ql = ne(te({}, Ze), {
    value: fo,
    dirty: !0,
    error: null,
    equal: ji,
    producerMustRecompute(e) {
      return e.value === fo || e.value === po;
    },
    producerRecomputeValue(e) {
      if (e.value === po) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = po;
      let n = yt(e),
        o;
      try {
        o = e.computation();
      } catch (r) {
        (o = $t), (e.error = r);
      } finally {
        Bt(e, n);
      }
      if (t !== fo && t !== $t && o !== $t && e.equal(t, o)) {
        e.value = t;
        return;
      }
      (e.value = o), e.version++;
    },
  });
function Wl() {
  throw new Error();
}
var zi = Wl;
function Zi() {
  zi();
}
function Qi(e) {
  zi = e;
}
var Gl = null;
function Yi(e) {
  let t = Object.create(mo);
  t.value = e;
  let n = () => (vt(t), t.value);
  return (n[H] = t), n;
}
function It(e, t) {
  Bi() || Zi(), e.equal(e.value, t) || ((e.value = t), zl(e));
}
function Ji(e, t) {
  Bi() || Zi(), It(e, t(e.value));
}
var mo = ne(te({}, Ze), { equal: ji, value: void 0 });
function zl(e) {
  e.version++, Ul(), $i(e), Gl?.();
}
function Ki(e, t, n) {
  let o = Object.create(Zl);
  n && (o.consumerAllowSignalWrites = !0), (o.fn = e), (o.schedule = t);
  let r = (c) => {
    o.cleanupFn = c;
  };
  function i(c) {
    return c.fn === null && c.schedule === null;
  }
  function s(c) {
    i(c) ||
      (qt(c),
      c.cleanupFn(),
      (c.fn = null),
      (c.schedule = null),
      (c.cleanupFn = ho));
  }
  let a = () => {
    if (o.fn === null) return;
    if (Bl())
      throw new Error(
        "Schedulers cannot synchronously execute watches while scheduling."
      );
    if (((o.dirty = !1), o.hasRun && !Ut(o))) return;
    o.hasRun = !0;
    let c = yt(o);
    try {
      o.cleanupFn(), (o.cleanupFn = ho), o.fn(r);
    } finally {
      Bt(o, c);
    }
  };
  return (
    (o.ref = {
      notify: () => Ui(o),
      run: a,
      cleanup: () => o.cleanupFn(),
      destroy: () => s(o),
      [H]: o,
    }),
    o.ref
  );
}
var ho = () => {},
  Zl = ne(te({}, Ze), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !1,
    consumerMarkedDirty: (e) => {
      e.schedule !== null && e.schedule(e.ref);
    },
    hasRun: !1,
    cleanupFn: ho,
  });
var Ws = "https://g.co/ng/security#xss",
  I = class extends Error {
    constructor(t, n) {
      super(Ql(t, n)), (this.code = t);
    }
  };
function Ql(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
var jn = Symbol("InputSignalNode#UNSET"),
  Gs = ne(te({}, mo), {
    transformFn: void 0,
    applyValueToInputSignal(e, t) {
      It(e, t);
    },
  });
function zs(e, t) {
  let n = Object.create(Gs);
  (n.value = e), (n.transformFn = t?.transform);
  function o() {
    if ((vt(n), n.value === jn)) throw new I(-950, !1);
    return n.value;
  }
  return (o[H] = n), o;
}
function St(e) {
  return { toString: e }.toString();
}
var zt = "__parameters__";
function Yl(e) {
  return function (...n) {
    if (e) {
      let o = e(...n);
      for (let r in o) this[r] = o[r];
    }
  };
}
function Zs(e, t, n) {
  return St(() => {
    let o = Yl(t);
    function r(...i) {
      if (this instanceof r) return o.apply(this, i), this;
      let s = new r(...i);
      return (a.annotation = s), a;
      function a(c, l, u) {
        let d = c.hasOwnProperty(zt)
          ? c[zt]
          : Object.defineProperty(c, zt, { value: [] })[zt];
        for (; d.length <= u; ) d.push(null);
        return (d[u] = d[u] || []).push(s), c;
      }
    }
    return (
      n && (r.prototype = Object.create(n.prototype)),
      (r.prototype.ngMetadataName = e),
      (r.annotationCls = r),
      r
    );
  });
}
var ve = globalThis;
function N(e) {
  for (let t in e) if (e[t] === N) return t;
  throw Error("Could not find renamed property on target object.");
}
function Jl(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function q(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(q).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function Ao(e, t) {
  return e == null || e === ""
    ? t === null
      ? ""
      : t
    : t == null || t === ""
    ? e
    : e + " " + t;
}
var Kl = N({ __forward_ref__: N });
function Qs(e) {
  return (
    (e.__forward_ref__ = Qs),
    (e.toString = function () {
      return q(this());
    }),
    e
  );
}
function j(e) {
  return Ys(e) ? e() : e;
}
function Ys(e) {
  return (
    typeof e == "function" && e.hasOwnProperty(Kl) && e.__forward_ref__ === Qs
  );
}
function O(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function bm(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Vn(e) {
  return Xi(e, Js) || Xi(e, Ks);
}
function Sm(e) {
  return Vn(e) !== null;
}
function Xi(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function Xl(e) {
  let t = e && (e[Js] || e[Ks]);
  return t || null;
}
function es(e) {
  return e && (e.hasOwnProperty(ts) || e.hasOwnProperty(eu)) ? e[ts] : null;
}
var Js = N({ ɵprov: N }),
  ts = N({ ɵinj: N }),
  Ks = N({ ngInjectableDef: N }),
  eu = N({ ngInjectorDef: N }),
  M = class {
    constructor(t, n) {
      (this._desc = t),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = O({
              token: this,
              providedIn: n.providedIn || "root",
              factory: n.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function Xs(e) {
  return e && !!e.ɵproviders;
}
var tu = N({ ɵcmp: N }),
  nu = N({ ɵdir: N }),
  ou = N({ ɵpipe: N }),
  ru = N({ ɵmod: N }),
  cn = N({ ɵfac: N }),
  Et = N({ __NG_ELEMENT_ID__: N }),
  ns = N({ __NG_ENV_ID__: N });
function Oe(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function iu(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
    ? e.type.name || e.type.toString()
    : Oe(e);
}
function su(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new I(-200, e);
}
function Zr(e, t) {
  throw new I(-201, !1);
}
var E = (function (e) {
    return (
      (e[(e.Default = 0)] = "Default"),
      (e[(e.Host = 1)] = "Host"),
      (e[(e.Self = 2)] = "Self"),
      (e[(e.SkipSelf = 4)] = "SkipSelf"),
      (e[(e.Optional = 8)] = "Optional"),
      e
    );
  })(E || {}),
  Ro;
function ea() {
  return Ro;
}
function $(e) {
  let t = Ro;
  return (Ro = e), t;
}
function ta(e, t, n) {
  let o = Vn(e);
  if (o && o.providedIn == "root")
    return o.value === void 0 ? (o.value = o.factory()) : o.value;
  if (n & E.Optional) return null;
  if (t !== void 0) return t;
  Zr(e, "Injector");
}
var au = {},
  wt = au,
  Oo = "__NG_DI_FLAG__",
  ln = "ngTempTokenPath",
  cu = "ngTokenPath",
  lu = /\n/gm,
  uu = "\u0275",
  os = "__source",
  Xe;
function du() {
  return Xe;
}
function me(e) {
  let t = Xe;
  return (Xe = e), t;
}
function fu(e, t = E.Default) {
  if (Xe === void 0) throw new I(-203, !1);
  return Xe === null
    ? ta(e, void 0, t)
    : Xe.get(e, t & E.Optional ? null : void 0, t);
}
function De(e, t = E.Default) {
  return (ea() || fu)(j(e), t);
}
function w(e, t = E.Default) {
  return De(e, Hn(t));
}
function Hn(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function ko(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let o = j(e[n]);
    if (Array.isArray(o)) {
      if (o.length === 0) throw new I(900, !1);
      let r,
        i = E.Default;
      for (let s = 0; s < o.length; s++) {
        let a = o[s],
          c = pu(a);
        typeof c == "number" ? (c === -1 ? (r = a.token) : (i |= c)) : (r = a);
      }
      t.push(De(r, i));
    } else t.push(De(o));
  }
  return t;
}
function na(e, t) {
  return (e[Oo] = t), (e.prototype[Oo] = t), e;
}
function pu(e) {
  return e[Oo];
}
function hu(e, t, n, o) {
  let r = e[ln];
  throw (
    (t[os] && r.unshift(t[os]),
    (e.message = gu(
      `
` + e.message,
      r,
      n,
      o
    )),
    (e[cu] = r),
    (e[ln] = null),
    e)
  );
}
function gu(e, t, n, o = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == uu
      ? e.slice(2)
      : e;
  let r = q(t);
  if (Array.isArray(t)) r = t.map(q).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : q(a)));
      }
    r = `{${i.join(", ")}}`;
  }
  return `${n}${o ? "(" + o + ")" : ""}[${r}]: ${e.replace(
    lu,
    `
  `
  )}`;
}
var oa = na(Zs("Optional"), 8);
var ra = na(Zs("SkipSelf"), 4);
function ke(e, t) {
  let n = e.hasOwnProperty(cn);
  return n ? e[cn] : null;
}
function mu(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let o = 0; o < e.length; o++) {
    let r = e[o],
      i = t[o];
    if ((n && ((r = n(r)), (i = n(i))), i !== r)) return !1;
  }
  return !0;
}
function vu(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function Qr(e, t) {
  e.forEach((n) => (Array.isArray(n) ? Qr(n, t) : t(n)));
}
function ia(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function un(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function yu(e, t) {
  let n = [];
  for (let o = 0; o < e; o++) n.push(t);
  return n;
}
function Iu(e, t, n, o) {
  let r = e.length;
  if (r == t) e.push(n, o);
  else if (r === 1) e.push(o, e[0]), (e[0] = n);
  else {
    for (r--, e.push(e[r - 1], e[r]); r > t; ) {
      let i = r - 2;
      (e[r] = e[i]), r--;
    }
    (e[t] = n), (e[t + 1] = o);
  }
}
function Yr(e, t, n) {
  let o = xt(e, t);
  return o >= 0 ? (e[o | 1] = n) : ((o = ~o), Iu(e, o, t, n)), o;
}
function vo(e, t) {
  let n = xt(e, t);
  if (n >= 0) return e[n | 1];
}
function xt(e, t) {
  return Du(e, t, 1);
}
function Du(e, t, n) {
  let o = 0,
    r = e.length >> n;
  for (; r !== o; ) {
    let i = o + ((r - o) >> 1),
      s = e[i << n];
    if (t === s) return i << n;
    s > t ? (r = i) : (o = i + 1);
  }
  return ~(r << n);
}
var tt = {},
  V = [],
  dn = new M(""),
  sa = new M("", -1),
  aa = new M(""),
  fn = class {
    get(t, n = wt) {
      if (n === wt) {
        let o = new Error(`NullInjectorError: No provider for ${q(t)}!`);
        throw ((o.name = "NullInjectorError"), o);
      }
      return n;
    }
  },
  ca = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(ca || {}),
  Ct = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(Ct || {}),
  Ee = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.SignalBased = 1)] = "SignalBased"),
      (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      e
    );
  })(Ee || {});
function Eu(e, t, n) {
  let o = e.length;
  for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1) return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
      let i = t.length;
      if (r + i === o || e.charCodeAt(r + i) <= 32) return r;
    }
    n = r + 1;
  }
}
function Po(e, t, n) {
  let o = 0;
  for (; o < n.length; ) {
    let r = n[o];
    if (typeof r == "number") {
      if (r !== 0) break;
      o++;
      let i = n[o++],
        s = n[o++],
        a = n[o++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = r,
        s = n[++o];
      wu(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
  }
  return o;
}
function la(e) {
  return e === 3 || e === 4 || e === 6;
}
function wu(e) {
  return e.charCodeAt(0) === 64;
}
function Mt(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let o = 0; o < t.length; o++) {
        let r = t[o];
        typeof r == "number"
          ? (n = r)
          : n === 0 ||
            (n === -1 || n === 2
              ? rs(e, n, r, null, t[++o])
              : rs(e, n, r, null, null));
      }
    }
  return e;
}
function rs(e, t, n, o, r) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == "number") {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === n) {
      if (o === null) {
        r !== null && (e[i + 1] = r);
        return;
      } else if (o === e[i + 1]) {
        e[i + 2] = r;
        return;
      }
    }
    i++, o !== null && i++, r !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, n),
    o !== null && e.splice(i++, 0, o),
    r !== null && e.splice(i++, 0, r);
}
var ua = "ng-template";
function Cu(e, t, n, o) {
  let r = 0;
  if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
      if (t[r] === "class" && Eu(t[r + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (Jr(e)) return !1;
  if (((r = t.indexOf(1, r)), r > -1)) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function Jr(e) {
  return e.type === 4 && e.value !== ua;
}
function Mu(e, t, n) {
  let o = e.type === 4 && !n ? ua : e.value;
  return t === o;
}
function Nu(e, t, n) {
  let o = 4,
    r = e.attrs,
    i = r !== null ? bu(r) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
      if (!s && !K(o) && !K(c)) return !1;
      if (s && K(c)) continue;
      (s = !1), (o = c | (o & 1));
      continue;
    }
    if (!s)
      if (o & 4) {
        if (
          ((o = 2 | (o & 1)),
          (c !== "" && !Mu(e, c, n)) || (c === "" && t.length === 1))
        ) {
          if (K(o)) return !1;
          s = !0;
        }
      } else if (o & 8) {
        if (r === null || !Cu(e, r, c, n)) {
          if (K(o)) return !1;
          s = !0;
        }
      } else {
        let l = t[++a],
          u = Tu(c, r, Jr(e), n);
        if (u === -1) {
          if (K(o)) return !1;
          s = !0;
          continue;
        }
        if (l !== "") {
          let d;
          if (
            (u > i ? (d = "") : (d = r[u + 1].toLowerCase()), o & 2 && l !== d)
          ) {
            if (K(o)) return !1;
            s = !0;
          }
        }
      }
  }
  return K(o) || s;
}
function K(e) {
  return (e & 1) === 0;
}
function Tu(e, t, n, o) {
  if (t === null) return -1;
  let r = 0;
  if (o || !n) {
    let i = !1;
    for (; r < t.length; ) {
      let s = t[r];
      if (s === e) return r;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++r];
        for (; typeof a == "string"; ) a = t[++r];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          r += 4;
          continue;
        }
      }
      r += i ? 1 : 2;
    }
    return -1;
  } else return Su(t, e);
}
function da(e, t, n = !1) {
  for (let o = 0; o < t.length; o++) if (Nu(e, t[o], n)) return !0;
  return !1;
}
function _u(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function bu(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (la(n)) return t;
  }
  return e.length;
}
function Su(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let o = e[n];
      if (typeof o == "number") return -1;
      if (o === t) return n;
      n++;
    }
  return -1;
}
function xu(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
      for (let r = 0; r < e.length; r++) if (e[r] !== o[r]) continue e;
      return !0;
    }
  }
  return !1;
}
function is(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function Au(e) {
  let t = e[0],
    n = 1,
    o = 2,
    r = "",
    i = !1;
  for (; n < e.length; ) {
    let s = e[n];
    if (typeof s == "string")
      if (o & 2) {
        let a = e[++n];
        r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else o & 8 ? (r += "." + s) : o & 4 && (r += " " + s);
    else
      r !== "" && !K(s) && ((t += is(i, r)), (r = "")),
        (o = s),
        (i = i || !K(o));
    n++;
  }
  return r !== "" && (t += is(i, r)), t;
}
function Ru(e) {
  return e.map(Au).join(",");
}
function Ou(e) {
  let t = [],
    n = [],
    o = 1,
    r = 2;
  for (; o < e.length; ) {
    let i = e[o];
    if (typeof i == "string")
      r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
      if (!K(r)) break;
      r = i;
    }
    o++;
  }
  return { attrs: t, classes: n };
}
function xm(e) {
  return St(() => {
    let t = ga(e),
      n = ne(te({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === ca.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || Ct.Emulated,
        styles: e.styles || V,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    ma(n);
    let o = e.dependencies;
    return (
      (n.directiveDefs = as(o, !1)), (n.pipeDefs = as(o, !0)), (n.id = Fu(n)), n
    );
  });
}
function ku(e) {
  return we(e) || fa(e);
}
function Pu(e) {
  return e !== null;
}
function Am(e) {
  return St(() => ({
    type: e.type,
    bootstrap: e.bootstrap || V,
    declarations: e.declarations || V,
    imports: e.imports || V,
    exports: e.exports || V,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function ss(e, t) {
  if (e == null) return tt;
  let n = {};
  for (let o in e)
    if (e.hasOwnProperty(o)) {
      let r = e[o],
        i,
        s,
        a = Ee.None;
      Array.isArray(r)
        ? ((a = r[0]), (i = r[1]), (s = r[2] ?? i))
        : ((i = r), (s = r)),
        t ? ((n[i] = a !== Ee.None ? [o, a] : o), (t[i] = s)) : (n[i] = o);
    }
  return n;
}
function Rm(e) {
  return St(() => {
    let t = ga(e);
    return ma(t), t;
  });
}
function Om(e) {
  return {
    type: e.type,
    name: e.name,
    factory: null,
    pure: e.pure !== !1,
    standalone: e.standalone === !0,
    onDestroy: e.type.prototype.ngOnDestroy || null,
  };
}
function we(e) {
  return e[tu] || null;
}
function fa(e) {
  return e[nu] || null;
}
function pa(e) {
  return e[ou] || null;
}
function Lu(e) {
  let t = we(e) || fa(e) || pa(e);
  return t !== null ? t.standalone : !1;
}
function ha(e, t) {
  let n = e[ru] || null;
  if (!n && t === !0)
    throw new Error(`Type ${q(e)} does not have '\u0275mod' property.`);
  return n;
}
function ga(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || tt,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || V,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: ss(e.inputs, t),
    outputs: ss(e.outputs),
    debugInfo: null,
  };
}
function ma(e) {
  e.features?.forEach((t) => t(e));
}
function as(e, t) {
  if (!e) return null;
  let n = t ? pa : ku;
  return () => (typeof e == "function" ? e() : e).map((o) => n(o)).filter(Pu);
}
function Fu(e) {
  let t = 0,
    n = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      e.consts,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ].join("|");
  for (let r of n) t = (Math.imul(31, t) + r.charCodeAt(0)) << 0;
  return (t += 2147483648), "c" + t;
}
function ju(e) {
  return { ɵproviders: e };
}
function Vu(...e) {
  return { ɵproviders: va(!0, e), ɵfromNgModule: !0 };
}
function va(e, ...t) {
  let n = [],
    o = new Set(),
    r,
    i = (s) => {
      n.push(s);
    };
  return (
    Qr(t, (s) => {
      let a = s;
      Lo(a, i, [], o) && ((r ||= []), r.push(a));
    }),
    r !== void 0 && ya(r, i),
    n
  );
}
function ya(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: o, providers: r } = e[n];
    Kr(r, (i) => {
      t(i, o);
    });
  }
}
function Lo(e, t, n, o) {
  if (((e = j(e)), !e)) return !1;
  let r = null,
    i = es(e),
    s = !i && we(e);
  if (!i && !s) {
    let c = e.ngModule;
    if (((i = es(c)), i)) r = c;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    r = e;
  }
  let a = o.has(r);
  if (s) {
    if (a) return !1;
    if ((o.add(r), s.dependencies)) {
      let c =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let l of c) Lo(l, t, n, o);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      o.add(r);
      let l;
      try {
        Qr(i.imports, (u) => {
          Lo(u, t, n, o) && ((l ||= []), l.push(u));
        });
      } finally {
      }
      l !== void 0 && ya(l, t);
    }
    if (!a) {
      let l = ke(r) || (() => new r());
      t({ provide: r, useFactory: l, deps: V }, r),
        t({ provide: aa, useValue: r, multi: !0 }, r),
        t({ provide: dn, useValue: () => De(r), multi: !0 }, r);
    }
    let c = i.providers;
    if (c != null && !a) {
      let l = e;
      Kr(c, (u) => {
        t(u, l);
      });
    }
  } else return !1;
  return r !== e && e.providers !== void 0;
}
function Kr(e, t) {
  for (let n of e)
    Xs(n) && (n = n.ɵproviders), Array.isArray(n) ? Kr(n, t) : t(n);
}
var Hu = N({ provide: String, useValue: N });
function Ia(e) {
  return e !== null && typeof e == "object" && Hu in e;
}
function $u(e) {
  return !!(e && e.useExisting);
}
function Bu(e) {
  return !!(e && e.useFactory);
}
function nt(e) {
  return typeof e == "function";
}
function Uu(e) {
  return !!e.useClass;
}
var Da = new M(""),
  en = {},
  qu = {},
  yo;
function Xr() {
  return yo === void 0 && (yo = new fn()), yo;
}
var Ce = class {},
  Nt = class extends Ce {
    get destroyed() {
      return this._destroyed;
    }
    constructor(t, n, o, r) {
      super(),
        (this.parent = n),
        (this.source = o),
        (this.scopes = r),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        jo(t, (s) => this.processProvider(s)),
        this.records.set(sa, Qe(void 0, this)),
        r.has("environment") && this.records.set(Ce, Qe(void 0, this));
      let i = this.records.get(Da);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(aa, V, E.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let t = D(null);
      try {
        for (let o of this._ngOnDestroyHooks) o.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let o of n) o();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          D(t);
      }
    }
    onDestroy(t) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      this.assertNotDestroyed();
      let n = me(this),
        o = $(void 0),
        r;
      try {
        return t();
      } finally {
        me(n), $(o);
      }
    }
    get(t, n = wt, o = E.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(ns))) return t[ns](this);
      o = Hn(o);
      let r,
        i = me(this),
        s = $(void 0);
      try {
        if (!(o & E.SkipSelf)) {
          let c = this.records.get(t);
          if (c === void 0) {
            let l = Qu(t) && Vn(t);
            l && this.injectableDefInScope(l)
              ? (c = Qe(Fo(t), en))
              : (c = null),
              this.records.set(t, c);
          }
          if (c != null) return this.hydrate(t, c);
        }
        let a = o & E.Self ? Xr() : this.parent;
        return (n = o & E.Optional && n === wt ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[ln] = a[ln] || []).unshift(q(t)), i)) throw a;
          return hu(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        $(s), me(i);
      }
    }
    resolveInjectorInitializers() {
      let t = D(null),
        n = me(this),
        o = $(void 0),
        r;
      try {
        let i = this.get(dn, V, E.Self);
        for (let s of i) s();
      } finally {
        me(n), $(o), D(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let o of n.keys()) t.push(q(o));
      return `R3Injector[${t.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new I(205, !1);
    }
    processProvider(t) {
      t = j(t);
      let n = nt(t) ? t : j(t && t.provide),
        o = Gu(t);
      if (!nt(t) && t.multi === !0) {
        let r = this.records.get(n);
        r ||
          ((r = Qe(void 0, en, !0)),
          (r.factory = () => ko(r.multi)),
          this.records.set(n, r)),
          (n = t),
          r.multi.push(t);
      }
      this.records.set(n, o);
    }
    hydrate(t, n) {
      let o = D(null);
      try {
        return (
          n.value === en && ((n.value = qu), (n.value = n.factory())),
          typeof n.value == "object" &&
            n.value &&
            Zu(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        D(o);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = j(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function Fo(e) {
  let t = Vn(e),
    n = t !== null ? t.factory : ke(e);
  if (n !== null) return n;
  if (e instanceof M) throw new I(204, !1);
  if (e instanceof Function) return Wu(e);
  throw new I(204, !1);
}
function Wu(e) {
  if (e.length > 0) throw new I(204, !1);
  let n = Xl(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function Gu(e) {
  if (Ia(e)) return Qe(void 0, e.useValue);
  {
    let t = Ea(e);
    return Qe(t, en);
  }
}
function Ea(e, t, n) {
  let o;
  if (nt(e)) {
    let r = j(e);
    return ke(r) || Fo(r);
  } else if (Ia(e)) o = () => j(e.useValue);
  else if (Bu(e)) o = () => e.useFactory(...ko(e.deps || []));
  else if ($u(e)) o = () => De(j(e.useExisting));
  else {
    let r = j(e && (e.useClass || e.provide));
    if (zu(e)) o = () => new r(...ko(e.deps));
    else return ke(r) || Fo(r);
  }
  return o;
}
function Qe(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function zu(e) {
  return !!e.deps;
}
function Zu(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function Qu(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof M);
}
function jo(e, t) {
  for (let n of e)
    Array.isArray(n) ? jo(n, t) : n && Xs(n) ? jo(n.ɵproviders, t) : t(n);
}
function km(e, t) {
  e instanceof Nt && e.assertNotDestroyed();
  let n,
    o = me(e),
    r = $(void 0);
  try {
    return t();
  } finally {
    me(o), $(r);
  }
}
function wa() {
  return ea() !== void 0 || du() != null;
}
function ei(e) {
  if (!wa()) throw new I(-203, !1);
}
function Yu(e) {
  return typeof e == "function";
}
var pe = 0,
  v = 1,
  m = 2,
  F = 3,
  ee = 4,
  B = 5,
  ot = 6,
  pn = 7,
  P = 8,
  rt = 9,
  ie = 10,
  _ = 11,
  Tt = 12,
  cs = 13,
  ft = 14,
  G = 15,
  Pe = 16,
  Ye = 17,
  de = 18,
  $n = 19,
  Ca = 20,
  ye = 21,
  tn = 22,
  Q = 23,
  S = 25,
  Ma = 1;
var Le = 7,
  hn = 8,
  it = 9,
  L = 10,
  gn = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      e
    );
  })(gn || {});
function Ie(e) {
  return Array.isArray(e) && typeof e[Ma] == "object";
}
function he(e) {
  return Array.isArray(e) && e[Ma] === !0;
}
function ti(e) {
  return (e.flags & 4) !== 0;
}
function Bn(e) {
  return e.componentOffset > -1;
}
function Un(e) {
  return (e.flags & 1) === 1;
}
function Me(e) {
  return !!e.template;
}
function Vo(e) {
  return (e[m] & 512) !== 0;
}
var Ho = class {
  constructor(t, n, o) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = o);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function Na(e, t, n, o) {
  t !== null ? t.applyValueToInputSignal(t, o) : (e[n] = o);
}
function Ju() {
  return Ta;
}
function Ta(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = Xu), Ku;
}
Ju.ngInherit = !0;
function Ku() {
  let e = ba(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === tt) e.previous = t;
    else for (let o in t) n[o] = t[o];
    (e.current = null), this.ngOnChanges(t);
  }
}
function Xu(e, t, n, o, r) {
  let i = this.declaredInputs[o],
    s = ba(e) || ed(e, { previous: tt, current: null }),
    a = s.current || (s.current = {}),
    c = s.previous,
    l = c[i];
  (a[i] = new Ho(l && l.currentValue, n, c === tt)), Na(e, t, r, n);
}
var _a = "__ngSimpleChanges__";
function ba(e) {
  return e[_a] || null;
}
function ed(e, t) {
  return (e[_a] = t);
}
var ls = null;
var oe = function (e, t, n) {
    ls?.(e, t, n);
  },
  Sa = "svg",
  td = "math";
function se(e) {
  for (; Array.isArray(e); ) e = e[pe];
  return e;
}
function xa(e, t) {
  return se(t[e]);
}
function Y(e, t) {
  return se(t[e.index]);
}
function ni(e, t) {
  return e.data[t];
}
function qn(e, t) {
  return e[t];
}
function Se(e, t) {
  let n = t[e];
  return Ie(n) ? n : n[pe];
}
function nd(e) {
  return (e[m] & 4) === 4;
}
function oi(e) {
  return (e[m] & 128) === 128;
}
function od(e) {
  return he(e[F]);
}
function Ne(e, t) {
  return t == null ? null : e[t];
}
function Aa(e) {
  e[Ye] = 0;
}
function Ra(e) {
  e[m] & 1024 || ((e[m] |= 1024), oi(e) && Gn(e));
}
function rd(e, t) {
  for (; e > 0; ) (t = t[ft]), e--;
  return t;
}
function Wn(e) {
  return !!(e[m] & 9216 || e[Q]?.dirty);
}
function $o(e) {
  e[ie].changeDetectionScheduler?.notify(8),
    e[m] & 64 && (e[m] |= 1024),
    Wn(e) && Gn(e);
}
function Gn(e) {
  e[ie].changeDetectionScheduler?.notify(0);
  let t = Fe(e);
  for (; t !== null && !(t[m] & 8192 || ((t[m] |= 8192), !oi(t))); ) t = Fe(t);
}
function Oa(e, t) {
  if ((e[m] & 256) === 256) throw new I(911, !1);
  e[ye] === null && (e[ye] = []), e[ye].push(t);
}
function id(e, t) {
  if (e[ye] === null) return;
  let n = e[ye].indexOf(t);
  n !== -1 && e[ye].splice(n, 1);
}
function Fe(e) {
  let t = e[F];
  return he(t) ? t[F] : t;
}
var y = { lFrame: Ba(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var ka = !1;
function sd() {
  return y.lFrame.elementDepthCount;
}
function ad() {
  y.lFrame.elementDepthCount++;
}
function cd() {
  y.lFrame.elementDepthCount--;
}
function Pa() {
  return y.bindingsEnabled;
}
function La() {
  return y.skipHydrationRootTNode !== null;
}
function ld(e) {
  return y.skipHydrationRootTNode === e;
}
function ud() {
  y.skipHydrationRootTNode = null;
}
function g() {
  return y.lFrame.lView;
}
function T() {
  return y.lFrame.tView;
}
function Pm(e) {
  return (y.lFrame.contextLView = e), e[P];
}
function Lm(e) {
  return (y.lFrame.contextLView = null), e;
}
function k() {
  let e = Fa();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function Fa() {
  return y.lFrame.currentTNode;
}
function dd() {
  let e = y.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function xe(e, t) {
  let n = y.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function ri() {
  return y.lFrame.isParent;
}
function ii() {
  y.lFrame.isParent = !1;
}
function ja() {
  return y.lFrame.contextLView;
}
function Va() {
  return ka;
}
function us(e) {
  ka = e;
}
function pt() {
  let e = y.lFrame,
    t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function fd() {
  return y.lFrame.bindingIndex;
}
function pd(e) {
  return (y.lFrame.bindingIndex = e);
}
function qe() {
  return y.lFrame.bindingIndex++;
}
function si(e) {
  let t = y.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function hd() {
  return y.lFrame.inI18n;
}
function gd(e, t) {
  let n = y.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), Bo(t);
}
function md() {
  return y.lFrame.currentDirectiveIndex;
}
function Bo(e) {
  y.lFrame.currentDirectiveIndex = e;
}
function vd(e) {
  let t = y.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function ai() {
  return y.lFrame.currentQueryIndex;
}
function zn(e) {
  y.lFrame.currentQueryIndex = e;
}
function yd(e) {
  let t = e[v];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[B] : null;
}
function Ha(e, t, n) {
  if (n & E.SkipSelf) {
    let r = t,
      i = e;
    for (; (r = r.parent), r === null && !(n & E.Host); )
      if (((r = yd(i)), r === null || ((i = i[ft]), r.type & 10))) break;
    if (r === null) return !1;
    (t = r), (e = i);
  }
  let o = (y.lFrame = $a());
  return (o.currentTNode = t), (o.lView = e), !0;
}
function ci(e) {
  let t = $a(),
    n = e[v];
  (y.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function $a() {
  let e = y.lFrame,
    t = e === null ? null : e.child;
  return t === null ? Ba(e) : t;
}
function Ba(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function Ua() {
  let e = y.lFrame;
  return (y.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var qa = Ua;
function li() {
  let e = Ua();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function Id(e) {
  return (y.lFrame.contextLView = rd(e, y.lFrame.contextLView))[P];
}
function ae() {
  return y.lFrame.selectedIndex;
}
function je(e) {
  y.lFrame.selectedIndex = e;
}
function Zn() {
  let e = y.lFrame;
  return ni(e.tView, e.selectedIndex);
}
function Fm() {
  y.lFrame.currentNamespace = Sa;
}
function jm() {
  Dd();
}
function Dd() {
  y.lFrame.currentNamespace = null;
}
function Ed() {
  return y.lFrame.currentNamespace;
}
var Wa = !0;
function Qn() {
  return Wa;
}
function Yn(e) {
  Wa = e;
}
function wd(e, t, n) {
  let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype;
  if (o) {
    let s = Ta(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  r && (n.preOrderHooks ??= []).push(0 - e, r),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function Jn(e, t) {
  for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: c,
        ngAfterViewChecked: l,
        ngOnDestroy: u,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      c && (e.viewHooks ??= []).push(-n, c),
      l &&
        ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)),
      u != null && (e.destroyHooks ??= []).push(n, u);
  }
}
function nn(e, t, n) {
  Ga(e, t, 3, n);
}
function on(e, t, n, o) {
  (e[m] & 3) === n && Ga(e, t, n, o);
}
function Io(e, t) {
  let n = e[m];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[m] = n));
}
function Ga(e, t, n, o) {
  let r = o !== void 0 ? e[Ye] & 65535 : 0,
    i = o ?? -1,
    s = t.length - 1,
    a = 0;
  for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
      if (((a = t[c]), o != null && a >= o)) break;
    } else
      t[c] < 0 && (e[Ye] += 65536),
        (a < i || i == -1) &&
          (Cd(e, n, t, c), (e[Ye] = (e[Ye] & 4294901760) + c + 2)),
        c++;
}
function ds(e, t) {
  oe(4, e, t);
  let n = D(null);
  try {
    t.call(e);
  } finally {
    D(n), oe(5, e, t);
  }
}
function Cd(e, t, n, o) {
  let r = n[o] < 0,
    i = n[o + 1],
    s = r ? -n[o] : n[o],
    a = e[s];
  r
    ? e[m] >> 14 < e[Ye] >> 16 &&
      (e[m] & 3) === t &&
      ((e[m] += 16384), ds(a, i))
    : ds(a, i);
}
var et = -1,
  Ve = class {
    constructor(t, n, o) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = n),
        (this.injectImpl = o);
    }
  };
function Md(e) {
  return e instanceof Ve;
}
function Nd(e) {
  return (e.flags & 8) !== 0;
}
function Td(e) {
  return (e.flags & 16) !== 0;
}
var Do = {},
  Uo = class {
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, o) {
      o = Hn(o);
      let r = this.injector.get(t, Do, o);
      return r !== Do || n === Do ? r : this.parentInjector.get(t, n, o);
    }
  };
function za(e) {
  return e !== et;
}
function mn(e) {
  return e & 32767;
}
function _d(e) {
  return e >> 16;
}
function vn(e, t) {
  let n = _d(e),
    o = t;
  for (; n > 0; ) (o = o[ft]), n--;
  return o;
}
var qo = !0;
function yn(e) {
  let t = qo;
  return (qo = e), t;
}
var bd = 256,
  Za = bd - 1,
  Qa = 5,
  Sd = 0,
  re = {};
function xd(e, t, n) {
  let o;
  typeof n == "string"
    ? (o = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(Et) && (o = n[Et]),
    o == null && (o = n[Et] = Sd++);
  let r = o & Za,
    i = 1 << r;
  t.data[e + (r >> Qa)] |= i;
}
function In(e, t) {
  let n = Ya(e, t);
  if (n !== -1) return n;
  let o = t[v];
  o.firstCreatePass &&
    ((e.injectorIndex = t.length),
    Eo(o.data, e),
    Eo(t, null),
    Eo(o.blueprint, null));
  let r = ui(e, t),
    i = e.injectorIndex;
  if (za(r)) {
    let s = mn(r),
      a = vn(r, t),
      c = a[v].data;
    for (let l = 0; l < 8; l++) t[i + l] = a[s + l] | c[s + l];
  }
  return (t[i + 8] = r), i;
}
function Eo(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function Ya(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function ui(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    o = null,
    r = t;
  for (; r !== null; ) {
    if (((o = tc(r)), o === null)) return et;
    if ((n++, (r = r[ft]), o.injectorIndex !== -1))
      return o.injectorIndex | (n << 16);
  }
  return et;
}
function Wo(e, t, n) {
  xd(e, t, n);
}
function Ad(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let n = e.attrs;
  if (n) {
    let o = n.length,
      r = 0;
    for (; r < o; ) {
      let i = n[r];
      if (la(i)) break;
      if (i === 0) r = r + 2;
      else if (typeof i == "number")
        for (r++; r < o && typeof n[r] == "string"; ) r++;
      else {
        if (i === t) return n[r + 1];
        r = r + 2;
      }
    }
  }
  return null;
}
function Ja(e, t, n) {
  if (n & E.Optional || e !== void 0) return e;
  Zr(t, "NodeInjector");
}
function Ka(e, t, n, o) {
  if (
    (n & E.Optional && o === void 0 && (o = null), !(n & (E.Self | E.Host)))
  ) {
    let r = e[rt],
      i = $(void 0);
    try {
      return r ? r.get(t, o, n & E.Optional) : ta(t, o, n & E.Optional);
    } finally {
      $(i);
    }
  }
  return Ja(o, t, n);
}
function Xa(e, t, n, o = E.Default, r) {
  if (e !== null) {
    if (t[m] & 2048 && !(o & E.Self)) {
      let s = Pd(e, t, n, o, re);
      if (s !== re) return s;
    }
    let i = ec(e, t, n, o, re);
    if (i !== re) return i;
  }
  return Ka(t, n, o, r);
}
function ec(e, t, n, o, r) {
  let i = Od(n);
  if (typeof i == "function") {
    if (!Ha(t, e, o)) return o & E.Host ? Ja(r, n, o) : Ka(t, n, o, r);
    try {
      let s;
      if (((s = i(o)), s == null && !(o & E.Optional))) Zr(n);
      else return s;
    } finally {
      qa();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = Ya(e, t),
      c = et,
      l = o & E.Host ? t[G][B] : null;
    for (
      (a === -1 || o & E.SkipSelf) &&
      ((c = a === -1 ? ui(e, t) : t[a + 8]),
      c === et || !ps(o, !1)
        ? (a = -1)
        : ((s = t[v]), (a = mn(c)), (t = vn(c, t))));
      a !== -1;

    ) {
      let u = t[v];
      if (fs(i, a, u.data)) {
        let d = Rd(a, t, n, s, o, l);
        if (d !== re) return d;
      }
      (c = t[a + 8]),
        c !== et && ps(o, t[v].data[a + 8] === l) && fs(i, a, t)
          ? ((s = u), (a = mn(c)), (t = vn(c, t)))
          : (a = -1);
    }
  }
  return r;
}
function Rd(e, t, n, o, r, i) {
  let s = t[v],
    a = s.data[e + 8],
    c = o == null ? Bn(a) && qo : o != s && (a.type & 3) !== 0,
    l = r & E.Host && i === a,
    u = rn(a, s, n, c, l);
  return u !== null ? He(t, s, u, a) : re;
}
function rn(e, t, n, o, r) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    c = e.directiveStart,
    l = e.directiveEnd,
    u = i >> 20,
    d = o ? a : a + u,
    p = r ? a + u : l;
  for (let f = d; f < p; f++) {
    let h = s[f];
    if ((f < c && n === h) || (f >= c && h.type === n)) return f;
  }
  if (r) {
    let f = s[c];
    if (f && Me(f) && f.type === n) return c;
  }
  return null;
}
function He(e, t, n, o) {
  let r = e[n],
    i = t.data;
  if (Md(r)) {
    let s = r;
    s.resolving && su(iu(i[n]));
    let a = yn(s.canSeeViewProviders);
    s.resolving = !0;
    let c,
      l = s.injectImpl ? $(s.injectImpl) : null,
      u = Ha(e, o, E.Default);
    try {
      (r = e[n] = s.factory(void 0, i, e, o)),
        t.firstCreatePass && n >= o.directiveStart && wd(n, i[n], t);
    } finally {
      l !== null && $(l), yn(a), (s.resolving = !1), qa();
    }
  }
  return r;
}
function Od(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(Et) ? e[Et] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & Za : kd) : t;
}
function fs(e, t, n) {
  let o = 1 << e;
  return !!(n[t + (e >> Qa)] & o);
}
function ps(e, t) {
  return !(e & E.Self) && !(e & E.Host && t);
}
var Re = class {
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, o) {
    return Xa(this._tNode, this._lView, t, Hn(o), n);
  }
};
function kd() {
  return new Re(k(), g());
}
function Vm(e) {
  return St(() => {
    let t = e.prototype.constructor,
      n = t[cn] || Go(t),
      o = Object.prototype,
      r = Object.getPrototypeOf(e.prototype).constructor;
    for (; r && r !== o; ) {
      let i = r[cn] || Go(r);
      if (i && i !== n) return i;
      r = Object.getPrototypeOf(r);
    }
    return (i) => new i();
  });
}
function Go(e) {
  return Ys(e)
    ? () => {
        let t = Go(j(e));
        return t && t();
      }
    : ke(e);
}
function Pd(e, t, n, o, r) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[m] & 2048 && !(s[m] & 512); ) {
    let a = ec(i, s, n, o | E.Self, re);
    if (a !== re) return a;
    let c = i.parent;
    if (!c) {
      let l = s[Ca];
      if (l) {
        let u = l.get(n, re, o);
        if (u !== re) return u;
      }
      (c = tc(s)), (s = s[ft]);
    }
    i = c;
  }
  return r;
}
function tc(e) {
  let t = e[v],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[B] : null;
}
function Hm(e) {
  return Ad(k(), e);
}
function hs(e, t = null, n = null, o) {
  let r = nc(e, t, n, o);
  return r.resolveInjectorInitializers(), r;
}
function nc(e, t = null, n = null, o, r = new Set()) {
  let i = [n || V, Vu(e)];
  return (
    (o = o || (typeof e == "object" ? void 0 : q(e))),
    new Nt(i, t || Xr(), o || null, r)
  );
}
var Te = class e {
  static {
    this.THROW_IF_NOT_FOUND = wt;
  }
  static {
    this.NULL = new fn();
  }
  static create(t, n) {
    if (Array.isArray(t)) return hs({ name: "" }, n, t, "");
    {
      let o = t.name ?? "";
      return hs({ name: o }, t.parent, t.providers, o);
    }
  }
  static {
    this.ɵprov = O({ token: e, providedIn: "any", factory: () => De(sa) });
  }
  static {
    this.__NG_ELEMENT_ID__ = -1;
  }
};
var Ld = new M("");
Ld.__NG_ELEMENT_ID__ = (e) => {
  let t = k();
  if (t === null) throw new I(204, !1);
  if (t.type & 2) return t.value;
  if (e & E.Optional) return null;
  throw new I(204, !1);
};
var Fd = "ngOriginalError";
function wo(e) {
  return e[Fd];
}
var oc = !0,
  At = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = jd;
      }
      static {
        this.__NG_ENV_ID__ = (n) => n;
      }
    }
    return e;
  })(),
  zo = class extends At {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return Oa(this._lView, t), () => id(this._lView, t);
    }
  };
function jd() {
  return new zo(g());
}
var Rt = (() => {
  class e {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new Li(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let n = this.taskId++;
      return this.pendingTasks.add(n), n;
    }
    remove(n) {
      this.pendingTasks.delete(n),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
    static {
      this.ɵprov = O({ token: e, providedIn: "root", factory: () => new e() });
    }
  }
  return e;
})();
var Zo = class extends Vt {
    constructor(t = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = t),
        wa() &&
          ((this.destroyRef = w(At, { optional: !0 }) ?? void 0),
          (this.pendingTasks = w(Rt, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = D(null);
      try {
        super.next(t);
      } finally {
        D(n);
      }
    }
    subscribe(t, n, o) {
      let r = t,
        i = n || (() => null),
        s = o;
      if (t && typeof t == "object") {
        let c = t;
        (r = c.next?.bind(c)),
          (i = c.error?.bind(c)),
          (s = c.complete?.bind(c));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        r && (r = this.wrapInTimeout(r)),
        s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: r, error: i, complete: s });
      return t instanceof jt && t.add(a), a;
    }
    wrapInTimeout(t) {
      return (n) => {
        let o = this.pendingTasks?.add();
        setTimeout(() => {
          t(n), o !== void 0 && this.pendingTasks?.remove(o);
        });
      };
    }
  },
  ue = Zo;
function Dn(...e) {}
function rc(e) {
  let t, n;
  function o() {
    e = Dn;
    try {
      n !== void 0 &&
        typeof cancelAnimationFrame == "function" &&
        cancelAnimationFrame(n),
        t !== void 0 && clearTimeout(t);
    } catch {}
  }
  return (
    (t = setTimeout(() => {
      e(), o();
    })),
    typeof requestAnimationFrame == "function" &&
      (n = requestAnimationFrame(() => {
        e(), o();
      })),
    () => o()
  );
}
function gs(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = Dn;
    }
  );
}
var di = "isAngularZone",
  En = di + "_ID",
  Vd = 0,
  W = class e {
    constructor(t) {
      (this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new ue(!1)),
        (this.onMicrotaskEmpty = new ue(!1)),
        (this.onStable = new ue(!1)),
        (this.onError = new ue(!1));
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: o = !1,
        shouldCoalesceRunChangeDetection: r = !1,
        scheduleInRootZone: i = oc,
      } = t;
      if (typeof Zone > "u") throw new I(908, !1);
      Zone.assertZonePatched();
      let s = this;
      (s._nesting = 0),
        (s._outer = s._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
        n &&
          Zone.longStackTraceZoneSpec &&
          (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        (s.shouldCoalesceEventChangeDetection = !r && o),
        (s.shouldCoalesceRunChangeDetection = r),
        (s.callbackScheduled = !1),
        (s.scheduleInRootZone = i),
        Bd(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(di) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new I(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new I(909, !1);
    }
    run(t, n, o) {
      return this._inner.run(t, n, o);
    }
    runTask(t, n, o, r) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + r, t, Hd, Dn, Dn);
      try {
        return i.runTask(s, n, o);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, o) {
      return this._inner.runGuarded(t, n, o);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  Hd = {};
function fi(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function $d(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    rc(() => {
      (e.callbackScheduled = !1),
        Qo(e),
        (e.isCheckStableRunning = !0),
        fi(e),
        (e.isCheckStableRunning = !1);
    });
  }
  e.scheduleInRootZone
    ? Zone.root.run(() => {
        t();
      })
    : e._outer.run(() => {
        t();
      }),
    Qo(e);
}
function Bd(e) {
  let t = () => {
      $d(e);
    },
    n = Vd++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [di]: !0, [En]: n, [En + n]: !0 },
    onInvokeTask: (o, r, i, s, a, c) => {
      if (Ud(c)) return o.invokeTask(i, s, a, c);
      try {
        return ms(e), o.invokeTask(i, s, a, c);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          vs(e);
      }
    },
    onInvoke: (o, r, i, s, a, c, l) => {
      try {
        return ms(e), o.invoke(i, s, a, c, l);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !qd(c) &&
          t(),
          vs(e);
      }
    },
    onHasTask: (o, r, i, s) => {
      o.hasTask(i, s),
        r === i &&
          (s.change == "microTask"
            ? ((e._hasPendingMicrotasks = s.microTask), Qo(e), fi(e))
            : s.change == "macroTask" &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (o, r, i, s) => (
      o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function Qo(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function ms(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function vs(e) {
  e._nesting--, fi(e);
}
var Yo = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new ue()),
      (this.onMicrotaskEmpty = new ue()),
      (this.onStable = new ue()),
      (this.onError = new ue());
  }
  run(t, n, o) {
    return t.apply(n, o);
  }
  runGuarded(t, n, o) {
    return t.apply(n, o);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, o, r) {
    return t.apply(n, o);
  }
};
function Ud(e) {
  return ic(e, "__ignore_ng_zone__");
}
function qd(e) {
  return ic(e, "__scheduler_tick__");
}
function ic(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var _e = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let n = this._findOriginalError(t);
      this._console.error("ERROR", t),
        n && this._console.error("ORIGINAL ERROR", n);
    }
    _findOriginalError(t) {
      let n = t && wo(t);
      for (; n && wo(n); ) n = wo(n);
      return n || null;
    }
  },
  Wd = new M("", {
    providedIn: "root",
    factory: () => {
      let e = w(W),
        t = w(_e);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  }),
  wn = class {
    constructor() {
      (this.destroyed = !1),
        (this.listeners = null),
        (this.errorHandler = w(_e, { optional: !0 })),
        (this.destroyRef = w(At)),
        this.destroyRef.onDestroy(() => {
          (this.destroyed = !0), (this.listeners = null);
        });
    }
    subscribe(t) {
      if (this.destroyed) throw new I(953, !1);
      return (
        (this.listeners ??= []).push(t),
        {
          unsubscribe: () => {
            let n = this.listeners?.indexOf(t);
            n !== void 0 && n !== -1 && this.listeners?.splice(n, 1);
          },
        }
      );
    }
    emit(t) {
      if (this.destroyed) throw new I(953, !1);
      if (this.listeners === null) return;
      let n = D(null);
      try {
        for (let o of this.listeners)
          try {
            o(t);
          } catch (r) {
            this.errorHandler?.handleError(r);
          }
      } finally {
        D(n);
      }
    }
  };
function $m(e) {
  return new wn();
}
function ys(e, t) {
  return zs(e, t);
}
function Gd(e) {
  return zs(jn, e);
}
var Bm = ((ys.required = Gd), ys);
function zd() {
  return ht(k(), g());
}
function ht(e, t) {
  return new Kn(Y(e, t));
}
var Kn = (() => {
  class e {
    constructor(n) {
      this.nativeElement = n;
    }
    static {
      this.__NG_ELEMENT_ID__ = zd;
    }
  }
  return e;
})();
function sc(e) {
  return e instanceof Kn ? e.nativeElement : e;
}
function Zd() {
  return this._results[Symbol.iterator]();
}
var Jo = class e {
  get changes() {
    return (this._changes ??= new ue());
  }
  constructor(t = !1) {
    (this._emitDistinctChangesOnly = t),
      (this.dirty = !0),
      (this._onDirty = void 0),
      (this._results = []),
      (this._changesDetected = !1),
      (this._changes = void 0),
      (this.length = 0),
      (this.first = void 0),
      (this.last = void 0);
    let n = e.prototype;
    n[Symbol.iterator] || (n[Symbol.iterator] = Zd);
  }
  get(t) {
    return this._results[t];
  }
  map(t) {
    return this._results.map(t);
  }
  filter(t) {
    return this._results.filter(t);
  }
  find(t) {
    return this._results.find(t);
  }
  reduce(t, n) {
    return this._results.reduce(t, n);
  }
  forEach(t) {
    this._results.forEach(t);
  }
  some(t) {
    return this._results.some(t);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(t, n) {
    this.dirty = !1;
    let o = vu(t);
    (this._changesDetected = !mu(this._results, o, n)) &&
      ((this._results = o),
      (this.length = o.length),
      (this.last = o[this.length - 1]),
      (this.first = o[0]));
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.emit(this);
  }
  onDirty(t) {
    this._onDirty = t;
  }
  setDirty() {
    (this.dirty = !0), this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
};
function ac(e) {
  return (e.flags & 128) === 128;
}
var cc = new Map(),
  Qd = 0;
function Yd() {
  return Qd++;
}
function Jd(e) {
  cc.set(e[$n], e);
}
function Ko(e) {
  cc.delete(e[$n]);
}
var Is = "__ngContext__";
function be(e, t) {
  Ie(t) ? ((e[Is] = t[$n]), Jd(t)) : (e[Is] = t);
}
function lc(e) {
  return dc(e[Tt]);
}
function uc(e) {
  return dc(e[ee]);
}
function dc(e) {
  for (; e !== null && !he(e); ) e = e[ee];
  return e;
}
var Xo;
function Um(e) {
  Xo = e;
}
function fc() {
  if (Xo !== void 0) return Xo;
  if (typeof document < "u") return document;
  throw new I(210, !1);
}
var qm = new M("", { providedIn: "root", factory: () => Kd }),
  Kd = "ng",
  Xd = new M(""),
  ef = new M("", { providedIn: "platform", factory: () => "unknown" });
var Wm = new M(""),
  Gm = new M("", {
    providedIn: "root",
    factory: () =>
      fc().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  }),
  tf = {
    breakpoints: [
      16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
      3840,
    ],
    placeholderResolution: 30,
    disableImageSizeWarning: !1,
    disableImageLazyLoadWarning: !1,
  },
  zm = new M("", { providedIn: "root", factory: () => tf });
var nf = "h",
  of = "b";
var rf = () => null;
function pi(e, t, n = !1) {
  return rf(e, t, n);
}
var pc = !1,
  sf = new M("", { providedIn: "root", factory: () => pc });
var Zt;
function af() {
  if (Zt === void 0 && ((Zt = null), ve.trustedTypes))
    try {
      Zt = ve.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return Zt;
}
function Xn(e) {
  return af()?.createHTML(e) || e;
}
var Qt;
function hc() {
  if (Qt === void 0 && ((Qt = null), ve.trustedTypes))
    try {
      Qt = ve.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return Qt;
}
function Ds(e) {
  return hc()?.createHTML(e) || e;
}
function Es(e) {
  return hc()?.createScriptURL(e) || e;
}
var fe = class {
    constructor(t) {
      this.changingThisBreaksApplicationSecurity = t;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ws})`;
    }
  },
  er = class extends fe {
    getTypeName() {
      return "HTML";
    }
  },
  tr = class extends fe {
    getTypeName() {
      return "Style";
    }
  },
  nr = class extends fe {
    getTypeName() {
      return "Script";
    }
  },
  or = class extends fe {
    getTypeName() {
      return "URL";
    }
  },
  rr = class extends fe {
    getTypeName() {
      return "ResourceURL";
    }
  };
function Ot(e) {
  return e instanceof fe ? e.changingThisBreaksApplicationSecurity : e;
}
function hi(e, t) {
  let n = cf(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Ws})`);
  }
  return n === t;
}
function cf(e) {
  return (e instanceof fe && e.getTypeName()) || null;
}
function Zm(e) {
  return new er(e);
}
function Qm(e) {
  return new tr(e);
}
function Ym(e) {
  return new nr(e);
}
function Jm(e) {
  return new or(e);
}
function Km(e) {
  return new rr(e);
}
function lf(e) {
  let t = new sr(e);
  return uf() ? new ir(t) : t;
}
var ir = class {
    constructor(t) {
      this.inertDocumentHelper = t;
    }
    getInertBodyElement(t) {
      t = "<body><remove></remove>" + t;
      try {
        let n = new window.DOMParser().parseFromString(Xn(t), "text/html").body;
        return n === null
          ? this.inertDocumentHelper.getInertBodyElement(t)
          : (n.firstChild?.remove(), n);
      } catch {
        return null;
      }
    }
  },
  sr = class {
    constructor(t) {
      (this.defaultDoc = t),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            "sanitization-inert"
          ));
    }
    getInertBodyElement(t) {
      let n = this.inertDocument.createElement("template");
      return (n.innerHTML = Xn(t)), n;
    }
  };
function uf() {
  try {
    return !!new window.DOMParser().parseFromString(Xn(""), "text/html");
  } catch {
    return !1;
  }
}
var df = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function gc(e) {
  return (e = String(e)), e.match(df) ? e : "unsafe:" + e;
}
function ge(e) {
  let t = {};
  for (let n of e.split(",")) t[n] = !0;
  return t;
}
function kt(...e) {
  let t = {};
  for (let n of e) for (let o in n) n.hasOwnProperty(o) && (t[o] = !0);
  return t;
}
var mc = ge("area,br,col,hr,img,wbr"),
  vc = ge("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
  yc = ge("rp,rt"),
  ff = kt(yc, vc),
  pf = kt(
    vc,
    ge(
      "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
    )
  ),
  hf = kt(
    yc,
    ge(
      "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
    )
  ),
  ws = kt(mc, pf, hf, ff),
  Ic = ge("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  gf = ge(
    "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
  ),
  mf = ge(
    "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
  ),
  vf = kt(Ic, gf, mf),
  yf = ge("script,style,template"),
  ar = class {
    constructor() {
      (this.sanitizedSomething = !1), (this.buf = []);
    }
    sanitizeChildren(t) {
      let n = t.firstChild,
        o = !0,
        r = [];
      for (; n; ) {
        if (
          (n.nodeType === Node.ELEMENT_NODE
            ? (o = this.startElement(n))
            : n.nodeType === Node.TEXT_NODE
            ? this.chars(n.nodeValue)
            : (this.sanitizedSomething = !0),
          o && n.firstChild)
        ) {
          r.push(n), (n = Ef(n));
          continue;
        }
        for (; n; ) {
          n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
          let i = Df(n);
          if (i) {
            n = i;
            break;
          }
          n = r.pop();
        }
      }
      return this.buf.join("");
    }
    startElement(t) {
      let n = Cs(t).toLowerCase();
      if (!ws.hasOwnProperty(n))
        return (this.sanitizedSomething = !0), !yf.hasOwnProperty(n);
      this.buf.push("<"), this.buf.push(n);
      let o = t.attributes;
      for (let r = 0; r < o.length; r++) {
        let i = o.item(r),
          s = i.name,
          a = s.toLowerCase();
        if (!vf.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let c = i.value;
        Ic[a] && (c = gc(c)), this.buf.push(" ", s, '="', Ms(c), '"');
      }
      return this.buf.push(">"), !0;
    }
    endElement(t) {
      let n = Cs(t).toLowerCase();
      ws.hasOwnProperty(n) &&
        !mc.hasOwnProperty(n) &&
        (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
    }
    chars(t) {
      this.buf.push(Ms(t));
    }
  };
function If(e, t) {
  return (
    (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY
  );
}
function Df(e) {
  let t = e.nextSibling;
  if (t && e !== t.previousSibling) throw Dc(t);
  return t;
}
function Ef(e) {
  let t = e.firstChild;
  if (t && If(e, t)) throw Dc(t);
  return t;
}
function Cs(e) {
  let t = e.nodeName;
  return typeof t == "string" ? t : "FORM";
}
function Dc(e) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`
  );
}
var wf = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  Cf = /([^\#-~ |!])/g;
function Ms(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(wf, function (t) {
      let n = t.charCodeAt(0),
        o = t.charCodeAt(1);
      return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";";
    })
    .replace(Cf, function (t) {
      return "&#" + t.charCodeAt(0) + ";";
    })
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var Yt;
function Mf(e, t) {
  let n = null;
  try {
    Yt = Yt || lf(e);
    let o = t ? String(t) : "";
    n = Yt.getInertBodyElement(o);
    let r = 5,
      i = o;
    do {
      if (r === 0)
        throw new Error(
          "Failed to sanitize html because the input is unstable"
        );
      r--, (o = i), (i = n.innerHTML), (n = Yt.getInertBodyElement(o));
    } while (o !== i);
    let a = new ar().sanitizeChildren(Ns(n) || n);
    return Xn(a);
  } finally {
    if (n) {
      let o = Ns(n) || n;
      for (; o.firstChild; ) o.firstChild.remove();
    }
  }
}
function Ns(e) {
  return "content" in e && Nf(e) ? e.content : null;
}
function Nf(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}
var eo = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})(eo || {});
function Xm(e) {
  let t = gi();
  return t
    ? Ds(t.sanitize(eo.HTML, e) || "")
    : hi(e, "HTML")
    ? Ds(Ot(e))
    : Mf(fc(), Oe(e));
}
function Tf(e) {
  let t = gi();
  return t ? t.sanitize(eo.URL, e) || "" : hi(e, "URL") ? Ot(e) : gc(Oe(e));
}
function _f(e) {
  let t = gi();
  if (t) return Es(t.sanitize(eo.RESOURCE_URL, e) || "");
  if (hi(e, "ResourceURL")) return Es(Ot(e));
  throw new I(904, !1);
}
function bf(e, t) {
  return (t === "src" &&
    (e === "embed" ||
      e === "frame" ||
      e === "iframe" ||
      e === "media" ||
      e === "script")) ||
    (t === "href" && (e === "base" || e === "link"))
    ? _f
    : Tf;
}
function ev(e, t, n) {
  return bf(t, n)(e);
}
function gi() {
  let e = g();
  return e && e[ie].sanitizer;
}
var Sf = /^>|^->|<!--|-->|--!>|<!-$/g,
  xf = /(<|>)/g,
  Af = "\u200B$1\u200B";
function Rf(e) {
  return e.replace(Sf, (t) => t.replace(xf, Af));
}
function tv(e) {
  return e.ownerDocument;
}
function Ec(e) {
  return e instanceof Function ? e() : e;
}
function wc(e) {
  return (e ?? w(Te)).get(ef) === "browser";
}
var cr = (function (e) {
    return (
      (e[(e.Important = 1)] = "Important"),
      (e[(e.DashCase = 2)] = "DashCase"),
      e
    );
  })(cr || {}),
  Of;
function mi(e, t) {
  return Of(e, t);
}
function Je(e, t, n, o, r) {
  if (o != null) {
    let i,
      s = !1;
    he(o) ? (i = o) : Ie(o) && ((s = !0), (o = o[pe]));
    let a = se(o);
    e === 0 && n !== null
      ? r == null
        ? _c(t, n, a)
        : Cn(t, n, a, r || null, !0)
      : e === 1 && n !== null
      ? Cn(t, n, a, r || null, !0)
      : e === 2
      ? zf(t, a, s)
      : e === 3 && t.destroyNode(a),
      i != null && Qf(t, e, i, n, r);
  }
}
function kf(e, t) {
  return e.createText(t);
}
function Pf(e, t, n) {
  e.setValue(t, n);
}
function Lf(e, t) {
  return e.createComment(Rf(t));
}
function Cc(e, t, n) {
  return e.createElement(t, n);
}
function Ff(e, t) {
  Mc(e, t), (t[pe] = null), (t[B] = null);
}
function jf(e, t, n, o, r, i) {
  (o[pe] = r), (o[B] = t), oo(e, o, n, 1, r, i);
}
function Mc(e, t) {
  t[ie].changeDetectionScheduler?.notify(9), oo(e, t, t[_], 2, null, null);
}
function Vf(e) {
  let t = e[Tt];
  if (!t) return Co(e[v], e);
  for (; t; ) {
    let n = null;
    if (Ie(t)) n = t[Tt];
    else {
      let o = t[L];
      o && (n = o);
    }
    if (!n) {
      for (; t && !t[ee] && t !== e; ) Ie(t) && Co(t[v], t), (t = t[F]);
      t === null && (t = e), Ie(t) && Co(t[v], t), (n = t && t[ee]);
    }
    t = n;
  }
}
function Hf(e, t, n, o) {
  let r = L + o,
    i = n.length;
  o > 0 && (n[r - 1][ee] = t),
    o < i - L ? ((t[ee] = n[r]), ia(n, L + o, t)) : (n.push(t), (t[ee] = null)),
    (t[F] = n);
  let s = t[Pe];
  s !== null && n !== s && Nc(s, t);
  let a = t[de];
  a !== null && a.insertView(e), $o(t), (t[m] |= 128);
}
function Nc(e, t) {
  let n = e[it],
    o = t[F];
  if (Ie(o)) e[m] |= gn.HasTransplantedViews;
  else {
    let r = o[F][G];
    t[G] !== r && (e[m] |= gn.HasTransplantedViews);
  }
  n === null ? (e[it] = [t]) : n.push(t);
}
function vi(e, t) {
  let n = e[it],
    o = n.indexOf(t);
  n.splice(o, 1);
}
function _t(e, t) {
  if (e.length <= L) return;
  let n = L + t,
    o = e[n];
  if (o) {
    let r = o[Pe];
    r !== null && r !== e && vi(r, o), t > 0 && (e[n - 1][ee] = o[ee]);
    let i = un(e, L + t);
    Ff(o[v], o);
    let s = i[de];
    s !== null && s.detachView(i[v]),
      (o[F] = null),
      (o[ee] = null),
      (o[m] &= -129);
  }
  return o;
}
function to(e, t) {
  if (!(t[m] & 256)) {
    let n = t[_];
    n.destroyNode && oo(e, t, n, 3, null, null), Vf(t);
  }
}
function Co(e, t) {
  if (t[m] & 256) return;
  let n = D(null);
  try {
    (t[m] &= -129),
      (t[m] |= 256),
      t[Q] && qt(t[Q]),
      Bf(e, t),
      $f(e, t),
      t[v].type === 1 && t[_].destroy();
    let o = t[Pe];
    if (o !== null && he(t[F])) {
      o !== t[F] && vi(o, t);
      let r = t[de];
      r !== null && r.detachView(e);
    }
    Ko(t);
  } finally {
    D(n);
  }
}
function $f(e, t) {
  let n = e.cleanup,
    o = t[pn];
  if (n !== null)
    for (let i = 0; i < n.length - 1; i += 2)
      if (typeof n[i] == "string") {
        let s = n[i + 3];
        s >= 0 ? o[s]() : o[-s].unsubscribe(), (i += 2);
      } else {
        let s = o[n[i + 1]];
        n[i].call(s);
      }
  o !== null && (t[pn] = null);
  let r = t[ye];
  if (r !== null) {
    t[ye] = null;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      s();
    }
  }
}
function Bf(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
      let r = t[n[o]];
      if (!(r instanceof Ve)) {
        let i = n[o + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = r[i[s]],
              c = i[s + 1];
            oe(4, a, c);
            try {
              c.call(a);
            } finally {
              oe(5, a, c);
            }
          }
        else {
          oe(4, r, i);
          try {
            i.call(r);
          } finally {
            oe(5, r, i);
          }
        }
      }
    }
}
function Tc(e, t, n) {
  return Uf(e, t.parent, n);
}
function Uf(e, t, n) {
  let o = t;
  for (; o !== null && o.type & 168; ) (t = o), (o = t.parent);
  if (o === null) return n[pe];
  {
    let { componentOffset: r } = o;
    if (r > -1) {
      let { encapsulation: i } = e.data[o.directiveStart + r];
      if (i === Ct.None || i === Ct.Emulated) return null;
    }
    return Y(o, n);
  }
}
function Cn(e, t, n, o, r) {
  e.insertBefore(t, n, o, r);
}
function _c(e, t, n) {
  e.appendChild(t, n);
}
function Ts(e, t, n, o, r) {
  o !== null ? Cn(e, t, n, o, r) : _c(e, t, n);
}
function bc(e, t) {
  return e.parentNode(t);
}
function qf(e, t) {
  return e.nextSibling(t);
}
function Sc(e, t, n) {
  return Gf(e, t, n);
}
function Wf(e, t, n) {
  return e.type & 40 ? Y(e, n) : null;
}
var Gf = Wf,
  _s;
function no(e, t, n, o) {
  let r = Tc(e, o, t),
    i = t[_],
    s = o.parent || t[B],
    a = Sc(s, o, t);
  if (r != null)
    if (Array.isArray(n))
      for (let c = 0; c < n.length; c++) Ts(i, r, n[c], a, !1);
    else Ts(i, r, n, a, !1);
  _s !== void 0 && _s(i, o, t, n, r);
}
function Dt(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return Y(t, e);
    if (n & 4) return lr(-1, e[t.index]);
    if (n & 8) {
      let o = t.child;
      if (o !== null) return Dt(e, o);
      {
        let r = e[t.index];
        return he(r) ? lr(-1, r) : se(r);
      }
    } else {
      if (n & 128) return Dt(e, t.next);
      if (n & 32) return mi(t, e)() || se(e[t.index]);
      {
        let o = xc(e, t);
        if (o !== null) {
          if (Array.isArray(o)) return o[0];
          let r = Fe(e[G]);
          return Dt(r, o);
        } else return Dt(e, t.next);
      }
    }
  }
  return null;
}
function xc(e, t) {
  if (t !== null) {
    let o = e[G][B],
      r = t.projection;
    return o.projection[r];
  }
  return null;
}
function lr(e, t) {
  let n = L + e + 1;
  if (n < t.length) {
    let o = t[n],
      r = o[v].firstChild;
    if (r !== null) return Dt(o, r);
  }
  return t[Le];
}
function zf(e, t, n) {
  e.removeChild(null, t, n);
}
function yi(e, t, n, o, r, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = o[n.index],
      c = n.type;
    if (
      (s && t === 0 && (a && be(se(a), o), (n.flags |= 2)),
      (n.flags & 32) !== 32)
    )
      if (c & 8) yi(e, t, n.child, o, r, i, !1), Je(t, e, r, a, i);
      else if (c & 32) {
        let l = mi(n, o),
          u;
        for (; (u = l()); ) Je(t, e, r, u, i);
        Je(t, e, r, a, i);
      } else c & 16 ? Ac(e, t, o, n, r, i) : Je(t, e, r, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function oo(e, t, n, o, r, i) {
  yi(n, o, e.firstChild, t, r, i, !1);
}
function Zf(e, t, n) {
  let o = t[_],
    r = Tc(e, n, t),
    i = n.parent || t[B],
    s = Sc(i, n, t);
  Ac(o, 0, t, n, r, s);
}
function Ac(e, t, n, o, r, i) {
  let s = n[G],
    c = s[B].projection[o.projection];
  if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
      let u = c[l];
      Je(t, e, r, u, i);
    }
  else {
    let l = c,
      u = s[F];
    ac(o) && (l.flags |= 128), yi(e, t, l, u, r, i, !0);
  }
}
function Qf(e, t, n, o, r) {
  let i = n[Le],
    s = se(n);
  i !== s && Je(t, e, o, i, r);
  for (let a = L; a < n.length; a++) {
    let c = n[a];
    oo(c[v], c, e, t, o, i);
  }
}
function Yf(e, t, n, o, r) {
  if (t) r ? e.addClass(n, o) : e.removeClass(n, o);
  else {
    let i = o.indexOf("-") === -1 ? void 0 : cr.DashCase;
    r == null
      ? e.removeStyle(n, o, i)
      : (typeof r == "string" &&
          r.endsWith("!important") &&
          ((r = r.slice(0, -10)), (i |= cr.Important)),
        e.setStyle(n, o, r, i));
  }
}
function Jf(e, t, n) {
  e.setAttribute(t, "style", n);
}
function Rc(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function Oc(e, t, n) {
  let { mergedAttrs: o, classes: r, styles: i } = n;
  o !== null && Po(e, t, o),
    r !== null && Rc(e, t, r),
    i !== null && Jf(e, t, i);
}
var Z = {};
function nv(e = 1) {
  kc(T(), g(), ae() + e, !1);
}
function kc(e, t, n, o) {
  if (!o)
    if ((t[m] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && nn(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && on(t, i, 0, n);
    }
  je(n);
}
function ro(e, t = E.Default) {
  let n = g();
  if (n === null) return De(e, t);
  let o = k();
  return Xa(o, n, j(e), t);
}
function ov() {
  let e = "invalid";
  throw new Error(e);
}
function Pc(e, t, n, o, r, i) {
  let s = D(null);
  try {
    let a = null;
    r & Ee.SignalBased && (a = t[o][H]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      r & Ee.HasDecoratorInputTransform &&
        (i = e.inputTransforms[o].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, o) : Na(t, a, o, i);
  } finally {
    D(s);
  }
}
function Kf(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (r < 0) je(~r);
        else {
          let i = r,
            s = n[++o],
            a = n[++o];
          gd(s, i);
          let c = t[i];
          a(2, c);
        }
      }
    } finally {
      je(-1);
    }
}
function io(e, t, n, o, r, i, s, a, c, l, u) {
  let d = t.blueprint.slice();
  return (
    (d[pe] = r),
    (d[m] = o | 4 | 128 | 8 | 64),
    (l !== null || (e && e[m] & 2048)) && (d[m] |= 2048),
    Aa(d),
    (d[F] = d[ft] = e),
    (d[P] = n),
    (d[ie] = s || (e && e[ie])),
    (d[_] = a || (e && e[_])),
    (d[rt] = c || (e && e[rt]) || null),
    (d[B] = i),
    (d[$n] = Yd()),
    (d[ot] = u),
    (d[Ca] = l),
    (d[G] = t.type == 2 ? e[G] : d),
    d
  );
}
function We(e, t, n, o, r) {
  let i = e.data[t];
  if (i === null) (i = Xf(e, t, n, o, r)), hd() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = o), (i.attrs = r);
    let s = dd();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return xe(i, !0), i;
}
function Xf(e, t, n, o, r) {
  let i = Fa(),
    s = ri(),
    a = s ? i : i && i.parent,
    c = (e.data[t] = ip(e, a, n, t, o, r));
  return (
    e.firstChild === null && (e.firstChild = c),
    i !== null &&
      (s
        ? i.child == null && c.parent !== null && (i.child = c)
        : i.next === null && ((i.next = c), (c.prev = i))),
    c
  );
}
function Lc(e, t, n, o) {
  if (n === 0) return -1;
  let r = t.length;
  for (let i = 0; i < n; i++) t.push(o), e.blueprint.push(o), e.data.push(null);
  return r;
}
function Fc(e, t, n, o, r) {
  let i = ae(),
    s = o & 2;
  try {
    je(-1), s && t.length > S && kc(e, t, S, !1), oe(s ? 2 : 0, r), n(o, r);
  } finally {
    je(i), oe(s ? 3 : 1, r);
  }
}
function Ii(e, t, n) {
  if (ti(t)) {
    let o = D(null);
    try {
      let r = t.directiveStart,
        i = t.directiveEnd;
      for (let s = r; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let c = n[s];
          a.contentQueries(1, c, s);
        }
      }
    } finally {
      D(o);
    }
  }
}
function Di(e, t, n) {
  Pa() && (dp(e, t, n, Y(n, t)), (n.flags & 64) === 64 && Hc(e, t, n));
}
function Ei(e, t, n = Y) {
  let o = t.localNames;
  if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
      let s = o[i + 1],
        a = s === -1 ? n(t, e) : e[s];
      e[r++] = a;
    }
  }
}
function jc(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = wi(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id
      ))
    : t;
}
function wi(e, t, n, o, r, i, s, a, c, l, u) {
  let d = S + o,
    p = d + r,
    f = ep(d, p),
    h = typeof l == "function" ? l() : l;
  return (f[v] = {
    type: e,
    blueprint: f,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: f.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: p,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: c,
    consts: h,
    incompleteFirstPass: !1,
    ssrId: u,
  });
}
function ep(e, t) {
  let n = [];
  for (let o = 0; o < t; o++) n.push(o < e ? null : Z);
  return n;
}
function tp(e, t, n, o) {
  let i = o.get(sf, pc) || n === Ct.ShadowDom,
    s = e.selectRootElement(t, i);
  return np(s), s;
}
function np(e) {
  op(e);
}
var op = () => null;
function rp(e, t, n, o) {
  let r = Uc(t);
  r.push(n), e.firstCreatePass && qc(e).push(o, r.length - 1);
}
function ip(e, t, n, o, r, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    La() && (a |= 128),
    {
      type: n,
      index: o,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: r,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function bs(e, t, n, o, r) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    o ??= {};
    let a,
      c = Ee.None;
    Array.isArray(s) ? ((a = s[0]), (c = s[1])) : (a = s);
    let l = i;
    if (r !== null) {
      if (!r.hasOwnProperty(i)) continue;
      l = r[i];
    }
    e === 0 ? Ss(o, n, l, a, c) : Ss(o, n, l, a);
  }
  return o;
}
function Ss(e, t, n, o, r) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, o) : (i = e[n] = [t, o]),
    r !== void 0 && i.push(r);
}
function sp(e, t, n) {
  let o = t.directiveStart,
    r = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    c = null,
    l = null;
  for (let u = o; u < r; u++) {
    let d = i[u],
      p = n ? n.get(d) : null,
      f = p ? p.inputs : null,
      h = p ? p.outputs : null;
    (c = bs(0, d.inputs, u, c, f)), (l = bs(1, d.outputs, u, l, h));
    let C = c !== null && s !== null && !Jr(t) ? wp(c, u, s) : null;
    a.push(C);
  }
  c !== null &&
    (c.hasOwnProperty("class") && (t.flags |= 8),
    c.hasOwnProperty("style") && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = c),
    (t.outputs = l);
}
function ap(e) {
  return e === "class"
    ? "className"
    : e === "for"
    ? "htmlFor"
    : e === "formaction"
    ? "formAction"
    : e === "innerHtml"
    ? "innerHTML"
    : e === "readonly"
    ? "readOnly"
    : e === "tabindex"
    ? "tabIndex"
    : e;
}
function Ci(e, t, n, o, r, i, s, a) {
  let c = Y(t, n),
    l = t.inputs,
    u;
  !a && l != null && (u = l[o])
    ? (Ni(e, n, u, o, r), Bn(t) && cp(n, t.index))
    : t.type & 3
    ? ((o = ap(o)),
      (r = s != null ? s(r, t.value || "", o) : r),
      i.setProperty(c, o, r))
    : t.type & 12;
}
function cp(e, t) {
  let n = Se(t, e);
  n[m] & 16 || (n[m] |= 64);
}
function Mi(e, t, n, o) {
  if (Pa()) {
    let r = o === null ? null : { "": -1 },
      i = pp(e, n),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && Vc(e, t, n, s, r, a),
      r && hp(n, o, r);
  }
  n.mergedAttrs = Mt(n.mergedAttrs, n.attrs);
}
function Vc(e, t, n, o, r, i) {
  for (let l = 0; l < o.length; l++) Wo(In(n, t), e, o[l].type);
  mp(n, e.data.length, o.length);
  for (let l = 0; l < o.length; l++) {
    let u = o[l];
    u.providersResolver && u.providersResolver(u);
  }
  let s = !1,
    a = !1,
    c = Lc(e, t, o.length, null);
  for (let l = 0; l < o.length; l++) {
    let u = o[l];
    (n.mergedAttrs = Mt(n.mergedAttrs, u.hostAttrs)),
      vp(e, n, t, c, u),
      gp(c, u, r),
      u.contentQueries !== null && (n.flags |= 4),
      (u.hostBindings !== null || u.hostAttrs !== null || u.hostVars !== 0) &&
        (n.flags |= 64);
    let d = u.type.prototype;
    !s &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
      !a &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (a = !0)),
      c++;
  }
  sp(e, n, i);
}
function lp(e, t, n, o, r) {
  let i = r.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    up(s) != a && s.push(a), s.push(n, o, i);
  }
}
function up(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function dp(e, t, n, o) {
  let r = n.directiveStart,
    i = n.directiveEnd;
  Bn(n) && yp(t, n, e.data[r + n.componentOffset]),
    e.firstCreatePass || In(n, t),
    be(o, t);
  let s = n.initialInputs;
  for (let a = r; a < i; a++) {
    let c = e.data[a],
      l = He(t, e, a, n);
    if ((be(l, t), s !== null && Ep(t, a - r, l, c, n, s), Me(c))) {
      let u = Se(n.index, t);
      u[P] = He(t, e, a, n);
    }
  }
}
function Hc(e, t, n) {
  let o = n.directiveStart,
    r = n.directiveEnd,
    i = n.index,
    s = md();
  try {
    je(i);
    for (let a = o; a < r; a++) {
      let c = e.data[a],
        l = t[a];
      Bo(a),
        (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) &&
          fp(c, l);
    }
  } finally {
    je(-1), Bo(s);
  }
}
function fp(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function pp(e, t) {
  let n = e.directiveRegistry,
    o = null,
    r = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (da(t, s.selectors, !1))
        if ((o || (o = []), Me(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (r = r || new Map()),
              s.findHostDirectiveDefs(s, a, r),
              o.unshift(...a, s);
            let c = a.length;
            ur(e, t, c);
          } else o.unshift(s), ur(e, t, 0);
        else
          (r = r || new Map()), s.findHostDirectiveDefs?.(s, o, r), o.push(s);
    }
  return o === null ? null : [o, r];
}
function ur(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function hp(e, t, n) {
  if (t) {
    let o = (e.localNames = []);
    for (let r = 0; r < t.length; r += 2) {
      let i = n[t[r + 1]];
      if (i == null) throw new I(-301, !1);
      o.push(t[r], i);
    }
  }
}
function gp(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let o = 0; o < t.exportAs.length; o++) n[t.exportAs[o]] = e;
    Me(t) && (n[""] = e);
  }
}
function mp(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function vp(e, t, n, o, r) {
  e.data[o] = r;
  let i = r.factory || (r.factory = ke(r.type, !0)),
    s = new Ve(i, Me(r), ro);
  (e.blueprint[o] = s), (n[o] = s), lp(e, t, o, Lc(e, n, r.hostVars, Z), r);
}
function yp(e, t, n) {
  let o = Y(t, e),
    r = jc(n),
    i = e[ie].rendererFactory,
    s = 16;
  n.signals ? (s = 4096) : n.onPush && (s = 64);
  let a = so(
    e,
    io(e, r, null, s, o, t, null, i.createRenderer(o, n), null, null, null)
  );
  e[t.index] = a;
}
function Ip(e, t, n, o, r, i) {
  let s = Y(e, t);
  Dp(t[_], s, i, e.value, n, o, r);
}
function Dp(e, t, n, o, r, i, s) {
  if (i == null) e.removeAttribute(t, r, n);
  else {
    let a = s == null ? Oe(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
  }
}
function Ep(e, t, n, o, r, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let c = s[a++],
        l = s[a++],
        u = s[a++],
        d = s[a++];
      Pc(o, n, c, l, u, d);
    }
}
function wp(e, t, n) {
  let o = null,
    r = 0;
  for (; r < n.length; ) {
    let i = n[r];
    if (i === 0) {
      r += 4;
      continue;
    } else if (i === 5) {
      r += 2;
      continue;
    }
    if (typeof i == "number") break;
    if (e.hasOwnProperty(i)) {
      o === null && (o = []);
      let s = e[i];
      for (let a = 0; a < s.length; a += 3)
        if (s[a] === t) {
          o.push(i, s[a + 1], s[a + 2], n[r + 1]);
          break;
        }
    }
    r += 2;
  }
  return o;
}
function $c(e, t, n, o) {
  return [e, !0, 0, t, null, o, null, n, null, null];
}
function Bc(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let o = D(null);
    try {
      for (let r = 0; r < n.length; r += 2) {
        let i = n[r],
          s = n[r + 1];
        if (s !== -1) {
          let a = e.data[s];
          zn(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      D(o);
    }
  }
}
function so(e, t) {
  return e[Tt] ? (e[cs][ee] = t) : (e[Tt] = t), (e[cs] = t), t;
}
function dr(e, t, n) {
  zn(0);
  let o = D(null);
  try {
    t(e, n);
  } finally {
    D(o);
  }
}
function Uc(e) {
  return (e[pn] ??= []);
}
function qc(e) {
  return (e.cleanup ??= []);
}
function Wc(e, t) {
  let n = e[rt],
    o = n ? n.get(_e, null) : null;
  o && o.handleError(t);
}
function Ni(e, t, n, o, r) {
  for (let i = 0; i < n.length; ) {
    let s = n[i++],
      a = n[i++],
      c = n[i++],
      l = t[s],
      u = e.data[s];
    Pc(u, l, o, a, c, r);
  }
}
function Gc(e, t, n) {
  let o = xa(t, e);
  Pf(e[_], o, n);
}
function Cp(e, t) {
  let n = Se(t, e),
    o = n[v];
  Mp(o, n);
  let r = n[pe];
  r !== null && n[ot] === null && (n[ot] = pi(r, n[rt])), Ti(o, n, n[P]);
}
function Mp(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function Ti(e, t, n) {
  ci(t);
  try {
    let o = e.viewQuery;
    o !== null && dr(1, o, n);
    let r = e.template;
    r !== null && Fc(e, t, r, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[de]?.finishViewCreation(e),
      e.staticContentQueries && Bc(e, t),
      e.staticViewQueries && dr(2, e.viewQuery, n);
    let i = e.components;
    i !== null && Np(t, i);
  } catch (o) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      o)
    );
  } finally {
    (t[m] &= -5), li();
  }
}
function Np(e, t) {
  for (let n = 0; n < t.length; n++) Cp(e, t[n]);
}
function Pt(e, t, n, o) {
  let r = D(null);
  try {
    let i = t.tView,
      a = e[m] & 4096 ? 4096 : 16,
      c = io(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        o?.injector ?? null,
        o?.embeddedViewInjector ?? null,
        o?.dehydratedView ?? null
      ),
      l = e[t.index];
    c[Pe] = l;
    let u = e[de];
    return u !== null && (c[de] = u.createEmbeddedView(i)), Ti(i, c, n), c;
  } finally {
    D(r);
  }
}
function zc(e, t) {
  let n = L + t;
  if (n < e.length) return e[n];
}
function st(e, t) {
  return !t || t.firstChild === null || ac(e);
}
function Lt(e, t, n, o = !0) {
  let r = t[v];
  if ((Hf(r, t, e, n), o)) {
    let s = lr(n, e),
      a = t[_],
      c = bc(a, e[Le]);
    c !== null && jf(r, e[B], a, t, c, s);
  }
  let i = t[ot];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function Zc(e, t) {
  let n = _t(e, t);
  return n !== void 0 && to(n[v], n), n;
}
function Mn(e, t, n, o, r = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = r ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && o.push(se(i)), he(i) && Tp(i, o);
    let s = n.type;
    if (s & 8) Mn(e, t, n.child, o);
    else if (s & 32) {
      let a = mi(n, t),
        c;
      for (; (c = a()); ) o.push(c);
    } else if (s & 16) {
      let a = xc(t, n);
      if (Array.isArray(a)) o.push(...a);
      else {
        let c = Fe(t[G]);
        Mn(c[v], c, a, o, !0);
      }
    }
    n = r ? n.projectionNext : n.next;
  }
  return o;
}
function Tp(e, t) {
  for (let n = L; n < e.length; n++) {
    let o = e[n],
      r = o[v].firstChild;
    r !== null && Mn(o[v], o, r, t);
  }
  e[Le] !== e[pe] && t.push(e[Le]);
}
var Qc = [];
function _p(e) {
  return e[Q] ?? bp(e);
}
function bp(e) {
  let t = Qc.pop() ?? Object.create(xp);
  return (t.lView = e), t;
}
function Sp(e) {
  e.lView[Q] !== e && ((e.lView = null), Qc.push(e));
}
var xp = ne(te({}, Ze), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    Gn(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[Q] = this;
  },
});
function Ap(e) {
  let t = e[Q] ?? Object.create(Rp);
  return (t.lView = e), t;
}
var Rp = ne(te({}, Ze), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    let t = Fe(e.lView);
    for (; t && !Yc(t[v]); ) t = Fe(t);
    t && Ra(t);
  },
  consumerOnSignalRead() {
    this.lView[Q] = this;
  },
});
function Yc(e) {
  return e.type !== 2;
}
var Op = 100;
function Jc(e, t = !0, n = 0) {
  let o = e[ie],
    r = o.rendererFactory,
    i = !1;
  i || r.begin?.();
  try {
    kp(e, n);
  } catch (s) {
    throw (t && Wc(e, s), s);
  } finally {
    i || (r.end?.(), o.inlineEffectRunner?.flush());
  }
}
function kp(e, t) {
  let n = Va();
  try {
    us(!0), fr(e, t);
    let o = 0;
    for (; Wn(e); ) {
      if (o === Op) throw new I(103, !1);
      o++, fr(e, 1);
    }
  } finally {
    us(n);
  }
}
function Pp(e, t, n, o) {
  let r = t[m];
  if ((r & 256) === 256) return;
  let i = !1,
    s = !1;
  !i && t[ie].inlineEffectRunner?.flush(), ci(t);
  let a = !0,
    c = null,
    l = null;
  i ||
    (Yc(e)
      ? ((l = _p(t)), (c = yt(l)))
      : Vi() === null
      ? ((a = !1), (l = Ap(t)), (c = yt(l)))
      : t[Q] && (qt(t[Q]), (t[Q] = null)));
  try {
    Aa(t), pd(e.bindingStartIndex), n !== null && Fc(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
      if (u) {
        let f = e.preOrderCheckHooks;
        f !== null && nn(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && on(t, f, 0, null), Io(t, 0);
      }
    if ((s || Lp(t), Kc(t, 0), e.contentQueries !== null && Bc(e, t), !i))
      if (u) {
        let f = e.contentCheckHooks;
        f !== null && nn(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && on(t, f, 1), Io(t, 1);
      }
    Kf(e, t);
    let d = e.components;
    d !== null && el(t, d, 0);
    let p = e.viewQuery;
    if ((p !== null && dr(2, p, o), !i))
      if (u) {
        let f = e.viewCheckHooks;
        f !== null && nn(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && on(t, f, 2), Io(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[tn])) {
      for (let f of t[tn]) f();
      t[tn] = null;
    }
    i || (t[m] &= -73);
  } catch (u) {
    throw (i || Gn(t), u);
  } finally {
    l !== null && (Bt(l, c), a && Sp(l)), li();
  }
}
function Kc(e, t) {
  for (let n = lc(e); n !== null; n = uc(n))
    for (let o = L; o < n.length; o++) {
      let r = n[o];
      Xc(r, t);
    }
}
function Lp(e) {
  for (let t = lc(e); t !== null; t = uc(t)) {
    if (!(t[m] & gn.HasTransplantedViews)) continue;
    let n = t[it];
    for (let o = 0; o < n.length; o++) {
      let r = n[o];
      Ra(r);
    }
  }
}
function Fp(e, t, n) {
  let o = Se(t, e);
  Xc(o, n);
}
function Xc(e, t) {
  oi(e) && fr(e, t);
}
function fr(e, t) {
  let o = e[v],
    r = e[m],
    i = e[Q],
    s = !!(t === 0 && r & 16);
  if (
    ((s ||= !!(r & 64 && t === 0)),
    (s ||= !!(r & 1024)),
    (s ||= !!(i?.dirty && Ut(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[m] &= -9217),
    s)
  )
    Pp(o, e, o.template, e[P]);
  else if (r & 8192) {
    Kc(e, 1);
    let a = o.components;
    a !== null && el(e, a, 1);
  }
}
function el(e, t, n) {
  for (let o = 0; o < t.length; o++) Fp(e, t[o], n);
}
function _i(e, t) {
  let n = Va() ? 64 : 1088;
  for (e[ie].changeDetectionScheduler?.notify(t); e; ) {
    e[m] |= n;
    let o = Fe(e);
    if (Vo(e) && !o) return e;
    e = o;
  }
  return null;
}
var $e = class {
    get rootNodes() {
      let t = this._lView,
        n = t[v];
      return Mn(n, t, n.firstChild, []);
    }
    constructor(t, n, o = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = o),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[P];
    }
    set context(t) {
      this._lView[P] = t;
    }
    get destroyed() {
      return (this._lView[m] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[F];
        if (he(t)) {
          let n = t[hn],
            o = n ? n.indexOf(this) : -1;
          o > -1 && (_t(t, o), un(n, o));
        }
        this._attachedToViewContainer = !1;
      }
      to(this._lView[v], this._lView);
    }
    onDestroy(t) {
      Oa(this._lView, t);
    }
    markForCheck() {
      _i(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[m] &= -129;
    }
    reattach() {
      $o(this._lView), (this._lView[m] |= 128);
    }
    detectChanges() {
      (this._lView[m] |= 1024), Jc(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new I(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = Vo(this._lView),
        n = this._lView[Pe];
      n !== null && !t && vi(n, this._lView), Mc(this._lView[v], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new I(902, !1);
      this._appRef = t;
      let n = Vo(this._lView),
        o = this._lView[Pe];
      o !== null && !n && Nc(o, this._lView), $o(this._lView);
    }
  },
  Nn = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = Hp;
      }
    }
    return e;
  })(),
  jp = Nn,
  Vp = class extends jp {
    constructor(t, n, o) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = n),
        (this.elementRef = o);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, o) {
      let r = Pt(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: o,
      });
      return new $e(r);
    }
  };
function Hp() {
  return ao(k(), g());
}
function ao(e, t) {
  return e.type & 4 ? new Vp(t, e, ht(e, t)) : null;
}
var iv = new RegExp(`^(\\d+)*(${of}|${nf})*(.*)`);
var $p = () => null;
function at(e, t) {
  return $p(e, t);
}
var ct = class {},
  bi = new M("", { providedIn: "root", factory: () => !1 });
var tl = new M(""),
  nl = new M(""),
  pr = class {},
  Tn = class {};
function Bp(e) {
  let t = Error(`No component factory found for ${q(e)}.`);
  return (t[Up] = e), t;
}
var Up = "ngComponent";
var hr = class {
    resolveComponentFactory(t) {
      throw Bp(t);
    }
  },
  lt = class {
    static {
      this.NULL = new hr();
    }
  },
  _n = class {},
  sv = (() => {
    class e {
      constructor() {
        this.destroyNode = null;
      }
      static {
        this.__NG_ELEMENT_ID__ = () => qp();
      }
    }
    return e;
  })();
function qp() {
  let e = g(),
    t = k(),
    n = Se(t.index, e);
  return (Ie(n) ? n : e)[_];
}
var Wp = (() => {
  class e {
    static {
      this.ɵprov = O({ token: e, providedIn: "root", factory: () => null });
    }
  }
  return e;
})();
function bn(e, t, n) {
  let o = n ? e.styles : null,
    r = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) r = Ao(r, a);
      else if (i == 2) {
        let c = a,
          l = t[++s];
        o = Ao(o, c + ": " + l + ";");
      }
    }
  n ? (e.styles = o) : (e.stylesWithoutHost = o),
    n ? (e.classes = r) : (e.classesWithoutHost = r);
}
var Sn = class extends lt {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = we(t);
    return new ut(n, this.ngModule);
  }
};
function xs(e, t) {
  let n = [];
  for (let o in e) {
    if (!e.hasOwnProperty(o)) continue;
    let r = e[o];
    if (r === void 0) continue;
    let i = Array.isArray(r),
      s = i ? r[0] : r,
      a = i ? r[1] : Ee.None;
    t
      ? n.push({
          propName: s,
          templateName: o,
          isSignal: (a & Ee.SignalBased) !== 0,
        })
      : n.push({ propName: s, templateName: o });
  }
  return n;
}
function Gp(e) {
  let t = e.toLowerCase();
  return t === "svg" ? Sa : t === "math" ? td : null;
}
var ut = class extends Tn {
    get inputs() {
      let t = this.componentDef,
        n = t.inputTransforms,
        o = xs(t.inputs, !0);
      if (n !== null)
        for (let r of o)
          n.hasOwnProperty(r.propName) && (r.transform = n[r.propName]);
      return o;
    }
    get outputs() {
      return xs(this.componentDef.outputs, !1);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = Ru(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, o, r) {
      let i = D(null);
      try {
        r = r || this.ngModule;
        let s = r instanceof Ce ? r : r?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new Uo(t, s) : t,
          c = a.get(_n, null);
        if (c === null) throw new I(407, !1);
        let l = a.get(Wp, null),
          u = a.get(ct, null),
          d = {
            rendererFactory: c,
            sanitizer: l,
            inlineEffectRunner: null,
            changeDetectionScheduler: u,
          },
          p = c.createRenderer(null, this.componentDef),
          f = this.componentDef.selectors[0][0] || "div",
          h = o
            ? tp(p, o, this.componentDef.encapsulation, a)
            : Cc(p, f, Gp(f)),
          C = 512;
        this.componentDef.signals
          ? (C |= 4096)
          : this.componentDef.onPush || (C |= 16);
        let A = null;
        h !== null && (A = pi(h, a, !0));
        let b = wi(0, null, null, 1, 0, null, null, null, null, null, null),
          R = io(null, b, null, C, null, null, d, p, a, null, A);
        ci(R);
        let le,
          J,
          Ge = null;
        try {
          let U = this.componentDef,
            ze,
            uo = null;
          U.findHostDirectiveDefs
            ? ((ze = []),
              (uo = new Map()),
              U.findHostDirectiveDefs(U, ze, uo),
              ze.push(U))
            : (ze = [U]);
          let Hl = zp(R, h);
          (Ge = Zp(Hl, h, U, ze, R, d, p)),
            (J = ni(b, S)),
            h && Jp(p, U, h, o),
            n !== void 0 && Kp(J, this.ngContentSelectors, n),
            (le = Yp(Ge, U, ze, uo, R, [Xp])),
            Ti(b, R, null);
        } catch (U) {
          throw (Ge !== null && Ko(Ge), Ko(R), U);
        } finally {
          li();
        }
        return new gr(this.componentType, le, ht(J, R), R, J);
      } finally {
        D(i);
      }
    }
  },
  gr = class extends pr {
    constructor(t, n, o, r, i) {
      super(),
        (this.location = o),
        (this._rootLView = r),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = n),
        (this.hostView = this.changeDetectorRef = new $e(r, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, n) {
      let o = this._tNode.inputs,
        r;
      if (o !== null && (r = o[t])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(t) &&
            Object.is(this.previousInputValues.get(t), n))
        )
          return;
        let i = this._rootLView;
        Ni(i[v], i, r, t, n), this.previousInputValues.set(t, n);
        let s = Se(this._tNode.index, i);
        _i(s, 1);
      }
    }
    get injector() {
      return new Re(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function zp(e, t) {
  let n = e[v],
    o = S;
  return (e[o] = t), We(n, o, 2, "#host", null);
}
function Zp(e, t, n, o, r, i, s) {
  let a = r[v];
  Qp(o, e, t, s);
  let c = null;
  t !== null && (c = pi(t, r[rt]));
  let l = i.rendererFactory.createRenderer(t, n),
    u = 16;
  n.signals ? (u = 4096) : n.onPush && (u = 64);
  let d = io(r, jc(n), null, u, r[e.index], e, i, l, null, null, c);
  return (
    a.firstCreatePass && ur(a, e, o.length - 1), so(r, d), (r[e.index] = d)
  );
}
function Qp(e, t, n, o) {
  for (let r of e) t.mergedAttrs = Mt(t.mergedAttrs, r.hostAttrs);
  t.mergedAttrs !== null &&
    (bn(t, t.mergedAttrs, !0), n !== null && Oc(o, n, t));
}
function Yp(e, t, n, o, r, i) {
  let s = k(),
    a = r[v],
    c = Y(s, r);
  Vc(a, r, s, n, null, o);
  for (let u = 0; u < n.length; u++) {
    let d = s.directiveStart + u,
      p = He(r, a, d, s);
    be(p, r);
  }
  Hc(a, r, s), c && be(c, r);
  let l = He(r, a, s.directiveStart + s.componentOffset, s);
  if (((e[P] = r[P] = l), i !== null)) for (let u of i) u(l, t);
  return Ii(a, s, r), l;
}
function Jp(e, t, n, o) {
  if (o) Po(e, n, ["ng-version", "18.2.12"]);
  else {
    let { attrs: r, classes: i } = Ou(t.selectors[0]);
    r && Po(e, n, r), i && i.length > 0 && Rc(e, n, i.join(" "));
  }
}
function Kp(e, t, n) {
  let o = (e.projection = []);
  for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null ? Array.from(i) : null);
  }
}
function Xp() {
  let e = k();
  Jn(g()[v], e);
}
var Si = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = eh;
    }
  }
  return e;
})();
function eh() {
  let e = k();
  return rl(e, g());
}
var th = Si,
  ol = class extends th {
    constructor(t, n, o) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = o);
    }
    get element() {
      return ht(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new Re(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = ui(this._hostTNode, this._hostLView);
      if (za(t)) {
        let n = vn(t, this._hostLView),
          o = mn(t),
          r = n[v].data[o + 8];
        return new Re(r, n);
      } else return new Re(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = As(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - L;
    }
    createEmbeddedView(t, n, o) {
      let r, i;
      typeof o == "number"
        ? (r = o)
        : o != null && ((r = o.index), (i = o.injector));
      let s = at(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, r, st(this._hostTNode, s)), a;
    }
    createComponent(t, n, o, r, i) {
      let s = t && !Yu(t),
        a;
      if (s) a = n;
      else {
        let h = n || {};
        (a = h.index),
          (o = h.injector),
          (r = h.projectableNodes),
          (i = h.environmentInjector || h.ngModuleRef);
      }
      let c = s ? t : new ut(we(t)),
        l = o || this.parentInjector;
      if (!i && c.ngModule == null) {
        let C = (s ? l : this.parentInjector).get(Ce, null);
        C && (i = C);
      }
      let u = we(c.componentType ?? {}),
        d = at(this._lContainer, u?.id ?? null),
        p = d?.firstChild ?? null,
        f = c.create(l, r, p, i);
      return this.insertImpl(f.hostView, a, st(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, o) {
      let r = t._lView;
      if (od(r)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let c = r[F],
            l = new ol(c, c[B], c[F]);
          l.detach(l.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return Lt(s, r, i, o), t.attachToViewContainerRef(), ia(Mo(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = As(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        o = _t(this._lContainer, n);
      o && (un(Mo(this._lContainer), n), to(o[v], o));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        o = _t(this._lContainer, n);
      return o && un(Mo(this._lContainer), n) != null ? new $e(o) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function As(e) {
  return e[hn];
}
function Mo(e) {
  return e[hn] || (e[hn] = []);
}
function rl(e, t) {
  let n,
    o = t[e.index];
  return (
    he(o) ? (n = o) : ((n = $c(o, t, null, e)), (t[e.index] = n), so(t, n)),
    oh(n, t, e, o),
    new ol(n, e, t)
  );
}
function nh(e, t) {
  let n = e[_],
    o = n.createComment(""),
    r = Y(t, e),
    i = bc(n, r);
  return Cn(n, i, o, qf(n, r), !1), o;
}
var oh = sh,
  rh = () => !1;
function ih(e, t, n) {
  return rh(e, t, n);
}
function sh(e, t, n, o) {
  if (e[Le]) return;
  let r;
  n.type & 8 ? (r = se(o)) : (r = nh(t, n)), (e[Le] = r);
}
var mr = class e {
    constructor(t) {
      (this.queryList = t), (this.matches = null);
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  vr = class e {
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          r = [];
        for (let i = 0; i < o; i++) {
          let s = n.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          r.push(a.clone());
        }
        return new e(r);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        Ai(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  xn = class {
    constructor(t, n, o = null) {
      (this.flags = n),
        (this.read = o),
        typeof t == "string" ? (this.predicate = fh(t)) : (this.predicate = t);
    }
  },
  yr = class e {
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0,
          i = this.getByIndex(o).embeddedTView(t, r);
        i &&
          ((i.indexInDeclarationView = o), n !== null ? n.push(i) : (n = [i]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  Ir = class e {
    constructor(t, n = -1) {
      (this.metadata = t),
        (this.matches = null),
        (this.indexInDeclarationView = -1),
        (this.crossesNgTemplate = !1),
        (this._appliesToNextNode = !0),
        (this._declarationNodeIndex = n);
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n; ) o = o.parent;
        return n === (o !== null ? o.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let o = this.metadata.predicate;
      if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
          let i = o[r];
          this.matchTNodeWithReadOption(t, n, ah(n, i)),
            this.matchTNodeWithReadOption(t, n, rn(n, t, i, !1, !1));
        }
      else
        o === Nn
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, rn(n, t, o, !1, !1));
    }
    matchTNodeWithReadOption(t, n, o) {
      if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
          if (r === Kn || r === Si || (r === Nn && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = rn(n, t, r, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, o);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function ah(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let o = 0; o < n.length; o += 2) if (n[o] === t) return n[o + 1];
  }
  return null;
}
function ch(e, t) {
  return e.type & 11 ? ht(e, t) : e.type & 4 ? ao(e, t) : null;
}
function lh(e, t, n, o) {
  return n === -1 ? ch(t, e) : n === -2 ? uh(e, t, o) : He(e, e[v], n, t);
}
function uh(e, t, n) {
  if (n === Kn) return ht(t, e);
  if (n === Nn) return ao(t, e);
  if (n === Si) return rl(t, e);
}
function il(e, t, n, o) {
  let r = t[de].queries[o];
  if (r.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
      let l = s[c];
      if (l < 0) a.push(null);
      else {
        let u = i[l];
        a.push(lh(t, u, s[c + 1], n.metadata.read));
      }
    }
    r.matches = a;
  }
  return r.matches;
}
function Dr(e, t, n, o) {
  let r = e.queries.getByIndex(n),
    i = r.matches;
  if (i !== null) {
    let s = il(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
      let c = i[a];
      if (c > 0) o.push(s[a / 2]);
      else {
        let l = i[a + 1],
          u = t[-c];
        for (let d = L; d < u.length; d++) {
          let p = u[d];
          p[Pe] === p[F] && Dr(p[v], p, l, o);
        }
        if (u[it] !== null) {
          let d = u[it];
          for (let p = 0; p < d.length; p++) {
            let f = d[p];
            Dr(f[v], f, l, o);
          }
        }
      }
    }
  }
  return o;
}
function xi(e, t) {
  return e[de].queries[t].queryList;
}
function sl(e, t, n) {
  let o = new Jo((n & 4) === 4);
  return (
    rp(e, t, o, o.destroy), (t[de] ??= new vr()).queries.push(new mr(o)) - 1
  );
}
function al(e, t, n) {
  let o = T();
  return (
    o.firstCreatePass &&
      (cl(o, new xn(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)),
    sl(o, g(), t)
  );
}
function dh(e, t, n, o) {
  let r = T();
  if (r.firstCreatePass) {
    let i = k();
    cl(r, new xn(t, n, o), i.index),
      ph(r, e),
      (n & 2) === 2 && (r.staticContentQueries = !0);
  }
  return sl(r, g(), n);
}
function fh(e) {
  return e.split(",").map((t) => t.trim());
}
function cl(e, t, n) {
  e.queries === null && (e.queries = new yr()), e.queries.track(new Ir(t, n));
}
function ph(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    o = n.length ? n[n.length - 1] : -1;
  t !== o && n.push(e.queries.length - 1, t);
}
function Ai(e, t) {
  return e.queries.getByIndex(t);
}
function ll(e, t) {
  let n = e[v],
    o = Ai(n, t);
  return o.crossesNgTemplate ? Dr(n, e, t, []) : il(n, e, o, t);
}
var Rs = new Set();
function ce(e) {
  Rs.has(e) ||
    (Rs.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
function hh(e) {
  return typeof e == "function" && e[H] !== void 0;
}
function gh(e, t) {
  ce("NgSignals");
  let n = Yi(e),
    o = n[H];
  return (
    t?.equal && (o.equal = t.equal),
    (n.set = (r) => It(o, r)),
    (n.update = (r) => Ji(o, r)),
    (n.asReadonly = ul.bind(n)),
    n
  );
}
function ul() {
  let e = this[H];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[H] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function dl(e) {
  return hh(e) && typeof e.set == "function";
}
function mh(e, t) {
  let n,
    o = go(() => {
      n._dirtyCounter();
      let r = Ih(n, e);
      if (t && r === void 0) throw new I(-951, !1);
      return r;
    });
  return (n = o[H]), (n._dirtyCounter = gh(0)), (n._flatValue = void 0), o;
}
function vh() {
  return mh(!1, !1);
}
function yh(e, t) {
  let n = e[H];
  (n._lView = g()),
    (n._queryIndex = t),
    (n._queryList = xi(n._lView, t)),
    n._queryList.onDirty(() => n._dirtyCounter.update((o) => o + 1));
}
function Ih(e, t) {
  let n = e._lView,
    o = e._queryIndex;
  if (n === void 0 || o === void 0 || n[m] & 4) return t ? void 0 : V;
  let r = xi(n, o),
    i = ll(n, o);
  return (
    r.reset(i, sc),
    t
      ? r.first
      : r._changesDetected || e._flatValue === void 0
      ? (e._flatValue = r.toArray())
      : e._flatValue
  );
}
function cv(e, t) {
  return vh();
}
function fl(e) {
  let t = Object.create(Gs),
    n = new wn();
  t.value = e;
  function o() {
    return vt(t), Os(t.value), t.value;
  }
  return (
    (o[H] = t),
    (o.asReadonly = ul.bind(o)),
    (o.set = (r) => {
      t.equal(t.value, r) || (It(t, r), n.emit(r));
    }),
    (o.update = (r) => {
      Os(t.value), o.set(r(t.value));
    }),
    (o.subscribe = n.subscribe.bind(n)),
    (o.destroyRef = n.destroyRef),
    o
  );
}
function Os(e) {
  if (e === jn) throw new I(952, !1);
}
function ks(e) {
  return fl(e);
}
function Dh() {
  return fl(jn);
}
var lv = ((ks.required = Dh), ks);
function Eh(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function wh(e) {
  let t = Eh(e.type),
    n = !0,
    o = [e];
  for (; t; ) {
    let r;
    if (Me(e)) r = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new I(903, !1);
      r = t.ɵdir;
    }
    if (r) {
      if (n) {
        o.push(r);
        let s = e;
        (s.inputs = Jt(e.inputs)),
          (s.inputTransforms = Jt(e.inputTransforms)),
          (s.declaredInputs = Jt(e.declaredInputs)),
          (s.outputs = Jt(e.outputs));
        let a = r.hostBindings;
        a && _h(e, a);
        let c = r.viewQuery,
          l = r.contentQueries;
        if (
          (c && Nh(e, c),
          l && Th(e, l),
          Ch(e, r),
          Jl(e.outputs, r.outputs),
          Me(r) && r.data.animation)
        ) {
          let u = e.data;
          u.animation = (u.animation || []).concat(r.data.animation);
        }
      }
      let i = r.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === wh && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  Mh(o);
}
function Ch(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let o = t.inputs[n];
    if (
      o !== void 0 &&
      ((e.inputs[n] = o),
      (e.declaredInputs[n] = t.declaredInputs[n]),
      t.inputTransforms !== null)
    ) {
      let r = Array.isArray(o) ? o[0] : o;
      if (!t.inputTransforms.hasOwnProperty(r)) continue;
      (e.inputTransforms ??= {}), (e.inputTransforms[r] = t.inputTransforms[r]);
    }
  }
}
function Mh(e) {
  let t = 0,
    n = null;
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    (r.hostVars = t += r.hostVars),
      (r.hostAttrs = Mt(r.hostAttrs, (n = Mt(n, r.hostAttrs))));
  }
}
function Jt(e) {
  return e === tt ? {} : e === V ? [] : e;
}
function Nh(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (o, r) => {
        t(o, r), n(o, r);
      })
    : (e.viewQuery = t);
}
function Th(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (o, r, i) => {
        t(o, r, i), n(o, r, i);
      })
    : (e.contentQueries = t);
}
function _h(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (o, r) => {
        t(o, r), n(o, r);
      })
    : (e.hostBindings = t);
}
function uv(e) {
  let t = e.inputConfig,
    n = {};
  for (let o in t)
    if (t.hasOwnProperty(o)) {
      let r = t[o];
      Array.isArray(r) && r[3] && (n[o] = r[3]);
    }
  e.inputTransforms = n;
}
var Be = class {},
  Er = class {};
var wr = class extends Be {
    constructor(t, n, o, r = !0) {
      super(),
        (this.ngModuleType = t),
        (this._parent = n),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new Sn(this));
      let i = ha(t);
      (this._bootstrapComponents = Ec(i.bootstrap)),
        (this._r3Injector = nc(
          t,
          n,
          [
            { provide: Be, useValue: this },
            { provide: lt, useValue: this.componentFactoryResolver },
            ...o,
          ],
          q(t),
          new Set(["environment"])
        )),
        r && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  Cr = class extends Er {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new wr(this.moduleType, t, []);
    }
  };
var An = class extends Be {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new Sn(this)),
      (this.instance = null);
    let n = new Nt(
      [
        ...t.providers,
        { provide: Be, useValue: this },
        { provide: lt, useValue: this.componentFactoryResolver },
      ],
      t.parent || Xr(),
      t.debugName,
      new Set(["environment"])
    );
    (this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function bh(e, t, n = null) {
  return new An({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
function pl(e) {
  return Ri(e)
    ? Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e)
    : !1;
}
function Sh(e, t) {
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
  else {
    let n = e[Symbol.iterator](),
      o;
    for (; !(o = n.next()).done; ) t(o.value);
  }
}
function Ri(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
function co(e, t, n) {
  return (e[t] = n);
}
function xh(e, t) {
  return e[t];
}
function z(e, t, n) {
  let o = e[t];
  return Object.is(o, n) ? !1 : ((e[t] = n), !0);
}
function Oi(e, t, n, o) {
  let r = z(e, t, n);
  return z(e, t + 1, o) || r;
}
function Ah(e, t, n, o, r) {
  let i = Oi(e, t, n, o);
  return z(e, t + 2, r) || i;
}
function Rh(e) {
  return (e.flags & 32) === 32;
}
function Oh(e, t, n, o, r, i, s, a, c) {
  let l = t.consts,
    u = We(t, e, 4, s || null, a || null);
  Mi(t, n, u, Ne(l, c)), Jn(t, u);
  let d = (u.tView = wi(
    2,
    u,
    o,
    r,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    l,
    null
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, u), (d.queries = t.queries.embeddedTView(u))),
    u
  );
}
function Rn(e, t, n, o, r, i, s, a, c, l) {
  let u = n + S,
    d = t.firstCreatePass ? Oh(u, t, e, o, r, i, s, a, c) : t.data[u];
  xe(d, !1);
  let p = Ph(t, e, d, n);
  Qn() && no(t, e, p, d), be(p, e);
  let f = $c(p, e, p, d);
  return (
    (e[u] = f),
    so(e, f),
    ih(f, d, e),
    Un(d) && Di(t, e, d),
    c != null && Ei(e, d, l),
    d
  );
}
function kh(e, t, n, o, r, i, s, a) {
  let c = g(),
    l = T(),
    u = Ne(l.consts, i);
  return Rn(c, l, e, t, n, o, r, u, s, a), kh;
}
var Ph = Lh;
function Lh(e, t, n, o) {
  return Yn(!0), t[_].createComment("");
}
var Ke = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = "EarlyRead"),
      (e[(e.Write = 1)] = "Write"),
      (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
      (e[(e.Read = 3)] = "Read"),
      e
    );
  })(Ke || {}),
  hl = (() => {
    class e {
      constructor() {
        this.impl = null;
      }
      execute() {
        this.impl?.execute();
      }
      static {
        this.ɵprov = O({
          token: e,
          providedIn: "root",
          factory: () => new e(),
        });
      }
    }
    return e;
  })(),
  Mr = class e {
    constructor() {
      (this.ngZone = w(W)),
        (this.scheduler = w(ct)),
        (this.errorHandler = w(_e, { optional: !0 })),
        (this.sequences = new Set()),
        (this.deferredRegistrations = new Set()),
        (this.executing = !1);
    }
    static {
      this.PHASES = [Ke.EarlyRead, Ke.Write, Ke.MixedReadWrite, Ke.Read];
    }
    execute() {
      this.executing = !0;
      for (let t of e.PHASES)
        for (let n of this.sequences)
          if (!(n.erroredOrDestroyed || !n.hooks[t]))
            try {
              n.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                n.hooks[t](n.pipelinedValue)
              );
            } catch (o) {
              (n.erroredOrDestroyed = !0), this.errorHandler?.handleError(o);
            }
      this.executing = !1;
      for (let t of this.sequences)
        t.afterRun(), t.once && (this.sequences.delete(t), t.destroy());
      for (let t of this.deferredRegistrations) this.sequences.add(t);
      this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
        this.deferredRegistrations.clear();
    }
    register(t) {
      this.executing
        ? this.deferredRegistrations.add(t)
        : (this.sequences.add(t), this.scheduler.notify(6));
    }
    unregister(t) {
      this.executing && this.sequences.has(t)
        ? ((t.erroredOrDestroyed = !0),
          (t.pipelinedValue = void 0),
          (t.once = !0))
        : (this.sequences.delete(t), this.deferredRegistrations.delete(t));
    }
    static {
      this.ɵprov = O({ token: e, providedIn: "root", factory: () => new e() });
    }
  },
  Nr = class {
    constructor(t, n, o, r) {
      (this.impl = t),
        (this.hooks = n),
        (this.once = o),
        (this.erroredOrDestroyed = !1),
        (this.pipelinedValue = void 0),
        (this.unregisterOnDestroy = r?.onDestroy(() => this.destroy()));
    }
    afterRun() {
      (this.erroredOrDestroyed = !1), (this.pipelinedValue = void 0);
    }
    destroy() {
      this.impl.unregister(this), this.unregisterOnDestroy?.();
    }
  };
function Fh(e, t) {
  !t?.injector && ei(Fh);
  let n = t?.injector ?? w(Te);
  return wc(n) ? (ce("NgAfterRender"), gl(e, n, t, !1)) : ml;
}
function jh(e, t) {
  !t?.injector && ei(jh);
  let n = t?.injector ?? w(Te);
  return wc(n) ? (ce("NgAfterNextRender"), gl(e, n, t, !0)) : ml;
}
function Vh(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return (n[t] = e), n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function gl(e, t, n, o) {
  let r = t.get(hl);
  r.impl ??= t.get(Mr);
  let i = n?.phase ?? Ke.MixedReadWrite,
    s = n?.manualCleanup !== !0 ? t.get(At) : null,
    a = new Nr(r.impl, Vh(e, i), o, s);
  return r.impl.register(a), a;
}
var ml = { destroy() {} };
function Hh(e, t, n, o) {
  let r = g(),
    i = qe();
  if (z(r, i, t)) {
    let s = T(),
      a = Zn();
    Ip(a, r, e, t, n, o);
  }
  return Hh;
}
function $h(e, t, n, o) {
  return z(e, qe(), n) ? t + Oe(n) + o : Z;
}
function Bh(e, t, n, o, r, i) {
  let s = fd(),
    a = Oi(e, s, n, r);
  return si(2), a ? t + Oe(n) + o + Oe(r) + i : Z;
}
function Kt(e, t) {
  return (e << 17) | (t << 2);
}
function Ue(e) {
  return (e >> 17) & 32767;
}
function Uh(e) {
  return (e & 2) == 2;
}
function qh(e, t) {
  return (e & 131071) | (t << 17);
}
function Tr(e) {
  return e | 2;
}
function dt(e) {
  return (e & 131068) >> 2;
}
function No(e, t) {
  return (e & -131069) | (t << 2);
}
function Wh(e) {
  return (e & 1) === 1;
}
function _r(e) {
  return e | 1;
}
function Gh(e, t, n, o, r, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = Ue(s),
    c = dt(s);
  e[o] = n;
  let l = !1,
    u;
  if (Array.isArray(n)) {
    let d = n;
    (u = d[1]), (u === null || xt(d, u) > 0) && (l = !0);
  } else u = n;
  if (r)
    if (c !== 0) {
      let p = Ue(e[a + 1]);
      (e[o + 1] = Kt(p, a)),
        p !== 0 && (e[p + 1] = No(e[p + 1], o)),
        (e[a + 1] = qh(e[a + 1], o));
    } else
      (e[o + 1] = Kt(a, 0)), a !== 0 && (e[a + 1] = No(e[a + 1], o)), (a = o);
  else
    (e[o + 1] = Kt(c, 0)),
      a === 0 ? (a = o) : (e[c + 1] = No(e[c + 1], o)),
      (c = o);
  l && (e[o + 1] = Tr(e[o + 1])),
    Ps(e, u, o, !0),
    Ps(e, u, o, !1),
    zh(t, u, e, o, i),
    (s = Kt(a, c)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function zh(e, t, n, o, r) {
  let i = r ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    xt(i, t) >= 0 &&
    (n[o + 1] = _r(n[o + 1]));
}
function Ps(e, t, n, o) {
  let r = e[n + 1],
    i = t === null,
    s = o ? Ue(r) : dt(r),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let c = e[s],
      l = e[s + 1];
    Zh(c, t) && ((a = !0), (e[s + 1] = o ? _r(l) : Tr(l))),
      (s = o ? Ue(l) : dt(l));
  }
  a && (e[n + 1] = o ? Tr(r) : _r(r));
}
function Zh(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
    ? xt(e, t) >= 0
    : !1;
}
var X = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function Qh(e) {
  return e.substring(X.key, X.keyEnd);
}
function Yh(e) {
  return Jh(e), vl(e, yl(e, 0, X.textEnd));
}
function vl(e, t) {
  let n = X.textEnd;
  return n === t ? -1 : ((t = X.keyEnd = Kh(e, (X.key = t), n)), yl(e, t, n));
}
function Jh(e) {
  (X.key = 0),
    (X.keyEnd = 0),
    (X.value = 0),
    (X.valueEnd = 0),
    (X.textEnd = e.length);
}
function yl(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function Kh(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function Xh(e, t, n) {
  let o = g(),
    r = qe();
  if (z(o, r, t)) {
    let i = T(),
      s = Zn();
    Ci(i, s, o, e, t, o[_], n, !1);
  }
  return Xh;
}
function br(e, t, n, o, r) {
  let i = t.inputs,
    s = r ? "class" : "style";
  Ni(e, n, i[s], s, o);
}
function eg(e, t, n) {
  return Il(e, t, n, !1), eg;
}
function tg(e, t) {
  return Il(e, t, null, !0), tg;
}
function dv(e) {
  og(lg, ng, e, !0);
}
function ng(e, t) {
  for (let n = Yh(t); n >= 0; n = vl(t, n)) Yr(e, Qh(t), !0);
}
function Il(e, t, n, o) {
  let r = g(),
    i = T(),
    s = si(2);
  if ((i.firstUpdatePass && El(i, e, s, o), t !== Z && z(r, s, t))) {
    let a = i.data[ae()];
    wl(i, a, r, r[_], e, (r[s + 1] = dg(t, n)), o, s);
  }
}
function og(e, t, n, o) {
  let r = T(),
    i = si(2);
  r.firstUpdatePass && El(r, null, i, o);
  let s = g();
  if (n !== Z && z(s, i, n)) {
    let a = r.data[ae()];
    if (Cl(a, o) && !Dl(r, i)) {
      let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
      c !== null && (n = Ao(c, n || "")), br(r, a, s, n, o);
    } else ug(r, a, s, s[_], s[i + 1], (s[i + 1] = cg(e, t, n)), o, i);
  }
}
function Dl(e, t) {
  return t >= e.expandoStartIndex;
}
function El(e, t, n, o) {
  let r = e.data;
  if (r[n + 1] === null) {
    let i = r[ae()],
      s = Dl(e, n);
    Cl(i, o) && t === null && !s && (t = !1),
      (t = rg(r, i, t, o)),
      Gh(r, i, t, n, s, o);
  }
}
function rg(e, t, n, o) {
  let r = vd(e),
    i = o ? t.residualClasses : t.residualStyles;
  if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 &&
      ((n = To(null, e, t, n, o)), (n = bt(n, t.attrs, o)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
      if (((n = To(r, e, t, n, o)), i === null)) {
        let c = ig(e, t, o);
        c !== void 0 &&
          Array.isArray(c) &&
          ((c = To(null, e, t, c[1], o)),
          (c = bt(c, t.attrs, o)),
          sg(e, t, o, c));
      } else i = ag(e, t, o);
  }
  return (
    i !== void 0 && (o ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function ig(e, t, n) {
  let o = n ? t.classBindings : t.styleBindings;
  if (dt(o) !== 0) return e[Ue(o)];
}
function sg(e, t, n, o) {
  let r = n ? t.classBindings : t.styleBindings;
  e[Ue(r)] = o;
}
function ag(e, t, n) {
  let o,
    r = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = bt(o, s, n);
  }
  return bt(o, t.attrs, n);
}
function To(e, t, n, o, r) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (o = bt(o, i.hostAttrs, r)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), o;
}
function bt(e, t, n) {
  let o = n ? 1 : 2,
    r = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (r = s)
        : r === o &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          Yr(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function cg(e, t, n) {
  if (n == null || n === "") return V;
  let o = [],
    r = Ot(n);
  if (Array.isArray(r)) for (let i = 0; i < r.length; i++) e(o, r[i], !0);
  else if (typeof r == "object")
    for (let i in r) r.hasOwnProperty(i) && e(o, i, r[i]);
  else typeof r == "string" && t(o, r);
  return o;
}
function lg(e, t, n) {
  let o = String(t);
  o !== "" && !o.includes(" ") && Yr(e, o, n);
}
function ug(e, t, n, o, r, i, s, a) {
  r === Z && (r = V);
  let c = 0,
    l = 0,
    u = 0 < r.length ? r[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; u !== null || d !== null; ) {
    let p = c < r.length ? r[c + 1] : void 0,
      f = l < i.length ? i[l + 1] : void 0,
      h = null,
      C;
    u === d
      ? ((c += 2), (l += 2), p !== f && ((h = d), (C = f)))
      : d === null || (u !== null && u < d)
      ? ((c += 2), (h = u))
      : ((l += 2), (h = d), (C = f)),
      h !== null && wl(e, t, n, o, h, C, s, a),
      (u = c < r.length ? r[c] : null),
      (d = l < i.length ? i[l] : null);
  }
}
function wl(e, t, n, o, r, i, s, a) {
  if (!(t.type & 3)) return;
  let c = e.data,
    l = c[a + 1],
    u = Wh(l) ? Ls(c, t, n, r, dt(l), s) : void 0;
  if (!On(u)) {
    On(i) || (Uh(l) && (i = Ls(c, null, n, r, a, s)));
    let d = xa(ae(), n);
    Yf(o, s, d, r, i);
  }
}
function Ls(e, t, n, o, r, i) {
  let s = t === null,
    a;
  for (; r > 0; ) {
    let c = e[r],
      l = Array.isArray(c),
      u = l ? c[1] : c,
      d = u === null,
      p = n[r + 1];
    p === Z && (p = d ? V : void 0);
    let f = d ? vo(p, o) : u === o ? p : void 0;
    if ((l && !On(f) && (f = vo(c, o)), On(f) && ((a = f), s))) return a;
    let h = e[r + 1];
    r = s ? Ue(h) : dt(h);
  }
  if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = vo(c, o));
  }
  return a;
}
function On(e) {
  return e !== void 0;
}
function dg(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = q(Ot(e)))),
    e
  );
}
function Cl(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
var Sr = class {
  destroy(t) {}
  updateValue(t, n) {}
  swap(t, n) {
    let o = Math.min(t, n),
      r = Math.max(t, n),
      i = this.detach(r);
    if (r - o > 1) {
      let s = this.detach(o);
      this.attach(o, i), this.attach(r, s);
    } else this.attach(o, i);
  }
  move(t, n) {
    this.attach(n, this.detach(t));
  }
};
function _o(e, t, n, o, r) {
  return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0;
}
function fg(e, t, n) {
  let o,
    r,
    i = 0,
    s = e.length - 1,
    a = void 0;
  if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c; ) {
      let l = e.at(i),
        u = t[i],
        d = _o(i, l, i, u, n);
      if (d !== 0) {
        d < 0 && e.updateValue(i, u), i++;
        continue;
      }
      let p = e.at(s),
        f = t[c],
        h = _o(s, p, c, f, n);
      if (h !== 0) {
        h < 0 && e.updateValue(s, f), s--, c--;
        continue;
      }
      let C = n(i, l),
        A = n(s, p),
        b = n(i, u);
      if (Object.is(b, A)) {
        let R = n(c, f);
        Object.is(R, C)
          ? (e.swap(i, s), e.updateValue(s, f), c--, s--)
          : e.move(s, i),
          e.updateValue(i, u),
          i++;
        continue;
      }
      if (((o ??= new kn()), (r ??= js(e, i, s, n)), xr(e, o, i, b)))
        e.updateValue(i, u), i++, s++;
      else if (r.has(b)) o.set(C, e.detach(i)), s--;
      else {
        let R = e.create(i, t[i]);
        e.attach(i, R), i++, s++;
      }
    }
    for (; i <= c; ) Fs(e, o, n, i, t[i]), i++;
  } else if (t != null) {
    let c = t[Symbol.iterator](),
      l = c.next();
    for (; !l.done && i <= s; ) {
      let u = e.at(i),
        d = l.value,
        p = _o(i, u, i, d, n);
      if (p !== 0) p < 0 && e.updateValue(i, d), i++, (l = c.next());
      else {
        (o ??= new kn()), (r ??= js(e, i, s, n));
        let f = n(i, d);
        if (xr(e, o, i, f)) e.updateValue(i, d), i++, s++, (l = c.next());
        else if (!r.has(f))
          e.attach(i, e.create(i, d)), i++, s++, (l = c.next());
        else {
          let h = n(i, u);
          o.set(h, e.detach(i)), s--;
        }
      }
    }
    for (; !l.done; ) Fs(e, o, n, e.length, l.value), (l = c.next());
  }
  for (; i <= s; ) e.destroy(e.detach(s--));
  o?.forEach((c) => {
    e.destroy(c);
  });
}
function xr(e, t, n, o) {
  return t !== void 0 && t.has(o)
    ? (e.attach(n, t.get(o)), t.delete(o), !0)
    : !1;
}
function Fs(e, t, n, o, r) {
  if (xr(e, t, o, n(o, r))) e.updateValue(o, r);
  else {
    let i = e.create(o, r);
    e.attach(o, i);
  }
}
function js(e, t, n, o) {
  let r = new Set();
  for (let i = t; i <= n; i++) r.add(o(i, e.at(i)));
  return r;
}
var kn = class {
  constructor() {
    (this.kvMap = new Map()), (this._vMap = void 0);
  }
  has(t) {
    return this.kvMap.has(t);
  }
  delete(t) {
    if (!this.has(t)) return !1;
    let n = this.kvMap.get(t);
    return (
      this._vMap !== void 0 && this._vMap.has(n)
        ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n))
        : this.kvMap.delete(t),
      !0
    );
  }
  get(t) {
    return this.kvMap.get(t);
  }
  set(t, n) {
    if (this.kvMap.has(t)) {
      let o = this.kvMap.get(t);
      this._vMap === void 0 && (this._vMap = new Map());
      let r = this._vMap;
      for (; r.has(o); ) o = r.get(o);
      r.set(o, n);
    } else this.kvMap.set(t, n);
  }
  forEach(t) {
    for (let [n, o] of this.kvMap)
      if ((t(o, n), this._vMap !== void 0)) {
        let r = this._vMap;
        for (; r.has(o); ) (o = r.get(o)), t(o, n);
      }
  }
};
function fv(e, t) {
  ce("NgControlFlow");
  let n = g(),
    o = qe(),
    r = n[o] !== Z ? n[o] : -1,
    i = r !== -1 ? Pn(n, S + r) : void 0,
    s = 0;
  if (z(n, o, e)) {
    let a = D(null);
    try {
      if ((i !== void 0 && Zc(i, s), e !== -1)) {
        let c = S + e,
          l = Pn(n, c),
          u = kr(n[v], c),
          d = at(l, u.tView.ssrId),
          p = Pt(n, u, t, { dehydratedView: d });
        Lt(l, p, s, st(u, d));
      }
    } finally {
      D(a);
    }
  } else if (i !== void 0) {
    let a = zc(i, s);
    a !== void 0 && (a[P] = t);
  }
}
var Ar = class {
  constructor(t, n, o) {
    (this.lContainer = t), (this.$implicit = n), (this.$index = o);
  }
  get $count() {
    return this.lContainer.length - L;
  }
};
function pv(e) {
  return e;
}
var Rr = class {
  constructor(t, n, o) {
    (this.hasEmptyBlock = t), (this.trackByFn = n), (this.liveCollection = o);
  }
};
function hv(e, t, n, o, r, i, s, a, c, l, u, d, p) {
  ce("NgControlFlow");
  let f = g(),
    h = T(),
    C = c !== void 0,
    A = g(),
    b = a ? s.bind(A[G][P]) : s,
    R = new Rr(C, b);
  (A[S + e] = R),
    Rn(f, h, e + 1, t, n, o, r, Ne(h.consts, i)),
    C && Rn(f, h, e + 2, c, l, u, d, Ne(h.consts, p));
}
var Or = class extends Sr {
  constructor(t, n, o) {
    super(),
      (this.lContainer = t),
      (this.hostLView = n),
      (this.templateTNode = o),
      (this.operationsCounter = void 0),
      (this.needsIndexUpdate = !1);
  }
  get length() {
    return this.lContainer.length - L;
  }
  at(t) {
    return this.getLView(t)[P].$implicit;
  }
  attach(t, n) {
    let o = n[ot];
    (this.needsIndexUpdate ||= t !== this.length),
      Lt(this.lContainer, n, t, st(this.templateTNode, o));
  }
  detach(t) {
    return (
      (this.needsIndexUpdate ||= t !== this.length - 1), pg(this.lContainer, t)
    );
  }
  create(t, n) {
    let o = at(this.lContainer, this.templateTNode.tView.ssrId),
      r = Pt(
        this.hostLView,
        this.templateTNode,
        new Ar(this.lContainer, n, t),
        { dehydratedView: o }
      );
    return this.operationsCounter?.recordCreate(), r;
  }
  destroy(t) {
    to(t[v], t), this.operationsCounter?.recordDestroy();
  }
  updateValue(t, n) {
    this.getLView(t)[P].$implicit = n;
  }
  reset() {
    (this.needsIndexUpdate = !1), this.operationsCounter?.reset();
  }
  updateIndexes() {
    if (this.needsIndexUpdate)
      for (let t = 0; t < this.length; t++) this.getLView(t)[P].$index = t;
  }
  getLView(t) {
    return hg(this.lContainer, t);
  }
};
function gv(e) {
  let t = D(null),
    n = ae();
  try {
    let o = g(),
      r = o[v],
      i = o[n],
      s = n + 1,
      a = Pn(o, s);
    if (i.liveCollection === void 0) {
      let l = kr(r, s);
      i.liveCollection = new Or(a, o, l);
    } else i.liveCollection.reset();
    let c = i.liveCollection;
    if ((fg(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock)) {
      let l = qe(),
        u = c.length === 0;
      if (z(o, l, u)) {
        let d = n + 2,
          p = Pn(o, d);
        if (u) {
          let f = kr(r, d),
            h = at(p, f.tView.ssrId),
            C = Pt(o, f, void 0, { dehydratedView: h });
          Lt(p, C, 0, st(f, h));
        } else Zc(p, 0);
      }
    }
  } finally {
    D(t);
  }
}
function Pn(e, t) {
  return e[t];
}
function pg(e, t) {
  return _t(e, t);
}
function hg(e, t) {
  return zc(e, t);
}
function kr(e, t) {
  return ni(e, t);
}
function gg(e, t, n, o, r, i) {
  let s = t.consts,
    a = Ne(s, r),
    c = We(t, e, 2, o, a);
  return (
    Mi(t, n, c, Ne(s, i)),
    c.attrs !== null && bn(c, c.attrs, !1),
    c.mergedAttrs !== null && bn(c, c.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, c),
    c
  );
}
function Ml(e, t, n, o) {
  let r = g(),
    i = T(),
    s = S + e,
    a = r[_],
    c = i.firstCreatePass ? gg(s, i, r, t, n, o) : i.data[s],
    l = vg(i, r, c, a, t, e);
  r[s] = l;
  let u = Un(c);
  return (
    xe(c, !0),
    Oc(a, l, c),
    !Rh(c) && Qn() && no(i, r, l, c),
    sd() === 0 && be(l, r),
    ad(),
    u && (Di(i, r, c), Ii(i, c, r)),
    o !== null && Ei(r, c),
    Ml
  );
}
function Nl() {
  let e = k();
  ri() ? ii() : ((e = e.parent), xe(e, !1));
  let t = e;
  ld(t) && ud(), cd();
  let n = T();
  return (
    n.firstCreatePass && (Jn(n, e), ti(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      Nd(t) &&
      br(n, t, g(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      Td(t) &&
      br(n, t, g(), t.stylesWithoutHost, !1),
    Nl
  );
}
function mg(e, t, n, o) {
  return Ml(e, t, n, o), Nl(), mg;
}
var vg = (e, t, n, o, r, i) => (Yn(!0), Cc(o, r, Ed()));
function yg(e, t, n, o, r) {
  let i = t.consts,
    s = Ne(i, o),
    a = We(t, e, 8, "ng-container", s);
  s !== null && bn(a, s, !0);
  let c = Ne(i, r);
  return Mi(t, n, a, c), t.queries !== null && t.queries.elementStart(t, a), a;
}
function Tl(e, t, n) {
  let o = g(),
    r = T(),
    i = e + S,
    s = r.firstCreatePass ? yg(i, r, o, t, n) : r.data[i];
  xe(s, !0);
  let a = Dg(r, o, s, e);
  return (
    (o[i] = a),
    Qn() && no(r, o, a, s),
    be(a, o),
    Un(s) && (Di(r, o, s), Ii(r, s, o)),
    n != null && Ei(o, s),
    Tl
  );
}
function _l() {
  let e = k(),
    t = T();
  return (
    ri() ? ii() : ((e = e.parent), xe(e, !1)),
    t.firstCreatePass && (Jn(t, e), ti(e) && t.queries.elementEnd(e)),
    _l
  );
}
function Ig(e, t, n) {
  return Tl(e, t, n), _l(), Ig;
}
var Dg = (e, t, n, o) => (Yn(!0), Lf(t[_], ""));
function mv() {
  return g();
}
function Eg(e, t, n) {
  let o = g(),
    r = qe();
  if (z(o, r, t)) {
    let i = T(),
      s = Zn();
    Ci(i, s, o, e, t, o[_], n, !0);
  }
  return Eg;
}
var Ae = void 0;
function wg(e) {
  let t = e,
    n = Math.floor(Math.abs(e)),
    o = e.toString().replace(/^[^.]*\.?/, "").length;
  return n === 1 && o === 0 ? 1 : 5;
}
var Cg = [
    "en",
    [["a", "p"], ["AM", "PM"], Ae],
    [["AM", "PM"], Ae, Ae],
    [
      ["S", "M", "T", "W", "T", "F", "S"],
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    ],
    Ae,
    [
      ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    ],
    Ae,
    [
      ["B", "A"],
      ["BC", "AD"],
      ["Before Christ", "Anno Domini"],
    ],
    0,
    [6, 0],
    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
    ["{1}, {0}", Ae, "{1} 'at' {0}", Ae],
    [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
    ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"],
    "USD",
    "$",
    "US Dollar",
    {},
    "ltr",
    wg,
  ],
  bo = {};
function vv(e) {
  let t = Ng(e),
    n = Vs(t);
  if (n) return n;
  let o = t.split("-")[0];
  if (((n = Vs(o)), n)) return n;
  if (o === "en") return Cg;
  throw new I(701, !1);
}
function Vs(e) {
  return (
    e in bo ||
      (bo[e] =
        ve.ng &&
        ve.ng.common &&
        ve.ng.common.locales &&
        ve.ng.common.locales[e]),
    bo[e]
  );
}
var Mg = (function (e) {
  return (
    (e[(e.LocaleId = 0)] = "LocaleId"),
    (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
    (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
    (e[(e.DaysFormat = 3)] = "DaysFormat"),
    (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
    (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
    (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
    (e[(e.Eras = 7)] = "Eras"),
    (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
    (e[(e.WeekendRange = 9)] = "WeekendRange"),
    (e[(e.DateFormat = 10)] = "DateFormat"),
    (e[(e.TimeFormat = 11)] = "TimeFormat"),
    (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
    (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
    (e[(e.NumberFormats = 14)] = "NumberFormats"),
    (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
    (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
    (e[(e.CurrencyName = 17)] = "CurrencyName"),
    (e[(e.Currencies = 18)] = "Currencies"),
    (e[(e.Directionality = 19)] = "Directionality"),
    (e[(e.PluralCase = 20)] = "PluralCase"),
    (e[(e.ExtraData = 21)] = "ExtraData"),
    e
  );
})(Mg || {});
function Ng(e) {
  return e.toLowerCase().replace(/_/g, "-");
}
var Ln = "en-US",
  Tg = "USD";
var _g = Ln;
function bg(e) {
  typeof e == "string" && (_g = e.toLowerCase().replace(/_/g, "-"));
}
var Sg = (e, t, n) => {};
function xg(e, t, n, o) {
  let r = g(),
    i = T(),
    s = k();
  return bl(i, r, r[_], s, e, t, o), xg;
}
function Ag(e, t, n, o) {
  let r = e.cleanup;
  if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
      let s = r[i];
      if (s === n && r[i + 1] === o) {
        let a = t[pn],
          c = r[i + 2];
        return a.length > c ? a[c] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function bl(e, t, n, o, r, i, s) {
  let a = Un(o),
    l = e.firstCreatePass && qc(e),
    u = t[P],
    d = Uc(t),
    p = !0;
  if (o.type & 3 || s) {
    let C = Y(o, t),
      A = s ? s(C) : C,
      b = d.length,
      R = s ? (J) => s(se(J[o.index])) : o.index,
      le = null;
    if ((!s && a && (le = Ag(e, t, r, o.index)), le !== null)) {
      let J = le.__ngLastListenerFn__ || le;
      (J.__ngNextListenerFn__ = i), (le.__ngLastListenerFn__ = i), (p = !1);
    } else {
      (i = $s(o, t, u, i)), Sg(C, r, i);
      let J = n.listen(A, r, i);
      d.push(i, J), l && l.push(r, R, b, b + 1);
    }
  } else i = $s(o, t, u, i);
  let f = o.outputs,
    h;
  if (p && f !== null && (h = f[r])) {
    let C = h.length;
    if (C)
      for (let A = 0; A < C; A += 2) {
        let b = h[A],
          R = h[A + 1],
          Ge = t[b][R].subscribe(i),
          U = d.length;
        d.push(i, Ge), l && l.push(r, o.index, U, -(U + 1));
      }
  }
}
function Hs(e, t, n, o) {
  let r = D(null);
  try {
    return oe(6, t, n), n(o) !== !1;
  } catch (i) {
    return Wc(e, i), !1;
  } finally {
    oe(7, t, n), D(r);
  }
}
function $s(e, t, n, o) {
  return function r(i) {
    if (i === Function) return o;
    let s = e.componentOffset > -1 ? Se(e.index, t) : t;
    _i(s, 5);
    let a = Hs(t, n, o, i),
      c = r.__ngNextListenerFn__;
    for (; c; ) (a = Hs(t, n, c, i) && a), (c = c.__ngNextListenerFn__);
    return a;
  };
}
function yv(e = 1) {
  return Id(e);
}
function Rg(e, t) {
  let n = null,
    o = _u(e);
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
      n = r;
      continue;
    }
    if (o === null ? da(e, i, !0) : xu(o, i)) return r;
  }
  return n;
}
function Iv(e) {
  let t = g()[G][B];
  if (!t.projection) {
    let n = e ? e.length : 1,
      o = (t.projection = yu(n, null)),
      r = o.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? Rg(i, e) : 0;
        s !== null &&
          (r[s] ? (r[s].projectionNext = i) : (o[s] = i), (r[s] = i));
      }
      i = i.next;
    }
  }
}
function Dv(e, t = 0, n, o, r, i) {
  let s = g(),
    a = T(),
    c = o ? e + 1 : null;
  c !== null && Rn(s, a, c, o, r, i, null, n);
  let l = We(a, S + e, 16, null, n || null);
  l.projection === null && (l.projection = t), ii();
  let d = !s[ot] || La();
  s[G][B].projection[l.projection] === null && c !== null
    ? Og(s, a, c)
    : d && (l.flags & 32) !== 32 && Zf(a, s, l);
}
function Og(e, t, n) {
  let o = S + n,
    r = t.data[o],
    i = e[o],
    s = at(i, r.tView.ssrId),
    a = Pt(e, r, void 0, { dehydratedView: s });
  Lt(i, a, 0, st(r, s));
}
function Ev(e, t, n, o) {
  dh(e, t, n, o);
}
function wv(e, t, n) {
  al(e, t, n);
}
function Cv(e) {
  let t = g(),
    n = T(),
    o = ai();
  zn(o + 1);
  let r = Ai(n, o);
  if (e.dirty && nd(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null) e.reset([]);
    else {
      let i = ll(t, o);
      e.reset(i, sc), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function Mv() {
  return xi(g(), ai());
}
function Nv(e, t, n, o) {
  yh(e, al(t, n, o));
}
function Tv(e = 1) {
  zn(ai() + e);
}
function ki(e, t, n, o) {
  n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)),
    (t[n] = o);
}
function _v(e) {
  let t = ja();
  return qn(t, S + e);
}
function bv(e, t = "") {
  let n = g(),
    o = T(),
    r = e + S,
    i = o.firstCreatePass ? We(o, r, 1, t, null) : o.data[r],
    s = kg(o, n, i, t, e);
  (n[r] = s), Qn() && no(o, n, s, i), xe(i, !1);
}
var kg = (e, t, n, o, r) => (Yn(!0), kf(t[_], o));
function Pg(e) {
  return Sl("", e, ""), Pg;
}
function Sl(e, t, n) {
  let o = g(),
    r = $h(o, e, t, n);
  return r !== Z && Gc(o, ae(), r), Sl;
}
function Lg(e, t, n, o, r) {
  let i = g(),
    s = Bh(i, e, t, n, o, r);
  return s !== Z && Gc(i, ae(), s), Lg;
}
function Fg(e, t, n) {
  dl(t) && (t = t());
  let o = g(),
    r = qe();
  if (z(o, r, t)) {
    let i = T(),
      s = Zn();
    Ci(i, s, o, e, t, o[_], n, !1);
  }
  return Fg;
}
function Sv(e, t) {
  let n = dl(e);
  return n && e.set(t), n;
}
function jg(e, t) {
  let n = g(),
    o = T(),
    r = k();
  return bl(o, n, n[_], r, e, t), jg;
}
var xl = {};
function Vg(e) {
  let t = T(),
    n = g(),
    o = e + S,
    r = We(t, o, 128, null, null);
  return xe(r, !1), ki(t, n, o, xl), Vg;
}
function xv(e) {
  ce("NgLet");
  let t = T(),
    n = g(),
    o = ae();
  return ki(t, n, o, e), e;
}
function Av(e) {
  let t = ja(),
    n = qn(t, S + e);
  if (n === xl) throw new I(314, !1);
  return n;
}
function Hg(e, t, n) {
  let o = T();
  if (o.firstCreatePass) {
    let r = Me(e);
    Pr(n, o.data, o.blueprint, r, !0), Pr(t, o.data, o.blueprint, r, !1);
  }
}
function Pr(e, t, n, o, r) {
  if (((e = j(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) Pr(e[i], t, n, o, r);
  else {
    let i = T(),
      s = g(),
      a = k(),
      c = nt(e) ? e : j(e.provide),
      l = Ea(e),
      u = a.providerIndexes & 1048575,
      d = a.directiveStart,
      p = a.providerIndexes >> 20;
    if (nt(e) || !e.multi) {
      let f = new Ve(l, r, ro),
        h = xo(c, t, r ? u : u + p, d);
      h === -1
        ? (Wo(In(a, s), i, c),
          So(i, e, t.length),
          t.push(c),
          a.directiveStart++,
          a.directiveEnd++,
          r && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[h] = f), (s[h] = f));
    } else {
      let f = xo(c, t, u + p, d),
        h = xo(c, t, u, u + p),
        C = f >= 0 && n[f],
        A = h >= 0 && n[h];
      if ((r && !A) || (!r && !C)) {
        Wo(In(a, s), i, c);
        let b = Ug(r ? Bg : $g, n.length, r, o, l);
        !r && A && (n[h].providerFactory = b),
          So(i, e, t.length, 0),
          t.push(c),
          a.directiveStart++,
          a.directiveEnd++,
          r && (a.providerIndexes += 1048576),
          n.push(b),
          s.push(b);
      } else {
        let b = Al(n[r ? h : f], l, !r && o);
        So(i, e, f > -1 ? f : h, b);
      }
      !r && o && A && n[h].componentProviders++;
    }
  }
}
function So(e, t, n, o) {
  let r = nt(t),
    i = Uu(t);
  if (r || i) {
    let c = (i ? j(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
      let l = e.destroyHooks || (e.destroyHooks = []);
      if (!r && t.multi) {
        let u = l.indexOf(n);
        u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
      } else l.push(n, c);
    }
  }
}
function Al(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function xo(e, t, n, o) {
  for (let r = n; r < o; r++) if (t[r] === e) return r;
  return -1;
}
function $g(e, t, n, o) {
  return Lr(this.multi, []);
}
function Bg(e, t, n, o) {
  let r = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = He(n, n[v], this.providerFactory.index, o);
    (i = a.slice(0, s)), Lr(r, i);
    for (let c = s; c < a.length; c++) i.push(a[c]);
  } else (i = []), Lr(r, i);
  return i;
}
function Lr(e, t) {
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
  }
  return t;
}
function Ug(e, t, n, o, r) {
  let i = new Ve(e, n, ro);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    Al(i, r, o && !n),
    i
  );
}
function Rv(e, t = []) {
  return (n) => {
    n.providersResolver = (o, r) => Hg(o, r ? r(e) : e, t);
  };
}
var qg = (() => {
  class e {
    constructor(n) {
      (this._injector = n), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let o = va(!1, n.type),
          r =
            o.length > 0
              ? bh([o], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, r);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
    static {
      this.ɵprov = O({
        token: e,
        providedIn: "environment",
        factory: () => new e(De(Ce)),
      });
    }
  }
  return e;
})();
function Ov(e) {
  ce("NgStandalone"),
    (e.getStandaloneInjector = (t) =>
      t.get(qg).getOrCreateStandaloneInjector(e));
}
function kv(e, t, n) {
  let o = pt() + e,
    r = g();
  return r[o] === Z ? co(r, o, n ? t.call(n) : t()) : xh(r, o);
}
function Pv(e, t, n, o) {
  return Rl(g(), pt(), e, t, n, o);
}
function Lv(e, t, n, o, r) {
  return Ol(g(), pt(), e, t, n, o, r);
}
function Fv(e, t, n, o, r, i) {
  return Wg(g(), pt(), e, t, n, o, r, i);
}
function Pi(e, t) {
  let n = e[t];
  return n === Z ? void 0 : n;
}
function Rl(e, t, n, o, r, i) {
  let s = t + n;
  return z(e, s, r) ? co(e, s + 1, i ? o.call(i, r) : o(r)) : Pi(e, s + 1);
}
function Ol(e, t, n, o, r, i, s) {
  let a = t + n;
  return Oi(e, a, r, i)
    ? co(e, a + 2, s ? o.call(s, r, i) : o(r, i))
    : Pi(e, a + 2);
}
function Wg(e, t, n, o, r, i, s, a) {
  let c = t + n;
  return Ah(e, c, r, i, s)
    ? co(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s))
    : Pi(e, c + 3);
}
function jv(e, t) {
  let n = T(),
    o,
    r = e + S;
  n.firstCreatePass
    ? ((o = Gg(t, n.pipeRegistry)),
      (n.data[r] = o),
      o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy))
    : (o = n.data[r]);
  let i = o.factory || (o.factory = ke(o.type, !0)),
    s,
    a = $(ro);
  try {
    let c = yn(!1),
      l = i();
    return yn(c), ki(n, g(), r, l), l;
  } finally {
    $(a);
  }
}
function Gg(e, t) {
  if (t)
    for (let n = t.length - 1; n >= 0; n--) {
      let o = t[n];
      if (e === o.name) return o;
    }
}
function Vv(e, t, n) {
  let o = e + S,
    r = g(),
    i = qn(r, o);
  return kl(r, o) ? Rl(r, pt(), t, i.transform, n, i) : i.transform(n);
}
function Hv(e, t, n, o) {
  let r = e + S,
    i = g(),
    s = qn(i, r);
  return kl(i, r) ? Ol(i, pt(), t, s.transform, n, o, s) : s.transform(n, o);
}
function kl(e, t) {
  return e[v].data[t].pure;
}
function $v(e, t) {
  return ao(e, t);
}
var Bv = (() => {
  class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
    static {
      this.ɵfac = function (o) {
        return new (o || e)();
      };
    }
    static {
      this.ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "platform" });
    }
  }
  return e;
})();
var zg = new M("");
function Pl(e) {
  return !!e && typeof e.then == "function";
}
function Zg(e) {
  return !!e && typeof e.subscribe == "function";
}
var Qg = new M(""),
  Ll = (() => {
    class e {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((n, o) => {
            (this.resolve = n), (this.reject = o);
          })),
          (this.appInits = w(Qg, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let r of this.appInits) {
          let i = r();
          if (Pl(i)) n.push(i);
          else if (Zg(i)) {
            let s = new Promise((a, c) => {
              i.subscribe({ complete: a, error: c });
            });
            n.push(s);
          }
        }
        let o = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(n)
          .then(() => {
            o();
          })
          .catch((r) => {
            this.reject(r);
          }),
          n.length === 0 && o(),
          (this.initialized = !0);
      }
      static {
        this.ɵfac = function (o) {
          return new (o || e)();
        };
      }
      static {
        this.ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  Yg = new M("");
function Jg() {
  Qi(() => {
    throw new I(600, !1);
  });
}
function Kg(e) {
  return e.isBoundToModule;
}
var Xg = 10;
function em(e, t, n) {
  try {
    let o = n();
    return Pl(o)
      ? o.catch((r) => {
          throw (t.runOutsideAngular(() => e.handleError(r)), r);
        })
      : o;
  } catch (o) {
    throw (t.runOutsideAngular(() => e.handleError(o)), o);
  }
}
var lo = (() => {
  class e {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = w(Wd)),
        (this.afterRenderManager = w(hl)),
        (this.zonelessEnabled = w(bi)),
        (this.dirtyFlags = 0),
        (this.deferredDirtyFlags = 0),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new Vt()),
        (this.afterTick = new Vt()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = w(Rt).hasPendingTasks.pipe(Fi((n) => !n))),
        (this._injector = w(Ce));
    }
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    whenStable() {
      let n;
      return new Promise((o) => {
        n = this.isStable.subscribe({
          next: (r) => {
            r && o();
          },
        });
      }).finally(() => {
        n.unsubscribe();
      });
    }
    get injector() {
      return this._injector;
    }
    bootstrap(n, o) {
      let r = n instanceof Tn;
      if (!this._injector.get(Ll).done) {
        let p = !r && Lu(n),
          f = !1;
        throw new I(405, f);
      }
      let s;
      r ? (s = n) : (s = this._injector.get(lt).resolveComponentFactory(n)),
        this.componentTypes.push(s.componentType);
      let a = Kg(s) ? void 0 : this._injector.get(Be),
        c = o || s.selector,
        l = s.create(Te.NULL, [], c, a),
        u = l.location.nativeElement,
        d = l.injector.get(zg, null);
      return (
        d?.registerApplication(u),
        l.onDestroy(() => {
          this.detachView(l.hostView),
            sn(this.components, l),
            d?.unregisterApplication(u);
        }),
        this._loadComponent(l),
        l
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick() {
      if (this._runningTick) throw new I(101, !1);
      let n = D(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (o) {
        this.internalErrorHandler(o);
      } finally {
        (this._runningTick = !1), D(n), this.afterTick.next();
      }
    }
    synchronize() {
      let n = null;
      this._injector.destroyed ||
        (n = this._injector.get(_n, null, { optional: !0 })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let o = 0;
      for (; this.dirtyFlags !== 0 && o++ < Xg; ) this.synchronizeOnce(n);
    }
    synchronizeOnce(n) {
      if (
        ((this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0),
        this.dirtyFlags & 7)
      ) {
        let o = !!(this.dirtyFlags & 1);
        (this.dirtyFlags &= -8),
          (this.dirtyFlags |= 8),
          this.beforeRender.next(o);
        for (let { _lView: r, notifyErrorHandler: i } of this._views)
          tm(r, i, o, this.zonelessEnabled);
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 7)
        )
          return;
      } else n?.begin?.(), n?.end?.();
      this.dirtyFlags & 8 &&
        ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: n }) => Wn(n))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(n) {
      let o = n;
      this._views.push(o), o.attachToAppRef(this);
    }
    detachView(n) {
      let o = n;
      sn(this._views, o), o.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView), this.tick(), this.components.push(n);
      let o = this._injector.get(Yg, []);
      [...this._bootstrapListeners, ...o].forEach((r) => r(n));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n), () => sn(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new I(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
    static {
      this.ɵfac = function (o) {
        return new (o || e)();
      };
    }
    static {
      this.ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function sn(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function tm(e, t, n, o) {
  if (!n && !Wn(e)) return;
  Jc(e, t, n && !o ? 0 : 1);
}
var Fr = class {
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  Uv = (() => {
    class e {
      compileModuleSync(n) {
        return new Cr(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let o = this.compileModuleSync(n),
          r = ha(n),
          i = Ec(r.declarations).reduce((s, a) => {
            let c = we(a);
            return c && s.push(new ut(c)), s;
          }, []);
        return new Fr(o, i);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
      static {
        this.ɵfac = function (o) {
          return new (o || e)();
        };
      }
      static {
        this.ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var nm = (() => {
    class e {
      constructor() {
        (this.zone = w(W)),
          (this.changeDetectionScheduler = w(ct)),
          (this.applicationRef = w(lo));
      }
      initialize() {
        this._onMicrotaskEmptySubscription ||
          (this._onMicrotaskEmptySubscription =
            this.zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this.changeDetectionScheduler.runningTick ||
                  this.zone.run(() => {
                    this.applicationRef.tick();
                  });
              },
            }));
      }
      ngOnDestroy() {
        this._onMicrotaskEmptySubscription?.unsubscribe();
      }
      static {
        this.ɵfac = function (o) {
          return new (o || e)();
        };
      }
      static {
        this.ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  om = new M("", { factory: () => !1 });
function Fl({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new W(ne(te({}, jl()), { scheduleInRootZone: n }))),
    [
      { provide: W, useFactory: e },
      {
        provide: dn,
        multi: !0,
        useFactory: () => {
          let o = w(nm, { optional: !0 });
          return () => o.initialize();
        },
      },
      {
        provide: dn,
        multi: !0,
        useFactory: () => {
          let o = w(rm);
          return () => {
            o.initialize();
          };
        },
      },
      t === !0 ? { provide: tl, useValue: !0 } : [],
      { provide: nl, useValue: n ?? oc },
    ]
  );
}
function qv(e) {
  let t = e?.ignoreChangesOutsideZone,
    n = e?.scheduleInRootZone,
    o = Fl({
      ngZoneFactory: () => {
        let r = jl(e);
        return (
          (r.scheduleInRootZone = n),
          r.shouldCoalesceEventChangeDetection && ce("NgZone_CoalesceEvent"),
          new W(r)
        );
      },
      ignoreChangesOutsideZone: t,
      scheduleInRootZone: n,
    });
  return ju([{ provide: om, useValue: !0 }, { provide: bi, useValue: !1 }, o]);
}
function jl(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var rm = (() => {
  class e {
    constructor() {
      (this.subscription = new jt()),
        (this.initialized = !1),
        (this.zone = w(W)),
        (this.pendingTasks = w(Rt));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              W.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                });
            })
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            W.assertInAngularZone(), (n ??= this.pendingTasks.add());
          })
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function (o) {
        return new (o || e)();
      };
    }
    static {
      this.ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var im = (() => {
  class e {
    constructor() {
      (this.appRef = w(lo)),
        (this.taskService = w(Rt)),
        (this.ngZone = w(W)),
        (this.zonelessEnabled = w(bi)),
        (this.disableScheduling = w(tl, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new jt()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get(En)
          : null),
        (this.scheduleInRootZone =
          !this.zonelessEnabled &&
          this.zoneIsDefined &&
          (w(nl, { optional: !0 }) ?? !1)),
        (this.cancelScheduledCallback = null),
        (this.useMicrotaskScheduler = !1),
        (this.runningTick = !1),
        (this.pendingRenderTaskId = null),
        this.subscriptions.add(
          this.appRef.afterTick.subscribe(() => {
            this.runningTick || this.cleanup();
          })
        ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          })
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof Yo || !this.zoneIsDefined));
    }
    notify(n) {
      if (!this.zonelessEnabled && n === 5) return;
      switch (n) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 7: {
          this.appRef.deferredDirtyFlags |= 8;
          break;
        }
        case 9:
        case 8:
        case 6:
        case 10:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (!this.shouldScheduleTick()) return;
      let o = this.useMicrotaskScheduler ? gs : rc;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              o(() => this.tick())
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              o(() => this.tick())
            ));
    }
    shouldScheduleTick() {
      return !(
        this.disableScheduling ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(En + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let n = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs
        );
      } catch (o) {
        throw (this.taskService.remove(n), o);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        gs(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(n);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let n = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(n);
      }
    }
    static {
      this.ɵfac = function (o) {
        return new (o || e)();
      };
    }
    static {
      this.ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function sm() {
  return (typeof $localize < "u" && $localize.locale) || Ln;
}
var Vl = new M("", {
    providedIn: "root",
    factory: () => w(Vl, E.Optional | E.SkipSelf) || sm(),
  }),
  Wv = new M("", { providedIn: "root", factory: () => Tg });
var jr = new M("");
function Xt(e) {
  return !e.moduleRef;
}
function am(e) {
  let t = Xt(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(W);
  return n.run(() => {
    Xt(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let o = t.get(_e, null),
      r;
    if (
      (n.runOutsideAngular(() => {
        r = n.onError.subscribe({
          next: (i) => {
            o.handleError(i);
          },
        });
      }),
      Xt(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(jr);
      s.add(i),
        t.onDestroy(() => {
          r.unsubscribe(), s.delete(i);
        });
    } else {
      let i = () => e.moduleRef.destroy(),
        s = e.platformInjector.get(jr);
      s.add(i),
        e.moduleRef.onDestroy(() => {
          sn(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i);
        });
    }
    return em(o, n, () => {
      let i = t.get(Ll);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(Vl, Ln);
          if ((bg(s || Ln), Xt(e))) {
            let a = t.get(lo);
            return (
              e.rootComponent !== void 0 && a.bootstrap(e.rootComponent), a
            );
          } else return cm(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function cm(e, t) {
  let n = e.injector.get(lo);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((o) => n.bootstrap(o));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new I(-403, !1);
  t.push(e);
}
var an = null;
function lm(e = [], t) {
  return Te.create({
    name: t,
    providers: [
      { provide: Da, useValue: "platform" },
      { provide: jr, useValue: new Set([() => (an = null)]) },
      ...e,
    ],
  });
}
function um(e = []) {
  if (an) return an;
  let t = lm(e);
  return (an = t), Jg(), dm(t), t;
}
function dm(e) {
  e.get(Xd, null)?.forEach((n) => n());
}
function Gv() {
  return !1;
}
var fm = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = pm;
    }
  }
  return e;
})();
function pm(e) {
  return hm(k(), g(), (e & 16) === 16);
}
function hm(e, t, n) {
  if (Bn(e) && !n) {
    let o = Se(e.index, t);
    return new $e(o, o);
  } else if (e.type & 175) {
    let o = t[G];
    return new $e(o, t);
  }
  return null;
}
var Vr = class {
    constructor() {}
    supports(t) {
      return pl(t);
    }
    create(t) {
      return new Hr(t);
    }
  },
  gm = (e, t) => t,
  Hr = class {
    constructor(t) {
      (this.length = 0),
        (this._linkedRecords = null),
        (this._unlinkedRecords = null),
        (this._previousItHead = null),
        (this._itHead = null),
        (this._itTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._movesHead = null),
        (this._movesTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null),
        (this._identityChangesHead = null),
        (this._identityChangesTail = null),
        (this._trackByFn = t || gm);
    }
    forEachItem(t) {
      let n;
      for (n = this._itHead; n !== null; n = n._next) t(n);
    }
    forEachOperation(t) {
      let n = this._itHead,
        o = this._removalsHead,
        r = 0,
        i = null;
      for (; n || o; ) {
        let s = !o || (n && n.currentIndex < Bs(o, r, i)) ? n : o,
          a = Bs(s, r, i),
          c = s.currentIndex;
        if (s === o) r--, (o = o._nextRemoved);
        else if (((n = n._next), s.previousIndex == null)) r++;
        else {
          i || (i = []);
          let l = a - r,
            u = c - r;
          if (l != u) {
            for (let p = 0; p < l; p++) {
              let f = p < i.length ? i[p] : (i[p] = 0),
                h = f + p;
              u <= h && h < l && (i[p] = f + 1);
            }
            let d = s.previousIndex;
            i[d] = u - l;
          }
        }
        a !== c && t(s, a, c);
      }
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousItHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachMovedItem(t) {
      let n;
      for (n = this._movesHead; n !== null; n = n._nextMoved) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    forEachIdentityChange(t) {
      let n;
      for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n);
    }
    diff(t) {
      if ((t == null && (t = []), !pl(t))) throw new I(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._itHead,
        o = !1,
        r,
        i,
        s;
      if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
          (i = t[a]),
            (s = this._trackByFn(a, i)),
            n === null || !Object.is(n.trackById, s)
              ? ((n = this._mismatch(n, i, s, a)), (o = !0))
              : (o && (n = this._verifyReinsertion(n, i, s, a)),
                Object.is(n.item, i) || this._addIdentityChange(n, i)),
            (n = n._next);
      } else
        (r = 0),
          Sh(t, (a) => {
            (s = this._trackByFn(r, a)),
              n === null || !Object.is(n.trackById, s)
                ? ((n = this._mismatch(n, a, s, r)), (o = !0))
                : (o && (n = this._verifyReinsertion(n, a, s, r)),
                  Object.is(n.item, a) || this._addIdentityChange(n, a)),
              (n = n._next),
              r++;
          }),
          (this.length = r);
      return this._truncate(n), (this.collection = t), this.isDirty;
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._movesHead !== null ||
        this._removalsHead !== null ||
        this._identityChangesHead !== null
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
          t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
          t.previousIndex = t.currentIndex;
        for (
          this._additionsHead = this._additionsTail = null, t = this._movesHead;
          t !== null;
          t = t._nextMoved
        )
          t.previousIndex = t.currentIndex;
        (this._movesHead = this._movesTail = null),
          (this._removalsHead = this._removalsTail = null),
          (this._identityChangesHead = this._identityChangesTail = null);
      }
    }
    _mismatch(t, n, o, r) {
      let i;
      return (
        t === null ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
        (t =
          this._unlinkedRecords === null
            ? null
            : this._unlinkedRecords.get(o, null)),
        t !== null
          ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
            this._reinsertAfter(t, i, r))
          : ((t =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(o, r)),
            t !== null
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, r))
              : (t = this._addAfter(new $r(n, o), i, r))),
        t
      );
    }
    _verifyReinsertion(t, n, o, r) {
      let i =
        this._unlinkedRecords === null
          ? null
          : this._unlinkedRecords.get(o, null);
      return (
        i !== null
          ? (t = this._reinsertAfter(i, t._prev, r))
          : t.currentIndex != r &&
            ((t.currentIndex = r), this._addToMoves(t, r)),
        t
      );
    }
    _truncate(t) {
      for (; t !== null; ) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), (t = n);
      }
      this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null &&
          (this._identityChangesTail._nextIdentityChange = null);
    }
    _reinsertAfter(t, n, o) {
      this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
      let r = t._prevRemoved,
        i = t._nextRemoved;
      return (
        r === null ? (this._removalsHead = i) : (r._nextRemoved = i),
        i === null ? (this._removalsTail = r) : (i._prevRemoved = r),
        this._insertAfter(t, n, o),
        this._addToMoves(t, o),
        t
      );
    }
    _moveAfter(t, n, o) {
      return (
        this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t
      );
    }
    _addAfter(t, n, o) {
      return (
        this._insertAfter(t, n, o),
        this._additionsTail === null
          ? (this._additionsTail = this._additionsHead = t)
          : (this._additionsTail = this._additionsTail._nextAdded = t),
        t
      );
    }
    _insertAfter(t, n, o) {
      let r = n === null ? this._itHead : n._next;
      return (
        (t._next = r),
        (t._prev = n),
        r === null ? (this._itTail = t) : (r._prev = t),
        n === null ? (this._itHead = t) : (n._next = t),
        this._linkedRecords === null && (this._linkedRecords = new Fn()),
        this._linkedRecords.put(t),
        (t.currentIndex = o),
        t
      );
    }
    _remove(t) {
      return this._addToRemovals(this._unlink(t));
    }
    _unlink(t) {
      this._linkedRecords !== null && this._linkedRecords.remove(t);
      let n = t._prev,
        o = t._next;
      return (
        n === null ? (this._itHead = o) : (n._next = o),
        o === null ? (this._itTail = n) : (o._prev = n),
        t
      );
    }
    _addToMoves(t, n) {
      return (
        t.previousIndex === n ||
          (this._movesTail === null
            ? (this._movesTail = this._movesHead = t)
            : (this._movesTail = this._movesTail._nextMoved = t)),
        t
      );
    }
    _addToRemovals(t) {
      return (
        this._unlinkedRecords === null && (this._unlinkedRecords = new Fn()),
        this._unlinkedRecords.put(t),
        (t.currentIndex = null),
        (t._nextRemoved = null),
        this._removalsTail === null
          ? ((this._removalsTail = this._removalsHead = t),
            (t._prevRemoved = null))
          : ((t._prevRemoved = this._removalsTail),
            (this._removalsTail = this._removalsTail._nextRemoved = t)),
        t
      );
    }
    _addIdentityChange(t, n) {
      return (
        (t.item = n),
        this._identityChangesTail === null
          ? (this._identityChangesTail = this._identityChangesHead = t)
          : (this._identityChangesTail =
              this._identityChangesTail._nextIdentityChange =
                t),
        t
      );
    }
  },
  $r = class {
    constructor(t, n) {
      (this.item = t),
        (this.trackById = n),
        (this.currentIndex = null),
        (this.previousIndex = null),
        (this._nextPrevious = null),
        (this._prev = null),
        (this._next = null),
        (this._prevDup = null),
        (this._nextDup = null),
        (this._prevRemoved = null),
        (this._nextRemoved = null),
        (this._nextAdded = null),
        (this._nextMoved = null),
        (this._nextIdentityChange = null);
    }
  },
  Br = class {
    constructor() {
      (this._head = null), (this._tail = null);
    }
    add(t) {
      this._head === null
        ? ((this._head = this._tail = t),
          (t._nextDup = null),
          (t._prevDup = null))
        : ((this._tail._nextDup = t),
          (t._prevDup = this._tail),
          (t._nextDup = null),
          (this._tail = t));
    }
    get(t, n) {
      let o;
      for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
          return o;
      return null;
    }
    remove(t) {
      let n = t._prevDup,
        o = t._nextDup;
      return (
        n === null ? (this._head = o) : (n._nextDup = o),
        o === null ? (this._tail = n) : (o._prevDup = n),
        this._head === null
      );
    }
  },
  Fn = class {
    constructor() {
      this.map = new Map();
    }
    put(t) {
      let n = t.trackById,
        o = this.map.get(n);
      o || ((o = new Br()), this.map.set(n, o)), o.add(t);
    }
    get(t, n) {
      let o = t,
        r = this.map.get(o);
      return r ? r.get(t, n) : null;
    }
    remove(t) {
      let n = t.trackById;
      return this.map.get(n).remove(t) && this.map.delete(n), t;
    }
    get isEmpty() {
      return this.map.size === 0;
    }
    clear() {
      this.map.clear();
    }
  };
function Bs(e, t, n) {
  let o = e.previousIndex;
  if (o === null) return o;
  let r = 0;
  return n && o < n.length && (r = n[o]), o + t + r;
}
var Ur = class {
    constructor() {}
    supports(t) {
      return t instanceof Map || Ri(t);
    }
    create() {
      return new qr();
    }
  },
  qr = class {
    constructor() {
      (this._records = new Map()),
        (this._mapHead = null),
        (this._appendAfter = null),
        (this._previousMapHead = null),
        (this._changesHead = null),
        (this._changesTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null);
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._changesHead !== null ||
        this._removalsHead !== null
      );
    }
    forEachItem(t) {
      let n;
      for (n = this._mapHead; n !== null; n = n._next) t(n);
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousMapHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachChangedItem(t) {
      let n;
      for (n = this._changesHead; n !== null; n = n._nextChanged) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    diff(t) {
      if (!t) t = new Map();
      else if (!(t instanceof Map || Ri(t))) throw new I(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._mapHead;
      if (
        ((this._appendAfter = null),
        this._forEach(t, (o, r) => {
          if (n && n.key === r)
            this._maybeAddToChanges(n, o),
              (this._appendAfter = n),
              (n = n._next);
          else {
            let i = this._getOrCreateRecordForKey(r, o);
            n = this._insertBeforeOrAppend(n, i);
          }
        }),
        n)
      ) {
        n._prev && (n._prev._next = null), (this._removalsHead = n);
        for (let o = n; o !== null; o = o._nextRemoved)
          o === this._mapHead && (this._mapHead = null),
            this._records.delete(o.key),
            (o._nextRemoved = o._next),
            (o.previousValue = o.currentValue),
            (o.currentValue = null),
            (o._prev = null),
            (o._next = null);
      }
      return (
        this._changesTail && (this._changesTail._nextChanged = null),
        this._additionsTail && (this._additionsTail._nextAdded = null),
        this.isDirty
      );
    }
    _insertBeforeOrAppend(t, n) {
      if (t) {
        let o = t._prev;
        return (
          (n._next = t),
          (n._prev = o),
          (t._prev = n),
          o && (o._next = n),
          t === this._mapHead && (this._mapHead = n),
          (this._appendAfter = t),
          t
        );
      }
      return (
        this._appendAfter
          ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
          : (this._mapHead = n),
        (this._appendAfter = n),
        null
      );
    }
    _getOrCreateRecordForKey(t, n) {
      if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev,
          s = r._next;
        return (
          i && (i._next = s),
          s && (s._prev = i),
          (r._next = null),
          (r._prev = null),
          r
        );
      }
      let o = new Wr(t);
      return (
        this._records.set(t, o),
        (o.currentValue = n),
        this._addToAdditions(o),
        o
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (
          this._previousMapHead = this._mapHead, t = this._previousMapHead;
          t !== null;
          t = t._next
        )
          t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
          t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
          t.previousValue = t.currentValue;
        (this._changesHead = this._changesTail = null),
          (this._additionsHead = this._additionsTail = null),
          (this._removalsHead = null);
      }
    }
    _maybeAddToChanges(t, n) {
      Object.is(n, t.currentValue) ||
        ((t.previousValue = t.currentValue),
        (t.currentValue = n),
        this._addToChanges(t));
    }
    _addToAdditions(t) {
      this._additionsHead === null
        ? (this._additionsHead = this._additionsTail = t)
        : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
    }
    _addToChanges(t) {
      this._changesHead === null
        ? (this._changesHead = this._changesTail = t)
        : ((this._changesTail._nextChanged = t), (this._changesTail = t));
    }
    _forEach(t, n) {
      t instanceof Map
        ? t.forEach(n)
        : Object.keys(t).forEach((o) => n(t[o], o));
    }
  },
  Wr = class {
    constructor(t) {
      (this.key = t),
        (this.previousValue = null),
        (this.currentValue = null),
        (this._nextPrevious = null),
        (this._next = null),
        (this._prev = null),
        (this._nextAdded = null),
        (this._nextRemoved = null),
        (this._nextChanged = null);
    }
  };
function Us() {
  return new mm([new Vr()]);
}
var mm = (() => {
  class e {
    static {
      this.ɵprov = O({ token: e, providedIn: "root", factory: Us });
    }
    constructor(n) {
      this.factories = n;
    }
    static create(n, o) {
      if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (o) => e.create(n, o || Us()),
        deps: [[e, new ra(), new oa()]],
      };
    }
    find(n) {
      let o = this.factories.find((r) => r.supports(n));
      if (o != null) return o;
      throw new I(901, !1);
    }
  }
  return e;
})();
function qs() {
  return new vm([new Ur()]);
}
var vm = (() => {
  class e {
    static {
      this.ɵprov = O({ token: e, providedIn: "root", factory: qs });
    }
    constructor(n) {
      this.factories = n;
    }
    static create(n, o) {
      if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (o) => e.create(n, o || qs()),
        deps: [[e, new ra(), new oa()]],
      };
    }
    find(n) {
      let o = this.factories.find((r) => r.supports(n));
      if (o) return o;
      throw new I(901, !1);
    }
  }
  return e;
})();
function zv(e) {
  try {
    let { rootComponent: t, appProviders: n, platformProviders: o } = e,
      r = um(o),
      i = [Fl({}), { provide: ct, useExisting: im }, ...(n || [])],
      s = new An({
        providers: i,
        parent: r,
        debugName: "",
        runEnvironmentInitializers: !1,
      });
    return am({
      r3Injector: s.injector,
      platformInjector: r,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  }
}
function Zv(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function Qv(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function Yv(e, t) {
  ce("NgSignals");
  let n = go(e);
  return t?.equal && (n[H].equal = t.equal), n;
}
function Jv(e) {
  let t = D(null);
  try {
    return e();
  } finally {
    D(t);
  }
}
var ym = new M("", { providedIn: "root", factory: () => w(Im) }),
  Im = (() => {
    class e {
      static {
        this.ɵprov = O({
          token: e,
          providedIn: "root",
          factory: () => new Gr(),
        });
      }
    }
    return e;
  })(),
  Gr = class {
    constructor() {
      (this.queuedEffectCount = 0),
        (this.queues = new Map()),
        (this.pendingTasks = w(Rt)),
        (this.taskId = null);
    }
    scheduleEffect(t) {
      if ((this.enqueue(t), this.taskId === null)) {
        let n = (this.taskId = this.pendingTasks.add());
        queueMicrotask(() => {
          this.flush(), this.pendingTasks.remove(n), (this.taskId = null);
        });
      }
    }
    enqueue(t) {
      let n = t.creationZone;
      this.queues.has(n) || this.queues.set(n, new Set());
      let o = this.queues.get(n);
      o.has(t) || (this.queuedEffectCount++, o.add(t));
    }
    flush() {
      for (; this.queuedEffectCount > 0; )
        for (let [t, n] of this.queues)
          t === null ? this.flushQueue(n) : t.run(() => this.flushQueue(n));
    }
    flushQueue(t) {
      for (let n of t) t.delete(n), this.queuedEffectCount--, n.run();
    }
  },
  zr = class {
    constructor(t, n, o, r, i, s) {
      (this.scheduler = t),
        (this.effectFn = n),
        (this.creationZone = o),
        (this.injector = i),
        (this.watcher = Ki(
          (a) => this.runEffect(a),
          () => this.schedule(),
          s
        )),
        (this.unregisterOnDestroy = r?.onDestroy(() => this.destroy()));
    }
    runEffect(t) {
      try {
        this.effectFn(t);
      } catch (n) {
        this.injector.get(_e, null, { optional: !0 })?.handleError(n);
      }
    }
    run() {
      this.watcher.run();
    }
    schedule() {
      this.scheduler.scheduleEffect(this);
    }
    destroy() {
      this.watcher.destroy(), this.unregisterOnDestroy?.();
    }
  };
function Dm(e, t) {
  ce("NgSignals"), !t?.injector && ei(Dm);
  let n = t?.injector ?? w(Te),
    o = t?.manualCleanup !== !0 ? n.get(At) : null,
    r = new zr(
      n.get(ym),
      e,
      typeof Zone > "u" ? null : Zone.current,
      o,
      n,
      t?.allowSignalWrites ?? !1
    ),
    i = n.get(fm, null, { optional: !0 });
  return (
    !i || !(i._lView[m] & 8)
      ? r.watcher.notify()
      : (i._lView[tn] ??= []).push(r.watcher.notify),
    r
  );
}
function Kv(e) {
  let t = we(e);
  if (!t) return null;
  let n = new ut(t);
  return {
    get selector() {
      return n.selector;
    },
    get type() {
      return n.componentType;
    },
    get inputs() {
      return n.inputs;
    },
    get outputs() {
      return n.outputs;
    },
    get ngContentSelectors() {
      return n.ngContentSelectors;
    },
    get isStandalone() {
      return t.standalone;
    },
    get isSignal() {
      return t.signals;
    },
  };
}
export {
  I as a,
  q as b,
  Qs as c,
  O as d,
  bm as e,
  Sm as f,
  M as g,
  E as h,
  De as i,
  w as j,
  oa as k,
  ra as l,
  Ct as m,
  xm as n,
  Am as o,
  Rm as p,
  Om as q,
  ju as r,
  Da as s,
  Ce as t,
  km as u,
  ei as v,
  Ju as w,
  Pm as x,
  Lm as y,
  Fm as z,
  jm as A,
  Vm as B,
  Hm as C,
  Te as D,
  At as E,
  Rt as F,
  ue as G,
  W as H,
  _e as I,
  $m as J,
  Bm as K,
  Kn as L,
  Jo as M,
  Um as N,
  qm as O,
  Xd as P,
  ef as Q,
  Wm as R,
  Gm as S,
  tf as T,
  zm as U,
  Ot as V,
  hi as W,
  Zm as X,
  Qm as Y,
  Ym as Z,
  Jm as _,
  Km as $,
  gc as aa,
  Mf as ba,
  eo as ca,
  Xm as da,
  Tf as ea,
  _f as fa,
  ev as ga,
  tv as ha,
  cr as ia,
  nv as ja,
  ro as ka,
  ov as la,
  Nn as ma,
  lt as na,
  _n as oa,
  sv as pa,
  Si as qa,
  ce as ra,
  hh as sa,
  gh as ta,
  cv as ua,
  lv as va,
  wh as wa,
  uv as xa,
  Er as ya,
  bh as za,
  kh as Aa,
  Fh as Ba,
  jh as Ca,
  Hh as Da,
  Xh as Ea,
  eg as Fa,
  tg as Ga,
  dv as Ha,
  fv as Ia,
  pv as Ja,
  hv as Ka,
  gv as La,
  Ml as Ma,
  Nl as Na,
  mg as Oa,
  Tl as Pa,
  _l as Qa,
  Ig as Ra,
  mv as Sa,
  Eg as Ta,
  vv as Ua,
  Mg as Va,
  xg as Wa,
  yv as Xa,
  Iv as Ya,
  Dv as Za,
  Ev as _a,
  wv as $a,
  Cv as ab,
  Mv as bb,
  Nv as cb,
  Tv as db,
  _v as eb,
  bv as fb,
  Pg as gb,
  Sl as hb,
  Lg as ib,
  Fg as jb,
  Sv as kb,
  jg as lb,
  Vg as mb,
  xv as nb,
  Av as ob,
  Rv as pb,
  Ov as qb,
  kv as rb,
  Pv as sb,
  Lv as tb,
  Fv as ub,
  jv as vb,
  Vv as wb,
  Hv as xb,
  $v as yb,
  Bv as zb,
  Pl as Ab,
  Zg as Bb,
  Qg as Cb,
  Yg as Db,
  lo as Eb,
  Uv as Fb,
  qv as Gb,
  Vl as Hb,
  Wv as Ib,
  Gv as Jb,
  fm as Kb,
  mm as Lb,
  vm as Mb,
  zv as Nb,
  Zv as Ob,
  Qv as Pb,
  Yv as Qb,
  Jv as Rb,
  Dm as Sb,
  Kv as Tb,
};
