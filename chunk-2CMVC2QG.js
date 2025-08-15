import {
  $ as D,
  B as q,
  C as Z,
  D as $,
  E as ee,
  F as re,
  G as l,
  H as z,
  I as Y,
  J as te,
  L as I,
  Q as O,
  X as v,
  Y as oe,
  Z as ne,
  a,
  aa as B,
  c as g,
  e as R,
  g as Q,
  ha as ie,
  i as k,
  ia as M,
  k as p,
  l as X,
  p as N,
  t as U,
  u as h,
  w as b,
  z as A,
} from "./chunk-23ZZ27XK.js";
import { q as n } from "./chunk-KXQY476L.js";
n();
n();
n();
var J = {
  now() {
    return (J.delegate || performance).now();
  },
  delegate: void 0,
};
n();
var x = {
  schedule(t) {
    let e = requestAnimationFrame,
      r = cancelAnimationFrame,
      { delegate: o } = x;
    o && ((e = o.requestAnimationFrame), (r = o.cancelAnimationFrame));
    let i = e((m) => {
      (r = void 0), t(m);
    });
    return new g(() => r?.(i));
  },
  requestAnimationFrame(...t) {
    let { delegate: e } = x;
    return (e?.requestAnimationFrame || requestAnimationFrame)(...t);
  },
  cancelAnimationFrame(...t) {
    let { delegate: e } = x;
    return (e?.cancelAnimationFrame || cancelAnimationFrame)(...t);
  },
  delegate: void 0,
};
function de(t) {
  return t ? me(t) : he;
}
function me(t) {
  return new p((e) => {
    let r = t || J,
      o = r.now(),
      i = 0,
      m = () => {
        e.closed ||
          (i = x.requestAnimationFrame((s) => {
            i = 0;
            let u = r.now();
            e.next({ timestamp: t ? u : s, elapsed: u - o }), m();
          }));
      };
    return (
      m(),
      () => {
        i && x.cancelAnimationFrame(i);
      }
    );
  });
}
var he = me();
n();
n();
n();
n();
var be = 1,
  K,
  G = {};
function fe(t) {
  return t in G ? (delete G[t], !0) : !1;
}
var se = {
  setImmediate(t) {
    let e = be++;
    return (
      (G[e] = !0), K || (K = Promise.resolve()), K.then(() => fe(e) && t()), e
    );
  },
  clearImmediate(t) {
    fe(t);
  },
};
var { setImmediate: ve, clearImmediate: ye } = se,
  T = {
    setImmediate(...t) {
      let { delegate: e } = T;
      return (e?.setImmediate || ve)(...t);
    },
    clearImmediate(t) {
      let { delegate: e } = T;
      return (e?.clearImmediate || ye)(t);
    },
    delegate: void 0,
  };
var _ = class extends h {
  constructor(e, r) {
    super(e, r), (this.scheduler = e), (this.work = r);
  }
  requestAsyncId(e, r, o = 0) {
    return o !== null && o > 0
      ? super.requestAsyncId(e, r, o)
      : (e.actions.push(this),
        e._scheduled ||
          (e._scheduled = T.setImmediate(e.flush.bind(e, void 0))));
  }
  recycleAsyncId(e, r, o = 0) {
    var i;
    if (o != null ? o > 0 : this.delay > 0)
      return super.recycleAsyncId(e, r, o);
    let { actions: m } = e;
    r != null &&
      ((i = m[m.length - 1]) === null || i === void 0 ? void 0 : i.id) !== r &&
      (T.clearImmediate(r), e._scheduled === r && (e._scheduled = void 0));
  }
};
n();
var C = class extends b {
  flush(e) {
    this._active = !0;
    let r = this._scheduled;
    this._scheduled = void 0;
    let { actions: o } = this,
      i;
    e = e || o.shift();
    do if ((i = e.execute(e.state, e.delay))) break;
    while ((e = o[0]) && e.id === r && o.shift());
    if (((this._active = !1), i)) {
      for (; (e = o[0]) && e.id === r && o.shift(); ) e.unsubscribe();
      throw i;
    }
  }
};
var pe = new C(_),
  Ae = pe;
n();
n();
var L = class extends h {
  constructor(e, r) {
    super(e, r), (this.scheduler = e), (this.work = r);
  }
  schedule(e, r = 0) {
    return r > 0
      ? super.schedule(e, r)
      : ((this.delay = r), (this.state = e), this.scheduler.flush(this), this);
  }
  execute(e, r) {
    return r > 0 || this.closed ? super.execute(e, r) : this._execute(e, r);
  }
  requestAsyncId(e, r, o = 0) {
    return (o != null && o > 0) || (o == null && this.delay > 0)
      ? super.requestAsyncId(e, r, o)
      : (e.flush(this), 0);
  }
};
n();
var W = class extends b {};
var ue = new W(L),
  we = ue;
n();
n();
var P = class extends h {
  constructor(e, r) {
    super(e, r), (this.scheduler = e), (this.work = r);
  }
  requestAsyncId(e, r, o = 0) {
    return o !== null && o > 0
      ? super.requestAsyncId(e, r, o)
      : (e.actions.push(this),
        e._scheduled ||
          (e._scheduled = x.requestAnimationFrame(() => e.flush(void 0))));
  }
  recycleAsyncId(e, r, o = 0) {
    var i;
    if (o != null ? o > 0 : this.delay > 0)
      return super.recycleAsyncId(e, r, o);
    let { actions: m } = e;
    r != null &&
      ((i = m[m.length - 1]) === null || i === void 0 ? void 0 : i.id) !== r &&
      (x.cancelAnimationFrame(r), (e._scheduled = void 0));
  }
};
n();
var V = class extends b {
  flush(e) {
    this._active = !0;
    let r = this._scheduled;
    this._scheduled = void 0;
    let { actions: o } = this,
      i;
    e = e || o.shift();
    do if ((i = e.execute(e.state, e.delay))) break;
    while ((e = o[0]) && e.id === r && o.shift());
    if (((this._active = !1), i)) {
      for (; (e = o[0]) && e.id === r && o.shift(); ) e.unsubscribe();
      throw i;
    }
  }
};
var ce = new V(P),
  Ee = ce;
n();
var Fe = (() => {
    class t extends b {
      constructor(r = j, o = 1 / 0) {
        super(r, () => this.frame),
          (this.maxFrames = o),
          (this.frame = 0),
          (this.index = -1);
      }
      flush() {
        let { actions: r, maxFrames: o } = this,
          i,
          m;
        for (
          ;
          (m = r[0]) &&
          m.delay <= o &&
          (r.shift(),
          (this.frame = m.delay),
          !(i = m.execute(m.state, m.delay)));

        );
        if (i) {
          for (; (m = r.shift()); ) m.unsubscribe();
          throw i;
        }
      }
    }
    return (t.frameTimeFactor = 10), t;
  })(),
  j = class t extends h {
    constructor(e, r, o = (e.index += 1)) {
      super(e, r),
        (this.scheduler = e),
        (this.work = r),
        (this.index = o),
        (this.active = !0),
        (this.index = e.index = o);
    }
    schedule(e, r = 0) {
      if (Number.isFinite(r)) {
        if (!this.id) return super.schedule(e, r);
        this.active = !1;
        let o = new t(this.scheduler, this.work);
        return this.add(o), o.schedule(e, r);
      } else return g.EMPTY;
    }
    requestAsyncId(e, r, o = 0) {
      this.delay = e.frame + o;
      let { actions: i } = e;
      return i.push(this), i.sort(t.sortActions), 1;
    }
    recycleAsyncId(e, r, o = 0) {}
    _execute(e, r) {
      if (this.active === !0) return super._execute(e, r);
    }
    static sortActions(e, r) {
      return e.delay === r.delay
        ? e.index === r.index
          ? 0
          : e.index > r.index
          ? 1
          : -1
        : e.delay > r.delay
        ? 1
        : -1;
    }
  };
n();
function ge(t) {
  return !!t && (t instanceof p || (a(t.lift) && a(t.subscribe)));
}
n();
function Ie(t, e) {
  let r = typeof e == "object";
  return new Promise((o, i) => {
    let m = !1,
      s;
    t.subscribe({
      next: (u) => {
        (s = u), (m = !0);
      },
      error: i,
      complete: () => {
        m ? o(s) : r ? o(e.defaultValue) : i(new O());
      },
    });
  });
}
n();
function Oe(t, e) {
  let r = typeof e == "object";
  return new Promise((o, i) => {
    let m = new Q({
      next: (s) => {
        o(s), m.unsubscribe();
      },
      error: i,
      complete: () => {
        r ? o(e.defaultValue) : i(new O());
      },
    });
    t.subscribe(m);
  });
}
n();
n();
function E(t, e, r, o) {
  if (r)
    if (q(r)) o = r;
    else
      return function (...i) {
        return E(t, e, o).apply(this, i).pipe(v(r));
      };
  return o
    ? function (...i) {
        return E(t, e).apply(this, i).pipe(Y(o), z(o));
      }
    : function (...i) {
        let m = new U(),
          s = !0;
        return new p((u) => {
          let c = m.subscribe(u);
          if (s) {
            s = !1;
            let F = !1,
              y = !1;
            e.apply(this, [
              ...i,
              (...d) => {
                if (t) {
                  let S = d.shift();
                  if (S != null) {
                    m.error(S);
                    return;
                  }
                }
                m.next(1 < d.length ? d : d[0]), (y = !0), F && m.complete();
              },
            ]),
              y && m.complete(),
              (F = !0);
          }
          return c;
        });
      };
}
function Te(t, e, r) {
  return E(!1, t, e, r);
}
n();
function Se(t, e, r) {
  return E(!0, t, e, r);
}
n();
n();
function w(t) {
  return new p((e) => {
    l(t()).subscribe(e);
  });
}
var ke = { connector: () => new N(), resetOnDisconnect: !0 };
function qe(t, e = ke) {
  let r = null,
    { connector: o, resetOnDisconnect: i = !0 } = e,
    m = o(),
    s = new p((u) => m.subscribe(u));
  return (
    (s.connect = () => (
      (!r || r.closed) &&
        ((r = w(() => t).subscribe(m)), i && r.add(() => (m = o()))),
      r
    )),
    s
  );
}
n();
function Me(...t) {
  let e = Z(t),
    { args: r, keys: o } = oe(t),
    i = new p((m) => {
      let { length: s } = r;
      if (!s) {
        m.complete();
        return;
      }
      let u = new Array(s),
        c = s,
        F = s;
      for (let y = 0; y < s; y++) {
        let d = !1;
        l(r[y]).subscribe(
          X(
            m,
            (S) => {
              d || ((d = !0), F--), (u[y] = S);
            },
            () => c--,
            void 0,
            () => {
              (!c || !d) && (F || m.next(o ? ne(o, u) : u), m.complete());
            }
          )
        );
      }
    });
  return e ? i.pipe(v(e)) : i;
}
n();
var _e = ["addListener", "removeListener"],
  Ce = ["addEventListener", "removeEventListener"],
  Le = ["on", "off"];
function H(t, e, r, o) {
  if ((a(r) && ((o = r), (r = void 0)), o)) return H(t, e, r).pipe(v(o));
  let [i, m] = Ve(t)
    ? Ce.map((s) => (u) => t[s](e, u, r))
    : We(t)
    ? _e.map(ae(t, e))
    : Pe(t)
    ? Le.map(ae(t, e))
    : [];
  if (!i && re(t)) return D((s) => H(s, e, r))(l(t));
  if (!i) throw new TypeError("Invalid event target");
  return new p((s) => {
    let u = (...c) => s.next(1 < c.length ? c : c[0]);
    return i(u), () => m(u);
  });
}
function ae(t, e) {
  return (r) => (o) => t[r](e, o);
}
function We(t) {
  return a(t.addListener) && a(t.removeListener);
}
function Pe(t) {
  return a(t.on) && a(t.off);
}
function Ve(t) {
  return a(t.addEventListener) && a(t.removeEventListener);
}
n();
function le(t, e, r) {
  return r
    ? le(t, e).pipe(v(r))
    : new p((o) => {
        let i = (...s) => o.next(s.length === 1 ? s[0] : s),
          m = t(i);
        return a(e) ? () => e(i, m) : void 0;
      });
}
n();
function je(t, e, r, o, i) {
  let m, s;
  arguments.length === 1
    ? ({
        initialState: s,
        condition: e,
        iterate: r,
        resultSelector: m = k,
        scheduler: i,
      } = t)
    : ((s = t), !o || q(o) ? ((m = k), (i = o)) : (m = o));
  function* u() {
    for (let c = s; !e || e(c); c = r(c)) yield m(c);
  }
  return w(i ? () => te(u(), i) : u);
}
n();
function Re(t, e, r) {
  return w(() => (t() ? e : r));
}
n();
function Ne(...t) {
  let e = $(t),
    r = ee(t, 1 / 0),
    o = t;
  return o.length ? (o.length === 1 ? l(o[0]) : B(r)(I(o, e))) : A;
}
n();
var xe = new p(R);
function Ue() {
  return xe;
}
n();
function ze(t, e) {
  return I(Object.entries(t), e);
}
n();
function Ye(t, e, r) {
  return [M(e, r)(l(t)), M(ie(e, r))(l(t))];
}
n();
function De(t, e, r) {
  if ((e == null && ((e = t), (t = 0)), e <= 0)) return A;
  let o = e + t;
  return new p(
    r
      ? (i) => {
          let m = t;
          return r.schedule(function () {
            m < o ? (i.next(m++), this.schedule()) : i.complete();
          });
        }
      : (i) => {
          let m = t;
          for (; m < o && !i.closed; ) i.next(m++);
          i.complete();
        }
  );
}
n();
function Be(t, e) {
  return new p((r) => {
    let o = t(),
      i = e(o);
    return (
      (i ? l(i) : A).subscribe(r),
      () => {
        o && o.unsubscribe();
      }
    );
  });
}
export {
  de as a,
  pe as b,
  Ae as c,
  ue as d,
  we as e,
  ce as f,
  Ee as g,
  Fe as h,
  j as i,
  ge as j,
  Ie as k,
  Oe as l,
  Te as m,
  Se as n,
  w as o,
  qe as p,
  Me as q,
  H as r,
  le as s,
  je as t,
  Re as u,
  Ne as v,
  xe as w,
  Ue as x,
  ze as y,
  Ye as z,
  De as A,
  Be as B,
};
