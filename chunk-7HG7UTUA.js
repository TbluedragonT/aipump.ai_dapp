import {
  $ as ke,
  A as O,
  B as sr,
  Ba as pe,
  C as ir,
  E as ur,
  Ea as xt,
  J as cr,
  K as B,
  L as pr,
  N as A,
  O as D,
  Q as lr,
  R as _,
  S as dr,
  V as mr,
  _ as fr,
  a as Te,
  aa as pt,
  b as j,
  ba as yr,
  c as tr,
  d as L,
  e as l,
  h as ct,
  j as q,
  la as ie,
  m as rr,
  ma as ue,
  na as lt,
  oa as dt,
  pa as mt,
  q as ae,
  qa as ft,
  r as se,
  ra as yt,
  sa as bt,
  t as nr,
  ta as ht,
  ua as gt,
  v as or,
  va as ce,
  wa as Be,
  y as ar,
  z as N,
  za as br,
} from "./chunk-YYSBJNVH.js";
import { a as v, b as P, d as F, l as k, q as u } from "./chunk-KXQY476L.js";
u();
u();
u();
function Z(e) {
  return typeof e == "string" ? { address: e, type: "json-rpc" } : e;
}
u();
var vt = [
    {
      inputs: [
        {
          components: [
            { name: "target", type: "address" },
            { name: "allowFailure", type: "bool" },
            { name: "callData", type: "bytes" },
          ],
          name: "calls",
          type: "tuple[]",
        },
      ],
      name: "aggregate3",
      outputs: [
        {
          components: [
            { name: "success", type: "bool" },
            { name: "returnData", type: "bytes" },
          ],
          name: "returnData",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  hr = [
    { inputs: [], name: "ResolverNotFound", type: "error" },
    { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
    { inputs: [], name: "ResolverNotContract", type: "error" },
    {
      inputs: [{ name: "returnData", type: "bytes" }],
      name: "ResolverError",
      type: "error",
    },
    {
      inputs: [
        {
          components: [
            { name: "status", type: "uint16" },
            { name: "message", type: "string" },
          ],
          name: "errors",
          type: "tuple[]",
        },
      ],
      name: "HttpError",
      type: "error",
    },
  ],
  go = [
    ...hr,
    {
      name: "resolve",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes" },
        { name: "data", type: "bytes" },
      ],
      outputs: [
        { name: "", type: "bytes" },
        { name: "address", type: "address" },
      ],
    },
    {
      name: "resolve",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes" },
        { name: "data", type: "bytes" },
        { name: "gateways", type: "string[]" },
      ],
      outputs: [
        { name: "", type: "bytes" },
        { name: "address", type: "address" },
      ],
    },
  ],
  xo = [
    ...hr,
    {
      name: "reverse",
      type: "function",
      stateMutability: "view",
      inputs: [{ type: "bytes", name: "reverseName" }],
      outputs: [
        { type: "string", name: "resolvedName" },
        { type: "address", name: "resolvedAddress" },
        { type: "address", name: "reverseResolver" },
        { type: "address", name: "resolver" },
      ],
    },
    {
      name: "reverse",
      type: "function",
      stateMutability: "view",
      inputs: [
        { type: "bytes", name: "reverseName" },
        { type: "string[]", name: "gateways" },
      ],
      outputs: [
        { type: "string", name: "resolvedName" },
        { type: "address", name: "resolvedAddress" },
        { type: "address", name: "reverseResolver" },
        { type: "address", name: "resolver" },
      ],
    },
  ],
  vo = [
    {
      name: "text",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes32" },
        { name: "key", type: "string" },
      ],
      outputs: [{ name: "", type: "string" }],
    },
  ],
  wo = [
    {
      name: "addr",
      type: "function",
      stateMutability: "view",
      inputs: [{ name: "name", type: "bytes32" }],
      outputs: [{ name: "", type: "address" }],
    },
    {
      name: "addr",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes32" },
        { name: "coinType", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bytes" }],
    },
  ];
var Po = [
    {
      inputs: [
        { internalType: "address", name: "_signer", type: "address" },
        { internalType: "bytes32", name: "_hash", type: "bytes32" },
        { internalType: "bytes", name: "_signature", type: "bytes" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
  ],
  Ao = [
    {
      type: "event",
      name: "Approval",
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "spender", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        { indexed: !0, name: "from", type: "address" },
        { indexed: !0, name: "to", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "function",
      name: "allowance",
      stateMutability: "view",
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
      ],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "approve",
      stateMutability: "nonpayable",
      inputs: [
        { name: "spender", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [{ name: "account", type: "address" }],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "decimals",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "uint8" }],
    },
    {
      type: "function",
      name: "name",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "string" }],
    },
    {
      type: "function",
      name: "symbol",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "string" }],
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        { name: "sender", type: "address" },
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
  ],
  $o = [
    {
      type: "event",
      name: "Approval",
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "spender", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        { indexed: !0, name: "from", type: "address" },
        { indexed: !0, name: "to", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "function",
      name: "allowance",
      stateMutability: "view",
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
      ],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "approve",
      stateMutability: "nonpayable",
      inputs: [
        { name: "spender", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [{ name: "account", type: "address" }],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "decimals",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "uint8" }],
    },
    {
      type: "function",
      name: "name",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "bytes32" }],
    },
    {
      type: "function",
      name: "symbol",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "bytes32" }],
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        { name: "sender", type: "address" },
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
  ],
  Mo = [
    {
      type: "event",
      name: "Approval",
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "spender", type: "address" },
        { indexed: !0, name: "tokenId", type: "uint256" },
      ],
    },
    {
      type: "event",
      name: "ApprovalForAll",
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "operator", type: "address" },
        { indexed: !1, name: "approved", type: "bool" },
      ],
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        { indexed: !0, name: "from", type: "address" },
        { indexed: !0, name: "to", type: "address" },
        { indexed: !0, name: "tokenId", type: "uint256" },
      ],
    },
    {
      type: "function",
      name: "approve",
      stateMutability: "payable",
      inputs: [
        { name: "spender", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      outputs: [],
    },
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [{ name: "account", type: "address" }],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "getApproved",
      stateMutability: "view",
      inputs: [{ name: "tokenId", type: "uint256" }],
      outputs: [{ type: "address" }],
    },
    {
      type: "function",
      name: "isApprovedForAll",
      stateMutability: "view",
      inputs: [
        { name: "owner", type: "address" },
        { name: "operator", type: "address" },
      ],
      outputs: [{ type: "bool" }],
    },
    {
      type: "function",
      name: "name",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "string" }],
    },
    {
      type: "function",
      name: "ownerOf",
      stateMutability: "view",
      inputs: [{ name: "tokenId", type: "uint256" }],
      outputs: [{ name: "owner", type: "address" }],
    },
    {
      type: "function",
      name: "safeTransferFrom",
      stateMutability: "payable",
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      outputs: [],
    },
    {
      type: "function",
      name: "safeTransferFrom",
      stateMutability: "nonpayable",
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "id", type: "uint256" },
        { name: "data", type: "bytes" },
      ],
      outputs: [],
    },
    {
      type: "function",
      name: "setApprovalForAll",
      stateMutability: "nonpayable",
      inputs: [
        { name: "operator", type: "address" },
        { name: "approved", type: "bool" },
      ],
      outputs: [],
    },
    {
      type: "function",
      name: "symbol",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "string" }],
    },
    {
      type: "function",
      name: "tokenByIndex",
      stateMutability: "view",
      inputs: [{ name: "index", type: "uint256" }],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "tokenByIndex",
      stateMutability: "view",
      inputs: [
        { name: "owner", type: "address" },
        { name: "index", type: "uint256" },
      ],
      outputs: [{ name: "tokenId", type: "uint256" }],
    },
    {
      type: "function",
      name: "tokenURI",
      stateMutability: "view",
      inputs: [{ name: "tokenId", type: "uint256" }],
      outputs: [{ type: "string" }],
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "payable",
      inputs: [
        { name: "sender", type: "address" },
        { name: "recipient", type: "address" },
        { name: "tokeId", type: "uint256" },
      ],
      outputs: [],
    },
  ],
  jo = [
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "spender", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, name: "sender", type: "address" },
        { indexed: !0, name: "receiver", type: "address" },
        { indexed: !1, name: "assets", type: "uint256" },
        { indexed: !1, name: "shares", type: "uint256" },
      ],
      name: "Deposit",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, name: "from", type: "address" },
        { indexed: !0, name: "to", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, name: "sender", type: "address" },
        { indexed: !0, name: "receiver", type: "address" },
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !1, name: "assets", type: "uint256" },
        { indexed: !1, name: "shares", type: "uint256" },
      ],
      name: "Withdraw",
      type: "event",
    },
    {
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "spender", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "asset",
      outputs: [{ name: "assetTokenAddress", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "shares", type: "uint256" }],
      name: "convertToAssets",
      outputs: [{ name: "assets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "assets", type: "uint256" }],
      name: "convertToShares",
      outputs: [{ name: "shares", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "assets", type: "uint256" },
        { name: "receiver", type: "address" },
      ],
      name: "deposit",
      outputs: [{ name: "shares", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "caller", type: "address" }],
      name: "maxDeposit",
      outputs: [{ name: "maxAssets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "caller", type: "address" }],
      name: "maxMint",
      outputs: [{ name: "maxShares", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "owner", type: "address" }],
      name: "maxRedeem",
      outputs: [{ name: "maxShares", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "owner", type: "address" }],
      name: "maxWithdraw",
      outputs: [{ name: "maxAssets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "shares", type: "uint256" },
        { name: "receiver", type: "address" },
      ],
      name: "mint",
      outputs: [{ name: "assets", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "assets", type: "uint256" }],
      name: "previewDeposit",
      outputs: [{ name: "shares", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "shares", type: "uint256" }],
      name: "previewMint",
      outputs: [{ name: "assets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "shares", type: "uint256" }],
      name: "previewRedeem",
      outputs: [{ name: "assets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "assets", type: "uint256" }],
      name: "previewWithdraw",
      outputs: [{ name: "shares", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "shares", type: "uint256" },
        { name: "receiver", type: "address" },
        { name: "owner", type: "address" },
      ],
      name: "redeem",
      outputs: [{ name: "assets", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "totalAssets",
      outputs: [{ name: "totalManagedAssets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "to", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "assets", type: "uint256" },
        { name: "receiver", type: "address" },
        { name: "owner", type: "address" },
      ],
      name: "withdraw",
      outputs: [{ name: "shares", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
u();
var gr = "0x82ad56cb";
u();
u();
var xr = {
    1: "An `assert` condition failed.",
    17: "Arithmetic operation resulted in underflow or overflow.",
    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
    33: "Attempted to convert to an invalid type.",
    34: "Attempted to access a storage byte array that is incorrectly encoded.",
    49: "Performed `.pop()` on an empty array",
    50: "Array index is out of bounds.",
    65: "Allocated too much memory or created an array which is too large.",
    81: "Attempted to call a zero-initialized variable of internal function type.",
  },
  vr = {
    inputs: [{ name: "message", type: "string" }],
    name: "Error",
    type: "error",
  },
  wr = {
    inputs: [{ name: "reason", type: "uint256" }],
    name: "Panic",
    type: "error",
  };
u();
u();
u();
function E(e, { includeName: t = !1 } = {}) {
  if (e.type !== "function" && e.type !== "event" && e.type !== "error")
    throw new Re(e.type);
  return `${e.name}(${le(e.inputs, { includeName: t })})`;
}
function le(e, { includeName: t = !1 } = {}) {
  return e ? e.map((r) => Tn(r, { includeName: t })).join(t ? ", " : ",") : "";
}
function Tn(e, { includeName: t }) {
  return e.type.startsWith("tuple")
    ? `(${le(e.components, { includeName: t })})${e.type.slice(5)}`
    : e.type + (t && e.name ? ` ${e.name}` : "");
}
var Pr = class extends l {
    constructor({ docsPath: t }) {
      super(
        [
          "A constructor was not found on the ABI.",
          "Make sure you are using the correct ABI and that the constructor exists on it.",
        ].join(`
`),
        { docsPath: t }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiConstructorNotFoundError",
        });
    }
  },
  Ar = class extends l {
    constructor({ docsPath: t }) {
      super(
        [
          "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
          "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
        ].join(`
`),
        { docsPath: t }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiConstructorParamsNotFoundError",
        });
    }
  },
  $r = class extends l {
    constructor({ data: t, size: r }) {
      super(
        [
          `Data size of ${r} bytes is invalid.`,
          "Size must be in increments of 32 bytes (size % 32 === 0).",
        ].join(`
`),
        { metaMessages: [`Data: ${t} (${r} bytes)`] }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiDecodingDataSizeInvalidError",
        });
    }
  },
  ze = class extends l {
    constructor({ data: t, params: r, size: n }) {
      super(
        [`Data size of ${n} bytes is too small for given parameters.`].join(`
`),
        {
          metaMessages: [
            `Params: (${le(r, { includeName: !0 })})`,
            `Data:   ${t} (${n} bytes)`,
          ],
        }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiDecodingDataSizeTooSmallError",
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "params", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "size", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = t),
        (this.params = r),
        (this.size = n);
    }
  };
var J = class extends l {
    constructor() {
      super('Cannot decode zero data ("0x") with ABI parameters.'),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiDecodingZeroDataError",
        });
    }
  },
  Ce = class extends l {
    constructor({ expectedLength: t, givenLength: r, type: n }) {
      super(
        [
          `ABI encoding array length mismatch for type ${n}.`,
          `Expected length: ${t}`,
          `Given length: ${r}`,
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiEncodingArrayLengthMismatchError",
        });
    }
  },
  Fe = class extends l {
    constructor({ expectedSize: t, value: r }) {
      super(
        `Size of bytes "${r}" (bytes${j(
          r
        )}) does not match expected size (bytes${t}).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiEncodingBytesSizeMismatchError",
        });
    }
  },
  Ne = class extends l {
    constructor({ expectedLength: t, givenLength: r }) {
      super(
        [
          "ABI encoding params/values length mismatch.",
          `Expected length (params): ${t}`,
          `Given length (values): ${r}`,
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiEncodingLengthMismatchError",
        });
    }
  },
  Mr = class extends l {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Arguments (\`args\`) were provided to "${t}", but "${t}" on the ABI does not contain any parameters (\`inputs\`).`,
          "Cannot encode error result without knowing what the parameter types are.",
          "Make sure you are using the correct ABI and that the inputs exist on it.",
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiErrorInputsNotFoundError",
        });
    }
  },
  jr = class extends l {
    constructor(t, { docsPath: r } = {}) {
      super(
        [
          `Error ${t ? `"${t}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiErrorNotFoundError",
        });
    }
  },
  V = class extends l {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Encoded error signature "${t}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
          `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`,
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiErrorSignatureNotFoundError",
        }),
        Object.defineProperty(this, "signature", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.signature = t);
    }
  },
  Or = class extends l {
    constructor({ docsPath: t }) {
      super("Cannot extract event signature from empty topics.", {
        docsPath: t,
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiEventSignatureEmptyTopicsError",
        });
    }
  },
  Sr = class extends l {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Encoded event signature "${t}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the event exists on it.",
          `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`,
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiEventSignatureNotFoundError",
        });
    }
  },
  Er = class extends l {
    constructor(t, { docsPath: r } = {}) {
      super(
        [
          `Event ${t ? `"${t}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the event exists on it.",
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiEventNotFoundError",
        });
    }
  },
  U = class extends l {
    constructor(t, { docsPath: r } = {}) {
      super(
        [
          `Function ${t ? `"${t}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the function exists on it.",
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiFunctionNotFoundError",
        });
    }
  },
  De = class extends l {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Function "${t}" does not contain any \`outputs\` on ABI.`,
          "Cannot decode function result without knowing what the parameter types are.",
          "Make sure you are using the correct ABI and that the function exists on it.",
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiFunctionOutputsNotFoundError",
        });
    }
  },
  Ir = class extends l {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Encoded function signature "${t}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the function exists on it.",
          `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`,
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiFunctionSignatureNotFoundError",
        });
    }
  },
  Le = class extends l {
    constructor(t, r) {
      super("Found ambiguous types in overloaded ABI items.", {
        metaMessages: [
          `\`${t.type}\` in \`${E(t.abiItem)}\`, and`,
          `\`${r.type}\` in \`${E(r.abiItem)}\``,
          "",
          "These types encode differently and cannot be distinguished at runtime.",
          "Remove one of the ambiguous items in the ABI.",
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiItemAmbiguityError",
        });
    }
  },
  Tr = class extends l {
    constructor({ expectedSize: t, givenSize: r }) {
      super(`Expected bytes${t}, got bytes${r}.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "BytesSizeMismatchError",
        });
    }
  },
  kr = class extends l {
    constructor({ abiItem: t, data: r, params: n, size: o }) {
      super(
        [
          `Data size of ${o} bytes is too small for non-indexed event parameters.`,
        ].join(`
`),
        {
          metaMessages: [
            `Params: (${le(n, { includeName: !0 })})`,
            `Data:   ${r} (${o} bytes)`,
          ],
        }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "DecodeLogDataMismatch",
        }),
        Object.defineProperty(this, "abiItem", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "params", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "size", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.abiItem = t),
        (this.data = r),
        (this.params = n),
        (this.size = o);
    }
  },
  Br = class extends l {
    constructor({ abiItem: t, param: r }) {
      super(
        [
          `Expected a topic for indexed event parameter${
            r.name ? ` "${r.name}"` : ""
          } on event "${E(t, { includeName: !0 })}".`,
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "DecodeLogTopicsMismatch",
        }),
        Object.defineProperty(this, "abiItem", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.abiItem = t);
    }
  },
  qe = class extends l {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Type "${t}" is not a valid encoding type.`,
          "Please provide a valid ABI type.",
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiEncodingType",
        });
    }
  },
  Ue = class extends l {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Type "${t}" is not a valid decoding type.`,
          "Please provide a valid ABI type.",
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiDecodingType",
        });
    }
  },
  He = class extends l {
    constructor(t) {
      super(
        [`Value "${t}" is not a valid array.`].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidArrayError",
        });
    }
  },
  Re = class extends l {
    constructor(t) {
      super(
        [
          `"${t}" is not a valid definition type.`,
          'Valid types: "function", "event", "error"',
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidDefinitionTypeError",
        });
    }
  },
  Rr = class extends l {
    constructor(t) {
      super(`Type "${t}" is not supported for packed encoding.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "UnsupportedPackedAbiType",
        });
    }
  };
u();
u();
u();
var kn = (e) => cr(ir(e));
function zr(e) {
  return kn(e);
}
u();
u();
u();
u();
var Cr = "1.0.0";
var x = class e extends Error {
  constructor(t, r = {}) {
    let n =
        r.cause instanceof e
          ? r.cause.details
          : r.cause?.message
          ? r.cause.message
          : r.details,
      o = (r.cause instanceof e && r.cause.docsPath) || r.docsPath,
      s = [
        t || "An error occurred.",
        "",
        ...(r.metaMessages ? [...r.metaMessages, ""] : []),
        ...(o ? [`Docs: https://abitype.dev${o}`] : []),
        ...(n ? [`Details: ${n}`] : []),
        `Version: abitype@${Cr}`,
      ].join(`
`);
    super(s),
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
        value: "AbiTypeError",
      }),
      r.cause && (this.cause = r.cause),
      (this.details = n),
      (this.docsPath = o),
      (this.metaMessages = r.metaMessages),
      (this.shortMessage = t);
  }
};
u();
u();
u();
u();
function S(e, t) {
  return e.exec(t)?.groups;
}
var wt = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  Pt =
    /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
  We = /^\(.+?\).*?$/;
var Fr = /^tuple(?<array>(\[(\d*)\])*)$/;
function Ge(e) {
  let t = e.type;
  if (Fr.test(e.type) && "components" in e) {
    t = "(";
    let r = e.components.length;
    for (let o = 0; o < r; o++) {
      let s = e.components[o];
      (t += Ge(s)), o < r - 1 && (t += ", ");
    }
    let n = S(Fr, e.type);
    return (t += `)${n?.array ?? ""}`), Ge(P(v({}, e), { type: t }));
  }
  return (
    "indexed" in e && e.indexed && (t = `${t} indexed`),
    e.name ? `${t} ${e.name}` : t
  );
}
function K(e) {
  let t = "",
    r = e.length;
  for (let n = 0; n < r; n++) {
    let o = e[n];
    (t += Ge(o)), n !== r - 1 && (t += ", ");
  }
  return t;
}
function At(e) {
  return e.type === "function"
    ? `function ${e.name}(${K(e.inputs)})${
        e.stateMutability && e.stateMutability !== "nonpayable"
          ? ` ${e.stateMutability}`
          : ""
      }${e.outputs.length ? ` returns (${K(e.outputs)})` : ""}`
    : e.type === "event"
    ? `event ${e.name}(${K(e.inputs)})`
    : e.type === "error"
    ? `error ${e.name}(${K(e.inputs)})`
    : e.type === "constructor"
    ? `constructor(${K(e.inputs)})${
        e.stateMutability === "payable" ? " payable" : ""
      }`
    : e.type === "fallback"
    ? "fallback()"
    : "receive() external payable";
}
u();
u();
var Nr = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function Dr(e) {
  return Nr.test(e);
}
function Lr(e) {
  return S(Nr, e);
}
var qr = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function Ur(e) {
  return qr.test(e);
}
function Hr(e) {
  return S(qr, e);
}
var Wr =
  /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function Gr(e) {
  return Wr.test(e);
}
function _r(e) {
  return S(Wr, e);
}
var Zr = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function R(e) {
  return Zr.test(e);
}
function Jr(e) {
  return S(Zr, e);
}
var Vr =
  /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function Kr(e) {
  return Vr.test(e);
}
function Yr(e) {
  return S(Vr, e);
}
var Bn = /^fallback\(\)$/;
function Qr(e) {
  return Bn.test(e);
}
var Rn = /^receive\(\) external payable$/;
function Xr(e) {
  return Rn.test(e);
}
var Y = new Set(["memory", "indexed", "storage", "calldata"]),
  en = new Set(["indexed"]),
  _e = new Set(["calldata", "memory", "storage"]);
u();
u();
var de = class extends x {
    constructor({ signature: t }) {
      super("Failed to parse ABI item.", {
        details: `parseAbiItem(${JSON.stringify(t, null, 2)})`,
        docsPath: "/api/human#parseabiitem-1",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiItemError",
        });
    }
  },
  me = class extends x {
    constructor({ type: t }) {
      super("Unknown type.", {
        metaMessages: [
          `Type "${t}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "UnknownTypeError",
        });
    }
  },
  fe = class extends x {
    constructor({ type: t }) {
      super("Unknown type.", {
        metaMessages: [`Type "${t}" is not a valid ABI type.`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "UnknownSolidityTypeError",
        });
    }
  };
u();
var ye = class extends x {
    constructor({ param: t }) {
      super("Failed to parse ABI parameter.", {
        details: `parseAbiParameter(${JSON.stringify(t, null, 2)})`,
        docsPath: "/api/human#parseabiparameter-1",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiParameterError",
        });
    }
  },
  be = class extends x {
    constructor({ params: t }) {
      super("Failed to parse ABI parameters.", {
        details: `parseAbiParameters(${JSON.stringify(t, null, 2)})`,
        docsPath: "/api/human#parseabiparameters-1",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiParametersError",
        });
    }
  },
  he = class extends x {
    constructor({ param: t }) {
      super("Invalid ABI parameter.", { details: t }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidParameterError",
        });
    }
  },
  ge = class extends x {
    constructor({ param: t, name: r }) {
      super("Invalid ABI parameter.", {
        details: t,
        metaMessages: [
          `"${r}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "SolidityProtectedKeywordError",
        });
    }
  },
  xe = class extends x {
    constructor({ param: t, type: r, modifier: n }) {
      super("Invalid ABI parameter.", {
        details: t,
        metaMessages: [
          `Modifier "${n}" not allowed${r ? ` in "${r}" type` : ""}.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidModifierError",
        });
    }
  },
  ve = class extends x {
    constructor({ param: t, type: r, modifier: n }) {
      super("Invalid ABI parameter.", {
        details: t,
        metaMessages: [
          `Modifier "${n}" not allowed${r ? ` in "${r}" type` : ""}.`,
          `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidFunctionModifierError",
        });
    }
  },
  we = class extends x {
    constructor({ abiParameter: t }) {
      super("Invalid ABI parameter.", {
        details: JSON.stringify(t, null, 2),
        metaMessages: ["ABI parameter type is invalid."],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiTypeParameterError",
        });
    }
  };
u();
var z = class extends x {
    constructor({ signature: t, type: r }) {
      super(`Invalid ${r} signature.`, { details: t }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidSignatureError",
        });
    }
  },
  Pe = class extends x {
    constructor({ signature: t }) {
      super("Unknown signature.", { details: t }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "UnknownSignatureError",
        });
    }
  },
  Ae = class extends x {
    constructor({ signature: t }) {
      super("Invalid struct signature.", {
        details: t,
        metaMessages: ["No properties exist."],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidStructSignatureError",
        });
    }
  };
u();
var $e = class extends x {
  constructor({ type: t }) {
    super("Circular reference detected.", {
      metaMessages: [`Struct "${t}" is a circular reference.`],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "CircularReferenceError",
      });
  }
};
u();
u();
var Me = class extends x {
  constructor({ current: t, depth: r }) {
    super("Unbalanced parentheses.", {
      metaMessages: [
        `"${t.trim()}" has too many ${
          r > 0 ? "opening" : "closing"
        } parentheses.`,
      ],
      details: `Depth "${r}"`,
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidParenthesisError",
      });
  }
};
u();
function tn(e, t) {
  return t ? `${t}:${e}` : e;
}
var Ze = new Map([
  ["address", { type: "address" }],
  ["bool", { type: "bool" }],
  ["bytes", { type: "bytes" }],
  ["bytes32", { type: "bytes32" }],
  ["int", { type: "int256" }],
  ["int256", { type: "int256" }],
  ["string", { type: "string" }],
  ["uint", { type: "uint256" }],
  ["uint8", { type: "uint8" }],
  ["uint16", { type: "uint16" }],
  ["uint24", { type: "uint24" }],
  ["uint32", { type: "uint32" }],
  ["uint64", { type: "uint64" }],
  ["uint96", { type: "uint96" }],
  ["uint112", { type: "uint112" }],
  ["uint160", { type: "uint160" }],
  ["uint192", { type: "uint192" }],
  ["uint256", { type: "uint256" }],
  ["address owner", { type: "address", name: "owner" }],
  ["address to", { type: "address", name: "to" }],
  ["bool approved", { type: "bool", name: "approved" }],
  ["bytes _data", { type: "bytes", name: "_data" }],
  ["bytes data", { type: "bytes", name: "data" }],
  ["bytes signature", { type: "bytes", name: "signature" }],
  ["bytes32 hash", { type: "bytes32", name: "hash" }],
  ["bytes32 r", { type: "bytes32", name: "r" }],
  ["bytes32 root", { type: "bytes32", name: "root" }],
  ["bytes32 s", { type: "bytes32", name: "s" }],
  ["string name", { type: "string", name: "name" }],
  ["string symbol", { type: "string", name: "symbol" }],
  ["string tokenURI", { type: "string", name: "tokenURI" }],
  ["uint tokenId", { type: "uint256", name: "tokenId" }],
  ["uint8 v", { type: "uint8", name: "v" }],
  ["uint256 balance", { type: "uint256", name: "balance" }],
  ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
  ["uint256 value", { type: "uint256", name: "value" }],
  [
    "event:address indexed from",
    { type: "address", name: "from", indexed: !0 },
  ],
  ["event:address indexed to", { type: "address", name: "to", indexed: !0 }],
  [
    "event:uint indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 },
  ],
  [
    "event:uint256 indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 },
  ],
]);
function je(e, t = {}) {
  if (Gr(e)) {
    let r = _r(e);
    if (!r) throw new z({ signature: e, type: "function" });
    let n = M(r.parameters),
      o = [],
      s = n.length;
    for (let i = 0; i < s; i++)
      o.push($(n[i], { modifiers: _e, structs: t, type: "function" }));
    let a = [];
    if (r.returns) {
      let i = M(r.returns),
        c = i.length;
      for (let p = 0; p < c; p++)
        a.push($(i[p], { modifiers: _e, structs: t, type: "function" }));
    }
    return {
      name: r.name,
      type: "function",
      stateMutability: r.stateMutability ?? "nonpayable",
      inputs: o,
      outputs: a,
    };
  }
  if (Ur(e)) {
    let r = Hr(e);
    if (!r) throw new z({ signature: e, type: "event" });
    let n = M(r.parameters),
      o = [],
      s = n.length;
    for (let a = 0; a < s; a++)
      o.push($(n[a], { modifiers: en, structs: t, type: "event" }));
    return { name: r.name, type: "event", inputs: o };
  }
  if (Dr(e)) {
    let r = Lr(e);
    if (!r) throw new z({ signature: e, type: "error" });
    let n = M(r.parameters),
      o = [],
      s = n.length;
    for (let a = 0; a < s; a++) o.push($(n[a], { structs: t, type: "error" }));
    return { name: r.name, type: "error", inputs: o };
  }
  if (Kr(e)) {
    let r = Yr(e);
    if (!r) throw new z({ signature: e, type: "constructor" });
    let n = M(r.parameters),
      o = [],
      s = n.length;
    for (let a = 0; a < s; a++)
      o.push($(n[a], { structs: t, type: "constructor" }));
    return {
      type: "constructor",
      stateMutability: r.stateMutability ?? "nonpayable",
      inputs: o,
    };
  }
  if (Qr(e)) return { type: "fallback" };
  if (Xr(e)) return { type: "receive", stateMutability: "payable" };
  throw new Pe({ signature: e });
}
var zn =
    /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
  Cn =
    /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
  Fn = /^u?int$/;
function $(e, t) {
  let r = tn(e, t?.type);
  if (Ze.has(r)) return Ze.get(r);
  let n = We.test(e),
    o = S(n ? Cn : zn, e);
  if (!o) throw new he({ param: e });
  if (o.name && Dn(o.name)) throw new ge({ param: e, name: o.name });
  let s = o.name ? { name: o.name } : {},
    a = o.modifier === "indexed" ? { indexed: !0 } : {},
    i = t?.structs ?? {},
    c,
    p = {};
  if (n) {
    c = "tuple";
    let f = M(o.type),
      b = [],
      y = f.length;
    for (let h = 0; h < y; h++) b.push($(f[h], { structs: i }));
    p = { components: b };
  } else if (o.type in i) (c = "tuple"), (p = { components: i[o.type] });
  else if (Fn.test(o.type)) c = `${o.type}256`;
  else if (((c = o.type), t?.type !== "struct" && !$t(c)))
    throw new fe({ type: c });
  if (o.modifier) {
    if (!t?.modifiers?.has?.(o.modifier))
      throw new xe({ param: e, type: t?.type, modifier: o.modifier });
    if (_e.has(o.modifier) && !Ln(c, !!o.array))
      throw new ve({ param: e, type: t?.type, modifier: o.modifier });
  }
  let m = v(v(v({ type: `${c}${o.array ?? ""}` }, s), a), p);
  return Ze.set(r, m), m;
}
function M(e, t = [], r = "", n = 0) {
  let o = e.trim().length;
  for (let s = 0; s < o; s++) {
    let a = e[s],
      i = e.slice(s + 1);
    switch (a) {
      case ",":
        return n === 0 ? M(i, [...t, r.trim()]) : M(i, t, `${r}${a}`, n);
      case "(":
        return M(i, t, `${r}${a}`, n + 1);
      case ")":
        return M(i, t, `${r}${a}`, n - 1);
      default:
        return M(i, t, `${r}${a}`, n);
    }
  }
  if (r === "") return t;
  if (n !== 0) throw new Me({ current: r, depth: n });
  return t.push(r.trim()), t;
}
function $t(e) {
  return (
    e === "address" ||
    e === "bool" ||
    e === "function" ||
    e === "string" ||
    wt.test(e) ||
    Pt.test(e)
  );
}
var Nn =
  /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function Dn(e) {
  return (
    e === "address" ||
    e === "bool" ||
    e === "function" ||
    e === "string" ||
    e === "tuple" ||
    wt.test(e) ||
    Pt.test(e) ||
    Nn.test(e)
  );
}
function Ln(e, t) {
  return t || e === "bytes" || e === "string" || e === "tuple";
}
function H(e) {
  let t = {},
    r = e.length;
  for (let a = 0; a < r; a++) {
    let i = e[a];
    if (!R(i)) continue;
    let c = Jr(i);
    if (!c) throw new z({ signature: i, type: "struct" });
    let p = c.properties.split(";"),
      m = [],
      f = p.length;
    for (let b = 0; b < f; b++) {
      let h = p[b].trim();
      if (!h) continue;
      let g = $(h, { type: "struct" });
      m.push(g);
    }
    if (!m.length) throw new Ae({ signature: i });
    t[c.name] = m;
  }
  let n = {},
    o = Object.entries(t),
    s = o.length;
  for (let a = 0; a < s; a++) {
    let [i, c] = o[a];
    n[i] = rn(c, t);
  }
  return n;
}
var qn = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function rn(e, t, r = new Set()) {
  let n = [],
    o = e.length;
  for (let s = 0; s < o; s++) {
    let a = e[s];
    if (We.test(a.type)) n.push(a);
    else {
      let c = S(qn, a.type);
      if (!c?.type) throw new we({ abiParameter: a });
      let { array: p, type: m } = c;
      if (m in t) {
        if (r.has(m)) throw new $e({ type: m });
        n.push(
          P(v({}, a), {
            type: `tuple${p ?? ""}`,
            components: rn(t[m] ?? [], t, new Set([...r, m])),
          })
        );
      } else if ($t(m)) n.push(a);
      else throw new me({ type: m });
    }
  }
  return n;
}
function Un(e) {
  let t = H(e),
    r = [],
    n = e.length;
  for (let o = 0; o < n; o++) {
    let s = e[o];
    R(s) || r.push(je(s, t));
  }
  return r;
}
u();
function Hn(e) {
  let t;
  if (typeof e == "string") t = je(e);
  else {
    let r = H(e),
      n = e.length;
    for (let o = 0; o < n; o++) {
      let s = e[o];
      if (!R(s)) {
        t = je(s, r);
        break;
      }
    }
  }
  if (!t) throw new de({ signature: e });
  return t;
}
u();
function Wn(e) {
  let t;
  if (typeof e == "string") t = $(e, { modifiers: Y });
  else {
    let r = H(e),
      n = e.length;
    for (let o = 0; o < n; o++) {
      let s = e[o];
      if (!R(s)) {
        t = $(s, { modifiers: Y, structs: r });
        break;
      }
    }
  }
  if (!t) throw new ye({ param: e });
  return t;
}
u();
function Gn(e) {
  let t = [];
  if (typeof e == "string") {
    let r = M(e),
      n = r.length;
    for (let o = 0; o < n; o++) t.push($(r[o], { modifiers: Y }));
  } else {
    let r = H(e),
      n = e.length;
    for (let o = 0; o < n; o++) {
      let s = e[o];
      if (R(s)) continue;
      let a = M(s),
        i = a.length;
      for (let c = 0; c < i; c++) t.push($(a[c], { modifiers: Y, structs: r }));
    }
  }
  if (t.length === 0) throw new be({ params: e });
  return t;
}
u();
function nn(e) {
  let t = !0,
    r = "",
    n = 0,
    o = "",
    s = !1;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    if (
      (["(", ")", ","].includes(i) && (t = !0),
      i === "(" && n++,
      i === ")" && n--,
      !!t)
    ) {
      if (n === 0) {
        if (i === " " && ["event", "function", ""].includes(o)) o = "";
        else if (((o += i), i === ")")) {
          s = !0;
          break;
        }
        continue;
      }
      if (i === " ") {
        e[a - 1] !== "," && r !== "," && r !== ",(" && ((r = ""), (t = !1));
        continue;
      }
      (o += i), (r += i);
    }
  }
  if (!s) throw new l("Unable to normalize signature.");
  return o;
}
var on = (e) => {
  let t = typeof e == "string" ? e : At(e);
  return nn(t);
};
function Je(e) {
  return zr(on(e));
}
var Q = (e) => _(Je(e), 0, 4);
u();
u();
function Vs(e, t) {
  let r = typeof t == "string" ? { to: t } : t,
    n = r.to;
  return n === "number"
    ? I(e, r)
    : n === "bigint"
    ? Mt(e, r)
    : n === "boolean"
    ? jt(e, r)
    : n === "string"
    ? Ot(e, r)
    : N(e, r);
}
function Mt(e, t = {}) {
  typeof t.size < "u" && se(e, { size: t.size });
  let r = N(e, t);
  return nr(r, t);
}
function jt(e, t = {}) {
  let r = e;
  if (
    (typeof t.size < "u" && (se(r, { size: t.size }), (r = ae(r))),
    r.length > 1 || r[0] > 1)
  )
    throw new rr(r);
  return !!r[0];
}
function I(e, t = {}) {
  typeof t.size < "u" && se(e, { size: t.size });
  let r = N(e, t);
  return or(r, t);
}
function Ot(e, t = {}) {
  let r = e;
  return (
    typeof t.size < "u" &&
      (se(r, { size: t.size }), (r = ae(r, { dir: "right" }))),
    new TextDecoder().decode(r)
  );
}
u();
function Ve(e, t) {
  if (e.length !== t.length)
    throw new Ne({ expectedLength: e.length, givenLength: t.length });
  let r = _n({ params: e, values: t }),
    n = Et(r);
  return n.length === 0 ? "0x" : n;
}
function _n({ params: e, values: t }) {
  let r = [];
  for (let n = 0; n < e.length; n++) r.push(St({ param: e[n], value: t[n] }));
  return r;
}
function St({ param: e, value: t }) {
  let r = Ke(e.type);
  if (r) {
    let [n, o] = r;
    return Jn(t, { length: n, param: P(v({}, e), { type: o }) });
  }
  if (e.type === "tuple") return Xn(t, { param: e });
  if (e.type === "address") return Zn(t);
  if (e.type === "bool") return Kn(t);
  if (e.type.startsWith("uint") || e.type.startsWith("int")) {
    let n = e.type.startsWith("int");
    return Yn(t, { signed: n });
  }
  if (e.type.startsWith("bytes")) return Vn(t, { param: e });
  if (e.type === "string") return Qn(t);
  throw new qe(e.type, { docsPath: "/docs/contract/encodeAbiParameters" });
}
function Et(e) {
  let t = 0;
  for (let s = 0; s < e.length; s++) {
    let { dynamic: a, encoded: i } = e[s];
    a ? (t += 32) : (t += j(i));
  }
  let r = [],
    n = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let { dynamic: a, encoded: i } = e[s];
    a ? (r.push(O(t + o, { size: 32 })), n.push(i), (o += j(i))) : r.push(i);
  }
  return D([...r, ...n]);
}
function Zn(e) {
  if (!A(e)) throw new B({ address: e });
  return { dynamic: !1, encoded: q(e.toLowerCase()) };
}
function Jn(e, { length: t, param: r }) {
  let n = t === null;
  if (!Array.isArray(e)) throw new He(e);
  if (!n && e.length !== t)
    throw new Ce({
      expectedLength: t,
      givenLength: e.length,
      type: `${r.type}[${t}]`,
    });
  let o = !1,
    s = [];
  for (let a = 0; a < e.length; a++) {
    let i = St({ param: r, value: e[a] });
    i.dynamic && (o = !0), s.push(i);
  }
  if (n || o) {
    let a = Et(s);
    if (n) {
      let i = O(s.length, { size: 32 });
      return { dynamic: !0, encoded: s.length > 0 ? D([i, a]) : i };
    }
    if (o) return { dynamic: !0, encoded: a };
  }
  return { dynamic: !1, encoded: D(s.map(({ encoded: a }) => a)) };
}
function Vn(e, { param: t }) {
  let [, r] = t.type.split("bytes"),
    n = j(e);
  if (!r) {
    let o = e;
    return (
      n % 32 !== 0 &&
        (o = q(o, {
          dir: "right",
          size: Math.ceil((e.length - 2) / 2 / 32) * 32,
        })),
      { dynamic: !0, encoded: D([q(O(n, { size: 32 })), o]) }
    );
  }
  if (n !== Number.parseInt(r))
    throw new Fe({ expectedSize: Number.parseInt(r), value: e });
  return { dynamic: !1, encoded: q(e, { dir: "right" }) };
}
function Kn(e) {
  if (typeof e != "boolean")
    throw new l(
      `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
    );
  return { dynamic: !1, encoded: q(ar(e)) };
}
function Yn(e, { signed: t }) {
  return { dynamic: !1, encoded: O(e, { size: 32, signed: t }) };
}
function Qn(e) {
  let t = sr(e),
    r = Math.ceil(j(t) / 32),
    n = [];
  for (let o = 0; o < r; o++)
    n.push(q(_(t, o * 32, (o + 1) * 32), { dir: "right" }));
  return { dynamic: !0, encoded: D([q(O(j(t), { size: 32 })), ...n]) };
}
function Xn(e, { param: t }) {
  let r = !1,
    n = [];
  for (let o = 0; o < t.components.length; o++) {
    let s = t.components[o],
      a = Array.isArray(e) ? o : s.name,
      i = St({ param: s, value: e[a] });
    n.push(i), i.dynamic && (r = !0);
  }
  return { dynamic: r, encoded: r ? Et(n) : D(n.map(({ encoded: o }) => o)) };
}
function Ke(e) {
  let t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
}
function Ye(e, t) {
  let r = typeof t == "string" ? ur(t) : t,
    n = mr(r);
  if (j(r) === 0 && e.length > 0) throw new J();
  if (j(t) && j(t) < 32)
    throw new ze({
      data: typeof t == "string" ? t : N(t),
      params: e,
      size: j(t),
    });
  let o = 0,
    s = [];
  for (let a = 0; a < e.length; ++a) {
    let i = e[a];
    n.setPosition(o);
    let [c, p] = X(n, i, { staticPosition: 0 });
    (o += p), s.push(c);
  }
  return s;
}
function X(e, t, { staticPosition: r }) {
  let n = Ke(t.type);
  if (n) {
    let [o, s] = n;
    return to(e, P(v({}, t), { type: s }), { length: o, staticPosition: r });
  }
  if (t.type === "tuple") return ao(e, t, { staticPosition: r });
  if (t.type === "address") return eo(e);
  if (t.type === "bool") return ro(e);
  if (t.type.startsWith("bytes")) return no(e, t, { staticPosition: r });
  if (t.type.startsWith("uint") || t.type.startsWith("int")) return oo(e, t);
  if (t.type === "string") return so(e, { staticPosition: r });
  throw new Ue(t.type, { docsPath: "/docs/contract/decodeAbiParameters" });
}
var an = 32,
  It = 32;
function eo(e) {
  let t = e.readBytes(32);
  return [pr(N(dr(t, -20))), 32];
}
function to(e, t, { length: r, staticPosition: n }) {
  if (!r) {
    let a = I(e.readBytes(It)),
      i = n + a,
      c = i + an;
    e.setPosition(i);
    let p = I(e.readBytes(an)),
      m = Oe(t),
      f = 0,
      b = [];
    for (let y = 0; y < p; ++y) {
      e.setPosition(c + (m ? y * 32 : f));
      let [h, g] = X(e, t, { staticPosition: c });
      (f += g), b.push(h);
    }
    return e.setPosition(n + 32), [b, 32];
  }
  if (Oe(t)) {
    let a = I(e.readBytes(It)),
      i = n + a,
      c = [];
    for (let p = 0; p < r; ++p) {
      e.setPosition(i + p * 32);
      let [m] = X(e, t, { staticPosition: i });
      c.push(m);
    }
    return e.setPosition(n + 32), [c, 32];
  }
  let o = 0,
    s = [];
  for (let a = 0; a < r; ++a) {
    let [i, c] = X(e, t, { staticPosition: n + o });
    (o += c), s.push(i);
  }
  return [s, o];
}
function ro(e) {
  return [jt(e.readBytes(32), { size: 32 }), 32];
}
function no(e, t, { staticPosition: r }) {
  let [n, o] = t.type.split("bytes");
  if (!o) {
    let a = I(e.readBytes(32));
    e.setPosition(r + a);
    let i = I(e.readBytes(32));
    if (i === 0) return e.setPosition(r + 32), ["0x", 32];
    let c = e.readBytes(i);
    return e.setPosition(r + 32), [N(c), 32];
  }
  return [N(e.readBytes(Number.parseInt(o), 32)), 32];
}
function oo(e, t) {
  let r = t.type.startsWith("int"),
    n = Number.parseInt(t.type.split("int")[1] || "256"),
    o = e.readBytes(32);
  return [n > 48 ? Mt(o, { signed: r }) : I(o, { signed: r }), 32];
}
function ao(e, t, { staticPosition: r }) {
  let n = t.components.length === 0 || t.components.some(({ name: a }) => !a),
    o = n ? [] : {},
    s = 0;
  if (Oe(t)) {
    let a = I(e.readBytes(It)),
      i = r + a;
    for (let c = 0; c < t.components.length; ++c) {
      let p = t.components[c];
      e.setPosition(i + s);
      let [m, f] = X(e, p, { staticPosition: i });
      (s += f), (o[n ? c : p?.name] = m);
    }
    return e.setPosition(r + 32), [o, 32];
  }
  for (let a = 0; a < t.components.length; ++a) {
    let i = t.components[a],
      [c, p] = X(e, i, { staticPosition: r });
    (o[n ? a : i?.name] = c), (s += p);
  }
  return [o, s];
}
function so(e, { staticPosition: t }) {
  let r = I(e.readBytes(32)),
    n = t + r;
  e.setPosition(n);
  let o = I(e.readBytes(32));
  if (o === 0) return e.setPosition(t + 32), ["", 32];
  let s = e.readBytes(o, 32),
    a = Ot(ae(s));
  return e.setPosition(t + 32), [a, 32];
}
function Oe(e) {
  let { type: t } = e;
  if (t === "string" || t === "bytes" || t.endsWith("[]")) return !0;
  if (t === "tuple") return e.components?.some(Oe);
  let r = Ke(e.type);
  return !!(r && Oe(P(v({}, e), { type: r[1] })));
}
function Qe(e) {
  let { abi: t, data: r } = e,
    n = _(r, 0, 4);
  if (n === "0x") throw new J();
  let s = [...(t || []), vr, wr].find(
    (a) => a.type === "error" && n === Q(E(a))
  );
  if (!s) throw new V(n, { docsPath: "/docs/contract/decodeErrorResult" });
  return {
    abiItem: s,
    args:
      "inputs" in s && s.inputs && s.inputs.length > 0
        ? Ye(s.inputs, _(r, 4))
        : void 0,
    errorName: s.name,
  };
}
u();
u();
var T = (e, t, r) =>
  JSON.stringify(
    e,
    (n, o) => {
      let s = typeof o == "bigint" ? o.toString() : o;
      return typeof t == "function" ? t(n, s) : s;
    },
    r
  );
function Tt({
  abiItem: e,
  args: t,
  includeFunctionName: r = !0,
  includeName: n = !1,
}) {
  if ("name" in e && "inputs" in e && e.inputs)
    return `${r ? e.name : ""}(${e.inputs
      .map(
        (o, s) =>
          `${n && o.name ? `${o.name}: ` : ""}${
            typeof t[s] == "object" ? T(t[s]) : t[s]
          }`
      )
      .join(", ")})`;
}
u();
u();
var sn = Je;
function ee(e) {
  let { abi: t, args: r = [], name: n } = e,
    o = Te(n, { strict: !1 }),
    s = t.filter((i) =>
      o
        ? i.type === "function"
          ? Q(i) === n
          : i.type === "event"
          ? sn(i) === n
          : !1
        : "name" in i && i.name === n
    );
  if (s.length === 0) return;
  if (s.length === 1) return s[0];
  let a;
  for (let i of s) {
    if (!("inputs" in i)) continue;
    if (!r || r.length === 0) {
      if (!i.inputs || i.inputs.length === 0) return i;
      continue;
    }
    if (!i.inputs || i.inputs.length === 0 || i.inputs.length !== r.length)
      continue;
    if (
      r.every((p, m) => {
        let f = "inputs" in i && i.inputs[m];
        return f ? kt(p, f) : !1;
      })
    ) {
      if (a && "inputs" in a && a.inputs) {
        let p = un(i.inputs, a.inputs, r);
        if (p)
          throw new Le({ abiItem: i, type: p[0] }, { abiItem: a, type: p[1] });
      }
      a = i;
    }
  }
  return a || s[0];
}
function kt(e, t) {
  let r = typeof e,
    n = t.type;
  switch (n) {
    case "address":
      return A(e, { strict: !1 });
    case "bool":
      return r === "boolean";
    case "function":
      return r === "string";
    case "string":
      return r === "string";
    default:
      return n === "tuple" && "components" in t
        ? Object.values(t.components).every((o, s) =>
            kt(Object.values(e)[s], o)
          )
        : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
            n
          )
        ? r === "number" || r === "bigint"
        : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)
        ? r === "string" || e instanceof Uint8Array
        : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)
        ? Array.isArray(e) &&
          e.every((o) =>
            kt(o, P(v({}, t), { type: n.replace(/(\[[0-9]{0,}\])$/, "") }))
          )
        : !1;
  }
}
function un(e, t, r) {
  for (let n in e) {
    let o = e[n],
      s = t[n];
    if (
      o.type === "tuple" &&
      s.type === "tuple" &&
      "components" in o &&
      "components" in s
    )
      return un(o.components, s.components, r[n]);
    let a = [o.type, s.type];
    if (
      a.includes("address") && a.includes("bytes20")
        ? !0
        : a.includes("address") && a.includes("string")
        ? A(r[n], { strict: !1 })
        : a.includes("address") && a.includes("bytes")
        ? A(r[n], { strict: !1 })
        : !1
    )
      return a;
  }
}
u();
var Xe = class extends l {
    constructor({ address: t }) {
      super(`State for account "${t}" is set multiple times.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AccountStateConflictError",
        });
    }
  },
  et = class extends l {
    constructor() {
      super("state and stateDiff are set on the same account."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "StateAssignmentConflictError",
        });
    }
  };
function cn(e) {
  return e.reduce(
    (t, { slot: r, value: n }) => `${t}        ${r}: ${n}
`,
    ""
  );
}
function pn(e) {
  return e
    .reduce(
      (t, o) => {
        var s = o,
          { address: r } = s,
          n = F(s, ["address"]);
        let a = `${t}    ${r}:
`;
        return (
          n.nonce &&
            (a += `      nonce: ${n.nonce}
`),
          n.balance &&
            (a += `      balance: ${n.balance}
`),
          n.code &&
            (a += `      code: ${n.code}
`),
          n.state &&
            ((a += `      state:
`),
            (a += cn(n.state))),
          n.stateDiff &&
            ((a += `      stateDiff:
`),
            (a += cn(n.stateDiff))),
          a
        );
      },
      `  State Override:
`
    )
    .slice(0, -1);
}
var tt = class extends l {
    constructor(
      t,
      {
        account: r,
        docsPath: n,
        chain: o,
        data: s,
        gas: a,
        gasPrice: i,
        maxFeePerGas: c,
        maxPriorityFeePerGas: p,
        nonce: m,
        to: f,
        value: b,
        stateOverride: y,
      }
    ) {
      let h = r ? Z(r) : void 0,
        g = pt({
          from: h?.address,
          to: f,
          value:
            typeof b < "u" && `${fr(b)} ${o?.nativeCurrency?.symbol || "ETH"}`,
          data: s,
          gas: a,
          gasPrice: typeof i < "u" && `${ke(i)} gwei`,
          maxFeePerGas: typeof c < "u" && `${ke(c)} gwei`,
          maxPriorityFeePerGas: typeof p < "u" && `${ke(p)} gwei`,
          nonce: m,
        });
      y &&
        (g += `
${pn(y)}`),
        super(t.shortMessage, {
          cause: t,
          docsPath: n,
          metaMessages: [
            ...(t.metaMessages ? [...t.metaMessages, " "] : []),
            "Raw Call Arguments:",
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
          value: "CallExecutionError",
        }),
        (this.cause = t);
    }
  },
  ln = class extends l {
    constructor(
      t,
      {
        abi: r,
        args: n,
        contractAddress: o,
        docsPath: s,
        functionName: a,
        sender: i,
      }
    ) {
      let c = ee({ abi: r, args: n, name: a }),
        p = c
          ? Tt({
              abiItem: c,
              args: n,
              includeFunctionName: !1,
              includeName: !1,
            })
          : void 0,
        m = c ? E(c, { includeName: !0 }) : void 0,
        f = pt({
          address: o && tr(o),
          function: m,
          args:
            p &&
            p !== "()" &&
            `${[...Array(a?.length ?? 0).keys()].map(() => " ").join("")}${p}`,
          sender: i,
        });
      super(
        t.shortMessage ||
          `An unknown error occurred while executing the contract function "${a}".`,
        {
          cause: t,
          docsPath: s,
          metaMessages: [
            ...(t.metaMessages ? [...t.metaMessages, " "] : []),
            "Contract Call:",
            f,
          ].filter(Boolean),
        }
      ),
        Object.defineProperty(this, "abi", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "args", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "contractAddress", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "formattedArgs", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "functionName", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sender", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ContractFunctionExecutionError",
        }),
        (this.abi = r),
        (this.args = n),
        (this.cause = t),
        (this.contractAddress = o),
        (this.functionName = a),
        (this.sender = i);
    }
  },
  dn = class extends l {
    constructor({ abi: t, data: r, functionName: n, message: o }) {
      let s, a, i, c;
      if (r && r !== "0x")
        try {
          a = Qe({ abi: t, data: r });
          let { abiItem: m, errorName: f, args: b } = a;
          if (f === "Error") c = b[0];
          else if (f === "Panic") {
            let [y] = b;
            c = xr[y];
          } else {
            let y = m ? E(m, { includeName: !0 }) : void 0,
              h =
                m && b
                  ? Tt({
                      abiItem: m,
                      args: b,
                      includeFunctionName: !1,
                      includeName: !1,
                    })
                  : void 0;
            i = [
              y ? `Error: ${y}` : "",
              h && h !== "()"
                ? `       ${[...Array(f?.length ?? 0).keys()]
                    .map(() => " ")
                    .join("")}${h}`
                : "",
            ];
          }
        } catch (m) {
          s = m;
        }
      else o && (c = o);
      let p;
      s instanceof V &&
        ((p = s.signature),
        (i = [
          `Unable to decode signature "${p}" as it was not found on the provided ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
          `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${p}.`,
        ])),
        super(
          (c && c !== "execution reverted") || p
            ? [
                `The contract function "${n}" reverted with the following ${
                  p ? "signature" : "reason"
                }:`,
                c || p,
              ].join(`
`)
            : `The contract function "${n}" reverted.`,
          { cause: s, metaMessages: i }
        ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ContractFunctionRevertedError",
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "reason", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "signature", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = a),
        (this.reason = c),
        (this.signature = p);
    }
  },
  mn = class extends l {
    constructor({ functionName: t }) {
      super(`The contract function "${t}" returned no data ("0x").`, {
        metaMessages: [
          "This could be due to any of the following:",
          `  - The contract does not have the function "${t}",`,
          "  - The parameters passed to the contract function may be invalid, or",
          "  - The address is not a contract.",
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ContractFunctionZeroDataError",
        });
    }
  },
  rt = class extends l {
    constructor({ data: t, message: r }) {
      super(r || ""),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 3,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RawContractError",
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = t);
    }
  };
u();
var Bt = "/docs/contract/decodeFunctionResult";
function fn(e) {
  let { abi: t, args: r, functionName: n, data: o } = e,
    s = t[0];
  if (n) {
    let i = ee({ abi: t, args: r, name: n });
    if (!i) throw new U(n, { docsPath: Bt });
    s = i;
  }
  if (s.type !== "function") throw new U(void 0, { docsPath: Bt });
  if (!s.outputs) throw new De(s.name, { docsPath: Bt });
  let a = Ye(s.outputs, o);
  if (a && a.length > 1) return a;
  if (a && a.length === 1) return a[0];
}
u();
u();
var yn = "/docs/contract/encodeFunctionData";
function bn(e) {
  let { abi: t, args: r, functionName: n } = e,
    o = t[0];
  if (n) {
    let s = ee({ abi: t, args: r, name: n });
    if (!s) throw new U(n, { docsPath: yn });
    o = s;
  }
  if (o.type !== "function") throw new U(void 0, { docsPath: yn });
  return { abi: [o], functionName: Q(E(o)) };
}
function hn(e) {
  let { args: t } = e,
    { abi: r, functionName: n } =
      e.abi.length === 1 && e.functionName?.startsWith("0x") ? e : bn(e),
    o = r[0],
    s = n,
    a = "inputs" in o && o.inputs ? Ve(o.inputs, t ?? []) : void 0;
  return lr([s, a ?? "0x"]);
}
u();
function gn({ blockNumber: e, chain: t, contract: r }) {
  let n = t?.contracts?.[r];
  if (!n) throw new pe({ chain: t, contract: { name: r } });
  if (e && n.blockCreated && n.blockCreated > e)
    throw new pe({
      blockNumber: e,
      chain: t,
      contract: { name: r, blockCreated: n.blockCreated },
    });
  return n.address;
}
u();
u();
u();
var Se = class extends l {
    constructor({ body: t, details: r, headers: n, status: o, url: s }) {
      super("HTTP request failed.", {
        details: r,
        metaMessages: [
          o && `Status: ${o}`,
          `URL: ${L(s)}`,
          t && `Request body: ${T(t)}`,
        ].filter(Boolean),
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "HttpRequestError",
        }),
        Object.defineProperty(this, "body", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "headers", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "status", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "url", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.body = t),
        (this.headers = n),
        (this.status = o),
        (this.url = s);
    }
  },
  xn = class extends l {
    constructor({ body: t, details: r, url: n }) {
      super("WebSocket request failed.", {
        details: r,
        metaMessages: [`URL: ${L(n)}`, `Request body: ${T(t)}`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "WebSocketRequestError",
        });
    }
  },
  nt = class extends l {
    constructor({ body: t, error: r, url: n }) {
      super("RPC Request failed.", {
        cause: r,
        details: r.message,
        metaMessages: [`URL: ${L(n)}`, `Request body: ${T(t)}`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RpcRequestError",
        }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.code = r.code);
    }
  },
  vn = class extends l {
    constructor({ body: t, url: r }) {
      super("The request took too long to respond.", {
        details: "The request timed out.",
        metaMessages: [`URL: ${L(r)}`, `Request body: ${T(t)}`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "TimeoutError",
        });
    }
  };
u();
var io = -1,
  w = class extends l {
    constructor(t, { code: r, docsPath: n, metaMessages: o, shortMessage: s }) {
      super(s, { cause: t, docsPath: n, metaMessages: o || t?.metaMessages }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RpcError",
        }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.name = t.name),
        (this.code = t instanceof nt ? t.code : r ?? io);
    }
  },
  W = class extends w {
    constructor(t, r) {
      super(t, r),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ProviderRpcError",
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = r.data);
    }
  },
  Rt = class e extends w {
    constructor(t) {
      super(t, {
        code: e.code,
        shortMessage:
          "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ParseRpcError",
        });
    }
  };
Object.defineProperty(Rt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700,
});
var zt = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "JSON is not a valid request object.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidRequestRpcError",
      });
  }
};
Object.defineProperty(zt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600,
});
var Ct = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "The method does not exist / is not available.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "MethodNotFoundRpcError",
      });
  }
};
Object.defineProperty(Ct, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601,
});
var Ft = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidParamsRpcError",
      });
  }
};
Object.defineProperty(Ft, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602,
});
var Nt = class e extends w {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "An internal error was received." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InternalRpcError",
      });
  }
};
Object.defineProperty(Nt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603,
});
var Dt = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidInputRpcError",
      });
  }
};
Object.defineProperty(Dt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3,
});
var Lt = class e extends w {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "Requested resource not found." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ResourceNotFoundRpcError",
      });
  }
};
Object.defineProperty(Lt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001,
});
var qt = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "Requested resource not available.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ResourceUnavailableRpcError",
      });
  }
};
Object.defineProperty(qt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002,
});
var Ut = class e extends w {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "Transaction creation failed." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TransactionRejectedRpcError",
      });
  }
};
Object.defineProperty(Ut, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003,
});
var Ht = class e extends w {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "Method is not implemented." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "MethodNotSupportedRpcError",
      });
  }
};
Object.defineProperty(Ht, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004,
});
var Wt = class e extends w {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "Request exceeds defined limit." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "LimitExceededRpcError",
      });
  }
};
Object.defineProperty(Wt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005,
});
var Gt = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "Version of JSON-RPC protocol is not supported.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "JsonRpcVersionUnsupportedError",
      });
  }
};
Object.defineProperty(Gt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006,
});
var _t = class e extends W {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "User rejected the request." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UserRejectedRequestError",
      });
  }
};
Object.defineProperty(_t, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001,
});
var Zt = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage:
        "The requested method and/or account has not been authorized by the user.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnauthorizedProviderError",
      });
  }
};
Object.defineProperty(Zt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100,
});
var Jt = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "The Provider does not support the requested method.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnsupportedProviderMethodError",
      });
  }
};
Object.defineProperty(Jt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200,
});
var Vt = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "The Provider is disconnected from all chains.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ProviderDisconnectedError",
      });
  }
};
Object.defineProperty(Vt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900,
});
var Kt = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "The Provider is not connected to the requested chain.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChainDisconnectedError",
      });
  }
};
Object.defineProperty(Kt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901,
});
var Yt = class e extends W {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "An error occurred when attempting to switch chain.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SwitchChainError",
      });
  }
};
Object.defineProperty(Yt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902,
});
var wn = class extends w {
  constructor(t) {
    super(t, { shortMessage: "An unknown RPC error occurred." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownRpcError",
      });
  }
};
function Pn(e, t) {
  let r = (e.details || "").toLowerCase(),
    n = e instanceof l ? e.walk((o) => o.code === ie.code) : e;
  return n instanceof l
    ? new ie({ cause: e, message: n.details })
    : ie.nodeMessage.test(r)
    ? new ie({ cause: e, message: e.details })
    : ue.nodeMessage.test(r)
    ? new ue({ cause: e, maxFeePerGas: t?.maxFeePerGas })
    : lt.nodeMessage.test(r)
    ? new lt({ cause: e, maxFeePerGas: t?.maxFeePerGas })
    : dt.nodeMessage.test(r)
    ? new dt({ cause: e, nonce: t?.nonce })
    : mt.nodeMessage.test(r)
    ? new mt({ cause: e, nonce: t?.nonce })
    : ft.nodeMessage.test(r)
    ? new ft({ cause: e, nonce: t?.nonce })
    : yt.nodeMessage.test(r)
    ? new yt({ cause: e })
    : bt.nodeMessage.test(r)
    ? new bt({ cause: e, gas: t?.gas })
    : ht.nodeMessage.test(r)
    ? new ht({ cause: e, gas: t?.gas })
    : gt.nodeMessage.test(r)
    ? new gt({ cause: e })
    : ce.nodeMessage.test(r)
    ? new ce({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas,
        maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
      })
    : new Be({ cause: e });
}
function An(e, n) {
  var o = n,
    { docsPath: t } = o,
    r = F(o, ["docsPath"]);
  let s = (() => {
    let a = Pn(e, r);
    return a instanceof Be ? e : a;
  })();
  return new tt(s, v({ docsPath: t }, r));
}
u();
function $n(e, { format: t }) {
  if (!t) return {};
  let r = {};
  function n(s) {
    let a = Object.keys(s);
    for (let i of a)
      i in e && (r[i] = e[i]),
        s[i] && typeof s[i] == "object" && !Array.isArray(s[i]) && n(s[i]);
  }
  let o = t(e || {});
  return n(o), r;
}
u();
var Qt = new Map();
function Mn({ fn: e, id: t, shouldSplitBatch: r, wait: n = 0, sort: o }) {
  let s = () =>
      k(this, null, function* () {
        let f = c();
        a();
        let b = f.map(({ args: y }) => y);
        b.length !== 0 &&
          e(b)
            .then((y) => {
              o && Array.isArray(y) && y.sort(o);
              for (let h = 0; h < f.length; h++) {
                let { pendingPromise: g } = f[h];
                g.resolve?.([y[h], y]);
              }
            })
            .catch((y) => {
              for (let h = 0; h < f.length; h++) {
                let { pendingPromise: g } = f[h];
                g.reject?.(y);
              }
            });
      }),
    a = () => Qt.delete(t),
    i = () => c().map(({ args: f }) => f),
    c = () => Qt.get(t) || [],
    p = (f) => Qt.set(t, [...c(), f]);
  return {
    flush: a,
    schedule(f) {
      return k(this, null, function* () {
        let b = {},
          y = new Promise((C, G) => {
            (b.resolve = C), (b.reject = G);
          });
        return (
          r?.([...i(), f]) && s(),
          c().length > 0
            ? (p({ args: f, pendingPromise: b }), y)
            : (p({ args: f, pendingPromise: b }), setTimeout(s, n), y)
        );
      });
    },
  };
}
u();
function jn(e) {
  if (!(!e || e.length === 0))
    return e.reduce((t, { slot: r, value: n }) => {
      if (r.length !== 66)
        throw new ct({ size: r.length, targetSize: 66, type: "hex" });
      if (n.length !== 66)
        throw new ct({ size: n.length, targetSize: 66, type: "hex" });
      return (t[r] = n), t;
    }, {});
}
function uo(e) {
  let { balance: t, nonce: r, state: n, stateDiff: o, code: s } = e,
    a = {};
  if (
    (s !== void 0 && (a.code = s),
    t !== void 0 && (a.balance = O(t)),
    r !== void 0 && (a.nonce = O(r)),
    n !== void 0 && (a.state = jn(n)),
    o !== void 0)
  ) {
    if (a.state) throw new et();
    a.stateDiff = jn(o);
  }
  return a;
}
function On(e) {
  if (!e) return;
  let t = {};
  for (let r of e) {
    let n = r,
      { address: o } = n,
      s = F(n, ["address"]);
    if (!A(o, { strict: !1 })) throw new B({ address: o });
    if (t[o]) throw new Xe({ address: o });
    t[o] = uo(s);
  }
  return t;
}
u();
function Sn(e) {
  let {
      account: t,
      gasPrice: r,
      maxFeePerGas: n,
      maxPriorityFeePerGas: o,
      to: s,
    } = e,
    a = t ? Z(t) : void 0;
  if (a && !A(a.address)) throw new B({ address: a.address });
  if (s && !A(s)) throw new B({ address: s });
  if (typeof r < "u" && (typeof n < "u" || typeof o < "u")) throw new yr();
  if (n && n > 2n ** 256n - 1n) throw new ue({ maxFeePerGas: n });
  if (o && n && o > n)
    throw new ce({ maxFeePerGas: n, maxPriorityFeePerGas: o });
}
function En(e, t) {
  return k(this, null, function* () {
    let Xt = t,
      {
        account: r = e.account,
        batch: n = !!e.batch?.multicall,
        blockNumber: o,
        blockTag: s = "latest",
        accessList: a,
        blobs: i,
        data: c,
        gas: p,
        gasPrice: m,
        maxFeePerBlobGas: f,
        maxFeePerGas: b,
        maxPriorityFeePerGas: y,
        nonce: h,
        to: g,
        value: C,
        stateOverride: G,
      } = Xt,
      te = F(Xt, [
        "account",
        "batch",
        "blockNumber",
        "blockTag",
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
        "stateOverride",
      ]),
      re = r ? Z(r) : void 0;
    try {
      Sn(t);
      let ne = (o ? O(o) : void 0) || s,
        oe = On(G),
        Ee = e.chain?.formatters?.transactionRequest?.format,
        Ie = (Ee || br)(
          P(v({}, $n(te, { format: Ee })), {
            from: re?.address,
            accessList: a,
            blobs: i,
            data: c,
            gas: p,
            gasPrice: m,
            maxFeePerBlobGas: f,
            maxFeePerGas: b,
            maxPriorityFeePerGas: y,
            nonce: h,
            to: g,
            value: C,
          })
        );
      if (n && co({ request: Ie }) && !oe)
        try {
          return yield po(e, P(v({}, Ie), { blockNumber: o, blockTag: s }));
        } catch (ut) {
          if (!(ut instanceof xt) && !(ut instanceof pe)) throw ut;
        }
      let er = yield e.request({
        method: "eth_call",
        params: oe ? [Ie, ne, oe] : [Ie, ne],
      });
      return er === "0x" ? { data: void 0 } : { data: er };
    } catch (it) {
      let ne = lo(it),
        { offchainLookup: oe, offchainLookupSignature: Ee } = yield import(
          "./chunk-OLVEJ4PA.js"
        );
      if (e.ccipRead !== !1 && ne?.slice(0, 10) === Ee && g)
        return { data: yield oe(e, { data: ne, to: g }) };
      throw An(it, P(v({}, t), { account: re, chain: e.chain }));
    }
  });
}
function co({ request: e }) {
  let o = e,
    { data: t, to: r } = o,
    n = F(o, ["data", "to"]);
  return !(
    !t ||
    t.startsWith(gr) ||
    !r ||
    Object.values(n).filter((s) => typeof s < "u").length > 0
  );
}
function po(e, t) {
  return k(this, null, function* () {
    let { batchSize: r = 1024, wait: n = 0 } =
        typeof e.batch?.multicall == "object" ? e.batch.multicall : {},
      {
        blockNumber: o,
        blockTag: s = "latest",
        data: a,
        multicallAddress: i,
        to: c,
      } = t,
      p = i;
    if (!p) {
      if (!e.chain) throw new xt();
      p = gn({ blockNumber: o, chain: e.chain, contract: "multicall3" });
    }
    let f = (o ? O(o) : void 0) || s,
      { schedule: b } = Mn({
        id: `${e.uid}.${f}`,
        wait: n,
        shouldSplitBatch(g) {
          return g.reduce((G, { data: te }) => G + (te.length - 2), 0) > r * 2;
        },
        fn: (g) =>
          k(this, null, function* () {
            let C = g.map((re) => ({
                allowFailure: !0,
                callData: re.data,
                target: re.to,
              })),
              G = hn({ abi: vt, args: [C], functionName: "aggregate3" }),
              te = yield e.request({
                method: "eth_call",
                params: [{ data: G, to: p }, f],
              });
            return fn({
              abi: vt,
              args: [C],
              functionName: "aggregate3",
              data: te || "0x",
            });
          }),
      }),
      [{ returnData: y, success: h }] = yield b({ data: a, to: c });
    if (!h) throw new rt({ data: y });
    return y === "0x" ? { data: void 0 } : { data: y };
  });
}
function lo(e) {
  if (!(e instanceof l)) return;
  let t = e.walk();
  return typeof t?.data == "object" ? t.data?.data : t.data;
}
u();
var ot = class extends l {
    constructor({
      callbackSelector: t,
      cause: r,
      data: n,
      extraData: o,
      sender: s,
      urls: a,
    }) {
      super(
        r.shortMessage ||
          "An error occurred while fetching for an offchain result.",
        {
          cause: r,
          metaMessages: [
            ...(r.metaMessages || []),
            r.metaMessages?.length ? "" : [],
            "Offchain Gateway Call:",
            a && ["  Gateway URL(s):", ...a.map((i) => `    ${L(i)}`)],
            `  Sender: ${s}`,
            `  Data: ${n}`,
            `  Callback selector: ${t}`,
            `  Extra data: ${o}`,
          ].flat(),
        }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "OffchainLookupError",
        });
    }
  },
  at = class extends l {
    constructor({ result: t, url: r }) {
      super(
        "Offchain gateway response is malformed. Response data must be a hex value.",
        { metaMessages: [`Gateway URL: ${L(r)}`, `Response: ${T(t)}`] }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "OffchainLookupResponseMalformedError",
        });
    }
  },
  st = class extends l {
    constructor({ sender: t, to: r }) {
      super(
        "Reverted sender address does not match target contract address (`to`).",
        {
          metaMessages: [
            `Contract address: ${r}`,
            `OffchainLookup sender address: ${t}`,
          ],
        }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "OffchainLookupSenderMismatchError",
        });
    }
  };
u();
function In(e, t) {
  if (!A(e, { strict: !1 })) throw new B({ address: e });
  if (!A(t, { strict: !1 })) throw new B({ address: t });
  return e.toLowerCase() === t.toLowerCase();
}
var Xc = "0x556f1830",
  mo = {
    name: "OffchainLookup",
    type: "error",
    inputs: [
      { name: "sender", type: "address" },
      { name: "urls", type: "string[]" },
      { name: "callData", type: "bytes" },
      { name: "callbackFunction", type: "bytes4" },
      { name: "extraData", type: "bytes" },
    ],
  };
function ep(s, a) {
  return k(
    this,
    arguments,
    function* (e, { blockNumber: t, blockTag: r, data: n, to: o }) {
      let { args: i } = Qe({ data: n, abi: [mo] }),
        [c, p, m, f, b] = i,
        { ccipRead: y } = e,
        h = y && typeof y?.request == "function" ? y.request : fo;
      try {
        if (!In(o, c)) throw new st({ sender: c, to: o });
        let g = yield h({ data: m, sender: c, urls: p }),
          { data: C } = yield En(e, {
            blockNumber: t,
            blockTag: r,
            data: D([f, Ve([{ type: "bytes" }, { type: "bytes" }], [g, b])]),
            to: o,
          });
        return C;
      } catch (g) {
        throw new ot({
          callbackSelector: f,
          cause: g,
          data: n,
          extraData: b,
          sender: c,
          urls: p,
        });
      }
    }
  );
}
function fo(n) {
  return k(this, arguments, function* ({ data: e, sender: t, urls: r }) {
    let o = new Error("An unknown error occurred.");
    for (let s = 0; s < r.length; s++) {
      let a = r[s],
        i = a.includes("{data}") ? "GET" : "POST",
        c = i === "POST" ? { data: e, sender: t } : void 0;
      try {
        let p = yield fetch(a.replace("{sender}", t).replace("{data}", e), {
            body: JSON.stringify(c),
            method: i,
          }),
          m;
        if (
          (p.headers.get("Content-Type")?.startsWith("application/json")
            ? (m = (yield p.json()).data)
            : (m = yield p.text()),
          !p.ok)
        ) {
          o = new Se({
            body: c,
            details: m?.error ? T(m.error) : p.statusText,
            headers: p.headers,
            status: p.status,
            url: a,
          });
          continue;
        }
        if (!Te(m)) {
          o = new at({ result: m, url: a });
          continue;
        }
        return m;
      } catch (p) {
        o = new Se({ body: c, details: p.message, url: a });
      }
    }
    throw o;
  });
}
export {
  de as a,
  me as b,
  ye as c,
  be as d,
  he as e,
  ge as f,
  xe as g,
  ve as h,
  we as i,
  z as j,
  Pe as k,
  Ae as l,
  $e as m,
  Me as n,
  Un as o,
  Hn as p,
  Wn as q,
  Gn as r,
  E as s,
  Pr as t,
  Ar as u,
  $r as v,
  ze as w,
  J as x,
  Ce as y,
  Fe as z,
  Ne as A,
  Mr as B,
  jr as C,
  V as D,
  Or as E,
  Sr as F,
  Er as G,
  U as H,
  De as I,
  Ir as J,
  Tr as K,
  kr as L,
  Br as M,
  qe as N,
  Ue as O,
  He as P,
  Re as Q,
  Rr as R,
  on as S,
  Je as T,
  sn as U,
  Ve as V,
  Q as W,
  ee as X,
  Z as Y,
  bn as Z,
  hn as _,
  xr as $,
  Vs as aa,
  Mt as ba,
  jt as ca,
  I as da,
  Ot as ea,
  Ye as fa,
  Qe as ga,
  T as ha,
  Xe as ia,
  et as ja,
  tt as ka,
  ln as la,
  dn as ma,
  mn as na,
  rt as oa,
  Se as pa,
  xn as qa,
  nt as ra,
  vn as sa,
  w as ta,
  W as ua,
  Rt as va,
  zt as wa,
  Ct as xa,
  Ft as ya,
  Nt as za,
  Dt as Aa,
  Lt as Ba,
  qt as Ca,
  Ut as Da,
  Ht as Ea,
  Wt as Fa,
  Gt as Ga,
  _t as Ha,
  Zt as Ia,
  Jt as Ja,
  Vt as Ka,
  Kt as La,
  Yt as Ma,
  wn as Na,
  Pn as Oa,
  $n as Pa,
  On as Qa,
  Sn as Ra,
  fn as Sa,
  vt as Ta,
  go as Ua,
  xo as Va,
  vo as Wa,
  wo as Xa,
  Po as Ya,
  Ao as Za,
  $o as _a,
  Mo as $a,
  jo as ab,
  gn as bb,
  Mn as cb,
  In as db,
  Xc as eb,
  mo as fb,
  ep as gb,
  fo as hb,
  En as ib,
};
