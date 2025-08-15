import {
  a as N,
  b as he,
  d as D,
  e as pe,
  f as de,
  i as be,
  k as me,
  l as ge,
  m as xe,
} from "./chunk-4467BSCR.js";
import { a as G, q as a } from "./chunk-KXQY476L.js";
a();
function x(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string"
    ? !1
    : t
    ? /^0x[0-9a-fA-F]*$/.test(e)
    : e.startsWith("0x");
}
a();
function y(e) {
  return x(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
a();
a();
a();
var ye = "2.12.0";
var ar = (e) => e,
  ur = (e) => e,
  we = () => `viem@${ye}`;
var u = class e extends Error {
  constructor(t, r = {}) {
    super(),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "metaMessages", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ViemError",
      }),
      Object.defineProperty(this, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: we(),
      });
    let n =
        r.cause instanceof e
          ? r.cause.details
          : r.cause?.message
          ? r.cause.message
          : r.details,
      i = (r.cause instanceof e && r.cause.docsPath) || r.docsPath;
    (this.message = [
      t || "An error occurred.",
      "",
      ...(r.metaMessages ? [...r.metaMessages, ""] : []),
      ...(i
        ? [`Docs: https://viem.sh${i}${r.docsSlug ? `#${r.docsSlug}` : ""}`]
        : []),
      ...(n ? [`Details: ${n}`] : []),
      `Version: ${this.version}`,
    ].join(`
`)),
      r.cause && (this.cause = r.cause),
      (this.details = n),
      (this.docsPath = i),
      (this.metaMessages = r.metaMessages),
      (this.shortMessage = t);
  }
  walk(t) {
    return $e(this, t);
  }
};
function $e(e, t) {
  return t?.(e)
    ? e
    : e && typeof e == "object" && "cause" in e
    ? $e(e.cause, t)
    : t
    ? null
    : e;
}
a();
var O = class extends u {
    constructor({ offset: t, position: r, size: n }) {
      super(
        `Slice ${
          r === "start" ? "starting" : "ending"
        } at offset "${t}" is out-of-bounds (size: ${n}).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "SliceOffsetOutOfBoundsError",
        });
    }
  },
  j = class extends u {
    constructor({ size: t, targetSize: r, type: n }) {
      super(
        `${n.charAt(0).toUpperCase()}${n
          .slice(1)
          .toLowerCase()} size (${t}) exceeds padding size (${r}).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "SizeExceedsPaddingSizeError",
        });
    }
  },
  Pe = class extends u {
    constructor({ size: t, targetSize: r, type: n }) {
      super(
        `${n.charAt(0).toUpperCase()}${n
          .slice(1)
          .toLowerCase()} is expected to be ${r} ${n} long, but is ${t} ${n} long.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidBytesLengthError",
        });
    }
  };
a();
function w(e, { dir: t, size: r = 32 } = {}) {
  return typeof e == "string"
    ? ut(e, { dir: t, size: r })
    : ct(e, { dir: t, size: r });
}
function ut(e, { dir: t, size: r = 32 } = {}) {
  if (r === null) return e;
  let n = e.replace("0x", "");
  if (n.length > r * 2)
    throw new j({ size: Math.ceil(n.length / 2), targetSize: r, type: "hex" });
  return `0x${n[t === "right" ? "padEnd" : "padStart"](r * 2, "0")}`;
}
function ct(e, { dir: t, size: r = 32 } = {}) {
  if (r === null) return e;
  if (e.length > r)
    throw new j({ size: e.length, targetSize: r, type: "bytes" });
  let n = new Uint8Array(r);
  for (let i = 0; i < r; i++) {
    let s = t === "right";
    n[s ? i : r - i - 1] = e[s ? i : e.length - i - 1];
  }
  return n;
}
a();
var A = class extends u {
    constructor({ max: t, min: r, signed: n, size: i, value: s }) {
      super(
        `Number "${s}" is not in safe ${
          i ? `${i * 8}-bit ${n ? "signed" : "unsigned"} ` : ""
        }integer range ${t ? `(${r} to ${t})` : `(above ${r})`}`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "IntegerOutOfRangeError",
        });
    }
  },
  ve = class extends u {
    constructor(t) {
      super(
        `Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidBytesBooleanError",
        });
    }
  },
  I = class extends u {
    constructor(t) {
      super(
        `Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidHexBooleanError",
        });
    }
  },
  Oe = class extends u {
    constructor(t) {
      super(
        `Hex value "${t}" is an odd length (${t.length}). It must be an even length.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidHexValueError",
        });
    }
  },
  S = class extends u {
    constructor({ givenSize: t, maxSize: r }) {
      super(`Size cannot exceed ${r} bytes. Given size: ${t} bytes.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "SizeOverflowError",
        });
    }
  };
a();
function T(e, { dir: t = "left" } = {}) {
  let r = typeof e == "string" ? e.replace("0x", "") : e,
    n = 0;
  for (
    let i = 0;
    i < r.length - 1 &&
    r[t === "left" ? i : r.length - i - 1].toString() === "0";
    i++
  )
    n++;
  return (
    (r = t === "left" ? r.slice(n) : r.slice(0, r.length - n)),
    typeof e == "string"
      ? (r.length === 1 && t === "right" && (r = `${r}0`),
        `0x${r.length % 2 === 1 ? `0${r}` : r}`)
      : r
  );
}
a();
a();
a();
var ft = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function je(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint"
    ? h(e, t)
    : typeof e == "string"
    ? pt(e, t)
    : typeof e == "boolean"
    ? lt(e, t)
    : U(e, t);
}
function lt(e, t = {}) {
  let r = `0x${Number(e)}`;
  return typeof t.size == "number"
    ? (d(r, { size: t.size }), w(r, { size: t.size }))
    : r;
}
function U(e, t = {}) {
  let r = "";
  for (let i = 0; i < e.length; i++) r += ft[e[i]];
  let n = `0x${r}`;
  return typeof t.size == "number"
    ? (d(n, { size: t.size }), w(n, { dir: "right", size: t.size }))
    : n;
}
function h(e, t = {}) {
  let { signed: r, size: n } = t,
    i = BigInt(e),
    s;
  n
    ? r
      ? (s = (1n << (BigInt(n) * 8n - 1n)) - 1n)
      : (s = 2n ** (BigInt(n) * 8n) - 1n)
    : typeof e == "number" && (s = BigInt(Number.MAX_SAFE_INTEGER));
  let o = typeof s == "bigint" && r ? -s - 1n : 0;
  if ((s && i > s) || i < o) {
    let l = typeof e == "bigint" ? "n" : "";
    throw new A({
      max: s ? `${s}${l}` : void 0,
      min: `${o}${l}`,
      signed: r,
      size: n,
      value: `${e}${l}`,
    });
  }
  let f = `0x${(r && i < 0 ? (1n << BigInt(n * 8)) + BigInt(i) : i).toString(
    16
  )}`;
  return n ? w(f, { size: n }) : f;
}
var ht = new TextEncoder();
function pt(e, t = {}) {
  let r = ht.encode(e);
  return U(r, t);
}
var dt = new TextEncoder();
function Be(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint"
    ? mt(e, t)
    : typeof e == "boolean"
    ? bt(e, t)
    : x(e)
    ? B(e, t)
    : X(e, t);
}
function bt(e, t = {}) {
  let r = new Uint8Array(1);
  return (
    (r[0] = Number(e)),
    typeof t.size == "number"
      ? (d(r, { size: t.size }), w(r, { size: t.size }))
      : r
  );
}
var m = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function Te(e) {
  if (e >= m.zero && e <= m.nine) return e - m.zero;
  if (e >= m.A && e <= m.F) return e - (m.A - 10);
  if (e >= m.a && e <= m.f) return e - (m.a - 10);
}
function B(e, t = {}) {
  let r = e;
  t.size &&
    (d(r, { size: t.size }), (r = w(r, { dir: "right", size: t.size })));
  let n = r.slice(2);
  n.length % 2 && (n = `0${n}`);
  let i = n.length / 2,
    s = new Uint8Array(i);
  for (let o = 0, f = 0; o < i; o++) {
    let l = Te(n.charCodeAt(f++)),
      p = Te(n.charCodeAt(f++));
    if (l === void 0 || p === void 0)
      throw new u(
        `Invalid byte sequence ("${n[f - 2]}${n[f - 1]}" in "${n}").`
      );
    s[o] = l * 16 + p;
  }
  return s;
}
function mt(e, t) {
  let r = h(e, t);
  return B(r);
}
function X(e, t = {}) {
  let r = dt.encode(e);
  return typeof t.size == "number"
    ? (d(r, { size: t.size }), w(r, { dir: "right", size: t.size }))
    : r;
}
function d(e, { size: t }) {
  if (y(e) > t) throw new S({ givenSize: y(e), maxSize: t });
}
function _r(e, t) {
  let r = typeof t == "string" ? { to: t } : t,
    n = r.to;
  return n === "number"
    ? xt(e, r)
    : n === "bigint"
    ? ke(e, r)
    : n === "string"
    ? yt(e, r)
    : n === "boolean"
    ? gt(e, r)
    : B(e, r);
}
function ke(e, t = {}) {
  let { signed: r } = t;
  t.size && d(e, { size: t.size });
  let n = BigInt(e);
  if (!r) return n;
  let i = (e.length - 2) / 2,
    s = (1n << (BigInt(i) * 8n - 1n)) - 1n;
  return n <= s ? n : n - BigInt(`0x${"f".padStart(i * 2, "f")}`) - 1n;
}
function gt(e, t = {}) {
  let r = e;
  if ((t.size && (d(r, { size: t.size }), (r = T(r))), T(r) === "0x00"))
    return !1;
  if (T(r) === "0x01") return !0;
  throw new I(r);
}
function xt(e, t = {}) {
  return Number(ke(e, t));
}
function yt(e, t = {}) {
  let r = B(e);
  return (
    t.size && (d(r, { size: t.size }), (r = T(r, { dir: "right" }))),
    new TextDecoder().decode(r)
  );
}
a();
a();
a();
var H = BigInt(4294967295),
  W = BigInt(32);
function ze(e, t = !1) {
  return t
    ? { h: Number(e & H), l: Number((e >> W) & H) }
    : { h: Number((e >> W) & H) | 0, l: Number(e & H) | 0 };
}
function Y(e, t = !1) {
  let r = new Uint32Array(e.length),
    n = new Uint32Array(e.length);
  for (let i = 0; i < e.length; i++) {
    let { h: s, l: o } = ze(e[i], t);
    [r[i], n[i]] = [s, o];
  }
  return [r, n];
}
var wt = (e, t) => (BigInt(e >>> 0) << W) | BigInt(t >>> 0),
  $t = (e, t, r) => e >>> r,
  Pt = (e, t, r) => (e << (32 - r)) | (t >>> r),
  vt = (e, t, r) => (e >>> r) | (t << (32 - r)),
  Ot = (e, t, r) => (e << (32 - r)) | (t >>> r),
  jt = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
  Tt = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
  Bt = (e, t) => t,
  kt = (e, t) => e,
  J = (e, t, r) => (e << r) | (t >>> (32 - r)),
  Q = (e, t, r) => (t << r) | (e >>> (32 - r)),
  Z = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
  K = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
function zt(e, t, r, n) {
  let i = (t >>> 0) + (n >>> 0);
  return { h: (e + r + ((i / 2 ** 32) | 0)) | 0, l: i | 0 };
}
var Lt = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
  At = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
  It = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
  St = (e, t, r, n, i) => (t + r + n + i + ((e / 2 ** 32) | 0)) | 0,
  Ut = (e, t, r, n, i) =>
    (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
  Ht = (e, t, r, n, i, s) => (t + r + n + i + s + ((e / 2 ** 32) | 0)) | 0;
var Ct = {
    fromBig: ze,
    split: Y,
    toBig: wt,
    shrSH: $t,
    shrSL: Pt,
    rotrSH: vt,
    rotrSL: Ot,
    rotrBH: jt,
    rotrBL: Tt,
    rotr32H: Bt,
    rotr32L: kt,
    rotlSH: J,
    rotlSL: Q,
    rotlBH: Z,
    rotlBL: K,
    add: zt,
    add3L: Lt,
    add3H: At,
    add4L: It,
    add4H: St,
    add5H: Ht,
    add5L: Ut,
  },
  Nr = Ct;
var [Ie, Se, Ue] = [[], [], []],
  Et = BigInt(0),
  k = BigInt(1),
  Mt = BigInt(2),
  Rt = BigInt(7),
  Ft = BigInt(256),
  _t = BigInt(113);
for (let e = 0, t = k, r = 1, n = 0; e < 24; e++) {
  ([r, n] = [n, (2 * r + 3 * n) % 5]),
    Ie.push(2 * (5 * n + r)),
    Se.push((((e + 1) * (e + 2)) / 2) % 64);
  let i = Et;
  for (let s = 0; s < 7; s++)
    (t = ((t << k) ^ ((t >> Rt) * _t)) % Ft),
      t & Mt && (i ^= k << ((k << BigInt(s)) - k));
  Ue.push(i);
}
var [Vt, Gt] = Y(Ue, !0),
  Le = (e, t, r) => (r > 32 ? Z(e, t, r) : J(e, t, r)),
  Ae = (e, t, r) => (r > 32 ? K(e, t, r) : Q(e, t, r));
function Nt(e, t = 24) {
  let r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let o = 0; o < 10; o++)
      r[o] = e[o] ^ e[o + 10] ^ e[o + 20] ^ e[o + 30] ^ e[o + 40];
    for (let o = 0; o < 10; o += 2) {
      let f = (o + 8) % 10,
        l = (o + 2) % 10,
        p = r[l],
        b = r[l + 1],
        V = Le(p, b, 1) ^ r[f],
        L = Ae(p, b, 1) ^ r[f + 1];
      for (let P = 0; P < 50; P += 10) (e[o + P] ^= V), (e[o + P + 1] ^= L);
    }
    let i = e[2],
      s = e[3];
    for (let o = 0; o < 24; o++) {
      let f = Se[o],
        l = Le(i, s, f),
        p = Ae(i, s, f),
        b = Ie[o];
      (i = e[b]), (s = e[b + 1]), (e[b] = l), (e[b + 1] = p);
    }
    for (let o = 0; o < 50; o += 10) {
      for (let f = 0; f < 10; f++) r[f] = e[o + f];
      for (let f = 0; f < 10; f++)
        e[o + f] ^= ~r[(f + 2) % 10] & r[(f + 4) % 10];
    }
    (e[0] ^= Vt[n]), (e[1] ^= Gt[n]);
  }
  r.fill(0);
}
var C = class e extends me {
    constructor(t, r, n, i = !1, s = 24) {
      if (
        (super(),
        (this.blockLen = t),
        (this.suffix = r),
        (this.outputLen = n),
        (this.enableXOF = i),
        (this.rounds = s),
        (this.pos = 0),
        (this.posOut = 0),
        (this.finished = !1),
        (this.destroyed = !1),
        N(n),
        0 >= this.blockLen || this.blockLen >= 200)
      )
        throw new Error("Sha3 supports only keccak-f1600 function");
      (this.state = new Uint8Array(200)), (this.state32 = de(this.state));
    }
    keccak() {
      Nt(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
    }
    update(t) {
      D(this);
      let { blockLen: r, state: n } = this;
      t = be(t);
      let i = t.length;
      for (let s = 0; s < i; ) {
        let o = Math.min(r - this.pos, i - s);
        for (let f = 0; f < o; f++) n[this.pos++] ^= t[s++];
        this.pos === r && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = !0;
      let { state: t, suffix: r, pos: n, blockLen: i } = this;
      (t[n] ^= r),
        r & 128 && n === i - 1 && this.keccak(),
        (t[i - 1] ^= 128),
        this.keccak();
    }
    writeInto(t) {
      D(this, !1), he(t), this.finish();
      let r = this.state,
        { blockLen: n } = this;
      for (let i = 0, s = t.length; i < s; ) {
        this.posOut >= n && this.keccak();
        let o = Math.min(n - this.posOut, s - i);
        t.set(r.subarray(this.posOut, this.posOut + o), i),
          (this.posOut += o),
          (i += o);
      }
      return t;
    }
    xofInto(t) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(t);
    }
    xof(t) {
      return N(t), this.xofInto(new Uint8Array(t));
    }
    digestInto(t) {
      if ((pe(t, this), this.finished))
        throw new Error("digest() was already called");
      return this.writeInto(t), this.destroy(), t;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      (this.destroyed = !0), this.state.fill(0);
    }
    _cloneInto(t) {
      let {
        blockLen: r,
        suffix: n,
        outputLen: i,
        rounds: s,
        enableXOF: o,
      } = this;
      return (
        t || (t = new e(r, n, i, o, s)),
        t.state32.set(this.state32),
        (t.pos = this.pos),
        (t.posOut = this.posOut),
        (t.finished = this.finished),
        (t.rounds = s),
        (t.suffix = n),
        (t.outputLen = i),
        (t.enableXOF = o),
        (t.destroyed = this.destroyed),
        t
      );
    }
  },
  $ = (e, t, r) => ge(() => new C(t, e, r)),
  Qr = $(6, 144, 224 / 8),
  Zr = $(6, 136, 256 / 8),
  Kr = $(6, 104, 384 / 8),
  qr = $(6, 72, 512 / 8),
  en = $(1, 144, 224 / 8),
  He = $(1, 136, 256 / 8),
  tn = $(1, 104, 384 / 8),
  rn = $(1, 72, 512 / 8),
  Ce = (e, t, r) =>
    xe((n = {}) => new C(t, e, n.dkLen === void 0 ? r : n.dkLen, !0)),
  nn = Ce(31, 168, 128 / 8),
  on = Ce(31, 136, 256 / 8);
function Ee(e, t) {
  let r = t || "hex",
    n = He(x(e, { strict: !1 }) ? Be(e) : e);
  return r === "bytes" ? n : je(n);
}
a();
var E = class extends u {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart.",
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidAddressError",
      });
  }
};
a();
a();
var v = class extends Map {
  constructor(t) {
    super(),
      Object.defineProperty(this, "maxSize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.maxSize = t);
  }
  set(t, r) {
    return (
      super.set(t, r),
      this.maxSize &&
        this.size > this.maxSize &&
        this.delete(this.keys().next().value),
      this
    );
  }
};
a();
var Dt = /^0x[a-fA-F0-9]{40}$/,
  q = new v(8192);
function Me(e, t) {
  let { strict: r = !0 } = t ?? {};
  if (q.has(e)) return q.get(e);
  let n = Dt.test(e) ? (e.toLowerCase() === e ? !0 : r ? ee(e) === e : !0) : !1;
  return q.set(e, n), n;
}
var te = new v(8192);
function ee(e, t) {
  if (te.has(`${e}.${t}`)) return te.get(`${e}.${t}`);
  let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
    n = Ee(X(r), "bytes"),
    i = (t ? r.substring(`${t}0x`.length) : r).split("");
  for (let o = 0; o < 40; o += 2)
    n[o >> 1] >> 4 >= 8 && i[o] && (i[o] = i[o].toUpperCase()),
      (n[o >> 1] & 15) >= 8 && i[o + 1] && (i[o + 1] = i[o + 1].toUpperCase());
  let s = `0x${i.join("")}`;
  return te.set(`${e}.${t}`, s), s;
}
function kn(e, t) {
  if (!Me(e, { strict: !1 })) throw new E({ address: e });
  return ee(e, t);
}
a();
function An(e) {
  return typeof e[0] == "string" ? Wt(e) : Xt(e);
}
function Xt(e) {
  let t = 0;
  for (let i of e) t += i.length;
  let r = new Uint8Array(t),
    n = 0;
  for (let i of e) r.set(i, n), (n += i.length);
  return r;
}
function Wt(e) {
  return `0x${e.reduce((t, r) => t + r.replace("0x", ""), "")}`;
}
a();
function En(e, t, r, { strict: n } = {}) {
  return x(e, { strict: !1 })
    ? Jt(e, t, r, { strict: n })
    : Yt(e, t, r, { strict: n });
}
function Re(e, t) {
  if (typeof t == "number" && t > 0 && t > y(e) - 1)
    throw new O({ offset: t, position: "start", size: y(e) });
}
function Fe(e, t, r) {
  if (typeof t == "number" && typeof r == "number" && y(e) !== r - t)
    throw new O({ offset: r, position: "end", size: y(e) });
}
function Yt(e, t, r, { strict: n } = {}) {
  Re(e, t);
  let i = e.slice(t, r);
  return n && Fe(i, t, r), i;
}
function Jt(e, t, r, { strict: n } = {}) {
  Re(e, t);
  let i = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
  return n && Fe(i, t, r), i;
}
a();
var _e = { gwei: 9, wei: 18 },
  Ve = { ether: -9, wei: 9 },
  Fn = { ether: -18, gwei: -9 };
a();
function M(e, t) {
  let r = e.toString(),
    n = r.startsWith("-");
  n && (r = r.slice(1)), (r = r.padStart(t, "0"));
  let [i, s] = [r.slice(0, r.length - t), r.slice(r.length - t)];
  return (
    (s = s.replace(/(0+)$/, "")),
    `${n ? "-" : ""}${i || "0"}${s ? `.${s}` : ""}`
  );
}
a();
function Ge(e, t = "wei") {
  return M(e, _e[t]);
}
a();
function g(e, t = "wei") {
  return M(e, Ve[t]);
}
a();
function et(e) {
  let t = Object.entries(e)
      .map(([n, i]) => (i === void 0 || i === !1 ? null : [n, i]))
      .filter(Boolean),
    r = t.reduce((n, [i]) => Math.max(n, i.length), 0);
  return t.map(([n, i]) => `  ${`${n}:`.padEnd(r + 1)}  ${i}`).join(`
`);
}
var Ne = class extends u {
    constructor() {
      super(
        [
          "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
          "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "FeeConflictError",
        });
    }
  },
  De = class extends u {
    constructor({ v: t }) {
      super(`Invalid \`v\` value "${t}". Expected 27 or 28.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidLegacyVError",
        });
    }
  },
  Xe = class extends u {
    constructor({ transaction: t }) {
      super("Cannot infer a transaction type from provided transaction.", {
        metaMessages: [
          "Provided Transaction:",
          "{",
          et(t),
          "}",
          "",
          "To infer the type, either provide:",
          "- a `type` to the Transaction, or",
          "- an EIP-1559 Transaction with `maxFeePerGas`, or",
          "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
          "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
          "- a Legacy Transaction with `gasPrice`",
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidSerializableTransactionError",
        });
    }
  },
  We = class extends u {
    constructor({ serializedType: t }) {
      super(`Serialized transaction type "${t}" is invalid.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidSerializedTransactionType",
        }),
        Object.defineProperty(this, "serializedType", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.serializedType = t);
    }
  },
  Ye = class extends u {
    constructor({ attributes: t, serializedTransaction: r, type: n }) {
      let i = Object.entries(t)
        .map(([s, o]) => (typeof o > "u" ? s : void 0))
        .filter(Boolean);
      super(`Invalid serialized transaction of type "${n}" was provided.`, {
        metaMessages: [
          `Serialized Transaction: "${r}"`,
          i.length > 0 ? `Missing Attributes: ${i.join(", ")}` : "",
        ].filter(Boolean),
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidSerializedTransactionError",
        }),
        Object.defineProperty(this, "serializedTransaction", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "type", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.serializedTransaction = r),
        (this.type = n);
    }
  },
  Je = class extends u {
    constructor({ storageKey: t }) {
      super(
        `Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor(
          (t.length - 2) / 2
        )} bytes.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidStorageKeySizeError",
        });
    }
  },
  Qe = class extends u {
    constructor(
      t,
      {
        account: r,
        docsPath: n,
        chain: i,
        data: s,
        gas: o,
        gasPrice: f,
        maxFeePerGas: l,
        maxPriorityFeePerGas: p,
        nonce: b,
        to: V,
        value: L,
      }
    ) {
      let P = et({
        chain: i && `${i?.name} (id: ${i?.id})`,
        from: r?.address,
        to: V,
        value:
          typeof L < "u" && `${Ge(L)} ${i?.nativeCurrency?.symbol || "ETH"}`,
        data: s,
        gas: o,
        gasPrice: typeof f < "u" && `${g(f)} gwei`,
        maxFeePerGas: typeof l < "u" && `${g(l)} gwei`,
        maxPriorityFeePerGas: typeof p < "u" && `${g(p)} gwei`,
        nonce: b,
      });
      super(t.shortMessage, {
        cause: t,
        docsPath: n,
        metaMessages: [
          ...(t.metaMessages ? [...t.metaMessages, " "] : []),
          "Request Arguments:",
          P,
        ].filter(Boolean),
      }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "TransactionExecutionError",
        }),
        (this.cause = t);
    }
  },
  Ze = class extends u {
    constructor({
      blockHash: t,
      blockNumber: r,
      blockTag: n,
      hash: i,
      index: s,
    }) {
      let o = "Transaction";
      n &&
        s !== void 0 &&
        (o = `Transaction at block time "${n}" at index "${s}"`),
        t &&
          s !== void 0 &&
          (o = `Transaction at block hash "${t}" at index "${s}"`),
        r &&
          s !== void 0 &&
          (o = `Transaction at block number "${r}" at index "${s}"`),
        i && (o = `Transaction with hash "${i}"`),
        super(`${o} could not be found.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "TransactionNotFoundError",
        });
    }
  },
  Ke = class extends u {
    constructor({ hash: t }) {
      super(
        `Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "TransactionReceiptNotFoundError",
        });
    }
  },
  qe = class extends u {
    constructor({ hash: t }) {
      super(
        `Timed out while waiting for transaction with hash "${t}" to be confirmed.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "WaitForTransactionReceiptTimeoutError",
        });
    }
  };
a();
var R = class extends u {
  constructor({ cause: t, message: r } = {}) {
    let n = r
      ?.replace("execution reverted: ", "")
      ?.replace("execution reverted", "");
    super(
      `Execution reverted ${
        n ? `with reason: ${n}` : "for an unknown reason"
      }.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ExecutionRevertedError",
      });
  }
};
Object.defineProperty(R, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3,
});
Object.defineProperty(R, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/,
});
var re = class extends u {
  constructor({ cause: t, maxFeePerGas: r } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        r ? ` = ${g(r)} gwei` : ""
      }) cannot be higher than the maximum allowed value (2^256-1).`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FeeCapTooHigh",
      });
  }
};
Object.defineProperty(re, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
});
var ne = class extends u {
  constructor({ cause: t, maxFeePerGas: r } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        r ? ` = ${g(r)}` : ""
      } gwei) cannot be lower than the block base fee.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FeeCapTooLow",
      });
  }
};
Object.defineProperty(ne, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
});
var ie = class extends u {
  constructor({ cause: t, nonce: r } = {}) {
    super(
      `Nonce provided for the transaction ${
        r ? `(${r}) ` : ""
      }is higher than the next one expected.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "NonceTooHighError",
      });
  }
};
Object.defineProperty(ie, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/,
});
var oe = class extends u {
  constructor({ cause: t, nonce: r } = {}) {
    super(
      [
        `Nonce provided for the transaction ${
          r ? `(${r}) ` : ""
        }is lower than the current nonce of the account.`,
        "Try increasing the nonce or find the latest nonce with `getTransactionCount`.",
      ].join(`
`),
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "NonceTooLowError",
      });
  }
};
Object.defineProperty(oe, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/,
});
var se = class extends u {
  constructor({ cause: t, nonce: r } = {}) {
    super(
      `Nonce provided for the transaction ${
        r ? `(${r}) ` : ""
      }exceeds the maximum allowed nonce.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "NonceMaxValueError",
      });
  }
};
Object.defineProperty(se, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/,
});
var ae = class extends u {
  constructor({ cause: t } = {}) {
    super(
      [
        "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
      ].join(`
`),
      {
        cause: t,
        metaMessages: [
          "This error could arise when the account does not have enough funds to:",
          " - pay for the total gas fee,",
          " - pay for the value to send.",
          " ",
          "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
          " - `gas` is the amount of gas needed for transaction to execute,",
          " - `gas fee` is the gas fee,",
          " - `value` is the amount of ether to send to the recipient.",
        ],
      }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InsufficientFundsError",
      });
  }
};
Object.defineProperty(ae, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds/,
});
var ue = class extends u {
  constructor({ cause: t, gas: r } = {}) {
    super(
      `The amount of gas ${
        r ? `(${r}) ` : ""
      }provided for the transaction exceeds the limit allowed for the block.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "IntrinsicGasTooHighError",
      });
  }
};
Object.defineProperty(ue, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/,
});
var ce = class extends u {
  constructor({ cause: t, gas: r } = {}) {
    super(
      `The amount of gas ${
        r ? `(${r}) ` : ""
      }provided for the transaction is too low.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "IntrinsicGasTooLowError",
      });
  }
};
Object.defineProperty(ce, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/,
});
var fe = class extends u {
  constructor({ cause: t }) {
    super("The transaction type is not supported for this chain.", {
      cause: t,
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TransactionTypeNotSupportedError",
      });
  }
};
Object.defineProperty(fe, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/,
});
var le = class extends u {
  constructor({ cause: t, maxPriorityFeePerGas: r, maxFeePerGas: n } = {}) {
    super(
      [
        `The provided tip (\`maxPriorityFeePerGas\`${
          r ? ` = ${g(r)} gwei` : ""
        }) cannot be higher than the fee cap (\`maxFeePerGas\`${
          n ? ` = ${g(n)} gwei` : ""
        }).`,
      ].join(`
`),
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TipAboveFeeCapError",
      });
  }
};
Object.defineProperty(le, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
});
var tt = class extends u {
  constructor({ cause: t }) {
    super(`An error occurred while executing: ${t?.shortMessage}`, {
      cause: t,
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownNodeError",
      });
  }
};
a();
a();
function rt(e, t) {
  return ({ exclude: r, format: n }) => ({
    exclude: r,
    format: (i) => {
      let s = t(i);
      if (r) for (let o of r) delete s[o];
      return G(G({}, s), n(i));
    },
    type: e,
  });
}
var Qt = { legacy: "0x0", eip2930: "0x1", eip1559: "0x2", eip4844: "0x3" };
function Zt(e) {
  let t = {};
  return (
    typeof e.accessList < "u" && (t.accessList = e.accessList),
    typeof e.blobVersionedHashes < "u" &&
      (t.blobVersionedHashes = e.blobVersionedHashes),
    typeof e.blobs < "u" &&
      (typeof e.blobs[0] != "string"
        ? (t.blobs = e.blobs.map((r) => U(r)))
        : (t.blobs = e.blobs)),
    typeof e.data < "u" && (t.data = e.data),
    typeof e.from < "u" && (t.from = e.from),
    typeof e.gas < "u" && (t.gas = h(e.gas)),
    typeof e.gasPrice < "u" && (t.gasPrice = h(e.gasPrice)),
    typeof e.maxFeePerBlobGas < "u" &&
      (t.maxFeePerBlobGas = h(e.maxFeePerBlobGas)),
    typeof e.maxFeePerGas < "u" && (t.maxFeePerGas = h(e.maxFeePerGas)),
    typeof e.maxPriorityFeePerGas < "u" &&
      (t.maxPriorityFeePerGas = h(e.maxPriorityFeePerGas)),
    typeof e.nonce < "u" && (t.nonce = h(e.nonce)),
    typeof e.to < "u" && (t.to = e.to),
    typeof e.type < "u" && (t.type = Qt[e.type]),
    typeof e.value < "u" && (t.value = h(e.value)),
    t
  );
}
var pi = rt("transactionRequest", Zt);
a();
var nt = class extends u {
    constructor({ blockNumber: t, chain: r, contract: n }) {
      super(`Chain "${r.name}" does not support contract "${n.name}".`, {
        metaMessages: [
          "This could be due to any of the following:",
          ...(t && n.blockCreated && n.blockCreated > t
            ? [
                `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${t}).`,
              ]
            : [
                `- The chain does not have the contract "${n.name}" configured.`,
              ]),
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ChainDoesNotSupportContract",
        });
    }
  },
  it = class extends u {
    constructor({ chain: t, currentChainId: r }) {
      super(
        `The current chain of the wallet (id: ${r}) does not match the target chain for the transaction (id: ${t.id} \u2013 ${t.name}).`,
        {
          metaMessages: [
            `Current Chain ID:  ${r}`,
            `Expected Chain ID: ${t.id} \u2013 ${t.name}`,
          ],
        }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ChainMismatchError",
        });
    }
  },
  ot = class extends u {
    constructor() {
      super(
        [
          "No chain was provided to the request.",
          "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ChainNotFoundError",
        });
    }
  },
  st = class extends u {
    constructor() {
      super("No chain was provided to the Client."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ClientChainNotConfiguredError",
        });
    }
  },
  at = class extends u {
    constructor({ chainId: t }) {
      super(
        typeof t == "number"
          ? `Chain ID "${t}" is invalid.`
          : "Chain ID is invalid."
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidChainIdError",
        });
    }
  };
a();
var z = class extends u {
    constructor({ offset: t }) {
      super(`Offset \`${t}\` cannot be negative.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "NegativeOffsetError",
        });
    }
  },
  F = class extends u {
    constructor({ length: t, position: r }) {
      super(`Position \`${r}\` is out of bounds (\`0 < position < ${t}\`).`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PositionOutOfBoundsError",
        });
    }
  },
  _ = class extends u {
    constructor({ count: t, limit: r }) {
      super(
        `Recursive read limit of \`${r}\` exceeded (recursive read count: \`${t}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RecursiveReadLimitExceededError",
        });
    }
  };
a();
var Kt = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new _({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit,
      });
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new F({ length: this.bytes.length, position: e });
  },
  decrementPosition(e) {
    if (e < 0) throw new z({ offset: e });
    let t = this.position - e;
    this.assertPosition(t), (this.position = t);
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0;
  },
  incrementPosition(e) {
    if (e < 0) throw new z({ offset: e });
    let t = this.position + e;
    this.assertPosition(t), (this.position = t);
  },
  inspectByte(e) {
    let t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    let r = t ?? this.position;
    return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
  },
  inspectUint8(e) {
    let t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    let t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    let t = e ?? this.position;
    return (
      this.assertPosition(t + 2),
      (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    );
  },
  inspectUint32(e) {
    let t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1),
      this.bytes.set(e, this.position),
      (this.position += e.length);
  },
  pushUint8(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1),
      this.dataView.setUint16(this.position, e),
      (this.position += 2);
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2),
      this.dataView.setUint16(this.position, e >> 8),
      this.dataView.setUint8(this.position + 2, e & 255),
      (this.position += 3);
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3),
      this.dataView.setUint32(this.position, e),
      (this.position += 4);
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e, t) {
    this.assertReadLimit(), this._touch();
    let r = this.inspectBytes(e);
    return (this.position += t ?? e), r;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint8();
    return (this.position += 1), e;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint16();
    return (this.position += 2), e;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint24();
    return (this.position += 3), e;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint32();
    return (this.position += 4), e;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(e) {
    let t = this.position;
    return (
      this.assertPosition(e), (this.position = e), () => (this.position = t)
    );
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
    let e = this.getReadCount();
    this.positionReadCount.set(this.position, e + 1),
      e > 0 && this.recursiveReadCount++;
  },
};
function vi(e, { recursiveReadLimit: t = 8192 } = {}) {
  let r = Object.create(Kt);
  return (
    (r.bytes = e),
    (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
    (r.positionReadCount = new Map()),
    (r.recursiveReadLimit = t),
    r
  );
}
export {
  x as a,
  y as b,
  ar as c,
  ur as d,
  u as e,
  O as f,
  j as g,
  Pe as h,
  w as i,
  ut as j,
  ct as k,
  A as l,
  ve as m,
  I as n,
  Oe as o,
  S as p,
  T as q,
  d as r,
  _r as s,
  ke as t,
  gt as u,
  xt as v,
  yt as w,
  je as x,
  lt as y,
  U as z,
  h as A,
  pt as B,
  Be as C,
  bt as D,
  B as E,
  mt as F,
  X as G,
  Nr as H,
  He as I,
  Ee as J,
  E as K,
  ee as L,
  kn as M,
  Me as N,
  An as O,
  Xt as P,
  Wt as Q,
  En as R,
  Yt as S,
  Jt as T,
  F as U,
  vi as V,
  _e as W,
  Ve as X,
  Fn as Y,
  M as Z,
  Ge as _,
  g as $,
  et as aa,
  Ne as ba,
  De as ca,
  Xe as da,
  We as ea,
  Ye as fa,
  Je as ga,
  Qe as ha,
  Ze as ia,
  Ke as ja,
  qe as ka,
  R as la,
  re as ma,
  ne as na,
  ie as oa,
  oe as pa,
  se as qa,
  ae as ra,
  ue as sa,
  ce as ta,
  fe as ua,
  le as va,
  tt as wa,
  rt as xa,
  Qt as ya,
  Zt as za,
  pi as Aa,
  nt as Ba,
  it as Ca,
  ot as Da,
  st as Ea,
  at as Fa,
};
