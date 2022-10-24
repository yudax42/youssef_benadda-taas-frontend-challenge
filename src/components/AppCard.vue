<template>
  <div class="app-card">
    <div class="app-card__header">
      <slot name="header" />
    </div>
    <div class="app-card__body">
      <slot />
    </div>
  </div>
</template>

<style>
.app-card {
  @apply bg-white rounded-lg shadow-sm  w-full;
}
.app-card__header {
  @apply px-4 py-3 text-lg font-bold border-b border-gray-100 text-gray-600;
}
.app-card__body {
  @apply p-4 px-4 overflow-hidden;
}
</style>
