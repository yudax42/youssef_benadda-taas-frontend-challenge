<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useRepoStore from "@/stores/repository";
import AppCombobox from "./AppCombobox.vue";
import { computed } from "vue";

const repoStore = useRepoStore();
const { repos, currentRepo } = storeToRefs(repoStore);
await repoStore.getRepos();

const repositoryList = computed(() => {
  return repos.value.map((repo) => {
    return {
      name: repo.name,
      value: repo.id,
    };
  });
});
</script>

<template>
  <div>
    <h3>Search a repository</h3>
    <AppCombobox
      :options="repositoryList"
      :selected-option="currentRepo?.name"
      :filters="[{ name: 'Name', value: 'name' }]"
      selected-filter="name"
      @select="repoStore.setCurrentRepo"
    />
  </div>
</template>
