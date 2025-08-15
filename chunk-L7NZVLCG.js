import { f as w, q as y } from "./chunk-KXQY476L.js";
var q = w((k, p) => {
  "use strict";
  y();
  var n = {
    single_source_shortest_paths: function (o, t, e) {
      var r = {},
        u = {};
      u[t] = 0;
      var i = n.PriorityQueue.make();
      i.push(t, 0);
      for (var a, c, s, h, _, d, f, v, l; !i.empty(); ) {
        (a = i.pop()), (c = a.value), (h = a.cost), (_ = o[c] || {});
        for (s in _)
          _.hasOwnProperty(s) &&
            ((d = _[s]),
            (f = h + d),
            (v = u[s]),
            (l = typeof u[s] > "u"),
            (l || v > f) && ((u[s] = f), i.push(s, f), (r[s] = c)));
      }
      if (typeof e < "u" && typeof u[e] > "u") {
        var m = ["Could not find a path from ", t, " to ", e, "."].join("");
        throw new Error(m);
      }
      return r;
    },
    extract_shortest_path_from_predecessor_list: function (o, t) {
      for (var e = [], r = t, u; r; ) e.push(r), (u = o[r]), (r = o[r]);
      return e.reverse(), e;
    },
    find_path: function (o, t, e) {
      var r = n.single_source_shortest_paths(o, t, e);
      return n.extract_shortest_path_from_predecessor_list(r, e);
    },
    PriorityQueue: {
      make: function (o) {
        var t = n.PriorityQueue,
          e = {},
          r;
        o = o || {};
        for (r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        return (e.queue = []), (e.sorter = o.sorter || t.default_sorter), e;
      },
      default_sorter: function (o, t) {
        return o.cost - t.cost;
      },
      push: function (o, t) {
        var e = { value: o, cost: t };
        this.queue.push(e), this.queue.sort(this.sorter);
      },
      pop: function () {
        return this.queue.shift();
      },
      empty: function () {
        return this.queue.length === 0;
      },
    },
  };
  typeof p < "u" && (p.exports = n);
});
export { q as a };
