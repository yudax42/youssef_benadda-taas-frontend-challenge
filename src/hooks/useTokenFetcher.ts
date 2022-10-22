import { useRouteQuery } from "@vueuse/router";
import type { AuthorizationResult } from "@/types/auth";

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
  // TODO: exchange code for token

  return {
    type: "authorization_success",
    token: code.value,
  };
}

export default useTokenFetcher;
