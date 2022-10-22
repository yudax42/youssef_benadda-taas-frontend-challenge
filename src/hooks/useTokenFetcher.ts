import { useRouteQuery } from "@vueuse/router";
import type { AuthorizationResult } from "@/types/auth";
import getGithubAccessToken from "@/services/proxy";
import config from "@/config";

/**
 * get code from url query and exchange it for access token
 *@returns {AuthorizationResult} - The authorization result
 */
async function useTokenFetcher(): Promise<AuthorizationResult> {
  const code = useRouteQuery("code");
  const error = useRouteQuery("error");
  const errorDescription = useRouteQuery("error_description");

  if (error.value) {
    return {
      type: "authorization_error",
      error: error.value,
      errorDescription: errorDescription.value,
    };
  }
  // exchange code for token
  const data = await getGithubAccessToken(
    String(code.value),
    config.redirectUri
  );

  return {
    type: "authorization_success",
    token: data.access_token,
  };
}

export default useTokenFetcher;
