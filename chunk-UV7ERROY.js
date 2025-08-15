import { f as Tt, q as _t } from "./chunk-KXQY476L.js";
var zr = Tt((Rt) => {
  "use strict";
  _t();
  Rt.byteLength = ei;
  Rt.toByteArray = hi;
  Rt.fromByteArray = ai;
  var Mt = [],
    yt = [],
    ii = typeof Uint8Array < "u" ? Uint8Array : Array,
    nr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (bt = 0, Dr = nr.length; bt < Dr; ++bt)
    (Mt[bt] = nr[bt]), (yt[nr.charCodeAt(bt)] = bt);
  var bt, Dr;
  yt[45] = 62;
  yt[95] = 63;
  function Zr(o) {
    var i = o.length;
    if (i % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r = o.indexOf("=");
    r === -1 && (r = i);
    var s = r === i ? 0 : 4 - (r % 4);
    return [r, s];
  }
  function ei(o) {
    var i = Zr(o),
      r = i[0],
      s = i[1];
    return ((r + s) * 3) / 4 - s;
  }
  function ni(o, i, r) {
    return ((i + r) * 3) / 4 - r;
  }
  function hi(o) {
    var i,
      r = Zr(o),
      s = r[0],
      h = r[1],
      d = new ii(ni(o, s, h)),
      w = 0,
      E = h > 0 ? s - 4 : s,
      A;
    for (A = 0; A < E; A += 4)
      (i =
        (yt[o.charCodeAt(A)] << 18) |
        (yt[o.charCodeAt(A + 1)] << 12) |
        (yt[o.charCodeAt(A + 2)] << 6) |
        yt[o.charCodeAt(A + 3)]),
        (d[w++] = (i >> 16) & 255),
        (d[w++] = (i >> 8) & 255),
        (d[w++] = i & 255);
    return (
      h === 2 &&
        ((i = (yt[o.charCodeAt(A)] << 2) | (yt[o.charCodeAt(A + 1)] >> 4)),
        (d[w++] = i & 255)),
      h === 1 &&
        ((i =
          (yt[o.charCodeAt(A)] << 10) |
          (yt[o.charCodeAt(A + 1)] << 4) |
          (yt[o.charCodeAt(A + 2)] >> 2)),
        (d[w++] = (i >> 8) & 255),
        (d[w++] = i & 255)),
      d
    );
  }
  function fi(o) {
    return (
      Mt[(o >> 18) & 63] + Mt[(o >> 12) & 63] + Mt[(o >> 6) & 63] + Mt[o & 63]
    );
  }
  function oi(o, i, r) {
    for (var s, h = [], d = i; d < r; d += 3)
      (s =
        ((o[d] << 16) & 16711680) +
        ((o[d + 1] << 8) & 65280) +
        (o[d + 2] & 255)),
        h.push(fi(s));
    return h.join("");
  }
  function ai(o) {
    for (
      var i, r = o.length, s = r % 3, h = [], d = 16383, w = 0, E = r - s;
      w < E;
      w += d
    )
      h.push(oi(o, w, w + d > E ? E : w + d));
    return (
      s === 1
        ? ((i = o[r - 1]), h.push(Mt[i >> 2] + Mt[(i << 4) & 63] + "=="))
        : s === 2 &&
          ((i = (o[r - 2] << 8) + o[r - 1]),
          h.push(Mt[i >> 10] + Mt[(i >> 4) & 63] + Mt[(i << 2) & 63] + "=")),
      h.join("")
    );
  }
});
var Or = Tt((fr) => {
  "use strict";
  _t();
  fr.read = function (o, i, r, s, h) {
    var d,
      w,
      E = h * 8 - s - 1,
      A = (1 << E) - 1,
      b = A >> 1,
      F = -7,
      _ = r ? h - 1 : 0,
      dt = r ? -1 : 1,
      ct = o[i + _];
    for (
      _ += dt, d = ct & ((1 << -F) - 1), ct >>= -F, F += E;
      F > 0;
      d = d * 256 + o[i + _], _ += dt, F -= 8
    );
    for (
      w = d & ((1 << -F) - 1), d >>= -F, F += s;
      F > 0;
      w = w * 256 + o[i + _], _ += dt, F -= 8
    );
    if (d === 0) d = 1 - b;
    else {
      if (d === A) return w ? NaN : (ct ? -1 : 1) * (1 / 0);
      (w = w + Math.pow(2, s)), (d = d - b);
    }
    return (ct ? -1 : 1) * w * Math.pow(2, d - s);
  };
  fr.write = function (o, i, r, s, h, d) {
    var w,
      E,
      A,
      b = d * 8 - h - 1,
      F = (1 << b) - 1,
      _ = F >> 1,
      dt = h === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      ct = s ? 0 : d - 1,
      At = s ? 1 : -1,
      Nt = i < 0 || (i === 0 && 1 / i < 0) ? 1 : 0;
    for (
      i = Math.abs(i),
        isNaN(i) || i === 1 / 0
          ? ((E = isNaN(i) ? 1 : 0), (w = F))
          : ((w = Math.floor(Math.log(i) / Math.LN2)),
            i * (A = Math.pow(2, -w)) < 1 && (w--, (A *= 2)),
            w + _ >= 1 ? (i += dt / A) : (i += dt * Math.pow(2, 1 - _)),
            i * A >= 2 && (w++, (A /= 2)),
            w + _ >= F
              ? ((E = 0), (w = F))
              : w + _ >= 1
              ? ((E = (i * A - 1) * Math.pow(2, h)), (w = w + _))
              : ((E = i * Math.pow(2, _ - 1) * Math.pow(2, h)), (w = 0)));
      h >= 8;
      o[r + ct] = E & 255, ct += At, E /= 256, h -= 8
    );
    for (
      w = (w << h) | E, b += h;
      b > 0;
      o[r + ct] = w & 255, ct += At, w /= 256, b -= 8
    );
    o[r + ct - At] |= Nt * 128;
  };
});
var ti = Tt((St) => {
  "use strict";
  _t();
  var or = zr(),
    Ut = Or(),
    Hr =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  St.Buffer = y;
  St.SlowBuffer = ci;
  St.INSPECT_MAX_BYTES = 50;
  var Lt = 2147483647;
  St.kMaxLength = Lt;
  y.TYPED_ARRAY_SUPPORT = si();
  !y.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
  function si() {
    try {
      var o = new Uint8Array(1),
        i = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(i, Uint8Array.prototype),
        Object.setPrototypeOf(o, i),
        o.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(y.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (y.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(y.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (y.isBuffer(this)) return this.byteOffset;
    },
  });
  function Et(o) {
    if (o > Lt)
      throw new RangeError(
        'The value "' + o + '" is invalid for option "size"'
      );
    var i = new Uint8Array(o);
    return Object.setPrototypeOf(i, y.prototype), i;
  }
  function y(o, i, r) {
    if (typeof o == "number") {
      if (typeof i == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return lr(o);
    }
    return Yr(o, i, r);
  }
  y.poolSize = 8192;
  function Yr(o, i, r) {
    if (typeof o == "string") return li(o, i);
    if (ArrayBuffer.isView(o)) return pi(o);
    if (o == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof o
      );
    if (
      xt(o, ArrayBuffer) ||
      (o && xt(o.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (xt(o, SharedArrayBuffer) || (o && xt(o.buffer, SharedArrayBuffer))))
    )
      return sr(o, i, r);
    if (typeof o == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var s = o.valueOf && o.valueOf();
    if (s != null && s !== o) return y.from(s, i, r);
    var h = vi(o);
    if (h) return h;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof o[Symbol.toPrimitive] == "function"
    )
      return y.from(o[Symbol.toPrimitive]("string"), i, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof o
    );
  }
  y.from = function (o, i, r) {
    return Yr(o, i, r);
  };
  Object.setPrototypeOf(y.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(y, Uint8Array);
  function Jr(o) {
    if (typeof o != "number")
      throw new TypeError('"size" argument must be of type number');
    if (o < 0)
      throw new RangeError(
        'The value "' + o + '" is invalid for option "size"'
      );
  }
  function ui(o, i, r) {
    return (
      Jr(o),
      o <= 0
        ? Et(o)
        : i !== void 0
        ? typeof r == "string"
          ? Et(o).fill(i, r)
          : Et(o).fill(i)
        : Et(o)
    );
  }
  y.alloc = function (o, i, r) {
    return ui(o, i, r);
  };
  function lr(o) {
    return Jr(o), Et(o < 0 ? 0 : pr(o) | 0);
  }
  y.allocUnsafe = function (o) {
    return lr(o);
  };
  y.allocUnsafeSlow = function (o) {
    return lr(o);
  };
  function li(o, i) {
    if (((typeof i != "string" || i === "") && (i = "utf8"), !y.isEncoding(i)))
      throw new TypeError("Unknown encoding: " + i);
    var r = Xr(o, i) | 0,
      s = Et(r),
      h = s.write(o, i);
    return h !== r && (s = s.slice(0, h)), s;
  }
  function ar(o) {
    for (
      var i = o.length < 0 ? 0 : pr(o.length) | 0, r = Et(i), s = 0;
      s < i;
      s += 1
    )
      r[s] = o[s] & 255;
    return r;
  }
  function pi(o) {
    if (xt(o, Uint8Array)) {
      var i = new Uint8Array(o);
      return sr(i.buffer, i.byteOffset, i.byteLength);
    }
    return ar(o);
  }
  function sr(o, i, r) {
    if (i < 0 || o.byteLength < i)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (o.byteLength < i + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var s;
    return (
      i === void 0 && r === void 0
        ? (s = new Uint8Array(o))
        : r === void 0
        ? (s = new Uint8Array(o, i))
        : (s = new Uint8Array(o, i, r)),
      Object.setPrototypeOf(s, y.prototype),
      s
    );
  }
  function vi(o) {
    if (y.isBuffer(o)) {
      var i = pr(o.length) | 0,
        r = Et(i);
      return r.length === 0 || o.copy(r, 0, 0, i), r;
    }
    if (o.length !== void 0)
      return typeof o.length != "number" || vr(o.length) ? Et(0) : ar(o);
    if (o.type === "Buffer" && Array.isArray(o.data)) return ar(o.data);
  }
  function pr(o) {
    if (o >= Lt)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          Lt.toString(16) +
          " bytes"
      );
    return o | 0;
  }
  function ci(o) {
    return +o != o && (o = 0), y.alloc(+o);
  }
  y.isBuffer = function (i) {
    return i != null && i._isBuffer === !0 && i !== y.prototype;
  };
  y.compare = function (i, r) {
    if (
      (xt(i, Uint8Array) && (i = y.from(i, i.offset, i.byteLength)),
      xt(r, Uint8Array) && (r = y.from(r, r.offset, r.byteLength)),
      !y.isBuffer(i) || !y.isBuffer(r))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (i === r) return 0;
    for (var s = i.length, h = r.length, d = 0, w = Math.min(s, h); d < w; ++d)
      if (i[d] !== r[d]) {
        (s = i[d]), (h = r[d]);
        break;
      }
    return s < h ? -1 : h < s ? 1 : 0;
  };
  y.isEncoding = function (i) {
    switch (String(i).toLowerCase()) {
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
  y.concat = function (i, r) {
    if (!Array.isArray(i))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (i.length === 0) return y.alloc(0);
    var s;
    if (r === void 0) for (r = 0, s = 0; s < i.length; ++s) r += i[s].length;
    var h = y.allocUnsafe(r),
      d = 0;
    for (s = 0; s < i.length; ++s) {
      var w = i[s];
      if (xt(w, Uint8Array))
        d + w.length > h.length
          ? y.from(w).copy(h, d)
          : Uint8Array.prototype.set.call(h, w, d);
      else if (y.isBuffer(w)) w.copy(h, d);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      d += w.length;
    }
    return h;
  };
  function Xr(o, i) {
    if (y.isBuffer(o)) return o.length;
    if (ArrayBuffer.isView(o) || xt(o, ArrayBuffer)) return o.byteLength;
    if (typeof o != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof o
      );
    var r = o.length,
      s = arguments.length > 2 && arguments[2] === !0;
    if (!s && r === 0) return 0;
    for (var h = !1; ; )
      switch (i) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return ur(o).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return jr(o).length;
        default:
          if (h) return s ? -1 : ur(o).length;
          (i = ("" + i).toLowerCase()), (h = !0);
      }
  }
  y.byteLength = Xr;
  function mi(o, i, r) {
    var s = !1;
    if (
      ((i === void 0 || i < 0) && (i = 0),
      i > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        ((r >>>= 0), (i >>>= 0), r <= i))
    )
      return "";
    for (o || (o = "utf8"); ; )
      switch (o) {
        case "hex":
          return _i(this, i, r);
        case "utf8":
        case "utf-8":
          return Vr(this, i, r);
        case "ascii":
          return Ai(this, i, r);
        case "latin1":
        case "binary":
          return Bi(this, i, r);
        case "base64":
          return xi(this, i, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Fi(this, i, r);
        default:
          if (s) throw new TypeError("Unknown encoding: " + o);
          (o = (o + "").toLowerCase()), (s = !0);
      }
  }
  y.prototype._isBuffer = !0;
  function It(o, i, r) {
    var s = o[i];
    (o[i] = o[r]), (o[r] = s);
  }
  y.prototype.swap16 = function () {
    var i = this.length;
    if (i % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var r = 0; r < i; r += 2) It(this, r, r + 1);
    return this;
  };
  y.prototype.swap32 = function () {
    var i = this.length;
    if (i % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var r = 0; r < i; r += 4) It(this, r, r + 3), It(this, r + 1, r + 2);
    return this;
  };
  y.prototype.swap64 = function () {
    var i = this.length;
    if (i % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var r = 0; r < i; r += 8)
      It(this, r, r + 7),
        It(this, r + 1, r + 6),
        It(this, r + 2, r + 5),
        It(this, r + 3, r + 4);
    return this;
  };
  y.prototype.toString = function () {
    var i = this.length;
    return i === 0
      ? ""
      : arguments.length === 0
      ? Vr(this, 0, i)
      : mi.apply(this, arguments);
  };
  y.prototype.toLocaleString = y.prototype.toString;
  y.prototype.equals = function (i) {
    if (!y.isBuffer(i)) throw new TypeError("Argument must be a Buffer");
    return this === i ? !0 : y.compare(this, i) === 0;
  };
  y.prototype.inspect = function () {
    var i = "",
      r = St.INSPECT_MAX_BYTES;
    return (
      (i = this.toString("hex", 0, r)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > r && (i += " ... "),
      "<Buffer " + i + ">"
    );
  };
  Hr && (y.prototype[Hr] = y.prototype.inspect);
  y.prototype.compare = function (i, r, s, h, d) {
    if (
      (xt(i, Uint8Array) && (i = y.from(i, i.offset, i.byteLength)),
      !y.isBuffer(i))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof i
      );
    if (
      (r === void 0 && (r = 0),
      s === void 0 && (s = i ? i.length : 0),
      h === void 0 && (h = 0),
      d === void 0 && (d = this.length),
      r < 0 || s > i.length || h < 0 || d > this.length)
    )
      throw new RangeError("out of range index");
    if (h >= d && r >= s) return 0;
    if (h >= d) return -1;
    if (r >= s) return 1;
    if (((r >>>= 0), (s >>>= 0), (h >>>= 0), (d >>>= 0), this === i)) return 0;
    for (
      var w = d - h,
        E = s - r,
        A = Math.min(w, E),
        b = this.slice(h, d),
        F = i.slice(r, s),
        _ = 0;
      _ < A;
      ++_
    )
      if (b[_] !== F[_]) {
        (w = b[_]), (E = F[_]);
        break;
      }
    return w < E ? -1 : E < w ? 1 : 0;
  };
  function Gr(o, i, r, s, h) {
    if (o.length === 0) return -1;
    if (
      (typeof r == "string"
        ? ((s = r), (r = 0))
        : r > 2147483647
        ? (r = 2147483647)
        : r < -2147483648 && (r = -2147483648),
      (r = +r),
      vr(r) && (r = h ? 0 : o.length - 1),
      r < 0 && (r = o.length + r),
      r >= o.length)
    ) {
      if (h) return -1;
      r = o.length - 1;
    } else if (r < 0)
      if (h) r = 0;
      else return -1;
    if ((typeof i == "string" && (i = y.from(i, s)), y.isBuffer(i)))
      return i.length === 0 ? -1 : Kr(o, i, r, s, h);
    if (typeof i == "number")
      return (
        (i = i & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? h
            ? Uint8Array.prototype.indexOf.call(o, i, r)
            : Uint8Array.prototype.lastIndexOf.call(o, i, r)
          : Kr(o, [i], r, s, h)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function Kr(o, i, r, s, h) {
    var d = 1,
      w = o.length,
      E = i.length;
    if (
      s !== void 0 &&
      ((s = String(s).toLowerCase()),
      s === "ucs2" || s === "ucs-2" || s === "utf16le" || s === "utf-16le")
    ) {
      if (o.length < 2 || i.length < 2) return -1;
      (d = 2), (w /= 2), (E /= 2), (r /= 2);
    }
    function A(ct, At) {
      return d === 1 ? ct[At] : ct.readUInt16BE(At * d);
    }
    var b;
    if (h) {
      var F = -1;
      for (b = r; b < w; b++)
        if (A(o, b) === A(i, F === -1 ? 0 : b - F)) {
          if ((F === -1 && (F = b), b - F + 1 === E)) return F * d;
        } else F !== -1 && (b -= b - F), (F = -1);
    } else
      for (r + E > w && (r = w - E), b = r; b >= 0; b--) {
        for (var _ = !0, dt = 0; dt < E; dt++)
          if (A(o, b + dt) !== A(i, dt)) {
            _ = !1;
            break;
          }
        if (_) return b;
      }
    return -1;
  }
  y.prototype.includes = function (i, r, s) {
    return this.indexOf(i, r, s) !== -1;
  };
  y.prototype.indexOf = function (i, r, s) {
    return Gr(this, i, r, s, !0);
  };
  y.prototype.lastIndexOf = function (i, r, s) {
    return Gr(this, i, r, s, !1);
  };
  function di(o, i, r, s) {
    r = Number(r) || 0;
    var h = o.length - r;
    s ? ((s = Number(s)), s > h && (s = h)) : (s = h);
    var d = i.length;
    s > d / 2 && (s = d / 2);
    for (var w = 0; w < s; ++w) {
      var E = parseInt(i.substr(w * 2, 2), 16);
      if (vr(E)) return w;
      o[r + w] = E;
    }
    return w;
  }
  function wi(o, i, r, s) {
    return Ct(ur(i, o.length - r), o, r, s);
  }
  function yi(o, i, r, s) {
    return Ct(Ui(i), o, r, s);
  }
  function gi(o, i, r, s) {
    return Ct(jr(i), o, r, s);
  }
  function Mi(o, i, r, s) {
    return Ct(Si(i, o.length - r), o, r, s);
  }
  y.prototype.write = function (i, r, s, h) {
    if (r === void 0) (h = "utf8"), (s = this.length), (r = 0);
    else if (s === void 0 && typeof r == "string")
      (h = r), (s = this.length), (r = 0);
    else if (isFinite(r))
      (r = r >>> 0),
        isFinite(s)
          ? ((s = s >>> 0), h === void 0 && (h = "utf8"))
          : ((h = s), (s = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var d = this.length - r;
    if (
      ((s === void 0 || s > d) && (s = d),
      (i.length > 0 && (s < 0 || r < 0)) || r > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    h || (h = "utf8");
    for (var w = !1; ; )
      switch (h) {
        case "hex":
          return di(this, i, r, s);
        case "utf8":
        case "utf-8":
          return wi(this, i, r, s);
        case "ascii":
        case "latin1":
        case "binary":
          return yi(this, i, r, s);
        case "base64":
          return gi(this, i, r, s);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Mi(this, i, r, s);
        default:
          if (w) throw new TypeError("Unknown encoding: " + h);
          (h = ("" + h).toLowerCase()), (w = !0);
      }
  };
  y.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function xi(o, i, r) {
    return i === 0 && r === o.length
      ? or.fromByteArray(o)
      : or.fromByteArray(o.slice(i, r));
  }
  function Vr(o, i, r) {
    r = Math.min(o.length, r);
    for (var s = [], h = i; h < r; ) {
      var d = o[h],
        w = null,
        E = d > 239 ? 4 : d > 223 ? 3 : d > 191 ? 2 : 1;
      if (h + E <= r) {
        var A, b, F, _;
        switch (E) {
          case 1:
            d < 128 && (w = d);
            break;
          case 2:
            (A = o[h + 1]),
              (A & 192) === 128 &&
                ((_ = ((d & 31) << 6) | (A & 63)), _ > 127 && (w = _));
            break;
          case 3:
            (A = o[h + 1]),
              (b = o[h + 2]),
              (A & 192) === 128 &&
                (b & 192) === 128 &&
                ((_ = ((d & 15) << 12) | ((A & 63) << 6) | (b & 63)),
                _ > 2047 && (_ < 55296 || _ > 57343) && (w = _));
            break;
          case 4:
            (A = o[h + 1]),
              (b = o[h + 2]),
              (F = o[h + 3]),
              (A & 192) === 128 &&
                (b & 192) === 128 &&
                (F & 192) === 128 &&
                ((_ =
                  ((d & 15) << 18) |
                  ((A & 63) << 12) |
                  ((b & 63) << 6) |
                  (F & 63)),
                _ > 65535 && _ < 1114112 && (w = _));
        }
      }
      w === null
        ? ((w = 65533), (E = 1))
        : w > 65535 &&
          ((w -= 65536),
          s.push(((w >>> 10) & 1023) | 55296),
          (w = 56320 | (w & 1023))),
        s.push(w),
        (h += E);
    }
    return Ei(s);
  }
  var Wr = 4096;
  function Ei(o) {
    var i = o.length;
    if (i <= Wr) return String.fromCharCode.apply(String, o);
    for (var r = "", s = 0; s < i; )
      r += String.fromCharCode.apply(String, o.slice(s, (s += Wr)));
    return r;
  }
  function Ai(o, i, r) {
    var s = "";
    r = Math.min(o.length, r);
    for (var h = i; h < r; ++h) s += String.fromCharCode(o[h] & 127);
    return s;
  }
  function Bi(o, i, r) {
    var s = "";
    r = Math.min(o.length, r);
    for (var h = i; h < r; ++h) s += String.fromCharCode(o[h]);
    return s;
  }
  function _i(o, i, r) {
    var s = o.length;
    (!i || i < 0) && (i = 0), (!r || r < 0 || r > s) && (r = s);
    for (var h = "", d = i; d < r; ++d) h += ki[o[d]];
    return h;
  }
  function Fi(o, i, r) {
    for (var s = o.slice(i, r), h = "", d = 0; d < s.length - 1; d += 2)
      h += String.fromCharCode(s[d] + s[d + 1] * 256);
    return h;
  }
  y.prototype.slice = function (i, r) {
    var s = this.length;
    (i = ~~i),
      (r = r === void 0 ? s : ~~r),
      i < 0 ? ((i += s), i < 0 && (i = 0)) : i > s && (i = s),
      r < 0 ? ((r += s), r < 0 && (r = 0)) : r > s && (r = s),
      r < i && (r = i);
    var h = this.subarray(i, r);
    return Object.setPrototypeOf(h, y.prototype), h;
  };
  function vt(o, i, r) {
    if (o % 1 !== 0 || o < 0) throw new RangeError("offset is not uint");
    if (o + i > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  y.prototype.readUintLE = y.prototype.readUIntLE = function (i, r, s) {
    (i = i >>> 0), (r = r >>> 0), s || vt(i, r, this.length);
    for (var h = this[i], d = 1, w = 0; ++w < r && (d *= 256); )
      h += this[i + w] * d;
    return h;
  };
  y.prototype.readUintBE = y.prototype.readUIntBE = function (i, r, s) {
    (i = i >>> 0), (r = r >>> 0), s || vt(i, r, this.length);
    for (var h = this[i + --r], d = 1; r > 0 && (d *= 256); )
      h += this[i + --r] * d;
    return h;
  };
  y.prototype.readUint8 = y.prototype.readUInt8 = function (i, r) {
    return (i = i >>> 0), r || vt(i, 1, this.length), this[i];
  };
  y.prototype.readUint16LE = y.prototype.readUInt16LE = function (i, r) {
    return (
      (i = i >>> 0), r || vt(i, 2, this.length), this[i] | (this[i + 1] << 8)
    );
  };
  y.prototype.readUint16BE = y.prototype.readUInt16BE = function (i, r) {
    return (
      (i = i >>> 0), r || vt(i, 2, this.length), (this[i] << 8) | this[i + 1]
    );
  };
  y.prototype.readUint32LE = y.prototype.readUInt32LE = function (i, r) {
    return (
      (i = i >>> 0),
      r || vt(i, 4, this.length),
      (this[i] | (this[i + 1] << 8) | (this[i + 2] << 16)) +
        this[i + 3] * 16777216
    );
  };
  y.prototype.readUint32BE = y.prototype.readUInt32BE = function (i, r) {
    return (
      (i = i >>> 0),
      r || vt(i, 4, this.length),
      this[i] * 16777216 +
        ((this[i + 1] << 16) | (this[i + 2] << 8) | this[i + 3])
    );
  };
  y.prototype.readIntLE = function (i, r, s) {
    (i = i >>> 0), (r = r >>> 0), s || vt(i, r, this.length);
    for (var h = this[i], d = 1, w = 0; ++w < r && (d *= 256); )
      h += this[i + w] * d;
    return (d *= 128), h >= d && (h -= Math.pow(2, 8 * r)), h;
  };
  y.prototype.readIntBE = function (i, r, s) {
    (i = i >>> 0), (r = r >>> 0), s || vt(i, r, this.length);
    for (var h = r, d = 1, w = this[i + --h]; h > 0 && (d *= 256); )
      w += this[i + --h] * d;
    return (d *= 128), w >= d && (w -= Math.pow(2, 8 * r)), w;
  };
  y.prototype.readInt8 = function (i, r) {
    return (
      (i = i >>> 0),
      r || vt(i, 1, this.length),
      this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i]
    );
  };
  y.prototype.readInt16LE = function (i, r) {
    (i = i >>> 0), r || vt(i, 2, this.length);
    var s = this[i] | (this[i + 1] << 8);
    return s & 32768 ? s | 4294901760 : s;
  };
  y.prototype.readInt16BE = function (i, r) {
    (i = i >>> 0), r || vt(i, 2, this.length);
    var s = this[i + 1] | (this[i] << 8);
    return s & 32768 ? s | 4294901760 : s;
  };
  y.prototype.readInt32LE = function (i, r) {
    return (
      (i = i >>> 0),
      r || vt(i, 4, this.length),
      this[i] | (this[i + 1] << 8) | (this[i + 2] << 16) | (this[i + 3] << 24)
    );
  };
  y.prototype.readInt32BE = function (i, r) {
    return (
      (i = i >>> 0),
      r || vt(i, 4, this.length),
      (this[i] << 24) | (this[i + 1] << 16) | (this[i + 2] << 8) | this[i + 3]
    );
  };
  y.prototype.readFloatLE = function (i, r) {
    return (
      (i = i >>> 0), r || vt(i, 4, this.length), Ut.read(this, i, !0, 23, 4)
    );
  };
  y.prototype.readFloatBE = function (i, r) {
    return (
      (i = i >>> 0), r || vt(i, 4, this.length), Ut.read(this, i, !1, 23, 4)
    );
  };
  y.prototype.readDoubleLE = function (i, r) {
    return (
      (i = i >>> 0), r || vt(i, 8, this.length), Ut.read(this, i, !0, 52, 8)
    );
  };
  y.prototype.readDoubleBE = function (i, r) {
    return (
      (i = i >>> 0), r || vt(i, 8, this.length), Ut.read(this, i, !1, 52, 8)
    );
  };
  function mt(o, i, r, s, h, d) {
    if (!y.isBuffer(o))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (i > h || i < d)
      throw new RangeError('"value" argument is out of bounds');
    if (r + s > o.length) throw new RangeError("Index out of range");
  }
  y.prototype.writeUintLE = y.prototype.writeUIntLE = function (i, r, s, h) {
    if (((i = +i), (r = r >>> 0), (s = s >>> 0), !h)) {
      var d = Math.pow(2, 8 * s) - 1;
      mt(this, i, r, s, d, 0);
    }
    var w = 1,
      E = 0;
    for (this[r] = i & 255; ++E < s && (w *= 256); )
      this[r + E] = (i / w) & 255;
    return r + s;
  };
  y.prototype.writeUintBE = y.prototype.writeUIntBE = function (i, r, s, h) {
    if (((i = +i), (r = r >>> 0), (s = s >>> 0), !h)) {
      var d = Math.pow(2, 8 * s) - 1;
      mt(this, i, r, s, d, 0);
    }
    var w = s - 1,
      E = 1;
    for (this[r + w] = i & 255; --w >= 0 && (E *= 256); )
      this[r + w] = (i / E) & 255;
    return r + s;
  };
  y.prototype.writeUint8 = y.prototype.writeUInt8 = function (i, r, s) {
    return (
      (i = +i),
      (r = r >>> 0),
      s || mt(this, i, r, 1, 255, 0),
      (this[r] = i & 255),
      r + 1
    );
  };
  y.prototype.writeUint16LE = y.prototype.writeUInt16LE = function (i, r, s) {
    return (
      (i = +i),
      (r = r >>> 0),
      s || mt(this, i, r, 2, 65535, 0),
      (this[r] = i & 255),
      (this[r + 1] = i >>> 8),
      r + 2
    );
  };
  y.prototype.writeUint16BE = y.prototype.writeUInt16BE = function (i, r, s) {
    return (
      (i = +i),
      (r = r >>> 0),
      s || mt(this, i, r, 2, 65535, 0),
      (this[r] = i >>> 8),
      (this[r + 1] = i & 255),
      r + 2
    );
  };
  y.prototype.writeUint32LE = y.prototype.writeUInt32LE = function (i, r, s) {
    return (
      (i = +i),
      (r = r >>> 0),
      s || mt(this, i, r, 4, 4294967295, 0),
      (this[r + 3] = i >>> 24),
      (this[r + 2] = i >>> 16),
      (this[r + 1] = i >>> 8),
      (this[r] = i & 255),
      r + 4
    );
  };
  y.prototype.writeUint32BE = y.prototype.writeUInt32BE = function (i, r, s) {
    return (
      (i = +i),
      (r = r >>> 0),
      s || mt(this, i, r, 4, 4294967295, 0),
      (this[r] = i >>> 24),
      (this[r + 1] = i >>> 16),
      (this[r + 2] = i >>> 8),
      (this[r + 3] = i & 255),
      r + 4
    );
  };
  y.prototype.writeIntLE = function (i, r, s, h) {
    if (((i = +i), (r = r >>> 0), !h)) {
      var d = Math.pow(2, 8 * s - 1);
      mt(this, i, r, s, d - 1, -d);
    }
    var w = 0,
      E = 1,
      A = 0;
    for (this[r] = i & 255; ++w < s && (E *= 256); )
      i < 0 && A === 0 && this[r + w - 1] !== 0 && (A = 1),
        (this[r + w] = (((i / E) >> 0) - A) & 255);
    return r + s;
  };
  y.prototype.writeIntBE = function (i, r, s, h) {
    if (((i = +i), (r = r >>> 0), !h)) {
      var d = Math.pow(2, 8 * s - 1);
      mt(this, i, r, s, d - 1, -d);
    }
    var w = s - 1,
      E = 1,
      A = 0;
    for (this[r + w] = i & 255; --w >= 0 && (E *= 256); )
      i < 0 && A === 0 && this[r + w + 1] !== 0 && (A = 1),
        (this[r + w] = (((i / E) >> 0) - A) & 255);
    return r + s;
  };
  y.prototype.writeInt8 = function (i, r, s) {
    return (
      (i = +i),
      (r = r >>> 0),
      s || mt(this, i, r, 1, 127, -128),
      i < 0 && (i = 255 + i + 1),
      (this[r] = i & 255),
      r + 1
    );
  };
  y.prototype.writeInt16LE = function (i, r, s) {
    return (
      (i = +i),
      (r = r >>> 0),
      s || mt(this, i, r, 2, 32767, -32768),
      (this[r] = i & 255),
      (this[r + 1] = i >>> 8),
      r + 2
    );
  };
  y.prototype.writeInt16BE = function (i, r, s) {
    return (
      (i = +i),
      (r = r >>> 0),
      s || mt(this, i, r, 2, 32767, -32768),
      (this[r] = i >>> 8),
      (this[r + 1] = i & 255),
      r + 2
    );
  };
  y.prototype.writeInt32LE = function (i, r, s) {
    return (
      (i = +i),
      (r = r >>> 0),
      s || mt(this, i, r, 4, 2147483647, -2147483648),
      (this[r] = i & 255),
      (this[r + 1] = i >>> 8),
      (this[r + 2] = i >>> 16),
      (this[r + 3] = i >>> 24),
      r + 4
    );
  };
  y.prototype.writeInt32BE = function (i, r, s) {
    return (
      (i = +i),
      (r = r >>> 0),
      s || mt(this, i, r, 4, 2147483647, -2147483648),
      i < 0 && (i = 4294967295 + i + 1),
      (this[r] = i >>> 24),
      (this[r + 1] = i >>> 16),
      (this[r + 2] = i >>> 8),
      (this[r + 3] = i & 255),
      r + 4
    );
  };
  function Pr(o, i, r, s, h, d) {
    if (r + s > o.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  function Qr(o, i, r, s, h) {
    return (
      (i = +i),
      (r = r >>> 0),
      h || Pr(o, i, r, 4, 34028234663852886e22, -34028234663852886e22),
      Ut.write(o, i, r, s, 23, 4),
      r + 4
    );
  }
  y.prototype.writeFloatLE = function (i, r, s) {
    return Qr(this, i, r, !0, s);
  };
  y.prototype.writeFloatBE = function (i, r, s) {
    return Qr(this, i, r, !1, s);
  };
  function $r(o, i, r, s, h) {
    return (
      (i = +i),
      (r = r >>> 0),
      h || Pr(o, i, r, 8, 17976931348623157e292, -17976931348623157e292),
      Ut.write(o, i, r, s, 52, 8),
      r + 8
    );
  }
  y.prototype.writeDoubleLE = function (i, r, s) {
    return $r(this, i, r, !0, s);
  };
  y.prototype.writeDoubleBE = function (i, r, s) {
    return $r(this, i, r, !1, s);
  };
  y.prototype.copy = function (i, r, s, h) {
    if (!y.isBuffer(i)) throw new TypeError("argument should be a Buffer");
    if (
      (s || (s = 0),
      !h && h !== 0 && (h = this.length),
      r >= i.length && (r = i.length),
      r || (r = 0),
      h > 0 && h < s && (h = s),
      h === s || i.length === 0 || this.length === 0)
    )
      return 0;
    if (r < 0) throw new RangeError("targetStart out of bounds");
    if (s < 0 || s >= this.length) throw new RangeError("Index out of range");
    if (h < 0) throw new RangeError("sourceEnd out of bounds");
    h > this.length && (h = this.length),
      i.length - r < h - s && (h = i.length - r + s);
    var d = h - s;
    return (
      this === i && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(r, s, h)
        : Uint8Array.prototype.set.call(i, this.subarray(s, h), r),
      d
    );
  };
  y.prototype.fill = function (i, r, s, h) {
    if (typeof i == "string") {
      if (
        (typeof r == "string"
          ? ((h = r), (r = 0), (s = this.length))
          : typeof s == "string" && ((h = s), (s = this.length)),
        h !== void 0 && typeof h != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof h == "string" && !y.isEncoding(h))
        throw new TypeError("Unknown encoding: " + h);
      if (i.length === 1) {
        var d = i.charCodeAt(0);
        ((h === "utf8" && d < 128) || h === "latin1") && (i = d);
      }
    } else
      typeof i == "number"
        ? (i = i & 255)
        : typeof i == "boolean" && (i = Number(i));
    if (r < 0 || this.length < r || this.length < s)
      throw new RangeError("Out of range index");
    if (s <= r) return this;
    (r = r >>> 0), (s = s === void 0 ? this.length : s >>> 0), i || (i = 0);
    var w;
    if (typeof i == "number") for (w = r; w < s; ++w) this[w] = i;
    else {
      var E = y.isBuffer(i) ? i : y.from(i, h),
        A = E.length;
      if (A === 0)
        throw new TypeError(
          'The value "' + i + '" is invalid for argument "value"'
        );
      for (w = 0; w < s - r; ++w) this[w + r] = E[w % A];
    }
    return this;
  };
  var bi = /[^+/0-9A-Za-z-_]/g;
  function Ii(o) {
    if (((o = o.split("=")[0]), (o = o.trim().replace(bi, "")), o.length < 2))
      return "";
    for (; o.length % 4 !== 0; ) o = o + "=";
    return o;
  }
  function ur(o, i) {
    i = i || 1 / 0;
    for (var r, s = o.length, h = null, d = [], w = 0; w < s; ++w) {
      if (((r = o.charCodeAt(w)), r > 55295 && r < 57344)) {
        if (!h) {
          if (r > 56319) {
            (i -= 3) > -1 && d.push(239, 191, 189);
            continue;
          } else if (w + 1 === s) {
            (i -= 3) > -1 && d.push(239, 191, 189);
            continue;
          }
          h = r;
          continue;
        }
        if (r < 56320) {
          (i -= 3) > -1 && d.push(239, 191, 189), (h = r);
          continue;
        }
        r = (((h - 55296) << 10) | (r - 56320)) + 65536;
      } else h && (i -= 3) > -1 && d.push(239, 191, 189);
      if (((h = null), r < 128)) {
        if ((i -= 1) < 0) break;
        d.push(r);
      } else if (r < 2048) {
        if ((i -= 2) < 0) break;
        d.push((r >> 6) | 192, (r & 63) | 128);
      } else if (r < 65536) {
        if ((i -= 3) < 0) break;
        d.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128);
      } else if (r < 1114112) {
        if ((i -= 4) < 0) break;
        d.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (r & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return d;
  }
  function Ui(o) {
    for (var i = [], r = 0; r < o.length; ++r) i.push(o.charCodeAt(r) & 255);
    return i;
  }
  function Si(o, i) {
    for (var r, s, h, d = [], w = 0; w < o.length && !((i -= 2) < 0); ++w)
      (r = o.charCodeAt(w)), (s = r >> 8), (h = r % 256), d.push(h), d.push(s);
    return d;
  }
  function jr(o) {
    return or.toByteArray(Ii(o));
  }
  function Ct(o, i, r, s) {
    for (var h = 0; h < s && !(h + r >= i.length || h >= o.length); ++h)
      i[h + r] = o[h];
    return h;
  }
  function xt(o, i) {
    return (
      o instanceof i ||
      (o != null &&
        o.constructor != null &&
        o.constructor.name != null &&
        o.constructor.name === i.name)
    );
  }
  function vr(o) {
    return o !== o;
  }
  var ki = (function () {
    for (var o = "0123456789abcdef", i = new Array(256), r = 0; r < 16; ++r)
      for (var s = r * 16, h = 0; h < 16; ++h) i[s + h] = o[r] + o[h];
    return i;
  })();
});
var Ti = Tt((ri, cr) => {
  "use strict";
  _t();
  (function (o, i) {
    "use strict";
    function r(v, t) {
      if (!v) throw new Error(t || "Assertion failed");
    }
    function s(v, t) {
      v.super_ = t;
      var n = function () {};
      (n.prototype = t.prototype),
        (v.prototype = new n()),
        (v.prototype.constructor = v);
    }
    function h(v, t, n) {
      if (h.isBN(v)) return v;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        v !== null &&
          ((t === "le" || t === "be") && ((n = t), (t = 10)),
          this._init(v || 0, t || 10, n || "be"));
    }
    typeof o == "object" ? (o.exports = h) : (i.BN = h),
      (h.BN = h),
      (h.wordSize = 26);
    var d;
    try {
      typeof window < "u" && typeof window.Buffer < "u"
        ? (d = window.Buffer)
        : (d = ti().Buffer);
    } catch {}
    (h.isBN = function (t) {
      return t instanceof h
        ? !0
        : t !== null &&
            typeof t == "object" &&
            t.constructor.wordSize === h.wordSize &&
            Array.isArray(t.words);
    }),
      (h.max = function (t, n) {
        return t.cmp(n) > 0 ? t : n;
      }),
      (h.min = function (t, n) {
        return t.cmp(n) < 0 ? t : n;
      }),
      (h.prototype._init = function (t, n, f) {
        if (typeof t == "number") return this._initNumber(t, n, f);
        if (typeof t == "object") return this._initArray(t, n, f);
        n === "hex" && (n = 16),
          r(n === (n | 0) && n >= 2 && n <= 36),
          (t = t.toString().replace(/\s+/g, ""));
        var a = 0;
        t[0] === "-" && (a++, (this.negative = 1)),
          a < t.length &&
            (n === 16
              ? this._parseHex(t, a, f)
              : (this._parseBase(t, n, a),
                f === "le" && this._initArray(this.toArray(), n, f)));
      }),
      (h.prototype._initNumber = function (t, n, f) {
        t < 0 && ((this.negative = 1), (t = -t)),
          t < 67108864
            ? ((this.words = [t & 67108863]), (this.length = 1))
            : t < 4503599627370496
            ? ((this.words = [t & 67108863, (t / 67108864) & 67108863]),
              (this.length = 2))
            : (r(t < 9007199254740992),
              (this.words = [t & 67108863, (t / 67108864) & 67108863, 1]),
              (this.length = 3)),
          f === "le" && this._initArray(this.toArray(), n, f);
      }),
      (h.prototype._initArray = function (t, n, f) {
        if ((r(typeof t.length == "number"), t.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(t.length / 3)),
          (this.words = new Array(this.length));
        for (var a = 0; a < this.length; a++) this.words[a] = 0;
        var l,
          c,
          m = 0;
        if (f === "be")
          for (a = t.length - 1, l = 0; a >= 0; a -= 3)
            (c = t[a] | (t[a - 1] << 8) | (t[a - 2] << 16)),
              (this.words[l] |= (c << m) & 67108863),
              (this.words[l + 1] = (c >>> (26 - m)) & 67108863),
              (m += 24),
              m >= 26 && ((m -= 26), l++);
        else if (f === "le")
          for (a = 0, l = 0; a < t.length; a += 3)
            (c = t[a] | (t[a + 1] << 8) | (t[a + 2] << 16)),
              (this.words[l] |= (c << m) & 67108863),
              (this.words[l + 1] = (c >>> (26 - m)) & 67108863),
              (m += 24),
              m >= 26 && ((m -= 26), l++);
        return this._strip();
      });
    function w(v, t) {
      var n = v.charCodeAt(t);
      if (n >= 48 && n <= 57) return n - 48;
      if (n >= 65 && n <= 70) return n - 55;
      if (n >= 97 && n <= 102) return n - 87;
      r(!1, "Invalid character in " + v);
    }
    function E(v, t, n) {
      var f = w(v, n);
      return n - 1 >= t && (f |= w(v, n - 1) << 4), f;
    }
    h.prototype._parseHex = function (t, n, f) {
      (this.length = Math.ceil((t.length - n) / 6)),
        (this.words = new Array(this.length));
      for (var a = 0; a < this.length; a++) this.words[a] = 0;
      var l = 0,
        c = 0,
        m;
      if (f === "be")
        for (a = t.length - 1; a >= n; a -= 2)
          (m = E(t, n, a) << l),
            (this.words[c] |= m & 67108863),
            l >= 18
              ? ((l -= 18), (c += 1), (this.words[c] |= m >>> 26))
              : (l += 8);
      else {
        var u = t.length - n;
        for (a = u % 2 === 0 ? n + 1 : n; a < t.length; a += 2)
          (m = E(t, n, a) << l),
            (this.words[c] |= m & 67108863),
            l >= 18
              ? ((l -= 18), (c += 1), (this.words[c] |= m >>> 26))
              : (l += 8);
      }
      this._strip();
    };
    function A(v, t, n, f) {
      for (var a = 0, l = 0, c = Math.min(v.length, n), m = t; m < c; m++) {
        var u = v.charCodeAt(m) - 48;
        (a *= f),
          u >= 49 ? (l = u - 49 + 10) : u >= 17 ? (l = u - 17 + 10) : (l = u),
          r(u >= 0 && l < f, "Invalid character"),
          (a += l);
      }
      return a;
    }
    (h.prototype._parseBase = function (t, n, f) {
      (this.words = [0]), (this.length = 1);
      for (var a = 0, l = 1; l <= 67108863; l *= n) a++;
      a--, (l = (l / n) | 0);
      for (
        var c = t.length - f,
          m = c % a,
          u = Math.min(c, c - m) + f,
          e = 0,
          p = f;
        p < u;
        p += a
      )
        (e = A(t, p, p + a, n)),
          this.imuln(l),
          this.words[0] + e < 67108864 ? (this.words[0] += e) : this._iaddn(e);
      if (m !== 0) {
        var g = 1;
        for (e = A(t, p, t.length, n), p = 0; p < m; p++) g *= n;
        this.imuln(g),
          this.words[0] + e < 67108864 ? (this.words[0] += e) : this._iaddn(e);
      }
      this._strip();
    }),
      (h.prototype.copy = function (t) {
        t.words = new Array(this.length);
        for (var n = 0; n < this.length; n++) t.words[n] = this.words[n];
        (t.length = this.length),
          (t.negative = this.negative),
          (t.red = this.red);
      });
    function b(v, t) {
      (v.words = t.words),
        (v.length = t.length),
        (v.negative = t.negative),
        (v.red = t.red);
    }
    if (
      ((h.prototype._move = function (t) {
        b(t, this);
      }),
      (h.prototype.clone = function () {
        var t = new h(null);
        return this.copy(t), t;
      }),
      (h.prototype._expand = function (t) {
        for (; this.length < t; ) this.words[this.length++] = 0;
        return this;
      }),
      (h.prototype._strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }),
      (h.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        );
      }),
      typeof Symbol < "u" && typeof Symbol.for == "function")
    )
      try {
        h.prototype[Symbol.for("nodejs.util.inspect.custom")] = F;
      } catch {
        h.prototype.inspect = F;
      }
    else h.prototype.inspect = F;
    function F() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var _ = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000",
      ],
      dt = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      ct = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (h.prototype.toString = function (t, n) {
      (t = t || 10), (n = n | 0 || 1);
      var f;
      if (t === 16 || t === "hex") {
        f = "";
        for (var a = 0, l = 0, c = 0; c < this.length; c++) {
          var m = this.words[c],
            u = (((m << a) | l) & 16777215).toString(16);
          (l = (m >>> (24 - a)) & 16777215),
            (a += 2),
            a >= 26 && ((a -= 26), c--),
            l !== 0 || c !== this.length - 1
              ? (f = _[6 - u.length] + u + f)
              : (f = u + f);
        }
        for (l !== 0 && (f = l.toString(16) + f); f.length % n !== 0; )
          f = "0" + f;
        return this.negative !== 0 && (f = "-" + f), f;
      }
      if (t === (t | 0) && t >= 2 && t <= 36) {
        var e = dt[t],
          p = ct[t];
        f = "";
        var g = this.clone();
        for (g.negative = 0; !g.isZero(); ) {
          var M = g.modrn(p).toString(t);
          (g = g.idivn(p)),
            g.isZero() ? (f = M + f) : (f = _[e - M.length] + M + f);
        }
        for (this.isZero() && (f = "0" + f); f.length % n !== 0; ) f = "0" + f;
        return this.negative !== 0 && (f = "-" + f), f;
      }
      r(!1, "Base should be between 2 and 36");
    }),
      (h.prototype.toNumber = function () {
        var t = this.words[0];
        return (
          this.length === 2
            ? (t += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (t += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              r(!1, "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -t : t
        );
      }),
      (h.prototype.toJSON = function () {
        return this.toString(16, 2);
      }),
      d &&
        (h.prototype.toBuffer = function (t, n) {
          return this.toArrayLike(d, t, n);
        }),
      (h.prototype.toArray = function (t, n) {
        return this.toArrayLike(Array, t, n);
      });
    var At = function (t, n) {
      return t.allocUnsafe ? t.allocUnsafe(n) : new t(n);
    };
    (h.prototype.toArrayLike = function (t, n, f) {
      this._strip();
      var a = this.byteLength(),
        l = f || Math.max(1, a);
      r(a <= l, "byte array longer than desired length"),
        r(l > 0, "Requested array length <= 0");
      var c = At(t, l),
        m = n === "le" ? "LE" : "BE";
      return this["_toArrayLike" + m](c, a), c;
    }),
      (h.prototype._toArrayLikeLE = function (t, n) {
        for (var f = 0, a = 0, l = 0, c = 0; l < this.length; l++) {
          var m = (this.words[l] << c) | a;
          (t[f++] = m & 255),
            f < t.length && (t[f++] = (m >> 8) & 255),
            f < t.length && (t[f++] = (m >> 16) & 255),
            c === 6
              ? (f < t.length && (t[f++] = (m >> 24) & 255), (a = 0), (c = 0))
              : ((a = m >>> 24), (c += 2));
        }
        if (f < t.length) for (t[f++] = a; f < t.length; ) t[f++] = 0;
      }),
      (h.prototype._toArrayLikeBE = function (t, n) {
        for (var f = t.length - 1, a = 0, l = 0, c = 0; l < this.length; l++) {
          var m = (this.words[l] << c) | a;
          (t[f--] = m & 255),
            f >= 0 && (t[f--] = (m >> 8) & 255),
            f >= 0 && (t[f--] = (m >> 16) & 255),
            c === 6
              ? (f >= 0 && (t[f--] = (m >> 24) & 255), (a = 0), (c = 0))
              : ((a = m >>> 24), (c += 2));
        }
        if (f >= 0) for (t[f--] = a; f >= 0; ) t[f--] = 0;
      }),
      Math.clz32
        ? (h.prototype._countBits = function (t) {
            return 32 - Math.clz32(t);
          })
        : (h.prototype._countBits = function (t) {
            var n = t,
              f = 0;
            return (
              n >= 4096 && ((f += 13), (n >>>= 13)),
              n >= 64 && ((f += 7), (n >>>= 7)),
              n >= 8 && ((f += 4), (n >>>= 4)),
              n >= 2 && ((f += 2), (n >>>= 2)),
              f + n
            );
          }),
      (h.prototype._zeroBits = function (t) {
        if (t === 0) return 26;
        var n = t,
          f = 0;
        return (
          n & 8191 || ((f += 13), (n >>>= 13)),
          n & 127 || ((f += 7), (n >>>= 7)),
          n & 15 || ((f += 4), (n >>>= 4)),
          n & 3 || ((f += 2), (n >>>= 2)),
          n & 1 || f++,
          f
        );
      }),
      (h.prototype.bitLength = function () {
        var t = this.words[this.length - 1],
          n = this._countBits(t);
        return (this.length - 1) * 26 + n;
      });
    function Nt(v) {
      for (var t = new Array(v.bitLength()), n = 0; n < t.length; n++) {
        var f = (n / 26) | 0,
          a = n % 26;
        t[n] = (v.words[f] >>> a) & 1;
      }
      return t;
    }
    (h.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var t = 0, n = 0; n < this.length; n++) {
        var f = this._zeroBits(this.words[n]);
        if (((t += f), f !== 26)) break;
      }
      return t;
    }),
      (h.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (h.prototype.toTwos = function (t) {
        return this.negative !== 0
          ? this.abs().inotn(t).iaddn(1)
          : this.clone();
      }),
      (h.prototype.fromTwos = function (t) {
        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
      }),
      (h.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (h.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (h.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (h.prototype.iuor = function (t) {
        for (; this.length < t.length; ) this.words[this.length++] = 0;
        for (var n = 0; n < t.length; n++)
          this.words[n] = this.words[n] | t.words[n];
        return this._strip();
      }),
      (h.prototype.ior = function (t) {
        return r((this.negative | t.negative) === 0), this.iuor(t);
      }),
      (h.prototype.or = function (t) {
        return this.length > t.length
          ? this.clone().ior(t)
          : t.clone().ior(this);
      }),
      (h.prototype.uor = function (t) {
        return this.length > t.length
          ? this.clone().iuor(t)
          : t.clone().iuor(this);
      }),
      (h.prototype.iuand = function (t) {
        var n;
        this.length > t.length ? (n = t) : (n = this);
        for (var f = 0; f < n.length; f++)
          this.words[f] = this.words[f] & t.words[f];
        return (this.length = n.length), this._strip();
      }),
      (h.prototype.iand = function (t) {
        return r((this.negative | t.negative) === 0), this.iuand(t);
      }),
      (h.prototype.and = function (t) {
        return this.length > t.length
          ? this.clone().iand(t)
          : t.clone().iand(this);
      }),
      (h.prototype.uand = function (t) {
        return this.length > t.length
          ? this.clone().iuand(t)
          : t.clone().iuand(this);
      }),
      (h.prototype.iuxor = function (t) {
        var n, f;
        this.length > t.length ? ((n = this), (f = t)) : ((n = t), (f = this));
        for (var a = 0; a < f.length; a++)
          this.words[a] = n.words[a] ^ f.words[a];
        if (this !== n) for (; a < n.length; a++) this.words[a] = n.words[a];
        return (this.length = n.length), this._strip();
      }),
      (h.prototype.ixor = function (t) {
        return r((this.negative | t.negative) === 0), this.iuxor(t);
      }),
      (h.prototype.xor = function (t) {
        return this.length > t.length
          ? this.clone().ixor(t)
          : t.clone().ixor(this);
      }),
      (h.prototype.uxor = function (t) {
        return this.length > t.length
          ? this.clone().iuxor(t)
          : t.clone().iuxor(this);
      }),
      (h.prototype.inotn = function (t) {
        r(typeof t == "number" && t >= 0);
        var n = Math.ceil(t / 26) | 0,
          f = t % 26;
        this._expand(n), f > 0 && n--;
        for (var a = 0; a < n; a++) this.words[a] = ~this.words[a] & 67108863;
        return (
          f > 0 && (this.words[a] = ~this.words[a] & (67108863 >> (26 - f))),
          this._strip()
        );
      }),
      (h.prototype.notn = function (t) {
        return this.clone().inotn(t);
      }),
      (h.prototype.setn = function (t, n) {
        r(typeof t == "number" && t >= 0);
        var f = (t / 26) | 0,
          a = t % 26;
        return (
          this._expand(f + 1),
          n
            ? (this.words[f] = this.words[f] | (1 << a))
            : (this.words[f] = this.words[f] & ~(1 << a)),
          this._strip()
        );
      }),
      (h.prototype.iadd = function (t) {
        var n;
        if (this.negative !== 0 && t.negative === 0)
          return (
            (this.negative = 0),
            (n = this.isub(t)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this.negative === 0 && t.negative !== 0)
          return (
            (t.negative = 0),
            (n = this.isub(t)),
            (t.negative = 1),
            n._normSign()
          );
        var f, a;
        this.length > t.length ? ((f = this), (a = t)) : ((f = t), (a = this));
        for (var l = 0, c = 0; c < a.length; c++)
          (n = (f.words[c] | 0) + (a.words[c] | 0) + l),
            (this.words[c] = n & 67108863),
            (l = n >>> 26);
        for (; l !== 0 && c < f.length; c++)
          (n = (f.words[c] | 0) + l),
            (this.words[c] = n & 67108863),
            (l = n >>> 26);
        if (((this.length = f.length), l !== 0))
          (this.words[this.length] = l), this.length++;
        else if (f !== this)
          for (; c < f.length; c++) this.words[c] = f.words[c];
        return this;
      }),
      (h.prototype.add = function (t) {
        var n;
        return t.negative !== 0 && this.negative === 0
          ? ((t.negative = 0), (n = this.sub(t)), (t.negative ^= 1), n)
          : t.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (n = t.sub(this)), (this.negative = 1), n)
          : this.length > t.length
          ? this.clone().iadd(t)
          : t.clone().iadd(this);
      }),
      (h.prototype.isub = function (t) {
        if (t.negative !== 0) {
          t.negative = 0;
          var n = this.iadd(t);
          return (t.negative = 1), n._normSign();
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(t),
            (this.negative = 1),
            this._normSign()
          );
        var f = this.cmp(t);
        if (f === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          );
        var a, l;
        f > 0 ? ((a = this), (l = t)) : ((a = t), (l = this));
        for (var c = 0, m = 0; m < l.length; m++)
          (n = (a.words[m] | 0) - (l.words[m] | 0) + c),
            (c = n >> 26),
            (this.words[m] = n & 67108863);
        for (; c !== 0 && m < a.length; m++)
          (n = (a.words[m] | 0) + c),
            (c = n >> 26),
            (this.words[m] = n & 67108863);
        if (c === 0 && m < a.length && a !== this)
          for (; m < a.length; m++) this.words[m] = a.words[m];
        return (
          (this.length = Math.max(this.length, m)),
          a !== this && (this.negative = 1),
          this._strip()
        );
      }),
      (h.prototype.sub = function (t) {
        return this.clone().isub(t);
      });
    function mr(v, t, n) {
      n.negative = t.negative ^ v.negative;
      var f = (v.length + t.length) | 0;
      (n.length = f), (f = (f - 1) | 0);
      var a = v.words[0] | 0,
        l = t.words[0] | 0,
        c = a * l,
        m = c & 67108863,
        u = (c / 67108864) | 0;
      n.words[0] = m;
      for (var e = 1; e < f; e++) {
        for (
          var p = u >>> 26,
            g = u & 67108863,
            M = Math.min(e, t.length - 1),
            x = Math.max(0, e - v.length + 1);
          x <= M;
          x++
        ) {
          var B = (e - x) | 0;
          (a = v.words[B] | 0),
            (l = t.words[x] | 0),
            (c = a * l + g),
            (p += (c / 67108864) | 0),
            (g = c & 67108863);
        }
        (n.words[e] = g | 0), (u = p | 0);
      }
      return u !== 0 ? (n.words[e] = u | 0) : n.length--, n._strip();
    }
    var dr = function (t, n, f) {
      var a = t.words,
        l = n.words,
        c = f.words,
        m = 0,
        u,
        e,
        p,
        g = a[0] | 0,
        M = g & 8191,
        x = g >>> 13,
        B = a[1] | 0,
        I = B & 8191,
        U = B >>> 13,
        Bt = a[2] | 0,
        S = Bt & 8191,
        k = Bt >>> 13,
        xr = a[3] | 0,
        R = xr & 8191,
        L = xr >>> 13,
        Er = a[4] | 0,
        C = Er & 8191,
        N = Er >>> 13,
        Ar = a[5] | 0,
        q = Ar & 8191,
        D = Ar >>> 13,
        Br = a[6] | 0,
        Z = Br & 8191,
        z = Br >>> 13,
        _r = a[7] | 0,
        O = _r & 8191,
        H = _r >>> 13,
        Fr = a[8] | 0,
        K = Fr & 8191,
        W = Fr >>> 13,
        br = a[9] | 0,
        Y = br & 8191,
        J = br >>> 13,
        Ir = l[0] | 0,
        X = Ir & 8191,
        G = Ir >>> 13,
        Ur = l[1] | 0,
        V = Ur & 8191,
        P = Ur >>> 13,
        Sr = l[2] | 0,
        Q = Sr & 8191,
        $ = Sr >>> 13,
        kr = l[3] | 0,
        j = kr & 8191,
        tt = kr >>> 13,
        Tr = l[4] | 0,
        rt = Tr & 8191,
        it = Tr >>> 13,
        Rr = l[5] | 0,
        et = Rr & 8191,
        nt = Rr >>> 13,
        Lr = l[6] | 0,
        ht = Lr & 8191,
        ft = Lr >>> 13,
        Cr = l[7] | 0,
        ot = Cr & 8191,
        at = Cr >>> 13,
        Nr = l[8] | 0,
        st = Nr & 8191,
        ut = Nr >>> 13,
        qr = l[9] | 0,
        lt = qr & 8191,
        pt = qr >>> 13;
      (f.negative = t.negative ^ n.negative),
        (f.length = 19),
        (u = Math.imul(M, X)),
        (e = Math.imul(M, G)),
        (e = (e + Math.imul(x, X)) | 0),
        (p = Math.imul(x, G));
      var Zt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Zt >>> 26)) | 0),
        (Zt &= 67108863),
        (u = Math.imul(I, X)),
        (e = Math.imul(I, G)),
        (e = (e + Math.imul(U, X)) | 0),
        (p = Math.imul(U, G)),
        (u = (u + Math.imul(M, V)) | 0),
        (e = (e + Math.imul(M, P)) | 0),
        (e = (e + Math.imul(x, V)) | 0),
        (p = (p + Math.imul(x, P)) | 0);
      var zt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (zt >>> 26)) | 0),
        (zt &= 67108863),
        (u = Math.imul(S, X)),
        (e = Math.imul(S, G)),
        (e = (e + Math.imul(k, X)) | 0),
        (p = Math.imul(k, G)),
        (u = (u + Math.imul(I, V)) | 0),
        (e = (e + Math.imul(I, P)) | 0),
        (e = (e + Math.imul(U, V)) | 0),
        (p = (p + Math.imul(U, P)) | 0),
        (u = (u + Math.imul(M, Q)) | 0),
        (e = (e + Math.imul(M, $)) | 0),
        (e = (e + Math.imul(x, Q)) | 0),
        (p = (p + Math.imul(x, $)) | 0);
      var Ot = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Ot >>> 26)) | 0),
        (Ot &= 67108863),
        (u = Math.imul(R, X)),
        (e = Math.imul(R, G)),
        (e = (e + Math.imul(L, X)) | 0),
        (p = Math.imul(L, G)),
        (u = (u + Math.imul(S, V)) | 0),
        (e = (e + Math.imul(S, P)) | 0),
        (e = (e + Math.imul(k, V)) | 0),
        (p = (p + Math.imul(k, P)) | 0),
        (u = (u + Math.imul(I, Q)) | 0),
        (e = (e + Math.imul(I, $)) | 0),
        (e = (e + Math.imul(U, Q)) | 0),
        (p = (p + Math.imul(U, $)) | 0),
        (u = (u + Math.imul(M, j)) | 0),
        (e = (e + Math.imul(M, tt)) | 0),
        (e = (e + Math.imul(x, j)) | 0),
        (p = (p + Math.imul(x, tt)) | 0);
      var Ht = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Ht >>> 26)) | 0),
        (Ht &= 67108863),
        (u = Math.imul(C, X)),
        (e = Math.imul(C, G)),
        (e = (e + Math.imul(N, X)) | 0),
        (p = Math.imul(N, G)),
        (u = (u + Math.imul(R, V)) | 0),
        (e = (e + Math.imul(R, P)) | 0),
        (e = (e + Math.imul(L, V)) | 0),
        (p = (p + Math.imul(L, P)) | 0),
        (u = (u + Math.imul(S, Q)) | 0),
        (e = (e + Math.imul(S, $)) | 0),
        (e = (e + Math.imul(k, Q)) | 0),
        (p = (p + Math.imul(k, $)) | 0),
        (u = (u + Math.imul(I, j)) | 0),
        (e = (e + Math.imul(I, tt)) | 0),
        (e = (e + Math.imul(U, j)) | 0),
        (p = (p + Math.imul(U, tt)) | 0),
        (u = (u + Math.imul(M, rt)) | 0),
        (e = (e + Math.imul(M, it)) | 0),
        (e = (e + Math.imul(x, rt)) | 0),
        (p = (p + Math.imul(x, it)) | 0);
      var Kt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Kt >>> 26)) | 0),
        (Kt &= 67108863),
        (u = Math.imul(q, X)),
        (e = Math.imul(q, G)),
        (e = (e + Math.imul(D, X)) | 0),
        (p = Math.imul(D, G)),
        (u = (u + Math.imul(C, V)) | 0),
        (e = (e + Math.imul(C, P)) | 0),
        (e = (e + Math.imul(N, V)) | 0),
        (p = (p + Math.imul(N, P)) | 0),
        (u = (u + Math.imul(R, Q)) | 0),
        (e = (e + Math.imul(R, $)) | 0),
        (e = (e + Math.imul(L, Q)) | 0),
        (p = (p + Math.imul(L, $)) | 0),
        (u = (u + Math.imul(S, j)) | 0),
        (e = (e + Math.imul(S, tt)) | 0),
        (e = (e + Math.imul(k, j)) | 0),
        (p = (p + Math.imul(k, tt)) | 0),
        (u = (u + Math.imul(I, rt)) | 0),
        (e = (e + Math.imul(I, it)) | 0),
        (e = (e + Math.imul(U, rt)) | 0),
        (p = (p + Math.imul(U, it)) | 0),
        (u = (u + Math.imul(M, et)) | 0),
        (e = (e + Math.imul(M, nt)) | 0),
        (e = (e + Math.imul(x, et)) | 0),
        (p = (p + Math.imul(x, nt)) | 0);
      var Wt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Wt >>> 26)) | 0),
        (Wt &= 67108863),
        (u = Math.imul(Z, X)),
        (e = Math.imul(Z, G)),
        (e = (e + Math.imul(z, X)) | 0),
        (p = Math.imul(z, G)),
        (u = (u + Math.imul(q, V)) | 0),
        (e = (e + Math.imul(q, P)) | 0),
        (e = (e + Math.imul(D, V)) | 0),
        (p = (p + Math.imul(D, P)) | 0),
        (u = (u + Math.imul(C, Q)) | 0),
        (e = (e + Math.imul(C, $)) | 0),
        (e = (e + Math.imul(N, Q)) | 0),
        (p = (p + Math.imul(N, $)) | 0),
        (u = (u + Math.imul(R, j)) | 0),
        (e = (e + Math.imul(R, tt)) | 0),
        (e = (e + Math.imul(L, j)) | 0),
        (p = (p + Math.imul(L, tt)) | 0),
        (u = (u + Math.imul(S, rt)) | 0),
        (e = (e + Math.imul(S, it)) | 0),
        (e = (e + Math.imul(k, rt)) | 0),
        (p = (p + Math.imul(k, it)) | 0),
        (u = (u + Math.imul(I, et)) | 0),
        (e = (e + Math.imul(I, nt)) | 0),
        (e = (e + Math.imul(U, et)) | 0),
        (p = (p + Math.imul(U, nt)) | 0),
        (u = (u + Math.imul(M, ht)) | 0),
        (e = (e + Math.imul(M, ft)) | 0),
        (e = (e + Math.imul(x, ht)) | 0),
        (p = (p + Math.imul(x, ft)) | 0);
      var Yt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Yt >>> 26)) | 0),
        (Yt &= 67108863),
        (u = Math.imul(O, X)),
        (e = Math.imul(O, G)),
        (e = (e + Math.imul(H, X)) | 0),
        (p = Math.imul(H, G)),
        (u = (u + Math.imul(Z, V)) | 0),
        (e = (e + Math.imul(Z, P)) | 0),
        (e = (e + Math.imul(z, V)) | 0),
        (p = (p + Math.imul(z, P)) | 0),
        (u = (u + Math.imul(q, Q)) | 0),
        (e = (e + Math.imul(q, $)) | 0),
        (e = (e + Math.imul(D, Q)) | 0),
        (p = (p + Math.imul(D, $)) | 0),
        (u = (u + Math.imul(C, j)) | 0),
        (e = (e + Math.imul(C, tt)) | 0),
        (e = (e + Math.imul(N, j)) | 0),
        (p = (p + Math.imul(N, tt)) | 0),
        (u = (u + Math.imul(R, rt)) | 0),
        (e = (e + Math.imul(R, it)) | 0),
        (e = (e + Math.imul(L, rt)) | 0),
        (p = (p + Math.imul(L, it)) | 0),
        (u = (u + Math.imul(S, et)) | 0),
        (e = (e + Math.imul(S, nt)) | 0),
        (e = (e + Math.imul(k, et)) | 0),
        (p = (p + Math.imul(k, nt)) | 0),
        (u = (u + Math.imul(I, ht)) | 0),
        (e = (e + Math.imul(I, ft)) | 0),
        (e = (e + Math.imul(U, ht)) | 0),
        (p = (p + Math.imul(U, ft)) | 0),
        (u = (u + Math.imul(M, ot)) | 0),
        (e = (e + Math.imul(M, at)) | 0),
        (e = (e + Math.imul(x, ot)) | 0),
        (p = (p + Math.imul(x, at)) | 0);
      var Jt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Jt >>> 26)) | 0),
        (Jt &= 67108863),
        (u = Math.imul(K, X)),
        (e = Math.imul(K, G)),
        (e = (e + Math.imul(W, X)) | 0),
        (p = Math.imul(W, G)),
        (u = (u + Math.imul(O, V)) | 0),
        (e = (e + Math.imul(O, P)) | 0),
        (e = (e + Math.imul(H, V)) | 0),
        (p = (p + Math.imul(H, P)) | 0),
        (u = (u + Math.imul(Z, Q)) | 0),
        (e = (e + Math.imul(Z, $)) | 0),
        (e = (e + Math.imul(z, Q)) | 0),
        (p = (p + Math.imul(z, $)) | 0),
        (u = (u + Math.imul(q, j)) | 0),
        (e = (e + Math.imul(q, tt)) | 0),
        (e = (e + Math.imul(D, j)) | 0),
        (p = (p + Math.imul(D, tt)) | 0),
        (u = (u + Math.imul(C, rt)) | 0),
        (e = (e + Math.imul(C, it)) | 0),
        (e = (e + Math.imul(N, rt)) | 0),
        (p = (p + Math.imul(N, it)) | 0),
        (u = (u + Math.imul(R, et)) | 0),
        (e = (e + Math.imul(R, nt)) | 0),
        (e = (e + Math.imul(L, et)) | 0),
        (p = (p + Math.imul(L, nt)) | 0),
        (u = (u + Math.imul(S, ht)) | 0),
        (e = (e + Math.imul(S, ft)) | 0),
        (e = (e + Math.imul(k, ht)) | 0),
        (p = (p + Math.imul(k, ft)) | 0),
        (u = (u + Math.imul(I, ot)) | 0),
        (e = (e + Math.imul(I, at)) | 0),
        (e = (e + Math.imul(U, ot)) | 0),
        (p = (p + Math.imul(U, at)) | 0),
        (u = (u + Math.imul(M, st)) | 0),
        (e = (e + Math.imul(M, ut)) | 0),
        (e = (e + Math.imul(x, st)) | 0),
        (p = (p + Math.imul(x, ut)) | 0);
      var Xt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Xt >>> 26)) | 0),
        (Xt &= 67108863),
        (u = Math.imul(Y, X)),
        (e = Math.imul(Y, G)),
        (e = (e + Math.imul(J, X)) | 0),
        (p = Math.imul(J, G)),
        (u = (u + Math.imul(K, V)) | 0),
        (e = (e + Math.imul(K, P)) | 0),
        (e = (e + Math.imul(W, V)) | 0),
        (p = (p + Math.imul(W, P)) | 0),
        (u = (u + Math.imul(O, Q)) | 0),
        (e = (e + Math.imul(O, $)) | 0),
        (e = (e + Math.imul(H, Q)) | 0),
        (p = (p + Math.imul(H, $)) | 0),
        (u = (u + Math.imul(Z, j)) | 0),
        (e = (e + Math.imul(Z, tt)) | 0),
        (e = (e + Math.imul(z, j)) | 0),
        (p = (p + Math.imul(z, tt)) | 0),
        (u = (u + Math.imul(q, rt)) | 0),
        (e = (e + Math.imul(q, it)) | 0),
        (e = (e + Math.imul(D, rt)) | 0),
        (p = (p + Math.imul(D, it)) | 0),
        (u = (u + Math.imul(C, et)) | 0),
        (e = (e + Math.imul(C, nt)) | 0),
        (e = (e + Math.imul(N, et)) | 0),
        (p = (p + Math.imul(N, nt)) | 0),
        (u = (u + Math.imul(R, ht)) | 0),
        (e = (e + Math.imul(R, ft)) | 0),
        (e = (e + Math.imul(L, ht)) | 0),
        (p = (p + Math.imul(L, ft)) | 0),
        (u = (u + Math.imul(S, ot)) | 0),
        (e = (e + Math.imul(S, at)) | 0),
        (e = (e + Math.imul(k, ot)) | 0),
        (p = (p + Math.imul(k, at)) | 0),
        (u = (u + Math.imul(I, st)) | 0),
        (e = (e + Math.imul(I, ut)) | 0),
        (e = (e + Math.imul(U, st)) | 0),
        (p = (p + Math.imul(U, ut)) | 0),
        (u = (u + Math.imul(M, lt)) | 0),
        (e = (e + Math.imul(M, pt)) | 0),
        (e = (e + Math.imul(x, lt)) | 0),
        (p = (p + Math.imul(x, pt)) | 0);
      var Gt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Gt >>> 26)) | 0),
        (Gt &= 67108863),
        (u = Math.imul(Y, V)),
        (e = Math.imul(Y, P)),
        (e = (e + Math.imul(J, V)) | 0),
        (p = Math.imul(J, P)),
        (u = (u + Math.imul(K, Q)) | 0),
        (e = (e + Math.imul(K, $)) | 0),
        (e = (e + Math.imul(W, Q)) | 0),
        (p = (p + Math.imul(W, $)) | 0),
        (u = (u + Math.imul(O, j)) | 0),
        (e = (e + Math.imul(O, tt)) | 0),
        (e = (e + Math.imul(H, j)) | 0),
        (p = (p + Math.imul(H, tt)) | 0),
        (u = (u + Math.imul(Z, rt)) | 0),
        (e = (e + Math.imul(Z, it)) | 0),
        (e = (e + Math.imul(z, rt)) | 0),
        (p = (p + Math.imul(z, it)) | 0),
        (u = (u + Math.imul(q, et)) | 0),
        (e = (e + Math.imul(q, nt)) | 0),
        (e = (e + Math.imul(D, et)) | 0),
        (p = (p + Math.imul(D, nt)) | 0),
        (u = (u + Math.imul(C, ht)) | 0),
        (e = (e + Math.imul(C, ft)) | 0),
        (e = (e + Math.imul(N, ht)) | 0),
        (p = (p + Math.imul(N, ft)) | 0),
        (u = (u + Math.imul(R, ot)) | 0),
        (e = (e + Math.imul(R, at)) | 0),
        (e = (e + Math.imul(L, ot)) | 0),
        (p = (p + Math.imul(L, at)) | 0),
        (u = (u + Math.imul(S, st)) | 0),
        (e = (e + Math.imul(S, ut)) | 0),
        (e = (e + Math.imul(k, st)) | 0),
        (p = (p + Math.imul(k, ut)) | 0),
        (u = (u + Math.imul(I, lt)) | 0),
        (e = (e + Math.imul(I, pt)) | 0),
        (e = (e + Math.imul(U, lt)) | 0),
        (p = (p + Math.imul(U, pt)) | 0);
      var Vt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Vt >>> 26)) | 0),
        (Vt &= 67108863),
        (u = Math.imul(Y, Q)),
        (e = Math.imul(Y, $)),
        (e = (e + Math.imul(J, Q)) | 0),
        (p = Math.imul(J, $)),
        (u = (u + Math.imul(K, j)) | 0),
        (e = (e + Math.imul(K, tt)) | 0),
        (e = (e + Math.imul(W, j)) | 0),
        (p = (p + Math.imul(W, tt)) | 0),
        (u = (u + Math.imul(O, rt)) | 0),
        (e = (e + Math.imul(O, it)) | 0),
        (e = (e + Math.imul(H, rt)) | 0),
        (p = (p + Math.imul(H, it)) | 0),
        (u = (u + Math.imul(Z, et)) | 0),
        (e = (e + Math.imul(Z, nt)) | 0),
        (e = (e + Math.imul(z, et)) | 0),
        (p = (p + Math.imul(z, nt)) | 0),
        (u = (u + Math.imul(q, ht)) | 0),
        (e = (e + Math.imul(q, ft)) | 0),
        (e = (e + Math.imul(D, ht)) | 0),
        (p = (p + Math.imul(D, ft)) | 0),
        (u = (u + Math.imul(C, ot)) | 0),
        (e = (e + Math.imul(C, at)) | 0),
        (e = (e + Math.imul(N, ot)) | 0),
        (p = (p + Math.imul(N, at)) | 0),
        (u = (u + Math.imul(R, st)) | 0),
        (e = (e + Math.imul(R, ut)) | 0),
        (e = (e + Math.imul(L, st)) | 0),
        (p = (p + Math.imul(L, ut)) | 0),
        (u = (u + Math.imul(S, lt)) | 0),
        (e = (e + Math.imul(S, pt)) | 0),
        (e = (e + Math.imul(k, lt)) | 0),
        (p = (p + Math.imul(k, pt)) | 0);
      var Pt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Pt >>> 26)) | 0),
        (Pt &= 67108863),
        (u = Math.imul(Y, j)),
        (e = Math.imul(Y, tt)),
        (e = (e + Math.imul(J, j)) | 0),
        (p = Math.imul(J, tt)),
        (u = (u + Math.imul(K, rt)) | 0),
        (e = (e + Math.imul(K, it)) | 0),
        (e = (e + Math.imul(W, rt)) | 0),
        (p = (p + Math.imul(W, it)) | 0),
        (u = (u + Math.imul(O, et)) | 0),
        (e = (e + Math.imul(O, nt)) | 0),
        (e = (e + Math.imul(H, et)) | 0),
        (p = (p + Math.imul(H, nt)) | 0),
        (u = (u + Math.imul(Z, ht)) | 0),
        (e = (e + Math.imul(Z, ft)) | 0),
        (e = (e + Math.imul(z, ht)) | 0),
        (p = (p + Math.imul(z, ft)) | 0),
        (u = (u + Math.imul(q, ot)) | 0),
        (e = (e + Math.imul(q, at)) | 0),
        (e = (e + Math.imul(D, ot)) | 0),
        (p = (p + Math.imul(D, at)) | 0),
        (u = (u + Math.imul(C, st)) | 0),
        (e = (e + Math.imul(C, ut)) | 0),
        (e = (e + Math.imul(N, st)) | 0),
        (p = (p + Math.imul(N, ut)) | 0),
        (u = (u + Math.imul(R, lt)) | 0),
        (e = (e + Math.imul(R, pt)) | 0),
        (e = (e + Math.imul(L, lt)) | 0),
        (p = (p + Math.imul(L, pt)) | 0);
      var Qt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (Qt >>> 26)) | 0),
        (Qt &= 67108863),
        (u = Math.imul(Y, rt)),
        (e = Math.imul(Y, it)),
        (e = (e + Math.imul(J, rt)) | 0),
        (p = Math.imul(J, it)),
        (u = (u + Math.imul(K, et)) | 0),
        (e = (e + Math.imul(K, nt)) | 0),
        (e = (e + Math.imul(W, et)) | 0),
        (p = (p + Math.imul(W, nt)) | 0),
        (u = (u + Math.imul(O, ht)) | 0),
        (e = (e + Math.imul(O, ft)) | 0),
        (e = (e + Math.imul(H, ht)) | 0),
        (p = (p + Math.imul(H, ft)) | 0),
        (u = (u + Math.imul(Z, ot)) | 0),
        (e = (e + Math.imul(Z, at)) | 0),
        (e = (e + Math.imul(z, ot)) | 0),
        (p = (p + Math.imul(z, at)) | 0),
        (u = (u + Math.imul(q, st)) | 0),
        (e = (e + Math.imul(q, ut)) | 0),
        (e = (e + Math.imul(D, st)) | 0),
        (p = (p + Math.imul(D, ut)) | 0),
        (u = (u + Math.imul(C, lt)) | 0),
        (e = (e + Math.imul(C, pt)) | 0),
        (e = (e + Math.imul(N, lt)) | 0),
        (p = (p + Math.imul(N, pt)) | 0);
      var $t = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + ($t >>> 26)) | 0),
        ($t &= 67108863),
        (u = Math.imul(Y, et)),
        (e = Math.imul(Y, nt)),
        (e = (e + Math.imul(J, et)) | 0),
        (p = Math.imul(J, nt)),
        (u = (u + Math.imul(K, ht)) | 0),
        (e = (e + Math.imul(K, ft)) | 0),
        (e = (e + Math.imul(W, ht)) | 0),
        (p = (p + Math.imul(W, ft)) | 0),
        (u = (u + Math.imul(O, ot)) | 0),
        (e = (e + Math.imul(O, at)) | 0),
        (e = (e + Math.imul(H, ot)) | 0),
        (p = (p + Math.imul(H, at)) | 0),
        (u = (u + Math.imul(Z, st)) | 0),
        (e = (e + Math.imul(Z, ut)) | 0),
        (e = (e + Math.imul(z, st)) | 0),
        (p = (p + Math.imul(z, ut)) | 0),
        (u = (u + Math.imul(q, lt)) | 0),
        (e = (e + Math.imul(q, pt)) | 0),
        (e = (e + Math.imul(D, lt)) | 0),
        (p = (p + Math.imul(D, pt)) | 0);
      var jt = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (jt >>> 26)) | 0),
        (jt &= 67108863),
        (u = Math.imul(Y, ht)),
        (e = Math.imul(Y, ft)),
        (e = (e + Math.imul(J, ht)) | 0),
        (p = Math.imul(J, ft)),
        (u = (u + Math.imul(K, ot)) | 0),
        (e = (e + Math.imul(K, at)) | 0),
        (e = (e + Math.imul(W, ot)) | 0),
        (p = (p + Math.imul(W, at)) | 0),
        (u = (u + Math.imul(O, st)) | 0),
        (e = (e + Math.imul(O, ut)) | 0),
        (e = (e + Math.imul(H, st)) | 0),
        (p = (p + Math.imul(H, ut)) | 0),
        (u = (u + Math.imul(Z, lt)) | 0),
        (e = (e + Math.imul(Z, pt)) | 0),
        (e = (e + Math.imul(z, lt)) | 0),
        (p = (p + Math.imul(z, pt)) | 0);
      var tr = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (tr >>> 26)) | 0),
        (tr &= 67108863),
        (u = Math.imul(Y, ot)),
        (e = Math.imul(Y, at)),
        (e = (e + Math.imul(J, ot)) | 0),
        (p = Math.imul(J, at)),
        (u = (u + Math.imul(K, st)) | 0),
        (e = (e + Math.imul(K, ut)) | 0),
        (e = (e + Math.imul(W, st)) | 0),
        (p = (p + Math.imul(W, ut)) | 0),
        (u = (u + Math.imul(O, lt)) | 0),
        (e = (e + Math.imul(O, pt)) | 0),
        (e = (e + Math.imul(H, lt)) | 0),
        (p = (p + Math.imul(H, pt)) | 0);
      var rr = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (rr >>> 26)) | 0),
        (rr &= 67108863),
        (u = Math.imul(Y, st)),
        (e = Math.imul(Y, ut)),
        (e = (e + Math.imul(J, st)) | 0),
        (p = Math.imul(J, ut)),
        (u = (u + Math.imul(K, lt)) | 0),
        (e = (e + Math.imul(K, pt)) | 0),
        (e = (e + Math.imul(W, lt)) | 0),
        (p = (p + Math.imul(W, pt)) | 0);
      var ir = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      (m = (((p + (e >>> 13)) | 0) + (ir >>> 26)) | 0),
        (ir &= 67108863),
        (u = Math.imul(Y, lt)),
        (e = Math.imul(Y, pt)),
        (e = (e + Math.imul(J, lt)) | 0),
        (p = Math.imul(J, pt));
      var er = (((m + u) | 0) + ((e & 8191) << 13)) | 0;
      return (
        (m = (((p + (e >>> 13)) | 0) + (er >>> 26)) | 0),
        (er &= 67108863),
        (c[0] = Zt),
        (c[1] = zt),
        (c[2] = Ot),
        (c[3] = Ht),
        (c[4] = Kt),
        (c[5] = Wt),
        (c[6] = Yt),
        (c[7] = Jt),
        (c[8] = Xt),
        (c[9] = Gt),
        (c[10] = Vt),
        (c[11] = Pt),
        (c[12] = Qt),
        (c[13] = $t),
        (c[14] = jt),
        (c[15] = tr),
        (c[16] = rr),
        (c[17] = ir),
        (c[18] = er),
        m !== 0 && ((c[19] = m), f.length++),
        f
      );
    };
    Math.imul || (dr = mr);
    function wr(v, t, n) {
      (n.negative = t.negative ^ v.negative), (n.length = v.length + t.length);
      for (var f = 0, a = 0, l = 0; l < n.length - 1; l++) {
        var c = a;
        a = 0;
        for (
          var m = f & 67108863,
            u = Math.min(l, t.length - 1),
            e = Math.max(0, l - v.length + 1);
          e <= u;
          e++
        ) {
          var p = l - e,
            g = v.words[p] | 0,
            M = t.words[e] | 0,
            x = g * M,
            B = x & 67108863;
          (c = (c + ((x / 67108864) | 0)) | 0),
            (B = (B + m) | 0),
            (m = B & 67108863),
            (c = (c + (B >>> 26)) | 0),
            (a += c >>> 26),
            (c &= 67108863);
        }
        (n.words[l] = m), (f = c), (c = a);
      }
      return f !== 0 ? (n.words[l] = f) : n.length--, n._strip();
    }
    function yr(v, t, n) {
      return wr(v, t, n);
    }
    h.prototype.mulTo = function (t, n) {
      var f,
        a = this.length + t.length;
      return (
        this.length === 10 && t.length === 10
          ? (f = dr(this, t, n))
          : a < 63
          ? (f = mr(this, t, n))
          : a < 1024
          ? (f = wr(this, t, n))
          : (f = yr(this, t, n)),
        f
      );
    };
    function gt(v, t) {
      (this.x = v), (this.y = t);
    }
    (gt.prototype.makeRBT = function (t) {
      for (
        var n = new Array(t), f = h.prototype._countBits(t) - 1, a = 0;
        a < t;
        a++
      )
        n[a] = this.revBin(a, f, t);
      return n;
    }),
      (gt.prototype.revBin = function (t, n, f) {
        if (t === 0 || t === f - 1) return t;
        for (var a = 0, l = 0; l < n; l++)
          (a |= (t & 1) << (n - l - 1)), (t >>= 1);
        return a;
      }),
      (gt.prototype.permute = function (t, n, f, a, l, c) {
        for (var m = 0; m < c; m++) (a[m] = n[t[m]]), (l[m] = f[t[m]]);
      }),
      (gt.prototype.transform = function (t, n, f, a, l, c) {
        this.permute(c, t, n, f, a, l);
        for (var m = 1; m < l; m <<= 1)
          for (
            var u = m << 1,
              e = Math.cos((2 * Math.PI) / u),
              p = Math.sin((2 * Math.PI) / u),
              g = 0;
            g < l;
            g += u
          )
            for (var M = e, x = p, B = 0; B < m; B++) {
              var I = f[g + B],
                U = a[g + B],
                Bt = f[g + B + m],
                S = a[g + B + m],
                k = M * Bt - x * S;
              (S = M * S + x * Bt),
                (Bt = k),
                (f[g + B] = I + Bt),
                (a[g + B] = U + S),
                (f[g + B + m] = I - Bt),
                (a[g + B + m] = U - S),
                B !== u && ((k = e * M - p * x), (x = e * x + p * M), (M = k));
            }
      }),
      (gt.prototype.guessLen13b = function (t, n) {
        var f = Math.max(n, t) | 1,
          a = f & 1,
          l = 0;
        for (f = (f / 2) | 0; f; f = f >>> 1) l++;
        return 1 << (l + 1 + a);
      }),
      (gt.prototype.conjugate = function (t, n, f) {
        if (!(f <= 1))
          for (var a = 0; a < f / 2; a++) {
            var l = t[a];
            (t[a] = t[f - a - 1]),
              (t[f - a - 1] = l),
              (l = n[a]),
              (n[a] = -n[f - a - 1]),
              (n[f - a - 1] = -l);
          }
      }),
      (gt.prototype.normalize13b = function (t, n) {
        for (var f = 0, a = 0; a < n / 2; a++) {
          var l =
            Math.round(t[2 * a + 1] / n) * 8192 + Math.round(t[2 * a] / n) + f;
          (t[a] = l & 67108863),
            l < 67108864 ? (f = 0) : (f = (l / 67108864) | 0);
        }
        return t;
      }),
      (gt.prototype.convert13b = function (t, n, f, a) {
        for (var l = 0, c = 0; c < n; c++)
          (l = l + (t[c] | 0)),
            (f[2 * c] = l & 8191),
            (l = l >>> 13),
            (f[2 * c + 1] = l & 8191),
            (l = l >>> 13);
        for (c = 2 * n; c < a; ++c) f[c] = 0;
        r(l === 0), r((l & -8192) === 0);
      }),
      (gt.prototype.stub = function (t) {
        for (var n = new Array(t), f = 0; f < t; f++) n[f] = 0;
        return n;
      }),
      (gt.prototype.mulp = function (t, n, f) {
        var a = 2 * this.guessLen13b(t.length, n.length),
          l = this.makeRBT(a),
          c = this.stub(a),
          m = new Array(a),
          u = new Array(a),
          e = new Array(a),
          p = new Array(a),
          g = new Array(a),
          M = new Array(a),
          x = f.words;
        (x.length = a),
          this.convert13b(t.words, t.length, m, a),
          this.convert13b(n.words, n.length, p, a),
          this.transform(m, c, u, e, a, l),
          this.transform(p, c, g, M, a, l);
        for (var B = 0; B < a; B++) {
          var I = u[B] * g[B] - e[B] * M[B];
          (e[B] = u[B] * M[B] + e[B] * g[B]), (u[B] = I);
        }
        return (
          this.conjugate(u, e, a),
          this.transform(u, e, x, c, a, l),
          this.conjugate(x, c, a),
          this.normalize13b(x, a),
          (f.negative = t.negative ^ n.negative),
          (f.length = t.length + n.length),
          f._strip()
        );
      }),
      (h.prototype.mul = function (t) {
        var n = new h(null);
        return (n.words = new Array(this.length + t.length)), this.mulTo(t, n);
      }),
      (h.prototype.mulf = function (t) {
        var n = new h(null);
        return (n.words = new Array(this.length + t.length)), yr(this, t, n);
      }),
      (h.prototype.imul = function (t) {
        return this.clone().mulTo(t, this);
      }),
      (h.prototype.imuln = function (t) {
        var n = t < 0;
        n && (t = -t), r(typeof t == "number"), r(t < 67108864);
        for (var f = 0, a = 0; a < this.length; a++) {
          var l = (this.words[a] | 0) * t,
            c = (l & 67108863) + (f & 67108863);
          (f >>= 26),
            (f += (l / 67108864) | 0),
            (f += c >>> 26),
            (this.words[a] = c & 67108863);
        }
        return (
          f !== 0 && ((this.words[a] = f), this.length++),
          n ? this.ineg() : this
        );
      }),
      (h.prototype.muln = function (t) {
        return this.clone().imuln(t);
      }),
      (h.prototype.sqr = function () {
        return this.mul(this);
      }),
      (h.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (h.prototype.pow = function (t) {
        var n = Nt(t);
        if (n.length === 0) return new h(1);
        for (var f = this, a = 0; a < n.length && n[a] === 0; a++, f = f.sqr());
        if (++a < n.length)
          for (var l = f.sqr(); a < n.length; a++, l = l.sqr())
            n[a] !== 0 && (f = f.mul(l));
        return f;
      }),
      (h.prototype.iushln = function (t) {
        r(typeof t == "number" && t >= 0);
        var n = t % 26,
          f = (t - n) / 26,
          a = (67108863 >>> (26 - n)) << (26 - n),
          l;
        if (n !== 0) {
          var c = 0;
          for (l = 0; l < this.length; l++) {
            var m = this.words[l] & a,
              u = ((this.words[l] | 0) - m) << n;
            (this.words[l] = u | c), (c = m >>> (26 - n));
          }
          c && ((this.words[l] = c), this.length++);
        }
        if (f !== 0) {
          for (l = this.length - 1; l >= 0; l--)
            this.words[l + f] = this.words[l];
          for (l = 0; l < f; l++) this.words[l] = 0;
          this.length += f;
        }
        return this._strip();
      }),
      (h.prototype.ishln = function (t) {
        return r(this.negative === 0), this.iushln(t);
      }),
      (h.prototype.iushrn = function (t, n, f) {
        r(typeof t == "number" && t >= 0);
        var a;
        n ? (a = (n - (n % 26)) / 26) : (a = 0);
        var l = t % 26,
          c = Math.min((t - l) / 26, this.length),
          m = 67108863 ^ ((67108863 >>> l) << l),
          u = f;
        if (((a -= c), (a = Math.max(0, a)), u)) {
          for (var e = 0; e < c; e++) u.words[e] = this.words[e];
          u.length = c;
        }
        if (c !== 0)
          if (this.length > c)
            for (this.length -= c, e = 0; e < this.length; e++)
              this.words[e] = this.words[e + c];
          else (this.words[0] = 0), (this.length = 1);
        var p = 0;
        for (e = this.length - 1; e >= 0 && (p !== 0 || e >= a); e--) {
          var g = this.words[e] | 0;
          (this.words[e] = (p << (26 - l)) | (g >>> l)), (p = g & m);
        }
        return (
          u && p !== 0 && (u.words[u.length++] = p),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (h.prototype.ishrn = function (t, n, f) {
        return r(this.negative === 0), this.iushrn(t, n, f);
      }),
      (h.prototype.shln = function (t) {
        return this.clone().ishln(t);
      }),
      (h.prototype.ushln = function (t) {
        return this.clone().iushln(t);
      }),
      (h.prototype.shrn = function (t) {
        return this.clone().ishrn(t);
      }),
      (h.prototype.ushrn = function (t) {
        return this.clone().iushrn(t);
      }),
      (h.prototype.testn = function (t) {
        r(typeof t == "number" && t >= 0);
        var n = t % 26,
          f = (t - n) / 26,
          a = 1 << n;
        if (this.length <= f) return !1;
        var l = this.words[f];
        return !!(l & a);
      }),
      (h.prototype.imaskn = function (t) {
        r(typeof t == "number" && t >= 0);
        var n = t % 26,
          f = (t - n) / 26;
        if (
          (r(this.negative === 0, "imaskn works only with positive numbers"),
          this.length <= f)
        )
          return this;
        if (
          (n !== 0 && f++, (this.length = Math.min(f, this.length)), n !== 0)
        ) {
          var a = 67108863 ^ ((67108863 >>> n) << n);
          this.words[this.length - 1] &= a;
        }
        return this._strip();
      }),
      (h.prototype.maskn = function (t) {
        return this.clone().imaskn(t);
      }),
      (h.prototype.iaddn = function (t) {
        return (
          r(typeof t == "number"),
          r(t < 67108864),
          t < 0
            ? this.isubn(-t)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) <= t
              ? ((this.words[0] = t - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(t), (this.negative = 1), this)
            : this._iaddn(t)
        );
      }),
      (h.prototype._iaddn = function (t) {
        this.words[0] += t;
        for (var n = 0; n < this.length && this.words[n] >= 67108864; n++)
          (this.words[n] -= 67108864),
            n === this.length - 1
              ? (this.words[n + 1] = 1)
              : this.words[n + 1]++;
        return (this.length = Math.max(this.length, n + 1)), this;
      }),
      (h.prototype.isubn = function (t) {
        if ((r(typeof t == "number"), r(t < 67108864), t < 0))
          return this.iaddn(-t);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(t), (this.negative = 1), this;
        if (((this.words[0] -= t), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var n = 0; n < this.length && this.words[n] < 0; n++)
            (this.words[n] += 67108864), (this.words[n + 1] -= 1);
        return this._strip();
      }),
      (h.prototype.addn = function (t) {
        return this.clone().iaddn(t);
      }),
      (h.prototype.subn = function (t) {
        return this.clone().isubn(t);
      }),
      (h.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (h.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (h.prototype._ishlnsubmul = function (t, n, f) {
        var a = t.length + f,
          l;
        this._expand(a);
        var c,
          m = 0;
        for (l = 0; l < t.length; l++) {
          c = (this.words[l + f] | 0) + m;
          var u = (t.words[l] | 0) * n;
          (c -= u & 67108863),
            (m = (c >> 26) - ((u / 67108864) | 0)),
            (this.words[l + f] = c & 67108863);
        }
        for (; l < this.length - f; l++)
          (c = (this.words[l + f] | 0) + m),
            (m = c >> 26),
            (this.words[l + f] = c & 67108863);
        if (m === 0) return this._strip();
        for (r(m === -1), m = 0, l = 0; l < this.length; l++)
          (c = -(this.words[l] | 0) + m),
            (m = c >> 26),
            (this.words[l] = c & 67108863);
        return (this.negative = 1), this._strip();
      }),
      (h.prototype._wordDiv = function (t, n) {
        var f = this.length - t.length,
          a = this.clone(),
          l = t,
          c = l.words[l.length - 1] | 0,
          m = this._countBits(c);
        (f = 26 - m),
          f !== 0 &&
            ((l = l.ushln(f)), a.iushln(f), (c = l.words[l.length - 1] | 0));
        var u = a.length - l.length,
          e;
        if (n !== "mod") {
          (e = new h(null)),
            (e.length = u + 1),
            (e.words = new Array(e.length));
          for (var p = 0; p < e.length; p++) e.words[p] = 0;
        }
        var g = a.clone()._ishlnsubmul(l, 1, u);
        g.negative === 0 && ((a = g), e && (e.words[u] = 1));
        for (var M = u - 1; M >= 0; M--) {
          var x =
            (a.words[l.length + M] | 0) * 67108864 +
            (a.words[l.length + M - 1] | 0);
          for (
            x = Math.min((x / c) | 0, 67108863), a._ishlnsubmul(l, x, M);
            a.negative !== 0;

          )
            x--,
              (a.negative = 0),
              a._ishlnsubmul(l, 1, M),
              a.isZero() || (a.negative ^= 1);
          e && (e.words[M] = x);
        }
        return (
          e && e._strip(),
          a._strip(),
          n !== "div" && f !== 0 && a.iushrn(f),
          { div: e || null, mod: a }
        );
      }),
      (h.prototype.divmod = function (t, n, f) {
        if ((r(!t.isZero()), this.isZero()))
          return { div: new h(0), mod: new h(0) };
        var a, l, c;
        return this.negative !== 0 && t.negative === 0
          ? ((c = this.neg().divmod(t, n)),
            n !== "mod" && (a = c.div.neg()),
            n !== "div" &&
              ((l = c.mod.neg()), f && l.negative !== 0 && l.iadd(t)),
            { div: a, mod: l })
          : this.negative === 0 && t.negative !== 0
          ? ((c = this.divmod(t.neg(), n)),
            n !== "mod" && (a = c.div.neg()),
            { div: a, mod: c.mod })
          : this.negative & t.negative
          ? ((c = this.neg().divmod(t.neg(), n)),
            n !== "div" &&
              ((l = c.mod.neg()), f && l.negative !== 0 && l.isub(t)),
            { div: c.div, mod: l })
          : t.length > this.length || this.cmp(t) < 0
          ? { div: new h(0), mod: this }
          : t.length === 1
          ? n === "div"
            ? { div: this.divn(t.words[0]), mod: null }
            : n === "mod"
            ? { div: null, mod: new h(this.modrn(t.words[0])) }
            : { div: this.divn(t.words[0]), mod: new h(this.modrn(t.words[0])) }
          : this._wordDiv(t, n);
      }),
      (h.prototype.div = function (t) {
        return this.divmod(t, "div", !1).div;
      }),
      (h.prototype.mod = function (t) {
        return this.divmod(t, "mod", !1).mod;
      }),
      (h.prototype.umod = function (t) {
        return this.divmod(t, "mod", !0).mod;
      }),
      (h.prototype.divRound = function (t) {
        var n = this.divmod(t);
        if (n.mod.isZero()) return n.div;
        var f = n.div.negative !== 0 ? n.mod.isub(t) : n.mod,
          a = t.ushrn(1),
          l = t.andln(1),
          c = f.cmp(a);
        return c < 0 || (l === 1 && c === 0)
          ? n.div
          : n.div.negative !== 0
          ? n.div.isubn(1)
          : n.div.iaddn(1);
      }),
      (h.prototype.modrn = function (t) {
        var n = t < 0;
        n && (t = -t), r(t <= 67108863);
        for (var f = (1 << 26) % t, a = 0, l = this.length - 1; l >= 0; l--)
          a = (f * a + (this.words[l] | 0)) % t;
        return n ? -a : a;
      }),
      (h.prototype.modn = function (t) {
        return this.modrn(t);
      }),
      (h.prototype.idivn = function (t) {
        var n = t < 0;
        n && (t = -t), r(t <= 67108863);
        for (var f = 0, a = this.length - 1; a >= 0; a--) {
          var l = (this.words[a] | 0) + f * 67108864;
          (this.words[a] = (l / t) | 0), (f = l % t);
        }
        return this._strip(), n ? this.ineg() : this;
      }),
      (h.prototype.divn = function (t) {
        return this.clone().idivn(t);
      }),
      (h.prototype.egcd = function (t) {
        r(t.negative === 0), r(!t.isZero());
        var n = this,
          f = t.clone();
        n.negative !== 0 ? (n = n.umod(t)) : (n = n.clone());
        for (
          var a = new h(1), l = new h(0), c = new h(0), m = new h(1), u = 0;
          n.isEven() && f.isEven();

        )
          n.iushrn(1), f.iushrn(1), ++u;
        for (var e = f.clone(), p = n.clone(); !n.isZero(); ) {
          for (var g = 0, M = 1; !(n.words[0] & M) && g < 26; ++g, M <<= 1);
          if (g > 0)
            for (n.iushrn(g); g-- > 0; )
              (a.isOdd() || l.isOdd()) && (a.iadd(e), l.isub(p)),
                a.iushrn(1),
                l.iushrn(1);
          for (var x = 0, B = 1; !(f.words[0] & B) && x < 26; ++x, B <<= 1);
          if (x > 0)
            for (f.iushrn(x); x-- > 0; )
              (c.isOdd() || m.isOdd()) && (c.iadd(e), m.isub(p)),
                c.iushrn(1),
                m.iushrn(1);
          n.cmp(f) >= 0
            ? (n.isub(f), a.isub(c), l.isub(m))
            : (f.isub(n), c.isub(a), m.isub(l));
        }
        return { a: c, b: m, gcd: f.iushln(u) };
      }),
      (h.prototype._invmp = function (t) {
        r(t.negative === 0), r(!t.isZero());
        var n = this,
          f = t.clone();
        n.negative !== 0 ? (n = n.umod(t)) : (n = n.clone());
        for (
          var a = new h(1), l = new h(0), c = f.clone();
          n.cmpn(1) > 0 && f.cmpn(1) > 0;

        ) {
          for (var m = 0, u = 1; !(n.words[0] & u) && m < 26; ++m, u <<= 1);
          if (m > 0)
            for (n.iushrn(m); m-- > 0; ) a.isOdd() && a.iadd(c), a.iushrn(1);
          for (var e = 0, p = 1; !(f.words[0] & p) && e < 26; ++e, p <<= 1);
          if (e > 0)
            for (f.iushrn(e); e-- > 0; ) l.isOdd() && l.iadd(c), l.iushrn(1);
          n.cmp(f) >= 0 ? (n.isub(f), a.isub(l)) : (f.isub(n), l.isub(a));
        }
        var g;
        return (
          n.cmpn(1) === 0 ? (g = a) : (g = l), g.cmpn(0) < 0 && g.iadd(t), g
        );
      }),
      (h.prototype.gcd = function (t) {
        if (this.isZero()) return t.abs();
        if (t.isZero()) return this.abs();
        var n = this.clone(),
          f = t.clone();
        (n.negative = 0), (f.negative = 0);
        for (var a = 0; n.isEven() && f.isEven(); a++) n.iushrn(1), f.iushrn(1);
        do {
          for (; n.isEven(); ) n.iushrn(1);
          for (; f.isEven(); ) f.iushrn(1);
          var l = n.cmp(f);
          if (l < 0) {
            var c = n;
            (n = f), (f = c);
          } else if (l === 0 || f.cmpn(1) === 0) break;
          n.isub(f);
        } while (!0);
        return f.iushln(a);
      }),
      (h.prototype.invm = function (t) {
        return this.egcd(t).a.umod(t);
      }),
      (h.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (h.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (h.prototype.andln = function (t) {
        return this.words[0] & t;
      }),
      (h.prototype.bincn = function (t) {
        r(typeof t == "number");
        var n = t % 26,
          f = (t - n) / 26,
          a = 1 << n;
        if (this.length <= f)
          return this._expand(f + 1), (this.words[f] |= a), this;
        for (var l = a, c = f; l !== 0 && c < this.length; c++) {
          var m = this.words[c] | 0;
          (m += l), (l = m >>> 26), (m &= 67108863), (this.words[c] = m);
        }
        return l !== 0 && ((this.words[c] = l), this.length++), this;
      }),
      (h.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (h.prototype.cmpn = function (t) {
        var n = t < 0;
        if (this.negative !== 0 && !n) return -1;
        if (this.negative === 0 && n) return 1;
        this._strip();
        var f;
        if (this.length > 1) f = 1;
        else {
          n && (t = -t), r(t <= 67108863, "Number is too big");
          var a = this.words[0] | 0;
          f = a === t ? 0 : a < t ? -1 : 1;
        }
        return this.negative !== 0 ? -f | 0 : f;
      }),
      (h.prototype.cmp = function (t) {
        if (this.negative !== 0 && t.negative === 0) return -1;
        if (this.negative === 0 && t.negative !== 0) return 1;
        var n = this.ucmp(t);
        return this.negative !== 0 ? -n | 0 : n;
      }),
      (h.prototype.ucmp = function (t) {
        if (this.length > t.length) return 1;
        if (this.length < t.length) return -1;
        for (var n = 0, f = this.length - 1; f >= 0; f--) {
          var a = this.words[f] | 0,
            l = t.words[f] | 0;
          if (a !== l) {
            a < l ? (n = -1) : a > l && (n = 1);
            break;
          }
        }
        return n;
      }),
      (h.prototype.gtn = function (t) {
        return this.cmpn(t) === 1;
      }),
      (h.prototype.gt = function (t) {
        return this.cmp(t) === 1;
      }),
      (h.prototype.gten = function (t) {
        return this.cmpn(t) >= 0;
      }),
      (h.prototype.gte = function (t) {
        return this.cmp(t) >= 0;
      }),
      (h.prototype.ltn = function (t) {
        return this.cmpn(t) === -1;
      }),
      (h.prototype.lt = function (t) {
        return this.cmp(t) === -1;
      }),
      (h.prototype.lten = function (t) {
        return this.cmpn(t) <= 0;
      }),
      (h.prototype.lte = function (t) {
        return this.cmp(t) <= 0;
      }),
      (h.prototype.eqn = function (t) {
        return this.cmpn(t) === 0;
      }),
      (h.prototype.eq = function (t) {
        return this.cmp(t) === 0;
      }),
      (h.red = function (t) {
        return new T(t);
      }),
      (h.prototype.toRed = function (t) {
        return (
          r(!this.red, "Already a number in reduction context"),
          r(this.negative === 0, "red works only with positives"),
          t.convertTo(this)._forceRed(t)
        );
      }),
      (h.prototype.fromRed = function () {
        return (
          r(this.red, "fromRed works only with numbers in reduction context"),
          this.red.convertFrom(this)
        );
      }),
      (h.prototype._forceRed = function (t) {
        return (this.red = t), this;
      }),
      (h.prototype.forceRed = function (t) {
        return (
          r(!this.red, "Already a number in reduction context"),
          this._forceRed(t)
        );
      }),
      (h.prototype.redAdd = function (t) {
        return (
          r(this.red, "redAdd works only with red numbers"),
          this.red.add(this, t)
        );
      }),
      (h.prototype.redIAdd = function (t) {
        return (
          r(this.red, "redIAdd works only with red numbers"),
          this.red.iadd(this, t)
        );
      }),
      (h.prototype.redSub = function (t) {
        return (
          r(this.red, "redSub works only with red numbers"),
          this.red.sub(this, t)
        );
      }),
      (h.prototype.redISub = function (t) {
        return (
          r(this.red, "redISub works only with red numbers"),
          this.red.isub(this, t)
        );
      }),
      (h.prototype.redShl = function (t) {
        return (
          r(this.red, "redShl works only with red numbers"),
          this.red.shl(this, t)
        );
      }),
      (h.prototype.redMul = function (t) {
        return (
          r(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, t),
          this.red.mul(this, t)
        );
      }),
      (h.prototype.redIMul = function (t) {
        return (
          r(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, t),
          this.red.imul(this, t)
        );
      }),
      (h.prototype.redSqr = function () {
        return (
          r(this.red, "redSqr works only with red numbers"),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (h.prototype.redISqr = function () {
        return (
          r(this.red, "redISqr works only with red numbers"),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (h.prototype.redSqrt = function () {
        return (
          r(this.red, "redSqrt works only with red numbers"),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (h.prototype.redInvm = function () {
        return (
          r(this.red, "redInvm works only with red numbers"),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (h.prototype.redNeg = function () {
        return (
          r(this.red, "redNeg works only with red numbers"),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (h.prototype.redPow = function (t) {
        return (
          r(this.red && !t.red, "redPow(normalNum)"),
          this.red._verify1(this),
          this.red.pow(this, t)
        );
      });
    var qt = { k256: null, p224: null, p192: null, p25519: null };
    function wt(v, t) {
      (this.name = v),
        (this.p = new h(t, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new h(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (wt.prototype._tmp = function () {
      var t = new h(null);
      return (t.words = new Array(Math.ceil(this.n / 13))), t;
    }),
      (wt.prototype.ireduce = function (t) {
        var n = t,
          f;
        do
          this.split(n, this.tmp),
            (n = this.imulK(n)),
            (n = n.iadd(this.tmp)),
            (f = n.bitLength());
        while (f > this.n);
        var a = f < this.n ? -1 : n.ucmp(this.p);
        return (
          a === 0
            ? ((n.words[0] = 0), (n.length = 1))
            : a > 0
            ? n.isub(this.p)
            : n.strip !== void 0
            ? n.strip()
            : n._strip(),
          n
        );
      }),
      (wt.prototype.split = function (t, n) {
        t.iushrn(this.n, 0, n);
      }),
      (wt.prototype.imulK = function (t) {
        return t.imul(this.k);
      });
    function kt() {
      wt.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    s(kt, wt),
      (kt.prototype.split = function (t, n) {
        for (var f = 4194303, a = Math.min(t.length, 9), l = 0; l < a; l++)
          n.words[l] = t.words[l];
        if (((n.length = a), t.length <= 9)) {
          (t.words[0] = 0), (t.length = 1);
          return;
        }
        var c = t.words[9];
        for (n.words[n.length++] = c & f, l = 10; l < t.length; l++) {
          var m = t.words[l] | 0;
          (t.words[l - 10] = ((m & f) << 4) | (c >>> 22)), (c = m);
        }
        (c >>>= 22),
          (t.words[l - 10] = c),
          c === 0 && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
      }),
      (kt.prototype.imulK = function (t) {
        (t.words[t.length] = 0), (t.words[t.length + 1] = 0), (t.length += 2);
        for (var n = 0, f = 0; f < t.length; f++) {
          var a = t.words[f] | 0;
          (n += a * 977),
            (t.words[f] = n & 67108863),
            (n = a * 64 + ((n / 67108864) | 0));
        }
        return (
          t.words[t.length - 1] === 0 &&
            (t.length--, t.words[t.length - 1] === 0 && t.length--),
          t
        );
      });
    function gr() {
      wt.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    s(gr, wt);
    function Mr() {
      wt.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    s(Mr, wt);
    function Dt() {
      wt.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    s(Dt, wt),
      (Dt.prototype.imulK = function (t) {
        for (var n = 0, f = 0; f < t.length; f++) {
          var a = (t.words[f] | 0) * 19 + n,
            l = a & 67108863;
          (a >>>= 26), (t.words[f] = l), (n = a);
        }
        return n !== 0 && (t.words[t.length++] = n), t;
      }),
      (h._prime = function (t) {
        if (qt[t]) return qt[t];
        var n;
        if (t === "k256") n = new kt();
        else if (t === "p224") n = new gr();
        else if (t === "p192") n = new Mr();
        else if (t === "p25519") n = new Dt();
        else throw new Error("Unknown prime " + t);
        return (qt[t] = n), n;
      });
    function T(v) {
      if (typeof v == "string") {
        var t = h._prime(v);
        (this.m = t.p), (this.prime = t);
      } else
        r(v.gtn(1), "modulus must be greater than 1"),
          (this.m = v),
          (this.prime = null);
    }
    (T.prototype._verify1 = function (t) {
      r(t.negative === 0, "red works only with positives"),
        r(t.red, "red works only with red numbers");
    }),
      (T.prototype._verify2 = function (t, n) {
        r((t.negative | n.negative) === 0, "red works only with positives"),
          r(t.red && t.red === n.red, "red works only with red numbers");
      }),
      (T.prototype.imod = function (t) {
        return this.prime
          ? this.prime.ireduce(t)._forceRed(this)
          : (b(t, t.umod(this.m)._forceRed(this)), t);
      }),
      (T.prototype.neg = function (t) {
        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
      }),
      (T.prototype.add = function (t, n) {
        this._verify2(t, n);
        var f = t.add(n);
        return f.cmp(this.m) >= 0 && f.isub(this.m), f._forceRed(this);
      }),
      (T.prototype.iadd = function (t, n) {
        this._verify2(t, n);
        var f = t.iadd(n);
        return f.cmp(this.m) >= 0 && f.isub(this.m), f;
      }),
      (T.prototype.sub = function (t, n) {
        this._verify2(t, n);
        var f = t.sub(n);
        return f.cmpn(0) < 0 && f.iadd(this.m), f._forceRed(this);
      }),
      (T.prototype.isub = function (t, n) {
        this._verify2(t, n);
        var f = t.isub(n);
        return f.cmpn(0) < 0 && f.iadd(this.m), f;
      }),
      (T.prototype.shl = function (t, n) {
        return this._verify1(t), this.imod(t.ushln(n));
      }),
      (T.prototype.imul = function (t, n) {
        return this._verify2(t, n), this.imod(t.imul(n));
      }),
      (T.prototype.mul = function (t, n) {
        return this._verify2(t, n), this.imod(t.mul(n));
      }),
      (T.prototype.isqr = function (t) {
        return this.imul(t, t.clone());
      }),
      (T.prototype.sqr = function (t) {
        return this.mul(t, t);
      }),
      (T.prototype.sqrt = function (t) {
        if (t.isZero()) return t.clone();
        var n = this.m.andln(3);
        if ((r(n % 2 === 1), n === 3)) {
          var f = this.m.add(new h(1)).iushrn(2);
          return this.pow(t, f);
        }
        for (var a = this.m.subn(1), l = 0; !a.isZero() && a.andln(1) === 0; )
          l++, a.iushrn(1);
        r(!a.isZero());
        var c = new h(1).toRed(this),
          m = c.redNeg(),
          u = this.m.subn(1).iushrn(1),
          e = this.m.bitLength();
        for (e = new h(2 * e * e).toRed(this); this.pow(e, u).cmp(m) !== 0; )
          e.redIAdd(m);
        for (
          var p = this.pow(e, a),
            g = this.pow(t, a.addn(1).iushrn(1)),
            M = this.pow(t, a),
            x = l;
          M.cmp(c) !== 0;

        ) {
          for (var B = M, I = 0; B.cmp(c) !== 0; I++) B = B.redSqr();
          r(I < x);
          var U = this.pow(p, new h(1).iushln(x - I - 1));
          (g = g.redMul(U)), (p = U.redSqr()), (M = M.redMul(p)), (x = I);
        }
        return g;
      }),
      (T.prototype.invm = function (t) {
        var n = t._invmp(this.m);
        return n.negative !== 0
          ? ((n.negative = 0), this.imod(n).redNeg())
          : this.imod(n);
      }),
      (T.prototype.pow = function (t, n) {
        if (n.isZero()) return new h(1).toRed(this);
        if (n.cmpn(1) === 0) return t.clone();
        var f = 4,
          a = new Array(1 << f);
        (a[0] = new h(1).toRed(this)), (a[1] = t);
        for (var l = 2; l < a.length; l++) a[l] = this.mul(a[l - 1], t);
        var c = a[0],
          m = 0,
          u = 0,
          e = n.bitLength() % 26;
        for (e === 0 && (e = 26), l = n.length - 1; l >= 0; l--) {
          for (var p = n.words[l], g = e - 1; g >= 0; g--) {
            var M = (p >> g) & 1;
            if ((c !== a[0] && (c = this.sqr(c)), M === 0 && m === 0)) {
              u = 0;
              continue;
            }
            (m <<= 1),
              (m |= M),
              u++,
              !(u !== f && (l !== 0 || g !== 0)) &&
                ((c = this.mul(c, a[m])), (u = 0), (m = 0));
          }
          e = 26;
        }
        return c;
      }),
      (T.prototype.convertTo = function (t) {
        var n = t.umod(this.m);
        return n === t ? n.clone() : n;
      }),
      (T.prototype.convertFrom = function (t) {
        var n = t.clone();
        return (n.red = null), n;
      }),
      (h.mont = function (t) {
        return new Ft(t);
      });
    function Ft(v) {
      T.call(this, v),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new h(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    s(Ft, T),
      (Ft.prototype.convertTo = function (t) {
        return this.imod(t.ushln(this.shift));
      }),
      (Ft.prototype.convertFrom = function (t) {
        var n = this.imod(t.mul(this.rinv));
        return (n.red = null), n;
      }),
      (Ft.prototype.imul = function (t, n) {
        if (t.isZero() || n.isZero())
          return (t.words[0] = 0), (t.length = 1), t;
        var f = t.imul(n),
          a = f.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          l = f.isub(a).iushrn(this.shift),
          c = l;
        return (
          l.cmp(this.m) >= 0
            ? (c = l.isub(this.m))
            : l.cmpn(0) < 0 && (c = l.iadd(this.m)),
          c._forceRed(this)
        );
      }),
      (Ft.prototype.mul = function (t, n) {
        if (t.isZero() || n.isZero()) return new h(0)._forceRed(this);
        var f = t.mul(n),
          a = f.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          l = f.isub(a).iushrn(this.shift),
          c = l;
        return (
          l.cmp(this.m) >= 0
            ? (c = l.isub(this.m))
            : l.cmpn(0) < 0 && (c = l.iadd(this.m)),
          c._forceRed(this)
        );
      }),
      (Ft.prototype.invm = function (t) {
        var n = this.imod(t._invmp(this.m).mul(this.r2));
        return n._forceRed(this);
      });
  })(typeof cr > "u" || cr, ri);
});
export { zr as a, Or as b, ti as c, Ti as d };
