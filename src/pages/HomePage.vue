<script lang="ts" async setup>
import RepositoryList from "@/components/RepositoryList.vue";
import RepositoryListItem from "../components/RepositoryListItem.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import LoadingIcon from "@/components/icons/LoadingIcon.vue";
import useRepoStore from "@/stores/repository";
import AppCard from "@/components/AppCard.vue";
import { storeToRefs } from "pinia";

const repoStore = useRepoStore();
const { currentRepo } = storeToRefs(repoStore);
</script>

<template>
  <div>
    <TheNavbar class="mb-32" />
    <main>
      <Suspense>
        <div class="repository">
          <AppCard class="repository__list">
            <template #header>
              <h2>Search</h2>
            </template>
            <RepositoryList />
          </AppCard>
          <AppCard v-if="currentRepo" class="repository__list__item">
            <template #header>
              <h2>{{ currentRepo.name }}</h2>
            </template>
            <RepositoryListItem />
          </AppCard>
        </div>
        <template #fallback>
          <div class="loading">
            <LoadingIcon />
          </div>
        </template>
      </Suspense>
    </main>
  </div>
</template>

<style scoped>
.repository {
  @apply grid grid-cols-1 md:grid-cols-6 gap-4 items-start;
}

.repository__list {
  @apply col-span-6 md:col-span-2  mb-8;
}

.repository__list__item {
  @apply col-span-6 md:col-span-4;
}
.loading {
  @apply flex justify-center items-center w-full h-full;
}
.loading svg {
  @apply w-32 h-32 text-blue-600;
}
</style>
