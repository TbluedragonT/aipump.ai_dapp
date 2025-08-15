import { c as pt, e as ae, f as at, g as dt } from "./chunk-7NO3R5IA.js";
import { q as n } from "./chunk-KXQY476L.js";
n();
n();
function j(t) {
  let r = t((o) => {
    Error.call(o), (o.stack = new Error().stack);
  });
  return (
    (r.prototype = Object.create(Error.prototype)),
    (r.prototype.constructor = r),
    r
  );
}
var de = j(
  (t) =>
    function (r) {
      t(this),
        (this.message = r
          ? `${r.length} errors occurred during unsubscription:
${r.map((o, i) => `${i + 1}) ${o.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = r);
    }
);
n();
n();
function b(t) {
  return typeof t == "function";
}
n();
function R(t, e) {
  if (t) {
    let r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var A = class t {
  constructor(e) {
    (this.initialTeardown = e),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let e;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: r } = this;
      if (r)
        if (((this._parentage = null), Array.isArray(r)))
          for (let s of r) s.remove(this);
        else r.remove(this);
      let { initialTeardown: o } = this;
      if (b(o))
        try {
          o();
        } catch (s) {
          e = s instanceof de ? s.errors : [s];
        }
      let { _finalizers: i } = this;
      if (i) {
        this._finalizers = null;
        for (let s of i)
          try {
            ht(s);
          } catch (m) {
            (e = e ?? []),
              m instanceof de ? (e = [...e, ...m.errors]) : e.push(m);
          }
      }
      if (e) throw new de(e);
    }
  }
  add(e) {
    var r;
    if (e && e !== this)
      if (this.closed) ht(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this)) return;
          e._addParent(this);
        }
        (this._finalizers =
          (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
      }
  }
  _hasParent(e) {
    let { _parentage: r } = this;
    return r === e || (Array.isArray(r) && r.includes(e));
  }
  _addParent(e) {
    let { _parentage: r } = this;
    this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
  }
  _removeParent(e) {
    let { _parentage: r } = this;
    r === e ? (this._parentage = null) : Array.isArray(r) && R(r, e);
  }
  remove(e) {
    let { _finalizers: r } = this;
    r && R(r, e), e instanceof t && e._removeParent(this);
  }
};
A.EMPTY = (() => {
  let t = new A();
  return (t.closed = !0), t;
})();
var Be = A.EMPTY;
function he(t) {
  return (
    t instanceof A ||
    (t && "closed" in t && b(t.remove) && b(t.add) && b(t.unsubscribe))
  );
}
function ht(t) {
  b(t) ? t() : t.unsubscribe();
}
n();
var U = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
n();
function g() {}
n();
n();
n();
var re = {
  setTimeout(t, e, ...r) {
    let { delegate: o } = re;
    return o?.setTimeout ? o.setTimeout(t, e, ...r) : setTimeout(t, e, ...r);
  },
  clearTimeout(t) {
    let { delegate: e } = re;
    return (e?.clearTimeout || clearTimeout)(t);
  },
  delegate: void 0,
};
function be(t) {
  re.setTimeout(() => {
    let { onUnhandledError: e } = U;
    if (e) e(t);
    else throw t;
  });
}
n();
var bt = Ke("C", void 0, void 0);
function xt(t) {
  return Ke("E", void 0, t);
}
function vt(t) {
  return Ke("N", t, void 0);
}
function Ke(t, e, r) {
  return { kind: t, value: e, error: r };
}
n();
var Z = null;
function oe(t) {
  if (U.useDeprecatedSynchronousErrorHandling) {
    let e = !Z;
    if ((e && (Z = { errorThrown: !1, error: null }), t(), e)) {
      let { errorThrown: r, error: o } = Z;
      if (((Z = null), r)) throw o;
    }
  } else t();
}
function yt(t) {
  U.useDeprecatedSynchronousErrorHandling &&
    Z &&
    ((Z.errorThrown = !0), (Z.error = t));
}
var J = class extends A {
    constructor(e) {
      super(),
        (this.isStopped = !1),
        e
          ? ((this.destination = e), he(e) && e.add(this))
          : (this.destination = ir);
    }
    static create(e, r, o) {
      return new D(e, r, o);
    }
    next(e) {
      this.isStopped ? Je(vt(e), this) : this._next(e);
    }
    error(e) {
      this.isStopped
        ? Je(xt(e), this)
        : ((this.isStopped = !0), this._error(e));
    }
    complete() {
      this.isStopped ? Je(bt, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(e) {
      this.destination.next(e);
    }
    _error(e) {
      try {
        this.destination.error(e);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  or = Function.prototype.bind;
function Ze(t, e) {
  return or.call(t, e);
}
var Xe = class {
    constructor(e) {
      this.partialObserver = e;
    }
    next(e) {
      let { partialObserver: r } = this;
      if (r.next)
        try {
          r.next(e);
        } catch (o) {
          xe(o);
        }
    }
    error(e) {
      let { partialObserver: r } = this;
      if (r.error)
        try {
          r.error(e);
        } catch (o) {
          xe(o);
        }
      else xe(e);
    }
    complete() {
      let { partialObserver: e } = this;
      if (e.complete)
        try {
          e.complete();
        } catch (r) {
          xe(r);
        }
    }
  },
  D = class extends J {
    constructor(e, r, o) {
      super();
      let i;
      if (b(e) || !e)
        i = { next: e ?? void 0, error: r ?? void 0, complete: o ?? void 0 };
      else {
        let s;
        this && U.useDeprecatedNextContext
          ? ((s = Object.create(e)),
            (s.unsubscribe = () => this.unsubscribe()),
            (i = {
              next: e.next && Ze(e.next, s),
              error: e.error && Ze(e.error, s),
              complete: e.complete && Ze(e.complete, s),
            }))
          : (i = e);
      }
      this.destination = new Xe(i);
    }
  };
function xe(t) {
  U.useDeprecatedSynchronousErrorHandling ? yt(t) : be(t);
}
function nr(t) {
  throw t;
}
function Je(t, e) {
  let { onStoppedNotification: r } = U;
  r && re.setTimeout(() => r(t, e));
}
var ir = { closed: !0, next: g, error: nr, complete: g };
n();
var ne = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
n();
function O(t) {
  return t;
}
n();
function ve(...t) {
  return He(t);
}
function He(t) {
  return t.length === 0
    ? O
    : t.length === 1
    ? t[0]
    : function (r) {
        return t.reduce((o, i) => i(o), r);
      };
}
n();
var w = (() => {
  class t {
    constructor(r) {
      r && (this._subscribe = r);
    }
    lift(r) {
      let o = new t();
      return (o.source = this), (o.operator = r), o;
    }
    subscribe(r, o, i) {
      let s = mr(r) ? r : new D(r, o, i);
      return (
        oe(() => {
          let { operator: m, source: c } = this;
          s.add(
            m ? m.call(s, c) : c ? this._subscribe(s) : this._trySubscribe(s)
          );
        }),
        s
      );
    }
    _trySubscribe(r) {
      try {
        return this._subscribe(r);
      } catch (o) {
        r.error(o);
      }
    }
    forEach(r, o) {
      return (
        (o = wt(o)),
        new o((i, s) => {
          let m = new D({
            next: (c) => {
              try {
                r(c);
              } catch (l) {
                s(l), m.unsubscribe();
              }
            },
            error: s,
            complete: i,
          });
          this.subscribe(m);
        })
      );
    }
    _subscribe(r) {
      var o;
      return (o = this.source) === null || o === void 0
        ? void 0
        : o.subscribe(r);
    }
    [ne]() {
      return this;
    }
    pipe(...r) {
      return He(r)(this);
    }
    toPromise(r) {
      return (
        (r = wt(r)),
        new r((o, i) => {
          let s;
          this.subscribe(
            (m) => (s = m),
            (m) => i(m),
            () => o(s)
          );
        })
      );
    }
  }
  return (t.create = (e) => new t(e)), t;
})();
function wt(t) {
  var e;
  return (e = t ?? U.Promise) !== null && e !== void 0 ? e : Promise;
}
function sr(t) {
  return t && b(t.next) && b(t.error) && b(t.complete);
}
function mr(t) {
  return (t && t instanceof J) || (sr(t) && he(t));
}
n();
n();
function Qe(t) {
  return b(t?.lift);
}
function f(t) {
  return (e) => {
    if (Qe(e))
      return e.lift(function (r) {
        try {
          return t(r, this);
        } catch (o) {
          this.error(o);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
n();
function p(t, e, r, o, i) {
  return new X(t, e, r, o, i);
}
var X = class extends J {
  constructor(e, r, o, i, s, m) {
    super(e),
      (this.onFinalize = s),
      (this.shouldUnsubscribe = m),
      (this._next = r
        ? function (c) {
            try {
              r(c);
            } catch (l) {
              e.error(l);
            }
          }
        : super._next),
      (this._error = i
        ? function (c) {
            try {
              i(c);
            } catch (l) {
              e.error(l);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = o
        ? function () {
            try {
              o();
            } catch (c) {
              e.error(c);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var e;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: r } = this;
      super.unsubscribe(),
        !r && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
    }
  }
};
function St() {
  return f((t, e) => {
    let r = null;
    t._refCount++;
    let o = p(e, void 0, void 0, void 0, () => {
      if (!t || t._refCount <= 0 || 0 < --t._refCount) {
        r = null;
        return;
      }
      let i = t._connection,
        s = r;
      (r = null), i && (!s || i === s) && i.unsubscribe(), e.unsubscribe();
    });
    t.subscribe(o), o.closed || (r = t.connect());
  });
}
n();
var Y = class extends w {
  constructor(e, r) {
    super(),
      (this.source = e),
      (this.subjectFactory = r),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      Qe(e) && (this.lift = e.lift);
  }
  _subscribe(e) {
    return this.getSubject().subscribe(e);
  }
  getSubject() {
    let e = this._subject;
    return (
      (!e || e.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: e } = this;
    (this._subject = this._connection = null), e?.unsubscribe();
  }
  connect() {
    let e = this._connection;
    if (!e) {
      e = this._connection = new A();
      let r = this.getSubject();
      e.add(
        this.source.subscribe(
          p(
            r,
            void 0,
            () => {
              this._teardown(), r.complete();
            },
            (o) => {
              this._teardown(), r.error(o);
            },
            () => this._teardown()
          )
        )
      ),
        e.closed && ((this._connection = null), (e = A.EMPTY));
    }
    return e;
  }
  refCount() {
    return St()(this);
  }
};
n();
var _t = j(
  (t) =>
    function () {
      t(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    }
);
n();
var E = (() => {
    class t extends w {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(r) {
        let o = new ye(this, this);
        return (o.operator = r), o;
      }
      _throwIfClosed() {
        if (this.closed) throw new _t();
      }
      next(r) {
        oe(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let o of this.currentObservers) o.next(r);
          }
        });
      }
      error(r) {
        oe(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = r);
            let { observers: o } = this;
            for (; o.length; ) o.shift().error(r);
          }
        });
      }
      complete() {
        oe(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: r } = this;
            for (; r.length; ) r.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var r;
        return (
          ((r = this.observers) === null || r === void 0 ? void 0 : r.length) >
          0
        );
      }
      _trySubscribe(r) {
        return this._throwIfClosed(), super._trySubscribe(r);
      }
      _subscribe(r) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(r),
          this._innerSubscribe(r)
        );
      }
      _innerSubscribe(r) {
        let { hasError: o, isStopped: i, observers: s } = this;
        return o || i
          ? Be
          : ((this.currentObservers = null),
            s.push(r),
            new A(() => {
              (this.currentObservers = null), R(s, r);
            }));
      }
      _checkFinalizedStatuses(r) {
        let { hasError: o, thrownError: i, isStopped: s } = this;
        o ? r.error(i) : s && r.complete();
      }
      asObservable() {
        let r = new w();
        return (r.source = this), r;
      }
    }
    return (t.create = (e, r) => new ye(e, r)), t;
  })(),
  ye = class extends E {
    constructor(e, r) {
      super(), (this.destination = e), (this.source = r);
    }
    next(e) {
      var r, o;
      (o =
        (r = this.destination) === null || r === void 0 ? void 0 : r.next) ===
        null ||
        o === void 0 ||
        o.call(r, e);
    }
    error(e) {
      var r, o;
      (o =
        (r = this.destination) === null || r === void 0 ? void 0 : r.error) ===
        null ||
        o === void 0 ||
        o.call(r, e);
    }
    complete() {
      var e, r;
      (r =
        (e = this.destination) === null || e === void 0
          ? void 0
          : e.complete) === null ||
        r === void 0 ||
        r.call(e);
    }
    _subscribe(e) {
      var r, o;
      return (o =
        (r = this.source) === null || r === void 0
          ? void 0
          : r.subscribe(e)) !== null && o !== void 0
        ? o
        : Be;
    }
  };
n();
var we = class extends E {
  constructor(e) {
    super(), (this._value = e);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(e) {
    let r = super._subscribe(e);
    return !r.closed && e.next(this._value), r;
  }
  getValue() {
    let { hasError: e, thrownError: r, _value: o } = this;
    if (e) throw r;
    return this._throwIfClosed(), o;
  }
  next(e) {
    super.next((this._value = e));
  }
};
n();
n();
var H = {
  now() {
    return (H.delegate || Date).now();
  },
  delegate: void 0,
};
var ie = class extends E {
  constructor(e = 1 / 0, r = 1 / 0, o = H) {
    super(),
      (this._bufferSize = e),
      (this._windowTime = r),
      (this._timestampProvider = o),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = r === 1 / 0),
      (this._bufferSize = Math.max(1, e)),
      (this._windowTime = Math.max(1, r));
  }
  next(e) {
    let {
      isStopped: r,
      _buffer: o,
      _infiniteTimeWindow: i,
      _timestampProvider: s,
      _windowTime: m,
    } = this;
    r || (o.push(e), !i && o.push(s.now() + m)),
      this._trimBuffer(),
      super.next(e);
  }
  _subscribe(e) {
    this._throwIfClosed(), this._trimBuffer();
    let r = this._innerSubscribe(e),
      { _infiniteTimeWindow: o, _buffer: i } = this,
      s = i.slice();
    for (let m = 0; m < s.length && !e.closed; m += o ? 1 : 2) e.next(s[m]);
    return this._checkFinalizedStatuses(e), r;
  }
  _trimBuffer() {
    let {
        _bufferSize: e,
        _timestampProvider: r,
        _buffer: o,
        _infiniteTimeWindow: i,
      } = this,
      s = (i ? 1 : 2) * e;
    if ((e < 1 / 0 && s < o.length && o.splice(0, o.length - s), !i)) {
      let m = r.now(),
        c = 0;
      for (let l = 1; l < o.length && o[l] <= m; l += 2) c = l;
      c && o.splice(0, c + 1);
    }
  }
};
n();
var Se = class extends E {
  constructor() {
    super(...arguments),
      (this._value = null),
      (this._hasValue = !1),
      (this._isComplete = !1);
  }
  _checkFinalizedStatuses(e) {
    let {
      hasError: r,
      _hasValue: o,
      _value: i,
      thrownError: s,
      isStopped: m,
      _isComplete: c,
    } = this;
    r ? e.error(s) : (m || c) && (o && e.next(i), e.complete());
  }
  next(e) {
    this.isStopped || ((this._value = e), (this._hasValue = !0));
  }
  complete() {
    let { _hasValue: e, _value: r, _isComplete: o } = this;
    o || ((this._isComplete = !0), e && super.next(r), super.complete());
  }
};
n();
var se = class t {
  constructor(e, r = t.now) {
    (this.schedulerActionCtor = e), (this.now = r);
  }
  schedule(e, r = 0, o) {
    return new this.schedulerActionCtor(this, e).schedule(o, r);
  }
};
se.now = H.now;
n();
n();
n();
var _e = class extends A {
  constructor(e, r) {
    super();
  }
  schedule(e, r = 0) {
    return this;
  }
};
n();
var pe = {
  setInterval(t, e, ...r) {
    let { delegate: o } = pe;
    return o?.setInterval ? o.setInterval(t, e, ...r) : setInterval(t, e, ...r);
  },
  clearInterval(t) {
    let { delegate: e } = pe;
    return (e?.clearInterval || clearInterval)(t);
  },
  delegate: void 0,
};
var ge = class extends _e {
  constructor(e, r) {
    super(e, r), (this.scheduler = e), (this.work = r), (this.pending = !1);
  }
  schedule(e, r = 0) {
    var o;
    if (this.closed) return this;
    this.state = e;
    let i = this.id,
      s = this.scheduler;
    return (
      i != null && (this.id = this.recycleAsyncId(s, i, r)),
      (this.pending = !0),
      (this.delay = r),
      (this.id =
        (o = this.id) !== null && o !== void 0
          ? o
          : this.requestAsyncId(s, this.id, r)),
      this
    );
  }
  requestAsyncId(e, r, o = 0) {
    return pe.setInterval(e.flush.bind(e, this), o);
  }
  recycleAsyncId(e, r, o = 0) {
    if (o != null && this.delay === o && this.pending === !1) return r;
    r != null && pe.clearInterval(r);
  }
  execute(e, r) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let o = this._execute(e, r);
    if (o) return o;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(e, r) {
    let o = !1,
      i;
    try {
      this.work(e);
    } catch (s) {
      (o = !0), (i = s || new Error("Scheduled action threw falsy error"));
    }
    if (o) return this.unsubscribe(), i;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: e, scheduler: r } = this,
        { actions: o } = r;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        R(o, this),
        e != null && (this.id = this.recycleAsyncId(r, e, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
n();
var Ee = class extends se {
  constructor(e, r = se.now) {
    super(e, r), (this.actions = []), (this._active = !1);
  }
  flush(e) {
    let { actions: r } = this;
    if (this._active) {
      r.push(e);
      return;
    }
    let o;
    this._active = !0;
    do if ((o = e.execute(e.state, e.delay))) break;
    while ((e = r.shift()));
    if (((this._active = !1), o)) {
      for (; (e = r.shift()); ) e.unsubscribe();
      throw o;
    }
  }
};
var C = new Ee(ge),
  Oe = C;
n();
var W = new w((t) => t.complete());
function Dn(t) {
  return t ? ur(t) : W;
}
function ur(t) {
  return new w((e) => t.schedule(() => e.complete()));
}
n();
n();
function T(t, e, r, o = 0, i = !1) {
  let s = e.schedule(function () {
    r(), i ? t.add(this.schedule(null, o)) : this.unsubscribe();
  }, o);
  if ((t.add(s), !i)) return s;
}
function Ie(t, e = 0) {
  return f((r, o) => {
    r.subscribe(
      p(
        o,
        (i) => T(o, t, () => o.next(i), e),
        () => T(o, t, () => o.complete(), e),
        (i) => T(o, t, () => o.error(i), e)
      )
    );
  });
}
n();
function Fe(t, e = 0) {
  return f((r, o) => {
    o.add(t.schedule(() => r.subscribe(o), e));
  });
}
n();
n();
n();
n();
var Ae = (t) => t && typeof t.length == "number" && typeof t != "function";
n();
function Te(t) {
  return b(t?.then);
}
n();
function Ce(t) {
  return b(t[ne]);
}
n();
function Re(t) {
  return Symbol.asyncIterator && b(t?.[Symbol.asyncIterator]);
}
n();
function Pe(t) {
  return new TypeError(
    `You provided ${
      t !== null && typeof t == "object" ? "an invalid object" : `'${t}'`
    } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
  );
}
n();
n();
function lr() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var ke = lr();
function je(t) {
  return b(t?.[ke]);
}
n();
function Me(t) {
  return at(this, arguments, function* () {
    let r = t.getReader();
    try {
      for (;;) {
        let { value: o, done: i } = yield ae(r.read());
        if (i) return yield ae(void 0);
        yield yield ae(o);
      }
    } finally {
      r.releaseLock();
    }
  });
}
function Le(t) {
  return b(t?.getReader);
}
function d(t) {
  if (t instanceof w) return t;
  if (t != null) {
    if (Ce(t)) return cr(t);
    if (Ae(t)) return fr(t);
    if (Te(t)) return pr(t);
    if (Re(t)) return gt(t);
    if (je(t)) return ar(t);
    if (Le(t)) return dr(t);
  }
  throw Pe(t);
}
function cr(t) {
  return new w((e) => {
    let r = t[ne]();
    if (b(r.subscribe)) return r.subscribe(e);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable"
    );
  });
}
function fr(t) {
  return new w((e) => {
    for (let r = 0; r < t.length && !e.closed; r++) e.next(t[r]);
    e.complete();
  });
}
function pr(t) {
  return new w((e) => {
    t.then(
      (r) => {
        e.closed || (e.next(r), e.complete());
      },
      (r) => e.error(r)
    ).then(null, be);
  });
}
function ar(t) {
  return new w((e) => {
    for (let r of t) if ((e.next(r), e.closed)) return;
    e.complete();
  });
}
function gt(t) {
  return new w((e) => {
    hr(t, e).catch((r) => e.error(r));
  });
}
function dr(t) {
  return gt(Me(t));
}
function hr(t, e) {
  var r, o, i, s;
  return pt(this, void 0, void 0, function* () {
    try {
      for (r = dt(t); (o = yield r.next()), !o.done; ) {
        let m = o.value;
        if ((e.next(m), e.closed)) return;
      }
    } catch (m) {
      i = { error: m };
    } finally {
      try {
        o && !o.done && (s = r.return) && (yield s.call(r));
      } finally {
        if (i) throw i.error;
      }
    }
    e.complete();
  });
}
function Et(t, e) {
  return d(t).pipe(Fe(e), Ie(e));
}
n();
function Ot(t, e) {
  return d(t).pipe(Fe(e), Ie(e));
}
n();
function It(t, e) {
  return new w((r) => {
    let o = 0;
    return e.schedule(function () {
      o === t.length
        ? r.complete()
        : (r.next(t[o++]), r.closed || this.schedule());
    });
  });
}
n();
function Ft(t, e) {
  return new w((r) => {
    let o;
    return (
      T(r, e, () => {
        (o = t[ke]()),
          T(
            r,
            e,
            () => {
              let i, s;
              try {
                ({ value: i, done: s } = o.next());
              } catch (m) {
                r.error(m);
                return;
              }
              s ? r.complete() : r.next(i);
            },
            0,
            !0
          );
      }),
      () => b(o?.return) && o.return()
    );
  });
}
n();
function Ve(t, e) {
  if (!t) throw new Error("Iterable cannot be null");
  return new w((r) => {
    T(r, e, () => {
      let o = t[Symbol.asyncIterator]();
      T(
        r,
        e,
        () => {
          o.next().then((i) => {
            i.done ? r.complete() : r.next(i.value);
          });
        },
        0,
        !0
      );
    });
  });
}
n();
function At(t, e) {
  return Ve(Me(t), e);
}
function Tt(t, e) {
  if (t != null) {
    if (Ce(t)) return Et(t, e);
    if (Ae(t)) return It(t, e);
    if (Te(t)) return Ot(t, e);
    if (Re(t)) return Ve(t, e);
    if (je(t)) return Ft(t, e);
    if (Le(t)) return At(t, e);
  }
  throw Pe(t);
}
n();
function z(t, e) {
  return e ? Tt(t, e) : d(t);
}
n();
n();
n();
function Ne(t) {
  return t && b(t.schedule);
}
function et(t) {
  return t[t.length - 1];
}
function q(t) {
  return b(et(t)) ? t.pop() : void 0;
}
function P(t) {
  return Ne(et(t)) ? t.pop() : void 0;
}
function Ct(t, e) {
  return typeof et(t) == "number" ? t.pop() : e;
}
function Ue(...t) {
  let e = P(t);
  return z(t, e);
}
n();
function Rt(t, e) {
  let r = b(t) ? t : () => t,
    o = (i) => i.error(r());
  return new w(e ? (i) => e.schedule(o, 0, i) : o);
}
n();
var br = (function (t) {
    return (t.NEXT = "N"), (t.ERROR = "E"), (t.COMPLETE = "C"), t;
  })(br || {}),
  $ = class t {
    constructor(e, r, o) {
      (this.kind = e),
        (this.value = r),
        (this.error = o),
        (this.hasValue = e === "N");
    }
    observe(e) {
      return tt(this, e);
    }
    do(e, r, o) {
      let { kind: i, value: s, error: m } = this;
      return i === "N" ? e?.(s) : i === "E" ? r?.(m) : o?.();
    }
    accept(e, r, o) {
      var i;
      return b((i = e) === null || i === void 0 ? void 0 : i.next)
        ? this.observe(e)
        : this.do(e, r, o);
    }
    toObservable() {
      let { kind: e, value: r, error: o } = this,
        i = e === "N" ? Ue(r) : e === "E" ? Rt(() => o) : e === "C" ? W : 0;
      if (!i) throw new TypeError(`Unexpected notification kind ${e}`);
      return i;
    }
    static createNext(e) {
      return new t("N", e);
    }
    static createError(e) {
      return new t("E", void 0, e);
    }
    static createComplete() {
      return t.completeNotification;
    }
  };
$.completeNotification = new $("C");
function tt(t, e) {
  var r, o, i;
  let { kind: s, value: m, error: c } = t;
  if (typeof s != "string")
    throw new TypeError('Invalid notification, missing "kind"');
  s === "N"
    ? (r = e.next) === null || r === void 0 || r.call(e, m)
    : s === "E"
    ? (o = e.error) === null || o === void 0 || o.call(e, c)
    : (i = e.complete) === null || i === void 0 || i.call(e);
}
n();
var G = j(
  (t) =>
    function () {
      t(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    }
);
n();
var rt = j(
  (t) =>
    function () {
      t(this),
        (this.name = "ArgumentOutOfRangeError"),
        (this.message = "argument out of range");
    }
);
n();
var Pt = j(
  (t) =>
    function (r) {
      t(this), (this.name = "NotFoundError"), (this.message = r);
    }
);
n();
var kt = j(
  (t) =>
    function (r) {
      t(this), (this.name = "SequenceError"), (this.message = r);
    }
);
n();
n();
function me(t) {
  return t instanceof Date && !isNaN(t);
}
var xr = j(
  (t) =>
    function (r = null) {
      t(this),
        (this.message = "Timeout has occurred"),
        (this.name = "TimeoutError"),
        (this.info = r);
    }
);
function jt(t, e) {
  let {
    first: r,
    each: o,
    with: i = vr,
    scheduler: s = e ?? C,
    meta: m = null,
  } = me(t) ? { first: t } : typeof t == "number" ? { each: t } : t;
  if (r == null && o == null) throw new TypeError("No timeout provided.");
  return f((c, l) => {
    let a,
      h,
      y = null,
      _ = 0,
      I = (v) => {
        h = T(
          l,
          s,
          () => {
            try {
              a.unsubscribe(),
                d(i({ meta: m, lastValue: y, seen: _ })).subscribe(l);
            } catch (x) {
              l.error(x);
            }
          },
          v
        );
      };
    (a = c.subscribe(
      p(
        l,
        (v) => {
          h?.unsubscribe(), _++, l.next((y = v)), o > 0 && I(o);
        },
        void 0,
        void 0,
        () => {
          h?.closed || h?.unsubscribe(), (y = null);
        }
      )
    )),
      !_ && I(r != null ? (typeof r == "number" ? r : +r - s.now()) : o);
  });
}
function vr(t) {
  throw new xr(t);
}
n();
function M(t, e) {
  return f((r, o) => {
    let i = 0;
    r.subscribe(
      p(o, (s) => {
        o.next(t.call(e, s, i++));
      })
    );
  });
}
n();
n();
var { isArray: yr } = Array,
  { getPrototypeOf: wr, prototype: Sr, keys: _r } = Object;
function Mt(t) {
  if (t.length === 1) {
    let e = t[0];
    if (yr(e)) return { args: e, keys: null };
    if (gr(e)) {
      let r = _r(e);
      return { args: r.map((o) => e[o]), keys: r };
    }
  }
  return { args: t, keys: null };
}
function gr(t) {
  return t && typeof t == "object" && wr(t) === Sr;
}
n();
var { isArray: Er } = Array;
function Or(t, e) {
  return Er(e) ? t(...e) : t(e);
}
function ue(t) {
  return M((e) => Or(t, e));
}
n();
function Lt(t, e) {
  return t.reduce((r, o, i) => ((r[o] = e[i]), r), {});
}
function Nt(...t) {
  let e = P(t),
    r = q(t),
    { args: o, keys: i } = Mt(t);
  if (o.length === 0) return z([], e);
  let s = new w(ot(o, e, i ? (m) => Lt(i, m) : O));
  return r ? s.pipe(ue(r)) : s;
}
function ot(t, e, r = O) {
  return (o) => {
    Vt(
      e,
      () => {
        let { length: i } = t,
          s = new Array(i),
          m = i,
          c = i;
        for (let l = 0; l < i; l++)
          Vt(
            e,
            () => {
              let a = z(t[l], e),
                h = !1;
              a.subscribe(
                p(
                  o,
                  (y) => {
                    (s[l] = y), h || ((h = !0), c--), c || o.next(r(s.slice()));
                  },
                  () => {
                    --m || o.complete();
                  }
                )
              );
            },
            o
          );
      },
      o
    );
  };
}
function Vt(t, e, r) {
  t ? T(r, t, e) : e();
}
n();
n();
function le(t, e, r, o, i, s, m, c) {
  let l = [],
    a = 0,
    h = 0,
    y = !1,
    _ = () => {
      y && !l.length && !a && e.complete();
    },
    I = (x) => (a < o ? v(x) : l.push(x)),
    v = (x) => {
      s && e.next(x), a++;
      let S = !1;
      d(r(x, h++)).subscribe(
        p(
          e,
          (F) => {
            i?.(F), s ? I(F) : e.next(F);
          },
          () => {
            S = !0;
          },
          void 0,
          () => {
            if (S)
              try {
                for (a--; l.length && a < o; ) {
                  let F = l.shift();
                  m ? T(e, m, () => v(F)) : v(F);
                }
                _();
              } catch (F) {
                e.error(F);
              }
          }
        )
      );
    };
  return (
    t.subscribe(
      p(e, I, () => {
        (y = !0), _();
      })
    ),
    () => {
      c?.();
    }
  );
}
function k(t, e, r = 1 / 0) {
  return b(e)
    ? k((o, i) => M((s, m) => e(o, s, i, m))(d(t(o, i))), r)
    : (typeof e == "number" && (r = e), f((o, i) => le(o, i, t, r)));
}
n();
function We(t = 1 / 0) {
  return k(O, t);
}
n();
function ze() {
  return We(1);
}
n();
function Q(...t) {
  return ze()(z(t, P(t)));
}
n();
function L(t = 0, e, r = Oe) {
  let o = -1;
  return (
    e != null && (Ne(e) ? (r = e) : (o = e)),
    new w((i) => {
      let s = me(t) ? +t - r.now() : t;
      s < 0 && (s = 0);
      let m = 0;
      return r.schedule(function () {
        i.closed ||
          (i.next(m++), 0 <= o ? this.schedule(void 0, o) : i.complete());
      }, s);
    })
  );
}
n();
function Ut(t = 0, e = C) {
  return t < 0 && (t = 0), L(t, t, e);
}
n();
n();
var { isArray: Ir } = Array;
function V(t) {
  return t.length === 1 && Ir(t[0]) ? t[0] : t;
}
function Wt(...t) {
  let e = V(t);
  return new w((r) => {
    let o = 0,
      i = () => {
        if (o < e.length) {
          let s;
          try {
            s = d(e[o++]);
          } catch {
            i();
            return;
          }
          let m = new X(r, void 0, g, g);
          s.subscribe(m), m.add(i);
        } else r.complete();
      };
    i();
  });
}
n();
function B(t, e) {
  return f((r, o) => {
    let i = 0;
    r.subscribe(p(o, (s) => t.call(e, s, i++) && o.next(s)));
  });
}
n();
function Wu(...t) {
  return (t = V(t)), t.length === 1 ? d(t[0]) : new w(nt(t));
}
function nt(t) {
  return (e) => {
    let r = [];
    for (let o = 0; r && !e.closed && o < t.length; o++)
      r.push(
        d(t[o]).subscribe(
          p(e, (i) => {
            if (r) {
              for (let s = 0; s < r.length; s++) s !== o && r[s].unsubscribe();
              r = null;
            }
            e.next(i);
          })
        )
      );
  };
}
n();
function De(...t) {
  let e = q(t),
    r = V(t);
  return r.length
    ? new w((o) => {
        let i = r.map(() => []),
          s = r.map(() => !1);
        o.add(() => {
          i = s = null;
        });
        for (let m = 0; !o.closed && m < r.length; m++)
          d(r[m]).subscribe(
            p(
              o,
              (c) => {
                if ((i[m].push(c), i.every((l) => l.length))) {
                  let l = i.map((a) => a.shift());
                  o.next(e ? e(...l) : l),
                    i.some((a, h) => !a.length && s[h]) && o.complete();
                }
              },
              () => {
                (s[m] = !0), !i[m].length && o.complete();
              }
            )
          );
        return () => {
          i = s = null;
        };
      })
    : W;
}
n();
function zt(t) {
  return f((e, r) => {
    let o = !1,
      i = null,
      s = null,
      m = !1,
      c = () => {
        if ((s?.unsubscribe(), (s = null), o)) {
          o = !1;
          let a = i;
          (i = null), r.next(a);
        }
        m && r.complete();
      },
      l = () => {
        (s = null), m && r.complete();
      };
    e.subscribe(
      p(
        r,
        (a) => {
          (o = !0), (i = a), s || d(t(a)).subscribe((s = p(r, c, l)));
        },
        () => {
          (m = !0), (!o || !s || s.closed) && r.complete();
        }
      )
    );
  });
}
n();
function il(t, e = C) {
  return zt(() => L(t, e));
}
n();
function pl(t) {
  return f((e, r) => {
    let o = [];
    return (
      e.subscribe(
        p(
          r,
          (i) => o.push(i),
          () => {
            r.next(o), r.complete();
          }
        )
      ),
      d(t).subscribe(
        p(
          r,
          () => {
            let i = o;
            (o = []), r.next(i);
          },
          g
        )
      ),
      () => {
        o = null;
      }
    );
  });
}
n();
function vl(t, e = null) {
  return (
    (e = e ?? t),
    f((r, o) => {
      let i = [],
        s = 0;
      r.subscribe(
        p(
          o,
          (m) => {
            let c = null;
            s++ % e === 0 && i.push([]);
            for (let l of i)
              l.push(m), t <= l.length && ((c = c ?? []), c.push(l));
            if (c) for (let l of c) R(i, l), o.next(l);
          },
          () => {
            for (let m of i) o.next(m);
            o.complete();
          },
          void 0,
          () => {
            i = null;
          }
        )
      );
    })
  );
}
n();
function Al(t, ...e) {
  var r, o;
  let i = (r = P(e)) !== null && r !== void 0 ? r : C,
    s = (o = e[0]) !== null && o !== void 0 ? o : null,
    m = e[1] || 1 / 0;
  return f((c, l) => {
    let a = [],
      h = !1,
      y = (v) => {
        let { buffer: x, subs: S } = v;
        S.unsubscribe(), R(a, v), l.next(x), h && _();
      },
      _ = () => {
        if (a) {
          let v = new A();
          l.add(v);
          let S = { buffer: [], subs: v };
          a.push(S), T(v, i, () => y(S), t);
        }
      };
    s !== null && s >= 0 ? T(l, i, _, s, !0) : (h = !0), _();
    let I = p(
      l,
      (v) => {
        let x = a.slice();
        for (let S of x) {
          let { buffer: F } = S;
          F.push(v), m <= F.length && y(S);
        }
      },
      () => {
        for (; a?.length; ) l.next(a.shift().buffer);
        I?.unsubscribe(), l.complete(), l.unsubscribe();
      },
      void 0,
      () => (a = null)
    );
    c.subscribe(I);
  });
}
n();
function Vl(t, e) {
  return f((r, o) => {
    let i = [];
    d(t).subscribe(
      p(
        o,
        (s) => {
          let m = [];
          i.push(m);
          let c = new A(),
            l = () => {
              R(i, m), o.next(m), c.unsubscribe();
            };
          c.add(d(e(s)).subscribe(p(o, l, g)));
        },
        g
      )
    ),
      r.subscribe(
        p(
          o,
          (s) => {
            for (let m of i) m.push(s);
          },
          () => {
            for (; i.length > 0; ) o.next(i.shift());
            o.complete();
          }
        )
      );
  });
}
n();
function ql(t) {
  return f((e, r) => {
    let o = null,
      i = null,
      s = () => {
        i?.unsubscribe();
        let m = o;
        (o = []), m && r.next(m), d(t()).subscribe((i = p(r, s, g)));
      };
    s(),
      e.subscribe(
        p(
          r,
          (m) => o?.push(m),
          () => {
            o && r.next(o), r.complete();
          },
          void 0,
          () => (o = i = null)
        )
      );
  });
}
n();
function Fr(t) {
  return f((e, r) => {
    let o = null,
      i = !1,
      s;
    (o = e.subscribe(
      p(r, void 0, void 0, (m) => {
        (s = d(t(m, Fr(t)(e)))),
          o ? (o.unsubscribe(), (o = null), s.subscribe(r)) : (i = !0);
      })
    )),
      i && (o.unsubscribe(), (o = null), s.subscribe(r));
  });
}
n();
n();
function Ye(t, e, r, o, i) {
  return (s, m) => {
    let c = r,
      l = e,
      a = 0;
    s.subscribe(
      p(
        m,
        (h) => {
          let y = a++;
          (l = c ? t(l, h, y) : ((c = !0), h)), o && m.next(l);
        },
        i &&
          (() => {
            c && m.next(l), m.complete();
          })
      )
    );
  };
}
function K(t, e) {
  return f(Ye(t, e, arguments.length >= 2, !1, !0));
}
n();
var Ar = (t, e) => (t.push(e), t);
function Dt() {
  return f((t, e) => {
    K(Ar, [])(t).subscribe(e);
  });
}
n();
n();
function qe(t, e) {
  return ve(
    Dt(),
    k((r) => t(r)),
    e ? ue(e) : O
  );
}
function Yt(t) {
  return qe(Nt, t);
}
n();
var Sc = Yt;
n();
function it(...t) {
  let e = q(t);
  return e
    ? ve(it(...t), ue(e))
    : f((r, o) => {
        ot([r, ...V(t)])(o);
      });
}
n();
function kc(...t) {
  return it(...t);
}
n();
function st(t, e) {
  return b(e) ? k(t, e, 1) : k(t, 1);
}
n();
function Dc(t, e) {
  return b(e) ? st(() => t, e) : st(() => t);
}
n();
function qt(...t) {
  let e = P(t);
  return f((r, o) => {
    ze()(z([r, ...t], e)).subscribe(o);
  });
}
n();
function Hc(...t) {
  return qt(...t);
}
n();
n();
function $t(t) {
  return new w((e) => t.subscribe(e));
}
var Tr = { connector: () => new E() };
function $e(t, e = Tr) {
  let { connector: r } = e;
  return f((o, i) => {
    let s = r();
    d(t($t(s))).subscribe(i), i.add(o.subscribe(s));
  });
}
n();
function pf(t) {
  return K((e, r, o) => (!t || t(r, o) ? e + 1 : e), 0);
}
n();
function yf(t) {
  return f((e, r) => {
    let o = !1,
      i = null,
      s = null,
      m = () => {
        if ((s?.unsubscribe(), (s = null), o)) {
          o = !1;
          let c = i;
          (i = null), r.next(c);
        }
      };
    e.subscribe(
      p(
        r,
        (c) => {
          s?.unsubscribe(),
            (o = !0),
            (i = c),
            (s = p(r, m, g)),
            d(t(c)).subscribe(s);
        },
        () => {
          m(), r.complete();
        },
        void 0,
        () => {
          i = s = null;
        }
      )
    );
  });
}
n();
function Of(t, e = C) {
  return f((r, o) => {
    let i = null,
      s = null,
      m = null,
      c = () => {
        if (i) {
          i.unsubscribe(), (i = null);
          let a = s;
          (s = null), o.next(a);
        }
      };
    function l() {
      let a = m + t,
        h = e.now();
      if (h < a) {
        (i = this.schedule(void 0, a - h)), o.add(i);
        return;
      }
      c();
    }
    r.subscribe(
      p(
        o,
        (a) => {
          (s = a), (m = e.now()), i || ((i = e.schedule(l, t)), o.add(i));
        },
        () => {
          c(), o.complete();
        },
        void 0,
        () => {
          s = i = null;
        }
      )
    );
  });
}
n();
function ce(t) {
  return f((e, r) => {
    let o = !1;
    e.subscribe(
      p(
        r,
        (i) => {
          (o = !0), r.next(i);
        },
        () => {
          o || r.next(t), r.complete();
        }
      )
    );
  });
}
n();
function ee(t) {
  return t <= 0
    ? () => W
    : f((e, r) => {
        let o = 0;
        e.subscribe(
          p(r, (i) => {
            ++o <= t && (r.next(i), t <= o && r.complete());
          })
        );
      });
}
n();
function Gt() {
  return f((t, e) => {
    t.subscribe(p(e, g));
  });
}
n();
function Bt(t) {
  return M(() => t);
}
n();
function mt(t, e) {
  return e
    ? (r) => Q(e.pipe(ee(1), Gt()), r.pipe(mt(t)))
    : k((r, o) => d(t(r, o)).pipe(ee(1), Bt(r)));
}
n();
function rp(t, e = C) {
  let r = L(t, e);
  return mt(() => r);
}
n();
function up() {
  return f((t, e) => {
    t.subscribe(p(e, (r) => tt(r, e)));
  });
}
n();
function hp(t, e) {
  return f((r, o) => {
    let i = new Set();
    r.subscribe(
      p(o, (s) => {
        let m = t ? t(s) : s;
        i.has(m) || (i.add(m), o.next(s));
      })
    ),
      e && d(e).subscribe(p(o, () => i.clear(), g));
  });
}
n();
function Kt(t, e = O) {
  return (
    (t = t ?? Cr),
    f((r, o) => {
      let i,
        s = !0;
      r.subscribe(
        p(o, (m) => {
          let c = e(m);
          (s || !t(i, c)) && ((s = !1), (i = c), o.next(m));
        })
      );
    })
  );
}
function Cr(t, e) {
  return t === e;
}
n();
function Ep(t, e) {
  return Kt((r, o) => (e ? e(r[t], o[t]) : r[t] === o[t]));
}
n();
function fe(t = Rr) {
  return f((e, r) => {
    let o = !1;
    e.subscribe(
      p(
        r,
        (i) => {
          (o = !0), r.next(i);
        },
        () => (o ? r.complete() : r.error(t()))
      )
    );
  });
}
function Rr() {
  return new G();
}
n();
function Vp(t, e) {
  if (t < 0) throw new rt();
  let r = arguments.length >= 2;
  return (o) =>
    o.pipe(
      B((i, s) => s === t),
      ee(1),
      r ? ce(e) : fe(() => new rt())
    );
}
n();
function Dp(...t) {
  return (e) => Q(e, Ue(...t));
}
n();
function Bp(t, e) {
  return f((r, o) => {
    let i = 0;
    r.subscribe(
      p(
        o,
        (s) => {
          t.call(e, s, i++, r) || (o.next(!1), o.complete());
        },
        () => {
          o.next(!0), o.complete();
        }
      )
    );
  });
}
n();
function ut(t, e) {
  return e
    ? (r) => r.pipe(ut((o, i) => d(t(o, i)).pipe(M((s, m) => e(o, s, i, m)))))
    : f((r, o) => {
        let i = 0,
          s = null,
          m = !1;
        r.subscribe(
          p(
            o,
            (c) => {
              s ||
                ((s = p(o, void 0, () => {
                  (s = null), m && o.complete();
                })),
                d(t(c, i++)).subscribe(s));
            },
            () => {
              (m = !0), !s && o.complete();
            }
          )
        );
      });
}
n();
function Zt() {
  return ut(O);
}
n();
var ma = Zt;
n();
function pa(t, e = 1 / 0, r) {
  return (
    (e = (e || 0) < 1 ? 1 / 0 : e), f((o, i) => le(o, i, t, e, void 0, !0, r))
  );
}
n();
function ba(t) {
  return f((e, r) => {
    try {
      e.subscribe(r);
    } finally {
      r.add(t);
    }
  });
}
n();
function Sa(t, e) {
  return f(lt(t, e, "value"));
}
function lt(t, e, r) {
  let o = r === "index";
  return (i, s) => {
    let m = 0;
    i.subscribe(
      p(
        s,
        (c) => {
          let l = m++;
          t.call(e, c, l, i) && (s.next(o ? l : c), s.complete());
        },
        () => {
          s.next(o ? -1 : void 0), s.complete();
        }
      )
    );
  };
}
n();
function Ia(t, e) {
  return f(lt(t, e, "index"));
}
n();
function Ma(t, e) {
  let r = arguments.length >= 2;
  return (o) =>
    o.pipe(
      t ? B((i, s) => t(i, s, o)) : O,
      ee(1),
      r ? ce(e) : fe(() => new G())
    );
}
n();
function Ya(t, e, r, o) {
  return f((i, s) => {
    let m;
    !e || typeof e == "function"
      ? (m = e)
      : ({ duration: r, element: m, connector: o } = e);
    let c = new Map(),
      l = (v) => {
        c.forEach(v), v(s);
      },
      a = (v) => l((x) => x.error(v)),
      h = 0,
      y = !1,
      _ = new X(
        s,
        (v) => {
          try {
            let x = t(v),
              S = c.get(x);
            if (!S) {
              c.set(x, (S = o ? o() : new E()));
              let F = I(x, S);
              if ((s.next(F), r)) {
                let N = p(
                  S,
                  () => {
                    S.complete(), N?.unsubscribe();
                  },
                  void 0,
                  void 0,
                  () => c.delete(x)
                );
                _.add(d(r(F)).subscribe(N));
              }
            }
            S.next(m ? m(v) : v);
          } catch (x) {
            a(x);
          }
        },
        () => l((v) => v.complete()),
        a,
        () => c.clear(),
        () => ((y = !0), h === 0)
      );
    i.subscribe(_);
    function I(v, x) {
      let S = new w((F) => {
        h++;
        let N = x.subscribe(F);
        return () => {
          N.unsubscribe(), --h === 0 && y && _.unsubscribe();
        };
      });
      return (S.key = v), S;
    }
  });
}
n();
function Ka() {
  return f((t, e) => {
    t.subscribe(
      p(
        e,
        () => {
          e.next(!1), e.complete();
        },
        () => {
          e.next(!0), e.complete();
        }
      )
    );
  });
}
n();
function Jt(t) {
  return t <= 0
    ? () => W
    : f((e, r) => {
        let o = [];
        e.subscribe(
          p(
            r,
            (i) => {
              o.push(i), t < o.length && o.shift();
            },
            () => {
              for (let i of o) r.next(i);
              r.complete();
            },
            void 0,
            () => {
              o = null;
            }
          )
        );
      });
}
n();
function ud(t, e) {
  let r = arguments.length >= 2;
  return (o) =>
    o.pipe(
      t ? B((i, s) => t(i, s, o)) : O,
      Jt(1),
      r ? ce(e) : fe(() => new G())
    );
}
n();
function dd() {
  return f((t, e) => {
    t.subscribe(
      p(
        e,
        (r) => {
          e.next($.createNext(r));
        },
        () => {
          e.next($.createComplete()), e.complete();
        },
        (r) => {
          e.next($.createError(r)), e.complete();
        }
      )
    );
  });
}
n();
function yd(t) {
  return K(b(t) ? (e, r) => (t(e, r) > 0 ? e : r) : (e, r) => (e > r ? e : r));
}
n();
var gd = k;
n();
function Ad(t, e, r = 1 / 0) {
  return b(e)
    ? k(() => t, e, r)
    : (typeof e == "number" && (r = e), k(() => t, r));
}
n();
function kd(t, e, r = 1 / 0) {
  return f((o, i) => {
    let s = e;
    return le(
      o,
      i,
      (m, c) => t(s, m, c),
      r,
      (m) => {
        s = m;
      },
      !1,
      void 0,
      () => (s = null)
    );
  });
}
n();
function Xt(...t) {
  let e = P(t),
    r = Ct(t, 1 / 0);
  return (
    (t = V(t)),
    f((o, i) => {
      We(r)(z([o, ...t], e)).subscribe(i);
    })
  );
}
n();
function qd(...t) {
  return Xt(...t);
}
n();
function Zd(t) {
  return K(b(t) ? (e, r) => (t(e, r) < 0 ? e : r) : (e, r) => (e < r ? e : r));
}
n();
function Ge(t, e) {
  let r = b(t) ? t : () => t;
  return b(e) ? $e(e, { connector: r }) : (o) => new Y(o, r);
}
n();
function Pr(...t) {
  let e = V(t);
  return (r) => Wt(r, ...e);
}
var ih = Pr;
n();
function ch() {
  return f((t, e) => {
    let r,
      o = !1;
    t.subscribe(
      p(e, (i) => {
        let s = r;
        (r = i), o && e.next([s, i]), (o = !0);
      })
    );
  });
}
n();
function dh(...t) {
  let e = t.length;
  if (e === 0) throw new Error("list of properties cannot be empty.");
  return M((r) => {
    let o = r;
    for (let i = 0; i < e; i++) {
      let s = o?.[t[i]];
      if (typeof s < "u") o = s;
      else return;
    }
    return o;
  });
}
n();
function wh(t) {
  return t ? (e) => $e(t)(e) : (e) => Ge(new E())(e);
}
n();
function Oh(t) {
  return (e) => {
    let r = new we(t);
    return new Y(e, () => r);
  };
}
n();
function Ch() {
  return (t) => {
    let e = new Se();
    return new Y(t, () => e);
  };
}
n();
function Lh(t, e, r, o) {
  r && !b(r) && (o = r);
  let i = b(r) ? r : void 0;
  return (s) => Ge(new ie(t, e, o), i)(s);
}
n();
function Dh(...t) {
  return t.length
    ? f((e, r) => {
        nt([e, ...t])(r);
      })
    : O;
}
n();
function Jh(t) {
  let e = 1 / 0,
    r;
  return (
    t != null &&
      (typeof t == "object" ? ({ count: e = 1 / 0, delay: r } = t) : (e = t)),
    e <= 0
      ? () => W
      : f((o, i) => {
          let s = 0,
            m,
            c = () => {
              if ((m?.unsubscribe(), (m = null), r != null)) {
                let a = typeof r == "number" ? L(r) : d(r(s)),
                  h = p(i, () => {
                    h.unsubscribe(), l();
                  });
                a.subscribe(h);
              } else l();
            },
            l = () => {
              let a = !1;
              (m = o.subscribe(
                p(i, void 0, () => {
                  ++s < e ? (m ? c() : (a = !0)) : i.complete();
                })
              )),
                a && c();
            };
          l();
        })
  );
}
n();
function ob(t) {
  return f((e, r) => {
    let o,
      i = !1,
      s,
      m = !1,
      c = !1,
      l = () => c && m && (r.complete(), !0),
      a = () => (
        s ||
          ((s = new E()),
          d(t(s)).subscribe(
            p(
              r,
              () => {
                o ? h() : (i = !0);
              },
              () => {
                (m = !0), l();
              }
            )
          )),
        s
      ),
      h = () => {
        (c = !1),
          (o = e.subscribe(
            p(r, void 0, () => {
              (c = !0), !l() && a().next();
            })
          )),
          i && (o.unsubscribe(), (o = null), (i = !1), h());
      };
    h();
  });
}
n();
function fb(t = 1 / 0) {
  let e;
  t && typeof t == "object" ? (e = t) : (e = { count: t });
  let { count: r = 1 / 0, delay: o, resetOnSuccess: i = !1 } = e;
  return r <= 0
    ? O
    : f((s, m) => {
        let c = 0,
          l,
          a = () => {
            let h = !1;
            (l = s.subscribe(
              p(
                m,
                (y) => {
                  i && (c = 0), m.next(y);
                },
                void 0,
                (y) => {
                  if (c++ < r) {
                    let _ = () => {
                      l ? (l.unsubscribe(), (l = null), a()) : (h = !0);
                    };
                    if (o != null) {
                      let I = typeof o == "number" ? L(o) : d(o(y, c)),
                        v = p(
                          m,
                          () => {
                            v.unsubscribe(), _();
                          },
                          () => {
                            m.complete();
                          }
                        );
                      I.subscribe(v);
                    } else _();
                  } else m.error(y);
                }
              )
            )),
              h && (l.unsubscribe(), (l = null), a());
          };
        a();
      });
}
n();
function vb(t) {
  return f((e, r) => {
    let o,
      i = !1,
      s,
      m = () => {
        (o = e.subscribe(
          p(r, void 0, void 0, (c) => {
            s ||
              ((s = new E()),
              d(t(s)).subscribe(p(r, () => (o ? m() : (i = !0))))),
              s && s.next(c);
          })
        )),
          i && (o.unsubscribe(), (o = null), (i = !1), m());
      };
    m();
  });
}
n();
function Ht(t) {
  return f((e, r) => {
    let o = !1,
      i = null;
    e.subscribe(
      p(r, (s) => {
        (o = !0), (i = s);
      })
    ),
      d(t).subscribe(
        p(
          r,
          () => {
            if (o) {
              o = !1;
              let s = i;
              (i = null), r.next(s);
            }
          },
          g
        )
      );
  });
}
n();
function Cb(t, e = C) {
  return Ht(Ut(t, e));
}
n();
function Mb(t, e) {
  return f(Ye(t, e, arguments.length >= 2, !0));
}
n();
function zb(t, e = (r, o) => r === o) {
  return f((r, o) => {
    let i = Qt(),
      s = Qt(),
      m = (l) => {
        o.next(l), o.complete();
      },
      c = (l, a) => {
        let h = p(
          o,
          (y) => {
            let { buffer: _, complete: I } = a;
            _.length === 0
              ? I
                ? m(!1)
                : l.buffer.push(y)
              : !e(y, _.shift()) && m(!1);
          },
          () => {
            l.complete = !0;
            let { complete: y, buffer: _ } = a;
            y && m(_.length === 0), h?.unsubscribe();
          }
        );
        return h;
      };
    r.subscribe(c(i, s)), d(t).subscribe(c(s, i));
  });
}
function Qt() {
  return { buffer: [], complete: !1 };
}
n();
function er(t = {}) {
  let {
    connector: e = () => new E(),
    resetOnError: r = !0,
    resetOnComplete: o = !0,
    resetOnRefCountZero: i = !0,
  } = t;
  return (s) => {
    let m,
      c,
      l,
      a = 0,
      h = !1,
      y = !1,
      _ = () => {
        c?.unsubscribe(), (c = void 0);
      },
      I = () => {
        _(), (m = l = void 0), (h = y = !1);
      },
      v = () => {
        let x = m;
        I(), x?.unsubscribe();
      };
    return f((x, S) => {
      a++, !y && !h && _();
      let F = (l = l ?? e());
      S.add(() => {
        a--, a === 0 && !y && !h && (c = ct(v, i));
      }),
        F.subscribe(S),
        !m &&
          a > 0 &&
          ((m = new D({
            next: (N) => F.next(N),
            error: (N) => {
              (y = !0), _(), (c = ct(I, r, N)), F.error(N);
            },
            complete: () => {
              (h = !0), _(), (c = ct(I, o)), F.complete();
            },
          })),
          d(x).subscribe(m));
    })(s);
  };
}
function ct(t, e, ...r) {
  if (e === !0) {
    t();
    return;
  }
  if (e === !1) return;
  let o = new D({
    next: () => {
      o.unsubscribe(), t();
    },
  });
  return d(e(...r)).subscribe(o);
}
n();
function Hb(t, e, r) {
  let o,
    i = !1;
  return (
    t && typeof t == "object"
      ? ({
          bufferSize: o = 1 / 0,
          windowTime: e = 1 / 0,
          refCount: i = !1,
          scheduler: r,
        } = t)
      : (o = t ?? 1 / 0),
    er({
      connector: () => new ie(o, e, r),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: i,
    })
  );
}
n();
function sx(t) {
  return f((e, r) => {
    let o = !1,
      i,
      s = !1,
      m = 0;
    e.subscribe(
      p(
        r,
        (c) => {
          (s = !0),
            (!t || t(c, m++, e)) &&
              (o && r.error(new kt("Too many matching values")),
              (o = !0),
              (i = c));
        },
        () => {
          o
            ? (r.next(i), r.complete())
            : r.error(s ? new Pt("No matching values") : new G());
        }
      )
    );
  });
}
n();
function cx(t) {
  return B((e, r) => t <= r);
}
n();
function bx(t) {
  return t <= 0
    ? O
    : f((e, r) => {
        let o = new Array(t),
          i = 0;
        return (
          e.subscribe(
            p(r, (s) => {
              let m = i++;
              if (m < t) o[m] = s;
              else {
                let c = m % t,
                  l = o[c];
                (o[c] = s), r.next(l);
              }
            })
          ),
          () => {
            o = null;
          }
        );
      });
}
n();
function gx(t) {
  return f((e, r) => {
    let o = !1,
      i = p(
        r,
        () => {
          i?.unsubscribe(), (o = !0);
        },
        g
      );
    d(t).subscribe(i), e.subscribe(p(r, (s) => o && r.next(s)));
  });
}
n();
function Ax(t) {
  return f((e, r) => {
    let o = !1,
      i = 0;
    e.subscribe(p(r, (s) => (o || (o = !t(s, i++))) && r.next(s)));
  });
}
n();
function jx(...t) {
  let e = P(t);
  return f((r, o) => {
    (e ? Q(t, r, e) : Q(t, r)).subscribe(o);
  });
}
n();
function te(t, e) {
  return f((r, o) => {
    let i = null,
      s = 0,
      m = !1,
      c = () => m && !i && o.complete();
    r.subscribe(
      p(
        o,
        (l) => {
          i?.unsubscribe();
          let a = 0,
            h = s++;
          d(t(l, h)).subscribe(
            (i = p(
              o,
              (y) => o.next(e ? e(l, y, h, a++) : y),
              () => {
                (i = null), c();
              }
            ))
          );
        },
        () => {
          (m = !0), c();
        }
      )
    );
  });
}
n();
function qx() {
  return te(O);
}
n();
function Zx(t, e) {
  return b(e) ? te(() => t, e) : te(() => t);
}
n();
function ev(t, e) {
  return f((r, o) => {
    let i = e;
    return (
      te(
        (s, m) => t(i, s, m),
        (s, m) => ((i = m), m)
      )(r).subscribe(o),
      () => {
        i = null;
      }
    );
  });
}
n();
function mv(t) {
  return f((e, r) => {
    d(t).subscribe(p(r, () => r.complete(), g)), !r.closed && e.subscribe(r);
  });
}
n();
function pv(t, e = !1) {
  return f((r, o) => {
    let i = 0;
    r.subscribe(
      p(o, (s) => {
        let m = t(s, i++);
        (m || e) && o.next(s), !m && o.complete();
      })
    );
  });
}
n();
function yv(t, e, r) {
  let o = b(t) || e || r ? { next: t, error: e, complete: r } : t;
  return o
    ? f((i, s) => {
        var m;
        (m = o.subscribe) === null || m === void 0 || m.call(o);
        let c = !0;
        i.subscribe(
          p(
            s,
            (l) => {
              var a;
              (a = o.next) === null || a === void 0 || a.call(o, l), s.next(l);
            },
            () => {
              var l;
              (c = !1),
                (l = o.complete) === null || l === void 0 || l.call(o),
                s.complete();
            },
            (l) => {
              var a;
              (c = !1),
                (a = o.error) === null || a === void 0 || a.call(o, l),
                s.error(l);
            },
            () => {
              var l, a;
              c && ((l = o.unsubscribe) === null || l === void 0 || l.call(o)),
                (a = o.finalize) === null || a === void 0 || a.call(o);
            }
          )
        );
      })
    : O;
}
n();
function tr(t, e) {
  return f((r, o) => {
    let { leading: i = !0, trailing: s = !1 } = e ?? {},
      m = !1,
      c = null,
      l = null,
      a = !1,
      h = () => {
        l?.unsubscribe(), (l = null), s && (I(), a && o.complete());
      },
      y = () => {
        (l = null), a && o.complete();
      },
      _ = (v) => (l = d(t(v)).subscribe(p(o, h, y))),
      I = () => {
        if (m) {
          m = !1;
          let v = c;
          (c = null), o.next(v), !a && _(v);
        }
      };
    r.subscribe(
      p(
        o,
        (v) => {
          (m = !0), (c = v), !(l && !l.closed) && (i ? I() : _(v));
        },
        () => {
          (a = !0), !(s && m && l && !l.closed) && o.complete();
        }
      )
    );
  });
}
n();
function Cv(t, e = C, r) {
  let o = L(t, e);
  return tr(() => o, r);
}
n();
function Lv(t = C) {
  return f((e, r) => {
    let o = t.now();
    e.subscribe(
      p(r, (i) => {
        let s = t.now(),
          m = s - o;
        (o = s), r.next(new ft(i, m));
      })
    );
  });
}
var ft = class {
  constructor(e, r) {
    (this.value = e), (this.interval = r);
  }
};
n();
function Dv(t, e, r) {
  let o, i, s;
  if (((r = r ?? Oe), me(t) ? (o = t) : typeof t == "number" && (i = t), e))
    s = () => e;
  else throw new TypeError("No observable provided to switch to");
  if (o == null && i == null) throw new TypeError("No timeout provided.");
  return jt({ first: o, each: i, scheduler: r, with: s });
}
n();
function Bv(t = H) {
  return M((e) => ({ value: e, timestamp: t.now() }));
}
n();
function ty(t) {
  return f((e, r) => {
    let o = new E();
    r.next(o.asObservable());
    let i = (s) => {
      o.error(s), r.error(s);
    };
    return (
      e.subscribe(
        p(
          r,
          (s) => o?.next(s),
          () => {
            o.complete(), r.complete();
          },
          i
        )
      ),
      d(t).subscribe(
        p(
          r,
          () => {
            o.complete(), r.next((o = new E()));
          },
          g,
          i
        )
      ),
      () => {
        o?.unsubscribe(), (o = null);
      }
    );
  });
}
n();
function my(t, e = 0) {
  let r = e > 0 ? e : t;
  return f((o, i) => {
    let s = [new E()],
      m = [],
      c = 0;
    i.next(s[0].asObservable()),
      o.subscribe(
        p(
          i,
          (l) => {
            for (let h of s) h.next(l);
            let a = c - t + 1;
            if (
              (a >= 0 && a % r === 0 && s.shift().complete(), ++c % r === 0)
            ) {
              let h = new E();
              s.push(h), i.next(h.asObservable());
            }
          },
          () => {
            for (; s.length > 0; ) s.shift().complete();
            i.complete();
          },
          (l) => {
            for (; s.length > 0; ) s.shift().error(l);
            i.error(l);
          },
          () => {
            (m = null), (s = null);
          }
        )
      );
  });
}
n();
function vy(t, ...e) {
  var r, o;
  let i = (r = P(e)) !== null && r !== void 0 ? r : C,
    s = (o = e[0]) !== null && o !== void 0 ? o : null,
    m = e[1] || 1 / 0;
  return f((c, l) => {
    let a = [],
      h = !1,
      y = (x) => {
        let { window: S, subs: F } = x;
        S.complete(), F.unsubscribe(), R(a, x), h && _();
      },
      _ = () => {
        if (a) {
          let x = new A();
          l.add(x);
          let S = new E(),
            F = { window: S, subs: x, seen: 0 };
          a.push(F), l.next(S.asObservable()), T(x, i, () => y(F), t);
        }
      };
    s !== null && s >= 0 ? T(l, i, _, s, !0) : (h = !0), _();
    let I = (x) => a.slice().forEach(x),
      v = (x) => {
        I(({ window: S }) => x(S)), x(l), l.unsubscribe();
      };
    return (
      c.subscribe(
        p(
          l,
          (x) => {
            I((S) => {
              S.window.next(x), m <= ++S.seen && y(S);
            });
          },
          () => v((x) => x.complete()),
          (x) => v((S) => S.error(x))
        )
      ),
      () => {
        a = null;
      }
    );
  });
}
n();
function Ay(t, e) {
  return f((r, o) => {
    let i = [],
      s = (m) => {
        for (; 0 < i.length; ) i.shift().error(m);
        o.error(m);
      };
    d(t).subscribe(
      p(
        o,
        (m) => {
          let c = new E();
          i.push(c);
          let l = new A(),
            a = () => {
              R(i, c), c.complete(), l.unsubscribe();
            },
            h;
          try {
            h = d(e(m));
          } catch (y) {
            s(y);
            return;
          }
          o.next(c.asObservable()), l.add(h.subscribe(p(o, a, g, s)));
        },
        g
      )
    ),
      r.subscribe(
        p(
          o,
          (m) => {
            let c = i.slice();
            for (let l of c) l.next(m);
          },
          () => {
            for (; 0 < i.length; ) i.shift().complete();
            o.complete();
          },
          s,
          () => {
            for (; 0 < i.length; ) i.shift().unsubscribe();
          }
        )
      );
  });
}
n();
function My(t) {
  return f((e, r) => {
    let o,
      i,
      s = (c) => {
        o.error(c), r.error(c);
      },
      m = () => {
        i?.unsubscribe(),
          o?.complete(),
          (o = new E()),
          r.next(o.asObservable());
        let c;
        try {
          c = d(t());
        } catch (l) {
          s(l);
          return;
        }
        c.subscribe((i = p(r, m, m, s)));
      };
    m(),
      e.subscribe(
        p(
          r,
          (c) => o.next(c),
          () => {
            o.complete(), r.complete();
          },
          s,
          () => {
            i?.unsubscribe(), (o = null);
          }
        )
      );
  });
}
n();
function qy(...t) {
  let e = q(t);
  return f((r, o) => {
    let i = t.length,
      s = new Array(i),
      m = t.map(() => !1),
      c = !1;
    for (let l = 0; l < i; l++)
      d(t[l]).subscribe(
        p(
          o,
          (a) => {
            (s[l] = a),
              !c && !m[l] && ((m[l] = !0), (c = m.every(O)) && (m = null));
          },
          g
        )
      );
    r.subscribe(
      p(o, (l) => {
        if (c) {
          let a = [l, ...s];
          o.next(e ? e(...a) : a);
        }
      })
    );
  });
}
n();
function Zy(t) {
  return qe(De, t);
}
n();
function rr(...t) {
  return f((e, r) => {
    De(e, ...t).subscribe(r);
  });
}
n();
function o0(...t) {
  return rr(...t);
}
n();
function s0(t, e) {
  return (r, o) => !t.call(e, r, o);
}
export {
  b as a,
  de as b,
  A as c,
  U as d,
  g as e,
  J as f,
  D as g,
  ne as h,
  O as i,
  ve as j,
  w as k,
  p as l,
  St as m,
  Y as n,
  _t as o,
  E as p,
  ye as q,
  we as r,
  ie as s,
  Se as t,
  ge as u,
  se as v,
  Ee as w,
  C as x,
  Oe as y,
  W as z,
  Dn as A,
  Ne as B,
  q as C,
  P as D,
  Ct as E,
  Ae as F,
  d as G,
  Ie as H,
  Fe as I,
  Ft as J,
  Tt as K,
  z as L,
  Ue as M,
  Rt as N,
  br as O,
  $ as P,
  G as Q,
  rt as R,
  Pt as S,
  kt as T,
  xr as U,
  jt as V,
  M as W,
  ue as X,
  Mt as Y,
  Lt as Z,
  Nt as _,
  k as $,
  We as aa,
  ze as ba,
  Q as ca,
  L as da,
  Ut as ea,
  V as fa,
  Wt as ga,
  s0 as ha,
  B as ia,
  Wu as ja,
  De as ka,
  zt as la,
  il as ma,
  pl as na,
  vl as oa,
  Al as pa,
  Vl as qa,
  ql as ra,
  Fr as sa,
  K as ta,
  Dt as ua,
  Yt as va,
  Sc as wa,
  it as xa,
  kc as ya,
  st as za,
  Dc as Aa,
  qt as Ba,
  Hc as Ca,
  $e as Da,
  pf as Ea,
  yf as Fa,
  Of as Ga,
  ce as Ha,
  ee as Ia,
  Gt as Ja,
  Bt as Ka,
  mt as La,
  rp as Ma,
  up as Na,
  hp as Oa,
  Kt as Pa,
  Ep as Qa,
  fe as Ra,
  Vp as Sa,
  Dp as Ta,
  Bp as Ua,
  ut as Va,
  Zt as Wa,
  ma as Xa,
  pa as Ya,
  ba as Za,
  Sa as _a,
  Ia as $a,
  Ma as ab,
  Ya as bb,
  Ka as cb,
  Jt as db,
  ud as eb,
  dd as fb,
  yd as gb,
  gd as hb,
  Ad as ib,
  kd as jb,
  Xt as kb,
  qd as lb,
  Zd as mb,
  Ge as nb,
  Pr as ob,
  ih as pb,
  ch as qb,
  dh as rb,
  wh as sb,
  Oh as tb,
  Ch as ub,
  Lh as vb,
  Dh as wb,
  Jh as xb,
  ob as yb,
  fb as zb,
  vb as Ab,
  Ht as Bb,
  Cb,
  Mb as Db,
  zb as Eb,
  er as Fb,
  Hb as Gb,
  sx as Hb,
  cx as Ib,
  bx as Jb,
  gx as Kb,
  Ax as Lb,
  jx as Mb,
  te as Nb,
  qx as Ob,
  Zx as Pb,
  ev as Qb,
  mv as Rb,
  pv as Sb,
  yv as Tb,
  tr as Ub,
  Cv as Vb,
  Lv as Wb,
  Dv as Xb,
  Bv as Yb,
  ty as Zb,
  my as _b,
  vy as $b,
  Ay as ac,
  My as bc,
  qy as cc,
  Zy as dc,
  rr as ec,
  o0 as fc,
};
