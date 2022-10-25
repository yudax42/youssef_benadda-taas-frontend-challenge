import useWindowPopup from "@/composables/useWindowPopup";
import { defineStore } from "pinia";
import config from "@/config";
import type { AuthorizationResult, AuthState } from "@/types/auth";
import router from "@/router";
import Factory from "@/utils/factory";
import type User from "@/types/user";
import api from "@/services/api";
import useAlert from "@/composables/useAlerts";

const factory = new Factory();
const { addAlert } = useAlert;
const useAuthStore = defineStore("auth", {
  state: () => ({ _user: null, _token: null } as AuthState),
  getters: {
    user: (state) => state._user,
    token: (state) => state._token,
    isAuthenticated: (state) => !!state._token,
  },
  actions: {
    setToken(token: string) {
      this._token = token;
    },

    async setUser() {
      const user: User = await api.getUser();
      this._user = factory.create("user", user);
    },

    async authorizeGithub() {
      const authorizationUrl = config.authorizationUrl();
      const popup = useWindowPopup();
      popup.open(authorizationUrl, 600, 600);
      popup.onMessage((event: MessageEvent) => {
        const message: AuthorizationResult = event.data;

        if (message.type === "authorization_success") {
          this.setToken(String(message.token));
          this.setUser();
          addAlert({
            message: "Your Github account was successfully authorized",
            type: "success",
          });
          router.push("/");
        } else {
          addAlert({
            message: String(message.errorDescription),
            type: "error",
          });
        }
      });
    },
  },
});

export default useAuthStore;
