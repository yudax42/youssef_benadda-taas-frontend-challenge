<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="max-w-lg mt-32 mx-auto">
    <RouterView />

    <span
      class="text-xs bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full fixed top-5 right-5"
      >authenticated layout</span
    >
  </main>
</template>
