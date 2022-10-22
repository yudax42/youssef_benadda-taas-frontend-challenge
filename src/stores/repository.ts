import api from "@/services/api";
import type Repository from "@/types/repository";
import { normalizeRepos } from "@/utils/normalizer";
import { repoSerializer } from "@/utils/serializer";
import { defineStore } from "pinia";

const useRepoStore = defineStore("repo", {
  state: () => ({
    _repos: {} as Record<string, Repository>,
    _currentRepo: `` as string,
    _currentBranch: `` as string,
  }),

  getters: {
    repos: (state) => Object.values(state._repos),
    currentRepo: (state) => state._repos[state._currentRepo],
    currentBranch: (state) => state._currentBranch,
  },

  actions: {
    async getRepos() {
      const repos: Repository[] = await api.getRepos();
      const seralizedRepos = repos.map(repoSerializer);
      this._repos = normalizeRepos(seralizedRepos);
    },
    setCurrentRepo(id: string) {
      this._currentRepo = id;
      this._currentBranch = this._repos[id].default_branch;
    },
  },
});

export default useRepoStore;
