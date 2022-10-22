// Layouts
import defaultLayout from "@/layouts/default.vue";
import authenticatedLayout from "@/layouts/authenticated.vue";

// Pages
import AuthPage from "@/pages/AuthPage.vue";
import HomePage from "@/pages/HomePage.vue";

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
];

export default routes;
