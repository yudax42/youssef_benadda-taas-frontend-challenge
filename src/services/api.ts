import type Repository from "@/types/repository";
import type User from "@/types/user";
import request from "@/hooks/useRequest";

const api = {
  getUser(): Promise<User> {
    return request({
      path: "/user",
    });
  },
  getRepos(): Promise<Repository[]> {
    return request({
      path: "/user/repos",
    });
  },
};

export default api;
