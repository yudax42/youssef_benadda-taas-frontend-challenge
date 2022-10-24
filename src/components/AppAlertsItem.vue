<script lang="ts" setup>
import SuccessIcon from "@/components/icons/SuccessIcon.vue";
import ErrorIcon from "@/components/icons/ErrorIcon.vue";
import { defineProps } from "vue";

defineProps<{
  type: string;
}>();
</script>

<template>
  <div class="alert__content" :class="`-${type}`">
    <div class="alert__icon">
      <SuccessIcon v-if="type == 'success'" />
      <ErrorIcon v-if="type == 'error'" />
    </div>
    <div class="alert__message">
      <slot name="message" />
    </div>
  </div>
</template>

<style scoped>
.alert__content {
  @apply flex items-center justify-between p-4 rounded-lg;
}
.alert__icon {
  @apply flex items-center justify-center w-10 h-10 rounded-full;
}
.alert__message {
  @apply flex-grow ml-4;
}

.-success {
  @apply bg-green-100 text-green-800;
}
.-success .app_alert__icon {
  @apply bg-green-500 text-white;
}
.-error {
  @apply bg-red-100 text-red-800;
}
.-error .app_alert__icon {
  @apply bg-red-500 text-white;
}

.app_alert__icon svg {
  @apply w-5 h-5;
}
</style>
