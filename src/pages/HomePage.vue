<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import useRepoStore from "@/stores/repository";

const repoStore = useRepoStore();
let { repos, currentRepo } = storeToRefs(repoStore);

onBeforeMount(async () => {
  await repoStore.getRepos();
});
</script>

<template>
  <main>
    <h1 class="text-xl">Home Page</h1>
    <div class="grid grid-cols-2 gap-2">
      <ul>
        <li
          v-for="repo in repos"
          :key="repo.id"
          @click="repoStore.setCurrentRepo(repo.id)"
        >
          {{ repo.name }}
        </li>
      </ul>

      <span>{{ currentRepo }}</span>
    </div>
  </main>
</template>
