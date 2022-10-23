<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import useRepoStore from "@/stores/repository";

const repoStore = useRepoStore();
let { repos, currentRepo, branches, commits, currentBranch } =
  storeToRefs(repoStore);

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
      <div>
        <h4 class="text-xl font-bold">Branches</h4>
        <ul>
          <li v-for="branch in branches" :key="branch.name">
            {{ branch.name }}
          </li>
        </ul>

        <h4 class="text-xl font-bold">Commits</h4>
        <ul>
          <li v-for="commit in commits" :key="commit.sha">
            {{ commit.sha }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
