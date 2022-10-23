import getData from "../../src/utils/getData";
import config from "../../src/config";

const _headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "OPTIONS,POST",
};

function reply(data: any, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: _headers,
  });
}

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

  return reply(data, data.error ? 400 : 200);
}

/**
 * OPTIONS /api/getToken
 * handle preflight request
 */
export async function onRequestOptions(context: any) {
  return reply(null, 200);
}
