const mode = import.meta?.env?.PROD ? "production" : "development";

const origin =
  typeof window !== "undefined"
    ? window?.location?.origin
    : "https://youcan.yudax.me";

const config = {
  baseURL: "https://github.com",
  apiBaseURL: "https://api.github.com",
  clientId: "Iv1.56cfb8535f2c1de3",
  redirectUri: `${origin}/oauth/callback`,
  authorizationUrl: function () {
    return `${this.baseURL}/login/oauth/authorize?client_id=${this.clientId}&scope=repo&redirect_uri=${this.redirectUri}`;
  },
  proxy:
    mode === "development"
      ? "http://localhost:1337/api/getToken"
      : "/api/getToken",
};

export default config;
