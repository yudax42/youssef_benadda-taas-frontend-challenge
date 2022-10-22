import useWindowPopup from "@/hooks/useWindowPopup";
import { defineStore } from "pinia";
import config from "@/config";
import type { AuthorizationResult, AuthState } from "@/types/auth";

const useAuthStore = defineStore("auth", {
  state: () => ({ _user: null, _token: null } as AuthState),
  getters: {
    user: (state) => state._user,
    token: (state) => state._token,
  },
  actions: {
    setToken(token: string) {
      this._token = token;
    },
    async authorizeGithub() {
      const authorizationUrl = config.authorizationUrl();
      const popup = useWindowPopup();
      popup.open(authorizationUrl, 600, 600);
      popup.onMessage(async (event: MessageEvent) => {
        const message: AuthorizationResult = event.data;
        console.log("message", message);
        if (message.type === "authorization_success") {
          this.setToken(String(message.token));
        } else {
          // TODO: Handle error
        }
      });
    },
  },
});

export default useAuthStore;
