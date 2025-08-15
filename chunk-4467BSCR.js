import { q as r } from "./chunk-KXQY476L.js";
r();
r();
var i =
  typeof globalThis == "object" && "crypto" in globalThis
    ? globalThis.crypto
    : void 0;
var p = (t) => t instanceof Uint8Array;
var b = (t) =>
    new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
  E = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
  L = (t, e) => (t << (32 - e)) | (t >>> e),
  l = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!l) throw new Error("Non little-endian hardware is not supported");
function w(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function s(t) {
  if ((typeof t == "string" && (t = w(t)), !p(t)))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
function m(...t) {
  let e = new Uint8Array(t.reduce((o, c) => o + c.length, 0)),
    n = 0;
  return (
    t.forEach((o) => {
      if (!p(o)) throw new Error("Uint8Array expected");
      e.set(o, n), (n += o.length);
    }),
    e
  );
}
var u = class {
    clone() {
      return this._cloneInto();
    }
  },
  A = {}.toString;
function U(t) {
  let e = (o) => t().update(s(o)).digest(),
    n = t();
  return (
    (e.outputLen = n.outputLen),
    (e.blockLen = n.blockLen),
    (e.create = () => t()),
    e
  );
}
function O(t) {
  let e = (o, c) => t(c).update(s(o)).digest(),
    n = t({});
  return (
    (e.outputLen = n.outputLen),
    (e.blockLen = n.blockLen),
    (e.create = (o) => t(o)),
    e
  );
}
function k(t = 32) {
  if (i && typeof i.getRandomValues == "function")
    return i.getRandomValues(new Uint8Array(t));
  throw new Error("crypto.getRandomValues must be defined");
}
r();
function a(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`Wrong positive integer: ${t}`);
}
function y(t, ...e) {
  if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(
      `Expected Uint8Array of length ${e}, not of length=${t.length}`
    );
}
function j(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  a(t.outputLen), a(t.blockLen);
}
function N(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function I(t, e) {
  y(t);
  let n = e.outputLen;
  if (t.length < n)
    throw new Error(
      `digestInto() expects output buffer of length at least ${n}`
    );
}
export {
  a,
  y as b,
  j as c,
  N as d,
  I as e,
  b as f,
  E as g,
  L as h,
  s as i,
  m as j,
  u as k,
  U as l,
  O as m,
  k as n,
};
