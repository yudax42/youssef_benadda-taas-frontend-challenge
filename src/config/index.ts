const mode = import.meta?.env?.MODE || "development";

const config = {
  baseURL: "https://github.com",
  apiBaseURL: "https://api.github.com",
  clientId: "Iv1.56cfb8535f2c1de3",
  redirectUri: "http://localhost:5173/oauth/callback",
  authorizationUrl: function () {
    return `${this.baseURL}/login/oauth/authorize?client_id=${this.clientId}&scope=repo&redirect_uri=${this.redirectUri}`;
  },
  proxy:
    mode === "development"
      ? "http://localhost:1337/api/getToken"
      : "/api/getToken",
};

export default config;
