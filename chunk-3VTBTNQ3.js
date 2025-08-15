import { b as wt } from "./chunk-PV7NZOQN.js";
import {
  b as oe,
  c as ie,
  d as Ct,
  i as se,
  j as ce,
  k as fe,
  n as Bt,
} from "./chunk-4467BSCR.js";
import { a as $, b as J, g as Le, q as V } from "./chunk-KXQY476L.js";
V();
V();
var zt = {};
Le(zt, {
  bitGet: () => Ve,
  bitLen: () => $e,
  bitMask: () => bt,
  bitSet: () => Pe,
  bytesToHex: () => ft,
  bytesToNumberBE: () => H,
  bytesToNumberLE: () => It,
  concatBytes: () => P,
  createHmacDrbg: () => Pt,
  ensureBytes: () => Z,
  equalBytes: () => Ce,
  hexToBytes: () => at,
  hexToNumber: () => Vt,
  numberToBytesBE: () => G,
  numberToBytesLE: () => At,
  numberToHexUnpadded: () => le,
  numberToVarBytesBE: () => ke,
  utf8ToBytes: () => yt,
  validateObject: () => Q,
});
V();
var ue = BigInt(0),
  vt = BigInt(1),
  He = BigInt(2),
  St = (t) => t instanceof Uint8Array,
  Ze = Array.from({ length: 256 }, (t, n) => n.toString(16).padStart(2, "0"));
function ft(t) {
  if (!St(t)) throw new Error("Uint8Array expected");
  let n = "";
  for (let e = 0; e < t.length; e++) n += Ze[t[e]];
  return n;
}
function le(t) {
  let n = t.toString(16);
  return n.length & 1 ? `0${n}` : n;
}
function Vt(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
function at(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  let n = t.length;
  if (n % 2)
    throw new Error(
      "padded hex string expected, got unpadded hex of length " + n
    );
  let e = new Uint8Array(n / 2);
  for (let r = 0; r < e.length; r++) {
    let o = r * 2,
      i = t.slice(o, o + 2),
      f = Number.parseInt(i, 16);
    if (Number.isNaN(f) || f < 0) throw new Error("Invalid byte sequence");
    e[r] = f;
  }
  return e;
}
function H(t) {
  return Vt(ft(t));
}
function It(t) {
  if (!St(t)) throw new Error("Uint8Array expected");
  return Vt(ft(Uint8Array.from(t).reverse()));
}
function G(t, n) {
  return at(t.toString(16).padStart(n * 2, "0"));
}
function At(t, n) {
  return G(t, n).reverse();
}
function ke(t) {
  return at(le(t));
}
function Z(t, n, e) {
  let r;
  if (typeof n == "string")
    try {
      r = at(n);
    } catch (i) {
      throw new Error(`${t} must be valid hex string, got "${n}". Cause: ${i}`);
    }
  else if (St(n)) r = Uint8Array.from(n);
  else throw new Error(`${t} must be hex string or Uint8Array`);
  let o = r.length;
  if (typeof e == "number" && o !== e)
    throw new Error(`${t} expected ${e} bytes, got ${o}`);
  return r;
}
function P(...t) {
  let n = new Uint8Array(t.reduce((r, o) => r + o.length, 0)),
    e = 0;
  return (
    t.forEach((r) => {
      if (!St(r)) throw new Error("Uint8Array expected");
      n.set(r, e), (e += r.length);
    }),
    n
  );
}
function Ce(t, n) {
  if (t.length !== n.length) return !1;
  for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
  return !0;
}
function yt(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function $e(t) {
  let n;
  for (n = 0; t > ue; t >>= vt, n += 1);
  return n;
}
function Ve(t, n) {
  return (t >> BigInt(n)) & vt;
}
var Pe = (t, n, e) => t | ((e ? vt : ue) << BigInt(n)),
  bt = (t) => (He << BigInt(t - 1)) - vt,
  $t = (t) => new Uint8Array(t),
  ae = (t) => Uint8Array.from(t);
function Pt(t, n, e) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof n != "number" || n < 2)
    throw new Error("qByteLen must be a number");
  if (typeof e != "function") throw new Error("hmacFn must be a function");
  let r = $t(t),
    o = $t(t),
    i = 0,
    f = () => {
      r.fill(1), o.fill(0), (i = 0);
    },
    s = (...l) => e(o, r, ...l),
    c = (l = $t()) => {
      (o = s(ae([0]), l)),
        (r = s()),
        l.length !== 0 && ((o = s(ae([1]), l)), (r = s()));
    },
    a = () => {
      if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let l = 0,
        I = [];
      for (; l < n; ) {
        r = s();
        let B = r.slice();
        I.push(B), (l += r.length);
      }
      return P(...I);
    };
  return (l, I) => {
    f(), c(l);
    let B;
    for (; !(B = I(a())); ) c();
    return f(), B;
  };
}
var ze = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || t instanceof Uint8Array,
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, n) => n.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen),
};
function Q(t, n, e = {}) {
  let r = (o, i, f) => {
    let s = ze[i];
    if (typeof s != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    let c = t[o];
    if (!(f && c === void 0) && !s(c, t))
      throw new Error(
        `Invalid param ${String(o)}=${c} (${typeof c}), expected ${i}`
      );
  };
  for (let [o, i] of Object.entries(n)) r(o, i, !1);
  for (let [o, i] of Object.entries(e)) r(o, i, !0);
  return t;
}
var k = BigInt(0),
  R = BigInt(1),
  ut = BigInt(2),
  je = BigInt(3),
  jt = BigInt(4),
  de = BigInt(5),
  he = BigInt(8),
  Ke = BigInt(9),
  De = BigInt(16);
function L(t, n) {
  let e = t % n;
  return e >= k ? e : n + e;
}
function Me(t, n, e) {
  if (e <= k || n < k) throw new Error("Expected power/modulo > 0");
  if (e === R) return k;
  let r = R;
  for (; n > k; ) n & R && (r = (r * t) % e), (t = (t * t) % e), (n >>= R);
  return r;
}
function Y(t, n, e) {
  let r = t;
  for (; n-- > k; ) (r *= r), (r %= e);
  return r;
}
function Ot(t, n) {
  if (t === k || n <= k)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${n}`);
  let e = L(t, n),
    r = n,
    o = k,
    i = R,
    f = R,
    s = k;
  for (; e !== k; ) {
    let a = r / e,
      g = r % e,
      l = o - f * a,
      I = i - s * a;
    (r = e), (e = g), (o = f), (i = s), (f = l), (s = I);
  }
  if (r !== R) throw new Error("invert: does not exist");
  return L(o, n);
}
function Ye(t) {
  let n = (t - R) / ut,
    e,
    r,
    o;
  for (e = t - R, r = 0; e % ut === k; e /= ut, r++);
  for (o = ut; o < t && Me(o, n, t) !== t - R; o++);
  if (r === 1) {
    let f = (t + R) / jt;
    return function (c, a) {
      let g = c.pow(a, f);
      if (!c.eql(c.sqr(g), a)) throw new Error("Cannot find square root");
      return g;
    };
  }
  let i = (e + R) / ut;
  return function (s, c) {
    if (s.pow(c, n) === s.neg(s.ONE))
      throw new Error("Cannot find square root");
    let a = r,
      g = s.pow(s.mul(s.ONE, o), e),
      l = s.pow(c, i),
      I = s.pow(c, e);
    for (; !s.eql(I, s.ONE); ) {
      if (s.eql(I, s.ZERO)) return s.ZERO;
      let B = 1;
      for (let u = s.sqr(I); B < a && !s.eql(u, s.ONE); B++) u = s.sqr(u);
      let b = s.pow(g, R << BigInt(a - B - 1));
      (g = s.sqr(b)), (l = s.mul(l, b)), (I = s.mul(I, g)), (a = B);
    }
    return l;
  };
}
function Ge(t) {
  if (t % jt === je) {
    let n = (t + R) / jt;
    return function (r, o) {
      let i = r.pow(o, n);
      if (!r.eql(r.sqr(i), o)) throw new Error("Cannot find square root");
      return i;
    };
  }
  if (t % he === de) {
    let n = (t - de) / he;
    return function (r, o) {
      let i = r.mul(o, ut),
        f = r.pow(i, n),
        s = r.mul(o, f),
        c = r.mul(r.mul(s, ut), f),
        a = r.mul(s, r.sub(c, r.ONE));
      if (!r.eql(r.sqr(a), o)) throw new Error("Cannot find square root");
      return a;
    };
  }
  return t % De, Ye(t);
}
var We = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN",
];
function qt(t) {
  let n = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger",
    },
    e = We.reduce((r, o) => ((r[o] = "function"), r), n);
  return Q(t, e);
}
function Xe(t, n, e) {
  if (e < k) throw new Error("Expected power > 0");
  if (e === k) return t.ONE;
  if (e === R) return n;
  let r = t.ONE,
    o = n;
  for (; e > k; ) e & R && (r = t.mul(r, o)), (o = t.sqr(o)), (e >>= R);
  return r;
}
function Qe(t, n) {
  let e = new Array(n.length),
    r = n.reduce(
      (i, f, s) => (t.is0(f) ? i : ((e[s] = i), t.mul(i, f))),
      t.ONE
    ),
    o = t.inv(r);
  return (
    n.reduceRight(
      (i, f, s) => (t.is0(f) ? i : ((e[s] = t.mul(i, e[s])), t.mul(i, f))),
      o
    ),
    e
  );
}
function Kt(t, n) {
  let e = n !== void 0 ? n : t.toString(2).length,
    r = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: r };
}
function me(t, n, e = !1, r = {}) {
  if (t <= k) throw new Error(`Expected Field ORDER > 0, got ${t}`);
  let { nBitLength: o, nByteLength: i } = Kt(t, n);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  let f = Ge(t),
    s = Object.freeze({
      ORDER: t,
      BITS: o,
      BYTES: i,
      MASK: bt(o),
      ZERO: k,
      ONE: R,
      create: (c) => L(c, t),
      isValid: (c) => {
        if (typeof c != "bigint")
          throw new Error(
            `Invalid field element: expected bigint, got ${typeof c}`
          );
        return k <= c && c < t;
      },
      is0: (c) => c === k,
      isOdd: (c) => (c & R) === R,
      neg: (c) => L(-c, t),
      eql: (c, a) => c === a,
      sqr: (c) => L(c * c, t),
      add: (c, a) => L(c + a, t),
      sub: (c, a) => L(c - a, t),
      mul: (c, a) => L(c * a, t),
      pow: (c, a) => Xe(s, c, a),
      div: (c, a) => L(c * Ot(a, t), t),
      sqrN: (c) => c * c,
      addN: (c, a) => c + a,
      subN: (c, a) => c - a,
      mulN: (c, a) => c * a,
      inv: (c) => Ot(c, t),
      sqrt: r.sqrt || ((c) => f(s, c)),
      invertBatch: (c) => Qe(s, c),
      cmov: (c, a, g) => (g ? a : c),
      toBytes: (c) => (e ? At(c, i) : G(c, i)),
      fromBytes: (c) => {
        if (c.length !== i)
          throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);
        return e ? It(c) : H(c);
      },
    });
  return Object.freeze(s);
}
function ge(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  let n = t.toString(2).length;
  return Math.ceil(n / 8);
}
function Dt(t) {
  let n = ge(t);
  return n + Math.ceil(n / 2);
}
function we(t, n, e = !1) {
  let r = t.length,
    o = ge(n),
    i = Dt(n);
  if (r < 16 || r < i || r > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);
  let f = e ? H(t) : It(t),
    s = L(f, n - R) + R;
  return e ? At(s, o) : G(s, o);
}
V();
V();
var Fe = BigInt(0),
  Mt = BigInt(1);
function ye(t, n) {
  let e = (o, i) => {
      let f = i.negate();
      return o ? f : i;
    },
    r = (o) => {
      let i = Math.ceil(n / o) + 1,
        f = 2 ** (o - 1);
      return { windows: i, windowSize: f };
    };
  return {
    constTimeNegate: e,
    unsafeLadder(o, i) {
      let f = t.ZERO,
        s = o;
      for (; i > Fe; ) i & Mt && (f = f.add(s)), (s = s.double()), (i >>= Mt);
      return f;
    },
    precomputeWindow(o, i) {
      let { windows: f, windowSize: s } = r(i),
        c = [],
        a = o,
        g = a;
      for (let l = 0; l < f; l++) {
        (g = a), c.push(g);
        for (let I = 1; I < s; I++) (g = g.add(a)), c.push(g);
        a = g.double();
      }
      return c;
    },
    wNAF(o, i, f) {
      let { windows: s, windowSize: c } = r(o),
        a = t.ZERO,
        g = t.BASE,
        l = BigInt(2 ** o - 1),
        I = 2 ** o,
        B = BigInt(o);
      for (let b = 0; b < s; b++) {
        let u = b * c,
          h = Number(f & l);
        (f >>= B), h > c && ((h -= I), (f += Mt));
        let d = u,
          w = u + Math.abs(h) - 1,
          p = b % 2 !== 0,
          v = h < 0;
        h === 0 ? (g = g.add(e(p, i[d]))) : (a = a.add(e(v, i[w])));
      }
      return { p: a, f: g };
    },
    wNAFCached(o, i, f, s) {
      let c = o._WINDOW_SIZE || 1,
        a = i.get(o);
      return (
        a || ((a = this.precomputeWindow(o, c)), c !== 1 && i.set(o, s(a))),
        this.wNAF(c, a, f)
      );
    },
  };
}
function Yt(t) {
  return (
    qt(t.Fp),
    Q(
      t,
      { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
      { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
    ),
    Object.freeze(J($($({}, Kt(t.n, t.nBitLength)), t), { p: t.Fp.ORDER }))
  );
}
function tn(t) {
  let n = Yt(t);
  Q(
    n,
    { a: "field", b: "field" },
    {
      allowedPrivateKeyLengths: "array",
      wrapPrivateKey: "boolean",
      isTorsionFree: "function",
      clearCofactor: "function",
      allowInfinityPoint: "boolean",
      fromBytes: "function",
      toBytes: "function",
    }
  );
  let { endo: e, Fp: r, a: o } = n;
  if (e) {
    if (!r.eql(o, r.ZERO))
      throw new Error(
        "Endomorphism can only be defined for Koblitz curves that have a=0"
      );
    if (
      typeof e != "object" ||
      typeof e.beta != "bigint" ||
      typeof e.splitScalar != "function"
    )
      throw new Error(
        "Expected endomorphism with beta: bigint and splitScalar: function"
      );
  }
  return Object.freeze($({}, n));
}
var { bytesToNumberBE: en, hexToBytes: nn } = zt,
  lt = {
    Err: class extends Error {
      constructor(n = "") {
        super(n);
      }
    },
    _parseInt(t) {
      let { Err: n } = lt;
      if (t.length < 2 || t[0] !== 2)
        throw new n("Invalid signature integer tag");
      let e = t[1],
        r = t.subarray(2, e + 2);
      if (!e || r.length !== e)
        throw new n("Invalid signature integer: wrong length");
      if (r[0] & 128) throw new n("Invalid signature integer: negative");
      if (r[0] === 0 && !(r[1] & 128))
        throw new n("Invalid signature integer: unnecessary leading zero");
      return { d: en(r), l: t.subarray(e + 2) };
    },
    toSig(t) {
      let { Err: n } = lt,
        e = typeof t == "string" ? nn(t) : t;
      if (!(e instanceof Uint8Array)) throw new Error("ui8a expected");
      let r = e.length;
      if (r < 2 || e[0] != 48) throw new n("Invalid signature tag");
      if (e[1] !== r - 2) throw new n("Invalid signature: incorrect length");
      let { d: o, l: i } = lt._parseInt(e.subarray(2)),
        { d: f, l: s } = lt._parseInt(i);
      if (s.length) throw new n("Invalid signature: left bytes after parsing");
      return { r: o, s: f };
    },
    hexFromSig(t) {
      let n = (a) => (Number.parseInt(a[0], 16) & 8 ? "00" + a : a),
        e = (a) => {
          let g = a.toString(16);
          return g.length & 1 ? `0${g}` : g;
        },
        r = n(e(t.s)),
        o = n(e(t.r)),
        i = r.length / 2,
        f = o.length / 2,
        s = e(i),
        c = e(f);
      return `30${e(f + i + 4)}02${c}${o}02${s}${r}`;
    },
  },
  W = BigInt(0),
  U = BigInt(1),
  rt = BigInt(2),
  _t = BigInt(3),
  be = BigInt(4);
function rn(t) {
  let n = tn(t),
    { Fp: e } = n,
    r =
      n.toBytes ||
      ((b, u, h) => {
        let d = u.toAffine();
        return P(Uint8Array.from([4]), e.toBytes(d.x), e.toBytes(d.y));
      }),
    o =
      n.fromBytes ||
      ((b) => {
        let u = b.subarray(1),
          h = e.fromBytes(u.subarray(0, e.BYTES)),
          d = e.fromBytes(u.subarray(e.BYTES, 2 * e.BYTES));
        return { x: h, y: d };
      });
  function i(b) {
    let { a: u, b: h } = n,
      d = e.sqr(b),
      w = e.mul(d, b);
    return e.add(e.add(w, e.mul(b, u)), h);
  }
  if (!e.eql(e.sqr(n.Gy), i(n.Gx)))
    throw new Error("bad generator point: equation left != right");
  function f(b) {
    return typeof b == "bigint" && W < b && b < n.n;
  }
  function s(b) {
    if (!f(b)) throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(b) {
    let {
      allowedPrivateKeyLengths: u,
      nByteLength: h,
      wrapPrivateKey: d,
      n: w,
    } = n;
    if (u && typeof b != "bigint") {
      if (
        (b instanceof Uint8Array && (b = ft(b)),
        typeof b != "string" || !u.includes(b.length))
      )
        throw new Error("Invalid key");
      b = b.padStart(h * 2, "0");
    }
    let p;
    try {
      p = typeof b == "bigint" ? b : H(Z("private key", b, h));
    } catch {
      throw new Error(
        `private key must be ${h} bytes, hex or bigint, not ${typeof b}`
      );
    }
    return d && (p = L(p, w)), s(p), p;
  }
  let a = new Map();
  function g(b) {
    if (!(b instanceof l)) throw new Error("ProjectivePoint expected");
  }
  class l {
    constructor(u, h, d) {
      if (
        ((this.px = u),
        (this.py = h),
        (this.pz = d),
        u == null || !e.isValid(u))
      )
        throw new Error("x required");
      if (h == null || !e.isValid(h)) throw new Error("y required");
      if (d == null || !e.isValid(d)) throw new Error("z required");
    }
    static fromAffine(u) {
      let { x: h, y: d } = u || {};
      if (!u || !e.isValid(h) || !e.isValid(d))
        throw new Error("invalid affine point");
      if (u instanceof l) throw new Error("projective point not allowed");
      let w = (p) => e.eql(p, e.ZERO);
      return w(h) && w(d) ? l.ZERO : new l(h, d, e.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(u) {
      let h = e.invertBatch(u.map((d) => d.pz));
      return u.map((d, w) => d.toAffine(h[w])).map(l.fromAffine);
    }
    static fromHex(u) {
      let h = l.fromAffine(o(Z("pointHex", u)));
      return h.assertValidity(), h;
    }
    static fromPrivateKey(u) {
      return l.BASE.multiply(c(u));
    }
    _setWindowSize(u) {
      (this._WINDOW_SIZE = u), a.delete(this);
    }
    assertValidity() {
      if (this.is0()) {
        if (n.allowInfinityPoint && !e.is0(this.py)) return;
        throw new Error("bad point: ZERO");
      }
      let { x: u, y: h } = this.toAffine();
      if (!e.isValid(u) || !e.isValid(h))
        throw new Error("bad point: x or y not FE");
      let d = e.sqr(h),
        w = i(u);
      if (!e.eql(d, w)) throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      let { y: u } = this.toAffine();
      if (e.isOdd) return !e.isOdd(u);
      throw new Error("Field doesn't support isOdd");
    }
    equals(u) {
      g(u);
      let { px: h, py: d, pz: w } = this,
        { px: p, py: v, pz: A } = u,
        E = e.eql(e.mul(h, A), e.mul(p, w)),
        x = e.eql(e.mul(d, A), e.mul(v, w));
      return E && x;
    }
    negate() {
      return new l(this.px, e.neg(this.py), this.pz);
    }
    double() {
      let { a: u, b: h } = n,
        d = e.mul(h, _t),
        { px: w, py: p, pz: v } = this,
        A = e.ZERO,
        E = e.ZERO,
        x = e.ZERO,
        S = e.mul(w, w),
        z = e.mul(p, p),
        T = e.mul(v, v),
        q = e.mul(w, p);
      return (
        (q = e.add(q, q)),
        (x = e.mul(w, v)),
        (x = e.add(x, x)),
        (A = e.mul(u, x)),
        (E = e.mul(d, T)),
        (E = e.add(A, E)),
        (A = e.sub(z, E)),
        (E = e.add(z, E)),
        (E = e.mul(A, E)),
        (A = e.mul(q, A)),
        (x = e.mul(d, x)),
        (T = e.mul(u, T)),
        (q = e.sub(S, T)),
        (q = e.mul(u, q)),
        (q = e.add(q, x)),
        (x = e.add(S, S)),
        (S = e.add(x, S)),
        (S = e.add(S, T)),
        (S = e.mul(S, q)),
        (E = e.add(E, S)),
        (T = e.mul(p, v)),
        (T = e.add(T, T)),
        (S = e.mul(T, q)),
        (A = e.sub(A, S)),
        (x = e.mul(T, z)),
        (x = e.add(x, x)),
        (x = e.add(x, x)),
        new l(A, E, x)
      );
    }
    add(u) {
      g(u);
      let { px: h, py: d, pz: w } = this,
        { px: p, py: v, pz: A } = u,
        E = e.ZERO,
        x = e.ZERO,
        S = e.ZERO,
        z = n.a,
        T = e.mul(n.b, _t),
        q = e.mul(h, p),
        j = e.mul(d, v),
        K = e.mul(w, A),
        F = e.add(h, d),
        m = e.add(p, v);
      (F = e.mul(F, m)),
        (m = e.add(q, j)),
        (F = e.sub(F, m)),
        (m = e.add(h, w));
      let y = e.add(p, A);
      return (
        (m = e.mul(m, y)),
        (y = e.add(q, K)),
        (m = e.sub(m, y)),
        (y = e.add(d, w)),
        (E = e.add(v, A)),
        (y = e.mul(y, E)),
        (E = e.add(j, K)),
        (y = e.sub(y, E)),
        (S = e.mul(z, m)),
        (E = e.mul(T, K)),
        (S = e.add(E, S)),
        (E = e.sub(j, S)),
        (S = e.add(j, S)),
        (x = e.mul(E, S)),
        (j = e.add(q, q)),
        (j = e.add(j, q)),
        (K = e.mul(z, K)),
        (m = e.mul(T, m)),
        (j = e.add(j, K)),
        (K = e.sub(q, K)),
        (K = e.mul(z, K)),
        (m = e.add(m, K)),
        (q = e.mul(j, m)),
        (x = e.add(x, q)),
        (q = e.mul(y, m)),
        (E = e.mul(F, E)),
        (E = e.sub(E, q)),
        (q = e.mul(F, j)),
        (S = e.mul(y, S)),
        (S = e.add(S, q)),
        new l(E, x, S)
      );
    }
    subtract(u) {
      return this.add(u.negate());
    }
    is0() {
      return this.equals(l.ZERO);
    }
    wNAF(u) {
      return B.wNAFCached(this, a, u, (h) => {
        let d = e.invertBatch(h.map((w) => w.pz));
        return h.map((w, p) => w.toAffine(d[p])).map(l.fromAffine);
      });
    }
    multiplyUnsafe(u) {
      let h = l.ZERO;
      if (u === W) return h;
      if ((s(u), u === U)) return this;
      let { endo: d } = n;
      if (!d) return B.unsafeLadder(this, u);
      let { k1neg: w, k1: p, k2neg: v, k2: A } = d.splitScalar(u),
        E = h,
        x = h,
        S = this;
      for (; p > W || A > W; )
        p & U && (E = E.add(S)),
          A & U && (x = x.add(S)),
          (S = S.double()),
          (p >>= U),
          (A >>= U);
      return (
        w && (E = E.negate()),
        v && (x = x.negate()),
        (x = new l(e.mul(x.px, d.beta), x.py, x.pz)),
        E.add(x)
      );
    }
    multiply(u) {
      s(u);
      let h = u,
        d,
        w,
        { endo: p } = n;
      if (p) {
        let { k1neg: v, k1: A, k2neg: E, k2: x } = p.splitScalar(h),
          { p: S, f: z } = this.wNAF(A),
          { p: T, f: q } = this.wNAF(x);
        (S = B.constTimeNegate(v, S)),
          (T = B.constTimeNegate(E, T)),
          (T = new l(e.mul(T.px, p.beta), T.py, T.pz)),
          (d = S.add(T)),
          (w = z.add(q));
      } else {
        let { p: v, f: A } = this.wNAF(h);
        (d = v), (w = A);
      }
      return l.normalizeZ([d, w])[0];
    }
    multiplyAndAddUnsafe(u, h, d) {
      let w = l.BASE,
        p = (A, E) =>
          E === W || E === U || !A.equals(w)
            ? A.multiplyUnsafe(E)
            : A.multiply(E),
        v = p(this, h).add(p(u, d));
      return v.is0() ? void 0 : v;
    }
    toAffine(u) {
      let { px: h, py: d, pz: w } = this,
        p = this.is0();
      u == null && (u = p ? e.ONE : e.inv(w));
      let v = e.mul(h, u),
        A = e.mul(d, u),
        E = e.mul(w, u);
      if (p) return { x: e.ZERO, y: e.ZERO };
      if (!e.eql(E, e.ONE)) throw new Error("invZ was invalid");
      return { x: v, y: A };
    }
    isTorsionFree() {
      let { h: u, isTorsionFree: h } = n;
      if (u === U) return !0;
      if (h) return h(l, this);
      throw new Error(
        "isTorsionFree() has not been declared for the elliptic curve"
      );
    }
    clearCofactor() {
      let { h: u, clearCofactor: h } = n;
      return u === U ? this : h ? h(l, this) : this.multiplyUnsafe(n.h);
    }
    toRawBytes(u = !0) {
      return this.assertValidity(), r(l, this, u);
    }
    toHex(u = !0) {
      return ft(this.toRawBytes(u));
    }
  }
  (l.BASE = new l(n.Gx, n.Gy, e.ONE)), (l.ZERO = new l(e.ZERO, e.ONE, e.ZERO));
  let I = n.nBitLength,
    B = ye(l, n.endo ? Math.ceil(I / 2) : I);
  return {
    CURVE: n,
    ProjectivePoint: l,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: f,
  };
}
function on(t) {
  let n = Yt(t);
  return (
    Q(
      n,
      { hash: "hash", hmac: "function", randomBytes: "function" },
      { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }
    ),
    Object.freeze($({ lowS: !0 }, n))
  );
}
function pe(t) {
  let n = on(t),
    { Fp: e, n: r } = n,
    o = e.BYTES + 1,
    i = 2 * e.BYTES + 1;
  function f(m) {
    return W < m && m < e.ORDER;
  }
  function s(m) {
    return L(m, r);
  }
  function c(m) {
    return Ot(m, r);
  }
  let {
      ProjectivePoint: a,
      normPrivateKeyToScalar: g,
      weierstrassEquation: l,
      isWithinCurveOrder: I,
    } = rn(
      J($({}, n), {
        toBytes(m, y, O) {
          let N = y.toAffine(),
            _ = e.toBytes(N.x),
            C = P;
          return O
            ? C(Uint8Array.from([y.hasEvenY() ? 2 : 3]), _)
            : C(Uint8Array.from([4]), _, e.toBytes(N.y));
        },
        fromBytes(m) {
          let y = m.length,
            O = m[0],
            N = m.subarray(1);
          if (y === o && (O === 2 || O === 3)) {
            let _ = H(N);
            if (!f(_)) throw new Error("Point is not on curve");
            let C = l(_),
              D = e.sqrt(C),
              M = (D & U) === U;
            return ((O & 1) === 1) !== M && (D = e.neg(D)), { x: _, y: D };
          } else if (y === i && O === 4) {
            let _ = e.fromBytes(N.subarray(0, e.BYTES)),
              C = e.fromBytes(N.subarray(e.BYTES, 2 * e.BYTES));
            return { x: _, y: C };
          } else
            throw new Error(
              `Point of length ${y} was invalid. Expected ${o} compressed bytes or ${i} uncompressed bytes`
            );
        },
      })
    ),
    B = (m) => ft(G(m, n.nByteLength));
  function b(m) {
    let y = r >> U;
    return m > y;
  }
  function u(m) {
    return b(m) ? s(-m) : m;
  }
  let h = (m, y, O) => H(m.slice(y, O));
  class d {
    constructor(y, O, N) {
      (this.r = y), (this.s = O), (this.recovery = N), this.assertValidity();
    }
    static fromCompact(y) {
      let O = n.nByteLength;
      return (
        (y = Z("compactSignature", y, O * 2)), new d(h(y, 0, O), h(y, O, 2 * O))
      );
    }
    static fromDER(y) {
      let { r: O, s: N } = lt.toSig(Z("DER", y));
      return new d(O, N);
    }
    assertValidity() {
      if (!I(this.r)) throw new Error("r must be 0 < r < CURVE.n");
      if (!I(this.s)) throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(y) {
      return new d(this.r, this.s, y);
    }
    recoverPublicKey(y) {
      let { r: O, s: N, recovery: _ } = this,
        C = x(Z("msgHash", y));
      if (_ == null || ![0, 1, 2, 3].includes(_))
        throw new Error("recovery id invalid");
      let D = _ === 2 || _ === 3 ? O + n.n : O;
      if (D >= e.ORDER) throw new Error("recovery id 2 or 3 invalid");
      let M = _ & 1 ? "03" : "02",
        tt = a.fromHex(M + B(D)),
        et = c(D),
        dt = s(-C * et),
        gt = s(N * et),
        nt = a.BASE.multiplyAndAddUnsafe(tt, dt, gt);
      if (!nt) throw new Error("point at infinify");
      return nt.assertValidity(), nt;
    }
    hasHighS() {
      return b(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new d(this.r, s(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return at(this.toDERHex());
    }
    toDERHex() {
      return lt.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return at(this.toCompactHex());
    }
    toCompactHex() {
      return B(this.r) + B(this.s);
    }
  }
  let w = {
    isValidPrivateKey(m) {
      try {
        return g(m), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: g,
    randomPrivateKey: () => {
      let m = Dt(n.n);
      return we(n.randomBytes(m), n.n);
    },
    precompute(m = 8, y = a.BASE) {
      return y._setWindowSize(m), y.multiply(BigInt(3)), y;
    },
  };
  function p(m, y = !0) {
    return a.fromPrivateKey(m).toRawBytes(y);
  }
  function v(m) {
    let y = m instanceof Uint8Array,
      O = typeof m == "string",
      N = (y || O) && m.length;
    return y
      ? N === o || N === i
      : O
      ? N === 2 * o || N === 2 * i
      : m instanceof a;
  }
  function A(m, y, O = !0) {
    if (v(m)) throw new Error("first arg must be private key");
    if (!v(y)) throw new Error("second arg must be public key");
    return a.fromHex(y).multiply(g(m)).toRawBytes(O);
  }
  let E =
      n.bits2int ||
      function (m) {
        let y = H(m),
          O = m.length * 8 - n.nBitLength;
        return O > 0 ? y >> BigInt(O) : y;
      },
    x =
      n.bits2int_modN ||
      function (m) {
        return s(E(m));
      },
    S = bt(n.nBitLength);
  function z(m) {
    if (typeof m != "bigint") throw new Error("bigint expected");
    if (!(W <= m && m < S))
      throw new Error(`bigint expected < 2^${n.nBitLength}`);
    return G(m, n.nByteLength);
  }
  function T(m, y, O = q) {
    if (["recovered", "canonical"].some((st) => st in O))
      throw new Error("sign() legacy options not supported");
    let { hash: N, randomBytes: _ } = n,
      { lowS: C, prehash: D, extraEntropy: M } = O;
    C == null && (C = !0),
      (m = Z("msgHash", m)),
      D && (m = Z("prehashed msgHash", N(m)));
    let tt = x(m),
      et = g(y),
      dt = [z(et), z(tt)];
    if (M != null) {
      let st = M === !0 ? _(e.BYTES) : M;
      dt.push(Z("extraEntropy", st));
    }
    let gt = P(...dt),
      nt = tt;
    function kt(st) {
      let ht = E(st);
      if (!I(ht)) return;
      let ee = c(ht),
        X = a.BASE.multiply(ht).toAffine(),
        mt = s(X.x);
      if (mt === W) return;
      let xt = s(ee * s(nt + mt * et));
      if (xt === W) return;
      let ne = (X.x === mt ? 0 : 2) | Number(X.y & U),
        re = xt;
      return C && b(xt) && ((re = u(xt)), (ne ^= 1)), new d(mt, re, ne);
    }
    return { seed: gt, k2sig: kt };
  }
  let q = { lowS: n.lowS, prehash: !1 },
    j = { lowS: n.lowS, prehash: !1 };
  function K(m, y, O = q) {
    let { seed: N, k2sig: _ } = T(m, y, O),
      C = n;
    return Pt(C.hash.outputLen, C.nByteLength, C.hmac)(N, _);
  }
  a.BASE._setWindowSize(8);
  function F(m, y, O, N = j) {
    let _ = m;
    if (((y = Z("msgHash", y)), (O = Z("publicKey", O)), "strict" in N))
      throw new Error("options.strict was renamed to lowS");
    let { lowS: C, prehash: D } = N,
      M,
      tt;
    try {
      if (typeof _ == "string" || _ instanceof Uint8Array)
        try {
          M = d.fromDER(_);
        } catch (X) {
          if (!(X instanceof lt.Err)) throw X;
          M = d.fromCompact(_);
        }
      else if (
        typeof _ == "object" &&
        typeof _.r == "bigint" &&
        typeof _.s == "bigint"
      ) {
        let { r: X, s: mt } = _;
        M = new d(X, mt);
      } else throw new Error("PARSE");
      tt = a.fromHex(O);
    } catch (X) {
      if (X.message === "PARSE")
        throw new Error(
          "signature must be Signature instance, Uint8Array or hex string"
        );
      return !1;
    }
    if (C && M.hasHighS()) return !1;
    D && (y = n.hash(y));
    let { r: et, s: dt } = M,
      gt = x(y),
      nt = c(dt),
      kt = s(gt * nt),
      st = s(et * nt),
      ht = a.BASE.multiplyAndAddUnsafe(tt, kt, st)?.toAffine();
    return ht ? s(ht.x) === et : !1;
  }
  return {
    CURVE: n,
    getPublicKey: p,
    getSharedSecret: A,
    sign: K,
    verify: F,
    ProjectivePoint: a,
    Signature: d,
    utils: w,
  };
}
function sn(t, n) {
  let e = t.ORDER,
    r = W;
  for (let b = e - U; b % rt === W; b /= rt) r += U;
  let o = r,
    i = rt << (o - U - U),
    f = i * rt,
    s = (e - U) / f,
    c = (s - U) / rt,
    a = f - U,
    g = i,
    l = t.pow(n, s),
    I = t.pow(n, (s + U) / rt),
    B = (b, u) => {
      let h = l,
        d = t.pow(u, a),
        w = t.sqr(d);
      w = t.mul(w, u);
      let p = t.mul(b, w);
      (p = t.pow(p, c)),
        (p = t.mul(p, d)),
        (d = t.mul(p, u)),
        (w = t.mul(p, b));
      let v = t.mul(w, d);
      p = t.pow(v, g);
      let A = t.eql(p, t.ONE);
      (d = t.mul(w, I)),
        (p = t.mul(v, h)),
        (w = t.cmov(d, w, A)),
        (v = t.cmov(p, v, A));
      for (let E = o; E > U; E--) {
        let x = E - rt;
        x = rt << (x - U);
        let S = t.pow(v, x),
          z = t.eql(S, t.ONE);
        (d = t.mul(w, h)),
          (h = t.mul(h, h)),
          (S = t.mul(v, h)),
          (w = t.cmov(d, w, z)),
          (v = t.cmov(S, v, z));
      }
      return { isValid: A, value: w };
    };
  if (t.ORDER % be === _t) {
    let b = (t.ORDER - _t) / be,
      u = t.sqrt(t.neg(n));
    B = (h, d) => {
      let w = t.sqr(d),
        p = t.mul(h, d);
      w = t.mul(w, p);
      let v = t.pow(w, b);
      v = t.mul(v, p);
      let A = t.mul(v, u),
        E = t.mul(t.sqr(v), d),
        x = t.eql(E, h),
        S = t.cmov(A, v, x);
      return { isValid: x, value: S };
    };
  }
  return B;
}
function Ee(t, n) {
  if ((qt(t), !t.isValid(n.A) || !t.isValid(n.B) || !t.isValid(n.Z)))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  let e = sn(t, n.Z);
  if (!t.isOdd) throw new Error("Fp.isOdd is not implemented!");
  return (r) => {
    let o, i, f, s, c, a, g, l;
    (o = t.sqr(r)),
      (o = t.mul(o, n.Z)),
      (i = t.sqr(o)),
      (i = t.add(i, o)),
      (f = t.add(i, t.ONE)),
      (f = t.mul(f, n.B)),
      (s = t.cmov(n.Z, t.neg(i), !t.eql(i, t.ZERO))),
      (s = t.mul(s, n.A)),
      (i = t.sqr(f)),
      (a = t.sqr(s)),
      (c = t.mul(a, n.A)),
      (i = t.add(i, c)),
      (i = t.mul(i, f)),
      (a = t.mul(a, s)),
      (c = t.mul(a, n.B)),
      (i = t.add(i, c)),
      (g = t.mul(o, f));
    let { isValid: I, value: B } = e(i, a);
    (l = t.mul(o, r)),
      (l = t.mul(l, B)),
      (g = t.cmov(g, f, I)),
      (l = t.cmov(l, B, I));
    let b = t.isOdd(r) === t.isOdd(l);
    return (l = t.cmov(t.neg(l), l, b)), (g = t.div(g, s)), { x: g, y: l };
  };
}
V();
function cn(t) {
  if (t instanceof Uint8Array) return t;
  if (typeof t == "string") return yt(t);
  throw new Error("DST must be Uint8Array or string");
}
var fn = H;
function ot(t, n) {
  if (t < 0 || t >= 1 << (8 * n))
    throw new Error(`bad I2OSP call: value=${t} length=${n}`);
  let e = Array.from({ length: n }).fill(0);
  for (let r = n - 1; r >= 0; r--) (e[r] = t & 255), (t >>>= 8);
  return new Uint8Array(e);
}
function an(t, n) {
  let e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t[r] ^ n[r];
  return e;
}
function pt(t) {
  if (!(t instanceof Uint8Array)) throw new Error("Uint8Array expected");
}
function Gt(t) {
  if (!Number.isSafeInteger(t)) throw new Error("number expected");
}
function un(t, n, e, r) {
  pt(t), pt(n), Gt(e), n.length > 255 && (n = r(P(yt("H2C-OVERSIZE-DST-"), n)));
  let { outputLen: o, blockLen: i } = r,
    f = Math.ceil(e / o);
  if (f > 255) throw new Error("Invalid xmd length");
  let s = P(n, ot(n.length, 1)),
    c = ot(0, i),
    a = ot(e, 2),
    g = new Array(f),
    l = r(P(c, t, a, ot(0, 1), s));
  g[0] = r(P(l, ot(1, 1), s));
  for (let B = 1; B <= f; B++) {
    let b = [an(l, g[B - 1]), ot(B + 1, 1), s];
    g[B] = r(P(...b));
  }
  return P(...g).slice(0, e);
}
function ln(t, n, e, r, o) {
  if ((pt(t), pt(n), Gt(e), n.length > 255)) {
    let i = Math.ceil((2 * r) / 8);
    n = o
      .create({ dkLen: i })
      .update(yt("H2C-OVERSIZE-DST-"))
      .update(n)
      .digest();
  }
  if (e > 65535 || n.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return o
    .create({ dkLen: e })
    .update(t)
    .update(ot(e, 2))
    .update(n)
    .update(ot(n.length, 1))
    .digest();
}
function xe(t, n, e) {
  Q(e, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash",
  });
  let { p: r, k: o, m: i, hash: f, expand: s, DST: c } = e;
  pt(t), Gt(n);
  let a = cn(c),
    g = r.toString(2).length,
    l = Math.ceil((g + o) / 8),
    I = n * i * l,
    B;
  if (s === "xmd") B = un(t, a, I, f);
  else if (s === "xof") B = ln(t, a, I, o, f);
  else if (s === "_internal_pass") B = t;
  else throw new Error('expand must be "xmd" or "xof"');
  let b = new Array(n);
  for (let u = 0; u < n; u++) {
    let h = new Array(i);
    for (let d = 0; d < i; d++) {
      let w = l * (d + u * i),
        p = B.subarray(w, w + l);
      h[d] = L(fn(p), r);
    }
    b[u] = h;
  }
  return b;
}
function Be(t, n) {
  let e = n.map((r) => Array.from(r).reverse());
  return (r, o) => {
    let [i, f, s, c] = e.map((a) => a.reduce((g, l) => t.add(t.mul(g, r), l)));
    return (r = t.div(i, f)), (o = t.mul(o, t.div(s, c))), { x: r, y: o };
  };
}
function ve(t, n, e) {
  if (typeof n != "function") throw new Error("mapToCurve() must be defined");
  return {
    hashToCurve(r, o) {
      let i = xe(r, 2, $(J($({}, e), { DST: e.DST }), o)),
        f = t.fromAffine(n(i[0])),
        s = t.fromAffine(n(i[1])),
        c = f.add(s).clearCofactor();
      return c.assertValidity(), c;
    },
    encodeToCurve(r, o) {
      let i = xe(r, 1, $(J($({}, e), { DST: e.encodeDST }), o)),
        f = t.fromAffine(n(i[0])).clearCofactor();
      return f.assertValidity(), f;
    },
  };
}
V();
V();
var Nt = class extends fe {
    constructor(n, e) {
      super(), (this.finished = !1), (this.destroyed = !1), ie(n);
      let r = se(e);
      if (((this.iHash = n.create()), typeof this.iHash.update != "function"))
        throw new Error("Expected instance of class which extends utils.Hash");
      (this.blockLen = this.iHash.blockLen),
        (this.outputLen = this.iHash.outputLen);
      let o = this.blockLen,
        i = new Uint8Array(o);
      i.set(r.length > o ? n.create().update(r).digest() : r);
      for (let f = 0; f < i.length; f++) i[f] ^= 54;
      this.iHash.update(i), (this.oHash = n.create());
      for (let f = 0; f < i.length; f++) i[f] ^= 106;
      this.oHash.update(i), i.fill(0);
    }
    update(n) {
      return Ct(this), this.iHash.update(n), this;
    }
    digestInto(n) {
      Ct(this),
        oe(n, this.outputLen),
        (this.finished = !0),
        this.iHash.digestInto(n),
        this.oHash.update(n),
        this.oHash.digestInto(n),
        this.destroy();
    }
    digest() {
      let n = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(n), n;
    }
    _cloneInto(n) {
      n || (n = Object.create(Object.getPrototypeOf(this), {}));
      let {
        oHash: e,
        iHash: r,
        finished: o,
        destroyed: i,
        blockLen: f,
        outputLen: s,
      } = this;
      return (
        (n = n),
        (n.finished = o),
        (n.destroyed = i),
        (n.blockLen = f),
        (n.outputLen = s),
        (n.oHash = e._cloneInto(n.oHash)),
        (n.iHash = r._cloneInto(n.iHash)),
        n
      );
    }
    destroy() {
      (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
  },
  Wt = (t, n, e) => new Nt(t, n).update(e).digest();
Wt.create = (t, n) => new Nt(t, n);
function dn(t) {
  return { hash: t, hmac: (n, ...e) => Wt(t, n, ce(...e)), randomBytes: Bt };
}
function Se(t, n) {
  let e = (r) => pe($($({}, t), dn(r)));
  return Object.freeze(J($({}, e(n)), { create: e }));
}
var Lt = BigInt(
    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
  ),
  Tt = BigInt(
    "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
  ),
  Oe = BigInt(1),
  Rt = BigInt(2),
  Ie = (t, n) => (t + n / Rt) / n;
function qe(t) {
  let n = Lt,
    e = BigInt(3),
    r = BigInt(6),
    o = BigInt(11),
    i = BigInt(22),
    f = BigInt(23),
    s = BigInt(44),
    c = BigInt(88),
    a = (t * t * t) % n,
    g = (a * a * t) % n,
    l = (Y(g, e, n) * g) % n,
    I = (Y(l, e, n) * g) % n,
    B = (Y(I, Rt, n) * a) % n,
    b = (Y(B, o, n) * B) % n,
    u = (Y(b, i, n) * b) % n,
    h = (Y(u, s, n) * u) % n,
    d = (Y(h, c, n) * h) % n,
    w = (Y(d, s, n) * u) % n,
    p = (Y(w, e, n) * g) % n,
    v = (Y(p, f, n) * b) % n,
    A = (Y(v, r, n) * a) % n,
    E = Y(A, Rt, n);
  if (!it.eql(it.sqr(E), t)) throw new Error("Cannot find square root");
  return E;
}
var it = me(Lt, void 0, void 0, { sqrt: qe }),
  Ht = Se(
    {
      a: BigInt(0),
      b: BigInt(7),
      Fp: it,
      n: Tt,
      Gx: BigInt(
        "55066263022277343669578718895168534326250603453777594175500187360389116729240"
      ),
      Gy: BigInt(
        "32670510020758816978083085130507043184471273380659243275938904335757337482424"
      ),
      h: BigInt(1),
      lowS: !0,
      endo: {
        beta: BigInt(
          "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
        ),
        splitScalar: (t) => {
          let n = Tt,
            e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
            r = -Oe * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
            o = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
            i = e,
            f = BigInt("0x100000000000000000000000000000000"),
            s = Ie(i * t, n),
            c = Ie(-r * t, n),
            a = L(t - s * e - c * o, n),
            g = L(-s * r - c * i, n),
            l = a > f,
            I = g > f;
          if ((l && (a = n - a), I && (g = n - g), a > f || g > f))
            throw new Error("splitScalar: Endomorphism failed, k=" + t);
          return { k1neg: l, k1: a, k2neg: I, k2: g };
        },
      },
    },
    wt
  ),
  Zt = BigInt(0),
  _e = (t) => typeof t == "bigint" && Zt < t && t < Lt,
  hn = (t) => typeof t == "bigint" && Zt < t && t < Tt,
  Ae = {};
function Ut(t, ...n) {
  let e = Ae[t];
  if (e === void 0) {
    let r = wt(Uint8Array.from(t, (o) => o.charCodeAt(0)));
    (e = P(r, r)), (Ae[t] = e);
  }
  return wt(P(e, ...n));
}
var Ft = (t) => t.toRawBytes(!0).slice(1),
  Qt = (t) => G(t, 32),
  Xt = (t) => L(t, Lt),
  Et = (t) => L(t, Tt),
  te = Ht.ProjectivePoint,
  mn = (t, n, e) => te.BASE.multiplyAndAddUnsafe(t, n, e);
function Jt(t) {
  let n = Ht.utils.normPrivateKeyToScalar(t),
    e = te.fromPrivateKey(n);
  return { scalar: e.hasEvenY() ? n : Et(-n), bytes: Ft(e) };
}
function Ne(t) {
  if (!_e(t)) throw new Error("bad x: need 0 < x < p");
  let n = Xt(t * t),
    e = Xt(n * t + BigInt(7)),
    r = qe(e);
  r % Rt !== Zt && (r = Xt(-r));
  let o = new te(t, r, Oe);
  return o.assertValidity(), o;
}
function Te(...t) {
  return Et(H(Ut("BIP0340/challenge", ...t)));
}
function gn(t) {
  return Jt(t).bytes;
}
function wn(t, n, e = Bt(32)) {
  let r = Z("message", t),
    { bytes: o, scalar: i } = Jt(n),
    f = Z("auxRand", e, 32),
    s = Qt(i ^ H(Ut("BIP0340/aux", f))),
    c = Ut("BIP0340/nonce", s, o, r),
    a = Et(H(c));
  if (a === Zt) throw new Error("sign failed: k is zero");
  let { bytes: g, scalar: l } = Jt(a),
    I = Te(g, o, r),
    B = new Uint8Array(64);
  if ((B.set(g, 0), B.set(Qt(Et(l + I * i)), 32), !Re(B, r, o)))
    throw new Error("sign: Invalid signature produced");
  return B;
}
function Re(t, n, e) {
  let r = Z("signature", t, 64),
    o = Z("message", n),
    i = Z("publicKey", e, 32);
  try {
    let f = Ne(H(i)),
      s = H(r.subarray(0, 32));
    if (!_e(s)) return !1;
    let c = H(r.subarray(32, 64));
    if (!hn(c)) return !1;
    let a = Te(Qt(s), Ft(f), o),
      g = mn(f, c, Et(-a));
    return !(!g || !g.hasEvenY() || g.toAffine().x !== s);
  } catch {
    return !1;
  }
}
var er = {
    getPublicKey: gn,
    sign: wn,
    verify: Re,
    utils: {
      randomPrivateKey: Ht.utils.randomPrivateKey,
      lift_x: Ne,
      pointToBytes: Ft,
      numberToBytesBE: G,
      bytesToNumberBE: H,
      taggedHash: Ut,
      mod: L,
    },
  },
  yn = Be(
    it,
    [
      [
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
        "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
        "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c",
      ],
      [
        "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
        "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
        "0x0000000000000000000000000000000000000000000000000000000000000001",
      ],
      [
        "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
        "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
        "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
        "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84",
      ],
      [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
        "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
        "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
        "0x0000000000000000000000000000000000000000000000000000000000000001",
      ],
    ].map((t) => t.map((n) => BigInt(n)))
  ),
  bn = Ee(it, {
    A: BigInt(
      "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"
    ),
    B: BigInt("1771"),
    Z: it.create(BigInt("-11")),
  }),
  Ue = ve(
    Ht.ProjectivePoint,
    (t) => {
      let { x: n, y: e } = bn(it.create(t[0]));
      return yn(n, e);
    },
    {
      DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
      encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
      p: it.ORDER,
      m: 1,
      k: 128,
      expand: "xmd",
      hash: wt,
    }
  ),
  nr = Ue.hashToCurve,
  rr = Ue.encodeToCurve;
export { Ce as a, Ht as b, er as c, nr as d, rr as e };
