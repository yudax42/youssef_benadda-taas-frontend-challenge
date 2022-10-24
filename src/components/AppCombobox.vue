<script lang="ts" setup>
import AppListbox from "@/components/AppListbox.vue";
import randomId from "@/utils/randomId";
import { computed, defineProps, ref } from "vue";

interface ComboBox {
  options: Record<string, string>[];
  filters: Record<string, string>[];
  selectedOption?: string;
  selectedFilter: string;
}

const emit = defineEmits(["select"]);
const search = ref("");
const props = defineProps<ComboBox>();

const filtered = computed(() => {
  return props.options.filter((option) => {
    return option[props.selectedFilter]
      .toLocaleLowerCase()
      .includes(search.value.toLocaleLowerCase());
  });
});

function selectOption(value: string) {
  emit("select", value);
  search.value = "";
}
</script>

<template>
  <div class="app__combobox">
    <div class="combobox__search">
      <input
        class="combobox__search__input"
        type="text"
        v-model="search"
        :placeholder="`Start searching by ${selectedFilter}`"
      />
      <AppListbox
        class="combobox__search__filters"
        :options="filters"
        :selected="selectedFilter"
      />
    </div>
    <ul class="combobox__options" v-show="search != ''">
      <li
        class="combobox__option"
        v-for="option in filtered"
        @click="selectOption(option.value)"
        :key="randomId"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.app__combobox {
  @apply w-full;
}
.combobox__search {
  @apply relative flex flex-wrap items-center  justify-between;
}
.combobox__search__input {
  @apply w-full px-4 py-2.5 mt-2 text-base font-medium text-gray-500 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent;
}
.combobox__search__filters {
  @apply absolute right-2 top-4;
}
.combobox__options {
  @apply max-h-72 overflow-y-auto mt-2;
}
.combobox__option {
  @apply py-2 hover:text-white hover:bg-blue-600 transition-colors duration-150 cursor-pointer text-sm ease-in-out px-2 rounded-lg;
}
</style>
