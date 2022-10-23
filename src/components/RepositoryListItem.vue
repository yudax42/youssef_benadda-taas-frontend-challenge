<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { onBeforeMount, computed } from "vue";
import useRepoStore from "@/stores/repository";
import type { Branch } from "@/types/repository";
import AppListBox from "@/components/AppListbox.vue";
import TheRepositoryCommitsList from "./RepositoryListItemCommits.vue";

const repoStore = useRepoStore();
let { branches, commits, currentBranch } = storeToRefs(repoStore);

const branchesList = computed(() => {
  return branches.value.map((branch: Branch) => {
    return {
      name: branch.name,
      value: branch.commit.sha,
    };
  });
});

await repoStore.getRepos();
</script>

<template>
  <div>
    <h4 class="text-xl font-bold">Branches</h4>
    <AppListBox
      v-if="branches"
      :selected="currentBranch"
      :options="branchesList"
      @update="repoStore.setCurrentBranch"
    />

    <h4 class="text-xl font-bold">Commits</h4>
    <TheRepositoryCommitsList :commits="commits" />
  </div>
</template>
