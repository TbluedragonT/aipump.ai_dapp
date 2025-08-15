import {
  N as O,
  O as Ci,
  P as wi,
  R as Ei,
  S as Di,
  a as De,
  b as y,
  c as yi,
  n as bi,
  ua as Ae,
  xa as Ai,
} from "./chunk-ABQK56SH.js";
import {
  $a as be,
  Aa as pi,
  Ab as gi,
  B as at,
  Ba as _i,
  Ca as lt,
  D as V,
  Da as Gt,
  Eb as mi,
  G as P,
  Ga as Yt,
  H as A,
  Kb as Dt,
  L as I,
  M as ve,
  Ob as $t,
  Q as di,
  Qb as U,
  R as ui,
  Rb as B,
  S as fi,
  Sb as vi,
  Wa as ct,
  a as Ut,
  ab as Ce,
  bb as we,
  c as Y,
  d as f,
  e as b,
  g as E,
  i as c,
  j as D,
  ka as u,
  ma as Ct,
  n as me,
  na as Wt,
  o as C,
  p as v,
  pa as wt,
  pb as L,
  qa as zt,
  qb as Ee,
  sa as ye,
  t as hi,
  ta as Et,
  w as K,
  wa as M,
} from "./chunk-FRM3FMZU.js";
import {
  l as G,
  o as ri,
  q as oi,
  r as ai,
  v as li,
} from "./chunk-2CMVC2QG.js";
import {
  Ga as Bt,
  Ia as _e,
  Ib as Ht,
  L as ii,
  M as rt,
  Mb as bt,
  Pa as ge,
  Rb as Z,
  Tb as ci,
  W as H,
  _ as ni,
  c as st,
  ca as si,
  ia as ot,
  k as jt,
  ma as pe,
  p as m,
  r as ei,
} from "./chunk-23ZZ27XK.js";
import { a as _, b as F, l as N, q as g } from "./chunk-KXQY476L.js";
g();
var Pi = (() => {
    class n {
      constructor(t, i) {
        (this._renderer = t),
          (this._elementRef = i),
          (this.onChange = (s) => {}),
          (this.onTouched = () => {});
      }
      setProperty(t, i) {
        this._renderer.setProperty(this._elementRef.nativeElement, t, i);
      }
      registerOnTouched(t) {
        this.onTouched = t;
      }
      registerOnChange(t) {
        this.onChange = t;
      }
      setDisabledState(t) {
        this.setProperty("disabled", t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(u(wt), u(I));
        };
      }
      static {
        this.ɵdir = v({ type: n });
      }
    }
    return n;
  })(),
  se = (() => {
    class n extends Pi {
      static {
        this.ɵfac = (() => {
          let t;
          return function (s) {
            return (t || (t = at(n)))(s || n);
          };
        })();
      }
      static {
        this.ɵdir = v({ type: n, features: [M] });
      }
    }
    return n;
  })(),
  ft = new E(""),
  Vn = { provide: ft, useExisting: Y(() => Pn), multi: !0 },
  Pn = (() => {
    class n extends se {
      writeValue(t) {
        this.setProperty("checked", t);
      }
      static {
        this.ɵfac = (() => {
          let t;
          return function (s) {
            return (t || (t = at(n)))(s || n);
          };
        })();
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [
            ["input", "type", "checkbox", "formControlName", ""],
            ["input", "type", "checkbox", "formControl", ""],
            ["input", "type", "checkbox", "ngModel", ""],
          ],
          hostBindings: function (i, s) {
            i & 1 &&
              ct("change", function (o) {
                return s.onChange(o.target.checked);
              })("blur", function () {
                return s.onTouched();
              });
          },
          features: [L([Vn]), M],
        });
      }
    }
    return n;
  })(),
  Tn = { provide: ft, useExisting: Y(() => Ti), multi: !0 };
function Nn() {
  let n = De() ? De().getUserAgent() : "";
  return /android (\d+)/.test(n.toLowerCase());
}
var Ln = new E(""),
  Ti = (() => {
    class n extends Pi {
      constructor(t, i, s) {
        super(t, i),
          (this._compositionMode = s),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !Nn());
      }
      writeValue(t) {
        let i = t ?? "";
        this.setProperty("value", i);
      }
      _handleInput(t) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(t);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(t) {
        (this._composing = !1), this._compositionMode && this.onChange(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(u(wt), u(I), u(Ln, 8));
        };
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [
            ["input", "formControlName", "", 3, "type", "checkbox"],
            ["textarea", "formControlName", ""],
            ["input", "formControl", "", 3, "type", "checkbox"],
            ["textarea", "formControl", ""],
            ["input", "ngModel", "", 3, "type", "checkbox"],
            ["textarea", "ngModel", ""],
            ["", "ngDefaultControl", ""],
          ],
          hostBindings: function (i, s) {
            i & 1 &&
              ct("input", function (o) {
                return s._handleInput(o.target.value);
              })("blur", function () {
                return s.onTouched();
              })("compositionstart", function () {
                return s._compositionStart();
              })("compositionend", function (o) {
                return s._compositionEnd(o.target.value);
              });
          },
          features: [L([Tn]), M],
        });
      }
    }
    return n;
  })();
function $(n) {
  return (
    n == null || ((typeof n == "string" || Array.isArray(n)) && n.length === 0)
  );
}
function Ni(n) {
  return n != null && typeof n.length == "number";
}
var Me = new E(""),
  ke = new E(""),
  jn =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Ii = class {
    static min(e) {
      return Bn(e);
    }
    static max(e) {
      return Hn(e);
    }
    static required(e) {
      return Un(e);
    }
    static requiredTrue(e) {
      return Wn(e);
    }
    static email(e) {
      return zn(e);
    }
    static minLength(e) {
      return Gn(e);
    }
    static maxLength(e) {
      return Yn(e);
    }
    static pattern(e) {
      return $n(e);
    }
    static nullValidator(e) {
      return Li(e);
    }
    static compose(e) {
      return zi(e);
    }
    static composeAsync(e) {
      return Yi(e);
    }
  };
function Bn(n) {
  return (e) => {
    if ($(e.value) || $(n)) return null;
    let t = parseFloat(e.value);
    return !isNaN(t) && t < n ? { min: { min: n, actual: e.value } } : null;
  };
}
function Hn(n) {
  return (e) => {
    if ($(e.value) || $(n)) return null;
    let t = parseFloat(e.value);
    return !isNaN(t) && t > n ? { max: { max: n, actual: e.value } } : null;
  };
}
function Un(n) {
  return $(n.value) ? { required: !0 } : null;
}
function Wn(n) {
  return n.value === !0 ? null : { required: !0 };
}
function zn(n) {
  return $(n.value) || jn.test(n.value) ? null : { email: !0 };
}
function Gn(n) {
  return (e) =>
    $(e.value) || !Ni(e.value)
      ? null
      : e.value.length < n
      ? { minlength: { requiredLength: n, actualLength: e.value.length } }
      : null;
}
function Yn(n) {
  return (e) =>
    Ni(e.value) && e.value.length > n
      ? { maxlength: { requiredLength: n, actualLength: e.value.length } }
      : null;
}
function $n(n) {
  if (!n) return Li;
  let e, t;
  return (
    typeof n == "string"
      ? ((t = ""),
        n.charAt(0) !== "^" && (t += "^"),
        (t += n),
        n.charAt(n.length - 1) !== "$" && (t += "$"),
        (e = new RegExp(t)))
      : ((t = n.toString()), (e = n)),
    (i) => {
      if ($(i.value)) return null;
      let s = i.value;
      return e.test(s)
        ? null
        : { pattern: { requiredPattern: t, actualValue: s } };
    }
  );
}
function Li(n) {
  return null;
}
function ji(n) {
  return n != null;
}
function Bi(n) {
  return gi(n) ? ii(n) : n;
}
function Hi(n) {
  let e = {};
  return (
    n.forEach((t) => {
      e = t != null ? _(_({}, e), t) : e;
    }),
    Object.keys(e).length === 0 ? null : e
  );
}
function Ui(n, e) {
  return e.map((t) => t(n));
}
function Xn(n) {
  return !n.validate;
}
function Wi(n) {
  return n.map((e) => (Xn(e) ? e : (t) => e.validate(t)));
}
function zi(n) {
  if (!n) return null;
  let e = n.filter(ji);
  return e.length == 0
    ? null
    : function (t) {
        return Hi(Ui(t, e));
      };
}
function Gi(n) {
  return n != null ? zi(Wi(n)) : null;
}
function Yi(n) {
  if (!n) return null;
  let e = n.filter(ji);
  return e.length == 0
    ? null
    : function (t) {
        let i = Ui(t, e).map(Bi);
        return oi(i).pipe(H(Hi));
      };
}
function $i(n) {
  return n != null ? Yi(Wi(n)) : null;
}
function Oi(n, e) {
  return n === null ? [e] : Array.isArray(n) ? [...n, e] : [n, e];
}
function Xi(n) {
  return n._rawValidators;
}
function Zi(n) {
  return n._rawAsyncValidators;
}
function Ie(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
function Zt(n, e) {
  return Array.isArray(n) ? n.includes(e) : n === e;
}
function Si(n, e) {
  let t = Ie(e);
  return (
    Ie(n).forEach((s) => {
      Zt(t, s) || t.push(s);
    }),
    t
  );
}
function Mi(n, e) {
  return Ie(e).filter((t) => !Zt(n, t));
}
var Kt = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(e) {
      (this._rawValidators = e || []),
        (this._composedValidatorFn = Gi(this._rawValidators));
    }
    _setAsyncValidators(e) {
      (this._rawAsyncValidators = e || []),
        (this._composedAsyncValidatorFn = $i(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(e) {
      this._onDestroyCallbacks.push(e);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((e) => e()),
        (this._onDestroyCallbacks = []);
    }
    reset(e = void 0) {
      this.control && this.control.reset(e);
    }
    hasError(e, t) {
      return this.control ? this.control.hasError(e, t) : !1;
    }
    getError(e, t) {
      return this.control ? this.control.getError(e, t) : null;
    }
  },
  ut = class extends Kt {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  q = class extends Kt {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  qt = class {
    constructor(e) {
      this._cd = e;
    }
    get isTouched() {
      return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return this._cd?._submitted?.(), !!this._cd?.submitted;
    }
  },
  Zn = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  no = F(_({}, Zn), { "[class.ng-submitted]": "isSubmitted" }),
  so = (() => {
    class n extends qt {
      constructor(t) {
        super(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(u(q, 2));
        };
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [
            ["", "formControlName", ""],
            ["", "ngModel", ""],
            ["", "formControl", ""],
          ],
          hostVars: 14,
          hostBindings: function (i, s) {
            i & 2 &&
              Yt("ng-untouched", s.isUntouched)("ng-touched", s.isTouched)(
                "ng-pristine",
                s.isPristine
              )("ng-dirty", s.isDirty)("ng-valid", s.isValid)(
                "ng-invalid",
                s.isInvalid
              )("ng-pending", s.isPending);
          },
          features: [M],
        });
      }
    }
    return n;
  })(),
  ro = (() => {
    class n extends qt {
      constructor(t) {
        super(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(u(ut, 10));
        };
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [
            ["", "formGroupName", ""],
            ["", "formArrayName", ""],
            ["", "ngModelGroup", ""],
            ["", "formGroup", ""],
            ["form", 3, "ngNoForm", ""],
            ["", "ngForm", ""],
          ],
          hostVars: 16,
          hostBindings: function (i, s) {
            i & 2 &&
              Yt("ng-untouched", s.isUntouched)("ng-touched", s.isTouched)(
                "ng-pristine",
                s.isPristine
              )("ng-dirty", s.isDirty)("ng-valid", s.isValid)(
                "ng-invalid",
                s.isInvalid
              )("ng-pending", s.isPending)("ng-submitted", s.isSubmitted);
          },
          features: [M],
        });
      }
    }
    return n;
  })();
var At = "VALID",
  Xt = "INVALID",
  ht = "PENDING",
  It = "DISABLED",
  X = class {},
  Qt = class extends X {
    constructor(e, t) {
      super(), (this.value = e), (this.source = t);
    }
  },
  Ot = class extends X {
    constructor(e, t) {
      super(), (this.pristine = e), (this.source = t);
    }
  },
  St = class extends X {
    constructor(e, t) {
      super(), (this.touched = e), (this.source = t);
    }
  },
  dt = class extends X {
    constructor(e, t) {
      super(), (this.status = e), (this.source = t);
    }
  },
  Oe = class extends X {
    constructor(e) {
      super(), (this.source = e);
    }
  },
  Se = class extends X {
    constructor(e) {
      super(), (this.source = e);
    }
  };
function Ki(n) {
  return (re(n) ? n.validators : n) || null;
}
function Kn(n) {
  return Array.isArray(n) ? Gi(n) : n || null;
}
function qi(n, e) {
  return (re(e) ? e.asyncValidators : n) || null;
}
function qn(n) {
  return Array.isArray(n) ? $i(n) : n || null;
}
function re(n) {
  return n != null && !Array.isArray(n) && typeof n == "object";
}
function Qn(n, e, t) {
  let i = n.controls;
  if (!(e ? Object.keys(i) : i).length) throw new Ut(1e3, "");
  if (!i[t]) throw new Ut(1001, "");
}
function Jn(n, e, t) {
  n._forEachChild((i, s) => {
    if (t[s] === void 0) throw new Ut(1002, "");
  });
}
var Jt = class {
    constructor(e, t) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = null),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this._status = U(() => this.statusReactive())),
        (this.statusReactive = Et(void 0)),
        (this._pristine = U(() => this.pristineReactive())),
        (this.pristineReactive = Et(!0)),
        (this._touched = U(() => this.touchedReactive())),
        (this.touchedReactive = Et(!1)),
        (this._events = new m()),
        (this.events = this._events.asObservable()),
        (this._onDisabledChange = []),
        this._assignValidators(e),
        this._assignAsyncValidators(t);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(e) {
      this._rawValidators = this._composedValidatorFn = e;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(e) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = e;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return B(this.statusReactive);
    }
    set status(e) {
      B(() => this.statusReactive.set(e));
    }
    get valid() {
      return this.status === At;
    }
    get invalid() {
      return this.status === Xt;
    }
    get pending() {
      return this.status == ht;
    }
    get disabled() {
      return this.status === It;
    }
    get enabled() {
      return this.status !== It;
    }
    get pristine() {
      return B(this.pristineReactive);
    }
    set pristine(e) {
      B(() => this.pristineReactive.set(e));
    }
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return B(this.touchedReactive);
    }
    set touched(e) {
      B(() => this.touchedReactive.set(e));
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
        ? this.parent.updateOn
        : "change";
    }
    setValidators(e) {
      this._assignValidators(e);
    }
    setAsyncValidators(e) {
      this._assignAsyncValidators(e);
    }
    addValidators(e) {
      this.setValidators(Si(e, this._rawValidators));
    }
    addAsyncValidators(e) {
      this.setAsyncValidators(Si(e, this._rawAsyncValidators));
    }
    removeValidators(e) {
      this.setValidators(Mi(e, this._rawValidators));
    }
    removeAsyncValidators(e) {
      this.setAsyncValidators(Mi(e, this._rawAsyncValidators));
    }
    hasValidator(e) {
      return Zt(this._rawValidators, e);
    }
    hasAsyncValidator(e) {
      return Zt(this._rawAsyncValidators, e);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(e = {}) {
      let t = this.touched === !1;
      this.touched = !0;
      let i = e.sourceControl ?? this;
      this._parent &&
        !e.onlySelf &&
        this._parent.markAsTouched(F(_({}, e), { sourceControl: i })),
        t && e.emitEvent !== !1 && this._events.next(new St(!0, i));
    }
    markAllAsTouched(e = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: e.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild((t) => t.markAllAsTouched(e));
    }
    markAsUntouched(e = {}) {
      let t = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let i = e.sourceControl ?? this;
      this._forEachChild((s) => {
        s.markAsUntouched({
          onlySelf: !0,
          emitEvent: e.emitEvent,
          sourceControl: i,
        });
      }),
        this._parent && !e.onlySelf && this._parent._updateTouched(e, i),
        t && e.emitEvent !== !1 && this._events.next(new St(!1, i));
    }
    markAsDirty(e = {}) {
      let t = this.pristine === !0;
      this.pristine = !1;
      let i = e.sourceControl ?? this;
      this._parent &&
        !e.onlySelf &&
        this._parent.markAsDirty(F(_({}, e), { sourceControl: i })),
        t && e.emitEvent !== !1 && this._events.next(new Ot(!1, i));
    }
    markAsPristine(e = {}) {
      let t = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let i = e.sourceControl ?? this;
      this._forEachChild((s) => {
        s.markAsPristine({ onlySelf: !0, emitEvent: e.emitEvent });
      }),
        this._parent && !e.onlySelf && this._parent._updatePristine(e, i),
        t && e.emitEvent !== !1 && this._events.next(new Ot(!0, i));
    }
    markAsPending(e = {}) {
      this.status = ht;
      let t = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new dt(this.status, t)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !e.onlySelf &&
          this._parent.markAsPending(F(_({}, e), { sourceControl: t }));
    }
    disable(e = {}) {
      let t = this._parentMarkedDirty(e.onlySelf);
      (this.status = It),
        (this.errors = null),
        this._forEachChild((s) => {
          s.disable(F(_({}, e), { onlySelf: !0 }));
        }),
        this._updateValue();
      let i = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new Qt(this.value, i)),
        this._events.next(new dt(this.status, i)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(F(_({}, e), { skipPristineCheck: t }), this),
        this._onDisabledChange.forEach((s) => s(!0));
    }
    enable(e = {}) {
      let t = this._parentMarkedDirty(e.onlySelf);
      (this.status = At),
        this._forEachChild((i) => {
          i.enable(F(_({}, e), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent }),
        this._updateAncestors(F(_({}, e), { skipPristineCheck: t }), this),
        this._onDisabledChange.forEach((i) => i(!1));
    }
    _updateAncestors(e, t) {
      this._parent &&
        !e.onlySelf &&
        (this._parent.updateValueAndValidity(e),
        e.skipPristineCheck || this._parent._updatePristine({}, t),
        this._parent._updateTouched({}, t));
    }
    setParent(e) {
      this._parent = e;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(e = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let i = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === At || this.status === ht) &&
            this._runAsyncValidator(i, e.emitEvent);
      }
      let t = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new Qt(this.value, t)),
        this._events.next(new dt(this.status, t)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !e.onlySelf &&
          this._parent.updateValueAndValidity(
            F(_({}, e), { sourceControl: t })
          );
    }
    _updateTreeValidity(e = { emitEvent: !0 }) {
      this._forEachChild((t) => t._updateTreeValidity(e)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? It : At;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(e, t) {
      if (this.asyncValidator) {
        (this.status = ht),
          (this._hasOwnPendingAsyncValidator = { emitEvent: t !== !1 });
        let i = Bi(this.asyncValidator(this));
        this._asyncValidationSubscription = i.subscribe((s) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(s, { emitEvent: t, shouldHaveEmitted: e });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let e = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), e;
      }
      return !1;
    }
    setErrors(e, t = {}) {
      (this.errors = e),
        this._updateControlsErrors(
          t.emitEvent !== !1,
          this,
          t.shouldHaveEmitted
        );
    }
    get(e) {
      let t = e;
      return t == null ||
        (Array.isArray(t) || (t = t.split(".")), t.length === 0)
        ? null
        : t.reduce((i, s) => i && i._find(s), this);
    }
    getError(e, t) {
      let i = t ? this.get(t) : this;
      return i && i.errors ? i.errors[e] : null;
    }
    hasError(e, t) {
      return !!this.getError(e, t);
    }
    get root() {
      let e = this;
      for (; e._parent; ) e = e._parent;
      return e;
    }
    _updateControlsErrors(e, t, i) {
      (this.status = this._calculateStatus()),
        e && this.statusChanges.emit(this.status),
        (e || i) && this._events.next(new dt(this.status, t)),
        this._parent && this._parent._updateControlsErrors(e, t, i);
    }
    _initObservables() {
      (this.valueChanges = new P()), (this.statusChanges = new P());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? It
        : this.errors
        ? Xt
        : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(ht)
        ? ht
        : this._anyControlsHaveStatus(Xt)
        ? Xt
        : At;
    }
    _anyControlsHaveStatus(e) {
      return this._anyControls((t) => t.status === e);
    }
    _anyControlsDirty() {
      return this._anyControls((e) => e.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((e) => e.touched);
    }
    _updatePristine(e, t) {
      let i = !this._anyControlsDirty(),
        s = this.pristine !== i;
      (this.pristine = i),
        this._parent && !e.onlySelf && this._parent._updatePristine(e, t),
        s && this._events.next(new Ot(this.pristine, t));
    }
    _updateTouched(e = {}, t) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new St(this.touched, t)),
        this._parent && !e.onlySelf && this._parent._updateTouched(e, t);
    }
    _registerOnCollectionChange(e) {
      this._onCollectionChange = e;
    }
    _setUpdateStrategy(e) {
      re(e) && e.updateOn != null && (this._updateOn = e.updateOn);
    }
    _parentMarkedDirty(e) {
      let t = this._parent && this._parent.dirty;
      return !e && !!t && !this._parent._anyControlsDirty();
    }
    _find(e) {
      return null;
    }
    _assignValidators(e) {
      (this._rawValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedValidatorFn = Kn(this._rawValidators));
    }
    _assignAsyncValidators(e) {
      (this._rawAsyncValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedAsyncValidatorFn = qn(this._rawAsyncValidators));
    }
  },
  ki = class extends Jt {
    constructor(e, t, i) {
      super(Ki(t), qi(i, t)),
        (this.controls = e),
        this._initObservables(),
        this._setUpdateStrategy(t),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(e, t) {
      return this.controls[e]
        ? this.controls[e]
        : ((this.controls[e] = t),
          t.setParent(this),
          t._registerOnCollectionChange(this._onCollectionChange),
          t);
    }
    addControl(e, t, i = {}) {
      this.registerControl(e, t),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(e, t = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        this.updateValueAndValidity({ emitEvent: t.emitEvent }),
        this._onCollectionChange();
    }
    setControl(e, t, i = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        t && this.registerControl(e, t),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    contains(e) {
      return this.controls.hasOwnProperty(e) && this.controls[e].enabled;
    }
    setValue(e, t = {}) {
      Jn(this, !0, e),
        Object.keys(e).forEach((i) => {
          Qn(this, !0, i),
            this.controls[i].setValue(e[i], {
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
        }),
        this.updateValueAndValidity(t);
    }
    patchValue(e, t = {}) {
      e != null &&
        (Object.keys(e).forEach((i) => {
          let s = this.controls[i];
          s && s.patchValue(e[i], { onlySelf: !0, emitEvent: t.emitEvent });
        }),
        this.updateValueAndValidity(t));
    }
    reset(e = {}, t = {}) {
      this._forEachChild((i, s) => {
        i.reset(e ? e[s] : null, { onlySelf: !0, emitEvent: t.emitEvent });
      }),
        this._updatePristine(t, this),
        this._updateTouched(t, this),
        this.updateValueAndValidity(t);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (e, t, i) => ((e[i] = t.getRawValue()), e)
      );
    }
    _syncPendingControls() {
      let e = this._reduceChildren(!1, (t, i) =>
        i._syncPendingControls() ? !0 : t
      );
      return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
    }
    _forEachChild(e) {
      Object.keys(this.controls).forEach((t) => {
        let i = this.controls[t];
        i && e(i, t);
      });
    }
    _setUpControls() {
      this._forEachChild((e) => {
        e.setParent(this),
          e._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(e) {
      for (let [t, i] of Object.entries(this.controls))
        if (this.contains(t) && e(i)) return !0;
      return !1;
    }
    _reduceValue() {
      let e = {};
      return this._reduceChildren(
        e,
        (t, i, s) => ((i.enabled || this.disabled) && (t[s] = i.value), t)
      );
    }
    _reduceChildren(e, t) {
      let i = e;
      return (
        this._forEachChild((s, r) => {
          i = t(i, s, r);
        }),
        i
      );
    }
    _allControlsDisabled() {
      for (let e of Object.keys(this.controls))
        if (this.controls[e].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(e) {
      return this.controls.hasOwnProperty(e) ? this.controls[e] : null;
    }
  };
var Mt = new E("CallSetDisabledState", {
    providedIn: "root",
    factory: () => oe,
  }),
  oe = "always";
function ts(n, e) {
  return [...e.path, n];
}
function te(n, e, t = oe) {
  Fe(n, e),
    e.valueAccessor.writeValue(n.value),
    (n.disabled || t === "always") &&
      e.valueAccessor.setDisabledState?.(n.disabled),
    is(n, e),
    ss(n, e),
    ns(n, e),
    es(n, e);
}
function ee(n, e, t = !0) {
  let i = () => {};
  e.valueAccessor &&
    (e.valueAccessor.registerOnChange(i), e.valueAccessor.registerOnTouched(i)),
    ne(n, e),
    n &&
      (e._invokeOnDestroyCallbacks(), n._registerOnCollectionChange(() => {}));
}
function ie(n, e) {
  n.forEach((t) => {
    t.registerOnValidatorChange && t.registerOnValidatorChange(e);
  });
}
function es(n, e) {
  if (e.valueAccessor.setDisabledState) {
    let t = (i) => {
      e.valueAccessor.setDisabledState(i);
    };
    n.registerOnDisabledChange(t),
      e._registerOnDestroy(() => {
        n._unregisterOnDisabledChange(t);
      });
  }
}
function Fe(n, e) {
  let t = Xi(n);
  e.validator !== null
    ? n.setValidators(Oi(t, e.validator))
    : typeof t == "function" && n.setValidators([t]);
  let i = Zi(n);
  e.asyncValidator !== null
    ? n.setAsyncValidators(Oi(i, e.asyncValidator))
    : typeof i == "function" && n.setAsyncValidators([i]);
  let s = () => n.updateValueAndValidity();
  ie(e._rawValidators, s), ie(e._rawAsyncValidators, s);
}
function ne(n, e) {
  let t = !1;
  if (n !== null) {
    if (e.validator !== null) {
      let s = Xi(n);
      if (Array.isArray(s) && s.length > 0) {
        let r = s.filter((o) => o !== e.validator);
        r.length !== s.length && ((t = !0), n.setValidators(r));
      }
    }
    if (e.asyncValidator !== null) {
      let s = Zi(n);
      if (Array.isArray(s) && s.length > 0) {
        let r = s.filter((o) => o !== e.asyncValidator);
        r.length !== s.length && ((t = !0), n.setAsyncValidators(r));
      }
    }
  }
  let i = () => {};
  return ie(e._rawValidators, i), ie(e._rawAsyncValidators, i), t;
}
function is(n, e) {
  e.valueAccessor.registerOnChange((t) => {
    (n._pendingValue = t),
      (n._pendingChange = !0),
      (n._pendingDirty = !0),
      n.updateOn === "change" && Qi(n, e);
  });
}
function ns(n, e) {
  e.valueAccessor.registerOnTouched(() => {
    (n._pendingTouched = !0),
      n.updateOn === "blur" && n._pendingChange && Qi(n, e),
      n.updateOn !== "submit" && n.markAsTouched();
  });
}
function Qi(n, e) {
  n._pendingDirty && n.markAsDirty(),
    n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
    e.viewToModelUpdate(n._pendingValue),
    (n._pendingChange = !1);
}
function ss(n, e) {
  let t = (i, s) => {
    e.valueAccessor.writeValue(i), s && e.viewToModelUpdate(i);
  };
  n.registerOnChange(t),
    e._registerOnDestroy(() => {
      n._unregisterOnChange(t);
    });
}
function rs(n, e) {
  n == null, Fe(n, e);
}
function os(n, e) {
  return ne(n, e);
}
function Ji(n, e) {
  if (!n.hasOwnProperty("model")) return !1;
  let t = n.model;
  return t.isFirstChange() ? !0 : !Object.is(e, t.currentValue);
}
function as(n) {
  return Object.getPrototypeOf(n.constructor) === se;
}
function ls(n, e) {
  n._syncPendingControls(),
    e.forEach((t) => {
      let i = t.control;
      i.updateOn === "submit" &&
        i._pendingChange &&
        (t.viewToModelUpdate(i._pendingValue), (i._pendingChange = !1));
    });
}
function tn(n, e) {
  if (!e) return null;
  Array.isArray(e);
  let t, i, s;
  return (
    e.forEach((r) => {
      r.constructor === Ti ? (t = r) : as(r) ? (i = r) : (s = r);
    }),
    s || i || t || null
  );
}
function cs(n, e) {
  let t = n.indexOf(e);
  t > -1 && n.splice(t, 1);
}
function Fi(n, e) {
  let t = n.indexOf(e);
  t > -1 && n.splice(t, 1);
}
function Ri(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    Object.keys(n).length === 2 &&
    "value" in n &&
    "disabled" in n
  );
}
var en = class extends Jt {
  constructor(e = null, t, i) {
    super(Ki(t), qi(i, t)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(e),
      this._setUpdateStrategy(t),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      re(t) &&
        (t.nonNullable || t.initialValueIsDefault) &&
        (Ri(e) ? (this.defaultValue = e.value) : (this.defaultValue = e));
  }
  setValue(e, t = {}) {
    (this.value = this._pendingValue = e),
      this._onChange.length &&
        t.emitModelToViewChange !== !1 &&
        this._onChange.forEach((i) =>
          i(this.value, t.emitViewToModelChange !== !1)
        ),
      this.updateValueAndValidity(t);
  }
  patchValue(e, t = {}) {
    this.setValue(e, t);
  }
  reset(e = this.defaultValue, t = {}) {
    this._applyFormState(e),
      this.markAsPristine(t),
      this.markAsUntouched(t),
      this.setValue(this.value, t),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(e) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(e) {
    this._onChange.push(e);
  }
  _unregisterOnChange(e) {
    Fi(this._onChange, e);
  }
  registerOnDisabledChange(e) {
    this._onDisabledChange.push(e);
  }
  _unregisterOnDisabledChange(e) {
    Fi(this._onDisabledChange, e);
  }
  _forEachChild(e) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(e) {
    Ri(e)
      ? ((this.value = this._pendingValue = e.value),
        e.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = e);
  }
};
var hs = (n) => n instanceof en;
var ds = { provide: q, useExisting: Y(() => us) },
  xi = Promise.resolve(),
  us = (() => {
    class n extends q {
      constructor(t, i, s, r, o, a) {
        super(),
          (this._changeDetectorRef = o),
          (this.callSetDisabledState = a),
          (this.control = new en()),
          (this._registered = !1),
          (this.name = ""),
          (this.update = new P()),
          (this._parent = t),
          this._setValidators(i),
          this._setAsyncValidators(s),
          (this.valueAccessor = tn(this, r));
      }
      ngOnChanges(t) {
        if ((this._checkForErrors(), !this._registered || "name" in t)) {
          if (this._registered && (this._checkName(), this.formDirective)) {
            let i = t.name.previousValue;
            this.formDirective.removeControl({
              name: i,
              path: this._getPath(i),
            });
          }
          this._setUpControl();
        }
        "isDisabled" in t && this._updateDisabled(t),
          Ji(t, this.viewModel) &&
            (this._updateValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      get path() {
        return this._getPath(this.name);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      viewToModelUpdate(t) {
        (this.viewModel = t), this.update.emit(t);
      }
      _setUpControl() {
        this._setUpdateStrategy(),
          this._isStandalone()
            ? this._setUpStandalone()
            : this.formDirective.addControl(this),
          (this._registered = !0);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.control._updateOn = this.options.updateOn);
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        te(this.control, this, this.callSetDisabledState),
          this.control.updateValueAndValidity({ emitEvent: !1 });
      }
      _checkForErrors() {
        this._isStandalone() || this._checkParentType(), this._checkName();
      }
      _checkParentType() {}
      _checkName() {
        this.options && this.options.name && (this.name = this.options.name),
          !this._isStandalone() && this.name;
      }
      _updateValue(t) {
        xi.then(() => {
          this.control.setValue(t, { emitViewToModelChange: !1 }),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(t) {
        let i = t.isDisabled.currentValue,
          s = i !== 0 && $t(i);
        xi.then(() => {
          s && !this.control.disabled
            ? this.control.disable()
            : !s && this.control.disabled && this.control.enable(),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(t) {
        return this._parent ? ts(t, this._parent) : [t];
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            u(ut, 9),
            u(Me, 10),
            u(ke, 10),
            u(ft, 10),
            u(Dt, 8),
            u(Mt, 8)
          );
        };
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [
            ["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""],
          ],
          inputs: {
            name: "name",
            isDisabled: [0, "disabled", "isDisabled"],
            model: [0, "ngModel", "model"],
            options: [0, "ngModelOptions", "options"],
          },
          outputs: { update: "ngModelChange" },
          exportAs: ["ngModel"],
          features: [L([ds]), M, K],
        });
      }
    }
    return n;
  })(),
  ao = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
          hostAttrs: ["novalidate", ""],
        });
      }
    }
    return n;
  })();
var nn = new E(""),
  fs = { provide: q, useExisting: Y(() => ps) },
  ps = (() => {
    class n extends q {
      set isDisabled(t) {}
      static {
        this._ngModelWarningSentOnce = !1;
      }
      constructor(t, i, s, r, o) {
        super(),
          (this._ngModelWarningConfig = r),
          (this.callSetDisabledState = o),
          (this.update = new P()),
          (this._ngModelWarningSent = !1),
          this._setValidators(t),
          this._setAsyncValidators(i),
          (this.valueAccessor = tn(this, s));
      }
      ngOnChanges(t) {
        if (this._isControlChanged(t)) {
          let i = t.form.previousValue;
          i && ee(i, this, !1),
            te(this.form, this, this.callSetDisabledState),
            this.form.updateValueAndValidity({ emitEvent: !1 });
        }
        Ji(t, this.viewModel) &&
          (this.form.setValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.form && ee(this.form, this, !1);
      }
      get path() {
        return [];
      }
      get control() {
        return this.form;
      }
      viewToModelUpdate(t) {
        (this.viewModel = t), this.update.emit(t);
      }
      _isControlChanged(t) {
        return t.hasOwnProperty("form");
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            u(Me, 10),
            u(ke, 10),
            u(ft, 10),
            u(nn, 8),
            u(Mt, 8)
          );
        };
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [["", "formControl", ""]],
          inputs: {
            form: [0, "formControl", "form"],
            isDisabled: [0, "disabled", "isDisabled"],
            model: [0, "ngModel", "model"],
          },
          outputs: { update: "ngModelChange" },
          exportAs: ["ngForm"],
          features: [L([fs]), M, K],
        });
      }
    }
    return n;
  })(),
  _s = { provide: ut, useExisting: Y(() => gs) },
  gs = (() => {
    class n extends ut {
      get submitted() {
        return B(this._submittedReactive);
      }
      set submitted(t) {
        this._submittedReactive.set(t);
      }
      constructor(t, i, s) {
        super(),
          (this.callSetDisabledState = s),
          (this._submitted = U(() => this._submittedReactive())),
          (this._submittedReactive = Et(!1)),
          (this._onCollectionChange = () => this._updateDomValue()),
          (this.directives = []),
          (this.form = null),
          (this.ngSubmit = new P()),
          this._setValidators(t),
          this._setAsyncValidators(i);
      }
      ngOnChanges(t) {
        this._checkFormPresent(),
          t.hasOwnProperty("form") &&
            (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            (this._oldForm = this.form));
      }
      ngOnDestroy() {
        this.form &&
          (ne(this.form, this),
          this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(t) {
        let i = this.form.get(t.path);
        return (
          te(i, t, this.callSetDisabledState),
          i.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(t),
          i
        );
      }
      getControl(t) {
        return this.form.get(t.path);
      }
      removeControl(t) {
        ee(t.control || null, t, !1), cs(this.directives, t);
      }
      addFormGroup(t) {
        this._setUpFormContainer(t);
      }
      removeFormGroup(t) {
        this._cleanUpFormContainer(t);
      }
      getFormGroup(t) {
        return this.form.get(t.path);
      }
      addFormArray(t) {
        this._setUpFormContainer(t);
      }
      removeFormArray(t) {
        this._cleanUpFormContainer(t);
      }
      getFormArray(t) {
        return this.form.get(t.path);
      }
      updateModel(t, i) {
        this.form.get(t.path).setValue(i);
      }
      onSubmit(t) {
        return (
          this._submittedReactive.set(!0),
          ls(this.form, this.directives),
          this.ngSubmit.emit(t),
          this.form._events.next(new Oe(this.control)),
          t?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(t = void 0) {
        this.form.reset(t),
          this._submittedReactive.set(!1),
          this.form._events.next(new Se(this.form));
      }
      _updateDomValue() {
        this.directives.forEach((t) => {
          let i = t.control,
            s = this.form.get(t.path);
          i !== s &&
            (ee(i || null, t),
            hs(s) && (te(s, t, this.callSetDisabledState), (t.control = s)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(t) {
        let i = this.form.get(t.path);
        rs(i, t), i.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(t) {
        if (this.form) {
          let i = this.form.get(t.path);
          i && os(i, t) && i.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        Fe(this.form, this), this._oldForm && ne(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(u(Me, 10), u(ke, 10), u(Mt, 8));
        };
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [["", "formGroup", ""]],
          hostBindings: function (i, s) {
            i & 1 &&
              ct("submit", function (o) {
                return s.onSubmit(o);
              })("reset", function () {
                return s.onReset();
              });
          },
          inputs: { form: [0, "formGroup", "form"] },
          outputs: { ngSubmit: "ngSubmit" },
          exportAs: ["ngForm"],
          features: [L([_s]), M, K],
        });
      }
    }
    return n;
  })();
var ms = { provide: ft, useExisting: Y(() => rn), multi: !0 };
function sn(n, e) {
  return n == null
    ? `${e}`
    : (e && typeof e == "object" && (e = "Object"), `${n}: ${e}`.slice(0, 50));
}
function vs(n) {
  return n.split(":")[0];
}
var rn = (() => {
    class n extends se {
      constructor() {
        super(...arguments),
          (this._optionMap = new Map()),
          (this._idCounter = 0),
          (this._compareWith = Object.is);
      }
      set compareWith(t) {
        this._compareWith = t;
      }
      writeValue(t) {
        this.value = t;
        let i = this._getOptionId(t),
          s = sn(i, t);
        this.setProperty("value", s);
      }
      registerOnChange(t) {
        this.onChange = (i) => {
          (this.value = this._getOptionValue(i)), t(this.value);
        };
      }
      _registerOption() {
        return (this._idCounter++).toString();
      }
      _getOptionId(t) {
        for (let i of this._optionMap.keys())
          if (this._compareWith(this._optionMap.get(i), t)) return i;
        return null;
      }
      _getOptionValue(t) {
        let i = vs(t);
        return this._optionMap.has(i) ? this._optionMap.get(i) : t;
      }
      static {
        this.ɵfac = (() => {
          let t;
          return function (s) {
            return (t || (t = at(n)))(s || n);
          };
        })();
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [
            ["select", "formControlName", "", 3, "multiple", ""],
            ["select", "formControl", "", 3, "multiple", ""],
            ["select", "ngModel", "", 3, "multiple", ""],
          ],
          hostBindings: function (i, s) {
            i & 1 &&
              ct("change", function (o) {
                return s.onChange(o.target.value);
              })("blur", function () {
                return s.onTouched();
              });
          },
          inputs: { compareWith: "compareWith" },
          features: [L([ms]), M],
        });
      }
    }
    return n;
  })(),
  lo = (() => {
    class n {
      constructor(t, i, s) {
        (this._element = t),
          (this._renderer = i),
          (this._select = s),
          this._select && (this.id = this._select._registerOption());
      }
      set ngValue(t) {
        this._select != null &&
          (this._select._optionMap.set(this.id, t),
          this._setElementValue(sn(this.id, t)),
          this._select.writeValue(this._select.value));
      }
      set value(t) {
        this._setElementValue(t),
          this._select && this._select.writeValue(this._select.value);
      }
      _setElementValue(t) {
        this._renderer.setProperty(this._element.nativeElement, "value", t);
      }
      ngOnDestroy() {
        this._select &&
          (this._select._optionMap.delete(this.id),
          this._select.writeValue(this._select.value));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(u(I), u(wt), u(rn, 9));
        };
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [["option"]],
          inputs: { ngValue: "ngValue", value: "value" },
        });
      }
    }
    return n;
  })(),
  ys = { provide: ft, useExisting: Y(() => on), multi: !0 };
function Vi(n, e) {
  return n == null
    ? `${e}`
    : (typeof e == "string" && (e = `'${e}'`),
      e && typeof e == "object" && (e = "Object"),
      `${n}: ${e}`.slice(0, 50));
}
function bs(n) {
  return n.split(":")[0];
}
var on = (() => {
    class n extends se {
      constructor() {
        super(...arguments),
          (this._optionMap = new Map()),
          (this._idCounter = 0),
          (this._compareWith = Object.is);
      }
      set compareWith(t) {
        this._compareWith = t;
      }
      writeValue(t) {
        this.value = t;
        let i;
        if (Array.isArray(t)) {
          let s = t.map((r) => this._getOptionId(r));
          i = (r, o) => {
            r._setSelected(s.indexOf(o.toString()) > -1);
          };
        } else
          i = (s, r) => {
            s._setSelected(!1);
          };
        this._optionMap.forEach(i);
      }
      registerOnChange(t) {
        this.onChange = (i) => {
          let s = [],
            r = i.selectedOptions;
          if (r !== void 0) {
            let o = r;
            for (let a = 0; a < o.length; a++) {
              let l = o[a],
                h = this._getOptionValue(l.value);
              s.push(h);
            }
          } else {
            let o = i.options;
            for (let a = 0; a < o.length; a++) {
              let l = o[a];
              if (l.selected) {
                let h = this._getOptionValue(l.value);
                s.push(h);
              }
            }
          }
          (this.value = s), t(s);
        };
      }
      _registerOption(t) {
        let i = (this._idCounter++).toString();
        return this._optionMap.set(i, t), i;
      }
      _getOptionId(t) {
        for (let i of this._optionMap.keys())
          if (this._compareWith(this._optionMap.get(i)._value, t)) return i;
        return null;
      }
      _getOptionValue(t) {
        let i = bs(t);
        return this._optionMap.has(i) ? this._optionMap.get(i)._value : t;
      }
      static {
        this.ɵfac = (() => {
          let t;
          return function (s) {
            return (t || (t = at(n)))(s || n);
          };
        })();
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [
            ["select", "multiple", "", "formControlName", ""],
            ["select", "multiple", "", "formControl", ""],
            ["select", "multiple", "", "ngModel", ""],
          ],
          hostBindings: function (i, s) {
            i & 1 &&
              ct("change", function (o) {
                return s.onChange(o.target);
              })("blur", function () {
                return s.onTouched();
              });
          },
          inputs: { compareWith: "compareWith" },
          features: [L([ys]), M],
        });
      }
    }
    return n;
  })(),
  co = (() => {
    class n {
      constructor(t, i, s) {
        (this._element = t),
          (this._renderer = i),
          (this._select = s),
          this._select && (this.id = this._select._registerOption(this));
      }
      set ngValue(t) {
        this._select != null &&
          ((this._value = t),
          this._setElementValue(Vi(this.id, t)),
          this._select.writeValue(this._select.value));
      }
      set value(t) {
        this._select
          ? ((this._value = t),
            this._setElementValue(Vi(this.id, t)),
            this._select.writeValue(this._select.value))
          : this._setElementValue(t);
      }
      _setElementValue(t) {
        this._renderer.setProperty(this._element.nativeElement, "value", t);
      }
      _setSelected(t) {
        this._renderer.setProperty(this._element.nativeElement, "selected", t);
      }
      ngOnDestroy() {
        this._select &&
          (this._select._optionMap.delete(this.id),
          this._select.writeValue(this._select.value));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(u(I), u(wt), u(on, 9));
        };
      }
      static {
        this.ɵdir = v({
          type: n,
          selectors: [["option"]],
          inputs: { ngValue: "ngValue", value: "value" },
        });
      }
    }
    return n;
  })();
var an = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = C({ type: n });
    }
    static {
      this.ɵinj = b({});
    }
  }
  return n;
})();
var ho = (() => {
    class n {
      static withConfig(t) {
        return {
          ngModule: n,
          providers: [{ provide: Mt, useValue: t.callSetDisabledState ?? oe }],
        };
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = C({ type: n });
      }
      static {
        this.ɵinj = b({ imports: [an] });
      }
    }
    return n;
  })(),
  uo = (() => {
    class n {
      static withConfig(t) {
        return {
          ngModule: n,
          providers: [
            {
              provide: nn,
              useValue: t.warnOnNgModelWithFormControl ?? "always",
            },
            { provide: Mt, useValue: t.callSetDisabledState ?? oe },
          ],
        };
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = C({ type: n });
      }
      static {
        this.ɵinj = b({ imports: [an] });
      }
    }
    return n;
  })();
g();
g();
g();
var xe;
try {
  xe = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  xe = !1;
}
var S = (() => {
  class n {
    constructor(t) {
      (this._platformId = t),
        (this.isBrowser = this._platformId
          ? bi(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || xe) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(c(di));
      };
    }
    static {
      this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
var kt;
function Cs() {
  if (kt == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (kt = !0) })
      );
    } finally {
      kt = kt || !1;
    }
  return kt;
}
function Ve(n) {
  return Cs() ? n : !!n.capture;
}
var Q;
function ln() {
  if (Q == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (Q = !1), Q;
    if ("scrollBehavior" in document.documentElement.style) Q = !0;
    else {
      let n = Element.prototype.scrollTo;
      n ? (Q = !/\{\s*\[native code\]\s*\}/.test(n.toString())) : (Q = !1);
    }
  }
  return Q;
}
var Re;
function ws() {
  if (Re == null) {
    let n = typeof document < "u" ? document.head : null;
    Re = !!(n && (n.createShadowRoot || n.attachShadow));
  }
  return Re;
}
function cn(n) {
  if (ws()) {
    let e = n.getRootNode ? n.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && e instanceof ShadowRoot)
      return e;
  }
  return null;
}
function Ft() {
  let n = typeof document < "u" && document ? document.activeElement : null;
  for (; n && n.shadowRoot; ) {
    let e = n.shadowRoot.activeElement;
    if (e === n) break;
    n = e;
  }
  return n;
}
function z(n) {
  return n.composedPath ? n.composedPath()[0] : n.target;
}
function Pe() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
g();
function le(n, ...e) {
  return e.length
    ? e.some((t) => n[t])
    : n.altKey || n.shiftKey || n.ctrlKey || n.metaKey;
}
g();
g();
function Es(n, e = 0) {
  return Ds(n) ? Number(n) : arguments.length === 2 ? e : 0;
}
function Ds(n) {
  return !isNaN(parseFloat(n)) && !isNaN(Number(n));
}
function pt(n) {
  return Array.isArray(n) ? n : [n];
}
function w(n) {
  return n == null ? "" : typeof n == "string" ? n : `${n}px`;
}
function _t(n) {
  return n instanceof I ? n.nativeElement : n;
}
var As = (() => {
  class n {
    create(t) {
      return typeof MutationObserver > "u" ? null : new MutationObserver(t);
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
var hn = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = C({ type: n });
    }
    static {
      this.ɵinj = b({ providers: [As] });
    }
  }
  return n;
})();
g();
var dn = new Set(),
  J,
  Is = (() => {
    class n {
      constructor(t, i) {
        (this._platform = t),
          (this._nonce = i),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : Ss);
      }
      matchMedia(t) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && Os(t, this._nonce),
          this._matchMedia(t)
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(S), c(fi, 8));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function Os(n, e) {
  if (!dn.has(n))
    try {
      J ||
        ((J = document.createElement("style")),
        e && J.setAttribute("nonce", e),
        J.setAttribute("type", "text/css"),
        document.head.appendChild(J)),
        J.sheet && (J.sheet.insertRule(`@media ${n} {body{ }}`, 0), dn.add(n));
    } catch (t) {
      console.error(t);
    }
}
function Ss(n) {
  return {
    matches: n === "all" || n === "",
    media: n,
    addListener: () => {},
    removeListener: () => {},
  };
}
var fn = (() => {
  class n {
    constructor(t, i) {
      (this._mediaMatcher = t),
        (this._zone = i),
        (this._queries = new Map()),
        (this._destroySubject = new m());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(t) {
      return un(pt(t)).some((s) => this._registerQuery(s).mql.matches);
    }
    observe(t) {
      let s = un(pt(t)).map((o) => this._registerQuery(o).observable),
        r = ni(s);
      return (
        (r = si(r.pipe(_e(1)), r.pipe(Ht(1), Bt(0)))),
        r.pipe(
          H((o) => {
            let a = { matches: !1, breakpoints: {} };
            return (
              o.forEach(({ matches: l, query: h }) => {
                (a.matches = a.matches || l), (a.breakpoints[h] = l);
              }),
              a
            );
          })
        )
      );
    }
    _registerQuery(t) {
      if (this._queries.has(t)) return this._queries.get(t);
      let i = this._mediaMatcher.matchMedia(t),
        r = {
          observable: new jt((o) => {
            let a = (l) => this._zone.run(() => o.next(l));
            return (
              i.addListener(a),
              () => {
                i.removeListener(a);
              }
            );
          }).pipe(
            bt(i),
            H(({ matches: o }) => ({ query: t, matches: o })),
            Z(this._destroySubject)
          ),
          mql: i,
        };
      return this._queries.set(t, r), r;
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(c(Is), c(A));
      };
    }
    static {
      this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
function un(n) {
  return n
    .map((e) => e.split(","))
    .reduce((e, t) => e.concat(t))
    .map((e) => e.trim());
}
var Xs = 200,
  Le = class {
    constructor(e, t) {
      (this._letterKeyStream = new m()),
        (this._items = []),
        (this._selectedItemIndex = -1),
        (this._pressedLetters = []),
        (this._selectedItem = new m()),
        (this.selectedItem = this._selectedItem);
      let i = typeof t?.debounceInterval == "number" ? t.debounceInterval : Xs;
      t?.skipPredicate && (this._skipPredicateFn = t.skipPredicate),
        this.setItems(e),
        this._setupKeyHandler(i);
    }
    destroy() {
      (this._pressedLetters = []),
        this._letterKeyStream.complete(),
        this._selectedItem.complete();
    }
    setCurrentSelectedItemIndex(e) {
      this._selectedItemIndex = e;
    }
    setItems(e) {
      this._items = e;
    }
    handleKey(e) {
      let t = e.keyCode;
      e.key && e.key.length === 1
        ? this._letterKeyStream.next(e.key.toLocaleUpperCase())
        : ((t >= 65 && t <= 90) || (t >= 48 && t <= 57)) &&
          this._letterKeyStream.next(String.fromCharCode(t));
    }
    isTyping() {
      return this._pressedLetters.length > 0;
    }
    reset() {
      this._pressedLetters = [];
    }
    _setupKeyHandler(e) {
      this._letterKeyStream
        .pipe(
          ci((t) => this._pressedLetters.push(t)),
          Bt(e),
          ot(() => this._pressedLetters.length > 0),
          H(() => this._pressedLetters.join("").toLocaleUpperCase())
        )
        .subscribe((t) => {
          for (let i = 1; i < this._items.length + 1; i++) {
            let s = (this._selectedItemIndex + i) % this._items.length,
              r = this._items[s];
            if (
              !this._skipPredicateFn?.(r) &&
              r.getLabel?.().toLocaleUpperCase().trim().indexOf(t) === 0
            ) {
              this._selectedItem.next(r);
              break;
            }
          }
          this._pressedLetters = [];
        });
    }
  },
  je = class {
    constructor(e, t) {
      (this._items = e),
        (this._activeItemIndex = -1),
        (this._activeItem = null),
        (this._wrap = !1),
        (this._typeaheadSubscription = st.EMPTY),
        (this._vertical = !0),
        (this._allowedModifierKeys = []),
        (this._homeAndEnd = !1),
        (this._pageUpAndDown = { enabled: !1, delta: 10 }),
        (this._skipPredicateFn = (i) => i.disabled),
        (this.tabOut = new m()),
        (this.change = new m()),
        e instanceof ve
          ? (this._itemChangesSubscription = e.changes.subscribe((i) =>
              this._itemsChanged(i.toArray())
            ))
          : ye(e) &&
            (this._effectRef = vi(() => this._itemsChanged(e()), {
              injector: t,
            }));
    }
    skipPredicate(e) {
      return (this._skipPredicateFn = e), this;
    }
    withWrap(e = !0) {
      return (this._wrap = e), this;
    }
    withVerticalOrientation(e = !0) {
      return (this._vertical = e), this;
    }
    withHorizontalOrientation(e) {
      return (this._horizontal = e), this;
    }
    withAllowedModifierKeys(e) {
      return (this._allowedModifierKeys = e), this;
    }
    withTypeAhead(e = 200) {
      this._typeaheadSubscription.unsubscribe();
      let t = this._getItemsArray();
      return (
        (this._typeahead = new Le(t, {
          debounceInterval: typeof e == "number" ? e : void 0,
          skipPredicate: (i) => this._skipPredicateFn(i),
        })),
        (this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(
          (i) => {
            this.setActiveItem(i);
          }
        )),
        this
      );
    }
    cancelTypeahead() {
      return this._typeahead?.reset(), this;
    }
    withHomeAndEnd(e = !0) {
      return (this._homeAndEnd = e), this;
    }
    withPageUpDown(e = !0, t = 10) {
      return (this._pageUpAndDown = { enabled: e, delta: t }), this;
    }
    setActiveItem(e) {
      let t = this._activeItem;
      this.updateActiveItem(e),
        this._activeItem !== t && this.change.next(this._activeItemIndex);
    }
    onKeydown(e) {
      let t = e.keyCode,
        s = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(
          (r) => !e[r] || this._allowedModifierKeys.indexOf(r) > -1
        );
      switch (t) {
        case 9:
          this.tabOut.next();
          return;
        case 40:
          if (this._vertical && s) {
            this.setNextItemActive();
            break;
          } else return;
        case 38:
          if (this._vertical && s) {
            this.setPreviousItemActive();
            break;
          } else return;
        case 39:
          if (this._horizontal && s) {
            this._horizontal === "rtl"
              ? this.setPreviousItemActive()
              : this.setNextItemActive();
            break;
          } else return;
        case 37:
          if (this._horizontal && s) {
            this._horizontal === "rtl"
              ? this.setNextItemActive()
              : this.setPreviousItemActive();
            break;
          } else return;
        case 36:
          if (this._homeAndEnd && s) {
            this.setFirstItemActive();
            break;
          } else return;
        case 35:
          if (this._homeAndEnd && s) {
            this.setLastItemActive();
            break;
          } else return;
        case 33:
          if (this._pageUpAndDown.enabled && s) {
            let r = this._activeItemIndex - this._pageUpAndDown.delta;
            this._setActiveItemByIndex(r > 0 ? r : 0, 1);
            break;
          } else return;
        case 34:
          if (this._pageUpAndDown.enabled && s) {
            let r = this._activeItemIndex + this._pageUpAndDown.delta,
              o = this._getItemsArray().length;
            this._setActiveItemByIndex(r < o ? r : o - 1, -1);
            break;
          } else return;
        default:
          (s || le(e, "shiftKey")) && this._typeahead?.handleKey(e);
          return;
      }
      this._typeahead?.reset(), e.preventDefault();
    }
    get activeItemIndex() {
      return this._activeItemIndex;
    }
    get activeItem() {
      return this._activeItem;
    }
    isTyping() {
      return !!this._typeahead && this._typeahead.isTyping();
    }
    setFirstItemActive() {
      this._setActiveItemByIndex(0, 1);
    }
    setLastItemActive() {
      this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
    }
    setNextItemActive() {
      this._activeItemIndex < 0
        ? this.setFirstItemActive()
        : this._setActiveItemByDelta(1);
    }
    setPreviousItemActive() {
      this._activeItemIndex < 0 && this._wrap
        ? this.setLastItemActive()
        : this._setActiveItemByDelta(-1);
    }
    updateActiveItem(e) {
      let t = this._getItemsArray(),
        i = typeof e == "number" ? e : t.indexOf(e),
        s = t[i];
      (this._activeItem = s ?? null),
        (this._activeItemIndex = i),
        this._typeahead?.setCurrentSelectedItemIndex(i);
    }
    destroy() {
      this._typeaheadSubscription.unsubscribe(),
        this._itemChangesSubscription?.unsubscribe(),
        this._effectRef?.destroy(),
        this._typeahead?.destroy(),
        this.tabOut.complete(),
        this.change.complete();
    }
    _setActiveItemByDelta(e) {
      this._wrap
        ? this._setActiveInWrapMode(e)
        : this._setActiveInDefaultMode(e);
    }
    _setActiveInWrapMode(e) {
      let t = this._getItemsArray();
      for (let i = 1; i <= t.length; i++) {
        let s = (this._activeItemIndex + e * i + t.length) % t.length,
          r = t[s];
        if (!this._skipPredicateFn(r)) {
          this.setActiveItem(s);
          return;
        }
      }
    }
    _setActiveInDefaultMode(e) {
      this._setActiveItemByIndex(this._activeItemIndex + e, e);
    }
    _setActiveItemByIndex(e, t) {
      let i = this._getItemsArray();
      if (i[e]) {
        for (; this._skipPredicateFn(i[e]); ) if (((e += t), !i[e])) return;
        this.setActiveItem(e);
      }
    }
    _getItemsArray() {
      return ye(this._items)
        ? this._items()
        : this._items instanceof ve
        ? this._items.toArray()
        : this._items;
    }
    _itemsChanged(e) {
      if ((this._typeahead?.setItems(e), this._activeItem)) {
        let t = e.indexOf(this._activeItem);
        t > -1 &&
          t !== this._activeItemIndex &&
          ((this._activeItemIndex = t),
          this._typeahead?.setCurrentSelectedItemIndex(t));
      }
    }
  };
var pn = class extends je {
  constructor() {
    super(...arguments), (this._origin = "program");
  }
  setFocusOrigin(e) {
    return (this._origin = e), this;
  }
  setActiveItem(e) {
    super.setActiveItem(e),
      this.activeItem && this.activeItem.focus(this._origin);
  }
};
var He = (() => {
  class n {
    constructor(t) {
      this._platform = t;
    }
    isDisabled(t) {
      return t.hasAttribute("disabled");
    }
    isVisible(t) {
      return Ks(t) && getComputedStyle(t).visibility === "visible";
    }
    isTabbable(t) {
      if (!this._platform.isBrowser) return !1;
      let i = Zs(sr(t));
      if (i && (_n(i) === -1 || !this.isVisible(i))) return !1;
      let s = t.nodeName.toLowerCase(),
        r = _n(t);
      return t.hasAttribute("contenteditable")
        ? r !== -1
        : s === "iframe" ||
          s === "object" ||
          (this._platform.WEBKIT && this._platform.IOS && !ir(t))
        ? !1
        : s === "audio"
        ? t.hasAttribute("controls")
          ? r !== -1
          : !1
        : s === "video"
        ? r === -1
          ? !1
          : r !== null
          ? !0
          : this._platform.FIREFOX || t.hasAttribute("controls")
        : t.tabIndex >= 0;
    }
    isFocusable(t, i) {
      return (
        nr(t) &&
        !this.isDisabled(t) &&
        (i?.ignoreVisibility || this.isVisible(t))
      );
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(c(S));
      };
    }
    static {
      this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
function Zs(n) {
  try {
    return n.frameElement;
  } catch {
    return null;
  }
}
function Ks(n) {
  return !!(
    n.offsetWidth ||
    n.offsetHeight ||
    (typeof n.getClientRects == "function" && n.getClientRects().length)
  );
}
function qs(n) {
  let e = n.nodeName.toLowerCase();
  return e === "input" || e === "select" || e === "button" || e === "textarea";
}
function Qs(n) {
  return tr(n) && n.type == "hidden";
}
function Js(n) {
  return er(n) && n.hasAttribute("href");
}
function tr(n) {
  return n.nodeName.toLowerCase() == "input";
}
function er(n) {
  return n.nodeName.toLowerCase() == "a";
}
function vn(n) {
  if (!n.hasAttribute("tabindex") || n.tabIndex === void 0) return !1;
  let e = n.getAttribute("tabindex");
  return !!(e && !isNaN(parseInt(e, 10)));
}
function _n(n) {
  if (!vn(n)) return null;
  let e = parseInt(n.getAttribute("tabindex") || "", 10);
  return isNaN(e) ? -1 : e;
}
function ir(n) {
  let e = n.nodeName.toLowerCase(),
    t = e === "input" && n.type;
  return t === "text" || t === "password" || e === "select" || e === "textarea";
}
function nr(n) {
  return Qs(n)
    ? !1
    : qs(n) || Js(n) || n.hasAttribute("contenteditable") || vn(n);
}
function sr(n) {
  return (n.ownerDocument && n.ownerDocument.defaultView) || window;
}
var Be = class {
    get enabled() {
      return this._enabled;
    }
    set enabled(e) {
      (this._enabled = e),
        this._startAnchor &&
          this._endAnchor &&
          (this._toggleAnchorTabIndex(e, this._startAnchor),
          this._toggleAnchorTabIndex(e, this._endAnchor));
    }
    constructor(e, t, i, s, r = !1, o) {
      (this._element = e),
        (this._checker = t),
        (this._ngZone = i),
        (this._document = s),
        (this._injector = o),
        (this._hasAttached = !1),
        (this.startAnchorListener = () => this.focusLastTabbableElement()),
        (this.endAnchorListener = () => this.focusFirstTabbableElement()),
        (this._enabled = !0),
        r || this.attachAnchors();
    }
    destroy() {
      let e = this._startAnchor,
        t = this._endAnchor;
      e &&
        (e.removeEventListener("focus", this.startAnchorListener), e.remove()),
        t &&
          (t.removeEventListener("focus", this.endAnchorListener), t.remove()),
        (this._startAnchor = this._endAnchor = null),
        (this._hasAttached = !1);
    }
    attachAnchors() {
      return this._hasAttached
        ? !0
        : (this._ngZone.runOutsideAngular(() => {
            this._startAnchor ||
              ((this._startAnchor = this._createAnchor()),
              this._startAnchor.addEventListener(
                "focus",
                this.startAnchorListener
              )),
              this._endAnchor ||
                ((this._endAnchor = this._createAnchor()),
                this._endAnchor.addEventListener(
                  "focus",
                  this.endAnchorListener
                ));
          }),
          this._element.parentNode &&
            (this._element.parentNode.insertBefore(
              this._startAnchor,
              this._element
            ),
            this._element.parentNode.insertBefore(
              this._endAnchor,
              this._element.nextSibling
            ),
            (this._hasAttached = !0)),
          this._hasAttached);
    }
    focusInitialElementWhenReady(e) {
      return new Promise((t) => {
        this._executeOnStable(() => t(this.focusInitialElement(e)));
      });
    }
    focusFirstTabbableElementWhenReady(e) {
      return new Promise((t) => {
        this._executeOnStable(() => t(this.focusFirstTabbableElement(e)));
      });
    }
    focusLastTabbableElementWhenReady(e) {
      return new Promise((t) => {
        this._executeOnStable(() => t(this.focusLastTabbableElement(e)));
      });
    }
    _getRegionBoundary(e) {
      let t = this._element.querySelectorAll(
        `[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`
      );
      return e == "start"
        ? t.length
          ? t[0]
          : this._getFirstTabbableElement(this._element)
        : t.length
        ? t[t.length - 1]
        : this._getLastTabbableElement(this._element);
    }
    focusInitialElement(e) {
      let t = this._element.querySelector(
        "[cdk-focus-initial], [cdkFocusInitial]"
      );
      if (t) {
        if (!this._checker.isFocusable(t)) {
          let i = this._getFirstTabbableElement(t);
          return i?.focus(e), !!i;
        }
        return t.focus(e), !0;
      }
      return this.focusFirstTabbableElement(e);
    }
    focusFirstTabbableElement(e) {
      let t = this._getRegionBoundary("start");
      return t && t.focus(e), !!t;
    }
    focusLastTabbableElement(e) {
      let t = this._getRegionBoundary("end");
      return t && t.focus(e), !!t;
    }
    hasAttached() {
      return this._hasAttached;
    }
    _getFirstTabbableElement(e) {
      if (this._checker.isFocusable(e) && this._checker.isTabbable(e)) return e;
      let t = e.children;
      for (let i = 0; i < t.length; i++) {
        let s =
          t[i].nodeType === this._document.ELEMENT_NODE
            ? this._getFirstTabbableElement(t[i])
            : null;
        if (s) return s;
      }
      return null;
    }
    _getLastTabbableElement(e) {
      if (this._checker.isFocusable(e) && this._checker.isTabbable(e)) return e;
      let t = e.children;
      for (let i = t.length - 1; i >= 0; i--) {
        let s =
          t[i].nodeType === this._document.ELEMENT_NODE
            ? this._getLastTabbableElement(t[i])
            : null;
        if (s) return s;
      }
      return null;
    }
    _createAnchor() {
      let e = this._document.createElement("div");
      return (
        this._toggleAnchorTabIndex(this._enabled, e),
        e.classList.add("cdk-visually-hidden"),
        e.classList.add("cdk-focus-trap-anchor"),
        e.setAttribute("aria-hidden", "true"),
        e
      );
    }
    _toggleAnchorTabIndex(e, t) {
      e ? t.setAttribute("tabindex", "0") : t.removeAttribute("tabindex");
    }
    toggleAnchors(e) {
      this._startAnchor &&
        this._endAnchor &&
        (this._toggleAnchorTabIndex(e, this._startAnchor),
        this._toggleAnchorTabIndex(e, this._endAnchor));
    }
    _executeOnStable(e) {
      this._injector ? lt(e, { injector: this._injector }) : setTimeout(e);
    }
  },
  yn = (() => {
    class n {
      constructor(t, i, s) {
        (this._checker = t),
          (this._ngZone = i),
          (this._injector = D(V)),
          (this._document = s);
      }
      create(t, i = !1) {
        return new Be(
          t,
          this._checker,
          this._ngZone,
          this._document,
          i,
          this._injector
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(He), c(A), c(y));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function rr(n) {
  return n.buttons === 0 || n.detail === 0;
}
function or(n) {
  let e =
    (n.touches && n.touches[0]) || (n.changedTouches && n.changedTouches[0]);
  return (
    !!e &&
    e.identifier === -1 &&
    (e.radiusX == null || e.radiusX === 1) &&
    (e.radiusY == null || e.radiusY === 1)
  );
}
var ar = new E("cdk-input-modality-detector-options"),
  lr = { ignoreKeys: [18, 17, 224, 91, 16] },
  bn = 650,
  gt = Ve({ passive: !0, capture: !0 }),
  cr = (() => {
    class n {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(t, i, s, r) {
        (this._platform = t),
          (this._mostRecentTarget = null),
          (this._modality = new ei(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (o) => {
            this._options?.ignoreKeys?.some((a) => a === o.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = z(o)));
          }),
          (this._onMousedown = (o) => {
            Date.now() - this._lastTouchMs < bn ||
              (this._modality.next(rr(o) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = z(o)));
          }),
          (this._onTouchstart = (o) => {
            if (or(o)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = z(o));
          }),
          (this._options = _(_({}, lr), r)),
          (this.modalityDetected = this._modality.pipe(Ht(1))),
          (this.modalityChanged = this.modalityDetected.pipe(ge())),
          t.isBrowser &&
            i.runOutsideAngular(() => {
              s.addEventListener("keydown", this._onKeydown, gt),
                s.addEventListener("mousedown", this._onMousedown, gt),
                s.addEventListener("touchstart", this._onTouchstart, gt);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, gt),
            document.removeEventListener("mousedown", this._onMousedown, gt),
            document.removeEventListener("touchstart", this._onTouchstart, gt));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(S), c(A), c(y), c(ar, 8));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var he = (function (n) {
    return (
      (n[(n.IMMEDIATE = 0)] = "IMMEDIATE"),
      (n[(n.EVENTUAL = 1)] = "EVENTUAL"),
      n
    );
  })(he || {}),
  hr = new E("cdk-focus-monitor-default-options"),
  ce = Ve({ passive: !0, capture: !0 }),
  Cn = (() => {
    class n {
      constructor(t, i, s, r, o) {
        (this._ngZone = t),
          (this._platform = i),
          (this._inputModalityDetector = s),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1)
              ));
          }),
          (this._stopInputModalityDetector = new m()),
          (this._rootNodeFocusAndBlurListener = (a) => {
            let l = z(a);
            for (let h = l; h; h = h.parentElement)
              a.type === "focus" ? this._onFocus(a, h) : this._onBlur(a, h);
          }),
          (this._document = r),
          (this._detectionMode = o?.detectionMode || he.IMMEDIATE);
      }
      monitor(t, i = !1) {
        let s = _t(t);
        if (!this._platform.isBrowser || s.nodeType !== 1) return rt();
        let r = cn(s) || this._getDocument(),
          o = this._elementInfo.get(s);
        if (o) return i && (o.checkChildren = !0), o.subject;
        let a = { checkChildren: i, subject: new m(), rootNode: r };
        return (
          this._elementInfo.set(s, a),
          this._registerGlobalListeners(a),
          a.subject
        );
      }
      stopMonitoring(t) {
        let i = _t(t),
          s = this._elementInfo.get(i);
        s &&
          (s.subject.complete(),
          this._setClasses(i),
          this._elementInfo.delete(i),
          this._removeGlobalListeners(s));
      }
      focusVia(t, i, s) {
        let r = _t(t),
          o = this._getDocument().activeElement;
        r === o
          ? this._getClosestElementsInfo(r).forEach(([a, l]) =>
              this._originChanged(a, i, l)
            )
          : (this._setOrigin(i), typeof r.focus == "function" && r.focus(s));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((t, i) => this.stopMonitoring(i));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(t) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(t)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
          ? this._lastFocusOrigin
          : t && this._isLastInteractionFromInputLabel(t)
          ? "mouse"
          : "program";
      }
      _shouldBeAttributedToTouch(t) {
        return (
          this._detectionMode === he.EVENTUAL ||
          !!t?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(t, i) {
        t.classList.toggle("cdk-focused", !!i),
          t.classList.toggle("cdk-touch-focused", i === "touch"),
          t.classList.toggle("cdk-keyboard-focused", i === "keyboard"),
          t.classList.toggle("cdk-mouse-focused", i === "mouse"),
          t.classList.toggle("cdk-program-focused", i === "program");
      }
      _setOrigin(t, i = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = t),
            (this._originFromTouchInteraction = t === "touch" && i),
            this._detectionMode === he.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let s = this._originFromTouchInteraction ? bn : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), s);
          }
        });
      }
      _onFocus(t, i) {
        let s = this._elementInfo.get(i),
          r = z(t);
        !s ||
          (!s.checkChildren && i !== r) ||
          this._originChanged(i, this._getFocusOrigin(r), s);
      }
      _onBlur(t, i) {
        let s = this._elementInfo.get(i);
        !s ||
          (s.checkChildren &&
            t.relatedTarget instanceof Node &&
            i.contains(t.relatedTarget)) ||
          (this._setClasses(i), this._emitOrigin(s, null));
      }
      _emitOrigin(t, i) {
        t.subject.observers.length && this._ngZone.run(() => t.subject.next(i));
      }
      _registerGlobalListeners(t) {
        if (!this._platform.isBrowser) return;
        let i = t.rootNode,
          s = this._rootNodeFocusListenerCount.get(i) || 0;
        s ||
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener("focus", this._rootNodeFocusAndBlurListener, ce),
              i.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                ce
              );
          }),
          this._rootNodeFocusListenerCount.set(i, s + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(Z(this._stopInputModalityDetector))
              .subscribe((r) => {
                this._setOrigin(r, !0);
              }));
      }
      _removeGlobalListeners(t) {
        let i = t.rootNode;
        if (this._rootNodeFocusListenerCount.has(i)) {
          let s = this._rootNodeFocusListenerCount.get(i);
          s > 1
            ? this._rootNodeFocusListenerCount.set(i, s - 1)
            : (i.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                ce
              ),
              i.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                ce
              ),
              this._rootNodeFocusListenerCount.delete(i));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(t, i, s) {
        this._setClasses(t, i),
          this._emitOrigin(s, i),
          (this._lastFocusOrigin = i);
      }
      _getClosestElementsInfo(t) {
        let i = [];
        return (
          this._elementInfo.forEach((s, r) => {
            (r === t || (s.checkChildren && r.contains(t))) && i.push([r, s]);
          }),
          i
        );
      }
      _isLastInteractionFromInputLabel(t) {
        let { _mostRecentTarget: i, mostRecentModality: s } =
          this._inputModalityDetector;
        if (
          s !== "mouse" ||
          !i ||
          i === t ||
          (t.nodeName !== "INPUT" && t.nodeName !== "TEXTAREA") ||
          t.disabled
        )
          return !1;
        let r = t.labels;
        if (r) {
          for (let o = 0; o < r.length; o++) if (r[o].contains(i)) return !0;
        }
        return !1;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(A), c(S), c(cr), c(y, 8), c(hr, 8));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var tt = (function (n) {
    return (
      (n[(n.NONE = 0)] = "NONE"),
      (n[(n.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (n[(n.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      n
    );
  })(tt || {}),
  gn = "cdk-high-contrast-black-on-white",
  mn = "cdk-high-contrast-white-on-black",
  Ne = "cdk-high-contrast-active",
  dr = (() => {
    class n {
      constructor(t, i) {
        (this._platform = t),
          (this._document = i),
          (this._breakpointSubscription = D(fn)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return tt.NONE;
        let t = this._document.createElement("div");
        (t.style.backgroundColor = "rgb(1,2,3)"),
          (t.style.position = "absolute"),
          this._document.body.appendChild(t);
        let i = this._document.defaultView || window,
          s = i && i.getComputedStyle ? i.getComputedStyle(t) : null,
          r = ((s && s.backgroundColor) || "").replace(/ /g, "");
        switch ((t.remove(), r)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return tt.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return tt.BLACK_ON_WHITE;
        }
        return tt.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let t = this._document.body.classList;
          t.remove(Ne, gn, mn), (this._hasCheckedHighContrastMode = !0);
          let i = this.getHighContrastMode();
          i === tt.BLACK_ON_WHITE
            ? t.add(Ne, gn)
            : i === tt.WHITE_ON_BLACK && t.add(Ne, mn);
        }
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(S), c(y));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  wn = (() => {
    class n {
      constructor(t) {
        t._applyBodyHighContrastModeCssClasses();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(dr));
        };
      }
      static {
        this.ɵmod = C({ type: n });
      }
      static {
        this.ɵinj = b({ imports: [hn] });
      }
    }
    return n;
  })();
g();
g();
g();
var fr = new E("cdk-dir-doc", { providedIn: "root", factory: pr });
function pr() {
  return D(y);
}
var _r =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function gr(n) {
  let e = n?.toLowerCase() || "";
  return e === "auto" && typeof navigator < "u" && navigator?.language
    ? _r.test(navigator.language)
      ? "rtl"
      : "ltr"
    : e === "rtl"
    ? "rtl"
    : "ltr";
}
var Rt = (() => {
  class n {
    constructor(t) {
      if (((this.value = "ltr"), (this.change = new P()), t)) {
        let i = t.body ? t.body.dir : null,
          s = t.documentElement ? t.documentElement.dir : null;
        this.value = gr(i || s || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(c(fr, 8));
      };
    }
    static {
      this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
  }
  return n;
})();
var xt = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = C({ type: n });
    }
    static {
      this.ɵinj = b({});
    }
  }
  return n;
})();
var vr = 20,
  Dn = (() => {
    class n {
      constructor(t, i, s) {
        (this._ngZone = t),
          (this._platform = i),
          (this._scrolled = new m()),
          (this._globalSubscription = null),
          (this._scrolledCount = 0),
          (this.scrollContainers = new Map()),
          (this._document = s);
      }
      register(t) {
        this.scrollContainers.has(t) ||
          this.scrollContainers.set(
            t,
            t.elementScrolled().subscribe(() => this._scrolled.next(t))
          );
      }
      deregister(t) {
        let i = this.scrollContainers.get(t);
        i && (i.unsubscribe(), this.scrollContainers.delete(t));
      }
      scrolled(t = vr) {
        return this._platform.isBrowser
          ? new jt((i) => {
              this._globalSubscription || this._addGlobalListener();
              let s =
                t > 0
                  ? this._scrolled.pipe(pe(t)).subscribe(i)
                  : this._scrolled.subscribe(i);
              return (
                this._scrolledCount++,
                () => {
                  s.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener();
                }
              );
            })
          : rt();
      }
      ngOnDestroy() {
        this._removeGlobalListener(),
          this.scrollContainers.forEach((t, i) => this.deregister(i)),
          this._scrolled.complete();
      }
      ancestorScrolled(t, i) {
        let s = this.getAncestorScrollContainers(t);
        return this.scrolled(i).pipe(ot((r) => !r || s.indexOf(r) > -1));
      }
      getAncestorScrollContainers(t) {
        let i = [];
        return (
          this.scrollContainers.forEach((s, r) => {
            this._scrollableContainsElement(r, t) && i.push(r);
          }),
          i
        );
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _scrollableContainsElement(t, i) {
        let s = _t(i),
          r = t.getElementRef().nativeElement;
        do if (s == r) return !0;
        while ((s = s.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let t = this._getWindow();
          return ai(t.document, "scroll").subscribe(() =>
            this._scrolled.next()
          );
        });
      }
      _removeGlobalListener() {
        this._globalSubscription &&
          (this._globalSubscription.unsubscribe(),
          (this._globalSubscription = null));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(A), c(S), c(y, 8));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var yr = 20,
  Ue = (() => {
    class n {
      constructor(t, i, s) {
        (this._platform = t),
          (this._change = new m()),
          (this._changeListener = (r) => {
            this._change.next(r);
          }),
          (this._document = s),
          i.runOutsideAngular(() => {
            if (t.isBrowser) {
              let r = this._getWindow();
              r.addEventListener("resize", this._changeListener),
                r.addEventListener("orientationchange", this._changeListener);
            }
            this.change().subscribe(() => (this._viewportSize = null));
          });
      }
      ngOnDestroy() {
        if (this._platform.isBrowser) {
          let t = this._getWindow();
          t.removeEventListener("resize", this._changeListener),
            t.removeEventListener("orientationchange", this._changeListener);
        }
        this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let t = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), t;
      }
      getViewportRect() {
        let t = this.getViewportScrollPosition(),
          { width: i, height: s } = this.getViewportSize();
        return {
          top: t.top,
          left: t.left,
          bottom: t.top + s,
          right: t.left + i,
          height: s,
          width: i,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let t = this._document,
          i = this._getWindow(),
          s = t.documentElement,
          r = s.getBoundingClientRect(),
          o = -r.top || t.body.scrollTop || i.scrollY || s.scrollTop || 0,
          a = -r.left || t.body.scrollLeft || i.scrollX || s.scrollLeft || 0;
        return { top: o, left: a };
      }
      change(t = yr) {
        return t > 0 ? this._change.pipe(pe(t)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let t = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: t.innerWidth, height: t.innerHeight }
          : { width: 0, height: 0 };
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(S), c(A), c(y, 8));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var En = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = C({ type: n });
      }
      static {
        this.ɵinj = b({});
      }
    }
    return n;
  })(),
  We = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = C({ type: n });
      }
      static {
        this.ɵinj = b({ imports: [xt, En, xt, En] });
      }
    }
    return n;
  })();
g();
var Vt = class {
    attach(e) {
      return (this._attachedHost = e), e.attach(this);
    }
    detach() {
      let e = this._attachedHost;
      e != null && ((this._attachedHost = null), e.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(e) {
      this._attachedHost = e;
    }
  },
  mt = class extends Vt {
    constructor(e, t, i, s, r) {
      super(),
        (this.component = e),
        (this.viewContainerRef = t),
        (this.injector = i),
        (this.componentFactoryResolver = s),
        (this.projectableNodes = r);
    }
  },
  vt = class extends Vt {
    constructor(e, t, i, s) {
      super(),
        (this.templateRef = e),
        (this.viewContainerRef = t),
        (this.context = i),
        (this.injector = s);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(e, t = this.context) {
      return (this.context = t), super.attach(e);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  ze = class extends Vt {
    constructor(e) {
      super(), (this.element = e instanceof I ? e.nativeElement : e);
    }
  },
  yt = class {
    constructor() {
      (this._isDisposed = !1), (this.attachDomPortal = null);
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(e) {
      if (e instanceof mt)
        return (this._attachedPortal = e), this.attachComponentPortal(e);
      if (e instanceof vt)
        return (this._attachedPortal = e), this.attachTemplatePortal(e);
      if (this.attachDomPortal && e instanceof ze)
        return (this._attachedPortal = e), this.attachDomPortal(e);
    }
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(e) {
      this._disposeFn = e;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var de = class extends yt {
  constructor(e, t, i, s, r) {
    super(),
      (this.outletElement = e),
      (this._componentFactoryResolver = t),
      (this._appRef = i),
      (this._defaultInjector = s),
      (this.attachDomPortal = (o) => {
        this._document;
        let a = o.element;
        a.parentNode;
        let l = this._document.createComment("dom-portal");
        a.parentNode.insertBefore(l, a),
          this.outletElement.appendChild(a),
          (this._attachedPortal = o),
          super.setDisposeFn(() => {
            l.parentNode && l.parentNode.replaceChild(a, l);
          });
      }),
      (this._document = r);
  }
  attachComponentPortal(e) {
    let i = (
        e.componentFactoryResolver || this._componentFactoryResolver
      ).resolveComponentFactory(e.component),
      s;
    return (
      e.viewContainerRef
        ? ((s = e.viewContainerRef.createComponent(
            i,
            e.viewContainerRef.length,
            e.injector || e.viewContainerRef.injector,
            e.projectableNodes || void 0
          )),
          this.setDisposeFn(() => s.destroy()))
        : ((s = i.create(e.injector || this._defaultInjector || V.NULL)),
          this._appRef.attachView(s.hostView),
          this.setDisposeFn(() => {
            this._appRef.viewCount > 0 && this._appRef.detachView(s.hostView),
              s.destroy();
          })),
      this.outletElement.appendChild(this._getComponentRootNode(s)),
      (this._attachedPortal = e),
      s
    );
  }
  attachTemplatePortal(e) {
    let t = e.viewContainerRef,
      i = t.createEmbeddedView(e.templateRef, e.context, {
        injector: e.injector,
      });
    return (
      i.rootNodes.forEach((s) => this.outletElement.appendChild(s)),
      i.detectChanges(),
      this.setDisposeFn(() => {
        let s = t.indexOf(i);
        s !== -1 && t.remove(s);
      }),
      (this._attachedPortal = e),
      i
    );
  }
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(e) {
    return e.hostView.rootNodes[0];
  }
};
var Ge = (() => {
  class n extends yt {
    constructor(t, i, s) {
      super(),
        (this._componentFactoryResolver = t),
        (this._viewContainerRef = i),
        (this._isInitialized = !1),
        (this.attached = new P()),
        (this.attachDomPortal = (r) => {
          this._document;
          let o = r.element;
          o.parentNode;
          let a = this._document.createComment("dom-portal");
          r.setAttachedHost(this),
            o.parentNode.insertBefore(a, o),
            this._getRootNode().appendChild(o),
            (this._attachedPortal = r),
            super.setDisposeFn(() => {
              a.parentNode && a.parentNode.replaceChild(o, a);
            });
        }),
        (this._document = s);
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(t) {
      (this.hasAttached() && !t && !this._isInitialized) ||
        (this.hasAttached() && super.detach(),
        t && super.attach(t),
        (this._attachedPortal = t || null));
    }
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), (this._attachedRef = this._attachedPortal = null);
    }
    attachComponentPortal(t) {
      t.setAttachedHost(this);
      let i =
          t.viewContainerRef != null
            ? t.viewContainerRef
            : this._viewContainerRef,
        r = (
          t.componentFactoryResolver || this._componentFactoryResolver
        ).resolveComponentFactory(t.component),
        o = i.createComponent(
          r,
          i.length,
          t.injector || i.injector,
          t.projectableNodes || void 0
        );
      return (
        i !== this._viewContainerRef &&
          this._getRootNode().appendChild(o.hostView.rootNodes[0]),
        super.setDisposeFn(() => o.destroy()),
        (this._attachedPortal = t),
        (this._attachedRef = o),
        this.attached.emit(o),
        o
      );
    }
    attachTemplatePortal(t) {
      t.setAttachedHost(this);
      let i = this._viewContainerRef.createEmbeddedView(
        t.templateRef,
        t.context,
        { injector: t.injector }
      );
      return (
        super.setDisposeFn(() => this._viewContainerRef.clear()),
        (this._attachedPortal = t),
        (this._attachedRef = i),
        this.attached.emit(i),
        i
      );
    }
    _getRootNode() {
      let t = this._viewContainerRef.element.nativeElement;
      return t.nodeType === t.ELEMENT_NODE ? t : t.parentNode;
    }
    static {
      this.ɵfac = function (i) {
        return new (i || n)(u(Wt), u(zt), u(y));
      };
    }
    static {
      this.ɵdir = v({
        type: n,
        selectors: [["", "cdkPortalOutlet", ""]],
        inputs: { portal: [0, "cdkPortalOutlet", "portal"] },
        outputs: { attached: "attached" },
        exportAs: ["cdkPortalOutlet"],
        standalone: !0,
        features: [M],
      });
    }
  }
  return n;
})();
var Pt = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = C({ type: n });
    }
    static {
      this.ɵinj = b({});
    }
  }
  return n;
})();
var An = ln(),
  Ye = class {
    constructor(e, t) {
      (this._viewportRuler = e),
        (this._previousHTMLStyles = { top: "", left: "" }),
        (this._isEnabled = !1),
        (this._document = t);
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let e = this._document.documentElement;
        (this._previousScrollPosition =
          this._viewportRuler.getViewportScrollPosition()),
          (this._previousHTMLStyles.left = e.style.left || ""),
          (this._previousHTMLStyles.top = e.style.top || ""),
          (e.style.left = w(-this._previousScrollPosition.left)),
          (e.style.top = w(-this._previousScrollPosition.top)),
          e.classList.add("cdk-global-scrollblock"),
          (this._isEnabled = !0);
      }
    }
    disable() {
      if (this._isEnabled) {
        let e = this._document.documentElement,
          t = this._document.body,
          i = e.style,
          s = t.style,
          r = i.scrollBehavior || "",
          o = s.scrollBehavior || "";
        (this._isEnabled = !1),
          (i.left = this._previousHTMLStyles.left),
          (i.top = this._previousHTMLStyles.top),
          e.classList.remove("cdk-global-scrollblock"),
          An && (i.scrollBehavior = s.scrollBehavior = "auto"),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top
          ),
          An && ((i.scrollBehavior = r), (s.scrollBehavior = o));
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          "cdk-global-scrollblock"
        ) ||
        this._isEnabled
      )
        return !1;
      let t = this._document.body,
        i = this._viewportRuler.getViewportSize();
      return t.scrollHeight > i.height || t.scrollWidth > i.width;
    }
  };
var $e = class {
    constructor(e, t, i, s) {
      (this._scrollDispatcher = e),
        (this._ngZone = t),
        (this._viewportRuler = i),
        (this._config = s),
        (this._scrollSubscription = null),
        (this._detach = () => {
          this.disable(),
            this._overlayRef.hasAttached() &&
              this._ngZone.run(() => this._overlayRef.detach());
        });
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (this._scrollSubscription) return;
      let e = this._scrollDispatcher
        .scrolled(0)
        .pipe(
          ot(
            (t) =>
              !t ||
              !this._overlayRef.overlayElement.contains(
                t.getElementRef().nativeElement
              )
          )
        );
      this._config && this._config.threshold && this._config.threshold > 1
        ? ((this._initialScrollPosition =
            this._viewportRuler.getViewportScrollPosition().top),
          (this._scrollSubscription = e.subscribe(() => {
            let t = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(t - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          })))
        : (this._scrollSubscription = e.subscribe(this._detach));
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  ue = class {
    enable() {}
    disable() {}
    attach() {}
  };
function Xe(n, e) {
  return e.some((t) => {
    let i = n.bottom < t.top,
      s = n.top > t.bottom,
      r = n.right < t.left,
      o = n.left > t.right;
    return i || s || r || o;
  });
}
function In(n, e) {
  return e.some((t) => {
    let i = n.top < t.top,
      s = n.bottom > t.bottom,
      r = n.left < t.left,
      o = n.right > t.right;
    return i || s || r || o;
  });
}
var Ze = class {
    constructor(e, t, i, s) {
      (this._scrollDispatcher = e),
        (this._viewportRuler = t),
        (this._ngZone = i),
        (this._config = s),
        (this._scrollSubscription = null);
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (!this._scrollSubscription) {
        let e = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher
          .scrolled(e)
          .subscribe(() => {
            if (
              (this._overlayRef.updatePosition(),
              this._config && this._config.autoClose)
            ) {
              let t = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: i, height: s } = this._viewportRuler.getViewportSize();
              Xe(t, [
                { width: i, height: s, bottom: s, right: i, top: 0, left: 0 },
              ]) &&
                (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  Cr = (() => {
    class n {
      constructor(t, i, s, r) {
        (this._scrollDispatcher = t),
          (this._viewportRuler = i),
          (this._ngZone = s),
          (this.noop = () => new ue()),
          (this.close = (o) =>
            new $e(
              this._scrollDispatcher,
              this._ngZone,
              this._viewportRuler,
              o
            )),
          (this.block = () => new Ye(this._viewportRuler, this._document)),
          (this.reposition = (o) =>
            new Ze(
              this._scrollDispatcher,
              this._viewportRuler,
              this._ngZone,
              o
            )),
          (this._document = r);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(Dn), c(Ue), c(A), c(y));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  Tt = class {
    constructor(e) {
      if (
        ((this.scrollStrategy = new ue()),
        (this.panelClass = ""),
        (this.hasBackdrop = !1),
        (this.backdropClass = "cdk-overlay-dark-backdrop"),
        (this.disposeOnNavigation = !1),
        e)
      ) {
        let t = Object.keys(e);
        for (let i of t) e[i] !== void 0 && (this[i] = e[i]);
      }
    }
  };
var Ke = class {
  constructor(e, t) {
    (this.connectionPair = e), (this.scrollableViewProperties = t);
  }
};
var Rn = (() => {
    class n {
      constructor(t) {
        (this._attachedOverlays = []), (this._document = t);
      }
      ngOnDestroy() {
        this.detach();
      }
      add(t) {
        this.remove(t), this._attachedOverlays.push(t);
      }
      remove(t) {
        let i = this._attachedOverlays.indexOf(t);
        i > -1 && this._attachedOverlays.splice(i, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(y));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  wr = (() => {
    class n extends Rn {
      constructor(t, i) {
        super(t),
          (this._ngZone = i),
          (this._keydownListener = (s) => {
            let r = this._attachedOverlays;
            for (let o = r.length - 1; o > -1; o--)
              if (r[o]._keydownEvents.observers.length > 0) {
                let a = r[o]._keydownEvents;
                this._ngZone ? this._ngZone.run(() => a.next(s)) : a.next(s);
                break;
              }
          });
      }
      add(t) {
        super.add(t),
          this._isAttached ||
            (this._ngZone
              ? this._ngZone.runOutsideAngular(() =>
                  this._document.body.addEventListener(
                    "keydown",
                    this._keydownListener
                  )
                )
              : this._document.body.addEventListener(
                  "keydown",
                  this._keydownListener
                ),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached &&
          (this._document.body.removeEventListener(
            "keydown",
            this._keydownListener
          ),
          (this._isAttached = !1));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(y), c(A, 8));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  Er = (() => {
    class n extends Rn {
      constructor(t, i, s) {
        super(t),
          (this._platform = i),
          (this._ngZone = s),
          (this._cursorStyleIsSet = !1),
          (this._pointerDownListener = (r) => {
            this._pointerDownEventTarget = z(r);
          }),
          (this._clickListener = (r) => {
            let o = z(r),
              a =
                r.type === "click" && this._pointerDownEventTarget
                  ? this._pointerDownEventTarget
                  : o;
            this._pointerDownEventTarget = null;
            let l = this._attachedOverlays.slice();
            for (let h = l.length - 1; h > -1; h--) {
              let d = l[h];
              if (
                d._outsidePointerEvents.observers.length < 1 ||
                !d.hasAttached()
              )
                continue;
              if (On(d.overlayElement, o) || On(d.overlayElement, a)) break;
              let p = d._outsidePointerEvents;
              this._ngZone ? this._ngZone.run(() => p.next(r)) : p.next(r);
            }
          });
      }
      add(t) {
        if ((super.add(t), !this._isAttached)) {
          let i = this._document.body;
          this._ngZone
            ? this._ngZone.runOutsideAngular(() => this._addEventListeners(i))
            : this._addEventListeners(i),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = i.style.cursor),
              (i.style.cursor = "pointer"),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        if (this._isAttached) {
          let t = this._document.body;
          t.removeEventListener("pointerdown", this._pointerDownListener, !0),
            t.removeEventListener("click", this._clickListener, !0),
            t.removeEventListener("auxclick", this._clickListener, !0),
            t.removeEventListener("contextmenu", this._clickListener, !0),
            this._platform.IOS &&
              this._cursorStyleIsSet &&
              ((t.style.cursor = this._cursorOriginalValue),
              (this._cursorStyleIsSet = !1)),
            (this._isAttached = !1);
        }
      }
      _addEventListeners(t) {
        t.addEventListener("pointerdown", this._pointerDownListener, !0),
          t.addEventListener("click", this._clickListener, !0),
          t.addEventListener("auxclick", this._clickListener, !0),
          t.addEventListener("contextmenu", this._clickListener, !0);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(y), c(S), c(A, 8));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function On(n, e) {
  let t = typeof ShadowRoot < "u" && ShadowRoot,
    i = e;
  for (; i; ) {
    if (i === n) return !0;
    i = t && i instanceof ShadowRoot ? i.host : i.parentNode;
  }
  return !1;
}
var fe = (() => {
    class n {
      constructor(t, i) {
        (this._platform = i), (this._document = t);
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let t = "cdk-overlay-container";
        if (this._platform.isBrowser || Pe()) {
          let s = this._document.querySelectorAll(
            `.${t}[platform="server"], .${t}[platform="test"]`
          );
          for (let r = 0; r < s.length; r++) s[r].remove();
        }
        let i = this._document.createElement("div");
        i.classList.add(t),
          Pe()
            ? i.setAttribute("platform", "test")
            : this._platform.isBrowser || i.setAttribute("platform", "server"),
          this._document.body.appendChild(i),
          (this._containerElement = i);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(y), c(S));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  it = class {
    constructor(e, t, i, s, r, o, a, l, h, d = !1, p) {
      (this._portalOutlet = e),
        (this._host = t),
        (this._pane = i),
        (this._config = s),
        (this._ngZone = r),
        (this._keyboardDispatcher = o),
        (this._document = a),
        (this._location = l),
        (this._outsideClickDispatcher = h),
        (this._animationsDisabled = d),
        (this._injector = p),
        (this._backdropElement = null),
        (this._backdropClick = new m()),
        (this._attachments = new m()),
        (this._detachments = new m()),
        (this._locationChanges = st.EMPTY),
        (this._backdropClickHandler = (R) => this._backdropClick.next(R)),
        (this._backdropTransitionendHandler = (R) => {
          this._disposeBackdrop(R.target);
        }),
        (this._keydownEvents = new m()),
        (this._outsidePointerEvents = new m()),
        (this._renders = new m()),
        s.scrollStrategy &&
          ((this._scrollStrategy = s.scrollStrategy),
          this._scrollStrategy.attach(this)),
        (this._positionStrategy = s.positionStrategy),
        (this._afterRenderRef = B(() =>
          _i(
            () => {
              this._renders.next();
            },
            { injector: this._injector }
          )
        ));
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(e) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let t = this._portalOutlet.attach(e);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._afterNextRenderRef?.destroy(),
        (this._afterNextRenderRef = lt(
          () => {
            this.hasAttached() && this.updatePosition();
          },
          { injector: this._injector }
        )),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() =>
            this.dispose()
          )),
        this._outsideClickDispatcher.add(this),
        typeof t?.onDestroy == "function" &&
          t.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => this.detach())
              );
          }),
        t
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy &&
          this._positionStrategy.detach &&
          this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let e = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenEmpty(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        e
      );
    }
    dispose() {
      let e = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        this._afterNextRenderRef?.destroy(),
        (this._previousHostParent = this._pane = this._host = null),
        e && this._detachments.next(),
        this._detachments.complete(),
        this._afterRenderRef.destroy(),
        this._renders.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(e) {
      e !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = e),
        this.hasAttached() && (e.attach(this), this.updatePosition()));
    }
    updateSize(e) {
      (this._config = _(_({}, this._config), e)), this._updateElementSize();
    }
    setDirection(e) {
      (this._config = F(_({}, this._config), { direction: e })),
        this._updateElementDirection();
    }
    addPanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !0);
    }
    removePanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !1);
    }
    getDirection() {
      let e = this._config.direction;
      return e ? (typeof e == "string" ? e : e.value) : "ltr";
    }
    updateScrollStrategy(e) {
      e !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = e),
        this.hasAttached() && (e.attach(this), e.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let e = this._pane.style;
      (e.width = w(this._config.width)),
        (e.height = w(this._config.height)),
        (e.minWidth = w(this._config.minWidth)),
        (e.minHeight = w(this._config.minHeight)),
        (e.maxWidth = w(this._config.maxWidth)),
        (e.maxHeight = w(this._config.maxHeight));
    }
    _togglePointerEvents(e) {
      this._pane.style.pointerEvents = e ? "" : "none";
    }
    _attachBackdrop() {
      let e = "cdk-overlay-backdrop-showing";
      (this._backdropElement = this._document.createElement("div")),
        this._backdropElement.classList.add("cdk-overlay-backdrop"),
        this._animationsDisabled &&
          this._backdropElement.classList.add(
            "cdk-overlay-backdrop-noop-animation"
          ),
        this._config.backdropClass &&
          this._toggleClasses(
            this._backdropElement,
            this._config.backdropClass,
            !0
          ),
        this._host.parentElement.insertBefore(
          this._backdropElement,
          this._host
        ),
        this._backdropElement.addEventListener(
          "click",
          this._backdropClickHandler
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < "u"
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => {
                this._backdropElement && this._backdropElement.classList.add(e);
              });
            })
          : this._backdropElement.classList.add(e);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      let e = this._backdropElement;
      if (e) {
        if (this._animationsDisabled) {
          this._disposeBackdrop(e);
          return;
        }
        e.classList.remove("cdk-overlay-backdrop-showing"),
          this._ngZone.runOutsideAngular(() => {
            e.addEventListener(
              "transitionend",
              this._backdropTransitionendHandler
            );
          }),
          (e.style.pointerEvents = "none"),
          (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
            setTimeout(() => {
              this._disposeBackdrop(e);
            }, 500)
          ));
      }
    }
    _toggleClasses(e, t, i) {
      let s = pt(t || []).filter((r) => !!r);
      s.length && (i ? e.classList.add(...s) : e.classList.remove(...s));
    }
    _detachContentWhenEmpty() {
      this._ngZone.runOutsideAngular(() => {
        let e = this._renders
          .pipe(Z(li(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane &&
                this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
              this._host &&
                this._host.parentElement &&
                ((this._previousHostParent = this._host.parentElement),
                this._host.remove()),
              e.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let e = this._scrollStrategy;
      e && (e.disable(), e.detach && e.detach());
    }
    _disposeBackdrop(e) {
      e &&
        (e.removeEventListener("click", this._backdropClickHandler),
        e.removeEventListener(
          "transitionend",
          this._backdropTransitionendHandler
        ),
        e.remove(),
        this._backdropElement === e && (this._backdropElement = null)),
        this._backdropTimeout &&
          (clearTimeout(this._backdropTimeout),
          (this._backdropTimeout = void 0));
    }
  },
  Sn = "cdk-overlay-connected-position-bounding-box",
  Dr = /([A-Za-z%]+)$/,
  qe = class {
    get positions() {
      return this._preferredPositions;
    }
    constructor(e, t, i, s, r) {
      (this._viewportRuler = t),
        (this._document = i),
        (this._platform = s),
        (this._overlayContainer = r),
        (this._lastBoundingBoxSize = { width: 0, height: 0 }),
        (this._isPushed = !1),
        (this._canPush = !0),
        (this._growAfterOpen = !1),
        (this._hasFlexibleDimensions = !0),
        (this._positionLocked = !1),
        (this._viewportMargin = 0),
        (this._scrollables = []),
        (this._preferredPositions = []),
        (this._positionChanges = new m()),
        (this._resizeSubscription = st.EMPTY),
        (this._offsetX = 0),
        (this._offsetY = 0),
        (this._appliedPanelClasses = []),
        (this.positionChanges = this._positionChanges),
        this.setOrigin(e);
    }
    attach(e) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        e.hostElement.classList.add(Sn),
        (this._overlayRef = e),
        (this._boundingBox = e.hostElement),
        (this._pane = e.overlayElement),
        (this._isDisposed = !1),
        (this._isInitialRender = !0),
        (this._lastPosition = null),
        this._resizeSubscription.unsubscribe(),
        (this._resizeSubscription = this._viewportRuler
          .change()
          .subscribe(() => {
            (this._isInitialRender = !0), this.apply();
          }));
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender &&
        this._positionLocked &&
        this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let e = this._originRect,
        t = this._overlayRect,
        i = this._viewportRect,
        s = this._containerRect,
        r = [],
        o;
      for (let a of this._preferredPositions) {
        let l = this._getOriginPoint(e, s, a),
          h = this._getOverlayPoint(l, t, a),
          d = this._getOverlayFit(h, t, i, a);
        if (d.isCompletelyWithinViewport) {
          (this._isPushed = !1), this._applyPosition(a, l);
          return;
        }
        if (this._canFitWithFlexibleDimensions(d, h, i)) {
          r.push({
            position: a,
            origin: l,
            overlayRect: t,
            boundingBoxRect: this._calculateBoundingBoxRect(l, a),
          });
          continue;
        }
        (!o || o.overlayFit.visibleArea < d.visibleArea) &&
          (o = {
            overlayFit: d,
            overlayPoint: h,
            originPoint: l,
            position: a,
            overlayRect: t,
          });
      }
      if (r.length) {
        let a = null,
          l = -1;
        for (let h of r) {
          let d =
            h.boundingBoxRect.width *
            h.boundingBoxRect.height *
            (h.position.weight || 1);
          d > l && ((l = d), (a = h));
        }
        (this._isPushed = !1), this._applyPosition(a.position, a.origin);
        return;
      }
      if (this._canPush) {
        (this._isPushed = !0), this._applyPosition(o.position, o.originPoint);
        return;
      }
      this._applyPosition(o.position, o.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        (this._lastPosition = null),
        (this._previousPushAmount = null),
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          et(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(Sn),
        this.detach(),
        this._positionChanges.complete(),
        (this._overlayRef = this._boundingBox = null),
        (this._isDisposed = !0));
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let e = this._lastPosition;
      if (e) {
        (this._originRect = this._getOriginRect()),
          (this._overlayRect = this._pane.getBoundingClientRect()),
          (this._viewportRect = this._getNarrowedViewportRect()),
          (this._containerRect = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect());
        let t = this._getOriginPoint(this._originRect, this._containerRect, e);
        this._applyPosition(e, t);
      } else this.apply();
    }
    withScrollableContainers(e) {
      return (this._scrollables = e), this;
    }
    withPositions(e) {
      return (
        (this._preferredPositions = e),
        e.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
      );
    }
    withViewportMargin(e) {
      return (this._viewportMargin = e), this;
    }
    withFlexibleDimensions(e = !0) {
      return (this._hasFlexibleDimensions = e), this;
    }
    withGrowAfterOpen(e = !0) {
      return (this._growAfterOpen = e), this;
    }
    withPush(e = !0) {
      return (this._canPush = e), this;
    }
    withLockedPosition(e = !0) {
      return (this._positionLocked = e), this;
    }
    setOrigin(e) {
      return (this._origin = e), this;
    }
    withDefaultOffsetX(e) {
      return (this._offsetX = e), this;
    }
    withDefaultOffsetY(e) {
      return (this._offsetY = e), this;
    }
    withTransformOriginOn(e) {
      return (this._transformOriginSelector = e), this;
    }
    _getOriginPoint(e, t, i) {
      let s;
      if (i.originX == "center") s = e.left + e.width / 2;
      else {
        let o = this._isRtl() ? e.right : e.left,
          a = this._isRtl() ? e.left : e.right;
        s = i.originX == "start" ? o : a;
      }
      t.left < 0 && (s -= t.left);
      let r;
      return (
        i.originY == "center"
          ? (r = e.top + e.height / 2)
          : (r = i.originY == "top" ? e.top : e.bottom),
        t.top < 0 && (r -= t.top),
        { x: s, y: r }
      );
    }
    _getOverlayPoint(e, t, i) {
      let s;
      i.overlayX == "center"
        ? (s = -t.width / 2)
        : i.overlayX === "start"
        ? (s = this._isRtl() ? -t.width : 0)
        : (s = this._isRtl() ? 0 : -t.width);
      let r;
      return (
        i.overlayY == "center"
          ? (r = -t.height / 2)
          : (r = i.overlayY == "top" ? 0 : -t.height),
        { x: e.x + s, y: e.y + r }
      );
    }
    _getOverlayFit(e, t, i, s) {
      let r = kn(t),
        { x: o, y: a } = e,
        l = this._getOffset(s, "x"),
        h = this._getOffset(s, "y");
      l && (o += l), h && (a += h);
      let d = 0 - o,
        p = o + r.width - i.width,
        R = 0 - a,
        k = a + r.height - i.height,
        x = this._subtractOverflows(r.width, d, p),
        j = this._subtractOverflows(r.height, R, k),
        ti = x * j;
      return {
        visibleArea: ti,
        isCompletelyWithinViewport: r.width * r.height === ti,
        fitsInViewportVertically: j === r.height,
        fitsInViewportHorizontally: x == r.width,
      };
    }
    _canFitWithFlexibleDimensions(e, t, i) {
      if (this._hasFlexibleDimensions) {
        let s = i.bottom - t.y,
          r = i.right - t.x,
          o = Mn(this._overlayRef.getConfig().minHeight),
          a = Mn(this._overlayRef.getConfig().minWidth),
          l = e.fitsInViewportVertically || (o != null && o <= s),
          h = e.fitsInViewportHorizontally || (a != null && a <= r);
        return l && h;
      }
      return !1;
    }
    _pushOverlayOnScreen(e, t, i) {
      if (this._previousPushAmount && this._positionLocked)
        return {
          x: e.x + this._previousPushAmount.x,
          y: e.y + this._previousPushAmount.y,
        };
      let s = kn(t),
        r = this._viewportRect,
        o = Math.max(e.x + s.width - r.width, 0),
        a = Math.max(e.y + s.height - r.height, 0),
        l = Math.max(r.top - i.top - e.y, 0),
        h = Math.max(r.left - i.left - e.x, 0),
        d = 0,
        p = 0;
      return (
        s.width <= r.width
          ? (d = h || -o)
          : (d = e.x < this._viewportMargin ? r.left - i.left - e.x : 0),
        s.height <= r.height
          ? (p = l || -a)
          : (p = e.y < this._viewportMargin ? r.top - i.top - e.y : 0),
        (this._previousPushAmount = { x: d, y: p }),
        { x: e.x + d, y: e.y + p }
      );
    }
    _applyPosition(e, t) {
      if (
        (this._setTransformOrigin(e),
        this._setOverlayElementStyles(t, e),
        this._setBoundingBoxStyles(t, e),
        e.panelClass && this._addPanelClasses(e.panelClass),
        this._positionChanges.observers.length)
      ) {
        let i = this._getScrollVisibility();
        if (
          e !== this._lastPosition ||
          !this._lastScrollVisibility ||
          !Ar(this._lastScrollVisibility, i)
        ) {
          let s = new Ke(e, i);
          this._positionChanges.next(s);
        }
        this._lastScrollVisibility = i;
      }
      (this._lastPosition = e), (this._isInitialRender = !1);
    }
    _setTransformOrigin(e) {
      if (!this._transformOriginSelector) return;
      let t = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        i,
        s = e.overlayY;
      e.overlayX === "center"
        ? (i = "center")
        : this._isRtl()
        ? (i = e.overlayX === "start" ? "right" : "left")
        : (i = e.overlayX === "start" ? "left" : "right");
      for (let r = 0; r < t.length; r++)
        t[r].style.transformOrigin = `${i} ${s}`;
    }
    _calculateBoundingBoxRect(e, t) {
      let i = this._viewportRect,
        s = this._isRtl(),
        r,
        o,
        a;
      if (t.overlayY === "top")
        (o = e.y), (r = i.height - o + this._viewportMargin);
      else if (t.overlayY === "bottom")
        (a = i.height - e.y + this._viewportMargin * 2),
          (r = i.height - a + this._viewportMargin);
      else {
        let k = Math.min(i.bottom - e.y + i.top, e.y),
          x = this._lastBoundingBoxSize.height;
        (r = k * 2),
          (o = e.y - k),
          r > x &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (o = e.y - x / 2);
      }
      let l = (t.overlayX === "start" && !s) || (t.overlayX === "end" && s),
        h = (t.overlayX === "end" && !s) || (t.overlayX === "start" && s),
        d,
        p,
        R;
      if (h)
        (R = i.width - e.x + this._viewportMargin * 2),
          (d = e.x - this._viewportMargin);
      else if (l) (p = e.x), (d = i.right - e.x);
      else {
        let k = Math.min(i.right - e.x + i.left, e.x),
          x = this._lastBoundingBoxSize.width;
        (d = k * 2),
          (p = e.x - k),
          d > x &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (p = e.x - x / 2);
      }
      return { top: o, left: p, bottom: a, right: R, width: d, height: r };
    }
    _setBoundingBoxStyles(e, t) {
      let i = this._calculateBoundingBoxRect(e, t);
      !this._isInitialRender &&
        !this._growAfterOpen &&
        ((i.height = Math.min(i.height, this._lastBoundingBoxSize.height)),
        (i.width = Math.min(i.width, this._lastBoundingBoxSize.width)));
      let s = {};
      if (this._hasExactPosition())
        (s.top = s.left = "0"),
          (s.bottom = s.right = s.maxHeight = s.maxWidth = ""),
          (s.width = s.height = "100%");
      else {
        let r = this._overlayRef.getConfig().maxHeight,
          o = this._overlayRef.getConfig().maxWidth;
        (s.height = w(i.height)),
          (s.top = w(i.top)),
          (s.bottom = w(i.bottom)),
          (s.width = w(i.width)),
          (s.left = w(i.left)),
          (s.right = w(i.right)),
          t.overlayX === "center"
            ? (s.alignItems = "center")
            : (s.alignItems = t.overlayX === "end" ? "flex-end" : "flex-start"),
          t.overlayY === "center"
            ? (s.justifyContent = "center")
            : (s.justifyContent =
                t.overlayY === "bottom" ? "flex-end" : "flex-start"),
          r && (s.maxHeight = w(r)),
          o && (s.maxWidth = w(o));
      }
      (this._lastBoundingBoxSize = i), et(this._boundingBox.style, s);
    }
    _resetBoundingBoxStyles() {
      et(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: "",
      });
    }
    _resetOverlayElementStyles() {
      et(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: "",
      });
    }
    _setOverlayElementStyles(e, t) {
      let i = {},
        s = this._hasExactPosition(),
        r = this._hasFlexibleDimensions,
        o = this._overlayRef.getConfig();
      if (s) {
        let d = this._viewportRuler.getViewportScrollPosition();
        et(i, this._getExactOverlayY(t, e, d)),
          et(i, this._getExactOverlayX(t, e, d));
      } else i.position = "static";
      let a = "",
        l = this._getOffset(t, "x"),
        h = this._getOffset(t, "y");
      l && (a += `translateX(${l}px) `),
        h && (a += `translateY(${h}px)`),
        (i.transform = a.trim()),
        o.maxHeight &&
          (s ? (i.maxHeight = w(o.maxHeight)) : r && (i.maxHeight = "")),
        o.maxWidth &&
          (s ? (i.maxWidth = w(o.maxWidth)) : r && (i.maxWidth = "")),
        et(this._pane.style, i);
    }
    _getExactOverlayY(e, t, i) {
      let s = { top: "", bottom: "" },
        r = this._getOverlayPoint(t, this._overlayRect, e);
      if (
        (this._isPushed &&
          (r = this._pushOverlayOnScreen(r, this._overlayRect, i)),
        e.overlayY === "bottom")
      ) {
        let o = this._document.documentElement.clientHeight;
        s.bottom = `${o - (r.y + this._overlayRect.height)}px`;
      } else s.top = w(r.y);
      return s;
    }
    _getExactOverlayX(e, t, i) {
      let s = { left: "", right: "" },
        r = this._getOverlayPoint(t, this._overlayRect, e);
      this._isPushed &&
        (r = this._pushOverlayOnScreen(r, this._overlayRect, i));
      let o;
      if (
        (this._isRtl()
          ? (o = e.overlayX === "end" ? "left" : "right")
          : (o = e.overlayX === "end" ? "right" : "left"),
        o === "right")
      ) {
        let a = this._document.documentElement.clientWidth;
        s.right = `${a - (r.x + this._overlayRect.width)}px`;
      } else s.left = w(r.x);
      return s;
    }
    _getScrollVisibility() {
      let e = this._getOriginRect(),
        t = this._pane.getBoundingClientRect(),
        i = this._scrollables.map((s) =>
          s.getElementRef().nativeElement.getBoundingClientRect()
        );
      return {
        isOriginClipped: In(e, i),
        isOriginOutsideView: Xe(e, i),
        isOverlayClipped: In(t, i),
        isOverlayOutsideView: Xe(t, i),
      };
    }
    _subtractOverflows(e, ...t) {
      return t.reduce((i, s) => i - Math.max(s, 0), e);
    }
    _getNarrowedViewportRect() {
      let e = this._document.documentElement.clientWidth,
        t = this._document.documentElement.clientHeight,
        i = this._viewportRuler.getViewportScrollPosition();
      return {
        top: i.top + this._viewportMargin,
        left: i.left + this._viewportMargin,
        right: i.left + e - this._viewportMargin,
        bottom: i.top + t - this._viewportMargin,
        width: e - 2 * this._viewportMargin,
        height: t - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === "rtl";
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(e, t) {
      return t === "x"
        ? e.offsetX == null
          ? this._offsetX
          : e.offsetX
        : e.offsetY == null
        ? this._offsetY
        : e.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(e) {
      this._pane &&
        pt(e).forEach((t) => {
          t !== "" &&
            this._appliedPanelClasses.indexOf(t) === -1 &&
            (this._appliedPanelClasses.push(t), this._pane.classList.add(t));
        });
    }
    _clearPanelClasses() {
      this._pane &&
        (this._appliedPanelClasses.forEach((e) => {
          this._pane.classList.remove(e);
        }),
        (this._appliedPanelClasses = []));
    }
    _getOriginRect() {
      let e = this._origin;
      if (e instanceof I) return e.nativeElement.getBoundingClientRect();
      if (e instanceof Element) return e.getBoundingClientRect();
      let t = e.width || 0,
        i = e.height || 0;
      return {
        top: e.y,
        bottom: e.y + i,
        left: e.x,
        right: e.x + t,
        height: i,
        width: t,
      };
    }
  };
function et(n, e) {
  for (let t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
  return n;
}
function Mn(n) {
  if (typeof n != "number" && n != null) {
    let [e, t] = n.split(Dr);
    return !t || t === "px" ? parseFloat(e) : null;
  }
  return n || null;
}
function kn(n) {
  return {
    top: Math.floor(n.top),
    right: Math.floor(n.right),
    bottom: Math.floor(n.bottom),
    left: Math.floor(n.left),
    width: Math.floor(n.width),
    height: Math.floor(n.height),
  };
}
function Ar(n, e) {
  return n === e
    ? !0
    : n.isOriginClipped === e.isOriginClipped &&
        n.isOriginOutsideView === e.isOriginOutsideView &&
        n.isOverlayClipped === e.isOverlayClipped &&
        n.isOverlayOutsideView === e.isOverlayOutsideView;
}
var Fn = "cdk-global-overlay-wrapper",
  Qe = class {
    constructor() {
      (this._cssPosition = "static"),
        (this._topOffset = ""),
        (this._bottomOffset = ""),
        (this._alignItems = ""),
        (this._xPosition = ""),
        (this._xOffset = ""),
        (this._width = ""),
        (this._height = ""),
        (this._isDisposed = !1);
    }
    attach(e) {
      let t = e.getConfig();
      (this._overlayRef = e),
        this._width && !t.width && e.updateSize({ width: this._width }),
        this._height && !t.height && e.updateSize({ height: this._height }),
        e.hostElement.classList.add(Fn),
        (this._isDisposed = !1);
    }
    top(e = "") {
      return (
        (this._bottomOffset = ""),
        (this._topOffset = e),
        (this._alignItems = "flex-start"),
        this
      );
    }
    left(e = "") {
      return (this._xOffset = e), (this._xPosition = "left"), this;
    }
    bottom(e = "") {
      return (
        (this._topOffset = ""),
        (this._bottomOffset = e),
        (this._alignItems = "flex-end"),
        this
      );
    }
    right(e = "") {
      return (this._xOffset = e), (this._xPosition = "right"), this;
    }
    start(e = "") {
      return (this._xOffset = e), (this._xPosition = "start"), this;
    }
    end(e = "") {
      return (this._xOffset = e), (this._xPosition = "end"), this;
    }
    width(e = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ width: e })
          : (this._width = e),
        this
      );
    }
    height(e = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ height: e })
          : (this._height = e),
        this
      );
    }
    centerHorizontally(e = "") {
      return this.left(e), (this._xPosition = "center"), this;
    }
    centerVertically(e = "") {
      return this.top(e), (this._alignItems = "center"), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let e = this._overlayRef.overlayElement.style,
        t = this._overlayRef.hostElement.style,
        i = this._overlayRef.getConfig(),
        { width: s, height: r, maxWidth: o, maxHeight: a } = i,
        l =
          (s === "100%" || s === "100vw") &&
          (!o || o === "100%" || o === "100vw"),
        h =
          (r === "100%" || r === "100vh") &&
          (!a || a === "100%" || a === "100vh"),
        d = this._xPosition,
        p = this._xOffset,
        R = this._overlayRef.getConfig().direction === "rtl",
        k = "",
        x = "",
        j = "";
      l
        ? (j = "flex-start")
        : d === "center"
        ? ((j = "center"), R ? (x = p) : (k = p))
        : R
        ? d === "left" || d === "end"
          ? ((j = "flex-end"), (k = p))
          : (d === "right" || d === "start") && ((j = "flex-start"), (x = p))
        : d === "left" || d === "start"
        ? ((j = "flex-start"), (k = p))
        : (d === "right" || d === "end") && ((j = "flex-end"), (x = p)),
        (e.position = this._cssPosition),
        (e.marginLeft = l ? "0" : k),
        (e.marginTop = h ? "0" : this._topOffset),
        (e.marginBottom = this._bottomOffset),
        (e.marginRight = l ? "0" : x),
        (t.justifyContent = j),
        (t.alignItems = h ? "flex-start" : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let e = this._overlayRef.overlayElement.style,
        t = this._overlayRef.hostElement,
        i = t.style;
      t.classList.remove(Fn),
        (i.justifyContent =
          i.alignItems =
          e.marginTop =
          e.marginBottom =
          e.marginLeft =
          e.marginRight =
          e.position =
            ""),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  Ir = (() => {
    class n {
      constructor(t, i, s, r) {
        (this._viewportRuler = t),
          (this._document = i),
          (this._platform = s),
          (this._overlayContainer = r);
      }
      global() {
        return new Qe();
      }
      flexibleConnectedTo(t) {
        return new qe(
          t,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(Ue), c(y), c(S), c(fe));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })(),
  Or = 0,
  nt = (() => {
    class n {
      constructor(t, i, s, r, o, a, l, h, d, p, R, k) {
        (this.scrollStrategies = t),
          (this._overlayContainer = i),
          (this._componentFactoryResolver = s),
          (this._positionBuilder = r),
          (this._keyboardDispatcher = o),
          (this._injector = a),
          (this._ngZone = l),
          (this._document = h),
          (this._directionality = d),
          (this._location = p),
          (this._outsideClickDispatcher = R),
          (this._animationsModuleType = k);
      }
      create(t) {
        let i = this._createHostElement(),
          s = this._createPaneElement(i),
          r = this._createPortalOutlet(s),
          o = new Tt(t);
        return (
          (o.direction = o.direction || this._directionality.value),
          new it(
            r,
            i,
            s,
            o,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === "NoopAnimations",
            this._injector.get(hi)
          )
        );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(t) {
        let i = this._document.createElement("div");
        return (
          (i.id = `cdk-overlay-${Or++}`),
          i.classList.add("cdk-overlay-pane"),
          t.appendChild(i),
          i
        );
      }
      _createHostElement() {
        let t = this._document.createElement("div");
        return this._overlayContainer.getContainerElement().appendChild(t), t;
      }
      _createPortalOutlet(t) {
        return (
          this._appRef || (this._appRef = this._injector.get(mi)),
          new de(
            t,
            this._componentFactoryResolver,
            this._appRef,
            this._injector,
            this._document
          )
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            c(Cr),
            c(fe),
            c(Wt),
            c(Ir),
            c(wr),
            c(V),
            c(A),
            c(y),
            c(Rt),
            c(yi),
            c(Er),
            c(ui, 8)
          );
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
var Sr = new E("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let n = D(nt);
    return () => n.scrollStrategies.reposition();
  },
});
function Mr(n) {
  return () => n.scrollStrategies.reposition();
}
var kr = { provide: Sr, deps: [nt], useFactory: Mr },
  xn = (() => {
    class n {
      static {
        this.ɵfac = function (i) {
          return new (i || n)();
        };
      }
      static {
        this.ɵmod = C({ type: n });
      }
      static {
        this.ɵinj = b({ providers: [nt, kr], imports: [xt, Pt, We, We] });
      }
    }
    return n;
  })();
function xr(n, e) {}
var Lt = class {
  constructor() {
    (this.role = "dialog"),
      (this.panelClass = ""),
      (this.hasBackdrop = !0),
      (this.backdropClass = ""),
      (this.disableClose = !1),
      (this.width = ""),
      (this.height = ""),
      (this.data = null),
      (this.ariaDescribedBy = null),
      (this.ariaLabelledBy = null),
      (this.ariaLabel = null),
      (this.ariaModal = !0),
      (this.autoFocus = "first-tabbable"),
      (this.restoreFocus = !0),
      (this.closeOnNavigation = !0),
      (this.closeOnDestroy = !0),
      (this.closeOnOverlayDetachments = !0);
  }
};
var Vr = (() => {
    class n extends yt {
      constructor(t, i, s, r, o, a, l, h) {
        super(),
          (this._elementRef = t),
          (this._focusTrapFactory = i),
          (this._config = r),
          (this._interactivityChecker = o),
          (this._ngZone = a),
          (this._overlayRef = l),
          (this._focusMonitor = h),
          (this._platform = D(S)),
          (this._focusTrap = null),
          (this._elementFocusedBeforeDialogWasOpened = null),
          (this._closeInteractionType = null),
          (this._ariaLabelledByQueue = []),
          (this._changeDetectorRef = D(Dt)),
          (this._injector = D(V)),
          (this._isDestroyed = !1),
          (this.attachDomPortal = (d) => {
            this._portalOutlet.hasAttached();
            let p = this._portalOutlet.attachDomPortal(d);
            return this._contentAttached(), p;
          }),
          (this._document = s),
          this._config.ariaLabelledBy &&
            this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
      }
      _addAriaLabelledBy(t) {
        this._ariaLabelledByQueue.push(t),
          this._changeDetectorRef.markForCheck();
      }
      _removeAriaLabelledBy(t) {
        let i = this._ariaLabelledByQueue.indexOf(t);
        i > -1 &&
          (this._ariaLabelledByQueue.splice(i, 1),
          this._changeDetectorRef.markForCheck());
      }
      _contentAttached() {
        this._initializeFocusTrap(),
          this._handleBackdropClicks(),
          this._captureInitialFocus();
      }
      _captureInitialFocus() {
        this._trapFocus();
      }
      ngOnDestroy() {
        (this._isDestroyed = !0), this._restoreFocus();
      }
      attachComponentPortal(t) {
        this._portalOutlet.hasAttached();
        let i = this._portalOutlet.attachComponentPortal(t);
        return this._contentAttached(), i;
      }
      attachTemplatePortal(t) {
        this._portalOutlet.hasAttached();
        let i = this._portalOutlet.attachTemplatePortal(t);
        return this._contentAttached(), i;
      }
      _recaptureFocus() {
        this._containsFocus() || this._trapFocus();
      }
      _forceFocus(t, i) {
        this._interactivityChecker.isFocusable(t) ||
          ((t.tabIndex = -1),
          this._ngZone.runOutsideAngular(() => {
            let s = () => {
              t.removeEventListener("blur", s),
                t.removeEventListener("mousedown", s),
                t.removeAttribute("tabindex");
            };
            t.addEventListener("blur", s), t.addEventListener("mousedown", s);
          })),
          t.focus(i);
      }
      _focusByCssSelector(t, i) {
        let s = this._elementRef.nativeElement.querySelector(t);
        s && this._forceFocus(s, i);
      }
      _trapFocus() {
        this._isDestroyed ||
          lt(
            () => {
              let t = this._elementRef.nativeElement;
              switch (this._config.autoFocus) {
                case !1:
                case "dialog":
                  this._containsFocus() || t.focus();
                  break;
                case !0:
                case "first-tabbable":
                  this._focusTrap?.focusInitialElement() ||
                    this._focusDialogContainer();
                  break;
                case "first-heading":
                  this._focusByCssSelector(
                    'h1, h2, h3, h4, h5, h6, [role="heading"]'
                  );
                  break;
                default:
                  this._focusByCssSelector(this._config.autoFocus);
                  break;
              }
            },
            { injector: this._injector }
          );
      }
      _restoreFocus() {
        let t = this._config.restoreFocus,
          i = null;
        if (
          (typeof t == "string"
            ? (i = this._document.querySelector(t))
            : typeof t == "boolean"
            ? (i = t ? this._elementFocusedBeforeDialogWasOpened : null)
            : t && (i = t),
          this._config.restoreFocus && i && typeof i.focus == "function")
        ) {
          let s = Ft(),
            r = this._elementRef.nativeElement;
          (!s || s === this._document.body || s === r || r.contains(s)) &&
            (this._focusMonitor
              ? (this._focusMonitor.focusVia(i, this._closeInteractionType),
                (this._closeInteractionType = null))
              : i.focus());
        }
        this._focusTrap && this._focusTrap.destroy();
      }
      _focusDialogContainer() {
        this._elementRef.nativeElement.focus &&
          this._elementRef.nativeElement.focus();
      }
      _containsFocus() {
        let t = this._elementRef.nativeElement,
          i = Ft();
        return t === i || t.contains(i);
      }
      _initializeFocusTrap() {
        this._platform.isBrowser &&
          ((this._focusTrap = this._focusTrapFactory.create(
            this._elementRef.nativeElement
          )),
          this._document && (this._elementFocusedBeforeDialogWasOpened = Ft()));
      }
      _handleBackdropClicks() {
        this._overlayRef.backdropClick().subscribe(() => {
          this._config.disableClose && this._recaptureFocus();
        });
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(
            u(I),
            u(yn),
            u(y, 8),
            u(Lt),
            u(He),
            u(A),
            u(it),
            u(Cn)
          );
        };
      }
      static {
        this.ɵcmp = me({
          type: n,
          selectors: [["cdk-dialog-container"]],
          viewQuery: function (i, s) {
            if ((i & 1 && be(Ge, 7), i & 2)) {
              let r;
              Ce((r = we())) && (s._portalOutlet = r.first);
            }
          },
          hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
          hostVars: 6,
          hostBindings: function (i, s) {
            i & 2 &&
              Gt("id", s._config.id || null)("role", s._config.role)(
                "aria-modal",
                s._config.ariaModal
              )(
                "aria-labelledby",
                s._config.ariaLabel ? null : s._ariaLabelledByQueue[0]
              )("aria-label", s._config.ariaLabel)(
                "aria-describedby",
                s._config.ariaDescribedBy || null
              );
          },
          standalone: !0,
          features: [M, Ee],
          decls: 1,
          vars: 0,
          consts: [["cdkPortalOutlet", ""]],
          template: function (i, s) {
            i & 1 && pi(0, xr, 0, 0, "ng-template", 0);
          },
          dependencies: [Ge],
          styles: [
            ".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}",
          ],
          encapsulation: 2,
        });
      }
    }
    return n;
  })(),
  Nt = class {
    constructor(e, t) {
      (this.overlayRef = e),
        (this.config = t),
        (this.closed = new m()),
        (this.disableClose = t.disableClose),
        (this.backdropClick = e.backdropClick()),
        (this.keydownEvents = e.keydownEvents()),
        (this.outsidePointerEvents = e.outsidePointerEvents()),
        (this.id = t.id),
        this.keydownEvents.subscribe((i) => {
          i.keyCode === 27 &&
            !this.disableClose &&
            !le(i) &&
            (i.preventDefault(),
            this.close(void 0, { focusOrigin: "keyboard" }));
        }),
        this.backdropClick.subscribe(() => {
          this.disableClose || this.close(void 0, { focusOrigin: "mouse" });
        }),
        (this._detachSubscription = e.detachments().subscribe(() => {
          t.closeOnOverlayDetachments !== !1 && this.close();
        }));
    }
    close(e, t) {
      if (this.containerInstance) {
        let i = this.closed;
        (this.containerInstance._closeInteractionType =
          t?.focusOrigin || "program"),
          this._detachSubscription.unsubscribe(),
          this.overlayRef.dispose(),
          i.next(e),
          i.complete(),
          (this.componentInstance = this.containerInstance = null);
      }
    }
    updatePosition() {
      return this.overlayRef.updatePosition(), this;
    }
    updateSize(e = "", t = "") {
      return this.overlayRef.updateSize({ width: e, height: t }), this;
    }
    addPanelClass(e) {
      return this.overlayRef.addPanelClass(e), this;
    }
    removePanelClass(e) {
      return this.overlayRef.removePanelClass(e), this;
    }
  },
  Pr = new E("DialogScrollStrategy", {
    providedIn: "root",
    factory: () => {
      let n = D(nt);
      return () => n.scrollStrategies.block();
    },
  }),
  Tr = new E("DialogData"),
  Nr = new E("DefaultDialogConfig");
var Lr = 0,
  jr = (() => {
    class n {
      get openDialogs() {
        return this._parentDialog
          ? this._parentDialog.openDialogs
          : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog
          ? this._parentDialog.afterOpened
          : this._afterOpenedAtThisLevel;
      }
      constructor(t, i, s, r, o, a) {
        (this._overlay = t),
          (this._injector = i),
          (this._defaultOptions = s),
          (this._parentDialog = r),
          (this._overlayContainer = o),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new m()),
          (this._afterOpenedAtThisLevel = new m()),
          (this._ariaHiddenElements = new Map()),
          (this.afterAllClosed = ri(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(bt(void 0))
          )),
          (this._scrollStrategy = a);
      }
      open(t, i) {
        let s = this._defaultOptions || new Lt();
        (i = _(_({}, s), i)),
          (i.id = i.id || `cdk-dialog-${Lr++}`),
          i.id && this.getDialogById(i.id);
        let r = this._getOverlayConfig(i),
          o = this._overlay.create(r),
          a = new Nt(o, i),
          l = this._attachContainer(o, a, i);
        return (
          (a.containerInstance = l),
          this._attachDialogContent(t, a, l, i),
          this.openDialogs.length ||
            this._hideNonDialogContentFromAssistiveTechnology(),
          this.openDialogs.push(a),
          a.closed.subscribe(() => this._removeOpenDialog(a, !0)),
          this.afterOpened.next(a),
          a
        );
      }
      closeAll() {
        Je(this.openDialogs, (t) => t.close());
      }
      getDialogById(t) {
        return this.openDialogs.find((i) => i.id === t);
      }
      ngOnDestroy() {
        Je(this._openDialogsAtThisLevel, (t) => {
          t.config.closeOnDestroy === !1 && this._removeOpenDialog(t, !1);
        }),
          Je(this._openDialogsAtThisLevel, (t) => t.close()),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete(),
          (this._openDialogsAtThisLevel = []);
      }
      _getOverlayConfig(t) {
        let i = new Tt({
          positionStrategy:
            t.positionStrategy ||
            this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
          scrollStrategy: t.scrollStrategy || this._scrollStrategy(),
          panelClass: t.panelClass,
          hasBackdrop: t.hasBackdrop,
          direction: t.direction,
          minWidth: t.minWidth,
          minHeight: t.minHeight,
          maxWidth: t.maxWidth,
          maxHeight: t.maxHeight,
          width: t.width,
          height: t.height,
          disposeOnNavigation: t.closeOnNavigation,
        });
        return t.backdropClass && (i.backdropClass = t.backdropClass), i;
      }
      _attachContainer(t, i, s) {
        let r = s.injector || s.viewContainerRef?.injector,
          o = [
            { provide: Lt, useValue: s },
            { provide: Nt, useValue: i },
            { provide: it, useValue: t },
          ],
          a;
        s.container
          ? typeof s.container == "function"
            ? (a = s.container)
            : ((a = s.container.type), o.push(...s.container.providers(s)))
          : (a = Vr);
        let l = new mt(
          a,
          s.viewContainerRef,
          V.create({ parent: r || this._injector, providers: o }),
          s.componentFactoryResolver
        );
        return t.attach(l).instance;
      }
      _attachDialogContent(t, i, s, r) {
        if (t instanceof Ct) {
          let o = this._createInjector(r, i, s, void 0),
            a = { $implicit: r.data, dialogRef: i };
          r.templateContext &&
            (a = _(
              _({}, a),
              typeof r.templateContext == "function"
                ? r.templateContext()
                : r.templateContext
            )),
            s.attachTemplatePortal(new vt(t, null, a, o));
        } else {
          let o = this._createInjector(r, i, s, this._injector),
            a = s.attachComponentPortal(
              new mt(t, r.viewContainerRef, o, r.componentFactoryResolver)
            );
          (i.componentRef = a), (i.componentInstance = a.instance);
        }
      }
      _createInjector(t, i, s, r) {
        let o = t.injector || t.viewContainerRef?.injector,
          a = [
            { provide: Tr, useValue: t.data },
            { provide: Nt, useValue: i },
          ];
        return (
          t.providers &&
            (typeof t.providers == "function"
              ? a.push(...t.providers(i, t, s))
              : a.push(...t.providers)),
          t.direction &&
            (!o || !o.get(Rt, null, { optional: !0 })) &&
            a.push({
              provide: Rt,
              useValue: { value: t.direction, change: rt() },
            }),
          V.create({ parent: o || r, providers: a })
        );
      }
      _removeOpenDialog(t, i) {
        let s = this.openDialogs.indexOf(t);
        s > -1 &&
          (this.openDialogs.splice(s, 1),
          this.openDialogs.length ||
            (this._ariaHiddenElements.forEach((r, o) => {
              r
                ? o.setAttribute("aria-hidden", r)
                : o.removeAttribute("aria-hidden");
            }),
            this._ariaHiddenElements.clear(),
            i && this._getAfterAllClosed().next()));
      }
      _hideNonDialogContentFromAssistiveTechnology() {
        let t = this._overlayContainer.getContainerElement();
        if (t.parentElement) {
          let i = t.parentElement.children;
          for (let s = i.length - 1; s > -1; s--) {
            let r = i[s];
            r !== t &&
              r.nodeName !== "SCRIPT" &&
              r.nodeName !== "STYLE" &&
              !r.hasAttribute("aria-live") &&
              (this._ariaHiddenElements.set(r, r.getAttribute("aria-hidden")),
              r.setAttribute("aria-hidden", "true"));
          }
        }
      }
      _getAfterAllClosed() {
        let t = this._parentDialog;
        return t ? t._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || n)(c(nt), c(V), c(Nr, 8), c(n, 12), c(fe), c(Pr));
        };
      }
      static {
        this.ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
      }
    }
    return n;
  })();
function Je(n, e) {
  let t = n.length;
  for (; t--; ) e(n[t]);
}
var Ol = (() => {
  class n {
    static {
      this.ɵfac = function (i) {
        return new (i || n)();
      };
    }
    static {
      this.ɵmod = C({ type: n });
    }
    static {
      this.ɵinj = b({ providers: [jr], imports: [xn, Pt, wn, Pt] });
    }
  }
  return n;
})();
g();
var Br = {
    loading: !1,
    loadingHolders: !1,
    error: !1,
    agent: null,
    aiPumpAgent: null,
    holders: [],
    tweets: { posts: [], totalPages: 0, currentPage: 0 },
    agentVoiceChatOpen: !1,
    agentVoiceType: "agent",
  },
  Tl = Ci(
    { providedIn: "root" },
    Di(Br),
    wi((n, e = D(Ae)) => ({
      isOwner: U(
        () =>
          e.address() &&
          e.address()?.toLowerCase() === n.agent()?.owner?.toLowerCase()
      ),
      hasLiquidity: U(() => {
        let t = n.agent();
        return !!(
          t?.baseLiquidityPools.length || t?.solanaLiquidityPools.length
        );
      }),
      hasLockedLiquidity: U(() => {
        let t = n.agent();
        return (
          t?.chainType === "EVM" ||
          t?.solanaLiquidityPools.some((i) => i.burnPercent > 0)
        );
      }),
    })),
    Ei((n, e = D(Ai), t = D(Ae)) => ({
      checkOwnership(s) {
        return N(this, null, function* () {
          n.agent() || (yield this.fetchAgent(s));
          let o = n.agent();
          return o && o.owner
            ? t.address()?.toLowerCase() === o.owner.toLowerCase()
            : !1;
        });
      },
      fetchAgent(s) {
        return N(this, null, function* () {
          O(n, (r) => ({ loading: !0, error: !1 }));
          try {
            if (n.agent() && n.agent()?.id + "" === s) {
              yield this.fetchHolders();
              return;
            }
            let [r] = yield Promise.all([
              G(e.agent.get(s)),
              this.fetchTweets(0, s),
            ]);
            O(n, (o) => ({ agent: r })),
              O(n, (o) => ({ loadingHolders: !0 })),
              this.fetchHolders();
          } catch (r) {
            console.error(r), O(n, (o) => ({ error: !0, agent: null }));
          } finally {
            O(n, (r) => ({ loading: !1 }));
          }
        });
      },
      fetchAiPump() {
        return N(this, null, function* () {
          O(n, (s) => ({ loading: !0, error: !1 }));
          try {
            let [s] = yield Promise.all([
              G(
                e.agent
                  .getAiPump()
                  .pipe(H((r) => F(_({}, r), { selectedTokenIndex: 1 })))
              ),
            ]);
            O(n, (r) => ({ agent: null, aiPumpAgent: s, loadingHolders: !0 })),
              this.fetchHoldersAiPump();
          } catch (s) {
            console.error(s), O(n, (r) => ({ error: !0, agent: null }));
          } finally {
            O(n, (s) => ({ loading: !1 }));
          }
        });
      },
      refetchAgent() {
        return N(this, null, function* () {
          let s = n.agent()?.id;
          s && (yield this.fetchAgent(s));
        });
      },
      fetchHolders() {
        return N(this, null, function* () {
          let s = n.agent(),
            r = s?.token,
            o = s?.chainId,
            a = s?.baseLiquidityPools.map((h) => h.pair) ?? [],
            l =
              s?.solanaLiquidityPools.flatMap((h) => [
                h.token0Vault,
                h.token1Vault,
              ]) ?? [];
          if ((O(n, (h) => ({ holders: [] })), r && o && s?.txHash)) {
            let h = yield G(e.holders.get(r, o));
            h.forEach((d) => {
              d.lp = [...a, ...l].includes(d.owner);
            }),
              O(n, (d) => ({ holders: h, loadingHolders: !1 }));
          }
        });
      },
      fetchTweets(s, r) {
        return N(this, null, function* () {
          let o = r ?? n.agent()?.id;
          if (o && s > -1) {
            let a = yield G(e.agent.getTweets(o, s));
            O(n, (l) => ({
              tweets: {
                posts: a.posts?.length ? a.posts : [],
                totalPages: a.totalPages,
                currentPage: s,
              },
            }));
          }
        });
      },
      fetchHoldersAiPump() {
        return N(this, null, function* () {
          let s = n.aiPumpAgent(),
            r = [];
          O(n, (a) => ({ holders: [] }));
          let o = s?.tokens[s.selectedTokenIndex];
          if (o.chainId === 900) {
            let a =
              o?.solanaLiquidityPools?.flatMap((l) => [
                l.token0Vault,
                l.token1Vault,
              ]) ?? [];
            if (o && o?.chainId && o?.txHash) {
              let l = yield G(e.holders.get(o.address, o.chainId));
              l.forEach((h) => {
                h.lp = [...a].includes(h.owner);
              }),
                (r = l);
            }
          } else if (o.chainId === 8453) {
            let a = o?.baseLiquidityPools.map((l) => l.pair) ?? [];
            if (o && o?.chainId && o?.txHash) {
              let l = yield G(e.holders.get(o.address, o.chainId));
              l.forEach((h) => {
                h.lp = [...a].includes(h.owner);
              }),
                (r = l);
            }
          }
          O(n, (a) => ({ holders: r, loadingHolders: !1 }));
        });
      },
      fetchTelegramConnection() {
        return N(this, null, function* () {
          let s = n.agent().id;
          try {
            return yield G(e.agent.getTelegramConnectionData(s));
          } catch (r) {
            return r;
          }
        });
      },
      updateStoreAgent(s) {
        return N(this, null, function* () {
          O(n, (r) => ({ agent: s }));
        });
      },
      toggleAgentChatVisibility(s = "agent") {
        return N(this, null, function* () {
          O(n, (r) => ({
            agentVoiceChatOpen: !n.agentVoiceChatOpen(),
            agentVoiceType: s,
          }));
        });
      },
    }))
  );
export {
  Pn as a,
  Ti as b,
  Ii as c,
  so as d,
  ro as e,
  ki as f,
  en as g,
  us as h,
  ao as i,
  ps as j,
  gs as k,
  rn as l,
  lo as m,
  co as n,
  ho as o,
  uo as p,
  S as q,
  Ve as r,
  z as s,
  Pe as t,
  le as u,
  Es as v,
  _t as w,
  pn as x,
  He as y,
  yn as z,
  rr as A,
  or as B,
  Cn as C,
  dr as D,
  Rt as E,
  xt as F,
  En as G,
  vt as H,
  Ge as I,
  Tt as J,
  fe as K,
  it as L,
  nt as M,
  xn as N,
  Lt as O,
  Vr as P,
  Nt as Q,
  Tr as R,
  jr as S,
  Ol as T,
  Tl as U,
};
