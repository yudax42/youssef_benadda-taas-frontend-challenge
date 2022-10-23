<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  type: string;
}>();
</script>

<template>
  <div class="alert__content" :class="`-${type}`">
    <div class="alert__icon">
      <svg v-if="type == 'success'" viewBox="0 0 1024 1024">
        <path
          fill="currentColor"
          d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
        />
      </svg>
      <svg v-if="type == 'error'" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 17q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm0 5q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-9q.425 0 .713-.288Q13 12.425 13 12V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v4q0 .425.288.712q.287.288.712.288Z"
        />
      </svg>
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
