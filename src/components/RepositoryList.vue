<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useRepoStore from "@/stores/repository";

const repoStore = useRepoStore();
const { repos } = storeToRefs(repoStore);
await repoStore.getRepos();
</script>

<template>
  <ul>
    <li
      v-for="repo in repos"
      :key="repo.id"
      @click="repoStore.setCurrentRepo(repo.id)"
    >
      {{ repo.name }}
    </li>
  </ul>
</template>
