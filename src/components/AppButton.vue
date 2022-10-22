<script lang="ts" setup></script>

<template>
  <button
    class="px-3 py-1.5 rounded bg-black text-white text-sm"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
