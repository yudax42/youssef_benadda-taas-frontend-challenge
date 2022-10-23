import api from "@/services/api";
import type { Repository, Commits, Branch } from "@/types/repository";
import { normalize } from "@/utils/normalizer";
import {
  branchSerializer,
  commitSerializer,
  repoSerializer,
} from "@/utils/serializer";
import { defineStore } from "pinia";

const useRepoStore = defineStore("repo", {
  state: () => ({
    _repos: {} as Record<string, Repository>,
    _currentRepo: `` as string,
    _currentBranch: `` as string,
    _branches: {} as Record<string, Branch>,
    _commits: {} as Record<string, Commits>,
  }),

  getters: {
    repos: (state) => Object.values(state._repos),
    currentRepo: (state) => state._repos[state._currentRepo],
    currentBranch: (state) => state._currentBranch,
    branches: (state) => Object.values(state._branches),
    commits: (state) => Object.values(state._commits),
  },

  actions: {
    async getRepos() {
      const repos: Repository[] = await api.getRepos();
      const seralizedRepos = repos.map(repoSerializer);
      this._repos = normalize(seralizedRepos, "id");
    },
    async getBranches() {
      const branches = await api.getBranches(
        this.currentRepo.owner.login,
        this.currentRepo.name
      );
      const serializedBranches = branches.map(branchSerializer);
      this._branches = normalize(serializedBranches, "commit.sha");
      this._currentBranch = branches[0].commit.sha;
    },

    async getCommits(page: number = 1, master?: boolean) {
      const commits = await api.getCommits(
        this.currentRepo.name,
        this.currentRepo.owner.login,
        page,
        master ? "" : this._currentBranch
      );
      const serializedCommits = commits.map(commitSerializer);
      this._commits = normalize(serializedCommits, "sha");
    },
    setCurrentRepo(id: string) {
      this._currentRepo = id;
      this.getBranches();
      this.getCommits(1, true);
    },
    setCurrentBranch(sha: string) {
      this._currentBranch = sha;
      this.getCommits();
    },
  },
});

export default useRepoStore;
