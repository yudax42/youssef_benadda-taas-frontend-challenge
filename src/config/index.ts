const origin =
  typeof window !== "undefined"
    ? window?.location?.origin
    : "https://youcan.yudax.me";

const config = {
  clientId: "Iv1.56cfb8535f2c1de3",
  baseURL: "https://github.com",
  apiBaseURL: "https://api.github.com",
  redirectUri: `${origin}/oauth/callback`,
  proxy:
    origin === "https://youcan.yudax.me"
      ? "/api/getToken"
      : "http://localhost:1337/api/getToken",
  authorizationUrl: function () {
    return `${this.baseURL}/login/oauth/authorize?client_id=${this.clientId}&scope=repo&redirect_uri=${this.redirectUri}`;
  },
};

export default config;
