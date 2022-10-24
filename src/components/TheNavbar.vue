<script lang="ts" setup>
import { RouterLink } from "vue-router";
import useAuthStore from "@/stores/auth";
import { storeToRefs } from "pinia";

const store = useAuthStore();
let { user } = storeToRefs(store);
</script>

<template>
  <nav class="nav">
    <div class="nav__logo">
      <RouterLink to="/">YouGit</RouterLink>
    </div>
    <div class="nav__user">
      <span class="nav__user__name">{{ user?.name }}</span>
      <img
        class="nav__user__avatar"
        :src="user?.avatar_url"
        alt="user avatar"
      />
    </div>
  </nav>
</template>

<style scoped>
.nav {
  @apply flex justify-between items-center  rounded-lg  py-4 relative top-0;
}
.nav .nav__logo {
  @apply text-xl font-bold text-gray-800;
}
.nav .nav__user {
  @apply flex items-center;
}
.nav .nav__user__name {
  @apply text-gray-600 mr-2;
}
.nav__user .nav__user__avatar {
  @apply w-8 h-8 rounded-full ml-2;
}
</style>
