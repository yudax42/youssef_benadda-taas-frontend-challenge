<script lang="ts" setup>
import { onBeforeMount } from "vue";
import useWindowPopup from "@/composables/useWindowPopup";
import useTokenFetcher from "@/composables/useTokenFetcher";
import type { AuthorizationResult } from "@/types/auth";

const { sendMessage, close } = useWindowPopup();

onBeforeMount(async () => {
  const authorizationResult: AuthorizationResult = await useTokenFetcher();
  sendMessage(authorizationResult);
  close();
});
</script>

<template>
  <div>
    <h1>Authorizing...</h1>
  </div>
</template>
