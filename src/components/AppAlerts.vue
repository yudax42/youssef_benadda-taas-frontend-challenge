<script lang="ts" setup>
import useAlerts from "@/hooks/useAlerts";
import AppAlertsItem from "./AppAlertsItem.vue";

const { alerts } = useAlerts;
console.log(alerts.value);
</script>

<template>
  <div class="alerts">
    <div class="alerts__container">
      <AppAlertsItem v-for="(alert, i) in alerts" :key="i" :type="alert.type">
        <template #message>
          <span v-html="alert.message" />
        </template>
      </AppAlertsItem>
    </div>
  </div>
</template>

<style scoped>
.alerts {
  @apply fixed top-5 left-0 right-0 mx-auto  w-full z-50 max-w-sm;
}
.alerts__container {
  @apply flex flex-col items-center justify-center w-full h-full pointer-events-auto;
}
</style>
