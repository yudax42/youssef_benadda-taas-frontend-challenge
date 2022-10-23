<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useRepoStore from "@/stores/repository";
const repoStore = useRepoStore();
let { repos } = storeToRefs(repoStore);
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
