import { a as Y } from "./chunk-BTL6BAFX.js";
import {
  Q as J,
  R as K,
  U as X,
  a as G,
  b as L,
  d as w,
  g as U,
  j as S,
  l as q,
  m as B,
  n as H,
  p as x,
} from "./chunk-YF7ATBOB.js";
import {
  L as Z,
  d as k,
  e as F,
  f as Q,
  m as g,
  xa as W,
} from "./chunk-ABQK56SH.js";
import {
  $a as N,
  Aa as b,
  Ea as a,
  Ga as V,
  Ma as r,
  Na as l,
  Oa as h,
  Sa as A,
  Wa as y,
  Xa as p,
  ab as j,
  bb as O,
  d as P,
  fb as d,
  gb as $,
  hb as m,
  j as _,
  ja as i,
  n as u,
  qb as f,
  sb as z,
  x as v,
  y as C,
} from "./chunk-FRM3FMZU.js";
import { Nb as R, W as M } from "./chunk-23ZZ27XK.js";
import { q as s } from "./chunk-KXQY476L.js";
s();
var ee = class t {
  control;
  label;
  placeholder;
  get invalid() {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = u({
    type: t,
    selectors: [["app-input-textarea"]],
    inputs: { control: "control", label: "label", placeholder: "placeholder" },
    standalone: !0,
    features: [f],
    decls: 5,
    vars: 5,
    consts: [
      [1, "font-dm-sans", "text-[14px]/[16px]", "font-bold", "mb-4"],
      [
        "id",
        "text-area",
        "rows",
        "5",
        1,
        "focus:outline-none",
        "bg-white",
        "border",
        "border-gray-300",
        "rounded-[4px]",
        "block",
        "w-full",
        "px-3",
        "py-4",
        3,
        "formControl",
        "placeholder",
        "ngClass",
      ],
      [3, "control"],
    ],
    template: function (e, n) {
      e & 1 &&
        (r(0, "div")(1, "label", 0),
        d(2),
        l(),
        h(3, "textarea", 1)(4, "app-input-error", 2),
        l()),
        e & 2 &&
          (i(2),
          m(" ", n.label, ""),
          i(),
          a("formControl", n.control)("placeholder", n.placeholder)(
            "ngClass",
            n.invalid ? "border-red" : "border-gray-300"
          ),
          i(),
          a("control", n.control));
    },
    dependencies: [x, L, w, S, Y, g, k],
    encapsulation: 2,
    changeDetection: 0,
  });
};
s();
var oe = class t {
  #e = _(W);
  uploadFile(o) {
    return this.#e.s3.getPresignedUrl().pipe(
      R(({ url: e }) =>
        fetch(e, {
          body: o,
          method: "PUT",
          headers: {
            "Content-Type": o.type,
            "Content-Disposition": `attachment; filename="${o.name}"`,
          },
        })
      ),
      M((e) => e.url.split("?")[0])
    );
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵprov = P({ token: t, factory: t.ɵfac, providedIn: "root" });
};
s();
function De() {
  return (t) => {
    let o = t.value;
    return o ? (/^[a-zA-Z0-9_]+$/.test(o) ? null : { alphanumeric: !0 }) : null;
  };
}
s();
function ae(t, o) {
  if ((t & 1 && (r(0, "span", 4), d(1), l()), t & 2)) {
    let e = p();
    i(), m(" ", e.label, " ");
  }
}
var ne = class t {
  control;
  label;
  type = "radio";
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = u({
    type: t,
    selectors: [["app-radio-switch"]],
    inputs: { control: "control", label: "label", type: "type" },
    standalone: !0,
    features: [f],
    decls: 4,
    vars: 2,
    consts: [
      [1, "inline-flex", "items-center", "cursor-pointer"],
      [
        "type",
        "checkbox",
        1,
        "sr-only",
        "peer",
        "select-none",
        3,
        "formControl",
      ],
      [
        1,
        "relative",
        "w-11",
        "h-6",
        "bg-gray-200",
        "rounded-full",
        "peer",
        "dark:bg-gray-700",
        "peer-checked:after:translate-x-full",
        "rtl:peer-checked:after:-translate-x-full",
        "peer-checked:after:border-white",
        "after:content-['']",
        "after:absolute",
        "after:top-[2px]",
        "after:start-[2px]",
        "after:bg-white",
        "after:border-gray-300",
        "after:border",
        "after:rounded-full",
        "after:h-5",
        "after:w-5",
        "after:transition-all",
        "dark:border-gray-600",
        "peer-checked:bg-orange",
        "dark:peer-checked:bg-orange",
        "select-none",
      ],
      [
        "class",
        "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300",
        4,
        "ngIf",
      ],
      [
        1,
        "ms-3",
        "text-sm",
        "font-medium",
        "text-gray-900",
        "dark:text-gray-300",
      ],
    ],
    template: function (e, n) {
      e & 1 &&
        (r(0, "label", 0),
        h(1, "input", 1)(2, "div", 2),
        b(3, ae, 2, 1, "span", 3),
        l()),
        e & 2 && (i(), a("formControl", n.control), i(2), a("ngIf", n.label));
    },
    dependencies: [x, G, w, S, g, Q],
    encapsulation: 2,
    changeDetection: 0,
  });
};
s();
var ce = ["audioPlayer"];
function se(t, o) {
  if ((t & 1 && (r(0, "option", 17), d(1), l()), t & 2)) {
    let e = o.$implicit;
    a("value", e), i(), m(" ", e, " ");
  }
}
function pe(t, o) {
  if (t & 1) {
    let e = A();
    r(0, "div", 2)(1, "div", 3)(2, "button", 4),
      y("click", function () {
        v(e);
        let c = p();
        return C(c.closeDialog());
      }),
      h(3, "img", 5),
      l(),
      r(4, "h1", 6),
      d(5),
      l()(),
      r(6, "div", 7)(7, "span", 8),
      d(8),
      l(),
      r(9, "select", 9),
      y("change", function () {
        v(e);
        let c = p();
        return C(c.playSelectedVoice());
      }),
      r(10, "option", 10),
      d(11),
      l(),
      b(12, se, 2, 2, "option", 11),
      l(),
      h(13, "audio", null, 0),
      l(),
      r(15, "div", 12)(16, "button", 13),
      y("click", function () {
        v(e);
        let c = p();
        return C(c.closeDialog());
      }),
      r(17, "span", 14),
      d(18),
      l()(),
      r(19, "button", 15),
      y("click", function () {
        v(e);
        let c = p();
        return C(c.selectVoice());
      }),
      r(20, "span", 16),
      d(21),
      l()()()();
  }
  if (t & 2) {
    let e = o.$implicit,
      n = p();
    i(5),
      m(" ", e("addVoice"), " "),
      i(2),
      V("opacity-0", null),
      i(),
      m(" ", e("voice"), " "),
      i(),
      a("formControl", n.control),
      i(2),
      $(e("selectVoice")),
      i(),
      a("ngForOf", n.options),
      i(5),
      V("opacity-0", null),
      i(),
      m(" ", e("cancel"), " "),
      i(2),
      V("opacity-0", null),
      i(),
      m(" ", e("addVoice"), " ");
  }
}
var ie = class t {
  dialogRef = _(J);
  agentStore = _(X);
  audioPlayer;
  data = _(K);
  control = new U(this.data.voice || "");
  options = ["hope", "jeff", "mark"];
  selectedVoice = { voice: null };
  closeDialog() {
    this.dialogRef.close();
  }
  selectVoice() {
    this.dialogRef.close(this.control.value);
  }
  playSelectedVoice() {
    if (this.control.value) {
      let o = `/agent-chat-voices/${this.control.value}.mp3`;
      (this.audioPlayer.nativeElement.src = o),
        this.audioPlayer.nativeElement
          .play()
          .catch((e) => console.error("Audio play error:", e));
    }
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = u({
    type: t,
    selectors: [["app-add-agent-voice-dialog"]],
    viewQuery: function (e, n) {
      if ((e & 1 && N(ce, 5), e & 2)) {
        let c;
        j((c = O())) && (n.audioPlayer = c.first);
      }
    },
    standalone: !0,
    features: [f],
    decls: 1,
    vars: 1,
    consts: [
      ["audioPlayer", ""],
      [
        "class",
        "bg-white rounded-[20px] px-6 py-4 max-h-[calc(80vh-48px)] overflow-auto flex flex-col justify-between items-center",
        4,
        "transloco",
        "translocoPrefix",
      ],
      [
        1,
        "bg-white",
        "rounded-[20px]",
        "px-6",
        "py-4",
        "max-h-[calc(80vh-48px)]",
        "overflow-auto",
        "flex",
        "flex-col",
        "justify-between",
        "items-center",
      ],
      [
        1,
        "flex",
        "items-center",
        "justify-start",
        "gap-2",
        "md:justify-between",
      ],
      [1, "grid", "place-items-center", "rounded-full", 3, "click"],
      ["src", "icons/arrow-left.svg"],
      [1, "font-almarena", "text-[28px]/[70px]", "md:px-14"],
      [
        1,
        "relative",
        "w-full",
        "flex",
        "flex-col",
        "gap-2",
        "items-center",
        "justify-start",
      ],
      [1, "font-dm-sans", "font-bold", "text-sm", "self-start"],
      [
        1,
        "w-full",
        "px-4",
        "py-2",
        "border",
        "border-gray-300",
        "rounded-lg",
        "text-sm",
        "text-black",
        "bg-white",
        "shadow-sm",
        "capitalize",
        3,
        "change",
        "formControl",
      ],
      [
        "value",
        "",
        "disabled",
        "",
        "selected",
        "",
        "hidden",
        "",
        1,
        "text-[#00000080]",
        "capitalize",
      ],
      ["class", "capitalize", 3, "value", 4, "ngFor", "ngForOf"],
      [1, "flex", "items-center", "justify-between", "gap-2", "mt-8", "w-full"],
      [
        1,
        "h-10",
        "px-6",
        "border",
        "border-black",
        "bg-white",
        "rounded-[4px]",
        "grid",
        "place-items-center",
        "hover:bg-black/15",
        "flex-1",
        3,
        "click",
      ],
      [1, "font-dm-sans", "font-bold", "text-black", "text-xs", "uppercase"],
      [
        1,
        "h-10",
        "px-6",
        "border",
        "bg-black",
        "rounded-[4px]",
        "grid",
        "place-items-center",
        "hover:bg-black/85",
        "flex-1",
        3,
        "click",
      ],
      [1, "font-dm-sans", "font-bold", "text-white", "text-xs", "uppercase"],
      [1, "capitalize", 3, "value"],
    ],
    template: function (e, n) {
      e & 1 && b(0, pe, 22, 13, "div", 1),
        e & 2 && a("translocoPrefix", "voiceDialog");
    },
    dependencies: [Z, x, B, H, q, w, S, g, F],
    encapsulation: 2,
    changeDetection: 0,
  });
};
s();
var de = (t) => [t];
function me(t, o) {
  if (t & 1) {
    let e = A();
    r(0, "div", 2),
      y("click", function () {
        let c = v(e).$implicit,
          le = p();
        return C(le.onColorSelect(c));
      }),
      l();
  }
  if (t & 2) {
    let e = o.$implicit,
      n = p();
    a(
      "ngClass",
      z(
        1,
        de,
        e === n.control.value
          ? n.bgColor(e) + " border-2 border-black"
          : n.bgColor(e)
      )
    );
  }
}
var re = class t {
  control;
  colors = [
    "vcViolet",
    "vcGreen",
    "vcRed",
    "vcOrange",
    "vcPink",
    "vcPurple",
    "vcBlue",
  ];
  onColorSelect(o) {
    this.control.setValue(o);
  }
  bgColor(o) {
    return `bg-${o}`;
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = u({
    type: t,
    selectors: [["app-color-selector"]],
    inputs: { control: "control" },
    standalone: !0,
    features: [f],
    decls: 2,
    vars: 1,
    consts: [
      [1, "flex", "gap-4"],
      [
        "class",
        "w-10 h-10 rounded-full cursor-pointer",
        3,
        "ngClass",
        "click",
        4,
        "ngFor",
        "ngForOf",
      ],
      [
        1,
        "w-10",
        "h-10",
        "rounded-full",
        "cursor-pointer",
        3,
        "click",
        "ngClass",
      ],
    ],
    template: function (e, n) {
      e & 1 && (r(0, "div", 0), b(1, me, 1, 3, "div", 1), l()),
        e & 2 && (i(), a("ngForOf", n.colors));
    },
    dependencies: [x, g, k, F],
    encapsulation: 2,
    changeDetection: 0,
  });
};
export { ee as a, oe as b, De as c, ne as d, ie as e, re as f };
