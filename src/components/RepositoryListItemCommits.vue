<script lang="ts" setup>
import type { Commits } from "@/types/repository";
import { defineProps, ref } from "vue";
import { useInfiniteScroll } from "@vueuse/core";

const emit = defineEmits(["nextPage"]);
const commitsPage = ref(1);

defineProps<{
  branch: string;
  commits: Commits[];
}>();

const el = ref<HTMLElement>();
useInfiniteScroll(
  el,
  () => {
    commitsPage.value++;
    emit("nextPage", commitsPage.value);
  },
  { distance: 10 }
);
</script>

<template>
  <ul ref="el" class="h-96 overflow-auto mt-5">
    <li
      v-for="commit in commits"
      :key="commit.sha"
      class="text-gray-400 text-xs mb-2 divide-red-600 divide-x-1"
    >
      {{ commit.commit.message }}
    </li>
  </ul>
</template>
