import type { Repository, Commits, Branch } from "@/types/repository";
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
      path: "/user/repos?per_page=100",
    });
  },
  getBranches(owner: string, repo: string): Promise<Branch[]> {
    return request({
      path: `/repos/${owner}/${repo}/branches`,
    });
  },
  getCommits(
    repo: string,
    owner: string,
    page: number,
    sha: string
  ): Promise<Commits[]> {
    return request({
      path: `/repos/${owner}/${repo}/commits?page=${page}&sha=${sha}`,
    });
  },
};

export default api;
