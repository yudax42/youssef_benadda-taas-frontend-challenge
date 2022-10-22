import useAuthStore from "@/stores/auth";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { storeToRefs } from "pinia";

function useAuthentication() {
  return {
    async beforeEnter(
      before: RouteLocationNormalized,
      after: RouteLocationNormalized,
      next: NavigationGuardNext
    ) {
      const authStore = useAuthStore();

      if (authStore.isAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    },
  };
}

export default useAuthentication;
