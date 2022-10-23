<script lang="ts" async setup>
import RepositoryList from "@/components/RepositoryList.vue";
import RepositoryListItem from "../components/RepositoryListItem.vue";
</script>

<template>
  <main>
    <h1 class="text-xl">Home Page</h1>
    <Suspense>
      <div class="grid grid-cols-2 gap-2">
        <RepositoryList />
        <RepositoryListItem />
      </div>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </main>
</template>
