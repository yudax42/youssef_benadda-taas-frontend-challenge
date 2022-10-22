import type Repository from "@/types/repository";

function normalizeRepos(repos: Repository[]): Record<string, Repository> {
  return repos.reduce((acc: Record<string, Repository>, repo: Repository) => {
    acc[repo.id] = repo;
    return acc;
  }, {});
}

export { normalizeRepos };
