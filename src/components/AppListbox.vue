<script lang="ts" setup>
import { defineProps, ref } from "vue";

let emit = defineEmits(["update"]);

interface ListBox {
  selected?: string | null;
  options: Record<string, string>[];
}

defineProps<ListBox>();

function selectOption(event: any) {
  emit("update", event.target.value);
}
</script>

<template>
  <select class="app__list__box" @change="selectOption" name="AppListbox">
    <option
      v-for="(option, i) in options"
      :key="i"
      :value="option.value"
      :selected="option.value === selected"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped>
.app__list__box {
  @apply bg-white border border-gray-200 rounded-md shadow-sm py-1 px-2 text-left cursor-pointer sm:text-sm;
}
</style>
