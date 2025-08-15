import {
  $ as je,
  A as ne,
  B as _e,
  C as R,
  Ca as le,
  Da as se,
  E as F,
  F as K,
  G as g,
  H as M,
  I as _,
  J as w,
  Ka as ce,
  L as h,
  M as I,
  Ma as Me,
  N as L,
  Na as Ie,
  O as ie,
  P as S,
  Q as oe,
  R as m,
  S as Z,
  V as B,
  X as we,
  Y as Ce,
  Z as ze,
  _ as re,
  a as Ue,
  b as he,
  ba as Le,
  c as X,
  d as Je,
  da as H,
  e as Xe,
  ea as D,
  f as Qe,
  fa as C,
  ga as j,
  ha as Te,
  ia as xe,
  j as $,
  m as Q,
  n as ee,
  oa as Pe,
  p as q,
  pa as Se,
  q as te,
  r as ke,
  ra as A,
  sa as G,
  ta as V,
  u as P,
  ua as O,
  v as Y,
  va as N,
  xa as Ee,
  y as J,
  ya as Re,
  z as E,
  za as ae,
} from "./chunk-DXA257HR.js";
import { a as Ye, i as ge } from "./chunk-URXTW6Z4.js";
import "./chunk-2CMVC2QG.js";
import "./chunk-YHHDRASY.js";
import { Gb as ye, Mb as be } from "./chunk-23ZZ27XK.js";
import "./chunk-7NO3R5IA.js";
import "./chunk-MXKSX4NU.js";
import "./chunk-7HG7UTUA.js";
import "./chunk-3VTBTNQ3.js";
import "./chunk-7VBKHTQI.js";
import "./chunk-YYSBJNVH.js";
import "./chunk-PV7NZOQN.js";
import "./chunk-4467BSCR.js";
import { i as W, l as U, q as me } from "./chunk-KXQY476L.js";
me();
var Et = W(Ue(), 1);
var Rt = W(Ye(), 1),
  Mt = W(Je(), 1);
var It = W(Xe(), 1),
  Ot = W(Qe(), 1);
function et(i, { from: e, to: t }, n = {}) {
  let o = getComputedStyle(i),
    r = o.transform === "none" ? "" : o.transform,
    [f, l] = o.transformOrigin.split(" ").map(parseFloat),
    s = e.left + (e.width * f) / t.width - (t.left + f),
    a = e.top + (e.height * l) / t.height - (t.top + l),
    {
      delay: c = 0,
      duration: d = (u) => Math.sqrt(u) * 120,
      easing: v = ce,
    } = n;
  return {
    delay: c,
    duration: _e(d) ? d(Math.sqrt(s * s + a * a)) : d,
    easing: v,
    css: (u, b) => {
      let p = b * s,
        y = b * a,
        z = u + (b * e.width) / t.width,
        T = u + (b * e.height) / t.height;
      return `transform: ${r} translate(${p}px, ${y}px) scale(${z}, ${T});`;
    },
  };
}
function tt(i) {
  M(
    i,
    "svelte-13cuwwo",
    "div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}"
  );
}
function nt(i) {
  let e, t;
  return {
    c() {
      (e = h("div")),
        m(e, "class", "border svelte-13cuwwo"),
        m(
          e,
          "style",
          (t = `
    width: ${i[2] - i[3] * 2}px; 
    height: ${i[2] - i[3] * 2}px; 
    border-color: var(${i[1]}); 
    padding: ${i[3]}px; 
    background-color: ${i[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)
        );
    },
    m(n, o) {
      _(n, e, o), (e.innerHTML = i[0]);
    },
    p(n, [o]) {
      o & 1 && (e.innerHTML = n[0]),
        o & 30 &&
          t !==
            (t = `
    width: ${n[2] - n[3] * 2}px; 
    height: ${n[2] - n[3] * 2}px; 
    border-color: var(${n[1]}); 
    padding: ${n[3]}px; 
    background-color: ${n[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `) &&
          m(e, "style", t);
    },
    i: E,
    o: E,
    d(n) {
      n && w(e);
    },
  };
}
function it(i, e, t) {
  let { icon: n } = e,
    { borderColorVar: o } = e,
    { size: r } = e,
    { padding: f = 0 } = e,
    { background: l = "transparent" } = e;
  return (
    (i.$$set = (s) => {
      "icon" in s && t(0, (n = s.icon)),
        "borderColorVar" in s && t(1, (o = s.borderColorVar)),
        "size" in s && t(2, (r = s.size)),
        "padding" in s && t(3, (f = s.padding)),
        "background" in s && t(4, (l = s.background));
    }),
    [n, o, r, f, l]
  );
}
var fe = class extends N {
  constructor(e) {
    super(),
      O(
        this,
        e,
        it,
        nt,
        R,
        { icon: 0, borderColorVar: 1, size: 2, padding: 3, background: 4 },
        tt
      );
  }
};
function ot(i) {
  M(
    i,
    "svelte-jvic9v",
    "div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}"
  );
}
function Oe(i) {
  let e,
    t,
    n,
    o,
    r = P[i[1].type].eventIcon + "",
    f,
    l,
    s,
    a =
      !i[1].id.includes("customNotification") && !i[1].id.includes("preflight"),
    c,
    d = i[1].type === "pending" && Ne(),
    v = a && Fe(i);
  return {
    c() {
      (e = h("div")),
        d && d.c(),
        (t = L()),
        (n = h("div")),
        (o = h("div")),
        (s = L()),
        v && v.c(),
        m(
          o,
          "class",
          (f =
            K(
              `notification-icon flex items-center justify-center ${
                i[1].type === "pending" ? "pending-icon" : ""
              }`
            ) + " svelte-jvic9v")
        ),
        m(
          n,
          "class",
          "flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"
        ),
        m(
          n,
          "style",
          (l = `background:${P[i[1].type].backgroundColor}; color: ${
            P[i[1].type].iconColor || ""
          }; ${
            i[1].type === "pending"
              ? "height: 28px; width: 28px; margin: 2px;"
              : `border: 2px solid ${P[i[1].type].borderColor}`
          }; `)
        ),
        m(e, "class", "relative");
    },
    m(u, b) {
      _(u, e, b),
        d && d.m(e, null),
        g(e, t),
        g(e, n),
        g(n, o),
        (o.innerHTML = r),
        g(e, s),
        v && v.m(e, null),
        (c = !0);
    },
    p(u, b) {
      u[1].type === "pending"
        ? d || ((d = Ne()), d.c(), d.m(e, t))
        : d && (d.d(1), (d = null)),
        (!c || b & 2) &&
          r !== (r = P[u[1].type].eventIcon + "") &&
          (o.innerHTML = r),
        (!c ||
          (b & 2 &&
            f !==
              (f =
                K(
                  `notification-icon flex items-center justify-center ${
                    u[1].type === "pending" ? "pending-icon" : ""
                  }`
                ) + " svelte-jvic9v"))) &&
          m(o, "class", f),
        (!c ||
          (b & 2 &&
            l !==
              (l = `background:${P[u[1].type].backgroundColor}; color: ${
                P[u[1].type].iconColor || ""
              }; ${
                u[1].type === "pending"
                  ? "height: 28px; width: 28px; margin: 2px;"
                  : `border: 2px solid ${P[u[1].type].borderColor}`
              }; `))) &&
          m(n, "style", l),
        b & 2 &&
          (a =
            !u[1].id.includes("customNotification") &&
            !u[1].id.includes("preflight")),
        a
          ? v
            ? (v.p(u, b), b & 2 && C(v, 1))
            : ((v = Fe(u)), v.c(), C(v, 1), v.m(e, null))
          : v &&
            (H(),
            j(v, 1, 1, () => {
              v = null;
            }),
            D());
    },
    i(u) {
      c || (C(v), (c = !0));
    },
    o(u) {
      j(v), (c = !1);
    },
    d(u) {
      u && w(e), d && d.d(), v && v.d();
    },
  };
}
function Ne(i) {
  let e;
  return {
    c() {
      (e = h("div")), m(e, "class", "border-action absolute svelte-jvic9v");
    },
    m(t, n) {
      _(t, e, n);
    },
    d(t) {
      t && w(e);
    },
  };
}
function Fe(i) {
  let e, t, n;
  return (
    (t = new fe({
      props: {
        icon: i[0].icon,
        size: 16,
        background: i[0].color,
        borderColorVar:
          "--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",
        padding: 3,
      },
    })),
    {
      c() {
        (e = h("div")),
          A(t.$$.fragment),
          m(e, "class", "absolute chain-icon-container svelte-jvic9v");
      },
      m(o, r) {
        _(o, e, r), G(t, e, null), (n = !0);
      },
      p(o, r) {
        let f = {};
        r & 1 && (f.icon = o[0].icon),
          r & 1 && (f.background = o[0].color),
          t.$set(f);
      },
      i(o) {
        n || (C(t.$$.fragment, o), (n = !0));
      },
      o(o) {
        j(t.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && w(e), V(t);
      },
    }
  );
}
function rt(i) {
  let e,
    t,
    n = i[1].type && Oe(i);
  return {
    c() {
      n && n.c(), (e = ie());
    },
    m(o, r) {
      n && n.m(o, r), _(o, e, r), (t = !0);
    },
    p(o, [r]) {
      o[1].type
        ? n
          ? (n.p(o, r), r & 2 && C(n, 1))
          : ((n = Oe(o)), n.c(), C(n, 1), n.m(e.parentNode, e))
        : n &&
          (H(),
          j(n, 1, 1, () => {
            n = null;
          }),
          D());
    },
    i(o) {
      t || (C(n), (t = !0));
    },
    o(o) {
      j(n), (t = !1);
    },
    d(o) {
      n && n.d(o), o && w(e);
    },
  };
}
function at(i, e, t) {
  let { chainStyles: n = ke } = e,
    { notification: o } = e;
  return (
    (i.$$set = (r) => {
      "chainStyles" in r && t(0, (n = r.chainStyles)),
        "notification" in r && t(1, (o = r.notification));
    }),
    [n, o]
  );
}
var de = class extends N {
  constructor(e) {
    super(), O(this, e, at, rt, R, { chainStyles: 0, notification: 1 }, ot);
  }
};
function lt(i) {
  M(
    i,
    "svelte-pm7idu",
    `div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(
      --notify-onboard-timer-color,
      var(--onboard-gray-300, var(--gray-300))
    );margin-left:4px}`
  );
}
function He(i) {
  let e,
    t,
    n = i[2](i[1] - i[0]) + "",
    o,
    r;
  return {
    c() {
      (e = I(`-
    `)),
        (t = h("span")),
        (o = I(n)),
        (r = I(`
    ago`)),
        m(t, "class", "svelte-pm7idu");
    },
    m(f, l) {
      _(f, e, l), _(f, t, l), g(t, o), _(f, r, l);
    },
    p(f, l) {
      l & 3 && n !== (n = f[2](f[1] - f[0]) + "") && Z(o, n);
    },
    d(f) {
      f && w(e), f && w(t), f && w(r);
    },
  };
}
function st(i) {
  let e,
    t = i[0] && He(i);
  return {
    c() {
      (e = h("div")), t && t.c(), m(e, "class", "time svelte-pm7idu");
    },
    m(n, o) {
      _(n, e, o), t && t.m(e, null);
    },
    p(n, [o]) {
      n[0]
        ? t
          ? t.p(n, o)
          : ((t = He(n)), t.c(), t.m(e, null))
        : t && (t.d(1), (t = null));
    },
    i: E,
    o: E,
    d(n) {
      n && w(e), t && t.d();
    },
  };
}
function ct(i, e, t) {
  let n, o;
  F(i, X, (a) => t(3, (n = a))), F(i, he, (a) => t(4, (o = a)));
  let { startTime: r } = e;
  function f(a) {
    let c = Math.floor(a / 1e3),
      d = c < 0 ? 0 : c;
    return d >= 60
      ? `${Math.floor(d / 60).toLocaleString(o)} ${n("notify.time.minutes")}`
      : `${d.toLocaleString(o)} ${n("notify.time.seconds")}`;
  }
  let l = Date.now(),
    s = setInterval(() => {
      t(1, (l = Date.now()));
    }, 1e3);
  return (
    re(() => {
      clearInterval(s);
    }),
    (i.$$set = (a) => {
      "startTime" in a && t(0, (r = a.startTime));
    }),
    [r, l, f]
  );
}
var ue = class extends N {
  constructor(e) {
    super(), O(this, e, ct, st, R, { startTime: 0 }, lt);
  }
};
function ft(i) {
  M(
    i,
    "svelte-1otz6tt",
    `div.notify-transaction-data.svelte-1otz6tt{font-size:var(
      --notify-onboard-transaction-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(
      --notify-onboard-hash-time-font-size,
      var(--onboard-font-size-7, var(--font-size-7))
    );line-height:var(
      --notify-onboard-hash-time-font-line-height,
      var(--onboard-font-line-height-4, var(--font-line-height-4))
    )}.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-address-hash-color,
      var(--onboard-primary-200, var(--primary-200))
    )}a.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-anchor-color,
      var(--onboard-primary-400, var(--primary-400))
    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(
      --notify-onboard-font-size-5,
      var(--onboard-font-size-5, var(--font-size-5))
    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}`
  );
}
function De(i) {
  let e, t, n, o;
  function r(s, a) {
    return s[0].link ? ut : dt;
  }
  let f = r(i),
    l = f(i);
  return (
    (n = new ue({ props: { startTime: i[0].startTime } })),
    {
      c() {
        (e = h("span")),
          l.c(),
          (t = L()),
          A(n.$$.fragment),
          m(e, "class", "hash-time svelte-1otz6tt");
      },
      m(s, a) {
        _(s, e, a), l.m(e, null), g(e, t), G(n, e, null), (o = !0);
      },
      p(s, a) {
        f === (f = r(s)) && l
          ? l.p(s, a)
          : (l.d(1), (l = f(s)), l && (l.c(), l.m(e, t)));
        let c = {};
        a & 1 && (c.startTime = s[0].startTime), n.$set(c);
      },
      i(s) {
        o || (C(n.$$.fragment, s), (o = !0));
      },
      o(s) {
        j(n.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && w(e), l.d(), V(n);
      },
    }
  );
}
function dt(i) {
  let e,
    t = $(i[0].id) + "",
    n;
  return {
    c() {
      (e = h("div")), (n = I(t)), m(e, "class", "address-hash svelte-1otz6tt");
    },
    m(o, r) {
      _(o, e, r), g(e, n);
    },
    p(o, r) {
      r & 1 && t !== (t = $(o[0].id) + "") && Z(n, t);
    },
    d(o) {
      o && w(e);
    },
  };
}
function ut(i) {
  let e,
    t = $(i[0].id) + "",
    n,
    o;
  return {
    c() {
      (e = h("a")),
        (n = I(t)),
        m(e, "class", "address-hash svelte-1otz6tt"),
        m(e, "href", (o = i[0].link)),
        m(e, "target", "_blank"),
        m(e, "rel", "noreferrer noopener");
    },
    m(r, f) {
      _(r, e, f), g(e, n);
    },
    p(r, f) {
      f & 1 && t !== (t = $(r[0].id) + "") && Z(n, t),
        f & 1 && o !== (o = r[0].link) && m(e, "href", o);
    },
    d(r) {
      r && w(e);
    },
  };
}
function vt(i) {
  let e,
    t,
    n = i[0].message + "",
    o,
    r,
    f =
      i[0].id &&
      !i[0].id.includes("customNotification") &&
      !i[0].id.includes("preflight"),
    l,
    s = f && De(i);
  return {
    c() {
      (e = h("div")),
        (t = h("span")),
        (o = I(n)),
        (r = L()),
        s && s.c(),
        m(t, "class", "transaction-status svelte-1otz6tt"),
        m(
          e,
          "class",
          "flex flex-column notify-transaction-data svelte-1otz6tt"
        );
    },
    m(a, c) {
      _(a, e, c), g(e, t), g(t, o), g(e, r), s && s.m(e, null), (l = !0);
    },
    p(a, [c]) {
      (!l || c & 1) && n !== (n = a[0].message + "") && Z(o, n),
        c & 1 &&
          (f =
            a[0].id &&
            !a[0].id.includes("customNotification") &&
            !a[0].id.includes("preflight")),
        f
          ? s
            ? (s.p(a, c), c & 1 && C(s, 1))
            : ((s = De(a)), s.c(), C(s, 1), s.m(e, null))
          : s &&
            (H(),
            j(s, 1, 1, () => {
              s = null;
            }),
            D());
    },
    i(a) {
      l || (C(s), (l = !0));
    },
    o(a) {
      j(s), (l = !1);
    },
    d(a) {
      a && w(e), s && s.d();
    },
  };
}
function pt(i, e, t) {
  let { notification: n } = e;
  return (
    (i.$$set = (o) => {
      "notification" in o && t(0, (n = o.notification));
    }),
    [n]
  );
}
var ve = class extends N {
    constructor(e) {
      super(), O(this, e, pt, vt, R, { notification: 0 }, ft);
    }
  },
  mt = `
<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>
</svg>
`,
  yt = ["txPool"],
  bt = ["main", "matic-main"],
  ht = ["Ledger", "Trezor", "Keystone", "KeepKey", "D'CENT"],
  Ae = (i) => yt.includes(i),
  Ge = (i) => bt.includes(i),
  Ve = (i) => i && ht.includes(i.label);
function We(n) {
  return U(this, arguments, function* ({ type: i, wallet: e, transaction: t }) {
    let {
        from: o,
        input: r,
        value: f,
        to: l,
        nonce: s,
        gas: a,
        network: c,
      } = t,
      d = q[c],
      { gasPriceProbability: v } = J.get().notify.replacement,
      { gas: u } = Y;
    if (!u) return;
    let [b] = yield u.get({ chains: [q[c]], endpoint: "blockPrices" }),
      { maxFeePerGas: p, maxPriorityFeePerGas: y } =
        b.blockPrices[0].estimatedPrices.find(
          ({ confidence: x }) =>
            x === (i === "speedup" ? v?.speedup : v?.cancel)
        ) || {};
    if (!p || !y) return;
    let z = ee(p),
      T = ee(y),
      k = r === "0x" ? {} : { data: r };
    return e.provider.request({
      method: "eth_sendTransaction",
      params: [
        Object.assign(
          {
            type: "0x2",
            from: o,
            to: i === "cancel" ? o : l,
            chainId: parseInt(d),
            value: ge(BigInt(f)),
            nonce: Q(s),
            gasLimit: Q(a),
            maxFeePerGas: z,
            maxPriorityFeePerGas: T,
          },
          k
        ),
      ],
    });
  });
}
function gt(i) {
  M(
    i,
    "svelte-ftkynd",
    `.bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(
      --notify-onboard-border-radius,
      var(--onboard-border-radius-4, var(--border-radius-4))
    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(
      --notify-onboard-transaction-status-color,
      var(--onboard-primary-100, var(--primary-100))
    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(
      --notify-onboard-dropdown-background,
      var(--onboard-gray-700, var(--gray-700))
    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(
      --notify-onboard-dropdown-border-radius,
      var(--onboard-border-radius-5, var(--border-radius-5))
    );background-color:transparent;font-size:var(
      --notify-onboard-dropdown-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );color:var(
      --notify-onboard-dropdown-text-color,
      var(--onboard-primary-400, var(--primary-400))
    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(
      --notify-onboard-dropdown-btn-hover-background,
      rgba(146, 155, 237, 0.2)
    )}`
  );
}
function $e(i) {
  let e, t, n, o, r, f;
  return {
    c() {
      (e = h("div")),
        (t = h("button")),
        (t.textContent = "Cancel"),
        (n = L()),
        (o = h("button")),
        (o.textContent = "Speed-up"),
        m(t, "class", "dropdown-button svelte-ftkynd"),
        m(o, "class", "dropdown-button svelte-ftkynd"),
        m(
          e,
          "class",
          "dropdown-buttons flex items-center justify-end svelte-ftkynd"
        );
    },
    m(l, s) {
      _(l, e, s),
        g(e, t),
        g(e, n),
        g(e, o),
        r || ((f = [S(t, "click", i[10]), S(o, "click", i[11])]), (r = !0));
    },
    p: E,
    d(l) {
      l && w(e), (r = !1), ne(f);
    },
  };
}
function kt(i) {
  let e, t, n, o, r, f, l, s, a, c, d, v, u, b;
  (n = new de({
    props: { notification: i[0], chainStyles: te[q[i[0].network]] },
  })),
    (r = new ve({ props: { notification: i[0] } }));
  let p = i[0].eventCode === "txPool" && $e(i);
  return {
    c() {
      (e = h("div")),
        (t = h("div")),
        A(n.$$.fragment),
        (o = L()),
        A(r.$$.fragment),
        (f = L()),
        (l = h("div")),
        (s = h("div")),
        (a = L()),
        (c = h("div")),
        p && p.c(),
        m(s, "class", "flex items-center close-icon svelte-ftkynd"),
        m(
          l,
          "class",
          "notify-close-btn notify-close-btn-" +
            i[4].type +
            " pointer flex svelte-ftkynd"
        ),
        m(t, "class", "flex bn-notify-notification-inner svelte-ftkynd"),
        m(c, "class", "dropdown svelte-ftkynd"),
        B(
          c,
          "dropdown-visible",
          i[2] && i[5] && Ae(i[0].eventCode) && Ge(i[0].network) && Ve(i[7])
        ),
        m(
          e,
          "class",
          (d =
            "bn-notify-notification bn-notify-notification-" +
            i[0].type +
            "} svelte-ftkynd")
        ),
        B(e, "bn-notify-clickable", i[0].onClick);
    },
    m(y, z) {
      _(y, e, z),
        g(e, t),
        G(n, t, null),
        g(t, o),
        G(r, t, null),
        g(t, f),
        g(t, l),
        g(l, s),
        (s.innerHTML = mt),
        g(e, a),
        g(e, c),
        p && p.m(c, null),
        (v = !0),
        u ||
          ((b = [
            S(l, "click", oe(i[9])),
            S(e, "mouseenter", i[12]),
            S(e, "mouseleave", i[13]),
            S(e, "click", i[8]),
          ]),
          (u = !0));
    },
    p(y, [z]) {
      let T = {};
      z & 1 && (T.notification = y[0]),
        z & 1 && (T.chainStyles = te[q[y[0].network]]),
        n.$set(T);
      let k = {};
      z & 1 && (k.notification = y[0]),
        r.$set(k),
        y[0].eventCode === "txPool"
          ? p
            ? p.p(y, z)
            : ((p = $e(y)), p.c(), p.m(c, null))
          : p && (p.d(1), (p = null)),
        (!v || z & 165) &&
          B(
            c,
            "dropdown-visible",
            y[2] && y[5] && Ae(y[0].eventCode) && Ge(y[0].network) && Ve(y[7])
          ),
        (!v ||
          (z & 1 &&
            d !==
              (d =
                "bn-notify-notification bn-notify-notification-" +
                y[0].type +
                "} svelte-ftkynd"))) &&
          m(e, "class", d),
        (!v || z & 1) && B(e, "bn-notify-clickable", y[0].onClick);
    },
    i(y) {
      v || (C(n.$$.fragment, y), C(r.$$.fragment, y), (v = !0));
    },
    o(y) {
      j(n.$$.fragment, y), j(r.$$.fragment, y), (v = !1);
    },
    d(y) {
      y && w(e), V(n), V(r), p && p.d(), (u = !1), ne(b);
    },
  };
}
function _t(i, e, t) {
  let n, o;
  F(i, Ee, (k) => t(15, (n = k))), F(i, X, (k) => t(3, (o = k)));
  let { device: r, gas: f } = Y,
    { notification: l } = e,
    { updateParentOnRemove: s } = e,
    a,
    c = !1,
    d = Re.getValue().find(({ hash: k }) => k === l.id),
    v =
      d &&
      n.find(
        ({ accounts: k }) =>
          !!k.find(({ address: x }) => x.toLowerCase() === d.from.toLowerCase())
      );
  function u(k) {
    l?.onClick && l.onClick(k);
  }
  re(() => {
    clearTimeout(a);
  });
  let b = () => {
      se(l.id), ae(l.id), s();
    },
    p = () =>
      U(this, null, function* () {
        try {
          yield We({ type: "cancel", wallet: v, transaction: d });
        } catch {
          let x = `${d.hash.slice(0, 9)}:txReplaceError${d.hash.slice(-5)}`;
          le({
            id: x,
            type: "hint",
            eventCode: "txError",
            message: o("notify.transaction.txReplaceError"),
            key: x,
            autoDismiss: 4e3,
          });
        }
      }),
    y = () =>
      U(this, null, function* () {
        try {
          yield We({ type: "speedup", wallet: v, transaction: d });
        } catch {
          let x = `${d.hash.slice(0, 9)}:txReplaceError${d.hash.slice(-5)}`;
          le({
            id: x,
            type: "hint",
            eventCode: "txError",
            message: o("notify.transaction.txReplaceError"),
            key: x,
            autoDismiss: 4e3,
          });
        }
      }),
    z = () => t(2, (c = !0)),
    T = () => t(2, (c = !1));
  return (
    (i.$$set = (k) => {
      "notification" in k && t(0, (l = k.notification)),
        "updateParentOnRemove" in k && t(1, (s = k.updateParentOnRemove));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 1 &&
        l.autoDismiss &&
        (a = setTimeout(() => {
          se(l.id), ae(l.id);
        }, l.autoDismiss));
    }),
    [l, s, c, o, r, f, d, v, u, b, p, y, z, T]
  );
}
var pe = class extends N {
  constructor(e) {
    super(),
      O(this, e, _t, kt, R, { notification: 0, updateParentOnRemove: 1 }, gt);
  }
};
function wt(i) {
  M(
    i,
    "svelte-1h8mmo3",
    `ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(
      --notify-onboard-font-size,
      var(--onboard-font-size-5, var(--font-size-5))
    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(
      --notify-onboard-font-family,
      var(--onboard-font-family-normal, inherit)
    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}`
  );
}
function qe(i, e, t) {
  let n = i.slice();
  return (n[12] = e[t]), n;
}
function Ke(i) {
  let e,
    t = [],
    n = new Map(),
    o,
    r,
    f,
    l = i[2],
    s = (a) => a[12].key;
  for (let a = 0; a < l.length; a += 1) {
    let c = qe(i, l, a),
      d = s(c);
    n.set(d, (t[a] = Ze(d, c)));
  }
  return {
    c() {
      e = h("ul");
      for (let a = 0; a < t.length; a += 1) t[a].c();
      m(e, "class", (o = "bn-notify-" + i[0] + " " + i[5] + " svelte-1h8mmo3")),
        m(
          e,
          "style",
          (r = `${
            i[0].includes("top") ? "justify-content:flex-start;" : ""
          }; max-height: calc(100vh - ${
            i[6].expanded
              ? "412px"
              : i[1] && i[7].type !== "mobile"
              ? "82px"
              : !i[1] && i[7].type === "mobile"
              ? "108px"
              : "24px"
          })`)
        );
    },
    m(a, c) {
      _(a, e, c);
      for (let d = 0; d < t.length; d += 1) t[d] && t[d].m(e, null);
      f = !0;
    },
    p(a, c) {
      if (c & 517) {
        (l = a[2]), H();
        for (let d = 0; d < t.length; d += 1) t[d].r();
        t = Se(t, c, s, 1, a, l, n, e, Pe, Ze, null, qe);
        for (let d = 0; d < t.length; d += 1) t[d].a();
        D();
      }
      (!f ||
        (c & 33 &&
          o !== (o = "bn-notify-" + a[0] + " " + a[5] + " svelte-1h8mmo3"))) &&
        m(e, "class", o),
        (!f ||
          (c & 67 &&
            r !==
              (r = `${
                a[0].includes("top") ? "justify-content:flex-start;" : ""
              }; max-height: calc(100vh - ${
                a[6].expanded
                  ? "412px"
                  : a[1] && a[7].type !== "mobile"
                  ? "82px"
                  : !a[1] && a[7].type === "mobile"
                  ? "108px"
                  : "24px"
              })`))) &&
          m(e, "style", r);
    },
    i(a) {
      if (!f) {
        for (let c = 0; c < l.length; c += 1) C(t[c]);
        f = !0;
      }
    },
    o(a) {
      for (let c = 0; c < t.length; c += 1) j(t[c]);
      f = !1;
    },
    d(a) {
      a && w(e);
      for (let c = 0; c < t.length; c += 1) t[c].d();
    },
  };
}
function Ze(i, e) {
  let t,
    n,
    o,
    r,
    f,
    l,
    s,
    a = E,
    c,
    d,
    v;
  return (
    (n = new pe({
      props: { notification: e[12], updateParentOnRemove: e[9] },
    })),
    {
      key: i,
      first: null,
      c() {
        (t = h("li")),
          A(n.$$.fragment),
          (o = L()),
          m(
            t,
            "class",
            (r =
              K(
                `bn-notify-li-${e[0]} ${
                  e[0].includes("top")
                    ? "notification-list-top"
                    : "notification-list-bottom"
                }`
              ) + " svelte-1h8mmo3")
          ),
          (this.first = t);
      },
      m(u, b) {
        _(u, t, b),
          G(n, t, null),
          g(t, o),
          (c = !0),
          d || ((v = S(t, "click", oe(e[10]))), (d = !0));
      },
      p(u, b) {
        e = u;
        let p = {};
        b & 4 && (p.notification = e[12]),
          n.$set(p),
          (!c ||
            (b & 1 &&
              r !==
                (r =
                  K(
                    `bn-notify-li-${e[0]} ${
                      e[0].includes("top")
                        ? "notification-list-top"
                        : "notification-list-bottom"
                    }`
                  ) + " svelte-1h8mmo3"))) &&
            m(t, "class", r);
      },
      r() {
        s = t.getBoundingClientRect();
      },
      f() {
        Ce(t), a(), ze(t, s);
      },
      a() {
        a(), (a = we(t, s, et, { duration: 500 }));
      },
      i(u) {
        c ||
          (C(n.$$.fragment, u),
          u &&
            Le(() => {
              c &&
                (l && l.end(1),
                (f = Te(t, Ie, {
                  duration: 1200,
                  delay: 300,
                  x: e[3],
                  y: e[4],
                  easing: zt,
                })),
                f.start());
            }),
          (c = !0));
      },
      o(u) {
        j(n.$$.fragment, u),
          f && f.invalidate(),
          (l = xe(t, Me, { duration: 300, easing: ce })),
          (c = !1);
      },
      d(u) {
        u && w(t), V(n), u && l && l.end(), (d = !1), v();
      },
    }
  );
}
function Ct(i) {
  let e,
    t,
    n = i[2].length && Ke(i);
  return {
    c() {
      n && n.c(), (e = ie());
    },
    m(o, r) {
      n && n.m(o, r), _(o, e, r), (t = !0);
    },
    p(o, [r]) {
      o[2].length
        ? n
          ? (n.p(o, r), r & 4 && C(n, 1))
          : ((n = Ke(o)), n.c(), C(n, 1), n.m(e.parentNode, e))
        : n &&
          (H(),
          j(n, 1, 1, () => {
            n = null;
          }),
          D());
    },
    i(o) {
      t || (C(n), (t = !0));
    },
    o(o) {
      j(n), (t = !1);
    },
    d(o) {
      n && n.d(o), o && w(e);
    },
  };
}
function zt(i) {
  return Math.sin((-13 * (i + 1) * Math.PI) / 2) * Math.pow(2, -35 * i) + 1;
}
function jt(i, e, t) {
  let n,
    { device: o } = Y,
    r = J.select("accountCenter").pipe(be(J.get().accountCenter), ye(1));
  F(i, r, (p) => t(6, (n = p)));
  let { position: f } = e,
    { sharedContainer: l } = e,
    { notifications: s } = e,
    a,
    c;
  (a = 0), (c = 0);
  let d = "y-scroll",
    v = () => {
      d !== "y-visible" && t(5, (d = "y-visible")),
        u(function () {
          t(5, (d = "y-scroll"));
        }, 1e3);
    },
    u = (function () {
      let p = null;
      return (y, z) => {
        clearTimeout(p), (p = setTimeout(y, z));
      };
    })();
  function b(p) {
    je.call(this, i, p);
  }
  return (
    (i.$$set = (p) => {
      "position" in p && t(0, (f = p.position)),
        "sharedContainer" in p && t(1, (l = p.sharedContainer)),
        "notifications" in p && t(2, (s = p.notifications));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 1 && (f.includes("top") ? t(4, (c = -50)) : t(4, (c = 50)));
    }),
    [f, l, s, a, c, d, n, o, r, v, b]
  );
}
var Be = class extends N {
  constructor(e) {
    super(),
      O(
        this,
        e,
        jt,
        Ct,
        R,
        { position: 0, sharedContainer: 1, notifications: 2 },
        wt
      );
  }
};
export { Be as default };
