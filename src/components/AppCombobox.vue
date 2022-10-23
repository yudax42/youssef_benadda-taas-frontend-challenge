<script lang="ts" setup>
import { computed, defineProps, ref } from "vue";
import AppListbox from "@/components/AppListbox.vue";

const emit = defineEmits(["select"]);

const search = ref("");
interface ComboBox {
  options: Record<string, string>[];
  filters: Record<string, string>[];
  selectedOption?: string;
  selectedFilter: string;
}

const props = defineProps<ComboBox>();

const filtered = computed(() => {
  return props.options.filter((option) => {
    return option[props.selectedFilter].includes(search.value);
  });
});

const randomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const selectOption = (value: string) => {
  emit("select", value);
  search.value = "";
};
</script>

<template>
  <div>
    <div class="flex items-center">
      <input
        type="text"
        v-model="search"
        :placeholder="`Start searching by ${selectedFilter}`"
      />
      <AppListbox :options="filters" :selected="selectedFilter" />
    </div>
    <ul v-show="search != ''">
      <li
        v-for="option in filtered"
        @click="selectOption(option.value)"
        :key="randomId"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>
