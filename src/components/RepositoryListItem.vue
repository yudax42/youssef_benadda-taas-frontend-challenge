<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
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
</script>

<template>
  <section>
    <AppListBox
      v-if="branches"
      :selected="currentBranch"
      :options="branchesList"
      @update="repoStore.setCurrentBranch"
    />

    <TheRepositoryCommitsList
      v-if="commits.length > 0"
      :branch="currentBranch"
      :commits="commits"
      @next-page="repoStore.getCommits"
    />
  </section>
</template>

<style></style>
