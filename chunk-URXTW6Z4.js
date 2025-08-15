import { ba as Q } from "./chunk-MXKSX4NU.js";
import { A as te, _ as J, s as Z, t as ee } from "./chunk-YYSBJNVH.js";
import {
  a as P,
  b as G,
  f as ne,
  i as ae,
  l as V,
  q as M,
} from "./chunk-KXQY476L.js";
var se = ne((K, X) => {
  "use strict";
  M();
  (function (R, O) {
    typeof K == "object" && typeof X == "object"
      ? (X.exports = O())
      : typeof define == "function" && define.amd
      ? define([], O)
      : typeof K == "object"
      ? (K.joi = O())
      : (R.joi = O());
  })(self, () => {
    return (
      (R = {
        7629: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8571),
            g = v(9474),
            m = v(1687),
            e = v(8652),
            n = v(8160),
            i = v(3292),
            s = v(6354),
            t = v(8901),
            o = v(9708),
            r = v(6914),
            a = v(2294),
            c = v(6133),
            f = v(1152),
            p = v(8863),
            _ = v(2036),
            y = {
              Base: class {
                constructor(u) {
                  (this.type = u),
                    (this.$_root = null),
                    (this._definition = {}),
                    this._reset();
                }
                _reset() {
                  (this._ids = new a.Ids()),
                    (this._preferences = null),
                    (this._refs = new c.Manager()),
                    (this._cache = null),
                    (this._valids = null),
                    (this._invalids = null),
                    (this._flags = {}),
                    (this._rules = []),
                    (this._singleRules = new Map()),
                    (this.$_terms = {}),
                    (this.$_temp = { ruleset: null, whens: {} });
                }
                describe() {
                  return (
                    l(
                      typeof o.describe == "function",
                      "Manifest functionality disabled"
                    ),
                    o.describe(this)
                  );
                }
                allow() {
                  for (
                    var u = arguments.length, h = new Array(u), d = 0;
                    d < u;
                    d++
                  )
                    h[d] = arguments[d];
                  return n.verifyFlat(h, "allow"), this._values(h, "_valids");
                }
                alter(u) {
                  l(
                    u && typeof u == "object" && !Array.isArray(u),
                    "Invalid targets argument"
                  ),
                    l(
                      !this._inRuleset(),
                      "Cannot set alterations inside a ruleset"
                    );
                  let h = this.clone();
                  h.$_terms.alterations = h.$_terms.alterations || [];
                  for (let d in u) {
                    let w = u[d];
                    l(
                      typeof w == "function",
                      "Alteration adjuster for",
                      d,
                      "must be a function"
                    ),
                      h.$_terms.alterations.push({ target: d, adjuster: w });
                  }
                  return (h.$_temp.ruleset = !1), h;
                }
                artifact(u) {
                  return (
                    l(u !== void 0, "Artifact cannot be undefined"),
                    l(!this._cache, "Cannot set an artifact with a rule cache"),
                    this.$_setFlag("artifact", u)
                  );
                }
                cast(u) {
                  return (
                    l(u === !1 || typeof u == "string", "Invalid to value"),
                    l(
                      u === !1 || this._definition.cast[u],
                      "Type",
                      this.type,
                      "does not support casting to",
                      u
                    ),
                    this.$_setFlag("cast", u === !1 ? void 0 : u)
                  );
                }
                default(u, h) {
                  return this._default("default", u, h);
                }
                description(u) {
                  return (
                    l(
                      u && typeof u == "string",
                      "Description must be a non-empty string"
                    ),
                    this.$_setFlag("description", u)
                  );
                }
                empty(u) {
                  let h = this.clone();
                  return (
                    u !== void 0 && (u = h.$_compile(u, { override: !1 })),
                    h.$_setFlag("empty", u, { clone: !1 })
                  );
                }
                error(u) {
                  return (
                    l(u, "Missing error"),
                    l(
                      u instanceof Error || typeof u == "function",
                      "Must provide a valid Error object or a function"
                    ),
                    this.$_setFlag("error", u)
                  );
                }
                example(u) {
                  let h =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                  return (
                    l(u !== void 0, "Missing example"),
                    n.assertOptions(h, ["override"]),
                    this._inner("examples", u, {
                      single: !0,
                      override: h.override,
                    })
                  );
                }
                external(u, h) {
                  return (
                    typeof u == "object" &&
                      (l(!h, "Cannot combine options with description"),
                      (h = u.description),
                      (u = u.method)),
                    l(typeof u == "function", "Method must be a function"),
                    l(
                      h === void 0 || (h && typeof h == "string"),
                      "Description must be a non-empty string"
                    ),
                    this._inner(
                      "externals",
                      { method: u, description: h },
                      { single: !0 }
                    )
                  );
                }
                failover(u, h) {
                  return this._default("failover", u, h);
                }
                forbidden() {
                  return this.presence("forbidden");
                }
                id(u) {
                  return u
                    ? (l(typeof u == "string", "id must be a non-empty string"),
                      l(
                        /^[^\.]+$/.test(u),
                        "id cannot contain period character"
                      ),
                      this.$_setFlag("id", u))
                    : this.$_setFlag("id", void 0);
                }
                invalid() {
                  for (
                    var u = arguments.length, h = new Array(u), d = 0;
                    d < u;
                    d++
                  )
                    h[d] = arguments[d];
                  return this._values(h, "_invalids");
                }
                label(u) {
                  return (
                    l(
                      u && typeof u == "string",
                      "Label name must be a non-empty string"
                    ),
                    this.$_setFlag("label", u)
                  );
                }
                meta(u) {
                  return (
                    l(u !== void 0, "Meta cannot be undefined"),
                    this._inner("metas", u, { single: !0 })
                  );
                }
                note() {
                  for (
                    var u = arguments.length, h = new Array(u), d = 0;
                    d < u;
                    d++
                  )
                    h[d] = arguments[d];
                  l(h.length, "Missing notes");
                  for (let w of h)
                    l(
                      w && typeof w == "string",
                      "Notes must be non-empty strings"
                    );
                  return this._inner("notes", h);
                }
                only() {
                  let u =
                    !(arguments.length > 0 && arguments[0] !== void 0) ||
                    arguments[0];
                  return (
                    l(typeof u == "boolean", "Invalid mode:", u),
                    this.$_setFlag("only", u)
                  );
                }
                optional() {
                  return this.presence("optional");
                }
                prefs(u) {
                  l(u, "Missing preferences"),
                    l(u.context === void 0, "Cannot override context"),
                    l(u.externals === void 0, "Cannot override externals"),
                    l(u.warnings === void 0, "Cannot override warnings"),
                    l(u.debug === void 0, "Cannot override debug"),
                    n.checkPreferences(u);
                  let h = this.clone();
                  return (h._preferences = n.preferences(h._preferences, u)), h;
                }
                presence(u) {
                  return (
                    l(
                      ["optional", "required", "forbidden"].includes(u),
                      "Unknown presence mode",
                      u
                    ),
                    this.$_setFlag("presence", u)
                  );
                }
                raw() {
                  let u =
                    !(arguments.length > 0 && arguments[0] !== void 0) ||
                    arguments[0];
                  return this.$_setFlag("result", u ? "raw" : void 0);
                }
                result(u) {
                  return (
                    l(["raw", "strip"].includes(u), "Unknown result mode", u),
                    this.$_setFlag("result", u)
                  );
                }
                required() {
                  return this.presence("required");
                }
                strict(u) {
                  let h = this.clone(),
                    d = u !== void 0 && !u;
                  return (
                    (h._preferences = n.preferences(h._preferences, {
                      convert: d,
                    })),
                    h
                  );
                }
                strip() {
                  let u =
                    !(arguments.length > 0 && arguments[0] !== void 0) ||
                    arguments[0];
                  return this.$_setFlag("result", u ? "strip" : void 0);
                }
                tag() {
                  for (
                    var u = arguments.length, h = new Array(u), d = 0;
                    d < u;
                    d++
                  )
                    h[d] = arguments[d];
                  l(h.length, "Missing tags");
                  for (let w of h)
                    l(
                      w && typeof w == "string",
                      "Tags must be non-empty strings"
                    );
                  return this._inner("tags", h);
                }
                unit(u) {
                  return (
                    l(
                      u && typeof u == "string",
                      "Unit name must be a non-empty string"
                    ),
                    this.$_setFlag("unit", u)
                  );
                }
                valid() {
                  for (
                    var u = arguments.length, h = new Array(u), d = 0;
                    d < u;
                    d++
                  )
                    h[d] = arguments[d];
                  n.verifyFlat(h, "valid");
                  let w = this.allow(...h);
                  return w.$_setFlag("only", !!w._valids, { clone: !1 }), w;
                }
                when(u, h) {
                  let d = this.clone();
                  d.$_terms.whens || (d.$_terms.whens = []);
                  let w = i.when(d, u, h);
                  if (!["any", "link"].includes(d.type)) {
                    let x = w.is ? [w] : w.switch;
                    for (let k of x)
                      l(
                        !k.then ||
                          k.then.type === "any" ||
                          k.then.type === d.type,
                        "Cannot combine",
                        d.type,
                        "with",
                        k.then && k.then.type
                      ),
                        l(
                          !k.otherwise ||
                            k.otherwise.type === "any" ||
                            k.otherwise.type === d.type,
                          "Cannot combine",
                          d.type,
                          "with",
                          k.otherwise && k.otherwise.type
                        );
                  }
                  return d.$_terms.whens.push(w), d.$_mutateRebuild();
                }
                cache(u) {
                  l(!this._inRuleset(), "Cannot set caching inside a ruleset"),
                    l(!this._cache, "Cannot override schema cache"),
                    l(
                      this._flags.artifact === void 0,
                      "Cannot cache a rule with an artifact"
                    );
                  let h = this.clone();
                  return (
                    (h._cache = u || e.provider.provision()),
                    (h.$_temp.ruleset = !1),
                    h
                  );
                }
                clone() {
                  let u = Object.create(Object.getPrototypeOf(this));
                  return this._assign(u);
                }
                concat(u) {
                  l(n.isSchema(u), "Invalid schema object"),
                    l(
                      this.type === "any" ||
                        u.type === "any" ||
                        u.type === this.type,
                      "Cannot merge type",
                      this.type,
                      "with another type:",
                      u.type
                    ),
                    l(
                      !this._inRuleset(),
                      "Cannot concatenate onto a schema with open ruleset"
                    ),
                    l(
                      !u._inRuleset(),
                      "Cannot concatenate a schema with open ruleset"
                    );
                  let h = this.clone();
                  if (this.type === "any" && u.type !== "any") {
                    let d = u.clone();
                    for (let w of Object.keys(h)) w !== "type" && (d[w] = h[w]);
                    h = d;
                  }
                  h._ids.concat(u._ids),
                    h._refs.register(u, c.toSibling),
                    (h._preferences = h._preferences
                      ? n.preferences(h._preferences, u._preferences)
                      : u._preferences),
                    (h._valids = _.merge(h._valids, u._valids, u._invalids)),
                    (h._invalids = _.merge(
                      h._invalids,
                      u._invalids,
                      u._valids
                    ));
                  for (let d of u._singleRules.keys())
                    h._singleRules.has(d) &&
                      ((h._rules = h._rules.filter(
                        (w) => w.keep || w.name !== d
                      )),
                      h._singleRules.delete(d));
                  for (let d of u._rules)
                    u._definition.rules[d.method].multi ||
                      h._singleRules.set(d.name, d),
                      h._rules.push(d);
                  if (h._flags.empty && u._flags.empty) {
                    h._flags.empty = h._flags.empty.concat(u._flags.empty);
                    let d = Object.assign({}, u._flags);
                    delete d.empty, m(h._flags, d);
                  } else if (u._flags.empty) {
                    h._flags.empty = u._flags.empty;
                    let d = Object.assign({}, u._flags);
                    delete d.empty, m(h._flags, d);
                  } else m(h._flags, u._flags);
                  for (let d in u.$_terms) {
                    let w = u.$_terms[d];
                    w
                      ? h.$_terms[d]
                        ? (h.$_terms[d] = h.$_terms[d].concat(w))
                        : (h.$_terms[d] = w.slice())
                      : h.$_terms[d] || (h.$_terms[d] = w);
                  }
                  return (
                    this.$_root._tracer &&
                      this.$_root._tracer._combine(h, [this, u]),
                    h.$_mutateRebuild()
                  );
                }
                extend(u) {
                  return (
                    l(!u.base, "Cannot extend type with another base"),
                    t.type(this, u)
                  );
                }
                extract(u) {
                  return (
                    (u = Array.isArray(u) ? u : u.split(".")),
                    this._ids.reach(u)
                  );
                }
                fork(u, h) {
                  l(!this._inRuleset(), "Cannot fork inside a ruleset");
                  let d = this;
                  for (let w of [].concat(u))
                    (w = Array.isArray(w) ? w : w.split(".")),
                      (d = d._ids.fork(w, h, d));
                  return (d.$_temp.ruleset = !1), d;
                }
                rule(u) {
                  let h = this._definition;
                  n.assertOptions(u, Object.keys(h.modifiers)),
                    l(
                      this.$_temp.ruleset !== !1,
                      "Cannot apply rules to empty ruleset or the last rule added does not support rule properties"
                    );
                  let d =
                    this.$_temp.ruleset === null
                      ? this._rules.length - 1
                      : this.$_temp.ruleset;
                  l(
                    d >= 0 && d < this._rules.length,
                    "Cannot apply rules to empty ruleset"
                  );
                  let w = this.clone();
                  for (let x = d; x < w._rules.length; ++x) {
                    let k = w._rules[x],
                      A = b(k);
                    for (let S in u)
                      h.modifiers[S](A, u[S]),
                        l(A.name === k.name, "Cannot change rule name");
                    (w._rules[x] = A),
                      w._singleRules.get(A.name) === k &&
                        w._singleRules.set(A.name, A);
                  }
                  return (w.$_temp.ruleset = !1), w.$_mutateRebuild();
                }
                get ruleset() {
                  l(
                    !this._inRuleset(),
                    "Cannot start a new ruleset without closing the previous one"
                  );
                  let u = this.clone();
                  return (u.$_temp.ruleset = u._rules.length), u;
                }
                get $() {
                  return this.ruleset;
                }
                tailor(u) {
                  (u = [].concat(u)),
                    l(!this._inRuleset(), "Cannot tailor inside a ruleset");
                  let h = this;
                  if (this.$_terms.alterations)
                    for (let { target: d, adjuster: w } of this.$_terms
                      .alterations)
                      u.includes(d) &&
                        ((h = w(h)),
                        l(
                          n.isSchema(h),
                          "Alteration adjuster for",
                          d,
                          "failed to return a schema object"
                        ));
                  return (
                    (h = h.$_modify({ each: (d) => d.tailor(u), ref: !1 })),
                    (h.$_temp.ruleset = !1),
                    h.$_mutateRebuild()
                  );
                }
                tracer() {
                  return f.location ? f.location(this) : this;
                }
                validate(u, h) {
                  return p.entry(u, this, h);
                }
                validateAsync(u, h) {
                  return p.entryAsync(u, this, h);
                }
                $_addRule(u) {
                  typeof u == "string" && (u = { name: u }),
                    l(u && typeof u == "object", "Invalid options"),
                    l(u.name && typeof u.name == "string", "Invalid rule name");
                  for (let k in u)
                    l(k[0] !== "_", "Cannot set private rule properties");
                  let h = Object.assign({}, u);
                  (h._resolve = []), (h.method = h.method || h.name);
                  let d = this._definition.rules[h.method],
                    w = h.args;
                  l(d, "Unknown rule", h.method);
                  let x = this.clone();
                  if (w) {
                    l(
                      Object.keys(w).length === 1 ||
                        Object.keys(w).length ===
                          this._definition.rules[h.name].args.length,
                      "Invalid rule definition for",
                      this.type,
                      h.name
                    );
                    for (let k in w) {
                      let A = w[k];
                      if (d.argsByName) {
                        let S = d.argsByName.get(k);
                        if (S.ref && n.isResolvable(A))
                          h._resolve.push(k), x.$_mutateRegister(A);
                        else if (
                          (S.normalize && ((A = S.normalize(A)), (w[k] = A)),
                          S.assert)
                        ) {
                          let E = n.validateArg(A, k, S);
                          l(!E, E, "or reference");
                        }
                      }
                      A !== void 0 ? (w[k] = A) : delete w[k];
                    }
                  }
                  return (
                    d.multi ||
                      (x._ruleRemove(h.name, { clone: !1 }),
                      x._singleRules.set(h.name, h)),
                    x.$_temp.ruleset === !1 && (x.$_temp.ruleset = null),
                    d.priority ? x._rules.unshift(h) : x._rules.push(h),
                    x
                  );
                }
                $_compile(u, h) {
                  return i.schema(this.$_root, u, h);
                }
                $_createError(u, h, d, w, x) {
                  let k =
                      arguments.length > 5 && arguments[5] !== void 0
                        ? arguments[5]
                        : {},
                    A = k.flags !== !1 ? this._flags : {},
                    S = k.messages
                      ? r.merge(this._definition.messages, k.messages)
                      : this._definition.messages;
                  return new s.Report(u, h, d, A, S, w, x);
                }
                $_getFlag(u) {
                  return this._flags[u];
                }
                $_getRule(u) {
                  return this._singleRules.get(u);
                }
                $_mapLabels(u) {
                  return (
                    (u = Array.isArray(u) ? u : u.split(".")),
                    this._ids.labels(u)
                  );
                }
                $_match(u, h, d, w) {
                  ((d = Object.assign({}, d)).abortEarly = !0),
                    (d._externals = !1),
                    h.snapshot();
                  let x = !p.validate(u, this, h, d, w).errors;
                  return h.restore(), x;
                }
                $_modify(u) {
                  return (
                    n.assertOptions(u, ["each", "once", "ref", "schema"]),
                    a.schema(this, u) || this
                  );
                }
                $_mutateRebuild() {
                  return (
                    l(
                      !this._inRuleset(),
                      "Cannot add this rule inside a ruleset"
                    ),
                    this._refs.reset(),
                    this._ids.reset(),
                    this.$_modify({
                      each: (u, h) => {
                        let { source: d, name: w, path: x, key: k } = h,
                          A =
                            this._definition[d][w] &&
                            this._definition[d][w].register;
                        A !== !1 &&
                          this.$_mutateRegister(u, { family: A, key: k });
                      },
                    }),
                    this._definition.rebuild && this._definition.rebuild(this),
                    (this.$_temp.ruleset = !1),
                    this
                  );
                }
                $_mutateRegister(u) {
                  let { family: h, key: d } =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                  this._refs.register(u, h), this._ids.register(u, { key: d });
                }
                $_property(u) {
                  return this._definition.properties[u];
                }
                $_reach(u) {
                  return this._ids.reach(u);
                }
                $_rootReferences() {
                  return this._refs.roots();
                }
                $_setFlag(u, h) {
                  let d =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {};
                  l(
                    u[0] === "_" || !this._inRuleset(),
                    "Cannot set flag inside a ruleset"
                  );
                  let w = this._definition.flags[u] || {};
                  if ((g(h, w.default) && (h = void 0), g(h, this._flags[u])))
                    return this;
                  let x = d.clone !== !1 ? this.clone() : this;
                  return (
                    h !== void 0
                      ? ((x._flags[u] = h), x.$_mutateRegister(h))
                      : delete x._flags[u],
                    u[0] !== "_" && (x.$_temp.ruleset = !1),
                    x
                  );
                }
                $_parent(u) {
                  for (
                    var h = arguments.length,
                      d = new Array(h > 1 ? h - 1 : 0),
                      w = 1;
                    w < h;
                    w++
                  )
                    d[w - 1] = arguments[w];
                  return this[u][n.symbols.parent].call(this, ...d);
                }
                $_validate(u, h, d) {
                  return p.validate(u, this, h, d);
                }
                _assign(u) {
                  (u.type = this.type),
                    (u.$_root = this.$_root),
                    (u.$_temp = Object.assign({}, this.$_temp)),
                    (u.$_temp.whens = {}),
                    (u._ids = this._ids.clone()),
                    (u._preferences = this._preferences),
                    (u._valids = this._valids && this._valids.clone()),
                    (u._invalids = this._invalids && this._invalids.clone()),
                    (u._rules = this._rules.slice()),
                    (u._singleRules = b(this._singleRules, { shallow: !0 })),
                    (u._refs = this._refs.clone()),
                    (u._flags = Object.assign({}, this._flags)),
                    (u._cache = null),
                    (u.$_terms = {});
                  for (let h in this.$_terms)
                    u.$_terms[h] = this.$_terms[h]
                      ? this.$_terms[h].slice()
                      : null;
                  u.$_super = {};
                  for (let h in this.$_super)
                    u.$_super[h] = this._super[h].bind(u);
                  return u;
                }
                _bare() {
                  let u = this.clone();
                  u._reset();
                  let h = u._definition.terms;
                  for (let d in h) {
                    let w = h[d];
                    u.$_terms[d] = w.init;
                  }
                  return u.$_mutateRebuild();
                }
                _default(u, h) {
                  let d =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {};
                  return (
                    n.assertOptions(d, "literal"),
                    l(h !== void 0, "Missing", u, "value"),
                    l(
                      typeof h == "function" || !d.literal,
                      "Only function value supports literal option"
                    ),
                    typeof h == "function" &&
                      d.literal &&
                      (h = { [n.symbols.literal]: !0, literal: h }),
                    this.$_setFlag(u, h)
                  );
                }
                _generate(u, h, d) {
                  if (!this.$_terms.whens) return { schema: this };
                  let w = [],
                    x = [];
                  for (let S = 0; S < this.$_terms.whens.length; ++S) {
                    let E = this.$_terms.whens[S];
                    if (E.concat) {
                      w.push(E.concat), x.push(`${S}.concat`);
                      continue;
                    }
                    let D = E.ref ? E.ref.resolve(u, h, d) : u,
                      T = E.is ? [E] : E.switch,
                      L = x.length;
                    for (let z = 0; z < T.length; ++z) {
                      let { is: I, then: C, otherwise: q } = T[z],
                        F = `${S}${E.switch ? "." + z : ""}`;
                      if (I.$_match(D, h.nest(I, `${F}.is`), d)) {
                        if (C) {
                          let W = h.localize(
                              [...h.path, `${F}.then`],
                              h.ancestors,
                              h.schemas
                            ),
                            { schema: Y, id: H } = C._generate(u, W, d);
                          w.push(Y), x.push(`${F}.then${H ? `(${H})` : ""}`);
                          break;
                        }
                      } else if (q) {
                        let W = h.localize(
                            [...h.path, `${F}.otherwise`],
                            h.ancestors,
                            h.schemas
                          ),
                          { schema: Y, id: H } = q._generate(u, W, d);
                        w.push(Y), x.push(`${F}.otherwise${H ? `(${H})` : ""}`);
                        break;
                      }
                    }
                    if (E.break && x.length > L) break;
                  }
                  let k = x.join(", ");
                  if ((h.mainstay.tracer.debug(h, "rule", "when", k), !k))
                    return { schema: this };
                  if (!h.mainstay.tracer.active && this.$_temp.whens[k])
                    return { schema: this.$_temp.whens[k], id: k };
                  let A = this;
                  this._definition.generate &&
                    (A = this._definition.generate(this, u, h, d));
                  for (let S of w) A = A.concat(S);
                  return (
                    this.$_root._tracer &&
                      this.$_root._tracer._combine(A, [this, ...w]),
                    (this.$_temp.whens[k] = A),
                    { schema: A, id: k }
                  );
                }
                _inner(u, h) {
                  let d =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {};
                  l(!this._inRuleset(), `Cannot set ${u} inside a ruleset`);
                  let w = this.clone();
                  return (
                    (w.$_terms[u] && !d.override) || (w.$_terms[u] = []),
                    d.single ? w.$_terms[u].push(h) : w.$_terms[u].push(...h),
                    (w.$_temp.ruleset = !1),
                    w
                  );
                }
                _inRuleset() {
                  return (
                    this.$_temp.ruleset !== null && this.$_temp.ruleset !== !1
                  );
                }
                _ruleRemove(u) {
                  let h =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                  if (!this._singleRules.has(u)) return this;
                  let d = h.clone !== !1 ? this.clone() : this;
                  d._singleRules.delete(u);
                  let w = [];
                  for (let x = 0; x < d._rules.length; ++x) {
                    let k = d._rules[x];
                    k.name !== u || k.keep
                      ? w.push(k)
                      : d._inRuleset() &&
                        x < d.$_temp.ruleset &&
                        --d.$_temp.ruleset;
                  }
                  return (d._rules = w), d;
                }
                _values(u, h) {
                  n.verifyFlat(u, h.slice(1, -1));
                  let d = this.clone(),
                    w = u[0] === n.symbols.override;
                  if (
                    (w && (u = u.slice(1)),
                    !d[h] && u.length
                      ? (d[h] = new _())
                      : w &&
                        ((d[h] = u.length ? new _() : null),
                        d.$_mutateRebuild()),
                    !d[h])
                  )
                    return d;
                  w && d[h].override();
                  for (let x of u) {
                    l(
                      x !== void 0,
                      "Cannot call allow/valid/invalid with undefined"
                    ),
                      l(
                        x !== n.symbols.override,
                        "Override must be the first value"
                      );
                    let k = h === "_invalids" ? "_valids" : "_invalids";
                    d[k] &&
                      (d[k].remove(x),
                      d[k].length ||
                        (l(
                          h === "_valids" || !d._flags.only,
                          "Setting invalid value",
                          x,
                          "leaves schema rejecting all values due to previous valid rule"
                        ),
                        (d[k] = null))),
                      d[h].add(x, d._refs);
                  }
                  return d;
                }
              },
            };
          (y.Base.prototype[n.symbols.any] = {
            version: n.version,
            compile: i.compile,
            root: "$_root",
          }),
            (y.Base.prototype.isImmutable = !0),
            (y.Base.prototype.deny = y.Base.prototype.invalid),
            (y.Base.prototype.disallow = y.Base.prototype.invalid),
            (y.Base.prototype.equal = y.Base.prototype.valid),
            (y.Base.prototype.exist = y.Base.prototype.required),
            (y.Base.prototype.not = y.Base.prototype.invalid),
            (y.Base.prototype.options = y.Base.prototype.prefs),
            (y.Base.prototype.preferences = y.Base.prototype.prefs),
            (j.exports = new y.Base());
        },
        8652: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8571),
            g = v(8160),
            m = {
              max: 1e3,
              supported: new Set(["undefined", "boolean", "number", "string"]),
            };
          ($.provider = { provision: (e) => new m.Cache(e) }),
            (m.Cache = class {
              constructor() {
                let e =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                g.assertOptions(e, ["max"]),
                  l(
                    e.max === void 0 || (e.max && e.max > 0 && isFinite(e.max)),
                    "Invalid max cache size"
                  ),
                  (this._max = e.max || m.max),
                  (this._map = new Map()),
                  (this._list = new m.List());
              }
              get length() {
                return this._map.size;
              }
              set(e, n) {
                if (e !== null && !m.supported.has(typeof e)) return;
                let i = this._map.get(e);
                if (i) return (i.value = n), void this._list.first(i);
                (i = this._list.unshift({ key: e, value: n })),
                  this._map.set(e, i),
                  this._compact();
              }
              get(e) {
                let n = this._map.get(e);
                if (n) return this._list.first(n), b(n.value);
              }
              _compact() {
                if (this._map.size > this._max) {
                  let e = this._list.pop();
                  this._map.delete(e.key);
                }
              }
            }),
            (m.List = class {
              constructor() {
                (this.tail = null), (this.head = null);
              }
              unshift(e) {
                return (
                  (e.next = null),
                  (e.prev = this.head),
                  this.head && (this.head.next = e),
                  (this.head = e),
                  this.tail || (this.tail = e),
                  e
                );
              }
              first(e) {
                e !== this.head && (this._remove(e), this.unshift(e));
              }
              pop() {
                return this._remove(this.tail);
              }
              _remove(e) {
                let { next: n, prev: i } = e;
                return (
                  (n.prev = i),
                  i && (i.next = n),
                  e === this.tail && (this.tail = n),
                  (e.prev = null),
                  (e.next = null),
                  e
                );
              }
            });
        },
        8160: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(7916),
            g = v(5934),
            m,
            e,
            n = {
              isoDate:
                /^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/,
            };
          ($.version = g.version),
            ($.defaults = {
              abortEarly: !0,
              allowUnknown: !1,
              artifacts: !1,
              cache: !0,
              context: null,
              convert: !0,
              dateFormat: "iso",
              errors: {
                escapeHtml: !1,
                label: "path",
                language: null,
                render: !0,
                stack: !1,
                wrap: { label: '"', array: "[]" },
              },
              externals: !0,
              messages: {},
              nonEnumerables: !1,
              noDefaults: !1,
              presence: "optional",
              skipFunctions: !1,
              stripUnknown: !1,
              warnings: !1,
            }),
            ($.symbols = {
              any: Symbol.for("@hapi/joi/schema"),
              arraySingle: Symbol("arraySingle"),
              deepDefault: Symbol("deepDefault"),
              errors: Symbol("errors"),
              literal: Symbol("literal"),
              override: Symbol("override"),
              parent: Symbol("parent"),
              prefs: Symbol("prefs"),
              ref: Symbol("ref"),
              template: Symbol("template"),
              values: Symbol("values"),
            }),
            ($.assertOptions = function (i, s) {
              let t =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : "Options";
              l(
                i && typeof i == "object" && !Array.isArray(i),
                "Options must be of type object"
              );
              let o = Object.keys(i).filter((r) => !s.includes(r));
              l(o.length === 0, `${t} contain unknown keys: ${o}`);
            }),
            ($.checkPreferences = function (i) {
              e = e || v(3378);
              let s = e.preferences.validate(i);
              if (s.error) throw new b([s.error.details[0].message]);
            }),
            ($.compare = function (i, s, t) {
              switch (t) {
                case "=":
                  return i === s;
                case ">":
                  return i > s;
                case "<":
                  return i < s;
                case ">=":
                  return i >= s;
                case "<=":
                  return i <= s;
              }
            }),
            ($.default = function (i, s) {
              return i === void 0 ? s : i;
            }),
            ($.isIsoDate = function (i) {
              return n.isoDate.test(i);
            }),
            ($.isNumber = function (i) {
              return typeof i == "number" && !isNaN(i);
            }),
            ($.isResolvable = function (i) {
              return !!i && (i[$.symbols.ref] || i[$.symbols.template]);
            }),
            ($.isSchema = function (i) {
              let s =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                t = i && i[$.symbols.any];
              return (
                !!t &&
                (l(
                  s.legacy || t.version === $.version,
                  "Cannot mix different versions of joi schemas"
                ),
                !0)
              );
            }),
            ($.isValues = function (i) {
              return i[$.symbols.values];
            }),
            ($.limit = function (i) {
              return Number.isSafeInteger(i) && i >= 0;
            }),
            ($.preferences = function (i, s) {
              (m = m || v(6914)), (i = i || {}), (s = s || {});
              let t = Object.assign({}, i, s);
              return (
                s.errors &&
                  i.errors &&
                  ((t.errors = Object.assign({}, i.errors, s.errors)),
                  (t.errors.wrap = Object.assign(
                    {},
                    i.errors.wrap,
                    s.errors.wrap
                  ))),
                s.messages && (t.messages = m.compile(s.messages, i.messages)),
                delete t[$.symbols.prefs],
                t
              );
            }),
            ($.tryWithPath = function (i, s) {
              let t =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : {};
              try {
                return i();
              } catch (o) {
                throw (
                  (o.path !== void 0
                    ? (o.path = s + "." + o.path)
                    : (o.path = s),
                  t.append && (o.message = `${o.message} (${o.path})`),
                  o)
                );
              }
            }),
            ($.validateArg = function (i, s, t) {
              let { assert: o, message: r } = t;
              if ($.isSchema(o)) {
                let a = o.validate(i);
                return a.error ? a.error.message : void 0;
              }
              if (!o(i)) return s ? `${s} ${r}` : r;
            }),
            ($.verifyFlat = function (i, s) {
              for (let t of i)
                l(
                  !Array.isArray(t),
                  "Method no longer accepts array arguments:",
                  s
                );
            });
        },
        3292: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8160),
            g = v(6133),
            m = {};
          ($.schema = function (e, n) {
            let i =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
            b.assertOptions(i, ["appendPath", "override"]);
            try {
              return m.schema(e, n, i);
            } catch (s) {
              throw (
                (i.appendPath &&
                  s.path !== void 0 &&
                  (s.message = `${s.message} (${s.path})`),
                s)
              );
            }
          }),
            (m.schema = function (e, n, i) {
              l(n !== void 0, "Invalid undefined schema"),
                Array.isArray(n) &&
                  (l(n.length, "Invalid empty array schema"),
                  n.length === 1 && (n = n[0]));
              let s = function (t) {
                for (
                  var o = arguments.length,
                    r = new Array(o > 1 ? o - 1 : 0),
                    a = 1;
                  a < o;
                  a++
                )
                  r[a - 1] = arguments[a];
                return i.override !== !1
                  ? t.valid(e.override, ...r)
                  : t.valid(...r);
              };
              if (m.simple(n)) return s(e, n);
              if (typeof n == "function") return e.custom(n);
              if (
                (l(typeof n == "object", "Invalid schema content:", typeof n),
                b.isResolvable(n))
              )
                return s(e, n);
              if (b.isSchema(n)) return n;
              if (Array.isArray(n)) {
                for (let t of n)
                  if (!m.simple(t)) return e.alternatives().try(...n);
                return s(e, ...n);
              }
              return n instanceof RegExp
                ? e.string().regex(n)
                : n instanceof Date
                ? s(e.date(), n)
                : (l(
                    Object.getPrototypeOf(n) === Object.getPrototypeOf({}),
                    "Schema can only contain plain objects"
                  ),
                  e.object().keys(n));
            }),
            ($.ref = function (e, n) {
              return g.isRef(e) ? e : g.create(e, n);
            }),
            ($.compile = function (e, n) {
              let i =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : {};
              b.assertOptions(i, ["legacy"]);
              let s = n && n[b.symbols.any];
              if (s)
                return (
                  l(
                    i.legacy || s.version === b.version,
                    "Cannot mix different versions of joi schemas:",
                    s.version,
                    b.version
                  ),
                  n
                );
              if (typeof n != "object" || !i.legacy)
                return $.schema(e, n, { appendPath: !0 });
              let t = m.walk(n);
              return t
                ? t.compile(t.root, n)
                : $.schema(e, n, { appendPath: !0 });
            }),
            (m.walk = function (e) {
              if (typeof e != "object") return null;
              if (Array.isArray(e)) {
                for (let i of e) {
                  let s = m.walk(i);
                  if (s) return s;
                }
                return null;
              }
              let n = e[b.symbols.any];
              if (n) return { root: e[n.root], compile: n.compile };
              l(
                Object.getPrototypeOf(e) === Object.getPrototypeOf({}),
                "Schema can only contain plain objects"
              );
              for (let i in e) {
                let s = m.walk(e[i]);
                if (s) return s;
              }
              return null;
            }),
            (m.simple = function (e) {
              return (
                e === null || ["boolean", "string", "number"].includes(typeof e)
              );
            }),
            ($.when = function (e, n, i) {
              if (
                (i === void 0 &&
                  (l(n && typeof n == "object", "Missing options"),
                  (i = n),
                  (n = g.create("."))),
                Array.isArray(i) && (i = { switch: i }),
                b.assertOptions(i, [
                  "is",
                  "not",
                  "then",
                  "otherwise",
                  "switch",
                  "break",
                ]),
                b.isSchema(n))
              )
                return (
                  l(
                    i.is === void 0,
                    '"is" can not be used with a schema condition'
                  ),
                  l(
                    i.not === void 0,
                    '"not" can not be used with a schema condition'
                  ),
                  l(
                    i.switch === void 0,
                    '"switch" can not be used with a schema condition'
                  ),
                  m.condition(e, {
                    is: n,
                    then: i.then,
                    otherwise: i.otherwise,
                    break: i.break,
                  })
                );
              if (
                (l(g.isRef(n) || typeof n == "string", "Invalid condition:", n),
                l(
                  i.not === void 0 || i.is === void 0,
                  'Cannot combine "is" with "not"'
                ),
                i.switch === void 0)
              ) {
                let t = i;
                i.not !== void 0 &&
                  (t = {
                    is: i.not,
                    then: i.otherwise,
                    otherwise: i.then,
                    break: i.break,
                  });
                let o =
                  t.is !== void 0
                    ? e.$_compile(t.is)
                    : e.$_root.invalid(null, !1, 0, "").required();
                return (
                  l(
                    t.then !== void 0 || t.otherwise !== void 0,
                    'options must have at least one of "then", "otherwise", or "switch"'
                  ),
                  l(
                    t.break === void 0 ||
                      t.then === void 0 ||
                      t.otherwise === void 0,
                    "Cannot specify then, otherwise, and break all together"
                  ),
                  i.is === void 0 ||
                    g.isRef(i.is) ||
                    b.isSchema(i.is) ||
                    (o = o.required()),
                  m.condition(e, {
                    ref: $.ref(n),
                    is: o,
                    then: t.then,
                    otherwise: t.otherwise,
                    break: t.break,
                  })
                );
              }
              l(Array.isArray(i.switch), '"switch" must be an array'),
                l(i.is === void 0, 'Cannot combine "switch" with "is"'),
                l(i.not === void 0, 'Cannot combine "switch" with "not"'),
                l(i.then === void 0, 'Cannot combine "switch" with "then"');
              let s = { ref: $.ref(n), switch: [], break: i.break };
              for (let t = 0; t < i.switch.length; ++t) {
                let o = i.switch[t],
                  r = t === i.switch.length - 1;
                b.assertOptions(
                  o,
                  r ? ["is", "then", "otherwise"] : ["is", "then"]
                ),
                  l(o.is !== void 0, 'Switch statement missing "is"'),
                  l(o.then !== void 0, 'Switch statement missing "then"');
                let a = { is: e.$_compile(o.is), then: e.$_compile(o.then) };
                if (
                  (g.isRef(o.is) ||
                    b.isSchema(o.is) ||
                    (a.is = a.is.required()),
                  r)
                ) {
                  l(
                    i.otherwise === void 0 || o.otherwise === void 0,
                    'Cannot specify "otherwise" inside and outside a "switch"'
                  );
                  let c = i.otherwise !== void 0 ? i.otherwise : o.otherwise;
                  c !== void 0 &&
                    (l(
                      s.break === void 0,
                      "Cannot specify both otherwise and break"
                    ),
                    (a.otherwise = e.$_compile(c)));
                }
                s.switch.push(a);
              }
              return s;
            }),
            (m.condition = function (e, n) {
              for (let i of ["then", "otherwise"])
                n[i] === void 0 ? delete n[i] : (n[i] = e.$_compile(n[i]));
              return n;
            });
        },
        6354: (j, $, v) => {
          "use strict";
          let l = v(5688),
            b = v(8160),
            g = v(3328);
          ($.Report = class {
            constructor(m, e, n, i, s, t, o) {
              if (
                ((this.code = m),
                (this.flags = i),
                (this.messages = s),
                (this.path = t.path),
                (this.prefs = o),
                (this.state = t),
                (this.value = e),
                (this.message = null),
                (this.template = null),
                (this.local = n || {}),
                (this.local.label = $.label(
                  this.flags,
                  this.state,
                  this.prefs,
                  this.messages
                )),
                this.value === void 0 ||
                  this.local.hasOwnProperty("value") ||
                  (this.local.value = this.value),
                this.path.length)
              ) {
                let r = this.path[this.path.length - 1];
                typeof r != "object" && (this.local.key = r);
              }
            }
            _setTemplate(m) {
              if (
                ((this.template = m),
                !this.flags.label && this.path.length === 0)
              ) {
                let e = this._template(this.template, "root");
                e && (this.local.label = e);
              }
            }
            toString() {
              if (this.message) return this.message;
              let m = this.code;
              if (!this.prefs.errors.render) return this.code;
              let e =
                this._template(this.template) ||
                this._template(this.prefs.messages) ||
                this._template(this.messages);
              return e === void 0
                ? `Error code "${m}" is not defined, your custom type is missing the correct messages definition`
                : ((this.message = e.render(
                    this.value,
                    this.state,
                    this.prefs,
                    this.local,
                    {
                      errors: this.prefs.errors,
                      messages: [this.prefs.messages, this.messages],
                    }
                  )),
                  this.prefs.errors.label ||
                    (this.message = this.message.replace(/^"" /, "").trim()),
                  this.message);
            }
            _template(m, e) {
              return $.template(
                this.value,
                m,
                e || this.code,
                this.state,
                this.prefs
              );
            }
          }),
            ($.path = function (m) {
              let e = "";
              for (let n of m)
                typeof n != "object" &&
                  (typeof n == "string"
                    ? (e && (e += "."), (e += n))
                    : (e += `[${n}]`));
              return e;
            }),
            ($.template = function (m, e, n, i, s) {
              if (!e) return;
              if (g.isTemplate(e)) return n !== "root" ? e : null;
              let t = s.errors.language;
              if ((b.isResolvable(t) && (t = t.resolve(m, i, s)), t && e[t])) {
                if (e[t][n] !== void 0) return e[t][n];
                if (e[t]["*"] !== void 0) return e[t]["*"];
              }
              return e[n] ? e[n] : e["*"];
            }),
            ($.label = function (m, e, n, i) {
              if (m.label) return m.label;
              if (!n.errors.label) return "";
              let s = e.path;
              return (
                n.errors.label === "key" &&
                  e.path.length > 1 &&
                  (s = e.path.slice(-1)),
                $.path(s) ||
                  $.template(null, n.messages, "root", e, n) ||
                  (i && $.template(null, i, "root", e, n)) ||
                  "value"
              );
            }),
            ($.process = function (m, e, n) {
              if (!m) return null;
              let { override: i, message: s, details: t } = $.details(m);
              if (i) return i;
              if (n.errors.stack) return new $.ValidationError(s, t, e);
              let o = Error.stackTraceLimit;
              Error.stackTraceLimit = 0;
              let r = new $.ValidationError(s, t, e);
              return (Error.stackTraceLimit = o), r;
            }),
            ($.details = function (m) {
              let e =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                n = [],
                i = [];
              for (let s of m) {
                if (s instanceof Error) {
                  if (e.override !== !1) return { override: s };
                  let o = s.toString();
                  n.push(o),
                    i.push({
                      message: o,
                      type: "override",
                      context: { error: s },
                    });
                  continue;
                }
                let t = s.toString();
                n.push(t),
                  i.push({
                    message: t,
                    path: s.path.filter((o) => typeof o != "object"),
                    type: s.code,
                    context: s.local,
                  });
              }
              return (
                n.length > 1 && (n = [...new Set(n)]),
                { message: n.join(". "), details: i }
              );
            }),
            ($.ValidationError = class extends Error {
              constructor(m, e, n) {
                super(m), (this._original = n), (this.details = e);
              }
              static isError(m) {
                return m instanceof $.ValidationError;
              }
            }),
            ($.ValidationError.prototype.isJoi = !0),
            ($.ValidationError.prototype.name = "ValidationError"),
            ($.ValidationError.prototype.annotate = l.error);
        },
        8901: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8571),
            g = v(8160),
            m = v(6914),
            e = {};
          ($.type = function (n, i) {
            let s = Object.getPrototypeOf(n),
              t = b(s),
              o = n._assign(Object.create(t)),
              r = Object.assign({}, i);
            delete r.base, (t._definition = r);
            let a = s._definition || {};
            (r.messages = m.merge(a.messages, r.messages)),
              (r.properties = Object.assign({}, a.properties, r.properties)),
              (o.type = r.type),
              (r.flags = Object.assign({}, a.flags, r.flags));
            let c = Object.assign({}, a.terms);
            if (r.terms)
              for (let y in r.terms) {
                let u = r.terms[y];
                l(
                  o.$_terms[y] === void 0,
                  "Invalid term override for",
                  r.type,
                  y
                ),
                  (o.$_terms[y] = u.init),
                  (c[y] = u);
              }
            (r.terms = c),
              r.args || (r.args = a.args),
              (r.prepare = e.prepare(r.prepare, a.prepare)),
              r.coerce &&
                (typeof r.coerce == "function" &&
                  (r.coerce = { method: r.coerce }),
                r.coerce.from &&
                  !Array.isArray(r.coerce.from) &&
                  (r.coerce = {
                    method: r.coerce.method,
                    from: [].concat(r.coerce.from),
                  })),
              (r.coerce = e.coerce(r.coerce, a.coerce)),
              (r.validate = e.validate(r.validate, a.validate));
            let f = Object.assign({}, a.rules);
            if (r.rules)
              for (let y in r.rules) {
                let u = r.rules[y];
                l(
                  typeof u == "object",
                  "Invalid rule definition for",
                  r.type,
                  y
                );
                let h = u.method;
                if (
                  (h === void 0 &&
                    (h = function () {
                      return this.$_addRule(y);
                    }),
                  h && (l(!t[y], "Rule conflict in", r.type, y), (t[y] = h)),
                  l(!f[y], "Rule conflict in", r.type, y),
                  (f[y] = u),
                  u.alias)
                ) {
                  let d = [].concat(u.alias);
                  for (let w of d) t[w] = u.method;
                }
                u.args &&
                  ((u.argsByName = new Map()),
                  (u.args = u.args.map(
                    (d) => (
                      typeof d == "string" && (d = { name: d }),
                      l(
                        !u.argsByName.has(d.name),
                        "Duplicated argument name",
                        d.name
                      ),
                      g.isSchema(d.assert) &&
                        (d.assert = d.assert.strict().label(d.name)),
                      u.argsByName.set(d.name, d),
                      d
                    )
                  )));
              }
            r.rules = f;
            let p = Object.assign({}, a.modifiers);
            if (r.modifiers)
              for (let y in r.modifiers) {
                l(!t[y], "Rule conflict in", r.type, y);
                let u = r.modifiers[y];
                l(
                  typeof u == "function",
                  "Invalid modifier definition for",
                  r.type,
                  y
                );
                let h = function (d) {
                  return this.rule({ [y]: d });
                };
                (t[y] = h), (p[y] = u);
              }
            if (((r.modifiers = p), r.overrides)) {
              (t._super = s), (o.$_super = {});
              for (let y in r.overrides)
                l(s[y], "Cannot override missing", y),
                  (r.overrides[y][g.symbols.parent] = s[y]),
                  (o.$_super[y] = s[y].bind(o));
              Object.assign(t, r.overrides);
            }
            r.cast = Object.assign({}, a.cast, r.cast);
            let _ = Object.assign({}, a.manifest, r.manifest);
            return (
              (_.build = e.build(
                r.manifest && r.manifest.build,
                a.manifest && a.manifest.build
              )),
              (r.manifest = _),
              (r.rebuild = e.rebuild(r.rebuild, a.rebuild)),
              o
            );
          }),
            (e.build = function (n, i) {
              return n && i
                ? function (s, t) {
                    return i(n(s, t), t);
                  }
                : n || i;
            }),
            (e.coerce = function (n, i) {
              return n && i
                ? {
                    from:
                      n.from && i.from
                        ? [...new Set([...n.from, ...i.from])]
                        : null,
                    method(s, t) {
                      let o;
                      if (
                        (!i.from || i.from.includes(typeof s)) &&
                        ((o = i.method(s, t)), o)
                      ) {
                        if (o.errors || o.value === void 0) return o;
                        s = o.value;
                      }
                      if (!n.from || n.from.includes(typeof s)) {
                        let r = n.method(s, t);
                        if (r) return r;
                      }
                      return o;
                    },
                  }
                : n || i;
            }),
            (e.prepare = function (n, i) {
              return n && i
                ? function (s, t) {
                    let o = n(s, t);
                    if (o) {
                      if (o.errors || o.value === void 0) return o;
                      s = o.value;
                    }
                    return i(s, t) || o;
                  }
                : n || i;
            }),
            (e.rebuild = function (n, i) {
              return n && i
                ? function (s) {
                    i(s), n(s);
                  }
                : n || i;
            }),
            (e.validate = function (n, i) {
              return n && i
                ? function (s, t) {
                    let o = i(s, t);
                    if (o) {
                      if (
                        o.errors &&
                        (!Array.isArray(o.errors) || o.errors.length)
                      )
                        return o;
                      s = o.value;
                    }
                    return n(s, t) || o;
                  }
                : n || i;
            });
        },
        5107: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8571),
            g = v(8652),
            m = v(8160),
            e = v(3292),
            n = v(6354),
            i = v(8901),
            s = v(9708),
            t = v(6133),
            o = v(3328),
            r = v(1152),
            a,
            c = {
              types: {
                alternatives: v(4946),
                any: v(8068),
                array: v(546),
                boolean: v(4937),
                date: v(7500),
                function: v(390),
                link: v(8785),
                number: v(3832),
                object: v(8966),
                string: v(7417),
                symbol: v(8826),
              },
              aliases: {
                alt: "alternatives",
                bool: "boolean",
                func: "function",
              },
              root: function () {
                let f = { _types: new Set(Object.keys(c.types)) };
                for (let p of f._types)
                  f[p] = function () {
                    for (
                      var _ = arguments.length, y = new Array(_), u = 0;
                      u < _;
                      u++
                    )
                      y[u] = arguments[u];
                    return (
                      l(
                        !y.length ||
                          ["alternatives", "link", "object"].includes(p),
                        "The",
                        p,
                        "type does not allow arguments"
                      ),
                      c.generate(this, c.types[p], y)
                    );
                  };
                for (let p of [
                  "allow",
                  "custom",
                  "disallow",
                  "equal",
                  "exist",
                  "forbidden",
                  "invalid",
                  "not",
                  "only",
                  "optional",
                  "options",
                  "prefs",
                  "preferences",
                  "required",
                  "strip",
                  "valid",
                  "when",
                ])
                  f[p] = function () {
                    return this.any()[p](...arguments);
                  };
                Object.assign(f, c.methods);
                for (let p in c.aliases) {
                  let _ = c.aliases[p];
                  f[p] = f[_];
                }
                return (f.x = f.expression), r.setup && r.setup(f), f;
              },
            };
          (c.methods = {
            ValidationError: n.ValidationError,
            version: m.version,
            cache: g.provider,
            assert(f, p) {
              for (
                var _ = arguments.length,
                  y = new Array(_ > 2 ? _ - 2 : 0),
                  u = 2;
                u < _;
                u++
              )
                y[u - 2] = arguments[u];
              c.assert(f, p, !0, y);
            },
            attempt(f, p) {
              for (
                var _ = arguments.length,
                  y = new Array(_ > 2 ? _ - 2 : 0),
                  u = 2;
                u < _;
                u++
              )
                y[u - 2] = arguments[u];
              return c.assert(f, p, !1, y);
            },
            build(f) {
              return (
                l(
                  typeof s.build == "function",
                  "Manifest functionality disabled"
                ),
                s.build(this, f)
              );
            },
            checkPreferences(f) {
              m.checkPreferences(f);
            },
            compile(f, p) {
              return e.compile(this, f, p);
            },
            defaults(f) {
              l(typeof f == "function", "modifier must be a function");
              let p = Object.assign({}, this);
              for (let _ of p._types) {
                let y = f(p[_]());
                l(m.isSchema(y), "modifier must return a valid schema object"),
                  (p[_] = function () {
                    for (
                      var u = arguments.length, h = new Array(u), d = 0;
                      d < u;
                      d++
                    )
                      h[d] = arguments[d];
                    return c.generate(this, y, h);
                  });
              }
              return p;
            },
            expression() {
              for (
                var f = arguments.length, p = new Array(f), _ = 0;
                _ < f;
                _++
              )
                p[_] = arguments[_];
              return new o(...p);
            },
            extend() {
              for (
                var f = arguments.length, p = new Array(f), _ = 0;
                _ < f;
                _++
              )
                p[_] = arguments[_];
              m.verifyFlat(p, "extend"),
                (a = a || v(3378)),
                l(p.length, "You need to provide at least one extension"),
                this.assert(p, a.extensions);
              let y = Object.assign({}, this);
              y._types = new Set(y._types);
              for (let u of p) {
                typeof u == "function" && (u = u(y)),
                  this.assert(u, a.extension);
                let h = c.expandExtension(u, y);
                for (let d of h) {
                  l(
                    y[d.type] === void 0 || y._types.has(d.type),
                    "Cannot override name",
                    d.type
                  );
                  let w = d.base || this.any(),
                    x = i.type(w, d);
                  y._types.add(d.type),
                    (y[d.type] = function () {
                      for (
                        var k = arguments.length, A = new Array(k), S = 0;
                        S < k;
                        S++
                      )
                        A[S] = arguments[S];
                      return c.generate(this, x, A);
                    });
                }
              }
              return y;
            },
            isError: n.ValidationError.isError,
            isExpression: o.isTemplate,
            isRef: t.isRef,
            isSchema: m.isSchema,
            in() {
              return t.in(...arguments);
            },
            override: m.symbols.override,
            ref() {
              return t.create(...arguments);
            },
            types() {
              let f = {};
              for (let p of this._types) f[p] = this[p]();
              for (let p in c.aliases) f[p] = this[p]();
              return f;
            },
          }),
            (c.assert = function (f, p, _, y) {
              let u =
                  y[0] instanceof Error || typeof y[0] == "string"
                    ? y[0]
                    : null,
                h = u !== null ? y[1] : y[0],
                d = p.validate(
                  f,
                  m.preferences({ errors: { stack: !0 } }, h || {})
                ),
                w = d.error;
              if (!w) return d.value;
              if (u instanceof Error) throw u;
              let x =
                _ && typeof w.annotate == "function" ? w.annotate() : w.message;
              throw (
                (w instanceof n.ValidationError == 0 && (w = b(w)),
                (w.message = u ? `${u} ${x}` : x),
                w)
              );
            }),
            (c.generate = function (f, p, _) {
              return (
                l(f, "Must be invoked on a Joi instance."),
                (p.$_root = f),
                p._definition.args && _.length ? p._definition.args(p, ..._) : p
              );
            }),
            (c.expandExtension = function (f, p) {
              if (typeof f.type == "string") return [f];
              let _ = [];
              for (let y of p._types)
                if (f.type.test(y)) {
                  let u = Object.assign({}, f);
                  (u.type = y), (u.base = p[y]()), _.push(u);
                }
              return _;
            }),
            (j.exports = c.root());
        },
        6914: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8571),
            g = v(3328);
          ($.compile = function (m, e) {
            if (typeof m == "string")
              return l(!e, "Cannot set single message string"), new g(m);
            if (g.isTemplate(m))
              return l(!e, "Cannot set single message template"), m;
            l(
              typeof m == "object" && !Array.isArray(m),
              "Invalid message options"
            ),
              (e = e ? b(e) : {});
            for (let n in m) {
              let i = m[n];
              if (n === "root" || g.isTemplate(i)) {
                e[n] = i;
                continue;
              }
              if (typeof i == "string") {
                e[n] = new g(i);
                continue;
              }
              l(
                typeof i == "object" && !Array.isArray(i),
                "Invalid message for",
                n
              );
              let s = n;
              for (n in ((e[s] = e[s] || {}), i)) {
                let t = i[n];
                n === "root" || g.isTemplate(t)
                  ? (e[s][n] = t)
                  : (l(typeof t == "string", "Invalid message for", n, "in", s),
                    (e[s][n] = new g(t)));
              }
            }
            return e;
          }),
            ($.decompile = function (m) {
              let e = {};
              for (let n in m) {
                let i = m[n];
                if (n === "root") {
                  e.root = i;
                  continue;
                }
                if (g.isTemplate(i)) {
                  e[n] = i.describe({ compact: !0 });
                  continue;
                }
                let s = n;
                for (n in ((e[s] = {}), i)) {
                  let t = i[n];
                  n !== "root"
                    ? (e[s][n] = t.describe({ compact: !0 }))
                    : (e[s].root = t);
                }
              }
              return e;
            }),
            ($.merge = function (m, e) {
              if (!m) return $.compile(e);
              if (!e) return m;
              if (typeof e == "string") return new g(e);
              if (g.isTemplate(e)) return e;
              let n = b(m);
              for (let i in e) {
                let s = e[i];
                if (i === "root" || g.isTemplate(s)) {
                  n[i] = s;
                  continue;
                }
                if (typeof s == "string") {
                  n[i] = new g(s);
                  continue;
                }
                l(
                  typeof s == "object" && !Array.isArray(s),
                  "Invalid message for",
                  i
                );
                let t = i;
                for (i in ((n[t] = n[t] || {}), s)) {
                  let o = s[i];
                  i === "root" || g.isTemplate(o)
                    ? (n[t][i] = o)
                    : (l(
                        typeof o == "string",
                        "Invalid message for",
                        i,
                        "in",
                        t
                      ),
                      (n[t][i] = new g(o)));
                }
              }
              return n;
            });
        },
        2294: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8160),
            g = v(6133),
            m = {};
          ($.Ids = m.Ids =
            class {
              constructor() {
                (this._byId = new Map()),
                  (this._byKey = new Map()),
                  (this._schemaChain = !1);
              }
              clone() {
                let e = new m.Ids();
                return (
                  (e._byId = new Map(this._byId)),
                  (e._byKey = new Map(this._byKey)),
                  (e._schemaChain = this._schemaChain),
                  e
                );
              }
              concat(e) {
                e._schemaChain && (this._schemaChain = !0);
                for (let [n, i] of e._byId.entries())
                  l(
                    !this._byKey.has(n),
                    "Schema id conflicts with existing key:",
                    n
                  ),
                    this._byId.set(n, i);
                for (let [n, i] of e._byKey.entries())
                  l(
                    !this._byId.has(n),
                    "Schema key conflicts with existing id:",
                    n
                  ),
                    this._byKey.set(n, i);
              }
              fork(e, n, i) {
                let s = this._collect(e);
                s.push({ schema: i });
                let t = s.shift(),
                  o = { id: t.id, schema: n(t.schema) };
                l(
                  b.isSchema(o.schema),
                  "adjuster function failed to return a joi schema type"
                );
                for (let r of s)
                  o = { id: r.id, schema: m.fork(r.schema, o.id, o.schema) };
                return o.schema;
              }
              labels(e) {
                let n =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : [],
                  i = e[0],
                  s = this._get(i);
                if (!s) return [...n, ...e].join(".");
                let t = e.slice(1);
                return (
                  (n = [...n, s.schema._flags.label || i]),
                  t.length ? s.schema._ids.labels(t, n) : n.join(".")
                );
              }
              reach(e) {
                let n =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : [],
                  i = e[0],
                  s = this._get(i);
                l(s, "Schema does not contain path", [...n, ...e].join("."));
                let t = e.slice(1);
                return t.length ? s.schema._ids.reach(t, [...n, i]) : s.schema;
              }
              register(e) {
                let { key: n } =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
                if (!e || !b.isSchema(e)) return;
                (e.$_property("schemaChain") || e._ids._schemaChain) &&
                  (this._schemaChain = !0);
                let i = e._flags.id;
                if (i) {
                  let s = this._byId.get(i);
                  l(
                    !s || s.schema === e,
                    "Cannot add different schemas with the same id:",
                    i
                  ),
                    l(
                      !this._byKey.has(i),
                      "Schema id conflicts with existing key:",
                      i
                    ),
                    this._byId.set(i, { schema: e, id: i });
                }
                n &&
                  (l(!this._byKey.has(n), "Schema already contains key:", n),
                  l(
                    !this._byId.has(n),
                    "Schema key conflicts with existing id:",
                    n
                  ),
                  this._byKey.set(n, { schema: e, id: n }));
              }
              reset() {
                (this._byId = new Map()),
                  (this._byKey = new Map()),
                  (this._schemaChain = !1);
              }
              _collect(e) {
                let n =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : [],
                  i =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : [],
                  s = e[0],
                  t = this._get(s);
                l(t, "Schema does not contain path", [...n, ...e].join(".")),
                  (i = [t, ...i]);
                let o = e.slice(1);
                return o.length ? t.schema._ids._collect(o, [...n, s], i) : i;
              }
              _get(e) {
                return this._byId.get(e) || this._byKey.get(e);
              }
            }),
            (m.fork = function (e, n, i) {
              let s = $.schema(e, {
                each: (t, o) => {
                  let { key: r } = o;
                  if (n === (t._flags.id || r)) return i;
                },
                ref: !1,
              });
              return s ? s.$_mutateRebuild() : e;
            }),
            ($.schema = function (e, n) {
              let i;
              for (let s in e._flags) {
                if (s[0] === "_") continue;
                let t = m.scan(e._flags[s], { source: "flags", name: s }, n);
                t !== void 0 && ((i = i || e.clone()), (i._flags[s] = t));
              }
              for (let s = 0; s < e._rules.length; ++s) {
                let t = e._rules[s],
                  o = m.scan(t.args, { source: "rules", name: t.name }, n);
                if (o !== void 0) {
                  i = i || e.clone();
                  let r = Object.assign({}, t);
                  (r.args = o),
                    (i._rules[s] = r),
                    i._singleRules.get(t.name) === t &&
                      i._singleRules.set(t.name, r);
                }
              }
              for (let s in e.$_terms) {
                if (s[0] === "_") continue;
                let t = m.scan(e.$_terms[s], { source: "terms", name: s }, n);
                t !== void 0 && ((i = i || e.clone()), (i.$_terms[s] = t));
              }
              return i;
            }),
            (m.scan = function (e, n, i, s, t) {
              let o = s || [];
              if (e === null || typeof e != "object") return;
              let r;
              if (Array.isArray(e)) {
                for (let a = 0; a < e.length; ++a) {
                  let c = n.source === "terms" && n.name === "keys" && e[a].key,
                    f = m.scan(e[a], n, i, [a, ...o], c);
                  f !== void 0 && ((r = r || e.slice()), (r[a] = f));
                }
                return r;
              }
              if (
                (i.schema !== !1 && b.isSchema(e)) ||
                (i.ref !== !1 && g.isRef(e))
              ) {
                let a = i.each(e, G(P({}, n), { path: o, key: t }));
                return a === e ? void 0 : a;
              }
              for (let a in e) {
                if (a[0] === "_") continue;
                let c = m.scan(e[a], n, i, [a, ...o], t);
                c !== void 0 && ((r = r || Object.assign({}, e)), (r[a] = c));
              }
              return r;
            });
        },
        6133: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8571),
            g = v(9621),
            m = v(8160),
            e,
            n = {
              symbol: Symbol("ref"),
              defaults: {
                adjust: null,
                in: !1,
                iterables: null,
                map: null,
                separator: ".",
                type: "value",
              },
            };
          ($.create = function (i) {
            let s =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            l(typeof i == "string", "Invalid reference key:", i),
              m.assertOptions(s, [
                "adjust",
                "ancestor",
                "in",
                "iterables",
                "map",
                "prefix",
                "render",
                "separator",
              ]),
              l(
                !s.prefix || typeof s.prefix == "object",
                "options.prefix must be of type object"
              );
            let t = Object.assign({}, n.defaults, s);
            delete t.prefix;
            let o = t.separator,
              r = n.context(i, o, s.prefix);
            if (((t.type = r.type), (i = r.key), t.type === "value"))
              if (
                (r.root &&
                  (l(
                    !o || i[0] !== o,
                    "Cannot specify relative path with root prefix"
                  ),
                  (t.ancestor = "root"),
                  i || (i = null)),
                o && o === i)
              )
                (i = null), (t.ancestor = 0);
              else if (t.ancestor !== void 0)
                l(
                  !o || !i || i[0] !== o,
                  "Cannot combine prefix with ancestor option"
                );
              else {
                let [a, c] = n.ancestor(i, o);
                c && (i = i.slice(c)) === "" && (i = null), (t.ancestor = a);
              }
            return (
              (t.path = o ? (i === null ? [] : i.split(o)) : [i]), new n.Ref(t)
            );
          }),
            ($.in = function (i) {
              let s =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              return $.create(i, G(P({}, s), { in: !0 }));
            }),
            ($.isRef = function (i) {
              return !!i && !!i[m.symbols.ref];
            }),
            (n.Ref = class {
              constructor(i) {
                l(typeof i == "object", "Invalid reference construction"),
                  m.assertOptions(i, [
                    "adjust",
                    "ancestor",
                    "in",
                    "iterables",
                    "map",
                    "path",
                    "render",
                    "separator",
                    "type",
                    "depth",
                    "key",
                    "root",
                    "display",
                  ]),
                  l(
                    [!1, void 0].includes(i.separator) ||
                      (typeof i.separator == "string" &&
                        i.separator.length === 1),
                    "Invalid separator"
                  ),
                  l(
                    !i.adjust || typeof i.adjust == "function",
                    "options.adjust must be a function"
                  ),
                  l(
                    !i.map || Array.isArray(i.map),
                    "options.map must be an array"
                  ),
                  l(
                    !i.map || !i.adjust,
                    "Cannot set both map and adjust options"
                  ),
                  Object.assign(this, n.defaults, i),
                  l(
                    this.type === "value" || this.ancestor === void 0,
                    "Non-value references cannot reference ancestors"
                  ),
                  Array.isArray(this.map) && (this.map = new Map(this.map)),
                  (this.depth = this.path.length),
                  (this.key = this.path.length
                    ? this.path.join(this.separator)
                    : null),
                  (this.root = this.path[0]),
                  this.updateDisplay();
              }
              resolve(i, s, t, o) {
                let r =
                  arguments.length > 4 && arguments[4] !== void 0
                    ? arguments[4]
                    : {};
                return (
                  l(!this.in || r.in, "Invalid in() reference usage"),
                  this.type === "global"
                    ? this._resolve(t.context, s, r)
                    : this.type === "local"
                    ? this._resolve(o, s, r)
                    : this.ancestor
                    ? this.ancestor === "root"
                      ? this._resolve(s.ancestors[s.ancestors.length - 1], s, r)
                      : (l(
                          this.ancestor <= s.ancestors.length,
                          "Invalid reference exceeds the schema root:",
                          this.display
                        ),
                        this._resolve(s.ancestors[this.ancestor - 1], s, r))
                    : this._resolve(i, s, r)
                );
              }
              _resolve(i, s, t) {
                let o;
                if (
                  (this.type === "value" &&
                    s.mainstay.shadow &&
                    t.shadow !== !1 &&
                    (o = s.mainstay.shadow.get(this.absolute(s))),
                  o === void 0 &&
                    (o = g(i, this.path, {
                      iterables: this.iterables,
                      functions: !0,
                    })),
                  this.adjust && (o = this.adjust(o)),
                  this.map)
                ) {
                  let r = this.map.get(o);
                  r !== void 0 && (o = r);
                }
                return s.mainstay && s.mainstay.tracer.resolve(s, this, o), o;
              }
              toString() {
                return this.display;
              }
              absolute(i) {
                return [...i.path.slice(0, -this.ancestor), ...this.path];
              }
              clone() {
                return new n.Ref(this);
              }
              describe() {
                let i = { path: this.path };
                this.type !== "value" && (i.type = this.type),
                  this.separator !== "." && (i.separator = this.separator),
                  this.type === "value" &&
                    this.ancestor !== 1 &&
                    (i.ancestor = this.ancestor),
                  this.map && (i.map = [...this.map]);
                for (let s of ["adjust", "iterables", "render"])
                  this[s] !== null && this[s] !== void 0 && (i[s] = this[s]);
                return this.in !== !1 && (i.in = !0), { ref: i };
              }
              updateDisplay() {
                let i = this.key !== null ? this.key : "";
                if (this.type !== "value")
                  return void (this.display = `ref:${this.type}:${i}`);
                if (!this.separator) return void (this.display = `ref:${i}`);
                if (!this.ancestor)
                  return void (this.display = `ref:${this.separator}${i}`);
                if (this.ancestor === "root")
                  return void (this.display = `ref:root:${i}`);
                if (this.ancestor === 1)
                  return void (this.display = `ref:${i || ".."}`);
                let s = new Array(this.ancestor + 1)
                  .fill(this.separator)
                  .join("");
                this.display = `ref:${s}${i || ""}`;
              }
            }),
            (n.Ref.prototype[m.symbols.ref] = !0),
            ($.build = function (i) {
              return (
                (i = Object.assign({}, n.defaults, i)).type === "value" &&
                  i.ancestor === void 0 &&
                  (i.ancestor = 1),
                new n.Ref(i)
              );
            }),
            (n.context = function (i, s) {
              let t =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : {};
              if (((i = i.trim()), t)) {
                let o = t.global === void 0 ? "$" : t.global;
                if (o !== s && i.startsWith(o))
                  return { key: i.slice(o.length), type: "global" };
                let r = t.local === void 0 ? "#" : t.local;
                if (r !== s && i.startsWith(r))
                  return { key: i.slice(r.length), type: "local" };
                let a = t.root === void 0 ? "/" : t.root;
                if (a !== s && i.startsWith(a))
                  return { key: i.slice(a.length), type: "value", root: !0 };
              }
              return { key: i, type: "value" };
            }),
            (n.ancestor = function (i, s) {
              if (!s) return [1, 0];
              if (i[0] !== s) return [1, 0];
              if (i[1] !== s) return [0, 1];
              let t = 2;
              for (; i[t] === s; ) ++t;
              return [t - 1, t];
            }),
            ($.toSibling = 0),
            ($.toParent = 1),
            ($.Manager = class {
              constructor() {
                this.refs = [];
              }
              register(i, s) {
                if (i)
                  if (((s = s === void 0 ? $.toParent : s), Array.isArray(i)))
                    for (let t of i) this.register(t, s);
                  else if (m.isSchema(i))
                    for (let t of i._refs.refs)
                      t.ancestor - s >= 0 &&
                        this.refs.push({
                          ancestor: t.ancestor - s,
                          root: t.root,
                        });
                  else
                    $.isRef(i) &&
                      i.type === "value" &&
                      i.ancestor - s >= 0 &&
                      this.refs.push({
                        ancestor: i.ancestor - s,
                        root: i.root,
                      }),
                      (e = e || v(3328)),
                      e.isTemplate(i) && this.register(i.refs(), s);
              }
              get length() {
                return this.refs.length;
              }
              clone() {
                let i = new $.Manager();
                return (i.refs = b(this.refs)), i;
              }
              reset() {
                this.refs = [];
              }
              roots() {
                return this.refs.filter((i) => !i.ancestor).map((i) => i.root);
              }
            });
        },
        3378: (j, $, v) => {
          "use strict";
          let l = v(5107),
            b = {};
          (b.wrap = l.string().min(1).max(2).allow(!1)),
            ($.preferences = l
              .object({
                allowUnknown: l.boolean(),
                abortEarly: l.boolean(),
                artifacts: l.boolean(),
                cache: l.boolean(),
                context: l.object(),
                convert: l.boolean(),
                dateFormat: l.valid("date", "iso", "string", "time", "utc"),
                debug: l.boolean(),
                errors: {
                  escapeHtml: l.boolean(),
                  label: l.valid("path", "key", !1),
                  language: [l.string(), l.object().ref()],
                  render: l.boolean(),
                  stack: l.boolean(),
                  wrap: { label: b.wrap, array: b.wrap, string: b.wrap },
                },
                externals: l.boolean(),
                messages: l.object(),
                noDefaults: l.boolean(),
                nonEnumerables: l.boolean(),
                presence: l.valid("required", "optional", "forbidden"),
                skipFunctions: l.boolean(),
                stripUnknown: l
                  .object({ arrays: l.boolean(), objects: l.boolean() })
                  .or("arrays", "objects")
                  .allow(!0, !1),
                warnings: l.boolean(),
              })
              .strict()),
            (b.nameRx = /^[a-zA-Z0-9]\w*$/),
            (b.rule = l.object({
              alias: l.array().items(l.string().pattern(b.nameRx)).single(),
              args: l
                .array()
                .items(
                  l.string(),
                  l.object({
                    name: l.string().pattern(b.nameRx).required(),
                    ref: l.boolean(),
                    assert: l
                      .alternatives([l.function(), l.object().schema()])
                      .conditional("ref", { is: !0, then: l.required() }),
                    normalize: l.function(),
                    message: l
                      .string()
                      .when("assert", { is: l.function(), then: l.required() }),
                  })
                ),
              convert: l.boolean(),
              manifest: l.boolean(),
              method: l.function().allow(!1),
              multi: l.boolean(),
              validate: l.function(),
            })),
            ($.extension = l
              .object({
                type: l
                  .alternatives([l.string(), l.object().regex()])
                  .required(),
                args: l.function(),
                cast: l
                  .object()
                  .pattern(
                    b.nameRx,
                    l.object({
                      from: l.function().maxArity(1).required(),
                      to: l.function().minArity(1).maxArity(2).required(),
                    })
                  ),
                base: l
                  .object()
                  .schema()
                  .when("type", {
                    is: l.object().regex(),
                    then: l.forbidden(),
                  }),
                coerce: [
                  l.function().maxArity(3),
                  l.object({
                    method: l.function().maxArity(3).required(),
                    from: l.array().items(l.string()).single(),
                  }),
                ],
                flags: l
                  .object()
                  .pattern(
                    b.nameRx,
                    l.object({ setter: l.string(), default: l.any() })
                  ),
                manifest: { build: l.function().arity(2) },
                messages: [l.object(), l.string()],
                modifiers: l
                  .object()
                  .pattern(b.nameRx, l.function().minArity(1).maxArity(2)),
                overrides: l.object().pattern(b.nameRx, l.function()),
                prepare: l.function().maxArity(3),
                rebuild: l.function().arity(1),
                rules: l.object().pattern(b.nameRx, b.rule),
                terms: l
                  .object()
                  .pattern(
                    b.nameRx,
                    l.object({
                      init: l.array().allow(null).required(),
                      manifest: l
                        .object()
                        .pattern(/.+/, [
                          l.valid("schema", "single"),
                          l.object({
                            mapped: l
                              .object({
                                from: l.string().required(),
                                to: l.string().required(),
                              })
                              .required(),
                          }),
                        ]),
                    })
                  ),
                validate: l.function().maxArity(3),
              })
              .strict()),
            ($.extensions = l
              .array()
              .items(l.object(), l.function().arity(1))
              .strict()),
            (b.desc = {
              buffer: l.object({ buffer: l.string() }),
              func: l.object({
                function: l.function().required(),
                options: { literal: !0 },
              }),
              override: l.object({ override: !0 }),
              ref: l.object({
                ref: l
                  .object({
                    type: l.valid("value", "global", "local"),
                    path: l.array().required(),
                    separator: l.string().length(1).allow(!1),
                    ancestor: l.number().min(0).integer().allow("root"),
                    map: l.array().items(l.array().length(2)).min(1),
                    adjust: l.function(),
                    iterables: l.boolean(),
                    in: l.boolean(),
                    render: l.boolean(),
                  })
                  .required(),
              }),
              regex: l.object({ regex: l.string().min(3) }),
              special: l.object({ special: l.valid("deep").required() }),
              template: l.object({
                template: l.string().required(),
                options: l.object(),
              }),
              value: l.object({
                value: l.alternatives([l.object(), l.array()]).required(),
              }),
            }),
            (b.desc.entity = l.alternatives([
              l.array().items(l.link("...")),
              l.boolean(),
              l.function(),
              l.number(),
              l.string(),
              b.desc.buffer,
              b.desc.func,
              b.desc.ref,
              b.desc.regex,
              b.desc.special,
              b.desc.template,
              b.desc.value,
              l.link("/"),
            ])),
            (b.desc.values = l
              .array()
              .items(
                null,
                l.boolean(),
                l.function(),
                l.number().allow(1 / 0, -1 / 0),
                l.string().allow(""),
                l.symbol(),
                b.desc.buffer,
                b.desc.func,
                b.desc.override,
                b.desc.ref,
                b.desc.regex,
                b.desc.template,
                b.desc.value
              )),
            (b.desc.messages = l
              .object()
              .pattern(/.+/, [
                l.string(),
                b.desc.template,
                l.object().pattern(/.+/, [l.string(), b.desc.template]),
              ])),
            ($.description = l
              .object({
                type: l.string().required(),
                flags: l
                  .object({
                    cast: l.string(),
                    default: l.any(),
                    description: l.string(),
                    empty: l.link("/"),
                    failover: b.desc.entity,
                    id: l.string(),
                    label: l.string(),
                    only: !0,
                    presence: ["optional", "required", "forbidden"],
                    result: ["raw", "strip"],
                    strip: l.boolean(),
                    unit: l.string(),
                  })
                  .unknown(),
                preferences: {
                  allowUnknown: l.boolean(),
                  abortEarly: l.boolean(),
                  artifacts: l.boolean(),
                  cache: l.boolean(),
                  convert: l.boolean(),
                  dateFormat: ["date", "iso", "string", "time", "utc"],
                  errors: {
                    escapeHtml: l.boolean(),
                    label: ["path", "key"],
                    language: [l.string(), b.desc.ref],
                    wrap: { label: b.wrap, array: b.wrap },
                  },
                  externals: l.boolean(),
                  messages: b.desc.messages,
                  noDefaults: l.boolean(),
                  nonEnumerables: l.boolean(),
                  presence: ["required", "optional", "forbidden"],
                  skipFunctions: l.boolean(),
                  stripUnknown: l
                    .object({ arrays: l.boolean(), objects: l.boolean() })
                    .or("arrays", "objects")
                    .allow(!0, !1),
                  warnings: l.boolean(),
                },
                allow: b.desc.values,
                invalid: b.desc.values,
                rules: l
                  .array()
                  .min(1)
                  .items({
                    name: l.string().required(),
                    args: l.object().min(1),
                    keep: l.boolean(),
                    message: [l.string(), b.desc.messages],
                    warn: l.boolean(),
                  }),
                keys: l.object().pattern(/.*/, l.link("/")),
                link: b.desc.ref,
              })
              .pattern(/^[a-z]\w*$/, l.any()));
        },
        493: (j, $, v) => {
          "use strict";
          let l = v(8571),
            b = v(9621),
            g = v(8160),
            m = { value: Symbol("value") };
          (j.exports = m.State =
            class {
              constructor(e, n, i) {
                (this.path = e),
                  (this.ancestors = n),
                  (this.mainstay = i.mainstay),
                  (this.schemas = i.schemas),
                  (this.debug = null);
              }
              localize(e) {
                let n =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : null,
                  i =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : null,
                  s = new m.State(e, n, this);
                return (
                  i && s.schemas && (s.schemas = [m.schemas(i), ...s.schemas]),
                  s
                );
              }
              nest(e, n) {
                let i = new m.State(this.path, this.ancestors, this);
                return (
                  (i.schemas = i.schemas && [m.schemas(e), ...i.schemas]),
                  (i.debug = n),
                  i
                );
              }
              shadow(e, n) {
                (this.mainstay.shadow = this.mainstay.shadow || new m.Shadow()),
                  this.mainstay.shadow.set(this.path, e, n);
              }
              snapshot() {
                this.mainstay.shadow &&
                  (this._snapshot = l(this.mainstay.shadow.node(this.path))),
                  this.mainstay.snapshot();
              }
              restore() {
                this.mainstay.shadow &&
                  (this.mainstay.shadow.override(this.path, this._snapshot),
                  (this._snapshot = void 0)),
                  this.mainstay.restore();
              }
            }),
            (m.schemas = function (e) {
              return g.isSchema(e) ? { schema: e } : e;
            }),
            (m.Shadow = class {
              constructor() {
                this._values = null;
              }
              set(e, n, i) {
                if (
                  !e.length ||
                  (i === "strip" && typeof e[e.length - 1] == "number")
                )
                  return;
                this._values = this._values || new Map();
                let s = this._values;
                for (let t = 0; t < e.length; ++t) {
                  let o = e[t],
                    r = s.get(o);
                  r || ((r = new Map()), s.set(o, r)), (s = r);
                }
                s[m.value] = n;
              }
              get(e) {
                let n = this.node(e);
                if (n) return n[m.value];
              }
              node(e) {
                if (this._values) return b(this._values, e, { iterables: !0 });
              }
              override(e, n) {
                if (!this._values) return;
                let i = e.slice(0, -1),
                  s = e[e.length - 1],
                  t = b(this._values, i, { iterables: !0 });
                n ? t.set(s, n) : t && t.delete(s);
              }
            });
        },
        3328: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8571),
            g = v(5277),
            m = v(1447),
            e = v(8160),
            n = v(6354),
            i = v(6133),
            s = {
              symbol: Symbol("template"),
              opens: new Array(1e3).join("\0"),
              closes: new Array(1e3).join(""),
              dateFormat: {
                date: Date.prototype.toDateString,
                iso: Date.prototype.toISOString,
                string: Date.prototype.toString,
                time: Date.prototype.toTimeString,
                utc: Date.prototype.toUTCString,
              },
            };
          (j.exports = s.Template =
            class {
              constructor(t, o) {
                l(typeof t == "string", "Template source must be a string"),
                  l(
                    !t.includes("\0") && !t.includes(""),
                    "Template source cannot contain reserved control characters"
                  ),
                  (this.source = t),
                  (this.rendered = t),
                  (this._template = null),
                  (this._settings = b(o)),
                  this._parse();
              }
              _parse() {
                if (!this.source.includes("{")) return;
                let t = s.encode(this.source),
                  o = s.split(t),
                  r = !1,
                  a = [],
                  c = o.shift();
                c && a.push(c);
                for (let f of o) {
                  let p = f[0] !== "{",
                    _ = p ? "}" : "}}",
                    y = f.indexOf(_);
                  if (y === -1 || f[1] === "{") {
                    a.push(`{${s.decode(f)}`);
                    continue;
                  }
                  let u = f.slice(p ? 0 : 1, y),
                    h = u[0] === ":";
                  h && (u = u.slice(1));
                  let d = this._ref(s.decode(u), { raw: p, wrapped: h });
                  a.push(d), typeof d != "string" && (r = !0);
                  let w = f.slice(y + _.length);
                  w && a.push(s.decode(w));
                }
                r ? (this._template = a) : (this.rendered = a.join(""));
              }
              static date(t, o) {
                return s.dateFormat[o.dateFormat].call(t);
              }
              describe() {
                let t =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                if (!this._settings && t.compact) return this.source;
                let o = { template: this.source };
                return this._settings && (o.options = this._settings), o;
              }
              static build(t) {
                return new s.Template(t.template, t.options);
              }
              isDynamic() {
                return !!this._template;
              }
              static isTemplate(t) {
                return !!t && !!t[e.symbols.template];
              }
              refs() {
                if (!this._template) return;
                let t = [];
                for (let o of this._template)
                  typeof o != "string" && t.push(...o.refs);
                return t;
              }
              resolve(t, o, r, a) {
                return this._template && this._template.length === 1
                  ? this._part(this._template[0], t, o, r, a, {})
                  : this.render(t, o, r, a);
              }
              _part(t) {
                for (
                  var o = arguments.length,
                    r = new Array(o > 1 ? o - 1 : 0),
                    a = 1;
                  a < o;
                  a++
                )
                  r[a - 1] = arguments[a];
                return t.ref ? t.ref.resolve(...r) : t.formula.evaluate(r);
              }
              render(t, o, r, a) {
                let c =
                  arguments.length > 4 && arguments[4] !== void 0
                    ? arguments[4]
                    : {};
                if (!this.isDynamic()) return this.rendered;
                let f = [];
                for (let p of this._template)
                  if (typeof p == "string") f.push(p);
                  else {
                    let _ = this._part(p, t, o, r, a, c),
                      y = s.stringify(_, t, o, r, a, c);
                    if (y !== void 0) {
                      let u =
                        p.raw || (c.errors && c.errors.escapeHtml) === !1
                          ? y
                          : g(y);
                      f.push(s.wrap(u, p.wrapped && r.errors.wrap.label));
                    }
                  }
                return f.join("");
              }
              _ref(t, o) {
                let { raw: r, wrapped: a } = o,
                  c = [],
                  f = (_) => {
                    let y = i.create(_, this._settings);
                    return c.push(y), (u) => y.resolve(...u);
                  };
                try {
                  var p = new m.Parser(t, {
                    reference: f,
                    functions: s.functions,
                    constants: s.constants,
                  });
                } catch (_) {
                  throw (
                    ((_.message = `Invalid template variable "${t}" fails due to: ${_.message}`),
                    _)
                  );
                }
                if (p.single) {
                  if (p.single.type === "reference") {
                    let _ = c[0];
                    return {
                      ref: _,
                      raw: r,
                      refs: c,
                      wrapped: a || (_.type === "local" && _.key === "label"),
                    };
                  }
                  return s.stringify(p.single.value);
                }
                return { formula: p, raw: r, refs: c };
              }
              toString() {
                return this.source;
              }
            }),
            (s.Template.prototype[e.symbols.template] = !0),
            (s.Template.prototype.isImmutable = !0),
            (s.encode = function (t) {
              return t
                .replace(/\\(\{+)/g, (o, r) => s.opens.slice(0, r.length))
                .replace(/\\(\}+)/g, (o, r) => s.closes.slice(0, r.length));
            }),
            (s.decode = function (t) {
              return t.replace(/\u0000/g, "{").replace(/\u0001/g, "}");
            }),
            (s.split = function (t) {
              let o = [],
                r = "";
              for (let a = 0; a < t.length; ++a) {
                let c = t[a];
                if (c === "{") {
                  let f = "";
                  for (; a + 1 < t.length && t[a + 1] === "{"; )
                    (f += "{"), ++a;
                  o.push(r), (r = f);
                } else r += c;
              }
              return o.push(r), o;
            }),
            (s.wrap = function (t, o) {
              return o
                ? o.length === 1
                  ? `${o}${t}${o}`
                  : `${o[0]}${t}${o[1]}`
                : t;
            }),
            (s.stringify = function (t, o, r, a, c) {
              let f =
                  arguments.length > 5 && arguments[5] !== void 0
                    ? arguments[5]
                    : {},
                p = typeof t,
                _ = (a && a.errors && a.errors.wrap) || {},
                y = !1;
              if (
                (i.isRef(t) &&
                  t.render &&
                  ((y = t.in), (t = t.resolve(o, r, a, c, P({ in: t.in }, f)))),
                t === null)
              )
                return "null";
              if (p === "string") return s.wrap(t, f.arrayItems && _.string);
              if (p === "number" || p === "function" || p === "symbol")
                return t.toString();
              if (p !== "object") return JSON.stringify(t);
              if (t instanceof Date) return s.Template.date(t, a);
              if (t instanceof Map) {
                let h = [];
                for (let [d, w] of t.entries())
                  h.push(`${d.toString()} -> ${w.toString()}`);
                t = h;
              }
              if (!Array.isArray(t)) return t.toString();
              let u = [];
              for (let h of t)
                u.push(s.stringify(h, o, r, a, c, P({ arrayItems: !0 }, f)));
              return s.wrap(u.join(", "), !y && _.array);
            }),
            (s.constants = {
              true: !0,
              false: !1,
              null: null,
              second: 1e3,
              minute: 6e4,
              hour: 36e5,
              day: 864e5,
            }),
            (s.functions = {
              if: (t, o, r) => (t ? o : r),
              length: (t) =>
                typeof t == "string"
                  ? t.length
                  : t && typeof t == "object"
                  ? Array.isArray(t)
                    ? t.length
                    : Object.keys(t).length
                  : null,
              msg(t) {
                let [o, r, a, c, f] = this,
                  p = f.messages;
                if (!p) return "";
                let _ =
                  n.template(o, p[0], t, r, a) || n.template(o, p[1], t, r, a);
                return _ ? _.render(o, r, a, c, f) : "";
              },
              number: (t) =>
                typeof t == "number"
                  ? t
                  : typeof t == "string"
                  ? parseFloat(t)
                  : typeof t == "boolean"
                  ? t
                    ? 1
                    : 0
                  : t instanceof Date
                  ? t.getTime()
                  : null,
            });
        },
        4946: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(1687),
            g = v(8068),
            m = v(8160),
            e = v(3292),
            n = v(6354),
            i = v(6133),
            s = {};
          (j.exports = g.extend({
            type: "alternatives",
            flags: { match: { default: "any" } },
            terms: { matches: { init: [], register: i.toSibling } },
            args(t) {
              for (
                var o = arguments.length,
                  r = new Array(o > 1 ? o - 1 : 0),
                  a = 1;
                a < o;
                a++
              )
                r[a - 1] = arguments[a];
              return r.length === 1 && Array.isArray(r[0])
                ? t.try(...r[0])
                : t.try(...r);
            },
            validate(t, o) {
              let { schema: r, error: a, state: c, prefs: f } = o;
              if (r._flags.match) {
                let _ = [],
                  y = [];
                for (let h = 0; h < r.$_terms.matches.length; ++h) {
                  let d = r.$_terms.matches[h],
                    w = c.nest(d.schema, `match.${h}`);
                  w.snapshot();
                  let x = d.schema.$_validate(t, w, f);
                  x.errors ? (y.push(x.errors), w.restore()) : _.push(x.value);
                }
                if (_.length === 0)
                  return {
                    errors: a("alternatives.any", {
                      details: y.map((h) => n.details(h, { override: !1 })),
                    }),
                  };
                if (r._flags.match === "one")
                  return _.length === 1
                    ? { value: _[0] }
                    : { errors: a("alternatives.one") };
                if (_.length !== r.$_terms.matches.length)
                  return {
                    errors: a("alternatives.all", {
                      details: y.map((h) => n.details(h, { override: !1 })),
                    }),
                  };
                let u = (h) =>
                  h.$_terms.matches.some(
                    (d) =>
                      d.schema.type === "object" ||
                      (d.schema.type === "alternatives" && u(d.schema))
                  );
                return u(r)
                  ? { value: _.reduce((h, d) => b(h, d, { mergeArrays: !1 })) }
                  : { value: _[_.length - 1] };
              }
              let p = [];
              for (let _ = 0; _ < r.$_terms.matches.length; ++_) {
                let y = r.$_terms.matches[_];
                if (y.schema) {
                  let d = c.nest(y.schema, `match.${_}`);
                  d.snapshot();
                  let w = y.schema.$_validate(t, d, f);
                  if (!w.errors) return w;
                  d.restore(), p.push({ schema: y.schema, reports: w.errors });
                  continue;
                }
                let u = y.ref ? y.ref.resolve(t, c, f) : t,
                  h = y.is ? [y] : y.switch;
                for (let d = 0; d < h.length; ++d) {
                  let w = h[d],
                    { is: x, then: k, otherwise: A } = w,
                    S = `match.${_}${y.switch ? "." + d : ""}`;
                  if (x.$_match(u, c.nest(x, `${S}.is`), f)) {
                    if (k) return k.$_validate(t, c.nest(k, `${S}.then`), f);
                  } else if (A)
                    return A.$_validate(t, c.nest(A, `${S}.otherwise`), f);
                }
              }
              return s.errors(p, o);
            },
            rules: {
              conditional: {
                method(t, o) {
                  l(!this._flags._endedSwitch, "Unreachable condition"),
                    l(
                      !this._flags.match,
                      "Cannot combine match mode",
                      this._flags.match,
                      "with conditional rule"
                    ),
                    l(
                      o.break === void 0,
                      "Cannot use break option with alternatives conditional"
                    );
                  let r = this.clone(),
                    a = e.when(r, t, o),
                    c = a.is ? [a] : a.switch;
                  for (let f of c)
                    if (f.then && f.otherwise) {
                      r.$_setFlag("_endedSwitch", !0, { clone: !1 });
                      break;
                    }
                  return r.$_terms.matches.push(a), r.$_mutateRebuild();
                },
              },
              match: {
                method(t) {
                  if (
                    (l(
                      ["any", "one", "all"].includes(t),
                      "Invalid alternatives match mode",
                      t
                    ),
                    t !== "any")
                  )
                    for (let o of this.$_terms.matches)
                      l(
                        o.schema,
                        "Cannot combine match mode",
                        t,
                        "with conditional rules"
                      );
                  return this.$_setFlag("match", t);
                },
              },
              try: {
                method() {
                  for (
                    var t = arguments.length, o = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    o[r] = arguments[r];
                  l(o.length, "Missing alternative schemas"),
                    m.verifyFlat(o, "try"),
                    l(!this._flags._endedSwitch, "Unreachable condition");
                  let a = this.clone();
                  for (let c of o)
                    a.$_terms.matches.push({ schema: a.$_compile(c) });
                  return a.$_mutateRebuild();
                },
              },
            },
            overrides: {
              label(t) {
                return this.$_parent("label", t).$_modify({
                  each: (o, r) => (r.path[0] !== "is" ? o.label(t) : void 0),
                  ref: !1,
                });
              },
            },
            rebuild(t) {
              t.$_modify({
                each: (o) => {
                  m.isSchema(o) &&
                    o.type === "array" &&
                    t.$_setFlag("_arrayItems", !0, { clone: !1 });
                },
              });
            },
            manifest: {
              build(t, o) {
                if (o.matches)
                  for (let r of o.matches) {
                    let {
                      schema: a,
                      ref: c,
                      is: f,
                      not: p,
                      then: _,
                      otherwise: y,
                    } = r;
                    t = a
                      ? t.try(a)
                      : c
                      ? t.conditional(c, {
                          is: f,
                          then: _,
                          not: p,
                          otherwise: y,
                          switch: r.switch,
                        })
                      : t.conditional(f, { then: _, otherwise: y });
                  }
                return t;
              },
            },
            messages: {
              "alternatives.all":
                "{{#label}} does not match all of the required types",
              "alternatives.any":
                "{{#label}} does not match any of the allowed types",
              "alternatives.match":
                "{{#label}} does not match any of the allowed types",
              "alternatives.one":
                "{{#label}} matches more than one allowed type",
              "alternatives.types": "{{#label}} must be one of {{#types}}",
            },
          })),
            (s.errors = function (t, o) {
              let { error: r, state: a } = o;
              if (!t.length) return { errors: r("alternatives.any") };
              if (t.length === 1) return { errors: t[0].reports };
              let c = new Set(),
                f = [];
              for (let { reports: p, schema: _ } of t) {
                if (p.length > 1) return s.unmatched(t, r);
                let y = p[0];
                if (y instanceof n.Report == 0) return s.unmatched(t, r);
                if (y.state.path.length !== a.path.length) {
                  f.push({ type: _.type, report: y });
                  continue;
                }
                if (y.code === "any.only") {
                  for (let d of y.local.valids) c.add(d);
                  continue;
                }
                let [u, h] = y.code.split(".");
                h === "base" ? c.add(u) : f.push({ type: _.type, report: y });
              }
              return f.length
                ? f.length === 1
                  ? { errors: f[0].report }
                  : s.unmatched(t, r)
                : { errors: r("alternatives.types", { types: [...c] }) };
            }),
            (s.unmatched = function (t, o) {
              let r = [];
              for (let a of t) r.push(...a.reports);
              return {
                errors: o("alternatives.match", n.details(r, { override: !1 })),
              };
            });
        },
        8068: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(7629),
            g = v(8160),
            m = v(6914);
          j.exports = b.extend({
            type: "any",
            flags: { only: { default: !1 } },
            terms: {
              alterations: { init: null },
              examples: { init: null },
              externals: { init: null },
              metas: { init: [] },
              notes: { init: [] },
              shared: { init: null },
              tags: { init: [] },
              whens: { init: null },
            },
            rules: {
              custom: {
                method(e, n) {
                  return (
                    l(typeof e == "function", "Method must be a function"),
                    l(
                      n === void 0 || (n && typeof n == "string"),
                      "Description must be a non-empty string"
                    ),
                    this.$_addRule({
                      name: "custom",
                      args: { method: e, description: n },
                    })
                  );
                },
                validate(e, n, i) {
                  let { method: s } = i;
                  try {
                    return s(e, n);
                  } catch (t) {
                    return n.error("any.custom", { error: t });
                  }
                },
                args: ["method", "description"],
                multi: !0,
              },
              messages: {
                method(e) {
                  return this.prefs({ messages: e });
                },
              },
              shared: {
                method(e) {
                  l(
                    g.isSchema(e) && e._flags.id,
                    "Schema must be a schema with an id"
                  );
                  let n = this.clone();
                  return (
                    (n.$_terms.shared = n.$_terms.shared || []),
                    n.$_terms.shared.push(e),
                    n.$_mutateRegister(e),
                    n
                  );
                },
              },
              warning: {
                method(e, n) {
                  return (
                    l(e && typeof e == "string", "Invalid warning code"),
                    this.$_addRule({
                      name: "warning",
                      args: { code: e, local: n },
                      warn: !0,
                    })
                  );
                },
                validate(e, n, i) {
                  let { code: s, local: t } = i;
                  return n.error(s, t);
                },
                args: ["code", "local"],
                multi: !0,
              },
            },
            modifiers: {
              keep(e) {
                let n =
                  !(arguments.length > 1 && arguments[1] !== void 0) ||
                  arguments[1];
                e.keep = n;
              },
              message(e, n) {
                e.message = m.compile(n);
              },
              warn(e) {
                let n =
                  !(arguments.length > 1 && arguments[1] !== void 0) ||
                  arguments[1];
                e.warn = n;
              },
            },
            manifest: {
              build(e, n) {
                for (let i in n) {
                  let s = n[i];
                  if (
                    [
                      "examples",
                      "externals",
                      "metas",
                      "notes",
                      "tags",
                    ].includes(i)
                  )
                    for (let t of s) e = e[i.slice(0, -1)](t);
                  else if (i !== "alterations")
                    if (i !== "whens") {
                      if (i === "shared") for (let t of s) e = e.shared(t);
                    } else
                      for (let t of s) {
                        let {
                          ref: o,
                          is: r,
                          not: a,
                          then: c,
                          otherwise: f,
                          concat: p,
                        } = t;
                        e = p
                          ? e.concat(p)
                          : o
                          ? e.when(o, {
                              is: r,
                              not: a,
                              then: c,
                              otherwise: f,
                              switch: t.switch,
                              break: t.break,
                            })
                          : e.when(r, {
                              then: c,
                              otherwise: f,
                              break: t.break,
                            });
                      }
                  else {
                    let t = {};
                    for (let { target: o, adjuster: r } of s) t[o] = r;
                    e = e.alter(t);
                  }
                }
                return e;
              },
            },
            messages: {
              "any.custom":
                "{{#label}} failed custom validation because {{#error.message}}",
              "any.default":
                "{{#label}} threw an error when running default method",
              "any.failover":
                "{{#label}} threw an error when running failover method",
              "any.invalid": "{{#label}} contains an invalid value",
              "any.only":
                '{{#label}} must be {if(#valids.length == 1, "", "one of ")}{{#valids}}',
              "any.ref":
                "{{#label}} {{#arg}} references {{:#ref}} which {{#reason}}",
              "any.required": "{{#label}} is required",
              "any.unknown": "{{#label}} is not allowed",
            },
          });
        },
        546: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(9474),
            g = v(9621),
            m = v(8068),
            e = v(8160),
            n = v(3292),
            i = {};
          (j.exports = m.extend({
            type: "array",
            flags: { single: { default: !1 }, sparse: { default: !1 } },
            terms: {
              items: { init: [], manifest: "schema" },
              ordered: { init: [], manifest: "schema" },
              _exclusions: { init: [] },
              _inclusions: { init: [] },
              _requireds: { init: [] },
            },
            coerce: {
              from: "object",
              method(s, t) {
                let { schema: o, state: r, prefs: a } = t;
                if (!Array.isArray(s)) return;
                let c = o.$_getRule("sort");
                return c ? i.sort(o, s, c.args.options, r, a) : void 0;
              },
            },
            validate(s, t) {
              let { schema: o, error: r } = t;
              if (!Array.isArray(s)) {
                if (o._flags.single) {
                  let a = [s];
                  return (a[e.symbols.arraySingle] = !0), { value: a };
                }
                return { errors: r("array.base") };
              }
              if (o.$_getRule("items") || o.$_terms.externals)
                return { value: s.slice() };
            },
            rules: {
              has: {
                method(s) {
                  s = this.$_compile(s, { appendPath: !0 });
                  let t = this.$_addRule({ name: "has", args: { schema: s } });
                  return t.$_mutateRegister(s), t;
                },
                validate(s, t, o) {
                  let { state: r, prefs: a, error: c } = t,
                    { schema: f } = o,
                    p = [s, ...r.ancestors];
                  for (let y = 0; y < s.length; ++y) {
                    let u = r.localize([...r.path, y], p, f);
                    if (f.$_match(s[y], u, a)) return s;
                  }
                  let _ = f._flags.label;
                  return _
                    ? c("array.hasKnown", { patternLabel: _ })
                    : c("array.hasUnknown", null);
                },
                multi: !0,
              },
              items: {
                method() {
                  for (
                    var s = arguments.length, t = new Array(s), o = 0;
                    o < s;
                    o++
                  )
                    t[o] = arguments[o];
                  e.verifyFlat(t, "items");
                  let r = this.$_addRule("items");
                  for (let a = 0; a < t.length; ++a) {
                    let c = e.tryWithPath(() => this.$_compile(t[a]), a, {
                      append: !0,
                    });
                    r.$_terms.items.push(c);
                  }
                  return r.$_mutateRebuild();
                },
                validate(s, t) {
                  let {
                      schema: o,
                      error: r,
                      state: a,
                      prefs: c,
                      errorsArray: f,
                    } = t,
                    p = o.$_terms._requireds.slice(),
                    _ = o.$_terms.ordered.slice(),
                    y = [...o.$_terms._inclusions, ...p],
                    u = !s[e.symbols.arraySingle];
                  delete s[e.symbols.arraySingle];
                  let h = f(),
                    d = s.length;
                  for (let w = 0; w < d; ++w) {
                    let x = s[w],
                      k = !1,
                      A = !1,
                      S = u ? w : new Number(w),
                      E = [...a.path, S];
                    if (!o._flags.sparse && x === void 0) {
                      if (
                        (h.push(
                          r(
                            "array.sparse",
                            { key: S, path: E, pos: w, value: void 0 },
                            a.localize(E)
                          )
                        ),
                        c.abortEarly)
                      )
                        return h;
                      _.shift();
                      continue;
                    }
                    let D = [s, ...a.ancestors];
                    for (let I of o.$_terms._exclusions)
                      if (
                        I.$_match(x, a.localize(E, D, I), c, {
                          presence: "ignore",
                        })
                      ) {
                        if (
                          (h.push(
                            r(
                              "array.excludes",
                              { pos: w, value: x },
                              a.localize(E)
                            )
                          ),
                          c.abortEarly)
                        )
                          return h;
                        (k = !0), _.shift();
                        break;
                      }
                    if (k) continue;
                    if (o.$_terms.ordered.length) {
                      if (_.length) {
                        let I = _.shift(),
                          C = I.$_validate(x, a.localize(E, D, I), c);
                        if (C.errors) {
                          if ((h.push(...C.errors), c.abortEarly)) return h;
                        } else if (I._flags.result === "strip")
                          i.fastSplice(s, w), --w, --d;
                        else {
                          if (!o._flags.sparse && C.value === void 0) {
                            if (
                              (h.push(
                                r(
                                  "array.sparse",
                                  { key: S, path: E, pos: w, value: void 0 },
                                  a.localize(E)
                                )
                              ),
                              c.abortEarly)
                            )
                              return h;
                            continue;
                          }
                          s[w] = C.value;
                        }
                        continue;
                      }
                      if (!o.$_terms.items.length) {
                        if (
                          (h.push(
                            r("array.orderedLength", {
                              pos: w,
                              limit: o.$_terms.ordered.length,
                            })
                          ),
                          c.abortEarly)
                        )
                          return h;
                        break;
                      }
                    }
                    let T = [],
                      L = p.length;
                    for (let I = 0; I < L; ++I) {
                      let C = a.localize(E, D, p[I]);
                      C.snapshot();
                      let q = p[I].$_validate(x, C, c);
                      if (((T[I] = q), !q.errors)) {
                        if (
                          ((s[w] = q.value),
                          (A = !0),
                          i.fastSplice(p, I),
                          --I,
                          --L,
                          !o._flags.sparse &&
                            q.value === void 0 &&
                            (h.push(
                              r(
                                "array.sparse",
                                { key: S, path: E, pos: w, value: void 0 },
                                a.localize(E)
                              )
                            ),
                            c.abortEarly))
                        )
                          return h;
                        break;
                      }
                      C.restore();
                    }
                    if (A) continue;
                    let z = (c.stripUnknown && !!c.stripUnknown.arrays) || !1;
                    L = y.length;
                    for (let I of y) {
                      let C,
                        q = p.indexOf(I);
                      if (q !== -1) C = T[q];
                      else {
                        let F = a.localize(E, D, I);
                        if (
                          (F.snapshot(), (C = I.$_validate(x, F, c)), !C.errors)
                        ) {
                          I._flags.result === "strip"
                            ? (i.fastSplice(s, w), --w, --d)
                            : o._flags.sparse || C.value !== void 0
                            ? (s[w] = C.value)
                            : (h.push(
                                r(
                                  "array.sparse",
                                  { key: S, path: E, pos: w, value: void 0 },
                                  a.localize(E)
                                )
                              ),
                              (k = !0)),
                            (A = !0);
                          break;
                        }
                        F.restore();
                      }
                      if (L === 1) {
                        if (z) {
                          i.fastSplice(s, w), --w, --d, (A = !0);
                          break;
                        }
                        if ((h.push(...C.errors), c.abortEarly)) return h;
                        k = !0;
                        break;
                      }
                    }
                    if (
                      !k &&
                      (o.$_terms._inclusions.length ||
                        o.$_terms._requireds.length) &&
                      !A
                    ) {
                      if (z) {
                        i.fastSplice(s, w), --w, --d;
                        continue;
                      }
                      if (
                        (h.push(
                          r(
                            "array.includes",
                            { pos: w, value: x },
                            a.localize(E)
                          )
                        ),
                        c.abortEarly)
                      )
                        return h;
                    }
                  }
                  return (
                    p.length && i.fillMissedErrors(o, h, p, s, a, c),
                    _.length &&
                      (i.fillOrderedErrors(o, h, _, s, a, c),
                      h.length || i.fillDefault(_, s, a, c)),
                    h.length ? h : s
                  );
                },
                priority: !0,
                manifest: !1,
              },
              length: {
                method(s) {
                  return this.$_addRule({
                    name: "length",
                    args: { limit: s },
                    operator: "=",
                  });
                },
                validate(s, t, o, r) {
                  let { limit: a } = o,
                    { name: c, operator: f, args: p } = r;
                  return e.compare(s.length, a, f)
                    ? s
                    : t.error("array." + c, { limit: p.limit, value: s });
                },
                args: [
                  {
                    name: "limit",
                    ref: !0,
                    assert: e.limit,
                    message: "must be a positive integer",
                  },
                ],
              },
              max: {
                method(s) {
                  return this.$_addRule({
                    name: "max",
                    method: "length",
                    args: { limit: s },
                    operator: "<=",
                  });
                },
              },
              min: {
                method(s) {
                  return this.$_addRule({
                    name: "min",
                    method: "length",
                    args: { limit: s },
                    operator: ">=",
                  });
                },
              },
              ordered: {
                method() {
                  for (
                    var s = arguments.length, t = new Array(s), o = 0;
                    o < s;
                    o++
                  )
                    t[o] = arguments[o];
                  e.verifyFlat(t, "ordered");
                  let r = this.$_addRule("items");
                  for (let a = 0; a < t.length; ++a) {
                    let c = e.tryWithPath(() => this.$_compile(t[a]), a, {
                      append: !0,
                    });
                    i.validateSingle(c, r),
                      r.$_mutateRegister(c),
                      r.$_terms.ordered.push(c);
                  }
                  return r.$_mutateRebuild();
                },
              },
              single: {
                method(s) {
                  let t = s === void 0 || !!s;
                  return (
                    l(
                      !t || !this._flags._arrayItems,
                      "Cannot specify single rule when array has array items"
                    ),
                    this.$_setFlag("single", t)
                  );
                },
              },
              sort: {
                method() {
                  let s =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  e.assertOptions(s, ["by", "order"]);
                  let t = { order: s.order || "ascending" };
                  return (
                    s.by &&
                      ((t.by = n.ref(s.by, { ancestor: 0 })),
                      l(!t.by.ancestor, "Cannot sort by ancestor")),
                    this.$_addRule({ name: "sort", args: { options: t } })
                  );
                },
                validate(s, t, o) {
                  let { error: r, state: a, prefs: c, schema: f } = t,
                    { options: p } = o,
                    { value: _, errors: y } = i.sort(f, s, p, a, c);
                  if (y) return y;
                  for (let u = 0; u < s.length; ++u)
                    if (s[u] !== _[u])
                      return r("array.sort", {
                        order: p.order,
                        by: p.by ? p.by.key : "value",
                      });
                  return s;
                },
                convert: !0,
              },
              sparse: {
                method(s) {
                  let t = s === void 0 || !!s;
                  return this._flags.sparse === t
                    ? this
                    : (t ? this.clone() : this.$_addRule("items")).$_setFlag(
                        "sparse",
                        t,
                        { clone: !1 }
                      );
                },
              },
              unique: {
                method(s) {
                  let t =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                  l(
                    !s || typeof s == "function" || typeof s == "string",
                    "comparator must be a function or a string"
                  ),
                    e.assertOptions(t, ["ignoreUndefined", "separator"]);
                  let o = {
                    name: "unique",
                    args: { options: t, comparator: s },
                  };
                  if (s)
                    if (typeof s == "string") {
                      let r = e.default(t.separator, ".");
                      o.path = r ? s.split(r) : [s];
                    } else o.comparator = s;
                  return this.$_addRule(o);
                },
                validate(s, t, o, r) {
                  let { state: a, error: c, schema: f } = t,
                    { comparator: p, options: _ } = o,
                    { comparator: y, path: u } = r,
                    h = {
                      string: Object.create(null),
                      number: Object.create(null),
                      undefined: Object.create(null),
                      boolean: Object.create(null),
                      object: new Map(),
                      function: new Map(),
                      custom: new Map(),
                    },
                    d = y || b,
                    w = _.ignoreUndefined;
                  for (let x = 0; x < s.length; ++x) {
                    let k = u ? g(s[x], u) : s[x],
                      A = y ? h.custom : h[typeof k];
                    if (
                      (l(
                        A,
                        "Failed to find unique map container for type",
                        typeof k
                      ),
                      A instanceof Map)
                    ) {
                      let S = A.entries(),
                        E;
                      for (; !(E = S.next()).done; )
                        if (d(E.value[0], k)) {
                          let D = a.localize(
                              [...a.path, x],
                              [s, ...a.ancestors]
                            ),
                            T = {
                              pos: x,
                              value: s[x],
                              dupePos: E.value[1],
                              dupeValue: s[E.value[1]],
                            };
                          return u && (T.path = p), c("array.unique", T, D);
                        }
                      A.set(k, x);
                    } else {
                      if ((!w || k !== void 0) && A[k] !== void 0) {
                        let S = {
                          pos: x,
                          value: s[x],
                          dupePos: A[k],
                          dupeValue: s[A[k]],
                        };
                        return (
                          u && (S.path = p),
                          c(
                            "array.unique",
                            S,
                            a.localize([...a.path, x], [s, ...a.ancestors])
                          )
                        );
                      }
                      A[k] = x;
                    }
                  }
                  return s;
                },
                args: ["comparator", "options"],
                multi: !0,
              },
            },
            cast: { set: { from: Array.isArray, to: (s, t) => new Set(s) } },
            rebuild(s) {
              (s.$_terms._inclusions = []),
                (s.$_terms._exclusions = []),
                (s.$_terms._requireds = []);
              for (let t of s.$_terms.items)
                i.validateSingle(t, s),
                  t._flags.presence === "required"
                    ? s.$_terms._requireds.push(t)
                    : t._flags.presence === "forbidden"
                    ? s.$_terms._exclusions.push(t)
                    : s.$_terms._inclusions.push(t);
              for (let t of s.$_terms.ordered) i.validateSingle(t, s);
            },
            manifest: {
              build: (s, t) => (
                t.items && (s = s.items(...t.items)),
                t.ordered && (s = s.ordered(...t.ordered)),
                s
              ),
            },
            messages: {
              "array.base": "{{#label}} must be an array",
              "array.excludes": "{{#label}} contains an excluded value",
              "array.hasKnown":
                "{{#label}} does not contain at least one required match for type {:#patternLabel}",
              "array.hasUnknown":
                "{{#label}} does not contain at least one required match",
              "array.includes":
                "{{#label}} does not match any of the allowed types",
              "array.includesRequiredBoth":
                "{{#label}} does not contain {{#knownMisses}} and {{#unknownMisses}} other required value(s)",
              "array.includesRequiredKnowns":
                "{{#label}} does not contain {{#knownMisses}}",
              "array.includesRequiredUnknowns":
                "{{#label}} does not contain {{#unknownMisses}} required value(s)",
              "array.length": "{{#label}} must contain {{#limit}} items",
              "array.max":
                "{{#label}} must contain less than or equal to {{#limit}} items",
              "array.min": "{{#label}} must contain at least {{#limit}} items",
              "array.orderedLength":
                "{{#label}} must contain at most {{#limit}} items",
              "array.sort":
                "{{#label}} must be sorted in {#order} order by {{#by}}",
              "array.sort.mismatching":
                "{{#label}} cannot be sorted due to mismatching types",
              "array.sort.unsupported":
                "{{#label}} cannot be sorted due to unsupported type {#type}",
              "array.sparse": "{{#label}} must not be a sparse array item",
              "array.unique": "{{#label}} contains a duplicate value",
            },
          })),
            (i.fillMissedErrors = function (s, t, o, r, a, c) {
              let f = [],
                p = 0;
              for (let _ of o) {
                let y = _._flags.label;
                y ? f.push(y) : ++p;
              }
              f.length
                ? p
                  ? t.push(
                      s.$_createError(
                        "array.includesRequiredBoth",
                        r,
                        { knownMisses: f, unknownMisses: p },
                        a,
                        c
                      )
                    )
                  : t.push(
                      s.$_createError(
                        "array.includesRequiredKnowns",
                        r,
                        { knownMisses: f },
                        a,
                        c
                      )
                    )
                : t.push(
                    s.$_createError(
                      "array.includesRequiredUnknowns",
                      r,
                      { unknownMisses: p },
                      a,
                      c
                    )
                  );
            }),
            (i.fillOrderedErrors = function (s, t, o, r, a, c) {
              let f = [];
              for (let p of o) p._flags.presence === "required" && f.push(p);
              f.length && i.fillMissedErrors(s, t, f, r, a, c);
            }),
            (i.fillDefault = function (s, t, o, r) {
              let a = [],
                c = !0;
              for (let f = s.length - 1; f >= 0; --f) {
                let p = s[f],
                  _ = [t, ...o.ancestors],
                  y = p.$_validate(void 0, o.localize(o.path, _, p), r).value;
                if (c) {
                  if (y === void 0) continue;
                  c = !1;
                }
                a.unshift(y);
              }
              a.length && t.push(...a);
            }),
            (i.fastSplice = function (s, t) {
              let o = t;
              for (; o < s.length; ) s[o++] = s[o];
              --s.length;
            }),
            (i.validateSingle = function (s, t) {
              (s.type === "array" || s._flags._arrayItems) &&
                (l(
                  !t._flags.single,
                  "Cannot specify array item with single rule enabled"
                ),
                t.$_setFlag("_arrayItems", !0, { clone: !1 }));
            }),
            (i.sort = function (s, t, o, r, a) {
              let c = o.order === "ascending" ? 1 : -1,
                f = -1 * c,
                p = c,
                _ = (y, u) => {
                  let h = i.compare(y, u, f, p);
                  if (
                    h !== null ||
                    (o.by &&
                      ((y = o.by.resolve(y, r, a)),
                      (u = o.by.resolve(u, r, a))),
                    (h = i.compare(y, u, f, p)),
                    h !== null)
                  )
                    return h;
                  let d = typeof y;
                  if (d !== typeof u)
                    throw s.$_createError(
                      "array.sort.mismatching",
                      t,
                      null,
                      r,
                      a
                    );
                  if (d !== "number" && d !== "string")
                    throw s.$_createError(
                      "array.sort.unsupported",
                      t,
                      { type: d },
                      r,
                      a
                    );
                  return d === "number" ? (y - u) * c : y < u ? f : p;
                };
              try {
                return { value: t.slice().sort(_) };
              } catch (y) {
                return { errors: y };
              }
            }),
            (i.compare = function (s, t, o, r) {
              return s === t
                ? 0
                : s === void 0
                ? 1
                : t === void 0
                ? -1
                : s === null
                ? r
                : t === null
                ? o
                : null;
            });
        },
        4937: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8068),
            g = v(8160),
            m = v(2036),
            e = {
              isBool: function (n) {
                return typeof n == "boolean";
              },
            };
          j.exports = b.extend({
            type: "boolean",
            flags: { sensitive: { default: !1 } },
            terms: {
              falsy: { init: null, manifest: "values" },
              truthy: { init: null, manifest: "values" },
            },
            coerce(n, i) {
              let { schema: s } = i;
              if (typeof n != "boolean") {
                if (typeof n == "string") {
                  let t = s._flags.sensitive ? n : n.toLowerCase();
                  n = t === "true" || (t !== "false" && n);
                }
                return (
                  typeof n != "boolean" &&
                    (n =
                      (s.$_terms.truthy &&
                        s.$_terms.truthy.has(
                          n,
                          null,
                          null,
                          !s._flags.sensitive
                        )) ||
                      ((!s.$_terms.falsy ||
                        !s.$_terms.falsy.has(
                          n,
                          null,
                          null,
                          !s._flags.sensitive
                        )) &&
                        n)),
                  { value: n }
                );
              }
            },
            validate(n, i) {
              let { error: s } = i;
              if (typeof n != "boolean")
                return { value: n, errors: s("boolean.base") };
            },
            rules: {
              truthy: {
                method() {
                  for (
                    var n = arguments.length, i = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    i[s] = arguments[s];
                  g.verifyFlat(i, "truthy");
                  let t = this.clone();
                  t.$_terms.truthy = t.$_terms.truthy || new m();
                  for (let o = 0; o < i.length; ++o) {
                    let r = i[o];
                    l(r !== void 0, "Cannot call truthy with undefined"),
                      t.$_terms.truthy.add(r);
                  }
                  return t;
                },
              },
              falsy: {
                method() {
                  for (
                    var n = arguments.length, i = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    i[s] = arguments[s];
                  g.verifyFlat(i, "falsy");
                  let t = this.clone();
                  t.$_terms.falsy = t.$_terms.falsy || new m();
                  for (let o = 0; o < i.length; ++o) {
                    let r = i[o];
                    l(r !== void 0, "Cannot call falsy with undefined"),
                      t.$_terms.falsy.add(r);
                  }
                  return t;
                },
              },
              sensitive: {
                method() {
                  let n =
                    !(arguments.length > 0 && arguments[0] !== void 0) ||
                    arguments[0];
                  return this.$_setFlag("sensitive", n);
                },
              },
            },
            cast: {
              number: { from: e.isBool, to: (n, i) => (n ? 1 : 0) },
              string: { from: e.isBool, to: (n, i) => (n ? "true" : "false") },
            },
            manifest: {
              build: (n, i) => (
                i.truthy && (n = n.truthy(...i.truthy)),
                i.falsy && (n = n.falsy(...i.falsy)),
                n
              ),
            },
            messages: { "boolean.base": "{{#label}} must be a boolean" },
          });
        },
        7500: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8068),
            g = v(8160),
            m = v(3328),
            e = {
              isDate: function (n) {
                return n instanceof Date;
              },
            };
          (j.exports = b.extend({
            type: "date",
            coerce: {
              from: ["number", "string"],
              method(n, i) {
                let { schema: s } = i;
                return { value: e.parse(n, s._flags.format) || n };
              },
            },
            validate(n, i) {
              let { schema: s, error: t, prefs: o } = i;
              if (n instanceof Date && !isNaN(n.getTime())) return;
              let r = s._flags.format;
              return o.convert && r && typeof n == "string"
                ? { value: n, errors: t("date.format", { format: r }) }
                : { value: n, errors: t("date.base") };
            },
            rules: {
              compare: {
                method: !1,
                validate(n, i, s, t) {
                  let { date: o } = s,
                    { name: r, operator: a, args: c } = t,
                    f = o === "now" ? Date.now() : o.getTime();
                  return g.compare(n.getTime(), f, a)
                    ? n
                    : i.error("date." + r, { limit: c.date, value: n });
                },
                args: [
                  {
                    name: "date",
                    ref: !0,
                    normalize: (n) => (n === "now" ? n : e.parse(n)),
                    assert: (n) => n !== null,
                    message: "must have a valid date format",
                  },
                ],
              },
              format: {
                method(n) {
                  return (
                    l(
                      ["iso", "javascript", "unix"].includes(n),
                      "Unknown date format",
                      n
                    ),
                    this.$_setFlag("format", n)
                  );
                },
              },
              greater: {
                method(n) {
                  return this.$_addRule({
                    name: "greater",
                    method: "compare",
                    args: { date: n },
                    operator: ">",
                  });
                },
              },
              iso: {
                method() {
                  return this.format("iso");
                },
              },
              less: {
                method(n) {
                  return this.$_addRule({
                    name: "less",
                    method: "compare",
                    args: { date: n },
                    operator: "<",
                  });
                },
              },
              max: {
                method(n) {
                  return this.$_addRule({
                    name: "max",
                    method: "compare",
                    args: { date: n },
                    operator: "<=",
                  });
                },
              },
              min: {
                method(n) {
                  return this.$_addRule({
                    name: "min",
                    method: "compare",
                    args: { date: n },
                    operator: ">=",
                  });
                },
              },
              timestamp: {
                method() {
                  let n =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : "javascript";
                  return (
                    l(
                      ["javascript", "unix"].includes(n),
                      '"type" must be one of "javascript, unix"'
                    ),
                    this.format(n)
                  );
                },
              },
            },
            cast: {
              number: { from: e.isDate, to: (n, i) => n.getTime() },
              string: {
                from: e.isDate,
                to(n, i) {
                  let { prefs: s } = i;
                  return m.date(n, s);
                },
              },
            },
            messages: {
              "date.base": "{{#label}} must be a valid date",
              "date.format":
                '{{#label}} must be in {msg("date.format." + #format) || #format} format',
              "date.greater": "{{#label}} must be greater than {{:#limit}}",
              "date.less": "{{#label}} must be less than {{:#limit}}",
              "date.max":
                "{{#label}} must be less than or equal to {{:#limit}}",
              "date.min":
                "{{#label}} must be greater than or equal to {{:#limit}}",
              "date.format.iso": "ISO 8601 date",
              "date.format.javascript": "timestamp or number of milliseconds",
              "date.format.unix": "timestamp or number of seconds",
            },
          })),
            (e.parse = function (n, i) {
              if (n instanceof Date) return n;
              if (
                (typeof n != "string" && (isNaN(n) || !isFinite(n))) ||
                /^\s*$/.test(n)
              )
                return null;
              if (i === "iso")
                return g.isIsoDate(n) ? e.date(n.toString()) : null;
              let s = n;
              if (
                (typeof n == "string" &&
                  /^[+-]?\d+(\.\d+)?$/.test(n) &&
                  (n = parseFloat(n)),
                i)
              ) {
                if (i === "javascript") return e.date(1 * n);
                if (i === "unix") return e.date(1e3 * n);
                if (typeof s == "string") return null;
              }
              return e.date(n);
            }),
            (e.date = function (n) {
              let i = new Date(n);
              return isNaN(i.getTime()) ? null : i;
            });
        },
        390: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(7824);
          j.exports = b.extend({
            type: "function",
            properties: { typeof: "function" },
            rules: {
              arity: {
                method(g) {
                  return (
                    l(
                      Number.isSafeInteger(g) && g >= 0,
                      "n must be a positive integer"
                    ),
                    this.$_addRule({ name: "arity", args: { n: g } })
                  );
                },
                validate(g, m, e) {
                  let { n } = e;
                  return g.length === n ? g : m.error("function.arity", { n });
                },
              },
              class: {
                method() {
                  return this.$_addRule("class");
                },
                validate: (g, m) =>
                  /^\s*class\s/.test(g.toString())
                    ? g
                    : m.error("function.class", { value: g }),
              },
              minArity: {
                method(g) {
                  return (
                    l(
                      Number.isSafeInteger(g) && g > 0,
                      "n must be a strict positive integer"
                    ),
                    this.$_addRule({ name: "minArity", args: { n: g } })
                  );
                },
                validate(g, m, e) {
                  let { n } = e;
                  return g.length >= n
                    ? g
                    : m.error("function.minArity", { n });
                },
              },
              maxArity: {
                method(g) {
                  return (
                    l(
                      Number.isSafeInteger(g) && g >= 0,
                      "n must be a positive integer"
                    ),
                    this.$_addRule({ name: "maxArity", args: { n: g } })
                  );
                },
                validate(g, m, e) {
                  let { n } = e;
                  return g.length <= n
                    ? g
                    : m.error("function.maxArity", { n });
                },
              },
            },
            messages: {
              "function.arity": "{{#label}} must have an arity of {{#n}}",
              "function.class": "{{#label}} must be a class",
              "function.maxArity":
                "{{#label}} must have an arity lesser or equal to {{#n}}",
              "function.minArity":
                "{{#label}} must have an arity greater or equal to {{#n}}",
            },
          });
        },
        7824: (j, $, v) => {
          "use strict";
          let l = v(978),
            b = v(375),
            g = v(8571),
            m = v(3652),
            e = v(8068),
            n = v(8160),
            i = v(3292),
            s = v(6354),
            t = v(6133),
            o = v(3328),
            r = { renameDefaults: { alias: !1, multiple: !1, override: !1 } };
          (j.exports = e.extend({
            type: "_keys",
            properties: { typeof: "object" },
            flags: { unknown: { default: !1 } },
            terms: {
              dependencies: { init: null },
              keys: {
                init: null,
                manifest: { mapped: { from: "schema", to: "key" } },
              },
              patterns: { init: null },
              renames: { init: null },
            },
            args: (a, c) => a.keys(c),
            validate(a, c) {
              let { schema: f, error: p, state: _, prefs: y } = c;
              if (!a || typeof a !== f.$_property("typeof") || Array.isArray(a))
                return {
                  value: a,
                  errors: p("object.base", { type: f.$_property("typeof") }),
                };
              if (
                !(
                  f.$_terms.renames ||
                  f.$_terms.dependencies ||
                  f.$_terms.keys ||
                  f.$_terms.patterns ||
                  f.$_terms.externals
                )
              )
                return;
              a = r.clone(a, y);
              let u = [];
              if (f.$_terms.renames && !r.rename(f, a, _, y, u))
                return { value: a, errors: u };
              if (
                !f.$_terms.keys &&
                !f.$_terms.patterns &&
                !f.$_terms.dependencies
              )
                return { value: a, errors: u };
              let h = new Set(Object.keys(a));
              if (f.$_terms.keys) {
                let d = [a, ..._.ancestors];
                for (let w of f.$_terms.keys) {
                  let x = w.key,
                    k = a[x];
                  h.delete(x);
                  let A = _.localize([..._.path, x], d, w),
                    S = w.schema.$_validate(k, A, y);
                  if (S.errors) {
                    if (y.abortEarly) return { value: a, errors: S.errors };
                    S.value !== void 0 && (a[x] = S.value), u.push(...S.errors);
                  } else
                    w.schema._flags.result === "strip" ||
                    (S.value === void 0 && k !== void 0)
                      ? delete a[x]
                      : S.value !== void 0 && (a[x] = S.value);
                }
              }
              if (h.size || f._flags._hasPatternMatch) {
                let d = r.unknown(f, a, h, u, _, y);
                if (d) return d;
              }
              if (f.$_terms.dependencies)
                for (let d of f.$_terms.dependencies) {
                  if (
                    d.key !== null &&
                    r.isPresent(d.options)(
                      d.key.resolve(a, _, y, null, { shadow: !1 })
                    ) === !1
                  )
                    continue;
                  let w = r.dependencies[d.rel](f, d, a, _, y);
                  if (w) {
                    let x = f.$_createError(w.code, a, w.context, _, y);
                    if (y.abortEarly) return { value: a, errors: x };
                    u.push(x);
                  }
                }
              return { value: a, errors: u };
            },
            rules: {
              and: {
                method() {
                  for (
                    var a = arguments.length, c = new Array(a), f = 0;
                    f < a;
                    f++
                  )
                    c[f] = arguments[f];
                  return (
                    n.verifyFlat(c, "and"), r.dependency(this, "and", null, c)
                  );
                },
              },
              append: {
                method(a) {
                  return a == null || Object.keys(a).length === 0
                    ? this
                    : this.keys(a);
                },
              },
              assert: {
                method(a, c, f) {
                  o.isTemplate(a) || (a = i.ref(a)),
                    b(
                      f === void 0 || typeof f == "string",
                      "Message must be a string"
                    ),
                    (c = this.$_compile(c, { appendPath: !0 }));
                  let p = this.$_addRule({
                    name: "assert",
                    args: { subject: a, schema: c, message: f },
                  });
                  return p.$_mutateRegister(a), p.$_mutateRegister(c), p;
                },
                validate(a, c, f) {
                  let { error: p, prefs: _, state: y } = c,
                    { subject: u, schema: h, message: d } = f,
                    w = u.resolve(a, y, _),
                    x = t.isRef(u) ? u.absolute(y) : [];
                  return h.$_match(w, y.localize(x, [a, ...y.ancestors], h), _)
                    ? a
                    : p("object.assert", { subject: u, message: d });
                },
                args: ["subject", "schema", "message"],
                multi: !0,
              },
              instance: {
                method(a, c) {
                  return (
                    b(typeof a == "function", "constructor must be a function"),
                    (c = c || a.name),
                    this.$_addRule({
                      name: "instance",
                      args: { constructor: a, name: c },
                    })
                  );
                },
                validate(a, c, f) {
                  let { constructor: p, name: _ } = f;
                  return a instanceof p
                    ? a
                    : c.error("object.instance", { type: _, value: a });
                },
                args: ["constructor", "name"],
              },
              keys: {
                method(a) {
                  b(
                    a === void 0 || typeof a == "object",
                    "Object schema must be a valid object"
                  ),
                    b(!n.isSchema(a), "Object schema cannot be a joi schema");
                  let c = this.clone();
                  if (a)
                    if (Object.keys(a).length) {
                      c.$_terms.keys = c.$_terms.keys
                        ? c.$_terms.keys.filter((f) => !a.hasOwnProperty(f.key))
                        : new r.Keys();
                      for (let f in a)
                        n.tryWithPath(
                          () =>
                            c.$_terms.keys.push({
                              key: f,
                              schema: this.$_compile(a[f]),
                            }),
                          f
                        );
                    } else c.$_terms.keys = new r.Keys();
                  else c.$_terms.keys = null;
                  return c.$_mutateRebuild();
                },
              },
              length: {
                method(a) {
                  return this.$_addRule({
                    name: "length",
                    args: { limit: a },
                    operator: "=",
                  });
                },
                validate(a, c, f, p) {
                  let { limit: _ } = f,
                    { name: y, operator: u, args: h } = p;
                  return n.compare(Object.keys(a).length, _, u)
                    ? a
                    : c.error("object." + y, { limit: h.limit, value: a });
                },
                args: [
                  {
                    name: "limit",
                    ref: !0,
                    assert: n.limit,
                    message: "must be a positive integer",
                  },
                ],
              },
              max: {
                method(a) {
                  return this.$_addRule({
                    name: "max",
                    method: "length",
                    args: { limit: a },
                    operator: "<=",
                  });
                },
              },
              min: {
                method(a) {
                  return this.$_addRule({
                    name: "min",
                    method: "length",
                    args: { limit: a },
                    operator: ">=",
                  });
                },
              },
              nand: {
                method() {
                  for (
                    var a = arguments.length, c = new Array(a), f = 0;
                    f < a;
                    f++
                  )
                    c[f] = arguments[f];
                  return (
                    n.verifyFlat(c, "nand"), r.dependency(this, "nand", null, c)
                  );
                },
              },
              or: {
                method() {
                  for (
                    var a = arguments.length, c = new Array(a), f = 0;
                    f < a;
                    f++
                  )
                    c[f] = arguments[f];
                  return (
                    n.verifyFlat(c, "or"), r.dependency(this, "or", null, c)
                  );
                },
              },
              oxor: {
                method() {
                  for (
                    var a = arguments.length, c = new Array(a), f = 0;
                    f < a;
                    f++
                  )
                    c[f] = arguments[f];
                  return r.dependency(this, "oxor", null, c);
                },
              },
              pattern: {
                method(a, c) {
                  let f =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : {},
                    p = a instanceof RegExp;
                  p || (a = this.$_compile(a, { appendPath: !0 })),
                    b(c !== void 0, "Invalid rule"),
                    n.assertOptions(f, ["fallthrough", "matches"]),
                    p &&
                      b(
                        !a.flags.includes("g") && !a.flags.includes("y"),
                        "pattern should not use global or sticky mode"
                      ),
                    (c = this.$_compile(c, { appendPath: !0 }));
                  let _ = this.clone();
                  _.$_terms.patterns = _.$_terms.patterns || [];
                  let y = { [p ? "regex" : "schema"]: a, rule: c };
                  return (
                    f.matches &&
                      ((y.matches = this.$_compile(f.matches)),
                      y.matches.type !== "array" &&
                        (y.matches = y.matches.$_root.array().items(y.matches)),
                      _.$_mutateRegister(y.matches),
                      _.$_setFlag("_hasPatternMatch", !0, { clone: !1 })),
                    f.fallthrough && (y.fallthrough = !0),
                    _.$_terms.patterns.push(y),
                    _.$_mutateRegister(c),
                    _
                  );
                },
              },
              ref: {
                method() {
                  return this.$_addRule("ref");
                },
                validate: (a, c) =>
                  t.isRef(a) ? a : c.error("object.refType", { value: a }),
              },
              regex: {
                method() {
                  return this.$_addRule("regex");
                },
                validate: (a, c) =>
                  a instanceof RegExp
                    ? a
                    : c.error("object.regex", { value: a }),
              },
              rename: {
                method(a, c) {
                  let f =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {};
                  b(
                    typeof a == "string" || a instanceof RegExp,
                    "Rename missing the from argument"
                  ),
                    b(
                      typeof c == "string" || c instanceof o,
                      "Invalid rename to argument"
                    ),
                    b(c !== a, "Cannot rename key to same name:", a),
                    n.assertOptions(f, [
                      "alias",
                      "ignoreUndefined",
                      "override",
                      "multiple",
                    ]);
                  let p = this.clone();
                  p.$_terms.renames = p.$_terms.renames || [];
                  for (let _ of p.$_terms.renames)
                    b(
                      _.from !== a,
                      "Cannot rename the same key multiple times"
                    );
                  return (
                    c instanceof o && p.$_mutateRegister(c),
                    p.$_terms.renames.push({
                      from: a,
                      to: c,
                      options: l(r.renameDefaults, f),
                    }),
                    p
                  );
                },
              },
              schema: {
                method() {
                  let a =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : "any";
                  return this.$_addRule({ name: "schema", args: { type: a } });
                },
                validate(a, c, f) {
                  let { type: p } = f;
                  return !n.isSchema(a) || (p !== "any" && a.type !== p)
                    ? c.error("object.schema", { type: p })
                    : a;
                },
              },
              unknown: {
                method(a) {
                  return this.$_setFlag("unknown", a !== !1);
                },
              },
              with: {
                method(a, c) {
                  let f =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {};
                  return r.dependency(this, "with", a, c, f);
                },
              },
              without: {
                method(a, c) {
                  let f =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {};
                  return r.dependency(this, "without", a, c, f);
                },
              },
              xor: {
                method() {
                  for (
                    var a = arguments.length, c = new Array(a), f = 0;
                    f < a;
                    f++
                  )
                    c[f] = arguments[f];
                  return (
                    n.verifyFlat(c, "xor"), r.dependency(this, "xor", null, c)
                  );
                },
              },
            },
            overrides: {
              default(a, c) {
                return (
                  a === void 0 && (a = n.symbols.deepDefault),
                  this.$_parent("default", a, c)
                );
              },
            },
            rebuild(a) {
              if (a.$_terms.keys) {
                let c = new m.Sorter();
                for (let f of a.$_terms.keys)
                  n.tryWithPath(
                    () =>
                      c.add(f, {
                        after: f.schema.$_rootReferences(),
                        group: f.key,
                      }),
                    f.key
                  );
                a.$_terms.keys = new r.Keys(...c.nodes);
              }
            },
            manifest: {
              build(a, c) {
                if ((c.keys && (a = a.keys(c.keys)), c.dependencies))
                  for (let {
                    rel: f,
                    key: p = null,
                    peers: _,
                    options: y,
                  } of c.dependencies)
                    a = r.dependency(a, f, p, _, y);
                if (c.patterns)
                  for (let {
                    regex: f,
                    schema: p,
                    rule: _,
                    fallthrough: y,
                    matches: u,
                  } of c.patterns)
                    a = a.pattern(f || p, _, { fallthrough: y, matches: u });
                if (c.renames)
                  for (let { from: f, to: p, options: _ } of c.renames)
                    a = a.rename(f, p, _);
                return a;
              },
            },
            messages: {
              "object.and":
                "{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}",
              "object.assert":
                '{{#label}} is invalid because {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}',
              "object.base": "{{#label}} must be of type {{#type}}",
              "object.instance": "{{#label}} must be an instance of {{:#type}}",
              "object.length":
                '{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}',
              "object.max":
                '{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}',
              "object.min":
                '{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}',
              "object.missing":
                "{{#label}} must contain at least one of {{#peersWithLabels}}",
              "object.nand":
                "{{:#mainWithLabel}} must not exist simultaneously with {{#peersWithLabels}}",
              "object.oxor":
                "{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}",
              "object.pattern.match":
                "{{#label}} keys failed to match pattern requirements",
              "object.refType": "{{#label}} must be a Joi reference",
              "object.regex": "{{#label}} must be a RegExp object",
              "object.rename.multiple":
                "{{#label}} cannot rename {{:#from}} because multiple renames are disabled and another key was already renamed to {{:#to}}",
              "object.rename.override":
                "{{#label}} cannot rename {{:#from}} because override is disabled and target {{:#to}} exists",
              "object.schema":
                "{{#label}} must be a Joi schema of {{#type}} type",
              "object.unknown": "{{#label}} is not allowed",
              "object.with":
                "{{:#mainWithLabel}} missing required peer {{:#peerWithLabel}}",
              "object.without":
                "{{:#mainWithLabel}} conflict with forbidden peer {{:#peerWithLabel}}",
              "object.xor":
                "{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}",
            },
          })),
            (r.clone = function (a, c) {
              if (typeof a == "object") {
                if (c.nonEnumerables) return g(a, { shallow: !0 });
                let p = Object.create(Object.getPrototypeOf(a));
                return Object.assign(p, a), p;
              }
              let f = function () {
                for (
                  var p = arguments.length, _ = new Array(p), y = 0;
                  y < p;
                  y++
                )
                  _[y] = arguments[y];
                return a.apply(this, _);
              };
              return (
                (f.prototype = g(a.prototype)),
                Object.defineProperty(f, "name", {
                  value: a.name,
                  writable: !1,
                }),
                Object.defineProperty(f, "length", {
                  value: a.length,
                  writable: !1,
                }),
                Object.assign(f, a),
                f
              );
            }),
            (r.dependency = function (a, c, f, p, _) {
              b(f === null || typeof f == "string", c, "key must be a strings"),
                _ ||
                  (_ =
                    p.length > 1 && typeof p[p.length - 1] == "object"
                      ? p.pop()
                      : {}),
                n.assertOptions(_, ["separator", "isPresent"]),
                (p = [].concat(p));
              let y = n.default(_.separator, "."),
                u = [];
              for (let d of p)
                b(typeof d == "string", c, "peers must be strings"),
                  u.push(i.ref(d, { separator: y, ancestor: 0, prefix: !1 }));
              f !== null &&
                (f = i.ref(f, { separator: y, ancestor: 0, prefix: !1 }));
              let h = a.clone();
              return (
                (h.$_terms.dependencies = h.$_terms.dependencies || []),
                h.$_terms.dependencies.push(new r.Dependency(c, f, u, p, _)),
                h
              );
            }),
            (r.dependencies = {
              and(a, c, f, p, _) {
                let y = [],
                  u = [],
                  h = c.peers.length,
                  d = r.isPresent(c.options);
                for (let w of c.peers)
                  d(w.resolve(f, p, _, null, { shadow: !1 })) === !1
                    ? y.push(w.key)
                    : u.push(w.key);
                if (y.length !== h && u.length !== h)
                  return {
                    code: "object.and",
                    context: {
                      present: u,
                      presentWithLabels: r.keysToLabels(a, u),
                      missing: y,
                      missingWithLabels: r.keysToLabels(a, y),
                    },
                  };
              },
              nand(a, c, f, p, _) {
                let y = [],
                  u = r.isPresent(c.options);
                for (let w of c.peers)
                  u(w.resolve(f, p, _, null, { shadow: !1 })) && y.push(w.key);
                if (y.length !== c.peers.length) return;
                let h = c.paths[0],
                  d = c.paths.slice(1);
                return {
                  code: "object.nand",
                  context: {
                    main: h,
                    mainWithLabel: r.keysToLabels(a, h),
                    peers: d,
                    peersWithLabels: r.keysToLabels(a, d),
                  },
                };
              },
              or(a, c, f, p, _) {
                let y = r.isPresent(c.options);
                for (let u of c.peers)
                  if (y(u.resolve(f, p, _, null, { shadow: !1 }))) return;
                return {
                  code: "object.missing",
                  context: {
                    peers: c.paths,
                    peersWithLabels: r.keysToLabels(a, c.paths),
                  },
                };
              },
              oxor(a, c, f, p, _) {
                let y = [],
                  u = r.isPresent(c.options);
                for (let d of c.peers)
                  u(d.resolve(f, p, _, null, { shadow: !1 })) && y.push(d.key);
                if (!y.length || y.length === 1) return;
                let h = {
                  peers: c.paths,
                  peersWithLabels: r.keysToLabels(a, c.paths),
                };
                return (
                  (h.present = y),
                  (h.presentWithLabels = r.keysToLabels(a, y)),
                  { code: "object.oxor", context: h }
                );
              },
              with(a, c, f, p, _) {
                let y = r.isPresent(c.options);
                for (let u of c.peers)
                  if (y(u.resolve(f, p, _, null, { shadow: !1 })) === !1)
                    return {
                      code: "object.with",
                      context: {
                        main: c.key.key,
                        mainWithLabel: r.keysToLabels(a, c.key.key),
                        peer: u.key,
                        peerWithLabel: r.keysToLabels(a, u.key),
                      },
                    };
              },
              without(a, c, f, p, _) {
                let y = r.isPresent(c.options);
                for (let u of c.peers)
                  if (y(u.resolve(f, p, _, null, { shadow: !1 })))
                    return {
                      code: "object.without",
                      context: {
                        main: c.key.key,
                        mainWithLabel: r.keysToLabels(a, c.key.key),
                        peer: u.key,
                        peerWithLabel: r.keysToLabels(a, u.key),
                      },
                    };
              },
              xor(a, c, f, p, _) {
                let y = [],
                  u = r.isPresent(c.options);
                for (let d of c.peers)
                  u(d.resolve(f, p, _, null, { shadow: !1 })) && y.push(d.key);
                if (y.length === 1) return;
                let h = {
                  peers: c.paths,
                  peersWithLabels: r.keysToLabels(a, c.paths),
                };
                return y.length === 0
                  ? { code: "object.missing", context: h }
                  : ((h.present = y),
                    (h.presentWithLabels = r.keysToLabels(a, y)),
                    { code: "object.xor", context: h });
              },
            }),
            (r.keysToLabels = function (a, c) {
              return Array.isArray(c)
                ? c.map((f) => a.$_mapLabels(f))
                : a.$_mapLabels(c);
            }),
            (r.isPresent = function (a) {
              return typeof a.isPresent == "function"
                ? a.isPresent
                : (c) => c !== void 0;
            }),
            (r.rename = function (a, c, f, p, _) {
              let y = {};
              for (let u of a.$_terms.renames) {
                let h = [],
                  d = typeof u.from != "string";
                if (d)
                  for (let w in c) {
                    if (
                      (c[w] === void 0 && u.options.ignoreUndefined) ||
                      w === u.to
                    )
                      continue;
                    let x = u.from.exec(w);
                    x && h.push({ from: w, to: u.to, match: x });
                  }
                else
                  !Object.prototype.hasOwnProperty.call(c, u.from) ||
                    (c[u.from] === void 0 && u.options.ignoreUndefined) ||
                    h.push(u);
                for (let w of h) {
                  let x = w.from,
                    k = w.to;
                  if (
                    (k instanceof o && (k = k.render(c, f, p, w.match)),
                    x !== k)
                  ) {
                    if (
                      (!u.options.multiple &&
                        y[k] &&
                        (_.push(
                          a.$_createError(
                            "object.rename.multiple",
                            c,
                            { from: x, to: k, pattern: d },
                            f,
                            p
                          )
                        ),
                        p.abortEarly)) ||
                      (Object.prototype.hasOwnProperty.call(c, k) &&
                        !u.options.override &&
                        !y[k] &&
                        (_.push(
                          a.$_createError(
                            "object.rename.override",
                            c,
                            { from: x, to: k, pattern: d },
                            f,
                            p
                          )
                        ),
                        p.abortEarly))
                    )
                      return !1;
                    c[x] === void 0 ? delete c[k] : (c[k] = c[x]),
                      (y[k] = !0),
                      u.options.alias || delete c[x];
                  }
                }
              }
              return !0;
            }),
            (r.unknown = function (a, c, f, p, _, y) {
              if (a.$_terms.patterns) {
                let u = !1,
                  h = a.$_terms.patterns.map((w) => {
                    if (w.matches) return (u = !0), [];
                  }),
                  d = [c, ..._.ancestors];
                for (let w of f) {
                  let x = c[w],
                    k = [..._.path, w];
                  for (let A = 0; A < a.$_terms.patterns.length; ++A) {
                    let S = a.$_terms.patterns[A];
                    if (S.regex) {
                      let T = S.regex.test(w);
                      if (
                        (_.mainstay.tracer.debug(
                          _,
                          "rule",
                          `pattern.${A}`,
                          T ? "pass" : "error"
                        ),
                        !T)
                      )
                        continue;
                    } else if (
                      !S.schema.$_match(w, _.nest(S.schema, `pattern.${A}`), y)
                    )
                      continue;
                    f.delete(w);
                    let E = _.localize(k, d, { schema: S.rule, key: w }),
                      D = S.rule.$_validate(x, E, y);
                    if (D.errors) {
                      if (y.abortEarly) return { value: c, errors: D.errors };
                      p.push(...D.errors);
                    }
                    if (
                      (S.matches && h[A].push(w),
                      (c[w] = D.value),
                      !S.fallthrough)
                    )
                      break;
                  }
                }
                if (u)
                  for (let w = 0; w < h.length; ++w) {
                    let x = h[w];
                    if (!x) continue;
                    let k = a.$_terms.patterns[w].matches,
                      A = _.localize(_.path, d, k),
                      S = k.$_validate(x, A, y);
                    if (S.errors) {
                      let E = s.details(S.errors, { override: !1 });
                      E.matches = x;
                      let D = a.$_createError(
                        "object.pattern.match",
                        c,
                        E,
                        _,
                        y
                      );
                      if (y.abortEarly) return { value: c, errors: D };
                      p.push(D);
                    }
                  }
              }
              if (f.size && (a.$_terms.keys || a.$_terms.patterns)) {
                if ((y.stripUnknown && !a._flags.unknown) || y.skipFunctions) {
                  let u = !(
                    !y.stripUnknown ||
                    (y.stripUnknown !== !0 && !y.stripUnknown.objects)
                  );
                  for (let h of f)
                    u
                      ? (delete c[h], f.delete(h))
                      : typeof c[h] == "function" && f.delete(h);
                }
                if (!n.default(a._flags.unknown, y.allowUnknown))
                  for (let u of f) {
                    let h = _.localize([..._.path, u], []),
                      d = a.$_createError(
                        "object.unknown",
                        c[u],
                        { child: u },
                        h,
                        y,
                        { flags: !1 }
                      );
                    if (y.abortEarly) return { value: c, errors: d };
                    p.push(d);
                  }
              }
            }),
            (r.Dependency = class {
              constructor(a, c, f, p, _) {
                (this.rel = a),
                  (this.key = c),
                  (this.peers = f),
                  (this.paths = p),
                  (this.options = _);
              }
              describe() {
                let a = { rel: this.rel, peers: this.paths };
                return (
                  this.key !== null && (a.key = this.key.key),
                  this.peers[0].separator !== "." &&
                    (a.options = G(P({}, a.options), {
                      separator: this.peers[0].separator,
                    })),
                  this.options.isPresent &&
                    (a.options = G(P({}, a.options), {
                      isPresent: this.options.isPresent,
                    })),
                  a
                );
              }
            }),
            (r.Keys = class extends Array {
              concat(a) {
                let c = this.slice(),
                  f = new Map();
                for (let p = 0; p < c.length; ++p) f.set(c[p].key, p);
                for (let p of a) {
                  let _ = p.key,
                    y = f.get(_);
                  y !== void 0
                    ? (c[y] = { key: _, schema: c[y].schema.concat(p.schema) })
                    : c.push(p);
                }
                return c;
              }
            });
        },
        8785: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8068),
            g = v(8160),
            m = v(3292),
            e = v(6354),
            n = {};
          (j.exports = b.extend({
            type: "link",
            properties: { schemaChain: !0 },
            terms: { link: { init: null, manifest: "single", register: !1 } },
            args: (i, s) => i.ref(s),
            validate(i, s) {
              let { schema: t, state: o, prefs: r } = s;
              l(t.$_terms.link, "Uninitialized link schema");
              let a = n.generate(t, i, o, r),
                c = t.$_terms.link[0].ref;
              return a.$_validate(
                i,
                o.nest(a, `link:${c.display}:${a.type}`),
                r
              );
            },
            generate: (i, s, t, o) => n.generate(i, s, t, o),
            rules: {
              ref: {
                method(i) {
                  l(!this.$_terms.link, "Cannot reinitialize schema"),
                    (i = m.ref(i)),
                    l(
                      i.type === "value" || i.type === "local",
                      "Invalid reference type:",
                      i.type
                    ),
                    l(
                      i.type === "local" ||
                        i.ancestor === "root" ||
                        i.ancestor > 0,
                      "Link cannot reference itself"
                    );
                  let s = this.clone();
                  return (s.$_terms.link = [{ ref: i }]), s;
                },
              },
              relative: {
                method() {
                  let i =
                    !(arguments.length > 0 && arguments[0] !== void 0) ||
                    arguments[0];
                  return this.$_setFlag("relative", i);
                },
              },
            },
            overrides: {
              concat(i) {
                l(this.$_terms.link, "Uninitialized link schema"),
                  l(g.isSchema(i), "Invalid schema object"),
                  l(
                    i.type !== "link",
                    "Cannot merge type link with another link"
                  );
                let s = this.clone();
                return (
                  s.$_terms.whens || (s.$_terms.whens = []),
                  s.$_terms.whens.push({ concat: i }),
                  s.$_mutateRebuild()
                );
              },
            },
            manifest: {
              build: (i, s) => (
                l(s.link, "Invalid link description missing link"),
                i.ref(s.link)
              ),
            },
          })),
            (n.generate = function (i, s, t, o) {
              let r = t.mainstay.links.get(i);
              if (r) return r._generate(s, t, o).schema;
              let a = i.$_terms.link[0].ref,
                { perspective: c, path: f } = n.perspective(a, t);
              n.assert(c, "which is outside of schema boundaries", a, i, t, o);
              try {
                r = f.length ? c.$_reach(f) : c;
              } catch {
                n.assert(!1, "to non-existing schema", a, i, t, o);
              }
              return (
                n.assert(
                  r.type !== "link",
                  "which is another link",
                  a,
                  i,
                  t,
                  o
                ),
                i._flags.relative || t.mainstay.links.set(i, r),
                r._generate(s, t, o).schema
              );
            }),
            (n.perspective = function (i, s) {
              if (i.type === "local") {
                for (let { schema: t, key: o } of s.schemas) {
                  if ((t._flags.id || o) === i.path[0])
                    return { perspective: t, path: i.path.slice(1) };
                  if (t.$_terms.shared) {
                    for (let r of t.$_terms.shared)
                      if (r._flags.id === i.path[0])
                        return { perspective: r, path: i.path.slice(1) };
                  }
                }
                return { perspective: null, path: null };
              }
              return i.ancestor === "root"
                ? {
                    perspective: s.schemas[s.schemas.length - 1].schema,
                    path: i.path,
                  }
                : {
                    perspective:
                      s.schemas[i.ancestor] && s.schemas[i.ancestor].schema,
                    path: i.path,
                  };
            }),
            (n.assert = function (i, s, t, o, r, a) {
              i ||
                l(
                  !1,
                  `"${e.label(o._flags, r, a)}" contains link reference "${
                    t.display
                  }" ${s}`
                );
            });
        },
        3832: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8068),
            g = v(8160),
            m = {
              numberRx:
                /^\s*[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:e([+-]?\d+))?\s*$/i,
              precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/,
              exponentialPartRegex: /[eE][+-]?\d+$/,
              leadingSignAndZerosRegex: /^[+-]?(0*)?/,
              dotRegex: /\./,
              trailingZerosRegex: /0+$/,
            };
          (j.exports = b.extend({
            type: "number",
            flags: { unsafe: { default: !1 } },
            coerce: {
              from: "string",
              method(e, n) {
                let { schema: i, error: s } = n;
                if (!e.match(m.numberRx)) return;
                e = e.trim();
                let t = { value: parseFloat(e) };
                if ((t.value === 0 && (t.value = 0), !i._flags.unsafe))
                  if (e.match(/e/i)) {
                    if (
                      m.extractSignificantDigits(e) !==
                      m.extractSignificantDigits(String(t.value))
                    )
                      return (t.errors = s("number.unsafe")), t;
                  } else {
                    let o = t.value.toString();
                    if (o.match(/e/i)) return t;
                    if (o !== m.normalizeDecimal(e))
                      return (t.errors = s("number.unsafe")), t;
                  }
                return t;
              },
            },
            validate(e, n) {
              let { schema: i, error: s, prefs: t } = n;
              if (e === 1 / 0 || e === -1 / 0)
                return { value: e, errors: s("number.infinity") };
              if (!g.isNumber(e)) return { value: e, errors: s("number.base") };
              let o = { value: e };
              if (t.convert) {
                let r = i.$_getRule("precision");
                if (r) {
                  let a = Math.pow(10, r.args.limit);
                  o.value = Math.round(o.value * a) / a;
                }
              }
              return (
                o.value === 0 && (o.value = 0),
                !i._flags.unsafe &&
                  (e > Number.MAX_SAFE_INTEGER ||
                    e < Number.MIN_SAFE_INTEGER) &&
                  (o.errors = s("number.unsafe")),
                o
              );
            },
            rules: {
              compare: {
                method: !1,
                validate(e, n, i, s) {
                  let { limit: t } = i,
                    { name: o, operator: r, args: a } = s;
                  return g.compare(e, t, r)
                    ? e
                    : n.error("number." + o, { limit: a.limit, value: e });
                },
                args: [
                  {
                    name: "limit",
                    ref: !0,
                    assert: g.isNumber,
                    message: "must be a number",
                  },
                ],
              },
              greater: {
                method(e) {
                  return this.$_addRule({
                    name: "greater",
                    method: "compare",
                    args: { limit: e },
                    operator: ">",
                  });
                },
              },
              integer: {
                method() {
                  return this.$_addRule("integer");
                },
                validate: (e, n) =>
                  Math.trunc(e) - e == 0 ? e : n.error("number.integer"),
              },
              less: {
                method(e) {
                  return this.$_addRule({
                    name: "less",
                    method: "compare",
                    args: { limit: e },
                    operator: "<",
                  });
                },
              },
              max: {
                method(e) {
                  return this.$_addRule({
                    name: "max",
                    method: "compare",
                    args: { limit: e },
                    operator: "<=",
                  });
                },
              },
              min: {
                method(e) {
                  return this.$_addRule({
                    name: "min",
                    method: "compare",
                    args: { limit: e },
                    operator: ">=",
                  });
                },
              },
              multiple: {
                method(e) {
                  return this.$_addRule({
                    name: "multiple",
                    args: { base: e },
                  });
                },
                validate(e, n, i, s) {
                  let { base: t } = i;
                  return (e * (1 / t)) % 1 == 0
                    ? e
                    : n.error("number.multiple", {
                        multiple: s.args.base,
                        value: e,
                      });
                },
                args: [
                  {
                    name: "base",
                    ref: !0,
                    assert: (e) => typeof e == "number" && isFinite(e) && e > 0,
                    message: "must be a positive number",
                  },
                ],
                multi: !0,
              },
              negative: {
                method() {
                  return this.sign("negative");
                },
              },
              port: {
                method() {
                  return this.$_addRule("port");
                },
                validate: (e, n) =>
                  Number.isSafeInteger(e) && e >= 0 && e <= 65535
                    ? e
                    : n.error("number.port"),
              },
              positive: {
                method() {
                  return this.sign("positive");
                },
              },
              precision: {
                method(e) {
                  return (
                    l(Number.isSafeInteger(e), "limit must be an integer"),
                    this.$_addRule({ name: "precision", args: { limit: e } })
                  );
                },
                validate(e, n, i) {
                  let { limit: s } = i,
                    t = e.toString().match(m.precisionRx);
                  return Math.max(
                    (t[1] ? t[1].length : 0) - (t[2] ? parseInt(t[2], 10) : 0),
                    0
                  ) <= s
                    ? e
                    : n.error("number.precision", { limit: s, value: e });
                },
                convert: !0,
              },
              sign: {
                method(e) {
                  return (
                    l(["negative", "positive"].includes(e), "Invalid sign", e),
                    this.$_addRule({ name: "sign", args: { sign: e } })
                  );
                },
                validate(e, n, i) {
                  let { sign: s } = i;
                  return (s === "negative" && e < 0) ||
                    (s === "positive" && e > 0)
                    ? e
                    : n.error(`number.${s}`);
                },
              },
              unsafe: {
                method() {
                  let e =
                    !(arguments.length > 0 && arguments[0] !== void 0) ||
                    arguments[0];
                  return (
                    l(typeof e == "boolean", "enabled must be a boolean"),
                    this.$_setFlag("unsafe", e)
                  );
                },
              },
            },
            cast: {
              string: {
                from: (e) => typeof e == "number",
                to: (e, n) => e.toString(),
              },
            },
            messages: {
              "number.base": "{{#label}} must be a number",
              "number.greater": "{{#label}} must be greater than {{#limit}}",
              "number.infinity": "{{#label}} cannot be infinity",
              "number.integer": "{{#label}} must be an integer",
              "number.less": "{{#label}} must be less than {{#limit}}",
              "number.max":
                "{{#label}} must be less than or equal to {{#limit}}",
              "number.min":
                "{{#label}} must be greater than or equal to {{#limit}}",
              "number.multiple":
                "{{#label}} must be a multiple of {{#multiple}}",
              "number.negative": "{{#label}} must be a negative number",
              "number.port": "{{#label}} must be a valid port",
              "number.positive": "{{#label}} must be a positive number",
              "number.precision":
                "{{#label}} must have no more than {{#limit}} decimal places",
              "number.unsafe": "{{#label}} must be a safe number",
            },
          })),
            (m.extractSignificantDigits = function (e) {
              return e
                .replace(m.exponentialPartRegex, "")
                .replace(m.dotRegex, "")
                .replace(m.trailingZerosRegex, "")
                .replace(m.leadingSignAndZerosRegex, "");
            }),
            (m.normalizeDecimal = function (e) {
              return (
                (e = e
                  .replace(/^\+/, "")
                  .replace(/\.0*$/, "")
                  .replace(/^(-?)\.([^\.]*)$/, "$10.$2")
                  .replace(/^(-?)0+([0-9])/, "$1$2")).includes(".") &&
                  e.endsWith("0") &&
                  (e = e.replace(/0+$/, "")),
                e === "-0" ? "0" : e
              );
            });
        },
        8966: (j, $, v) => {
          "use strict";
          let l = v(7824);
          j.exports = l.extend({
            type: "object",
            cast: {
              map: {
                from: (b) => b && typeof b == "object",
                to: (b, g) => new Map(Object.entries(b)),
              },
            },
          });
        },
        7417: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(5380),
            g = v(1745),
            m = v(9959),
            e = v(6064),
            n = v(9926),
            i = v(5752),
            s = v(8068),
            t = v(8160),
            o = {
              tlds: n instanceof Set && { tlds: { allow: n, deny: null } },
              base64Regex: {
                true: {
                  true: /^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}==|[\w\-]{3}=)?$/,
                  false:
                    /^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/,
                },
                false: {
                  true: /^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}(==)?|[\w\-]{3}=?)?$/,
                  false:
                    /^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/,
                },
              },
              dataUriRegex:
                /^data:[\w+.-]+\/[\w+.-]+;((charset=[\w-]+|base64),)?(.*)$/,
              hexRegex: /^[a-f0-9]+$/i,
              ipRegex: m.regex({ cidr: "forbidden" }).regex,
              isoDurationRegex:
                /^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/,
              guidBrackets: { "{": "}", "[": "]", "(": ")", "": "" },
              guidVersions: {
                uuidv1: "1",
                uuidv2: "2",
                uuidv3: "3",
                uuidv4: "4",
                uuidv5: "5",
              },
              guidSeparators: new Set([void 0, !0, !1, "-", ":"]),
              normalizationForms: ["NFC", "NFD", "NFKC", "NFKD"],
            };
          (j.exports = s.extend({
            type: "string",
            flags: { insensitive: { default: !1 }, truncate: { default: !1 } },
            terms: { replacements: { init: null } },
            coerce: {
              from: "string",
              method(r, a) {
                let { schema: c, state: f, prefs: p } = a,
                  _ = c.$_getRule("normalize");
                _ && (r = r.normalize(_.args.form));
                let y = c.$_getRule("case");
                y &&
                  (r =
                    y.args.direction === "upper"
                      ? r.toLocaleUpperCase()
                      : r.toLocaleLowerCase());
                let u = c.$_getRule("trim");
                if (
                  (u && u.args.enabled && (r = r.trim()),
                  c.$_terms.replacements)
                )
                  for (let d of c.$_terms.replacements)
                    r = r.replace(d.pattern, d.replacement);
                let h = c.$_getRule("hex");
                if (
                  (h &&
                    h.args.options.byteAligned &&
                    r.length % 2 != 0 &&
                    (r = `0${r}`),
                  c.$_getRule("isoDate"))
                ) {
                  let d = o.isoDate(r);
                  d && (r = d);
                }
                if (c._flags.truncate) {
                  let d = c.$_getRule("max");
                  if (d) {
                    let w = d.args.limit;
                    if (
                      t.isResolvable(w) &&
                      ((w = w.resolve(r, f, p)), !t.limit(w))
                    )
                      return {
                        value: r,
                        errors: c.$_createError(
                          "any.ref",
                          w,
                          {
                            ref: d.args.limit,
                            arg: "limit",
                            reason: "must be a positive integer",
                          },
                          f,
                          p
                        ),
                      };
                    r = r.slice(0, w);
                  }
                }
                return { value: r };
              },
            },
            validate(r, a) {
              let { schema: c, error: f } = a;
              if (typeof r != "string")
                return { value: r, errors: f("string.base") };
              if (r === "") {
                let p = c.$_getRule("min");
                return p && p.args.limit === 0
                  ? void 0
                  : { value: r, errors: f("string.empty") };
              }
            },
            rules: {
              alphanum: {
                method() {
                  return this.$_addRule("alphanum");
                },
                validate: (r, a) =>
                  /^[a-zA-Z0-9]+$/.test(r) ? r : a.error("string.alphanum"),
              },
              base64: {
                method() {
                  let r =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  return (
                    t.assertOptions(r, ["paddingRequired", "urlSafe"]),
                    (r = P({ urlSafe: !1, paddingRequired: !0 }, r)),
                    l(
                      typeof r.paddingRequired == "boolean",
                      "paddingRequired must be boolean"
                    ),
                    l(typeof r.urlSafe == "boolean", "urlSafe must be boolean"),
                    this.$_addRule({ name: "base64", args: { options: r } })
                  );
                },
                validate(r, a, c) {
                  let { options: f } = c;
                  return o.base64Regex[f.paddingRequired][f.urlSafe].test(r)
                    ? r
                    : a.error("string.base64");
                },
              },
              case: {
                method(r) {
                  return (
                    l(["lower", "upper"].includes(r), "Invalid case:", r),
                    this.$_addRule({ name: "case", args: { direction: r } })
                  );
                },
                validate(r, a, c) {
                  let { direction: f } = c;
                  return (f === "lower" && r === r.toLocaleLowerCase()) ||
                    (f === "upper" && r === r.toLocaleUpperCase())
                    ? r
                    : a.error(`string.${f}case`);
                },
                convert: !0,
              },
              creditCard: {
                method() {
                  return this.$_addRule("creditCard");
                },
                validate(r, a) {
                  let c = r.length,
                    f = 0,
                    p = 1;
                  for (; c--; ) {
                    let _ = r.charAt(c) * p;
                    (f += _ - 9 * (_ > 9)), (p ^= 3);
                  }
                  return f > 0 && f % 10 == 0
                    ? r
                    : a.error("string.creditCard");
                },
              },
              dataUri: {
                method() {
                  let r =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  return (
                    t.assertOptions(r, ["paddingRequired"]),
                    (r = P({ paddingRequired: !0 }, r)),
                    l(
                      typeof r.paddingRequired == "boolean",
                      "paddingRequired must be boolean"
                    ),
                    this.$_addRule({ name: "dataUri", args: { options: r } })
                  );
                },
                validate(r, a, c) {
                  let { options: f } = c,
                    p = r.match(o.dataUriRegex);
                  return p &&
                    (!p[2] ||
                      p[2] !== "base64" ||
                      o.base64Regex[f.paddingRequired].false.test(p[3]))
                    ? r
                    : a.error("string.dataUri");
                },
              },
              domain: {
                method(r) {
                  r &&
                    t.assertOptions(r, [
                      "allowFullyQualified",
                      "allowUnicode",
                      "maxDomainSegments",
                      "minDomainSegments",
                      "tlds",
                    ]);
                  let a = o.addressOptions(r);
                  return this.$_addRule({
                    name: "domain",
                    args: { options: r },
                    address: a,
                  });
                },
                validate(r, a, c, f) {
                  let { address: p } = f;
                  return b.isValid(r, p) ? r : a.error("string.domain");
                },
              },
              email: {
                method() {
                  let r =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  t.assertOptions(r, [
                    "allowFullyQualified",
                    "allowUnicode",
                    "ignoreLength",
                    "maxDomainSegments",
                    "minDomainSegments",
                    "multiple",
                    "separator",
                    "tlds",
                  ]),
                    l(
                      r.multiple === void 0 || typeof r.multiple == "boolean",
                      "multiple option must be an boolean"
                    );
                  let a = o.addressOptions(r),
                    c = new RegExp(
                      `\\s*[${r.separator ? e(r.separator) : ","}]\\s*`
                    );
                  return this.$_addRule({
                    name: "email",
                    args: { options: r },
                    regex: c,
                    address: a,
                  });
                },
                validate(r, a, c, f) {
                  let { options: p } = c,
                    { regex: _, address: y } = f,
                    u = p.multiple ? r.split(_) : [r],
                    h = [];
                  for (let d of u) g.isValid(d, y) || h.push(d);
                  return h.length
                    ? a.error("string.email", { value: r, invalids: h })
                    : r;
                },
              },
              guid: {
                alias: "uuid",
                method() {
                  let r =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  t.assertOptions(r, ["version", "separator"]);
                  let a = "";
                  if (r.version) {
                    let p = [].concat(r.version);
                    l(
                      p.length >= 1,
                      "version must have at least 1 valid version specified"
                    );
                    let _ = new Set();
                    for (let y = 0; y < p.length; ++y) {
                      let u = p[y];
                      l(
                        typeof u == "string",
                        "version at position " + y + " must be a string"
                      );
                      let h = o.guidVersions[u.toLowerCase()];
                      l(
                        h,
                        "version at position " +
                          y +
                          " must be one of " +
                          Object.keys(o.guidVersions).join(", ")
                      ),
                        l(
                          !_.has(h),
                          "version at position " +
                            y +
                            " must not be a duplicate"
                        ),
                        (a += h),
                        _.add(h);
                    }
                  }
                  l(
                    o.guidSeparators.has(r.separator),
                    'separator must be one of true, false, "-", or ":"'
                  );
                  let c =
                      r.separator === void 0
                        ? "[:-]?"
                        : r.separator === !0
                        ? "[:-]"
                        : r.separator === !1
                        ? "[]?"
                        : `\\${r.separator}`,
                    f = new RegExp(
                      `^([\\[{\\(]?)[0-9A-F]{8}(${c})[0-9A-F]{4}\\2?[${
                        a || "0-9A-F"
                      }][0-9A-F]{3}\\2?[${
                        a ? "89AB" : "0-9A-F"
                      }][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$`,
                      "i"
                    );
                  return this.$_addRule({
                    name: "guid",
                    args: { options: r },
                    regex: f,
                  });
                },
                validate(r, a, c, f) {
                  let { regex: p } = f,
                    _ = p.exec(r);
                  return _
                    ? o.guidBrackets[_[1]] !== _[_.length - 1]
                      ? a.error("string.guid")
                      : r
                    : a.error("string.guid");
                },
              },
              hex: {
                method() {
                  let r =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  return (
                    t.assertOptions(r, ["byteAligned"]),
                    (r = P({ byteAligned: !1 }, r)),
                    l(
                      typeof r.byteAligned == "boolean",
                      "byteAligned must be boolean"
                    ),
                    this.$_addRule({ name: "hex", args: { options: r } })
                  );
                },
                validate(r, a, c) {
                  let { options: f } = c;
                  return o.hexRegex.test(r)
                    ? f.byteAligned && r.length % 2 != 0
                      ? a.error("string.hexAlign")
                      : r
                    : a.error("string.hex");
                },
              },
              hostname: {
                method() {
                  return this.$_addRule("hostname");
                },
                validate: (r, a) =>
                  b.isValid(r, { minDomainSegments: 1 }) || o.ipRegex.test(r)
                    ? r
                    : a.error("string.hostname"),
              },
              insensitive: {
                method() {
                  return this.$_setFlag("insensitive", !0);
                },
              },
              ip: {
                method() {
                  let r =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  t.assertOptions(r, ["cidr", "version"]);
                  let { cidr: a, versions: c, regex: f } = m.regex(r),
                    p = r.version ? c : void 0;
                  return this.$_addRule({
                    name: "ip",
                    args: { options: { cidr: a, version: p } },
                    regex: f,
                  });
                },
                validate(r, a, c, f) {
                  let { options: p } = c,
                    { regex: _ } = f;
                  return _.test(r)
                    ? r
                    : p.version
                    ? a.error("string.ipVersion", {
                        value: r,
                        cidr: p.cidr,
                        version: p.version,
                      })
                    : a.error("string.ip", { value: r, cidr: p.cidr });
                },
              },
              isoDate: {
                method() {
                  return this.$_addRule("isoDate");
                },
                validate(r, a) {
                  let { error: c } = a;
                  return o.isoDate(r) ? r : c("string.isoDate");
                },
              },
              isoDuration: {
                method() {
                  return this.$_addRule("isoDuration");
                },
                validate: (r, a) =>
                  o.isoDurationRegex.test(r)
                    ? r
                    : a.error("string.isoDuration"),
              },
              length: {
                method(r, a) {
                  return o.length(this, "length", r, "=", a);
                },
                validate(r, a, c, f) {
                  let { limit: p, encoding: _ } = c,
                    { name: y, operator: u, args: h } = f,
                    d = !_ && r.length;
                  return t.compare(d, p, u)
                    ? r
                    : a.error("string." + y, {
                        limit: h.limit,
                        value: r,
                        encoding: _,
                      });
                },
                args: [
                  {
                    name: "limit",
                    ref: !0,
                    assert: t.limit,
                    message: "must be a positive integer",
                  },
                  "encoding",
                ],
              },
              lowercase: {
                method() {
                  return this.case("lower");
                },
              },
              max: {
                method(r, a) {
                  return o.length(this, "max", r, "<=", a);
                },
                args: ["limit", "encoding"],
              },
              min: {
                method(r, a) {
                  return o.length(this, "min", r, ">=", a);
                },
                args: ["limit", "encoding"],
              },
              normalize: {
                method() {
                  let r =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : "NFC";
                  return (
                    l(
                      o.normalizationForms.includes(r),
                      "normalization form must be one of " +
                        o.normalizationForms.join(", ")
                    ),
                    this.$_addRule({ name: "normalize", args: { form: r } })
                  );
                },
                validate(r, a, c) {
                  let { error: f } = a,
                    { form: p } = c;
                  return r === r.normalize(p)
                    ? r
                    : f("string.normalize", { value: r, form: p });
                },
                convert: !0,
              },
              pattern: {
                alias: "regex",
                method(r) {
                  let a =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                  l(r instanceof RegExp, "regex must be a RegExp"),
                    l(
                      !r.flags.includes("g") && !r.flags.includes("y"),
                      "regex should not use global or sticky mode"
                    ),
                    typeof a == "string" && (a = { name: a }),
                    t.assertOptions(a, ["invert", "name"]);
                  let c = [
                    "string.pattern",
                    a.invert ? ".invert" : "",
                    a.name ? ".name" : ".base",
                  ].join("");
                  return this.$_addRule({
                    name: "pattern",
                    args: { regex: r, options: a },
                    errorCode: c,
                  });
                },
                validate(r, a, c, f) {
                  let { regex: p, options: _ } = c,
                    { errorCode: y } = f;
                  return p.test(r) ^ _.invert
                    ? r
                    : a.error(y, { name: _.name, regex: p, value: r });
                },
                args: ["regex", "options"],
                multi: !0,
              },
              replace: {
                method(r, a) {
                  typeof r == "string" && (r = new RegExp(e(r), "g")),
                    l(r instanceof RegExp, "pattern must be a RegExp"),
                    l(typeof a == "string", "replacement must be a String");
                  let c = this.clone();
                  return (
                    c.$_terms.replacements || (c.$_terms.replacements = []),
                    c.$_terms.replacements.push({ pattern: r, replacement: a }),
                    c
                  );
                },
              },
              token: {
                method() {
                  return this.$_addRule("token");
                },
                validate: (r, a) =>
                  /^\w+$/.test(r) ? r : a.error("string.token"),
              },
              trim: {
                method() {
                  let r =
                    !(arguments.length > 0 && arguments[0] !== void 0) ||
                    arguments[0];
                  return (
                    l(typeof r == "boolean", "enabled must be a boolean"),
                    this.$_addRule({ name: "trim", args: { enabled: r } })
                  );
                },
                validate(r, a, c) {
                  let { enabled: f } = c;
                  return f && r !== r.trim() ? a.error("string.trim") : r;
                },
                convert: !0,
              },
              truncate: {
                method() {
                  let r =
                    !(arguments.length > 0 && arguments[0] !== void 0) ||
                    arguments[0];
                  return (
                    l(typeof r == "boolean", "enabled must be a boolean"),
                    this.$_setFlag("truncate", r)
                  );
                },
              },
              uppercase: {
                method() {
                  return this.case("upper");
                },
              },
              uri: {
                method() {
                  let r =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  t.assertOptions(r, [
                    "allowRelative",
                    "allowQuerySquareBrackets",
                    "domain",
                    "relativeOnly",
                    "scheme",
                  ]),
                    r.domain &&
                      t.assertOptions(r.domain, [
                        "allowFullyQualified",
                        "allowUnicode",
                        "maxDomainSegments",
                        "minDomainSegments",
                        "tlds",
                      ]);
                  let { regex: a, scheme: c } = i.regex(r),
                    f = r.domain ? o.addressOptions(r.domain) : null;
                  return this.$_addRule({
                    name: "uri",
                    args: { options: r },
                    regex: a,
                    domain: f,
                    scheme: c,
                  });
                },
                validate(r, a, c, f) {
                  let { options: p } = c,
                    { regex: _, domain: y, scheme: u } = f;
                  if (["http:/", "https:/"].includes(r))
                    return a.error("string.uri");
                  let h = _.exec(r);
                  if (h) {
                    let d = h[1] || h[2];
                    return !y || (p.allowRelative && !d) || b.isValid(d, y)
                      ? r
                      : a.error("string.domain", { value: d });
                  }
                  return p.relativeOnly
                    ? a.error("string.uriRelativeOnly")
                    : p.scheme
                    ? a.error("string.uriCustomScheme", { scheme: u, value: r })
                    : a.error("string.uri");
                },
              },
            },
            manifest: {
              build(r, a) {
                if (a.replacements)
                  for (let { pattern: c, replacement: f } of a.replacements)
                    r = r.replace(c, f);
                return r;
              },
            },
            messages: {
              "string.alphanum":
                "{{#label}} must only contain alpha-numeric characters",
              "string.base": "{{#label}} must be a string",
              "string.base64": "{{#label}} must be a valid base64 string",
              "string.creditCard": "{{#label}} must be a credit card",
              "string.dataUri": "{{#label}} must be a valid dataUri string",
              "string.domain": "{{#label}} must contain a valid domain name",
              "string.email": "{{#label}} must be a valid email",
              "string.empty": "{{#label}} is not allowed to be empty",
              "string.guid": "{{#label}} must be a valid GUID",
              "string.hex":
                "{{#label}} must only contain hexadecimal characters",
              "string.hexAlign":
                "{{#label}} hex decoded representation must be byte aligned",
              "string.hostname": "{{#label}} must be a valid hostname",
              "string.ip":
                "{{#label}} must be a valid ip address with a {{#cidr}} CIDR",
              "string.ipVersion":
                "{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR",
              "string.isoDate": "{{#label}} must be in iso format",
              "string.isoDuration":
                "{{#label}} must be a valid ISO 8601 duration",
              "string.length":
                "{{#label}} length must be {{#limit}} characters long",
              "string.lowercase":
                "{{#label}} must only contain lowercase characters",
              "string.max":
                "{{#label}} length must be less than or equal to {{#limit}} characters long",
              "string.min":
                "{{#label}} length must be at least {{#limit}} characters long",
              "string.normalize":
                "{{#label}} must be unicode normalized in the {{#form}} form",
              "string.token":
                "{{#label}} must only contain alpha-numeric and underscore characters",
              "string.pattern.base":
                "{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}",
              "string.pattern.name":
                "{{#label}} with value {:[.]} fails to match the {{#name}} pattern",
              "string.pattern.invert.base":
                "{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}",
              "string.pattern.invert.name":
                "{{#label}} with value {:[.]} matches the inverted {{#name}} pattern",
              "string.trim":
                "{{#label}} must not have leading or trailing whitespace",
              "string.uri": "{{#label}} must be a valid uri",
              "string.uriCustomScheme":
                "{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern",
              "string.uriRelativeOnly":
                "{{#label}} must be a valid relative uri",
              "string.uppercase":
                "{{#label}} must only contain uppercase characters",
            },
          })),
            (o.addressOptions = function (r) {
              if (
                !r ||
                (l(
                  r.minDomainSegments === void 0 ||
                    (Number.isSafeInteger(r.minDomainSegments) &&
                      r.minDomainSegments > 0),
                  "minDomainSegments must be a positive integer"
                ),
                l(
                  r.maxDomainSegments === void 0 ||
                    (Number.isSafeInteger(r.maxDomainSegments) &&
                      r.maxDomainSegments > 0),
                  "maxDomainSegments must be a positive integer"
                ),
                r.tlds === !1)
              )
                return r;
              if (r.tlds === !0 || r.tlds === void 0)
                return (
                  l(o.tlds, "Built-in TLD list disabled"),
                  Object.assign({}, r, o.tlds)
                );
              l(
                typeof r.tlds == "object",
                "tlds must be true, false, or an object"
              );
              let a = r.tlds.deny;
              if (a)
                return (
                  Array.isArray(a) &&
                    (r = Object.assign({}, r, { tlds: { deny: new Set(a) } })),
                  l(
                    r.tlds.deny instanceof Set,
                    "tlds.deny must be an array, Set, or boolean"
                  ),
                  l(
                    !r.tlds.allow,
                    "Cannot specify both tlds.allow and tlds.deny lists"
                  ),
                  o.validateTlds(r.tlds.deny, "tlds.deny"),
                  r
                );
              let c = r.tlds.allow;
              return c
                ? c === !0
                  ? (l(o.tlds, "Built-in TLD list disabled"),
                    Object.assign({}, r, o.tlds))
                  : (Array.isArray(c) &&
                      (r = Object.assign({}, r, {
                        tlds: { allow: new Set(c) },
                      })),
                    l(
                      r.tlds.allow instanceof Set,
                      "tlds.allow must be an array, Set, or boolean"
                    ),
                    o.validateTlds(r.tlds.allow, "tlds.allow"),
                    r)
                : r;
            }),
            (o.validateTlds = function (r, a) {
              for (let c of r)
                l(
                  b.isValid(c, { minDomainSegments: 1, maxDomainSegments: 1 }),
                  `${a} must contain valid top level domain names`
                );
            }),
            (o.isoDate = function (r) {
              if (!t.isIsoDate(r)) return null;
              /.*T.*[+-]\d\d$/.test(r) && (r += "00");
              let a = new Date(r);
              return isNaN(a.getTime()) ? null : a.toISOString();
            }),
            (o.length = function (r, a, c, f, p) {
              return (
                l(!p || !1, "Invalid encoding:", p),
                r.$_addRule({
                  name: a,
                  method: "length",
                  args: { limit: c, encoding: p },
                  operator: f,
                })
              );
            });
        },
        8826: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8068),
            g = {};
          (g.Map = class extends Map {
            slice() {
              return new g.Map(this);
            }
          }),
            (j.exports = b.extend({
              type: "symbol",
              terms: { map: { init: new g.Map() } },
              coerce: {
                method(m, e) {
                  let { schema: n, error: i } = e,
                    s = n.$_terms.map.get(m);
                  return (
                    s && (m = s),
                    n._flags.only && typeof m != "symbol"
                      ? {
                          value: m,
                          errors: i("symbol.map", { map: n.$_terms.map }),
                        }
                      : { value: m }
                  );
                },
              },
              validate(m, e) {
                let { error: n } = e;
                if (typeof m != "symbol")
                  return { value: m, errors: n("symbol.base") };
              },
              rules: {
                map: {
                  method(m) {
                    m &&
                      !m[Symbol.iterator] &&
                      typeof m == "object" &&
                      (m = Object.entries(m)),
                      l(
                        m && m[Symbol.iterator],
                        "Iterable must be an iterable or object"
                      );
                    let e = this.clone(),
                      n = [];
                    for (let i of m) {
                      l(i && i[Symbol.iterator], "Entry must be an iterable");
                      let [s, t] = i;
                      l(
                        typeof s != "object" &&
                          typeof s != "function" &&
                          typeof s != "symbol",
                        "Key must not be of type object, function, or Symbol"
                      ),
                        l(typeof t == "symbol", "Value must be a Symbol"),
                        e.$_terms.map.set(s, t),
                        n.push(t);
                    }
                    return e.valid(...n);
                  },
                },
              },
              manifest: { build: (m, e) => (e.map && (m = m.map(e.map)), m) },
              messages: {
                "symbol.base": "{{#label}} must be a symbol",
                "symbol.map": "{{#label}} must be one of {{#map}}",
              },
            }));
        },
        8863: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8571),
            g = v(738),
            m = v(9621),
            e = v(8160),
            n = v(6354),
            i = v(493),
            s = { result: Symbol("result") };
          ($.entry = function (t, o, r) {
            let a = e.defaults;
            r &&
              (l(
                r.warnings === void 0,
                "Cannot override warnings preference in synchronous validation"
              ),
              l(
                r.artifacts === void 0,
                "Cannot override artifacts preference in synchronous validation"
              ),
              (a = e.preferences(e.defaults, r)));
            let c = s.entry(t, o, a);
            l(
              !c.mainstay.externals.length,
              "Schema with external rules must use validateAsync()"
            );
            let f = { value: c.value };
            return (
              c.error && (f.error = c.error),
              c.mainstay.warnings.length &&
                (f.warning = n.details(c.mainstay.warnings)),
              c.mainstay.debug && (f.debug = c.mainstay.debug),
              c.mainstay.artifacts && (f.artifacts = c.mainstay.artifacts),
              f
            );
          }),
            ($.entryAsync = function (t, o, r) {
              return V(this, null, function* () {
                let a = e.defaults;
                r && (a = e.preferences(e.defaults, r));
                let c = s.entry(t, o, a),
                  f = c.mainstay;
                if (c.error)
                  throw (f.debug && (c.error.debug = f.debug), c.error);
                if (f.externals.length) {
                  let _ = c.value,
                    y = [];
                  for (let u of f.externals) {
                    let h = u.state.path,
                      d =
                        u.schema.type === "link" ? f.links.get(u.schema) : null,
                      w,
                      x,
                      k = _,
                      A = h.length ? [_] : [],
                      S = h.length ? m(t, h) : t;
                    if (h.length) {
                      w = h[h.length - 1];
                      let E = _;
                      for (let D of h.slice(0, -1)) (E = E[D]), A.unshift(E);
                      (x = A[0]), (k = x[w]);
                    }
                    try {
                      let E = (T, L) =>
                          (d || u.schema).$_createError(T, k, L, u.state, a),
                        D = yield u.method(k, {
                          schema: u.schema,
                          linked: d,
                          state: u.state,
                          prefs: r,
                          original: S,
                          error: E,
                          errorsArray: s.errorsArray,
                          warn: (T, L) =>
                            f.warnings.push(
                              (d || u.schema).$_createError(T, k, L, u.state, a)
                            ),
                          message: (T, L) =>
                            (d || u.schema).$_createError(
                              "external",
                              k,
                              L,
                              u.state,
                              a,
                              { messages: T }
                            ),
                        });
                      if (D === void 0 || D === k) continue;
                      if (D instanceof n.Report) {
                        if (
                          (f.tracer.log(
                            u.schema,
                            u.state,
                            "rule",
                            "external",
                            "error"
                          ),
                          y.push(D),
                          a.abortEarly)
                        )
                          break;
                        continue;
                      }
                      if (Array.isArray(D) && D[e.symbols.errors]) {
                        if (
                          (f.tracer.log(
                            u.schema,
                            u.state,
                            "rule",
                            "external",
                            "error"
                          ),
                          y.push(...D),
                          a.abortEarly)
                        )
                          break;
                        continue;
                      }
                      x
                        ? (f.tracer.value(u.state, "rule", k, D, "external"),
                          (x[w] = D))
                        : (f.tracer.value(u.state, "rule", _, D, "external"),
                          (_ = D));
                    } catch (E) {
                      throw (
                        (a.errors.label && (E.message += ` (${u.label})`), E)
                      );
                    }
                  }
                  if (((c.value = _), y.length))
                    throw (
                      ((c.error = n.process(y, t, a)),
                      f.debug && (c.error.debug = f.debug),
                      c.error)
                    );
                }
                if (!a.warnings && !a.debug && !a.artifacts) return c.value;
                let p = { value: c.value };
                return (
                  f.warnings.length && (p.warning = n.details(f.warnings)),
                  f.debug && (p.debug = f.debug),
                  f.artifacts && (p.artifacts = f.artifacts),
                  p
                );
              });
            }),
            (s.Mainstay = class {
              constructor(t, o, r) {
                (this.externals = []),
                  (this.warnings = []),
                  (this.tracer = t),
                  (this.debug = o),
                  (this.links = r),
                  (this.shadow = null),
                  (this.artifacts = null),
                  (this._snapshots = []);
              }
              snapshot() {
                this._snapshots.push({
                  externals: this.externals.slice(),
                  warnings: this.warnings.slice(),
                });
              }
              restore() {
                let t = this._snapshots.pop();
                (this.externals = t.externals), (this.warnings = t.warnings);
              }
            }),
            (s.entry = function (t, o, r) {
              let { tracer: a, cleanup: c } = s.tracer(o, r),
                f = r.debug ? [] : null,
                p = o._ids._schemaChain ? new Map() : null,
                _ = new s.Mainstay(a, f, p),
                y = o._ids._schemaChain ? [{ schema: o }] : null,
                u = new i([], [], { mainstay: _, schemas: y }),
                h = $.validate(t, o, u, r);
              c && o.$_root.untrace();
              let d = n.process(h.errors, t, r);
              return { value: h.value, error: d, mainstay: _ };
            }),
            (s.tracer = function (t, o) {
              return t.$_root._tracer
                ? { tracer: t.$_root._tracer._register(t) }
                : o.debug
                ? (l(t.$_root.trace, "Debug mode not supported"),
                  { tracer: t.$_root.trace()._register(t), cleanup: !0 })
                : { tracer: s.ignore };
            }),
            ($.validate = function (t, o, r, a) {
              let c =
                arguments.length > 4 && arguments[4] !== void 0
                  ? arguments[4]
                  : {};
              if (
                (o.$_terms.whens && (o = o._generate(t, r, a).schema),
                o._preferences && (a = s.prefs(o, a)),
                o._cache && a.cache)
              ) {
                let d = o._cache.get(t);
                if ((r.mainstay.tracer.debug(r, "validate", "cached", !!d), d))
                  return d;
              }
              let f = (d, w, x) => o.$_createError(d, t, w, x || r, a),
                p = {
                  original: t,
                  prefs: a,
                  schema: o,
                  state: r,
                  error: f,
                  errorsArray: s.errorsArray,
                  warn: (d, w, x) => r.mainstay.warnings.push(f(d, w, x)),
                  message: (d, w) =>
                    o.$_createError("custom", t, w, r, a, { messages: d }),
                };
              r.mainstay.tracer.entry(o, r);
              let _ = o._definition;
              if (_.prepare && t !== void 0 && a.convert) {
                let d = _.prepare(t, p);
                if (d) {
                  if (
                    (r.mainstay.tracer.value(r, "prepare", t, d.value),
                    d.errors)
                  )
                    return s.finalize(d.value, [].concat(d.errors), p);
                  t = d.value;
                }
              }
              if (
                _.coerce &&
                t !== void 0 &&
                a.convert &&
                (!_.coerce.from || _.coerce.from.includes(typeof t))
              ) {
                let d = _.coerce.method(t, p);
                if (d) {
                  if (
                    (r.mainstay.tracer.value(r, "coerced", t, d.value),
                    d.errors)
                  )
                    return s.finalize(d.value, [].concat(d.errors), p);
                  t = d.value;
                }
              }
              let y = o._flags.empty;
              y &&
                y.$_match(s.trim(t, o), r.nest(y), e.defaults) &&
                (r.mainstay.tracer.value(r, "empty", t, void 0), (t = void 0));
              let u =
                c.presence ||
                o._flags.presence ||
                (o._flags._endedSwitch ? null : a.presence);
              if (t === void 0) {
                if (u === "forbidden") return s.finalize(t, null, p);
                if (u === "required")
                  return s.finalize(
                    t,
                    [o.$_createError("any.required", t, null, r, a)],
                    p
                  );
                if (u === "optional") {
                  if (o._flags.default !== e.symbols.deepDefault)
                    return s.finalize(t, null, p);
                  r.mainstay.tracer.value(r, "default", t, {}), (t = {});
                }
              } else if (u === "forbidden")
                return s.finalize(
                  t,
                  [o.$_createError("any.unknown", t, null, r, a)],
                  p
                );
              let h = [];
              if (o._valids) {
                let d = o._valids.get(t, r, a, o._flags.insensitive);
                if (d)
                  return (
                    a.convert &&
                      (r.mainstay.tracer.value(r, "valids", t, d.value),
                      (t = d.value)),
                    r.mainstay.tracer.filter(o, r, "valid", d),
                    s.finalize(t, null, p)
                  );
                if (o._flags.only) {
                  let w = o.$_createError(
                    "any.only",
                    t,
                    { valids: o._valids.values({ display: !0 }) },
                    r,
                    a
                  );
                  if (a.abortEarly) return s.finalize(t, [w], p);
                  h.push(w);
                }
              }
              if (o._invalids) {
                let d = o._invalids.get(t, r, a, o._flags.insensitive);
                if (d) {
                  r.mainstay.tracer.filter(o, r, "invalid", d);
                  let w = o.$_createError(
                    "any.invalid",
                    t,
                    { invalids: o._invalids.values({ display: !0 }) },
                    r,
                    a
                  );
                  if (a.abortEarly) return s.finalize(t, [w], p);
                  h.push(w);
                }
              }
              if (_.validate) {
                let d = _.validate(t, p);
                if (
                  d &&
                  (r.mainstay.tracer.value(r, "base", t, d.value),
                  (t = d.value),
                  d.errors)
                ) {
                  if (!Array.isArray(d.errors))
                    return h.push(d.errors), s.finalize(t, h, p);
                  if (d.errors.length)
                    return h.push(...d.errors), s.finalize(t, h, p);
                }
              }
              return o._rules.length ? s.rules(t, h, p) : s.finalize(t, h, p);
            }),
            (s.rules = function (t, o, r) {
              let { schema: a, state: c, prefs: f } = r;
              for (let p of a._rules) {
                let _ = a._definition.rules[p.method];
                if (_.convert && f.convert) {
                  c.mainstay.tracer.log(a, c, "rule", p.name, "full");
                  continue;
                }
                let y,
                  u = p.args;
                if (p._resolve.length) {
                  u = Object.assign({}, u);
                  for (let d of p._resolve) {
                    let w = _.argsByName.get(d),
                      x = u[d].resolve(t, c, f),
                      k = w.normalize ? w.normalize(x) : x,
                      A = e.validateArg(k, null, w);
                    if (A) {
                      y = a.$_createError(
                        "any.ref",
                        x,
                        { arg: d, ref: u[d], reason: A },
                        c,
                        f
                      );
                      break;
                    }
                    u[d] = k;
                  }
                }
                y = y || _.validate(t, r, u, p);
                let h = s.rule(y, p);
                if (h.errors) {
                  if (
                    (c.mainstay.tracer.log(a, c, "rule", p.name, "error"),
                    p.warn)
                  ) {
                    c.mainstay.warnings.push(...h.errors);
                    continue;
                  }
                  if (f.abortEarly) return s.finalize(t, h.errors, r);
                  o.push(...h.errors);
                } else
                  c.mainstay.tracer.log(a, c, "rule", p.name, "pass"),
                    c.mainstay.tracer.value(c, "rule", t, h.value, p.name),
                    (t = h.value);
              }
              return s.finalize(t, o, r);
            }),
            (s.rule = function (t, o) {
              return t instanceof n.Report
                ? (s.error(t, o), { errors: [t], value: null })
                : Array.isArray(t) && t[e.symbols.errors]
                ? (t.forEach((r) => s.error(r, o)), { errors: t, value: null })
                : { errors: null, value: t };
            }),
            (s.error = function (t, o) {
              return o.message && t._setTemplate(o.message), t;
            }),
            (s.finalize = function (t, o, r) {
              o = o || [];
              let { schema: a, state: c, prefs: f } = r;
              if (o.length) {
                let _ = s.default("failover", void 0, o, r);
                _ !== void 0 &&
                  (c.mainstay.tracer.value(c, "failover", t, _),
                  (t = _),
                  (o = []));
              }
              if (o.length && a._flags.error)
                if (typeof a._flags.error == "function") {
                  (o = a._flags.error(o)), Array.isArray(o) || (o = [o]);
                  for (let _ of o)
                    l(
                      _ instanceof Error || _ instanceof n.Report,
                      "error() must return an Error object"
                    );
                } else o = [a._flags.error];
              if (t === void 0) {
                let _ = s.default("default", t, o, r);
                c.mainstay.tracer.value(c, "default", t, _), (t = _);
              }
              if (a._flags.cast && t !== void 0) {
                let _ = a._definition.cast[a._flags.cast];
                if (_.from(t)) {
                  let y = _.to(t, r);
                  c.mainstay.tracer.value(c, "cast", t, y, a._flags.cast),
                    (t = y);
                }
              }
              if (a.$_terms.externals && f.externals && f._externals !== !1)
                for (let { method: _ } of a.$_terms.externals)
                  c.mainstay.externals.push({
                    method: _,
                    schema: a,
                    state: c,
                    label: n.label(a._flags, c, f),
                  });
              let p = { value: t, errors: o.length ? o : null };
              return (
                a._flags.result &&
                  ((p.value =
                    a._flags.result === "strip" ? void 0 : r.original),
                  c.mainstay.tracer.value(c, a._flags.result, t, p.value),
                  c.shadow(t, a._flags.result)),
                a._cache &&
                  f.cache !== !1 &&
                  !a._refs.length &&
                  a._cache.set(r.original, p),
                t === void 0 ||
                  p.errors ||
                  a._flags.artifact === void 0 ||
                  ((c.mainstay.artifacts = c.mainstay.artifacts || new Map()),
                  c.mainstay.artifacts.has(a._flags.artifact) ||
                    c.mainstay.artifacts.set(a._flags.artifact, []),
                  c.mainstay.artifacts.get(a._flags.artifact).push(c.path)),
                p
              );
            }),
            (s.prefs = function (t, o) {
              let r = o === e.defaults;
              return r && t._preferences[e.symbols.prefs]
                ? t._preferences[e.symbols.prefs]
                : ((o = e.preferences(o, t._preferences)),
                  r && (t._preferences[e.symbols.prefs] = o),
                  o);
            }),
            (s.default = function (t, o, r, a) {
              let { schema: c, state: f, prefs: p } = a,
                _ = c._flags[t];
              if (p.noDefaults || _ === void 0) return o;
              if ((f.mainstay.tracer.log(c, f, "rule", t, "full"), !_))
                return _;
              if (typeof _ == "function") {
                let y = _.length ? [b(f.ancestors[0]), a] : [];
                try {
                  return _(...y);
                } catch (u) {
                  return void r.push(
                    c.$_createError(`any.${t}`, null, { error: u }, f, p)
                  );
                }
              }
              return typeof _ != "object"
                ? _
                : _[e.symbols.literal]
                ? _.literal
                : e.isResolvable(_)
                ? _.resolve(o, f, p)
                : b(_);
            }),
            (s.trim = function (t, o) {
              if (typeof t != "string") return t;
              let r = o.$_getRule("trim");
              return r && r.args.enabled ? t.trim() : t;
            }),
            (s.ignore = {
              active: !1,
              debug: g,
              entry: g,
              filter: g,
              log: g,
              resolve: g,
              value: g,
            }),
            (s.errorsArray = function () {
              let t = [];
              return (t[e.symbols.errors] = !0), t;
            });
        },
        2036: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(9474),
            g = v(8160),
            m = {};
          (j.exports = m.Values =
            class {
              constructor(e, n) {
                (this._values = new Set(e)),
                  (this._refs = new Set(n)),
                  (this._lowercase = m.lowercases(e)),
                  (this._override = !1);
              }
              get length() {
                return this._values.size + this._refs.size;
              }
              add(e, n) {
                g.isResolvable(e)
                  ? this._refs.has(e) || (this._refs.add(e), n && n.register(e))
                  : this.has(e, null, null, !1) ||
                    (this._values.add(e),
                    typeof e == "string" &&
                      this._lowercase.set(e.toLowerCase(), e));
              }
              static merge(e, n, i) {
                if (((e = e || new m.Values()), n)) {
                  if (n._override) return n.clone();
                  for (let s of [...n._values, ...n._refs]) e.add(s);
                }
                if (i) for (let s of [...i._values, ...i._refs]) e.remove(s);
                return e.length ? e : null;
              }
              remove(e) {
                g.isResolvable(e)
                  ? this._refs.delete(e)
                  : (this._values.delete(e),
                    typeof e == "string" &&
                      this._lowercase.delete(e.toLowerCase()));
              }
              has(e, n, i, s) {
                return !!this.get(e, n, i, s);
              }
              get(e, n, i, s) {
                if (!this.length) return !1;
                if (this._values.has(e)) return { value: e };
                if (typeof e == "string" && e && s) {
                  let t = this._lowercase.get(e.toLowerCase());
                  if (t) return { value: t };
                }
                if (!this._refs.size && typeof e != "object") return !1;
                if (typeof e == "object") {
                  for (let t of this._values) if (b(t, e)) return { value: t };
                }
                if (n)
                  for (let t of this._refs) {
                    let o = t.resolve(e, n, i, null, { in: !0 });
                    if (o === void 0) continue;
                    let r =
                      t.in && typeof o == "object"
                        ? Array.isArray(o)
                          ? o
                          : Object.keys(o)
                        : [o];
                    for (let a of r)
                      if (typeof a == typeof e) {
                        if (s && e && typeof e == "string") {
                          if (a.toLowerCase() === e.toLowerCase())
                            return { value: a, ref: t };
                        } else if (b(a, e)) return { value: a, ref: t };
                      }
                  }
                return !1;
              }
              override() {
                this._override = !0;
              }
              values(e) {
                if (e && e.display) {
                  let n = [];
                  for (let i of [...this._values, ...this._refs])
                    i !== void 0 && n.push(i);
                  return n;
                }
                return Array.from([...this._values, ...this._refs]);
              }
              clone() {
                let e = new m.Values(this._values, this._refs);
                return (e._override = this._override), e;
              }
              concat(e) {
                l(!e._override, "Cannot concat override set of values");
                let n = new m.Values(
                  [...this._values, ...e._values],
                  [...this._refs, ...e._refs]
                );
                return (n._override = this._override), n;
              }
              describe() {
                let e = [];
                this._override && e.push({ override: !0 });
                for (let n of this._values.values())
                  e.push(n && typeof n == "object" ? { value: n } : n);
                for (let n of this._refs.values()) e.push(n.describe());
                return e;
              }
            }),
            (m.Values.prototype[g.symbols.values] = !0),
            (m.Values.prototype.slice = m.Values.prototype.clone),
            (m.lowercases = function (e) {
              let n = new Map();
              if (e)
                for (let i of e)
                  typeof i == "string" && n.set(i.toLowerCase(), i);
              return n;
            });
        },
        978: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8571),
            g = v(1687),
            m = v(9621),
            e = {};
          (j.exports = function (n, i) {
            let s =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
            if (
              (l(
                n && typeof n == "object",
                "Invalid defaults value: must be an object"
              ),
              l(
                !i || i === !0 || typeof i == "object",
                "Invalid source value: must be true, falsy or an object"
              ),
              l(typeof s == "object", "Invalid options: must be an object"),
              !i)
            )
              return null;
            if (s.shallow) return e.applyToDefaultsWithShallow(n, i, s);
            let t = b(n);
            if (i === !0) return t;
            let o = s.nullOverride !== void 0 && s.nullOverride;
            return g(t, i, { nullOverride: o, mergeArrays: !1 });
          }),
            (e.applyToDefaultsWithShallow = function (n, i, s) {
              let t = s.shallow;
              l(Array.isArray(t), "Invalid keys");
              let o = new Map(),
                r = i === !0 ? null : new Set();
              for (let f of t) {
                f = Array.isArray(f) ? f : f.split(".");
                let p = m(n, f);
                p && typeof p == "object"
                  ? o.set(p, (r && m(i, f)) || p)
                  : r && r.add(f);
              }
              let a = b(n, {}, o);
              if (!r) return a;
              for (let f of r) e.reachCopy(a, i, f);
              let c = s.nullOverride !== void 0 && s.nullOverride;
              return g(a, i, { nullOverride: c, mergeArrays: !1 });
            }),
            (e.reachCopy = function (n, i, s) {
              for (let r of s) {
                if (!(r in i)) return;
                let a = i[r];
                if (typeof a != "object" || a === null) return;
                i = a;
              }
              let t = i,
                o = n;
              for (let r = 0; r < s.length - 1; ++r) {
                let a = s[r];
                typeof o[a] != "object" && (o[a] = {}), (o = o[a]);
              }
              o[s[s.length - 1]] = t;
            });
        },
        375: (j, $, v) => {
          "use strict";
          let l = v(7916);
          j.exports = function (b) {
            if (!b) {
              for (
                var g = arguments.length,
                  m = new Array(g > 1 ? g - 1 : 0),
                  e = 1;
                e < g;
                e++
              )
                m[e - 1] = arguments[e];
              throw m.length === 1 && m[0] instanceof Error ? m[0] : new l(m);
            }
          };
        },
        8571: (j, $, v) => {
          "use strict";
          let l = v(9621),
            b = v(4277),
            g = v(7043),
            m = {
              needsProtoHack: new Set([b.set, b.map, b.weakSet, b.weakMap]),
            };
          (j.exports = m.clone =
            function (e) {
              let n =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                i =
                  arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : null;
              if (typeof e != "object" || e === null) return e;
              let s = m.clone,
                t = i;
              if (n.shallow) {
                if (n.shallow !== !0) return m.cloneWithShallow(e, n);
                s = (c) => c;
              } else if (t) {
                let c = t.get(e);
                if (c) return c;
              } else t = new Map();
              let o = b.getInternalProto(e);
              if (o === b.buffer) return !1;
              if (o === b.date) return new Date(e.getTime());
              if (o === b.regex) return new RegExp(e);
              let r = m.base(e, o, n);
              if (r === e) return e;
              if ((t && t.set(e, r), o === b.set))
                for (let c of e) r.add(s(c, n, t));
              else if (o === b.map) for (let [c, f] of e) r.set(c, s(f, n, t));
              let a = g.keys(e, n);
              for (let c of a) {
                if (c === "__proto__") continue;
                if (o === b.array && c === "length") {
                  r.length = e.length;
                  continue;
                }
                let f = Object.getOwnPropertyDescriptor(e, c);
                f
                  ? f.get || f.set
                    ? Object.defineProperty(r, c, f)
                    : f.enumerable
                    ? (r[c] = s(e[c], n, t))
                    : Object.defineProperty(r, c, {
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                        value: s(e[c], n, t),
                      })
                  : Object.defineProperty(r, c, {
                      enumerable: !0,
                      writable: !0,
                      configurable: !0,
                      value: s(e[c], n, t),
                    });
              }
              return r;
            }),
            (m.cloneWithShallow = function (e, n) {
              let i = n.shallow;
              (n = Object.assign({}, n)).shallow = !1;
              let s = new Map();
              for (let t of i) {
                let o = l(e, t);
                (typeof o != "object" && typeof o != "function") || s.set(o, o);
              }
              return m.clone(e, n, s);
            }),
            (m.base = function (e, n, i) {
              if (i.prototype === !1)
                return m.needsProtoHack.has(n)
                  ? new n.constructor()
                  : n === b.array
                  ? []
                  : {};
              let s = Object.getPrototypeOf(e);
              if (s && s.isImmutable) return e;
              if (n === b.array) {
                let t = [];
                return s !== n && Object.setPrototypeOf(t, s), t;
              }
              if (m.needsProtoHack.has(n)) {
                let t = new s.constructor();
                return s !== n && Object.setPrototypeOf(t, s), t;
              }
              return Object.create(s);
            });
        },
        9474: (j, $, v) => {
          "use strict";
          let l = v(4277),
            b = { mismatched: null };
          (j.exports = function (g, m, e) {
            return (
              (e = Object.assign({ prototype: !0 }, e)),
              !!b.isDeepEqual(g, m, e, [])
            );
          }),
            (b.isDeepEqual = function (g, m, e, n) {
              if (g === m) return g !== 0 || 1 / g == 1 / m;
              let i = typeof g;
              if (i !== typeof m || g === null || m === null) return !1;
              if (i === "function") {
                if (!e.deepFunction || g.toString() !== m.toString()) return !1;
              } else if (i !== "object") return g != g && m != m;
              let s = b.getSharedType(g, m, !!e.prototype);
              switch (s) {
                case l.buffer:
                  return !1;
                case l.promise:
                  return g === m;
                case l.regex:
                  return g.toString() === m.toString();
                case b.mismatched:
                  return !1;
              }
              for (let t = n.length - 1; t >= 0; --t)
                if (n[t].isSame(g, m)) return !0;
              n.push(new b.SeenEntry(g, m));
              try {
                return !!b.isDeepEqualObj(s, g, m, e, n);
              } finally {
                n.pop();
              }
            }),
            (b.getSharedType = function (g, m, e) {
              if (e)
                return Object.getPrototypeOf(g) !== Object.getPrototypeOf(m)
                  ? b.mismatched
                  : l.getInternalProto(g);
              let n = l.getInternalProto(g);
              return n !== l.getInternalProto(m) ? b.mismatched : n;
            }),
            (b.valueOf = function (g) {
              let m = g.valueOf;
              if (m === void 0) return g;
              try {
                return m.call(g);
              } catch (e) {
                return e;
              }
            }),
            (b.hasOwnEnumerableProperty = function (g, m) {
              return Object.prototype.propertyIsEnumerable.call(g, m);
            }),
            (b.isSetSimpleEqual = function (g, m) {
              for (let e of Set.prototype.values.call(g))
                if (!Set.prototype.has.call(m, e)) return !1;
              return !0;
            }),
            (b.isDeepEqualObj = function (g, m, e, n, i) {
              let {
                  isDeepEqual: s,
                  valueOf: t,
                  hasOwnEnumerableProperty: o,
                } = b,
                { keys: r, getOwnPropertySymbols: a } = Object;
              if (g === l.array) {
                if (!n.part) {
                  if (m.length !== e.length) return !1;
                  for (let y = 0; y < m.length; ++y)
                    if (!s(m[y], e[y], n, i)) return !1;
                  return !0;
                }
                for (let y of m) for (let u of e) if (s(y, u, n, i)) return !0;
              } else if (g === l.set) {
                if (m.size !== e.size) return !1;
                if (!b.isSetSimpleEqual(m, e)) {
                  let y = new Set(Set.prototype.values.call(e));
                  for (let u of Set.prototype.values.call(m)) {
                    if (y.delete(u)) continue;
                    let h = !1;
                    for (let d of y)
                      if (s(u, d, n, i)) {
                        y.delete(d), (h = !0);
                        break;
                      }
                    if (!h) return !1;
                  }
                }
              } else if (g === l.map) {
                if (m.size !== e.size) return !1;
                for (let [y, u] of Map.prototype.entries.call(m))
                  if (
                    (u === void 0 && !Map.prototype.has.call(e, y)) ||
                    !s(u, Map.prototype.get.call(e, y), n, i)
                  )
                    return !1;
              } else if (
                g === l.error &&
                (m.name !== e.name || m.message !== e.message)
              )
                return !1;
              let c = t(m),
                f = t(e);
              if ((m !== c || e !== f) && !s(c, f, n, i)) return !1;
              let p = r(m);
              if (!n.part && p.length !== r(e).length && !n.skip) return !1;
              let _ = 0;
              for (let y of p)
                if (n.skip && n.skip.includes(y)) e[y] === void 0 && ++_;
                else if (!o(e, y) || !s(m[y], e[y], n, i)) return !1;
              if (!n.part && p.length - _ !== r(e).length) return !1;
              if (n.symbols !== !1) {
                let y = a(m),
                  u = new Set(a(e));
                for (let h of y) {
                  if (!n.skip || !n.skip.includes(h)) {
                    if (o(m, h)) {
                      if (!o(e, h) || !s(m[h], e[h], n, i)) return !1;
                    } else if (o(e, h)) return !1;
                  }
                  u.delete(h);
                }
                for (let h of u) if (o(e, h)) return !1;
              }
              return !0;
            }),
            (b.SeenEntry = class {
              constructor(g, m) {
                (this.obj = g), (this.ref = m);
              }
              isSame(g, m) {
                return this.obj === g && this.ref === m;
              }
            });
        },
        7916: (j, $, v) => {
          "use strict";
          let l = v(8761);
          j.exports = class extends Error {
            constructor(b) {
              super(
                b
                  .filter((g) => g !== "")
                  .map((g) =>
                    typeof g == "string"
                      ? g
                      : g instanceof Error
                      ? g.message
                      : l(g)
                  )
                  .join(" ") || "Unknown error"
              ),
                typeof Error.captureStackTrace == "function" &&
                  Error.captureStackTrace(this, $.assert);
            }
          };
        },
        5277: (j) => {
          "use strict";
          let $ = {};
          (j.exports = function (v) {
            if (!v) return "";
            let l = "";
            for (let b = 0; b < v.length; ++b) {
              let g = v.charCodeAt(b);
              $.isSafe(g) ? (l += v[b]) : (l += $.escapeHtmlChar(g));
            }
            return l;
          }),
            ($.escapeHtmlChar = function (v) {
              return (
                $.namedHtml.get(v) ||
                (v >= 256
                  ? "&#" + v + ";"
                  : `&#x${v.toString(16).padStart(2, "0")};`)
              );
            }),
            ($.isSafe = function (v) {
              return $.safeCharCodes.has(v);
            }),
            ($.namedHtml = new Map([
              [38, "&amp;"],
              [60, "&lt;"],
              [62, "&gt;"],
              [34, "&quot;"],
              [160, "&nbsp;"],
              [162, "&cent;"],
              [163, "&pound;"],
              [164, "&curren;"],
              [169, "&copy;"],
              [174, "&reg;"],
            ])),
            ($.safeCharCodes = (function () {
              let v = new Set();
              for (let l = 32; l < 123; ++l)
                (l >= 97 ||
                  (l >= 65 && l <= 90) ||
                  (l >= 48 && l <= 57) ||
                  l === 32 ||
                  l === 46 ||
                  l === 44 ||
                  l === 45 ||
                  l === 58 ||
                  l === 95) &&
                  v.add(l);
              return v;
            })());
        },
        6064: (j) => {
          "use strict";
          j.exports = function ($) {
            return $.replace(
              /[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g,
              "\\$&"
            );
          };
        },
        738: (j) => {
          "use strict";
          j.exports = function () {};
        },
        1687: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(8571),
            g = v(7043),
            m = {};
          j.exports = m.merge = function (e, n, i) {
            if (
              (l(
                e && typeof e == "object",
                "Invalid target value: must be an object"
              ),
              l(
                n == null || typeof n == "object",
                "Invalid source value: must be null, undefined, or an object"
              ),
              !n)
            )
              return e;
            if (
              ((i = Object.assign({ nullOverride: !0, mergeArrays: !0 }, i)),
              Array.isArray(n))
            ) {
              l(Array.isArray(e), "Cannot merge array onto an object"),
                i.mergeArrays || (e.length = 0);
              for (let t = 0; t < n.length; ++t)
                e.push(b(n[t], { symbols: i.symbols }));
              return e;
            }
            let s = g.keys(n, i);
            for (let t = 0; t < s.length; ++t) {
              let o = s[t];
              if (
                o === "__proto__" ||
                !Object.prototype.propertyIsEnumerable.call(n, o)
              )
                continue;
              let r = n[o];
              if (r && typeof r == "object") {
                if (e[o] === r) continue;
                !e[o] ||
                typeof e[o] != "object" ||
                Array.isArray(e[o]) !== Array.isArray(r) ||
                r instanceof Date ||
                r instanceof RegExp
                  ? (e[o] = b(r, { symbols: i.symbols }))
                  : m.merge(e[o], r, i);
              } else (r != null || i.nullOverride) && (e[o] = r);
            }
            return e;
          };
        },
        9621: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = {};
          (j.exports = function (g, m, e) {
            if (m === !1 || m == null) return g;
            typeof (e = e || {}) == "string" && (e = { separator: e });
            let n = Array.isArray(m);
            l(
              !n || !e.separator,
              "Separator option is not valid for array-based chain"
            );
            let i = n ? m : m.split(e.separator || "."),
              s = g;
            for (let t = 0; t < i.length; ++t) {
              let o = i[t],
                r = e.iterables && b.iterables(s);
              if (Array.isArray(s) || r === "set") {
                let a = Number(o);
                Number.isInteger(a) && (o = a < 0 ? s.length + a : a);
              }
              if (
                !s ||
                (typeof s == "function" && e.functions === !1) ||
                (!r && s[o] === void 0)
              ) {
                l(
                  !e.strict || t + 1 === i.length,
                  "Missing segment",
                  o,
                  "in reach path ",
                  m
                ),
                  l(
                    typeof s == "object" ||
                      e.functions === !0 ||
                      typeof s != "function",
                    "Invalid segment",
                    o,
                    "in reach path ",
                    m
                  ),
                  (s = e.default);
                break;
              }
              s = r ? (r === "set" ? [...s][o] : s.get(o)) : s[o];
            }
            return s;
          }),
            (b.iterables = function (g) {
              return g instanceof Set
                ? "set"
                : g instanceof Map
                ? "map"
                : void 0;
            });
        },
        8761: (j) => {
          "use strict";
          j.exports = function () {
            try {
              return JSON.stringify(...arguments);
            } catch ($) {
              return "[Cannot display object: " + $.message + "]";
            }
          };
        },
        4277: (j, $) => {
          "use strict";
          let v = {};
          ($ = j.exports =
            {
              array: Array.prototype,
              buffer: !1,
              date: Date.prototype,
              error: Error.prototype,
              generic: Object.prototype,
              map: Map.prototype,
              promise: Promise.prototype,
              regex: RegExp.prototype,
              set: Set.prototype,
              weakMap: WeakMap.prototype,
              weakSet: WeakSet.prototype,
            }),
            (v.typeMap = new Map([
              ["[object Error]", $.error],
              ["[object Map]", $.map],
              ["[object Promise]", $.promise],
              ["[object Set]", $.set],
              ["[object WeakMap]", $.weakMap],
              ["[object WeakSet]", $.weakSet],
            ])),
            ($.getInternalProto = function (l) {
              if (Array.isArray(l)) return $.array;
              if (l instanceof Date) return $.date;
              if (l instanceof RegExp) return $.regex;
              if (l instanceof Error) return $.error;
              let b = Object.prototype.toString.call(l);
              return v.typeMap.get(b) || $.generic;
            });
        },
        7043: (j, $) => {
          "use strict";
          $.keys = function (v) {
            return (arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : {}
            ).symbols !== !1
              ? Reflect.ownKeys(v)
              : Object.getOwnPropertyNames(v);
          };
        },
        3652: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = {};
          ($.Sorter = class {
            constructor() {
              (this._items = []), (this.nodes = []);
            }
            add(g, m) {
              let e = [].concat((m = m || {}).before || []),
                n = [].concat(m.after || []),
                i = m.group || "?",
                s = m.sort || 0;
              l(!e.includes(i), `Item cannot come before itself: ${i}`),
                l(
                  !e.includes("?"),
                  "Item cannot come before unassociated items"
                ),
                l(!n.includes(i), `Item cannot come after itself: ${i}`),
                l(
                  !n.includes("?"),
                  "Item cannot come after unassociated items"
                ),
                Array.isArray(g) || (g = [g]);
              for (let t of g) {
                let o = {
                  seq: this._items.length,
                  sort: s,
                  before: e,
                  after: n,
                  group: i,
                  node: t,
                };
                this._items.push(o);
              }
              if (!m.manual) {
                let t = this._sort();
                l(
                  t,
                  "item",
                  i !== "?" ? `added into group ${i}` : "",
                  "created a dependencies error"
                );
              }
              return this.nodes;
            }
            merge(g) {
              Array.isArray(g) || (g = [g]);
              for (let e of g)
                if (e)
                  for (let n of e._items)
                    this._items.push(Object.assign({}, n));
              this._items.sort(b.mergeSort);
              for (let e = 0; e < this._items.length; ++e)
                this._items[e].seq = e;
              let m = this._sort();
              return l(m, "merge created a dependencies error"), this.nodes;
            }
            sort() {
              let g = this._sort();
              return l(g, "sort created a dependencies error"), this.nodes;
            }
            _sort() {
              let g = {},
                m = Object.create(null),
                e = Object.create(null);
              for (let o of this._items) {
                let r = o.seq,
                  a = o.group;
                (e[a] = e[a] || []), e[a].push(r), (g[r] = o.before);
                for (let c of o.after) (m[c] = m[c] || []), m[c].push(r);
              }
              for (let o in g) {
                let r = [];
                for (let a in g[o]) {
                  let c = g[o][a];
                  (e[c] = e[c] || []), r.push(...e[c]);
                }
                g[o] = r;
              }
              for (let o in m) if (e[o]) for (let r of e[o]) g[r].push(...m[o]);
              let n = {};
              for (let o in g) {
                let r = g[o];
                for (let a of r) (n[a] = n[a] || []), n[a].push(o);
              }
              let i = {},
                s = [];
              for (let o = 0; o < this._items.length; ++o) {
                let r = o;
                if (n[o]) {
                  r = null;
                  for (let a = 0; a < this._items.length; ++a) {
                    if (i[a] === !0) continue;
                    n[a] || (n[a] = []);
                    let c = n[a].length,
                      f = 0;
                    for (let p = 0; p < c; ++p) i[n[a][p]] && ++f;
                    if (f === c) {
                      r = a;
                      break;
                    }
                  }
                }
                r !== null && ((i[r] = !0), s.push(r));
              }
              if (s.length !== this._items.length) return !1;
              let t = {};
              for (let o of this._items) t[o.seq] = o;
              (this._items = []), (this.nodes = []);
              for (let o of s) {
                let r = t[o];
                this.nodes.push(r.node), this._items.push(r);
              }
              return !0;
            }
          }),
            (b.mergeSort = (g, m) =>
              g.sort === m.sort ? 0 : g.sort < m.sort ? -1 : 1);
        },
        5380: (j, $, v) => {
          "use strict";
          let l = v(443),
            b = v(2178),
            g = {
              minDomainSegments: 2,
              nonAsciiRx: /[^\x00-\x7f]/,
              domainControlRx: /[\x00-\x20@\:\/\\#!\$&\'\(\)\*\+,;=\?]/,
              tldSegmentRx: /^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,
              domainSegmentRx: /^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,
              URL: l.URL || URL,
            };
          ($.analyze = function (m) {
            let e =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            if (!m) return b.code("DOMAIN_NON_EMPTY_STRING");
            if (typeof m != "string")
              throw new Error("Invalid input: domain must be a string");
            if (m.length > 256) return b.code("DOMAIN_TOO_LONG");
            if (g.nonAsciiRx.test(m)) {
              if (e.allowUnicode === !1)
                return b.code("DOMAIN_INVALID_UNICODE_CHARS");
              m = m.normalize("NFC");
            }
            if (g.domainControlRx.test(m))
              return b.code("DOMAIN_INVALID_CHARS");
            (m = g.punycode(m)),
              e.allowFullyQualified &&
                m[m.length - 1] === "." &&
                (m = m.slice(0, -1));
            let n = e.minDomainSegments || g.minDomainSegments,
              i = m.split(".");
            if (i.length < n) return b.code("DOMAIN_SEGMENTS_COUNT");
            if (e.maxDomainSegments && i.length > e.maxDomainSegments)
              return b.code("DOMAIN_SEGMENTS_COUNT_MAX");
            let s = e.tlds;
            if (s) {
              let t = i[i.length - 1].toLowerCase();
              if ((s.deny && s.deny.has(t)) || (s.allow && !s.allow.has(t)))
                return b.code("DOMAIN_FORBIDDEN_TLDS");
            }
            for (let t = 0; t < i.length; ++t) {
              let o = i[t];
              if (!o.length) return b.code("DOMAIN_EMPTY_SEGMENT");
              if (o.length > 63) return b.code("DOMAIN_LONG_SEGMENT");
              if (t < i.length - 1) {
                if (!g.domainSegmentRx.test(o))
                  return b.code("DOMAIN_INVALID_CHARS");
              } else if (!g.tldSegmentRx.test(o))
                return b.code("DOMAIN_INVALID_TLDS_CHARS");
            }
            return null;
          }),
            ($.isValid = function (m, e) {
              return !$.analyze(m, e);
            }),
            (g.punycode = function (m) {
              m.includes("%") && (m = m.replace(/%/g, "%25"));
              try {
                return new g.URL(`http://${m}`).host;
              } catch {
                return m;
              }
            });
        },
        1745: (j, $, v) => {
          "use strict";
          let l = v(9848),
            b = v(5380),
            g = v(2178),
            m = {
              nonAsciiRx: /[^\x00-\x7f]/,
              encoder: new (l.TextEncoder || TextEncoder)(),
            };
          ($.analyze = function (e, n) {
            return m.email(e, n);
          }),
            ($.isValid = function (e, n) {
              return !m.email(e, n);
            }),
            (m.email = function (e) {
              let n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              if (typeof e != "string")
                throw new Error("Invalid input: email must be a string");
              if (!e) return g.code("EMPTY_STRING");
              let i = !m.nonAsciiRx.test(e);
              if (!i) {
                if (n.allowUnicode === !1) return g.code("FORBIDDEN_UNICODE");
                e = e.normalize("NFC");
              }
              let s = e.split("@");
              if (s.length !== 2)
                return s.length > 2
                  ? g.code("MULTIPLE_AT_CHAR")
                  : g.code("MISSING_AT_CHAR");
              let [t, o] = s;
              if (!t) return g.code("EMPTY_LOCAL");
              if (!n.ignoreLength) {
                if (e.length > 254) return g.code("ADDRESS_TOO_LONG");
                if (m.encoder.encode(t).length > 64)
                  return g.code("LOCAL_TOO_LONG");
              }
              return m.local(t, i) || b.analyze(o, n);
            }),
            (m.local = function (e, n) {
              let i = e.split(".");
              for (let s of i) {
                if (!s.length) return g.code("EMPTY_LOCAL_SEGMENT");
                if (n) {
                  if (!m.atextRx.test(s)) return g.code("INVALID_LOCAL_CHARS");
                } else
                  for (let t of s) {
                    if (m.atextRx.test(t)) continue;
                    let o = m.binary(t);
                    if (!m.atomRx.test(o)) return g.code("INVALID_LOCAL_CHARS");
                  }
              }
            }),
            (m.binary = function (e) {
              return Array.from(m.encoder.encode(e))
                .map((n) => String.fromCharCode(n))
                .join("");
            }),
            (m.atextRx = /^[\w!#\$%&'\*\+\-/=\?\^`\{\|\}~]+$/),
            (m.atomRx = new RegExp(
              [
                "(?:[\\xc2-\\xdf][\\x80-\\xbf])",
                "(?:\\xe0[\\xa0-\\xbf][\\x80-\\xbf])|(?:[\\xe1-\\xec][\\x80-\\xbf]{2})|(?:\\xed[\\x80-\\x9f][\\x80-\\xbf])|(?:[\\xee-\\xef][\\x80-\\xbf]{2})",
                "(?:\\xf0[\\x90-\\xbf][\\x80-\\xbf]{2})|(?:[\\xf1-\\xf3][\\x80-\\xbf]{3})|(?:\\xf4[\\x80-\\x8f][\\x80-\\xbf]{2})",
              ].join("|")
            ));
        },
        2178: (j, $) => {
          "use strict";
          ($.codes = {
            EMPTY_STRING: "Address must be a non-empty string",
            FORBIDDEN_UNICODE: "Address contains forbidden Unicode characters",
            MULTIPLE_AT_CHAR:
              "Address cannot contain more than one @ character",
            MISSING_AT_CHAR: "Address must contain one @ character",
            EMPTY_LOCAL: "Address local part cannot be empty",
            ADDRESS_TOO_LONG: "Address too long",
            LOCAL_TOO_LONG: "Address local part too long",
            EMPTY_LOCAL_SEGMENT:
              "Address local part contains empty dot-separated segment",
            INVALID_LOCAL_CHARS:
              "Address local part contains invalid character",
            DOMAIN_NON_EMPTY_STRING: "Domain must be a non-empty string",
            DOMAIN_TOO_LONG: "Domain too long",
            DOMAIN_INVALID_UNICODE_CHARS:
              "Domain contains forbidden Unicode characters",
            DOMAIN_INVALID_CHARS: "Domain contains invalid character",
            DOMAIN_INVALID_TLDS_CHARS: "Domain contains invalid tld character",
            DOMAIN_SEGMENTS_COUNT:
              "Domain lacks the minimum required number of segments",
            DOMAIN_SEGMENTS_COUNT_MAX: "Domain contains too many segments",
            DOMAIN_FORBIDDEN_TLDS: "Domain uses forbidden TLD",
            DOMAIN_EMPTY_SEGMENT: "Domain contains empty dot-separated segment",
            DOMAIN_LONG_SEGMENT:
              "Domain contains dot-separated segment that is too long",
          }),
            ($.code = function (v) {
              return { code: v, error: $.codes[v] };
            });
        },
        9959: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(5752);
          $.regex = function () {
            let g =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {};
            l(
              g.cidr === void 0 || typeof g.cidr == "string",
              "options.cidr must be a string"
            );
            let m = g.cidr ? g.cidr.toLowerCase() : "optional";
            l(
              ["required", "optional", "forbidden"].includes(m),
              "options.cidr must be one of required, optional, forbidden"
            ),
              l(
                g.version === void 0 ||
                  typeof g.version == "string" ||
                  Array.isArray(g.version),
                "options.version must be a string or an array of string"
              );
            let e = g.version || ["ipv4", "ipv6", "ipvfuture"];
            Array.isArray(e) || (e = [e]),
              l(
                e.length >= 1,
                "options.version must have at least 1 version specified"
              );
            for (let s = 0; s < e.length; ++s)
              l(
                typeof e[s] == "string",
                "options.version must only contain strings"
              ),
                (e[s] = e[s].toLowerCase()),
                l(
                  ["ipv4", "ipv6", "ipvfuture"].includes(e[s]),
                  "options.version contains unknown version " +
                    e[s] +
                    " - must be one of ipv4, ipv6, ipvfuture"
                );
            e = Array.from(new Set(e));
            let n = `(?:${e
                .map((s) => {
                  if (m === "forbidden") return b.ip[s];
                  let t = `\\/${s === "ipv4" ? b.ip.v4Cidr : b.ip.v6Cidr}`;
                  return m === "required"
                    ? `${b.ip[s]}${t}`
                    : `${b.ip[s]}(?:${t})?`;
                })
                .join("|")})`,
              i = new RegExp(`^${n}$`);
            return { cidr: m, versions: e, regex: i, raw: n };
          };
        },
        5752: (j, $, v) => {
          "use strict";
          let l = v(375),
            b = v(6064),
            g = {
              generate: function () {
                let m = {},
                  e = "\\dA-Fa-f",
                  n = "[" + e + "]",
                  i = "\\w-\\.~",
                  s = "!\\$&'\\(\\)\\*\\+,;=",
                  t = "%" + e,
                  o = i + t + s + ":@",
                  r = "[" + o + "]",
                  a = "(?:0{0,2}\\d|0?[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])";
                m.ipv4address = "(?:" + a + "\\.){3}" + a;
                let c = n + "{1,4}",
                  f = "(?:" + c + ":" + c + "|" + m.ipv4address + ")",
                  p = "(?:" + c + ":){6}" + f,
                  _ = "::(?:" + c + ":){5}" + f,
                  y = "(?:" + c + ")?::(?:" + c + ":){4}" + f,
                  u =
                    "(?:(?:" + c + ":){0,1}" + c + ")?::(?:" + c + ":){3}" + f,
                  h =
                    "(?:(?:" + c + ":){0,2}" + c + ")?::(?:" + c + ":){2}" + f,
                  d = "(?:(?:" + c + ":){0,3}" + c + ")?::" + c + ":" + f,
                  w = "(?:(?:" + c + ":){0,4}" + c + ")?::" + f,
                  x = "(?:(?:" + c + ":){0,5}" + c + ")?::" + c,
                  k = "(?:(?:" + c + ":){0,6}" + c + ")?::";
                (m.ipv4Cidr = "(?:\\d|[1-2]\\d|3[0-2])"),
                  (m.ipv6Cidr = "(?:0{0,2}\\d|0?[1-9]\\d|1[01]\\d|12[0-8])"),
                  (m.ipv6address =
                    "(?:" +
                    p +
                    "|" +
                    _ +
                    "|" +
                    y +
                    "|" +
                    u +
                    "|" +
                    h +
                    "|" +
                    d +
                    "|" +
                    w +
                    "|" +
                    x +
                    "|" +
                    k +
                    ")"),
                  (m.ipvFuture = "v" + n + "+\\.[" + i + s + ":]+"),
                  (m.scheme = "[a-zA-Z][a-zA-Z\\d+-\\.]*"),
                  (m.schemeRegex = new RegExp(m.scheme));
                let A = "[" + i + t + s + ":]*",
                  S = "[" + i + t + s + "]{1,255}",
                  E =
                    "(?:\\[(?:" +
                    m.ipv6address +
                    "|" +
                    m.ipvFuture +
                    ")\\]|" +
                    m.ipv4address +
                    "|" +
                    S +
                    ")",
                  D = "(?:" + A + "@)?" + E + "(?::\\d*)?",
                  T = "(?:" + A + "@)?(" + E + ")(?::\\d*)?",
                  L = r + "*",
                  z = r + "+",
                  I = "(?:\\/" + L + ")*",
                  C = "\\/(?:" + z + I + ")?",
                  q = z + I,
                  F = "[" + i + t + s + "@]+" + I,
                  W = "(?:\\/\\/\\/" + L + I + ")";
                return (
                  (m.hierPart =
                    "(?:(?:\\/\\/" +
                    D +
                    I +
                    ")|" +
                    C +
                    "|" +
                    q +
                    "|" +
                    W +
                    ")"),
                  (m.hierPartCapture =
                    "(?:(?:\\/\\/" + T + I + ")|" + C + "|" + q + ")"),
                  (m.relativeRef =
                    "(?:(?:\\/\\/" + D + I + ")|" + C + "|" + F + "|)"),
                  (m.relativeRefCapture =
                    "(?:(?:\\/\\/" + T + I + ")|" + C + "|" + F + "|)"),
                  (m.query = "[" + o + "\\/\\?]*(?=#|$)"),
                  (m.queryWithSquareBrackets =
                    "[" + o + "\\[\\]\\/\\?]*(?=#|$)"),
                  (m.fragment = "[" + o + "\\/\\?]*"),
                  m
                );
              },
            };
          (g.rfc3986 = g.generate()),
            ($.ip = {
              v4Cidr: g.rfc3986.ipv4Cidr,
              v6Cidr: g.rfc3986.ipv6Cidr,
              ipv4: g.rfc3986.ipv4address,
              ipv6: g.rfc3986.ipv6address,
              ipvfuture: g.rfc3986.ipvFuture,
            }),
            (g.createRegex = function (m) {
              let e = g.rfc3986,
                n =
                  "(?:\\?" +
                  (m.allowQuerySquareBrackets
                    ? e.queryWithSquareBrackets
                    : e.query) +
                  ")?(?:#" +
                  e.fragment +
                  ")?",
                i = m.domain ? e.relativeRefCapture : e.relativeRef;
              if (m.relativeOnly) return g.wrap(i + n);
              let s = "";
              if (m.scheme) {
                l(
                  m.scheme instanceof RegExp ||
                    typeof m.scheme == "string" ||
                    Array.isArray(m.scheme),
                  "scheme must be a RegExp, String, or Array"
                );
                let r = [].concat(m.scheme);
                l(
                  r.length >= 1,
                  "scheme must have at least 1 scheme specified"
                );
                let a = [];
                for (let c = 0; c < r.length; ++c) {
                  let f = r[c];
                  l(
                    f instanceof RegExp || typeof f == "string",
                    "scheme at position " + c + " must be a RegExp or String"
                  ),
                    f instanceof RegExp
                      ? a.push(f.source.toString())
                      : (l(
                          e.schemeRegex.test(f),
                          "scheme at position " + c + " must be a valid scheme"
                        ),
                        a.push(b(f)));
                }
                s = a.join("|");
              }
              let t =
                  "(?:" +
                  (s ? "(?:" + s + ")" : e.scheme) +
                  ":" +
                  (m.domain ? e.hierPartCapture : e.hierPart) +
                  ")",
                o = m.allowRelative ? "(?:" + t + "|" + i + ")" : t;
              return g.wrap(o + n, s);
            }),
            (g.wrap = function (m, e) {
              return {
                raw: (m = `(?=.)(?!https?:/(?:$|[^/]))(?!https?:///)(?!https?:[^/])${m}`),
                regex: new RegExp(`^${m}$`),
                scheme: e,
              };
            }),
            (g.uriRegex = g.createRegex({})),
            ($.regex = function () {
              let m =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {};
              return m.scheme ||
                m.allowRelative ||
                m.relativeOnly ||
                m.allowQuerySquareBrackets ||
                m.domain
                ? g.createRegex(m)
                : g.uriRegex;
            });
        },
        1447: (j, $) => {
          "use strict";
          let v = {
            operators: [
              "!",
              "^",
              "*",
              "/",
              "%",
              "+",
              "-",
              "<",
              "<=",
              ">",
              ">=",
              "==",
              "!=",
              "&&",
              "||",
              "??",
            ],
            operatorCharacters: [
              "!",
              "^",
              "*",
              "/",
              "%",
              "+",
              "-",
              "<",
              "=",
              ">",
              "&",
              "|",
              "?",
            ],
            operatorsOrder: [
              ["^"],
              ["*", "/", "%"],
              ["+", "-"],
              ["<", "<=", ">", ">="],
              ["==", "!="],
              ["&&"],
              ["||", "??"],
            ],
            operatorsPrefix: ["!", "n"],
            literals: { '"': '"', "`": "`", "'": "'", "[": "]" },
            numberRx: /^(?:[0-9]*(\.[0-9]*)?){1}$/,
            tokenRx: /^[\w\$\#\.\@\:\{\}]+$/,
            symbol: Symbol("formula"),
            settings: Symbol("settings"),
          };
          ($.Parser = class {
            constructor(l) {
              let b =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              if (!b[v.settings] && b.constants)
                for (let g in b.constants) {
                  let m = b.constants[g];
                  if (
                    m !== null &&
                    !["boolean", "number", "string"].includes(typeof m)
                  )
                    throw new Error(
                      `Formula constant ${g} contains invalid ${typeof m} value type`
                    );
                }
              (this.settings = b[v.settings]
                ? b
                : Object.assign(
                    { [v.settings]: !0, constants: {}, functions: {} },
                    b
                  )),
                (this.single = null),
                (this._parts = null),
                this._parse(l);
            }
            _parse(l) {
              let b = [],
                g = "",
                m = 0,
                e = !1,
                n = (s) => {
                  if (m) throw new Error("Formula missing closing parenthesis");
                  let t = b.length ? b[b.length - 1] : null;
                  if (e || g || s) {
                    if (t && t.type === "reference" && s === ")")
                      return (
                        (t.type = "function"),
                        (t.value = this._subFormula(g, t.value)),
                        void (g = "")
                      );
                    if (s === ")") {
                      let o = new $.Parser(g, this.settings);
                      b.push({ type: "segment", value: o });
                    } else if (e) {
                      if (e === "]")
                        return (
                          b.push({ type: "reference", value: g }), void (g = "")
                        );
                      b.push({ type: "literal", value: g });
                    } else if (v.operatorCharacters.includes(g))
                      t &&
                      t.type === "operator" &&
                      v.operators.includes(t.value + g)
                        ? (t.value += g)
                        : b.push({ type: "operator", value: g });
                    else if (g.match(v.numberRx))
                      b.push({ type: "constant", value: parseFloat(g) });
                    else if (this.settings.constants[g] !== void 0)
                      b.push({
                        type: "constant",
                        value: this.settings.constants[g],
                      });
                    else {
                      if (!g.match(v.tokenRx))
                        throw new Error(`Formula contains invalid token: ${g}`);
                      b.push({ type: "reference", value: g });
                    }
                    g = "";
                  }
                };
              for (let s of l)
                e
                  ? s === e
                    ? (n(), (e = !1))
                    : (g += s)
                  : m
                  ? s === "("
                    ? ((g += s), ++m)
                    : s === ")"
                    ? (--m, m ? (g += s) : n(s))
                    : (g += s)
                  : s in v.literals
                  ? (e = v.literals[s])
                  : s === "("
                  ? (n(), ++m)
                  : v.operatorCharacters.includes(s)
                  ? (n(), (g = s), n())
                  : s !== " "
                  ? (g += s)
                  : n();
              n(),
                (b = b.map((s, t) =>
                  s.type !== "operator" ||
                  s.value !== "-" ||
                  (t && b[t - 1].type !== "operator")
                    ? s
                    : { type: "operator", value: "n" }
                ));
              let i = !1;
              for (let s of b) {
                if (s.type === "operator") {
                  if (v.operatorsPrefix.includes(s.value)) continue;
                  if (!i)
                    throw new Error(
                      "Formula contains an operator in invalid position"
                    );
                  if (!v.operators.includes(s.value))
                    throw new Error(
                      `Formula contains an unknown operator ${s.value}`
                    );
                } else if (i)
                  throw new Error("Formula missing expected operator");
                i = !i;
              }
              if (!i)
                throw new Error("Formula contains invalid trailing operator");
              b.length === 1 &&
                ["reference", "literal", "constant"].includes(b[0].type) &&
                (this.single = {
                  type: b[0].type === "reference" ? "reference" : "value",
                  value: b[0].value,
                }),
                (this._parts = b.map((s) => {
                  if (s.type === "operator")
                    return v.operatorsPrefix.includes(s.value) ? s : s.value;
                  if (s.type !== "reference") return s.value;
                  if (
                    this.settings.tokenRx &&
                    !this.settings.tokenRx.test(s.value)
                  )
                    throw new Error(
                      `Formula contains invalid reference ${s.value}`
                    );
                  return this.settings.reference
                    ? this.settings.reference(s.value)
                    : v.reference(s.value);
                }));
            }
            _subFormula(l, b) {
              let g = this.settings.functions[b];
              if (typeof g != "function")
                throw new Error(`Formula contains unknown function ${b}`);
              let m = [];
              if (l) {
                let e = "",
                  n = 0,
                  i = !1,
                  s = () => {
                    if (!e)
                      throw new Error(
                        `Formula contains function ${b} with invalid arguments ${l}`
                      );
                    m.push(e), (e = "");
                  };
                for (let t = 0; t < l.length; ++t) {
                  let o = l[t];
                  i
                    ? ((e += o), o === i && (i = !1))
                    : o in v.literals && !n
                    ? ((e += o), (i = v.literals[o]))
                    : o !== "," || n
                    ? ((e += o), o === "(" ? ++n : o === ")" && --n)
                    : s();
                }
                s();
              }
              return (
                (m = m.map((e) => new $.Parser(e, this.settings))),
                function (e) {
                  let n = [];
                  for (let i of m) n.push(i.evaluate(e));
                  return g.call(e, ...n);
                }
              );
            }
            evaluate(l) {
              let b = this._parts.slice();
              for (let g = b.length - 2; g >= 0; --g) {
                let m = b[g];
                if (m && m.type === "operator") {
                  let e = b[g + 1];
                  b.splice(g + 1, 1);
                  let n = v.evaluate(e, l);
                  b[g] = v.single(m.value, n);
                }
              }
              return (
                v.operatorsOrder.forEach((g) => {
                  for (let m = 1; m < b.length - 1; )
                    if (g.includes(b[m])) {
                      let e = b[m],
                        n = v.evaluate(b[m - 1], l),
                        i = v.evaluate(b[m + 1], l);
                      b.splice(m, 2);
                      let s = v.calculate(e, n, i);
                      b[m - 1] = s === 0 ? 0 : s;
                    } else m += 2;
                }),
                v.evaluate(b[0], l)
              );
            }
          }),
            ($.Parser.prototype[v.symbol] = !0),
            (v.reference = function (l) {
              return function (b) {
                return b && b[l] !== void 0 ? b[l] : null;
              };
            }),
            (v.evaluate = function (l, b) {
              return l === null
                ? null
                : typeof l == "function"
                ? l(b)
                : l[v.symbol]
                ? l.evaluate(b)
                : l;
            }),
            (v.single = function (l, b) {
              if (l === "!") return !b;
              let g = -b;
              return g === 0 ? 0 : g;
            }),
            (v.calculate = function (l, b, g) {
              if (l === "??") return v.exists(b) ? b : g;
              if (typeof b == "string" || typeof g == "string") {
                if (l === "+")
                  return (b = v.exists(b) ? b : "") + (v.exists(g) ? g : "");
              } else
                switch (l) {
                  case "^":
                    return Math.pow(b, g);
                  case "*":
                    return b * g;
                  case "/":
                    return b / g;
                  case "%":
                    return b % g;
                  case "+":
                    return b + g;
                  case "-":
                    return b - g;
                }
              switch (l) {
                case "<":
                  return b < g;
                case "<=":
                  return b <= g;
                case ">":
                  return b > g;
                case ">=":
                  return b >= g;
                case "==":
                  return b === g;
                case "!=":
                  return b !== g;
                case "&&":
                  return b && g;
                case "||":
                  return b || g;
              }
              return null;
            }),
            (v.exists = function (l) {
              return l != null;
            });
        },
        9926: () => {},
        5688: () => {},
        9708: () => {},
        1152: () => {},
        443: () => {},
        9848: () => {},
        5934: (j) => {
          "use strict";
          j.exports = { version: "17.9.1" };
        },
      }),
      (O = {}),
      (function j($) {
        var v = O[$];
        if (v !== void 0) return v.exports;
        var l = (O[$] = { exports: {} });
        return R[$](l, l.exports, j), l.exports;
      })(5107)
    );
    var R, O;
  });
});
M();
M();
var B = class extends Error {
  constructor(O) {
    super(O.message),
      (this.message = O.message),
      (this.code = O.code),
      (this.data = O.data);
  }
};
M();
var ie = (R, O) => {
    let j;
    R.request ? (j = R.request.bind(R)) : R.sendAsync && (j = oe(R));
    let $ = (b) =>
      V(void 0, [b], function* ({ method: v, params: l }) {
        let g = v;
        if (O && O[g] === null)
          throw new B({
            code: 4200,
            message: `The Provider does not support the requested method: ${v}`,
          });
        if (O && O[g]) return O[g]({ baseRequest: j, params: l });
        if (j) return j({ method: v, params: l });
        throw new B({
          code: 4200,
          message: `The Provider does not support the requested method: ${v}`,
        });
      });
    return (R.request = $), R;
  },
  oe =
    (R) =>
    ({ method: O, params: j }) =>
      new Promise(($, v) => {
        R.sendAsync(
          { id: 0, jsonrpc: "2.0", method: O, params: j },
          (l, { result: b }) => {
            l ? v(JSON.parse(l)) : $(b ?? null);
          }
        );
      });
M();
var le = `
@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 300 600;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/InterVariable.woff2") format("woff2-variations");
}
`;
M();
var re = (R) => re(R),
  ce = (R) => {
    let O = ee(R);
    return J(O);
  },
  ue = (R) => {
    if (!R) return R;
    let O = Z(R, "bigint");
    return J(O);
  },
  me = (R) => {
    if (typeof R != "string" && typeof R != "number")
      throw new Error("eth must be a string or number value");
    let O = typeof R == "number" ? R.toString() : R;
    return Q(O);
  },
  fe = (R) => te(R),
  he = (R, O) =>
    O
      ? typeof O == "function"
        ? `Please <a href="#" onclick="${() =>
            O()}">install</a> or enable to ${R} to continue`
        : `Please <a href="${O}" target="_blank">install</a> or enable to ${R} to continue`
      : `Please switch to ${R} to continue`,
  de = (R) =>
    V(void 0, null, function* () {
      let O = yield import("./chunk-3B4GQJHF.js"),
        {
          id: j,
          label: $,
          token: v,
          publicRpcUrl: l,
          blockExplorerUrl: b,
          rpcUrl: g,
        } = R;
      switch (j) {
        case "0x89": {
          let { polygon: m } = O;
          return m;
        }
        case "0xa": {
          let { optimism: m } = O;
          return m;
        }
        case "0xa4b1": {
          let { arbitrum: m } = O;
          return m;
        }
        case "0x144": {
          let { zkSync: m } = O;
          return m;
        }
        case "0x38": {
          let { bsc: m } = O;
          return m;
        }
        case "0x1": {
          let { mainnet: m } = O;
          return m;
        }
        case "0xaa36a7": {
          let { sepolia: m } = O;
          return m;
        }
        case "0xfa": {
          let { fantom: m } = O;
          return m;
        }
        case "0xa86a": {
          let { avalanche: m } = O;
          return m;
        }
        case "0xa4ec": {
          let { celo: m } = O;
          return m;
        }
        case "0x2105": {
          let { base: m } = O;
          return m;
        }
        case "0x14a33": {
          let { baseGoerli: m } = O;
          return m;
        }
        case "0x64": {
          let { gnosis: m } = O;
          return m;
        }
        case "0x63564C40": {
          let { harmonyOne: m } = O;
          return m;
        }
        case "0x27bc86aa": {
          let { degen: m } = O;
          return m;
        }
        default: {
          let { extractChain: m, defineChain: e } = yield import(
              "./chunk-H2BVXEIF.js"
            ),
            n = m({ chains: Object.values(O), id: Z(j, "number") });
          return (
            n ||
            e({
              id: Z(j, "number"),
              name: $ ?? "",
              nativeCurrency: { decimals: 18, name: v ?? "", symbol: v ?? "" },
              rpcUrls: { default: { http: [g ?? "", l ?? ""] } },
              blockExplorers: { default: { name: "Explorer", url: b ?? "" } },
            })
          );
        }
      }
    });
M();
var pe = (function (R) {
  return (
    (R[(R.ACCOUNT_ACCESS_REJECTED = 4001)] = "ACCOUNT_ACCESS_REJECTED"),
    (R[(R.ACCOUNT_ACCESS_ALREADY_REQUESTED = -32002)] =
      "ACCOUNT_ACCESS_ALREADY_REQUESTED"),
    (R[(R.UNAUTHORIZED = 4100)] = "UNAUTHORIZED"),
    (R[(R.INVALID_PARAMS = -32602)] = "INVALID_PARAMS"),
    (R[(R.UNSUPPORTED_METHOD = 4200)] = "UNSUPPORTED_METHOD"),
    (R[(R.DISCONNECTED = 4900)] = "DISCONNECTED"),
    (R[(R.CHAIN_DISCONNECTED = 4901)] = "CHAIN_DISCONNECTED"),
    (R[(R.CHAIN_NOT_ADDED = 4902)] = "CHAIN_NOT_ADDED"),
    (R[(R.DOES_NOT_EXIST = -32601)] = "DOES_NOT_EXIST"),
    (R[(R.UNRECOGNIZED_CHAIN_ID = -32603)] = "UNRECOGNIZED_CHAIN_ID"),
    R
  );
})(pe || {});
M();
var N = ae(se(), 1);
function tt(R, O) {
  let j = R.validate(O);
  return j.error ? j : null;
}
var ge = N.default
    .alternatives()
    .try(
      N.default.string().pattern(/^0x[0-9a-fA-F]+$/),
      N.default.number().positive()
    ),
  ye = N.default.string().valid("evm"),
  be = N.default.object({
    address: N.default.string().required(),
    icon: N.default.string().optional(),
  }),
  rt = N.default.object({
    namespace: ye,
    id: ge.required(),
    rpcUrl: N.default.string(),
    label: N.default.string(),
    token: N.default.string(),
    secondaryTokens: N.default.array().max(5).items(be).optional(),
    icon: N.default.string(),
    color: N.default.string(),
    publicRpcUrl: N.default.string(),
    protectedRpcUrl: N.default.string(),
    blockExplorerUrl: N.default.string(),
  });
export {
  se as a,
  B as b,
  ie as c,
  le as d,
  re as e,
  ce as f,
  ue as g,
  me as h,
  fe as i,
  he as j,
  de as k,
  pe as l,
  tt as m,
  ge as n,
  ye as o,
  rt as p,
};
