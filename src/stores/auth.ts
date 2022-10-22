import useWindowPopup from "@/hooks/useWindowPopup";
import { defineStore } from "pinia";
import config from "@/config";
import type { AuthorizationResult } from "@/types/auth";

const useAuthStore = defineStore("auth", {
  state: () => ({ _user: null, _token: null }),
  getters: {
    user: (state) => state._user,
    token: (state) => state._token,
  },
  actions: {
    async authorizeGithub() {
      const authorizationUrl = config.authorizationUrl();
      const popup = useWindowPopup();
      popup.open(authorizationUrl, 600, 600);
      popup.onMessage((event: MessageEvent) => {
        const message: AuthorizationResult = event.data;
        console.log("message", message);
      });
    },
  },
});

export default useAuthStore;
