import getData from "../../src/utils/getData";
import config from "../../src/config";

/**
 * POST /api/getToken
 * get access token from github api
 */
export async function onRequestPost(context: any) {
  const { request, env } = context;
  const { code, redirect_uri } = await getData(request);

  const url = `https://github.com/login/oauth/access_token?client_id=${config.clientId}&client_secret=${env.CLIENT_SECRET}&code=${code}&redirect_uri=${redirect_uri}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    status: data.error ? 400 : res.status,
  });
}
/**
 * OPTIONS /api/getToken
 * handle preflight request
 */
export async function onRequestOptions(context: any) {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
