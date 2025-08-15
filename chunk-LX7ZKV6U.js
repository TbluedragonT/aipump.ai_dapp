import {
  a as we,
  b as Te,
  c as Se,
  d as Ae,
  e as De,
} from "./chunk-5656KEAO.js";
import "./chunk-BTL6BAFX.js";
import "./chunk-3ZBBXMQ7.js";
import "./chunk-MJQWR2EV.js";
import { a as Pe } from "./chunk-IVFDRBX3.js";
import { a as be } from "./chunk-C2FWMNXD.js";
import { a as he } from "./chunk-RF7OQ2FO.js";
import { U as E } from "./chunk-YF7ATBOB.js";
import {
  C as ve,
  K as ye,
  L as k,
  d as de,
  e as ge,
  g as _e,
  h as ue,
  i as xe,
  j as fe,
  m as H,
  y as Ce,
} from "./chunk-ABQK56SH.js";
import {
  A as ne,
  Aa as p,
  Ea as c,
  Fa as re,
  G as ie,
  Ga as J,
  Ia as m,
  Ja as le,
  K as T,
  Ka as ce,
  La as pe,
  Ma as a,
  Na as l,
  Oa as d,
  Pa as $,
  Qa as U,
  Qb as j,
  Sa as F,
  Wa as S,
  Xa as r,
  da as oe,
  ea as h,
  eb as N,
  fb as g,
  gb as f,
  hb as _,
  ib as se,
  j as v,
  ja as o,
  n as b,
  q as ee,
  qb as A,
  sb as M,
  ta as ae,
  tb as I,
  vb as C,
  wb as D,
  x as P,
  xb as K,
  y as w,
  yb as me,
  z as te,
} from "./chunk-FRM3FMZU.js";
import "./chunk-J6HUAGRI.js";
import "./chunk-L7NZVLCG.js";
import "./chunk-UV7ERROY.js";
import "./chunk-DXA257HR.js";
import "./chunk-URXTW6Z4.js";
import "./chunk-2CMVC2QG.js";
import "./chunk-YHHDRASY.js";
import { Mb as Y, W as Q, ea as X } from "./chunk-23ZZ27XK.js";
import "./chunk-7NO3R5IA.js";
import "./chunk-MXKSX4NU.js";
import "./chunk-7HG7UTUA.js";
import "./chunk-3VTBTNQ3.js";
import "./chunk-7VBKHTQI.js";
import "./chunk-YYSBJNVH.js";
import "./chunk-PV7NZOQN.js";
import "./chunk-4467BSCR.js";
import { q as x } from "./chunk-KXQY476L.js";
x();
x();
var ke = (e) => ({ "background-image": e }),
  Ie = (e, n) => ({ icon: "icons/market-cap.svg", label: e, value: n }),
  He = (e, n) => ({ icon: "icons/one-day-change.svg", label: e, value: n }),
  Le = (e, n) => ({ icon: "icons/holder-count.svg", label: e, value: n }),
  Me = (e) => ({ icon: "icons/one-day-change.svg", label: "ROI", value: e }),
  Ve = (e) => ({ icon: "icons/holder-count.svg", label: "ATH ROI", value: e });
function Oe(e, n) {
  if (e & 1) {
    let t = F();
    a(0, "div", 11)(1, "div", 17),
      S("click", function () {
        P(t);
        let s = r(2);
        return w(s.openAgentChat());
      }),
      d(2, "img", 18),
      l(),
      a(3, "div", 19),
      S("click", function () {
        P(t);
        let s = r(2);
        return w(s.openAgentChat());
      }),
      g(4),
      l()();
  }
  if (e & 2) {
    let t = r().$implicit;
    o(4), _(" ", t("startConversation"), " ");
  }
}
function $e(e, n) {
  if (e & 1) {
    let t = F();
    a(0, "button", 20),
      S("click", function () {
        P(t);
        let s = r(2);
        return w(s.goToEdit());
      }),
      g(1),
      l();
  }
  if (e & 2) {
    let t = r().$implicit;
    o(), _(" ", t("edit"), " ");
  }
}
function Ue(e, n) {}
function Ne(e, n) {
  e & 1 && p(0, Ue, 0, 0, "ng-template");
}
function je(e, n) {}
function Be(e, n) {
  e & 1 && p(0, je, 0, 0, "ng-template");
}
function qe(e, n) {}
function ze(e, n) {
  e & 1 && p(0, qe, 0, 0, "ng-template");
}
function Re(e, n) {}
function We(e, n) {
  e & 1 && p(0, Re, 0, 0, "ng-template");
}
function Ze(e, n) {
  if ((e & 1 && (p(0, We, 1, 0, null, 15), C(1, "number")), e & 2)) {
    let t = n,
      i = r(2),
      s = N(2);
    c("ngTemplateOutlet", s)(
      "ngTemplateOutletContext",
      M(5, Me, i.isNumber(t) ? K(1, 2, t, "1.0-2") + "x" : "/")
    );
  }
}
function Ge(e, n) {}
function Je(e, n) {
  e & 1 && p(0, Ge, 0, 0, "ng-template");
}
function Ke(e, n) {
  if ((e & 1 && (p(0, Je, 1, 0, null, 15), C(1, "number")), e & 2)) {
    r(2);
    let t = N(2);
    c("ngTemplateOutlet", t)(
      "ngTemplateOutletContext",
      M(5, Ve, K(1, 2, n, "1.0-2") + "x")
    );
  }
}
function Qe(e, n) {
  if (
    (e & 1 &&
      (a(0, "a", 16)(1, "div", 21),
      d(2, "img", 22),
      a(3, "span", 23),
      g(4),
      l()()()),
    e & 2)
  ) {
    let t = r().$implicit;
    c("href", "https://t.me/" + n, h), o(4), _(" ", t("chatWithMe"), " ");
  }
}
function Xe(e, n) {
  if (
    (e & 1 &&
      ($(0),
      a(1, "div", 2),
      d(2, "div", 3)(3, "div", 4),
      a(4, "div", 5)(5, "div", 6),
      d(6, "img", 7),
      a(7, "div", 8)(8, "p", 9),
      g(9),
      l(),
      a(10, "p", 10),
      g(11),
      l()(),
      p(12, Oe, 5, 1, "div", 11),
      l(),
      a(13, "div", 12),
      p(14, $e, 2, 1, "button", 13),
      a(15, "div", 14),
      p(16, Ne, 1, 0, null, 15),
      C(17, "currencyShort"),
      p(18, Be, 1, 0, null, 15),
      C(19, "currencyShort"),
      p(20, ze, 1, 0, null, 15),
      C(21, "currencyShort"),
      p(22, Ze, 2, 7)(23, Ke, 2, 7),
      l(),
      p(24, Qe, 5, 2, "a", 16),
      l()()(),
      U()),
    e & 2)
  ) {
    let t,
      i,
      s,
      y,
      L = n.$implicit,
      u = r(),
      G = N(2);
    o(2),
      c("ngStyle", M(22, ke, "url(" + u.agent().coverImage + ")")),
      o(),
      c("ngStyle", M(24, ke, "url(" + u.agent().coverImage + ")")),
      o(3),
      c("src", u.agent().icon, h),
      o(3),
      _(" ", u.agent().name, " "),
      o(2),
      _(" $", u.agent().ticker, " "),
      o(),
      m((t = u.agentStore.agent()) != null && t.voiceAgentEnabled ? 12 : -1),
      o(2),
      m(u.agentStore.isOwner() ? 14 : -1),
      o(2),
      c("ngTemplateOutlet", G)(
        "ngTemplateOutletContext",
        I(26, Ie, L("marketCap"), D(17, 16, u.agent().marketCap))
      ),
      o(2),
      c("ngTemplateOutlet", G)(
        "ngTemplateOutletContext",
        I(29, He, L("liquidity"), D(19, 18, u.agent().liquidity))
      ),
      o(2),
      c("ngTemplateOutlet", G)(
        "ngTemplateOutletContext",
        I(32, Le, L("volume"), D(21, 20, u.agent().volume))
      ),
      o(2),
      m((i = u.agent().roi) ? 22 : -1, i),
      o(),
      m((s = u.agent().athRoi) ? 23 : -1, s),
      o(),
      m((y = u.agent().telegramChannelId) ? 24 : -1, y);
  }
}
function Ye(e, n) {
  if (
    (e & 1 &&
      (a(0, "div", 24),
      d(1, "img", 25),
      a(2, "div", 26)(3, "span", 27),
      g(4),
      l(),
      a(5, "span", 28),
      g(6),
      l()()()),
    e & 2)
  ) {
    let t,
      i = n.icon,
      s = n.label,
      y = n.value;
    o(),
      c("src", i, h),
      o(3),
      f(s),
      o(2),
      f((t = y) !== null && t !== void 0 ? t : "/");
  }
}
var B = class e {
  agent = T.required();
  agentStore = v(E);
  router = v(Ce);
  isNumber(n) {
    return isFinite(Number(n));
  }
  goToEdit() {
    this.router.navigate(["agent-details", this.agent().id, "edit"]);
  }
  openAgentChat() {
    this.agentStore.toggleAgentChatVisibility();
  }
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = b({
    type: e,
    selectors: [["app-agent-hero"]],
    inputs: { agent: [1, "agent"] },
    standalone: !0,
    features: [A],
    decls: 3,
    vars: 1,
    consts: [
      ["dataItem", ""],
      [4, "transloco", "translocoPrefix"],
      [
        1,
        "relative",
        "flex-col",
        "justify-center",
        "align-center",
        "overflow-hidden",
      ],
      [
        1,
        "absolute",
        "inset-0",
        "bg-cover",
        "bg-center",
        "blur-sm",
        "scale-105",
        "brightness-50",
        3,
        "ngStyle",
      ],
      [
        1,
        "h-[133px]",
        "md:h-[483px]",
        "w-full",
        "flex",
        "flex-col",
        "justify-end",
        "align-center",
        "-md:flex-col",
        "mx-auto",
        "container",
        "relative",
        "z-1",
        "bg-center",
        "bg-cover",
        3,
        "ngStyle",
      ],
      [
        1,
        "flex",
        "-md:flex-col",
        "p-4",
        "md:p-9",
        "bg-[#150317]",
        "items-center",
        "gap-7.5",
        "container",
        "mx-auto",
        "relative",
        "z-1",
      ],
      [1, "-md:w-full", "flex", "animate-slide-in-top", "md:flex-1"],
      [
        1,
        "w-[60px]",
        "h-[60px]",
        "rounded-full",
        "border-2",
        "object-cover",
        "mr-2",
        3,
        "src",
      ],
      [1, "flex", "flex-col", "justify-start"],
      [1, "font-almarena", "text-[24px]/[24px]", "text-white"],
      [
        1,
        "font-almarena",
        "text-[11px]/[12px]",
        "text-[#818180]",
        "uppercase",
        "mt-2",
      ],
      [1, "relative", "flex", "items-center", "ml-20"],
      [
        1,
        "flex-1",
        "flex",
        "items-center",
        "gap-7.5",
        "-md:w-full",
        "-md:flex-col-reverse",
        "animate-slide-in-top",
      ],
      [
        1,
        "bg-black",
        "border-white",
        "rounded-md",
        "border-2",
        "text-white",
        "uppercase",
        "px-6",
        "py-3",
        "hover:bg-white",
        "hover:text-black",
      ],
      [1, "flex", "flex-1", "flex-wrap", "gap-2", "md:gap-4", "-md:w-full"],
      [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
      [
        "target",
        "_blank",
        1,
        "rounded-[4px]",
        "h-10",
        "px-6",
        "grid",
        "place-items-center",
        "border-white",
        "border",
        3,
        "href",
      ],
      [
        1,
        "absolute",
        "left-[-22px]",
        "bg-orange",
        "rounded-full",
        "cursor-pointer",
        3,
        "click",
      ],
      [
        "src",
        "icons/start-conversation.svg",
        "alt",
        "start conversation",
        1,
        "h-10",
        "w-10",
        "p-[6px]",
      ],
      [
        1,
        "py-2",
        "px-4",
        "pl-6",
        "border-1",
        "border-orange",
        "border-[1px]",
        "rounded-lg",
        "text-[12px]",
        "text-white",
        "uppercase",
        "cursor-pointer",
        3,
        "click",
      ],
      [
        1,
        "bg-black",
        "border-white",
        "rounded-md",
        "border-2",
        "text-white",
        "uppercase",
        "px-6",
        "py-3",
        "hover:bg-white",
        "hover:text-black",
        3,
        "click",
      ],
      [1, "flex", "gap-2", "items-center"],
      ["src", "icons/telegram.svg"],
      [1, "font-dm-sans", "font-bold", "text-white", "text-xs", "uppercase"],
      [1, "flex", "items-center", "gap-2", "min-w-28"],
      [3, "src"],
      [1, "flex", "flex-col", "gap-1"],
      [1, "text-sm/[1]", "text-[#818180]"],
      [1, "text-md/[1]", "font-bold", "text-white"],
    ],
    template: function (t, i) {
      t & 1 &&
        p(0, Xe, 25, 35, "ng-container", 1)(
          1,
          Ye,
          7,
          3,
          "ng-template",
          null,
          0,
          me
        ),
        t & 2 && c("translocoPrefix", "agentDetailsPage");
    },
    dependencies: [k, Pe, ue, fe, H, _e, ve],
    encapsulation: 2,
    changeDetection: 0,
  });
};
x();
function et(e, n) {
  if ((e & 1 && (a(0, "a", 6), d(1, "app-social-icon", 7), l()), e & 2)) {
    let t = r(4);
    o(),
      c("type", "telegram")("dark", !0)(
        "res",
        t.agent().telegramPhoneNumber || ""
      );
  }
}
function tt(e, n) {
  if ((e & 1 && (a(0, "a", 6), d(1, "app-social-icon", 7), l()), e & 2)) {
    let t = r(4);
    o(), c("type", "youtube")("dark", !0)("res", t.agent().youtubeUrl || "");
  }
}
function nt(e, n) {
  if ((e & 1 && (a(0, "a", 6), d(1, "app-social-icon", 7), l()), e & 2)) {
    let t = r(4);
    o(), c("type", "web")("dark", !0)("res", t.agent().websiteUrl || "");
  }
}
function it(e, n) {
  if ((e & 1 && (a(0, "a", 6), d(1, "app-social-icon", 7), l()), e & 2)) {
    let t = r(4);
    o(), c("type", "twitter")("dark", !0)("res", t.agent().twitterUrl || "");
  }
}
function ot(e, n) {
  if (
    (e & 1 &&
      (a(0, "div", 4),
      p(1, et, 2, 3, "a", 6)(2, tt, 2, 3, "a", 6)(3, nt, 2, 3, "a", 6)(
        4,
        it,
        2,
        3,
        "a",
        6
      ),
      l()),
    e & 2)
  ) {
    let t = r(3);
    o(),
      m(t.agent().telegramPhoneNumber ? 1 : -1),
      o(),
      m(t.agent().youtubeUrl ? 2 : -1),
      o(),
      m(t.agent().websiteUrl ? 3 : -1),
      o(),
      m(t.agent().twitterUrl ? 4 : -1);
  }
}
function at(e, n) {
  e & 1 && d(0, "img", 10);
}
function rt(e, n) {
  e & 1 && d(0, "img", 11);
}
function lt(e, n) {
  if (
    (e & 1 &&
      (a(0, "div", 5)(1, "a", 8)(2, "p", 9),
      g(3),
      C(4, "address"),
      l(),
      p(5, at, 1, 0, "img", 10)(6, rt, 1, 0, "img", 11),
      l()()),
    e & 2)
  ) {
    let t = r(3);
    o(),
      c(
        "href",
        t.agent().chainType == "EVM"
          ? "https://basescan.org/address/" + t.agent().token
          : "https://solscan.io/token/" + t.agent().token,
        h
      ),
      o(2),
      _(" ", D(4, 3, t.agent().token), " "),
      o(2),
      m(t.agent().chainType == "EVM" ? 5 : 6);
  }
}
function ct(e, n) {
  if (
    (e & 1 &&
      (a(0, "div", 0)(1, "span", 2),
      g(2),
      l(),
      a(3, "div", 3),
      p(4, ot, 5, 4, "div", 4)(5, lt, 7, 5, "div", 5),
      l()()),
    e & 2)
  ) {
    let t = n.$implicit,
      i = r(2);
    o(2),
      f(t("featureList")),
      o(2),
      m(i.hasAnyFeature() ? 4 : -1),
      o(),
      m(i.agent().token ? 5 : -1);
  }
}
function pt(e, n) {
  e & 1 && p(0, ct, 6, 3, "div", 1),
    e & 2 && c("translocoPrefix", "agentDetailsPage");
}
var z = class e {
  agent = T.required();
  #e = v(ye);
  titleTranslation = this.#e.translate("agentDetailsPage.featureList");
  hasAnyFeature = j(
    () =>
      this.agent().telegramPhoneNumber ||
      this.agent().youtubeUrl ||
      this.agent().twitterUrl
  );
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = b({
    type: e,
    selectors: [["app-feature-list"]],
    inputs: { agent: [1, "agent"], titleTranslation: "titleTranslation" },
    standalone: !0,
    features: [A],
    decls: 1,
    vars: 1,
    consts: [
      [1, "flex", "flex-col", "gap-4", "animate-slide-in-left"],
      [
        "class",
        "flex flex-col gap-4 animate-slide-in-left",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [1, "font-almarena", "font-bold"],
      [1, "flex", "gap-2", "items-end"],
      [1, "flex", "gap-2"],
      [1, "container", "mx-auto", "animate-slide-in-left"],
      [
        1,
        "w-[50px]",
        "h-[50px]",
        "cursor-pointer",
        "rounded-full",
        "bg-[#EDE9DF]",
        "grid",
        "place-items-center",
        "hover:bg-[#EDE9DF]/85",
      ],
      [3, "type", "dark", "res"],
      [
        "target",
        "_blank",
        1,
        "border",
        "rounded-3xl",
        "flex",
        "p-4",
        "w-fit",
        "hover:bg-black/5",
        3,
        "href",
      ],
      [1, "font-almarena", "text-[14px]/[16px]"],
      ["src", "icons/base.svg", "alt", "", 1, "h-4", "w-4", "ml-2"],
      ["src", "icons/token_address.svg", "alt", "", 1, "h-4", "w-4", "ml-2"],
    ],
    template: function (t, i) {
      t & 1 && p(0, pt, 1, 1, "div", 0),
        t & 2 && m(i.agent().token || i.hasAnyFeature() ? 0 : -1);
    },
    dependencies: [k, be, he],
    encapsulation: 2,
    changeDetection: 0,
  });
};
x();
x();
var R = class e {
  transform(n) {
    if (!n) return "";
    let i = new Date(n).toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !0,
    });
    return (i = i.replace(/\b(am|pm)\b/gi, (s) => s.toUpperCase())), i;
  }
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵpipe = ee({ name: "customDate", type: e, pure: !0, standalone: !0 });
};
x();
var st = (e, n) => ({ "bg-black text-white": e, "bg-[#0000001a]": n });
function mt(e, n) {
  if (e & 1) {
    let t = F();
    a(0, "button", 4),
      S("click", function () {
        let s = P(t).$implicit,
          y = r(2);
        return w(y.selectPage(s));
      }),
      g(1),
      l();
  }
  if (e & 2) {
    let t = n.$implicit,
      i = r(2);
    c("ngClass", I(2, st, t === i.currentPage, t !== i.currentPage)),
      o(),
      _(" ", t === -1 ? "..." : t, " ");
  }
}
function dt(e, n) {
  if (e & 1) {
    let t = F();
    a(0, "div", 1)(1, "button", 2),
      S("click", function () {
        P(t);
        let s = r();
        return w(s.prevPage());
      }),
      g(2),
      l(),
      p(3, mt, 2, 5, "button", 3),
      a(4, "button", 2),
      S("click", function () {
        P(t);
        let s = r();
        return w(s.nextPage());
      }),
      g(5),
      l()();
  }
  if (e & 2) {
    let t = n.$implicit,
      i = r();
    o(),
      c("disabled", i.currentPage === 1),
      o(),
      _(" ", t("prev"), " "),
      o(),
      c("ngForOf", i.pages),
      o(),
      c("disabled", i.currentPage === i.totalPages()),
      o(),
      _(" ", t("next"), " ");
  }
}
var W = class e {
  showAnimation = ae(this.#e);
  totalPages = T.required();
  agentStore = v(E);
  pageChanged = new ie();
  currentPage = this.agentStore.tweets.currentPage() + 1;
  pages = [];
  generatePages() {
    (this.pages = []),
      this.totalPages() <= 4
        ? (this.pages = Array.from(
            { length: this.totalPages() },
            (n, t) => t + 1
          ))
        : this.currentPage <= 3
        ? (this.pages = [1, 2, 3, -1, this.totalPages()])
        : this.currentPage >= this.totalPages() - 2
        ? (this.pages = [
            1,
            -1,
            this.totalPages() - 2,
            this.totalPages() - 1,
            this.totalPages(),
          ])
        : (this.pages = [
            1,
            -1,
            this.currentPage - 1,
            this.currentPage,
            this.currentPage + 1,
            -1,
            this.totalPages(),
          ]);
  }
  selectPage(n) {
    if (n === -1) {
      let t = this.pages.findIndex((s) => s === -1),
        i = this.pages.findIndex((s) => s === this.currentPage);
      t < i
        ? (this.currentPage = this.pages[i] - 1)
        : t > i && (this.currentPage = t + 1);
    } else this.currentPage = n;
    this.generatePages(), this.pageChanged.emit(this.currentPage);
  }
  nextPage() {
    this.currentPage < this.totalPages() &&
      (this.currentPage++,
      this.generatePages(),
      this.pageChanged.emit(this.currentPage));
  }
  prevPage() {
    this.currentPage > 1 &&
      (this.currentPage--,
      this.generatePages(),
      this.pageChanged.emit(this.currentPage));
  }
  ngOnInit() {
    this.generatePages(),
      setTimeout(() => {
        this.showAnimation.set("false"),
          sessionStorage.setItem("animation-list-view", this.showAnimation());
      }, 3e3);
  }
  get #e() {
    return sessionStorage.getItem("animation-list-view") ?? "true";
  }
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = b({
    type: e,
    selectors: [["app-pagination"]],
    inputs: { totalPages: [1, "totalPages"] },
    outputs: { pageChanged: "pageChanged" },
    standalone: !0,
    features: [A],
    decls: 1,
    vars: 1,
    consts: [
      [
        "class",
        "pagination p-4 flex justify-center gap-2",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [1, "pagination", "p-4", "flex", "justify-center", "gap-2"],
      [
        1,
        "p-2",
        "rounded-[4px]",
        "bg-[#0000001a]",
        "place-items-center",
        "hover:bg-[#0000001a]/45",
        "cursor-pointer",
        "w-14",
        3,
        "click",
        "disabled",
      ],
      [
        "class",
        "p-2 rounded-[4px]  place-items-center hover:bg-[#0000001a]/45 cursor-pointer w-14",
        3,
        "ngClass",
        "click",
        4,
        "ngFor",
        "ngForOf",
      ],
      [
        1,
        "p-2",
        "rounded-[4px]",
        "place-items-center",
        "hover:bg-[#0000001a]/45",
        "cursor-pointer",
        "w-14",
        3,
        "click",
        "ngClass",
      ],
    ],
    template: function (t, i) {
      t & 1 && p(0, dt, 6, 5, "div", 0),
        t & 2 && c("translocoPrefix", "agentDetailsPage");
    },
    dependencies: [k, H, de, ge],
    encapsulation: 2,
    changeDetection: 0,
  });
};
function gt(e, n) {
  if (
    (e & 1 &&
      (a(0, "div", 5)(1, "div", 6)(2, "div", 7),
      d(3, "img", 8),
      a(4, "span", 9),
      g(5),
      l(),
      a(6, "div", 10),
      g(7),
      C(8, "customDate"),
      l()(),
      a(9, "div", 11)(10, "span", 12),
      g(11),
      l()()(),
      a(12, "div", 13),
      g(13),
      l()()),
    e & 2)
  ) {
    let t = n.$implicit,
      i = n.$index,
      s = r(2);
    re("animation-delay", i * 0.1 + "s")(
      "background",
      t.id == 2002 ? "#CCD6D3" : null
    ),
      J("animate-slide-in-left", s.showAnimation),
      o(3),
      c("src", t.profileImageUrl, h),
      o(2),
      f(s.agent().name),
      o(2),
      f(t.timestamp ? D(8, 11, t.timestamp) : "/"),
      o(4),
      _("#", t.tweetId, ""),
      o(2),
      _(" ", t.content, " ");
  }
}
function _t(e, n) {
  if (e & 1) {
    let t = F();
    a(0, "app-pagination", 14),
      S("pageChanged", function (s) {
        P(t);
        let y = r(2);
        return w(y.onPageChange(s));
      }),
      l();
  }
  if (e & 2) {
    let t = r(2);
    c("totalPages", t.totalPages());
  }
}
function ut(e, n) {
  if (
    (e & 1 &&
      (a(0, "div", 1)(1, "div", 2),
      g(2),
      l(),
      ce(3, gt, 14, 13, "div", 3, le),
      p(5, _t, 1, 1, "app-pagination", 4),
      l()),
    e & 2)
  ) {
    let t = n.$implicit,
      i = r();
    J("animate-slide-in-left", i.showAnimation),
      o(2),
      f(t("tweets")),
      o(),
      pe(i.tweets()),
      o(2),
      m(i.totalPages() > 1 ? 5 : -1);
  }
}
var Z = class e {
  tweets = T([]);
  agent = T.required();
  totalPages = T.required();
  agentStore = v(E);
  showAnimation = !0;
  onPageChange(n) {
    (this.showAnimation = !1), this.agentStore.fetchTweets(n - 1);
  }
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = b({
    type: e,
    selectors: [["app-forum"]],
    inputs: {
      tweets: [1, "tweets"],
      agent: [1, "agent"],
      totalPages: [1, "totalPages"],
    },
    standalone: !0,
    features: [A],
    decls: 1,
    vars: 1,
    consts: [
      [
        "class",
        "flex flex-col -md:p4",
        3,
        "animate-slide-in-left",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [1, "flex", "flex-col", "-md:p4"],
      [1, "font-bold", "text-[16px]"],
      [
        1,
        "mt-1",
        "md:mt-3",
        "p-4",
        "flex",
        "flex-col",
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
      ],
      [3, "totalPages"],
      [
        1,
        "mt-1",
        "md:mt-3",
        "p-4",
        "flex",
        "flex-col",
        "items-center",
        "gap-2",
        "md:gap-4",
        "even:bg-[#F5F5F5]",
        "font-almarena",
        "text-lg/[1]",
        "text-[#404040]",
        "rounded-lg",
      ],
      [
        1,
        "flex",
        "items-center",
        "gap-4",
        "w-full",
        "justify-between",
        "items-center",
      ],
      [1, "flex", "items-center", "gap-2"],
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
        "src",
      ],
      [1, "-md:text-[14px]", "text-[18px]", "font-bold"],
      [1, "text-[11px]", "text-black/50"],
      [1, "flex", "gap-2", "items-center"],
      [1, "text-[12px]/[1]", "text-black/50"],
      [1, "w-full", "text-[14px]/[24px]", "text-black/50"],
      [3, "pageChanged", "totalPages"],
    ],
    template: function (t, i) {
      t & 1 && p(0, ut, 6, 4, "div", 0),
        t & 2 && c("translocoPrefix", "agentDetailsPage");
    },
    dependencies: [R, W, k],
    encapsulation: 2,
    changeDetection: 0,
  });
};
function xt(e, n) {
  if ((e & 1 && (a(0, "p", 4), g(1), l()), e & 2)) {
    let t = r(2).$implicit;
    o(), _(" ", t("cautionMessage"), " ");
  }
}
function ft(e, n) {
  e & 1 && d(0, "app-agent-progress-map");
}
function Ct(e, n) {
  if ((e & 1 && (a(0, "span", 7), g(1), l()), e & 2)) {
    let t = r(2).$implicit;
    o(), se(" ", t("launchIn"), " ", n, " ");
  }
}
function vt(e, n) {
  if ((e & 1 && d(0, "app-token-chart", 9), e & 2)) {
    let t = r();
    c("token", t.token)("chainType", t.chainType);
  }
}
function ht(e, n) {
  if ((e & 1 && d(0, "app-forum", 10), e & 2)) {
    let t = r(),
      i = r(2);
    c("tweets", i.agentStore.tweets().posts)(
      "totalPages",
      i.agentStore.tweets().totalPages
    )("agent", t);
  }
}
function yt(e, n) {
  if ((e & 1 && d(0, "img", 11), e & 2)) {
    let t = r();
    c("src", t.mind, h);
  }
}
function bt(e, n) {
  if ((e & 1 && d(0, "video", 12), e & 2)) {
    let t = r();
    c("src", t.mind, h);
  }
}
function Pt(e, n) {
  if ((e & 1 && d(0, "app-holder-distribution", 16), e & 2)) {
    let t = r(2),
      i = r(2);
    c("agent", t)("chainType", t.chainType)("holders", i.agentStore.holders())(
      "classList",
      "-md:hidden"
    );
  }
}
function wt(e, n) {
  if (
    (e & 1 &&
      (a(0, "div", 13),
      d(1, "app-swap-widget", 9),
      p(2, Pt, 1, 4, "app-holder-distribution", 16),
      l()),
    e & 2)
  ) {
    let t = r();
    o(),
      c("token", t.token)("chainType", t.chainType),
      o(),
      m(t.id !== 36 ? 2 : -1);
  }
}
function Tt(e, n) {
  e & 1 && (a(0, "div", 14), d(1, "img", 17), l());
}
function St(e, n) {
  if ((e & 1 && d(0, "app-holder-distribution", 16), e & 2)) {
    let t = r(2),
      i = r(2);
    c("agent", t)("chainType", t.chainType)("holders", i.agentStore.holders())(
      "classList",
      "md:hidden"
    );
  }
}
function At(e, n) {
  if (
    (e & 1 &&
      (a(0, "div", 15), p(1, St, 1, 4, "app-holder-distribution", 16), l()),
    e & 2)
  ) {
    let t = r();
    o(), m(t.id !== 36 ? 1 : -1);
  }
}
function Dt(e, n) {
  e & 1 && d(0, "app-agent-chat");
}
function kt(e, n) {
  if (
    (e & 1 &&
      (d(0, "app-agent-hero", 3),
      p(1, xt, 2, 1, "p", 4),
      a(2, "div", 5)(3, "div", 6),
      p(4, ft, 1, 0, "app-agent-progress-map"),
      d(5, "app-feature-list", 3),
      p(6, Ct, 2, 2, "span", 7),
      C(7, "async"),
      d(8, "div", 8),
      p(9, vt, 1, 2, "app-token-chart", 9)(10, ht, 1, 3, "app-forum", 10)(
        11,
        yt,
        1,
        1,
        "img",
        11
      )(12, bt, 1, 1, "video", 12),
      l(),
      p(13, wt, 3, 3, "div", 13)(14, Tt, 2, 0, "div", 14)(
        15,
        At,
        2,
        1,
        "div",
        15
      ),
      l(),
      p(16, Dt, 1, 0, "app-agent-chat")),
    e & 2)
  ) {
    let t,
      i = n,
      s = r(2);
    c("agent", i),
      o(),
      m(s.agentStore.hasLockedLiquidity() ? -1 : 1),
      o(3),
      m(s.agentStore.isOwner() ? 4 : -1),
      o(),
      c("agent", i),
      o(),
      m((t = s.showCountdown() && D(7, 12, s.countdown$)) ? 6 : -1, t),
      o(2),
      c("innerHTML", i.description, oe),
      o(),
      m(i.token && i.txHash ? 9 : -1),
      o(),
      m(s.agentStore.tweets().posts.length && i ? 10 : -1),
      o(),
      m(i.id == -3 ? 11 : i.id < 0 ? 12 : -1),
      o(2),
      m(i.token && i.txHash ? 13 : 14),
      o(2),
      m(i.token && i.txHash ? 15 : -1),
      o(),
      m(s.agentStore.agentVoiceChatOpen() ? 16 : -1);
  }
}
function Ft(e, n) {
  if (
    (e & 1 &&
      (a(0, "div", 1),
      te(),
      a(1, "svg", 18),
      d(2, "path", 19)(3, "path", 20),
      l(),
      ne(),
      a(4, "span", 21),
      g(5),
      l()()),
    e & 2)
  ) {
    let t = r().$implicit;
    o(5), f(t("loading"));
  }
}
function Et(e, n) {
  if ((e & 1 && (a(0, "div", 2)(1, "span", 22), g(2), l()()), e & 2)) {
    let t = r().$implicit;
    o(2), f(t("errorFetchingAgent"));
  }
}
function It(e, n) {
  if (
    (e & 1 &&
      ($(0),
      p(1, kt, 17, 14)(2, Ft, 6, 1, "div", 1)(3, Et, 3, 1, "div", 2),
      U()),
    e & 2)
  ) {
    let t,
      i = r();
    o(),
      m(
        (t = i.agentStore.agent())
          ? 1
          : i.agentStore.loading()
          ? 2
          : i.agentStore.error()
          ? 3
          : -1,
        t
      );
  }
}
var Ee = class e {
  agentStore = v(E);
  showCountdown = j(() => this.agentStore.agent()?.id === 55);
  countdown$ = X(1e3).pipe(
    Y(null),
    Q(() => {
      let i = 17356464e5 - Date.now();
      if (i < 0) return null;
      {
        let s = Math.floor(i / 36e5)
            .toString()
            .padStart(2, "0"),
          y = Math.floor((i % 36e5) / 6e4)
            .toString()
            .padStart(2, "0"),
          L = Math.floor((i % 6e4) / 1e3)
            .toString()
            .padStart(2, "0");
        return `${s}:${y}:${L}`;
      }
    })
  );
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = b({
    type: e,
    selectors: [["app-agent-details-page"]],
    standalone: !0,
    features: [A],
    decls: 1,
    vars: 1,
    consts: [
      [4, "transloco", "translocoPrefix"],
      [
        "role",
        "status",
        1,
        "flex",
        "justify-center",
        "items-center",
        "self-center",
        "mt-14",
        "text-center",
      ],
      [1, "grid", "place-items-center", "py-20"],
      [3, "agent"],
      [
        1,
        "font-almarena",
        "text-[18px]/[70px]",
        "container",
        "mx-auto",
        "animate-slide-in-left",
        "-md:p-4",
      ],
      [
        1,
        "py-10",
        "flex",
        "justify-between",
        "-lg:flex-col",
        "gap-7.5",
        "container",
        "mx-auto",
        "-md:p-4",
        "overflow-x-clip",
      ],
      [1, "flex-1", "flex", "flex-col", "gap-7.5", "overflow-x-clip"],
      [1, "font-almarena", "text-2xl", "text-black", "animate-slide-in-left"],
      [
        1,
        "font-almarena",
        "text-lg/[24px]",
        "text-black/70",
        "animate-slide-in-left",
        3,
        "innerHTML",
      ],
      [3, "token", "chainType"],
      [3, "tweets", "totalPages", "agent"],
      [3, "src"],
      ["controls", "", "autoplay", "", 3, "src"],
      [
        1,
        "order-first",
        "md:order-last",
        "flex",
        "flex-col",
        "gap-7.5",
        "lg:basis-[458px]",
        "max-w-[458px]",
        "animate-slide-in-right",
      ],
      [1, "overflow-x-clip"],
      [
        1,
        "flex",
        "flex-col",
        "gap-7.5",
        "lg:basis-[458px]",
        "max-w-[458px]",
        "animate-slide-in-right",
        "md:hidden",
      ],
      [3, "agent", "chainType", "holders", "classList"],
      ["src", "images/agent-details-banner.png", 1, "animate-slide-in-right"],
      [
        "aria-hidden",
        "true",
        "viewBox",
        "0 0 100 101",
        "fill",
        "none",
        "xmlns",
        "http://www.w3.org/2000/svg",
        1,
        "inline",
        "w-10",
        "h-10",
        "text-gray-200",
        "animate-spin",
        "dark:text-gray-600",
        "fill-red",
      ],
      [
        "d",
        "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
        "fill",
        "currentColor",
      ],
      [
        "d",
        "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        "fill",
        "currentFill",
      ],
      [1, "sr-only"],
      [1, "text-red"],
    ],
    template: function (t, i) {
      t & 1 && p(0, It, 4, 1, "ng-container", 0),
        t & 2 && c("translocoPrefix", "agentDetailsPage");
    },
    dependencies: [H, xe, k, B, we, z, Te, Se, Ae, Z, De],
    encapsulation: 2,
    changeDetection: 0,
  });
};
export { Ee as AgentDetailsPageComponent };
