<script lang="ts" setup>
import { defineProps, ref } from "vue";

let emit = defineEmits(["update"]);

interface ListBox {
  selected: string | null;
  options: Record<string, string>[];
}

defineProps<ListBox>();

function selectOption(event: any) {
  emit("update", event.target.value);
}
</script>

<template>
  <div>
    <select @change="selectOption" name="" id="">
      <option
        v-for="(option, i) in options"
        :key="i"
        :value="option.value"
        :selected="option.value === selected"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
