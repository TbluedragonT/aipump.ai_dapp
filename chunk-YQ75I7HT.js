import {
  H as s,
  I as m,
  N as t,
  O as u,
  Q as b,
  R as h,
  S as L,
  ua as d,
  xa as A,
} from "./chunk-ABQK56SH.js";
import { j as l } from "./chunk-FRM3FMZU.js";
import { N as c, Nb as F, Tb as p, sa as P } from "./chunk-23ZZ27XK.js";
import { q as f } from "./chunk-KXQY476L.js";
f();
var x = {
    loading: !1,
    loadingMore: !1,
    agents: [],
    searchedAgents: [],
    searchAgentsLoading: !1,
    analytics: void 0,
    paginationAndFilter: { perPage: 15, page: 0, totalPages: 0, filter: "all" },
    spotlight: [],
  },
  _ = u(
    { providedIn: "root" },
    L(x),
    b((a, r = l(d), g = l(A)) => ({
      onInit() {
        m(r.address)
          .pipe(
            s(),
            p(() => {
              t(a, (e) => ({ loading: !0, agents: [] }));
            }),
            F((e) => g.agent.list(e ?? "0x0", "", a.paginationAndFilter()))
          )
          .subscribe({
            next: (e) => {
              t(a, (i) => ({
                agents: e.agents,
                paginationAndFilter: {
                  page: a.paginationAndFilter().page,
                  perPage: a.paginationAndFilter().perPage,
                  totalPages: e.totalPages,
                  filter: a.paginationAndFilter().filter,
                },
                loading: !1,
              }));
            },
            error: (e) => {
              console.error(e), t(a, (i) => ({ loading: !1 }));
            },
          }),
          g.analyticsData
            .get()
            .pipe(s())
            .subscribe({
              next: (e) => {
                t(a, (i) => ({ analytics: e }));
              },
              error: (e) => {
                console.error(e);
              },
            }),
          g.agent
            .spotlight()
            .pipe(s())
            .subscribe({
              next: (e) => {
                t(a, (i) => ({ spotlight: e }));
              },
              error: (e) => {
                console.error(e);
              },
            });
      },
    })),
    h((a, r = l(d), g = l(A)) => ({
      refreshAgents(e = !1) {
        let i = r.address();
        e || t(a, (n) => ({ loading: !0, agents: [] })),
          g.agent.list(i ?? "0x0", "", a.paginationAndFilter()).subscribe({
            next: (n) => {
              t(a, (o) => ({
                agents: e ? [...a.agents(), ...n.agents] : n.agents,
                paginationAndFilter: {
                  page: a.paginationAndFilter().page,
                  perPage: a.paginationAndFilter().perPage,
                  totalPages: n.totalPages,
                  filter: a.paginationAndFilter().filter,
                },
                loading: !1,
              }));
            },
            error: (n) => {
              console.error(n), t(a, (o) => ({ loading: !1 }));
            },
          }),
          g.analyticsData.get().subscribe({
            next: (n) => {
              t(a, (o) => ({ analytics: n }));
            },
            error: (n) => {
              console.error(n);
            },
          });
      },
      searchAgents(e) {
        let i = r.address();
        t(a, (n) => ({ searchAgentsLoading: !0, searchAgents: [] })),
          g.agent.list(i ?? "0x0", e, a.paginationAndFilter()).subscribe({
            next: (n) => {
              t(a, (o) => ({
                searchedAgents: n.agents,
                paginationAndFilter: {
                  page: a.paginationAndFilter().page,
                  perPage: a.paginationAndFilter().perPage,
                  totalPages: n.totalPages,
                  filter: a.paginationAndFilter().filter,
                },
                searchAgentsLoading: !1,
              }));
            },
            error: (n) => {
              console.error(n), t(a, (o) => ({ searchAgentsLoading: !1 }));
            },
          });
      },
      updatePaginationAndFilter(e) {
        t(a, (i) => ({ paginationAndFilter: e }));
      },
      loadMoreAgents() {
        return (
          t(a, (e) => ({
            paginationAndFilter: {
              perPage: a.paginationAndFilter().perPage,
              page: a.paginationAndFilter().page + 1,
              filter: a.paginationAndFilter().filter,
              totalPages: a.paginationAndFilter().totalPages,
            },
            loadingMore: !0,
          })),
          g.agent
            .list(r.address() ?? "0x0", "", {
              perPage: a.paginationAndFilter().perPage,
              page: a.paginationAndFilter().page,
              filter: a.paginationAndFilter().filter,
            })
            .pipe(
              p((e) => {
                t(a, (i) => ({
                  agents: [...a.agents(), ...e.agents],
                  paginationAndFilter: {
                    perPage: a.paginationAndFilter().perPage,
                    page: a.paginationAndFilter().page,
                    filter: a.paginationAndFilter().filter,
                    totalPages: e.totalPages,
                  },
                  loadingMore: !1,
                }));
              }),
              P(
                (e) => (
                  t(a, (i) => ({ loadingMore: !1 })), c(() => new Error(e))
                )
              )
            )
        );
      },
    }))
  );
export { _ as a };
