import { l as f } from "./chunk-ABQK56SH.js";
import { q as a } from "./chunk-FRM3FMZU.js";
import { q as s } from "./chunk-KXQY476L.js";
s();
var p = class n {
  transform(r, t = "USD", u = "$", c = "1.0-2") {
    if (r == null) return null;
    if (r > 0 && r < 1) return "\u22480";
    let e = +r,
      m = ["", "K", "M", "B", "T", "P", "E"],
      i = Math.floor(Math.log(Math.abs(e)) / Math.log(1e3)),
      o = e / Math.pow(1e3, i);
    return isFinite(o) ? new f("en_US").transform(o, t, u, c) + m[i] : "/";
  }
  static ɵfac = function (t) {
    return new (t || n)();
  };
  static ɵpipe = a({
    name: "currencyShort",
    type: n,
    pure: !0,
    standalone: !0,
  });
};
export { p as a };
