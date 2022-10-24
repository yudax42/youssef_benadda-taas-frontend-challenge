<script lang="ts" setup>
import AppButton from "@/components/AppButton.vue";
import useAuthStore from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <main class="auth">
    <div class="auth__content">
      <img class="auth__logo" src="/logo.png" alt="YouGit" />
      <h1 class="auth__heading">YouGit</h1>
      <AppButton @click="authStore.authorizeGithub"
        >Authorize my Github account</AppButton
      >
    </div>
  </main>
</template>

<style>
.auth {
  @apply w-full min-h-screen flex items-center justify-center;
}
.auth .auth__content {
  @apply bg-white w-full max-w-sm shadow-lg rounded-lg p-12 flex-row justify-center items-center text-center;
}
.auth .auth__logo {
  @apply w-20 h-20 inline-block;
}
.auth .auth__heading {
  @apply text-4xl font-bold text-gray-800  mb-8;
}
</style>
