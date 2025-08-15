import { b as x, d as E, j as _, p as D } from "./chunk-YF7ATBOB.js";
import { d as y, e as h, f as I, m as u } from "./chunk-ABQK56SH.js";
import {
  Aa as g,
  Ea as l,
  Ma as p,
  Na as a,
  Oa as b,
  Xa as F,
  fb as d,
  hb as c,
  ja as i,
  n as s,
  qb as m,
  tb as v,
} from "./chunk-FRM3FMZU.js";
import { q as n } from "./chunk-KXQY476L.js";
n();
function N(e, r) {
  if ((e & 1 && (p(0, "p", 3), d(1), a()), e & 2)) {
    let t = r.$implicit;
    i(), c(" ", t.message, " ");
  }
}
function O(e, r) {
  if ((e & 1 && (p(0, "div", 1), g(1, N, 2, 1, "p", 2), a()), e & 2)) {
    let t = F();
    i(), l("ngForOf", t.errors);
  }
}
var f = class e {
  control;
  get errors() {
    let r = this.control.errors;
    if (!r) return [];
    let t = Object.keys(r);
    return t.length == 0 ? [] : t.map((o) => r[o]);
  }
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = s({
    type: e,
    selectors: [["app-input-error"]],
    inputs: { control: "control" },
    standalone: !0,
    features: [m],
    decls: 1,
    vars: 1,
    consts: [
      ["class", "flex flex-col items-end text-red", 4, "ngIf"],
      [1, "flex", "flex-col", "items-end", "text-red"],
      ["class", "mt-2", 4, "ngFor", "ngForOf"],
      [1, "mt-2"],
    ],
    template: function (t, o) {
      t & 1 && g(0, O, 2, 1, "div", 0),
        t & 2 &&
          l(
            "ngIf",
            o.control.invalid && (o.control.dirty || o.control.touched)
          );
    },
    dependencies: [u, h, I],
    encapsulation: 2,
  });
};
n();
var T = (e, r) => [e, r],
  V = class e {
    control;
    label;
    placeholder;
    type = "text";
    disabled;
    get invalid() {
      return (
        this.control.invalid && (this.control.dirty || this.control.touched)
      );
    }
    static ɵfac = function (t) {
      return new (t || e)();
    };
    static ɵcmp = s({
      type: e,
      selectors: [["app-input-field"]],
      inputs: {
        control: "control",
        label: "label",
        placeholder: "placeholder",
        type: "type",
        disabled: "disabled",
      },
      standalone: !0,
      features: [m],
      decls: 5,
      vars: 9,
      consts: [
        [1, "font-dm-sans", "text-[14px]/[16px]", "font-bold", "mb-4"],
        [
          1,
          "border",
          "border-gray-300",
          "rounded-[4px]",
          "block",
          "w-full",
          "px-3",
          "py-4",
          "focus:outline-none",
          3,
          "type",
          "formControl",
          "placeholder",
          "ngClass",
        ],
        [3, "control"],
      ],
      template: function (t, o) {
        t & 1 &&
          (p(0, "div")(1, "label", 0),
          d(2),
          a(),
          b(3, "input", 1)(4, "app-input-error", 2),
          a()),
          t & 2 &&
            (i(2),
            c(" ", o.label, ""),
            i(),
            l("type", o.type)("formControl", o.control)(
              "placeholder",
              o.placeholder
            )(
              "ngClass",
              v(
                6,
                T,
                o.invalid ? "border-red" : "border-gray-300",
                o.disabled ? "bg-black/5" : "bg-white"
              )
            ),
            i(),
            l("control", o.control));
      },
      dependencies: [D, x, E, _, f, u, y],
      encapsulation: 2,
      changeDetection: 0,
    });
  };
n();
function B(e, r, t) {
  return (o) => (r(o) ? { [e]: { message: t } } : null);
}
n();
function L(e) {
  return e.updateValueAndValidity(), e.invalid && e.markAllAsTouched(), e.valid;
}
export { f as a, V as b, B as c, L as d };
