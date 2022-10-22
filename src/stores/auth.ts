import useWindowPopup from "@/hooks/useWindowPopup";
import { defineStore } from "pinia";
import config from "@/config";

const useAuthStore = defineStore("auth", {
  state: () => ({ _user: null, _token: null }),
  getters: {
    user: (state) => state._user,
    token: (state) => state._token,
  },
  actions: {
    async authorizeGithub() {
      const authorizationUrl = config.authorizationUrl();
      const windowPopup = useWindowPopup(authorizationUrl, 600, 600);
      windowPopup.open();
      windowPopup.channel.onmessage = (event) => {
        // Todo: handle the event
      };
    },
  },
});

export default useAuthStore;
