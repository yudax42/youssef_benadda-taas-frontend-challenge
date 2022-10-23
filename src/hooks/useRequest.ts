import config from "@/config";
import useAuthStore from "@/stores/auth";
import type RequestData from "@/types/request";

const headers: any = {
  "Content-Type": "application/json",
  Accept: "application/vnd.github+json",
};

async function useRequest<T>(data: RequestData): Promise<T> {
  const auth = useAuthStore();
  const { path, method = "GET", data: body } = data;

  if (auth.token) {
    headers.Authorization = `Bearer ${auth.token}`;
  }
  const res = await fetch(`${config.apiBaseURL}${path}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  if (res.ok) return (await res.json()) as T;

  // TODO: Handle errors , Show popup
  throw new Error(res.statusText);
}

export default useRequest;
