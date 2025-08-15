import { a as j } from "./chunk-IVFDRBX3.js";
import { a as $ } from "./chunk-YQ75I7HT.js";
import {
  C as ye,
  G as Y,
  L as A,
  d as Q,
  h as ae,
  j as Z,
  m as re,
  o as R,
  y as we,
  z as K,
} from "./chunk-ABQK56SH.js";
import {
  $a as te,
  Aa as m,
  Ea as p,
  Fa as L,
  G as fe,
  Ga as z,
  H as ve,
  Ia as C,
  Ja as D,
  K as B,
  Ka as P,
  La as V,
  Ma as a,
  Na as r,
  Oa as g,
  Ra as J,
  Sa as E,
  Sb as Ce,
  Wa as w,
  Xa as c,
  ab as ie,
  bb as ne,
  ea as F,
  eb as G,
  fb as d,
  gb as x,
  ha as he,
  hb as _,
  j as H,
  ja as n,
  ka as ee,
  n as T,
  qb as k,
  sb as M,
  ta as I,
  tb as f,
  vb as S,
  wb as b,
  x as v,
  y as h,
  yb as oe,
} from "./chunk-FRM3FMZU.js";
import "./chunk-J6HUAGRI.js";
import "./chunk-L7NZVLCG.js";
import "./chunk-UV7ERROY.js";
import "./chunk-DXA257HR.js";
import "./chunk-URXTW6Z4.js";
import "./chunk-2CMVC2QG.js";
import "./chunk-YHHDRASY.js";
import "./chunk-23ZZ27XK.js";
import "./chunk-7NO3R5IA.js";
import "./chunk-MXKSX4NU.js";
import "./chunk-7HG7UTUA.js";
import "./chunk-3VTBTNQ3.js";
import "./chunk-7VBKHTQI.js";
import "./chunk-YYSBJNVH.js";
import "./chunk-PV7NZOQN.js";
import "./chunk-4467BSCR.js";
import { q as y } from "./chunk-KXQY476L.js";
y();
y();
y();
var ke = (t) => ["/agent-details/", t],
  le = (t, i) => ({ label: t, value: i });
function Ae(t, i) {}
function Ie(t, i) {
  t & 1 && m(0, Ae, 0, 0, "ng-template");
}
function Ee(t, i) {}
function Fe(t, i) {
  t & 1 && m(0, Ee, 0, 0, "ng-template");
}
function De(t, i) {}
function Pe(t, i) {
  t & 1 && m(0, De, 0, 0, "ng-template");
}
function Ve(t, i) {}
function Le(t, i) {
  t & 1 && m(0, Ve, 0, 0, "ng-template");
}
function Oe(t, i) {
  if (
    (t & 1 &&
      (a(0, "a", 4),
      g(1, "img", 5),
      a(2, "div", 6),
      g(3, "img", 7),
      a(4, "div", 8)(5, "span", 9),
      d(6),
      r(),
      a(7, "span", 10),
      d(8),
      r()()(),
      a(9, "div", 11),
      m(10, Ie, 1, 0, null, 12),
      S(11, "currencyShort"),
      m(12, Fe, 1, 0, null, 12),
      S(13, "number"),
      m(14, Pe, 1, 0, null, 12),
      S(15, "currencyShort"),
      m(16, Le, 1, 0, null, 12),
      S(17, "currencyShort"),
      r()()),
    t & 2)
  ) {
    let e = i.$implicit,
      o = i.$index,
      l = c().$implicit,
      u = c(),
      s = G(2);
    L("animation-delay", o * 0.1 + "s")(
      "background",
      e.id == 2002 ? "#CCD6D3" : null
    ),
      z("animate-slide-in-left", u.showAnimation() == "true"),
      p("routerLink", M(27, ke, e.slug ? e.slug : e.id)),
      n(),
      p("ngSrc", e.coverImage),
      n(2),
      p("ngSrc", e.icon),
      n(3),
      x(e.name),
      n(2),
      x(e.ticker),
      n(2),
      p("ngTemplateOutlet", s)(
        "ngTemplateOutletContext",
        f(29, le, l("marketCap"), b(11, 19, e.marketCap))
      ),
      n(2),
      p("ngTemplateOutlet", s)(
        "ngTemplateOutletContext",
        f(32, le, l("holderCount"), b(13, 21, e.holderCount))
      ),
      n(2),
      p("ngTemplateOutlet", s)(
        "ngTemplateOutletContext",
        f(35, le, l("liquidity"), b(15, 23, e.liquidity))
      ),
      n(2),
      p("ngTemplateOutlet", s)(
        "ngTemplateOutletContext",
        f(38, le, l("volume"), b(17, 25, e.volume))
      );
  }
}
function Me(t, i) {
  if ((t & 1 && (a(0, "div", 2), P(1, Oe, 18, 41, "a", 3, D), r()), t & 2)) {
    let e = c();
    n(), V(e.agents());
  }
}
function He(t, i) {
  if (
    (t & 1 &&
      (a(0, "div", 13)(1, "span", 10),
      d(2),
      r(),
      a(3, "span", 14),
      d(4),
      r()()),
    t & 2)
  ) {
    let e,
      o = i.label,
      l = i.value;
    n(2), x(o), n(2), x((e = l) !== null && e !== void 0 ? e : "/");
  }
}
var se = class t {
  agents = B([]);
  showAnimation = I(this.#e);
  ngOnInit() {
    setTimeout(() => {
      this.showAnimation.set("false"),
        sessionStorage.setItem("animation-grid-view", this.showAnimation());
    }, 3e3);
  }
  get #e() {
    return sessionStorage.getItem("animation-grid-view") ?? "true";
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = T({
    type: t,
    selectors: [["app-agent-list-grid-view"]],
    inputs: { agents: [1, "agents"] },
    standalone: !0,
    features: [k],
    decls: 3,
    vars: 1,
    consts: [
      ["dataItem", ""],
      [
        "class",
        "flex gap-6 flex-wrap -md:justify-center",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [1, "flex", "gap-6", "flex-wrap", "-md:justify-center"],
      [
        1,
        "bg-black/[2%]",
        "border",
        "border-black/10",
        "rounded-[30px]",
        "p-4",
        "relative",
        "w-[350px]",
        3,
        "animate-slide-in-left",
        "routerLink",
        "animationDelay",
        "background",
      ],
      [
        1,
        "bg-black/[2%]",
        "border",
        "border-black/10",
        "rounded-[30px]",
        "p-4",
        "relative",
        "w-[350px]",
        3,
        "routerLink",
      ],
      [
        "height",
        "131",
        "width",
        "316",
        1,
        "w-full",
        "h-[131px]",
        "object-cover",
        "rounded-[4px]",
        3,
        "ngSrc",
      ],
      [1, "-mt-4", "flex", "items-end", "gap-2"],
      [
        "width",
        "60",
        "height",
        "60",
        1,
        "w-[60px]",
        "h-[60px]",
        "rounded-full",
        "border-2",
        "border-white",
        3,
        "ngSrc",
      ],
      [1, "flex", "flex-col", "gap-1", "font-almarena"],
      [1, "text-lg/[1]", "text-[#404040]"],
      [1, "text-[10px]/[1]", "text-black/50"],
      [1, "mt-4", "grid", "grid-cols-3", "gap-x-2", "gap-y-4"],
      [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
      [1, "flex", "flex-col"],
      [1, "text-sm/[1]", "text-[#404040]"],
    ],
    template: function (e, o) {
      e & 1 &&
        m(0, Me, 3, 0, "div", 1)(1, He, 5, 2, "ng-template", null, 0, oe),
        e & 2 && p("translocoPrefix", "homePage");
    },
    dependencies: [A, j, ae, Z, K, R],
    encapsulation: 2,
    changeDetection: 0,
  });
};
y();
y();
var Be = ["dropdownTrigger"];
function Re(t, i) {
  if (t & 1) {
    let e = E();
    a(0, "div", 8)(1, "div", 9),
      d(2),
      r(),
      a(3, "div", 10)(4, "div", 11),
      w("click", function () {
        v(e);
        let l = c(2);
        return h(l.copyAddress());
      }),
      a(5, "img", 12),
      w("click", function () {
        v(e);
        let l = c(2);
        return h(l.copyAddress());
      }),
      r(),
      d(6),
      r(),
      a(7, "div", 13),
      w("click", function (l) {
        v(e);
        let u = c(2);
        return h(u.routeToExternalPage(l));
      }),
      a(8, "img", 14),
      w("click", function (l) {
        v(e);
        let u = c(2);
        return h(u.routeToExternalPage(l));
      }),
      r(),
      d(9),
      r()()();
  }
  if (t & 2) {
    let e = c().$implicit,
      o = c();
    L("top", o.dropdownPosition == null ? null : o.dropdownPosition.top, "px")(
      "right",
      o.dropdownPosition == null ? null : o.dropdownPosition.right,
      "px"
    ),
      n(2),
      x(o.displayedTokenId),
      n(4),
      _(" ", e("copy"), " "),
      n(2),
      p(
        "src",
        o.agent().chainType === "EVM"
          ? "icons/base.svg"
          : "icons/token_address.svg",
        F
      ),
      n(),
      _(" ", o.agent().chainType === "EVM" ? "Base Scan" : "Solscan", " ");
  }
}
function $e(t, i) {
  if (t & 1) {
    let e = E();
    a(0, "div", 2),
      w("click", function (l) {
        return v(e), l.preventDefault(), h(l.stopPropagation());
      }),
      a(1, "span", 3),
      d(2),
      r(),
      a(3, "img", 4),
      w("click", function () {
        v(e);
        let l = c();
        return h(l.copyAddress());
      }),
      r(),
      a(4, "img", 5),
      w("click", function (l) {
        v(e);
        let u = c();
        return h(u.routeToExternalPage(l));
      }),
      r(),
      a(5, "img", 6, 0),
      w("click", function (l) {
        v(e);
        let u = c();
        return h(u.openDropdown(l));
      }),
      r(),
      m(7, Re, 10, 8, "div", 7),
      r();
  }
  if (t & 2) {
    let e = c();
    n(),
      p("title", e.displayedTokenId),
      n(),
      x(e.displayedTokenId),
      n(2),
      p(
        "src",
        e.agent().chainType === "EVM"
          ? "icons/base.svg"
          : "icons/token_address.svg",
        F
      ),
      n(),
      p(
        "src",
        e.agent().chainType === "EVM"
          ? "icons/base.svg"
          : "icons/token_address.svg",
        F
      ),
      n(2),
      C(e.isDropdownOpen ? 7 : -1);
  }
}
var pe = class t {
  constructor(i) {
    this.ngZone = i;
  }
  agent = B.required();
  dropdownTrigger;
  dropdownPosition = null;
  displayedTokenId = "";
  isDropdownOpen = !1;
  ngOnInit() {
    this.updateDisplayedChainId();
  }
  updateDisplayedChainId() {
    let i = this.agent().token || "";
    i.length > 12
      ? (this.displayedTokenId = `${i.slice(0, 6)}...${i.slice(-6)}`)
      : (this.displayedTokenId = i);
  }
  routeToExternalPage(i) {
    i.preventDefault(),
      i.stopPropagation(),
      window.open(
        this.agent().chainType === "EVM"
          ? "https://basescan.org/address/" + this.agent().token
          : "https://solscan.io/token/" + this.agent().token,
        "_blank"
      );
  }
  copyAddress() {
    navigator.clipboard.writeText(this.agent().token + "");
  }
  openDropdown(i) {
    if (
      (i.preventDefault(),
      i.stopPropagation(),
      (this.isDropdownOpen = !this.isDropdownOpen),
      this.isDropdownOpen && this.dropdownTrigger)
    ) {
      let e = this.dropdownTrigger.nativeElement.getBoundingClientRect();
      this.dropdownPosition = { top: 30, right: -150 };
    } else this.dropdownPosition = null;
  }
  onDocumentClick(i) {
    let e = i.target;
    this.isDropdownOpen &&
      this.dropdownTrigger &&
      !this.dropdownTrigger.nativeElement.contains(e) &&
      !e.closest(".dropdown-content") &&
      (this.isDropdownOpen = !1);
  }
  static ɵfac = function (e) {
    return new (e || t)(ee(ve));
  };
  static ɵcmp = T({
    type: t,
    selectors: [["app-agent-address"]],
    viewQuery: function (e, o) {
      if ((e & 1 && te(Be, 5), e & 2)) {
        let l;
        ie((l = ne())) && (o.dropdownTrigger = l.first);
      }
    },
    hostBindings: function (e, o) {
      e & 1 &&
        w(
          "click",
          function (u) {
            return o.onDocumentClick(u);
          },
          !1,
          he
        );
    },
    inputs: { agent: [1, "agent"] },
    standalone: !0,
    features: [k],
    decls: 1,
    vars: 1,
    consts: [
      ["dropdownTrigger", ""],
      [
        "class",
        "relative flex md:border-2 justify-start rounded-full gap-1 md:gap-2 items-center md:pt-[2px] md:pr-[3px] md:pb-[2px] md:pl-[6px] -md:w-[24px] -md:h-[24px]",
        3,
        "click",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [
        1,
        "relative",
        "flex",
        "md:border-2",
        "justify-start",
        "rounded-full",
        "gap-1",
        "md:gap-2",
        "items-center",
        "md:pt-[2px]",
        "md:pr-[3px]",
        "md:pb-[2px]",
        "md:pl-[6px]",
        "-md:w-[24px]",
        "-md:h-[24px]",
        3,
        "click",
      ],
      [
        1,
        "-md:hidden",
        "text-[12px]/[1]",
        "text-[#818180]",
        "px-1",
        "max-w-full",
        3,
        "title",
      ],
      [
        "src",
        "icons/copy.svg",
        "alt",
        "",
        1,
        "-md:hidden",
        "hover:contrast-50",
        "w-[16px]",
        "h-[16px]",
        3,
        "click",
      ],
      [
        "alt",
        "",
        1,
        "hidden",
        "md:block",
        "hover:contrast-50",
        "w-[16px]",
        "h-[16px]",
        3,
        "click",
        "src",
      ],
      [
        "alt",
        "",
        1,
        "md:hidden",
        "hover:contrast-50",
        "w-[16px]",
        "h-[16px]",
        "relative",
        3,
        "click",
        "src",
      ],
      [
        1,
        "absolute",
        "bg-white",
        "shadow-lg",
        "rounded-lg",
        "p-5",
        "z-10",
        "w-72",
        "border-2",
        3,
        "top",
        "right",
      ],
      [
        1,
        "absolute",
        "bg-white",
        "shadow-lg",
        "rounded-lg",
        "p-5",
        "z-10",
        "w-72",
        "border-2",
      ],
      [
        1,
        "bg-[#F5F5F5]",
        "rounded-sm",
        "p-3",
        "text-center",
        "text-lg/[1]",
        "text-[#404040]",
      ],
      [
        1,
        "flex",
        "justify-between",
        "mt-3",
        "gap-3",
        "text-[#404040]",
        "text-sm",
        "h-10",
      ],
      [
        1,
        "px-3",
        "flex-1",
        "py-1",
        "flex",
        "items-center",
        "justify-center",
        "rounded",
        "border-2",
        "gap-1",
        3,
        "click",
      ],
      [
        "src",
        "icons/copy.svg",
        "alt",
        "",
        1,
        "w-[16px]",
        "h-[16px]",
        3,
        "click",
      ],
      [
        1,
        "px-3",
        "flex-1",
        "py-1",
        "flex",
        "items-center",
        "justify-center",
        "rounded",
        "border-2",
        "text-sm",
        "gap-1",
        3,
        "click",
      ],
      ["alt", "", 1, "w-[16px]", "h-[16px]", 3, "click", "src"],
    ],
    template: function (e, o) {
      e & 1 && m(0, $e, 8, 5, "div", 1),
        e & 2 && p("translocoPrefix", "homePage");
    },
    dependencies: [A],
    encapsulation: 2,
    changeDetection: 0,
  });
};
var je = (t) => ["/agent-details/", t];
function Ne(t, i) {
  if (
    (t & 1 &&
      (a(0, "div", 2)(1, "span", 3),
      d(2),
      r(),
      a(3, "span", 4),
      d(4),
      r(),
      a(5, "span", 4),
      d(6),
      r(),
      a(7, "span", 4),
      d(8),
      r(),
      a(9, "span", 4),
      d(10),
      r()()),
    t & 2)
  ) {
    let e = i.$implicit;
    n(2),
      x(e("allAiAgents")),
      n(2),
      x(e("marketCap")),
      n(2),
      x(e("holderCount")),
      n(2),
      x(e("liquidity")),
      n(2),
      x(e("volume"));
  }
}
function ze(t, i) {
  if ((t & 1 && g(0, "app-agent-address", 12), t & 2)) {
    let e = c().$implicit;
    p("agent", e);
  }
}
function Ge(t, i) {
  if (
    (t & 1 &&
      (a(0, "a", 5)(1, "div", 6),
      g(2, "img", 7),
      a(3, "div", 8)(4, "span", 9),
      d(5),
      r(),
      a(6, "div", 10)(7, "span", 11),
      d(8),
      r(),
      m(9, ze, 1, 1, "app-agent-address", 12),
      r()()(),
      a(10, "div", 13),
      d(11),
      S(12, "currencyShort"),
      r(),
      a(13, "div", 13),
      d(14),
      S(15, "number"),
      r(),
      a(16, "div", 13),
      d(17),
      S(18, "currencyShort"),
      r(),
      a(19, "div", 13),
      d(20),
      S(21, "currencyShort"),
      r()()),
    t & 2)
  ) {
    let e,
      o,
      l,
      u,
      s = i.$implicit,
      O = i.$index,
      X = c();
    L("animation-delay", O * 0.1 + "s")(
      "background",
      s.id == 2002 ? "#CCD6D3" : null
    ),
      z("animate-slide-in-left", X.showAnimation() == "true"),
      p("routerLink", M(23, je, s.slug ? s.slug : s.id)),
      n(2),
      p("ngSrc", s.icon),
      n(3),
      x(s.name),
      n(3),
      x("$" + s.ticker),
      n(),
      C(s.token ? 9 : -1),
      n(2),
      _(
        " ",
        (e = b(12, 15, s.marketCap)) !== null && e !== void 0 ? e : "/",
        " "
      ),
      n(3),
      _(
        " ",
        (o = b(15, 17, s.holderCount)) !== null && o !== void 0 ? o : "/",
        " "
      ),
      n(3),
      _(
        " ",
        (l = b(18, 19, s.liquidity)) !== null && l !== void 0 ? l : "/",
        " "
      ),
      n(3),
      _(" ", (u = b(21, 21, s.volume)) !== null && u !== void 0 ? u : "/", " ");
  }
}
var ce = class t {
  agents = B([]);
  showAnimation = I(this.#e);
  ngOnInit() {
    setTimeout(() => {
      this.showAnimation.set("false"),
        sessionStorage.setItem("animation-list-view", this.showAnimation());
    }, 3e3);
  }
  get #e() {
    return sessionStorage.getItem("animation-list-view") ?? "true";
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = T({
    type: t,
    selectors: [["app-agent-list-list-view"]],
    inputs: { agents: [1, "agents"] },
    standalone: !0,
    features: [k],
    decls: 3,
    vars: 1,
    consts: [
      [
        "class",
        "h-8 flex items-center gap-2 md:gap-4 font-almarena text-[10px] md:text-[11px] text-black/50 uppercase",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [
        1,
        "mt-1",
        "md:mt-3",
        "h-20",
        "flex",
        "py-4",
        "items-center",
        "gap-2",
        "md:gap-4",
        "even:bg-[#F5F5F5]",
        "font-almarena",
        "text-lg/[1]",
        "text-[#404040]",
        "rounded-lg",
        3,
        "animate-slide-in-left",
        "animationDelay",
        "background",
        "routerLink",
      ],
      [
        1,
        "h-8",
        "flex",
        "items-center",
        "gap-2",
        "md:gap-4",
        "font-almarena",
        "text-[10px]",
        "md:text-[11px]",
        "text-black/50",
        "uppercase",
      ],
      [1, "-md:w-5/12", "md:flex-1", "md:basis-80", "animate-slide-in-top"],
      [1, "-md:w-auto", "flex-1", "md:basis-28", "animate-slide-in-top"],
      [
        1,
        "mt-1",
        "md:mt-3",
        "h-20",
        "flex",
        "py-4",
        "items-center",
        "gap-2",
        "md:gap-4",
        "even:bg-[#F5F5F5]",
        "font-almarena",
        "text-lg/[1]",
        "text-[#404040]",
        "rounded-lg",
        3,
        "routerLink",
      ],
      [
        1,
        "-md:w-5/12",
        "md:flex-1",
        "md:basis-80",
        "flex",
        "items-center",
        "gap-2",
        "pl-4",
      ],
      [
        "width",
        "48",
        "height",
        "48",
        1,
        "w-12",
        "h-12",
        "rounded-full",
        "border-2",
        "border-white",
        3,
        "ngSrc",
      ],
      [1, "flex", "flex-col", "md:gap-1", "flex-1"],
      [1, "-md:text-[14px]"],
      [
        1,
        "flex",
        "gap-x-2",
        "md:gap-x-4",
        "-md:gap-y-1",
        "items-center",
        "justify-between",
        "flex-wrap",
      ],
      [1, "text-[12px]/[1]", "text-black/50"],
      [1, "flex-1", "flex", "justify-start", 3, "agent"],
      [1, "-md:w-auto", "flex-1", "md:basis-28", "text-[12px]"],
    ],
    template: function (e, o) {
      e & 1 && (m(0, Ne, 11, 5, "div", 0), P(1, Ge, 22, 25, "a", 1, D)),
        e & 2 && (p("translocoPrefix", "homePage"), n(), V(o.agents()));
    },
    dependencies: [A, j, Z, K, R, pe],
    encapsulation: 2,
    changeDetection: 0,
  });
};
y();
y();
var _e = ((s) => (
  (s.ALL = "all"),
  (s.DATE_CREATED = "new"),
  (s.MARKET_CAP = "market_cap"),
  (s.HOLDER_COUNT = "holder_count"),
  (s.LIQUIDITY = "liquidity"),
  (s.VOLUME = "volume"),
  s
))(_e || {});
var Se = (t, i) => ({
  "bg-black text-white": t,
  "bg-[#F5F5F5] hover:bg-black/25": i,
});
function qe(t, i) {
  if ((t & 1 && g(0, "img", 9), t & 2)) {
    let e = c().$implicit;
    p("src", "icons/" + e + ".svg", F);
  }
}
function Ue(t, i) {
  if (t & 1) {
    let e = E();
    a(0, "div", 8),
      w("click", function () {
        let l = v(e).$implicit,
          u = c(3);
        return h(u.setState(l));
      }),
      m(1, qe, 1, 1, "img", 9),
      a(2, "span"),
      d(3),
      r()();
  }
  if (t & 2) {
    let e = i.$implicit,
      o = c(2).$implicit,
      l = c();
    p("ngClass", f(3, Se, l.state() === e, l.state() !== e)),
      n(),
      C(e !== "all" ? 1 : -1),
      n(2),
      x(o(e));
  }
}
function Qe(t, i) {
  if ((t & 1 && (a(0, "div", 4), P(1, Ue, 4, 6, "div", 7, D), r()), t & 2)) {
    let e = c(2);
    n(), V(e.filters());
  }
}
function Ze(t, i) {
  if ((t & 1 && g(0, "img", 9), t & 2)) {
    let e = c().$implicit;
    p("src", "icons/" + e + ".svg", F);
  }
}
function Ke(t, i) {
  if (t & 1) {
    let e = E();
    a(0, "div", 10),
      w("click", function () {
        let l = v(e).$implicit,
          u = c(2);
        return h(u.setState(l));
      }),
      m(1, Ze, 1, 1, "img", 9),
      a(2, "span"),
      d(3),
      r()();
  }
  if (t & 2) {
    let e = i.$implicit,
      o = c().$implicit,
      l = c();
    p("ngClass", f(3, Se, l.state() === e, l.state() !== e)),
      n(),
      C(e !== "all" ? 1 : -1),
      n(2),
      x(o(e));
  }
}
function Ye(t, i) {
  if (t & 1) {
    let e = E();
    a(0, "div", 1)(1, "button", 2),
      w("click", function () {
        v(e);
        let l = c();
        return h(l.toggleDropdown());
      }),
      g(2, "img", 3),
      r(),
      m(3, Qe, 3, 0, "div", 4),
      a(4, "div", 5),
      P(5, Ke, 4, 6, "div", 6, D),
      r()();
  }
  if (t & 2) {
    let e = c();
    n(3), C(e.isDropdownOpen ? 3 : -1), n(2), V(e.filters());
  }
}
var de = class t {
  initialState = B("all");
  state = I("all");
  filterChanged = new fe();
  filters = I(Object.values(_e));
  isDropdownOpen = !1;
  ngOnInit() {
    this.state.set(this.initialState() || "all");
  }
  setState(i) {
    i !== this.state() && (this.state.set(i), this.filterChanged.emit(i));
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = T({
    type: t,
    selectors: [["app-filters"]],
    inputs: { initialState: [1, "initialState"] },
    outputs: { filterChanged: "filterChanged" },
    standalone: !0,
    features: [k],
    decls: 1,
    vars: 1,
    consts: [
      ["class", "relative -md:w-min", 4, "transloco", "translocoPrefix"],
      [1, "relative", "-md:w-min"],
      [
        1,
        "flex",
        "items-center",
        "gap-2",
        "py-1",
        "px-3",
        "rounded-lg",
        "text-black/50",
        "hover:bg-black/25",
        "md:hidden",
        3,
        "click",
      ],
      ["src", "icons/filters.svg", "alt", "Filters", 1, "min-w-6", "min-h-6"],
      [
        1,
        "absolute",
        "-md:w-52",
        "top-full",
        "right-0",
        "mt-2",
        "w-full",
        "bg-white",
        "shadow-lg",
        "rounded-lg",
        "p-4",
        "flex",
        "-md:flex-col",
        "-md:gap-y-3",
        "md:flex-wrap",
        "gap-2",
        "z-10",
        "md:hidden",
      ],
      [
        1,
        "hidden",
        "md:flex",
        "flex-wrap",
        "gap-2",
        "justify-start",
        "items-center",
      ],
      [
        1,
        "flex",
        "items-center",
        "gap-2",
        "py-1",
        "px-3",
        "rounded-lg",
        "text-[14px]/[2]",
        "text-black/50",
        "cursor-pointer",
        3,
        "ngClass",
      ],
      [
        1,
        "flex",
        "-md:flex-1",
        "-md:justify-center",
        "items-center",
        "gap-2",
        "py-1",
        "px-3",
        "rounded-lg",
        "text-[14px]/[2]",
        "text-black/50",
        "cursor-pointer",
        3,
        "ngClass",
      ],
      [
        1,
        "flex",
        "-md:flex-1",
        "-md:justify-center",
        "items-center",
        "gap-2",
        "py-1",
        "px-3",
        "rounded-lg",
        "text-[14px]/[2]",
        "text-black/50",
        "cursor-pointer",
        3,
        "click",
        "ngClass",
      ],
      [1, "rounded-lg", "w-5", "h-5", 3, "src"],
      [
        1,
        "flex",
        "items-center",
        "gap-2",
        "py-1",
        "px-3",
        "rounded-lg",
        "text-[14px]/[2]",
        "text-black/50",
        "cursor-pointer",
        3,
        "click",
        "ngClass",
      ],
    ],
    template: function (e, o) {
      e & 1 && m(0, Ye, 7, 1, "div", 0),
        e & 2 && p("translocoPrefix", "filters");
    },
    dependencies: [A, Q],
    encapsulation: 2,
    changeDetection: 0,
  });
};
var Je = ["loadMoreRef"];
function We(t, i) {
  t & 1 && (a(0, "div", 11), g(1, "app-spinner"), r());
}
function Xe(t, i) {
  if ((t & 1 && g(0, "app-agent-list-list-view", 13), t & 2)) {
    let e = c(3);
    p("agents", e.agentsStore.agents());
  }
}
function et(t, i) {
  if ((t & 1 && g(0, "app-agent-list-grid-view", 13), t & 2)) {
    let e = c(3);
    p("agents", e.agentsStore.agents());
  }
}
function tt(t, i) {
  t & 1 && (a(0, "div", 11), g(1, "app-spinner"), r());
}
function it(t, i) {
  if (
    (t & 1 &&
      (a(0, "div", 14),
      g(1, "img", 15),
      a(2, "div", 16)(3, "span", 17),
      d(4),
      r(),
      a(5, "span", 18),
      d(6),
      r()()()),
    t & 2)
  ) {
    let e = c(2).$implicit;
    n(4), x(e("noAgentsTitle")), n(2), _(" ", e("noAgentsDescription"), "");
  }
}
function nt(t, i) {
  if (
    (t & 1 &&
      (a(0, "div"),
      m(1, Xe, 1, 1, "app-agent-list-list-view", 13)(
        2,
        et,
        1,
        1,
        "app-agent-list-grid-view",
        13
      )(3, tt, 2, 0, "div", 11),
      r(),
      m(4, it, 7, 2, "div", 14)),
    t & 2)
  ) {
    let e,
      o = c(2);
    n(),
      C((e = o.view()) === "LIST" ? 1 : e === "GRID" ? 2 : -1),
      n(2),
      C(o.agentsStore.loadingMore() ? 3 : -1),
      n(),
      C(o.agentsStore.agents().length ? -1 : 4);
  }
}
function ot(t, i) {
  if (t & 1) {
    let e = E();
    a(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h2", 5),
      d(4),
      r(),
      a(5, "app-filters", 6),
      w("filterChanged", function (l) {
        v(e);
        let u = c();
        return h(u.reloadAgents(l));
      }),
      r()(),
      a(6, "button", 7),
      w("click", function () {
        v(e);
        let l = c();
        return h(l.view.set("LIST"));
      }),
      g(7, "img", 8),
      r(),
      a(8, "button", 7),
      w("click", function () {
        v(e);
        let l = c();
        return h(l.view.set("GRID"));
      }),
      g(9, "img", 9),
      r()(),
      a(10, "div", 10),
      m(11, We, 2, 0, "div", 11)(12, nt, 5, 3),
      g(13, "div", 12, 0),
      r()();
  }
  if (t & 2) {
    let e = i.$implicit,
      o = c();
    n(4),
      x(e("agents")),
      n(2),
      z("opacity-50", o.view() !== "LIST"),
      n(2),
      z("opacity-50", o.view() !== "GRID"),
      n(3),
      C(o.agentsStore.loading() ? 11 : 12);
  }
}
var me = class t {
  agentsStore = H($);
  view = I(this.#e);
  loadMoreRef;
  observer = new IntersectionObserver(
    (i) => {
      i.forEach((e) => {
        e.isIntersecting && this.loadItems();
      });
    },
    { threshold: 0.01 }
  );
  constructor() {
    Ce(() => {
      sessionStorage.setItem("agent-list-view", this.view());
    });
  }
  ngAfterViewInit() {
    this.loadMoreRef?.nativeElement
      ? this.observer.observe(this.loadMoreRef.nativeElement)
      : setTimeout(() => {
          this.observer.observe(this.loadMoreRef.nativeElement);
        }, 500);
  }
  ngOnDestroy() {
    this.observer && this.observer.disconnect();
  }
  get #e() {
    return sessionStorage.getItem("agent-list-view") ?? "LIST";
  }
  reloadAgents(i) {
    this.agentsStore.updatePaginationAndFilter({
      page: 0,
      perPage: this.agentsStore.paginationAndFilter().perPage,
      totalPages: this.agentsStore.paginationAndFilter().totalPages,
      filter: i,
    }),
      this.agentsStore.refreshAgents();
  }
  loadItems() {
    this.agentsStore.paginationAndFilter().page + 1 <
      this.agentsStore.paginationAndFilter().totalPages &&
      !this.agentsStore.loading() &&
      !this.agentsStore.loadingMore() &&
      this.agentsStore.loadMoreAgents().subscribe({
        next: () => {
          let i = this.isElementInView(this.loadMoreRef.nativeElement);
          this.agentsStore.paginationAndFilter().page + 1 <
            this.agentsStore.paginationAndFilter().totalPages &&
            !this.agentsStore.loading() &&
            !this.agentsStore.loadingMore() &&
            i &&
            this.loadItems();
        },
        error: (i) => {
          console.error("Error loading agents", i);
        },
      });
  }
  isElementInView(i) {
    let e = i.getBoundingClientRect(),
      o = window.innerHeight || document.documentElement.clientHeight;
    return e.top <= o && e.bottom >= 0;
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = T({
    type: t,
    selectors: [["app-agent-list"]],
    viewQuery: function (e, o) {
      if ((e & 1 && te(Je, 5), e & 2)) {
        let l;
        ie((l = ne())) && (o.loadMoreRef = l.first);
      }
    },
    standalone: !0,
    features: [k],
    decls: 1,
    vars: 1,
    consts: [
      ["loadMoreRef", ""],
      [
        "class",
        "px-7.5 py-10 container mx-auto min-h-lvh",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [1, "px-7.5", "py-10", "container", "mx-auto", "min-h-lvh"],
      [1, "flex", "gap-2.5", "items-center", "h-14"],
      [1, "flex", "justify-start", "flex-1", "gap-2", "items-center"],
      [1, "font-almarena", "text-[28px]"],
      [
        1,
        "flex-1",
        "-md:flex",
        "justify-end",
        "items-center",
        3,
        "filterChanged",
      ],
      [1, "", 3, "click"],
      ["src", "icons/list-view.svg"],
      ["src", "icons/grid-view.svg"],
      [1, "mt-3", "-mx-2"],
      [1, "grid", "place-items-center"],
      [1, "w-full", "h-0"],
      [3, "agents"],
      [1, "flex", "gap-7.5", "items-center", "mt-7", "-lg:flex-wrap"],
      ["src", "images/home-page-no-agents.png"],
      [1, "flex", "flex-col", "gap-4"],
      [1, "font-almarena", "text-[28px]/[32px]"],
      [1, "font-almarena", "text-sm/[24px]", "text-black/70"],
    ],
    template: function (e, o) {
      e & 1 && m(0, ot, 15, 6, "div", 1),
        e & 2 && p("translocoPrefix", "homePage");
    },
    dependencies: [Y, A, ce, se, de],
    encapsulation: 2,
    changeDetection: 0,
  });
};
y();
var rt = (t, i) => ({ "rounded-[4px]": t, "rounded-t-[4px]": i }),
  lt = (t) => ({ agents: t });
function st(t, i) {
  t & 1 && (a(0, "div", 10), g(1, "app-spinner", 11), r()),
    t & 2 && (n(), p("size", 24));
}
function pt(t, i) {
  if (
    (t & 1 &&
      (a(0, "a", 14)(1, "div", 15),
      g(2, "img", 16),
      a(3, "div", 17)(4, "span"),
      d(5),
      r(),
      a(6, "span", 18),
      d(7),
      r()()(),
      g(8, "img", 19),
      r()),
    t & 2)
  ) {
    let e = i.$implicit,
      o = c(4);
    L("background", e.id == 2002 ? "#CCD6D3" : null),
      p("routerLink", o.getAgentLink(e)),
      n(2),
      p("ngSrc", e.icon),
      n(3),
      x(e.name),
      n(2),
      x(e.ticker);
  }
}
function ct(t, i) {
  if (
    (t & 1 && (a(0, "h2", 12), d(1), r(), P(2, pt, 9, 6, "a", 13, D)), t & 2)
  ) {
    let e = c(2).$implicit,
      o = c();
    n(),
      _(
        " ",
        e("foundAgents", M(1, lt, o.agentsStore.searchedAgents().length)),
        " "
      ),
      n(),
      V(o.agentsStore.searchedAgents());
  }
}
function dt(t, i) {
  if (
    (t & 1 && (a(0, "div", 7), m(1, st, 2, 1, "div", 10)(2, ct, 4, 3), r()),
    t & 2)
  ) {
    let e = c(2);
    n(), C(e.agentsStore.searchAgentsLoading() ? 1 : 2);
  }
}
function mt(t, i) {
  if (t & 1) {
    let e = E();
    a(0, "div", 2)(1, "div", 3)(2, "input", 4, 0),
      w("keyup", function () {
        v(e);
        let l = G(3),
          u = c();
        return h(u.search(l.value));
      })("focus", function () {
        v(e);
        let l = c();
        return h(l.setDropdown());
      })("blur", function () {
        v(e);
        let l = c();
        return h(l.onBlur());
      }),
      r(),
      a(4, "button", 5),
      w("click", function (l) {
        v(e);
        let u = G(3),
          s = c();
        return l.stopPropagation(), h(s.search(u.value));
      }),
      g(5, "img", 6),
      r(),
      m(6, dt, 3, 1, "div", 7),
      r(),
      a(7, "button", 8)(8, "span", 9),
      d(9),
      r()()();
  }
  if (t & 2) {
    let e = i.$implicit,
      o = c();
    n(),
      p("ngClass", f(4, rt, !o.isDropdownVisible(), o.isDropdownVisible())),
      n(),
      p("placeholder", e("searchAgent")),
      n(4),
      C(o.isDropdownVisible() ? 6 : -1),
      n(3),
      _(" ", e("createNewAgent"), " ");
  }
}
var ge = class t {
  agentsStore = H($);
  isDropdownVisible = I(!1);
  searchValue = I("");
  searchTimeout = null;
  search(i) {
    this.searchTimeout && clearTimeout(this.searchTimeout),
      (this.searchTimeout = setTimeout(() => {
        i.length > 0
          ? (this.isDropdownVisible.set(!0),
            this.searchValue.set(i),
            this.agentsStore.searchAgents(i))
          : this.isDropdownVisible.set(!1);
      }, 300));
  }
  setDropdown() {
    this.searchValue().length > 0 && this.isDropdownVisible.set(!0);
  }
  onBlur() {
    setTimeout(() => {
      this.isDropdownVisible.set(!1);
    }, 200);
  }
  getAgentLink(i) {
    return ["/agent-details", i.slug ?? i.id];
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = T({
    type: t,
    selectors: [["app-home-page-search"]],
    standalone: !0,
    features: [k],
    decls: 1,
    vars: 1,
    consts: [
      ["input", ""],
      ["class", "flex -md:flex-col gap-2.5", 4, "transloco", "translocoPrefix"],
      [1, "flex", "-md:flex-col", "gap-2.5"],
      [
        1,
        "flex-1",
        "h-[67px]",
        "py-2",
        "pl-7.5",
        "pr-2",
        "flex",
        "gap-2.5",
        "items-center",
        "bg-white",
        "relative",
        3,
        "ngClass",
      ],
      [
        "type",
        "text",
        1,
        "flex-1",
        "outline-none",
        "font-dm-sans",
        "font-medium",
        "text-sm",
        "h-full",
        3,
        "keyup",
        "focus",
        "blur",
        "placeholder",
      ],
      [
        1,
        "h-12",
        "px-6",
        "grid",
        "place-items-center",
        "bg-black",
        "rounded-[4px]",
        3,
        "click",
      ],
      ["src", "icons/search.svg"],
      [
        1,
        "absolute",
        "top-full",
        "left-0",
        "w-full",
        "bg-white",
        "shadow-lg",
        "rounded-b-[4px]",
        "z-10",
        "drop-shadow-lg",
      ],
      [
        "routerLink",
        "/create-agent",
        1,
        "rounded-[4px]",
        "bg-orange",
        "h-[67px]",
        "px-6",
        "grid",
        "place-items-center",
        "hover:bg-orange/85",
      ],
      [1, "font-almarena", "text-black", "font-bold", "uppercase"],
      [1, "justify-self-center", "py-4"],
      [3, "size"],
      [
        1,
        "text-almarena",
        "text-xs",
        "text-black/50",
        "px-4",
        "py-2",
        "uppercase",
      ],
      [
        1,
        "px-4",
        "py-2",
        "hover:bg-gray-100",
        "flex",
        "items-center",
        "even:bg-[#F5F5F5]",
        "justify-between",
        3,
        "background",
        "routerLink",
      ],
      [
        1,
        "px-4",
        "py-2",
        "hover:bg-gray-100",
        "flex",
        "items-center",
        "even:bg-[#F5F5F5]",
        "justify-between",
        3,
        "routerLink",
      ],
      [1, "flex", "items-center", "gap-4"],
      [
        "width",
        "48",
        "height",
        "48",
        1,
        "w-12",
        "h-12",
        "rounded-full",
        "border-2",
        "border-white",
        3,
        "ngSrc",
      ],
      [1, "flex", "flex-col"],
      [1, "text-[10px]/[1]", "text-black/50"],
      ["src", "icons/arrow_outward.svg", "alt", ""],
    ],
    template: function (e, o) {
      e & 1 && m(0, mt, 10, 7, "div", 1),
        e & 2 && p("translocoPrefix", "homePage");
    },
    dependencies: [K, A, R, Y, re, Q],
    encapsulation: 2,
    changeDetection: 0,
  });
};
y();
var gt = (t, i) => ({ "bg-black": t, "bg-orange": i }),
  be = (t) => ({ "text-white": t }),
  W = (t, i) => ({ "text-white/50": t, "text-black/50": i }),
  ue = (t, i) => ({ "text-white": t, "text-black": i });
function ut(t, i) {
  t & 1 && g(0, "app-spinner", 4), t & 2 && p("size", 40);
}
function xt(t, i) {
  t & 1 && g(0, "img", 6);
}
function _t(t, i) {
  t & 1 && g(0, "img", 15);
}
function ft(t, i) {
  t & 1 && g(0, "img", 16);
}
function vt(t, i) {
  if (t & 1) {
    let e = E();
    a(0, "div", 3),
      w("click", function () {
        let l = v(e).$implicit,
          u = c(2);
        return h(u.loadAgent(l.slug));
      }),
      m(1, ut, 1, 1, "app-spinner", 4),
      a(2, "div"),
      g(3, "img", 5),
      m(4, xt, 1, 0, "img", 6),
      a(5, "div", 7)(6, "div", 8),
      d(7),
      r(),
      a(8, "div", 9)(9, "div"),
      g(10, "img", 10),
      r(),
      a(11, "div", 11)(12, "div", 12),
      d(13),
      r(),
      a(14, "div", 13)(15, "span", 14),
      d(16),
      r(),
      m(17, _t, 1, 0, "img", 15)(18, ft, 1, 0, "img", 16),
      r(),
      a(19, "div", 17)(20, "div", 18)(21, "div", 19),
      d(22),
      r(),
      a(23, "div", 20),
      d(24),
      S(25, "currencyShort"),
      r()(),
      a(26, "div", 18)(27, "div", 19),
      d(28),
      r(),
      a(29, "div", 20),
      d(30),
      S(31, "number"),
      r()(),
      a(32, "div", 18)(33, "div", 19),
      d(34),
      r(),
      a(35, "div", 20),
      d(36),
      S(37, "currencyShort"),
      r()(),
      a(38, "div", 18)(39, "div", 19),
      d(40),
      r(),
      a(41, "div", 20),
      d(42),
      S(43, "currencyShort"),
      r()()()()()()()();
  }
  if (t & 2) {
    let e,
      o,
      l,
      u,
      s = i.$implicit,
      O = c().$implicit,
      X = c();
    p("ngClass", f(39, gt, s.slug === "sakura", s.slug === "aiPump")),
      n(),
      C(X.isLoading() === s.slug ? 1 : -1),
      n(),
      L("opacity", X.isLoading() === s.slug ? "0.3" : "1"),
      n(),
      p(
        "src",
        s.slug === "sakura"
          ? "images/spotlight-pattern.png"
          : "images/spotlight-pattern-ai-pump.png",
        F
      ),
      n(),
      C(s.slug === "aiPump" ? 4 : -1),
      n(2),
      p("ngClass", M(42, be, s.slug === "sakura")),
      n(),
      _(" ", s.slug === "sakura" ? O("trending") : O("trendingAiPump"), " "),
      n(3),
      p("ngSrc", s.icon),
      n(2),
      p("ngClass", M(44, be, s.slug === "sakura")),
      n(),
      _(" ", s.name + (s.slug === "sakura" ? " " + O("byAiPump") : ""), " "),
      n(2),
      p("ngClass", f(46, W, s.slug === "sakura", s.slug === "aiPump")),
      n(),
      x("$" + s.ticker),
      n(),
      C(s.slug === "sakura" || s.slug === "aiPump" ? 17 : -1),
      n(),
      C(s.slug === "aiPump" ? 18 : -1),
      n(3),
      p("ngClass", f(49, W, s.slug === "sakura", s.slug === "aiPump")),
      n(),
      _(" ", O("marketCap"), " "),
      n(),
      p("ngClass", f(52, ue, s.slug === "sakura", s.slug === "aiPump")),
      n(),
      _(
        " ",
        (e = b(25, 31, s.marketCap)) !== null && e !== void 0 ? e : "/",
        " "
      ),
      n(3),
      p("ngClass", f(55, W, s.slug === "sakura", s.slug === "aiPump")),
      n(),
      _(" ", O("holderCount"), " "),
      n(),
      p("ngClass", f(58, ue, s.slug === "sakura", s.slug === "aiPump")),
      n(),
      _(
        " ",
        (o = b(31, 33, s.holderCount)) !== null && o !== void 0 ? o : "/",
        " "
      ),
      n(3),
      p("ngClass", f(61, W, s.slug === "sakura", s.slug === "aiPump")),
      n(),
      _(" ", O("liquidity"), " "),
      n(),
      p("ngClass", f(64, ue, s.slug === "sakura", s.slug === "aiPump")),
      n(),
      _(
        " ",
        (l = b(37, 35, s.liquidity)) !== null && l !== void 0 ? l : "/",
        " "
      ),
      n(3),
      p("ngClass", f(67, W, s.slug === "sakura", s.slug === "aiPump")),
      n(),
      _(" ", O("volume"), " "),
      n(),
      p("ngClass", f(70, ue, s.slug === "sakura", s.slug === "aiPump")),
      n(),
      _(" ", (u = b(43, 37, s.volume)) !== null && u !== void 0 ? u : "/", " ");
  }
}
function ht(t, i) {
  if ((t & 1 && (a(0, "div", 1), P(1, vt, 44, 73, "div", 2, D), r()), t & 2)) {
    let e = c();
    n(), V(e.agentsStore.spotlight());
  }
}
var xe = class t {
  constructor(i) {
    this.router = i;
  }
  isLoading = I("");
  agentsStore = H($);
  loadAgent(i) {
    this.isLoading.set(i), this.router.navigate(["/agent-details/", i]);
  }
  static ɵfac = function (e) {
    return new (e || t)(ee(we));
  };
  static ɵcmp = T({
    type: t,
    selectors: [["app-spotlight"]],
    standalone: !0,
    features: [k],
    decls: 1,
    vars: 1,
    consts: [
      [
        "class",
        "px-7.5 py-10 container mx-auto flex -lg:flex-col gap-3",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [
        1,
        "px-7.5",
        "py-10",
        "container",
        "mx-auto",
        "flex",
        "-lg:flex-col",
        "gap-3",
      ],
      [
        1,
        "p-[24px]",
        "flex",
        "flex-col",
        "lg:flex-1",
        "-lg:w-full",
        "bg-contain",
        "bg-center",
        "bg-no-repeat",
        "rounded-[20px]",
        "gap-1",
        "relative",
        "cursor-pointer",
        "hover:contrast-150",
        "transition-all",
        "duration-300",
        "ease-in-out",
        3,
        "ngClass",
      ],
      [
        1,
        "p-[24px]",
        "flex",
        "flex-col",
        "lg:flex-1",
        "-lg:w-full",
        "bg-contain",
        "bg-center",
        "bg-no-repeat",
        "rounded-[20px]",
        "gap-1",
        "relative",
        "cursor-pointer",
        "hover:contrast-150",
        "transition-all",
        "duration-300",
        "ease-in-out",
        3,
        "click",
        "ngClass",
      ],
      [
        1,
        "absolute",
        "w-full",
        "h-full",
        "top-0",
        "left-0",
        2,
        "display",
        "flex",
        "justify-content",
        "center",
        "align-items",
        "center",
        3,
        "size",
      ],
      [
        "alt",
        "",
        1,
        "absolute",
        "w-full",
        "h-full",
        "top-0",
        "left-0",
        "rounded-[20px]",
        3,
        "src",
      ],
      [
        "src",
        "images/ai-pump-spotlight-logo.svg",
        "alt",
        "",
        1,
        "absolute",
        "bottom-0",
        "right-0",
        "rounded-[20px]",
      ],
      [1, "relative", "flex", "flex-col", "gap-1"],
      [1, "text-lg", 3, "ngClass"],
      [1, "flex", "gap-3"],
      [
        "width",
        "94",
        "height",
        "94",
        1,
        "w-24",
        "h-24",
        "rounded-full",
        "border-2",
        "border-white",
        3,
        "ngSrc",
      ],
      [1, "flex", "flex-col", "gap-2"],
      [1, "uppercase", 3, "ngClass"],
      [1, "flex", "gap-2", "items-center"],
      [1, "text-[12px]/[1]", 3, "ngClass"],
      [
        "width",
        "16",
        "height",
        "16",
        "src",
        "icons/base.svg",
        1,
        "w-4",
        "h-4",
        "rounded-full",
      ],
      [
        "width",
        "16",
        "height",
        "16",
        "src",
        "icons/solana.svg",
        1,
        "w-4",
        "h-4",
        "rounded-full",
      ],
      [1, "flex", "gap-2", "w-full"],
      [1, "flex", "flex-col"],
      [1, "text-[11px]", 3, "ngClass"],
      [1, "text-[14px]", 3, "ngClass"],
    ],
    template: function (e, o) {
      e & 1 && m(0, ht, 3, 0, "div", 0),
        e & 2 && p("translocoPrefix", "spotlight");
    },
    dependencies: [A, re, Q, Z, R, j, ye, Y],
    encapsulation: 2,
    changeDetection: 0,
  });
};
var Ct = (t, i) => ({ icon: "icons/ai_agents.svg", title: t, value: i }),
  wt = (t, i) => ({ icon: "icons/on_chain_users.svg", title: t, value: i }),
  yt = (t, i) => ({ icon: "icons/unique_holders.svg", title: t, value: i }),
  St = (t, i) => ({ icon: "icons/tvl.svg", title: t, value: i });
function bt(t, i) {
  t & 1 && J(0);
}
function Tt(t, i) {
  t & 1 && J(0);
}
function kt(t, i) {
  t & 1 && J(0);
}
function At(t, i) {
  t & 1 && J(0);
}
function It(t, i) {
  if (
    (t & 1 &&
      (a(0, "div", 10),
      m(1, bt, 1, 0, "ng-container", 11),
      g(2, "div", 12),
      m(3, Tt, 1, 0, "ng-container", 11),
      g(4, "div", 12),
      m(5, kt, 1, 0, "ng-container", 11),
      g(6, "div", 12),
      m(7, At, 1, 0, "ng-container", 11),
      S(8, "currencyShort"),
      r()),
    t & 2)
  ) {
    let e = i,
      o = c().$implicit;
    c();
    let l = G(7);
    n(),
      p("ngTemplateOutlet", l)(
        "ngTemplateOutletContext",
        f(10, Ct, o("aiAgents"), e.agentCount)
      ),
      n(2),
      p("ngTemplateOutlet", l)(
        "ngTemplateOutletContext",
        f(13, wt, o("agentCreators"), e.userCount)
      ),
      n(2),
      p("ngTemplateOutlet", l)(
        "ngTemplateOutletContext",
        f(16, yt, o("uniqueHolders"), e.uniqueHolderCount)
      ),
      n(2),
      p("ngTemplateOutlet", l)(
        "ngTemplateOutletContext",
        f(19, St, o("tvl"), +e.tvl > 0 ? b(8, 8, e == null ? null : e.tvl) : 0)
      );
  }
}
function Et(t, i) {
  if (
    (t & 1 &&
      (a(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "h1", 9),
      d(5),
      r(),
      m(6, It, 9, 22, "div", 10),
      r(),
      g(7, "app-home-page-search"),
      r()()()),
    t & 2)
  ) {
    let e,
      o = i.$implicit,
      l = c();
    n(5),
      _(" ", o("title"), " "),
      n(),
      C(
        (e = (e = l.agentsStore.analytics()) == null ? null : e.statistics)
          ? 6
          : -1,
        e
      );
  }
}
function Ft(t, i) {
  t & 1 && g(0, "app-spotlight");
}
function Dt(t, i) {
  if (
    (t & 1 &&
      (a(0, "div", 13)(1, "div", 14),
      g(2, "img", 15),
      a(3, "h3", 16),
      d(4),
      r()(),
      g(5, "img", 17),
      a(6, "div", 18)(7, "h3", 19),
      d(8),
      r(),
      a(9, "h2", 20),
      d(10),
      r()()()),
    t & 2)
  ) {
    let e = i.icon,
      o = i.title,
      l = i.value;
    n(2),
      p("src", e, F),
      n(2),
      _(" ", o, " "),
      n(),
      p("src", e, F),
      n(3),
      x(o),
      n(2),
      x(l);
  }
}
var Te = class t {
  agentsStore = H($);
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = T({
    type: t,
    selectors: [["app-home-page"]],
    standalone: !0,
    features: [k],
    decls: 8,
    vars: 2,
    consts: [
      ["analyticsItem", ""],
      [1, "bg-black"],
      [
        1,
        "bg-black",
        "relative",
        "py-5",
        "xl:py-0",
        "md:container",
        "mx-auto",
        "overflow-x-clip",
      ],
      [
        "src",
        "images/home-page-header.png",
        1,
        "absolute",
        "-md:inset-0",
        "bottom-0",
        "md:right-0",
        "-md:mt-auto",
        "md:top-0",
        "-md:w-full",
        "h-full",
        "object-contain",
        "object-bottom",
        "block",
        "animate-slide-in-right",
      ],
      [
        "class",
        "mx-auto relative xl:py-[88px] container",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [1, "mx-auto", "relative", "xl:py-[88px]", "container"],
      [1, "container", "mx-auto", "px-7.5"],
      [1, "flex", "flex-col", "-md:gap-28", "gap-7.5", "relative"],
      [1, "flex", "flex-col", "-xl:gap-10", "gap-7.5", "relative"],
      [
        1,
        "font-almarena",
        "text-center",
        "md:text-left",
        "text-[47px]/[45px]",
        "md:text-[80px]/[70px]",
        "text-[#EDE9DF]",
        "max-w-[700px]",
        "animate-slide-in-left",
      ],
      [
        1,
        "border",
        "rounded-lg",
        "flex",
        "-md:flex-col",
        "-md:w-full",
        "border-white/30",
        "w-fit",
      ],
      [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
      [1, "inline-block", "w-[1px]", "self-stretch", "bg-white/30"],
      [
        1,
        "flex",
        "-md:justify-between",
        "gap-4",
        "p-4",
        "-md:p-1",
        "items-start",
        "-md:items-center",
      ],
      [1, "md:hidden", "flex", "items-center", "gap-3"],
      ["alt", "", 1, "-md:h-[24px]", "-md:w-[24px]", 3, "src"],
      [1, "uppercase", "text-[11px]", "text-almarena", "text-white"],
      ["alt", "", 1, "-md:h-[24px]", "-md:w-[24px]", "-md:hidden", 3, "src"],
      [1, "flex", "flex-col", "justify-between", "text-almarena", "text-white"],
      [1, "uppercase", "text-[11px]", "-md:hidden"],
      [1, "text-[24px]", "font-bold"],
    ],
    template: function (e, o) {
      e & 1 &&
        (a(0, "div", 1)(1, "div", 2),
        g(2, "img", 3),
        m(3, Et, 8, 2, "div", 4),
        r()(),
        m(4, Ft, 1, 0, "app-spotlight"),
        g(5, "app-agent-list"),
        m(6, Dt, 11, 5, "ng-template", null, 0, oe)),
        e & 2 &&
          (n(3),
          p("translocoPrefix", "homePage"),
          n(),
          C(o.agentsStore.spotlight().length ? 4 : -1));
    },
    dependencies: [A, ge, me, j, ae, xe],
    encapsulation: 2,
    changeDetection: 0,
  });
};
export { Te as HomePageComponent };
