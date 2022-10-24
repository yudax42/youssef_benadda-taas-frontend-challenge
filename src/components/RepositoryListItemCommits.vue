<script lang="ts" setup>
import type { Commits } from "@/types/repository";
import { defineProps, ref } from "vue";
import { useInfiniteScroll } from "@vueuse/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

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

function getRelativeTime(time?: string) {
  return dayjs(time).fromNow();
}

function name(commit: Commits) {
  return (
    commit.committer?.login ||
    commit.committer?.name ||
    commit.commit?.committer?.name ||
    "Unknown"
  );
}
function time(commit: Commits) {
  return getRelativeTime(commit.commit.committer?.date);
}
</script>

<template>
  <ul ref="el" class="commits__list">
    <li v-for="commit in commits" :key="commit.sha" class="commit__item">
      <div class="commit__message">{{ commit.commit.message }}</div>
      <div class="commit__committer">
        <div class="committer__avatar">
          <img
            :src="commit.committer?.avatar_url"
            class="w-4 h-4 rounded-full"
            :alt="commit.committer?.login"
          />
          <span>{{ name(commit) }}</span>
        </div>

        <span>committed {{ time(commit) }}</span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.commits__list {
  @apply h-72 py-3 overflow-auto divide-y;
}
.commit__item {
  @apply py-4 text-sm text-gray-600;
}
.commit__message {
  @apply text-gray-800 text-base mb-3;
}
.commit__committer {
  @apply flex justify-start  items-center;
}
.committer__avatar {
  @apply flex justify-between mr-3 items-center;
}

.committer__avatar img {
  @apply inline-block mr-2;
}
.commit__committer > span {
  @apply text-gray-400;
}
</style>
