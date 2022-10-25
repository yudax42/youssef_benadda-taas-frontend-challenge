const devProxy = "http://localhost:1337/api/getToken";
let origin: string | null = null;

// to fix window is not defined error in cf worker
if (typeof window !== "undefined") {
  origin = window?.location?.origin;
}

function proxyBaseUrl() {
  return origin?.includes("localhost") ? devProxy : "/api/getToken";
}

const config = {
  clientId: "Iv1.56cfb8535f2c1de3",
  baseURL: "https://github.com",
  apiBaseURL: "https://api.github.com",
  redirectUri: `${origin}/oauth/callback`,
  proxy: proxyBaseUrl(),
  authorizationUrl: function () {
    return `${this.baseURL}/login/oauth/authorize?client_id=${this.clientId}&scope=repo&redirect_uri=${this.redirectUri}`;
  },
};

export default config;
