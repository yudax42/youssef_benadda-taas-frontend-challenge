<script lang="ts" setup>
import type { Commits } from "@/types/repository";
import { defineProps } from "vue";

defineProps<{
  commits: Commits[];
}>();
</script>

<template>
  <ul>
    <li v-for="commit in commits" :key="commit.sha">
      {{ commit.sha }}
    </li>
  </ul>
</template>
