<script lang="ts" setup>
import AppCombobox from "./AppCombobox.vue";
import useRepoStore from "@/stores/repository";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const repoStore = useRepoStore();
const { repos, currentRepo } = storeToRefs(repoStore);

const repositoryList = computed(() => {
  return repos.value.map((repo) => {
    return {
      name: repo.name,
      value: repo.id,
    };
  });
});

await repoStore.getRepos();
</script>

<template>
  <section>
    <AppCombobox
      :options="repositoryList"
      :selected-option="currentRepo?.name"
      :filters="[{ name: 'Name', value: 'name' }]"
      selected-filter="name"
      @select="repoStore.setCurrentRepo"
    />
  </section>
</template>
