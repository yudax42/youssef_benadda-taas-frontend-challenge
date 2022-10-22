<script lang="ts" setup>
import AppButton from "@/components/AppButton.vue";

const authorizeGithub = () => {
  console.log("...");
};
</script>

<template>
  <main>
    <h1 class="text-xl">Auth Page</h1>
    <AppButton @click="authorizeGithub">Authorize my Github account</AppButton>
  </main>
</template>
