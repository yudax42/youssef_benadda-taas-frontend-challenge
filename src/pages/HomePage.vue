<script lang="ts" async setup>
import RepositoryList from "@/components/RepositoryList.vue";
import RepositoryListItem from "../components/RepositoryListItem.vue";
import TheNavbar from "@/components/TheNavbar.vue";
</script>

<template>
  <div>
    <TheNavbar class="mb-32" />
    <main>
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
  </div>
</template>
