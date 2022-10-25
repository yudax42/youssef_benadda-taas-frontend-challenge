// Layouts
import defaultLayout from "@/layouts/default.vue";
import authenticatedLayout from "@/layouts/authenticated.vue";

// Pages
import AuthPage from "@/pages/AuthPage.vue";
import HomePage from "@/pages/HomePage.vue";
import OauthPage from "@/pages/OauthPage.vue";

import useAuthentication from "@/composables/routes/auth";

const routes = [
  {
    path: "/",
    component: authenticatedLayout,
    children: [
      {
        path: "",
        component: HomePage,
        meta: {
          title: "Home",
        },
      },
    ],
    ...useAuthentication(),
  },
  {
    path: "/auth",
    component: defaultLayout,
    children: [
      {
        path: "",
        component: AuthPage,
      },
    ],
  },
  {
    path: "/oauth",
    component: defaultLayout,
    children: [
      {
        path: "callback",
        component: OauthPage,
      },
    ],
  },
];

export default routes;
