<script lang="ts" async setup>
import { onBeforeMount, computed } from "vue";
import { storeToRefs } from "pinia";
import useRepoStore from "@/stores/repository";
import AppListBox from "@/components/AppListbox.vue";

const repoStore = useRepoStore();
let { repos, branches, commits, currentBranch } = storeToRefs(repoStore);

onBeforeMount(async () => {
  await repoStore.getRepos();
});

const selectBranch = (branch: string) => {
  console.log("select branch", branch);
  repoStore.setCurrentBranch(branch);
};

const branchesList = computed(() => {
  return branches.value.map((branch) => {
    return {
      name: branch.name,
      value: branch.commit.sha,
    };
  });
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
        <AppListBox
          v-if="branches"
          :selected="currentBranch"
          :options="branchesList"
          @update="selectBranch"
        />

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
