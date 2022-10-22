import config from "@/config";

async function getGithubAccessToken(code: string, redirect_uri: string) {
  try {
    const res = await fetch(config.proxy, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        redirect_uri,
      }),
    });

    if (!res.ok) {
      // TODO: handle error
      throw new Error("Failed to get access token");
    }
    return await res.json();
  } catch (error) {
    // TODO: handle error
    console.log(error);
  }
}

export default getGithubAccessToken;
