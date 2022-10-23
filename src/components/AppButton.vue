<template>
  <button class="app_button" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped>
.app_button {
  @apply px-5 py-2.5 rounded-lg bg-blue-600 text-white text-base hover:bg-opacity-90 transition-all hover:scale-95;
}
</style>
