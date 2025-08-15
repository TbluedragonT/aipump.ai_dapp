import {
  a as re,
  b as le,
  c as pe,
  d as me,
  e as ce,
} from "./chunk-5656KEAO.js";
import "./chunk-BTL6BAFX.js";
import "./chunk-3ZBBXMQ7.js";
import "./chunk-MJQWR2EV.js";
import { a as ae } from "./chunk-IVFDRBX3.js";
import { a as oe } from "./chunk-RF7OQ2FO.js";
import { U as D } from "./chunk-YF7ATBOB.js";
import {
  C as ie,
  L as I,
  d as Q,
  g as X,
  h as Y,
  i as ee,
  j as te,
  m as w,
  y as ne,
} from "./chunk-ABQK56SH.js";
import {
  A as G,
  Aa as l,
  Ea as m,
  Ia as d,
  K as M,
  Ma as r,
  Na as p,
  Oa as s,
  Pa as O,
  Qa as V,
  Qb as N,
  Sa as H,
  Wa as P,
  Xa as c,
  da as J,
  ea as f,
  eb as L,
  fb as _,
  gb as B,
  hb as u,
  j as v,
  ja as a,
  n as b,
  qb as k,
  sb as F,
  tb as S,
  vb as x,
  wb as C,
  x as A,
  xb as U,
  y as h,
  yb as K,
  z as Z,
} from "./chunk-FRM3FMZU.js";
import "./chunk-J6HUAGRI.js";
import "./chunk-L7NZVLCG.js";
import "./chunk-UV7ERROY.js";
import "./chunk-DXA257HR.js";
import "./chunk-URXTW6Z4.js";
import "./chunk-2CMVC2QG.js";
import "./chunk-YHHDRASY.js";
import { Mb as W, W as R, ea as q } from "./chunk-23ZZ27XK.js";
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
var se = (e, n) => ({
  "bg-orange": e,
  "hover:bg-orange hover:bg-opacity-50": n,
});
function Ce(e, n) {
  e & 1 && s(0, "img", 11);
}
function ve(e, n) {
  e & 1 && s(0, "img", 12);
}
function Ae(e, n) {
  if (
    (e & 1 &&
      (r(0, "div", 8)(1, "a", 9)(2, "p", 10),
      _(3),
      x(4, "address"),
      p(),
      l(5, Ce, 1, 0, "img", 11)(6, ve, 1, 0, "img", 12),
      p()()),
    e & 2)
  ) {
    let t = c(3);
    a(),
      m(
        "href",
        t.agent().chainType == "EVM"
          ? "https://basescan.org/address/" + t.agent().token
          : "https://solscan.io/token/" + t.agent().token,
        f
      ),
      a(2),
      u(" ", C(4, 3, t.agent().token), " "),
      a(2),
      d(t.agent().chainType == "EVM" ? 5 : 6);
  }
}
function he(e, n) {
  if (e & 1) {
    let t = H();
    r(0, "div", 0)(1, "div", 2)(2, "button", 3),
      P("click", function () {
        A(t);
        let o = c(2);
        return h(o.setActive(1));
      }),
      r(3, "span", 4),
      s(4, "img", 5),
      p(),
      _(5, " Base "),
      p(),
      r(6, "button", 3),
      P("click", function () {
        A(t);
        let o = c(2);
        return h(o.setActive(0));
      }),
      r(7, "span", 4),
      s(8, "img", 6),
      p(),
      _(9, " Solana "),
      p()(),
      r(10, "div", 7),
      l(11, Ae, 7, 5, "div", 8),
      p()();
  }
  if (e & 2) {
    let t = c(2);
    a(2),
      m("ngClass", S(3, se, t.active === 1, t.active === 0)),
      a(4),
      m("ngClass", S(6, se, t.active === 0, t.active === 1)),
      a(5),
      d(t.agent().token ? 11 : -1);
  }
}
function Pe(e, n) {
  e & 1 && l(0, he, 12, 9, "div", 1),
    e & 2 && m("translocoPrefix", "agentDetailsPage");
}
var $ = class e {
  agent = M.required();
  agentStore = v(D);
  active = this.agentStore.aiPumpAgent()?.selectedTokenIndex;
  hasAnyFeature = N(
    () => this.agent().telegramPhoneNumber || this.agent().twitterUrl
  );
  setActive(n) {
    this.active !== n &&
      ((this.active = n),
      (this.agentStore.aiPumpAgent().selectedTokenIndex = n),
      this.agentStore.fetchHoldersAiPump());
  }
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = b({
    type: e,
    selectors: [["app-ai-pump-feature-list"]],
    inputs: { agent: [1, "agent"] },
    standalone: !0,
    features: [k],
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
      [1, "flex", "gap-2"],
      [
        1,
        "flex",
        "items-center",
        "px-5",
        "py-3",
        "text-black",
        "rounded-lg",
        "transition-all",
        3,
        "click",
        "ngClass",
      ],
      [1, "mr-2"],
      ["src", "icons/base.svg", "alt", "Icon", 1, "h-5", "w-5", "mr-2"],
      ["src", "icons/solana.svg", "alt", "Icon", 1, "h-5", "w-5", "mr-2"],
      [1, "flex", "gap-2", "items-end"],
      [1, "container", "mx-auto", "animate-slide-in-left"],
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
      if ((t & 1 && l(0, Pe, 1, 1, "div", 0), t & 2)) {
        let o;
        d(
          (i.agentStore.aiPumpAgent() &&
            ((o = i.agentStore.aiPumpAgent()) == null
              ? null
              : o.selectedTokenIndex) != null &&
            ((o = i.agentStore.aiPumpAgent()) == null || o.tokens == null
              ? null
              : o.tokens[
                  (o =
                    (o = i.agentStore.aiPumpAgent()) == null
                      ? null
                      : o.selectedTokenIndex) !== null && o !== void 0
                    ? o
                    : 0
                ]) != null) ||
            i.hasAnyFeature()
            ? 0
            : -1
        );
      }
    },
    dependencies: [I, oe, w, Q],
    encapsulation: 2,
    changeDetection: 0,
  });
};
y();
var xe = (e) => ({ "background-image": e }),
  Se = (e, n) => ({ icon: "icons/market-cap.svg", label: e, value: n }),
  Te = (e, n) => ({ icon: "icons/one-day-change.svg", label: e, value: n }),
  ye = (e, n) => ({ icon: "icons/holder-count.svg", label: e, value: n }),
  be = (e) => ({ icon: "icons/one-day-change.svg", label: "ROI", value: e }),
  ke = (e) => ({ icon: "icons/holder-count.svg", label: "ATH ROI", value: e });
function we(e, n) {
  if (e & 1) {
    let t = H();
    r(0, "div", 11)(1, "div", 17),
      P("click", function () {
        A(t);
        let o = c(2);
        return h(o.openAgentChat());
      }),
      s(2, "img", 18),
      p(),
      r(3, "div", 19),
      P("click", function () {
        A(t);
        let o = c(2);
        return h(o.openAgentChat());
      }),
      _(4),
      p()();
  }
  if (e & 2) {
    let t = c().$implicit;
    a(4), u(" ", t("startConversation"), " ");
  }
}
function Ie(e, n) {
  if (e & 1) {
    let t = H();
    r(0, "button", 20),
      P("click", function () {
        A(t);
        let o = c(2);
        return h(o.goToEdit());
      }),
      _(1),
      p();
  }
  if (e & 2) {
    let t = c().$implicit;
    a(), u(" ", t("edit"), " ");
  }
}
function De(e, n) {}
function Ee(e, n) {
  e & 1 && l(0, De, 0, 0, "ng-template");
}
function He(e, n) {}
function Fe(e, n) {
  e & 1 && l(0, He, 0, 0, "ng-template");
}
function Me(e, n) {}
function Oe(e, n) {
  e & 1 && l(0, Me, 0, 0, "ng-template");
}
function Ve(e, n) {}
function Le(e, n) {
  e & 1 && l(0, Ve, 0, 0, "ng-template");
}
function Ne(e, n) {
  if ((e & 1 && (l(0, Le, 1, 0, null, 15), x(1, "number")), e & 2)) {
    let t = n,
      i = c(2),
      o = L(2);
    m("ngTemplateOutlet", o)(
      "ngTemplateOutletContext",
      F(5, be, i.isNumber(t) ? U(1, 2, t, "1.0-2") + "x" : "/")
    );
  }
}
function $e(e, n) {}
function je(e, n) {
  e & 1 && l(0, $e, 0, 0, "ng-template");
}
function ze(e, n) {
  if ((e & 1 && (l(0, je, 1, 0, null, 15), x(1, "number")), e & 2)) {
    c(2);
    let t = L(2);
    m("ngTemplateOutlet", t)(
      "ngTemplateOutletContext",
      F(5, ke, U(1, 2, n, "1.0-2") + "x")
    );
  }
}
function Be(e, n) {
  if (
    (e & 1 &&
      (r(0, "a", 16)(1, "div", 21),
      s(2, "img", 22),
      r(3, "span", 23),
      _(4),
      p()()()),
    e & 2)
  ) {
    let t = c().$implicit;
    m("href", "https://t.me/" + n, f), a(4), u(" ", t("chatWithMe"), " ");
  }
}
function Ue(e, n) {
  if (
    (e & 1 &&
      (O(0),
      r(1, "div", 2),
      s(2, "div", 3)(3, "div", 4),
      r(4, "div", 5)(5, "div", 6),
      s(6, "img", 7),
      r(7, "div", 8)(8, "p", 9),
      _(9),
      p(),
      r(10, "p", 10),
      _(11),
      p()(),
      l(12, we, 5, 1, "div", 11),
      p(),
      r(13, "div", 12),
      l(14, Ie, 2, 1, "button", 13),
      r(15, "div", 14),
      l(16, Ee, 1, 0, null, 15),
      x(17, "currencyShort"),
      l(18, Fe, 1, 0, null, 15),
      x(19, "currencyShort"),
      l(20, Oe, 1, 0, null, 15),
      x(21, "currencyShort"),
      l(22, Ne, 2, 7)(23, ze, 2, 7),
      p(),
      l(24, Be, 5, 2, "a", 16),
      p()()(),
      V()),
    e & 2)
  ) {
    let t,
      i,
      o,
      T,
      E = n.$implicit,
      g = c(),
      z = L(2);
    a(2),
      m("ngStyle", F(22, xe, "url(" + g.agent().coverImage + ")")),
      a(),
      m("ngStyle", F(24, xe, "url(" + g.agent().coverImage + ")")),
      a(3),
      m("src", g.agent().icon, f),
      a(3),
      u(" ", g.agent().name, " "),
      a(2),
      u(" $", g.agent().ticker, " "),
      a(),
      d((t = g.agentStore.aiPumpAgent()) != null && t.voiceAgentId ? 12 : -1),
      a(2),
      d(g.agentStore.isOwner() ? 14 : -1),
      a(2),
      m("ngTemplateOutlet", z)(
        "ngTemplateOutletContext",
        S(
          26,
          Se,
          E("marketCap"),
          C(
            17,
            16,
            g.agent().tokens[g.agentStore.aiPumpAgent().selectedTokenIndex]
              .marketCap
          )
        )
      ),
      a(2),
      m("ngTemplateOutlet", z)(
        "ngTemplateOutletContext",
        S(
          29,
          Te,
          E("liquidity"),
          C(
            19,
            18,
            g.agent().tokens[g.agentStore.aiPumpAgent().selectedTokenIndex]
              .liquidity
          )
        )
      ),
      a(2),
      m("ngTemplateOutlet", z)(
        "ngTemplateOutletContext",
        S(
          32,
          ye,
          E("volume"),
          C(
            21,
            20,
            g.agent().tokens[g.agentStore.aiPumpAgent().selectedTokenIndex]
              .volume
          )
        )
      ),
      a(2),
      d((i = g.agent().roi) ? 22 : -1, i),
      a(),
      d((o = g.agent().athRoi) ? 23 : -1, o),
      a(),
      d((T = g.agent().telegramChannelId) ? 24 : -1, T);
  }
}
function Re(e, n) {
  if (
    (e & 1 &&
      (r(0, "div", 24),
      s(1, "img", 25),
      r(2, "div", 26)(3, "span", 27),
      _(4),
      p(),
      r(5, "span", 28),
      _(6),
      p()()()),
    e & 2)
  ) {
    let t,
      i = n.icon,
      o = n.label,
      T = n.value;
    a(),
      m("src", i, f),
      a(3),
      B(o),
      a(2),
      B((t = T) !== null && t !== void 0 ? t : "/");
  }
}
var j = class e {
  agent = M.required();
  agentStore = v(D);
  router = v(ne);
  isNumber(n) {
    return isFinite(Number(n));
  }
  goToEdit() {
    this.router.navigate(["agent-details", this.agent().id, "edit"]);
  }
  openAgentChat() {
    this.agentStore.toggleAgentChatVisibility("aiPump");
  }
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = b({
    type: e,
    selectors: [["app-ai-pump-agent-hero"]],
    inputs: { agent: [1, "agent"] },
    standalone: !0,
    features: [k],
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
        l(0, Ue, 25, 35, "ng-container", 1)(
          1,
          Re,
          7,
          3,
          "ng-template",
          null,
          0,
          K
        ),
        t & 2 && m("translocoPrefix", "agentDetailsPage");
    },
    dependencies: [I, ae, Y, te, w, X, ie],
    encapsulation: 2,
    changeDetection: 0,
  });
};
function qe(e, n) {
  e & 1 && s(0, "app-agent-progress-map");
}
function We(e, n) {
  e & 1 && (r(0, "span", 7), _(1), p()),
    e & 2 && (a(), u(" Launch in: ", n, " "));
}
function Ze(e, n) {
  if ((e & 1 && s(0, "app-token-chart", 8), e & 2)) {
    let t = c(),
      i = c(2);
    m("token", t.tokens[i.agentStore.aiPumpAgent().selectedTokenIndex].address)(
      "chainType",
      i.agentStore.aiPumpAgent().selectedTokenIndex === 0 ? "SOLANA" : "EVM"
    );
  }
}
function Ge(e, n) {
  if ((e & 1 && s(0, "img", 9), e & 2)) {
    let t = c();
    m("src", t.mind, f);
  }
}
function Je(e, n) {
  if ((e & 1 && s(0, "video", 10), e & 2)) {
    let t = c();
    m("src", t.mind, f);
  }
}
function Ke(e, n) {
  if ((e & 1 && (r(0, "div", 11), s(1, "app-swap-widget", 8), p()), e & 2)) {
    let t = c(),
      i = c(2);
    a(),
      m(
        "token",
        t.tokens[i.agentStore.aiPumpAgent().selectedTokenIndex].address
      )(
        "chainType",
        i.agentStore.aiPumpAgent().tokens[
          i.agentStore.aiPumpAgent().selectedTokenIndex
        ].chainId === 8453
          ? "EVM"
          : "SOLANA"
      );
  }
}
function Qe(e, n) {
  e & 1 && (r(0, "div", 12), s(1, "img", 14), p());
}
function Xe(e, n) {
  if ((e & 1 && s(0, "app-holder-distribution", 16), e & 2)) {
    let t = c(2),
      i = c(2);
    m("agent", t)(
      "chainType",
      i.agentStore.aiPumpAgent().selectedTokenIndex === 0 ? "EVM" : "SOLANA"
    )("holders", i.agentStore.holders());
  }
}
function Ye(e, n) {
  if (
    (e & 1 &&
      (r(0, "div", 13)(1, "div", 15),
      l(2, Xe, 1, 3, "app-holder-distribution", 16),
      p()()),
    e & 2)
  ) {
    let t = c();
    a(2), d(t.id !== 36 ? 2 : -1);
  }
}
function et(e, n) {
  e & 1 && s(0, "app-agent-chat");
}
function tt(e, n) {
  if (
    (e & 1 &&
      (s(0, "app-ai-pump-agent-hero", 3)(1, "div", 4),
      r(2, "div", 5)(3, "div", 6),
      l(4, qe, 1, 0, "app-agent-progress-map"),
      s(5, "app-ai-pump-feature-list", 3),
      l(6, We, 2, 1, "span", 7),
      x(7, "async"),
      l(8, Ze, 1, 2, "app-token-chart", 8)(9, Ge, 1, 1, "img", 9)(
        10,
        Je,
        1,
        1,
        "video",
        10
      ),
      p(),
      l(11, Ke, 2, 2, "div", 11)(12, Qe, 2, 0, "div", 12),
      p(),
      l(13, Ye, 3, 1, "div", 13)(14, et, 1, 0, "app-agent-chat")),
    e & 2)
  ) {
    let t,
      i = n,
      o = c(2);
    m("agent", i),
      a(),
      m("innerHTML", i.description, J),
      a(3),
      d(o.agentStore.isOwner() ? 4 : -1),
      a(),
      m("agent", i),
      a(),
      d((t = o.showCountdown() && C(7, 10, o.countdown$)) ? 6 : -1, t),
      a(2),
      d(
        i.tokens[o.agentStore.aiPumpAgent().selectedTokenIndex] &&
          i.tokens[o.agentStore.aiPumpAgent().selectedTokenIndex].txHash
          ? 8
          : -1
      ),
      a(),
      d(i.id == -3 ? 9 : i.id < 0 ? 10 : -1),
      a(2),
      d(
        i.tokens[o.agentStore.aiPumpAgent().selectedTokenIndex] &&
          i.tokens[o.agentStore.aiPumpAgent().selectedTokenIndex].txHash
          ? 11
          : 12
      ),
      a(2),
      d(
        o.agentStore.aiPumpAgent().tokens[
          o.agentStore.aiPumpAgent().selectedTokenIndex
        ] &&
          o.agentStore.aiPumpAgent().tokens[
            o.agentStore.aiPumpAgent().selectedTokenIndex
          ].txHash
          ? 13
          : -1
      ),
      a(),
      d(o.agentStore.agentVoiceChatOpen() ? 14 : -1);
  }
}
function nt(e, n) {
  e & 1 &&
    (r(0, "div", 1),
    Z(),
    r(1, "svg", 17),
    s(2, "path", 18)(3, "path", 19),
    p(),
    G(),
    r(4, "span", 20),
    _(5, "Loading..."),
    p()());
}
function it(e, n) {
  e & 1 &&
    (r(0, "div", 2)(1, "span", 21),
    _(2, " There was an error fetching the agent "),
    p()());
}
function ot(e, n) {
  if (
    (e & 1 &&
      (O(0),
      l(1, tt, 15, 12)(2, nt, 6, 0, "div", 1)(3, it, 3, 0, "div", 2),
      V()),
    e & 2)
  ) {
    let t,
      i = c();
    a(),
      d(
        (t = i.agentStore.aiPumpAgent())
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
var fe = class e {
  agentStore = v(D);
  showCountdown = N(() => this.agentStore.agent()?.id === 55);
  countdown$ = q(1e3).pipe(
    W(null),
    R(() => {
      let i = 17356464e5 - Date.now();
      if (i < 0) return null;
      {
        let o = Math.floor(i / 36e5)
            .toString()
            .padStart(2, "0"),
          T = Math.floor((i % 36e5) / 6e4)
            .toString()
            .padStart(2, "0"),
          E = Math.floor((i % 6e4) / 1e3)
            .toString()
            .padStart(2, "0");
        return `${o}:${T}:${E}`;
      }
    })
  );
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = b({
    type: e,
    selectors: [["ai-pump-details-page"]],
    standalone: !0,
    features: [k],
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
        "container",
        "pt-10",
        "mx-auto",
        "font-almarena",
        "text-lg/[24px]",
        "text-black/70",
        "animate-slide-in-left",
        "-md:p-4",
        3,
        "innerHTML",
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
      [1, "flex-1", "flex", "flex-col", "gap-7.5"],
      [1, "font-almarena", "text-2xl", "text-black", "animate-slide-in-left"],
      [3, "token", "chainType"],
      [3, "src"],
      ["controls", "", "autoplay", "", 3, "src"],
      [
        1,
        "flex",
        "flex-col",
        "gap-7.5",
        "lg:basis-[458px]",
        "max-w-[458px]",
        "animate-slide-in-right",
      ],
      [1, "overflow-x-clip"],
      [1, "container", "mx-auto", "pb-10", "-md:px-4", "overflow-x-clip"],
      ["src", "images/agent-details-banner.png", 1, "animate-slide-in-right"],
      [1, "flex", "flex-col", "gap-7.5", "animate-slide-in-right"],
      [3, "agent", "chainType", "holders"],
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
      t & 1 && l(0, ot, 4, 1, "ng-container", 0),
        t & 2 && m("translocoPrefix", "agentDetailsPage");
    },
    dependencies: [w, ee, I, j, re, $, le, pe, me, ce],
    encapsulation: 2,
    changeDetection: 0,
  });
};
export { fe as AiPumpDetailsPageComponent };
