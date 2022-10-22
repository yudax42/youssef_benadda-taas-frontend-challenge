import { defineStore } from "pinia";

const useAuthStore = defineStore("auth", {
  state: () => ({ _user: null, _token: null }),
  getters: {
    user: (state) => state._user,
    token: (state) => state._token,
  },
  actions: {
    async authorizeGithub() {
      // TODO: implement
      console.log("authorizeGithub");
    },
  },
});

export default useAuthStore;
