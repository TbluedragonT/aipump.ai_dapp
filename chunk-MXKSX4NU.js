import {
  $ as rn,
  A as Gr,
  Aa as At,
  B as $r,
  Ba as nr,
  C as Ze,
  Ca as ar,
  Da as re,
  E as zr,
  Ea as sr,
  F as we,
  Fa as Fe,
  G as Je,
  Ga as ir,
  H as Ye,
  Ha as Ut,
  I as Or,
  Ia as cr,
  J as jr,
  Ja as mr,
  K as Ee,
  Ka as fr,
  L as nt,
  La as ur,
  M as ft,
  Ma as pr,
  Na as so,
  Oa as dr,
  Pa as oe,
  Qa as an,
  R as Vr,
  Ra as ht,
  Sa as et,
  Ta as lo,
  U as Jt,
  Ua as lr,
  V as tt,
  Va as cn,
  W as Qt,
  Wa as ho,
  X as dt,
  Xa as go,
  Y as O,
  Ya as mn,
  _ as K,
  bb as rt,
  cb as hr,
  db as Lt,
  fa as Tt,
  ha as G,
  ib as Ct,
  ka as ro,
  la as oo,
  ma as te,
  na as no,
  oa as ke,
  pa as vt,
  qa as ao,
  ra as Re,
  s as yt,
  sa as ee,
  t as be,
  u as St,
  va as tr,
  w as Mr,
  wa as er,
  x as ye,
  xa as rr,
  ya as or,
  za as Dt,
} from "./chunk-7HG7UTUA.js";
import { a as fn, b as It } from "./chunk-3VTBTNQ3.js";
import {
  b as io,
  d as Se,
  f as co,
  g as mo,
  i as fo,
  j as uo,
  l as Ne,
  m as po,
  n as Y,
  p as yo,
  s as wo,
  u as un,
  v as Eo,
  w as To,
  x as vo,
  z as Ao,
} from "./chunk-7VBKHTQI.js";
import {
  $ as Ht,
  A as I,
  B as ve,
  C as z,
  Ca as xo,
  Da as bo,
  E as ut,
  G as Q,
  J as D,
  K as qt,
  L as Ae,
  M as X,
  N as _t,
  O as pt,
  Q as Et,
  R as Yt,
  T as Zr,
  U as on,
  V as Ce,
  W as Jr,
  X as Yr,
  _ as Qr,
  a as B,
  aa as nn,
  b as wt,
  ca as Xr,
  e as H,
  ea as to,
  fa as Xt,
  ha as eo,
  i as Nt,
  ia as Ie,
  j as Qe,
  ja as Pe,
  ka as Xe,
  o as Wr,
  q as Te,
  t as q,
  v as U,
  wa as Be,
  x as $,
  y as Kr,
  z as j,
  za as lt,
} from "./chunk-YYSBJNVH.js";
import { a as sn } from "./chunk-PV7NZOQN.js";
import { l as en } from "./chunk-4467BSCR.js";
import { a as y, b as F, d as S, l as c, q as n } from "./chunk-KXQY476L.js";
n();
n();
n();
function v(t, e, r) {
  return (o) => t[e.name]?.(o) ?? t[r]?.(o) ?? e(t, o);
}
n();
n();
n();
var qe = class extends H {
  constructor(e) {
    super(`Filter type "${e}" is not supported.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FilterTypeNotSupportedError",
      });
  }
};
var pn = "/docs/contract/encodeEventTopics";
function ot(t) {
  let { abi: e, eventName: r, args: o } = t,
    a = e[0];
  if (r) {
    let f = dt({ abi: e, name: r });
    if (!f) throw new Je(r, { docsPath: pn });
    a = f;
  }
  if (a.type !== "event") throw new Je(void 0, { docsPath: pn });
  let s = yt(a),
    i = Jt(s),
    m = [];
  if (o && "inputs" in a) {
    let f = a.inputs?.filter((d) => "indexed" in d && d.indexed),
      p = Array.isArray(o)
        ? o
        : Object.values(o).length > 0
        ? f?.map((d) => o[d.name]) ?? []
        : [];
    p.length > 0 &&
      (m =
        f?.map((d, u) =>
          Array.isArray(p[u])
            ? p[u].map((l, g) => dn({ param: d, value: p[u][g] }))
            : p[u]
            ? dn({ param: d, value: p[u] })
            : null
        ) ?? []);
  }
  return [i, ...m];
}
function dn({ param: t, value: e }) {
  if (t.type === "string" || t.type === "bytes") return D(z(e));
  if (t.type === "tuple" || t.type.match(/^(.*)\[(\d+)?\]$/))
    throw new qe(t.type);
  return tt([t], [e]);
}
n();
function Pt(t, { method: e }) {
  let r = {};
  return (
    t.transport.type === "fallback" &&
      t.transport.onResponse?.(
        ({ method: o, response: a, status: s, transport: i }) => {
          s === "success" && e === o && (r[a] = i.request);
        }
      ),
    (o) => r[o] || t.request
  );
}
function ne(t, e) {
  return c(this, null, function* () {
    let {
        address: r,
        abi: o,
        args: a,
        eventName: s,
        fromBlock: i,
        strict: m,
        toBlock: f,
      } = e,
      p = Pt(t, { method: "eth_newFilter" }),
      d = s ? ot({ abi: o, args: a, eventName: s }) : void 0,
      u = yield t.request({
        method: "eth_newFilter",
        params: [
          {
            address: r,
            fromBlock: typeof i == "bigint" ? I(i) : i,
            toBlock: typeof f == "bigint" ? I(f) : f,
            topics: d,
          },
        ],
      });
    return {
      abi: o,
      args: a,
      eventName: s,
      id: u,
      request: p(u),
      strict: !!m,
      type: "event",
    };
  });
}
n();
n();
var ds = 3;
function at(
  t,
  { abi: e, address: r, args: o, docsPath: a, functionName: s, sender: i }
) {
  let {
      code: m,
      data: f,
      message: p,
      shortMessage: d,
    } = t instanceof ke
      ? t
      : t instanceof H
      ? t.walk((l) => "data" in l) || t.walk()
      : {},
    u =
      t instanceof ye
        ? new no({ functionName: s })
        : [ds, Dt.code].includes(m) && (f || p || d)
        ? new te({
            abi: e,
            data: typeof f == "object" ? f.data : f,
            functionName: s,
            message: d ?? p,
          })
        : t;
  return new oo(u, {
    abi: e,
    args: o,
    contractAddress: r,
    docsPath: a,
    functionName: s,
    sender: i,
  });
}
n();
n();
n();
var _e = class extends H {
  constructor(
    e,
    {
      account: r,
      docsPath: o,
      chain: a,
      data: s,
      gas: i,
      gasPrice: m,
      maxFeePerGas: f,
      maxPriorityFeePerGas: p,
      nonce: d,
      to: u,
      value: l,
    }
  ) {
    let g = nn({
      from: r?.address,
      to: u,
      value: typeof l < "u" && `${Qr(l)} ${a?.nativeCurrency?.symbol || "ETH"}`,
      data: s,
      gas: i,
      gasPrice: typeof m < "u" && `${Ht(m)} gwei`,
      maxFeePerGas: typeof f < "u" && `${Ht(f)} gwei`,
      maxPriorityFeePerGas: typeof p < "u" && `${Ht(p)} gwei`,
      nonce: d,
    });
    super(e.shortMessage, {
      cause: e,
      docsPath: o,
      metaMessages: [
        ...(e.metaMessages ? [...e.metaMessages, " "] : []),
        "Estimate Gas Arguments:",
        g,
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
        value: "EstimateGasExecutionError",
      }),
      (this.cause = e);
  }
};
function ln(t, o) {
  var a = o,
    { docsPath: e } = a,
    r = S(a, ["docsPath"]);
  let s = (() => {
    let i = dr(t, r);
    return i instanceof Be ? t : i;
  })();
  return new _e(s, y({ docsPath: e }, r));
}
n();
n();
n();
var He = class extends H {
    constructor() {
      super("`baseFeeMultiplier` must be greater than 1."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "BaseFeeScalarError",
        });
    }
  },
  gt = class extends H {
    constructor() {
      super("Chain does not support EIP-1559 fees."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Eip1559FeesNotSupportedError",
        });
    }
  },
  De = class extends H {
    constructor({ maxPriorityFeePerGas: e }) {
      super(
        `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Ht(
          e
        )} gwei).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "MaxFeePerGasTooLowError",
        });
    }
  };
n();
n();
n();
var Mt = class extends H {
  constructor({ blockHash: e, blockNumber: r }) {
    let o = "Block";
    e && (o = `Block at hash "${e}"`),
      r && (o = `Block at number "${r}"`),
      super(`${o} could not be found.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "BlockNotFoundError",
      });
  }
};
function Z(s) {
  return c(
    this,
    arguments,
    function* (
      t,
      { blockHash: e, blockNumber: r, blockTag: o, includeTransactions: a } = {}
    ) {
      let i = o ?? "latest",
        m = a ?? !1,
        f = r !== void 0 ? I(r) : void 0,
        p = null;
      if (
        (e
          ? (p = yield t.request({
              method: "eth_getBlockByHash",
              params: [e, m],
            }))
          : (p = yield t.request({
              method: "eth_getBlockByNumber",
              params: [f || i, m],
            })),
        !p)
      )
        throw new Mt({ blockHash: e, blockNumber: r });
      return (t.chain?.formatters?.block?.format || Se)(p);
    }
  );
}
n();
function ae(t) {
  return c(this, null, function* () {
    let e = yield t.request({ method: "eth_gasPrice" });
    return BigInt(e);
  });
}
function hn(t, e) {
  return c(this, null, function* () {
    return Co(t, e);
  });
}
function Co(t, e) {
  return c(this, null, function* () {
    let { block: r, chain: o = t.chain, request: a } = e || {};
    if (typeof o?.fees?.defaultPriorityFee == "function") {
      let s = r || (yield v(t, Z, "getBlock")({}));
      return o.fees.defaultPriorityFee({ block: s, client: t, request: a });
    }
    if (typeof o?.fees?.defaultPriorityFee < "u")
      return o?.fees?.defaultPriorityFee;
    try {
      let s = yield t.request({ method: "eth_maxPriorityFeePerGas" });
      return q(s);
    } catch {
      let [s, i] = yield Promise.all([
        r ? Promise.resolve(r) : v(t, Z, "getBlock")({}),
        v(t, ae, "getGasPrice")({}),
      ]);
      if (typeof s.baseFeePerGas != "bigint") throw new gt();
      let m = i - s.baseFeePerGas;
      return m < 0n ? 0n : m;
    }
  });
}
function gn(t, e) {
  return c(this, null, function* () {
    return gr(t, e);
  });
}
function gr(t, e) {
  return c(this, null, function* () {
    let {
        block: r,
        chain: o = t.chain,
        request: a,
        type: s = "eip1559",
      } = e || {},
      i = yield c(this, null, function* () {
        return typeof o?.fees?.baseFeeMultiplier == "function"
          ? o.fees.baseFeeMultiplier({ block: r, client: t, request: a })
          : o?.fees?.baseFeeMultiplier ?? 1.2;
      });
    if (i < 1) throw new He();
    let f = 10 ** (i.toString().split(".")[1]?.length ?? 0),
      p = (l) => (l * BigInt(Math.ceil(i * f))) / BigInt(f),
      d = r || (yield v(t, Z, "getBlock")({}));
    if (typeof o?.fees?.estimateFeesPerGas == "function") {
      let l = yield o.fees.estimateFeesPerGas({
        block: r,
        client: t,
        multiply: p,
        request: a,
        type: s,
      });
      if (l !== null) return l;
    }
    if (s === "eip1559") {
      if (typeof d.baseFeePerGas != "bigint") throw new gt();
      let l =
          typeof a?.maxPriorityFeePerGas == "bigint"
            ? a.maxPriorityFeePerGas
            : yield Co(t, { block: d, chain: o, request: a }),
        g = p(d.baseFeePerGas);
      return {
        maxFeePerGas: a?.maxFeePerGas ?? g + l,
        maxPriorityFeePerGas: l,
      };
    }
    return { gasPrice: a?.gasPrice ?? p(yield v(t, ae, "getGasPrice")({})) };
  });
}
n();
function xr(a, s) {
  return c(
    this,
    arguments,
    function* (t, { address: e, blockTag: r = "latest", blockNumber: o }) {
      let i = yield t.request({
        method: "eth_getTransactionCount",
        params: [e, o ? I(o) : r],
      });
      return U(i);
    }
  );
}
n();
function st(t) {
  return c(this, null, function* () {
    let e = yield t.request({ method: "eth_chainId" });
    return U(e);
  });
}
var Io = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"];
function kt(t, e) {
  return c(this, null, function* () {
    let {
        account: r = t.account,
        blobs: o,
        chain: a,
        chainId: s,
        gas: i,
        kzg: m,
        nonce: f,
        parameters: p = Io,
        type: d,
      } = e,
      u = r ? O(r) : void 0,
      l = y(y({}, e), u ? { from: u?.address } : {}),
      g;
    function x() {
      return c(this, null, function* () {
        return (
          g || ((g = yield v(t, Z, "getBlock")({ blockTag: "latest" })), g)
        );
      });
    }
    if (
      (p.includes("blobVersionedHashes") || p.includes("sidecars")) &&
      o &&
      m
    ) {
      let b = co({ blobs: o, kzg: m });
      if (p.includes("blobVersionedHashes")) {
        let w = uo({ commitments: b, to: "hex" });
        l.blobVersionedHashes = w;
      }
      if (p.includes("sidecars")) {
        let w = mo({ blobs: o, commitments: b, kzg: m }),
          E = Ne({ blobs: o, commitments: b, proofs: w, to: "hex" });
        l.sidecars = E;
      }
    }
    if (
      (p.includes("chainId") &&
        (a
          ? (l.chainId = a.id)
          : typeof s < "u"
          ? (l.chainId = s)
          : (l.chainId = yield v(t, st, "getChainId")({}))),
      p.includes("nonce") &&
        typeof f > "u" &&
        u &&
        (l.nonce = yield v(
          t,
          xr,
          "getTransactionCount"
        )({ address: u.address, blockTag: "pending" })),
      (p.includes("fees") || p.includes("type")) && typeof d > "u")
    )
      try {
        l.type = po(l);
      } catch {
        let b = yield x();
        l.type = typeof b?.baseFeePerGas == "bigint" ? "eip1559" : "legacy";
      }
    if (p.includes("fees"))
      if (l.type !== "legacy" && l.type !== "eip2930") {
        if (
          typeof l.maxFeePerGas > "u" ||
          typeof l.maxPriorityFeePerGas > "u"
        ) {
          let b = yield x(),
            { maxFeePerGas: w, maxPriorityFeePerGas: E } = yield gr(t, {
              block: b,
              chain: a,
              request: l,
            });
          if (
            typeof e.maxPriorityFeePerGas > "u" &&
            e.maxFeePerGas &&
            e.maxFeePerGas < E
          )
            throw new De({ maxPriorityFeePerGas: E });
          (l.maxPriorityFeePerGas = E), (l.maxFeePerGas = w);
        }
      } else {
        if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
          throw new gt();
        let b = yield x(),
          { gasPrice: w } = yield gr(t, {
            block: b,
            chain: a,
            request: l,
            type: "legacy",
          });
        l.gasPrice = w;
      }
    return (
      p.includes("gas") &&
        typeof i > "u" &&
        (l.gas = yield v(
          t,
          se,
          "estimateGas"
        )(
          F(y({}, l), {
            account: u ? { address: u.address, type: "json-rpc" } : void 0,
          })
        )),
      ht(l),
      delete l.parameters,
      l
    );
  });
}
function se(t, e) {
  return c(this, null, function* () {
    let r = e.account ?? t.account,
      o = r ? O(r) : void 0;
    try {
      let a = yield kt(
          t,
          F(y({}, e), {
            parameters: o?.type === "local" ? void 0 : ["blobVersionedHashes"],
          })
        ),
        {
          accessList: s,
          blobs: i,
          blobVersionedHashes: m,
          blockNumber: f,
          blockTag: p,
          data: d,
          gas: u,
          gasPrice: l,
          maxFeePerBlobGas: g,
          maxFeePerGas: x,
          maxPriorityFeePerGas: b,
          nonce: w,
          to: E,
          value: T,
          stateOverride: A,
        } = a,
        P = S(a, [
          "accessList",
          "blobs",
          "blobVersionedHashes",
          "blockNumber",
          "blockTag",
          "data",
          "gas",
          "gasPrice",
          "maxFeePerBlobGas",
          "maxFeePerGas",
          "maxPriorityFeePerGas",
          "nonce",
          "to",
          "value",
          "stateOverride",
        ]),
        C = (f ? I(f) : void 0) || p,
        k = an(A);
      ht(e);
      let N = t.chain?.formatters?.transactionRequest?.format,
        M = (N || lt)(
          F(y({}, oe(P, { format: N })), {
            from: o?.address,
            accessList: s,
            blobs: i,
            blobVersionedHashes: m,
            data: d,
            gas: u,
            gasPrice: l,
            maxFeePerBlobGas: g,
            maxFeePerGas: x,
            maxPriorityFeePerGas: b,
            nonce: w,
            to: E,
            value: T,
          })
        ),
        _ = yield t.request({
          method: "eth_estimateGas",
          params: k ? [M, C ?? "latest", k] : C ? [M, C] : [M],
        });
      return BigInt(_);
    } catch (s) {
      throw ln(s, F(y({}, e), { account: o, chain: t.chain }));
    }
  });
}
function br(t, e) {
  return c(this, null, function* () {
    let f = e,
      { abi: r, address: o, args: a, functionName: s } = f,
      i = S(f, ["abi", "address", "args", "functionName"]),
      m = K({ abi: r, args: a, functionName: s });
    try {
      return yield v(t, se, "estimateGas")(y({ data: m, to: o }, i));
    } catch (p) {
      let d = i.account ? O(i.account) : void 0;
      throw at(p, {
        abi: r,
        address: o,
        args: a,
        docsPath: "/docs/contract/estimateContractGas",
        functionName: s,
        sender: d?.address,
      });
    }
  });
}
n();
n();
n();
n();
var xn = "/docs/contract/decodeEventLog";
function Gt(t) {
  let { abi: e, data: r, strict: o, topics: a } = t,
    s = o ?? !0,
    [i, ...m] = a;
  if (!i) throw new zr({ docsPath: xn });
  let f = e.find((b) => b.type === "event" && i === Jt(yt(b)));
  if (!(f && "name" in f) || f.type !== "event")
    throw new we(i, { docsPath: xn });
  let { name: p, inputs: d } = f,
    u = d?.some((b) => !("name" in b && b.name)),
    l = u ? [] : {},
    g = d.filter((b) => "indexed" in b && b.indexed);
  for (let b = 0; b < g.length; b++) {
    let w = g[b],
      E = m[b];
    if (!E) throw new ft({ abiItem: f, param: w });
    l[u ? b : w.name || b] = ls({ param: w, value: E });
  }
  let x = d.filter((b) => !("indexed" in b && b.indexed));
  if (x.length > 0) {
    if (r && r !== "0x")
      try {
        let b = Tt(x, r);
        if (b)
          if (u) l = [...l, ...b];
          else for (let w = 0; w < x.length; w++) l[x[w].name] = b[w];
      } catch (b) {
        if (s)
          throw b instanceof Mr || b instanceof on
            ? new nt({ abiItem: f, data: r, params: x, size: wt(r) })
            : b;
      }
    else if (s) throw new nt({ abiItem: f, data: "0x", params: x, size: 0 });
  }
  return { eventName: p, args: Object.values(l).length > 0 ? l : void 0 };
}
function ls({ param: t, value: e }) {
  return t.type === "string" ||
    t.type === "bytes" ||
    t.type === "tuple" ||
    t.type.match(/^(.*)\[(\d+)?\]$/)
    ? e
    : (Tt([t], e) || [])[0];
}
function $t({ abi: t, eventName: e, logs: r, strict: o = !0 }) {
  return r
    .map((a) => {
      try {
        let s = Gt(F(y({}, a), { abi: t, strict: o }));
        return e && !e.includes(s.eventName) ? null : y(y({}, s), a);
      } catch (s) {
        let i, m;
        if (s instanceof we) return null;
        if (s instanceof nt || s instanceof ft) {
          if (o) return null;
          (i = s.abiItem.name),
            (m = s.abiItem.inputs?.some((f) => !("name" in f && f.name)));
        }
        return F(y({}, a), { args: m ? [] : {}, eventName: i });
      }
    })
    .filter(Boolean);
}
function ie(p) {
  return c(
    this,
    arguments,
    function* (
      t,
      {
        address: e,
        blockHash: r,
        fromBlock: o,
        toBlock: a,
        event: s,
        events: i,
        args: m,
        strict: f,
      } = {}
    ) {
      let d = f ?? !1,
        u = i ?? (s ? [s] : void 0),
        l = [];
      u &&
        ((l = [u.flatMap((b) => ot({ abi: [b], eventName: b.name, args: m }))]),
        s && (l = l[0]));
      let g;
      r
        ? (g = yield t.request({
            method: "eth_getLogs",
            params: [{ address: e, topics: l, blockHash: r }],
          }))
        : (g = yield t.request({
            method: "eth_getLogs",
            params: [
              {
                address: e,
                topics: l,
                fromBlock: typeof o == "bigint" ? I(o) : o,
                toBlock: typeof a == "bigint" ? I(a) : a,
              },
            ],
          }));
      let x = g.map((b) => Y(b));
      return u ? $t({ abi: u, logs: x, strict: d }) : x;
    }
  );
}
function ce(t, e) {
  return c(this, null, function* () {
    let {
        abi: r,
        address: o,
        args: a,
        blockHash: s,
        eventName: i,
        fromBlock: m,
        toBlock: f,
        strict: p,
      } = e,
      d = i ? dt({ abi: r, name: i }) : void 0,
      u = d ? void 0 : r.filter((l) => l.type === "event");
    return v(
      t,
      ie,
      "getLogs"
    )({
      address: o,
      args: a,
      blockHash: s,
      event: d,
      events: u,
      fromBlock: m,
      toBlock: f,
      strict: p,
    });
  });
}
n();
function V(t, e) {
  return c(this, null, function* () {
    let f = e,
      { abi: r, address: o, args: a, functionName: s } = f,
      i = S(f, ["abi", "address", "args", "functionName"]),
      m = K({ abi: r, args: a, functionName: s });
    try {
      let { data: p } = yield v(t, Ct, "call")(F(y({}, i), { data: m, to: o }));
      return et({ abi: r, args: a, functionName: s, data: p || "0x" });
    } catch (p) {
      throw at(p, {
        abi: r,
        address: o,
        args: a,
        docsPath: "/docs/contract/readContract",
        functionName: s,
      });
    }
  });
}
n();
function yr(t, e) {
  return c(this, null, function* () {
    let d = e,
      { abi: r, address: o, args: a, dataSuffix: s, functionName: i } = d,
      m = S(d, ["abi", "address", "args", "dataSuffix", "functionName"]),
      f = m.account ? O(m.account) : t.account,
      p = K({ abi: r, args: a, functionName: i });
    try {
      let { data: u } = yield v(
          t,
          Ct,
          "call"
        )(
          F(
            y(
              { batch: !1, data: `${p}${s ? s.replace("0x", "") : ""}`, to: o },
              m
            ),
            { account: f }
          )
        ),
        l = et({ abi: r, args: a, functionName: i, data: u || "0x" }),
        g = r.filter((x) => "name" in x && x.name === e.functionName);
      return {
        result: l,
        request: F(
          y({ abi: g, address: o, args: a, dataSuffix: s, functionName: i }, m),
          { account: f }
        ),
      };
    } catch (u) {
      throw at(u, {
        abi: r,
        address: o,
        args: a,
        docsPath: "/docs/contract/simulateContract",
        functionName: i,
        sender: f?.address,
      });
    }
  });
}
n();
n();
var Po = new Map(),
  bn = new Map(),
  hs = 0;
function J(t, e, r) {
  let o = ++hs,
    a = () => Po.get(t) || [],
    s = () => {
      let d = a();
      Po.set(
        t,
        d.filter((u) => u.id !== o)
      );
    },
    i = () => {
      let d = bn.get(t);
      a().length === 1 && d && d(), s();
    },
    m = a();
  if ((Po.set(t, [...m, { id: o, fns: e }]), m && m.length > 0)) return i;
  let f = {};
  for (let d in e)
    f[d] = (...u) => {
      let l = a();
      if (l.length !== 0) for (let g of l) g.fns[d]?.(...u);
    };
  let p = r(f);
  return typeof p == "function" && bn.set(t, p), i;
}
n();
n();
function zt(t) {
  return c(this, null, function* () {
    return new Promise((e) => setTimeout(e, t));
  });
}
function it(t, { emitOnBegin: e, initialWaitTime: r, interval: o }) {
  let a = !0,
    s = () => (a = !1);
  return (
    c(this, null, function* () {
      let m;
      e && (m = yield t({ unpoll: s }));
      let f = (yield r?.(m)) ?? o;
      yield zt(f);
      let p = () =>
        c(this, null, function* () {
          a && (yield t({ unpoll: s }), yield zt(o), p());
        });
      p();
    }),
    s
  );
}
n();
n();
var gs = new Map(),
  xs = new Map();
function yn(t) {
  let e = (a, s) => ({
      clear: () => s.delete(a),
      get: () => s.get(a),
      set: (i) => s.set(a, i),
    }),
    r = e(t, gs),
    o = e(t, xs);
  return {
    clear: () => {
      r.clear(), o.clear();
    },
    promise: r,
    response: o,
  };
}
function wn(o, a) {
  return c(
    this,
    arguments,
    function* (t, { cacheKey: e, cacheTime: r = Number.POSITIVE_INFINITY }) {
      let s = yn(e),
        i = s.response.get();
      if (i && r > 0 && new Date().getTime() - i.created.getTime() < r)
        return i.data;
      let m = s.promise.get();
      m || ((m = t()), s.promise.set(m));
      try {
        let f = yield m;
        return s.response.set({ created: new Date(), data: f }), f;
      } finally {
        s.promise.clear();
      }
    }
  );
}
var bs = (t) => `blockNumber.${t}`;
function ct(r) {
  return c(this, arguments, function* (t, { cacheTime: e = t.cacheTime } = {}) {
    let o = yield wn(() => t.request({ method: "eth_blockNumber" }), {
      cacheKey: bs(t.uid),
      cacheTime: e,
    });
    return BigInt(o);
  });
}
n();
function Rt(r, o) {
  return c(this, arguments, function* (t, { filter: e }) {
    let a = "strict" in e && e.strict,
      s = yield e.request({ method: "eth_getFilterChanges", params: [e.id] });
    if (typeof s[0] == "string") return s;
    let i = s.map((m) => Y(m));
    return !("abi" in e) || !e.abi ? i : $t({ abi: e.abi, logs: i, strict: a });
  });
}
n();
function Ft(r, o) {
  return c(this, arguments, function* (t, { filter: e }) {
    return e.request({ method: "eth_uninstallFilter", params: [e.id] });
  });
}
function wr(t, e) {
  let {
    abi: r,
    address: o,
    args: a,
    batch: s = !0,
    eventName: i,
    fromBlock: m,
    onError: f,
    onLogs: p,
    poll: d,
    pollingInterval: u = t.pollingInterval,
    strict: l,
  } = e;
  return (
    typeof d < "u"
      ? d
      : typeof m == "bigint"
      ? !0
      : !(
          t.transport.type === "webSocket" ||
          (t.transport.type === "fallback" &&
            t.transport.transports[0].config.type === "webSocket")
        )
  )
    ? (() => {
        let w = l ?? !1,
          E = G(["watchContractEvent", o, a, s, t.uid, i, u, w, m]);
        return J(E, { onLogs: p, onError: f }, (T) => {
          let A;
          m !== void 0 && (A = m - 1n);
          let P,
            R = !1,
            C = it(
              () =>
                c(this, null, function* () {
                  if (!R) {
                    try {
                      P = yield v(
                        t,
                        ne,
                        "createContractEventFilter"
                      )({
                        abi: r,
                        address: o,
                        args: a,
                        eventName: i,
                        strict: w,
                        fromBlock: m,
                      });
                    } catch {}
                    R = !0;
                    return;
                  }
                  try {
                    let k;
                    if (P)
                      k = yield v(t, Rt, "getFilterChanges")({ filter: P });
                    else {
                      let N = yield v(t, ct, "getBlockNumber")({});
                      A && A !== N
                        ? (k = yield v(
                            t,
                            ce,
                            "getContractEvents"
                          )({
                            abi: r,
                            address: o,
                            args: a,
                            eventName: i,
                            fromBlock: A + 1n,
                            toBlock: N,
                            strict: w,
                          }))
                        : (k = []),
                        (A = N);
                    }
                    if (k.length === 0) return;
                    if (s) T.onLogs(k);
                    else for (let N of k) T.onLogs([N]);
                  } catch (k) {
                    P && k instanceof At && (R = !1), T.onError?.(k);
                  }
                }),
              { emitOnBegin: !0, interval: u }
            );
          return () =>
            c(this, null, function* () {
              P && (yield v(t, Ft, "uninstallFilter")({ filter: P })), C();
            });
        });
      })()
    : (() => {
        let w = l ?? !1,
          E = G(["watchContractEvent", o, a, s, t.uid, i, u, w]),
          T = !0,
          A = () => (T = !1);
        return J(
          E,
          { onLogs: p, onError: f },
          (P) => (
            c(this, null, function* () {
              try {
                let R = (() => {
                    if (t.transport.type === "fallback") {
                      let N = t.transport.transports.find(
                        (L) => L.config.type === "webSocket"
                      );
                      return N ? N.value : t.transport;
                    }
                    return t.transport;
                  })(),
                  C = i ? ot({ abi: r, eventName: i, args: a }) : [],
                  { unsubscribe: k } = yield R.subscribe({
                    params: ["logs", { address: o, topics: C }],
                    onData(N) {
                      if (!T) return;
                      let L = N.result;
                      try {
                        let { eventName: M, args: _ } = Gt({
                            abi: r,
                            data: L.data,
                            topics: L.topics,
                            strict: l,
                          }),
                          W = Y(L, { args: _, eventName: M });
                        P.onLogs([W]);
                      } catch (M) {
                        let _, W;
                        if (M instanceof nt || M instanceof ft) {
                          if (l) return;
                          (_ = M.abiItem.name),
                            (W = M.abiItem.inputs?.some(
                              (Ke) => !("name" in Ke && Ke.name)
                            ));
                        }
                        let xe = Y(L, { args: W ? [] : {}, eventName: _ });
                        P.onLogs([xe]);
                      }
                    },
                    onError(N) {
                      P.onError?.(N);
                    },
                  });
                (A = k), T || A();
              } catch (R) {
                f?.(R);
              }
            }),
            () => A()
          )
        );
      })();
}
n();
n();
n();
var mt = class extends H {
  constructor({ docsPath: e } = {}) {
    super(
      [
        "Could not find an Account to execute with this Action.",
        "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",
      ].join(`
`),
      { docsPath: e, docsSlug: "account" }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AccountNotFoundError",
      });
  }
};
n();
function Ue({ chain: t, currentChainId: e }) {
  if (!t) throw new bo();
  if (e !== t.id) throw new xo({ chain: t, currentChainId: e });
}
n();
function En(t, o) {
  var a = o,
    { docsPath: e } = a,
    r = S(a, ["docsPath"]);
  let s = (() => {
    let i = dr(t, r);
    return i instanceof Be ? t : i;
  })();
  return new eo(s, y({ docsPath: e }, r));
}
n();
function me(r, o) {
  return c(this, arguments, function* (t, { serializedTransaction: e }) {
    return t.request(
      { method: "eth_sendRawTransaction", params: [e] },
      { retryCount: 0 }
    );
  });
}
function fe(t, e) {
  return c(this, null, function* () {
    let E = e,
      {
        account: r = t.account,
        chain: o = t.chain,
        accessList: a,
        blobs: s,
        data: i,
        gas: m,
        gasPrice: f,
        maxFeePerBlobGas: p,
        maxFeePerGas: d,
        maxPriorityFeePerGas: u,
        nonce: l,
        to: g,
        value: x,
      } = E,
      b = S(E, [
        "account",
        "chain",
        "accessList",
        "blobs",
        "data",
        "gas",
        "gasPrice",
        "maxFeePerBlobGas",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "to",
        "value",
      ]);
    if (!r) throw new mt({ docsPath: "/docs/actions/wallet/sendTransaction" });
    let w = O(r);
    try {
      ht(e);
      let T;
      if (
        (o !== null &&
          ((T = yield v(t, st, "getChainId")({})),
          Ue({ currentChainId: T, chain: o })),
        w.type === "local")
      ) {
        let C = yield v(
            t,
            kt,
            "prepareTransactionRequest"
          )(
            y(
              {
                account: w,
                accessList: a,
                blobs: s,
                chain: o,
                chainId: T,
                data: i,
                gas: m,
                gasPrice: f,
                maxFeePerBlobGas: p,
                maxFeePerGas: d,
                maxPriorityFeePerGas: u,
                nonce: l,
                parameters: [...Io, "sidecars"],
                to: g,
                value: x,
              },
              b
            )
          ),
          k = o?.serializers?.transaction,
          N = yield w.signTransaction(C, { serializer: k });
        return yield v(
          t,
          me,
          "sendRawTransaction"
        )({ serializedTransaction: N });
      }
      let A = t.chain?.formatters?.transactionRequest?.format,
        R = (A || lt)(
          F(y({}, oe(b, { format: A })), {
            accessList: a,
            blobs: s,
            data: i,
            from: w.address,
            gas: m,
            gasPrice: f,
            maxFeePerBlobGas: p,
            maxFeePerGas: d,
            maxPriorityFeePerGas: u,
            nonce: l,
            to: g,
            value: x,
          })
        );
      return yield t.request(
        { method: "eth_sendTransaction", params: [R] },
        { retryCount: 0 }
      );
    } catch (T) {
      throw En(T, F(y({}, e), { account: w, chain: e.chain || void 0 }));
    }
  });
}
function Er(t, e) {
  return c(this, null, function* () {
    let p = e,
      { abi: r, address: o, args: a, dataSuffix: s, functionName: i } = p,
      m = S(p, ["abi", "address", "args", "dataSuffix", "functionName"]),
      f = K({ abi: r, args: a, functionName: i });
    return v(
      t,
      fe,
      "sendTransaction"
    )(y({ data: `${f}${s ? s.replace("0x", "") : ""}`, to: o }, m));
  });
}
function ys({ abi: t, address: e, client: r }) {
  let o = r,
    [a, s] = o
      ? "public" in o && "wallet" in o
        ? [o.public, o.wallet]
        : "public" in o
        ? [o.public, void 0]
        : "wallet" in o
        ? [void 0, o.wallet]
        : [o, o]
      : [void 0, void 0],
    i = a != null,
    m = s != null,
    f = {},
    p = !1,
    d = !1,
    u = !1;
  for (let l of t)
    if (
      (l.type === "function"
        ? l.stateMutability === "view" || l.stateMutability === "pure"
          ? (p = !0)
          : (d = !0)
        : l.type === "event" && (u = !0),
      p && d && u)
    )
      break;
  return (
    i &&
      (p &&
        (f.read = new Proxy(
          {},
          {
            get(l, g) {
              return (...x) => {
                let { args: b, options: w } = Tr(x);
                return v(
                  a,
                  V,
                  "readContract"
                )(y({ abi: t, address: e, functionName: g, args: b }, w));
              };
            },
          }
        )),
      d &&
        (f.simulate = new Proxy(
          {},
          {
            get(l, g) {
              return (...x) => {
                let { args: b, options: w } = Tr(x);
                return v(
                  a,
                  yr,
                  "simulateContract"
                )(y({ abi: t, address: e, functionName: g, args: b }, w));
              };
            },
          }
        )),
      u &&
        ((f.createEventFilter = new Proxy(
          {},
          {
            get(l, g) {
              return (...x) => {
                let b = t.find((T) => T.type === "event" && T.name === g),
                  { args: w, options: E } = ko(x, b);
                return v(
                  a,
                  ne,
                  "createContractEventFilter"
                )(y({ abi: t, address: e, eventName: g, args: w }, E));
              };
            },
          }
        )),
        (f.getEvents = new Proxy(
          {},
          {
            get(l, g) {
              return (...x) => {
                let b = t.find((T) => T.type === "event" && T.name === g),
                  { args: w, options: E } = ko(x, b);
                return v(
                  a,
                  ce,
                  "getContractEvents"
                )(y({ abi: t, address: e, eventName: g, args: w }, E));
              };
            },
          }
        )),
        (f.watchEvent = new Proxy(
          {},
          {
            get(l, g) {
              return (...x) => {
                let b = t.find((T) => T.type === "event" && T.name === g),
                  { args: w, options: E } = ko(x, b);
                return v(
                  a,
                  wr,
                  "watchContractEvent"
                )(y({ abi: t, address: e, eventName: g, args: w }, E));
              };
            },
          }
        )))),
    m &&
      d &&
      (f.write = new Proxy(
        {},
        {
          get(l, g) {
            return (...x) => {
              let { args: b, options: w } = Tr(x);
              return v(
                s,
                Er,
                "writeContract"
              )(y({ abi: t, address: e, functionName: g, args: b }, w));
            };
          },
        }
      )),
    (i || m) &&
      d &&
      (f.estimateGas = new Proxy(
        {},
        {
          get(l, g) {
            return (...x) => {
              let { args: b, options: w } = Tr(x);
              return v(
                a ?? s,
                br,
                "estimateContractGas"
              )(
                F(y({ abi: t, address: e, functionName: g, args: b }, w), {
                  account: w.account ?? s.account,
                })
              );
            };
          },
        }
      )),
    (f.address = e),
    (f.abi = t),
    f
  );
}
function Tr(t) {
  let e = t.length && Array.isArray(t[0]),
    r = e ? t[0] : [],
    o = (e ? t[1] : t[0]) ?? {};
  return { args: r, options: o };
}
function ko(t, e) {
  let r = !1;
  Array.isArray(t[0])
    ? (r = !0)
    : t.length === 1
    ? (r = e.inputs.some((s) => s.indexed))
    : t.length === 2 && (r = !0);
  let o = r ? t[0] : void 0,
    a = (r ? t[1] : t[0]) ?? {};
  return { args: o, options: a };
}
n();
function Tn(r, o) {
  return c(this, arguments, function* (t, { chain: e }) {
    let {
      id: a,
      name: s,
      nativeCurrency: i,
      rpcUrls: m,
      blockExplorers: f,
    } = e;
    yield t.request(
      {
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: I(a),
            chainName: s,
            nativeCurrency: i,
            rpcUrls: m.default.http,
            blockExplorerUrls: f
              ? Object.values(f).map(({ url: p }) => p)
              : void 0,
          },
        ],
      },
      { retryCount: 0 }
    );
  });
}
n();
n();
n();
function vn(t) {
  let e = D(`0x${t.substring(4)}`).substring(26);
  return Ae(`0x${e}`);
}
n();
var vr = 256,
  Ar;
function An(t = 11) {
  if (!Ar || vr + t > 256 * 2) {
    (Ar = ""), (vr = 0);
    for (let e = 0; e < 256; e++)
      Ar += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
  }
  return Ar.substring(vr, vr++ + t);
}
function Ot(t) {
  let {
      batch: e,
      cacheTime: r = t.pollingInterval ?? 4e3,
      ccipRead: o,
      key: a = "base",
      name: s = "Base Client",
      pollingInterval: i = 4e3,
      type: m = "base",
    } = t,
    f = t.chain,
    p = t.account ? O(t.account) : void 0,
    {
      config: d,
      request: u,
      value: l,
    } = t.transport({ chain: f, pollingInterval: i }),
    g = y(y({}, d), l),
    x = {
      account: p,
      batch: e,
      cacheTime: r,
      ccipRead: o,
      chain: f,
      key: a,
      name: s,
      pollingInterval: i,
      request: u,
      transport: g,
      type: m,
      uid: An(),
    };
  function b(w) {
    return (E) => {
      let T = E(w);
      for (let P in x) delete T[P];
      let A = y(y({}, w), T);
      return Object.assign(A, { extend: b(A) });
    };
  }
  return Object.assign(x, { extend: b(x) });
}
function ws() {
  return null;
}
n();
n();
n();
n();
function ue(
  t,
  { delay: e = 100, retryCount: r = 2, shouldRetry: o = () => !0 } = {}
) {
  return new Promise((a, s) => {
    let i = (...f) =>
      c(this, [...f], function* ({ count: m = 0 } = {}) {
        let p = (u) =>
          c(this, [u], function* ({ error: d }) {
            let l = typeof e == "function" ? e({ count: m, error: d }) : e;
            l && (yield zt(l)), i({ count: m + 1 });
          });
        try {
          let d = yield t();
          a(d);
        } catch (d) {
          if (m < r && (yield o({ count: m, error: d })))
            return p({ error: d });
          s(d);
        }
      });
    i();
  });
}
function Cn(t, e = {}) {
  return (a, ...s) =>
    c(this, [a, ...s], function* (r, o = {}) {
      let { retryDelay: i = 150, retryCount: m = 3 } = y(y({}, e), o);
      return ue(
        () =>
          c(this, null, function* () {
            try {
              return yield t(r);
            } catch (f) {
              let p = f;
              switch (p.code) {
                case tr.code:
                  throw new tr(p);
                case er.code:
                  throw new er(p);
                case rr.code:
                  throw new rr(p);
                case or.code:
                  throw new or(p);
                case Dt.code:
                  throw new Dt(p);
                case At.code:
                  throw new At(p);
                case nr.code:
                  throw new nr(p);
                case ar.code:
                  throw new ar(p);
                case re.code:
                  throw new re(p);
                case sr.code:
                  throw new sr(p);
                case Fe.code:
                  throw new Fe(p);
                case ir.code:
                  throw new ir(p);
                case Ut.code:
                  throw new Ut(p);
                case cr.code:
                  throw new cr(p);
                case mr.code:
                  throw new mr(p);
                case fr.code:
                  throw new fr(p);
                case ur.code:
                  throw new ur(p);
                case pr.code:
                  throw new pr(p);
                case 5e3:
                  throw new Ut(p);
                default:
                  throw f instanceof H ? f : new so(p);
              }
            }
          }),
        {
          delay: ({ count: f, error: p }) => {
            if (p && p instanceof vt) {
              let d = p?.headers?.get("Retry-After");
              if (d?.match(/\d/)) return Number.parseInt(d) * 1e3;
            }
            return ~~(1 << f) * i;
          },
          retryCount: m,
          shouldRetry: ({ error: f }) => Es(f),
        }
      );
    });
}
function Es(t) {
  return "code" in t && typeof t.code == "number"
    ? t.code === -1 || t.code === Fe.code || t.code === Dt.code
    : t instanceof vt && t.status
    ? t.status === 403 ||
      t.status === 408 ||
      t.status === 413 ||
      t.status === 429 ||
      t.status === 500 ||
      t.status === 502 ||
      t.status === 503 ||
      t.status === 504
    : !0;
}
function xt(
  {
    key: t,
    name: e,
    request: r,
    retryCount: o = 3,
    retryDelay: a = 150,
    timeout: s,
    type: i,
  },
  m
) {
  return {
    config: {
      key: t,
      name: e,
      request: r,
      retryCount: o,
      retryDelay: a,
      timeout: s,
      type: i,
    },
    request: Cn(r, { retryCount: o, retryDelay: a }),
    value: m,
  };
}
function Ts(t, e = {}) {
  let { key: r = "custom", name: o = "Custom Provider", retryDelay: a } = e;
  return ({ retryCount: s }) =>
    xt({
      key: r,
      name: o,
      request: t.request.bind(t),
      retryCount: e.retryCount ?? s,
      retryDelay: a,
      type: "custom",
    });
}
n();
function vs(t, e = {}) {
  let {
    key: r = "fallback",
    name: o = "Fallback",
    rank: a = !1,
    retryCount: s,
    retryDelay: i,
  } = e;
  return (u) => {
    var l = u,
      { chain: m, pollingInterval: f = 4e3, timeout: p } = l,
      d = S(l, ["chain", "pollingInterval", "timeout"]);
    let g = t,
      x = () => {},
      b = xt(
        {
          key: r,
          name: o,
          request(A) {
            return c(this, arguments, function* ({ method: E, params: T }) {
              let P = (R = 0) =>
                c(this, null, function* () {
                  let C = g[R](
                    F(y({}, d), { chain: m, retryCount: 0, timeout: p })
                  );
                  try {
                    let k = yield C.request({ method: E, params: T });
                    return (
                      x({
                        method: E,
                        params: T,
                        response: k,
                        transport: C,
                        status: "success",
                      }),
                      k
                    );
                  } catch (k) {
                    if (
                      (x({
                        error: k,
                        method: E,
                        params: T,
                        transport: C,
                        status: "error",
                      }),
                      As(k) || R === g.length - 1)
                    )
                      throw k;
                    return P(R + 1);
                  }
                });
              return P();
            });
          },
          retryCount: s,
          retryDelay: i,
          type: "fallback",
        },
        {
          onResponse: (E) => (x = E),
          transports: g.map((E) => E({ chain: m, retryCount: 0 })),
        }
      );
    if (a) {
      let E = typeof a == "object" ? a : {};
      Cs({
        chain: m,
        interval: E.interval ?? f,
        onTransports: (T) => (g = T),
        sampleCount: E.sampleCount,
        timeout: E.timeout,
        transports: g,
        weights: E.weights,
      });
    }
    return b;
  };
}
function As(t) {
  return (
    "code" in t &&
    typeof t.code == "number" &&
    (t.code === re.code || t.code === Ut.code || t.code === 5e3)
  );
}
function Cs({
  chain: t,
  interval: e = 4e3,
  onTransports: r,
  sampleCount: o = 10,
  timeout: a = 1e3,
  transports: s,
  weights: i = {},
}) {
  let { stability: m = 0.7, latency: f = 0.3 } = i,
    p = [],
    d = () =>
      c(this, null, function* () {
        let u = yield Promise.all(
          s.map((x) =>
            c(this, null, function* () {
              let b = x({ chain: t, retryCount: 0, timeout: a }),
                w = Date.now(),
                E,
                T;
              try {
                yield b.request({ method: "net_listening" }), (T = 1);
              } catch {
                T = 0;
              } finally {
                E = Date.now();
              }
              return { latency: E - w, success: T };
            })
          )
        );
        p.push(u), p.length > o && p.shift();
        let l = Math.max(
            ...p.map((x) => Math.max(...x.map(({ latency: b }) => b)))
          ),
          g = s
            .map((x, b) => {
              let w = p.map((R) => R[b].latency),
                T = 1 - w.reduce((R, C) => R + C, 0) / w.length / l,
                A = p.map((R) => R[b].success),
                P = A.reduce((R, C) => R + C, 0) / A.length;
              return P === 0 ? [0, b] : [f * T + m * P, b];
            })
            .sort((x, b) => b[0] - x[0]);
        r(g.map(([, x]) => s[x])), yield zt(e), d();
      });
  d();
}
n();
n();
var jt = class extends H {
  constructor() {
    super(
      "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
      { docsPath: "/docs/clients/intro" }
    );
  }
};
n();
n();
function Le(
  t,
  { errorInstance: e = new Error("timed out"), timeout: r, signal: o }
) {
  return new Promise((a, s) => {
    c(this, null, function* () {
      let i;
      try {
        let m = new AbortController();
        r > 0 &&
          (i = setTimeout(() => {
            o ? m.abort() : s(e);
          }, r)),
          a(yield t({ signal: m?.signal || null }));
      } catch (m) {
        m.name === "AbortError" && s(e), s(m);
      } finally {
        clearTimeout(i);
      }
    });
  });
}
n();
function Is() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    },
  };
}
var Me = Is();
function In(t, e = {}) {
  return {
    request(o) {
      return c(this, null, function* () {
        let {
            body: a,
            onRequest: s = e.onRequest,
            onResponse: i = e.onResponse,
            timeout: m = e.timeout ?? 1e4,
          } = o,
          f = y(y({}, e.fetchOptions ?? {}), o.fetchOptions ?? {}),
          { headers: p, method: d, signal: u } = f;
        try {
          let l = yield Le(
            (b) =>
              c(this, [b], function* ({ signal: x }) {
                let w = F(y({}, f), {
                    body: Array.isArray(a)
                      ? G(
                          a.map((A) =>
                            y({ jsonrpc: "2.0", id: A.id ?? Me.take() }, A)
                          )
                        )
                      : G(y({ jsonrpc: "2.0", id: a.id ?? Me.take() }, a)),
                    headers: F(y({}, p), {
                      "Content-Type": "application/json",
                    }),
                    method: d || "POST",
                    signal: u || (m > 0 ? x : null),
                  }),
                  E = new Request(t, w);
                return s && (yield s(E)), yield fetch(t, w);
              }),
            {
              errorInstance: new ee({ body: a, url: t }),
              timeout: m,
              signal: !0,
            }
          );
          i && (yield i(l));
          let g;
          if (
            (l.headers.get("Content-Type")?.startsWith("application/json")
              ? (g = yield l.json())
              : ((g = yield l.text()), (g = JSON.parse(g || "{}"))),
            !l.ok)
          )
            throw new vt({
              body: a,
              details: G(g.error) || l.statusText,
              headers: l.headers,
              status: l.status,
              url: t,
            });
          return g;
        } catch (l) {
          throw l instanceof vt || l instanceof ee
            ? l
            : new vt({ body: a, details: l.message, url: t });
        }
      });
    },
  };
}
function Ps(t, e = {}) {
  let {
    batch: r,
    fetchOptions: o,
    key: a = "http",
    name: s = "HTTP JSON-RPC",
    onFetchRequest: i,
    onFetchResponse: m,
    retryDelay: f,
  } = e;
  return ({ chain: p, retryCount: d, timeout: u }) => {
    let { batchSize: l = 1e3, wait: g = 0 } = typeof r == "object" ? r : {},
      x = e.retryCount ?? d,
      b = u ?? e.timeout ?? 1e4,
      w = t || p?.rpcUrls.default.http[0];
    if (!w) throw new jt();
    let E = In(w, { fetchOptions: o, onRequest: i, onResponse: m, timeout: b });
    return xt(
      {
        key: a,
        name: s,
        request(R) {
          return c(this, arguments, function* ({ method: A, params: P }) {
            let C = { method: A, params: P },
              { schedule: k } = hr({
                id: w,
                wait: g,
                shouldSplitBatch(_) {
                  return _.length > l;
                },
                fn: (_) => E.request({ body: _ }),
                sort: (_, W) => _.id - W.id,
              }),
              N = (_) =>
                c(this, null, function* () {
                  return r ? k(_) : [yield E.request({ body: _ })];
                }),
              [{ error: L, result: M }] = yield N(C);
            if (L) throw new Re({ body: C, error: L, url: w });
            return M;
          });
        },
        retryCount: x,
        retryDelay: f,
        timeout: b,
        type: "http",
      },
      { fetchOptions: o, url: w }
    );
  };
}
n();
n();
n();
n();
function pe(t, e) {
  if (!(t instanceof H)) return !1;
  let r = t.walk((o) => o instanceof te);
  return r instanceof te
    ? !!(
        r.data?.errorName === "ResolverNotFound" ||
        r.data?.errorName === "ResolverWildcardNotSupported" ||
        r.data?.errorName === "ResolverNotContract" ||
        r.data?.errorName === "ResolverError" ||
        r.data?.errorName === "HttpError" ||
        r.reason?.includes(
          "Wildcard on non-extended resolvers is not supported"
        ) ||
        (e === "reverse" && r.reason === rn[50])
      )
    : !1;
}
n();
n();
function Cr(t) {
  if (t.length !== 66 || t.indexOf("[") !== 0 || t.indexOf("]") !== 65)
    return null;
  let e = `0x${t.slice(1, 65)}`;
  return B(e) ? e : null;
}
function Vt(t) {
  let e = new Uint8Array(32).fill(0);
  if (!t) return j(e);
  let r = t.split(".");
  for (let o = r.length - 1; o >= 0; o -= 1) {
    let a = Cr(r[o]),
      s = a ? z(a) : D(Q(r[o]), "bytes");
    e = D(pt([e, s]), "bytes");
  }
  return j(e);
}
n();
n();
function Pn(t) {
  return `[${t.slice(2)}]`;
}
n();
function Ro(t) {
  let e = new Uint8Array(32).fill(0);
  return t ? Cr(t) || D(Q(t)) : j(e);
}
function Bt(t) {
  let e = t.replace(/^\.|\.$/gm, "");
  if (e.length === 0) return new Uint8Array(1);
  let r = new Uint8Array(Q(e).byteLength + 2),
    o = 0,
    a = e.split(".");
  for (let s = 0; s < a.length; s++) {
    let i = Q(a[s]);
    i.byteLength > 255 && (i = Q(Pn(Ro(a[s])))),
      (r[o] = i.length),
      r.set(i, o + 1),
      (o += i.length + 1);
  }
  return r.byteLength !== o + 1 ? r.slice(0, o + 1) : r;
}
function kn(f, p) {
  return c(
    this,
    arguments,
    function* (
      t,
      {
        blockNumber: e,
        blockTag: r,
        coinType: o,
        name: a,
        gatewayUrls: s,
        strict: i,
        universalResolverAddress: m,
      }
    ) {
      let d = m;
      if (!d) {
        if (!t.chain)
          throw new Error(
            "client chain not configured. universalResolverAddress is required."
          );
        d = rt({
          blockNumber: e,
          chain: t.chain,
          contract: "ensUniversalResolver",
        });
      }
      try {
        let u = K(
            y(
              { abi: go, functionName: "addr" },
              o != null ? { args: [Vt(a), BigInt(o)] } : { args: [Vt(a)] }
            )
          ),
          l = {
            address: d,
            abi: lr,
            functionName: "resolve",
            args: [$(Bt(a)), u],
            blockNumber: e,
            blockTag: r,
          },
          g = v(t, V, "readContract"),
          x = s ? yield g(F(y({}, l), { args: [...l.args, s] })) : yield g(l);
        if (x[0] === "0x") return null;
        let b = et({
          abi: go,
          args: o != null ? [Vt(a), BigInt(o)] : void 0,
          functionName: "addr",
          data: x[0],
        });
        return b === "0x" || Te(b) === "0x00" ? null : b;
      } catch (u) {
        if (i) throw u;
        if (pe(u, "resolve")) return null;
        throw u;
      }
    }
  );
}
n();
n();
n();
n();
var Ir = class extends H {
    constructor({ data: e }) {
      super(
        "Unable to extract image from metadata. The metadata may be malformed or invalid.",
        {
          metaMessages: [
            "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
            "",
            `Provided data: ${JSON.stringify(e)}`,
          ],
        }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "EnsAvatarInvalidMetadataError",
        });
    }
  },
  bt = class extends H {
    constructor({ reason: e }) {
      super(`ENS NFT avatar URI is invalid. ${e}`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "EnsAvatarInvalidNftUriError",
        });
    }
  },
  Wt = class extends H {
    constructor({ uri: e }) {
      super(
        `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "EnsAvatarUriResolutionError",
        });
    }
  },
  Ge = class extends H {
    constructor({ namespace: e }) {
      super(
        `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "EnsAvatarUnsupportedNamespaceError",
        });
    }
  };
var ks =
    /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
  Rs =
    /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
  Fs = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
  Bs = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
function Ss(t) {
  return c(this, null, function* () {
    try {
      let e = yield fetch(t, { method: "HEAD" });
      return e.status === 200
        ? e.headers.get("content-type")?.startsWith("image/")
        : !1;
    } catch (e) {
      return (typeof e == "object" && typeof e.response < "u") ||
        !globalThis.hasOwnProperty("Image")
        ? !1
        : new Promise((r) => {
            let o = new Image();
            (o.onload = () => {
              r(!0);
            }),
              (o.onerror = () => {
                r(!1);
              }),
              (o.src = t);
          });
    }
  });
}
function Rn(t, e) {
  return t ? (t.endsWith("/") ? t.slice(0, -1) : t) : e;
}
function Fo({ uri: t, gatewayUrls: e }) {
  let r = Fs.test(t);
  if (r) return { uri: t, isOnChain: !0, isEncoded: r };
  let o = Rn(e?.ipfs, "https://ipfs.io"),
    a = Rn(e?.arweave, "https://arweave.net"),
    s = t.match(ks),
    { protocol: i, subpath: m, target: f, subtarget: p = "" } = s?.groups || {},
    d = i === "ipns:/" || m === "ipns/",
    u = i === "ipfs:/" || m === "ipfs/" || Rs.test(t);
  if (t.startsWith("http") && !d && !u) {
    let g = t;
    return (
      e?.arweave && (g = t.replace(/https:\/\/arweave.net/g, e?.arweave)),
      { uri: g, isOnChain: !1, isEncoded: !1 }
    );
  }
  if ((d || u) && f)
    return {
      uri: `${o}/${d ? "ipns" : "ipfs"}/${f}${p}`,
      isOnChain: !1,
      isEncoded: !1,
    };
  if (i === "ar:/" && f)
    return { uri: `${a}/${f}${p || ""}`, isOnChain: !1, isEncoded: !1 };
  let l = t.replace(Bs, "");
  if (
    (l.startsWith("<svg") && (l = `data:image/svg+xml;base64,${btoa(l)}`),
    l.startsWith("data:") || l.startsWith("{"))
  )
    return { uri: l, isOnChain: !0, isEncoded: !1 };
  throw new Wt({ uri: t });
}
function Bo(t) {
  if (
    typeof t != "object" ||
    (!("image" in t) && !("image_url" in t) && !("image_data" in t))
  )
    throw new Ir({ data: t });
  return t.image || t.image_url || t.image_data;
}
function Fn(r) {
  return c(this, arguments, function* ({ gatewayUrls: t, uri: e }) {
    try {
      let o = yield fetch(e).then((s) => s.json());
      return yield Pr({ gatewayUrls: t, uri: Bo(o) });
    } catch {
      throw new Wt({ uri: e });
    }
  });
}
function Pr(r) {
  return c(this, arguments, function* ({ gatewayUrls: t, uri: e }) {
    let { uri: o, isOnChain: a } = Fo({ uri: e, gatewayUrls: t });
    if (a || (yield Ss(o))) return o;
    throw new Wt({ uri: e });
  });
}
function Bn(t) {
  let e = t;
  e.startsWith("did:nft:") &&
    (e = e.replace("did:nft:", "").replace(/_/g, "/"));
  let [r, o, a] = e.split("/"),
    [s, i] = r.split(":"),
    [m, f] = o.split(":");
  if (!s || s.toLowerCase() !== "eip155")
    throw new bt({ reason: "Only EIP-155 supported" });
  if (!i) throw new bt({ reason: "Chain ID not found" });
  if (!f) throw new bt({ reason: "Contract address not found" });
  if (!a) throw new bt({ reason: "Token ID not found" });
  if (!m) throw new bt({ reason: "ERC namespace not found" });
  return {
    chainID: Number.parseInt(i),
    namespace: m.toLowerCase(),
    contractAddress: f,
    tokenID: a,
  };
}
function Sn(r, o) {
  return c(this, arguments, function* (t, { nft: e }) {
    if (e.namespace === "erc721")
      return V(t, {
        address: e.contractAddress,
        abi: [
          {
            name: "tokenURI",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "tokenId", type: "uint256" }],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        functionName: "tokenURI",
        args: [BigInt(e.tokenID)],
      });
    if (e.namespace === "erc1155")
      return V(t, {
        address: e.contractAddress,
        abi: [
          {
            name: "uri",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "_id", type: "uint256" }],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        functionName: "uri",
        args: [BigInt(e.tokenID)],
      });
    throw new Ge({ namespace: e.namespace });
  });
}
function Nn(o, a) {
  return c(this, arguments, function* (t, { gatewayUrls: e, record: r }) {
    return /eip155:/i.test(r)
      ? Ns(t, { gatewayUrls: e, record: r })
      : Pr({ uri: r, gatewayUrls: e });
  });
}
function Ns(o, a) {
  return c(this, arguments, function* (t, { gatewayUrls: e, record: r }) {
    let s = Bn(r),
      i = yield Sn(t, { nft: s }),
      { uri: m, isOnChain: f, isEncoded: p } = Fo({ uri: i, gatewayUrls: e });
    if (
      f &&
      (m.includes("data:application/json;base64,") || m.startsWith("{"))
    ) {
      let u = p ? atob(m.replace("data:application/json;base64,", "")) : m,
        l = JSON.parse(u);
      return Pr({ uri: Bo(l), gatewayUrls: e });
    }
    let d = s.tokenID;
    return (
      s.namespace === "erc1155" && (d = d.replace("0x", "").padStart(64, "0")),
      Fn({ gatewayUrls: e, uri: m.replace(/(?:0x)?{id}/, d) })
    );
  });
}
n();
function kr(f, p) {
  return c(
    this,
    arguments,
    function* (
      t,
      {
        blockNumber: e,
        blockTag: r,
        name: o,
        key: a,
        gatewayUrls: s,
        strict: i,
        universalResolverAddress: m,
      }
    ) {
      let d = m;
      if (!d) {
        if (!t.chain)
          throw new Error(
            "client chain not configured. universalResolverAddress is required."
          );
        d = rt({
          blockNumber: e,
          chain: t.chain,
          contract: "ensUniversalResolver",
        });
      }
      try {
        let u = {
            address: d,
            abi: lr,
            functionName: "resolve",
            args: [
              $(Bt(o)),
              K({ abi: ho, functionName: "text", args: [Vt(o), a] }),
            ],
            blockNumber: e,
            blockTag: r,
          },
          l = v(t, V, "readContract"),
          g = s ? yield l(F(y({}, u), { args: [...u.args, s] })) : yield l(u);
        if (g[0] === "0x") return null;
        let x = et({ abi: ho, functionName: "text", data: g[0] });
        return x === "" ? null : x;
      } catch (u) {
        if (i) throw u;
        if (pe(u, "resolve")) return null;
        throw u;
      }
    }
  );
}
function qn(f, p) {
  return c(
    this,
    arguments,
    function* (
      t,
      {
        blockNumber: e,
        blockTag: r,
        assetGatewayUrls: o,
        name: a,
        gatewayUrls: s,
        strict: i,
        universalResolverAddress: m,
      }
    ) {
      let d = yield v(
        t,
        kr,
        "getEnsText"
      )({
        blockNumber: e,
        blockTag: r,
        key: "avatar",
        name: a,
        universalResolverAddress: m,
        gatewayUrls: s,
        strict: i,
      });
      if (!d) return null;
      try {
        return yield Nn(t, { record: d, gatewayUrls: o });
      } catch {
        return null;
      }
    }
  );
}
n();
function _n(m, f) {
  return c(
    this,
    arguments,
    function* (
      t,
      {
        address: e,
        blockNumber: r,
        blockTag: o,
        gatewayUrls: a,
        strict: s,
        universalResolverAddress: i,
      }
    ) {
      let p = i;
      if (!p) {
        if (!t.chain)
          throw new Error(
            "client chain not configured. universalResolverAddress is required."
          );
        p = rt({
          blockNumber: r,
          chain: t.chain,
          contract: "ensUniversalResolver",
        });
      }
      let d = `${e.toLowerCase().substring(2)}.addr.reverse`;
      try {
        let u = {
            address: p,
            abi: cn,
            functionName: "reverse",
            args: [$(Bt(d))],
            blockNumber: r,
            blockTag: o,
          },
          l = v(t, V, "readContract"),
          [g, x] = a
            ? yield l(F(y({}, u), { args: [...u.args, a] }))
            : yield l(u);
        return e.toLowerCase() !== x.toLowerCase() ? null : g;
      } catch (u) {
        if (s) throw u;
        if (pe(u, "reverse")) return null;
        throw u;
      }
    }
  );
}
n();
function Hn(s, i) {
  return c(
    this,
    arguments,
    function* (
      t,
      { blockNumber: e, blockTag: r, name: o, universalResolverAddress: a }
    ) {
      let m = a;
      if (!m) {
        if (!t.chain)
          throw new Error(
            "client chain not configured. universalResolverAddress is required."
          );
        m = rt({
          blockNumber: e,
          chain: t.chain,
          contract: "ensUniversalResolver",
        });
      }
      let [f] = yield v(
        t,
        V,
        "readContract"
      )({
        address: m,
        abi: [
          {
            inputs: [{ type: "bytes" }],
            name: "findResolver",
            outputs: [{ type: "address" }, { type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        functionName: "findResolver",
        args: [$(Bt(o))],
        blockNumber: e,
        blockTag: r,
      });
      return f;
    }
  );
}
n();
function Dn(t) {
  return c(this, null, function* () {
    let e = Pt(t, { method: "eth_newBlockFilter" }),
      r = yield t.request({ method: "eth_newBlockFilter" });
    return { id: r, request: e(r), type: "block" };
  });
}
n();
function Rr(f) {
  return c(
    this,
    arguments,
    function* (
      t,
      {
        address: e,
        args: r,
        event: o,
        events: a,
        fromBlock: s,
        strict: i,
        toBlock: m,
      } = {}
    ) {
      let p = a ?? (o ? [o] : void 0),
        d = Pt(t, { method: "eth_newFilter" }),
        u = [];
      p &&
        ((u = [p.flatMap((g) => ot({ abi: [g], eventName: g.name, args: r }))]),
        o && (u = u[0]));
      let l = yield t.request({
        method: "eth_newFilter",
        params: [
          y(
            {
              address: e,
              fromBlock: typeof s == "bigint" ? I(s) : s,
              toBlock: typeof m == "bigint" ? I(m) : m,
            },
            u.length ? { topics: u } : {}
          ),
        ],
      });
      return {
        abi: p,
        args: r,
        eventName: o ? o.name : void 0,
        fromBlock: s,
        id: l,
        request: d(l),
        strict: !!i,
        toBlock: m,
        type: "event",
      };
    }
  );
}
n();
function Fr(t) {
  return c(this, null, function* () {
    let e = Pt(t, { method: "eth_newPendingTransactionFilter" }),
      r = yield t.request({ method: "eth_newPendingTransactionFilter" });
    return { id: r, request: e(r), type: "transaction" };
  });
}
n();
function Un(a, s) {
  return c(
    this,
    arguments,
    function* (t, { address: e, blockNumber: r, blockTag: o = "latest" }) {
      let i = r ? I(r) : void 0,
        m = yield t.request({ method: "eth_getBalance", params: [e, i || o] });
      return BigInt(m);
    }
  );
}
n();
function Ln(t) {
  return c(this, null, function* () {
    let e = yield t.request({ method: "eth_blobBaseFee" });
    return BigInt(e);
  });
}
n();
function Mn(a) {
  return c(
    this,
    arguments,
    function* (
      t,
      { blockHash: e, blockNumber: r, blockTag: o = "latest" } = {}
    ) {
      let s = r !== void 0 ? I(r) : void 0,
        i;
      return (
        e
          ? (i = yield t.request({
              method: "eth_getBlockTransactionCountByHash",
              params: [e],
            }))
          : (i = yield t.request({
              method: "eth_getBlockTransactionCountByNumber",
              params: [s || o],
            })),
        U(i)
      );
    }
  );
}
n();
function Gn(a, s) {
  return c(
    this,
    arguments,
    function* (t, { address: e, blockNumber: r, blockTag: o = "latest" }) {
      let i = r !== void 0 ? I(r) : void 0,
        m = yield t.request({ method: "eth_getCode", params: [e, i || o] });
      if (m !== "0x") return m;
    }
  );
}
n();
n();
function $n(t) {
  return {
    baseFeePerGas: t.baseFeePerGas.map((e) => BigInt(e)),
    gasUsedRatio: t.gasUsedRatio,
    oldestBlock: BigInt(t.oldestBlock),
    reward: t.reward?.map((e) => e.map((r) => BigInt(r))),
  };
}
function zn(s, i) {
  return c(
    this,
    arguments,
    function* (
      t,
      {
        blockCount: e,
        blockNumber: r,
        blockTag: o = "latest",
        rewardPercentiles: a,
      }
    ) {
      let m = r ? I(r) : void 0,
        f = yield t.request({
          method: "eth_feeHistory",
          params: [I(e), m || o, a],
        });
      return $n(f);
    }
  );
}
n();
function On(r, o) {
  return c(this, arguments, function* (t, { filter: e }) {
    let a = e.strict ?? !1,
      i = (yield e.request({
        method: "eth_getFilterLogs",
        params: [e.id],
      })).map((m) => Y(m));
    return e.abi ? $t({ abi: e.abi, logs: i, strict: a }) : i;
  });
}
n();
n();
n();
n();
function qs({ chains: t, id: e }) {
  return t.find((r) => r.id === e);
}
n();
var jn = /^(.*)\[([0-9]*)\]$/,
  Br = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  Sr =
    /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
n();
n();
n();
var So = new Map();
function Vn(t) {
  return c(this, null, function* () {
    let { getSocket: e, key: r = "socket", reconnect: o = !0, url: a } = t,
      { attempts: s = 5, delay: i = 2e3 } = typeof o == "object" ? o : {},
      m = So.get(`${r}:${a}`);
    if (m) return m;
    let f = 0,
      { schedule: p } = hr({
        id: `${r}:${a}`,
        fn: () =>
          c(this, null, function* () {
            let l = new Map(),
              g = new Map(),
              x,
              b;
            function w() {
              return c(this, null, function* () {
                return e({
                  onError(E) {
                    x = E;
                    for (let T of l.values()) T.onError?.(x);
                    for (let T of g.values()) T.onError?.(x);
                    l.clear(),
                      g.clear(),
                      o &&
                        f < s &&
                        setTimeout(
                          () =>
                            c(this, null, function* () {
                              f++, (b = yield w().catch(console.error));
                            }),
                          i
                        );
                  },
                  onOpen() {
                    (x = void 0), (f = 0);
                  },
                  onResponse(E) {
                    let T = E.method === "eth_subscription",
                      A = T ? E.params.subscription : E.id,
                      P = T ? g : l,
                      R = P.get(A);
                    R && R.onResponse(E), T || P.delete(A);
                  },
                });
              });
            }
            return (
              (b = yield w()),
              (x = void 0),
              (m = {
                close() {
                  b.close(), So.delete(`${r}:${a}`);
                },
                socket: b,
                request({ body: E, onError: T, onResponse: A }) {
                  x && T && T(x);
                  let P = E.id ?? Me.take(),
                    R = (C) => {
                      (typeof C.id == "number" && P !== C.id) ||
                        (E.method === "eth_subscribe" &&
                          typeof C.result == "string" &&
                          g.set(C.result, { onResponse: R, onError: T }),
                        E.method === "eth_unsubscribe" &&
                          g.delete(E.params?.[0]),
                        A(C));
                    };
                  l.set(P, { onResponse: R, onError: T });
                  try {
                    b.request({ body: y({ jsonrpc: "2.0", id: P }, E) });
                  } catch (C) {
                    T?.(C);
                  }
                },
                requestAsync({ body: E, timeout: T = 1e4 }) {
                  return Le(
                    () =>
                      new Promise((A, P) =>
                        this.request({ body: E, onError: P, onResponse: A })
                      ),
                    { errorInstance: new ee({ body: E, url: a }), timeout: T }
                  );
                },
                requests: l,
                subscriptions: g,
                url: a,
              }),
              So.set(`${r}:${a}`, m),
              [m]
            );
          }),
      }),
      [d, [u]] = yield p();
    return u;
  });
}
function de(r) {
  return c(this, arguments, function* (t, e = {}) {
    let { reconnect: o } = e;
    return Vn({
      getSocket(f) {
        return c(
          this,
          arguments,
          function* ({ onError: s, onOpen: i, onResponse: m }) {
            let p = yield import("./chunk-6M3ZGJME.js").then(
                (x) => x.WebSocket
              ),
              d = new p(t);
            function u() {
              d.removeEventListener("close", u),
                d.removeEventListener("message", l),
                d.removeEventListener("error", s),
                d.removeEventListener("open", i);
            }
            function l({ data: x }) {
              m(JSON.parse(x));
            }
            d.addEventListener("close", u),
              d.addEventListener("message", l),
              d.addEventListener("error", s),
              d.addEventListener("open", i),
              d.readyState === p.CONNECTING &&
                (yield new Promise((x, b) => {
                  d && ((d.onopen = x), (d.onerror = b));
                }));
            let { close: g } = d;
            return Object.assign(d, {
              close() {
                g.bind(d)(), u();
              },
              request({ body: x }) {
                if (d.readyState === d.CLOSED || d.readyState === d.CLOSING)
                  throw new ao({
                    body: x,
                    url: d.url,
                    details: "Socket is closed.",
                  });
                return d.send(JSON.stringify(x));
              },
            });
          }
        );
      },
      reconnect: o,
      url: t,
    });
  });
}
function Wn(t) {
  return c(this, null, function* () {
    let e = yield de(t);
    return Object.assign(e.socket, {
      requests: e.requests,
      subscriptions: e.subscriptions,
    });
  });
}
n();
n();
function $e(t) {
  let { domain: e = {}, message: r, primaryType: o } = t,
    a = y({ EIP712Domain: le({ domain: e }) }, t.types);
  ze({ domain: e, message: r, primaryType: o, types: a });
  let s = ["0x1901"];
  return (
    e && s.push(Nr({ domain: e, types: a })),
    o !== "EIP712Domain" && s.push(Kn({ data: r, primaryType: o, types: a })),
    D(pt(s))
  );
}
function Nr({ domain: t, types: e }) {
  return Kn({ data: t, primaryType: "EIP712Domain", types: e });
}
function Kn({ data: t, primaryType: e, types: r }) {
  let o = Zn({ data: t, primaryType: e, types: r });
  return D(o);
}
function Zn({ data: t, primaryType: e, types: r }) {
  let o = [{ type: "bytes32" }],
    a = [_s({ primaryType: e, types: r })];
  for (let s of r[e]) {
    let [i, m] = Yn({ types: r, name: s.name, type: s.type, value: t[s.name] });
    o.push(i), a.push(m);
  }
  return tt(o, a);
}
function _s({ primaryType: t, types: e }) {
  let r = $(Hs({ primaryType: t, types: e }));
  return D(r);
}
function Hs({ primaryType: t, types: e }) {
  let r = "",
    o = Jn({ primaryType: t, types: e });
  o.delete(t);
  let a = [t, ...Array.from(o).sort()];
  for (let s of a)
    r += `${s}(${e[s].map(({ name: i, type: m }) => `${m} ${i}`).join(",")})`;
  return r;
}
function Jn({ primaryType: t, types: e }, r = new Set()) {
  let a = t.match(/^\w*/u)?.[0];
  if (r.has(a) || e[a] === void 0) return r;
  r.add(a);
  for (let s of e[a]) Jn({ primaryType: s.type, types: e }, r);
  return r;
}
function Yn({ types: t, name: e, type: r, value: o }) {
  if (t[r] !== void 0)
    return [{ type: "bytes32" }, D(Zn({ data: o, primaryType: r, types: t }))];
  if (r === "bytes")
    return (
      (o = `0x${(o.length % 2 ? "0" : "") + o.slice(2)}`),
      [{ type: "bytes32" }, D(o)]
    );
  if (r === "string") return [{ type: "bytes32" }, D($(o))];
  if (r.lastIndexOf("]") === r.length - 1) {
    let a = r.slice(0, r.lastIndexOf("[")),
      s = o.map((i) => Yn({ name: e, type: a, types: t, value: i }));
    return [
      { type: "bytes32" },
      D(
        tt(
          s.map(([i]) => i),
          s.map(([, i]) => i)
        )
      ),
    ];
  }
  return [{ type: r }, o];
}
function ze(t) {
  let { domain: e, message: r, primaryType: o, types: a } = t,
    s = (i, m) => {
      for (let f of i) {
        let { name: p, type: d } = f,
          u = m[p],
          l = d.match(Sr);
        if (l && (typeof u == "number" || typeof u == "bigint")) {
          let [b, w, E] = l;
          I(u, { signed: w === "int", size: Number.parseInt(E) / 8 });
        }
        if (d === "address" && typeof u == "string" && !_t(u))
          throw new qt({ address: u });
        let g = d.match(Br);
        if (g) {
          let [b, w] = g;
          if (w && wt(u) !== Number.parseInt(w))
            throw new Ee({
              expectedSize: Number.parseInt(w),
              givenSize: wt(u),
            });
        }
        let x = a[d];
        x && s(x, u);
      }
    };
  if ((a.EIP712Domain && e && s(a.EIP712Domain, e), o !== "EIP712Domain")) {
    let i = a[o];
    s(i, r);
  }
}
function le({ domain: t }) {
  return [
    typeof t?.name == "string" && { name: "name", type: "string" },
    t?.version && { name: "version", type: "string" },
    typeof t?.chainId == "number" && { name: "chainId", type: "uint256" },
    t?.verifyingContract && { name: "verifyingContract", type: "address" },
    t?.salt && { name: "salt", type: "bytes32" },
  ].filter(Boolean);
}
function Ds({ domain: t }) {
  return Nr({ domain: t, types: { EIP712Domain: le({ domain: t }) } });
}
n();
function Us(t) {
  let { abi: e, data: r } = t,
    o = Yt(r, 0, 4),
    a = e.find((s) => s.type === "function" && o === Qt(yt(s)));
  if (!a) throw new jr(o, { docsPath: "/docs/contract/decodeFunctionData" });
  return {
    functionName: a.name,
    args:
      "inputs" in a && a.inputs && a.inputs.length > 0
        ? Tt(a.inputs, Yt(r, 4))
        : void 0,
  };
}
n();
var No = "/docs/contract/encodeDeployData";
function Oe(t) {
  let { abi: e, args: r, bytecode: o } = t;
  if (!r || r.length === 0) return o;
  let a = e.find((i) => "type" in i && i.type === "constructor");
  if (!a) throw new be({ docsPath: No });
  if (!("inputs" in a)) throw new St({ docsPath: No });
  if (!a.inputs || a.inputs.length === 0) throw new St({ docsPath: No });
  let s = tt(a.inputs, r);
  return Et([o, s]);
}
n();
var qo = "/docs/contract/encodeErrorResult";
function Ls(t) {
  let { abi: e, errorName: r, args: o } = t,
    a = e[0];
  if (r) {
    let f = dt({ abi: e, args: o, name: r });
    if (!f) throw new Ze(r, { docsPath: qo });
    a = f;
  }
  if (a.type !== "error") throw new Ze(void 0, { docsPath: qo });
  let s = yt(a),
    i = Qt(s),
    m = "0x";
  if (o && o.length > 0) {
    if (!a.inputs) throw new $r(a.name, { docsPath: qo });
    m = tt(a.inputs, o);
  }
  return Et([i, m]);
}
n();
var _o = "/docs/contract/encodeFunctionResult";
function Ms(t) {
  let { abi: e, functionName: r, result: o } = t,
    a = e[0];
  if (r) {
    let i = dt({ abi: e, name: r });
    if (!i) throw new Ye(r, { docsPath: _o });
    a = i;
  }
  if (a.type !== "function") throw new Ye(void 0, { docsPath: _o });
  if (!a.outputs) throw new Or(a.name, { docsPath: _o });
  let s = Array.isArray(o) ? o : [o];
  return a.outputs.length === 0 && !s[0] && (s = []), tt(a.outputs, s);
}
n();
function Gs(t, e) {
  if (t.length !== e.length)
    throw new Gr({ expectedLength: t.length, givenLength: e.length });
  let r = [];
  for (let o = 0; o < t.length; o++) {
    let a = t[o],
      s = e[o];
    r.push(Qn(a, s));
  }
  return Et(r);
}
function Qn(t, e, r = !1) {
  if (t === "address") {
    let i = e;
    if (!_t(i)) throw new qt({ address: i });
    return Nt(i.toLowerCase(), { size: r ? 32 : null });
  }
  if (t === "string") return ve(e);
  if (t === "bytes") return e;
  if (t === "bool") return Nt(Kr(e), { size: r ? 32 : 1 });
  let o = t.match(Sr);
  if (o) {
    let [i, m, f = "256"] = o,
      p = Number.parseInt(f) / 8;
    return I(e, { size: r ? 32 : p, signed: m === "int" });
  }
  let a = t.match(Br);
  if (a) {
    let [i, m] = a;
    if (Number.parseInt(m) !== (e.length - 2) / 2)
      throw new Ee({
        expectedSize: Number.parseInt(m),
        givenSize: (e.length - 2) / 2,
      });
    return Nt(e, { dir: "right", size: r ? 32 : null });
  }
  let s = t.match(jn);
  if (s && Array.isArray(e)) {
    let [i, m] = s,
      f = [];
    for (let p = 0; p < e.length; p++) f.push(Qn(m, e[p], !0));
    return f.length === 0 ? "0x" : Et(f);
  }
  throw new Vr(t);
}
n();
n();
function qr(t) {
  return !t || typeof t != "object" || !("BYTES_PER_ELEMENT" in t)
    ? !1
    : t.BYTES_PER_ELEMENT === 1 && t.constructor.name === "Uint8Array";
}
function $s(t) {
  return t.opcode === "CREATE2" ? ta(t) : Xn(t);
}
function Xn(t) {
  let e = z(X(t.from)),
    r = z(t.nonce);
  return (
    r[0] === 0 && (r = new Uint8Array([])),
    X(`0x${D(yo([e, r], "bytes")).slice(26)}`)
  );
}
function ta(t) {
  let e = z(X(t.from)),
    r = Nt(qr(t.salt) ? t.salt : z(t.salt), { size: 32 }),
    o =
      "bytecodeHash" in t
        ? qr(t.bytecodeHash)
          ? t.bytecodeHash
          : z(t.bytecodeHash)
        : D(t.bytecode, "bytes");
  return X(Yt(D(pt([z("0xff"), e, r, o])), 12));
}
n();
function _r(t, e = "hex") {
  let r = (() => {
      if (typeof t == "string") {
        if (t.length > 3 && t.length % 2 !== 0) throw new Wr(t);
        return ut(t);
      }
      return t;
    })(),
    o = Ce(r, { recursiveReadLimit: Number.POSITIVE_INFINITY });
  return ra(o, e);
}
function ra(t, e = "hex") {
  if (t.bytes.length === 0) return e === "hex" ? j(t.bytes) : t.bytes;
  let r = t.readByte();
  if ((r < 128 && t.decrementPosition(1), r < 192)) {
    let a = ea(t, r, 128),
      s = t.readBytes(a);
    return e === "hex" ? j(s) : s;
  }
  let o = ea(t, r, 192);
  return zs(t, o, e);
}
function ea(t, e, r) {
  if (r === 128 && e < 128) return 1;
  if (e <= r + 55) return e - r;
  if (e === r + 55 + 1) return t.readUint8();
  if (e === r + 55 + 2) return t.readUint16();
  if (e === r + 55 + 3) return t.readUint24();
  if (e === r + 55 + 4) return t.readUint32();
  throw new H("Invalid RLP prefix");
}
function zs(t, e, r) {
  let o = t.position,
    a = [];
  for (; t.position - o < e; ) a.push(ra(t, r));
  return a;
}
n();
n();
n();
n();
n();
function Do(t) {
  return B(t) && wt(t) === 32;
}
n();
n();
var Os = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
  na = Uint8Array.from({ length: 16 }, (t, e) => e),
  js = na.map((t) => (9 * t + 5) % 16),
  Lo = [na],
  Mo = [js];
for (let t = 0; t < 4; t++)
  for (let e of [Lo, Mo]) e.push(e[t].map((r) => Os[r]));
var aa = [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
  ].map((t) => new Uint8Array(t)),
  Vs = Lo.map((t, e) => t.map((r) => aa[e][r])),
  Ws = Mo.map((t, e) => t.map((r) => aa[e][r])),
  Ks = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]),
  Zs = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]),
  Hr = (t, e) => (t << e) | (t >>> (32 - e));
function oa(t, e, r, o) {
  return t === 0
    ? e ^ r ^ o
    : t === 1
    ? (e & r) | (~e & o)
    : t === 2
    ? (e | ~r) ^ o
    : t === 3
    ? (e & o) | (r & ~o)
    : e ^ (r | ~o);
}
var Dr = new Uint32Array(16),
  Uo = class extends sn {
    constructor() {
      super(64, 20, 8, !0),
        (this.h0 = 1732584193),
        (this.h1 = -271733879),
        (this.h2 = -1732584194),
        (this.h3 = 271733878),
        (this.h4 = -1009589776);
    }
    get() {
      let { h0: e, h1: r, h2: o, h3: a, h4: s } = this;
      return [e, r, o, a, s];
    }
    set(e, r, o, a, s) {
      (this.h0 = e | 0),
        (this.h1 = r | 0),
        (this.h2 = o | 0),
        (this.h3 = a | 0),
        (this.h4 = s | 0);
    }
    process(e, r) {
      for (let g = 0; g < 16; g++, r += 4) Dr[g] = e.getUint32(r, !0);
      let o = this.h0 | 0,
        a = o,
        s = this.h1 | 0,
        i = s,
        m = this.h2 | 0,
        f = m,
        p = this.h3 | 0,
        d = p,
        u = this.h4 | 0,
        l = u;
      for (let g = 0; g < 5; g++) {
        let x = 4 - g,
          b = Ks[g],
          w = Zs[g],
          E = Lo[g],
          T = Mo[g],
          A = Vs[g],
          P = Ws[g];
        for (let R = 0; R < 16; R++) {
          let C = (Hr(o + oa(g, s, m, p) + Dr[E[R]] + b, A[R]) + u) | 0;
          (o = u), (u = p), (p = Hr(m, 10) | 0), (m = s), (s = C);
        }
        for (let R = 0; R < 16; R++) {
          let C = (Hr(a + oa(x, i, f, d) + Dr[T[R]] + w, P[R]) + l) | 0;
          (a = l), (l = d), (d = Hr(f, 10) | 0), (f = i), (i = C);
        }
      }
      this.set(
        (this.h1 + m + d) | 0,
        (this.h2 + p + l) | 0,
        (this.h3 + u + a) | 0,
        (this.h4 + o + i) | 0,
        (this.h0 + s + f) | 0
      );
    }
    roundClean() {
      Dr.fill(0);
    }
    destroy() {
      (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
    }
  },
  sa = en(() => new Uo());
function Js(t, e) {
  let r = e || "hex",
    o = sa(B(t, { strict: !1 }) ? z(t) : t);
  return r === "bytes" ? o : $(o);
}
n();
n();
function Go(r) {
  return c(this, arguments, function* ({ hash: t, signature: e }) {
    let o = B(t) ? t : $(t),
      { secp256k1: a } = yield import("./chunk-LZTVXWNT.js");
    return `0x${(() => {
      if (typeof e == "object" && "r" in e && "s" in e) {
        let { r: d, s: u, v: l, yParity: g } = e,
          x = Number(g ?? l),
          b = ia(x);
        return new a.Signature(q(d), q(u)).addRecoveryBit(b);
      }
      let m = B(e) ? e : $(e),
        f = U(`0x${m.slice(130)}`),
        p = ia(f);
      return a.Signature.fromCompact(m.substring(2, 130)).addRecoveryBit(p);
    })()
      .recoverPublicKey(o.substring(2))
      .toHex(!1)}`;
  });
}
function ia(t) {
  if (t === 0 || t === 1) return t;
  if (t === 27) return 0;
  if (t === 28) return 1;
  throw new Error("Invalid yParityOrV value");
}
function Kt(r) {
  return c(this, arguments, function* ({ hash: t, signature: e }) {
    return vn(yield Go({ hash: t, signature: e }));
  });
}
n();
n();
n();
var $o = `Ethereum Signed Message:
`;
function Zt(t, e) {
  let r =
      typeof t == "string"
        ? Q(t)
        : t.raw instanceof Uint8Array
        ? t.raw
        : z(t.raw),
    o = Q(`${$o}${r.length}`);
  return D(pt([o, r]), e);
}
function zo(r) {
  return c(this, arguments, function* ({ message: t, signature: e }) {
    return Kt({ hash: Zt(t), signature: e });
  });
}
n();
function Oo(t) {
  return c(this, null, function* () {
    let { domain: e, message: r, primaryType: o, signature: a, types: s } = t;
    return Kt({
      hash: $e({ domain: e, message: r, primaryType: o, types: s }),
      signature: a,
    });
  });
}
n();
function Ys(o) {
  return c(
    this,
    arguments,
    function* ({ address: t, message: e, signature: r }) {
      return Lt(X(t), yield zo({ message: e, signature: r }));
    }
  );
}
n();
function Qs(t) {
  return c(this, null, function* () {
    let {
      address: e,
      domain: r,
      message: o,
      primaryType: a,
      signature: s,
      types: i,
    } = t;
    return Lt(
      X(e),
      yield Oo({
        domain: r,
        message: o,
        primaryType: a,
        signature: s,
        types: i,
      })
    );
  });
}
n();
function jo(t) {
  let e = Zr(t, 0, 1);
  if (e === "0x03") return "eip4844";
  if (e === "0x02") return "eip1559";
  if (e === "0x01") return "eip2930";
  if (e !== "0x" && U(e) >= 192) return "legacy";
  throw new to({ serializedType: e });
}
n();
function Vo(t) {
  let e = jo(t);
  return e === "eip1559"
    ? ti(t)
    : e === "eip2930"
    ? ei(t)
    : e === "eip4844"
    ? Xs(t)
    : ri(t);
}
function Xs(t) {
  let e = Wo(t),
    r = e.length === 4,
    o = r ? e[0] : e,
    a = r ? e.slice(1) : [],
    [s, i, m, f, p, d, u, l, g, x, b, w, E, T] = o,
    [A, P, R] = a;
  if (!(o.length === 11 || o.length === 14))
    throw new Xt({
      attributes: y(
        {
          chainId: s,
          nonce: i,
          maxPriorityFeePerGas: m,
          maxFeePerGas: f,
          gas: p,
          to: d,
          value: u,
          data: l,
          accessList: g,
        },
        o.length > 9 ? { v: w, r: E, s: T } : {}
      ),
      serializedTransaction: t,
      type: "eip4844",
    });
  let C = { blobVersionedHashes: b, chainId: U(s), type: "eip4844" };
  B(d) && d !== "0x" && (C.to = d),
    B(p) && p !== "0x" && (C.gas = q(p)),
    B(l) && l !== "0x" && (C.data = l),
    B(i) && i !== "0x" && (C.nonce = U(i)),
    B(u) && u !== "0x" && (C.value = q(u)),
    B(x) && x !== "0x" && (C.maxFeePerBlobGas = q(x)),
    B(f) && f !== "0x" && (C.maxFeePerGas = q(f)),
    B(m) && m !== "0x" && (C.maxPriorityFeePerGas = q(m)),
    g.length !== 0 && g !== "0x" && (C.accessList = Ko(g)),
    A && P && R && (C.sidecars = Ne({ blobs: A, commitments: P, proofs: R })),
    un(C);
  let k = o.length === 14 ? Zo(o) : void 0;
  return y(y({}, k), C);
}
function ti(t) {
  let e = Wo(t),
    [r, o, a, s, i, m, f, p, d, u, l, g] = e;
  if (!(e.length === 9 || e.length === 12))
    throw new Xt({
      attributes: y(
        {
          chainId: r,
          nonce: o,
          maxPriorityFeePerGas: a,
          maxFeePerGas: s,
          gas: i,
          to: m,
          value: f,
          data: p,
          accessList: d,
        },
        e.length > 9 ? { v: u, r: l, s: g } : {}
      ),
      serializedTransaction: t,
      type: "eip1559",
    });
  let x = { chainId: U(r), type: "eip1559" };
  B(m) && m !== "0x" && (x.to = m),
    B(i) && i !== "0x" && (x.gas = q(i)),
    B(p) && p !== "0x" && (x.data = p),
    B(o) && o !== "0x" && (x.nonce = U(o)),
    B(f) && f !== "0x" && (x.value = q(f)),
    B(s) && s !== "0x" && (x.maxFeePerGas = q(s)),
    B(a) && a !== "0x" && (x.maxPriorityFeePerGas = q(a)),
    d.length !== 0 && d !== "0x" && (x.accessList = Ko(d)),
    Eo(x);
  let b = e.length === 12 ? Zo(e) : void 0;
  return y(y({}, b), x);
}
function ei(t) {
  let e = Wo(t),
    [r, o, a, s, i, m, f, p, d, u, l] = e;
  if (!(e.length === 8 || e.length === 11))
    throw new Xt({
      attributes: y(
        {
          chainId: r,
          nonce: o,
          gasPrice: a,
          gas: s,
          to: i,
          value: m,
          data: f,
          accessList: p,
        },
        e.length > 8 ? { v: d, r: u, s: l } : {}
      ),
      serializedTransaction: t,
      type: "eip2930",
    });
  let g = { chainId: U(r), type: "eip2930" };
  B(i) && i !== "0x" && (g.to = i),
    B(s) && s !== "0x" && (g.gas = q(s)),
    B(f) && f !== "0x" && (g.data = f),
    B(o) && o !== "0x" && (g.nonce = U(o)),
    B(m) && m !== "0x" && (g.value = q(m)),
    B(a) && a !== "0x" && (g.gasPrice = q(a)),
    p.length !== 0 && p !== "0x" && (g.accessList = Ko(p)),
    To(g);
  let x = e.length === 11 ? Zo(e) : void 0;
  return y(y({}, x), g);
}
function ri(t) {
  let e = _r(t, "hex"),
    [r, o, a, s, i, m, f, p, d] = e;
  if (!(e.length === 6 || e.length === 9))
    throw new Xt({
      attributes: y(
        { nonce: r, gasPrice: o, gas: a, to: s, value: i, data: m },
        e.length > 6 ? { v: f, r: p, s: d } : {}
      ),
      serializedTransaction: t,
      type: "legacy",
    });
  let u = { type: "legacy" };
  if (
    (B(s) && s !== "0x" && (u.to = s),
    B(a) && a !== "0x" && (u.gas = q(a)),
    B(m) && m !== "0x" && (u.data = m),
    B(r) && r !== "0x" && (u.nonce = U(r)),
    B(i) && i !== "0x" && (u.value = q(i)),
    B(o) && o !== "0x" && (u.gasPrice = q(o)),
    vo(u),
    e.length === 6)
  )
    return u;
  let l = B(f) && f !== "0x" ? q(f) : 0n;
  if (d === "0x" && p === "0x") return l > 0 && (u.chainId = Number(l)), u;
  let g = l,
    x = Number((g - 35n) / 2n);
  if (x > 0) u.chainId = x;
  else if (g !== 27n && g !== 28n) throw new Xr({ v: g });
  return (
    (u.v = g), (u.s = d), (u.r = p), (u.yParity = g % 2n === 0n ? 1 : 0), u
  );
}
function Wo(t) {
  return _r(`0x${t.slice(4)}`, "hex");
}
function Ko(t) {
  let e = [];
  for (let r = 0; r < t.length; r++) {
    let [o, a] = t[r];
    if (!_t(o, { strict: !1 })) throw new qt({ address: o });
    e.push({ address: o, storageKeys: a.map((s) => (Do(s) ? s : Te(s))) });
  }
  return e;
}
function Zo(t) {
  let e = t.slice(-3),
    r = e[0] === "0x" || q(e[0]) === 0n ? 27n : 28n;
  return {
    r: Qe(e[1], { size: 32 }),
    s: Qe(e[2], { size: 32 }),
    v: r,
    yParity: r === 27n ? 0 : 1,
  };
}
n();
function Ve(t, e) {
  let [r, o = "0"] = t.split("."),
    a = r.startsWith("-");
  if ((a && (r = r.slice(1)), (o = o.replace(/(0+)$/, "")), e === 0))
    Math.round(+`.${o}`) === 1 && (r = `${BigInt(r) + 1n}`), (o = "");
  else if (o.length > e) {
    let [s, i, m] = [o.slice(0, e - 1), o.slice(e - 1, e), o.slice(e)],
      f = Math.round(+`${i}.${m}`);
    f > 9
      ? (o = `${BigInt(s) + BigInt(1)}0`.padStart(s.length + 1, "0"))
      : (o = `${s}${f}`),
      o.length > e && ((o = o.slice(1)), (r = `${BigInt(r) + 1n}`)),
      (o = o.slice(0, e));
  } else o = o.padEnd(e, "0");
  return BigInt(`${a ? "-" : ""}${r}${o}`);
}
n();
function oi(t, e = "wei") {
  return Ve(t, Jr[e]);
}
n();
function ni(t, e = "wei") {
  return Ve(t, Yr[e]);
}
function ci(t) {
  return t.map((e) => F(y({}, e), { value: BigInt(e.value) }));
}
function ca(t) {
  return F(y({}, t), {
    balance: t.balance ? BigInt(t.balance) : void 0,
    nonce: t.nonce ? U(t.nonce) : void 0,
    storageProof: t.storageProof ? ci(t.storageProof) : void 0,
  });
}
function ma(s, i) {
  return c(
    this,
    arguments,
    function* (t, { address: e, blockNumber: r, blockTag: o, storageKeys: a }) {
      let m = o ?? "latest",
        f = r !== void 0 ? I(r) : void 0,
        p = yield t.request({ method: "eth_getProof", params: [e, a, f || m] });
      return ca(p);
    }
  );
}
n();
function fa(s, i) {
  return c(
    this,
    arguments,
    function* (
      t,
      { address: e, blockNumber: r, blockTag: o = "latest", slot: a }
    ) {
      let m = r !== void 0 ? I(r) : void 0;
      return yield t.request({
        method: "eth_getStorageAt",
        params: [e, a, m || o],
      });
    }
  );
}
n();
function he(i, m) {
  return c(
    this,
    arguments,
    function* (
      t,
      { blockHash: e, blockNumber: r, blockTag: o, hash: a, index: s }
    ) {
      let f = o || "latest",
        p = r !== void 0 ? I(r) : void 0,
        d = null;
      if (
        (a
          ? (d = yield t.request({
              method: "eth_getTransactionByHash",
              params: [a],
            }))
          : e
          ? (d = yield t.request({
              method: "eth_getTransactionByBlockHashAndIndex",
              params: [e, I(s)],
            }))
          : (p || f) &&
            (d = yield t.request({
              method: "eth_getTransactionByBlockNumberAndIndex",
              params: [p || f, I(s)],
            })),
        !d)
      )
        throw new Ie({
          blockHash: e,
          blockNumber: r,
          blockTag: f,
          hash: a,
          index: s,
        });
      return (t.chain?.formatters?.transaction?.format || io)(d);
    }
  );
}
n();
function ua(o, a) {
  return c(this, arguments, function* (t, { hash: e, transactionReceipt: r }) {
    let [s, i] = yield Promise.all([
        v(t, ct, "getBlockNumber")({}),
        e ? v(t, he, "getBlockNumber")({ hash: e }) : void 0,
      ]),
      m = r?.blockNumber || i?.blockNumber;
    return m ? s - m + 1n : 0n;
  });
}
n();
function We(r, o) {
  return c(this, arguments, function* (t, { hash: e }) {
    let a = yield t.request({
      method: "eth_getTransactionReceipt",
      params: [e],
    });
    if (!a) throw new Pe({ hash: e });
    return (t.chain?.formatters?.transactionReceipt?.format || wo)(a);
  });
}
n();
function pa(t, e) {
  return c(this, null, function* () {
    let {
        allowFailure: r = !0,
        batchSize: o,
        blockNumber: a,
        blockTag: s,
        multicallAddress: i,
        stateOverride: m,
      } = e,
      f = e.contracts,
      p =
        o ??
        ((typeof t.batch?.multicall == "object" &&
          t.batch.multicall.batchSize) ||
          1024),
      d = i;
    if (!d) {
      if (!t.chain)
        throw new Error(
          "client chain not configured. multicallAddress is required."
        );
      d = rt({ blockNumber: a, chain: t.chain, contract: "multicall3" });
    }
    let u = [[]],
      l = 0,
      g = 0;
    for (let w = 0; w < f.length; w++) {
      let { abi: E, address: T, args: A, functionName: P } = f[w];
      try {
        let R = K({ abi: E, args: A, functionName: P });
        (g += (R.length - 2) / 2),
          p > 0 &&
            g > p &&
            u[l].length > 0 &&
            (l++, (g = (R.length - 2) / 2), (u[l] = [])),
          (u[l] = [...u[l], { allowFailure: !0, callData: R, target: T }]);
      } catch (R) {
        let C = at(R, {
          abi: E,
          address: T,
          args: A,
          docsPath: "/docs/contract/multicall",
          functionName: P,
        });
        if (!r) throw C;
        u[l] = [...u[l], { allowFailure: !0, callData: "0x", target: T }];
      }
    }
    let x = yield Promise.allSettled(
        u.map((w) =>
          v(
            t,
            V,
            "readContract"
          )({
            abi: lo,
            address: d,
            args: [w],
            blockNumber: a,
            blockTag: s,
            functionName: "aggregate3",
            stateOverride: m,
          })
        )
      ),
      b = [];
    for (let w = 0; w < x.length; w++) {
      let E = x[w];
      if (E.status === "rejected") {
        if (!r) throw E.reason;
        for (let A = 0; A < u[w].length; A++)
          b.push({ status: "failure", error: E.reason, result: void 0 });
        continue;
      }
      let T = E.value;
      for (let A = 0; A < T.length; A++) {
        let { returnData: P, success: R } = T[A],
          { callData: C } = u[w][A],
          { abi: k, address: N, functionName: L, args: M } = f[b.length];
        try {
          if (C === "0x") throw new ye();
          if (!R) throw new ke({ data: P });
          let _ = et({ abi: k, args: M, data: P, functionName: L });
          b.push(r ? { result: _, status: "success" } : _);
        } catch (_) {
          let W = at(_, {
            abi: k,
            address: N,
            args: M,
            docsPath: "/docs/contract/multicall",
            functionName: L,
          });
          if (!r) throw W;
          b.push({ error: W, result: void 0, status: "failure" });
        }
      }
    }
    if (b.length !== f.length) throw new H("multicall results mismatch");
    return b;
  });
}
n();
n();
n();
var da =
  "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
n();
function la(t, e) {
  let r = B(t) ? z(t) : t,
    o = B(e) ? z(e) : e;
  return fn(r, o);
}
n();
function Ur({ r: t, s: e, v: r, yParity: o }) {
  let a = (() => {
    if (o === 0 || o === 1) return o;
    if (r && (r === 27n || r === 28n || r >= 35n)) return r % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })();
  return `0x${new It.Signature(q(t), q(e)).toCompactHex()}${
    a === 0 ? "1b" : "1c"
  }`;
}
function ge(t, s) {
  return c(this, null, function* () {
    var i = s,
      { address: e, hash: r, signature: o } = i,
      a = S(i, ["address", "hash", "signature"]);
    let m = B(o)
      ? o
      : typeof o == "object" && "r" in o && "s" in o
      ? Ur(o)
      : j(o);
    try {
      let { data: f } = yield v(
        t,
        Ct,
        "call"
      )(y({ data: Oe({ abi: mn, args: [e, r, m], bytecode: da }) }, a));
      return la(f ?? "0x0", "0x1");
    } catch (f) {
      if (f instanceof ro) return !1;
      throw f;
    }
  });
}
function ha(t, s) {
  return c(this, null, function* () {
    var i = s,
      { address: e, message: r, signature: o } = i,
      a = S(i, ["address", "message", "signature"]);
    let m = Zt(r);
    return ge(t, y({ address: e, hash: m, signature: o }, a));
  });
}
n();
function ga(t, e) {
  return c(this, null, function* () {
    let d = e,
      {
        address: r,
        signature: o,
        message: a,
        primaryType: s,
        types: i,
        domain: m,
      } = d,
      f = S(d, [
        "address",
        "signature",
        "message",
        "primaryType",
        "types",
        "domain",
      ]),
      p = $e({ message: a, primaryType: s, types: i, domain: m });
    return ge(t, y({ address: r, hash: p, signature: o }, f));
  });
}
n();
n();
function Lr(
  t,
  {
    emitOnBegin: e = !1,
    emitMissed: r = !1,
    onBlockNumber: o,
    onError: a,
    poll: s,
    pollingInterval: i = t.pollingInterval,
  }
) {
  let m =
      typeof s < "u"
        ? s
        : !(
            t.transport.type === "webSocket" ||
            (t.transport.type === "fallback" &&
              t.transport.transports[0].config.type === "webSocket")
          ),
    f;
  return m
    ? (() => {
        let u = G(["watchBlockNumber", t.uid, e, r, i]);
        return J(u, { onBlockNumber: o, onError: a }, (l) =>
          it(
            () =>
              c(this, null, function* () {
                try {
                  let g = yield v(t, ct, "getBlockNumber")({ cacheTime: 0 });
                  if (f) {
                    if (g === f) return;
                    if (g - f > 1 && r)
                      for (let x = f + 1n; x < g; x++)
                        l.onBlockNumber(x, f), (f = x);
                  }
                  (!f || g > f) && (l.onBlockNumber(g, f), (f = g));
                } catch (g) {
                  l.onError?.(g);
                }
              }),
            { emitOnBegin: e, interval: i }
          )
        );
      })()
    : (() => {
        let u = G(["watchBlockNumber", t.uid, e, r]);
        return J(u, { onBlockNumber: o, onError: a }, (l) => {
          let g = !0,
            x = () => (g = !1);
          return (
            c(this, null, function* () {
              try {
                let b = (() => {
                    if (t.transport.type === "fallback") {
                      let E = t.transport.transports.find(
                        (T) => T.config.type === "webSocket"
                      );
                      return E ? E.value : t.transport;
                    }
                    return t.transport;
                  })(),
                  { unsubscribe: w } = yield b.subscribe({
                    params: ["newHeads"],
                    onData(E) {
                      if (!g) return;
                      let T = q(E.result?.number);
                      l.onBlockNumber(T, f), (f = T);
                    },
                    onError(E) {
                      l.onError?.(E);
                    },
                  });
                (x = w), g || x();
              } catch (b) {
                a?.(b);
              }
            }),
            () => x()
          );
        });
      })();
}
function xa(f, p) {
  return c(
    this,
    arguments,
    function* (
      t,
      {
        confirmations: e = 1,
        hash: r,
        onReplaced: o,
        pollingInterval: a = t.pollingInterval,
        retryCount: s = 6,
        retryDelay: i = ({ count: d }) => ~~(1 << d) * 200,
        timeout: m,
      }
    ) {
      let d = G(["waitForTransactionReceipt", t.uid, r]),
        u = 0,
        l,
        g,
        x,
        b = !1;
      return new Promise((w, E) => {
        m && setTimeout(() => E(new Xe({ hash: r })), m);
        let T = J(d, { onReplaced: o, resolve: w, reject: E }, (A) => {
          let P = v(
            t,
            Lr,
            "watchBlockNumber"
          )({
            emitMissed: !0,
            emitOnBegin: !0,
            poll: !0,
            pollingInterval: a,
            onBlockNumber(C) {
              return c(this, null, function* () {
                let k = (L) => {
                    P(), L(), T();
                  },
                  N = C;
                if (!b) {
                  u > s && k(() => A.reject(new Xe({ hash: r })));
                  try {
                    if (x) {
                      if (
                        e > 1 &&
                        (!x.blockNumber || N - x.blockNumber + 1n < e)
                      )
                        return;
                      k(() => A.resolve(x));
                      return;
                    }
                    if (
                      (l ||
                        ((b = !0),
                        yield ue(
                          () =>
                            c(this, null, function* () {
                              (l = yield v(
                                t,
                                he,
                                "getTransaction"
                              )({ hash: r })),
                                l.blockNumber && (N = l.blockNumber);
                            }),
                          { delay: i, retryCount: s }
                        ),
                        (b = !1)),
                      (x = yield v(
                        t,
                        We,
                        "getTransactionReceipt"
                      )({ hash: r })),
                      e > 1 && (!x.blockNumber || N - x.blockNumber + 1n < e))
                    )
                      return;
                    k(() => A.resolve(x));
                  } catch (L) {
                    if (L instanceof Ie || L instanceof Pe) {
                      if (!l) {
                        b = !1;
                        return;
                      }
                      try {
                        (g = l), (b = !0);
                        let M = yield ue(
                          () =>
                            v(
                              t,
                              Z,
                              "getBlock"
                            )({ blockNumber: N, includeTransactions: !0 }),
                          {
                            delay: i,
                            retryCount: s,
                            shouldRetry: ({ error: xe }) => xe instanceof Mt,
                          }
                        );
                        b = !1;
                        let _ = M.transactions.find(
                          ({ from: xe, nonce: Ke }) =>
                            xe === g.from && Ke === g.nonce
                        );
                        if (
                          !_ ||
                          ((x = yield v(
                            t,
                            We,
                            "getTransactionReceipt"
                          )({ hash: _.hash })),
                          e > 1 &&
                            (!x.blockNumber || N - x.blockNumber + 1n < e))
                        )
                          return;
                        let W = "replaced";
                        _.to === g.to && _.value === g.value
                          ? (W = "repriced")
                          : _.from === _.to &&
                            _.value === 0n &&
                            (W = "cancelled"),
                          k(() => {
                            A.onReplaced?.({
                              reason: W,
                              replacedTransaction: g,
                              transaction: _,
                              transactionReceipt: x,
                            }),
                              A.resolve(x);
                          });
                      } catch (M) {
                        k(() => A.reject(M));
                      }
                    } else k(() => A.reject(L));
                  } finally {
                    u++;
                  }
                }
              });
            },
          });
        });
      });
    }
  );
}
n();
function ba(
  t,
  {
    blockTag: e = "latest",
    emitMissed: r = !1,
    emitOnBegin: o = !1,
    onBlock: a,
    onError: s,
    includeTransactions: i,
    poll: m,
    pollingInterval: f = t.pollingInterval,
  }
) {
  let p =
      typeof m < "u"
        ? m
        : !(
            t.transport.type === "webSocket" ||
            (t.transport.type === "fallback" &&
              t.transport.transports[0].config.type === "webSocket")
          ),
    d = i ?? !1,
    u;
  return p
    ? (() => {
        let x = G(["watchBlocks", t.uid, e, r, o, d, f]);
        return J(x, { onBlock: a, onError: s }, (b) =>
          it(
            () =>
              c(this, null, function* () {
                try {
                  let w = yield v(
                    t,
                    Z,
                    "getBlock"
                  )({ blockTag: e, includeTransactions: d });
                  if (w.number && u?.number) {
                    if (w.number === u.number) return;
                    if (w.number - u.number > 1 && r)
                      for (let E = u?.number + 1n; E < w.number; E++) {
                        let T = yield v(
                          t,
                          Z,
                          "getBlock"
                        )({ blockNumber: E, includeTransactions: d });
                        b.onBlock(T, u), (u = T);
                      }
                  }
                  (!u?.number ||
                    (e === "pending" && !w?.number) ||
                    (w.number && w.number > u.number)) &&
                    (b.onBlock(w, u), (u = w));
                } catch (w) {
                  b.onError?.(w);
                }
              }),
            { emitOnBegin: o, interval: f }
          )
        );
      })()
    : (() => {
        let x = !0,
          b = () => (x = !1);
        return (
          c(this, null, function* () {
            try {
              let w = (() => {
                  if (t.transport.type === "fallback") {
                    let T = t.transport.transports.find(
                      (A) => A.config.type === "webSocket"
                    );
                    return T ? T.value : t.transport;
                  }
                  return t.transport;
                })(),
                { unsubscribe: E } = yield w.subscribe({
                  params: ["newHeads"],
                  onData(T) {
                    if (!x) return;
                    let P = (t.chain?.formatters?.block?.format || Se)(
                      T.result
                    );
                    a(P, u), (u = P);
                  },
                  onError(T) {
                    s?.(T);
                  },
                });
              (b = E), x || b();
            } catch (w) {
              s?.(w);
            }
          }),
          () => b()
        );
      })();
}
n();
function ya(
  t,
  {
    address: e,
    args: r,
    batch: o = !0,
    event: a,
    events: s,
    fromBlock: i,
    onError: m,
    onLogs: f,
    poll: p,
    pollingInterval: d = t.pollingInterval,
    strict: u,
  }
) {
  let l =
      typeof p < "u"
        ? p
        : typeof i == "bigint"
        ? !0
        : !(
            t.transport.type === "webSocket" ||
            (t.transport.type === "fallback" &&
              t.transport.transports[0].config.type === "webSocket")
          ),
    g = u ?? !1;
  return l
    ? (() => {
        let w = G(["watchEvent", e, r, o, t.uid, a, d, i]);
        return J(w, { onLogs: f, onError: m }, (E) => {
          let T;
          i !== void 0 && (T = i - 1n);
          let A,
            P = !1,
            R = it(
              () =>
                c(this, null, function* () {
                  if (!P) {
                    try {
                      A = yield v(
                        t,
                        Rr,
                        "createEventFilter"
                      )({
                        address: e,
                        args: r,
                        event: a,
                        events: s,
                        strict: g,
                        fromBlock: i,
                      });
                    } catch {}
                    P = !0;
                    return;
                  }
                  try {
                    let C;
                    if (A)
                      C = yield v(t, Rt, "getFilterChanges")({ filter: A });
                    else {
                      let k = yield v(t, ct, "getBlockNumber")({});
                      T && T !== k
                        ? (C = yield v(
                            t,
                            ie,
                            "getLogs"
                          )({
                            address: e,
                            args: r,
                            event: a,
                            events: s,
                            fromBlock: T + 1n,
                            toBlock: k,
                          }))
                        : (C = []),
                        (T = k);
                    }
                    if (C.length === 0) return;
                    if (o) E.onLogs(C);
                    else for (let k of C) E.onLogs([k]);
                  } catch (C) {
                    A && C instanceof At && (P = !1), E.onError?.(C);
                  }
                }),
              { emitOnBegin: !0, interval: d }
            );
          return () =>
            c(this, null, function* () {
              A && (yield v(t, Ft, "uninstallFilter")({ filter: A })), R();
            });
        });
      })()
    : (() => {
        let w = !0,
          E = () => (w = !1);
        return (
          c(this, null, function* () {
            try {
              let T = (() => {
                  if (t.transport.type === "fallback") {
                    let C = t.transport.transports.find(
                      (k) => k.config.type === "webSocket"
                    );
                    return C ? C.value : t.transport;
                  }
                  return t.transport;
                })(),
                A = s ?? (a ? [a] : void 0),
                P = [];
              A &&
                ((P = [
                  A.flatMap((C) =>
                    ot({ abi: [C], eventName: C.name, args: r })
                  ),
                ]),
                a && (P = P[0]));
              let { unsubscribe: R } = yield T.subscribe({
                params: ["logs", { address: e, topics: P }],
                onData(C) {
                  if (!w) return;
                  let k = C.result;
                  try {
                    let { eventName: N, args: L } = Gt({
                        abi: A ?? [],
                        data: k.data,
                        topics: k.topics,
                        strict: g,
                      }),
                      M = Y(k, { args: L, eventName: N });
                    f([M]);
                  } catch (N) {
                    let L, M;
                    if (N instanceof nt || N instanceof ft) {
                      if (u) return;
                      (L = N.abiItem.name),
                        (M = N.abiItem.inputs?.some(
                          (W) => !("name" in W && W.name)
                        ));
                    }
                    let _ = Y(k, { args: M ? [] : {}, eventName: L });
                    f([_]);
                  }
                },
                onError(C) {
                  m?.(C);
                },
              });
              (E = R), w || E();
            } catch (T) {
              m?.(T);
            }
          }),
          () => E()
        );
      })();
}
n();
function wa(
  t,
  {
    batch: e = !0,
    onError: r,
    onTransactions: o,
    poll: a,
    pollingInterval: s = t.pollingInterval,
  }
) {
  return (typeof a < "u" ? a : t.transport.type !== "webSocket")
    ? (() => {
        let p = G(["watchPendingTransactions", t.uid, e, s]);
        return J(p, { onTransactions: o, onError: r }, (d) => {
          let u,
            l = it(
              () =>
                c(this, null, function* () {
                  try {
                    if (!u)
                      try {
                        u = yield v(
                          t,
                          Fr,
                          "createPendingTransactionFilter"
                        )({});
                        return;
                      } catch (x) {
                        throw (l(), x);
                      }
                    let g = yield v(t, Rt, "getFilterChanges")({ filter: u });
                    if (g.length === 0) return;
                    if (e) d.onTransactions(g);
                    else for (let x of g) d.onTransactions([x]);
                  } catch (g) {
                    d.onError?.(g);
                  }
                }),
              { emitOnBegin: !0, interval: s }
            );
          return () =>
            c(this, null, function* () {
              u && (yield v(t, Ft, "uninstallFilter")({ filter: u })), l();
            });
        });
      })()
    : (() => {
        let p = !0,
          d = () => (p = !1);
        return (
          c(this, null, function* () {
            try {
              let { unsubscribe: u } = yield t.transport.subscribe({
                params: ["newPendingTransactions"],
                onData(l) {
                  if (!p) return;
                  let g = l.result;
                  o([g]);
                },
                onError(l) {
                  r?.(l);
                },
              });
              (d = u), p || d();
            } catch (u) {
              r?.(u);
            }
          }),
          () => d()
        );
      })();
}
n();
n();
function Ea(t) {
  let u = t.match(mi)?.groups ?? {},
    { scheme: e, statement: r } = u,
    o = S(u, ["scheme", "statement"]),
    l = t.match(fi)?.groups ?? {},
    {
      chainId: a,
      expirationTime: s,
      issuedAt: i,
      notBefore: m,
      requestId: f,
    } = l,
    p = S(l, [
      "chainId",
      "expirationTime",
      "issuedAt",
      "notBefore",
      "requestId",
    ]),
    d = t
      .split("Resources:")[1]
      ?.split(
        `
- `
      )
      .slice(1);
  return y(
    y(
      y(
        y(
          y(
            y(
              y(
                y(y(y({}, o), p), a ? { chainId: Number(a) } : {}),
                s ? { expirationTime: new Date(s) } : {}
              ),
              i ? { issuedAt: new Date(i) } : {}
            ),
            m ? { notBefore: new Date(m) } : {}
          ),
          f ? { requestId: f } : {}
        ),
        d ? { resources: d } : {}
      ),
      e ? { scheme: e } : {}
    ),
    r ? { statement: r } : {}
  );
}
var mi =
    /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
  fi =
    /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
n();
function Ta(t) {
  let {
    address: e,
    domain: r,
    message: o,
    nonce: a,
    scheme: s,
    time: i = new Date(),
  } = t;
  if (
    (r && o.domain !== r) ||
    (a && o.nonce !== a) ||
    (s && o.scheme !== s) ||
    (o.expirationTime && i >= o.expirationTime) ||
    (o.notBefore && i < o.notBefore)
  )
    return !1;
  try {
    if (!o.address || (e && !Lt(o.address, e))) return !1;
  } catch {
    return !1;
  }
  return !0;
}
function va(t, e) {
  return c(this, null, function* () {
    let g = e,
      {
        address: r,
        domain: o,
        message: a,
        nonce: s,
        scheme: i,
        signature: m,
        time: f = new Date(),
      } = g,
      p = S(g, [
        "address",
        "domain",
        "message",
        "nonce",
        "scheme",
        "signature",
        "time",
      ]),
      d = Ea(a);
    if (
      !d.address ||
      !Ta({ address: r, domain: o, message: d, nonce: s, scheme: i, time: f })
    )
      return !1;
    let l = Zt(a);
    return ge(t, y({ address: d.address, hash: l, signature: m }, p));
  });
}
function Jo(t) {
  return {
    call: (e) => Ct(t, e),
    createBlockFilter: () => Dn(t),
    createContractEventFilter: (e) => ne(t, e),
    createEventFilter: (e) => Rr(t, e),
    createPendingTransactionFilter: () => Fr(t),
    estimateContractGas: (e) => br(t, e),
    estimateGas: (e) => se(t, e),
    getBalance: (e) => Un(t, e),
    getBlobBaseFee: () => Ln(t),
    getBlock: (e) => Z(t, e),
    getBlockNumber: (e) => ct(t, e),
    getBlockTransactionCount: (e) => Mn(t, e),
    getBytecode: (e) => Gn(t, e),
    getChainId: () => st(t),
    getContractEvents: (e) => ce(t, e),
    getEnsAddress: (e) => kn(t, e),
    getEnsAvatar: (e) => qn(t, e),
    getEnsName: (e) => _n(t, e),
    getEnsResolver: (e) => Hn(t, e),
    getEnsText: (e) => kr(t, e),
    getFeeHistory: (e) => zn(t, e),
    estimateFeesPerGas: (e) => gn(t, e),
    getFilterChanges: (e) => Rt(t, e),
    getFilterLogs: (e) => On(t, e),
    getGasPrice: () => ae(t),
    getLogs: (e) => ie(t, e),
    getProof: (e) => ma(t, e),
    estimateMaxPriorityFeePerGas: (e) => hn(t, e),
    getStorageAt: (e) => fa(t, e),
    getTransaction: (e) => he(t, e),
    getTransactionConfirmations: (e) => ua(t, e),
    getTransactionCount: (e) => xr(t, e),
    getTransactionReceipt: (e) => We(t, e),
    multicall: (e) => pa(t, e),
    prepareTransactionRequest: (e) => kt(t, e),
    readContract: (e) => V(t, e),
    sendRawTransaction: (e) => me(t, e),
    simulateContract: (e) => yr(t, e),
    verifyMessage: (e) => ha(t, e),
    verifySiweMessage: (e) => va(t, e),
    verifyTypedData: (e) => ga(t, e),
    uninstallFilter: (e) => Ft(t, e),
    waitForTransactionReceipt: (e) => xa(t, e),
    watchBlocks: (e) => ba(t, e),
    watchBlockNumber: (e) => Lr(t, e),
    watchContractEvent: (e) => wr(t, e),
    watchEvent: (e) => ya(t, e),
    watchPendingTransactions: (e) => wa(t, e),
  };
}
function ui(t) {
  let { key: e = "public", name: r = "Public Client" } = t;
  return Ot(F(y({}, t), { key: e, name: r, type: "publicClient" })).extend(Jo);
}
n();
n();
n();
function Aa(r, o) {
  return c(this, arguments, function* (t, { hash: e }) {
    yield t.request({ method: `${t.mode}_dropTransaction`, params: [e] });
  });
}
n();
function Ca(t) {
  return c(this, null, function* () {
    return t.request({ method: `${t.mode}_dumpState` });
  });
}
n();
function Ia(t) {
  return c(this, null, function* () {
    return t.mode === "ganache"
      ? yield t.request({ method: "eth_mining" })
      : yield t.request({ method: `${t.mode}_getAutomine` });
  });
}
n();
function Pa(t) {
  return c(this, null, function* () {
    return yield t.request({ method: "txpool_content" });
  });
}
n();
function ka(t) {
  return c(this, null, function* () {
    let { pending: e, queued: r } = yield t.request({
      method: "txpool_status",
    });
    return { pending: U(e), queued: U(r) };
  });
}
n();
function Ra(r, o) {
  return c(this, arguments, function* (t, { address: e }) {
    yield t.request({ method: `${t.mode}_impersonateAccount`, params: [e] });
  });
}
n();
function Fa(r, o) {
  return c(this, arguments, function* (t, { seconds: e }) {
    return yield t.request({ method: "evm_increaseTime", params: [I(e)] });
  });
}
n();
function Ba(t) {
  return c(this, null, function* () {
    return yield t.request({ method: "txpool_inspect" });
  });
}
n();
function Sa(r, o) {
  return c(this, arguments, function* (t, { state: e }) {
    yield t.request({ method: `${t.mode}_loadState`, params: [e] });
  });
}
n();
function Na(o, a) {
  return c(this, arguments, function* (t, { blocks: e, interval: r }) {
    t.mode === "ganache"
      ? yield t.request({ method: "evm_mine", params: [{ blocks: I(e) }] })
      : yield t.request({
          method: `${t.mode}_mine`,
          params: [I(e), I(r || 0)],
        });
  });
}
n();
function qa(t) {
  return c(this, null, function* () {
    yield t.request({ method: `${t.mode}_removeBlockTimestampInterval` });
  });
}
n();
function _a(o) {
  return c(
    this,
    arguments,
    function* (t, { blockNumber: e, jsonRpcUrl: r } = {}) {
      yield t.request({
        method: `${t.mode}_reset`,
        params: [{ forking: { blockNumber: Number(e), jsonRpcUrl: r } }],
      });
    }
  );
}
n();
function Ha(r, o) {
  return c(this, arguments, function* (t, { id: e }) {
    yield t.request({ method: "evm_revert", params: [e] });
  });
}
n();
function Da(t, e) {
  return c(this, null, function* () {
    let E = e,
      {
        accessList: r,
        data: o,
        from: a,
        gas: s,
        gasPrice: i,
        maxFeePerGas: m,
        maxPriorityFeePerGas: f,
        nonce: p,
        to: d,
        value: u,
      } = E,
      l = S(E, [
        "accessList",
        "data",
        "from",
        "gas",
        "gasPrice",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "to",
        "value",
      ]),
      g = t.chain?.formatters?.transactionRequest?.format,
      b = (g || lt)(
        F(y({}, oe(l, { format: g })), {
          accessList: r,
          data: o,
          from: a,
          gas: s,
          gasPrice: i,
          maxFeePerGas: m,
          maxPriorityFeePerGas: f,
          nonce: p,
          to: d,
          value: u,
        })
      );
    return yield t.request({
      method: "eth_sendUnsignedTransaction",
      params: [b],
    });
  });
}
n();
function Ua(t, e) {
  return c(this, null, function* () {
    t.mode === "ganache"
      ? e
        ? yield t.request({ method: "miner_start" })
        : yield t.request({ method: "miner_stop" })
      : yield t.request({ method: "evm_setAutomine", params: [e] });
  });
}
n();
function La(o, a) {
  return c(this, arguments, function* (t, { address: e, value: r }) {
    t.mode === "ganache"
      ? yield t.request({ method: "evm_setAccountBalance", params: [e, I(r)] })
      : yield t.request({ method: `${t.mode}_setBalance`, params: [e, I(r)] });
  });
}
n();
function Ma(r, o) {
  return c(this, arguments, function* (t, { gasLimit: e }) {
    yield t.request({ method: "evm_setBlockGasLimit", params: [I(e)] });
  });
}
n();
function Ga(r, o) {
  return c(this, arguments, function* (t, { interval: e }) {
    let a = t.mode === "hardhat" ? e * 1e3 : e;
    yield t.request({
      method: `${t.mode}_setBlockTimestampInterval`,
      params: [a],
    });
  });
}
n();
function $a(o, a) {
  return c(this, arguments, function* (t, { address: e, bytecode: r }) {
    yield t.request({ method: `${t.mode}_setCode`, params: [e, r] });
  });
}
n();
function za(r, o) {
  return c(this, arguments, function* (t, { address: e }) {
    yield t.request({ method: `${t.mode}_setCoinbase`, params: [e] });
  });
}
n();
function Oa(r, o) {
  return c(this, arguments, function* (t, { interval: e }) {
    let a = t.mode === "hardhat" ? e * 1e3 : e;
    yield t.request({ method: "evm_setIntervalMining", params: [a] });
  });
}
n();
function ja(t, e) {
  return c(this, null, function* () {
    yield t.request({ method: `${t.mode}_setLoggingEnabled`, params: [e] });
  });
}
n();
function Va(r, o) {
  return c(this, arguments, function* (t, { gasPrice: e }) {
    yield t.request({ method: `${t.mode}_setMinGasPrice`, params: [I(e)] });
  });
}
n();
function Wa(r, o) {
  return c(this, arguments, function* (t, { baseFeePerGas: e }) {
    yield t.request({
      method: `${t.mode}_setNextBlockBaseFeePerGas`,
      params: [I(e)],
    });
  });
}
n();
function Ka(r, o) {
  return c(this, arguments, function* (t, { timestamp: e }) {
    yield t.request({ method: "evm_setNextBlockTimestamp", params: [I(e)] });
  });
}
n();
function Za(o, a) {
  return c(this, arguments, function* (t, { address: e, nonce: r }) {
    yield t.request({ method: `${t.mode}_setNonce`, params: [e, I(r)] });
  });
}
n();
function Ja(t, e) {
  return c(this, null, function* () {
    yield t.request({ method: `${t.mode}_setRpcUrl`, params: [e] });
  });
}
n();
function Ya(a, s) {
  return c(this, arguments, function* (t, { address: e, index: r, value: o }) {
    yield t.request({
      method: `${t.mode}_setStorageAt`,
      params: [e, typeof r == "number" ? I(r) : r, o],
    });
  });
}
n();
function Qa(t) {
  return c(this, null, function* () {
    return yield t.request({ method: "evm_snapshot" });
  });
}
n();
function Xa(r, o) {
  return c(this, arguments, function* (t, { address: e }) {
    yield t.request({
      method: `${t.mode}_stopImpersonatingAccount`,
      params: [e],
    });
  });
}
function Yo({ mode: t }) {
  return (e) => {
    let r = e.extend(() => ({ mode: t }));
    return {
      dropTransaction: (o) => Aa(r, o),
      dumpState: () => Ca(r),
      getAutomine: () => Ia(r),
      getTxpoolContent: () => Pa(r),
      getTxpoolStatus: () => ka(r),
      impersonateAccount: (o) => Ra(r, o),
      increaseTime: (o) => Fa(r, o),
      inspectTxpool: () => Ba(r),
      loadState: (o) => Sa(r, o),
      mine: (o) => Na(r, o),
      removeBlockTimestampInterval: () => qa(r),
      reset: (o) => _a(r, o),
      revert: (o) => Ha(r, o),
      sendUnsignedTransaction: (o) => Da(r, o),
      setAutomine: (o) => Ua(r, o),
      setBalance: (o) => La(r, o),
      setBlockGasLimit: (o) => Ma(r, o),
      setBlockTimestampInterval: (o) => Ga(r, o),
      setCode: (o) => $a(r, o),
      setCoinbase: (o) => za(r, o),
      setIntervalMining: (o) => Oa(r, o),
      setLoggingEnabled: (o) => ja(r, o),
      setMinGasPrice: (o) => Va(r, o),
      setNextBlockBaseFeePerGas: (o) => Wa(r, o),
      setNextBlockTimestamp: (o) => Ka(r, o),
      setNonce: (o) => Za(r, o),
      setRpcUrl: (o) => Ja(r, o),
      setStorageAt: (o) => Ya(r, o),
      snapshot: () => Qa(r),
      stopImpersonatingAccount: (o) => Xa(r, o),
    };
  };
}
function pi(t) {
  let { key: e = "test", name: r = "Test Client", mode: o } = t;
  return Ot(F(y({}, t), { key: e, name: r, type: "testClient" })).extend((s) =>
    y({ mode: o }, Yo({ mode: o })(s))
  );
}
n();
n();
function ts(t, e) {
  let m = e,
    { abi: r, args: o, bytecode: a } = m,
    s = S(m, ["abi", "args", "bytecode"]),
    i = Oe({ abi: r, args: o, bytecode: a });
  return fe(t, F(y({}, s), { data: i }));
}
n();
function es(t) {
  return c(this, null, function* () {
    return t.account?.type === "local"
      ? [t.account.address]
      : (yield t.request({ method: "eth_accounts" })).map((r) => Ae(r));
  });
}
n();
function rs(t) {
  return c(this, null, function* () {
    return yield t.request({ method: "wallet_getPermissions" });
  });
}
n();
function os(t) {
  return c(this, null, function* () {
    return (yield t.request(
      { method: "eth_requestAccounts" },
      { retryCount: 0 }
    )).map((r) => X(r));
  });
}
n();
function ns(t, e) {
  return c(this, null, function* () {
    return t.request(
      { method: "wallet_requestPermissions", params: [e] },
      { retryCount: 0 }
    );
  });
}
n();
function as(o, a) {
  return c(
    this,
    arguments,
    function* (t, { account: e = t.account, message: r }) {
      if (!e) throw new mt({ docsPath: "/docs/actions/wallet/signMessage" });
      let s = O(e);
      if (s.type === "local") return s.signMessage({ message: r });
      let i =
        typeof r == "string"
          ? ve(r)
          : r.raw instanceof Uint8Array
          ? $(r.raw)
          : r.raw;
      return t.request(
        { method: "personal_sign", params: [i, s.address] },
        { retryCount: 0 }
      );
    }
  );
}
n();
function ss(t, e) {
  return c(this, null, function* () {
    let p = e,
      { account: r = t.account, chain: o = t.chain } = p,
      a = S(p, ["account", "chain"]);
    if (!r) throw new mt({ docsPath: "/docs/actions/wallet/signTransaction" });
    let s = O(r);
    ht(y({ account: s }, e));
    let i = yield v(t, st, "getChainId")({});
    o !== null && Ue({ currentChainId: i, chain: o });
    let f =
      (o?.formatters || t.chain?.formatters)?.transactionRequest?.format || lt;
    return s.type === "local"
      ? s.signTransaction(F(y({}, a), { chainId: i }), {
          serializer: t.chain?.serializers?.transaction,
        })
      : yield t.request(
          {
            method: "eth_signTransaction",
            params: [F(y({}, f(a)), { chainId: I(i), from: s.address })],
          },
          { retryCount: 0 }
        );
  });
}
n();
function is(t, e) {
  return c(this, null, function* () {
    let { account: r = t.account, domain: o, message: a, primaryType: s } = e;
    if (!r) throw new mt({ docsPath: "/docs/actions/wallet/signTypedData" });
    let i = O(r),
      m = y({ EIP712Domain: le({ domain: o }) }, e.types);
    if (
      (ze({ domain: o, message: a, primaryType: s, types: m }),
      i.type === "local")
    )
      return i.signTypedData({
        domain: o,
        message: a,
        primaryType: s,
        types: m,
      });
    let f = G(
      { domain: o ?? {}, message: a, primaryType: s, types: m },
      (p, d) => (B(d) ? d.toLowerCase() : d)
    );
    return t.request(
      { method: "eth_signTypedData_v4", params: [i.address, f] },
      { retryCount: 0 }
    );
  });
}
n();
function cs(r, o) {
  return c(this, arguments, function* (t, { id: e }) {
    yield t.request(
      { method: "wallet_switchEthereumChain", params: [{ chainId: I(e) }] },
      { retryCount: 0 }
    );
  });
}
n();
function ms(t, e) {
  return c(this, null, function* () {
    return yield t.request(
      { method: "wallet_watchAsset", params: e },
      { retryCount: 0 }
    );
  });
}
function Qo(t) {
  return {
    addChain: (e) => Tn(t, e),
    deployContract: (e) => ts(t, e),
    getAddresses: () => es(t),
    getChainId: () => st(t),
    getPermissions: () => rs(t),
    prepareTransactionRequest: (e) => kt(t, e),
    requestAddresses: () => os(t),
    requestPermissions: (e) => ns(t, e),
    sendRawTransaction: (e) => me(t, e),
    sendTransaction: (e) => fe(t, e),
    signMessage: (e) => as(t, e),
    signTransaction: (e) => ss(t, e),
    signTypedData: (e) => is(t, e),
    switchChain: (e) => cs(t, e),
    watchAsset: (e) => ms(t, e),
    writeContract: (e) => Er(t, e),
  };
}
n();
function di(t) {
  let { key: e = "wallet", name: r = "Wallet Client", transport: o } = t;
  return Ot(
    F(y({}, t), { key: e, name: r, transport: o, type: "walletClient" })
  ).extend(Qo);
}
n();
function li(t, e = {}) {
  let {
    key: r = "webSocket",
    name: o = "WebSocket JSON-RPC",
    reconnect: a,
    retryDelay: s,
  } = e;
  return ({ chain: i, retryCount: m, timeout: f }) => {
    let p = e.retryCount ?? m,
      d = f ?? e.timeout ?? 1e4,
      u = t || i?.rpcUrls.default.webSocket?.[0];
    if (!u) throw new jt();
    return xt(
      {
        key: r,
        name: o,
        request(w) {
          return c(this, arguments, function* ({ method: x, params: b }) {
            let E = { method: x, params: b },
              T = yield de(u, { reconnect: a }),
              { error: A, result: P } = yield T.requestAsync({
                body: E,
                timeout: d,
              });
            if (A) throw new Re({ body: E, error: A, url: u });
            return P;
          });
        },
        retryCount: p,
        retryDelay: s,
        timeout: d,
        type: "webSocket",
      },
      {
        getSocket() {
          return Wn(u);
        },
        getRpcClient() {
          return de(u);
        },
        subscribe(E) {
          return c(
            this,
            arguments,
            function* ({ params: x, onData: b, onError: w }) {
              let T = yield de(u),
                { result: A } = yield new Promise((R, C) =>
                  T.request({
                    body: { method: "eth_subscribe", params: x },
                    onResponse(k) {
                      if (k.error) {
                        C(k.error), w?.(k.error);
                        return;
                      }
                      if (typeof k.id == "number") {
                        R(k);
                        return;
                      }
                      k.method === "eth_subscription" && b(k.params);
                    },
                  })
                );
              return {
                subscriptionId: A,
                unsubscribe() {
                  return c(this, null, function* () {
                    return new Promise((R) =>
                      T.request({
                        body: { method: "eth_unsubscribe", params: [A] },
                        onResponse: R,
                      })
                    );
                  });
                },
              };
            }
          );
        },
      }
    );
  };
}
n();
var hi = "0x0000000000000000000000000000000000000000";
n();
var gi = "0x0000000000000000000000000000000000000000000000000000000000000000";
n();
var Xo = "/docs/contract/decodeDeployData";
function xi(t) {
  let { abi: e, bytecode: r, data: o } = t;
  if (o === r) return { bytecode: r };
  let a = e.find((i) => "type" in i && i.type === "constructor");
  if (!a) throw new be({ docsPath: Xo });
  if (!("inputs" in a)) throw new St({ docsPath: Xo });
  if (!a.inputs || a.inputs.length === 0) throw new St({ docsPath: Xo });
  return { args: Tt(a.inputs, `0x${o.replace(r, "")}`), bytecode: r };
}
n();
function bi({ r: t, yParityAndS: e }) {
  let r = ut(e),
    o = r[0] & 128 ? 1 : 0,
    a = r;
  return o === 1 && (a[0] &= 127), { r: t, s: j(a), yParity: o };
}
n();
function fs(t) {
  let { r: e, s: r } = It.Signature.fromCompact(t.slice(2, 130));
  return { r: I(e, { size: 32 }), yParityAndS: I(r, { size: 32 }) };
}
n();
function us(t) {
  let { r: e, s: r } = It.Signature.fromCompact(t.slice(2, 130)),
    o = +`0x${t.slice(130)}`,
    [a, s] = (() => {
      if (o === 0 || o === 1) return [void 0, o];
      if (o === 27) return [BigInt(o), 0];
      if (o === 28) return [BigInt(o), 1];
      throw new Error("Invalid yParityOrV value");
    })();
  return typeof a < "u"
    ? { r: I(e, { size: 32 }), s: I(r, { size: 32 }), v: a, yParity: s }
    : { r: I(e, { size: 32 }), s: I(r, { size: 32 }), yParity: s };
}
n();
function yi(t) {
  return c(this, null, function* () {
    let { serializedTransaction: e, signature: r } = t,
      o = Vo(e),
      a = r ?? { r: o.r, s: o.s, v: o.v, yParity: o.yParity },
      s = Ao(
        F(y({}, o), {
          r: void 0,
          s: void 0,
          v: void 0,
          yParity: void 0,
          sidecars: void 0,
        })
      );
    return yield Kt({ hash: D(s), signature: a });
  });
}
n();
function wi(t) {
  let { r: e, s: r, v: o, yParity: a } = t,
    s = Number(a ?? o - 27n),
    i = r;
  if (s === 1) {
    let m = ut(r);
    (m[0] |= 128), (i = j(m));
  }
  return { r: e, yParityAndS: i };
}
n();
function ps({ r: t, yParityAndS: e }) {
  return `0x${new It.Signature(q(t), q(e)).toCompactHex()}`;
}
n();
function Ei(t) {
  let { sidecars: e, version: r } = t,
    o = t.to ?? (typeof e[0].blob == "string" ? "hex" : "bytes"),
    a = [];
  for (let { commitment: s } of e)
    a.push(fo({ commitment: s, to: o, version: r }));
  return a;
}
n();
function Ti(t) {
  let e = t.to ?? (typeof t.blobs[0] == "string" ? "hex" : "bytes"),
    r = typeof t.blobs[0] == "string" ? t.blobs.map((m) => ut(m)) : t.blobs,
    o = r.reduce((m, f) => m + f.length, 0),
    a = Ce(new Uint8Array(o)),
    s = !0;
  for (let m of r) {
    let f = Ce(m);
    for (; s && f.position < m.length; ) {
      f.incrementPosition(1);
      let p = 31;
      m.length - f.position < 31 && (p = m.length - f.position);
      for (let d in Array.from({ length: p })) {
        let u = f.readByte();
        if (u === 128 && !f.inspectBytes(f.remaining).includes(128)) {
          s = !1;
          break;
        }
        a.pushByte(u);
      }
    }
  }
  let i = a.bytes.slice(0, a.position);
  return e === "hex" ? j(i) : i;
}
n();
function tn({ blobToKzgCommitment: t, computeBlobKzgProof: e }) {
  return { blobToKzgCommitment: t, computeBlobKzgProof: e };
}
n();
function vi(t, e) {
  try {
    t.loadTrustedSetup(e);
  } catch (r) {
    let o = r;
    if (!o.message.includes("trusted setup is already loaded")) throw o;
  }
  return tn(t);
}
export {
  qe as a,
  ot as b,
  at as c,
  _e as d,
  He as e,
  gt as f,
  De as g,
  Mt as h,
  Gt as i,
  $t as j,
  Ue as k,
  ys as l,
  Ot as m,
  ws as n,
  ue as o,
  xt as p,
  Ts as q,
  vs as r,
  jt as s,
  Le as t,
  Ps as u,
  Vt as v,
  Ro as w,
  bt as x,
  Wt as y,
  Ge as z,
  qs as A,
  $e as B,
  Nr as C,
  ze as D,
  le as E,
  Ds as F,
  Us as G,
  Oe as H,
  Ls as I,
  Ms as J,
  Gs as K,
  qr as L,
  $s as M,
  Xn as N,
  ta as O,
  _r as P,
  Do as Q,
  Js as R,
  Go as S,
  Kt as T,
  $o as U,
  Zt as V,
  zo as W,
  Oo as X,
  Ys as Y,
  Qs as Z,
  jo as _,
  Vo as $,
  Ve as aa,
  oi as ba,
  ni as ca,
  Ur as da,
  Jo as ea,
  ui as fa,
  Yo as ga,
  pi as ha,
  Qo as ia,
  di as ja,
  li as ka,
  hi as la,
  gi as ma,
  xi as na,
  bi as oa,
  fs as pa,
  us as qa,
  yi as ra,
  wi as sa,
  ps as ta,
  Ei as ua,
  Ti as va,
  tn as wa,
  vi as xa,
};
