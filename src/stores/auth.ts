import useWindowPopup from "@/hooks/useWindowPopup";
import { defineStore } from "pinia";
import config from "@/config";
import type { AuthorizationResult, AuthState } from "@/types/auth";
import router from "@/router";
import { userSerializer } from "@/utils/serializer";
import type User from "@/types/user";
import api from "@/services/api";

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
      this._user = userSerializer(user);
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
          await this.setUser();
          router.push("/");
        } else {
          // TODO: Handle error
        }
      });
    },
  },
});

export default useAuthStore;
