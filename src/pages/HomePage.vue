<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import useRepoStore from "@/stores/repository";

const repoStore = useRepoStore();
let { repos } = storeToRefs(repoStore);

onBeforeMount(async () => {
  await repoStore.getRepos();
});
</script>

<template>
  <main>
    <h1 class="text-xl">Home Page</h1>
    <ul>
      <li v-for="repo in repos" :key="repo.id">
        {{ repo.name }}
      </li>
    </ul>
  </main>
</template>
