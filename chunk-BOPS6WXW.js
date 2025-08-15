import { Q as w, S as j } from "./chunk-YF7ATBOB.js";
import { F as E, L as h, pa as V, ra as F, sa as I } from "./chunk-ABQK56SH.js";
import {
  Aa as b,
  Ea as D,
  Ja as y,
  Ka as k,
  La as T,
  Ma as o,
  Na as l,
  Oa as x,
  Sa as C,
  Wa as f,
  Xa as s,
  ea as W,
  fb as a,
  hb as g,
  j as i,
  ja as r,
  n as _,
  qb as v,
  x as m,
  y as d,
} from "./chunk-FRM3FMZU.js";
import { q as u } from "./chunk-KXQY476L.js";
u();
u();
function O(t, n) {
  if (t & 1) {
    let e = C();
    o(0, "button", 4),
      f("click", function () {
        let p = m(e).$implicit,
          R = s(2);
        return d(R.selectWallet(p));
      }),
      x(1, "img", 5),
      o(2, "span", 6),
      a(3),
      l()();
  }
  if (t & 2) {
    let e = n.$implicit;
    r(), D("src", e.adapter.icon, W), r(2), g(" ", e.adapter.name, " ");
  }
}
function z(t, n) {
  t & 1 &&
    (o(0, "div", 7),
    a(1, " No wallet providers found "),
    l(),
    o(2, "a", 8),
    a(3, " Get Solflare "),
    l());
}
function G(t, n) {
  if (
    (t & 1 &&
      (o(0, "div", 1)(1, "h1", 2),
      a(2),
      l(),
      k(3, O, 4, 2, "button", 3, y, !1, z, 4, 0),
      l()),
    t & 2)
  ) {
    let e = n.$implicit,
      c = s();
    r(2), g(" ", e("header.selectWallet"), " "), r(), T(c.wallets());
  }
}
var S = class t {
  solanaWalletStore = i(V);
  wallet = F();
  wallets = I();
  #e = i(w);
  selectWallet(n) {
    this.solanaWalletStore.selectWallet(n.adapter.name),
      this.solanaWalletStore
        .connect()
        .subscribe({ next: () => {}, error: (e) => console.error(e) }),
      this.#e.close();
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = _({
    type: t,
    selectors: [["app-connect-solana-wallet-dialog"]],
    standalone: !0,
    features: [v],
    decls: 1,
    vars: 0,
    consts: [
      [
        "class",
        "bg-white rounded-[20px] px-6 py-4 w-[430px] max-w-full flex flex-col gap-3",
        4,
        "transloco",
      ],
      [
        1,
        "bg-white",
        "rounded-[20px]",
        "px-6",
        "py-4",
        "w-[430px]",
        "max-w-full",
        "flex",
        "flex-col",
        "gap-3",
      ],
      [1, "font-almarena", "text-[28px]/[1]", "mb-6", "self-center"],
      [
        1,
        "h-[52px]",
        "px-3",
        "flex",
        "items-center",
        "gap-2.5",
        "border",
        "border-black/30",
        "rounded-[4px]",
        "hover:bg-black/5",
      ],
      [
        1,
        "h-[52px]",
        "px-3",
        "flex",
        "items-center",
        "gap-2.5",
        "border",
        "border-black/30",
        "rounded-[4px]",
        "hover:bg-black/5",
        3,
        "click",
      ],
      [1, "w-[30px]", "h-[30px]", 3, "src"],
      [1, "font-dm-sans", "font-medium", "text-sm/[1]"],
      [1, "font-dm-sans", "font-medium", "text-sm/[1]", "self-center"],
      [
        "href",
        "https://solflare.com/",
        "target",
        "_blank",
        1,
        "font-almarena",
        "text-sm",
        "text-blue",
        "self-center",
        "border",
        "border-black/30",
        "rounded-[4px]",
        "px-4",
        "py-2",
      ],
    ],
    template: function (e, c) {
      e & 1 && b(0, G, 6, 2, "div", 0);
    },
    dependencies: [h],
    encapsulation: 2,
    changeDetection: 0,
  });
};
function U(t, n) {
  if (t & 1) {
    let e = C();
    o(0, "div", 1)(1, "h1", 2),
      a(2),
      l(),
      o(3, "button", 3),
      f("click", function () {
        m(e);
        let p = s();
        return d(p.connectEvmWallet());
      }),
      x(4, "img", 4),
      o(5, "span", 5),
      a(6, " Base "),
      l()(),
      o(7, "button", 6),
      f("click", function () {
        m(e);
        let p = s();
        return d(p.connectSolanaWallet());
      }),
      x(8, "img", 7),
      o(9, "span", 5),
      a(10, " Solana "),
      l()()();
  }
  if (t & 2) {
    let e = n.$implicit;
    r(2), g(" ", e("header.connect"), " ");
  }
}
var M = class t {
  #e = i(E);
  #t = i(j);
  #n = i(w);
  close() {
    this.#n.close();
  }
  connectEvmWallet() {
    this.#e.connect().then(() => {
      this.close();
    });
  }
  connectSolanaWallet() {
    this.#t.open(S).closed.subscribe(() => {
      this.close();
    });
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = _({
    type: t,
    selectors: [["app-connect-wallet-dialog"]],
    standalone: !0,
    features: [v],
    decls: 1,
    vars: 0,
    consts: [
      [
        "class",
        "bg-white rounded-[20px] px-6 py-4 w-[430px] max-w-full flex flex-col gap-3",
        4,
        "transloco",
      ],
      [
        1,
        "bg-white",
        "rounded-[20px]",
        "px-6",
        "py-4",
        "w-[430px]",
        "max-w-full",
        "flex",
        "flex-col",
        "gap-3",
      ],
      [1, "font-almarena", "text-[28px]/[1]", "mb-6", "self-center"],
      [
        1,
        "h-[52px]",
        "px-3",
        "flex",
        "items-center",
        "gap-2.5",
        "border",
        "border-black/30",
        "rounded-[4px]",
        "hover:bg-black/5",
        3,
        "click",
      ],
      ["src", "icons/base.svg", 1, "w-[30px]", "h-[30px]"],
      [1, "font-dm-sans", "font-medium", "text-sm/[1]"],
      [
        1,
        "h-[52px]",
        "px-4",
        "flex",
        "items-center",
        "gap-2.5",
        "border",
        "border-black/30",
        "rounded-[4px]",
        "hover:bg-black/5",
        3,
        "click",
      ],
      ["src", "icons/solana.svg", 1, "w-[30px]", "h-[30px]"],
    ],
    template: function (e, c) {
      e & 1 && b(0, U, 11, 1, "div", 0);
    },
    dependencies: [h],
    encapsulation: 2,
    changeDetection: 0,
  });
};
export { M as a };
