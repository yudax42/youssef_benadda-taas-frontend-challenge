<script setup lang="ts">
import { RouterView } from "vue-router";
import AppAlerts from "./components/AppAlerts.vue";
</script>

<template>
  <div>
    <RouterView />
    <AppAlerts />
  </div>
</template>
