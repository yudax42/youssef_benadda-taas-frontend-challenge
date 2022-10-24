<script lang="ts" async setup>
import RepositoryList from "@/components/RepositoryList.vue";
import RepositoryListItem from "../components/RepositoryListItem.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import useRepoStore from "@/stores/repository";
import AppCard from "@/components/AppCard.vue";

const { currentRepo } = useRepoStore();
</script>

<template>
  <div>
    <TheNavbar class="mb-32" />
    <main>
      <Suspense>
        <div class="repository">
          <AppCard class="repository__list">
            <template #header>
              <h2>Repositories</h2>
            </template>
            <RepositoryList />
          </AppCard>
          <AppCard class="repository__list__item">
            <template #header>
              <h2>Issues</h2>
            </template>
            <RepositoryListItem />
          </AppCard>
        </div>
        <template #fallback>
          <div class="loading">
            <svg viewBox="0 0 24 24">
              <circle cx="18" cy="12" r="0" fill="currentColor">
                <animate
                  attributeName="r"
                  begin=".67"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                />
              </circle>
              <circle cx="12" cy="12" r="0" fill="currentColor">
                <animate
                  attributeName="r"
                  begin=".33"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                />
              </circle>
              <circle cx="6" cy="12" r="0" fill="currentColor">
                <animate
                  attributeName="r"
                  begin="0"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                />
              </circle>
            </svg>
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
  @apply col-span-2  mb-8;
}

.repository__list__item {
  @apply col-span-4;
}
.loading {
  @apply flex justify-center items-center w-full h-full;
}
.loading svg {
  @apply w-32 h-32 text-blue-600;
}
</style>
