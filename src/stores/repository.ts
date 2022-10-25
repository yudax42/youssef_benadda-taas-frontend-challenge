import api from "@/services/api";
import type { Repository, Commits, Branch } from "@/types/repository";
import { normalize } from "@/utils/normalizer";
import Factory from "@/utils/factory";
import { defineStore } from "pinia";

const factory = new Factory();

const useRepoStore = defineStore("repo", {
  state: () => ({
    _repos: {} as Record<string, Repository>,
    _branches: {} as Record<string, Branch>,
    _commits: {} as Record<string, Commits>,
    _currentRepo: `` as string,
    _currentBranch: `` as string,
  }),

  getters: {
    repos: (state) => Object.values(state._repos),
    branches: (state) => Object.values(state._branches),
    commits: (state) => Object.values(state._commits),
    currentRepo: (state) => state._repos[state._currentRepo],
    currentBranch: (state) => state._currentBranch,
  },

  actions: {
    async getRepos() {
      const data: Repository[] = await api.getRepos();
      const repositories = data.map((repo) =>
        factory.create("repository", repo)
      );
      this._repos = normalize(repositories, "id");
    },

    async getBranches() {
      const data: Branch[] = await api.getBranches(
        this.currentRepo.owner.login,
        this.currentRepo.name
      );
      const branches = data.map((branch) => factory.create("branch", branch));
      this._branches = normalize(branches, "commit.sha");
      this._currentBranch = branches[0].commit.sha;
    },

    async getCommits(page: number = 1, master?: boolean) {
      const data: Commits[] = await api.getCommits(
        this.currentRepo.name,
        this.currentRepo.owner.login,
        page,
        master ? "" : this._currentBranch
      );
      const commits = data.map((commit) => factory.create("commit", commit));
      this._commits = {
        ...this._commits,
        ...normalize(commits, "sha"),
      };
    },

    resetRepository() {
      this._branches = {};
      this._commits = {};
      this._currentBranch = "";
    },

    setCurrentRepo(id: string) {
      this.resetRepository();
      this._currentRepo = id;
      this.getBranches();
      this.getCommits(1, true);
    },

    setCurrentBranch(sha: string) {
      this._currentBranch = sha;
      this._commits = {};
      this.getCommits();
    },
  },
});

export default useRepoStore;
