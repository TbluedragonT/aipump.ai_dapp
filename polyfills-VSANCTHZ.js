var rr = Object.create;
var mt = Object.defineProperty;
var nr = Object.getOwnPropertyDescriptor;
var ir = Object.getOwnPropertyNames;
var or = Object.getPrototypeOf,
  sr = Object.prototype.hasOwnProperty;
var ze = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var ar = (r, e, t, n) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let i of ir(e))
      !sr.call(r, i) &&
        i !== t &&
        mt(r, i, {
          get: () => e[i],
          enumerable: !(n = nr(e, i)) || n.enumerable,
        });
  return r;
};
var cr = (r, e, t) => (
  (t = r != null ? rr(or(r)) : {}),
  ar(
    e || !r || !r.__esModule
      ? mt(t, "default", { value: r, enumerable: !0 })
      : t,
    r
  )
);
var Ut = ze((He) => {
  "use strict";
  He.byteLength = Br;
  He.toByteArray = Lr;
  He.fromByteArray = Ur;
  var he = [],
    oe = [],
    Pr = typeof Uint8Array < "u" ? Uint8Array : Array,
    ot = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (ve = 0, Mt = ot.length; ve < Mt; ++ve)
    (he[ve] = ot[ve]), (oe[ot.charCodeAt(ve)] = ve);
  var ve, Mt;
  oe[45] = 62;
  oe[95] = 63;
  function Ot(r) {
    var e = r.length;
    if (e % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var t = r.indexOf("=");
    t === -1 && (t = e);
    var n = t === e ? 0 : 4 - (t % 4);
    return [t, n];
  }
  function Br(r) {
    var e = Ot(r),
      t = e[0],
      n = e[1];
    return ((t + n) * 3) / 4 - n;
  }
  function Nr(r, e, t) {
    return ((e + t) * 3) / 4 - t;
  }
  function Lr(r) {
    var e,
      t = Ot(r),
      n = t[0],
      i = t[1],
      o = new Pr(Nr(r, n, i)),
      s = 0,
      f = i > 0 ? n - 4 : n,
      h;
    for (h = 0; h < f; h += 4)
      (e =
        (oe[r.charCodeAt(h)] << 18) |
        (oe[r.charCodeAt(h + 1)] << 12) |
        (oe[r.charCodeAt(h + 2)] << 6) |
        oe[r.charCodeAt(h + 3)]),
        (o[s++] = (e >> 16) & 255),
        (o[s++] = (e >> 8) & 255),
        (o[s++] = e & 255);
    return (
      i === 2 &&
        ((e = (oe[r.charCodeAt(h)] << 2) | (oe[r.charCodeAt(h + 1)] >> 4)),
        (o[s++] = e & 255)),
      i === 1 &&
        ((e =
          (oe[r.charCodeAt(h)] << 10) |
          (oe[r.charCodeAt(h + 1)] << 4) |
          (oe[r.charCodeAt(h + 2)] >> 2)),
        (o[s++] = (e >> 8) & 255),
        (o[s++] = e & 255)),
      o
    );
  }
  function Mr(r) {
    return (
      he[(r >> 18) & 63] + he[(r >> 12) & 63] + he[(r >> 6) & 63] + he[r & 63]
    );
  }
  function Or(r, e, t) {
    for (var n, i = [], o = e; o < t; o += 3)
      (n =
        ((r[o] << 16) & 16711680) +
        ((r[o + 1] << 8) & 65280) +
        (r[o + 2] & 255)),
        i.push(Mr(n));
    return i.join("");
  }
  function Ur(r) {
    for (
      var e, t = r.length, n = t % 3, i = [], o = 16383, s = 0, f = t - n;
      s < f;
      s += o
    )
      i.push(Or(r, s, s + o > f ? f : s + o));
    return (
      n === 1
        ? ((e = r[t - 1]), i.push(he[e >> 2] + he[(e << 4) & 63] + "=="))
        : n === 2 &&
          ((e = (r[t - 2] << 8) + r[t - 1]),
          i.push(he[e >> 10] + he[(e >> 4) & 63] + he[(e << 2) & 63] + "=")),
      i.join("")
    );
  }
});
var Zt = ze((st) => {
  "use strict";
  st.read = function (r, e, t, n, i) {
    var o,
      s,
      f = i * 8 - n - 1,
      h = (1 << f) - 1,
      T = h >> 1,
      p = -7,
      y = t ? i - 1 : 0,
      R = t ? -1 : 1,
      D = r[e + y];
    for (
      y += R, o = D & ((1 << -p) - 1), D >>= -p, p += f;
      p > 0;
      o = o * 256 + r[e + y], y += R, p -= 8
    );
    for (
      s = o & ((1 << -p) - 1), o >>= -p, p += n;
      p > 0;
      s = s * 256 + r[e + y], y += R, p -= 8
    );
    if (o === 0) o = 1 - T;
    else {
      if (o === h) return s ? NaN : (D ? -1 : 1) * (1 / 0);
      (s = s + Math.pow(2, n)), (o = o - T);
    }
    return (D ? -1 : 1) * s * Math.pow(2, o - n);
  };
  st.write = function (r, e, t, n, i, o) {
    var s,
      f,
      h,
      T = o * 8 - i - 1,
      p = (1 << T) - 1,
      y = p >> 1,
      R = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      D = n ? 0 : o - 1,
      U = n ? 1 : -1,
      K = e < 0 || (e === 0 && 1 / e < 0) ? 1 : 0;
    for (
      e = Math.abs(e),
        isNaN(e) || e === 1 / 0
          ? ((f = isNaN(e) ? 1 : 0), (s = p))
          : ((s = Math.floor(Math.log(e) / Math.LN2)),
            e * (h = Math.pow(2, -s)) < 1 && (s--, (h *= 2)),
            s + y >= 1 ? (e += R / h) : (e += R * Math.pow(2, 1 - y)),
            e * h >= 2 && (s++, (h /= 2)),
            s + y >= p
              ? ((f = 0), (s = p))
              : s + y >= 1
              ? ((f = (e * h - 1) * Math.pow(2, i)), (s = s + y))
              : ((f = e * Math.pow(2, y - 1) * Math.pow(2, i)), (s = 0)));
      i >= 8;
      r[t + D] = f & 255, D += U, f /= 256, i -= 8
    );
    for (
      s = (s << i) | f, T += i;
      T > 0;
      r[t + D] = s & 255, D += U, s /= 256, T -= 8
    );
    r[t + D - U] |= K * 128;
  };
});
var Qt = ze((De) => {
  "use strict";
  var at = Ut(),
    Se = Zt(),
    Ht =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  De.Buffer = l;
  De.SlowBuffer = Wr;
  De.INSPECT_MAX_BYTES = 50;
  var je = 2147483647;
  De.kMaxLength = je;
  l.TYPED_ARRAY_SUPPORT = Zr();
  !l.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
  function Zr() {
    try {
      var r = new Uint8Array(1),
        e = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(e, Uint8Array.prototype),
        Object.setPrototypeOf(r, e),
        r.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(l.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (l.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(l.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (l.isBuffer(this)) return this.byteOffset;
    },
  });
  function ge(r) {
    if (r > je)
      throw new RangeError(
        'The value "' + r + '" is invalid for option "size"'
      );
    var e = new Uint8Array(r);
    return Object.setPrototypeOf(e, l.prototype), e;
  }
  function l(r, e, t) {
    if (typeof r == "number") {
      if (typeof e == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return ft(r);
    }
    return Vt(r, e, t);
  }
  l.poolSize = 8192;
  function Vt(r, e, t) {
    if (typeof r == "string") return jr(r, e);
    if (ArrayBuffer.isView(r)) return Gr(r);
    if (r == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof r
      );
    if (
      pe(r, ArrayBuffer) ||
      (r && pe(r.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (pe(r, SharedArrayBuffer) || (r && pe(r.buffer, SharedArrayBuffer))))
    )
      return ut(r, e, t);
    if (typeof r == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var n = r.valueOf && r.valueOf();
    if (n != null && n !== r) return l.from(n, e, t);
    var i = Vr(r);
    if (i) return i;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof r[Symbol.toPrimitive] == "function"
    )
      return l.from(r[Symbol.toPrimitive]("string"), e, t);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof r
    );
  }
  l.from = function (r, e, t) {
    return Vt(r, e, t);
  };
  Object.setPrototypeOf(l.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(l, Uint8Array);
  function Wt(r) {
    if (typeof r != "number")
      throw new TypeError('"size" argument must be of type number');
    if (r < 0)
      throw new RangeError(
        'The value "' + r + '" is invalid for option "size"'
      );
  }
  function Hr(r, e, t) {
    return (
      Wt(r),
      r <= 0
        ? ge(r)
        : e !== void 0
        ? typeof t == "string"
          ? ge(r).fill(e, t)
          : ge(r).fill(e)
        : ge(r)
    );
  }
  l.alloc = function (r, e, t) {
    return Hr(r, e, t);
  };
  function ft(r) {
    return Wt(r), ge(r < 0 ? 0 : ht(r) | 0);
  }
  l.allocUnsafe = function (r) {
    return ft(r);
  };
  l.allocUnsafeSlow = function (r) {
    return ft(r);
  };
  function jr(r, e) {
    if (((typeof e != "string" || e === "") && (e = "utf8"), !l.isEncoding(e)))
      throw new TypeError("Unknown encoding: " + e);
    var t = zt(r, e) | 0,
      n = ge(t),
      i = n.write(r, e);
    return i !== t && (n = n.slice(0, i)), n;
  }
  function ct(r) {
    for (
      var e = r.length < 0 ? 0 : ht(r.length) | 0, t = ge(e), n = 0;
      n < e;
      n += 1
    )
      t[n] = r[n] & 255;
    return t;
  }
  function Gr(r) {
    if (pe(r, Uint8Array)) {
      var e = new Uint8Array(r);
      return ut(e.buffer, e.byteOffset, e.byteLength);
    }
    return ct(r);
  }
  function ut(r, e, t) {
    if (e < 0 || r.byteLength < e)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (r.byteLength < e + (t || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var n;
    return (
      e === void 0 && t === void 0
        ? (n = new Uint8Array(r))
        : t === void 0
        ? (n = new Uint8Array(r, e))
        : (n = new Uint8Array(r, e, t)),
      Object.setPrototypeOf(n, l.prototype),
      n
    );
  }
  function Vr(r) {
    if (l.isBuffer(r)) {
      var e = ht(r.length) | 0,
        t = ge(e);
      return t.length === 0 || r.copy(t, 0, 0, e), t;
    }
    if (r.length !== void 0)
      return typeof r.length != "number" || pt(r.length) ? ge(0) : ct(r);
    if (r.type === "Buffer" && Array.isArray(r.data)) return ct(r.data);
  }
  function ht(r) {
    if (r >= je)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          je.toString(16) +
          " bytes"
      );
    return r | 0;
  }
  function Wr(r) {
    return +r != r && (r = 0), l.alloc(+r);
  }
  l.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== l.prototype;
  };
  l.compare = function (e, t) {
    if (
      (pe(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
      pe(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
      !l.isBuffer(e) || !l.isBuffer(t))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (e === t) return 0;
    for (var n = e.length, i = t.length, o = 0, s = Math.min(n, i); o < s; ++o)
      if (e[o] !== t[o]) {
        (n = e[o]), (i = t[o]);
        break;
      }
    return n < i ? -1 : i < n ? 1 : 0;
  };
  l.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  l.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return l.alloc(0);
    var n;
    if (t === void 0) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
    var i = l.allocUnsafe(t),
      o = 0;
    for (n = 0; n < e.length; ++n) {
      var s = e[n];
      if (pe(s, Uint8Array))
        o + s.length > i.length
          ? l.from(s).copy(i, o)
          : Uint8Array.prototype.set.call(i, s, o);
      else if (l.isBuffer(s)) s.copy(i, o);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      o += s.length;
    }
    return i;
  };
  function zt(r, e) {
    if (l.isBuffer(r)) return r.length;
    if (ArrayBuffer.isView(r) || pe(r, ArrayBuffer)) return r.byteLength;
    if (typeof r != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof r
      );
    var t = r.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && t === 0) return 0;
    for (var i = !1; ; )
      switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return t;
        case "utf8":
        case "utf-8":
          return lt(r).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return t * 2;
        case "hex":
          return t >>> 1;
        case "base64":
          return Kt(r).length;
        default:
          if (i) return n ? -1 : lt(r).length;
          (e = ("" + e).toLowerCase()), (i = !0);
      }
  }
  l.byteLength = zt;
  function zr(r, e, t) {
    var n = !1;
    if (
      ((e === void 0 || e < 0) && (e = 0),
      e > this.length ||
        ((t === void 0 || t > this.length) && (t = this.length), t <= 0) ||
        ((t >>>= 0), (e >>>= 0), t <= e))
    )
      return "";
    for (r || (r = "utf8"); ; )
      switch (r) {
        case "hex":
          return rn(this, e, t);
        case "utf8":
        case "utf-8":
          return Xt(this, e, t);
        case "ascii":
          return en(this, e, t);
        case "latin1":
        case "binary":
          return tn(this, e, t);
        case "base64":
          return Kr(this, e, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return nn(this, e, t);
        default:
          if (n) throw new TypeError("Unknown encoding: " + r);
          (r = (r + "").toLowerCase()), (n = !0);
      }
  }
  l.prototype._isBuffer = !0;
  function xe(r, e, t) {
    var n = r[e];
    (r[e] = r[t]), (r[t] = n);
  }
  l.prototype.swap16 = function () {
    var e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var t = 0; t < e; t += 2) xe(this, t, t + 1);
    return this;
  };
  l.prototype.swap32 = function () {
    var e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var t = 0; t < e; t += 4) xe(this, t, t + 3), xe(this, t + 1, t + 2);
    return this;
  };
  l.prototype.swap64 = function () {
    var e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var t = 0; t < e; t += 8)
      xe(this, t, t + 7),
        xe(this, t + 1, t + 6),
        xe(this, t + 2, t + 5),
        xe(this, t + 3, t + 4);
    return this;
  };
  l.prototype.toString = function () {
    var e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
      ? Xt(this, 0, e)
      : zr.apply(this, arguments);
  };
  l.prototype.toLocaleString = l.prototype.toString;
  l.prototype.equals = function (e) {
    if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : l.compare(this, e) === 0;
  };
  l.prototype.inspect = function () {
    var e = "",
      t = De.INSPECT_MAX_BYTES;
    return (
      (e = this.toString("hex", 0, t)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">"
    );
  };
  Ht && (l.prototype[Ht] = l.prototype.inspect);
  l.prototype.compare = function (e, t, n, i, o) {
    if (
      (pe(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
      !l.isBuffer(e))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e
      );
    if (
      (t === void 0 && (t = 0),
      n === void 0 && (n = e ? e.length : 0),
      i === void 0 && (i = 0),
      o === void 0 && (o = this.length),
      t < 0 || n > e.length || i < 0 || o > this.length)
    )
      throw new RangeError("out of range index");
    if (i >= o && t >= n) return 0;
    if (i >= o) return -1;
    if (t >= n) return 1;
    if (((t >>>= 0), (n >>>= 0), (i >>>= 0), (o >>>= 0), this === e)) return 0;
    for (
      var s = o - i,
        f = n - t,
        h = Math.min(s, f),
        T = this.slice(i, o),
        p = e.slice(t, n),
        y = 0;
      y < h;
      ++y
    )
      if (T[y] !== p[y]) {
        (s = T[y]), (f = p[y]);
        break;
      }
    return s < f ? -1 : f < s ? 1 : 0;
  };
  function qt(r, e, t, n, i) {
    if (r.length === 0) return -1;
    if (
      (typeof t == "string"
        ? ((n = t), (t = 0))
        : t > 2147483647
        ? (t = 2147483647)
        : t < -2147483648 && (t = -2147483648),
      (t = +t),
      pt(t) && (t = i ? 0 : r.length - 1),
      t < 0 && (t = r.length + t),
      t >= r.length)
    ) {
      if (i) return -1;
      t = r.length - 1;
    } else if (t < 0)
      if (i) t = 0;
      else return -1;
    if ((typeof e == "string" && (e = l.from(e, n)), l.isBuffer(e)))
      return e.length === 0 ? -1 : jt(r, e, t, n, i);
    if (typeof e == "number")
      return (
        (e = e & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? i
            ? Uint8Array.prototype.indexOf.call(r, e, t)
            : Uint8Array.prototype.lastIndexOf.call(r, e, t)
          : jt(r, [e], t, n, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function jt(r, e, t, n, i) {
    var o = 1,
      s = r.length,
      f = e.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (r.length < 2 || e.length < 2) return -1;
      (o = 2), (s /= 2), (f /= 2), (t /= 2);
    }
    function h(D, U) {
      return o === 1 ? D[U] : D.readUInt16BE(U * o);
    }
    var T;
    if (i) {
      var p = -1;
      for (T = t; T < s; T++)
        if (h(r, T) === h(e, p === -1 ? 0 : T - p)) {
          if ((p === -1 && (p = T), T - p + 1 === f)) return p * o;
        } else p !== -1 && (T -= T - p), (p = -1);
    } else
      for (t + f > s && (t = s - f), T = t; T >= 0; T--) {
        for (var y = !0, R = 0; R < f; R++)
          if (h(r, T + R) !== h(e, R)) {
            y = !1;
            break;
          }
        if (y) return T;
      }
    return -1;
  }
  l.prototype.includes = function (e, t, n) {
    return this.indexOf(e, t, n) !== -1;
  };
  l.prototype.indexOf = function (e, t, n) {
    return qt(this, e, t, n, !0);
  };
  l.prototype.lastIndexOf = function (e, t, n) {
    return qt(this, e, t, n, !1);
  };
  function qr(r, e, t, n) {
    t = Number(t) || 0;
    var i = r.length - t;
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
    var o = e.length;
    n > o / 2 && (n = o / 2);
    for (var s = 0; s < n; ++s) {
      var f = parseInt(e.substr(s * 2, 2), 16);
      if (pt(f)) return s;
      r[t + s] = f;
    }
    return s;
  }
  function Xr(r, e, t, n) {
    return Ge(lt(e, r.length - t), r, t, n);
  }
  function Yr(r, e, t, n) {
    return Ge(an(e), r, t, n);
  }
  function $r(r, e, t, n) {
    return Ge(Kt(e), r, t, n);
  }
  function Jr(r, e, t, n) {
    return Ge(cn(e, r.length - t), r, t, n);
  }
  l.prototype.write = function (e, t, n, i) {
    if (t === void 0) (i = "utf8"), (n = this.length), (t = 0);
    else if (n === void 0 && typeof t == "string")
      (i = t), (n = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(n)
          ? ((n = n >>> 0), i === void 0 && (i = "utf8"))
          : ((i = n), (n = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var o = this.length - t;
    if (
      ((n === void 0 || n > o) && (n = o),
      (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    for (var s = !1; ; )
      switch (i) {
        case "hex":
          return qr(this, e, t, n);
        case "utf8":
        case "utf-8":
          return Xr(this, e, t, n);
        case "ascii":
        case "latin1":
        case "binary":
          return Yr(this, e, t, n);
        case "base64":
          return $r(this, e, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Jr(this, e, t, n);
        default:
          if (s) throw new TypeError("Unknown encoding: " + i);
          (i = ("" + i).toLowerCase()), (s = !0);
      }
  };
  l.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function Kr(r, e, t) {
    return e === 0 && t === r.length
      ? at.fromByteArray(r)
      : at.fromByteArray(r.slice(e, t));
  }
  function Xt(r, e, t) {
    t = Math.min(r.length, t);
    for (var n = [], i = e; i < t; ) {
      var o = r[i],
        s = null,
        f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + f <= t) {
        var h, T, p, y;
        switch (f) {
          case 1:
            o < 128 && (s = o);
            break;
          case 2:
            (h = r[i + 1]),
              (h & 192) === 128 &&
                ((y = ((o & 31) << 6) | (h & 63)), y > 127 && (s = y));
            break;
          case 3:
            (h = r[i + 1]),
              (T = r[i + 2]),
              (h & 192) === 128 &&
                (T & 192) === 128 &&
                ((y = ((o & 15) << 12) | ((h & 63) << 6) | (T & 63)),
                y > 2047 && (y < 55296 || y > 57343) && (s = y));
            break;
          case 4:
            (h = r[i + 1]),
              (T = r[i + 2]),
              (p = r[i + 3]),
              (h & 192) === 128 &&
                (T & 192) === 128 &&
                (p & 192) === 128 &&
                ((y =
                  ((o & 15) << 18) |
                  ((h & 63) << 12) |
                  ((T & 63) << 6) |
                  (p & 63)),
                y > 65535 && y < 1114112 && (s = y));
        }
      }
      s === null
        ? ((s = 65533), (f = 1))
        : s > 65535 &&
          ((s -= 65536),
          n.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        n.push(s),
        (i += f);
    }
    return Qr(n);
  }
  var Gt = 4096;
  function Qr(r) {
    var e = r.length;
    if (e <= Gt) return String.fromCharCode.apply(String, r);
    for (var t = "", n = 0; n < e; )
      t += String.fromCharCode.apply(String, r.slice(n, (n += Gt)));
    return t;
  }
  function en(r, e, t) {
    var n = "";
    t = Math.min(r.length, t);
    for (var i = e; i < t; ++i) n += String.fromCharCode(r[i] & 127);
    return n;
  }
  function tn(r, e, t) {
    var n = "";
    t = Math.min(r.length, t);
    for (var i = e; i < t; ++i) n += String.fromCharCode(r[i]);
    return n;
  }
  function rn(r, e, t) {
    var n = r.length;
    (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
    for (var i = "", o = e; o < t; ++o) i += un[r[o]];
    return i;
  }
  function nn(r, e, t) {
    for (var n = r.slice(e, t), i = "", o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256);
    return i;
  }
  l.prototype.slice = function (e, t) {
    var n = this.length;
    (e = ~~e),
      (t = t === void 0 ? n : ~~t),
      e < 0 ? ((e += n), e < 0 && (e = 0)) : e > n && (e = n),
      t < 0 ? ((t += n), t < 0 && (t = 0)) : t > n && (t = n),
      t < e && (t = e);
    var i = this.subarray(e, t);
    return Object.setPrototypeOf(i, l.prototype), i;
  };
  function Q(r, e, t) {
    if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
    if (r + e > t)
      throw new RangeError("Trying to access beyond buffer length");
  }
  l.prototype.readUintLE = l.prototype.readUIntLE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Q(e, t, this.length);
    for (var i = this[e], o = 1, s = 0; ++s < t && (o *= 256); )
      i += this[e + s] * o;
    return i;
  };
  l.prototype.readUintBE = l.prototype.readUIntBE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Q(e, t, this.length);
    for (var i = this[e + --t], o = 1; t > 0 && (o *= 256); )
      i += this[e + --t] * o;
    return i;
  };
  l.prototype.readUint8 = l.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || Q(e, 1, this.length), this[e];
  };
  l.prototype.readUint16LE = l.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 2, this.length), this[e] | (this[e + 1] << 8)
    );
  };
  l.prototype.readUint16BE = l.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 2, this.length), (this[e] << 8) | this[e + 1]
    );
  };
  l.prototype.readUint32LE = l.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Q(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    );
  };
  l.prototype.readUint32BE = l.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Q(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  l.prototype.readIntLE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Q(e, t, this.length);
    for (var i = this[e], o = 1, s = 0; ++s < t && (o *= 256); )
      i += this[e + s] * o;
    return (o *= 128), i >= o && (i -= Math.pow(2, 8 * t)), i;
  };
  l.prototype.readIntBE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Q(e, t, this.length);
    for (var i = t, o = 1, s = this[e + --i]; i > 0 && (o *= 256); )
      s += this[e + --i] * o;
    return (o *= 128), s >= o && (s -= Math.pow(2, 8 * t)), s;
  };
  l.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || Q(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  l.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || Q(e, 2, this.length);
    var n = this[e] | (this[e + 1] << 8);
    return n & 32768 ? n | 4294901760 : n;
  };
  l.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || Q(e, 2, this.length);
    var n = this[e + 1] | (this[e] << 8);
    return n & 32768 ? n | 4294901760 : n;
  };
  l.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Q(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  l.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Q(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  l.prototype.readFloatLE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 4, this.length), Se.read(this, e, !0, 23, 4)
    );
  };
  l.prototype.readFloatBE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 4, this.length), Se.read(this, e, !1, 23, 4)
    );
  };
  l.prototype.readDoubleLE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 8, this.length), Se.read(this, e, !0, 52, 8)
    );
  };
  l.prototype.readDoubleBE = function (e, t) {
    return (
      (e = e >>> 0), t || Q(e, 8, this.length), Se.read(this, e, !1, 52, 8)
    );
  };
  function re(r, e, t, n, i, o) {
    if (!l.isBuffer(r))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > i || e < o)
      throw new RangeError('"value" argument is out of bounds');
    if (t + n > r.length) throw new RangeError("Index out of range");
  }
  l.prototype.writeUintLE = l.prototype.writeUIntLE = function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), (n = n >>> 0), !i)) {
      var o = Math.pow(2, 8 * n) - 1;
      re(this, e, t, n, o, 0);
    }
    var s = 1,
      f = 0;
    for (this[t] = e & 255; ++f < n && (s *= 256); )
      this[t + f] = (e / s) & 255;
    return t + n;
  };
  l.prototype.writeUintBE = l.prototype.writeUIntBE = function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), (n = n >>> 0), !i)) {
      var o = Math.pow(2, 8 * n) - 1;
      re(this, e, t, n, o, 0);
    }
    var s = n - 1,
      f = 1;
    for (this[t + s] = e & 255; --s >= 0 && (f *= 256); )
      this[t + s] = (e / f) & 255;
    return t + n;
  };
  l.prototype.writeUint8 = l.prototype.writeUInt8 = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || re(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    );
  };
  l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || re(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || re(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || re(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || re(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  l.prototype.writeIntLE = function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), !i)) {
      var o = Math.pow(2, 8 * n - 1);
      re(this, e, t, n, o - 1, -o);
    }
    var s = 0,
      f = 1,
      h = 0;
    for (this[t] = e & 255; ++s < n && (f *= 256); )
      e < 0 && h === 0 && this[t + s - 1] !== 0 && (h = 1),
        (this[t + s] = (((e / f) >> 0) - h) & 255);
    return t + n;
  };
  l.prototype.writeIntBE = function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), !i)) {
      var o = Math.pow(2, 8 * n - 1);
      re(this, e, t, n, o - 1, -o);
    }
    var s = n - 1,
      f = 1,
      h = 0;
    for (this[t + s] = e & 255; --s >= 0 && (f *= 256); )
      e < 0 && h === 0 && this[t + s + 1] !== 0 && (h = 1),
        (this[t + s] = (((e / f) >> 0) - h) & 255);
    return t + n;
  };
  l.prototype.writeInt8 = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || re(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  l.prototype.writeInt16LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || re(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  l.prototype.writeInt16BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || re(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  l.prototype.writeInt32LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || re(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  l.prototype.writeInt32BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || re(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function Yt(r, e, t, n, i, o) {
    if (t + n > r.length) throw new RangeError("Index out of range");
    if (t < 0) throw new RangeError("Index out of range");
  }
  function $t(r, e, t, n, i) {
    return (
      (e = +e),
      (t = t >>> 0),
      i || Yt(r, e, t, 4, 34028234663852886e22, -34028234663852886e22),
      Se.write(r, e, t, n, 23, 4),
      t + 4
    );
  }
  l.prototype.writeFloatLE = function (e, t, n) {
    return $t(this, e, t, !0, n);
  };
  l.prototype.writeFloatBE = function (e, t, n) {
    return $t(this, e, t, !1, n);
  };
  function Jt(r, e, t, n, i) {
    return (
      (e = +e),
      (t = t >>> 0),
      i || Yt(r, e, t, 8, 17976931348623157e292, -17976931348623157e292),
      Se.write(r, e, t, n, 52, 8),
      t + 8
    );
  }
  l.prototype.writeDoubleLE = function (e, t, n) {
    return Jt(this, e, t, !0, n);
  };
  l.prototype.writeDoubleBE = function (e, t, n) {
    return Jt(this, e, t, !1, n);
  };
  l.prototype.copy = function (e, t, n, i) {
    if (!l.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      (n || (n = 0),
      !i && i !== 0 && (i = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      i > 0 && i < n && (i = n),
      i === n || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
    if (i < 0) throw new RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length),
      e.length - t < i - n && (i = e.length - t + n);
    var o = i - n;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(t, n, i)
        : Uint8Array.prototype.set.call(e, this.subarray(n, i), t),
      o
    );
  };
  l.prototype.fill = function (e, t, n, i) {
    if (typeof e == "string") {
      if (
        (typeof t == "string"
          ? ((i = t), (t = 0), (n = this.length))
          : typeof n == "string" && ((i = n), (n = this.length)),
        i !== void 0 && typeof i != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof i == "string" && !l.isEncoding(i))
        throw new TypeError("Unknown encoding: " + i);
      if (e.length === 1) {
        var o = e.charCodeAt(0);
        ((i === "utf8" && o < 128) || i === "latin1") && (e = o);
      }
    } else
      typeof e == "number"
        ? (e = e & 255)
        : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < n)
      throw new RangeError("Out of range index");
    if (n <= t) return this;
    (t = t >>> 0), (n = n === void 0 ? this.length : n >>> 0), e || (e = 0);
    var s;
    if (typeof e == "number") for (s = t; s < n; ++s) this[s] = e;
    else {
      var f = l.isBuffer(e) ? e : l.from(e, i),
        h = f.length;
      if (h === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"'
        );
      for (s = 0; s < n - t; ++s) this[s + t] = f[s % h];
    }
    return this;
  };
  var on = /[^+/0-9A-Za-z-_]/g;
  function sn(r) {
    if (((r = r.split("=")[0]), (r = r.trim().replace(on, "")), r.length < 2))
      return "";
    for (; r.length % 4 !== 0; ) r = r + "=";
    return r;
  }
  function lt(r, e) {
    e = e || 1 / 0;
    for (var t, n = r.length, i = null, o = [], s = 0; s < n; ++s) {
      if (((t = r.charCodeAt(s)), t > 55295 && t < 57344)) {
        if (!i) {
          if (t > 56319) {
            (e -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (e -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = t;
          continue;
        }
        if (t < 56320) {
          (e -= 3) > -1 && o.push(239, 191, 189), (i = t);
          continue;
        }
        t = (((i - 55296) << 10) | (t - 56320)) + 65536;
      } else i && (e -= 3) > -1 && o.push(239, 191, 189);
      if (((i = null), t < 128)) {
        if ((e -= 1) < 0) break;
        o.push(t);
      } else if (t < 2048) {
        if ((e -= 2) < 0) break;
        o.push((t >> 6) | 192, (t & 63) | 128);
      } else if (t < 65536) {
        if ((e -= 3) < 0) break;
        o.push((t >> 12) | 224, ((t >> 6) & 63) | 128, (t & 63) | 128);
      } else if (t < 1114112) {
        if ((e -= 4) < 0) break;
        o.push(
          (t >> 18) | 240,
          ((t >> 12) & 63) | 128,
          ((t >> 6) & 63) | 128,
          (t & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return o;
  }
  function an(r) {
    for (var e = [], t = 0; t < r.length; ++t) e.push(r.charCodeAt(t) & 255);
    return e;
  }
  function cn(r, e) {
    for (var t, n, i, o = [], s = 0; s < r.length && !((e -= 2) < 0); ++s)
      (t = r.charCodeAt(s)), (n = t >> 8), (i = t % 256), o.push(i), o.push(n);
    return o;
  }
  function Kt(r) {
    return at.toByteArray(sn(r));
  }
  function Ge(r, e, t, n) {
    for (var i = 0; i < n && !(i + t >= e.length || i >= r.length); ++i)
      e[i + t] = r[i];
    return i;
  }
  function pe(r, e) {
    return (
      r instanceof e ||
      (r != null &&
        r.constructor != null &&
        r.constructor.name != null &&
        r.constructor.name === e.name)
    );
  }
  function pt(r) {
    return r !== r;
  }
  var un = (function () {
    for (var r = "0123456789abcdef", e = new Array(256), t = 0; t < 16; ++t)
      for (var n = t * 16, i = 0; i < 16; ++i) e[n + i] = r[t] + r[i];
    return e;
  })();
});
var fe = globalThis;
function ne(r) {
  return (fe.__Zone_symbol_prefix || "__zone_symbol__") + r;
}
function ur() {
  let r = fe.performance;
  function e(B) {
    r && r.mark && r.mark(B);
  }
  function t(B, g) {
    r && r.measure && r.measure(B, g);
  }
  e("Zone");
  let n = (() => {
      class B {
        static {
          this.__symbol__ = ne;
        }
        static assertZonePatched() {
          if (fe.Promise !== P.ZoneAwarePromise)
            throw new Error(
              "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
            );
        }
        static get root() {
          let a = B.current;
          for (; a.parent; ) a = a.parent;
          return a;
        }
        static get current() {
          return C.zone;
        }
        static get currentTask() {
          return F;
        }
        static __load_patch(a, c, v = !1) {
          if (P.hasOwnProperty(a)) {
            let A = fe[ne("forceDuplicateZoneCheck")] === !0;
            if (!v && A) throw Error("Already loaded patch: " + a);
          } else if (!fe["__Zone_disable_" + a]) {
            let A = "Zone:" + a;
            e(A), (P[a] = c(fe, B, I)), t(A, A);
          }
        }
        get parent() {
          return this._parent;
        }
        get name() {
          return this._name;
        }
        constructor(a, c) {
          (this._parent = a),
            (this._name = c ? c.name || "unnamed" : "<root>"),
            (this._properties = (c && c.properties) || {}),
            (this._zoneDelegate = new o(
              this,
              this._parent && this._parent._zoneDelegate,
              c
            ));
        }
        get(a) {
          let c = this.getZoneWith(a);
          if (c) return c._properties[a];
        }
        getZoneWith(a) {
          let c = this;
          for (; c; ) {
            if (c._properties.hasOwnProperty(a)) return c;
            c = c._parent;
          }
          return null;
        }
        fork(a) {
          if (!a) throw new Error("ZoneSpec required!");
          return this._zoneDelegate.fork(this, a);
        }
        wrap(a, c) {
          if (typeof a != "function")
            throw new Error("Expecting function got: " + a);
          let v = this._zoneDelegate.intercept(this, a, c),
            A = this;
          return function () {
            return A.runGuarded(v, this, arguments, c);
          };
        }
        run(a, c, v, A) {
          C = { parent: C, zone: this };
          try {
            return this._zoneDelegate.invoke(this, a, c, v, A);
          } finally {
            C = C.parent;
          }
        }
        runGuarded(a, c = null, v, A) {
          C = { parent: C, zone: this };
          try {
            try {
              return this._zoneDelegate.invoke(this, a, c, v, A);
            } catch (X) {
              if (this._zoneDelegate.handleError(this, X)) throw X;
            }
          } finally {
            C = C.parent;
          }
        }
        runTask(a, c, v) {
          if (a.zone != this)
            throw new Error(
              "A task can only be run in the zone of creation! (Creation: " +
                (a.zone || ee).name +
                "; Execution: " +
                this.name +
                ")"
            );
          let A = a,
            {
              type: X,
              data: { isPeriodic: O = !1, isRefreshable: we = !1 } = {},
            } = a;
          if (a.state === Y && (X === z || X === w)) return;
          let de = a.state != Z;
          de && A._transitionTo(Z, m);
          let Ee = F;
          (F = A), (C = { parent: C, zone: this });
          try {
            X == w && a.data && !O && !we && (a.cancelFn = void 0);
            try {
              return this._zoneDelegate.invokeTask(this, A, c, v);
            } catch (se) {
              if (this._zoneDelegate.handleError(this, se)) throw se;
            }
          } finally {
            let se = a.state;
            if (se !== Y && se !== $)
              if (X == z || O || (we && se === x))
                de && A._transitionTo(m, Z, x);
              else {
                let _ = A._zoneDelegates;
                this._updateTaskCount(A, -1),
                  de && A._transitionTo(Y, Z, Y),
                  we && (A._zoneDelegates = _);
              }
            (C = C.parent), (F = Ee);
          }
        }
        scheduleTask(a) {
          if (a.zone && a.zone !== this) {
            let v = this;
            for (; v; ) {
              if (v === a.zone)
                throw Error(
                  `can not reschedule task to ${this.name} which is descendants of the original zone ${a.zone.name}`
                );
              v = v.parent;
            }
          }
          a._transitionTo(x, Y);
          let c = [];
          (a._zoneDelegates = c), (a._zone = this);
          try {
            a = this._zoneDelegate.scheduleTask(this, a);
          } catch (v) {
            throw (
              (a._transitionTo($, x, Y),
              this._zoneDelegate.handleError(this, v),
              v)
            );
          }
          return (
            a._zoneDelegates === c && this._updateTaskCount(a, 1),
            a.state == x && a._transitionTo(m, x),
            a
          );
        }
        scheduleMicroTask(a, c, v, A) {
          return this.scheduleTask(new s(G, a, c, v, A, void 0));
        }
        scheduleMacroTask(a, c, v, A, X) {
          return this.scheduleTask(new s(w, a, c, v, A, X));
        }
        scheduleEventTask(a, c, v, A, X) {
          return this.scheduleTask(new s(z, a, c, v, A, X));
        }
        cancelTask(a) {
          if (a.zone != this)
            throw new Error(
              "A task can only be cancelled in the zone of creation! (Creation: " +
                (a.zone || ee).name +
                "; Execution: " +
                this.name +
                ")"
            );
          if (!(a.state !== m && a.state !== Z)) {
            a._transitionTo(j, m, Z);
            try {
              this._zoneDelegate.cancelTask(this, a);
            } catch (c) {
              throw (
                (a._transitionTo($, j),
                this._zoneDelegate.handleError(this, c),
                c)
              );
            }
            return (
              this._updateTaskCount(a, -1),
              a._transitionTo(Y, j),
              (a.runCount = -1),
              a
            );
          }
        }
        _updateTaskCount(a, c) {
          let v = a._zoneDelegates;
          c == -1 && (a._zoneDelegates = null);
          for (let A = 0; A < v.length; A++) v[A]._updateTaskCount(a.type, c);
        }
      }
      return B;
    })(),
    i = {
      name: "",
      onHasTask: (B, g, a, c) => B.hasTask(a, c),
      onScheduleTask: (B, g, a, c) => B.scheduleTask(a, c),
      onInvokeTask: (B, g, a, c, v, A) => B.invokeTask(a, c, v, A),
      onCancelTask: (B, g, a, c) => B.cancelTask(a, c),
    };
  class o {
    get zone() {
      return this._zone;
    }
    constructor(g, a, c) {
      (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
        (this._zone = g),
        (this._parentDelegate = a),
        (this._forkZS = c && (c && c.onFork ? c : a._forkZS)),
        (this._forkDlgt = c && (c.onFork ? a : a._forkDlgt)),
        (this._forkCurrZone = c && (c.onFork ? this._zone : a._forkCurrZone)),
        (this._interceptZS = c && (c.onIntercept ? c : a._interceptZS)),
        (this._interceptDlgt = c && (c.onIntercept ? a : a._interceptDlgt)),
        (this._interceptCurrZone =
          c && (c.onIntercept ? this._zone : a._interceptCurrZone)),
        (this._invokeZS = c && (c.onInvoke ? c : a._invokeZS)),
        (this._invokeDlgt = c && (c.onInvoke ? a : a._invokeDlgt)),
        (this._invokeCurrZone =
          c && (c.onInvoke ? this._zone : a._invokeCurrZone)),
        (this._handleErrorZS = c && (c.onHandleError ? c : a._handleErrorZS)),
        (this._handleErrorDlgt =
          c && (c.onHandleError ? a : a._handleErrorDlgt)),
        (this._handleErrorCurrZone =
          c && (c.onHandleError ? this._zone : a._handleErrorCurrZone)),
        (this._scheduleTaskZS =
          c && (c.onScheduleTask ? c : a._scheduleTaskZS)),
        (this._scheduleTaskDlgt =
          c && (c.onScheduleTask ? a : a._scheduleTaskDlgt)),
        (this._scheduleTaskCurrZone =
          c && (c.onScheduleTask ? this._zone : a._scheduleTaskCurrZone)),
        (this._invokeTaskZS = c && (c.onInvokeTask ? c : a._invokeTaskZS)),
        (this._invokeTaskDlgt = c && (c.onInvokeTask ? a : a._invokeTaskDlgt)),
        (this._invokeTaskCurrZone =
          c && (c.onInvokeTask ? this._zone : a._invokeTaskCurrZone)),
        (this._cancelTaskZS = c && (c.onCancelTask ? c : a._cancelTaskZS)),
        (this._cancelTaskDlgt = c && (c.onCancelTask ? a : a._cancelTaskDlgt)),
        (this._cancelTaskCurrZone =
          c && (c.onCancelTask ? this._zone : a._cancelTaskCurrZone)),
        (this._hasTaskZS = null),
        (this._hasTaskDlgt = null),
        (this._hasTaskDlgtOwner = null),
        (this._hasTaskCurrZone = null);
      let v = c && c.onHasTask,
        A = a && a._hasTaskZS;
      (v || A) &&
        ((this._hasTaskZS = v ? c : i),
        (this._hasTaskDlgt = a),
        (this._hasTaskDlgtOwner = this),
        (this._hasTaskCurrZone = this._zone),
        c.onScheduleTask ||
          ((this._scheduleTaskZS = i),
          (this._scheduleTaskDlgt = a),
          (this._scheduleTaskCurrZone = this._zone)),
        c.onInvokeTask ||
          ((this._invokeTaskZS = i),
          (this._invokeTaskDlgt = a),
          (this._invokeTaskCurrZone = this._zone)),
        c.onCancelTask ||
          ((this._cancelTaskZS = i),
          (this._cancelTaskDlgt = a),
          (this._cancelTaskCurrZone = this._zone)));
    }
    fork(g, a) {
      return this._forkZS
        ? this._forkZS.onFork(this._forkDlgt, this.zone, g, a)
        : new n(g, a);
    }
    intercept(g, a, c) {
      return this._interceptZS
        ? this._interceptZS.onIntercept(
            this._interceptDlgt,
            this._interceptCurrZone,
            g,
            a,
            c
          )
        : a;
    }
    invoke(g, a, c, v, A) {
      return this._invokeZS
        ? this._invokeZS.onInvoke(
            this._invokeDlgt,
            this._invokeCurrZone,
            g,
            a,
            c,
            v,
            A
          )
        : a.apply(c, v);
    }
    handleError(g, a) {
      return this._handleErrorZS
        ? this._handleErrorZS.onHandleError(
            this._handleErrorDlgt,
            this._handleErrorCurrZone,
            g,
            a
          )
        : !0;
    }
    scheduleTask(g, a) {
      let c = a;
      if (this._scheduleTaskZS)
        this._hasTaskZS && c._zoneDelegates.push(this._hasTaskDlgtOwner),
          (c = this._scheduleTaskZS.onScheduleTask(
            this._scheduleTaskDlgt,
            this._scheduleTaskCurrZone,
            g,
            a
          )),
          c || (c = a);
      else if (a.scheduleFn) a.scheduleFn(a);
      else if (a.type == G) U(a);
      else throw new Error("Task is missing scheduleFn.");
      return c;
    }
    invokeTask(g, a, c, v) {
      return this._invokeTaskZS
        ? this._invokeTaskZS.onInvokeTask(
            this._invokeTaskDlgt,
            this._invokeTaskCurrZone,
            g,
            a,
            c,
            v
          )
        : a.callback.apply(c, v);
    }
    cancelTask(g, a) {
      let c;
      if (this._cancelTaskZS)
        c = this._cancelTaskZS.onCancelTask(
          this._cancelTaskDlgt,
          this._cancelTaskCurrZone,
          g,
          a
        );
      else {
        if (!a.cancelFn) throw Error("Task is not cancelable");
        c = a.cancelFn(a);
      }
      return c;
    }
    hasTask(g, a) {
      try {
        this._hasTaskZS &&
          this._hasTaskZS.onHasTask(
            this._hasTaskDlgt,
            this._hasTaskCurrZone,
            g,
            a
          );
      } catch (c) {
        this.handleError(g, c);
      }
    }
    _updateTaskCount(g, a) {
      let c = this._taskCounts,
        v = c[g],
        A = (c[g] = v + a);
      if (A < 0) throw new Error("More tasks executed then were scheduled.");
      if (v == 0 || A == 0) {
        let X = {
          microTask: c.microTask > 0,
          macroTask: c.macroTask > 0,
          eventTask: c.eventTask > 0,
          change: g,
        };
        this.hasTask(this._zone, X);
      }
    }
  }
  class s {
    constructor(g, a, c, v, A, X) {
      if (
        ((this._zone = null),
        (this.runCount = 0),
        (this._zoneDelegates = null),
        (this._state = "notScheduled"),
        (this.type = g),
        (this.source = a),
        (this.data = v),
        (this.scheduleFn = A),
        (this.cancelFn = X),
        !c)
      )
        throw new Error("callback is not defined");
      this.callback = c;
      let O = this;
      g === z && v && v.useG
        ? (this.invoke = s.invokeTask)
        : (this.invoke = function () {
            return s.invokeTask.call(fe, O, this, arguments);
          });
    }
    static invokeTask(g, a, c) {
      g || (g = this), te++;
      try {
        return g.runCount++, g.zone.runTask(g, a, c);
      } finally {
        te == 1 && K(), te--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(Y, x);
    }
    _transitionTo(g, a, c) {
      if (this._state === a || this._state === c)
        (this._state = g), g == Y && (this._zoneDelegates = null);
      else
        throw new Error(
          `${this.type} '${
            this.source
          }': can not transition to '${g}', expecting state '${a}'${
            c ? " or '" + c + "'" : ""
          }, was '${this._state}'.`
        );
    }
    toString() {
      return this.data && typeof this.data.handleId < "u"
        ? this.data.handleId.toString()
        : Object.prototype.toString.call(this);
    }
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount,
      };
    }
  }
  let f = ne("setTimeout"),
    h = ne("Promise"),
    T = ne("then"),
    p = [],
    y = !1,
    R;
  function D(B) {
    if ((R || (fe[h] && (R = fe[h].resolve(0))), R)) {
      let g = R[T];
      g || (g = R.then), g.call(R, B);
    } else fe[f](B, 0);
  }
  function U(B) {
    te === 0 && p.length === 0 && D(K), B && p.push(B);
  }
  function K() {
    if (!y) {
      for (y = !0; p.length; ) {
        let B = p;
        p = [];
        for (let g = 0; g < B.length; g++) {
          let a = B[g];
          try {
            a.zone.runTask(a, null, null);
          } catch (c) {
            I.onUnhandledError(c);
          }
        }
      }
      I.microtaskDrainDone(), (y = !1);
    }
  }
  let ee = { name: "NO ZONE" },
    Y = "notScheduled",
    x = "scheduling",
    m = "scheduled",
    Z = "running",
    j = "canceling",
    $ = "unknown",
    G = "microTask",
    w = "macroTask",
    z = "eventTask",
    P = {},
    I = {
      symbol: ne,
      currentZoneFrame: () => C,
      onUnhandledError: q,
      microtaskDrainDone: q,
      scheduleMicroTask: U,
      showUncaughtError: () => !n[ne("ignoreConsoleErrorUncaughtError")],
      patchEventTarget: () => [],
      patchOnProperties: q,
      patchMethod: () => q,
      bindArguments: () => [],
      patchThen: () => q,
      patchMacroTask: () => q,
      patchEventPrototype: () => q,
      isIEOrEdge: () => !1,
      getGlobalObjects: () => {},
      ObjectDefineProperty: () => q,
      ObjectGetOwnPropertyDescriptor: () => {},
      ObjectCreate: () => {},
      ArraySlice: () => [],
      patchClass: () => q,
      wrapWithCurrentZone: () => q,
      filterProperties: () => [],
      attachOriginToPatched: () => q,
      _redefineProperty: () => q,
      patchCallbacks: () => q,
      nativeScheduleMicroTask: D,
    },
    C = { parent: null, zone: new n(null, null) },
    F = null,
    te = 0;
  function q() {}
  return t("Zone", "Zone"), n;
}
function lr() {
  let r = globalThis,
    e = r[ne("forceDuplicateZoneCheck")] === !0;
  if (r.Zone && (e || typeof r.Zone.__symbol__ != "function"))
    throw new Error("Zone already loaded.");
  return (r.Zone ??= ur()), r.Zone;
}
var Be = Object.getOwnPropertyDescriptor,
  Je = Object.defineProperty,
  Ke = Object.getPrototypeOf,
  fr = Object.create,
  hr = Array.prototype.slice,
  Qe = "addEventListener",
  et = "removeEventListener",
  qe = ne(Qe),
  Xe = ne(et),
  ye = "true",
  _e = "false",
  Ne = ne("");
function tt(r, e) {
  return Zone.current.wrap(r, e);
}
function rt(r, e, t, n, i) {
  return Zone.current.scheduleMacroTask(r, e, t, n, i);
}
var H = ne,
  Ue = typeof window < "u",
  Ie = Ue ? window : void 0,
  J = (Ue && Ie) || globalThis,
  pr = "removeAttribute";
function nt(r, e) {
  for (let t = r.length - 1; t >= 0; t--)
    typeof r[t] == "function" && (r[t] = tt(r[t], e + "_" + t));
  return r;
}
function dr(r, e) {
  let t = r.constructor.name;
  for (let n = 0; n < e.length; n++) {
    let i = e[n],
      o = r[i];
    if (o) {
      let s = Be(r, i);
      if (!Rt(s)) continue;
      r[i] = ((f) => {
        let h = function () {
          return f.apply(this, nt(arguments, t + "." + i));
        };
        return me(h, f), h;
      })(o);
    }
  }
}
function Rt(r) {
  return r
    ? r.writable === !1
      ? !1
      : !(typeof r.get == "function" && typeof r.set > "u")
    : !0;
}
var Ct = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
  Ze =
    !("nw" in J) &&
    typeof J.process < "u" &&
    J.process.toString() === "[object process]",
  it = !Ze && !Ct && !!(Ue && Ie.HTMLElement),
  At =
    typeof J.process < "u" &&
    J.process.toString() === "[object process]" &&
    !Ct &&
    !!(Ue && Ie.HTMLElement),
  Oe = {},
  Er = H("enable_beforeunload"),
  gt = function (r) {
    if (((r = r || J.event), !r)) return;
    let e = Oe[r.type];
    e || (e = Oe[r.type] = H("ON_PROPERTY" + r.type));
    let t = this || r.target || J,
      n = t[e],
      i;
    if (it && t === Ie && r.type === "error") {
      let o = r;
      (i =
        n && n.call(this, o.message, o.filename, o.lineno, o.colno, o.error)),
        i === !0 && r.preventDefault();
    } else
      (i = n && n.apply(this, arguments)),
        r.type === "beforeunload" && J[Er] && typeof i == "string"
          ? (r.returnValue = i)
          : i != null && !i && r.preventDefault();
    return i;
  };
function wt(r, e, t) {
  let n = Be(r, e);
  if (
    (!n && t && Be(t, e) && (n = { enumerable: !0, configurable: !0 }),
    !n || !n.configurable)
  )
    return;
  let i = H("on" + e + "patched");
  if (r.hasOwnProperty(i) && r[i]) return;
  delete n.writable, delete n.value;
  let o = n.get,
    s = n.set,
    f = e.slice(2),
    h = Oe[f];
  h || (h = Oe[f] = H("ON_PROPERTY" + f)),
    (n.set = function (T) {
      let p = this;
      if ((!p && r === J && (p = J), !p)) return;
      typeof p[h] == "function" && p.removeEventListener(f, gt),
        s && s.call(p, null),
        (p[h] = T),
        typeof T == "function" && p.addEventListener(f, gt, !1);
    }),
    (n.get = function () {
      let T = this;
      if ((!T && r === J && (T = J), !T)) return null;
      let p = T[h];
      if (p) return p;
      if (o) {
        let y = o.call(this);
        if (y)
          return (
            n.set.call(this, y),
            typeof T[pr] == "function" && T.removeAttribute(e),
            y
          );
      }
      return null;
    }),
    Je(r, e, n),
    (r[i] = !0);
}
function It(r, e, t) {
  if (e) for (let n = 0; n < e.length; n++) wt(r, "on" + e[n], t);
  else {
    let n = [];
    for (let i in r) i.slice(0, 2) == "on" && n.push(i);
    for (let i = 0; i < n.length; i++) wt(r, n[i], t);
  }
}
var ce = H("originalInstance");
function Pe(r) {
  let e = J[r];
  if (!e) return;
  (J[H(r)] = e),
    (J[r] = function () {
      let i = nt(arguments, r);
      switch (i.length) {
        case 0:
          this[ce] = new e();
          break;
        case 1:
          this[ce] = new e(i[0]);
          break;
        case 2:
          this[ce] = new e(i[0], i[1]);
          break;
        case 3:
          this[ce] = new e(i[0], i[1], i[2]);
          break;
        case 4:
          this[ce] = new e(i[0], i[1], i[2], i[3]);
          break;
        default:
          throw new Error("Arg list too long.");
      }
    }),
    me(J[r], e);
  let t = new e(function () {}),
    n;
  for (n in t)
    (r === "XMLHttpRequest" && n === "responseBlob") ||
      (function (i) {
        typeof t[i] == "function"
          ? (J[r].prototype[i] = function () {
              return this[ce][i].apply(this[ce], arguments);
            })
          : Je(J[r].prototype, i, {
              set: function (o) {
                typeof o == "function"
                  ? ((this[ce][i] = tt(o, r + "." + i)), me(this[ce][i], o))
                  : (this[ce][i] = o);
              },
              get: function () {
                return this[ce][i];
              },
            });
      })(n);
  for (n in e) n !== "prototype" && e.hasOwnProperty(n) && (J[r][n] = e[n]);
}
function Te(r, e, t) {
  let n = r;
  for (; n && !n.hasOwnProperty(e); ) n = Ke(n);
  !n && r[e] && (n = r);
  let i = H(e),
    o = null;
  if (n && (!(o = n[i]) || !n.hasOwnProperty(i))) {
    o = n[i] = n[e];
    let s = n && Be(n, e);
    if (Rt(s)) {
      let f = t(o, i, e);
      (n[e] = function () {
        return f(this, arguments);
      }),
        me(n[e], o);
    }
  }
  return o;
}
function yr(r, e, t) {
  let n = null;
  function i(o) {
    let s = o.data;
    return (
      (s.args[s.cbIdx] = function () {
        o.invoke.apply(this, arguments);
      }),
      n.apply(s.target, s.args),
      o
    );
  }
  n = Te(
    r,
    e,
    (o) =>
      function (s, f) {
        let h = t(s, f);
        return h.cbIdx >= 0 && typeof f[h.cbIdx] == "function"
          ? rt(h.name, f[h.cbIdx], h, i)
          : o.apply(s, f);
      }
  );
}
function me(r, e) {
  r[H("OriginalDelegate")] = e;
}
var kt = !1,
  Ye = !1;
function _r() {
  try {
    let r = Ie.navigator.userAgent;
    if (r.indexOf("MSIE ") !== -1 || r.indexOf("Trident/") !== -1) return !0;
  } catch {}
  return !1;
}
function Tr() {
  if (kt) return Ye;
  kt = !0;
  try {
    let r = Ie.navigator.userAgent;
    (r.indexOf("MSIE ") !== -1 ||
      r.indexOf("Trident/") !== -1 ||
      r.indexOf("Edge/") !== -1) &&
      (Ye = !0);
  } catch {}
  return Ye;
}
function vt(r) {
  return typeof r == "function";
}
function xt(r) {
  return typeof r == "number";
}
var Ae = !1;
if (typeof window < "u")
  try {
    let r = Object.defineProperty({}, "passive", {
      get: function () {
        Ae = !0;
      },
    });
    window.addEventListener("test", r, r),
      window.removeEventListener("test", r, r);
  } catch {
    Ae = !1;
  }
var mr = { useG: !0 },
  ie = {},
  St = {},
  Dt = new RegExp("^" + Ne + "(\\w+)(true|false)$"),
  Ft = H("propagationStopped");
function Pt(r, e) {
  let t = (e ? e(r) : r) + _e,
    n = (e ? e(r) : r) + ye,
    i = Ne + t,
    o = Ne + n;
  (ie[r] = {}), (ie[r][_e] = i), (ie[r][ye] = o);
}
function gr(r, e, t, n) {
  let i = (n && n.add) || Qe,
    o = (n && n.rm) || et,
    s = (n && n.listeners) || "eventListeners",
    f = (n && n.rmAll) || "removeAllListeners",
    h = H(i),
    T = "." + i + ":",
    p = "prependListener",
    y = "." + p + ":",
    R = function (x, m, Z) {
      if (x.isRemoved) return;
      let j = x.callback;
      typeof j == "object" &&
        j.handleEvent &&
        ((x.callback = (w) => j.handleEvent(w)), (x.originalDelegate = j));
      let $;
      try {
        x.invoke(x, m, [Z]);
      } catch (w) {
        $ = w;
      }
      let G = x.options;
      if (G && typeof G == "object" && G.once) {
        let w = x.originalDelegate ? x.originalDelegate : x.callback;
        m[o].call(m, Z.type, w, G);
      }
      return $;
    };
  function D(x, m, Z) {
    if (((m = m || r.event), !m)) return;
    let j = x || m.target || r,
      $ = j[ie[m.type][Z ? ye : _e]];
    if ($) {
      let G = [];
      if ($.length === 1) {
        let w = R($[0], j, m);
        w && G.push(w);
      } else {
        let w = $.slice();
        for (let z = 0; z < w.length && !(m && m[Ft] === !0); z++) {
          let P = R(w[z], j, m);
          P && G.push(P);
        }
      }
      if (G.length === 1) throw G[0];
      for (let w = 0; w < G.length; w++) {
        let z = G[w];
        e.nativeScheduleMicroTask(() => {
          throw z;
        });
      }
    }
  }
  let U = function (x) {
      return D(this, x, !1);
    },
    K = function (x) {
      return D(this, x, !0);
    };
  function ee(x, m) {
    if (!x) return !1;
    let Z = !0;
    m && m.useG !== void 0 && (Z = m.useG);
    let j = m && m.vh,
      $ = !0;
    m && m.chkDup !== void 0 && ($ = m.chkDup);
    let G = !1;
    m && m.rt !== void 0 && (G = m.rt);
    let w = x;
    for (; w && !w.hasOwnProperty(i); ) w = Ke(w);
    if ((!w && x[i] && (w = x), !w || w[h])) return !1;
    let z = m && m.eventNameToString,
      P = {},
      I = (w[h] = w[i]),
      C = (w[H(o)] = w[o]),
      F = (w[H(s)] = w[s]),
      te = (w[H(f)] = w[f]),
      q;
    m && m.prepend && (q = w[H(m.prepend)] = w[m.prepend]);
    function B(u, E) {
      return !Ae && typeof u == "object" && u
        ? !!u.capture
        : !Ae || !E
        ? u
        : typeof u == "boolean"
        ? { capture: u, passive: !0 }
        : u
        ? typeof u == "object" && u.passive !== !1
          ? { ...u, passive: !0 }
          : u
        : { passive: !0 };
    }
    let g = function (u) {
        if (!P.isExisting)
          return I.call(P.target, P.eventName, P.capture ? K : U, P.options);
      },
      a = function (u) {
        if (!u.isRemoved) {
          let E = ie[u.eventName],
            b;
          E && (b = E[u.capture ? ye : _e]);
          let S = b && u.target[b];
          if (S) {
            for (let k = 0; k < S.length; k++)
              if (S[k] === u) {
                S.splice(k, 1),
                  (u.isRemoved = !0),
                  u.removeAbortListener &&
                    (u.removeAbortListener(), (u.removeAbortListener = null)),
                  S.length === 0 && ((u.allRemoved = !0), (u.target[b] = null));
                break;
              }
          }
        }
        if (u.allRemoved)
          return C.call(u.target, u.eventName, u.capture ? K : U, u.options);
      },
      c = function (u) {
        return I.call(P.target, P.eventName, u.invoke, P.options);
      },
      v = function (u) {
        return q.call(P.target, P.eventName, u.invoke, P.options);
      },
      A = function (u) {
        return C.call(u.target, u.eventName, u.invoke, u.options);
      },
      X = Z ? g : c,
      O = Z ? a : A,
      we = function (u, E) {
        let b = typeof E;
        return (
          (b === "function" && u.callback === E) ||
          (b === "object" && u.originalDelegate === E)
        );
      },
      de = m && m.diff ? m.diff : we,
      Ee = Zone[H("UNPATCHED_EVENTS")],
      se = r[H("PASSIVE_EVENTS")];
    function _(u) {
      if (typeof u == "object" && u !== null) {
        let E = { ...u };
        return u.signal && (E.signal = u.signal), E;
      }
      return u;
    }
    let d = function (u, E, b, S, k = !1, N = !1) {
      return function () {
        let L = this || r,
          M = arguments[0];
        m && m.transferEventName && (M = m.transferEventName(M));
        let V = arguments[1];
        if (!V) return u.apply(this, arguments);
        if (Ze && M === "uncaughtException") return u.apply(this, arguments);
        let W = !1;
        if (typeof V != "function") {
          if (!V.handleEvent) return u.apply(this, arguments);
          W = !0;
        }
        if (j && !j(u, V, L, arguments)) return;
        let ke = Ae && !!se && se.indexOf(M) !== -1,
          ue = _(B(arguments[2], ke)),
          be = ue?.signal;
        if (be?.aborted) return;
        if (Ee) {
          for (let le = 0; le < Ee.length; le++)
            if (M === Ee[le])
              return ke ? u.call(L, M, V, ue) : u.apply(this, arguments);
        }
        let Ve = ue ? (typeof ue == "boolean" ? !0 : ue.capture) : !1,
          dt = ue && typeof ue == "object" ? ue.once : !1,
          tr = Zone.current,
          We = ie[M];
        We || (Pt(M, z), (We = ie[M]));
        let Et = We[Ve ? ye : _e],
          Re = L[Et],
          yt = !1;
        if (Re) {
          if (((yt = !0), $)) {
            for (let le = 0; le < Re.length; le++) if (de(Re[le], V)) return;
          }
        } else Re = L[Et] = [];
        let Le,
          _t = L.constructor.name,
          Tt = St[_t];
        Tt && (Le = Tt[M]),
          Le || (Le = _t + E + (z ? z(M) : M)),
          (P.options = ue),
          dt && (P.options.once = !1),
          (P.target = L),
          (P.capture = Ve),
          (P.eventName = M),
          (P.isExisting = yt);
        let Fe = Z ? mr : void 0;
        Fe && (Fe.taskData = P), be && (P.options.signal = void 0);
        let ae = tr.scheduleEventTask(Le, V, Fe, b, S);
        if (be) {
          P.options.signal = be;
          let le = () => ae.zone.cancelTask(ae);
          u.call(be, "abort", le, { once: !0 }),
            (ae.removeAbortListener = () =>
              be.removeEventListener("abort", le));
        }
        if (
          ((P.target = null),
          Fe && (Fe.taskData = null),
          dt && (P.options.once = !0),
          (!Ae && typeof ae.options == "boolean") || (ae.options = ue),
          (ae.target = L),
          (ae.capture = Ve),
          (ae.eventName = M),
          W && (ae.originalDelegate = V),
          N ? Re.unshift(ae) : Re.push(ae),
          k)
        )
          return L;
      };
    };
    return (
      (w[i] = d(I, T, X, O, G)),
      q && (w[p] = d(q, y, v, O, G, !0)),
      (w[o] = function () {
        let u = this || r,
          E = arguments[0];
        m && m.transferEventName && (E = m.transferEventName(E));
        let b = arguments[2],
          S = b ? (typeof b == "boolean" ? !0 : b.capture) : !1,
          k = arguments[1];
        if (!k) return C.apply(this, arguments);
        if (j && !j(C, k, u, arguments)) return;
        let N = ie[E],
          L;
        N && (L = N[S ? ye : _e]);
        let M = L && u[L];
        if (M)
          for (let V = 0; V < M.length; V++) {
            let W = M[V];
            if (de(W, k)) {
              if (
                (M.splice(V, 1),
                (W.isRemoved = !0),
                M.length === 0 &&
                  ((W.allRemoved = !0),
                  (u[L] = null),
                  !S && typeof E == "string"))
              ) {
                let ke = Ne + "ON_PROPERTY" + E;
                u[ke] = null;
              }
              return W.zone.cancelTask(W), G ? u : void 0;
            }
          }
        return C.apply(this, arguments);
      }),
      (w[s] = function () {
        let u = this || r,
          E = arguments[0];
        m && m.transferEventName && (E = m.transferEventName(E));
        let b = [],
          S = Bt(u, z ? z(E) : E);
        for (let k = 0; k < S.length; k++) {
          let N = S[k],
            L = N.originalDelegate ? N.originalDelegate : N.callback;
          b.push(L);
        }
        return b;
      }),
      (w[f] = function () {
        let u = this || r,
          E = arguments[0];
        if (E) {
          m && m.transferEventName && (E = m.transferEventName(E));
          let b = ie[E];
          if (b) {
            let S = b[_e],
              k = b[ye],
              N = u[S],
              L = u[k];
            if (N) {
              let M = N.slice();
              for (let V = 0; V < M.length; V++) {
                let W = M[V],
                  ke = W.originalDelegate ? W.originalDelegate : W.callback;
                this[o].call(this, E, ke, W.options);
              }
            }
            if (L) {
              let M = L.slice();
              for (let V = 0; V < M.length; V++) {
                let W = M[V],
                  ke = W.originalDelegate ? W.originalDelegate : W.callback;
                this[o].call(this, E, ke, W.options);
              }
            }
          }
        } else {
          let b = Object.keys(u);
          for (let S = 0; S < b.length; S++) {
            let k = b[S],
              N = Dt.exec(k),
              L = N && N[1];
            L && L !== "removeListener" && this[f].call(this, L);
          }
          this[f].call(this, "removeListener");
        }
        if (G) return this;
      }),
      me(w[i], I),
      me(w[o], C),
      te && me(w[f], te),
      F && me(w[s], F),
      !0
    );
  }
  let Y = [];
  for (let x = 0; x < t.length; x++) Y[x] = ee(t[x], n);
  return Y;
}
function Bt(r, e) {
  if (!e) {
    let o = [];
    for (let s in r) {
      let f = Dt.exec(s),
        h = f && f[1];
      if (h && (!e || h === e)) {
        let T = r[s];
        if (T) for (let p = 0; p < T.length; p++) o.push(T[p]);
      }
    }
    return o;
  }
  let t = ie[e];
  t || (Pt(e), (t = ie[e]));
  let n = r[t[_e]],
    i = r[t[ye]];
  return n ? (i ? n.concat(i) : n.slice()) : i ? i.slice() : [];
}
function wr(r, e) {
  let t = r.Event;
  t &&
    t.prototype &&
    e.patchMethod(
      t.prototype,
      "stopImmediatePropagation",
      (n) =>
        function (i, o) {
          (i[Ft] = !0), n && n.apply(i, o);
        }
    );
}
function kr(r, e) {
  e.patchMethod(
    r,
    "queueMicrotask",
    (t) =>
      function (n, i) {
        Zone.current.scheduleMicroTask("queueMicrotask", i[0]);
      }
  );
}
var Me = H("zoneTask");
function Ce(r, e, t, n) {
  let i = null,
    o = null;
  (e += n), (t += n);
  let s = {};
  function f(T) {
    let p = T.data;
    p.args[0] = function () {
      return T.invoke.apply(this, arguments);
    };
    let y = i.apply(r, p.args);
    return (
      xt(y)
        ? (p.handleId = y)
        : ((p.handle = y), (p.isRefreshable = vt(y.refresh))),
      T
    );
  }
  function h(T) {
    let { handle: p, handleId: y } = T.data;
    return o.call(r, p ?? y);
  }
  (i = Te(
    r,
    e,
    (T) =>
      function (p, y) {
        if (vt(y[0])) {
          let R = {
              isRefreshable: !1,
              isPeriodic: n === "Interval",
              delay: n === "Timeout" || n === "Interval" ? y[1] || 0 : void 0,
              args: y,
            },
            D = y[0];
          y[0] = function () {
            try {
              return D.apply(this, arguments);
            } finally {
              let {
                handle: Z,
                handleId: j,
                isPeriodic: $,
                isRefreshable: G,
              } = R;
              !$ && !G && (j ? delete s[j] : Z && (Z[Me] = null));
            }
          };
          let U = rt(e, y[0], R, f, h);
          if (!U) return U;
          let {
            handleId: K,
            handle: ee,
            isRefreshable: Y,
            isPeriodic: x,
          } = U.data;
          if (K) s[K] = U;
          else if (ee && ((ee[Me] = U), Y && !x)) {
            let m = ee.refresh;
            ee.refresh = function () {
              let { zone: Z, state: j } = U;
              return (
                j === "notScheduled"
                  ? ((U._state = "scheduled"), Z._updateTaskCount(U, 1))
                  : j === "running" && (U._state = "scheduling"),
                m.call(this)
              );
            };
          }
          return ee ?? K ?? U;
        } else return T.apply(r, y);
      }
  )),
    (o = Te(
      r,
      t,
      (T) =>
        function (p, y) {
          let R = y[0],
            D;
          xt(R)
            ? ((D = s[R]), delete s[R])
            : ((D = R?.[Me]), D ? (R[Me] = null) : (D = R)),
            D?.type ? D.cancelFn && D.zone.cancelTask(D) : T.apply(r, y);
        }
    ));
}
function vr(r, e) {
  let { isBrowser: t, isMix: n } = e.getGlobalObjects();
  if ((!t && !n) || !r.customElements || !("customElements" in r)) return;
  let i = [
    "connectedCallback",
    "disconnectedCallback",
    "adoptedCallback",
    "attributeChangedCallback",
    "formAssociatedCallback",
    "formDisabledCallback",
    "formResetCallback",
    "formStateRestoreCallback",
  ];
  e.patchCallbacks(e, r.customElements, "customElements", "define", i);
}
function xr(r, e) {
  if (Zone[e.symbol("patchEventTarget")]) return;
  let {
    eventNames: t,
    zoneSymbolEventNames: n,
    TRUE_STR: i,
    FALSE_STR: o,
    ZONE_SYMBOL_PREFIX: s,
  } = e.getGlobalObjects();
  for (let h = 0; h < t.length; h++) {
    let T = t[h],
      p = T + o,
      y = T + i,
      R = s + p,
      D = s + y;
    (n[T] = {}), (n[T][o] = R), (n[T][i] = D);
  }
  let f = r.EventTarget;
  if (!(!f || !f.prototype))
    return e.patchEventTarget(r, e, [f && f.prototype]), !0;
}
function br(r, e) {
  e.patchEventPrototype(r, e);
}
function Nt(r, e, t) {
  if (!t || t.length === 0) return e;
  let n = t.filter((o) => o.target === r);
  if (!n || n.length === 0) return e;
  let i = n[0].ignoreProperties;
  return e.filter((o) => i.indexOf(o) === -1);
}
function bt(r, e, t, n) {
  if (!r) return;
  let i = Nt(r, e, t);
  It(r, i, n);
}
function $e(r) {
  return Object.getOwnPropertyNames(r)
    .filter((e) => e.startsWith("on") && e.length > 2)
    .map((e) => e.substring(2));
}
function Rr(r, e) {
  if ((Ze && !At) || Zone[r.symbol("patchEvents")]) return;
  let t = e.__Zone_ignore_on_properties,
    n = [];
  if (it) {
    let i = window;
    n = n.concat([
      "Document",
      "SVGElement",
      "Element",
      "HTMLElement",
      "HTMLBodyElement",
      "HTMLMediaElement",
      "HTMLFrameSetElement",
      "HTMLFrameElement",
      "HTMLIFrameElement",
      "HTMLMarqueeElement",
      "Worker",
    ]);
    let o = _r() ? [{ target: i, ignoreProperties: ["error"] }] : [];
    bt(i, $e(i), t && t.concat(o), Ke(i));
  }
  n = n.concat([
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "IDBIndex",
    "IDBRequest",
    "IDBOpenDBRequest",
    "IDBDatabase",
    "IDBTransaction",
    "IDBCursor",
    "WebSocket",
  ]);
  for (let i = 0; i < n.length; i++) {
    let o = e[n[i]];
    o && o.prototype && bt(o.prototype, $e(o.prototype), t);
  }
}
function Cr(r) {
  r.__load_patch("legacy", (e) => {
    let t = e[r.__symbol__("legacyPatch")];
    t && t();
  }),
    r.__load_patch("timers", (e) => {
      let t = "set",
        n = "clear";
      Ce(e, t, n, "Timeout"), Ce(e, t, n, "Interval"), Ce(e, t, n, "Immediate");
    }),
    r.__load_patch("requestAnimationFrame", (e) => {
      Ce(e, "request", "cancel", "AnimationFrame"),
        Ce(e, "mozRequest", "mozCancel", "AnimationFrame"),
        Ce(e, "webkitRequest", "webkitCancel", "AnimationFrame");
    }),
    r.__load_patch("blocking", (e, t) => {
      let n = ["alert", "prompt", "confirm"];
      for (let i = 0; i < n.length; i++) {
        let o = n[i];
        Te(
          e,
          o,
          (s, f, h) =>
            function (T, p) {
              return t.current.run(s, e, p, h);
            }
        );
      }
    }),
    r.__load_patch("EventTarget", (e, t, n) => {
      br(e, n), xr(e, n);
      let i = e.XMLHttpRequestEventTarget;
      i && i.prototype && n.patchEventTarget(e, n, [i.prototype]);
    }),
    r.__load_patch("MutationObserver", (e, t, n) => {
      Pe("MutationObserver"), Pe("WebKitMutationObserver");
    }),
    r.__load_patch("IntersectionObserver", (e, t, n) => {
      Pe("IntersectionObserver");
    }),
    r.__load_patch("FileReader", (e, t, n) => {
      Pe("FileReader");
    }),
    r.__load_patch("on_property", (e, t, n) => {
      Rr(n, e);
    }),
    r.__load_patch("customElements", (e, t, n) => {
      vr(e, n);
    }),
    r.__load_patch("XHR", (e, t) => {
      T(e);
      let n = H("xhrTask"),
        i = H("xhrSync"),
        o = H("xhrListener"),
        s = H("xhrScheduled"),
        f = H("xhrURL"),
        h = H("xhrErrorBeforeScheduled");
      function T(p) {
        let y = p.XMLHttpRequest;
        if (!y) return;
        let R = y.prototype;
        function D(I) {
          return I[n];
        }
        let U = R[qe],
          K = R[Xe];
        if (!U) {
          let I = p.XMLHttpRequestEventTarget;
          if (I) {
            let C = I.prototype;
            (U = C[qe]), (K = C[Xe]);
          }
        }
        let ee = "readystatechange",
          Y = "scheduled";
        function x(I) {
          let C = I.data,
            F = C.target;
          (F[s] = !1), (F[h] = !1);
          let te = F[o];
          U || ((U = F[qe]), (K = F[Xe])), te && K.call(F, ee, te);
          let q = (F[o] = () => {
            if (F.readyState === F.DONE)
              if (!C.aborted && F[s] && I.state === Y) {
                let g = F[t.__symbol__("loadfalse")];
                if (F.status !== 0 && g && g.length > 0) {
                  let a = I.invoke;
                  (I.invoke = function () {
                    let c = F[t.__symbol__("loadfalse")];
                    for (let v = 0; v < c.length; v++)
                      c[v] === I && c.splice(v, 1);
                    !C.aborted && I.state === Y && a.call(I);
                  }),
                    g.push(I);
                } else I.invoke();
              } else !C.aborted && F[s] === !1 && (F[h] = !0);
          });
          return (
            U.call(F, ee, q),
            F[n] || (F[n] = I),
            z.apply(F, C.args),
            (F[s] = !0),
            I
          );
        }
        function m() {}
        function Z(I) {
          let C = I.data;
          return (C.aborted = !0), P.apply(C.target, C.args);
        }
        let j = Te(
            R,
            "open",
            () =>
              function (I, C) {
                return (I[i] = C[2] == !1), (I[f] = C[1]), j.apply(I, C);
              }
          ),
          $ = "XMLHttpRequest.send",
          G = H("fetchTaskAborting"),
          w = H("fetchTaskScheduling"),
          z = Te(
            R,
            "send",
            () =>
              function (I, C) {
                if (t.current[w] === !0 || I[i]) return z.apply(I, C);
                {
                  let F = {
                      target: I,
                      url: I[f],
                      isPeriodic: !1,
                      args: C,
                      aborted: !1,
                    },
                    te = rt($, m, F, x, Z);
                  I &&
                    I[h] === !0 &&
                    !F.aborted &&
                    te.state === Y &&
                    te.invoke();
                }
              }
          ),
          P = Te(
            R,
            "abort",
            () =>
              function (I, C) {
                let F = D(I);
                if (F && typeof F.type == "string") {
                  if (F.cancelFn == null || (F.data && F.data.aborted)) return;
                  F.zone.cancelTask(F);
                } else if (t.current[G] === !0) return P.apply(I, C);
              }
          );
      }
    }),
    r.__load_patch("geolocation", (e) => {
      e.navigator &&
        e.navigator.geolocation &&
        dr(e.navigator.geolocation, ["getCurrentPosition", "watchPosition"]);
    }),
    r.__load_patch("PromiseRejectionEvent", (e, t) => {
      function n(i) {
        return function (o) {
          Bt(e, i).forEach((f) => {
            let h = e.PromiseRejectionEvent;
            if (h) {
              let T = new h(i, { promise: o.promise, reason: o.rejection });
              f.invoke(T);
            }
          });
        };
      }
      e.PromiseRejectionEvent &&
        ((t[H("unhandledPromiseRejectionHandler")] = n("unhandledrejection")),
        (t[H("rejectionHandledHandler")] = n("rejectionhandled")));
    }),
    r.__load_patch("queueMicrotask", (e, t, n) => {
      kr(e, n);
    });
}
function Ar(r) {
  r.__load_patch("ZoneAwarePromise", (e, t, n) => {
    let i = Object.getOwnPropertyDescriptor,
      o = Object.defineProperty;
    function s(_) {
      if (_ && _.toString === Object.prototype.toString) {
        let d = _.constructor && _.constructor.name;
        return (d || "") + ": " + JSON.stringify(_);
      }
      return _ ? _.toString() : Object.prototype.toString.call(_);
    }
    let f = n.symbol,
      h = [],
      T = e[f("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== !1,
      p = f("Promise"),
      y = f("then"),
      R = "__creationTrace__";
    (n.onUnhandledError = (_) => {
      if (n.showUncaughtError()) {
        let d = _ && _.rejection;
        d
          ? console.error(
              "Unhandled Promise rejection:",
              d instanceof Error ? d.message : d,
              "; Zone:",
              _.zone.name,
              "; Task:",
              _.task && _.task.source,
              "; Value:",
              d,
              d instanceof Error ? d.stack : void 0
            )
          : console.error(_);
      }
    }),
      (n.microtaskDrainDone = () => {
        for (; h.length; ) {
          let _ = h.shift();
          try {
            _.zone.runGuarded(() => {
              throw _.throwOriginal ? _.rejection : _;
            });
          } catch (d) {
            U(d);
          }
        }
      });
    let D = f("unhandledPromiseRejectionHandler");
    function U(_) {
      n.onUnhandledError(_);
      try {
        let d = t[D];
        typeof d == "function" && d.call(this, _);
      } catch {}
    }
    function K(_) {
      return _ && _.then;
    }
    function ee(_) {
      return _;
    }
    function Y(_) {
      return O.reject(_);
    }
    let x = f("state"),
      m = f("value"),
      Z = f("finally"),
      j = f("parentPromiseValue"),
      $ = f("parentPromiseState"),
      G = "Promise.then",
      w = null,
      z = !0,
      P = !1,
      I = 0;
    function C(_, d) {
      return (u) => {
        try {
          B(_, d, u);
        } catch (E) {
          B(_, !1, E);
        }
      };
    }
    let F = function () {
        let _ = !1;
        return function (u) {
          return function () {
            _ || ((_ = !0), u.apply(null, arguments));
          };
        };
      },
      te = "Promise resolved with itself",
      q = f("currentTaskTrace");
    function B(_, d, u) {
      let E = F();
      if (_ === u) throw new TypeError(te);
      if (_[x] === w) {
        let b = null;
        try {
          (typeof u == "object" || typeof u == "function") && (b = u && u.then);
        } catch (S) {
          return (
            E(() => {
              B(_, !1, S);
            })(),
            _
          );
        }
        if (
          d !== P &&
          u instanceof O &&
          u.hasOwnProperty(x) &&
          u.hasOwnProperty(m) &&
          u[x] !== w
        )
          a(u), B(_, u[x], u[m]);
        else if (d !== P && typeof b == "function")
          try {
            b.call(u, E(C(_, d)), E(C(_, !1)));
          } catch (S) {
            E(() => {
              B(_, !1, S);
            })();
          }
        else {
          _[x] = d;
          let S = _[m];
          if (
            ((_[m] = u),
            _[Z] === Z && d === z && ((_[x] = _[$]), (_[m] = _[j])),
            d === P && u instanceof Error)
          ) {
            let k =
              t.currentTask && t.currentTask.data && t.currentTask.data[R];
            k &&
              o(u, q, {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: k,
              });
          }
          for (let k = 0; k < S.length; ) c(_, S[k++], S[k++], S[k++], S[k++]);
          if (S.length == 0 && d == P) {
            _[x] = I;
            let k = u;
            try {
              throw new Error(
                "Uncaught (in promise): " +
                  s(u) +
                  (u && u.stack
                    ? `
` + u.stack
                    : "")
              );
            } catch (N) {
              k = N;
            }
            T && (k.throwOriginal = !0),
              (k.rejection = u),
              (k.promise = _),
              (k.zone = t.current),
              (k.task = t.currentTask),
              h.push(k),
              n.scheduleMicroTask();
          }
        }
      }
      return _;
    }
    let g = f("rejectionHandledHandler");
    function a(_) {
      if (_[x] === I) {
        try {
          let d = t[g];
          d &&
            typeof d == "function" &&
            d.call(this, { rejection: _[m], promise: _ });
        } catch {}
        _[x] = P;
        for (let d = 0; d < h.length; d++) _ === h[d].promise && h.splice(d, 1);
      }
    }
    function c(_, d, u, E, b) {
      a(_);
      let S = _[x],
        k = S
          ? typeof E == "function"
            ? E
            : ee
          : typeof b == "function"
          ? b
          : Y;
      d.scheduleMicroTask(
        G,
        () => {
          try {
            let N = _[m],
              L = !!u && Z === u[Z];
            L && ((u[j] = N), (u[$] = S));
            let M = d.run(k, void 0, L && k !== Y && k !== ee ? [] : [N]);
            B(u, !0, M);
          } catch (N) {
            B(u, !1, N);
          }
        },
        u
      );
    }
    let v = "function ZoneAwarePromise() { [native code] }",
      A = function () {},
      X = e.AggregateError;
    class O {
      static toString() {
        return v;
      }
      static resolve(d) {
        return d instanceof O ? d : B(new this(null), z, d);
      }
      static reject(d) {
        return B(new this(null), P, d);
      }
      static withResolvers() {
        let d = {};
        return (
          (d.promise = new O((u, E) => {
            (d.resolve = u), (d.reject = E);
          })),
          d
        );
      }
      static any(d) {
        if (!d || typeof d[Symbol.iterator] != "function")
          return Promise.reject(new X([], "All promises were rejected"));
        let u = [],
          E = 0;
        try {
          for (let k of d) E++, u.push(O.resolve(k));
        } catch {
          return Promise.reject(new X([], "All promises were rejected"));
        }
        if (E === 0)
          return Promise.reject(new X([], "All promises were rejected"));
        let b = !1,
          S = [];
        return new O((k, N) => {
          for (let L = 0; L < u.length; L++)
            u[L].then(
              (M) => {
                b || ((b = !0), k(M));
              },
              (M) => {
                S.push(M),
                  E--,
                  E === 0 &&
                    ((b = !0), N(new X(S, "All promises were rejected")));
              }
            );
        });
      }
      static race(d) {
        let u,
          E,
          b = new this((N, L) => {
            (u = N), (E = L);
          });
        function S(N) {
          u(N);
        }
        function k(N) {
          E(N);
        }
        for (let N of d) K(N) || (N = this.resolve(N)), N.then(S, k);
        return b;
      }
      static all(d) {
        return O.allWithCallback(d);
      }
      static allSettled(d) {
        return (this && this.prototype instanceof O ? this : O).allWithCallback(
          d,
          {
            thenCallback: (E) => ({ status: "fulfilled", value: E }),
            errorCallback: (E) => ({ status: "rejected", reason: E }),
          }
        );
      }
      static allWithCallback(d, u) {
        let E,
          b,
          S = new this((M, V) => {
            (E = M), (b = V);
          }),
          k = 2,
          N = 0,
          L = [];
        for (let M of d) {
          K(M) || (M = this.resolve(M));
          let V = N;
          try {
            M.then(
              (W) => {
                (L[V] = u ? u.thenCallback(W) : W), k--, k === 0 && E(L);
              },
              (W) => {
                u ? ((L[V] = u.errorCallback(W)), k--, k === 0 && E(L)) : b(W);
              }
            );
          } catch (W) {
            b(W);
          }
          k++, N++;
        }
        return (k -= 2), k === 0 && E(L), S;
      }
      constructor(d) {
        let u = this;
        if (!(u instanceof O))
          throw new Error("Must be an instanceof Promise.");
        (u[x] = w), (u[m] = []);
        try {
          let E = F();
          d && d(E(C(u, z)), E(C(u, P)));
        } catch (E) {
          B(u, !1, E);
        }
      }
      get [Symbol.toStringTag]() {
        return "Promise";
      }
      get [Symbol.species]() {
        return O;
      }
      then(d, u) {
        let E = this.constructor?.[Symbol.species];
        (!E || typeof E != "function") && (E = this.constructor || O);
        let b = new E(A),
          S = t.current;
        return this[x] == w ? this[m].push(S, b, d, u) : c(this, S, b, d, u), b;
      }
      catch(d) {
        return this.then(null, d);
      }
      finally(d) {
        let u = this.constructor?.[Symbol.species];
        (!u || typeof u != "function") && (u = O);
        let E = new u(A);
        E[Z] = Z;
        let b = t.current;
        return this[x] == w ? this[m].push(b, E, d, d) : c(this, b, E, d, d), E;
      }
    }
    (O.resolve = O.resolve),
      (O.reject = O.reject),
      (O.race = O.race),
      (O.all = O.all);
    let we = (e[p] = e.Promise);
    e.Promise = O;
    let de = f("thenPatched");
    function Ee(_) {
      let d = _.prototype,
        u = i(d, "then");
      if (u && (u.writable === !1 || !u.configurable)) return;
      let E = d.then;
      (d[y] = E),
        (_.prototype.then = function (b, S) {
          return new O((N, L) => {
            E.call(this, N, L);
          }).then(b, S);
        }),
        (_[de] = !0);
    }
    n.patchThen = Ee;
    function se(_) {
      return function (d, u) {
        let E = _.apply(d, u);
        if (E instanceof O) return E;
        let b = E.constructor;
        return b[de] || Ee(b), E;
      };
    }
    return (
      we && (Ee(we), Te(e, "fetch", (_) => se(_))),
      (Promise[t.__symbol__("uncaughtPromiseErrors")] = h),
      O
    );
  });
}
function Ir(r) {
  r.__load_patch("toString", (e) => {
    let t = Function.prototype.toString,
      n = H("OriginalDelegate"),
      i = H("Promise"),
      o = H("Error"),
      s = function () {
        if (typeof this == "function") {
          let p = this[n];
          if (p)
            return typeof p == "function"
              ? t.call(p)
              : Object.prototype.toString.call(p);
          if (this === Promise) {
            let y = e[i];
            if (y) return t.call(y);
          }
          if (this === Error) {
            let y = e[o];
            if (y) return t.call(y);
          }
        }
        return t.call(this);
      };
    (s[n] = t), (Function.prototype.toString = s);
    let f = Object.prototype.toString,
      h = "[object Promise]";
    Object.prototype.toString = function () {
      return typeof Promise == "function" && this instanceof Promise
        ? h
        : f.call(this);
    };
  });
}
function Sr(r, e, t, n, i) {
  let o = Zone.__symbol__(n);
  if (e[o]) return;
  let s = (e[o] = e[n]);
  (e[n] = function (f, h, T) {
    return (
      h &&
        h.prototype &&
        i.forEach(function (p) {
          let y = `${t}.${n}::` + p,
            R = h.prototype;
          try {
            if (R.hasOwnProperty(p)) {
              let D = r.ObjectGetOwnPropertyDescriptor(R, p);
              D && D.value
                ? ((D.value = r.wrapWithCurrentZone(D.value, y)),
                  r._redefineProperty(h.prototype, p, D))
                : R[p] && (R[p] = r.wrapWithCurrentZone(R[p], y));
            } else R[p] && (R[p] = r.wrapWithCurrentZone(R[p], y));
          } catch {}
        }),
      s.call(e, f, h, T)
    );
  }),
    r.attachOriginToPatched(e[n], s);
}
function Dr(r) {
  r.__load_patch("util", (e, t, n) => {
    let i = $e(e);
    (n.patchOnProperties = It),
      (n.patchMethod = Te),
      (n.bindArguments = nt),
      (n.patchMacroTask = yr);
    let o = t.__symbol__("BLACK_LISTED_EVENTS"),
      s = t.__symbol__("UNPATCHED_EVENTS");
    e[s] && (e[o] = e[s]),
      e[o] && (t[o] = t[s] = e[o]),
      (n.patchEventPrototype = wr),
      (n.patchEventTarget = gr),
      (n.isIEOrEdge = Tr),
      (n.ObjectDefineProperty = Je),
      (n.ObjectGetOwnPropertyDescriptor = Be),
      (n.ObjectCreate = fr),
      (n.ArraySlice = hr),
      (n.patchClass = Pe),
      (n.wrapWithCurrentZone = tt),
      (n.filterProperties = Nt),
      (n.attachOriginToPatched = me),
      (n._redefineProperty = Object.defineProperty),
      (n.patchCallbacks = Sr),
      (n.getGlobalObjects = () => ({
        globalSources: St,
        zoneSymbolEventNames: ie,
        eventNames: i,
        isBrowser: it,
        isMix: At,
        isNode: Ze,
        TRUE_STR: ye,
        FALSE_STR: _e,
        ZONE_SYMBOL_PREFIX: Ne,
        ADD_EVENT_LISTENER_STR: Qe,
        REMOVE_EVENT_LISTENER_STR: et,
      }));
  });
}
function Fr(r) {
  Ar(r), Ir(r), Dr(r);
}
var Lt = lr();
Fr(Lt);
Cr(Lt);
var er = cr(Qt());
window.Buffer = er.Buffer;
window.process = { env: { DEBUG: void 0 } };
