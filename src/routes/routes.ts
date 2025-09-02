import { lazy } from "solid-js";

export const routes = [
  // --- Core Public Pages ---
  {
    path: "/",
    component: lazy(() => import("@/views/home/index.jsx")),
  },
  {
    path: "/blog",
    component: lazy(() => import("@/views/pages/blog/index.jsx")),
  },
  {
    path: "/blog/:slug", // A dynamic route for individual posts
    component: lazy(() => import("@/views/pages/blog-post/index.jsx")),
  },
  // TODO: Add the route for the 'About' page once it's created.
  // {
  //   path: "/about",
  //   component: lazy(() => import("@/views/pages/about/index.jsx")),
  // },

  // --- Private Admin & Auth Routes ---
  {
    path: "/auth/login",
    component: lazy(() => import("@/views/auth/login/index.jsx")),
  },
  {
    path: "/auth/forgot-password",
    component: lazy(() => import("@/views/auth/forgot-password/index.jsx")),
  },
  {
    path: "/admin",
    children: [
      { path: "/dashboard", component: lazy(() => import("@/views/admin/dashboard/index.jsx")) },
      { path: "/settings", component: lazy(() => import("@/views/admin/settings/index.jsx")) },
    ],
  },
];