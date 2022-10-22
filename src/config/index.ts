const config = {
  baseURL: "https://github.com",
  apiBaseURL: "https://api.github.com",
  clientId: "Iv1.56cfb8535f2c1de3",
  redirectUri: "http://localhost:5173/oauth/callback",
  authorizationUrl: function () {
    return `${this.baseURL}/login/oauth/authorize?client_id=${this.clientId}&scope=repo&redirect_uri=${this.redirectUri}`;
  },
};

export default config;
