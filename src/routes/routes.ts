import { lazy } from "solid-js";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("@/views/home")),
  },
  {
    path: "/landings",
    children: [
      { path: "/app", component: lazy(() => import("@/views/landings/app")) },
      { path: "/saas-modern", component: lazy(() => import("@/views/landings/saas-modern")) },
      { path: "/saas-classic", component: lazy(() => import("@/views/landings/saas-classic")) },
      { path: "/startup", component: lazy(() => import("@/views/landings/startup")) },
      { path: "/software", component: lazy(() => import("@/views/landings/software")) },
      { path: "/agency", component: lazy(() => import("@/views/landings/agency")) },
      { path: "/coworking", component: lazy(() => import("@/views/landings/coworking")) },
      { path: "/crypto", component: lazy(() => import("@/views/landings/crypto")) },
      { path: "/marketing", component: lazy(() => import("@/views/landings/marketing")) },
      { path: "/portfolio", component: lazy(() => import("@/views/landings/portfolio")) },
    ],
  },
  {
    path: "/auth",
    children: [
      { path: "/login", component: lazy(() => import("@/views/auth/login")) },
      // { path: "/register", component: lazy(() => import("@/views/auth/register")) }, // removed
      { path: "/forgot-password", component: lazy(() => import("@/views/auth/forgot-password")) },
      { path: "/confirm-mail", component: lazy(() => import("@/views/auth/confirm-mail")) },
    ],
  },
  {
    path: "/admin",
    children: [
      { path: "/dashboard", component: lazy(() => import("@/views/admin/dashboard")) },
      { path: "/settings", component: lazy(() => import("@/views/admin/settings")) },
    ],
  },
  {
    path: "/pages",
    children: [
      {
        path: "/blog",
        children: [
          { path: "/", component: lazy(() => import("@/views/pages/blog")) },
          { path: "/post", component: lazy(() => import("@/views/pages/blog-post")) },
        ],
      },
      { path: "/company", component: lazy(() => import("@/views/pages/company")) },
      { path: "/contact", component: lazy(() => import("@/views/pages/contact")) },
      { path: "/career", component: lazy(() => import("@/views/pages/career")) },
      { path: "/pricing", component: lazy(() => import("@/views/pages/pricing")) },
      { path: "/help", component: lazy(() => import("@/views/pages/help")) },
      {
        path: "/portfolio",
        children: [
          { path: "/grid", component: lazy(() => import("@/views/pages/portfolio/grid")) },
          { path: "/masonry", component: lazy(() => import("@/views/pages/portfolio/masonry")) },
          { path: "/item", component: lazy(() => import("@/views/pages/portfolio/item")) },
        ],
      },
    ],
  },
  {
    path: "/components",
    children: [
      { path: "/colors", component: lazy(() => import("@/views/components/colors")) },
      { path: "/typography", component: lazy(() => import("@/views/components/typography")) },
      { path: "/solid-bootstrap", component: lazy(() => import("@/views/components/solid-bootstrap")) },
      { path: "/custom", component: lazy(() => import("@/views/components/custom")) },
      { path: "/plugins", component: lazy(() => import("@/views/components/plugins")) },
    ],
  },
];
