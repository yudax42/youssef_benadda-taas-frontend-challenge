<script lang="ts" setup>
import AppButton from "@/components/AppButton.vue";
import useAuthStore from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <main>
    <h1 class="text-xl">Auth Page</h1>
    <AppButton @click="authStore.authorizeGithub"
      >Authorize my Github account</AppButton
    >
  </main>
</template>
