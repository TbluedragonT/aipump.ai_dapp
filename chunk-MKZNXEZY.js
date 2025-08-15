import {
  a as le,
  b as ce,
  c as se,
  d as pe,
  e as de,
  f as ue,
} from "./chunk-DB5W3P6K.js";
import { a as re, b as ae, c as x, d as me } from "./chunk-BTL6BAFX.js";
import { a as oe } from "./chunk-YQ75I7HT.js";
import { a as te } from "./chunk-BOPS6WXW.js";
import {
  S as ee,
  U as ne,
  c as v,
  e as N,
  f as W,
  g as f,
  i as H,
  k as J,
  p as K,
} from "./chunk-YF7ATBOB.js";
import {
  G as U,
  K as X,
  L as Y,
  i as R,
  m as B,
  ua as Z,
  xa as ie,
  y as O,
  z as Q,
} from "./chunk-ABQK56SH.js";
import {
  $a as I,
  Aa as h,
  Ea as p,
  Ia as w,
  Ma as i,
  Na as o,
  Oa as s,
  Pa as F,
  Qa as z,
  Sa as C,
  Wa as g,
  Xa as c,
  ab as P,
  bb as k,
  ea as E,
  fb as m,
  gb as A,
  hb as _,
  j as b,
  ja as r,
  n as $,
  qb as D,
  ta as y,
  vb as T,
  wb as q,
  x as d,
  y as u,
} from "./chunk-FRM3FMZU.js";
import "./chunk-J6HUAGRI.js";
import "./chunk-L7NZVLCG.js";
import "./chunk-UV7ERROY.js";
import "./chunk-DXA257HR.js";
import "./chunk-URXTW6Z4.js";
import "./chunk-2CMVC2QG.js";
import "./chunk-YHHDRASY.js";
import { Mb as G, N as j, Tb as S, sa as M } from "./chunk-23ZZ27XK.js";
import "./chunk-7NO3R5IA.js";
import "./chunk-MXKSX4NU.js";
import "./chunk-7HG7UTUA.js";
import "./chunk-3VTBTNQ3.js";
import "./chunk-7VBKHTQI.js";
import "./chunk-YYSBJNVH.js";
import "./chunk-PV7NZOQN.js";
import "./chunk-4467BSCR.js";
import { q as L } from "./chunk-KXQY476L.js";
L();
var _e = ["audioPlayer"],
  fe = ["menuRef"];
function xe(n, a) {
  if (n & 1) {
    let e = C();
    i(0, "div", 28)(1, "input", 29),
      g("change", function (l) {
        d(e);
        let V = c(2);
        return u(V.uploadImage(l, "icon"));
      }),
      o(),
      i(2, "div", 30),
      s(3, "img", 31),
      o()(),
      s(4, "app-input-error", 19);
  }
  if (n & 2) {
    let e = c(2);
    r(4), p("control", e.formGroup.controls.icon);
  }
}
function ve(n, a) {
  if (n & 1) {
    let e = C();
    s(0, "img", 32),
      i(1, "button", 33),
      g("click", function () {
        d(e);
        let l = c(2);
        return u(l.clearIcon());
      }),
      i(2, "span", 24),
      m(3),
      o()();
  }
  if (n & 2) {
    let e = c().$implicit,
      t = c();
    p("src", t.icon(), E), r(3), _(" ", e("clear"), " ");
  }
}
function he(n, a) {
  if ((n & 1 && (i(0, "div", 39), m(1), o()), n & 2)) {
    let e = c(3).$implicit;
    r(), _(" ", e("required"), " ");
  }
}
function Ce(n, a) {
  if (n & 1) {
    let e = C();
    i(0, "div", 36),
      g("click", function () {
        d(e);
        let l = c(3);
        return u(l.openAddVoiceModal());
      }),
      s(1, "img", 37),
      i(2, "div", 38),
      m(3),
      o(),
      h(4, he, 2, 1, "div", 39),
      o();
  }
  if (n & 2) {
    let e = c(2).$implicit,
      t = c();
    r(3),
      _(" ", e("addVoice"), " "),
      r(),
      w(t.formGroup.controls.voice.invalid && t.voiceModalOpened() ? 4 : -1);
  }
}
function be(n, a) {
  if (n & 1) {
    let e = C();
    i(0, "div", 47, 1)(2, "div", 48),
      g("click", function () {
        d(e);
        let l = c(4);
        return u(l.editVoice());
      }),
      i(3, "div"),
      s(4, "img", 49),
      o(),
      i(5, "div"),
      m(6),
      o()(),
      i(7, "div", 48),
      g("click", function () {
        d(e);
        let l = c(4);
        return u(l.removeVoice());
      }),
      i(8, "div"),
      s(9, "img", 50),
      o(),
      i(10, "div"),
      m(11),
      o()()();
  }
  if (n & 2) {
    let e = c(3).$implicit;
    r(6), A(e("edit")), r(5), A(e("delete"));
  }
}
function we(n, a) {
  if (n & 1) {
    let e = C();
    i(0, "div", 40)(1, "div", 41)(2, "div", 42),
      m(3),
      o(),
      i(4, "div", 43)(5, "div")(6, "img", 44),
      g("click", function () {
        d(e);
        let l = c(3);
        return u(l.playAgentVoice());
      }),
      o()(),
      i(7, "div", 45)(8, "img", 46),
      g("click", function () {
        d(e);
        let l = c(3);
        return u(l.openVoiceMenu());
      }),
      o(),
      h(9, be, 12, 2, "div", 47),
      o()()()(),
      s(10, "audio", null, 0);
  }
  if (n & 2) {
    let e = c(3);
    r(3),
      A(e.formGroup.controls.voice.value),
      r(6),
      w(e.isVoiceMenuOpen() ? 9 : -1);
  }
}
function Ae(n, a) {
  if (n & 1) {
    let e = C();
    i(0, "label", 51)(1, "div", 52),
      s(2, "img", 53),
      i(3, "p", 54)(4, "span", 55),
      m(5),
      o()(),
      i(6, "p", 56),
      m(7),
      o()(),
      i(8, "input", 57),
      g("change", function (l) {
        d(e);
        let V = c(3);
        return u(V.uploadImage(l, "chat"));
      }),
      o()(),
      s(9, "app-input-error", 19);
  }
  if (n & 2) {
    let e = c(2).$implicit,
      t = c();
    r(5),
      A(e("uploadAFile")),
      r(2),
      _(" ", e("fileType"), " "),
      r(2),
      p("control", t.formGroup.controls.coverImage);
  }
}
function ye(n, a) {
  if (n & 1) {
    let e = C();
    s(0, "img", 58),
      i(1, "button", 59),
      g("click", function () {
        d(e);
        let l = c(3);
        return u(l.clearImage("chat"));
      }),
      i(2, "span", 24),
      m(3),
      o()();
  }
  if (n & 2) {
    let e = c(2).$implicit,
      t = c();
    p("src", t.chatImage(), E), r(3), _(" ", e("clear"), " ");
  }
}
function Ve(n, a) {
  if (
    (n & 1 &&
      (h(0, Ce, 5, 2, "div", 34),
      T(1, "async"),
      h(2, we, 12, 2),
      i(3, "div"),
      s(4, "app-input-textarea", 35),
      o(),
      i(5, "div", 20)(6, "label", 18),
      m(7),
      o()(),
      i(8, "div"),
      s(9, "app-color-selector", 19),
      o(),
      h(10, Ae, 10, 3)(11, ye, 4, 2)),
    n & 2)
  ) {
    let e = c().$implicit,
      t = c();
    w(q(1, 6, t.voiceAgent$) ? 2 : 0),
      r(4),
      p("control", t.formGroup.controls.voiceChatDescription)(
        "placeholder",
        e("voiceChatDescription")
      ),
      r(3),
      A(e("chatAppearance")),
      r(2),
      p("control", t.formGroup.controls.voiceChatColor),
      r(),
      w(t.chatImage() === "" ? 10 : 11);
  }
}
function Se(n, a) {
  if (n & 1) {
    let e = C();
    i(0, "label", 60)(1, "div", 52),
      s(2, "img", 53),
      i(3, "p", 54)(4, "span", 55),
      m(5),
      o()(),
      i(6, "p", 56),
      m(7),
      o()(),
      i(8, "input", 61),
      g("change", function (l) {
        d(e);
        let V = c(2);
        return u(V.uploadCoverImage(l));
      }),
      o()(),
      s(9, "app-input-error", 19);
  }
  if (n & 2) {
    let e = c().$implicit,
      t = c();
    r(5),
      A(e("uploadAFile")),
      r(2),
      _(" ", e("fileType"), " "),
      r(2),
      p("control", t.formGroup.controls.coverImage);
  }
}
function Ee(n, a) {
  if (n & 1) {
    let e = C();
    s(0, "img", 58),
      i(1, "button", 59),
      g("click", function () {
        d(e);
        let l = c(2);
        return u(l.clearCoverImage());
      }),
      i(2, "span", 24),
      m(3),
      o()();
  }
  if (n & 2) {
    let e = c().$implicit,
      t = c();
    p("src", t.coverImage(), E), r(3), _(" ", e("clear"), " ");
  }
}
function Ge(n, a) {
  n & 1 && s(0, "app-spinner", 26), n & 2 && p("size", 24);
}
function Ie(n, a) {
  if ((n & 1 && (i(0, "span", 27), m(1), o()), n & 2)) {
    let e = c().$implicit;
    r(), _(" ", e("createAgent"), " ");
  }
}
function Pe(n, a) {
  if (n & 1) {
    let e = C();
    F(0),
      i(1, "div", 3)(2, "div", 4)(3, "button", 5),
      s(4, "img", 6),
      o(),
      i(5, "h1", 7),
      m(6),
      o()(),
      i(7, "div", 8)(8, "div", 9)(9, "form", 10),
      g("ngSubmit", function () {
        d(e);
        let l = c();
        return u(l.createAgent());
      }),
      i(10, "div")(11, "label", 11),
      m(12),
      o(),
      h(13, xe, 5, 1)(14, ve, 4, 2),
      o(),
      i(15, "div", 12),
      s(16, "app-input-field", 13)(17, "app-input-field", 13),
      o(),
      i(18, "div", 14),
      s(19, "app-input-textarea", 13),
      o(),
      i(20, "div", 14),
      s(21, "app-input-field", 13),
      o(),
      i(22, "div", 14),
      s(23, "app-input-field", 13),
      o(),
      s(24, "hr", 15),
      i(25, "div", 16)(26, "div", 17)(27, "label", 18),
      m(28),
      o(),
      s(29, "app-radio-switch", 19),
      o(),
      h(30, Ve, 12, 8),
      T(31, "async"),
      o(),
      s(32, "hr", 15),
      i(33, "div", 20)(34, "label", 18),
      m(35),
      o(),
      h(36, Se, 10, 3)(37, Ee, 4, 2),
      o(),
      i(38, "p", 21),
      m(39),
      o(),
      i(40, "div", 22)(41, "button", 23)(42, "span", 24),
      m(43),
      o()(),
      i(44, "button", 25),
      h(45, Ge, 1, 1, "app-spinner", 26)(46, Ie, 2, 1, "span", 27),
      o()()()()()(),
      z();
  }
  if (n & 2) {
    let e = a.$implicit,
      t = c();
    r(6),
      _(" ", e("title"), " "),
      r(3),
      p("formGroup", t.formGroup),
      r(3),
      _(" ", e("iconLabel"), ""),
      r(),
      w(t.icon() === "" ? 13 : 14),
      r(3),
      p("control", t.formGroup.controls.name)("label", e("nameLabel"))(
        "placeholder",
        e("nameLabel")
      ),
      r(),
      p("control", t.formGroup.controls.ticker)("label", e("tickerLabel"))(
        "placeholder",
        e("tickerLabel")
      ),
      r(2),
      p("control", t.formGroup.controls.description)(
        "label",
        e("descriptionLabel")
      )("placeholder", e("descriptionLabel")),
      r(2),
      p("control", t.formGroup.controls.mind)("label", e("mindLabel"))(
        "placeholder",
        e("typeByCommaPlaceholder")
      ),
      r(2),
      p("control", t.formGroup.controls.emotions)("label", e("emotionsLabel"))(
        "placeholder",
        e("typeByCommaPlaceholder")
      ),
      r(5),
      A(e("voiceChat")),
      r(),
      p("control", t.formGroup.controls.voiceAgentEnabled),
      r(),
      w(q(31, 27, t.voiceAgentEnabled$) ? 30 : -1),
      r(5),
      A(e("coverImageLabel")),
      r(),
      w(t.coverImage() === "" ? 36 : 37),
      r(3),
      _(" ", e("liquidityWarning"), " "),
      r(4),
      _(" ", e("cancel"), " "),
      r(2),
      w(t.isLoading() ? 45 : 46);
  }
}
var ge = class n {
  #t = b(ee);
  #i = b(Z);
  #r = b(oe);
  agentStore = b(ne);
  #e = b(X);
  #a = b(ie);
  #n = b(ce);
  #l = b(O);
  byte = 1048576;
  icon = y("");
  coverImage = y("");
  chatImage = y("");
  isLoading = y(!1);
  voiceModalOpened = y(!1);
  audioPlayer;
  isVoiceMenuOpen = y(!1);
  formGroup = new W({
    icon: new f("", [
      x("required", v.required, this.#e.translate("createAgentPage.required")),
    ]),
    coverImage: new f("", [
      x("required", v.required, this.#e.translate("createAgentPage.required")),
    ]),
    name: new f("", [
      x("required", v.required, this.#e.translate("createAgentPage.required")),
      x(
        "min_length",
        v.minLength(2),
        this.#e.translate("createAgentPage.name.minLength")
      ),
      x(
        "max_length",
        v.maxLength(20),
        this.#e.translate("createAgentPage.name.maxLength")
      ),
      x(
        "alpha_numeric_underscore",
        se(),
        this.#e.translate("createAgentPage.name.alphaNumericUnderscore")
      ),
    ]),
    ticker: new f("", [
      x("required", v.required, this.#e.translate("createAgentPage.required")),
    ]),
    description: new f("", [
      x("required", v.required, this.#e.translate("createAgentPage.required")),
    ]),
    mind: new f("", [
      x("required", v.required, this.#e.translate("createAgentPage.required")),
    ]),
    emotions: new f("", [
      x("required", v.required, this.#e.translate("createAgentPage.required")),
    ]),
    voiceChatColor: new f("vcOrange", [
      x("required", v.required, this.#e.translate("createAgentPage.required")),
    ]),
    voiceChatBackground: new f(""),
    voiceAgentEnabled: new f(!1),
    voiceChatDescription: new f(""),
    voice: new f(null),
  });
  voiceAgentEnabled$ = this.formGroup.controls.voiceAgentEnabled.valueChanges;
  voiceAgent$ = this.formGroup.controls.voice.valueChanges;
  menuRef;
  ngOnInit() {
    (this.voiceAgentEnabled$ =
      this.formGroup.controls.voiceAgentEnabled.valueChanges.pipe(
        G(this.formGroup.controls.voiceAgentEnabled.value)
      )),
      (this.voiceAgent$ = this.formGroup.controls.voice.valueChanges.pipe(
        G(this.formGroup.controls.voice.value)
      ));
  }
  clearCoverImage() {
    this.coverImage.set(""), this.formGroup.controls.coverImage.setValue("");
  }
  clearIcon() {
    this.icon.set(""), this.formGroup.controls.icon.setValue("");
  }
  uploadImage(a, e) {
    if (a.target.files && a.target.files[0]) {
      let t = a.target.files[0];
      if (t.size > this.byte * 10) {
        this.formGroup.controls.icon.setErrors({
          errors: {
            message: this.#e.translate("createAgentPage.fileSizeToBig"),
          },
        }),
          e === "icon"
            ? this.formGroup.controls.icon.markAsTouched()
            : this.formGroup.controls.voiceChatBackground.markAsTouched();
        return;
      }
      this.#n
        .uploadFile(t)
        .pipe(
          S((l) => {
            e === "icon"
              ? (this.icon.set(l), this.formGroup.controls.icon.setValue(l))
              : (this.chatImage.set(l),
                this.formGroup.controls.voiceChatBackground.setValue(l));
          })
        )
        .subscribe();
    }
  }
  uploadCoverImage(a) {
    if (a.target.files && a.target.files[0]) {
      let e = a.target.files[0];
      if (e.size > this.byte * 10) {
        this.formGroup.controls.coverImage.setErrors({
          errors: {
            message: this.#e.translate("createAgentPage.fileSizeToBig"),
          },
        }),
          this.formGroup.controls.coverImage.markAsTouched();
        return;
      }
      this.#n
        .uploadFile(e)
        .pipe(
          S((t) => {
            this.coverImage.set(t),
              this.formGroup.controls.coverImage.setValue(t);
          })
        )
        .subscribe();
    }
  }
  createAgent() {
    me(this.formGroup) &&
      (this.isLoading.set(!0),
      this.#i.isConnected()
        ? this.#o()
        : this.#t.open(te).closed.subscribe(() => this.#o()));
  }
  #o() {
    if (!this.#i.isConnected()) {
      this.isLoading.set(!1);
      return;
    }
    this.#a.agent
      .create({
        icon: this.formGroup.controls.icon.value,
        coverImage: this.formGroup.controls.coverImage.value,
        name: this.formGroup.controls.name.value,
        ticker: this.formGroup.controls.ticker.value,
        description: this.formGroup.controls.description.value,
        mind: this.formGroup.controls.mind.value,
        emotions: this.formGroup.controls.emotions.value,
        voiceChatBackground: this.formGroup.controls.voiceChatBackground.value,
        voiceChatColor: this.formGroup.controls.voiceChatColor.value,
        voiceAgentEnabled: this.formGroup.controls.voiceAgentEnabled.value,
        voice: this.formGroup.controls.voice.value,
        voiceChatDescription:
          this.formGroup.controls.voiceChatDescription.value,
      })
      .pipe(
        S((a) => {
          this.isLoading.set(!1),
            this.#r.refreshAgents(),
            this.#l.navigate(["/agent-details", a.id]);
        }),
        M((a) => (this.isLoading.set(!1), j(() => new Error(a))))
      )
      .subscribe();
  }
  openAddVoiceModal() {
    this.#t
      .open(de, {
        maxWidth: "70vw",
        data: { voice: this.formGroup.controls.voice.value },
      })
      .closed.subscribe((a) => {
        a && this.formGroup.controls.voice.setValue(a ?? null),
          this.voiceModalOpened.set(!0),
          this.adjustVoiceValidator(
            !!this.formGroup.controls.voiceAgentEnabled.value
          );
      });
  }
  adjustVoiceValidator(a) {
    a
      ? this.formGroup.controls.voice.setValidators([
          x(
            "required",
            v.required,
            this.#e.translate("createAgentPage.required")
          ),
        ])
      : this.formGroup.controls.voice.clearValidators(),
      this.formGroup.controls.voice.updateValueAndValidity();
  }
  playAgentVoice() {
    if (this.formGroup.controls.voice.value) {
      let a = `/agent-chat-voices/${this.formGroup.controls.voice.value}.mp3`;
      (this.audioPlayer.nativeElement.src = a),
        this.audioPlayer.nativeElement
          .play()
          .catch((e) => console.error("Audio play error:", e));
    }
  }
  openVoiceMenu() {
    this.isVoiceMenuOpen.set(!0);
  }
  editVoice() {
    this.isVoiceMenuOpen.set(!1), this.openAddVoiceModal();
  }
  removeVoice() {
    this.isVoiceMenuOpen.set(!1),
      this.formGroup.controls.voice.setValue(null),
      this.formGroup.controls.voice.updateValueAndValidity();
  }
  clearImage(a) {
    a === "cover"
      ? (this.coverImage.set(""),
        this.formGroup.controls.coverImage.setValue(""))
      : (this.chatImage.set(""),
        this.formGroup.controls.voiceChatBackground.setValue(null));
  }
  static ɵfac = function (e) {
    return new (e || n)();
  };
  static ɵcmp = $({
    type: n,
    selectors: [["app-create-agent-page"]],
    viewQuery: function (e, t) {
      if ((e & 1 && (I(_e, 5), I(fe, 5)), e & 2)) {
        let l;
        P((l = k())) && (t.audioPlayer = l.first),
          P((l = k())) && (t.menuRef = l.first);
      }
    },
    standalone: !0,
    features: [D],
    decls: 1,
    vars: 1,
    consts: [
      ["audioPlayer", ""],
      ["menuRef", ""],
      [4, "transloco", "translocoPrefix"],
      [1, "container", "mx-auto"],
      [1, "flex", "items-center"],
      [
        "routerLink",
        "/",
        1,
        "pr-4",
        "grid",
        "place-items-center",
        "rounded-full",
      ],
      ["src", "icons/arrow-left.svg"],
      [1, "font-almarena", "text-[28px]/[70px]"],
      [
        1,
        "border",
        "px-7",
        "py-8",
        "rounded-[20px]",
        "flex",
        "flex-col",
        "items-center",
        "mb-10",
        "bg-[#fbfafb]",
      ],
      [1, "max-w-[534px]"],
      [
        1,
        "mt-8",
        "bg-white",
        "px-7",
        "py-8",
        "rounded-[20px]",
        3,
        "ngSubmit",
        "formGroup",
      ],
      ["for", "icon", 1, "font-dm-sans", "text-[14px]/[16px]", "font-bold"],
      [1, "flex", "justify-between", "gap-4", "mt-8"],
      [1, "w-full", 3, "control", "label", "placeholder"],
      [1, "mt-8"],
      [1, "w-full", "mt-8"],
      [1, "flex", "flex-col", "w-full", "mt-8", "gap-6"],
      [1, "flex", "justify-between"],
      [1, "font-dm-sans", "text-[14px]/[16px]", "font-bold", "mb-4"],
      [3, "control"],
      [1, "flex", "flex-col", "w-full", "mt-8"],
      [1, "font-dm-sans", "text-[14px]/[24px]", "mt-8"],
      [1, "flex", "mt-8", "gap-4"],
      [
        "routerLink",
        "/",
        1,
        "rounded-[4px]",
        "w-full",
        "h-10",
        "bg-white",
        "px-6",
        "grid",
        "place-items-center",
        "border-black",
        "border",
        "hover:bg-black/5",
      ],
      [1, "font-dm-sans", "font-bold", "text-black", "text-xs", "uppercase"],
      [
        "type",
        "submit",
        1,
        "rounded-[4px]",
        "w-full",
        "h-10",
        "bg-black",
        "px-6",
        "grid",
        "place-items-center",
        "hover:bg-black/85",
      ],
      [1, "absolute", 3, "size"],
      [1, "font-dm-sans", "font-bold", "text-white", "text-xs", "uppercase"],
      [1, "relative", "cursor-pointer", "w-20", "h-20"],
      [
        "id",
        "icon",
        "type",
        "file",
        "accept",
        "image/png, image/jpg, image/gif",
        "required",
        "",
        1,
        "absolute",
        "z-10",
        "opacity-0",
        "w-20",
        "h-20",
        "cursor-pointer",
        3,
        "change",
      ],
      [
        1,
        "w-20",
        "h-20",
        "overflow-hidden",
        "rounded-full",
        "bg-[#f2f2f2]",
        "flex",
        "justify-center",
        "items-center",
      ],
      ["src", "icons/plus.svg", 1, "w-5", "h-5"],
      [1, "w-20", "h-20", "rounded-full", "object-cover", 3, "src"],
      [
        "type",
        "button",
        1,
        "rounded-[4px]",
        "h-10",
        "mt-2",
        "bg-white",
        "px-6",
        "grid",
        "place-items-center",
        "border-black",
        "border",
        3,
        "click",
      ],
      [1, "flex", "justify-start", "gap-4", "cursor-pointer"],
      [1, "w-full", 3, "control", "placeholder"],
      [1, "flex", "justify-start", "gap-4", "cursor-pointer", 3, "click"],
      ["src", "icons/add-voice.svg", "alt", ""],
      [1, "text-[#00000080]"],
      [1, "flex", "flex-col", "items-end", "text-red"],
      [1, "rounded-lg", "bg-black/20", "p-4"],
      [1, "flex", "justify-between", "items-center"],
      [1, "text-lg", "font-bold", "capitalize"],
      [1, "flex", "gap-4", "justify-between", "items-center"],
      [
        "src",
        "icons/agent-play.svg",
        "alt",
        "close",
        1,
        "w-8",
        "h-8",
        "bg-white",
        "p-2",
        "rounded-full",
        "cursor-pointer",
        3,
        "click",
      ],
      [1, "relative"],
      [
        "src",
        "icons/more_vert.svg",
        "alt",
        "close",
        1,
        "w-8",
        "h-8",
        "p-2",
        "rounded-full",
        "cursor-pointer",
        3,
        "click",
      ],
      [
        1,
        "absolute",
        "bg-white",
        "border",
        "border-black/10",
        "rounded-md",
        "top-[30px]",
        "right-0",
        "p-4",
        "flex",
        "flex-col",
        "gap-4",
        "min-w-[150px]",
      ],
      [
        1,
        "flex",
        "gap-2",
        "justify-start",
        "items-center",
        "cursor-pointer",
        3,
        "click",
      ],
      ["src", "icons/edit.svg", "alt", "edit", 1, "w-6", "h-6"],
      ["src", "icons/delete.svg", "alt", "delete", 1, "w-6", "h-6"],
      [
        "for",
        "dropzone-file-chat",
        1,
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "w-full",
        "h-[136px]",
        "rounded-[4px]",
        "cursor-pointer",
        "bg-gray-50",
      ],
      [1, "flex", "flex-col", "items-center", "justify-center", "pt-5", "pb-6"],
      ["src", "icons/file-upload.svg"],
      [1, "mb-2", "text-[12px]/[12px]", "font-almarena", "mt-4"],
      [1, "font-semibold", "text-red"],
      [1, "font-almarena", "text-[12px]/[12px]"],
      [
        "accept",
        "image/png, image/jpg, image/gif",
        "id",
        "dropzone-file-chat",
        "type",
        "file",
        1,
        "hidden",
        3,
        "change",
      ],
      [1, "h-[136px]", "rounded-[4px]", "object-cover", 3, "src"],
      [
        "type",
        "button",
        1,
        "rounded-[4px]",
        "w-full",
        "h-10",
        "mt-2",
        "bg-white",
        "px-6",
        "grid",
        "place-items-center",
        "border-black",
        "border",
        3,
        "click",
      ],
      [
        "for",
        "dropzone-file",
        1,
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "w-full",
        "h-[136px]",
        "rounded-[4px]",
        "cursor-pointer",
        "bg-gray-50",
      ],
      [
        "accept",
        "image/png, image/jpg, image/gif",
        "id",
        "dropzone-file",
        "type",
        "file",
        1,
        "hidden",
        3,
        "change",
      ],
    ],
    template: function (e, t) {
      e & 1 && h(0, Pe, 47, 29, "ng-container", 2),
        e & 2 && p("translocoPrefix", "createAgentPage");
    },
    dependencies: [Y, Q, ae, K, H, N, J, le, re, U, pe, B, R, ue],
    encapsulation: 2,
    changeDetection: 0,
  });
};
export { ge as CreateAgentPageComponent };
